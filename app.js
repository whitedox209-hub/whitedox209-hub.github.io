/* DARIA WHITE — site v3 */
const I18N = {
 en:{skip:'Skip to work',navWork:'Work',navAbout:'About',navContact:'Contact',
  heroLine:'Video & AI production',heroBase:'Phuket, Thailand — worldwide',watchReel:'Showreel with sound',
  workTitle:'Selected work',clients:'Brands in the portfolio',svTitle:'What we make',abTitle:'About',
  bts:'Behind the scenes on Instagram',ctLabel:'New project?',ctBig:'Let’s talk',ftr:'Video & AI production · Phuket',top:'Back to top ↑',
  all:'All',brand:'Brands',event:'Events',wedding:'Weddings',story:'Stories',film:'film',films:'films',
  play:'Play',write:'Write',reel:'Showreel 2026',excerpt:'60-second excerpt.',loadError:'The portfolio could not load. Please refresh the page.',
  statement:[['We make '],['chip','samsung'],[' brand films, '],['chip','on'],[' social content and '],['chip','adobe'],[' AI-built shots for brands, hotels and couples — with the precision of global campaigns. '],['em','From Phuket, for the world.']]},
 ru:{skip:'К работам',navWork:'Работы',navAbout:'Обо мне',navContact:'Контакты',
  heroLine:'Видео и ИИ-продакшен',heroBase:'Пхукет, Таиланд — по всему миру',watchReel:'Шоурил со звуком',
  workTitle:'Избранные работы',clients:'Бренды в портфолио',svTitle:'Что мы делаем',abTitle:'Обо мне',
  bts:'Закулисье в Instagram',ctLabel:'Новый проект?',ctBig:'Обсудим',ftr:'Видео и ИИ-продакшен · Пхукет',top:'Наверх ↑',
  all:'Все',brand:'Бренды',event:'События',wedding:'Свадьбы',story:'Истории',film:'видео',films:'видео',
  play:'Смотреть',write:'Написать',reel:'Шоурил 2026',excerpt:'Фрагмент 60 секунд.',loadError:'Не удалось загрузить портфолио. Обновите страницу.',
  statement:[['Снимаем '],['chip','samsung'],[' ролики для брендов, '],['chip','on'],[' контент для соцсетей и '],['chip','adobe'],[' кадры с ИИ — для брендов, отелей и пар, с точностью мировых кампаний. '],['em','С Пхукета — для всего мира.']]}
};
const SERVICES=[
 {en:['Brand & product films','Campaigns, launches, product stories.'],ru:['Ролики для брендов','Кампании, запуски, истории продукта.']},
 {en:['Social-first content','Reels, TikTok, Shorts — cut on the beat.'],ru:['Контент для соцсетей','Reels, TikTok, Shorts — монтаж в бит.']},
 {en:['Hotels, villas, restaurants','Films that make people want to be there.'],ru:['Отели, виллы, рестораны','Видео, после которых хочется туда.']},
 {en:['Events & weddings','Real emotion, edited like cinema.'],ru:['События и свадьбы','Настоящие эмоции, смонтированные как кино.']},
 {en:['AI production','New locations, variants and formats built on real footage.'],ru:['ИИ-продакшен','Локации, варианты и форматы на основе реальной съёмки.']},
 {en:['Editing team','Our editors cut, grade and design sound — fast.'],ru:['Команда монтажа','Монтаж, цвет и звук — быстро и в объёме.']}
];
const BRANDS=[['Samsung','samsung'],['Adobe','adobe'],['Lancôme','lancome'],['Guerlain','guerlain'],['Kiehl’s','kiehls'],['Dell','dell'],['On','on'],['Stretch Your Story','stretch']];
const CAT_PARAM={brands:'brand',events:'event',weddings:'wedding',stories:'story'};

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const params=new URLSearchParams(location.search);
let lang=params.get('lang')||(()=>{try{return localStorage.getItem('dw-lang')}catch{return null}})()||'en';
if(!I18N[lang])lang='en';
let data=null,cat=CAT_PARAM[params.get('work')]||'all',proj=null,variant=0,opener=null;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=matchMedia('(hover:hover) and (pointer:fine)').matches;
const tv=v=>typeof v==='object'&&v?(v[lang]||v.en||''):(v||'');
const t=k=>I18N[lang][k]??I18N.en[k]??k;
const safe=v=>{try{const u=new URL(v,location.href);return['http:','https:','mailto:','tel:'].includes(u.protocol)?u.href:'#'}catch{return'#'}};
const el=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e};
const portrait=()=>innerWidth/innerHeight<0.9;

/* ---------- opening curtain ---------- */
(function curtain(){
 const c=$('#curtain');$$('.ic-name span').forEach((s,i)=>s.style.setProperty('--i',i));
 let seen=false;try{seen=sessionStorage.getItem('dw-seen')==='1';sessionStorage.setItem('dw-seen','1')}catch{}
 const dur=seen?250:1100;
 const tc=$('#ic-tc'),t0=performance.now();
 const tick=now=>{const f=Math.floor((now-t0)/1000*30),p=n=>String(n).padStart(2,'0');tc.textContent=`00:00:${p(Math.floor(f/30))}:${p(f%30)}`;if(!c.classList.contains('open'))requestAnimationFrame(tick)};
 requestAnimationFrame(tick);
 setTimeout(()=>{c.classList.add('open');setTimeout(()=>c.classList.add('gone'),1200)},dur);
})();

/* ---------- hero showreel ---------- */
function heroVideo(){
 const v=$('#hero-video'),want=portrait()?'9x16':'16x9';
 if(v.dataset.f===want)return;
 v.dataset.f=want;v.poster=`media/reel-poster-${want}.jpg`;
 v.muted=true;v.defaultMuted=true;v.setAttribute('muted','');
 v.src=`media/reel-loop-${want}.mp4`;tryPlay();
}
function tryPlay(){const v=$('#hero-video');if(!v.src||$('#player').open||scrollY>innerHeight*1.6)return;v.play().catch(()=>{})}
$('#hero-video').addEventListener('canplay',tryPlay);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)tryPlay()});
['pointerdown','touchstart','keydown','scroll'].forEach(ev=>addEventListener(ev,tryPlay,{once:true,passive:true}));

/* ---------- variable-font letters ---------- */
function letterize(node,text){
 node.replaceChildren(...[...text].map(ch=>{const s=el('span','l',ch===' '?' ':ch);return s}));
}
const vfLetters=()=>$$('.vf-word .l');
let mouse={x:-9999,y:-9999};
function vfFrame(now){
 const ls=vfLetters();
 for(const l of ls){
  const r=l.getBoundingClientRect();if(r.bottom<-50||r.top>innerHeight+50)continue;
  let k;
  if(finePointer){const dx=mouse.x-(r.left+r.width/2),dy=mouse.y-(r.top+r.height/2);const d=Math.hypot(dx,dy);k=Math.max(0,1-d/Math.max(260,r.height*2.2))}
  else{k=(Math.sin(now/650+r.left/90)+1)/2*.8}
  const base=l.closest('.contact')?500:900;
  l.style.setProperty('--lw',(100+k*51-(1-k)*0).toFixed(1));
  l.style.setProperty('--lg',Math.round(base+(l.closest('.contact')?k*400:0)));
 }
 requestAnimationFrame(vfFrame);
}

/* ---------- copy ---------- */
function applyLang(){
 document.documentElement.lang=lang;
 $$('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
 $$('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
 document.title=lang==='ru'?'DARIA WHITE — Видео и ИИ-продакшен · Пхукет':'DARIA WHITE — Video & AI production · Phuket';
 letterize($('#ct-big'),t('ctBig'));
 $$('.hero-name .vf-word,.ftr-mark').forEach(w=>{if(!w.querySelector('.l'))letterize(w,w.dataset.word)});
 const sv=$('#sv');sv.replaceChildren(...SERVICES.map(s=>{const it=s[lang]||s.en,li=el('li','rv');li.append(el('h3',null,it[0]),el('p',null,it[1]));return li}));
 renderStatement();
 if(!data)return;
 ['intro','body','detail'].forEach(k=>$('#ab-'+k).textContent=tv(data.about[k]));
 renderFilters();renderGrid();renderContacts();renderBts();
 if($('#player').open)fillPlayer();
 observe();
}
function renderStatement(){
 const box=$('#statement');box.replaceChildren();
 for(const part of t('statement')){
  const [kind,val]=part.length===1?['text',part[0]]:part;
  if(kind==='chip'){
   const p=data?.projects.find(x=>x.id===val);const s=el('span','chip'+(p?.orient==='v'?' v':''));
   if(p){const v=el('video');v.muted=true;v.loop=true;v.playsInline=true;v.autoplay=true;v.preload='none';v.dataset.src=safe(p.preview);v.poster=safe(p.poster);s.append(v);s.dataset.project=p.id;s.dataset.cursor='play';s.onclick=()=>openProject(p.id,s)}
   box.append(s);
  }else if(kind==='em')box.append(el('em',null,val));
  else box.append(document.createTextNode(val));
 }
 lazyVideos();
}

/* ---------- brands ---------- */
function renderBrands(){
 const track=$('#brand-track');
 const group=()=>BRANDS.map(([name,id])=>{const b=el('button','brand',name);b.dataset.cursor='play';b.onclick=()=>openProject(id,b);return b});
 track.append(...group(),...group().map(b=>{b.tabIndex=-1;b.setAttribute('aria-hidden','true');return b}));
}

/* ---------- work ---------- */
function renderFilters(){
 const box=$('#filters');box.replaceChildren();
 ['all','brand','event','wedding','story'].forEach(c=>{
  const n=data.projects.filter(p=>!p.hidden&&(c==='all'||p.category===c)).length;if(!n)return;
  const b=el('button','filter',t(c));b.append(el('sup',null,String(n)));
  b.setAttribute('aria-pressed',String(cat===c));
  b.onclick=()=>{cat=c;renderFilters();renderGrid();const u=new URL(location.href);const key=Object.keys(CAT_PARAM).find(k=>CAT_PARAM[k]===c);key?u.searchParams.set('work',key):u.searchParams.delete('work');history.replaceState({},'',u)};
  box.append(b);
 });
}
function renderGrid(){
 const box=$('#grid');box.replaceChildren();
 const list=data.projects.filter(p=>!p.hidden&&(cat==='all'||p.category===cat));
 // editorial rhythm: rows of [h v v] and [V H] (big), mirrored every other time; leftovers fill evenly
 const H_FIRST=['newyork','kostya','gio','silicon','dream','slovo','alfaro','joy','neuro'];
 const vs=list.filter(p=>(p.orient||'v')==='v'),hs=list.filter(p=>p.orient==='h').sort((a,b)=>(H_FIRST.indexOf(a.id)+99)%99-(H_FIRST.indexOf(b.id)+99)%99),seq=[];
 for(let r=0;vs.length||hs.length;r++){
  const kind=r%2===0?'A':'B',flip=r%4>=2;
  if(kind==='A'&&hs.length>=1&&vs.length>=2){const row=[[hs.shift(),0],[vs.shift(),0],[vs.shift(),0]];seq.push(...(flip?row.reverse():row))}
  else if(kind==='B'&&hs.length>=1&&vs.length>=1){const row=[[vs.shift(),1],[hs.shift(),1]];seq.push(...(flip?row.reverse():row))}
  else if(vs.length>=4||(!hs.length&&vs.length)){for(let k=0;k<4&&vs.length;k++)seq.push([vs.shift(),0])}
  else if(hs.length){for(let k=0;k<2&&hs.length;k++)seq.push([hs.shift(),0])}
  else seq.push([vs.shift(),0]);
 }
 seq.forEach(([p,big])=>{
  const o=p.orient||'v';
  const card=el('article',`card ${o}${big?' big':''}`);
  const cover=el('button','cover');cover.dataset.cursor='play';cover.setAttribute('aria-label',`${t('play')}: ${p.brand}`);
  const img=el('img');img.src=safe(p.poster);img.alt=`${p.brand} — ${tv(p.title)}`;img.loading='lazy';img.decoding='async';
  const vid=el('video');vid.muted=true;vid.loop=true;vid.playsInline=true;vid.preload='none';vid.dataset.src=safe(p.preview);vid.setAttribute('aria-hidden','true');
  vid.addEventListener('playing',()=>cover.classList.add('live'));
  cover.append(img,vid);cover.onclick=()=>openProject(p.id,cover);
  const m=p.meta||{ratios:[],durs:[]},n=p.videos.length;
  const mmss=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
  const fmt=[m.ratios.join(' + '),n>1?`${n} ${t('films')}`:(m.durs[0]?mmss(m.durs[0]):'')].filter(Boolean).join(' · ');
  const cap=el('div','cap');cap.append(el('b',null,p.brand),el('span',null,tv(p.title)),el('i',null,fmt));
  card.append(cover,cap);box.append(card);
 });
 observe();lazyVideos();
 if(typeof touchUI!=='undefined'&&touchUI)setTimeout(updateFocus,50);
}

/* autoplay any [data-src] video only while it is on screen */
let vidObs;
function lazyVideos(){
 vidObs=vidObs||new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(e.isIntersecting){if(!v.src)v.src=v.dataset.src;v.play().catch(()=>{})}else v.pause()}),{rootMargin:'200px 0px'});
 $$('video[data-src]').forEach(v=>{if(!v.dataset.obs){v.dataset.obs=1;vidObs.observe(v)}});
}

/* ---------- player ---------- */
const REEL={id:'__reel',brand:'DARIA WHITE',category:'reel',title:{en:'Showreel 2026',ru:'Шоурил 2026'},
 videos:[{src:'media/reel-16x9.mp4',poster:'media/reel-poster-16x9.jpg',label:{en:'16:9',ru:'16:9'}},{src:'media/reel-9x16.mp4',poster:'media/reel-poster-9x16.jpg',label:{en:'9:16',ru:'9:16'}}]};
function openProject(id,trigger){
 const p=id==='__reel'?REEL:data?.projects.find(x=>x.id===id);if(!p)return;
 opener=trigger||document.activeElement;proj=p;variant=(p===REEL&&portrait())?1:0;
 $('#hero-video').pause();$('#player').showModal();document.body.style.overflow='hidden';play(variant);
 if(p!==REEL){const u=new URL(location.href);u.searchParams.set('project',p.id);history.replaceState({},'',u)}
}
function play(i){variant=i;const v=proj.videos[i],pl=$('#pl-video');pl.poster=safe(v.poster||proj.poster);pl.src=safe(v.src);pl.load();fillPlayer();pl.play().catch(()=>{})}
function fillPlayer(){
 const v=proj.videos[variant];
 $('#pl-title').textContent=proj===REEL?t('reel'):`${proj.brand} — ${tv(proj.title)}`;
 $('#pl-desc').textContent=proj===REEL?t('heroBase'):(tv(v.description)||tv(proj.description))+(v.excerpt?' '+t('excerpt'):'');
 const box=$('#pl-vars');box.replaceChildren();
 if(proj.videos.length>1)proj.videos.forEach((x,i)=>{const b=el('button',null,tv(x.label)||String(i+1));b.setAttribute('aria-pressed',String(i===variant));b.onclick=()=>play(i);box.append(b)});
}
$('.pl-close').onclick=()=>$('#player').close();
$('#player').addEventListener('click',e=>{if(e.target===$('#player'))e.target.close()});
$('#player').addEventListener('close',()=>{const pl=$('#pl-video');pl.pause();pl.removeAttribute('src');pl.load();document.body.style.overflow='';
 const u=new URL(location.href);u.searchParams.delete('project');history.replaceState({},'',u);tryPlay();opener?.focus({preventScroll:true})});
$('#watch-reel').onclick=e=>{e.stopPropagation();openProject('__reel',e.currentTarget)};
$('#hero-frame').onclick=e=>{if(!e.target.closest('button'))openProject('__reel',$('#watch-reel'))};
$$('#quick button').forEach(b=>b.onclick=e=>{e.stopPropagation();cat=b.dataset.go;if(data){renderFilters();renderGrid()}
 $('#work').scrollIntoView({behavior:reduced?'instant':'smooth'})});

/* ---------- contacts ---------- */
function contactList(){
 const c=data.contacts,list=[];
 if(c.whatsapp)list.push(['WhatsApp',c.whatsapp]);
 if(c.email)list.push(['Email','mailto:'+c.email+'?subject='+encodeURIComponent(lang==='ru'?'Проект — DARIA WHITE':'Project inquiry — DARIA WHITE')]);
 if(c.telegram)list.push(['Telegram',c.telegram]);
 if(c.line)list.push(['LINE',c.line]);
 if(c.instagram)list.push(['Instagram',c.instagram]);
 (c.extra||[]).forEach(x=>list.push([x.label,x.url]));
 return list;
}
function renderContacts(){
 const list=contactList(),box=$('#ct-links'),dock=$('#dock');box.replaceChildren();dock.replaceChildren();
 list.forEach(([label,url])=>{const a=el('a',null,label+' ↗');a.href=safe(url);a.target='_blank';a.rel='noopener';box.append(a)});
 list.slice(0,2).forEach(([label,url])=>{const a=el('a',null,label);a.href=safe(url);a.target='_blank';a.rel='noopener';dock.append(a)});
 if(list[0])$('#ct-big').href=safe(list[0][1]);
 $('#ig-link').href=safe(data.contacts.instagram||'#');
}

/* ---------- about / bts ---------- */
function renderBts(){
 $('#portrait').src=safe(data.about.portrait||'media/daria-12.webp');
 const box=$('#bts');
 if(box.childElementCount){$$('#bts figcaption').forEach((c,i)=>c.textContent=tv(data.about.moments[i].label));return}
 (data.about.moments||[]).forEach(m=>{const f=el('figure'),v=el('video');v.muted=true;v.loop=true;v.playsInline=true;v.preload='none';v.poster=safe(m.poster);v.dataset.src=safe(m.src);
  f.append(v,el('figcaption',null,tv(m.label)));box.append(f)});
 lazyVideos();
}

/* ---------- scroll & chrome ---------- */
let rvObs;
function observe(){
 rvObs=rvObs||new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rvObs.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -5% 0px'});
 $$('.rv:not(.in),.card:not(.in)').forEach(e=>rvObs.observe(e));
}
function onScroll(){
 const y=scrollY,h=innerHeight,hero=$('#hero');
 const p=Math.min(1,Math.max(0,y/(hero.offsetHeight-h)));
 const e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
 hero.style.setProperty('--hp',e.toFixed(4));
 hero.style.setProperty('--np',Math.min(1,Math.max(0,(p-.25)/.5)).toFixed(3));
 $('#hdr').classList.toggle('solid',y>hero.offsetHeight-80);
 $('#dock').classList.toggle('show',y>h*1.2&&y<document.body.scrollHeight-h*1.8);
 const v=$('#hero-video');if(y>hero.offsetHeight&&!v.paused)v.pause();else if(y<hero.offsetHeight&&v.paused)tryPlay();
}
addEventListener('scroll',onScroll,{passive:true});

/* touch screens: whichever work card sits nearest the middle of the screen is in focus */
const touchUI=matchMedia('(hover:none),(pointer:coarse)').matches;
let focusRaf=0;
function updateFocus(){
 focusRaf=0;
 const grid=$('#grid');if(!grid)return;
 const cards=$$('#grid .card');if(!cards.length)return;
 const gr=grid.getBoundingClientRect();
 const active=gr.top<innerHeight*.75&&gr.bottom>innerHeight*.25;
 grid.classList.toggle('scrollfocus',active);
 if(!active){cards.forEach(c=>c.classList.remove('focus'));return}
 // focus the whole row nearest the middle of the screen (side-by-side cards share it)
 const mid=innerHeight/2;
 const ds=cards.map(c=>{const r=c.querySelector('.cover').getBoundingClientRect();return Math.abs((r.top+r.bottom)/2-mid)});
 const bd=Math.min(...ds);
 cards.forEach((c,i)=>c.classList.toggle('focus',ds[i]<=bd+40));
}
if(touchUI){addEventListener('scroll',()=>{if(!focusRaf)focusRaf=setTimeout(updateFocus,60)},{passive:true});addEventListener('resize',updateFocus,{passive:true})}
addEventListener('resize',()=>{heroVideo();onScroll()},{passive:true});
$('#burger').onclick=()=>{const o=$('#burger').getAttribute('aria-expanded')==='true';$('#burger').setAttribute('aria-expanded',String(!o));$('#nav').classList.toggle('open',!o)};
$$('#nav a').forEach(a=>a.addEventListener('click',()=>{$('#nav').classList.remove('open');$('#burger').setAttribute('aria-expanded','false')}));
$$('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;try{localStorage.setItem('dw-lang',lang)}catch{}const u=new URL(location.href);u.searchParams.set('lang',lang);history.replaceState({},'',u);applyLang()});
$('#year').textContent=new Date().getFullYear();
$$('.statement,.work-head,.clients .label,.services,.ab-photo,.ab-text,.contact').forEach(e=>e.classList.add('rv'));

/* custom cursor */
addEventListener('pointermove',e=>{mouse.x=e.clientX;mouse.y=e.clientY},{passive:true});
if(false){
 const c=$('#cursor'),lab=$('#cursor-label');let cx=-100,cy=-100,tx=-100,ty=-100;
 addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;mouse.x=e.clientX;mouse.y=e.clientY;
  const z=e.target.closest('[data-cursor]');
  c.classList.toggle('big',!!z);c.classList.toggle('ember',z?.dataset.cursor==='write');
 },{passive:true});
 const loop=()=>{cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;c.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(loop)};loop();
}

heroVideo();renderBrands();applyLang();onScroll();requestAnimationFrame(vfFrame);
fetch('content.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw 0;return r.json()}).then(d=>{
 data=d;applyLang();
 const pid=params.get('project');if(pid)openProject(pid);
 if(['#work','#about','#contact'].includes(location.hash))requestAnimationFrame(()=>$(location.hash)?.scrollIntoView({behavior:'instant'}));
}).catch(()=>{const e=$('#load-error');e.textContent=t('loadError');e.hidden=false});
