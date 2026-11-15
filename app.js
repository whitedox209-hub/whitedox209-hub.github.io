/* DARIA WHITE — site v3 */
const I18N = {
 en:{skip:'Skip to work',navWork:'Work',navAbout:'About',navContact:'Contact',
  heroLine:'Video & AI production',heroBase:'Phuket, Thailand — worldwide',watchReel:'Showreel with sound',
  workTitle:'Selected work',clients:'Brands in the portfolio',svTitle:'What we make',abTitle:'About',
  bts:'Behind the scenes on Instagram',ctLabel:'New project?',ctBig:'Let’s talk',ftr:'Video & AI production · Phuket',top:'Back to top ↑',
  all:'All',brand:'Brands',event:'Events',wedding:'Weddings',story:'Stories',film:'film',films:'films',
  like:'Like',send:'Send',share:'Share',sendTitle:'Send to Daria',copied:'Link copied',
  quick:['Wow! Let’s make something like this.','I want this style for my brand.','Love this one — tell me more about it.'],
  sheetPh:'Your message…',withLikes:'Add my other ♥ ({n})',alsoLiked:'I also liked:',mailSubj:'Portfolio',
  tgNote:'Opening Telegram. If the text doesn’t appear, it’s copied — just paste it.',igNote:'Text copied — paste it into the Instagram chat that opens.',
  play:'Play',write:'Write',reel:'Showreel 2026',excerpt:'60-second excerpt.',loadError:'The portfolio could not load. Please refresh the page.',
  statement:[['We make '],['chip','samsung'],[' brand films, '],['chip','on'],[' social content and '],['chip','adobe'],[' AI-built shots for brands, hotels and couples — with the precision of global campaigns. '],['em','From Phuket, for the world.']]},
 ru:{skip:'К работам',navWork:'Работы',navAbout:'Обо мне',navContact:'Контакты',
  heroLine:'Видео и ИИ-продакшен',heroBase:'Пхукет, Таиланд — по всему миру',watchReel:'Шоурил со звуком',
  workTitle:'Избранные работы',clients:'Бренды в портфолио',svTitle:'Что мы делаем',abTitle:'Обо мне',
  bts:'Закулисье в Instagram',ctLabel:'Новый проект?',ctBig:'Обсудим',ftr:'Видео и ИИ-продакшен · Пхукет',top:'Наверх ↑',
  all:'Все',brand:'Бренды',event:'События',wedding:'Свадьбы',story:'Истории',film:'видео',films:'видео',
  like:'Нравится',send:'Даше',share:'Поделиться',sendTitle:'Отправить Даше',copied:'Ссылка скопирована',
  quick:['Вау! Давай сделаем что-то похожее.','Хочу такой стиль для своего бренда.','Очень нравится — расскажи подробнее про это видео.'],
  sheetPh:'Ваше сообщение…',withLikes:'Добавить другие ♥ ({n})',alsoLiked:'Ещё мне понравилось:',mailSubj:'Портфолио',
  tgNote:'Открываю Telegram. Если текст не подставился — он скопирован, просто вставьте.',igNote:'Текст скопирован — вставьте его в открывшийся чат Instagram.',
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
function tryPlay(){const v=$('#hero-video');if(!v.src||document.documentElement.classList.contains('reels-on')||scrollY>innerHeight*1.6)return;v.play().catch(()=>{})}
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
 observe();
}
function renderStatement(){
 const box=$('#statement');box.replaceChildren();
 for(const part of t('statement')){
  const [kind,val]=part.length===1?['text',part[0]]:part;
  if(kind==='chip'){
   const p=data?.projects.find(x=>x.id===val);const s=el('span','chip');
   if(p){const v=el('video');v.muted=true;v.loop=true;v.playsInline=true;v.autoplay=true;v.preload='none';v.dataset.src=safe(p.preview);v.poster=safe(p.poster);s.append(v);s.dataset.project=p.id;s.setAttribute('role','button');s.tabIndex=0;s.onclick=()=>openProject(p.id,s)}
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
  const n=data.projects.filter(p=>!p.hidden&&(c==='all'||p.category===c)).reduce((s,p)=>s+p.videos.length,0);if(!n)return;
  const b=el('button','filter',t(c));b.append(el('sup',null,String(n)));
  b.setAttribute('aria-pressed',String(cat===c));
  b.onclick=()=>{cat=c;renderFilters();renderGrid();const u=new URL(location.href);const key=Object.keys(CAT_PARAM).find(k=>CAT_PARAM[k]===c);key?u.searchParams.set('work',key):u.searchParams.delete('work');history.replaceState({},'',u)};
  box.append(b);
 });
}
/* every video is its own item: {p: project, v: video, i: index in project, o: 'v'|'h'} */
const mmss=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
function itemsFor(c){
 const list=[];
 data.projects.filter(p=>!p.hidden&&(c==='all'||p.category===c)).forEach(p=>p.videos.forEach((v,i)=>list.push({p,v,i,o:v.orient||p.orient||'v'})));
 return list;
}
// editorial rhythm: rows of [h v v] and [V H] (big), mirrored every other time; leftovers fill evenly
function layout(list){
 const H_FIRST=['newyork','kostya','gio','silicon','dream','slovo','alfaro','joy','neuro'];
 const rank=it=>{const k=H_FIRST.indexOf(it.p.id);return (k<0?99:k)*10+it.i};
 const vs=list.filter(it=>it.o==='v'),hs=list.filter(it=>it.o==='h').sort((a,b)=>rank(a)-rank(b)),seq=[];
 for(let r=0;vs.length||hs.length;r++){
  const kind=r%2===0?'A':'B',flip=r%4>=2;
  if(kind==='A'&&hs.length>=1&&vs.length>=2){const row=[[hs.shift(),0],[vs.shift(),0],[vs.shift(),0]];seq.push(...(flip?row.reverse():row))}
  else if(kind==='B'&&hs.length>=1&&vs.length>=1){const row=[[vs.shift(),1],[hs.shift(),1]];seq.push(...(flip?row.reverse():row))}
  else if(vs.length>=4||(!hs.length&&vs.length)){for(let k=0;k<4&&vs.length;k++)seq.push([vs.shift(),0])}
  else if(hs.length){for(let k=0;k<2&&hs.length;k++)seq.push([hs.shift(),0])}
  else seq.push([vs.shift(),0]);
 }
 return seq;
}
const subtitle=it=>it.p.videos.length>1?(tv(it.v.label)||tv(it.p.title)):tv(it.p.title);
const fmtOf=it=>[it.o==='v'?'9:16':'16:9',it.v.dur?mmss(it.v.dur):''].filter(Boolean).join(' · ');
let gridFeed=[];
function renderGrid(){
 const box=$('#grid');box.replaceChildren();
 const seq=layout(itemsFor(cat));
 gridFeed=seq.map(([it])=>it);
 seq.forEach(([it,big],idx)=>{
  const card=el('article',`card ${it.o}${big?' big':''}`);
  const cover=el('button','cover');cover.setAttribute('aria-label',`${t('play')}: ${it.p.brand} — ${subtitle(it)}`);
  const img=el('img');img.src=safe(it.v.thumb||it.p.poster);img.alt=`${it.p.brand} — ${subtitle(it)}`;img.loading='lazy';img.decoding='async';
  const vid=el('video');vid.muted=true;vid.loop=true;vid.playsInline=true;vid.preload='none';vid.dataset.src=safe(it.v.preview||it.p.preview);vid.setAttribute('aria-hidden','true');
  vid.addEventListener('playing',()=>cover.classList.add('live'));
  cover.append(img,vid);cover.onclick=()=>openReels(gridFeed,idx,cover);
  const cap=el('div','cap');cap.append(el('b',null,it.p.brand),el('span',null,subtitle(it)),el('i',null,fmtOf(it)));
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

/* ---------- Reels-style viewer: full screen, swipe up/down through the portfolio ---------- */
const REELP={id:'__reel',brand:'DARIA WHITE',category:'reel',title:{en:'Showreel 2026',ru:'Шоурил 2026'},videos:[]};
function reelItem(){const f=portrait()?'9x16':'16x9';return {p:REELP,i:0,o:portrait()?'v':'h',v:{src:`media/reel-${f}.mp4`,thumb:`media/reel-poster-${f}.jpg`,dur:46,label:REELP.title}}}
let rFeed=[],rIdx=0,rMuted=false,rObs=null,rOpen=false;
const RV=$('#reels'),RT=$('#reels-track');
function openReels(feed,start,trigger){
 if(!feed.length)return;
 opener=trigger||document.activeElement;rFeed=feed;rIdx=start;
 $('#hero-video').pause();
 RT.replaceChildren(...feed.map((it,i)=>{
  const s=el('section',`slide ${it.o}`);s.dataset.i=i;
  const bg=el('div','slide-bg');bg.style.backgroundImage=`url("${safe(it.v.thumb||it.p.poster)}")`;
  const v=el('video');v.playsInline=true;v.loop=true;v.preload='none';v.poster=safe(it.v.thumb||it.p.poster);v.dataset.src=safe(it.v.src);
  v.addEventListener('timeupdate',()=>{if(v.duration)s.style.setProperty('--prog',(v.currentTime/v.duration).toFixed(4))});
  // single tap = pause/play, double tap = like (like Instagram)
  let tapT=0;
  v.addEventListener('click',()=>{
   if(tapT){clearTimeout(tapT);tapT=0;likeCurrent(true);return}
   tapT=setTimeout(()=>{tapT=0;if(v.paused){v.play().catch(()=>{});s.classList.remove('paused')}else{v.pause();s.classList.add('paused')}},240);
  });
  const info=el('div','slide-info');
  const who=el('div','slide-who');who.append(el('span','slide-av','DW'),el('b',null,it.p.brand));
  info.append(who,el('p',null,it.p===REELP?t('heroBase'):subtitle(it)),el('i',null,it.p===REELP?'':`${t(it.p.category)} · ${fmtOf(it)}`));
  s.append(bg,v,info,el('div','slide-bar'),el('div','slide-pause'));
  return s;
 }));
 RV.hidden=false;document.documentElement.classList.add('reels-on');rOpen=true;
 history.pushState({reels:1},'');
 RT.scrollTop=start*RT.clientHeight;
 rObs?.disconnect();
 rObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>.6)activate(+e.target.dataset.i)}),{root:RT,threshold:[.6]});
 $$('#reels-track .slide').forEach(s=>rObs.observe(s));
 activate(start);
 const hint=$('#reels-hint');try{if(!localStorage.getItem('dw-swiped')){hint.hidden=false;setTimeout(()=>hint.hidden=true,2600)}}catch{}
 RV.focus({preventScroll:true});
}
function activate(i){
 rIdx=i;
 $$('#reels-track .slide').forEach((s,k)=>{
  const v=s.querySelector('video');
  if(Math.abs(k-i)<=1&&!v.src){v.src=v.dataset.src;v.preload=k===i?'auto':'metadata'}
  if(k===i){v.muted=rMuted;s.classList.remove('paused');v.currentTime=0;
   v.play().catch(()=>{rMuted=true;v.muted=true;syncSound();v.play().catch(()=>{})})}
  else if(!v.paused)v.pause();
 });
 syncSound();syncLike();
 const it=rFeed[i];if(it&&it.p!==REELP){const u=new URL(location.href);u.searchParams.set('project',it.p.id);it.i?u.searchParams.set('i',it.i+1):u.searchParams.delete('i');history.replaceState(history.state,'',u)}
 if(i>0)try{localStorage.setItem('dw-swiped','1')}catch{}
}
function syncSound(){const b=$('#reels-sound');b.classList.toggle('off',rMuted);b.setAttribute('aria-label',rMuted?'Sound off':'Sound on')}
$('#reels-sound').onclick=()=>{rMuted=!rMuted;const v=$$('#reels-track video')[rIdx];if(v){v.muted=rMuted;if(v.paused)v.play().catch(()=>{})}syncSound()};
function closeReels(fromPop){
 if(!rOpen)return;rOpen=false;
 $$('#reels-track video').forEach(v=>{v.pause();v.removeAttribute('src');v.load()});
 rObs?.disconnect();RT.replaceChildren();RV.hidden=true;document.documentElement.classList.remove('reels-on');
 closeSheet();
 const u=new URL(location.href);u.searchParams.delete('project');u.searchParams.delete('i');history.replaceState(null,'',u);
 if(!fromPop&&history.state?.reels)history.back();
 tryPlay();opener?.focus({preventScroll:true});
}
$('#reels-close').onclick=()=>closeReels(false);
addEventListener('popstate',()=>{if(rOpen)closeReels(true)});
const step=d=>{const n=Math.max(0,Math.min(rFeed.length-1,rIdx+d));RT.scrollTo({top:n*RT.clientHeight,behavior:'smooth'})};
$('#reels-up').onclick=()=>step(-1);$('#reels-down').onclick=()=>step(1);
RV.addEventListener('keydown',e=>{if(e.target.tagName==='TEXTAREA')return;if(e.key==='Escape'){if(!$('#sheet').hidden)closeSheet();else closeReels(false)}else if(e.key==='ArrowDown'||e.key==='PageDown'){e.preventDefault();step(1)}else if(e.key==='ArrowUp'||e.key==='PageUp'){e.preventDefault();step(-1)}else if(e.key===' '){e.preventDefault();$$('#reels-track video')[rIdx]?.click()}});
function allFeed(){return layout(itemsFor('all')).map(([it])=>it)}
function openProject(id,trigger,vi=0){
 if(id==='__reel')return openReels([reelItem(),...allFeed()],0,trigger);
 const f=allFeed();let k=f.findIndex(it=>it.p.id===id&&it.i===vi);if(k<0)k=f.findIndex(it=>it.p.id===id);if(k>=0)openReels(f,k,trigger);
}

/* ---------- likes (kept in this browser only — no public counters) ---------- */
const keyOf=it=>it.p.id+'#'+it.i;
let likes=(()=>{try{return JSON.parse(localStorage.getItem('dw-likes')||'[]')}catch{return[]}})();
const saveLikes=()=>{try{localStorage.setItem('dw-likes',JSON.stringify(likes))}catch{}};
function syncLike(){const it=rFeed[rIdx];const on=!!it&&likes.includes(keyOf(it));const b=$('#r-like');b.classList.toggle('on',on);b.setAttribute('aria-pressed',String(on))}
function likeCurrent(fromDouble){
 const it=rFeed[rIdx];if(!it)return;const k=keyOf(it);const has=likes.includes(k);
 if(fromDouble){if(!has){likes.push(k)}}else likes=has?likes.filter(x=>x!==k):[...likes,k];
 saveLikes();syncLike();
 if(fromDouble||!has){const h=$('#heart-burst');h.classList.remove('go');void h.offsetWidth;h.classList.add('go')}
}
$('#r-like').onclick=()=>likeCurrent(false);

/* ---------- "Send to Daria" sheet ---------- */
const linkOf=it=>{const u=new URL(location.origin+location.pathname);if(it.p===REELP){u.hash='top'}else{u.searchParams.set('project',it.p.id);if(it.i)u.searchParams.set('i',it.i+1)}if(lang==='ru')u.searchParams.set('lang','ru');return u.href};
const titleOf=it=>it.p===REELP?`DARIA WHITE — ${t('reel')}`:`${it.p.brand} — ${subtitle(it)}`;
let quickPick=0;
function openSheet(){
 const it=rFeed[rIdx];if(!it)return;
 const v=$$('#reels-track video')[rIdx];v?.pause();
 $('#sheet-thumb').src=safe(it.v.thumb||it.p.poster);$('#sheet-brand').textContent=it.p.brand;$('#sheet-sub').textContent=it.p===REELP?t('reel'):subtitle(it);
 const q=$('#sheet-quick');q.replaceChildren();
 t('quick').forEach((txt,i)=>{const b=el('button','qchip',txt);b.setAttribute('aria-pressed',String(i===quickPick));b.onclick=()=>{quickPick=i;$('#sheet-text').value=txt;$$('#sheet-quick .qchip').forEach((x,j)=>x.setAttribute('aria-pressed',String(j===i)))};q.append(b)});
 $('#sheet-text').value=t('quick')[quickPick];$('#sheet-text').placeholder=t('sheetPh');
 const others=likes.filter(k=>k!==keyOf(it));
 $('#sheet-likes-wrap').hidden=!others.length;$('#sheet-likes-label').textContent=t('withLikes').replace('{n}',others.length);
 const ch=$('#sheet-ch');ch.replaceChildren();
 const c=data.contacts;
 [['WhatsApp',c.whatsapp&&'wa'],['Telegram',c.telegram&&'tg'],['Email',c.email&&'mail'],['Instagram',c.instagram&&'ig']].filter(x=>x[1]).forEach(([label,kind])=>{
  const b=el('button','ch ch-'+kind,label);b.onclick=()=>sendVia(kind);ch.append(b);
 });
 $('#sheet-note').hidden=true;
 $('#sheet').hidden=false;$('#sheet-shade').hidden=false;requestAnimationFrame(()=>{$('#sheet').classList.add('up');$('#sheet-shade').classList.add('up')});
}
function closeSheet(){const s=$('#sheet');if(s.hidden)return;s.classList.remove('up');$('#sheet-shade').classList.remove('up');setTimeout(()=>{s.hidden=true;$('#sheet-shade').hidden=true},250);
 const v=$$('#reels-track video')[rIdx];if(v&&rOpen)v.play().catch(()=>{})}
function messageText(){
 const it=rFeed[rIdx];let m=$('#sheet-text').value.trim()||t('quick')[0];
 m+=`\n\n▶ ${titleOf(it)}\n${linkOf(it)}`;
 if($('#sheet-likes').checked&&!$('#sheet-likes-wrap').hidden){
  const all=allFeed();const extra=likes.filter(k=>k!==keyOf(it)).map(k=>all.find(x=>keyOf(x)===k)).filter(Boolean);
  if(extra.length)m+=`\n\n${t('alsoLiked')}\n`+extra.map(x=>`♥ ${titleOf(x)} — ${linkOf(x)}`).join('\n');
 }
 return m;
}
async function copyText(s){try{await navigator.clipboard.writeText(s);return true}catch{const ta=el('textarea');ta.value=s;document.body.append(ta);ta.select();let ok=false;try{ok=document.execCommand('copy')}catch{}ta.remove();return ok}}
async function sendVia(kind){
 const m=messageText(),c=data.contacts,enc=encodeURIComponent(m);
 if(kind==='wa'){const base=c.whatsapp.split('?')[0];window.open(`${base}?text=${enc}`,'_blank','noopener')}
 else if(kind==='tg'){const user=c.telegram.replace(/\/+$/,'').split('/').pop();await copyText(m);window.open(`https://t.me/${user}?text=${enc}`,'_blank','noopener');note(t('tgNote'))}
 else if(kind==='mail'){location.href=`mailto:${c.email}?subject=${encodeURIComponent(t('mailSubj')+' — '+titleOf(rFeed[rIdx]))}&body=${enc}`}
 else if(kind==='ig'){await copyText(m);const user=c.instagram.replace(/\/+$/,'').split('/').pop();note(t('igNote'));setTimeout(()=>window.open(`https://ig.me/m/${user}`,'_blank','noopener'),900)}
}
function note(s){const n=$('#sheet-note');n.textContent=s;n.hidden=false}
$('#r-send').onclick=openSheet;
$('#sheet-x').onclick=closeSheet;$('#sheet-shade').onclick=closeSheet;
$('#r-share').onclick=async()=>{
 const it=rFeed[rIdx];if(!it)return;const url=linkOf(it);
 if(navigator.share){try{await navigator.share({title:titleOf(it),text:titleOf(it),url})}catch{}}
 else{await copyText(url);const b=$('#r-share span');const old=b.textContent;b.textContent=t('copied');setTimeout(()=>b.textContent=old,1600)}
};
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
 // phone dock: Telegram + Instagram (Daria's choice); fall back to the first two contacts
 const dockList=list.filter(([l])=>l==='Telegram'||l==='Instagram');
 (dockList.length?dockList:list.slice(0,2)).forEach(([label,url])=>{const a=el('a',null,label);a.href=safe(url);a.target='_blank';a.rel='noopener';dock.append(a)});
 if(list[0])$('#ct-big').href=safe(list[0][1]);
 $('#ig-link').href=safe(data.contacts.instagram||'#');
}

/* ---------- about / bts ---------- */
function renderBts(){
 const pv=$('#portrait');if(!pv.dataset.src){pv.poster=safe(data.about.livePoster||'');pv.dataset.src=safe(data.about.live||'')}
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

/* mouse position for the variable-font letters (normal cursor stays) */
addEventListener('pointermove',e=>{mouse.x=e.clientX;mouse.y=e.clientY},{passive:true});

heroVideo();renderBrands();applyLang();onScroll();requestAnimationFrame(vfFrame);
fetch('content.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw 0;return r.json()}).then(d=>{
 data=d;applyLang();
 const pid=params.get('project');if(pid)openProject(pid,null,Math.max(0,(+params.get('i')||1)-1));
 if(['#work','#about','#contact'].includes(location.hash))requestAnimationFrame(()=>$(location.hash)?.scrollIntoView({behavior:'instant'}));
}).catch(()=>{const e=$('#load-error');e.textContent=t('loadError');e.hidden=false});
