import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,a as r}from"./app-aa96891e.js";const s="/merry-monitor/assets/setting-0b3ddcb2.png",o={},a=r('<div class="hint-container info"><p class="hint-container-title">项目选择</p><p>随着时间的推移，不同的项目需求积累了众多的上位机版本。它们之间互相不通用，只对特定项目有效。<br> 作为一名以FPGA开发为主业，长期混迹Linux、前端娱乐圈的算法爱好者。终于忍不住重新拿起Qt，重写了一份全新的桌面程序。</p><p>为什么不用Web方案？那当然是想的，但是性能实在是有点绷不住。</p><p>正因如此，才更希望能通过这一版桌面程序，解决混乱的测试流程。<br> 一个好的设计模式非常重要！在这个项目中，借鉴了前端框架的设计思想与一些算法技巧，完成了接口的统一抽象。</p><p><strong>现在，这是一个可以兼容绝大多数以往项目的应用程序。</strong></p></div><h2 id="页面标注" tabindex="-1"><a class="header-anchor" href="#页面标注" aria-hidden="true">#</a> 页面标注</h2><p>连接设备网络前，请先选择合适的数据结构组与项目。同时注意中间的通道类型与属性，是否与当前设备情况保持一致。</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="选择内置项目" tabindex="-1"><a class="header-anchor" href="#选择内置项目" aria-hidden="true">#</a> 选择内置项目</h2><div class="hint-container info"><p class="hint-container-title">操作流程</p><ol><li>点击<strong>编辑设置</strong>，使能 <strong>数据结构、选择项目、自定义项目</strong> 等配置项。</li><li>点击<strong>数据结构、选择项目</strong>，按照当前正在进行的项目，选中对应的项目。</li><li>在右侧登录框中输入设备的IP地址及端口号，下拉框中内置了一些常用IP地址。</li><li>如需在设备启动后，自动进行登录操作，可勾选自动登录。</li><li>点击左侧保存设置，将选择后的配置保存至本地，配置将在下次启动时生效。</li><li><strong>重启测试软件。</strong></li></ol></div><h2 id="选择自定义项目" tabindex="-1"><a class="header-anchor" href="#选择自定义项目" aria-hidden="true">#</a> 选择自定义项目</h2><p>当你正在测试的设备，不属于内置项目的一种，但其数据结构又归属在某个数据结构分组下。你可以使用自定义项目功能。</p><div class="hint-container info"><p class="hint-container-title">操作流程</p><ol><li>点击<strong>编辑设置</strong>，使能 <strong>数据结构、选择项目、自定义项目</strong> 等配置项。</li><li>点击<strong>自定义项目</strong>，这时，左侧的通道类型、通道属性的将使能。</li><li>你可以通过点击这些类型、属性按钮调整配置，以适配你当前正在进行的测试设备。</li><li>点击<strong>数据结构</strong>，选择合适的数据结构分组。</li><li>在右侧登录框中输入设备的IP地址及端口号，可勾选自动登录。</li><li>点击左侧保存设置，将选择后的配置保存至本地，配置将在下次启动时生效。</li><li><strong>重启测试软件。</strong></li></ol></div><h2 id="网络连接" tabindex="-1"><a class="header-anchor" href="#网络连接" aria-hidden="true">#</a> 网络连接</h2><p>应用程序在IP下拉框中，内置了部分常用的IP地址。<br> 勾选自动登录的情况下，应用程序启动时，将会为你尝试使用保存的地址进行登录。（相当于桌面程序启动后，主动为你点击了登录按钮）</p><p>应用程序的日志系统，仅保留了网络部分的日志信息。以避免在长期运行的设备中，出现太多不关心的日志输出。<br> 日志内容主要集中在网络登录、连接、断开。重连等行为。</p><p><strong>每当加速度数据包刷新时，将引起观察窗口标题的变化，以及默认开启的顶部进度条的刷新。</strong></p><p>你可以通过这两种方式观察数据包的刷新情况。</p>',14),e=[a];function l(c,d){return t(),n("div",null,e)}const g=i(o,[["render",l],["__file","setting.html.vue"]]);export{g as default};