import{bc as i,a1 as t}from"./index.a69f84de.js";const o=i("InvoiceStore",{actions:{fetchInvoices(e){return t.get("apps/invoices",{params:e})},fetchInvoice(e){return t.get(`/apps/invoices/${e}`)},fetchClients(){return t.get("/apps/invoice/clients")}}});export{o as u};
