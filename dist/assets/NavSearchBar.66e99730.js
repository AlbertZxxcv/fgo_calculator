import{L as S,d as x,t as A,k as l,$ as C,a0 as I,o as p,c as d,m as c,p as i,w as P,q as t,y as V,O as k,D as m,F as B,a1 as D,C as N,j as q,a2 as L,a3 as R,a4 as T}from"./index.a5ec1759.js";import{V as w}from"./VBtn.aef478b4.js";import"./router.f31f7d8c.js";import"./position.2382e007.js";const b=n=>(R("data-v-d2275827"),n=n(),T(),n),E={key:0,class:"d-none d-md-flex align-center text-disabled"},O=b(()=>c("span",{class:"me-3"},"Search",-1)),U=b(()=>c("span",{class:"meta-key"},"\u2318K",-1)),z=[O,U],$=x({inheritAttrs:!1}),j=Object.assign($,{__name:"NavSearchBar",setup(n){const{appContentLayoutNav:g}=A(),e=l(!1),h=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],_=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],s=l(""),u=l([]),f=q();C(()=>{D.get("/app-bar/search",{params:{q:s.value}}).then(r=>{u.value=r.data})});const v=r=>{f.push(r.url),e.value=!1,s.value=""},y=I(()=>L(()=>import("./AppBarSearch.578cc1db.js"),["assets/AppBarSearch.578cc1db.js","assets/index.a5ec1759.js","assets/index.3157ff87.css","assets/VCard.33ea64fa.js","assets/VAvatar.c642e7ad.js","assets/router.f31f7d8c.js","assets/router.1e6db107.css","assets/VImg.ef19bebc.js","assets/VImg.3a095760.css","assets/VAvatar.1c9d231f.css","assets/position.2382e007.js","assets/position.5aa28860.css","assets/VCard.ec4d23b9.css","assets/VTextField.0655794b.js","assets/VField.9fce0238.js","assets/index.f56e86d6.js","assets/VInput.0898fa1e.js","assets/VInput.194111c3.css","assets/easing.36b781ab.js","assets/VField.cb4cc03f.css","assets/forwardRefs.c003b6b8.js","assets/VCounter.8b46bbba.js","assets/VCounter.66d880d8.css","assets/VTextField.ad436dbf.css","assets/VBtn.aef478b4.js","assets/VBtn.1958adaf.css","assets/VDivider.a2bd7899.js","assets/VDivider.5d6d66e0.css","assets/VList.f0d2a04d.js","assets/VList.f3553822.css","assets/VRow.4337d105.js","assets/VRow.0b79ff68.css","assets/VDialog.3c8a224c.js","assets/scopeId.8d64659a.js","assets/VOverlay.52ae426c.js","assets/lazy.ebc028b9.js","assets/VOverlay.72fa3373.css","assets/dialog-transition.c2f7b40d.js","assets/VDialog.0e0bf965.css","assets/AppBarSearch.fae80d89.css"]));return(r,a)=>(p(),d(B,null,[c("div",k({class:"d-flex align-center cursor-pointer"},r.$attrs,{onClick:a[0]||(a[0]=o=>e.value=!t(e))}),[i(w,{icon:"",variant:"text",color:"default",size:"small"},{default:P(()=>[i(N,{icon:"tabler-search",size:"24"})]),_:1}),t(g)==="vertical"?(p(),d("span",E,z)):V("",!0)],16),i(t(y),{isDialogVisible:t(e),"onUpdate:isDialogVisible":a[1]||(a[1]=o=>m(e)?e.value=o:null),"search-query":t(s),"onUpdate:search-query":a[2]||(a[2]=o=>m(s)?s.value=o:null),"search-results":t(u),suggestions:h,"no-data-suggestion":_,onItemSelected:v},null,8,["isDialogVisible","search-query","search-results"])],64))}}),Q=S(j,[["__scopeId","data-v-d2275827"]]);export{Q as default};