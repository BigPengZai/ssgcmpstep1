import{_ as s,c as a,o as n,N as l}from"./chunks/framework.f5b2a8ed.js";const y=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guild/quickstart.md"}'),p={name:"guild/quickstart.md"},t=l(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h1><ul><li>安装</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    npm i a-table-virtual</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>注意:</strong> 在 main.js 中导入插件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 导入插件</span></span>
<span class="line"><span style="color:#A6ACCD;">    import VirtualTablePlugin from &quot;a-table-virtual&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    app.use(VirtualTablePlugin);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>示例</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 在组件中使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;a-table</span></span>
<span class="line"><span style="color:#A6ACCD;">      v-virtual-table-scroll</span></span>
<span class="line"><span style="color:#A6ACCD;">      :columns=&quot;columns&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :data-source=&quot;dataList.slice(start, over)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      bordered</span></span>
<span class="line"><span style="color:#A6ACCD;">      :pagination=&quot;false&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :scroll=&quot;{ x: 0, y: scrollHeight }&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/a-table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    import {inject } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { start, over } = inject(&quot;dataListOptions&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    let scrollHeight = 300;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),e=[t];function o(c,i,r,C,A,u){return n(),a("div",null,e)}const D=s(p,[["render",o]]);export{y as __pageData,D as default};
