import{k as _,Z as x,q as s,o,b as n,w as e,p as t,m as k,x as m,D as b,c as p,a as d,F as f,y as C,bd as T,a1 as w,E as v,C as V}from"./index.8428b7f6.js";import{b as y}from"./route-block.2f1a6263.js";import{V as B,a as D}from"./VTabs.e88eecf1.js";import{a as h,V as I}from"./VRow.d01b775f.js";import{V as L,a as N}from"./VWindowItem.f3e425e2.js";import{V as z,c as R}from"./VCard.d1da0a6b.js";import{V as E}from"./VAvatar.470f35e7.js";import{V as F,a as H,b as U}from"./VList.53d51593.js";import{V as W}from"./VBtn.fafb0c67.js";import"./group.103e290c.js";import"./router.2d262d60.js";import"./easing.36b781ab.js";import"./VSlideGroup.5cf5818e.js";import"./index.6fb3c924.js";import"./lazy.501bc841.js";import"./VImg.c303eb50.js";import"./ssrBoot.72dbf22f.js";import"./position.99ffc29f.js";import"./VDivider.a682f68c.js";const q={class:"text-base mb-3"},A=k("span",null,"Back to help center",-1),S={__name:"index",setup(Z){const g=T(),l=_(),r=_("");return x(r,()=>w.get("/pages/help-center/subcategory",{params:{category:g.params.category,subcategory:g.params.subcategory}}).then(u=>{l.value=u.data.data,r.value=u.data.activeTab}),{immediate:!0}),(u,i)=>s(l)?(o(),n(I,{key:0},{default:e(()=>[t(h,{cols:"12",md:"4"},{default:e(()=>[k("h6",q,m(s(l).title),1),t(B,{modelValue:s(r),"onUpdate:modelValue":i[0]||(i[0]=a=>b(r)?r.value=a:null),direction:"vertical",class:"v-tabs-pill"},{default:e(()=>[(o(!0),p(f,null,d(s(l).subCategories,a=>(o(),n(D,{key:a.slug,value:a.slug,to:{name:"pages-help-center-category-subcategory",params:{category:s(l).slug,subcategory:a.slug}}},{default:e(()=>[v(m(a.title),1)]),_:2},1032,["value","to"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(h,{cols:"12",md:"8"},{default:e(()=>[t(L,{modelValue:s(r),"onUpdate:modelValue":i[1]||(i[1]=a=>b(r)?r.value=a:null),class:"disable-tab-transition"},{default:e(()=>[(o(!0),p(f,null,d(s(l).subCategories,a=>(o(),n(N,{key:a.slug,value:a.slug},{default:e(()=>[t(z,{title:a.title},{prepend:e(()=>[t(E,{color:"primary",variant:"tonal",rounded:"",size:"42"},{default:e(()=>[t(V,{icon:a.icon,size:"26"},null,8,["icon"])]),_:2},1024)]),default:e(()=>[t(R,null,{default:e(()=>[t(F,{class:"card-list mb-6"},{default:e(()=>[(o(!0),p(f,null,d(a.articles,c=>(o(),n(H,{key:c.slug,to:{name:"pages-help-center-category-subcategory-article",params:{category:s(l).slug,subcategory:a.slug,article:c.slug}}},{prepend:e(()=>[t(V,{icon:"tabler-chevron-right",size:"18",class:"me-2"})]),default:e(()=>[t(U,{class:"text-primary"},{default:e(()=>[v(m(c.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024),t(W,{variant:"tonal",to:{name:"pages-help-center"}},{default:e(()=>[t(V,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),A]),_:1})]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):C("",!0)}};typeof y=="function"&&y(S);export{S as default};
