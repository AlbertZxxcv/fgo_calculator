import{a as I,u as $,c as D,b as k,g as B,f as P,h as R,l as N}from"./router.f31f7d8c.js";import{a6 as v,a9 as T,aa as j,ab as w,ac as V,ad as s,A as S,ae as m,p as t,ax as c,az as b,at as z,au as q,aB as _,C as x,k as h,Z as E}from"./index.a5ec1759.js";const U=v({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...I(),...T(),...j()},setup(e,d){let{slots:l}=d;const{themeClasses:u}=w(e),{densityClasses:a}=$(e);V({VTimelineDivider:{lineColor:s(e,"lineColor")},VTimelineItem:{density:s(e,"density"),lineInset:s(e,"lineInset")}});const o=S(()=>{const i=e.side?e.side:e.density!=="default"?"end":null;return i&&`v-timeline--side-${i}`}),n=S(()=>{const i=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return i;case"start":return i[0];case"end":return i[1];default:return null}});return m(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,n.value,{"v-timeline--inset-line":!!e.lineInset},u.value,a.value,o.value],style:{"--v-timeline-line-thickness":c(e.lineThickness)}},l)),{}}}),L=v({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:b,iconColor:String,lineColor:String,...D(),...z(),...k()},setup(e,d){let{slots:l}=d;const{sizeClasses:u,sizeStyles:a}=q(e,"v-timeline-divider__dot"),{backgroundColorStyles:o,backgroundColorClasses:n}=_(s(e,"dotColor")),{roundedClasses:i}=B(e,"v-timeline-divider__dot"),{elevationClasses:r}=P(e),{backgroundColorClasses:f,backgroundColorStyles:y}=_(s(e,"lineColor"));return V({VIcon:{color:s(e,"iconColor"),icon:s(e,"icon"),size:s(e,"size")}}),m(()=>{var g;var C;return t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[t("div",{class:["v-timeline-divider__before",f.value],style:y.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",r.value,i.value,u.value],style:a.value},[t("div",{class:["v-timeline-divider__inner-dot",n.value,i.value],style:o.value},[(g=(C=l.default)==null?void 0:C.call(l))!=null?g:e.icon?t(x,null,null):void 0])]),t("div",{class:["v-timeline-divider__after",f.value],style:y.value},null)])}),{}}}),Z=v({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:b,iconColor:String,lineInset:[Number,String],...D(),...k(),...z(),...T(),...R()},setup(e,d){let{slots:l}=d;const{dimensionStyles:u}=N(e),a=h(0),o=h();return E(o,n=>{var r;var i;!n||(a.value=(r=(i=n.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:i.getBoundingClientRect().width)!=null?r:0)},{flush:"post"}),m(()=>{var n,i;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":c(a.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${c(e.lineInset)})`:c(0)}},[t("div",{class:"v-timeline-item__body",style:u.value},[(n=l.default)==null?void 0:n.call(l)]),t(L,{ref:o,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((i=l.opposite)==null?void 0:i.call(l))])])}),{}}});export{U as V,Z as a};
