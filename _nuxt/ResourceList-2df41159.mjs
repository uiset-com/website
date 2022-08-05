import{I as B,m as C,a as N,b as A,d as L}from"./mdi-11e51a23.mjs";import{r as a,o as c,a as l,F as b,b as o,w as y,h as t,t as h,c as p,y as v,q as R,s as I,v as z,z as S,A as V,B as j,p as k,m as $}from"./entry-8314dab0.mjs";import{_ as x}from"./plugin-vue_export-helper-84c1d017.mjs";const q={components:{Icon:B},data(){return{mdiGithub:C,mdiPencil:N,mdiWeb:A}},props:{resource:{type:Object,required:!0}}},M=s=>(I("data-v-678ddf93"),s=s(),z(),s),G={class:"mt-1"},O={class:"font-weight-bold"},W={class:"text-caption summary-box"},D={class:"d-flex align-center mt-2"},F=M(()=>t("span",{class:"ml-1 font-weight-bold",style:{color:"rgba(0,0,0,0.6)"}},"GitHub",-1)),K=M(()=>t("span",{class:"ml-1 font-weight-bold",style:{color:"rgba(0,0,0,0.6)"}},"Website",-1));function P(s,i,e,w,r,f){const u=a("v-img"),_=a("router-link"),n=a("v-icon"),d=a("v-btn"),m=a("v-spacer");return c(),l("div",{class:R(["pa-2 resouce-item mr-3 mb-3","placehold-"+!e.resource.name])},[e.resource.name?(c(),l(b,{key:0},[o(_,{to:`/resource/${e.resource.category}/${e.resource.value}`},{default:y(()=>[o(u,{src:`/resources/categorys/${e.resource.category}/${e.resource.value}/thumbnail.png`,height:"180",cover:""},null,8,["src"])]),_:1},8,["to"]),t("div",G,[t("div",O,h(e.resource.name),1),t("div",W,h(e.resource.summary),1)]),t("div",D,[o(d,{flat:"",color:"rgba(0,0,0,0.02)",size:"x-small",class:"edit-btn text-decoration-none",href:`https://github.com/uiset-com/uiset/tree/master/categorys/${e.resource.category}/${e.resource.value}`,target:"_blank"},{default:y(()=>[o(n,{icon:r.mdiPencil,size:"16",color:"#AAA"},null,8,["icon"])]),_:1},8,["href"]),o(m),e.resource.github?(c(),p(d,{key:0,href:e.resource.github,target:"_blank",block:!1,flat:"",color:"rgba(0,0,0,0.02)",size:"x-small",class:"mr-1 text-decoration-none"},{default:y(()=>[o(n,{icon:r.mdiGithub,size:"18",color:"#888"},null,8,["icon"]),F]),_:1},8,["href"])):v("",!0),o(d,{flat:"",color:"rgba(0,0,0,0.02)",size:"x-small",href:e.resource.website+"?ref=uiset",target:"_blank",class:"text-decoration-none"},{default:y(()=>[o(n,{icon:r.mdiWeb,size:"16",color:"#888"},null,8,["icon"]),K]),_:1},8,["href"])])],64)):v("",!0)],2)}var T=x(q,[["render",P],["__scopeId","data-v-678ddf93"]]);const E={components:{Icon:B},props:{searchMode:{type:Boolean,default:!1},total:{type:Number,default:0},category:{type:Object,default:null}},data(){return{mdiMagnify:L,keywords:""}},computed:{urlkeywords(){return this.$route.query.keywords}},watch:{urlkeywords:{handler(){this.searchMode&&(this.keywords=this.urlkeywords)},immediate:!0}},methods:{async search(){this.$router.push(`/search?keywords=${this.keywords}`)}}},g=s=>(I("data-v-2d761136"),s=s(),z(),s),H={class:"d-flex py-4 align-center pr-2"},U=g(()=>t("span",null,"\u5171\u627E\u5230",-1)),J={class:"font-weight-bold mx-1"},Q=g(()=>t("span",null,[k("\u4E2A\u5305\u542B\u5173\u952E\u8BCD"),t("span",{class:"font-weight-bold mx-1"},"\u56FE\u6807"),k("\u7684\u8D44\u6E90")],-1)),X={class:"font-weight-bold ml-2"},Y=g(()=>t("span",{class:"mx-1"},"/",-1)),Z={class:"font-weight-bold mx-1"},ee=g(()=>t("span",null,"\u4E2A\u8D44\u6E90",-1)),te={class:"search-box d-flex align-center"};function oe(s,i,e,w,r,f){var d;const u=a("Icon"),_=a("v-spacer"),n=a("v-icon");return c(),l("div",H,[e.searchMode?(c(),l(b,{key:0},[U,t("span",J,h(e.total),1),Q],64)):(c(),l(b,{key:1},[o(u,{name:e.category.icon},null,8,["name"]),t("span",X,h((d=e.category)==null?void 0:d.name),1),Y,t("span",Z,h(e.total),1),ee],64)),o(_),t("div",te,[o(n,{icon:r.mdiMagnify,class:"search-icon"},null,8,["icon"]),S(t("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=m=>r.keywords=m),placeholder:"\u68C0\u7D22\u8D44\u6E90 \u56DE\u8F66",class:"search-field px-2",onKeyup:i[1]||(i[1]=j((...m)=>f.search&&f.search(...m),["enter"]))},null,544),[[V,r.keywords]])])])}var se=x(E,[["render",oe],["__scopeId","data-v-2d761136"]]);const ae={components:{ResourceCard:T,ListBar:se},props:{resources:{type:Array,default:[]},hidebar:{type:Boolean,default:!1},searchMode:{type:Boolean,default:!1},total:{type:Number,default:0},category:{type:Object,default:null}},data(){return{}}},ce={style:{height:"100%"},class:"d-flex flex-column"},re={class:"flex-grow-1 pr-3",style:{"overflow-y":"auto",height:"0"}},ne={class:"d-flex flex-wrap justify-space-between mb-8"};function le(s,i,e,w,r,f){const u=a("ListBar"),_=a("ResourceCard");return c(),l("div",ce,[e.hidebar?v("",!0):(c(),p(u,{key:0,"search-mode":e.searchMode,total:e.total,category:e.category},null,8,["search-mode","total","category"])),t("div",re,[t("div",ne,[(c(!0),l(b,null,$(e.resources,n=>(c(),p(_,{key:n.value,resource:n},null,8,["resource"]))),128))])])])}var _e=x(ae,[["render",le]]);export{_e as R,T as a};
