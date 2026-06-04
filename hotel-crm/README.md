# 酒店分销CRM系统 Demo

基于供应商/渠道资源上线及日常管理数据构建的CRM系统演示。

## 在线预览

👉 [https://your-username.github.io/hotel-distribution-crm/](https://your-username.github.io/hotel-distribution-crm/)

## 功能模块

| 模块 | 说明 |
|------|------|
| **数据看板** | 关键指标、供应商TOP10、渠道上线情况、最新动态 |
| **供应商管理** | 16家供应商档案、结算信息、运营指标、BRG风险提示 |
| **渠道管理** | 12个分销渠道、BW配置、售卖资源类型、面纱策略 |
| **上线记录** | 渠道/供应商上线历史、促销活动记录 |
| **下线记录** | 酒店下线原因分析、处理追踪 |
| **策略配置** | 敏感酒店销售策略矩阵、BW配置矩阵 |

## 技术栈

- 纯静态页面（HTML + CSS + JavaScript）
- Tailwind CSS（CDN）
- 无后端依赖，开箱即用

## 本地运行

```bash
# 直接打开
open index.html

# 或启动本地服务器
python3 -m http.server 8080
```

## 数据来源

数据源自《渠道_供应商-资源上线及日常管理记录汇总.xlsx》，包含：
- 供应商基础信息、上线汇总、上线记录
- 渠道上线汇总、上线记录、BW配置
- 敏感酒店销售策略、下线记录、渠道用户信息

## 项目结构

```
.
├── index.html    # 主页面（UI框架 + 路由）
├── data.js       # 业务数据（从Excel提取）
├── app.js        # 应用逻辑（页面渲染 + 交互）
└── README.md
```
