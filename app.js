const T={
ru:{nh:'Главная',na:'Обо мне',nw:'Портфолио',st:'свободен для новых проектов',
hh:'Привет. Я — frontend-разработчик, который делает быстро и по делу.',
hp:'Собираю лендинги и веб-интерфейсы в связке с современными AI-инструментами разработки — чистый код и продуманный результат в короткие сроки. Учусь каждый день и люблю доводить проект до состояния «можно показывать».',
cw:'Смотреть портфолио',ca:'Обо мне',
ah:'Обо мне',ap1:'Frontend-разработчик. Собираю лендинги и веб-интерфейсы в связке с современными AI-инструментами разработки — чистый код и продуманный результат в короткие сроки.',
ap2:'Начал заниматься веб-разработкой недавно, но подхожу к делу серьёзно: слежу за деталями, довожу интерфейсы до рабочего состояния, а не до уровня статичного макета, и честно оцениваю сроки — даже когда осваиваю что-то новое впервые. Открыт к удалённым проектам.',
sh:'Навыки',s1:'Фронтенд',s1d:'Адаптивная вёрстка, интерактивные интерфейсы, вёрстка по макету. HTML5, CSS3, Tailwind, JavaScript.',
s2:'Форматы',s2d:'Лендинги, SPA, многоэкранные интерфейсы с состояниями.',s3:'Подход',s3d:'Разработка с AI-инструментами, WordPress.',
wh:'Пять частей одного продукта',ws:'Save30 помогает осознанно управлять деньгами: от первого знакомства со спринтом до аналитики, покупок по бюджету и персонального плана.',
vh:'Чем могу помочь',v1:'Сайт под задачу',v1d:'Продуманная структура, адаптивный интерфейс и понятный путь к заявке.',v2:'Развитие продукта',v2d:'Новые страницы, функции и аккуратная доработка существующего интерфейса.',
v3:'Интерактивные сервисы',v3d:'Рабочие сценарии с состояниями, формами и обратной связью для пользователя.',
ch:'Контакты',rt:'Отзывы заказчиков',rb:'Открыть в Telegram',rc:'Скопировать ссылку',rk:'Скопировано',ft:'© 2026 codvib'},
en:{nh:'Home',na:'About',nw:'Portfolio',st:'available for new projects',
hh:"Hey there. I'm a frontend developer who ships fast and keeps it clean.",
hp:"I build landing pages and web interfaces with modern AI-assisted tools — clean code and a polished result in a short time. I learn every day and love taking a project all the way to 'ready to show'.",
cw:'View portfolio',ca:'About me',
ah:'About me',ap1:'Frontend developer. I build landing pages and web interfaces with modern AI-assisted tools — clean code and a polished result in a short time.',
ap2:"I started in web development recently, but I take it seriously: I pay attention to detail, finish interfaces to a working state rather than a static mockup, and give honest timelines — even when I'm learning something new. Open to remote projects.",
sh:'Skills',s1:'Frontend',s1d:'Responsive layouts, interactive interfaces, implementation from a mockup. HTML5, CSS3, Tailwind, JavaScript.',
s2:'Formats',s2d:'Landing pages, SPAs, multi-screen interfaces with state.',s3:'Approach',s3d:'AI-assisted development, WordPress.',
wh:'One product, five connected experiences',ws:'Save30 helps people make thoughtful money decisions, from the first sprint to budgeting, analytics, mindful shopping, and a personal plan.',
vh:'How I can help',v1:'Websites for a clear goal',v1d:'Thoughtful structure, responsive interface, and a clear path to action.',v2:'Product improvements',v2d:'New pages, features, and careful updates to an existing interface.',
v3:'Interactive experiences',v3d:'Real user flows with states, forms, and useful feedback.',
ch:'Contacts',rt:'Client reviews',rb:'Open in Telegram',rc:'Copy link',rk:'Copied',ft:'© 2026 codvib'},
ua:{nh:'Головна',na:'Про мене',nw:'Портфоліо',st:'вільний для нових проєктів',
hh:'Привіт. Я — frontend-розробник, який робить швидко і по суті.',
hp:'Створюю лендінги та веб-інтерфейси у зв’язці з сучасними AI-інструментами — чистий код і продуманий результат у короткі терміни. Вчуся щодня і люблю доводити проєкт до стану «можна показувати».',
cw:'Дивитись портфоліо',ca:'Про мене',
ah:'Про мене',ap1:'Frontend-розробник із Москви. Створюю лендінги та веб-інтерфейси у зв’язці з сучасними AI-інструментами — чистий код і продуманий результат у короткі терміни.',
ap2:'Почав займатися веброзробкою нещодавно, але підходжу до справи серйозно: стежу за деталями, доводжу інтерфейси до робочого стану, а не до рівня статичного макета, і чесно оцінюю терміни. Відкритий до віддалених проєктів.',
sh:'Навички',s1:'Фронтенд',s1d:'Адаптивна верстка, інтерактивні інтерфейси, верстка за макетом. HTML5, CSS3, Tailwind, JavaScript.',
s2:'Формати',s2d:'Лендінги, SPA, багатоекранні інтерфейси зі станами.',s3:'Підхід',s3d:'Розробка з AI-інструментами, WordPress.',
wh:'Один продукт — п’ять пов’язаних сценаріїв',ws:'Save30 допомагає усвідомлено керувати грошима: від першого знайомства зі спринтом до аналітики, покупок у межах бюджету та персонального плану.',
vh:'Чим можу допомогти',v1:'Сайт під задачу',v1d:'Продумана структура, адаптивний інтерфейс і зрозумілий шлях до заявки.',v2:'Розвиток продукту',v2d:'Нові сторінки, функції та дбайливе доопрацювання наявного інтерфейсу.',
v3:'Інтерактивні сервіси',v3d:'Робочі сценарії зі станами, формами та зворотним зв’язком для користувача.',
ch:'Контакти',rt:'Відгуки замовників',rb:'Відкрити в Telegram',rc:'Скопіювати посилання',rk:'Скопійовано',ft:'© 2026 codvib'}};
const q=new URLSearchParams(location.search).get('lang');
let L=T[q]?q:(localStorage.lang&&T[localStorage.lang]?localStorage.lang:'ru');
const pg=document.body.dataset.p,CH='<>/{}[]=+*#$%&01';
const nav=`<nav class="w"><a class="logo" href="index.html">&lt;/&gt; codvib</a>
<a href="index.html" data-t="nh" class="${pg=='home'?'on':''}"></a><a href="about.html" data-t="na" class="${pg=='about'?'on':''}"></a><a href="portfolio.html" data-t="nw" class="${pg=='work'?'on':''}"></a>
<span><button data-l="ru">ru</button> <button data-l="en">en</button></span></nav>`;
const foot=`<footer class="w"><h2 data-t="ch" data-s></h2><div class="cl"><a href="https://t.me/codvib">Telegram @codvib</a><a href="https://discordapp.com/users/1534330288463675514">Discord codvib</a><a href="mailto:codvib@proton.me">codvib@proton.me</a></div>
<div class="rev"><div><div data-t="rt"></div><code>t.me/repcodvib</code></div><div><a class="btn" href="https://t.me/repcodvib" data-t="rb"></a><button class="btn" id="cp" data-t="rc"></button></div></div>
<p style="margin-top:24px" data-t="ft"></p></footer>`;
document.body.insertAdjacentHTML('afterbegin',nav);document.body.insertAdjacentHTML('beforeend',foot);
function scr(el){const t=el.textContent;el.setAttribute('aria-label',t);el.textContent='';
const sp=[...t].map(c=>{const s=document.createElement('span');s.setAttribute('aria-hidden','true');el.appendChild(s);return{s,c,r:Math.random()*10+4}});
let k=0;const id=setInterval(()=>{k++;let d=1;sp.forEach((o,j)=>{const at=j*.5+o.r;if(o.c==' '||k>=at){o.s.textContent=o.c;o.s.className=''}else{d=0;o.s.textContent=CH[Math.random()*CH.length|0];o.s.className='sym'}});if(d)clearInterval(id)},35)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-s]').forEach(scr);io.unobserve(e.target)}}),{threshold:.15});
function render(a){document.querySelectorAll('[data-t]').forEach(e=>e.textContent=T[L][e.dataset.t]);
document.querySelectorAll('[data-l]').forEach(b=>b.classList.toggle('on',b.dataset.l==L));document.documentElement.lang=L;
if(a)document.querySelectorAll('[data-s]').forEach(e=>{if(!e.closest('.up'))scr(e)})}
document.querySelectorAll('.up').forEach(e=>io.observe(e));
document.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>{L=b.dataset.l;try{localStorage.lang=L}catch(e){}render(0)});
document.getElementById('cp').onclick=async e=>{const b=e.target;try{await navigator.clipboard.writeText('https://t.me/repcodvib')}catch(x){}
b.textContent=T[L].rk;setTimeout(()=>b.textContent=T[L].rc,1500)};
render(1);
