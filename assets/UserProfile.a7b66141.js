import{o as n,b as c,w as t,p as e,q as o,C as r,E as s,x as u,j as V,a5 as y}from"./index.f96204d4.js";import{u as v}from"./useAppAbility.aa15b29d.js";import{V as m}from"./VBadge.ad7df653.js";import{V as p}from"./VImg.3840f13d.js";import{V as I}from"./VMenu.c376f9d6.js";import{V as h,a as l,b as i,c as k}from"./VList.d6c91787.js";import{V as x}from"./VListItemAction.346e2809.js";import{V as f}from"./VAvatar.3e612c06.js";import{V as d}from"./VDivider.8ca36772.js";import"./router.0caea9f9.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.d7a24f41.js";import"./VOverlay.80453885.js";import"./lazy.03b2cb37.js";import"./easing.36b781ab.js";import"./dialog-transition.d216b00d.js";import"./index.68a3351e.js";const U={__name:"UserProfile",setup(S){const _=V(),g=v(),a=JSON.parse(localStorage.getItem("userData")||"null"),b=()=>{localStorage.removeItem("userData"),localStorage.removeItem("accessToken"),_.push("/login").then(()=>{localStorage.removeItem("userAbilities"),g.update(y)})};return(A,L)=>(n(),c(m,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",bordered:"",color:"success"},{default:t(()=>[e(f,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:t(()=>[o(a)&&o(a).avatar?(n(),c(p,{key:0,src:o(a).avatar},null,8,["src"])):(n(),c(r,{key:1,icon:"tabler-user"})),e(I,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:t(()=>[e(h,null,{default:t(()=>[e(l,null,{prepend:t(()=>[e(x,{start:""},{default:t(()=>[e(m,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:t(()=>[e(f,{color:"primary",variant:"tonal"},{default:t(()=>[o(a)&&o(a).avatar?(n(),c(p,{key:0,src:o(a).avatar},null,8,["src"])):(n(),c(r,{key:1,icon:"tabler-user"}))]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(i,{class:"font-weight-semibold"},{default:t(()=>[s(u(o(a).fullName),1)]),_:1}),e(k,null,{default:t(()=>[s(u(o(a).role),1)]),_:1})]),_:1}),e(d,{class:"my-2"}),e(l,{to:{name:"apps-user-view-id",params:{id:21}}},{prepend:t(()=>[e(r,{class:"me-2",icon:"tabler-user",size:"22"})]),default:t(()=>[e(i,null,{default:t(()=>[s("Profile")]),_:1})]),_:1}),e(l,{to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{prepend:t(()=>[e(r,{class:"me-2",icon:"tabler-settings",size:"22"})]),default:t(()=>[e(i,null,{default:t(()=>[s("Settings")]),_:1})]),_:1}),e(l,{to:{name:"pages-pricing"}},{prepend:t(()=>[e(r,{class:"me-2",icon:"tabler-currency-dollar",size:"22"})]),default:t(()=>[e(i,null,{default:t(()=>[s("Pricing")]),_:1})]),_:1}),e(l,{to:{name:"pages-faq"}},{prepend:t(()=>[e(r,{class:"me-2",icon:"tabler-help",size:"22"})]),default:t(()=>[e(i,null,{default:t(()=>[s("FAQ")]),_:1})]),_:1}),e(d,{class:"my-2"}),e(l,{link:"",onClick:b},{prepend:t(()=>[e(r,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:t(()=>[e(i,null,{default:t(()=>[s("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{U as default};