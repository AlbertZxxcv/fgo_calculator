import{a as n,u as d}from"./router.f31f7d8c.js";import{a6 as h,a9 as v,aa as b,ab as m,ae as u,p as t,ax as f}from"./index.a5ec1759.js";const g=h({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...n(),...v(),...b()},setup(e,s){let{slots:a}=s;const{themeClasses:i}=m(e),{densityClasses:r}=d(e);return u(()=>{var o,l;return t(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},i.value,r.value]},{default:()=>[(o=a.top)==null?void 0:o.call(a),a.default&&t("div",{class:"v-table__wrapper",style:{height:f(e.height)}},[t("table",null,[a.default()])]),(l=a.bottom)==null?void 0:l.call(a)]})}),{}}});export{g as V};
