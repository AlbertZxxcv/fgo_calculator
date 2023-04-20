import{_}from"./InvoiceEditable.7a46284e.js";import{a as v,V as k}from"./VRow.d01b775f.js";import{V as w,c as x}from"./VCard.d1da0a6b.js";import{V as c}from"./VBtn.fafb0c67.js";import{V as P}from"./VSelect.26b6e2b1.js";import{V as f}from"./VInput.65319ee6.js";import{V}from"./VSwitch.7109678f.js";import{k as s,o as B,b as S,w as t,p as e,q as i,E as l,D as m,m as n}from"./index.8428b7f6.js";import"./AppDateTimePicker.38b69f11.js";import"./VField.0e00e8d9.js";import"./index.6fb3c924.js";import"./position.99ffc29f.js";import"./router.2d262d60.js";import"./easing.36b781ab.js";import"./VTextarea.fe73ffd8.js";/* empty css                   */import"./VImg.c303eb50.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.561d4a90.js";import"./VTextField.a931b3f9.js";import"./VTooltip.4ea8db6b.js";import"./scopeId.588fc520.js";import"./VOverlay.1110940f.js";import"./lazy.501bc841.js";import"./useInvoiceStore.817b35b8.js";import"./VDivider.a682f68c.js";import"./VAvatar.470f35e7.js";import"./group.103e290c.js";import"./VList.53d51593.js";import"./dialog-transition.617b4b18.js";import"./VMenu.f345a025.js";import"./VCheckboxBtn.ca6f3b18.js";import"./VSelectionControl.37858ad0.js";import"./VChip.3beaae0f.js";const D={class:"d-flex align-center justify-space-between"},N={class:"d-flex align-center justify-space-between"},C={class:"d-flex align-center justify-space-between"},pe={__name:"index",setup(T){const b=s({invoice:{id:5037,issuedDate:"",service:"",total:0,avatar:"",invoiceStatus:"",balance:"",dueDate:"",client:{address:"",company:"",companyEmail:"",contact:"",country:"",name:""}},paymentDetails:{totalDue:"$12,110.55",bankName:"American Bank",country:"United States",iban:"ETD95476213874685",swiftCode:"BR91905"},purchasedProducts:[{title:"",cost:0,hours:0,description:""}],note:"",paymentMethod:"",salesperson:"",thanksNote:""}),r=s(!0),d=s(!1),p=s(!1),u=s("Bank Account"),y=["Bank Account","PayPal","UPI Transfer"];return(U,a)=>(B(),S(k,null,{default:t(()=>[e(v,{cols:"12",md:"9"},{default:t(()=>[e(_,{data:i(b)},null,8,["data"])]),_:1}),e(v,{cols:"12",md:"3"},{default:t(()=>[e(w,{class:"mb-8"},{default:t(()=>[e(x,null,{default:t(()=>[e(c,{block:"","prepend-icon":"tabler-send",class:"mb-2"},{default:t(()=>[l(" Send Invoice ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{default:t(()=>[l(" Preview ")]),_:1}),e(c,{block:"",color:"default",variant:"tonal"},{default:t(()=>[l(" Save ")]),_:1})]),_:1})]),_:1}),e(P,{modelValue:i(u),"onUpdate:modelValue":a[0]||(a[0]=o=>m(u)?u.value=o:null),items:y,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),n("div",D,[e(f,{for:"payment-terms"},{default:t(()=>[l(" Payment Terms ")]),_:1}),n("div",null,[e(V,{id:"payment-terms",modelValue:i(r),"onUpdate:modelValue":a[1]||(a[1]=o=>m(r)?r.value=o:null)},null,8,["modelValue"])])]),n("div",N,[e(f,{for:"client-notes"},{default:t(()=>[l(" Client Notes ")]),_:1}),n("div",null,[e(V,{id:"client-notes",modelValue:i(d),"onUpdate:modelValue":a[2]||(a[2]=o=>m(d)?d.value=o:null)},null,8,["modelValue"])])]),n("div",C,[e(f,{for:"payment-stub"},{default:t(()=>[l(" Payment Stub ")]),_:1}),n("div",null,[e(V,{id:"payment-stub",modelValue:i(p),"onUpdate:modelValue":a[3]||(a[3]=o=>m(p)?p.value=o:null)},null,8,["modelValue"])])])]),_:1})]),_:1}))}};export{pe as default};
