import{m as R,V as C,a as S,f as $,b as A}from"./VSelectionControl.d52e8531.js";import{a6 as c,ae as m,p as a,O as u,aC as G,az as p,ah as O,A as h,am as k,aD as U,F as x}from"./index.a5ec1759.js";import{m as D,f as F,V as N,a as _}from"./VInput.0898fa1e.js";const q=c({name:"VRadio",props:{...R({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,l){let{slots:r}=l;return m(()=>a(C,u(e,{class:"v-radio",type:"radio"}),r)),{}}});const w=c({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...D(),...G(S(),["multiple"]),trueIcon:{type:p,default:"$radioOn"},falseIcon:{type:p,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:r,slots:t}=l;const f=O(),n=h(()=>e.id||`radio-group-${f}`),o=k(e,"modelValue");return m(()=>{const[V,v]=U(r),[I,z]=F(e),[b,L]=$({...e,multiple:!1}),d=t.label?t.label({label:e.label,props:{for:n.value}}):e.label;return a(_,u({class:"v-radio-group"},V,I,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,id:n.value}),{...t,default:s=>{let{id:i,isDisabled:y,isReadonly:g}=s;return a(x,null,[d&&a(N,{for:i.value,clickable:!0},{default:()=>[d]}),a(A,u(b,{id:i.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:y.value,readonly:g.value},v,{modelValue:o.value,"onUpdate:modelValue":P=>o.value=P}),t)])}})}),{}}});export{w as V,q as a};
