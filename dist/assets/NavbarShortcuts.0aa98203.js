import{j as _,o,b as l,w as e,p as t,C as r,E as h,q as p,P as g,c as V,F as x,a as y,s as C,m as u,x as m}from"./index.a5ec1759.js";import{V as v}from"./VMenu.db1f925a.js";import{V as A,a as S,b as k}from"./VCard.33ea64fa.js";import{V as d}from"./VBtn.aef478b4.js";import{V as w}from"./VDivider.a2bd7899.js";import{V as z,a as B}from"./VRow.4337d105.js";import{V as I}from"./VAvatar.c642e7ad.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.8d64659a.js";import"./VOverlay.52ae426c.js";import"./router.f31f7d8c.js";import"./lazy.ebc028b9.js";import"./easing.36b781ab.js";import"./VImg.ef19bebc.js";import"./dialog-transition.c2f7b40d.js";import"./position.2382e007.js";const D={class:"text-base font-weight-semibold mt-2 mb-0"},N={class:"text-sm"},q={__name:"Shortcuts",props:{togglerIcon:{type:String,required:!1,default:"tabler-layout-grid-add"},shortcuts:{type:Array,required:!0}},setup(n){const s=n,i=_();return(f,c)=>(o(),l(d,{variant:"text",color:"default",size:"small",icon:""},{default:e(()=>[t(r,{size:"24",icon:s.togglerIcon},null,8,["icon"]),t(v,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(A,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(S,{class:"py-4"},{append:e(()=>[t(d,{size:"x-small",variant:"text",color:"default",icon:""},{default:e(()=>[t(r,{size:"22",icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(k,null,{default:e(()=>[h("Shortcuts")]),_:1})]),_:1}),t(w),t(p(g),{options:{wheelPropagation:!1}},{default:e(()=>[t(z,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),V(x,null,y(s.shortcuts,(a,b)=>(o(),l(B,{key:a.title,cols:"6",class:C(["text-center border-t cursor-pointer pa-4",(b+1)%2?"border-e":""]),onClick:F=>p(i).push(a.to)},{default:e(()=>[t(I,{variant:"tonal",size:"48"},{default:e(()=>[t(r,{icon:a.icon},null,8,["icon"])]),_:2},1024),u("h6",D,m(a.title),1),u("span",N,m(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},X={__name:"NavbarShortcuts",setup(n){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(i,f)=>{const c=q;return o(),l(c,{shortcuts:s})}}};export{X as default};