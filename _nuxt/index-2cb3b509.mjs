import{I as y,a as f,C as v,R as x}from"./ResourceList-9d30cf32.mjs";import{r,o as l,a as d,e,b as c,x as g,y as w,z as b,p as $,m as I}from"./entry-84e6e90c.mjs";import{_ as p}from"./plugin-vue_export-helper-84c1d017.mjs";var u=[{name:"Carbon",summary:"\u521B\u5EFA\u548C\u5171\u4EAB\u6E90\u4EE3\u7801\u7684\u7CBE\u7F8E\u56FE\u50CF",website:"https://carbon.now.sh/",github:"https://github.com/carbon-app/carbon",category:"beatify",value:"carbon"},{name:"Color Space Gradient",summary:"\u5728\u7EBF\u751F\u6210\u6E10\u53D8\u8272\u5DE5\u5177",website:"https://mycolor.space/gradient",category:"color",value:"color-space-gradient"},{name:"Coolors Gradient Palette",summary:"\u57FA\u4E8E\u4E24\u4E2A\u989C\u8272\u751F\u6210N\u4E2A\u4E2D\u95F4\u8FC7\u6E21\u8272",website:"https://coolors.co/gradient-palette",category:"color",value:"coolors-gradient-palette"}];const C={components:{Icon:y,ResourceCard:f},data(){return{latests:u,keywords:""}},methods:{async search(){this.$router.push(`/search?keywords=${this.keywords}`)}}},k=s=>($("data-v-72a17232"),s=s(),I(),s),L={class:"d-flex flex-column align-center justify-center"},R=k(()=>e("div",{class:"text-center py-5"},[e("h1",{class:"font-weight-bolder"},"UISET"),e("p",null,"\u53D1\u73B0\u514D\u8D39\u4F18\u8D28\u7684UI\u8D44\u6E90\u96C6\u5408")],-1)),S={class:"py-5 d-flex justify-center"},M={class:"search-box d-flex align-center"};function B(s,t,h,m,a,n){const i=r("Icon");return l(),d("div",L,[R,e("div",S,[e("div",M,[c(i,{name:"Search",color:"#666",class:"search-icon"}),g(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>a.keywords=o),placeholder:"\u68C0\u7D22\u56FE\u6807/\u63D2\u56FE/\u56FE\u6848/\u989C\u8272....",class:"search-field px-2",onKeyup:t[1]||(t[1]=b((...o)=>n.search&&n.search(...o),["enter"]))},null,544),[[w,a.keywords]])])])])}var H=p(C,[["render",B],["__scopeId","data-v-72a17232"]]);const N={components:{CategoryMenu:v,ResourceList:x,HomeList:H},data(){return{latests:u}}},U={class:"d-flex",style:{"max-width":"1100px",width:"100%",margin:"0 auto"}},V={class:"flex-shrink-0"},j={class:"flex-grow-1 ml-7"},E={style:{height:"100vh"},class:"py-8"};function G(s,t,h,m,a,n){const i=r("CategoryMenu"),o=r("HomeList"),_=r("ResourceList");return l(),d("div",U,[e("div",V,[c(i)]),e("div",j,[c(o),e("div",E,[c(_,{resources:a.latests,hidebar:""},null,8,["resources"])])])])}var D=p(N,[["render",G]]);export{D as default};
