import{d as T,k as y,o as i,b as u,w as t,q as C,c as A,p as e,bp as $,bq as S,m as l,n as V,C as c,G as D,y as m,E as a,x as b,H as I,I as N,D as O,a as w,F as E}from"./index.a69f84de.js";import{b as k}from"./index.7541632f.js";import{V as Y,a as P,b as j,c as h}from"./VCard.b0efa700.js";import{V as R,a as F}from"./VBtn.7a225007.js";import{a as L}from"./VOverlay.2182358c.js";import{V as U}from"./VTable.7ac646c9.js";import{a as v,V as G}from"./VRow.6c8efdae.js";import{V as H}from"./VChip.1c346d74.js";import"./VAvatar.2d19ad99.js";import"./router.2e433ff5.js";import"./VImg.c4856eeb.js";import"./position.da927156.js";import"./group.e85680d9.js";import"./lazy.99ccf6b5.js";import"./easing.36b781ab.js";const J={key:0},K={class:"v-card-content"},M=T({inheritAttrs:!1}),Q=Object.assign(M,{__name:"AppCardActions",props:{collapsed:{type:Boolean,required:!1,default:!1},noActions:{type:Boolean,required:!1,default:!1},actionCollapsed:{type:Boolean,required:!1,default:!1},actionRefresh:{type:Boolean,required:!1,default:!1},actionRemove:{type:Boolean,required:!1,default:!1},title:{type:String,required:!1,default:void 0}},emits:["collapsed","refresh","trash"],setup(o,{emit:f}){const r=o,s=y(r.collapsed),_=y(!1),n=y(!1),d=()=>{n.value=!1},x=()=>{s.value=!s.value,f("collapsed",s.value)},z=()=>{n.value=!0,f("refresh",d)},B=()=>{_.value=!0,f("trash")};return(p,g)=>(i(),u(k,null,{default:t(()=>[C(_)?m("",!0):(i(),A("div",J,[e(Y,$(S(p.$attrs)),{default:t(()=>[e(P,null,{append:t(()=>[l("div",null,[V(p.$slots,"before-actions"),(!(o.actionRemove||o.actionRefresh)||o.actionCollapsed)&&!o.noActions?(i(),u(R,{key:0,icon:"",color:"default",variant:"text",size:"x-small",onClick:x},{default:t(()=>[e(c,{size:"20",icon:"tabler-chevron-up",style:D([{transform:C(s)?"rotate(-180deg)":null},{"transition-duration":"0.28s"}])},null,8,["style"])]),_:1})):m("",!0),(!(o.actionRemove||o.actionCollapsed)||o.actionRefresh)&&!o.noActions?(i(),u(R,{key:1,icon:"",size:"x-small",variant:"text",color:"default",onClick:z},{default:t(()=>[e(c,{size:"20",icon:"tabler-refresh"})]),_:1})):m("",!0),(!(o.actionRefresh||o.actionCollapsed)||o.actionRemove)&&!o.noActions?(i(),u(R,{key:2,icon:"",size:"x-small",variant:"text",color:"default",onClick:B},{default:t(()=>[e(c,{size:"20",icon:"tabler-x"})]),_:1})):m("",!0)])]),default:t(()=>[r.title||p.$slots.title?(i(),u(j,{key:0},{default:t(()=>[V(p.$slots,"title",{},()=>[a(b(r.title),1)])]),_:3})):m("",!0)]),_:3}),e(k,null,{default:t(()=>[I(l("div",K,[V(p.$slots,"default")],512),[[N,!C(s)]])]),_:3}),e(L,{modelValue:C(n),"onUpdate:modelValue":g[0]||(g[0]=q=>O(n)?n.value=q:null),contained:"",persistent:"",class:"align-center justify-center"},{default:t(()=>[e(F,{indeterminate:""})]),_:1},8,["modelValue"])]),_:3},16)]))]),_:3}))}}),W=l("thead",null,[l("tr",null,[l("th",{scope:"col"}," ACTION "),l("th",{scope:"col"}," ICON "),l("th",{scope:"col"}," DETAILS ")])],-1),X=l("p",null,[a("You can specifically add collapsible action using "),l("code",null,"actionCollapse"),a(" prop")],-1),Z=l("p",null,[a("You can specifically add refresh action using "),l("code",null,"actionRefresh"),a(" prop")],-1),ee=l("p",null,[a("You can specifically add remove action using "),l("code",null,"actionRemove"),a(" prop")],-1),te=l("p",null,[l("code",null,"app-card-actions"),a(" also provides "),l("code",null,"before-actions"),a(" and "),l("code",null,"after-actions"),a(" slot")],-1),le=l("span",null,"You can find more details in our documentation",-1),_e={__name:"card-actions",setup(o){const f=[{action:"Collapse",icon:"tabler-chevron-up",details:"Collapse card content using collapse action."},{action:"Refresh Content",icon:"tabler-refresh",details:"Refresh your card content using refresh action."},{action:"Remove Card",icon:"tabler-x",details:"Remove card from page using remove card action"}],r=s=>{setTimeout(s,3e3)};return(s,_)=>{const n=Q;return i(),u(G,null,{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[e(n,{title:"Cards Actions",onRefresh:r},{default:t(()=>[e(h,null,{default:t(()=>[e(U,null,{default:t(()=>[W,l("tbody",null,[(i(),A(E,null,w(f,d=>l("tr",{key:d.icon},[l("td",null,b(d.action),1),l("td",null,[e(c,{size:"20",icon:d.icon},null,8,["icon"])]),l("td",null,b(d.details),1)])),64))])]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{"action-collapsed":"",title:"Collapsible"},{default:t(()=>[e(h,null,{default:t(()=>[X,l("span",null,[a("Click on "),e(c,{size:"20",icon:"tabler-chevron-up"}),a(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Refresh Content","action-refresh":"",onRefresh:r},{default:t(()=>[e(h,null,{default:t(()=>[Z,l("span",null,[a("Click on "),e(c,{size:"20",icon:"tabler-refresh"}),a(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Remove Card","action-remove":""},{default:t(()=>[e(h,null,{default:t(()=>[ee,l("span",null,[a("Click on "),e(c,{size:"20",icon:"tabler-x"}),a(" icon to see it in action")])]),_:1})]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Slots",onRefresh:r},{"before-actions":t(()=>[e(H,{class:"me-3",color:"primary",size:"small"},{default:t(()=>[a(" 3 Updates ")]),_:1})]),default:t(()=>[e(h,null,{default:t(()=>[te,le]),_:1})]),_:1})]),_:1})]),_:1})}}};export{_e as default};
