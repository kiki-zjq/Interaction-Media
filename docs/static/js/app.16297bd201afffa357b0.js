webpackJsonp([1],{"0+eg":function(t,e){},"5+CK":function(t,e,a){"use strict";(function(t){e.a={data:function(){return{}},computed:{language:function(){return this.$store.state.language}}},t(window).scroll(function(){document.documentElement.scrollTop<=130?t(".downloader").fadeOut(500):t(".downloader").fadeIn(500)})}).call(e,a("7t+N"))},"62a6":function(t,e){},"6BSC":function(t,e){},Bh4j:function(t,e,a){t.exports=a.p+"static/img/English_2.e52b0d9.jpg"},DDQ6:function(t,e){},L6xf:function(t,e,a){"use strict";(function(t){e.a={data:function(){return{contents:[]}},methods:{handleClick:function(e){"最小化"==this.contents[e].status?this.contents[e].status="最大化":this.contents[e].status="最小化",t(".content-"+e).slideToggle(500)},generateClass:function(t){return"content-"+t}},computed:{message:function(){return"最小化"}},mounted:function(){var t=this;this.$http.get("../../static/data/others.json").then(function(e){t.contents=e.data.contents,console.log(t.contents)})}}}).call(e,a("7t+N"))},LNVf:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),r=a("xJD8"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("IntroPage",{attrs:{language:t.language},on:{changeLang:function(e){return t.changeLang()}}}),t._v(" "),a("GetStart",{attrs:{id:"anchor",name:"anchor"}}),t._v(" "),a("div",{staticClass:"main-part"},[a("div",{staticClass:"menu"},[a("Menu",{attrs:{language:t.language}})],1),t._v(" "),a("div",{staticClass:"content"},[a("router-view")],1)])],1)},staticRenderFns:[]};var s,o,c=function(t){a("DDQ6")},l=a("VU/8")(r.a,n,!1,c,null,null).exports,u=a("/ocq"),h=a("XLwt"),d=a.n(h),m=a("pFYg"),g=a.n(m);s=this,o=function(t,e){var a;if(!e)return a="ECharts is not Loaded",void("undefined"!=typeof console&&console&&console.error&&console.error(a));e.registerTheme("infographic",{color:["#c1232b","#ff4f4f","#fcce10","#e87c25","#b5c334","#fe8463","#9bca63","#fad860","#f3a43b","#60c0dd","#d7504b","#c6e579","#f4e001","#f0805a","#26c0c0"],backgroundColor:"transparent",textStyle:{},title:{textStyle:{color:"#27727b"},subtextStyle:{color:"#aaaaaa"}},line:{itemStyle:{normal:{borderWidth:1}},lineStyle:{normal:{width:"3"}},symbolSize:"5",symbol:"emptyCircle",smooth:!1},radar:{itemStyle:{normal:{borderWidth:1}},lineStyle:{normal:{width:"3"}},symbolSize:"5",symbol:"emptyCircle",smooth:!1},bar:{itemStyle:{normal:{barBorderWidth:0,barBorderColor:"#ccc"},emphasis:{barBorderWidth:0,barBorderColor:"#ccc"}}},pie:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},scatter:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},boxplot:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},parallel:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},sankey:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},funnel:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},gauge:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},candlestick:{itemStyle:{normal:{color:"#c1232b",color0:"#b5c334",borderColor:"#c1232b",borderColor0:"#b5c334",borderWidth:1}}},graph:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"}},lineStyle:{normal:{width:1,color:"#aaaaaa"}},symbolSize:"5",symbol:"emptyCircle",smooth:!1,color:["#c1232b","#ff4f4f","#fcce10","#e87c25","#b5c334","#fe8463","#9bca63","#fad860","#f3a43b","#60c0dd","#d7504b","#c6e579","#f4e001","#f0805a","#26c0c0"],label:{normal:{textStyle:{color:"#eeeeee"}}}},map:{itemStyle:{normal:{areaColor:"#dddddd",borderColor:"#eeeeee",borderWidth:.5},emphasis:{areaColor:"rgba(254,153,78,1)",borderColor:"#444444",borderWidth:1}},label:{normal:{textStyle:{color:"#c1232b"}},emphasis:{textStyle:{color:"rgb(100,0,0)"}}}},geo:{itemStyle:{normal:{areaColor:"#dddddd",borderColor:"#eeeeee",borderWidth:.5},emphasis:{areaColor:"rgba(254,153,78,1)",borderColor:"#444444",borderWidth:1}},label:{normal:{textStyle:{color:"#c1232b"}},emphasis:{textStyle:{color:"rgb(100,0,0)"}}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#27727b"}},axisTick:{show:!0,lineStyle:{color:"#27727b"}},axisLabel:{show:!0,textStyle:{color:"#333"}},splitLine:{show:!1,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},valueAxis:{axisLine:{show:!1,lineStyle:{color:"#333"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,textStyle:{color:"#333"}},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#27727b"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,textStyle:{color:"#333"}},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#27727b"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,textStyle:{color:"#333"}},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},toolbox:{iconStyle:{normal:{borderColor:"#c1232b"},emphasis:{borderColor:"#e87c25"}}},legend:{textStyle:{color:"#333333"}},tooltip:{axisPointer:{lineStyle:{color:"#27727b",width:1},crossStyle:{color:"#27727b",width:1}}},timeline:{lineStyle:{color:"#293c55",width:1},itemStyle:{normal:{color:"#27727b",borderWidth:1},emphasis:{color:"#72d4e0"}},controlStyle:{normal:{color:"#27727b",borderColor:"#27727b",borderWidth:.5},emphasis:{color:"#27727b",borderColor:"#27727b",borderWidth:.5}},checkpointStyle:{color:"#c1232b",borderColor:"rgba(194,53,49,0.5)"},label:{normal:{textStyle:{color:"#293c55"}},emphasis:{textStyle:{color:"#293c55"}}}},visualMap:{color:["#c1232b","#fcce10"]},dataZoom:{backgroundColor:"rgba(0,0,0,0)",dataBackgroundColor:"rgba(181,195,52,0.3)",fillerColor:"rgba(181,195,52,0.2)",handleColor:"#27727b",handleSize:"100%",textStyle:{color:"#999999"}},markPoint:{label:{normal:{textStyle:{color:"#eeeeee"}},emphasis:{textStyle:{color:"#eeeeee"}}}}})},"function"==typeof define&&a("nErl")?define(["exports","echarts"],o):"object"===("undefined"==typeof exports?"undefined":g()(exports))&&"string"!=typeof exports.nodeName?o(exports,a("XLwt")):o(0,s.echarts),a("tcAE");var v={props:{className:{type:String,default:"chart"},id:{type:String,default:"CirclePieChart"},width:{type:String,default:"100%"},height:{type:String,default:"500px"},data:{type:Array,default:[]},title:{type:String,default:""}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=d.a.init(document.getElementById(this.id),"setup");this.chart.setOption({series:[{type:"treemap",leafDepth:2,visibleMin:300,roam:"false",label:{normal:{fontSize:16}},data:[{name:"前端技能",value:"2000",children:[{name:"HTML + CSS + JS",value:"400",children:[{name:"HTML",value:"150",children:[{name:"HTML",value:"150"},{name:"HTML5",value:"120"}]},{name:"CSS",value:"100",children:[{name:"CSS",value:"120"},{name:"CSS3",value:"120"}]},{name:"JS",value:"225",children:[{name:"JavaScript",value:"150"},{name:"ES6",value:"120"},{name:"TypeScript",value:"90"}]}]},{name:"HTML5 + CSS3 + ES6",value:"400",children:[{name:"HTML5",value:"100"},{name:"CSS3",value:"150"},{name:"ES6",value:"225"}]},{name:"jQuery",value:"200"},{name:"Vue",value:"700",children:[{name:"Vue",value:"300"},{name:"Vuex",value:"200"},{name:"Vue-router",value:"200"},{name:"Element-UI",value:"100"}]},{name:"React + Redux",value:"400"}]},{name:"后端技能",value:"1000",children:[{name:"Java",value:"500"},{name:"Python",value:"600",children:[{name:"NumPy",value:"100"},{name:"python爬虫",value:"300"},{name:"Pandas",value:"100"}]},{name:"Postman",value:"400"},{name:"Node.js",value:"600",children:[{name:"express",value:"100"},{name:"koa",value:"75"},{name:"next.js",value:"75"}]}]},{name:"数据库",value:"1000",children:[{name:"关系型数据库",value:"600",children:[{name:"MySQL",value:"600"}]},{name:"非关系型数据库",value:"600",children:[{name:"MongoDB",value:"600"}]}]},{name:"其他",value:"1000",children:[{name:"开发相关 Git",value:"700"},{name:"机器学习 Machine Learning",value:"400"}]}],levels:[{color:["#FF4F4F","#EFBB36","#39A7F5","#FC58C8"],itemStyle:{borderColor:"white",borderWidth:4,gapWidth:4}},{colorSaturation:[.75,.5],itemStyle:{borderColor:"white",gapWidth:2,borderWidth:4}},{colorSaturation:[.75,.5],itemStyle:{borderColor:"white",gapWidth:1,borderWidth:4}},{colorSaturation:[.75,.5],itemStyle:{borderColor:"white",gapWidth:1,borderWidth:4}}]}]}),this.chart.on("click",function(t){})}}},p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width},attrs:{id:this.id}})},staticRenderFns:[]};var f={components:{RectTreeChart:a("VU/8")(v,p,!1,function(t){a("Ou2r")},"data-v-c7ffe4cc",null).exports},data:function(){return{}},computed:{language:function(){return this.$store.state.language}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homepage-block"},[a("h2",[t._v(t._s("Chinese"==t.language?"首页":"HOMEPAGE"))]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"sub-title"},[t._v("\n        "+t._s("Chinese"==t.language?"关于作者":"About")+"\n    ")]),t._v(" "),"Chinese"==t.language?a("div",{staticClass:"homepage-content"},[a("p",[t._v("作者朱江奇，北京邮电大学2017级在读，电信工程及管理专业。目前专业排名第一 （1/326）")]),a("br"),t._v(" "),a("p",[t._v("对计算机科学以及软件工程方向有着浓厚的兴趣，通过自学了解并掌握了部分编程语言。")]),a("br"),t._v(" "),a("p",[t._v("日常喜欢应用新学到的知识做一些小的项目的编写，希望能籍由此巩固知识并提升自己的代码能力。")]),a("br"),t._v(" "),t._m(0),a("br"),t._v(" "),t._m(1),a("br"),t._v(" "),a("p",[t._v("本网站可能还有诸多不足，但希望伴随着自己的技能成长可以进一步的完善填充它。")]),a("br"),t._v(" "),t._m(2)]):t._e(),t._v(" "),"English"==t.language?a("div",{staticClass:"homepage-content"},[t._m(3),a("br"),t._v(" "),a("p",[t._v(" I am very interested in software engineering, data mining and database. At the same time, I like to use programming language to write some simple projects in my daily study. ")]),a("br"),t._v(" "),a("p",[t._v(" For details about information and projects please check my CV or my Github. ")]),a("br"),t._v(" "),t._m(4),a("br"),t._v(" "),t._m(5),a("br"),t._v(" "),a("p",[t._v(" This website may have many shortcomings, but I hope that with the growth of my skills I can  further improve it by myself.")]),a("br"),t._v(" "),t._m(6)]):t._e(),t._v(" "),a("div",{staticClass:"sub-title",attrs:{id:"skill"}},[t._v(t._s("Chinese"==t.language?"相关技术栈":"Skill"))]),t._v(" "),a("div",{staticClass:"homepage-content"},[a("RectTreeChart",{staticClass:"rect-tree-chart"})],1),t._v(" "),a("div",{staticClass:"sub-title",attrs:{id:"contact"}},[t._v(t._s("Chinese"==t.language?"联系方式":"Contact"))]),t._v(" "),"Chinese"==t.language?a("div",{staticClass:"homepage-content"},[a("b",[t._v("邮箱: ")]),a("span",{staticStyle:{"margin-left":"26px"}},[t._v("zhujiangqi@bupt.edu.cn")]),a("br"),t._v(" "),a("span",{staticStyle:{"margin-left":"64px"}},[t._v("zhujiangqi@outlook.com")]),a("br"),a("br"),t._v(" "),a("b",[t._v("Github: ")]),t._v(" "),a("a",{staticStyle:{color:"black"},attrs:{href:"https://github.com/kiki-zjq",target:"_blank"}},[t._v("https://github.com/kiki-zjq")]),a("br"),a("br"),t._v(" "),a("b",[t._v("手机号:")]),a("span",{staticStyle:{"margin-left":"20px"}},[t._v("18810701233")]),a("br"),a("br")]):t._e(),t._v(" "),"English"==t.language?a("div",{staticClass:"homepage-content"},[a("b",[t._v("E-mail: ")]),a("span",{staticStyle:{"margin-left":"4px"}},[t._v("zhujiangqi@bupt.edu.cn")]),a("br"),t._v(" "),a("span",{staticStyle:{"margin-left":"64px"}},[t._v("zhujiangqi@outlook.com")]),a("br"),a("br"),t._v(" "),a("b",[t._v("Github: ")]),t._v(" "),a("a",{staticStyle:{color:"black"},attrs:{href:"https://github.com/kiki-zjq",target:"_blank"}},[t._v("https://github.com/kiki-zjq")]),a("br"),a("br"),t._v(" "),a("b",[t._v("Tel:")]),a("span",{staticStyle:{"margin-left":"30px"}},[t._v("18810701233")]),a("br"),a("br")]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("最后，本项目是一个从零开始搭建的个人主页，页面布局仿照了react-spring官网（"),e("a",{attrs:{href:"https://www.react-spring.io/"}},[this._v("https://www.react-spring.io/")]),this._v("）.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("项目搭建在github page上，其中使用到了诸如vue,vue-router,element-ui,e-charts等技术。同时为了解析json文件也进行了axios封装。"),e("b",[this._v("（由于github-page网站自身的原因，加载图片的时候可能速度较慢）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("最后！24小时在线求职求实验室求求了QnQ（"),e("a",{staticStyle:{color:"black","font-weight":"bold"},attrs:{href:"#/#contact"}},[this._v("联系方式")]),this._v("）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Jiangqi Zhu, a junior student from Beijing University of Posts and Telecommunications (BUPT).My college major is telecommunications engineering with Management with overall GPA 91.9/100 , "),e("b",[this._v("ranking 1st among 328")]),this._v(". ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v(" Finally, this project is a personal homepage built from scratch, with the page layout modeled on the react-spring website（"),e("a",{attrs:{href:"https://www.react-spring.io/"}},[this._v("https://www.react-spring.io/")]),this._v("）.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v(" This project, which has used vue, vuex, vue-router, axios and many front-end technologies, set up based on github-page."),e("b",[this._v("(Some images may be slow to load due to github-page itself)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v(" At last, asking for an opportunity about research in a lab or work as a internship！！QnQ（"),e("a",{staticStyle:{color:"black","font-weight":"bold"},attrs:{href:"#/#contact"}},[this._v("Contact Me pls！！")]),this._v("）")])}]};var b=a("VU/8")(f,_,!1,function(t){a("ukCf")},"data-v-34f740a6",null).exports,C=a("5+CK"),y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"resume-block"},[i("h2",[t._v(t._s("Chinese"==t.language?"简历":"RESUME"))]),t._v(" "),"Chinese"==t.language?i("a",{staticClass:"downloader",attrs:{href:"../../static/data/Resume_ZhuJiangqi.pdf",download:"Resume_ZhuJiangqi.pdf"}},[i("el-button",{attrs:{type:"warning",icon:"el-icon-download",circle:""}})],1):t._e(),t._v(" "),"English"==t.language?i("a",{staticClass:"downloader",attrs:{href:"../../static/data/Resume_ZhuJiangqi_english.pdf",download:"Resume_ZhuJiangqi.pdf"}},[i("el-button",{attrs:{type:"success",icon:"el-icon-download",circle:""}})],1):t._e(),t._v(" "),i("div",{staticClass:"resume-content"},["Chinese"==t.language?i("img",{attrs:{src:a("pB7v"),width:"800px"}}):t._e(),t._v(" "),"English"==t.language?i("img",{attrs:{src:a("Xj9a"),width:"800px"}}):t._e(),t._v(" "),"English"==t.language?i("img",{staticStyle:{"margin-top":"-100px"},attrs:{src:a("Bh4j"),width:"800px"}}):t._e()])])},staticRenderFns:[]};var S=function(t){a("U9Qb")},w=a("VU/8")(C.a,y,!1,S,"data-v-4670f8f5",null).exports,x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("h2",[t._v(t._s("Chinese"==t.language?"个人经历":"EXPERIENCE"))]),t._v(" "),"Chinese"==t.language?a("div",{staticClass:"radio"},[t._v("\n            排序：\n            "),a("el-radio-group",{model:{value:t.reverse,callback:function(e){t.reverse=e},expression:"reverse"}},[a("el-radio",{attrs:{label:!0}},[t._v("倒序")]),t._v(" "),a("el-radio",{attrs:{label:!1}},[t._v("正序")])],1)],1):t._e(),t._v(" "),"English"==t.language?a("div",{staticClass:"radio"},[t._v("\n            Sort:"),a("span",{staticStyle:{"margin-left":"5px"}}),t._v(" "),a("el-radio-group",{model:{value:t.reverse,callback:function(e){t.reverse=e},expression:"reverse"}},[a("el-radio",{attrs:{label:!0}},[t._v("Reverse")]),t._v(" "),a("el-radio",{attrs:{label:!1}},[t._v("Positive")])],1)],1):t._e(),t._v(" "),"Chinese"==t.language?a("el-timeline",{attrs:{reverse:t.reverse}},t._l(this.activities,function(e,i){return a("el-timeline-item",{key:i,attrs:{timestamp:e.timestamp,type:e.type,color:e.color,size:e.size,placement:"top"}},[a("el-card",[a("h3",{staticClass:"activity-title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.content,function(e,i){return a("div",{key:i},[a("p",{staticClass:"activity-content"},[t._v("\n                        "+t._s(e)+"\n                    ")]),a("br")])})],2)],1)}),1):t._e(),t._v(" "),"English"==t.language?a("el-timeline",{attrs:{reverse:t.reverse}},t._l(this.activities_e,function(e,i){return a("el-timeline-item",{key:i,attrs:{timestamp:e.timestamp,type:e.type,color:e.color,size:e.size,placement:"top"}},[a("el-card",[a("h3",{staticClass:"activity-title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.content,function(e,i){return a("div",{key:i},[a("p",{staticClass:"activity-content"},[t._v("\n                        "+t._s(e)+"\n                    ")]),a("br")])})],2)],1)}),1):t._e()],1)},staticRenderFns:[]};var k=a("VU/8")({data:function(){return{reverse:!1,activities:this.activities,activities_e:this.activities_e}},mounted:function(){var t=this;this.$http.get("../../static/data/experience.json").then(function(e){t.reverse=!1,t.activities=e.data.contents}),this.$http.get("../../static/data/experience_english.json").then(function(e){t.reverse=!1,t.activities_e=e.data.contents})},computed:{language:function(){return this.$store.state.language}}},x,!1,function(t){a("0+eg")},"data-v-f4e12a46",null).exports,E=a("L6xf"),L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"others-content"},[a("h2",[t._v("Others 其他")]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),t._l(t.contents,function(e,i){return a("el-card",{key:i,staticClass:"box-card",attrs:{shadow:"always"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.title))]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){return t.handleClick(i)}}},[t._v("\n                "+t._s(e.status)+"\n            ")])],1),t._v(" "),a("div",{class:t.generateClass(i)},[a("span",[t._v(t._s(e.content))])])])})],2)},staticRenderFns:[]};var j=function(t){a("pTe4")},M=a("VU/8")(E.a,L,!1,j,"data-v-d20b378a",null).exports,R={props:{src:{type:String,default:""},srcList:{type:Array,default:[]},href:{type:String,default:""},projectName:{type:String,default:""}}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("el-image",{attrs:{src:t.src,"preview-src-list":t.srcList,lazy:""}}),t._v(" "),a("div",{staticClass:"footer"},[a("p",{staticClass:"project-title"},[a("span",{staticClass:"code"},[t._v("<")]),t._v("\n                                "+t._s(t.projectName)+"\n                                "),a("span",{staticClass:"code"},[t._v("/>")]),t._v(" "),a("a",{attrs:{href:t.href,target:"_blank"}},[a("i",{staticClass:"el-icon-more"})])])])],1)])},staticRenderFns:[]};var $={components:{imgShow:a("VU/8")(R,T,!1,function(t){a("62a6")},"data-v-19065a8f",null).exports},data:function(){return{url:"",srcList:["../../static/img/1.A Tribute Page.png","../../static/img/2.A Survey Form.png","../../static/img/4.A Technology Document.png","../../static/img/1.Random Quote Machine.png","../../static/img/2.Markdown Complier.png","../../static/img/3.Drum Machine.png"]}},computed:{language:function(){return this.$store.state.language}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-block"},[a("h2",[t._v(t._s("Chinese"==t.language?"项目":"PROJECT"))]),t._v(" "),a("div",{staticClass:"project-content"},[a("el-row",{attrs:{gutter:"20"}},[a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/1.A Tribute Page.png",href:"../../static/project/1.A Tribute Page.html",projectName:"TRIBUTE PAGE",srcList:t.srcList}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/2.A Survey Form.png",href:"../../static/project/2.A Survey Form.html",projectName:"SURVEY FORM",srcList:t.srcList}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:"20"}},[a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/4.A Technology Document.png",href:"../../static/project/4.A Technology Document.html",projectName:"TECHNOLOGY DOCUMENT",srcList:t.srcList}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/1.Random Quote Machine.png",href:"../../static/project/1.Random Quote Machine.html",projectName:"RANDOM QUOTE MACHINE",srcList:t.srcList}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:"20"}},[a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/2.Markdown Complier.png",href:"../../static/project/2.Markdown Complier.html",projectName:"MARKDOWN COMPLIER",srcList:t.srcList}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/3.Drum Machine.png",href:"../../static/project/3.Drum Machine.html",projectName:"DRUM MACHINE",srcList:t.srcList}})],1)],1)],1)])},staticRenderFns:[]};var N=a("VU/8")($,A,!1,function(t){a("Ysng")},"data-v-210020b0",null).exports,W={data:function(){return{fit:"cover"}},props:{src:{type:String,default:""},srcList:{type:Array,default:[]},href:{type:String,default:""},projectName:{type:String,default:""}}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"img-container"},[a("el-image",{staticStyle:{height:"330px"},attrs:{fit:t.fit,src:t.src,"preview-src-list":t.srcList,lazy:""}}),t._v(" "),a("div",{staticClass:"img-footer"},[a("p",{staticClass:"project-title"},[a("span",{staticClass:"code"},[t._v("<")]),t._v("\n                                "+t._s(t.projectName)+"\n                                "),a("span",{staticClass:"code"},[t._v("/>")])])])],1)])},staticRenderFns:[]};var P={components:{imgShow:a("VU/8")(W,F,!1,function(t){a("UOFV")},"data-v-468fa1ce",null).exports},data:function(){return{url:"",srcList:["../../static/img/Certification/Machine Learning.jpg","../../static/img/Certification/M001.png","../../static/img/Certification/M220JS.png","../../static/img/Certification/Responsive Web Design.png","../../static/img/Certification/Algorithms and Data Structure.png","../../static/img/Certification/Front End Library.png","../../static/img/Certification/APIs and Microservices.png","../../static/img/Certification/Data Visualization.png"]}},computed:{language:function(){return this.$store.state.language}}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("h2",[t._v(t._s("Chinese"==t.language?"证书":"CERTIFICATION"))]),t._v(" "),a("div",{staticClass:"certi-content"},[a("el-row",{attrs:{gutter:"20"}},[a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/Certification/Machine Learning.jpg",projectName:"Machine Learning",srcList:t.srcList}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/Certification/M001.png",projectName:"MongoDB basic",srcList:t.srcList}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:"20"}},[a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/Certification/M220JS.png",projectName:"MongoDB JS",srcList:t.srcList}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/Certification/Responsive Web Design.png",projectName:"Responsive Web Design",srcList:t.srcList}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:"20"}},[a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/Certification/Algorithms and Data Structure.png",projectName:"Algorithms and Data Structure",srcList:t.srcList}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/Certification/Front End Library.png",projectName:"Front End Library",srcList:t.srcList}})],1)],1),t._v(" "),a("el-row",{attrs:{gutter:"20"}},[a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/Certification/APIs and Microservices.png",projectName:"APIs and Microservices",srcList:t.srcList}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("imgShow",{attrs:{src:"../../static/img/Certification/Data Visualization.png",projectName:"Data Visualization",srcList:t.srcList}})],1)],1)],1)])},staticRenderFns:[]};var V=a("VU/8")(P,D,!1,function(t){a("gnjd")},"data-v-679b884c",null).exports;i.default.use(u.a);var U=new u.a({routes:[{path:"/",name:"Homepage",component:b},{path:"/resume",name:"Resume",component:w},{path:"/experience",name:"Experience",component:k},{path:"/others",name:"Others",component:M},{path:"/projects",name:"Projects",component:N},{path:"/certification",name:"Certification",component:V}],scrollBehavior:function(t,e,a){if(t.hash)return{selector:t.hash}}}),O=(a("7t+N"),a("zL8q")),I=a.n(O);a("tvR6");i.default.use(I.a);var z=a("mtWM"),B=a.n(z),J=a("NYxO");i.default.use(J.a),i.default.prototype.$http=B.a,i.default.config.productionTip=!1;var q=new J.a.Store({state:{language:"Chinese"},mutations:{changeLanguage:function(t){"Chinese"==t.language?t.language="English":t.language="Chinese"}},getters:{},actions:{}});new i.default({el:"#app",router:U,store:q,components:{App:l},template:"<App/>"})},Ou2r:function(t,e){},TVmP:function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"})},staticRenderFns:[]};var r=a("VU/8")(null,i,!1,function(t){a("LNVf")},"data-v-61f5e64a",null);e.a=r.exports},U9Qb:function(t,e){},UOFV:function(t,e){},Xj9a:function(t,e,a){t.exports=a.p+"static/img/English_1.d1ec847.jpg"},"YC+T":function(t,e,a){"use strict";var i=a("g7tt"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("div",{attrs:{id:"started"},on:{click:this.handleClick}},[this._v("\n        Get Started\n        "),e("i",{staticClass:"el-icon-bottom"})])])},staticRenderFns:[]};var n=function(t){a("lJxX")},s=a("VU/8")(i.a,r,!1,n,"data-v-127565be",null);e.a=s.exports},Ysng:function(t,e){},ZBJ4:function(t,e,a){t.exports=a.p+"static/img/logo.57f31dc.png"},ccZh:function(t,e,a){"use strict";var i={props:{language:{type:String,default:"Chinese"}},data:function(){return{active:"1"}},mounted:function(){switch(this.$route.path){case"/":this.active="1";break;case"/resume":this.active="2";break;case"/experience":this.active="3";break;case"/others":this.active="4";break;case"/projects":this.active="5";break;case"/certification":this.active="6";break;default:this.active="1"}},watch:{$route:function(t,e){switch(t.path){case"/resume":return void(this.active="2");case"/experience":return void(this.active="3");case"/others":return void(this.active="4");case"/projects":this.active="5";break;case"/certification":this.active="6"}if("/"==t.path)switch(t.hash){case"#skill":return void(this.active="1-2");case"#contact":return void(this.active="1-3");case"#anchor":return void(this.active="1-1");default:this.active="1-1"}}},methods:{handleOpen:function(t,e){},handleClose:function(t,e){},handleClick:function(t){switch(t){case 2:this.$router.push("/resume#anchor");break;case 3:this.$router.push("/experience#anchor");break;case 4:this.$router.push("/others#anchor");break;case 5:this.$router.push("/projects#anchor");break;case 6:this.$router.push("/certification#anchor");break;case 1.1:this.$router.push("/#anchor");break;case 1.2:this.$router.push("/#skill");break;case 1.3:this.$router.push("/#contact")}}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-menu",{staticClass:"el-menu-vertical-demo main-menu",attrs:{"default-active":t.active,"background-color":"#fafafa","text-color":"#000","active-text-color":"#ff4f4f"},on:{open:t.handleOpen,close:t.handleClose}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s("Chinese"==t.language?"首页":"HOMEPAGE"))])]),t._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.handleClick(1.1)}}},[t._v("\n        "+t._s("Chinese"==t.language?"关于作者":"About")+"\n      ")]),t._v(" "),a("el-menu-item",{attrs:{index:"1-2"},on:{click:function(e){return t.handleClick(1.2)}}},[t._v("\n        "+t._s("Chinese"==t.language?"相关技术栈":"Skill")+"\n      ")]),t._v(" "),a("el-menu-item",{attrs:{index:"1-3"},on:{click:function(e){return t.handleClick(1.3)}}},[t._v("\n        "+t._s("Chinese"==t.language?"联系方式":"Contact")+"\n      ")])],1)],2),t._v(" "),a("el-menu-item",{attrs:{index:"2"},on:{click:function(e){return t.handleClick(2)}}},[a("i",{staticClass:"el-icon-edit"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s("Chinese"==t.language?"简历":"RESUME"))])]),t._v(" "),a("el-menu-item",{attrs:{index:"3"},on:{click:function(e){return t.handleClick(3)}}},[a("i",{staticClass:"el-icon-document"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s("Chinese"==t.language?"经历":"EXPERIENCE"))])]),t._v(" "),a("el-menu-item",{attrs:{index:"5"},on:{click:function(e){return t.handleClick(5)}}},[a("i",{staticClass:"el-icon-suitcase"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s("Chinese"==t.language?"项目":"PROJECT"))])]),t._v(" "),a("el-menu-item",{attrs:{index:"6"},on:{click:function(e){return t.handleClick(6)}}},[a("i",{staticClass:"el-icon-reading"}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s("Chinese"==t.language?"证书":"CERTIFICATION"))])])],1)},staticRenderFns:[]};var n=a("VU/8")(i,r,!1,function(t){a("d5ZD")},null,null);e.a=n.exports},d5ZD:function(t,e){},g7tt:function(t,e,a){"use strict";(function(t){e.a={data:function(){return{}},methods:{handleClick:function(){this.$router.push("/#anchor")}}},t(window).scroll(function(){document.documentElement.scrollTop>=100?t("#started").fadeOut(500):t("#started").fadeIn(500)})}).call(e,a("7t+N"))},gnjd:function(t,e){},lJxX:function(t,e){},pB7v:function(t,e,a){t.exports=a.p+"static/img/Resume.001755b.jpg"},pTe4:function(t,e){},tvR6:function(t,e){},ukCf:function(t,e){},xJD8:function(t,e,a){"use strict";(function(t){var i=a("xa4f"),r=a("YC+T"),n=a("ccZh"),s=a("TVmP");e.a={name:"App",data:function(){return{language:"Chinese"}},methods:{changeLang:function(){"Chinese"==this.language?this.language="English":this.language="Chinese"}},components:{IntroPage:i.a,GetStart:r.a,Menu:n.a,Footer:s.a}},t(window).scroll(function(){var e=window.screen.availHeight;document.documentElement.scrollTop>=e?t(".menu").addClass("fix"):t(".menu").removeClass("fix")})}).call(e,a("7t+N"))},xa4f:function(t,e,a){"use strict";var i={props:{language:{type:String,default:"Chinese"}},name:"IntroPage",data:function(){return{}},methods:{handleClick:function(t){switch(t){case 1:this.$router.push("/#skill");break;case 2:this.$router.push("/projects#anchor");break;case 3:this.$router.push("/resume#anchor")}},handleChange:function(){this.$store.commit("changeLanguage"),this.$emit("changeLang")}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro-page"},[a("div",{staticClass:"title"},[a("h1",{staticClass:"user-name"},[t._v("KiKi-zjq")]),t._v(" "),a("h2",[t._v("Personal Homepage")]),t._v(" "),a("el-button",{staticClass:"top-button",attrs:{type:"danger",round:""},on:{click:function(e){return t.handleClick(1)}}},[t._v("\n            "+t._s("Chinese"==t.language?"技术栈":"Skill")+"\n        ")]),t._v(" "),a("el-button",{staticClass:"top-button",attrs:{type:"danger",round:""},on:{click:function(e){return t.handleClick(2)}}},[t._v("\n            "+t._s("Chinese"==t.language?"项目":"Project")+"\n        ")]),t._v(" "),a("el-button",{staticClass:"top-button",attrs:{type:"success",round:""},on:{click:function(e){return t.handleChange()}}},[t._v("\n            "+t._s("Chinese"==t.language?"Change to English":"中文")+"\n        ")])],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:a("ZBJ4")}})])}]};var n=a("VU/8")(i,r,!1,function(t){a("6BSC")},"data-v-664c66ce",null);e.a=n.exports}},["NHnr"]);
//# sourceMappingURL=app.16297bd201afffa357b0.js.map