import{L as v,k as S,o as n,c as u,m as a,p as e,w as s,E as i,q as m,D as w,C as _,F as d,a as y,O as k,s as C,H as h,I as b,x as o,b as L,a3 as B,a4 as I}from"./index.5831b7bb.js";import{V as N}from"./VInput.37a1b6ca.js";import{V as U}from"./VSwitch.81bfc0b1.js";import{V as P}from"./VChip.989ef4c6.js";import{a as q,V as A}from"./VRow.58062b87.js";import{V as D,c,e as T}from"./VCard.c419074f.js";import{V as z}from"./VImg.86853022.js";import{V as F,a as G,b as E}from"./VList.691863e0.js";import{V as M}from"./VBtn.409ffcb5.js";const R="/fgo_calculator/assets/3d-safe-box-with-golden-dollar-coins.fcbc95c7.png",j="/fgo_calculator/assets/3d-space-rocket-with-smoke.603bb4f0.png",Y="/fgo_calculator/assets/dollar-coins-flying-pink-piggy-bank.85567cfa.png";const p=r=>(B("data-v-17624f46"),r=r(),I(),r),$=p(()=>a("div",{class:"text-center"},[a("h4",{class:"text-h4 pricing-title mb-4"}," Pricing Plans "),a("p",{class:"mb-0"}," All plans include 40+ advanced tools and features to boost your product. "),a("p",null,"Choose the best plan to fit your needs.")],-1)),H={class:"d-flex align-center justify-center mx-auto my-10"},J={class:"position-relative"},O={class:"save-upto-chip position-absolute align-center d-none d-md-flex gap-1"},W={class:"text-h5 mb-2"},K={class:"mb-0"},Q={class:"d-flex justify-center align-center"},X=p(()=>a("sup",{class:"text-sm font-weight-medium me-1"},"$",-1)),Z={class:"text-5xl font-weight-medium text-primary"},ee=p(()=>a("sub",{class:"text-sm font-weight-medium ms-1 mt-4"},"/month",-1)),te={__name:"AppPricing",props:{xs:{type:[Number,String],required:!1},sm:{type:[Number,String],required:!1},md:{type:[String,Number],required:!1},lg:{type:[String,Number],required:!1},xl:{type:[String,Number],required:!1}},setup(r){const x=r,l=S(!0),V=[{name:"Basic",tagLine:"A simple start for everyone",logo:Y,monthlyPrice:0,yearlyPrice:0,isPopular:!1,current:!0,features:["100 responses a month","Unlimited forms and surveys","Unlimited fields","Basic form creation tools","Up to 2 subdomains"]},{name:"Standard",tagLine:"For small to medium businesses",logo:R,monthlyPrice:42,yearlyPrice:460,isPopular:!0,current:!1,features:["Unlimited responses","Unlimited forms and surveys","Instagram profile page","Google Docs integration","Custom \u201CThank you\u201D page"]},{name:"Enterprise",tagLine:"Solution for big organizations",logo:j,monthlyPrice:84,yearlyPrice:690,isPopular:!1,current:!1,features:["PayPal payments","Logic Jumps","File upload with 5GB storage","Custom domain support","Stripe integration"]}];return(se,f)=>(n(),u(d,null,[$,a("div",H,[e(N,{for:"pricing-plan-toggle",class:"me-2"},{default:s(()=>[i(" Monthly ")]),_:1}),a("div",J,[e(U,{id:"pricing-plan-toggle",modelValue:m(l),"onUpdate:modelValue":f[0]||(f[0]=t=>w(l)?l.value=t:null),label:"Annual"},null,8,["modelValue"]),a("div",O,[e(_,{icon:"tabler-corner-left-down",class:"flip-in-rtl"}),e(P,{label:"",color:"primary"},{default:s(()=>[i(" Save up to 10% ")]),_:1})])])]),e(A,null,{default:s(()=>[(n(),u(d,null,y(V,t=>e(q,k({key:t.logo},x,{cols:"12"}),{default:s(()=>[e(D,{flat:"",border:"",class:C(t.isPopular?"border-primary border-opacity-100":"")},{default:s(()=>[e(c,{style:{height:"4.125rem"},class:"text-end"},{default:s(()=>[h(e(P,{label:"",color:"primary",size:"small"},{default:s(()=>[i(" Popular ")]),_:2},1536),[[b,t.isPopular]])]),_:2},1024),e(c,{class:"text-center"},{default:s(()=>[e(z,{height:140,src:t.logo,class:"mx-auto mb-5"},null,8,["src"]),a("h5",W,o(t.name),1),a("p",K,o(t.tagLine),1)]),_:2},1024),e(c,{class:"position-relative text-center"},{default:s(()=>[a("div",Q,[X,a("h1",Z,o(m(l)?Math.floor(Number(t.yearlyPrice)/12):t.monthlyPrice),1),ee]),h(a("span",{class:"position-absolute text-caption font-weight-medium mt-1",style:{"inset-inline":"0"}},o(t.yearlyPrice===0?"free":`USD ${t.yearlyPrice}/Year`),513),[[b,m(l)]])]),_:2},1024),e(c,{class:"mt-5"},{default:s(()=>[e(F,{class:"card-list"},{default:s(()=>[(n(!0),u(d,null,y(t.features,g=>(n(),L(G,{key:g},{prepend:s(()=>[e(_,{size:14,icon:"tabler-circle",class:"me-3"})]),default:s(()=>[e(E,null,{default:s(()=>[i(o(g),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),e(T,null,{default:s(()=>[e(M,{block:"",color:t.current?"success":"primary",variant:t.isPopular?"elevated":"tonal"},{default:s(()=>[i(o(t.yearlyPrice===0?"Your Current Plan":"Upgrade"),1)]),_:2},1032,["color","variant"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)),64))]),_:1})],64))}},de=v(te,[["__scopeId","data-v-17624f46"]]),pe="/fgo_calculator/assets/laptop-girl.35162850.png";export{de as _,pe as l};
