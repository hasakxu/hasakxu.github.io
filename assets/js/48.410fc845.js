(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{445:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue核心-vue简介-初识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue核心-vue简介-初识"}},[t._v("#")]),t._v(" Vue核心 Vue简介 初识")]),t._v(" "),s("h2",{attrs:{id:"_1-1-vue简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-vue简介"}},[t._v("#")]),t._v(" 1.1 Vue简介")]),t._v(" "),s("h3",{attrs:{id:"_1-1-1-官网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-官网"}},[t._v("#")]),t._v(" 1.1.1 官网")]),t._v(" "),s("p",[t._v("● "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文官网"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("● "),s("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文官网"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"_1-1-2-介绍和描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-介绍和描述"}},[t._v("#")]),t._v(" 1.1.2 介绍和描述")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Vue 是一套用来动态构建用户界面的渐进式JavaScript框架")])]),t._v(" "),s("li",[s("p",[t._v("构建用户界面：把数据通过某种办法变成用户界面")])]),t._v(" "),s("li",[s("p",[t._v("渐进式：Vue可以自底向上逐层的应用，简单应用只需要一个轻量小巧的核心库，复杂应用可以引入各式各样的Vue插件")])]),t._v(" "),s("li",[s("p",[t._v("作者：尤雨溪")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hasakwebblogimg.oss-cn-hangzhou.aliyuncs.com/202303171400111.png",alt:"image.png"}})]),t._v(" "),s("h3",{attrs:{id:"_1-1-3vue-的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3vue-的特点"}},[t._v("#")]),t._v(" 1.1.3"),s("strong",[t._v("Vue 的特点")])]),t._v(" "),s("ol",[s("li",[t._v("遵循MVVM模式")]),t._v(" "),s("li",[t._v("编码简洁，体积小，运行效率高，适合移动/PC端开发")]),t._v(" "),s("li",[t._v("它本身只关注 UI，可以引入其它第三方库开发项目")]),t._v(" "),s("li",[t._v("采用组件化模式，提高代码复用率、且让代码更好维护")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hasakwebblogimg.oss-cn-hangzhou.aliyuncs.com/202303171400975.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("​\t5.声明式编码，让编码人员无需直接操作DOM，提高开发效率")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hasakwebblogimg.oss-cn-hangzhou.aliyuncs.com/202303171400177.png",alt:"image.png"}})]),t._v(" "),s("ul",[s("li",[t._v("使用虚拟DOM 和 Diff算法，尽量复用DOM节点")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hasakwebblogimg.oss-cn-hangzhou.aliyuncs.com/202303171400496.png",alt:"image.png"}})]),t._v(" "),s("h3",{attrs:{id:"_1-1-4-与其他-js-框架的关联"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-与其他-js-框架的关联"}},[t._v("#")]),t._v(" 1.1.4 与其他 JS 框架的关联")]),t._v(" "),s("ul",[s("li",[t._v("借鉴 angular 的 模板 和 数据绑定 技术")]),t._v(" "),s("li",[t._v("借鉴 react 的 组件化 和 虚拟DOM 技术")])]),t._v(" "),s("h3",{attrs:{id:"_1-1-5-vue-周边库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-vue-周边库"}},[t._v("#")]),t._v(" 1.1.5. Vue 周边库")]),t._v(" "),s("ul",[s("li",[t._v("vue-cli：vue 脚手架")]),t._v(" "),s("li",[t._v("vue-resource(axios)：ajax 请求")]),t._v(" "),s("li",[t._v("vue-router：路由")]),t._v(" "),s("li",[t._v("vuex：状态管理（它是 vue 的插件但是没有用 vue-xxx 的命名规则）")]),t._v(" "),s("li",[t._v("vue-lazyload：图片懒加载")]),t._v(" "),s("li",[t._v("vue-scroller：页面滑动相关")]),t._v(" "),s("li",[t._v("mint-ui：基于 vue 的 UI 组件库（移动端）")]),t._v(" "),s("li",[t._v("element-ui：基于 vue 的 UI 组件库（PC 端）")])]),t._v(" "),s("h2",{attrs:{id:"_1-2-初识-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-初识-vue"}},[t._v("#")]),t._v(" 1.2 初识 Vue")]),t._v(" "),s("p",[s("strong",[t._v("前置工作")])]),t._v(" "),s("ol",[s("li",[t._v("给浏览器安装 "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/installation.html#Vue-Devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Devtools"),s("OutboundLink")],1),t._v(" 插件")]),t._v(" "),s("li",[t._v("标签引入Vue包")]),t._v(" "),s("li",[t._v("（可选）阻止vue在启动时生成生产提示Vue.config.productionTip = false")]),t._v(" "),s("li",[t._v("favicon 需要将页签图标放在项目根路径，重新打开就有了（shfit+F5 强制刷新）")])]),t._v(" "),s("p",[s("strong",[t._v("初识Vue")])]),t._v(" "),s("ol",[s("li",[t._v("想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象")]),t._v(" "),s("li",[t._v("root 容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法")]),t._v(" "),s("li",[t._v("root 容器里的代码被称为Vue模板")]),t._v(" "),s("li",[t._v("Vue 实例与容器是一一对应的")]),t._v(" "),s("li",[t._v("真实开发中只有一个Vue实例，并且会配合着组件一起使用")]),t._v(" "),s("li",[t._v(t._s(t.xxx)+"中的 xxx 要写 js 表达式，且 xxx 可以自动读取到data中的所有属性")])]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("注意区分：js 表达式 和 js代码（语句）")])]),t._v(" "),s("p",[t._v("​\ta. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方")]),t._v(" "),s("p",[t._v("​\ta\ta+b\t\tdemo(1)\t\tx === y ? 'a' : 'b'")]),t._v(" "),s("p",[t._v("​\tb. js代码（语句）")]),t._v(" "),s("p",[t._v("​\tif(){}\t\tfor(){}")]),t._v(" "),s("p",[t._v("​\t7.一旦data中的数据发生变化，那么模板中用到该数据的地方也会自动更新")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("初识Vue"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 引入Vue --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../js/vue.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 准备好一个容器 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello，{{ name.toUpperCase() }}，{{ address }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n      Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("productionTip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//阻止 vue 在启动时生成生产提示。")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建Vue实例")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("el")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data中用于存储数据，数据供el所指定的容器去使用，值暂时先写成一个对象")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hasakxu'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'杭州'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);