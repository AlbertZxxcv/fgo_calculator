import{M as m,o as r,b as s,w as a,p as o,C as u,c as g,F as f,a as _,E as d,x as L,t as h}from"./index.5831b7bb.js";import{V}from"./VMenu.51685c0c.js";import{V as b,a as v,b as x}from"./VList.691863e0.js";import{V as C}from"./VBtn.409ffcb5.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.8e249110.js";import"./VOverlay.07319b82.js";import"./router.f5209e78.js";import"./lazy.e1f914e7.js";import"./easing.36b781ab.js";import"./VImg.86853022.js";import"./dialog-transition.314266f1.js";import"./index.bd317293.js";import"./VAvatar.98c4e6d0.js";import"./VDivider.1b6065d1.js";import"./group.37f92e80.js";import"./position.6effc2b5.js";const k={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(l,{emit:c}){const t=l,{locale:i}=m({useScope:"global"});return(n,p)=>(r(),s(C,{icon:"",variant:"text",color:"default",size:"small"},{default:a(()=>[o(u,{icon:"tabler-language",size:"24"}),o(V,{activator:"parent",location:t.location,offset:"14px"},{default:a(()=>[o(b,{"min-width":"175px"},{default:a(()=>[(r(!0),g(f,null,_(t.languages,e=>(r(),s(v,{key:e.i18nLang,value:e.i18nLang,onClick:I=>{i.value=e.i18nLang,n.$emit("change",e.i18nLang)}},{default:a(()=>[o(x,null,{default:a(()=>[d(L(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}},H={__name:"NavBarI18n",setup(l){const{isAppRtl:c}=h(),t=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],i=n=>{c.value=n==="ar"};return(n,p)=>(r(),s(k,{languages:t,onChange:i}))}};export{H as default};