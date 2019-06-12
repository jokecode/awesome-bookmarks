(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{179:function(a,e,s){"use strict";s.r(e);var t=s(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"npx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npx","aria-hidden":"true"}},[a._v("#")]),a._v(" npx")]),a._v(" "),s("p",[a._v("npm 从 5.2 版开始，增加了 npx 命令。它有不少用处，但很多人其实又不知道它是个什么，该如何正确的使用它。")]),a._v(" "),s("p",[a._v("Node 自带 npm 模块。所以你只要安装了 node，你就可以直接使用它了，不需要什么额外的操作。")]),a._v(" "),s("h3",{attrs:{id:"方便调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方便调用","aria-hidden":"true"}},[a._v("#")]),a._v(" 方便调用")]),a._v(" "),s("p",[a._v("npx 第一个好处就是方便的调用了项目内部安装的模块。比如我项目内安装了测试工具 Mocha。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -D mocha\n")])])]),s("p",[a._v("般来说，调用 Mocha ，只能在项目脚本和 package.json 的 scripts 字段里面， 如果想在命令行下调用，必须像下面这样。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 项目的根目录下执行")]),a._v("\nnode-modules/.bin/mocha\n")])])]),s("p",[a._v("npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("npx mocha\n")])])]),s("p",[a._v("它的原理也很简单。就死运行的时候会到"),s("code",[a._v("node_modules/.bin")]),a._v("路径和环境变量"),s("code",[a._v("$PATH")]),a._v("里面，检查命令是否存在。")]),a._v(" "),s("h3",{attrs:{id:"避免全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免全局安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 避免全局安装")]),a._v(" "),s("p",[a._v("第二个好处就是可以避免全局安装模块。比如，你要用 react 的脚手架"),s("code",[a._v("create-react-app")]),a._v("它是需要全局安装的，但你其实也只有在初始化的时候需要用到它，大部分时间它是使用不到的。\n但用了 npx 之后，就不需要全局安装它了。你可以使用 npx 直接运行它。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("npx create-react-app my-react-app\n")])])]),s("p",[a._v("上面代码运行时，npx 将"),s("code",[a._v("create-react-app")]),a._v("下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载 "),s("code",[a._v("create-react-app")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"指定版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 指定版本")]),a._v(" "),s("p",[a._v("npx 还有一个好处，就是你可以指定你要运行模块的版本。比如你本地环境是 node10 的，但你想用 node11 的环境执行一段脚本。(当然你也可以 nvm 本地管理多个 node 版本)")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("npx -p node@11.9.0 node -v\n")])])])])}],!1,null,null,null);e.default=n.exports}}]);