import g from"./NpDamageCard.36209b96.js";import{V as u}from"./VChip.1c346d74.js";import{V as d}from"./VAvatar.2d19ad99.js";import{V as _}from"./VSelect.53331fae.js";import{k as f,o,c as s,p as t,w as m,m as v,x as S,q as a,D as b,F as V,a as x,b as y,y as w}from"./index.a69f84de.js";import"./VRow.6c8efdae.js";import"./VCard.b0efa700.js";import"./router.2e433ff5.js";import"./position.da927156.js";import"./VImg.c4856eeb.js";import"./group.e85680d9.js";import"./index.7541632f.js";import"./VTextField.a985a262.js";/* empty css                   */import"./VField.8a5bd6f4.js";import"./VInput.fcdaf419.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.6836ec1b.js";import"./VList.cf9f4638.js";import"./VDivider.36a53221.js";import"./dialog-transition.94621d39.js";import"./VMenu.f6354427.js";import"./scopeId.13911af8.js";import"./VOverlay.2182358c.js";import"./lazy.99ccf6b5.js";import"./VCheckboxBtn.afbaa02b.js";import"./VSelectionControl.9b47ed1f.js";const ee={__name:"ServantSelectSelectionSlot",props:{servant:{type:Object,required:!1}},setup(p){const k=p,c=[{id:1,name:"\u7B2C\u4E00\u56DE\u5408\u53CC\u6740\u72D0,\u7B2C\u4E09\u56DE\u5408\u6362\u5965\u4F2F\u9F99",buffs:[{a:100,b:0,c_np:0,c_skill:0,d:0},{a:0,b:0,c_np:0,c_skill:0,d:0},{a:50,b:0,c_np:30,c_skill:0,d:0}]},{id:2,name:"\u7B2C\u4E00\u56DE\u5408\u5355\u6740\u72D0\u5965\u4F2F\u9F99,\u7B2C\u4E8C\u56DE\u5408\u6362\u53E6\u4E00\u4E2A\u6740\u72D0",buffs:[{a:50,b:0,c_np:30,c_skill:0,d:0},{a:50,b:0,c_np:0,c_skill:0,d:0},{a:50,b:0,c_np:0,c_skill:0,d:0}]}],l=f(null),r=f(1);return(B,i)=>(o(),s(V,null,[t(_,{class:"mar-20",modelValue:a(r),"onUpdate:modelValue":i[0]||(i[0]=e=>b(r)?r.value=e:null),items:c,"item-title":"name","item-value":"id",label:"Select Support Model",clearable:"","clear-icon":"tabler-x"},{selection:m(({item:e})=>[t(u,null,{default:m(()=>[t(d,{start:"",image:e.raw.image},null,8,["image"]),v("span",null,S(e.title),1)]),_:2},1024)]),_:1},8,["modelValue"]),t(_,{class:"mar-20",modelValue:a(l),"onUpdate:modelValue":i[1]||(i[1]=e=>b(l)?l.value=e:null),items:k.servant,"item-title":"name","item-value":"id",label:"Select Servant",multiple:"",clearable:"","clear-icon":"tabler-x"},{selection:m(({item:e})=>[t(u,null,{default:m(()=>[t(d,{start:"",image:e.raw.image},null,8,["image"]),v("span",null,S(e.title),1)]),_:2},1024)]),_:1},8,["modelValue","items"]),(o(!0),s(V,null,x(a(l),e=>(o(),s("div",null,[a(l)?(o(),y(g,{key:0,class:"mar-10",servant:p.servant.find(n=>n.id==e),supporter:c.find(n=>n.id==a(r))},null,8,["servant","supporter"])):w("",!0)]))),256))],64))}};export{ee as default};
