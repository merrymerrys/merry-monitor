import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o,c as i,b as e,d as a,e as s,a as c}from"./app-cab595a5.js";const d="/assets/chart-524f20a2.png",h="/assets/peak-951e862d.png",p={},l={class:"hint-container info"},_=e("p",{class:"hint-container-title"},"图表展示",-1),f={href:"https://www.qcustomplot.com/",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[a("图表功能囊括了项目中常见的几类图表。使用频率最高的位移、加速度图；使用频率较低的1/3倍频、轴心轨迹；"),e("br"),a(" 以及计划将要加入的转速图功能。并且提供了特征值聚合后的数据列表。")],-1),u=c('<h2 id="页面标注" tabindex="-1"><a class="header-anchor" href="#页面标注" aria-hidden="true">#</a> 页面标注</h2><p>图表功能提供了丰富的辅助控件，基本涵盖了大多数的应用场景与测试任务。</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="通道选择" tabindex="-1"><a class="header-anchor" href="#通道选择" aria-hidden="true">#</a> 通道选择</h2><p>一般来说，加速度通道的起始位置相比位移通道要更靠后。在查看加速度数据图谱时，应及时调整通道选择到 <strong>你感兴趣的</strong> 通道上。</p><h2 id="数据游标" tabindex="-1"><a class="header-anchor" href="#数据游标" aria-hidden="true">#</a> 数据游标</h2><p>默认情况下，数据游标不可见。用户可通过点击游标使能，打开或关闭游标的显示。游标移动时，其坐标值实时更新在图表页右上角。</p><h2 id="缩放方向" tabindex="-1"><a class="header-anchor" href="#缩放方向" aria-hidden="true">#</a> 缩放方向</h2><p>图表缩放同时支持滚轮缩放与拖动缩放，缩放方向默认为横向缩放，可通过开关修改为纵向缩放。<br> 每次图表刷新网络数据时，都会重新计算纵向坐标轴的范围。如果你需要保持纵向缩放的范围，请提前关闭刷新使能。</p><p>同时，横向缩放设定了最大缩放范围。因此，反向使用横向缩放，都能回归到最初的图像状态。</p><h2 id="屏幕截图" tabindex="-1"><a class="header-anchor" href="#屏幕截图" aria-hidden="true">#</a> 屏幕截图</h2><p>应用程序内置了截图功能。在测试过程中，常常需要保存图像状态，是一个高频的应用场景。<br> 因此，应用程序同时提供了保存图像截图与保存图像数据文本两种方式的交互。当需要查看当前图像的文本数据时，则将保存类型切换到数据即可。</p><p><strong>此外，在侧边栏左下角额外提供了一个全局的截图按钮。该截图按钮支持 <code>Ctrl+S</code> 快捷键激活。</strong></p><h2 id="幅频最大值" tabindex="-1"><a class="header-anchor" href="#幅频最大值" aria-hidden="true">#</a> 幅频最大值</h2><p>幅频最大值，由应用程序读取当前X轴的左右范围。在X轴的左右范围中，从原始图像数据中获取。</p><p>例如：当X轴的范围缩放至35000-70000的范围时，则在网络更新后，应用程序将从35000-70000的数据范围中寻找最大值。<br> 范围之外的数据则不参与计算。</p><p>所以说，左侧的幅频最大值表现的是当前加速度图像中，X轴范围内的最大值。<br> 这在某些需要查看一小段数据范围内的最大值时，是非常实用的。当然，也可以暂停刷新数据，通过游标的方向实现相同的目的。</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',18);function m(b,x){const t=n("ExternalLinkIcon");return o(),i("div",null,[e("div",l,[_,e("p",null,[a("图表功能的构建，基于"),e("a",f,[a("QCustomPlot"),s(t)]),a("开源库的支持。")]),g]),u])}const w=r(p,[["render",m],["__file","dataview.html.vue"]]);export{w as default};
