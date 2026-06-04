// CRM Demo Data - Extracted from Excel
const CRM_DATA = {
  // ========== 供应商基础信息 ==========
  suppliers: [
    { id: "10001", enName: "expedia", cnName: "亿客行", type: "OTA", hq: "美国", office: "上海", description: "", resourceType: "直采", advantageRegions: "日本、美国、泰国、欧洲", contact: "客户经理 Janice", pricePolicy: null, settlementMethod: "返佣", settlementType: "额度内按离店额度外按预订", settlementCycle: "周结", settlementCurrency: "USD/CNY", accountInfo: "户名\nTravelscape LLC\n账号\n4427 7840 02", status: "正常", onlineDate: "2024-07-08", qps: null, quota: "1000w USD", confirmRequirement: null, monthlyOrders: 46887, productionRank: 1, compensationStandard: null, compensationRate: null, partnerEntity: "LinkStay HK Limited", brgRisk: null, mask: "cid1/cid2" },
    { id: "10003", enName: "hotelbeds", cnName: "/", type: "批发商", hq: "西班牙", office: "上海", description: "全球最大的酒店批发商之一，B2B旅游科技服务商，为旅行社、OTA提供全球酒店库存分销服务，覆盖200+国家", resourceType: "直采+三方", advantageRegions: "港澳、泰国、印尼、日本", contact: null, pricePolicy: null, settlementMethod: "底价结算", settlementType: "按离店", settlementCycle: "周结", settlementCurrency: "USD", accountInfo: "户名\nHotelbeds Pte Ltd\n账号\n0850 2970 61", status: "正常", onlineDate: "2024-11-15", qps: 300, quota: null, confirmRequirement: null, monthlyOrders: 398, productionRank: 3, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: "RSP：卖价不能大于selling price", mask: null },
    { id: "10005", enName: "webbeds", cnName: null, type: "批发商", hq: "阿联酋迪拜", office: "北京", description: "全球知名酒店批发商，B2B旅游分销平台，提供酒店、度假住宿、机票等旅游产品的分销服务，服务全球120+国家", resourceType: "直采+三方", advantageRegions: "韩泰、马来", contact: "冯思思/微信群&个人微信", pricePolicy: null, settlementMethod: "底价结算", settlementType: "按离店", settlementCycle: "月结", settlementCurrency: "USD", accountInfo: "户名\nWebBeds Ltd\n账号\n7631 9727", status: "正常", onlineDate: "2025-01-08", qps: 100, quota: null, confirmRequirement: null, monthlyOrders: 17, productionRank: 7, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10007", enName: "webbeds-safe", cnName: null, type: null, hq: null, office: null, description: null, resourceType: null, advantageRegions: null, contact: null, pricePolicy: null, settlementMethod: null, settlementType: null, settlementCycle: null, settlementCurrency: null, accountInfo: null, status: "正常", onlineDate: "2025-04-28", qps: 50, quota: null, confirmRequirement: null, monthlyOrders: 38, productionRank: null, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10006", enName: "Agoda", cnName: "安可达", type: "OTA", hq: "新加坡", office: "北京", description: "全球OTA平台，Booking Holdings集团旗下品牌，提供酒店、机票、活动预订，覆盖200+国家和地区", resourceType: "直采+三方", advantageRegions: "亚太", contact: null, pricePolicy: null, settlementMethod: "底价+返佣", settlementType: "按离店", settlementCycle: "周结", settlementCurrency: "USD", accountInfo: "户名\nAgoda\n账号\n8520 5102 7", status: "正常", onlineDate: "2025-04-29", qps: 1000, quota: null, confirmRequirement: null, monthlyOrders: 7489, productionRank: 2, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10008", enName: "DIDA", cnName: "道旅", type: "批发商", hq: "深圳", office: "上海", description: "中国领先的B2B旅游科技企业，提供全球酒店、机票等旅游产品的分销服务，拥有百万级酒店库存", resourceType: "直采+三方", advantageRegions: null, contact: null, pricePolicy: null, settlementMethod: "底价结算", settlementType: "按离店", settlementCycle: "半月结", settlementCurrency: "CNY", accountInfo: "户名\nDIDATRAVEL TECHNOLOGY SINGAPORE PTE LTD \n账号\n0103 7656 54", status: "正常", onlineDate: "2025-05-26", qps: 800, quota: null, confirmRequirement: null, monthlyOrders: 355, productionRank: 4, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10009", enName: "meituan", cnName: "美团国际", type: "OTA", hq: "北京", office: "上海", description: "美团旗下国际业务平台，主打海外酒店、机票预订", resourceType: "直采", advantageRegions: "中东、东南亚", contact: "苍传杰/个人微信", pricePolicy: null, settlementMethod: "底价结算", settlementType: "预充值", settlementCycle: "双周结", settlementCurrency: "CNY", accountInfo: "户名\nXigua Ltd\n账号\n7024 0000 1", status: "正常", onlineDate: "2025-06-18", qps: 130, quota: null, confirmRequirement: null, monthlyOrders: 121, productionRank: 5, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10011", enName: "rakuten", cnName: "乐天旅游", type: "OTA", hq: "日本东京", office: null, description: "日本头部OTA平台，乐天集团旗下品牌，主打日本及亚洲酒店预订，提供机+酒套餐、当地体验服务。", resourceType: "直采+三方", advantageRegions: "日本、亚太", contact: null, pricePolicy: null, settlementMethod: "底价结算", settlementType: "按离店", settlementCycle: "半月结", settlementCurrency: "USD", accountInfo: "户名\nRAKUTEN TRAVEL XCHANGE PTE. LTD.\n账号\n1048 7901", status: "正常", onlineDate: "2025-07-25", qps: 70, quota: null, confirmRequirement: null, monthlyOrders: 31, productionRank: 8, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: "可以卖到OTA，价格不能低于卖价", mask: null },
    { id: "10012", enName: "ratehawk", cnName: "/", type: "批发商", hq: "美国", office: null, description: "全球B2B酒店预订平台，提供酒店、租车、接送等服务，主打高性价比库存，服务旅行社、企业客户", resourceType: "直采+三方", advantageRegions: "俄罗斯", contact: "商务Diana/微信群", pricePolicy: null, settlementMethod: "底价结算", settlementType: "按离店", settlementCycle: "半月结", settlementCurrency: "USD", accountInfo: "户名\nRateHawk\n账号\n1618 5008 1761 6872", status: "正常", onlineDate: "2025-09-25", qps: 0.5, quota: null, confirmRequirement: null, monthlyOrders: 14, productionRank: 10, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: "ratehawk-B2C\n价格普通，直销渠道可售，海外渠道可售\nratehawk-B2B\n价格次优，直销渠道可售，海外渠道加面纱\nratehawk-CUG\n价格最优，直销渠道可售，海外渠道不可售", mask: null },
    { id: "10017", enName: "ratehawk-B2B", cnName: "/", type: null, hq: null, office: null, description: null, resourceType: null, advantageRegions: null, contact: null, pricePolicy: null, settlementMethod: null, settlementType: null, settlementCycle: null, settlementCurrency: "USD", accountInfo: "户名\nEmerging Travel Asia Pte. Ltd\n账号\n6504 1404 5404 3824", status: "正常", onlineDate: "2025-12-03", qps: null, quota: null, confirmRequirement: null, monthlyOrders: 21, productionRank: 9, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10014", enName: "Amerilink", cnName: "美联国际", type: "批发商", hq: "美国", office: "北京", description: "美国酒店预订批发商，主打北美酒店资源分销，为旅行社、OTA提供协议价酒店预订服务。", resourceType: "直采+三方", advantageRegions: "北美", contact: "运营Emma谷晓莉/微信群", pricePolicy: null, settlementMethod: "底价结算", settlementType: null, settlementCycle: "半月结", settlementCurrency: "USD", accountInfo: "户名\nAmerilink International Corp\n账号\n0038 1364 4100", status: "正常", onlineDate: "2025-11-01", qps: 50, quota: "1w USD", confirmRequirement: null, monthlyOrders: 73, productionRank: 6, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10013", enName: "TravelGate-Abreu", cnName: "/", type: "技术服务商", hq: "西班牙", office: "北京", description: "旅游B2B连接平台，提供酒店供应商与渠道之间的API对接服务。", resourceType: "直采+三方", advantageRegions: "葡萄牙", contact: null, pricePolicy: null, settlementMethod: "底价结算", settlementType: null, settlementCycle: "半月结", settlementCurrency: "USD", accountInfo: "户名\nBanco Santander Totta S.A.\n账号\n5000 1802 1000 2400 0001 365", status: "正常", onlineDate: "2026-03-13", qps: 30, quota: "10w Euro", confirmRequirement: null, monthlyOrders: 3, productionRank: 12, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10016", enName: "hoteldo", cnName: "/", type: "批发商", hq: "美国", office: null, description: "拉美地区领先的B2B酒店预订平台，提供酒店、机票、租车、活动预订服务", resourceType: "直采+三方", advantageRegions: "巴西", contact: null, pricePolicy: null, settlementMethod: "底价结算", settlementType: null, settlementCycle: "半月结", settlementCurrency: "USD", accountInfo: null, status: "正常", onlineDate: "2026-04-10", qps: 100, quota: "2w USD", confirmRequirement: null, monthlyOrders: 12, productionRank: 11, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10018", enName: "Asiaroom", cnName: "/", type: "OTA", hq: "韩国", office: "韩国", description: "AsiaRooms是一家以C端酒店预订为核心的OTA平台，专注亚太市场，采用佣金合作模式服务消费者，同时在东南亚地区具有较强的品牌影响力。", resourceType: "直采", advantageRegions: "越南", contact: null, pricePolicy: null, settlementMethod: "底价结算", settlementType: null, settlementCycle: "半月结", settlementCurrency: "USD", accountInfo: null, status: "正常", onlineDate: "2026-04-20", qps: 50, quota: "2w USD", confirmRequirement: null, monthlyOrders: 1, productionRank: 13, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10019", enName: "Jalan", cnName: "/", type: "批发商", hq: "日本东京", office: "日本", description: "日本Recruit集团旗下的旅游预订平台，主打日本酒店、温泉旅馆预订，提供机+酒套餐、当地体验服务。", resourceType: "直采+三方", advantageRegions: "日本", contact: "cheng/微信群", pricePolicy: null, settlementMethod: "底价结算", settlementType: "按离店", settlementCycle: "半月结", settlementCurrency: "JPY", accountInfo: null, status: "未上线", onlineDate: null, qps: null, quota: null, confirmRequirement: null, monthlyOrders: null, productionRank: null, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
    { id: "10021", enName: "ohmyhotel", cnName: "/", type: "批发商", hq: "新加坡", office: "韩国", description: "韩国B2B酒店预订服务商，提供全球酒店库存分销服务", resourceType: "直采", advantageRegions: "韩国/越南", contact: null, pricePolicy: null, settlementMethod: "底价结算", settlementType: "按离店", settlementCycle: "半月结", settlementCurrency: "USD", accountInfo: null, status: "未上线", onlineDate: null, qps: 80, quota: "2w USD", confirmRequirement: null, monthlyOrders: null, productionRank: null, compensationStandard: null, compensationRate: null, partnerEntity: "Linkstay HK Limited", brgRisk: null, mask: null },
  ],

  // ========== 供应商上线汇总 ==========
  supplierMetrics: [
    { supplier: "expedia", quota: "1000万USD", qps: null, totalHotels: 694972, pricedHotels: 333959, pricedRate: null, unpricedHotels: 361013, listedHotels: 693102, listingRate: null, matchedHotels: null, attachRate: 0.999137, pendingHotels: 613, totalRoomTypes: 2373884, listedRoomTypes: 2373857, roomTypeListingRate: null, pendingRoomTypes: null },
    { supplier: "hotelbeds", quota: null, qps: 300, totalHotels: 173628, pricedHotels: 84605, pricedRate: null, unpricedHotels: 89023, listedHotels: 73178, listingRate: null, matchedHotels: null, attachRate: 0.869463, pendingHotels: 13288, totalRoomTypes: 579454, listedRoomTypes: 534626, roomTypeListingRate: 0.922638, pendingRoomTypes: 44828 },
    { supplier: "webbeds", quota: null, qps: 100, totalHotels: 41582, pricedHotels: 28615, pricedRate: 0.688, unpricedHotels: 10667, listedHotels: 10667, listingRate: 0.2565, matchedHotels: null, attachRate: 0.809, pendingHotels: 6131, totalRoomTypes: 47727, listedRoomTypes: 25828, roomTypeListingRate: null, pendingRoomTypes: null },
    { supplier: "webbeds-safe", quota: null, qps: 50, totalHotels: 61908, pricedHotels: 39994, pricedRate: 0.646, unpricedHotels: 10527, listedHotels: 10527, listingRate: 0.17, matchedHotels: null, attachRate: 0.855, pendingHotels: 5787, totalRoomTypes: 188596, listedRoomTypes: 125942, roomTypeListingRate: null, pendingRoomTypes: 62654 },
    { supplier: "Agoda", quota: null, qps: 700, totalHotels: 319249, pricedHotels: 218613, pricedRate: null, unpricedHotels: null, listedHotels: 176515, listingRate: null, matchedHotels: null, attachRate: null, pendingHotels: 42098, totalRoomTypes: 906380, listedRoomTypes: 720330, roomTypeListingRate: null, pendingRoomTypes: 186050 },
    { supplier: "DIDA", quota: null, qps: 800, totalHotels: 49981, pricedHotels: 20349, pricedRate: null, unpricedHotels: null, listedHotels: 18501, listingRate: null, matchedHotels: null, attachRate: null, pendingHotels: 1675, totalRoomTypes: null, listedRoomTypes: null, roomTypeListingRate: null, pendingRoomTypes: null },
    { supplier: "美团国际", quota: "充值模式", qps: 130, totalHotels: 87425, pricedHotels: 14118, pricedRate: 0.8761, unpricedHotels: 2000, listedHotels: 10211, listingRate: 0.1241, matchedHotels: null, attachRate: 0.666, pendingHotels: 4807, totalRoomTypes: null, listedRoomTypes: null, roomTypeListingRate: null, pendingRoomTypes: null },
    { supplier: "rakuten", quota: null, qps: 70, totalHotels: 15791, pricedHotels: 10157, pricedRate: 0.6432, unpricedHotels: null, listedHotels: 7265, listingRate: 0.4601, matchedHotels: null, attachRate: null, pendingHotels: 2907, totalRoomTypes: 68588, listedRoomTypes: 6776, roomTypeListingRate: null, pendingRoomTypes: 13789 },
    { supplier: "ratehawk", quota: null, qps: 0.5, totalHotels: 47035, pricedHotels: 43183, pricedRate: null, unpricedHotels: null, listedHotels: 30578, listingRate: null, matchedHotels: null, attachRate: null, pendingHotels: 12605, totalRoomTypes: 325593, listedRoomTypes: 179544, roomTypeListingRate: null, pendingRoomTypes: 94037 },
    { supplier: "美联", quota: "10000 USD", qps: 50, totalHotels: null, pricedHotels: null, pricedRate: null, unpricedHotels: null, listedHotels: null, listingRate: null, matchedHotels: null, attachRate: null, pendingHotels: null, totalRoomTypes: null, listedRoomTypes: null, roomTypeListingRate: null, pendingRoomTypes: null },
    { supplier: "travelgate", quota: "100K Euro", qps: 30, totalHotels: 6671, pricedHotels: 5826, pricedRate: null, unpricedHotels: null, listedHotels: 3422, listingRate: null, matchedHotels: 4886, attachRate: null, pendingHotels: 1152, totalRoomTypes: null, listedRoomTypes: null, roomTypeListingRate: null, pendingRoomTypes: null },
    { supplier: "hoteldo", quota: null, qps: 100, totalHotels: 13472, pricedHotels: 6001, pricedRate: null, unpricedHotels: null, listedHotels: 4951, listingRate: null, matchedHotels: 4951, attachRate: null, pendingHotels: 1050, totalRoomTypes: null, listedRoomTypes: null, roomTypeListingRate: null, pendingRoomTypes: null },
  ],

  // ========== 渠道上线汇总 ==========
  channels: [
    { name: "去哪儿-住易通", listedHotels: 378750, matchedHotels: 335393, matchRate: null, pricedHotels: 167883, pricedRate: null, exposedHotels: 34941, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: 12809208, exposedProducts: 518907, productExposedRate: null, bw: { eps: 45, agoda: 16, hb: 40, wb: 14, wbSafe: 7, dida: 14, mt: 7 }, resourceType: { eps: "全量", agoda: "全量", hb: "全量", wb: "全量", wbSafe: "全量", dida: "全量", mt: "全量" }, veilSetting: "不同阶段上线规则不同，未拉齐", veilRemark: null },
    { name: "去哪儿-易住", listedHotels: 385562, matchedHotels: 341402, matchRate: null, pricedHotels: 167894, pricedRate: null, exposedHotels: 37868, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: 12824816, exposedProducts: 635392, productExposedRate: null, bw: { eps: 45, agoda: 16, hb: 40, wb: 14, wbSafe: 7, dida: 14, mt: 7 }, resourceType: { eps: "全量", agoda: "全量", hb: "全量", wb: "全量", wbSafe: "全量", dida: "全量", mt: "全量" }, veilSetting: null, veilRemark: null },
    { name: "飞猪", listedHotels: 385438, matchedHotels: 227462, matchRate: null, pricedHotels: 80635, pricedRate: null, exposedHotels: null, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: null, exposedProducts: null, productExposedRate: null, bw: { eps: 45, agoda: 16, hb: 40, wb: 14, wbSafe: 7, dida: 14, mt: 7 }, resourceType: { eps: "全量", agoda: "全量", hb: "全量", wb: "全量", wbSafe: "全量", dida: "全量", mt: "全量" }, veilSetting: null, veilRemark: null },
    { name: "飞猪-乐住", listedHotels: 363946, matchedHotels: 217196, matchRate: null, pricedHotels: 90686, pricedRate: null, exposedHotels: null, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: null, exposedProducts: null, productExposedRate: null, bw: { eps: 45, agoda: 16, hb: 40, wb: 14, wbSafe: 7, dida: 14, mt: 7 }, resourceType: { eps: "全量", agoda: "全量", hb: "全量", wb: "全量", wbSafe: "全量", dida: "全量", mt: "全量" }, veilSetting: null, veilRemark: null },
    { name: "飞猪-安住Y", listedHotels: 66743, matchedHotels: 60357, matchRate: null, pricedHotels: 36001, pricedRate: null, exposedHotels: null, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: null, exposedProducts: null, productExposedRate: null, bw: { eps: 45, agoda: 16, hb: 40, wb: 14, wbSafe: 7, dida: 0, mt: 0 }, resourceType: { eps: "高危酒店+AGD售卖酒店", agoda: "高危酒店+AGD售卖酒店", hb: "高危酒店+AGD售卖酒店", wb: "高危酒店+AGD售卖酒店", wbSafe: "高危酒店+AGD售卖酒店", dida: null, mt: null }, veilSetting: "F4以上或机票人群可见", veilRemark: null },
    { name: "飞猪-享住S", listedHotels: 28556, matchedHotels: 25139, matchRate: null, pricedHotels: 18865, pricedRate: null, exposedHotels: null, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: null, exposedProducts: null, productExposedRate: null, bw: { eps: 45, agoda: 0, hb: 11, wb: 11, wbSafe: 0, dida: 0, mt: 0 }, resourceType: { eps: "有产+渠道热销+EPS热销", agoda: null, hb: "有产+渠道热销+EPS热销", wb: "有产+渠道热销+EPS热销", wbSafe: null, dida: null, mt: null }, veilSetting: "无", veilRemark: null },
    { name: "同程", listedHotels: null, matchedHotels: 295023, matchRate: 0.851943, pricedHotels: 134159, pricedRate: null, exposedHotels: null, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: 936759, exposedProducts: 64583, productExposedRate: null, bw: { eps: 45, agoda: 16, hb: 40, wb: 14, wbSafe: 7, dida: 14, mt: 7 }, resourceType: { eps: "全量", agoda: "全量", hb: "全量", wb: "全量", wbSafe: "全量", dida: "全量", mt: "全量" }, veilSetting: null, veilRemark: null },
    { name: "同程-嗨住", listedHotels: null, matchedHotels: 276919, matchRate: null, pricedHotels: 132810, pricedRate: null, exposedHotels: null, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: 1393391, exposedProducts: 260108, productExposedRate: null, bw: { eps: 45, agoda: 16, hb: 40, wb: 14, wbSafe: 7, dida: 14, mt: 7 }, resourceType: { eps: "全量", agoda: "全量", hb: "全量", wb: "全量", wbSafe: "全量", dida: "全量", mt: "全量" }, veilSetting: "限制IP+CGU(要求持Master金卡以上的用户）", veilRemark: null },
    { name: "同程-优住S", listedHotels: null, matchedHotels: 19581, matchRate: null, pricedHotels: 308, pricedRate: null, exposedHotels: null, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: 2445, exposedProducts: 171, productExposedRate: null, bw: { eps: 45, agoda: 0, hb: 11, wb: 11, wbSafe: 0, dida: 0, mt: 0 }, resourceType: { eps: "有产+渠道热销+EPS热销", agoda: null, hb: "有产+渠道热销+EPS热销", wb: "有产+渠道热销+EPS热销", wbSafe: null, dida: null, mt: null }, veilSetting: "无", veilRemark: "优住可取消订单占比（70%）分BW看，5天以上可取消占比超70，若要做限制，可限制5天以上可取消订单" },
    { name: "美团", listedHotels: 113840, matchedHotels: 81683, matchRate: null, pricedHotels: null, pricedRate: null, exposedHotels: null, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: null, exposedProducts: null, productExposedRate: null, bw: { eps: 45, agoda: 16, hb: 40, wb: 14, wbSafe: 7, dida: 14, mt: 0 }, resourceType: { eps: "白名单：有产+MT热销+AGD售卖酒店", agoda: "白名单：有产+MT热销+AGD售卖酒店", hb: "白名单：有产+MT热销+AGD售卖酒店", wb: "白名单：有产+MT热销+AGD售卖酒店", wbSafe: "白名单：有产+MT热销+AGD售卖酒店", dida: "白名单：有产+MT热销+AGD售卖酒店", mt: null }, veilSetting: null, veilRemark: null },
    { name: "美团-易住", listedHotels: 20301, matchedHotels: 17994, matchRate: null, pricedHotels: null, pricedRate: null, exposedHotels: null, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: null, exposedProducts: null, productExposedRate: null, bw: { eps: 45, agoda: 0, hb: 7, wb: 0, wbSafe: 0, dida: 0, mt: 0 }, resourceType: { eps: "有产+渠道热销+EPS热销", agoda: null, hb: "有产+渠道热销+EPS热销", wb: "有产+渠道热销+EPS热销", wbSafe: null, dida: null, mt: null }, veilSetting: "无", veilRemark: "目前不建议设置，若开设美团面纱，考虑针对一年大于5张离店订单用户，或采用IP限制，可二选一；分销渠道B2B只能针对Agoda设置" },
    { name: "ETG", listedHotels: 193666, matchedHotels: null, matchRate: null, pricedHotels: null, pricedRate: null, exposedHotels: null, exposedRate: null, totalRoomTypes: null, matchedRoomTypes: null, pricedProducts: null, exposedProducts: null, productExposedRate: null, bw: { eps: 30, agoda: 0, hb: 30, wb: 14, wbSafe: 0, dida: 0, mt: 0 }, resourceType: { eps: "已加白名单9k（可售卖）+未加白名单18w（待售卖）", agoda: null, hb: "已加白名单9k（可售卖）+未加白名单18w（待售卖）", wb: "已加白名单9k（可售卖）+未加白名单18w（待售卖）", wbSafe: null, dida: null, mt: null }, veilSetting: null, veilRemark: null },
  ],

  // ========== 渠道是否提供用户信息 ==========
  channelUserInfo: [
    { channel: "飞猪", providesInfo: true, email: null, phone: null },
    { channel: "去哪", providesInfo: true, email: null, phone: null },
    { channel: "Agoda国际", providesInfo: false, email: null, phone: null },
    { channel: "美团", providesInfo: false, email: null, phone: null },
    { channel: "ETG", providesInfo: false, email: null, phone: 13024081000 },
    { channel: "同程", providesInfo: false, email: null, phone: null },
  ],

  // ========== 敏感酒店销售策略 ==========
  sensitiveStrategies: [
    { channel: "飞猪-安住Y", expedia: "高危酒店", hotelbeds: "高危酒店", webbeds: "高危酒店", webbedsSafe: "高危酒店", agoda: "高危酒店", dida: "高危酒店", meituan: null },
    { channel: "飞猪-享住S", expedia: "普通酒店", hotelbeds: "普通酒店且非RSP", webbeds: "普通酒店", webbedsSafe: "普通酒店", agoda: "/", dida: "普通酒店", meituan: null },
    { channel: "同程-优住S", expedia: "普通酒店", hotelbeds: "普通酒店且非RSP", webbeds: "普通酒店", webbedsSafe: "普通酒店", agoda: "/", dida: "普通酒店", meituan: null },
    { channel: "美团-易住S", expedia: "普通酒店", hotelbeds: "普通酒店且非RSP", webbeds: "普通酒店", webbedsSafe: "普通酒店", agoda: "/", dida: "普通酒店", meituan: null },
    { channel: "嗨住-分销", expedia: "普通酒店+敏感酒店", hotelbeds: "/", webbeds: "普通酒店", webbedsSafe: "普通酒店", agoda: "/", dida: "普通酒店", meituan: "分销的所有酒店都不卖嗨住" },
  ],

  // ========== BW配置 ==========
  bwConfig: {
    suppliers: ["EPS", "hotelbeds", "webbeds", "webbeds-safe", "Agoda", "Dida", "美团国际", "rakuten", "ratehawk", "美联", "ratehawk B2B", "travelgate", "hoteldo"],
    channels: [
      { name: "总体", values: [90, 30, 21, 40, 45, 21, 10, 14, 20, 7, 60, 45, 28, 14, 28, 21, 16, 15, 16, 16, 65, 30, 14, 7, 14, 14, 7, 3] },
      { name: "飞猪", values: [90, 14, 30, 21, 40, 45, 21, 10, 14, 20, 14, 60, 45, 28, 14, 28, 21, 16, 15, 16, 16, 65, 30, 14, 7, 14, 14, 7, 3] },
      { name: "飞猪-乐住", values: [90, 14, 30, 21, 40, 45, 21, 10, 14, 20, 7, 60, 45, 28, 14, 28, 21, 16, 15, 16, 16, 65, 30, 14, 7, 14, 14, 7, null] },
      { name: "美团", values: [90, 14, 14, 21, 40, 45, 21, 10, 14, 7, 7, 60, 45, 28, 14, 28, 21, 16, 15, 16, 10, 65, 30, 14, null, 14, 14, 7, null] },
      { name: "同程-嗨住", values: [90, 14, 14, 21, 40, 45, 21, 10, 14, 7, 7, 60, 45, 28, 14, 28, 21, 16, 15, 16, 10, 65, 30, 14, null, 14, 14, 7, null] },
      { name: "同程-马住", values: [90, 14, 14, 21, 40, 45, 21, 10, 14, 7, 7, 60, 45, 28, 14, 28, 21, 16, 15, 16, 10, 65, 30, 14, null, 14, 14, 7, null] },
      { name: "嗨住-分销", values: [90, 14, 14, 21, 40, 45, 21, 10, 14, 7, 7, 60, 45, 28, 14, 28, 21, 16, 15, 16, 10, 65, 30, 14, null, 14, 14, 7, null] },
      { name: "飞猪-安住Y", values: [90, 21, 21, 40, 45, 21, 10, 14, 20, 14, 14, 60, 45, 28, 14, 28, 21, 16, 15, 16, 16, 65, 30, 14, 7, 14, 14, 7, 3] },
      { name: "飞猪-享住S", values: [45, 14, 14, 21, 40, 45, 21, 10, 14, 7, 7, 60, 45, 28, 14, 28, 21, 16, 15, 16, 10, 65, 30, 14, null, 14, 14, 7, null] },
      { name: "同程-优住S", values: [45, 14, 14, 21, 40, 45, 21, 10, 14, 7, 7, 60, 45, 28, 14, 28, 21, 16, 15, 16, 10, 65, 30, 14, null, 14, 14, 7, null] },
      { name: "美团-易住S", values: [45, 14, 14, 21, 40, 45, 21, 10, 14, 7, 7, 60, 45, 28, 14, 28, 21, 16, 15, 16, 10, 65, 30, 14, null, 14, 14, 7, null] },
      { name: "ETG", values: [30, 0, 30, 14, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { name: "ETG-马甲", values: [30, 0, 30, 14, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ]
  },

  // ========== 供应商上线记录（样本） ==========
  supplierOnboardingRecords: [
    { date: "2026-04-13", type: "更新酒店", sellType: "美团供应商提供的热销", eps: null, id2: null, hb: null, wb: null, agd: null, wbSafe: null, dida: null, meituan: 10441, rakuten: null, ratehawk: null, meilian: null, ratehawkB2B: null, travelgate: null },
    { date: "2026-03-31", type: "更新酒店", sellType: "有价酒店", eps: null, id2: null, hb: 34412, wb: null, agd: null, wbSafe: null, dida: null, meituan: null, rakuten: null, ratehawk: null, meilian: null, ratehawkB2B: null, travelgate: null },
    { date: "2026-03-19", type: "首次上线", sellType: null, eps: null, id2: null, hb: null, wb: null, agd: null, wbSafe: null, dida: null, meituan: null, rakuten: null, ratehawk: null, meilian: null, ratehawkB2B: null, travelgate: 3422 },
    { date: "2026-03-10", type: "更新酒店", sellType: null, eps: null, id2: null, hb: null, wb: null, agd: null, wbSafe: null, dida: 127230, meituan: null, rakuten: null, ratehawk: null, meilian: null, ratehawkB2B: null, travelgate: null },
    { date: "2026-02-26", type: "首次上线", sellType: null, eps: null, id2: null, hb: null, wb: null, agd: null, wbSafe: null, dida: null, meituan: null, rakuten: null, ratehawk: null, meilian: null, ratehawkB2B: null, travelgate: 4713 },
    { date: "2025-12-03", type: "首次上线", sellType: null, eps: null, id2: null, hb: null, wb: null, agd: null, wbSafe: null, dida: null, meituan: null, rakuten: null, ratehawk: null, meilian: null, ratehawkB2B: null, travelgate: null },
    { date: "2025-11-01", type: "首次上线", sellType: null, eps: null, id2: null, hb: null, wb: null, agd: null, wbSafe: null, dida: null, meituan: null, rakuten: null, ratehawk: null, meilian: null, ratehawkB2B: null, travelgate: null },
    { date: "2025-10-14", type: "更新酒店", sellType: "酒店详情更新", eps: null, id2: null, hb: null, wb: null, agd: null, wbSafe: null, dida: null, meituan: null, rakuten: null, ratehawk: null, meilian: null, ratehawkB2B: null, travelgate: null },
    { date: "2025-10-01", type: "首次上线", sellType: null, eps: null, id2: null, hb: null, wb: null, agd: null, wbSafe: null, dida: null, meituan: null, rakuten: null, ratehawk: null, meilian: null, ratehawkB2B: null, travelgate: null },
    { date: "2025-09-25", type: "首次上线", sellType: null, eps: null, id2: null, hb: null, wb: null, agd: null, wbSafe: null, dida: null, meituan: null, rakuten: null, ratehawk: null, meilian: null, ratehawkB2B: null, travelgate: null },
  ],

  // ========== 渠道上线记录（样本） ==========
  channelOnboardingRecords: [
    { date: "2026-06-02", supplier: null, remark: null, type: "jalan首批上线酒店", quNaEr: null, quNaErYiZhu: null, feiZhu: null, feiZhuLeZhu: null, tongCheng: null, tongChengHaiZhu: null, tongChengMaZhu: 400, haiZhuFenXiao: null, meiTuan: null, etg: null, etgMask: null, feiZhuAnZhu: null, feiZhuXiangZhu: null, tongChengYouZhu: null, meiTuanYiZhu: null },
    { date: "2026-05-29", supplier: null, remark: null, type: "美团易住更换酒店", quNaEr: null, quNaErYiZhu: null, feiZhu: null, feiZhuLeZhu: null, tongCheng: null, tongChengHaiZhu: null, tongChengMaZhu: null, haiZhuFenXiao: null, meiTuan: null, etg: null, etgMask: null, feiZhuAnZhu: null, feiZhuXiangZhu: null, tongChengYouZhu: null, meiTuanYiZhu: 522 },
    { date: "2026-05-18", supplier: null, remark: null, type: "ohmyhotel首批上线酒店", quNaEr: null, quNaErYiZhu: null, feiZhu: null, feiZhuLeZhu: null, tongCheng: null, tongChengHaiZhu: null, tongChengMaZhu: 187, haiZhuFenXiao: null, meiTuan: 222, etg: null, etgMask: null, feiZhuAnZhu: null, feiZhuXiangZhu: null, tongChengYouZhu: null, meiTuanYiZhu: null },
    { date: "2026-05-09", supplier: null, remark: null, type: "安住敏感品牌酒店增长售卖", quNaEr: null, quNaErYiZhu: null, feiZhu: null, feiZhuLeZhu: null, tongCheng: null, tongChengHaiZhu: null, tongChengMaZhu: null, haiZhuFenXiao: null, meiTuan: null, etg: null, etgMask: null, feiZhuAnZhu: 20000, feiZhuXiangZhu: null, tongChengYouZhu: null, meiTuanYiZhu: null },
    { date: "2026-05-09", supplier: null, remark: null, type: "同程优住新增售卖", quNaEr: null, quNaErYiZhu: null, feiZhu: null, feiZhuLeZhu: null, tongCheng: null, tongChengHaiZhu: null, tongChengMaZhu: null, haiZhuFenXiao: null, meiTuan: null, etg: null, etgMask: null, feiZhuAnZhu: null, feiZhuXiangZhu: null, tongChengYouZhu: 78442, meiTuanYiZhu: null },
    { date: "2026-04-28", supplier: null, remark: null, type: "去哪热销加白", quNaEr: 420, quNaErYiZhu: 420, feiZhu: null, feiZhuLeZhu: null, tongCheng: null, tongChengHaiZhu: null, tongChengMaZhu: null, haiZhuFenXiao: null, meiTuan: null, etg: null, etgMask: null, feiZhuAnZhu: null, feiZhuXiangZhu: null, tongChengYouZhu: null, meiTuanYiZhu: null },
    { date: "2026-04-28", supplier: null, remark: null, type: "美团新增白名单售卖加白", quNaEr: null, quNaErYiZhu: null, feiZhu: null, feiZhuLeZhu: null, tongCheng: null, tongChengHaiZhu: null, tongChengMaZhu: null, haiZhuFenXiao: null, meiTuan: 1706, etg: null, etgMask: null, feiZhuAnZhu: null, feiZhuXiangZhu: null, tongChengYouZhu: null, meiTuanYiZhu: 2590 },
    { date: "2026-04-16", supplier: null, remark: null, type: "作废ID换成新ID新增", quNaEr: null, quNaErYiZhu: null, feiZhu: 7706, feiZhuLeZhu: 8038, tongCheng: null, tongChengHaiZhu: null, tongChengMaZhu: null, haiZhuFenXiao: null, meiTuan: null, etg: null, etgMask: null, feiZhuAnZhu: 2504, feiZhuXiangZhu: 379, tongChengYouZhu: null, meiTuanYiZhu: null },
    { date: "2026-04-15", supplier: null, remark: null, type: "EPS五月促销", quNaEr: null, quNaErYiZhu: null, feiZhu: null, feiZhuLeZhu: null, tongCheng: 12064, tongChengHaiZhu: null, tongChengMaZhu: null, haiZhuFenXiao: null, meiTuan: null, etg: null, etgMask: null, feiZhuAnZhu: null, feiZhuXiangZhu: null, tongChengYouZhu: null, meiTuanYiZhu: null },
  ],

  // ========== 下线记录（样本） ==========
  offlineRecords: [
    { centerId: "797200", supplier: "全部", hotelName: "9037hs 6卧室5浴室冠军门别墅", channel: "全部", status: "下线", reason: "重复酒店聚合风险", detail: "聚合数量>20且无产的酒店", processDate: "2026-04-22", operator: "EVE" },
    { centerId: "818730", supplier: "全部", hotelName: "葡萄牙莱蒂齐亚鸢尾花2", channel: "全部", status: "下线", reason: "重复酒店聚合风险", detail: "聚合数量>20且无产的酒店", processDate: "2026-04-22", operator: "EVE" },
    { centerId: "1132005", supplier: "全部", hotelName: "设备完善开放式公寓酒店 @ 桑默艾肯春湖", channel: "全部", status: "下线", reason: "重复酒店聚合风险", detail: "聚合数量>20且无产的酒店", processDate: "2026-04-22", operator: "EVE" },
    { centerId: "1630229", supplier: "agoda", hotelName: "香港苏豪希尔顿摩庭酒店", channel: "飞猪/乐住/安住/美团", status: "下线", reason: "agoda测试单", detail: null, processDate: "2026-03-24", operator: "EVE" },
    { centerId: "870928", supplier: "全部", hotelName: "JR 东日本酒店梅兹镰仓大船", channel: "飞猪-享住S", status: "下线", reason: "EPS违规单", detail: "飞猪享住下游匹配错误", processDate: "2026-03-24", operator: "EVE" },
    { centerId: "1225898", supplier: "全部", hotelName: "Room Mate系列大菲利波酒店, 罗马-特雷维喷泉", channel: "飞猪-享住S/同程-优住S/美团-易住/ETG全部/agoda国际", status: "下线", reason: "EPS违规单", detail: null, processDate: "2026-03-23", operator: "EVE" },
    { centerId: "1342168", supplier: "全部", hotelName: "瓜亚基尔机场波多黎各太平洋酒店", channel: "全部", status: "下线", reason: "EPS违规单", detail: "税费问题", processDate: "2026-03-17", operator: "EVE" },
    { centerId: "927074", supplier: "agoda", hotelName: "金普顿玛莱曼谷酒店 IHG", channel: "飞猪/乐住/安住/美团", status: "下线", reason: "agoda测试单", detail: null, processDate: "2026-02-25", operator: "EVE" },
    { centerId: "1048268", supplier: "全部", hotelName: "普拉亚村庄酒店", channel: "美团-易住", status: "下线", reason: "EPS违规单", detail: "美团易住下游匹配错误", processDate: "2026-02-25", operator: "EVE" },
    { centerId: "1093059", supplier: "全部", hotelName: "里亚德厄尔尼诺瓦", channel: "全部", status: "下线", reason: "EPS测试单", detail: "EPS临期测试单", processDate: "2026-01-06", operator: "EVE" },
  ],

  // ========== 统计数据 ==========
  stats: {
    totalSuppliers: 16,
    activeSuppliers: 14,
    totalChannels: 12,
    totalHotels: 1947491,
    totalListedHotels: 1259043,
    totalOfflineRecords: 676,
    totalOnboardingRecords: 191,
  }
};

// Helper functions
const formatNumber = (num) => {
  if (num === null || num === undefined) return "-";
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + "万";
  }
  return num.toLocaleString();
};

const formatPercent = (val) => {
  if (val === null || val === undefined) return "-";
  return (val * 100).toFixed(2) + "%";
};

const getStatusColor = (status) => {
  switch (status) {
    case "正常": return "bg-green-100 text-green-800";
    case "未启用": return "bg-gray-100 text-gray-800";
    case "未上线": return "bg-yellow-100 text-yellow-800";
    default: return "bg-blue-100 text-blue-800";
  }
};
