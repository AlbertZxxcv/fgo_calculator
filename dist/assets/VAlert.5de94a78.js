import{c as D}from"./VAvatar.c642e7ad.js";import{a as I,h as L,b as z,i as E,c as R,d as p,k as w,u as F,l as O,f as j,n as M,g as N,p as q,V as u}from"./router.f31f7d8c.js";import{a as G,c as H}from"./position.2382e007.js";import{a6 as J,az as K,a9 as Q,aa as U,am as W,A as o,ab as X,av as Y,ad as Z,aE as ee,p as a,C as te}from"./index.a5ec1759.js";import{V as ae}from"./VBtn.aef478b4.js";const le=D("v-alert-title"),se=["success","info","warning","error"],ue=J({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:K,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>se.includes(e)},...I(),...L(),...z(),...E(),...G(),...R(),...Q(),...U(),...p({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const n=W(e,"modelValue"),s=o(()=>{var l;if(e.icon!==!1)return e.type?(l=e.icon)!=null?l:`$${e.type}`:e.icon}),v=o(()=>{var l;return{color:(l=e.color)!=null?l:e.type,variant:e.variant}}),{themeClasses:m}=X(e),{colorClasses:f,colorStyles:y,variantClasses:b}=w(v),{densityClasses:V}=F(e),{dimensionStyles:C}=O(e),{elevationClasses:k}=j(e),{locationStyles:P}=M(e),{positionClasses:x}=H(e),{roundedClasses:g}=N(e),{textColorClasses:S,textColorStyles:_}=Y(Z(e,"borderColor")),{t:h}=ee(),r=o(()=>({"aria-label":h(e.closeLabel),onClick(l){n.value=!1}}));return()=>{var l,i;const T=!!(t.prepend||s.value),$=!!(t.title||e.title),B=!!(e.text||t.text),A=!!(t.close||e.closable);return n.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},m.value,f.value,V.value,k.value,x.value,g.value,b.value],style:[y.value,C.value,P.value],role:"alert"},{default:()=>[q(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",S.value],style:_.value},null),T&&a(u,{key:"prepend",defaults:{VIcon:{density:e.density,icon:s.value,size:e.prominent?44:28}}},{default:()=>[a("div",{class:"v-alert__prepend"},[t.prepend?t.prepend():s.value&&a(te,null,null)])]}),a("div",{class:"v-alert__content"},[$&&a(le,{key:"title"},{default:()=>[t.title?t.title():e.title]}),B&&(t.text?t.text():e.text),(l=t.default)==null?void 0:l.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),A&&a(u,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var c;return[a("div",{class:"v-alert__close"},[(c=(i=t.close)==null?void 0:i.call(t,{props:r.value}))!=null?c:a(ae,r.value,null)])]}})]})}}});export{ue as V,le as a};
