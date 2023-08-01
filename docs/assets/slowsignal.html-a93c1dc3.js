import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as d,f as t,b as e,a as n,w as o,d as c}from"./app-3756e335.js";const l="/merry-monitor/assets/slowsignal-5e3c5410.png",h={},_=c('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>近期新增的测试条目，需要对采集的工艺信号进行线性回归。</p><p>由于当前阶段工艺信号的数量不可控，只在个别的项目中存在。不适合将工艺信号的采集流程作为常驻功能集成在数据主屏上。</p><p>因此，作为可以控制增减的功能页，放置在二级导航里。</p></div><h2 id="页面标注" tabindex="-1"><a class="header-anchor" href="#页面标注" aria-hidden="true">#</a> 页面标注</h2><p>功能页将数据主屏与测试表格的部分功能进行了压缩删减与集成。目前最多支持8组工艺信号，根据需要可扩展通道数。</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="自动采集" tabindex="-1"><a class="header-anchor" href="#自动采集" aria-hidden="true">#</a> 自动采集</h2>',5),p=t("p",null,[e("使用自动采集功能的过程中，应用程序将接管 "),t("strong",null,"测试电压、数据采集"),e(" 这两个功能按钮。")],-1),u=t("h2",{id:"通道使能",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#通道使能","aria-hidden":"true"},"#"),e(" 通道使能")],-1),f=t("p",null,"应用程序默认开启了8个通道的使能，点击可关闭，所见即所得。",-1),m=t("h2",{id:"测量误差",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#测量误差","aria-hidden":"true"},"#"),e(" 测量误差")],-1),g=t("h2",{id:"线性回归",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#线性回归","aria-hidden":"true"},"#"),e(" 线性回归")],-1),x=t("p",null,[e("线性回归系数文件的默认名为 "),t("code",null,"SIGCorrect.xml"),e("，点击可下载。")],-1);function E(b,A){const a=r("RouterLink");return s(),d("div",null,[_,t("p",null,[e("自动采集功能请参考 "),n(a,{to:"/guide/monitor.html#%E8%87%AA%E5%8A%A8%E9%87%87%E9%9B%86"},{default:o(()=>[e("数据主屏")]),_:1}),e("。")]),p,u,f,m,t("p",null,[e("测量误差说明请参考 "),n(a,{to:"/guide/excel.html#%E6%B5%8B%E9%87%8F%E8%AF%AF%E5%B7%AE"},{default:o(()=>[e("测试表格")]),_:1}),e("。")]),g,x])}const w=i(h,[["render",E],["__file","slowsignal.html.vue"]]);export{w as default};