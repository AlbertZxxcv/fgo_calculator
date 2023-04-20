import{_}from"./InvoiceEditable.534d2e00.js";import{a as v,V as k}from"./VRow.6c8efdae.js";import{V as w,c as x}from"./VCard.b0efa700.js";import{V as c}from"./VBtn.7a225007.js";import{V as P}from"./VSelect.53331fae.js";import{V as f}from"./VInput.fcdaf419.js";import{V}from"./VSwitch.f639905b.js";import{k as s,o as B,b as S,w as t,p as e,q as i,E as l,D as m,m as n}from"./index.a69f84de.js";import"./AppDateTimePicker.8169f25c.js";import"./VField.8a5bd6f4.js";import"./index.7541632f.js";import"./position.da927156.js";import"./router.2e433ff5.js";import"./easing.36b781ab.js";import"./VTextarea.5c78ec34.js";/* empty css                   */import"./VImg.c4856eeb.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.6836ec1b.js";import"./VTextField.a985a262.js";import"./VTooltip.a9c55392.js";import"./scopeId.13911af8.js";import"./VOverlay.2182358c.js";import"./lazy.99ccf6b5.js";import"./useInvoiceStore.e11dbf44.js";import"./VDivider.36a53221.js";import"./VAvatar.2d19ad99.js";import"./group.e85680d9.js";import"./VList.cf9f4638.js";import"./dialog-transition.94621d39.js";import"./VMenu.f6354427.js";import"./VCheckboxBtn.afbaa02b.js";import"./VSelectionControl.9b47ed1f.js";import"./VChip.1c346d74.js";const D={class:"d-flex align-center justify-space-between"},N={class:"d-flex align-center justify-space-between"},C={class:"d-flex align-center justify-space-between"},pe={__name:"index",setup(T){const b=s({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",balance:"",dueDate:"",client:{address:"",company:"",companyEmail:"",contact:"",country:"",name:""}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213874685",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,hours:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),r=s(!0),d=s(!1),p=s(!1),u=s("Bank Account"),y=["Bank Account","PayPal","UPI Transfer"];return(U,a)=>(B(),S(k,null,{default:t(()=>[e(v,{cols:"12",md:"9"},{default:t(()=>[e(_,{data:i(b)},null,8,["data"])]),_:1}),e(v,{cols:"12",md:"3"},{default:t(()=>[e(w,{class:"mb-8"},{default:t(()=>[e(x,null,{default:t(()=>[e(c,{block:"","prepend-icon":"tabler-send",class:"mb-2"},{default:t(()=>[l(" Send Invoice ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{default:t(()=>[l(" Preview ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal"},{default:t(()=>[l(" Save ")]),_:1})]),_:1})]),_:1}),e(P,{modelValue:i(u),"onUpdate:modelValue":a[0]||(a[0]=o=>m(u)?u.value=o:null),items:y,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",D,[e(f,{for:"payment-terms"},{default:t(()=>[l(" Payment Terms ")]),_:1}),n("div",null,[e(V,{id:"payment-terms",modelValue:i(r),"onUpdate:modelValue":a[1]||(a[1]=o=>m(r)?r.value=o:null)},null,8,["modelValue"])])]),n("div",N,[e(f,{for:"client-notes"},{default:t(()=>[l(" Client Notes ")]),_:1}),n("div",null,[e(V,{id:"client-notes",modelValue:i(d),"onUpdate:modelValue":a[2]||(a[2]=o=>m(d)?d.value=o:null)},null,8,["modelValue"])])]),n("div",C,[e(f,{for:"payment-stub"},{default:t(()=>[l(" Payment Stub ")]),_:1}),n("div",null,[e(V,{id:"payment-stub",modelValue:i(p),"onUpdate:modelValue":a[3]||(a[3]=o=>m(p)?p.value=o:null)},null,8,["modelValue"])])])]),_:1})]),_:1}))}};export{pe as default};