import{I as b,a as x,m as g,C as w,R as $}from"./ResourceList-401fe65a.mjs";import{r as s,o as _,a as m,e,b as t,x as k,y as C,z as I,w as L,q as S,s as M,m as p}from"./entry-22e8e0b6.mjs";import{_ as u}from"./plugin-vue_export-helper-84c1d017.mjs";var h=[{name:"Carbon",summary:"\u521B\u5EFA\u548C\u5171\u4EAB\u6E90\u4EE3\u7801\u7684\u7CBE\u7F8E\u56FE\u50CF",website:"https://carbon.now.sh/",github:"https://github.com/carbon-app/carbon",category:"beatify",value:"carbon"},{name:"BGJar",summary:"\u652F\u6301\u591A\u4E2A\u80CC\u666F\u5F62\u72B6\u56FE\u6848\u7684\u751F\u6210\u548C\u81EA\u5B9A\u4E49\u53C2\u6570",website:"https://bgjar.com/",category:"pattern",value:"bgjar"},{name:"Color Space Gradient",summary:"\u5728\u7EBF\u751F\u6210\u6E10\u53D8\u8272\u5DE5\u5177",website:"https://mycolor.space/gradient",category:"color",value:"color-space-gradient"}];const R={components:{Icon:b,ResourceCard:x},data(){return{latests:h,keywords:"",mdiSourceMerge:g}},methods:{async search(){this.$router.push(`/search?keywords=${this.keywords}`)}}},B=o=>(S("data-v-cb0a55c2"),o=o(),M(),o),V={class:"d-flex flex-column pt-5"},j={class:"py-5 d-flex justify-center",style:{width:"100%"}},H={class:"search-box d-flex align-center"},N={class:"d-flex align-center"},G=B(()=>e("div",null,[p("\u5171\u6536\u5F55"),e("span",{class:"font-weight-bold mx-1"},"42"),p("\u4E2A\u4F18\u8D28\u514D\u8D39UI\u8D44\u6E90")],-1)),K=p("\u63D0\u4EA4\u8D44\u6E90");function T(o,c,v,y,a,r){const n=s("Icon"),i=s("v-spacer"),d=s("v-icon"),f=s("v-btn");return _(),m("div",V,[e("div",j,[e("div",H,[t(n,{name:"Search",color:"#666",class:"search-icon"}),k(e("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=l=>a.keywords=l),placeholder:"\u68C0\u7D22\u56FE\u6807/\u63D2\u56FE/\u56FE\u6848/\u989C\u8272....",class:"search-field px-2",onKeyup:c[1]||(c[1]=I((...l)=>r.search&&r.search(...l),["enter"]))},null,544),[[C,a.keywords]])])]),e("div",N,[G,t(i),t(f,{depressed:"",flat:"",href:"https://github.com/uiset-com/uiset",target:"_blank"},{default:L(()=>[t(d,{icon:a.mdiSourceMerge},null,8,["icon"]),K]),_:1})])])}var U=u(R,[["render",T],["__scopeId","data-v-cb0a55c2"]]);const q={components:{CategoryMenu:w,ResourceList:$,HomeList:U},data(){return{latests:h}}},z={class:"d-flex",style:{"max-width":"1100px",width:"100%",margin:"0 auto"}},D={class:"flex-shrink-0"},E={class:"flex-grow-1 ml-7"},J={style:{height:"100vh"},class:"py-8"};function A(o,c,v,y,a,r){const n=s("CategoryMenu"),i=s("HomeList"),d=s("ResourceList");return _(),m("div",z,[e("div",D,[t(n)]),e("div",E,[t(i),e("div",J,[t(d,{resources:a.latests,hidebar:""},null,8,["resources"])])])])}var Q=u(q,[["render",A]]);export{Q as default};
