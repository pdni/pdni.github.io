# 踩坑记录 — 酒店分销CRM Demo

## 1. Excel 文件读取

### 问题
`.xlsx` 文件用 `pandas.read_excel(engine='openpyxl')` 报错：
```
ValueError: Colors must be aRGB hex values
```

### 原因
Excel 文件包含无效的颜色样式 XML，openpyxl 严格校验导致失败。

### 解决
安装 `python-calamine` 作为替代引擎：
```bash
pip install python-calamine
```
```python
df = pd.read_excel(file_path, engine='calamine')
```

---

## 2. GitHub Pages 部署（网络限制）

### 问题
当前运行环境（agent sandbox）无法通过 HTTPS (443) 连接 `github.com`：
```
fatal: unable to access 'https://github.com/...': Failed to connect to github.com port 443
```

### 诊断
- `ping github.com` ✅ 正常
- `nslookup github.com` ✅ 正常
- `git push` / `curl -I https://github.com` ❌ TCP 443 超时

### 结论
这是环境层面的出站 HTTPS 限制，agent 内部无法解决。

### 解决
在 **用户本地终端** 手动推送：
```bash
cd /Users/peidong/个人项目/DataWorking/agent_space/crm-demo
git push origin deploy:main
```

> 注意： commit 在 agent 中已做好，本地只需 push。

---

## 3. Git 工作流（GitHub Pages + 子目录部署）

### 场景
把 Demo 推送到 `username.github.io` 仓库的 `/hotel-crm/` 子目录，不覆盖根目录现有内容。

### 步骤
```bash
# 1. 在现有仓库检出远程分支
git fetch origin main
git checkout -b deploy origin/main

# 2. 创建子目录并放入文件
mkdir -p hotel-crm
cp index.html data.js app.js README.md hotel-crm/
git add hotel-crm/
git commit -m "feat: add demo"

# 3. 推送
git push origin deploy:main
```

### 坑点
- 不能直接 `git push -f`，会覆盖远程原有内容
- 必须先 `fetch` 再 `checkout` 远程分支，才能把文件放到子目录而非根目录
- 原始仓库可能已有 `index.html` / `README.md`，注意别覆盖

---

## 4. SPA 路由 + 相对路径

### 原则
纯静态 SPA 部署到 GitHub Pages 子目录时，所有资源引用用 **相对路径**：
```html
<script src="data.js"></script>
<script src="app.js"></script>
```
这样在 `username.github.io/repo-name/` 下也能正常工作。

---

## 5. 矩阵表 → 透视表转换逻辑

### 场景
原始 Excel 中供应商/渠道名称作为**列名**，需要转为**字段值**。

### 示例（供应商上线记录）
原始宽表：
```
日期 | 类型 | EPS | HB | WB | ...
```

转换后长表：
```javascript
const mappings = [
  {key: 'eps', name: 'EPS'},
  {key: 'hb', name: 'HB'},
  {key: 'wb', name: 'WB'},
  ...
];

const pivotRecords = rawRecords.flatMap(r => 
  mappings
    .filter(m => r[m.key] !== null && r[m.key] !== undefined)
    .map(m => ({
      date: r.date,
      type: r.type,
      targetName: m.name,   // 供应商名称作为字段值
      value: r[m.key]
    }))
);
```

### 下钻上卷交互
折叠状态（上卷）：显示渠道汇总（名称 + 平均 BW / 供应商数量）  
展开状态（下钻）：显示该渠道下各供应商明细表格

```javascript
function toggleBwGroup(header) {
  const group = header.parentElement;
  const details = header.nextElementSibling;
  const icon = header.querySelector('.bw-toggle i');
  const isExpanded = group.getAttribute('data-expanded') === 'true';
  
  if (isExpanded) {
    details.style.display = 'none';
    icon.className = 'fas fa-chevron-right';
    group.setAttribute('data-expanded', 'false');
  } else {
    details.style.display = '';
    icon.className = 'fas fa-chevron-down';
    group.setAttribute('data-expanded', 'true');
  }
}
```

---

## 6. 数据驱动的互售标记

### 判断逻辑
- **供应商**：`resourceType === '直采+三方'` 或 `type === '批发商'` → 互售
- **渠道**：渠道名称同时出现在供应商列表中（如"美团"） → 互售

### 辅助函数
```javascript
function getMutualSaleBadge(isMutual) {
  return isMutual
    ? '<span class="badge bg-purple-100 text-purple-700"><i class="fas fa-exchange-alt mr-1"></i>互售</span>'
    : '<span class="badge bg-gray-100 text-gray-600">非互售</span>';
}
```

---

## 7. 文件修改最佳实践

| 场景 | 推荐方式 |
|------|---------|
| 简单字符串替换 | `StrReplaceFile` |
| 多行/复杂替换 | Python 脚本读取 → 替换 → 写入 |
| 大段代码重写 | 直接 `WriteFile` 或 Python 拼接 |

---

## 8. 浏览器测试技巧

```bash
# 启动本地服务器
cd hotel-crm && python3 -m http.server 8080

# Playwright 导航
browser_navigate(url="http://localhost:8080/")

# 滚动页面
browser_evaluate(function="() => { window.scrollTo(0, document.body.scrollHeight); }")

# 点击元素（避免 strict mode violation）
browser_click(target="[data-page='records']")
```
