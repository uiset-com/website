import{I as x,a as g,m as w,C as b,R as k}from"./ResourceList-fea61f24.mjs";import{r as s,o as d,a as _,h as e,b as t,B as C,C as $,D as L,t as I,w as M,q as u}from"./entry-bb726dd9.mjs";import{_ as m}from"./plugin-vue_export-helper-84c1d017.mjs";var h=[{name:"Beautiful Free Illustrations",summary:"70\u4E2A\u514D\u8D39\u7684\u6F02\u4EAE\u63D2\u56FE\u5305",website:"https://ui8.net/pixel-true-designs/products/70-beautiful-free-illustrations",category:"illustration",value:"70-beautiful-free-illustrations"},{name:"Lucide",summary:"\u7531\u5F00\u6E90\u793E\u533A\u5236\u4F5C\u7684\u7CBE\u7F8E\u4E14\u98CE\u683C\u4E00\u81F4\u7684SVG\u56FE\u6807\u5DE5\u5177\u5305\uFF0C\u5E76\u4E14\u63D0\u4F9B\u4E86\u591A\u4E2A\u6846\u67B6\u7684SDK\u96C6\u6210",website:"https://lucide.dev/",github:"https://github.com/lucide-icons/lucide",category:"icon",value:"lucide"},{name:"Charco illustrations",summary:"\u4E00\u5957\u514D\u8D39\u7684\u624B\u7ED8\u63D2\u56FE",website:"https://charcodesign.gumroad.com/l/charco",category:"illustration",value:"charco-illustrations"}];const R=69;var S={total_resources:R};const B={components:{Icon:x,ResourceCard:g},data(){return{latests:h,keywords:"",mdiSourceMerge:w,summary:S}},methods:{async search(){this.$router.push(`/search?keywords=${this.keywords}`)}}},V={class:"d-flex flex-column pt-5"},D={class:"py-5 d-flex justify-center",style:{width:"100%"}},H={class:"search-box d-flex align-center"},K={class:"d-flex align-center"},N=u("\u5171\u6536\u5F55"),T={class:"font-weight-bold mx-1"},U=u("\u4E2A\u4F18\u8D28\u514D\u8D39UI\u8D44\u6E90"),j=u("\u63D0\u4EA4\u8D44\u6E90");function q(p,r,f,v,o,c){const n=s("Icon"),a=s("v-spacer"),i=s("v-icon"),y=s("v-btn");return d(),_("div",V,[e("div",D,[e("div",H,[t(n,{name:"Search",color:"#666",class:"search-icon"}),C(e("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=l=>o.keywords=l),placeholder:"\u68C0\u7D22\u56FE\u6807/\u63D2\u56FE/\u56FE\u6848/\u989C\u8272....",class:"search-field px-2",onKeyup:r[1]||(r[1]=L((...l)=>c.search&&c.search(...l),["enter"]))},null,544),[[$,o.keywords]])])]),e("div",K,[e("div",null,[N,e("span",T,I(o.summary.total_resources),1),U]),t(a),t(y,{depressed:"",flat:"",href:"https://github.com/uiset-com/uiset",target:"_blank"},{default:M(()=>[t(i,{icon:o.mdiSourceMerge},null,8,["icon"]),j]),_:1})])])}var E=m(B,[["render",q],["__scopeId","data-v-b7279512"]]);const F={components:{CategoryMenu:b,ResourceList:k,HomeList:E},data(){return{latests:h}}},G={class:"d-flex",style:{"max-width":"1100px",width:"100%",margin:"0 auto"}},z={class:"flex-shrink-0"},A={class:"flex-grow-1 ml-7"},J={style:{height:"100vh"},class:"py-8"};function O(p,r,f,v,o,c){const n=s("CategoryMenu"),a=s("HomeList"),i=s("ResourceList");return d(),_("div",G,[e("div",z,[t(n)]),e("div",A,[t(a),e("div",J,[t(i,{resources:o.latests,hidebar:""},null,8,["resources"])])])])}var X=m(F,[["render",O]]);export{X as default};
