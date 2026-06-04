// ==================== CRM Application ====================

let currentPage = 'dashboard';
let supplierDetailId = null;
let channelDetailName = null;

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function navigate(page, params = {}) {
  currentPage = page;
  if (params.supplierId) supplierDetailId = params.supplierId;
  else supplierDetailId = null;
  if (params.channelName) channelDetailName = params.channelName;
  else channelDetailName = null;

  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  const activeItem = document.querySelector(`[data-page="${page}"]`);
  if (activeItem) activeItem.classList.add('active');

  document.getElementById('sidebar').classList.remove('open');

  renderPage(page);
}

function renderPage(page) {
  const container = document.getElementById('mainContent');
  container.innerHTML = '';
  container.classList.remove('fade-in');
  void container.offsetWidth;
  container.classList.add('fade-in');

  switch (page) {
    case 'dashboard': renderDashboard(container); break;
    case 'suppliers': renderSuppliers(container); break;
    case 'channels': renderChannels(container); break;
    case 'onboarding': renderOnboarding(container); break;
    case 'offline': renderOffline(container); break;
    case 'strategy': renderStrategy(container); break;
  }
}

// ==================== Dashboard ====================
function renderDashboard(container) {
  const s = CRM_DATA.stats;
  container.innerHTML = `
    <div class="topbar">
      <h1 class="page-title">数据看板</h1>
      <div class="text-sm text-slate-500">${new Date().toLocaleDateString('zh-CN')} 数据更新</div>
    </div>

    <div class="grid-4">
      <div class="stat-card">
        <div class="stat-icon bg-blue-100 text-blue-600"><i class="fas fa-truck-field"></i></div>
        <div>
          <div class="stat-value">${s.totalSuppliers}</div>
          <div class="stat-label">合作供应商</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-green-100 text-green-600"><i class="fas fa-store"></i></div>
        <div>
          <div class="stat-value">${s.totalChannels}</div>
          <div class="stat-label">分销渠道</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-purple-100 text-purple-600"><i class="fas fa-hotel"></i></div>
        <div>
          <div class="stat-value">${formatNumber(s.totalListedHotels)}</div>
          <div class="stat-label">上架酒店</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-orange-100 text-orange-600"><i class="fas fa-database"></i></div>
        <div>
          <div class="stat-value">${formatNumber(s.totalHotels)}</div>
          <div class="stat-label">入库酒店</div>
        </div>
      </div>
    </div>

    <div class="grid-2" style="margin-top:20px">
      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="fas fa-truck-field text-blue-500 mr-2"></i>供应商资源概览 TOP10</div>
        </div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>供应商</th>
                <th>入库酒店</th>
                <th>上架酒店</th>
                <th>上架率</th>
                <th>挂接率</th>
              </tr>
            </thead>
            <tbody>
              ${CRM_DATA.supplierMetrics.slice(0, 10).map(m => {
                const rate = m.totalHotels && m.listedHotels ? (m.listedHotels / m.totalHotels * 100).toFixed(1) + '%' : '-';
                return `<tr>
                  <td><strong>${m.supplier}</strong></td>
                  <td>${formatNumber(m.totalHotels)}</td>
                  <td>${formatNumber(m.listedHotels)}</td>
                  <td>${rate}</td>
                  <td>${m.attachRate ? (m.attachRate * 100).toFixed(1) + '%' : '-'}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="fas fa-store text-green-500 mr-2"></i>渠道上线情况</div>
        </div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>渠道</th>
                <th>上线酒店</th>
                <th>匹配酒店</th>
                <th>有价酒店</th>
                <th>露出产品</th>
              </tr>
            </thead>
            <tbody>
              ${CRM_DATA.channels.map(c => `
                <tr>
                  <td><strong>${c.name}</strong></td>
                  <td>${formatNumber(c.listedHotels)}</td>
                  <td>${formatNumber(c.matchedHotels)}</td>
                  <td>${formatNumber(c.pricedHotels)}</td>
                  <td>${formatNumber(c.exposedProducts)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="grid-2" style="margin-top:20px">
      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="fas fa-clock-rotate-left text-orange-500 mr-2"></i>最新上线动态</div>
        </div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr><th>日期</th><th>类型</th><th>说明</th><th>数量</th></tr>
            </thead>
            <tbody>
              ${CRM_DATA.channelOnboardingRecords.slice(0, 8).map(r => `
                <tr>
                  <td>${r.date}</td>
                  <td><span class="badge bg-blue-100 text-blue-700">${r.type}</span></td>
                  <td>${r.supplier || '-'}</td>
                  <td>${formatNumber(Math.max(r.quNaEr || 0, r.feiZhu || 0, r.meiTuan || 0, r.tongCheng || 0, r.tongChengMaZhu || 0, r.feiZhuAnZhu || 0, r.tongChengYouZhu || 0, r.meiTuanYiZhu || 0)) || '-'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="fas fa-triangle-exclamation text-red-500 mr-2"></i>最新下线记录</div>
        </div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr><th>日期</th><th>酒店</th><th>原因</th><th>处理人</th></tr>
            </thead>
            <tbody>
              ${CRM_DATA.offlineRecords.slice(0, 8).map(r => `
                <tr>
                  <td>${r.processDate}</td>
                  <td title="${r.hotelName}">${r.hotelName.length > 16 ? r.hotelName.slice(0, 16) + '...' : r.hotelName}</td>
                  <td><span class="badge ${r.reason.includes('测试') ? 'bg-purple-100 text-purple-700' : r.reason.includes('违规') ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}">${r.reason}</span></td>
                  <td>${r.operator}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ==================== Suppliers ====================
function renderSuppliers(container) {
  if (supplierDetailId) {
    renderSupplierDetail(container);
    return;
  }

  container.innerHTML = `
    <div class="topbar">
      <h1 class="page-title">供应商管理</h1>
      <input type="text" class="search-input" placeholder="搜索供应商..." id="supplierSearch" oninput="filterSuppliers()">
    </div>

    <div class="card">
      <div class="table-container">
        <table class="data-table" id="supplierTable">
          <thead>
            <tr>
              <th>供应商ID</th>
              <th>英文名</th>
              <th>中文名</th>
              <th>类型</th>
              <th>总部</th>
              <th>资源类型</th>
              <th>优势区域</th>
              <th>状态</th>
              <th>上线日期</th>
              <th>QPS</th>
              <th>额度</th>
              <th>月均单量</th>
              <th>排名</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${CRM_DATA.suppliers.map(s => `
              <tr>
                <td>${s.id}</td>
                <td><strong>${s.enName}</strong></td>
                <td>${s.cnName || '-'}</td>
                <td>${s.type || '-'}</td>
                <td>${s.hq || '-'}</td>
                <td>${s.resourceType || '-'}</td>
                <td>${s.advantageRegions || '-'}</td>
                <td><span class="badge ${getStatusColor(s.status)}">${s.status}</span></td>
                <td>${s.onlineDate ? s.onlineDate.split(' ')[0] : '-'}</td>
                <td>${s.qps || '-'}</td>
                <td>${s.quota || '-'}</td>
                <td>${s.monthlyOrders || '-'}</td>
                <td>${s.productionRank || '-'}</td>
                <td>
                  <button class="btn btn-primary" onclick="navigate('suppliers', {supplierId:'${s.id}'})">
                    <i class="fas fa-eye"></i> 详情
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function filterSuppliers() {
  const term = document.getElementById('supplierSearch').value.toLowerCase();
  const rows = document.querySelectorAll('#supplierTable tbody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(term) ? '' : 'none';
  });
}

function renderSupplierDetail(container) {
  const s = CRM_DATA.suppliers.find(x => x.id === supplierDetailId);
  if (!s) { navigate('suppliers'); return; }

  const metrics = CRM_DATA.supplierMetrics.find(m => m.supplier === s.enName || m.supplier === s.cnName);

  container.innerHTML = `
    <div class="topbar">
      <div class="flex items-center gap-3">
        <button class="btn btn-outline" onclick="navigate('suppliers')"><i class="fas fa-arrow-left"></i> 返回</button>
        <h1 class="page-title">${s.enName} ${s.cnName && s.cnName !== '/' ? '(' + s.cnName + ')' : ''}</h1>
        <span class="badge ${getStatusColor(s.status)}">${s.status}</span>
      </div>
    </div>

    <div class="grid-3">
      <div class="card">
        <div class="card-title mb-4"><i class="fas fa-building text-blue-500 mr-2"></i>基础信息</div>
        <div class="detail-panel">
          <div class="detail-row"><span class="detail-label">供应商ID</span><span class="detail-value">${s.id}</span></div>
          <div class="detail-row"><span class="detail-label">英文名</span><span class="detail-value">${s.enName}</span></div>
          <div class="detail-row"><span class="detail-label">中文名</span><span class="detail-value">${s.cnName || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">类型</span><span class="detail-value">${s.type || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">总部</span><span class="detail-value">${s.hq || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">对接人办公地点</span><span class="detail-value">${s.office || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">资源类型</span><span class="detail-value">${s.resourceType || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">优势区域</span><span class="detail-value">${s.advantageRegions || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">对接人</span><span class="detail-value">${s.contact || '-'}</span></div>
        </div>
      </div>

      <div class="card">
        <div class="card-title mb-4"><i class="fas fa-file-contract text-green-500 mr-2"></i>结算信息</div>
        <div class="detail-panel">
          <div class="detail-row"><span class="detail-label">价格政策</span><span class="detail-value">${s.pricePolicy || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">结算方式</span><span class="detail-value">${s.settlementMethod || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">结算类型</span><span class="detail-value">${s.settlementType || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">结算周期</span><span class="detail-value">${s.settlementCycle || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">结算货币</span><span class="detail-value">${s.settlementCurrency || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">账号状态</span><span class="detail-value"><span class="badge ${getStatusColor(s.status)}">${s.status}</span></span></div>
          <div class="detail-row"><span class="detail-label">上线日期</span><span class="detail-value">${s.onlineDate ? s.onlineDate.split(' ')[0] : '-'}</span></div>
          <div class="detail-row"><span class="detail-label">合作主体</span><span class="detail-value">${s.partnerEntity || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">马甲</span><span class="detail-value">${s.mask || '-'}</span></div>
        </div>
      </div>

      <div class="card">
        <div class="card-title mb-4"><i class="fas fa-chart-bar text-purple-500 mr-2"></i>运营指标</div>
        <div class="detail-panel">
          <div class="detail-row"><span class="detail-label">QPS</span><span class="detail-value">${s.qps || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">额度</span><span class="detail-value">${s.quota || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">月均订单量(4月)</span><span class="detail-value">${s.monthlyOrders ? s.monthlyOrders.toLocaleString() : '-'}</span></div>
          <div class="detail-row"><span class="detail-label">产量排名</span><span class="detail-value">${s.productionRank ? '第' + s.productionRank + '名' : '-'}</span></div>
          ${metrics ? `
            <div class="detail-row"><span class="detail-label">入库酒店</span><span class="detail-value">${formatNumber(metrics.totalHotels)}</span></div>
            <div class="detail-row"><span class="detail-label">上架酒店</span><span class="detail-value">${formatNumber(metrics.listedHotels)}</span></div>
            <div class="detail-row"><span class="detail-label">挂接率</span><span class="detail-value">${metrics.attachRate ? (metrics.attachRate * 100).toFixed(1) + '%' : '-'}</span></div>
            <div class="detail-row"><span class="detail-label">待审核酒店</span><span class="detail-value">${formatNumber(metrics.pendingHotels)}</span></div>
          ` : '<div class="detail-row"><span class="detail-label">暂无汇总数据</span></div>'}
        </div>
      </div>
    </div>

    ${s.description ? `
      <div class="card" style="margin-top:20px">
        <div class="card-title mb-2"><i class="fas fa-circle-info text-slate-500 mr-2"></i>简介及主营业务</div>
        <p class="text-sm text-slate-600 leading-relaxed">${s.description}</p>
      </div>
    ` : ''}

    ${s.brgRisk ? `
      <div class="card" style="margin-top:20px">
        <div class="card-title mb-2"><i class="fas fa-triangle-exclamation text-amber-500 mr-2"></i>BRG风险提示</div>
        <p class="text-sm text-amber-700 leading-relaxed whitespace-pre-line">${s.brgRisk}</p>
      </div>
    ` : ''}
  `;
}

// ==================== Channels ====================
function renderChannels(container) {
  if (channelDetailName) {
    renderChannelDetail(container);
    return;
  }

  container.innerHTML = `
    <div class="topbar">
      <h1 class="page-title">渠道管理</h1>
      <input type="text" class="search-input" placeholder="搜索渠道..." id="channelSearch" oninput="filterChannels()">
    </div>

    <div class="card">
      <div class="table-container">
        <table class="data-table" id="channelTable">
          <thead>
            <tr>
              <th>渠道名称</th>
              <th>上线酒店</th>
              <th>匹配酒店</th>
              <th>匹配率</th>
              <th>有价酒店</th>
              <th>露出产品</th>
              <th>面纱设置</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${CRM_DATA.channels.map(c => `
              <tr>
                <td><strong>${c.name}</strong></td>
                <td>${formatNumber(c.listedHotels)}</td>
                <td>${formatNumber(c.matchedHotels)}</td>
                <td>${c.matchRate ? (c.matchRate * 100).toFixed(1) + '%' : '-'}</td>
                <td>${formatNumber(c.pricedHotels)}</td>
                <td>${formatNumber(c.exposedProducts)}</td>
                <td>${c.veilSetting ? '<span class="badge bg-amber-100 text-amber-700">有设置</span>' : '<span class="badge bg-gray-100 text-gray-600">无</span>'}</td>
                <td>
                  <button class="btn btn-primary" onclick="navigate('channels', {channelName:'${c.name}'})">
                    <i class="fas fa-eye"></i> 详情
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="card" style="margin-top:20px">
      <div class="card-header">
        <div class="card-title"><i class="fas fa-user-shield text-green-500 mr-2"></i>渠道用户信息提供情况</div>
      </div>
      <div class="table-container">
        <table class="data-table" id="channelUserInfoTable">
          <thead>
            <tr>
              <th>渠道</th>
              <th>是否提供用户手机邮箱</th>
              <th>邮箱</th>
              <th>电话</th>
            </tr>
          </thead>
          <tbody>
            ${CRM_DATA.channelUserInfo.map(c => `
              <tr>
                <td><strong>${c.channel}</strong></td>
                <td>
                  ${c.providesInfo
                    ? '<span class="badge bg-green-100 text-green-700"><i class="fas fa-check mr-1"></i>提供</span>'
                    : '<span class="badge bg-red-100 text-red-700"><i class="fas fa-xmark mr-1"></i>不提供' + (c.phone ? '，提供自己电话邮箱' : '') + '</span>'}
                </td>
                <td>${c.email || '-'}</td>
                <td>${c.phone || '-'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function filterChannels() {
  const term = document.getElementById('channelSearch').value.toLowerCase();
  const rows = document.querySelectorAll('#channelTable tbody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(term) ? '' : 'none';
  });
}

function renderChannelDetail(container) {
  const c = CRM_DATA.channels.find(x => x.name === channelDetailName);
  if (!c) { navigate('channels'); return; }

  container.innerHTML = `
    <div class="topbar">
      <div class="flex items-center gap-3">
        <button class="btn btn-outline" onclick="navigate('channels')"><i class="fas fa-arrow-left"></i> 返回</button>
        <h1 class="page-title">${c.name}</h1>
      </div>
    </div>

    <div class="grid-3">
      <div class="card">
        <div class="card-title mb-4"><i class="fas fa-chart-pie text-blue-500 mr-2"></i>酒店数据</div>
        <div class="detail-panel">
          <div class="detail-row"><span class="detail-label">上线酒店数</span><span class="detail-value">${formatNumber(c.listedHotels)}</span></div>
          <div class="detail-row"><span class="detail-label">已匹配酒店</span><span class="detail-value">${formatNumber(c.matchedHotels)}</span></div>
          <div class="detail-row"><span class="detail-label">酒店匹配率</span><span class="detail-value">${c.matchRate ? (c.matchRate * 100).toFixed(2) + '%' : '-'}</span></div>
          <div class="detail-row"><span class="detail-label">有价酒店</span><span class="detail-value">${formatNumber(c.pricedHotels)}</span></div>
          <div class="detail-row"><span class="detail-label">有价率</span><span class="detail-value">${c.pricedRate || '-'}</span></div>
          <div class="detail-row"><span class="detail-label">露出酒店</span><span class="detail-value">${formatNumber(c.exposedHotels)}</span></div>
          <div class="detail-row"><span class="detail-label">露出率</span><span class="detail-value">${c.exposedRate || '-'}</span></div>
        </div>
      </div>

      <div class="card">
        <div class="card-title mb-4"><i class="fas fa-bed text-green-500 mr-2"></i>房型/产品数据</div>
        <div class="detail-panel">
          <div class="detail-row"><span class="detail-label">总房型数</span><span class="detail-value">${formatNumber(c.totalRoomTypes)}</span></div>
          <div class="detail-row"><span class="detail-label">已匹配房型</span><span class="detail-value">${formatNumber(c.matchedRoomTypes)}</span></div>
          <div class="detail-row"><span class="detail-label">有价产品数</span><span class="detail-value">${formatNumber(c.pricedProducts)}</span></div>
          <div class="detail-row"><span class="detail-label">露出产品数</span><span class="detail-value">${formatNumber(c.exposedProducts)}</span></div>
          <div class="detail-row"><span class="detail-label">产品露出率</span><span class="detail-value">${c.productExposedRate || '-'}</span></div>
        </div>
      </div>

      <div class="card">
        <div class="card-title mb-4"><i class="fas fa-shield-halved text-purple-500 mr-2"></i>策略配置</div>
        <div class="detail-panel">
          <div class="detail-row"><span class="detail-label">面纱设置</span><span class="detail-value">${c.veilSetting || '无'}</span></div>
          <div class="detail-row"><span class="detail-label">面纱备注</span><span class="detail-value">${c.veilRemark || '-'}</span></div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:20px">
      <div class="card-title mb-4"><i class="fas fa-calendar-days text-orange-500 mr-2"></i>各供应商BW配置（提前预订天数）</div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>供应商</th>
              <th>BW值（提前预订天数）</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            ${[
              {name: 'EPS', val: c.bw.eps},
              {name: 'AGODA', val: c.bw.agoda},
              {name: 'HB', val: c.bw.hb},
              {name: 'WB', val: c.bw.wb},
              {name: 'WB-Safe', val: c.bw.wbSafe},
              {name: 'DIDA', val: c.bw.dida},
              {name: 'MT', val: c.bw.mt}
            ].map(s => {
              const isOpen = s.val !== null && s.val !== undefined && s.val !== 0 && s.val !== '-';
              return `<tr>
                <td><strong>${s.name}</strong></td>
                <td><span class="badge ${isOpen ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}">${s.val !== null && s.val !== undefined ? s.val : '-'}</span></td>
                <td>${isOpen
                  ? '<span class="badge bg-green-100 text-green-700"><i class="fas fa-toggle-on mr-1"></i>开启</span>'
                  : '<span class="badge bg-gray-100 text-gray-600"><i class="fas fa-toggle-off mr-1"></i>关闭</span>'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="card" style="margin-top:20px">
      <div class="card-title mb-4"><i class="fas fa-box-open text-teal-500 mr-2"></i>各供应商售卖资源类型</div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>供应商</th>
              <th>EPS</th>
              <th>AGODA</th>
              <th>HB</th>
              <th>WB</th>
              <th>WB-Safe</th>
              <th>DIDA</th>
              <th>MT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>${c.name}</strong></td>
              <td>${c.resourceType.eps || '-'}</td>
              <td>${c.resourceType.agoda || '-'}</td>
              <td>${c.resourceType.hb || '-'}</td>
              <td>${c.resourceType.wb || '-'}</td>
              <td>${c.resourceType.wbSafe || '-'}</td>
              <td>${c.resourceType.dida || '-'}</td>
              <td>${c.resourceType.mt || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}


// ==================== Onboarding Records ====================
function renderOnboarding(container) {
  const records = [...CRM_DATA.channelOnboardingRecords, ...CRM_DATA.supplierOnboardingRecords];
  records.sort((a, b) => new Date(b.date) - new Date(a.date));

  container.innerHTML = `
    <div class="topbar">
      <h1 class="page-title">上线记录</h1>
      <div class="flex gap-2">
        <input type="text" class="search-input" placeholder="搜索记录..." id="onboardingSearch" oninput="filterOnboarding()">
      </div>
    </div>

    <div class="tabs">
      <div class="tab active" onclick="switchOnboardingTab(this, 'channel')">渠道上线记录</div>
      <div class="tab" onclick="switchOnboardingTab(this, 'supplier')">供应商上线记录</div>
    </div>

    <div id="channelOnboarding">
      <div class="card">
        <div class="table-container">
          <table class="data-table" id="channelOnboardingTable">
            <thead>
              <tr>
                <th>日期</th>
                <th>上线类型</th>
                <th>供应商</th>
                <th>备注</th>
                <th>去哪儿</th>
                <th>飞猪</th>
                <th>同程</th>
                <th>美团</th>
                <th>ETG</th>
                <th>嗨住</th>
                <th>优住/安住/享住/易住</th>
              </tr>
            </thead>
            <tbody>
              ${CRM_DATA.channelOnboardingRecords.map(r => `
                <tr>
                  <td>${r.date}</td>
                  <td><span class="badge bg-blue-100 text-blue-700">${r.type}</span></td>
                  <td>${r.supplier || '-'}</td>
                  <td>${r.remark || '-'}</td>
                  <td>${r.quNaEr || r.quNaErYiZhu ? formatNumber((r.quNaEr || 0) + (r.quNaErYiZhu || 0)) : '-'}</td>
                  <td>${r.feiZhu || r.feiZhuLeZhu ? formatNumber((r.feiZhu || 0) + (r.feiZhuLeZhu || 0)) : '-'}</td>
                  <td>${r.tongCheng || r.tongChengHaiZhu || r.tongChengMaZhu ? formatNumber((r.tongCheng || 0) + (r.tongChengHaiZhu || 0) + (r.tongChengMaZhu || 0)) : '-'}</td>
                  <td>${r.meiTuan ? formatNumber(r.meiTuan) : '-'}</td>
                  <td>${r.etg || r.etgMask ? formatNumber((r.etg || 0) + (r.etgMask || 0)) : '-'}</td>
                  <td>${r.haiZhuFenXiao ? formatNumber(r.haiZhuFenXiao) : '-'}</td>
                  <td>
                    ${r.feiZhuAnZhu ? '安住:' + formatNumber(r.feiZhuAnZhu) + ' ' : ''}
                    ${r.feiZhuXiangZhu ? '享住:' + formatNumber(r.feiZhuXiangZhu) + ' ' : ''}
                    ${r.tongChengYouZhu ? '优住:' + formatNumber(r.tongChengYouZhu) + ' ' : ''}
                    ${r.meiTuanYiZhu ? '易住:' + formatNumber(r.meiTuanYiZhu) : ''}
                    ${!r.feiZhuAnZhu && !r.feiZhuXiangZhu && !r.tongChengYouZhu && !r.meiTuanYiZhu ? '-' : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id="supplierOnboarding" style="display:none">
      <div class="card">
        <div class="table-container">
          <table class="data-table" id="supplierOnboardingTable">
            <thead>
              <tr>
                <th>日期</th>
                <th>类型</th>
                <th>售卖类型</th>
                <th>EPS</th>
                <th>HB</th>
                <th>WB</th>
                <th>AGD</th>
                <th>DIDA</th>
                <th>美团</th>
                <th>travelgate</th>
                <th>其他</th>
              </tr>
            </thead>
            <tbody>
              ${CRM_DATA.supplierOnboardingRecords.map(r => `
                <tr>
                  <td>${r.date}</td>
                  <td><span class="badge ${r.type === '首次上线' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}">${r.type}</span></td>
                  <td>${r.sellType || '-'}</td>
                  <td>${r.eps || '-'}</td>
                  <td>${r.hb || '-'}</td>
                  <td>${r.wb || '-'}</td>
                  <td>${r.agd || '-'}</td>
                  <td>${r.dida || '-'}</td>
                  <td>${r.meituan || '-'}</td>
                  <td>${r.travelgate || '-'}</td>
                  <td>
                    ${r.rakuten ? 'rakuten:' + r.rakuten + ' ' : ''}
                    ${r.ratehawk ? 'ratehawk:' + r.ratehawk + ' ' : ''}
                    ${r.ratehawkB2B ? 'ratehawkB2B:' + r.ratehawkB2B + ' ' : ''}
                    ${r.id2 ? 'ID2:' + r.id2 + ' ' : ''}
                    ${r.wbSafe ? 'WB-S:' + r.wbSafe : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function switchOnboardingTab(el, type) {
  document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('channelOnboarding').style.display = type === 'channel' ? '' : 'none';
  document.getElementById('supplierOnboarding').style.display = type === 'supplier' ? '' : 'none';
}

function filterOnboarding() {
  const term = document.getElementById('onboardingSearch').value.toLowerCase();
  const tables = ['channelOnboardingTable', 'supplierOnboardingTable'];
  tables.forEach(id => {
    const rows = document.querySelectorAll(`#${id} tbody tr`);
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(term) ? '' : 'none';
    });
  });
}

// ==================== Offline Records ====================
function renderOffline(container) {
  container.innerHTML = `
    <div class="topbar">
      <h1 class="page-title">下线记录</h1>
      <div class="flex gap-2">
        <input type="text" class="search-input" placeholder="搜索酒店/原因/处理人..." id="offlineSearch" oninput="filterOffline()">
      </div>
    </div>

    <div class="grid-4" style="margin-bottom:20px">
      <div class="stat-card">
        <div class="stat-icon bg-red-100 text-red-600"><i class="fas fa-ban"></i></div>
        <div>
          <div class="stat-value">${CRM_DATA.stats.totalOfflineRecords}</div>
          <div class="stat-label">总下线记录</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-orange-100 text-orange-600"><i class="fas fa-copy"></i></div>
        <div>
          <div class="stat-value">${CRM_DATA.offlineRecords.filter(r => r.reason === '重复酒店聚合风险').length}</div>
          <div class="stat-label">重复聚合风险</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-purple-100 text-purple-600"><i class="fas fa-vial"></i></div>
        <div>
          <div class="stat-value">${CRM_DATA.offlineRecords.filter(r => r.reason.includes('测试')).length}</div>
          <div class="stat-label">测试单下线</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-amber-100 text-amber-600"><i class="fas fa-file-circle-xmark"></i></div>
        <div>
          <div class="stat-value">${CRM_DATA.offlineRecords.filter(r => r.reason.includes('违规')).length}</div>
          <div class="stat-label">违规单下线</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="table-container">
        <table class="data-table" id="offlineTable">
          <thead>
            <tr>
              <th>Center ID</th>
              <th>供应商</th>
              <th>酒店名称</th>
              <th>渠道</th>
              <th>状态</th>
              <th>原因</th>
              <th>详情</th>
              <th>处理日期</th>
              <th>处理人</th>
            </tr>
          </thead>
          <tbody>
            ${CRM_DATA.offlineRecords.map(r => {
              let badgeClass = 'bg-gray-100 text-gray-700';
              if (r.reason.includes('测试')) badgeClass = 'bg-purple-100 text-purple-700';
              else if (r.reason.includes('违规')) badgeClass = 'bg-red-100 text-red-700';
              else if (r.reason.includes('聚合')) badgeClass = 'bg-orange-100 text-orange-700';
              return `
                <tr>
                  <td>${r.centerId}</td>
                  <td>${r.supplier}</td>
                  <td title="${r.hotelName}">${r.hotelName.length > 20 ? r.hotelName.slice(0, 20) + '...' : r.hotelName}</td>
                  <td>${r.channel}</td>
                  <td><span class="badge bg-red-100 text-red-700">${r.status}</span></td>
                  <td><span class="badge ${badgeClass}">${r.reason}</span></td>
                  <td title="${r.detail || ''}">${r.detail ? (r.detail.length > 20 ? r.detail.slice(0, 20) + '...' : r.detail) : '-'}</td>
                  <td>${r.processDate}</td>
                  <td>${r.operator}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function filterOffline() {
  const term = document.getElementById('offlineSearch').value.toLowerCase();
  const rows = document.querySelectorAll('#offlineTable tbody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(term) ? '' : 'none';
  });
}

// ==================== Strategy Config ====================
function renderStrategy(container) {
  container.innerHTML = `
    <div class="topbar">
      <h1 class="page-title">策略配置</h1>
    </div>

    <div class="tabs">
      <div class="tab active" onclick="switchStrategyTab(this, 'sensitive')">敏感酒店销售策略</div>
      <div class="tab" onclick="switchStrategyTab(this, 'bw')">BW配置</div>
    </div>

    <div id="sensitivePanel">
      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="fas fa-shield-halved text-red-500 mr-2"></i>敏感酒店销售策略透视表</div>
          <div class="text-sm text-slate-500">按渠道+供应商组合查看酒店敏感度策略配置</div>
        </div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>渠道</th>
                <th>供应商</th>
                <th>策略</th>
              </tr>
            </thead>
            <tbody>
              ${CRM_DATA.sensitiveStrategies.flatMap(s => [
                {channel: s.channel, supplier: 'Expedia', strategy: s.expedia},
                {channel: s.channel, supplier: 'Hotelbeds', strategy: s.hotelbeds},
                {channel: s.channel, supplier: 'WebBeds', strategy: s.webbeds},
                {channel: s.channel, supplier: 'WebBeds-Safe', strategy: s.webbedsSafe},
                {channel: s.channel, supplier: 'Agoda', strategy: s.agoda},
                {channel: s.channel, supplier: 'DIDA', strategy: s.dida},
                {channel: s.channel, supplier: '美团供应商', strategy: s.meituan}
              ]).map(item => `
                <tr>
                  <td><strong>${item.channel}</strong></td>
                  <td>${item.supplier}</td>
                  <td>${renderStrategyCell(item.strategy)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card" style="margin-top:20px">
        <div class="card-title mb-3"><i class="fas fa-circle-info text-blue-500 mr-2"></i>策略说明</div>
        <div class="grid-2">
          <div class="detail-panel">
            <div class="detail-row">
              <span class="detail-label"><span class="badge bg-red-100 text-red-700">高危酒店</span></span>
              <span class="detail-value">仅在特定人群/场景可见，需加面纱限制</span>
            </div>
            <div class="detail-row">
              <span class="detail-label"><span class="badge bg-blue-100 text-blue-700">普通酒店</span></span>
              <span class="detail-value">正常售卖，无特殊限制</span>
            </div>
            <div class="detail-row">
              <span class="detail-label"><span class="badge bg-green-100 text-green-700">普通酒店且非RSP</span></span>
              <span class="detail-value">排除RSP价格限制酒店后正常售卖</span>
            </div>
          </div>
          <div class="detail-panel">
            <div class="detail-row">
              <span class="detail-label"><span class="badge bg-amber-100 text-amber-700">白名单</span></span>
              <span class="detail-value">仅白名单内酒店可售</span>
            </div>
            <div class="detail-row">
              <span class="detail-label"><span class="badge bg-purple-100 text-purple-700">热销/有产</span></span>
              <span class="detail-value">仅历史有产出或热销酒店可售</span>
            </div>
            <div class="detail-row">
              <span class="detail-label"><span class="badge bg-gray-100 text-gray-700">/</span></span>
              <span class="detail-value">该供应商不在此渠道售卖</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="bwPanel" style="display:none">
      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="fas fa-calendar-days text-blue-500 mr-2"></i>BW配置透视表（提前预订天数）</div>
          <div class="text-sm text-slate-500">点击渠道名称可展开/折叠，查看各渠道下供应商BW明细</div>
        </div>
        <div class="bw-pivot">
          ${CRM_DATA.bwConfig.channels.map((c, idx) => {
            const items = CRM_DATA.bwConfig.suppliers.map((s, i) => ({
              supplier: s,
              bw: c.values[i]
            })).filter(x => x.bw !== null && x.bw !== undefined && x.bw !== '-');
            const avgBw = items.length > 0 ? Math.round(items.reduce((a, b) => a + (Number(b.bw) || 0), 0) / items.length) : 0;
            const openCount = items.filter(x => Number(x.bw) > 0).length;
            return `
              <div class="bw-group" data-expanded="false">
                <div class="bw-header" onclick="toggleBwGroup(this)">
                  <span class="bw-toggle"><i class="fas fa-chevron-right"></i></span>
                  <span class="bw-channel-name"><strong>${c.name}</strong></span>
                  <span class="bw-summary">
                    <span class="badge bg-blue-50 text-blue-700">${items.length}个供应商</span>
                    <span class="badge bg-green-50 text-green-700">平均BW ${avgBw}天</span>
                  </span>
                </div>
                <div class="bw-details" style="display:none">
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>供应商</th>
                        <th>BW值（提前预订天数）</th>
                        <th>状态</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${CRM_DATA.bwConfig.suppliers.map((s, i) => {
                        const bw = c.values[i];
                        const isOpen = bw !== null && bw !== undefined && bw !== 0 && bw !== '-';
                        return `
                          <tr>
                            <td><strong>${s}</strong></td>
                            <td><span class="badge ${isOpen ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}">${bw !== null && bw !== undefined ? bw : '-'}</span></td>
                            <td>
                              ${isOpen
                                ? '<span class="badge bg-green-100 text-green-700"><i class="fas fa-toggle-on mr-1"></i>开启</span>'
                                : '<span class="badge bg-gray-100 text-gray-600"><i class="fas fa-toggle-off mr-1"></i>关闭</span>'}
                            </td>
                          </tr>
                        `;
                      }).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>


  `;
}

function renderStrategyCell(val) {
  if (!val || val === '/') return '<span class="badge bg-gray-100 text-gray-500">/</span>';
  if (val.includes('高危')) return `<span class="badge bg-red-100 text-red-700">${val}</span>`;
  if (val.includes('普通')) return `<span class="badge bg-blue-100 text-blue-700">${val}</span>`;
  return `<span class="badge bg-slate-100 text-slate-700">${val}</span>`;
}

function switchStrategyTab(el, type) {
  document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('sensitivePanel').style.display = type === 'sensitive' ? '' : 'none';
  document.getElementById('bwPanel').style.display = type === 'bw' ? '' : 'none';
}

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

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
  renderPage('dashboard');
});
