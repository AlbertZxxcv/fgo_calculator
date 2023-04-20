import{a as h,V as O}from"./VRow.6c8efdae.js";import{c as b,V as q}from"./VCard.b0efa700.js";import{V as P}from"./VImg.c4856eeb.js";import{o as d,b as S,w as f,q as n,c as k,m as o,x as l,p as u,F as g,a as B,y as T,E as y}from"./index.a69f84de.js";import"./VAvatar.2d19ad99.js";import"./router.2e433ff5.js";import"./position.da927156.js";const j={key:0},E={class:"Name"},F={class:"info"},M=o("h3",null,"Buff",-1),I=o("h6",null,"Battle 3",-1),K=o("h1",{class:"text-h6"},null,-1),L=o("h3",null,"Damage",-1),W={__name:"NpDamageCard",props:{servant:{type:Object,required:!1},supporter:{type:Object,required:!1}},setup(m){const r=m;class V{constructor(t,s,a,e,x,w,D,N){this.a=t,this.b=s,this.c_np=a,this.c_skill=e,this.d=x,this.cd=w,this.duration=D,this.current=N}skillPrint(){console.log("A:",this.a," B:",this.b," C:",this.c_np+this.c_skill," D:",this.d)}}class A{constructor(t,s){this.skills=t,this.class_advantage=s,this.buffOfBattle=[],this.finalBuffArray=[]}servantPrint(){for(const t of this.skills)t.skillPrint();console.log(this.class_advantage)}battle(){let t={a:0,b:0,c_np:0,c_skill:0,d:0,class_advantage:0};for(let s=1;s<=3;s++){let a={a:t.a,b:t.b,c_np:t.c_np,c_skill:t.c_skill,d:t.d,class_advantage:this.class_advantage};for(const e of this.skills)s==2?e.current-=5:s==3&&(e.current-=1),e.current<=0&&(a.a+=+e.a,a.b+=e.b,a.c_np+=e.c_np,a.c_skill+=e.c_skill,a.d+=e.d,e.current=e.cd);a.a+=r.supporter.buffs[s-1].a,a.b+=r.supporter.buffs[s-1].b,a.c_np+=r.supporter.buffs[s-1].c_np,a.c_skill+=r.supporter.buffs[s-1].c_skill,a.d+=r.supporter.buffs[s-1].d,this.buffOfBattle.push(a),t={a:a.a,b:a.b,c_np:a.c_np,c_skill:a.c_skill,d:a.d,class_advantage:this.class_advantage};for(const e of this.skills)e.duration==1&&(t.a-=e.a,t.b-=e.b,t.c_np-=e.c_np,t.c_skill-=e.c_skill,t.d-=e.d)}return this.buffOfBattle}finalBuff(){for(let t=0;t<3;++t){const s=this.buffOfBattle[t];let a=0;t==2?a=(100+s.a)*(100+s.b)*(100+s.c_np*2+s.c_skill)*(100+s.d)*this.class_advantage:a=(100+s.a)*(100+s.b)*(100+s.c_np+s.c_skill)*(100+s.d)*this.class_advantage,this.finalBuffArray.push(a/1e8)}return this.finalBuffArray}damge(){const t=[];for(let s=0;s<3;s++){const a=.23*r.servant.atk*r.servant.multiplier*this.finalBuffArray[s];t.push(a/100)}return t}}const v=[];for(const c of r.servant.skills){const t=new V(c.a,c.b,c.c_np,c.c_skill,c.d,c.cd,c.duration,c.current);v.push(t)}const _=new A(v,r.servant.class_advantage),i=_.battle(),p=_.finalBuff(),C=_.damge().map(c=>Math.round(c));return(c,t)=>(d(),S(q,null,{default:f(()=>[n(_)&&m.supporter?(d(),k("div",j,[o("h1",E,l(r.servant.name),1),o("p",F,"ATK: "+l(r.servant.atk)+" Multiplier: "+l(r.servant.multiplier)+"%",1),u(O,{"no-gutters":""},{default:f(()=>[u(h,{cols:"5"},{default:f(()=>[u(b,null,{default:f(()=>[M,(d(),k(g,null,B(2,s=>o("tr",null,[o("h6",null,"Battle "+l(s),1),y(" "+l(n(i)[s-1].a)+"A * "+l(n(i)[s-1].b)+"B * "+l(n(i)[s-1].c_np+n(i)[s-1].c_skill)+"C * "+l(n(i)[s-1].d)+"D * "+l(n(i)[s-1].class_advantage)+" = "+l(n(p)[s-1]),1)])),64)),I,o("tr",null,l(n(i)[2].a)+"A * "+l(n(i)[2].b)+"B * ("+l(n(i)[2].c_np)+" * 2 + "+l(n(i)[2].c_skill)+")C * "+l(n(i)[2].d)+"D * "+l(n(i)[2].class_advantage)+" = "+l(n(p)[2]),1)]),_:1})]),_:1}),u(h,{cols:"5"},{default:f(()=>[u(b,null,{default:f(()=>[K,L,(d(),k(g,null,B(3,s=>o("tr",null,[o("h6",null,"Battle "+l(s),1),y(" 0.23 * "+l(r.servant.atk)+" * "+l(r.servant.multiplier)+"% * "+l(n(p)[s-1])+" = "+l(n(C)[s-1]),1)])),64))]),_:1})]),_:1}),u(h,{cols:"2"},{default:f(()=>[u(b,{class:"pb-0 px-0 position-relative h-100"},{default:f(()=>[u(P,{src:r.servant.image,height:"140",class:"w-100",style:{bottom:"0"}},null,8,["src"])]),_:1})]),_:1})]),_:1})])):T("",!0)]),_:1}))}};export{W as default};
