import{k as f,o as _,c as V,m as s,p as t,q as o,w as e,V as h,v as i,E as n,x as b,be as g,C as v,r as x}from"./index.a69f84de.js";import{a as y,b as w}from"./auth-v1-top-shape.37562e7c.js";import{b as m}from"./route-block.2f1a6263.js";import{V as p}from"./VImg.c4856eeb.js";import{a as k,b as C,c as d,V as B}from"./VCard.b0efa700.js";import{V as R}from"./VForm.57ffee02.js";import{V as S,a as l}from"./VRow.6c8efdae.js";import{V as T}from"./VTextField.a985a262.js";import{V as E}from"./VBtn.7a225007.js";import"./router.2e433ff5.js";import"./VAvatar.2d19ad99.js";import"./position.da927156.js";import"./VInput.fcdaf419.js";import"./index.7541632f.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.8a5bd6f4.js";import"./easing.36b781ab.js";import"./VCounter.6836ec1b.js";import"./group.e85680d9.js";const N={class:"auth-wrapper d-flex align-center justify-center pa-4"},j={class:"position-relative my-sm-16"},F={class:"d-flex"},I=s("h5",{class:"text-h5 font-weight-semibold mb-1"}," Forgot Password? \u{1F512} ",-1),L=s("p",{class:"mb-0"}," Enter your email and we'll send you instructions to reset your password ",-1),P=s("span",null,"Back to login",-1),q={__name:"forgot-password-v1",setup(D){const r=f({email:""});return(M,a)=>{const c=x("RouterLink");return _(),V("div",N,[s("div",j,[t(p,{src:o(y),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),t(p,{src:o(w),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),t(B,{class:"auth-card pa-4","max-width":"448"},{default:e(()=>[t(k,{class:"justify-center"},{prepend:e(()=>[s("div",F,[t(o(h),{nodes:o(i).app.logo},null,8,["nodes"])])]),default:e(()=>[t(C,{class:"font-weight-bold text-h5 py-1"},{default:e(()=>[n(b(o(i).app.title),1)]),_:1})]),_:1}),t(d,{class:"pt-2"},{default:e(()=>[I,L]),_:1}),t(d,null,{default:e(()=>[t(R,{onSubmit:a[1]||(a[1]=g(()=>{},["prevent"]))},{default:e(()=>[t(S,null,{default:e(()=>[t(l,{cols:"12"},{default:e(()=>[t(T,{modelValue:o(r).email,"onUpdate:modelValue":a[0]||(a[0]=u=>o(r).email=u),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),t(l,{cols:"12"},{default:e(()=>[t(E,{block:"",type:"submit"},{default:e(()=>[n(" Send Reset Link ")]),_:1})]),_:1}),t(l,{cols:"12"},{default:e(()=>[t(c,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:e(()=>[t(v,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),P]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}};typeof m=="function"&&m(q);export{q as default};