const $=s=>document.querySelector(s);
const P=[['save30-landing.html','Главная'],['save30-webapp.html','Трекер'],['save30-insights.html','Аналитика'],['save30-store.html','Магазин'],['save30-ai-saas.html','Pro']];
const cur=location.pathname.split('/').pop()||P[0][0];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
let S={saved:0,done:{},p:0,budget:30000,name:''};
try{Object.assign(S,JSON.parse(localStorage.s30||'{}'))}catch(e){}
const fmt=n=>Math.round(n).toLocaleString('ru-RU')+' ₽';
const esc=s=>String(s).replace(/[&<>"]/g,c=>'&#'+c.charCodeAt(0)+';');
function tw(el,to,f=fmt){if(!el)return;const a=el._v||0;el._v=to;if(RM||a==to){el.textContent=f(to);return}const t0=performance.now();(function s(t){const k=Math.min(1,(t-t0)/550),e=1-Math.pow(1-k,3);el.textContent=f(a+(to-a)*e);if(k<1)requestAnimationFrame(s)})(t0)}
const save=()=>{try{localStorage.s30=JSON.stringify(S)}catch(e){}tw($('#chip'),S.saved,v=>'отложено '+fmt(v))};
function sp(el){if(el.dataset.s)return;el.dataset.s=1;if(RM)return;const t=el.textContent;el.setAttribute('aria-label',t);el.textContent='';
t.split(' ').forEach((w,i,r)=>{const s=document.createElement('span');s.className='w';s.style.setProperty('--i',i);s.setAttribute('aria-hidden','true');s.textContent=w;el.append(s);if(i<r.length-1)el.append(' ')})}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');io.unobserve(t);if(t.classList.contains('rv'))setTimeout(()=>t.style.transitionDelay='0s',900)}),{threshold:.12});
function fx(r=document){r.querySelectorAll('.tx,.rv').forEach(e=>{if(e.dataset.o)return;e.dataset.o=1;
if(e.classList.contains('tx'))sp(e);else e.style.setProperty('--s',Math.min([...e.parentNode.children].filter(x=>x.classList.contains('rv')).indexOf(e),6));io.observe(e)})}
document.body.insertAdjacentHTML('afterbegin',`<div class="w logo"><a href="save30-landing.html">save<i>30</i></a><span class="row"><a class="bk" href="portfolio.html">← codvib</a><span class="chip" id="chip"></span></span></div>`);
document.body.insertAdjacentHTML('beforeend',`<p class="w foot">Демо из портфолио codvib. Данные хранятся только в вашем браузере.</p><nav class="dock">${P.map(([h,t])=>`<a href="${h}" class="${h==cur?'on':''}">${t}</a>`).join('')}</nav>`);
tw($('#chip'),S.saved,v=>'отложено '+fmt(v));
addEventListener('DOMContentLoaded',()=>fx());if(document.readyState!='loading')fx();
