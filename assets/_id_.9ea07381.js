import{k as n,o as D,b as P,w as a,q as l,p as e,y as A,E as i,m as s,D as r,bd as C}from"./index.8428b7f6.js";import{_ as N,a as T}from"./InvoiceSendInvoiceDrawer.96def7e6.js";import{_ as U}from"./InvoiceEditable.7a46284e.js";import{u as B}from"./useInvoiceStore.817b35b8.js";import{a as S,V as h}from"./VRow.d01b775f.js";import{V as I,c as O}from"./VCard.d1da0a6b.js";import{V as u}from"./VBtn.fafb0c67.js";import{V as $}from"./VSelect.26b6e2b1.js";import{V as b}from"./VInput.65319ee6.js";import{V as _}from"./VSwitch.7109678f.js";import"./AppDateTimePicker.38b69f11.js";import"./VField.0e00e8d9.js";import"./index.6fb3c924.js";import"./position.99ffc29f.js";import"./router.2d262d60.js";import"./easing.36b781ab.js";import"./VSpacer.ea77bf62.js";import"./VAvatar.470f35e7.js";import"./VImg.c303eb50.js";import"./VForm.40d9c481.js";import"./forwardRefs.c003b6b8.js";import"./VTextField.a931b3f9.js";/* empty css                   */import"./VCounter.561d4a90.js";import"./VTextarea.fe73ffd8.js";import"./VNavigationDrawer.5e9935ee.js";import"./ssrBoot.72dbf22f.js";import"./VChip.3beaae0f.js";import"./group.103e290c.js";import"./VTooltip.4ea8db6b.js";import"./scopeId.588fc520.js";import"./VOverlay.1110940f.js";import"./lazy.501bc841.js";import"./VDivider.a682f68c.js";import"./VList.53d51593.js";import"./dialog-transition.617b4b18.js";import"./VMenu.f345a025.js";import"./VCheckboxBtn.ca6f3b18.js";import"./VSelectionControl.37858ad0.js";const j={class:"d-flex gap-2"},M={class:"w-50"},R={class:"w-50"},L={class:"d-flex align-center justify-space-between"},q={class:"d-flex align-center justify-space-between"},E={class:"d-flex align-center justify-space-between"},Ne={__name:"[id]",setup(W){const g=B(),w=C(),c=n();g.fetchInvoice(Number(w.params.id)).then(m=>{c.value={invoice:m.data.invoice,paymentDetails:m.data.paymentDetails,purchasedProducts:[{title:"App Design",cost:24,hours:2,description:"Designed UI kit & app pages."}],note:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!",paymentMethod:"Bank Account",salesperson:"Tom Cook",thanksNote:"Thanks for your business"}}).catch(m=>{console.log(m)});const d=n(!1),p=n(!1),f=n(!0),v=n(!1),V=n(!1),y=n("Bank Account"),x=["Bank Account","PayPal","UPI Transfer"];return(m,t)=>(D(),P(h,null,{default:a(()=>{var k;return[(k=l(c))!=null&&k.invoice?(D(),P(S,{key:0,cols:"12",md:"9"},{default:a(()=>[e(U,{data:l(c)},null,8,["data"])]),_:1})):A("",!0),e(S,{cols:"12",md:"3"},{default:a(()=>[e(I,{class:"mb-8"},{default:a(()=>[e(O,null,{default:a(()=>[e(u,{block:"","prepend-icon":"tabler-send",class:"mb-2",onClick:t[0]||(t[0]=o=>d.value=!0)},{default:a(()=>[i(" Send Invoice ")]),_:1}),s("div",j,[s("div",M,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2",to:{name:"apps-invoice-preview-id",params:{id:l(w).params.id}}},{default:a(()=>[i(" Preview ")]),_:1},8,["to"])]),s("div",R,[e(u,{block:"",color:"secondary",variant:"tonal",class:"mb-2"},{default:a(()=>[i(" Save ")]),_:1})])]),e(u,{block:"","prepend-icon":"tabler-currency-dollar",onClick:t[1]||(t[1]=o=>p.value=!0)},{default:a(()=>[i(" Add Payment ")]),_:1})]),_:1})]),_:1}),e($,{modelValue:l(y),"onUpdate:modelValue":t[2]||(t[2]=o=>r(y)?y.value=o:null),items:x,label:"Accept Payment Via",class:"mb-6"},null,8,["modelValue"]),s("div",L,[e(b,{for:"payment-terms"},{default:a(()=>[i(" Payment Terms ")]),_:1}),s("div",null,[e(_,{id:"payment-terms",modelValue:l(f),"onUpdate:modelValue":t[3]||(t[3]=o=>r(f)?f.value=o:null)},null,8,["modelValue"])])]),s("div",q,[e(b,{for:"client-notes"},{default:a(()=>[i(" Client Notes ")]),_:1}),s("div",null,[e(_,{id:"client-notes",modelValue:l(v),"onUpdate:modelValue":t[4]||(t[4]=o=>r(v)?v.value=o:null)},null,8,["modelValue"])])]),s("div",E,[e(b,{for:"payment-stub"},{default:a(()=>[i(" Payment Stub ")]),_:1}),s("div",null,[e(_,{id:"payment-stub",modelValue:l(V),"onUpdate:modelValue":t[5]||(t[5]=o=>r(V)?V.value=o:null)},null,8,["modelValue"])])])]),_:1}),e(N,{isDrawerOpen:l(d),"onUpdate:isDrawerOpen":t[6]||(t[6]=o=>r(d)?d.value=o:null)},null,8,["isDrawerOpen"]),e(T,{isDrawerOpen:l(p),"onUpdate:isDrawerOpen":t[7]||(t[7]=o=>r(p)?p.value=o:null)},null,8,["isDrawerOpen"])]}),_:1}))}};export{Ne as default};
