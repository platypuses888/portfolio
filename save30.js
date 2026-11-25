const P=[['save30-landing.html','Главная'],['save30-webapp.html','Трекер'],['save30-insights.html','Аналитика'],['save30-store.html','Магазин'],['save30-ai-saas.html','Pro']];
const cur=location.pathname.split('/').pop()||'save30-landing.html';
let S={saved:0,done:{},p:0,budget:30000,name:''};
try{Object.assign(S,JSON.parse(localStorage.s30||'{}'))}catch(e){}
const save=()=>{try{localStorage.s30=JSON.stringify(S)}catch(e){}chip()};
const fmt=n=>Math.round(n).toLocaleString('ru-RU')+' ₽';
const $=s=>document.querySelector(s);
function chip(){const c=$('#chip');if(c)c.textContent='отложено '+fmt(S.saved)}
document.body.insertAdjacentHTML('afterbegin',`<header class="top"><div class="w"><a class="brand" href="save30-landing.html">Save<b>30</b></a>${P.map(([h,t])=>`<a class="n ${h==cur?'on':''}" href="${h}">${t}</a>`).join('')}<a class="n" href="portfolio.html">← codvib</a><span class="chip" id="chip"></span></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="w">Демо-проект из <a href="portfolio.html">портфолио codvib</a>. Данные остаются только в вашем браузере.</div></footer>`);
chip();
