import{k as n,o as L,b as T,w as t,p as e,m as r,q as a,V as U,v as M,be as q,D as p,E as b,bd as E,j as F,r as J,a1 as O}from"./index.a5ec1759.js";import{a as P,b as $,c as G,d as X}from"./auth-v2-register-illustration-light.bed06000.js";import{u as v,m as Y,a as z}from"./useGenerateImageVariant.d053960e.js";import{u as H}from"./useAppAbility.481a11e0.js";import{_ as K}from"./AuthProvider.e38ae49f.js";import{r as _,f as Q,e as W}from"./validators.741d8b3f.js";import{b as x}from"./route-block.2f1a6263.js";import{V as k}from"./VImg.ef19bebc.js";import{a as i,V as w}from"./VRow.4337d105.js";import{V as Z,c as I}from"./VCard.33ea64fa.js";import{V as g}from"./VTextField.0655794b.js";import{V as ee}from"./VCheckbox.2b0f3148.js";import{V as te}from"./VInput.0898fa1e.js";import{V as ae}from"./VBtn.aef478b4.js";import{V as S}from"./VDivider.a2bd7899.js";import{V as se}from"./VForm.9523b210.js";import"./index.0d4b9ec4.js";import"./router.f31f7d8c.js";import"./VAvatar.c642e7ad.js";import"./position.2382e007.js";/* empty css                   */import"./VField.9fce0238.js";import"./index.f56e86d6.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.8b46bbba.js";import"./VCheckboxBtn.e2e99e37.js";import"./VSelectionControl.d52e8531.js";const oe={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},re={class:"d-flex align-center justify-center w-100 h-100"},le=r("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here \u{1F680} ",-1),ie=r("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),ne={class:"d-flex align-center mt-2 mb-4"},ue=r("span",{class:"me-1"},"I agree to",-1),me=r("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),de=r("span",null,"Already have an account?",-1),ce=r("span",{class:"mx-4"},"or",-1),pe={__name:"register",setup(fe){const h=n(),u=n("johnDoe"),m=n("john@example.com"),d=n("john@VUEXY#123"),f=n(!0),y=E(),R=F(),D=H(),C=n({email:void 0,password:void 0}),j=()=>{O.post("/auth/register",{username:u.value,email:m.value,password:d.value}).then(l=>{const{accessToken:s,userData:V,userAbilities:o}=l.data;return localStorage.setItem("userAbilities",JSON.stringify(o)),D.update(o),localStorage.setItem("userData",JSON.stringify(V)),localStorage.setItem("accessToken",JSON.stringify(s)),R.replace(y.query.to?String(y.query.to):"/"),null}).catch(l=>{const{errors:s}=l.response.data;C.value=s,console.error(l.response.data)})},N=v(X,G,$,P,!0),A=v(z,Y),c=n(!1),B=()=>{var l;(l=h.value)==null||l.validate().then(({valid:s})=>{s&&j()})};return(l,s)=>{const V=J("RouterLink");return L(),T(w,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(i,{lg:"8",class:"d-none d-lg-flex"},{default:t(()=>[r("div",oe,[r("div",re,[e(k,{"max-width":"441",src:a(N),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(k,{class:"auth-footer-mask",src:a(A)},null,8,["src"])])]),_:1}),e(i,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:t(()=>[e(Z,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(I,null,{default:t(()=>[e(a(U),{nodes:a(M).app.logo,class:"mb-6"},null,8,["nodes"]),le,ie]),_:1}),e(I,null,{default:t(()=>[e(a(se),{ref_key:"refVForm",ref:h,onSubmit:q(B,["prevent"])},{default:t(()=>[e(w,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(u),"onUpdate:modelValue":s[0]||(s[0]=o=>p(u)?u.value=o:null),rules:[a(_),a(Q)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(m),"onUpdate:modelValue":s[1]||(s[1]=o=>p(m)?m.value=o:null),rules:[a(_),a(W)],label:"Email",type:"email"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(d),"onUpdate:modelValue":s[2]||(s[2]=o=>p(d)?d.value=o:null),rules:[a(_)],label:"Password",type:a(c)?"text":"password","append-inner-icon":a(c)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=o=>c.value=!a(c))},null,8,["modelValue","rules","type","append-inner-icon"]),r("div",ne,[e(ee,{id:"privacy-policy",modelValue:a(f),"onUpdate:modelValue":s[4]||(s[4]=o=>p(f)?f.value=o:null),inline:""},null,8,["modelValue"]),e(te,{for:"privacy-policy",class:"pb-1",style:{opacity:"1"}},{default:t(()=>[ue,me]),_:1})]),e(ae,{block:"",type:"submit"},{default:t(()=>[b(" Sign up ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center text-base"},{default:t(()=>[de,e(V,{class:"text-primary ms-2",to:{name:"login"}},{default:t(()=>[b(" Sign in instead ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(S),ce,e(S)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[e(K)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof x=="function"&&x(pe);export{pe as default};
