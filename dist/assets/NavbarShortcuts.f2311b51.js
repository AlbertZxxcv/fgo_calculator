import{j as _,o,b as l,w as e,p as t,C as r,E as h,q as p,P as g,c as V,F as x,a as y,s as C,m as u,x as m}from"./index.8428b7f6.js";import{V as v}from"./VMenu.f345a025.js";import{V as A,a as S,b as k}from"./VCard.d1da0a6b.js";import{V as d}from"./VBtn.fafb0c67.js";import{V as w}from"./VDivider.a682f68c.js";import{V as z,a as B}from"./VRow.d01b775f.js";import{V as I}from"./VAvatar.470f35e7.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.588fc520.js";import"./VOverlay.1110940f.js";import"./router.2d262d60.js";import"./lazy.501bc841.js";import"./easing.36b781ab.js";import"./VImg.c303eb50.js";import"./dialog-transition.617b4b18.js";import"./position.99ffc29f.js";import"./group.103e290c.js";const D={class:"text-base font-weight-semibold mt-2 mb-0"},N={class:"text-sm"},q={__name:"Shortcuts",props:{togglerIcon:{type:String,required:!1,default:"tabler-layout-grid-add"},shortcuts:{type:Array,required:!0}},setup(i){const s=i,n=_();return(f,c)=>(o(),l(d,{variant:"text",color:"default",size:"small",icon:""},{default:e(()=>[t(r,{size:"24",icon:s.togglerIcon},null,8,["icon"]),t(v,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(A,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(S,{class:"py-4"},{append:e(()=>[t(d,{size:"x-small",variant:"text",color:"default",icon:""},{default:e(()=>[t(r,{size:"22",icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(k,null,{default:e(()=>[h("Shortcuts")]),_:1})]),_:1}),t(w),t(p(g),{options:{wheelPropagation:!1}},{default:e(()=>[t(z,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),V(x,null,y(s.shortcuts,(a,b)=>(o(),l(B,{key:a.title,cols:"6",class:C(["text-center border-t cursor-pointer pa-4",(b+1)%2?"border-e":""]),onClick:F=>p(n).push(a.to)},{default:e(()=>[t(I,{variant:"tonal",size:"48"},{default:e(()=>[t(r,{icon:a.icon},null,8,["icon"])]),_:2},1024),u("h6",D,m(a.title),1),u("span",N,m(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Y={__name:"NavbarShortcuts",setup(i){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(n,f)=>{const c=q;return o(),l(c,{shortcuts:s})}}};export{Y as default};
