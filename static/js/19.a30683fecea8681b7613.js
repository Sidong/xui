webpackJsonp([19],{G4oI:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("yUgh"),s=o.n(n),l=o("IrhU"),i=o("VU/8"),a=i(s.a,l.a,null,null,null);e.default=a.exports},IrhU:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("h3",{staticClass:"row-title"},[t._v("基础")]),t._v(" "),o("x-quote",[o("x-popover",{attrs:{title:"这是一条弹窗"}},[o("x-button",[t._v("弹窗")]),t._v(" "),o("template",{slot:"content"},[t._v("这是一个简单的栗子")])],2),t._v(" "),o("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.base))])],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("h3",{staticClass:"row-title"},[t._v("激活方式")]),t._v(" "),o("p",[t._v("可以通过 trigger 属性设置弹出框的激活方式, 激活方式有 click, hover, focus - 默认click")]),t._v(" "),o("x-quote",[o("div",{staticClass:"margin-10 x-inline"},[o("x-popover",{attrs:{trigger:"hover",title:"这是一条弹窗"}},[o("x-button",[t._v("hover")]),t._v(" "),o("template",{slot:"content"},[t._v("hover显示")])],2)],1),t._v(" "),o("div",{staticClass:"margin-10 x-inline"},[o("x-popover",{attrs:{title:"这是一条弹窗"}},[o("x-button",[t._v("click")]),t._v(" "),o("template",{slot:"content"},[t._v("click显示")])],2)],1),t._v(" "),o("div",{staticClass:"margin-10 x-inline"},[o("x-popover",{attrs:{title:"这是一条弹窗",trigger:"focus"}},[o("x-button",[t._v("focus")]),t._v(" "),o("template",{slot:"content"},[t._v("focus显示")])],2)],1),t._v(" "),o("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.trigger))])],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("h3",{staticClass:"row-title"},[t._v("弹出框的位置")]),t._v(" "),o("p",[t._v("可以通过 direction 属性修改弹出框的位置, 弹出框有四个位置 top, right, bottom, left - 默认top")]),t._v(" "),o("x-quote",[o("div",{staticClass:"margin-10 x-inline"},[o("x-popover",{attrs:{title:"提示",direction:"top"}},[o("x-button",[t._v("top")]),t._v(" "),o("template",{slot:"content"},[t._v("这个是内容， 这个是弹框的内容.......")])],2)],1),t._v(" "),o("div",{staticClass:"margin-10 x-inline"},[o("x-popover",{attrs:{title:"提示",direction:"right"}},[o("x-button",[t._v("right")]),t._v(" "),o("template",{slot:"content"},[t._v("这个是内容， 这个是弹框的内容.......")])],2)],1),t._v(" "),o("div",{staticClass:"margin-10 x-inline"},[o("x-popover",{attrs:{title:"提示",direction:"bottom"}},[o("x-button",[t._v("bottom")]),t._v(" "),o("template",{slot:"content"},[t._v("这个是内容， 这个是弹框的内容.......")])],2)],1),t._v(" "),o("div",{staticClass:"margin-10 x-inline"},[o("x-popover",{attrs:{title:"提示",direction:"left"}},[o("x-button",[t._v("left")]),t._v(" "),o("template",{slot:"content"},[t._v("这个是内容， 这个是弹框的内容.......")])],2)],1),t._v(" "),o("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.direction))])],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("h3",{staticClass:"row-title"},[t._v("外部控制")]),t._v(" "),o("p",[t._v("当我们要从自己控制弹出层的显示和隐藏时可以使用 v-model 来绑定")]),t._v(" "),o("x-quote",[o("x-popover",{attrs:{title:"提示"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("x-button",[t._v("弹窗")]),t._v(" "),o("template",{slot:"content"},[t._v("可以通过 v-model 来控制我的显示状态")])],2),t._v(" "),o("div",{staticClass:"margin-top-10"},[o("x-button",{on:{click:function(e){t.show=!0}}},[t._v("显示")]),t._v(" "),o("x-button",{on:{click:function(e){t.show=!1}}},[t._v("隐藏")])],1),t._v(" "),o("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.state))])],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("h3",{staticClass:"row-title"},[t._v("slot")]),t._v(" "),o("p",[t._v('当我们的结构更复杂时候可以使用 slot 传入内容, slot="title" slot="content"')]),t._v(" "),o("x-quote",[o("x-popover",{model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}},[o("x-button",[t._v("slotDemo")]),t._v(" "),o("x-tag",{slot:"title"},[t._v("这个是title")]),t._v(" "),o("template",{slot:"content"},[o("div",[t._v("是否确定删除?")]),t._v(" "),o("div",{staticClass:"x-text-r"},[o("x-button",{attrs:{radius:"",size:"mini"},on:{click:function(e){t.show1=!1}}},[t._v("取消")]),t._v(" "),o("x-button",{attrs:{type:"danger",radius:"",size:"mini"},on:{click:function(e){t.show1=!1}}},[t._v("删除")])],1)])],2),t._v(" "),o("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.state))])],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("h3",{staticClass:"row-title"},[t._v("API")]),t._v(" "),o("h4",[t._v("props")]),t._v(" "),o("api-table",{attrs:{data:t.props,keys:t.$propsKeys}}),t._v(" "),o("h4",[t._v("slot")]),t._v(" "),o("api-table",{attrs:{data:t.slotData,keys:t.$propsKeys}}),t._v(" "),o("h4",[t._v("slot")]),t._v(" "),o("api-table",{attrs:{data:t.eventsData,keys:t.$eventKeys}})],1)])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("h3",{staticClass:"row-title"},[t._v("popover 弹出层")]),t._v(" "),o("p",[t._v("介绍")])])}],l={render:n,staticRenderFns:s};e.a=l},yUgh:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{base:'<x-popover title="这是一条弹窗">\n  <x-button>弹窗</x-button>\n  <template slot="content">这是一个简单的栗子</template>\n</x-popover>',trigger:'<x-popover title="这是一条弹窗">\n  <x-button>hover</x-button>\n  <template slot="content">hover显示</template>\n</x-popover>\n\n<x-popover title="这是一条弹窗" trigger="click">\n  <x-button>click</x-button>\n  <template slot="content">click显示</template>\n</x-popover>\n\n<x-popover title="这是一条弹窗" trigger="focus">\n  <x-button>focus</x-button>\n  <template slot="content">focus显示</template>\n</x-popover>',direction:'<x-popover title="提示" direction="top">\n  <x-button>top</x-button>\n  <template slot="content">这个是内容， 这个是弹框的内容.......</template>\n</x-popover>\n\n<x-popover title="提示" direction="right">\n  <x-button>right</x-button>\n  <template slot="content">这个是内容， 这个是弹框的内容.......</template>\n</x-popover>\n\n<x-popover title="提示" direction="bottom">\n  <x-button>bottom</x-button>\n  <template slot="content">这个是内容， 这个是弹框的内容.......</template>\n</x-popover>\n\n<x-popover title="提示" direction="left">\n  <x-button>left</x-button>\n  <template slot="content">这个是内容， 这个是弹框的内容.......</template>\n</x-popover>',state:'<template>\n  <x-popover title="提示" v-model="show">\n    <x-button>弹窗</x-button>\n    <template slot="content">可以通过 v-model 来控制我的显示状态</template>\n  </x-popover>\n  <div class="margin-top-10">\n    <x-button @click="show = true">显示</x-button>\n    <x-button @click="show = false">隐藏</x-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        show: false\n      };\n    }\n  };\n<\/script>',slot:'<template>\n  <x-popover v-model="show">\n    <x-button>slotDemo</x-button>\n    \x3c!--标题--\x3e\n    <x-tag slot="title">这个是title</x-tag>\n    \x3c!--内容--\x3e\n    <template slot="content">\n      <div>是否确定删除?</div>\n      <div class="x-text-r">\n        <x-button @click="show = false" radius size="mini">取消</x-button>\n        <x-button @click="show = false" type="danger" radius size="mini">删除</x-button>\n      </div>\n    </template>\n  </x-popover>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        show: false\n      };\n    }\n  };\n<\/script>',show:!1,show1:!1,props:[{attribute:"v-model",explain:"弹窗显示状态, 双向绑定 - 如果需要外部控制显示状态可以使用 v-model",type:"Boolean",values:"true | false",default:"click"},{attribute:"trigger",explain:"触发显示的事件类型",type:"String",values:"click | hover | focus",default:"click"},{attribute:"direction",explain:"弹窗显示的位置",type:"String",values:"top | right | bottom | left",default:"top"},{attribute:"title",explain:'弹窗标题 - 如果复杂的标题可以使用 slot="title"',type:"String",values:"---",default:"---"}],slotData:[{attribute:"default",explain:"触发弹窗显示的内容",type:"---",values:"---",default:"---"},{attribute:"title",explain:"弹窗的标题",type:"---",values:"---",default:"---"},{attribute:"content",explain:"弹窗的内容",type:"---",values:"---",default:"---"}],eventsData:[{events:"change",explain:"状态发生变化时候触发",params:"state: 弹窗的显示状态"}]}}}}});
//# sourceMappingURL=19.a30683fecea8681b7613.js.map