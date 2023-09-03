import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as o,a,b as n,d as i}from"./app-d0d8c9d1.js";const h={},d=i('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>该页记录了 <strong>Merry Monitor</strong> 的更新日志</p></div><h2 id="merrymonitor-v1-0-0-2023-07-08" tabindex="-1"><a class="header-anchor" href="#merrymonitor-v1-0-0-2023-07-08" aria-hidden="true">#</a> merrymonitor v1.0.0 (2023-07-08)</h2><ul><li>第一版应用程序release</li><li>操作文档着手计划中</li></ul><h2 id="merrymonitor-v1-1-0-2023-07-09" tabindex="-1"><a class="header-anchor" href="#merrymonitor-v1-1-0-2023-07-09" aria-hidden="true">#</a> merrymonitor v1.1.0 (2023-07-09)</h2><ul><li>优化：截图默认格式由jpg转为png格式</li><li>优化：调整侧边栏布局</li><li>新增：打开文档功能、全局截图功能</li><li>新增：图表页纵向缩放功能</li><li>修复：XML通道配置页，配置选项默认关闭的问题</li></ul><h2 id="merrymonitor-v1-2-0-2023-07-12" tabindex="-1"><a class="header-anchor" href="#merrymonitor-v1-2-0-2023-07-12" aria-hidden="true">#</a> merrymonitor v1.2.0 (2023-07-12)</h2><ul><li>优化：将测试流程的弹窗提示，更改为文字提示，减少弹窗干扰</li><li>优化：增加点击指令时的toast提示</li><li>修复：加速度时域图游标值单位显示错误的BUG</li><li>新增：https授权机制</li><li>优化：截图文件名默认使用uuid</li></ul><h2 id="merrymonitor-v1-4-0-2023-07-16" tabindex="-1"><a class="header-anchor" href="#merrymonitor-v1-4-0-2023-07-16" aria-hidden="true">#</a> merrymonitor v1.4.0 (2023-07-16)</h2><ul><li>优化：settings配置页样式修改，文字部分相比之前会更加突出</li><li>优化：调整网络接口类兼容层实现方式</li><li>新增：添加初版VAS软件TCP协议支持（调试用途）</li><li>改动：修改了保存配置后的逻辑，由用户手动重启改动为自动重启</li><li>改动：计算线性回归系数时，不再跳过未选中的通道，即32个通道全部重新计算一次</li><li>新增：添加帮助菜单、版本信息对话框、更新下载对话框；修改了操作文档的入口</li><li>优化：部分窗口的样式进行了微调</li><li>新增：针对最近的新版网络协议VAS，添加任务代理表格功能</li><li>新增：FPGA详细版本信息网页入口</li></ul><h2 id="merrymonitor-v1-5-0-2023-07-23" tabindex="-1"><a class="header-anchor" href="#merrymonitor-v1-5-0-2023-07-23" aria-hidden="true">#</a> merrymonitor v1.5.0 (2023-07-23)</h2><ul><li>新增：调整了侧边导航栏布局，新增“更多”选项页</li><li>新增：新增近期项目的适配，针对新的需求，添加了工艺信号的数据校准功能页</li><li>新增：新增操作说明引导页</li></ul><h2 id="merrymonitor-v2-0-0-2023-07-30" tabindex="-1"><a class="header-anchor" href="#merrymonitor-v2-0-0-2023-07-30" aria-hidden="true">#</a> merrymonitor v2.0.0 (2023-07-30)</h2>',12),s=i('<strong>大版本更新</strong><ul><li>新增：主页通道报警功能提示，红色边框表示报警、黄色边框表示预警</li><li>优化：图表页将从限制在有效数据范围内的缩放更改为无限制</li><li>改动：取消了横纵向缩放滑动开关；取消了图谱打印机功能</li><li>新增：<strong>图谱复位功能，双击还原图谱坐标范围</strong></li><li>新增：JSON配置页，还原了Web版本的配置可视化UI</li><li>新增：Http接口支持，添加XML、JSON配置页的网络收发功能</li><li>新增：设备配置参数热重载功能</li><li>优化：调整了XML配置页的UI逻辑，以事件绑定的方式实现MVVM模式，优化了内存消耗</li><li>新增：支持可调采样率、可调采样点数的数据结构</li><li>新增：图表页分离功能，支持多图谱同时刷新</li><li>优化：字体风格进行了统一</li><li>新增：添加了简易的设备连接向导</li></ul><h2 id="merrymonitor-v2-2-0-2023-08-20" tabindex="-1"><a class="header-anchor" href="#merrymonitor-v2-2-0-2023-08-20" aria-hidden="true">#</a> merrymonitor v2.2.0 (2023-08-20)</h2><ul><li>新增：数据库统计功能，获取并展示边缘设备的数据库统计信息</li><li>优化：XML配置、JSON配置、数据库统计添加内部示例</li><li>新增：设备状态展示，目前提供了设备日志、设备状态展示；校准系数、配置文件的数据库存储</li><li>优化：在网络日志中，添加了调试输出的控制开关</li><li>优化：注意到保存文件后，通常需要跳转到该文件。因此，应用程序将主动打开资源管理器</li><li>优化：主屏页增加双击跳转对应通道图谱功能</li><li>优化：Toast Ui表现更接近Web效果</li><li>新增：检测更新功能，目前更新地址为内网地址</li><li>新增：后端扩展服务，目前提供了RK3399核心板的后端扩展包</li><li>新增：设备关机功能</li></ul><h2 id="merrymonitor-v2-3-0-2023-09-03" tabindex="-1"><a class="header-anchor" href="#merrymonitor-v2-3-0-2023-09-03" aria-hidden="true">#</a> merrymonitor v2.3.0 (2023-09-03)</h2><ul><li>新增：<strong>IP扫描助手，最高支持8线程同时扫描网段。</strong></li><li>优化：位移、加速度、转速图表，增加鼠标移动时的坐标值显示</li><li>优化：位移、加速度、转速图表，增加时域数据的最大最小电压显示</li><li>优化：新增通道快选组件，优化下拉框选择通道时，因信息密度不够，需要滚动选项的问题</li><li>优化：适配Windows缩放策略</li><li>新增：VAS协议适配，通道配置改动</li><li>新增：新增V2.3.2网络协议适配，增加一组数据结构</li><li>改动：JSON配置与VAS配置的布局互换</li></ul><h2 id="关于项目" tabindex="-1"><a class="header-anchor" href="#关于项目" aria-hidden="true">#</a> 关于项目</h2><div class="hint-container tip"><p class="hint-container-title">为什么要做桌面程序？</p><p>桌面程序的性能优于网页性能，便于统合需求与应用分发。</p><p>为什么去做？一方面是为了重新熟悉Qt的开发知识，另一方面也为自己积累履历，深挖护城河。至于是否真正地解决了项目混乱的问题，是次要原因。</p><p><strong>该应用不属于商业软件</strong>，随时可能因为作者的个人原因停止维护。</p></div>',8);function m(c,u){const r=e("badge");return t(),o("div",null,[d,a(r,{text:"注",type:"tip"}),n(),s])}const y=l(h,[["render",m],["__file","changelog.html.vue"]]);export{y as default};
