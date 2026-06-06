/* ====================== soshito portfolio · script.js ====================== */
const WHATSAPP = "https://wa.me/5585986301108";

/* PRELOADER */
(function preloader(){
  const bar=document.getElementById("bar"),pct=document.getElementById("pct"),btn=document.getElementById("startBtn"),ok=document.getElementById("okchip");
  let p=0;const id=setInterval(()=>{p+=4;if(p>=100){p=100;clearInterval(id);btn.disabled=false;ok.textContent="OK";}bar.style.width=p+"%";pct.textContent=p+"%";},40);
  btn.addEventListener("click",()=>{document.getElementById("preloader").classList.add("gone");setTimeout(()=>{document.getElementById("preloader").remove();document.getElementById("hud").classList.remove("hidden");document.getElementById("site").classList.remove("hidden");showToast("Pressione M para abrir o menu rápido.");},700);});
})();

/* CURSOR */
(function cursor(){
  if(matchMedia("(max-width:768px)").matches)return;
  const c=document.getElementById("cursor");
  addEventListener("mousemove",e=>{c.style.left=e.clientX+"px";c.style.top=e.clientY+"px";const el=e.target.closest("button,a,[data-cursor]");c.classList.toggle("hover",!!el);});
  addEventListener("mousedown",()=>c.classList.add("click"));
  addEventListener("mouseup",()=>c.classList.remove("click"));
})();

/* TOAST */
function showToast(t){const el=document.getElementById("toast");el.innerHTML="<span>"+t+"</span>";el.classList.remove("hidden");setTimeout(()=>el.classList.add("hidden"),4000);}

/* NAV smooth scroll */
document.body.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(!b)return;document.getElementById(b.dataset.go)?.scrollIntoView({behavior:"smooth"});closeMenu();});

/* THEME / LANG / MENU buttons */
document.getElementById("themeBtn").addEventListener("click",function(){document.documentElement.classList.toggle("light");this.textContent=document.documentElement.classList.contains("light")?"LIGHT":"DARK";});
document.getElementById("langBtn").addEventListener("click",function(){this.textContent=this.textContent==="PT"?"EN":"PT";showToast(this.textContent==="EN"?"Language: English (texto principal mantido)":"Idioma: Português");});

/* QUICK MENU */
const menuItems=[["hero","Início"],["profile","Sobre"],["skills","Serviços"],["missions","Projetos"],["style","Estilos"],["system","Sistemas"],["quiz","Quiz"],["contact","Contato"]];
const menuList=document.getElementById("menuList");
menuItems.forEach(([id,label])=>{const li=document.createElement("li");li.innerHTML=`<button data-go="${id}">${label} <em style="opacity:.6;font-family:monospace;font-size:11px">▶</em></button>`;menuList.appendChild(li);});
function openMenu(){document.getElementById("quickMenu").classList.remove("hidden");}
function closeMenu(){document.getElementById("quickMenu").classList.add("hidden");}
document.getElementById("menuBtn").addEventListener("click",openMenu);
document.getElementById("quickMenu").addEventListener("click",e=>{if(e.target.id==="quickMenu")closeMenu();});

/* keyboard shortcuts */
addEventListener("keydown",e=>{if(e.target.matches("input,textarea,select"))return;const k=e.key.toLowerCase();if(k==="m"){document.getElementById("quickMenu").classList.toggle("hidden");}else if(k==="q")document.getElementById("quiz")?.scrollIntoView({behavior:"smooth"});else if(k==="c")document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});else if(k==="l")document.getElementById("themeBtn").click();else if(k==="p")document.getElementById("langBtn").click();else if(e.key==="Escape")closeMenu();});

/* PROFILE bars */
const bars=[["Web Design",95],["Front-end",90],["Design Gráfico",85],["Marketing",80],["Copy",78],["Vídeo / 3D",72],["Conversão",92]];
document.getElementById("bars").innerHTML=bars.map(([n,v])=>`<div class="bar-row"><div class="lbl"><span>${n}</span><i>${v}/100</i></div><div class="track"><div class="fill" style="width:${v}%"></div></div></div>`).join("");

/* SKILLS */
const skills=[
  ["Web Design","Sites criados com hierarquia visual, identidade forte e foco no objetivo do negócio."],
  ["Landing Pages","Páginas para apresentar oferta, quebrar objeções e levar para WhatsApp ou checkout."],
  ["Sites Institucionais","Presença digital profissional que transmite confiança e autoridade."],
  ["Front-end","HTML, CSS, JavaScript, React. Interfaces rápidas, responsivas e acessíveis."],
  ["Design Gráfico","Identidade visual, peças, banners e materiais com linguagem consistente."],
  ["Criativos para Anúncios","Artes e vídeos que param o scroll e convertem em campanhas pagas."],
  ["Marketing Digital","Estratégia, posicionamento e funil para gerar leads qualificados."],
  ["Copywriting","Textos que vendem: clareza, gatilhos, prova social e CTA direto."],
  ["Edição de Vídeo / 3D","Cortes, cenários 3D, motion e narrativa para reels, VSL e institucional."],
  ["Experiências Interativas","Sites que parecem produto: animações, micro-interações e UX premium."],
];
const skillList=document.getElementById("skillList"),skillDetail=document.getElementById("skillDetail");
let curSkill=0;
function renderSkills(){skillList.innerHTML=skills.map(([n],i)=>`<li class="${i===curSkill?'sel':''}"><button onclick="setSkill(${i})">${String(i+1).padStart(2,'0')}. ${n} <span style="font-family:monospace;font-size:11px">${i===curSkill?'◀ SELECTED':'▶'}</span></button></li>`).join("");skillDetail.innerHTML=`<span class="badge">▌ DETAILS</span><h3>${skills[curSkill][0]}</h3><p>${skills[curSkill][1]}</p><div style="margin-top:24px;display:flex;gap:8px;flex-wrap:wrap"><a class="btn-blood clip-tab" href="${WHATSAPP}" target="_blank">Quero este serviço ▶</a><button class="btn-outline" style="border-color:#000;color:#000" onclick="setSkill((${curSkill}+1)%${skills.length})">Próxima ▶</button></div>`;}
window.setSkill=i=>{curSkill=i;renderSkills();};
renderSkills();

/* MISSIONS */
const missions=[
  {img:"assets/images/mockup-1-roupas.jpg",title:"Landing Page · Loja de Roupas",cat:"E-COMMERCE",desc:"Vitrine para revenda com CTA direto pro WhatsApp.",impact:88},
  {img:"assets/images/mockup-2-clinica.jpg",title:"Site Institucional · Clínica",cat:"INSTITUCIONAL",desc:"Agenda online e prova de autoridade médica.",impact:82},
  {img:"assets/images/mockup-3-vendas.jpg",title:"Página de Vendas · Produto Digital",cat:"CONVERSÃO",desc:"Quebra de objeções e checkout otimizado.",impact:95},
  {img:"assets/images/mockup-4-catalogo.jpg",title:"Catálogo com Pedido · WhatsApp",cat:"CATÁLOGO",desc:"Carrinho que envia pedido formatado pro Zap.",impact:86},
  {img:"assets/images/mockup-5-dashboard.jpg",title:"Dashboard · Empresa",cat:"SAAS",desc:"Métricas, leads e receita em tempo real.",impact:90},
  {img:"assets/images/mockup-6-consultoria.jpg",title:"Site Premium · Consultoria",cat:"B2B",desc:"Posicionamento high-ticket e captação qualificada.",impact:84},
  {img:"assets/images/mockup-7-portfolio.jpg",title:"Portfólio · Criador de Conteúdo",cat:"PERSONAL BRAND",desc:"Vitrine criativa para fechar mais contratos.",impact:80},
  {img:"assets/images/mockup-8-drop.jpg",title:"Página de Lançamento · Drop",cat:"DROP / HYPE",desc:"Contagem regressiva e desejo na medida certa.",impact:92},
];
document.getElementById("missionGrid").innerHTML=missions.map(m=>`
<article class="mission"><div class="thumb"><img src="${m.img}" alt="${m.title}" loading="lazy"><span class="cat"><span style="display:inline-block;transform:skewX(12deg)">${m.cat}</span></span><span class="impact-chip">IMPACT ${m.impact}</span></div>
<div class="body"><h3>${m.title}</h3><p>${m.desc}</p><div class="actions"><a class="a1" href="${WHATSAPP}" target="_blank">Ver conceito</a><a class="a2" href="${WHATSAPP}?text=${encodeURIComponent('Quero algo como: '+m.title)}" target="_blank">Quero algo assim</a></div></div></article>`).join("");

/* STYLE SELECT */
const styles=[
  {short:"Elegante / B2B",title:"Visual elegante para empresas que precisam transmitir confiança",ideal:["advocacia","clínicas","consultorias","imobiliárias","escritórios","B2B"],bg:"linear-gradient(135deg,#0c2340,#1a4a6e)",demoTitle:"Aurum Consulting",demoBtn:"Solicite uma análise",btnBg:"#c9a84c",fg:"#fff"},
  {short:"Impactante / Drop",title:"Visual impactante para marcas que precisam chamar atenção",ideal:["marcas de roupa","criadores","agências","lançamentos","eventos","produtos digitais"],bg:"linear-gradient(135deg,#050505,#7a0008)",demoTitle:"Hypeclub Drop",demoBtn:"Ver coleção",btnBg:"#e60012",fg:"#fff"},
  {short:"Minimalista / SaaS",title:"Visual minimalista para negócios que precisam de clareza e conversão",ideal:["SaaS","tecnologia","serviços","consultorias","profissionais"],bg:"linear-gradient(135deg,#f5f1e8,#fff)",demoTitle:"Clarity.io",demoBtn:"Começar grátis",btnBg:"#0a0a0a",fg:"#0a0a0a"},
];
let curStyle=0;
function renderStyles(){
  document.getElementById("styleTabs").innerHTML=styles.map((s,i)=>`<button class="${i===curStyle?'sel':''}" onclick="setStyle(${i})"><div class="mono tiny dim">STYLE 0${i+1}</div><h4>${s.short}</h4><p style="font-size:12px;opacity:.9;margin-top:6px">${s.title}</p></button>`).join("");
  const s=styles[curStyle];
  document.getElementById("stylePreview").innerHTML=`
  <div class="demo" style="background:${s.bg};color:${s.fg}">
    <div class="dots"><i style="background:#ef4444"></i><i style="background:#eab308"></i><i style="background:#22c55e"></i></div>
    <div style="padding-top:32px"><div class="mono tiny" style="opacity:.7">▌ PREVIEW · STYLE 0${curStyle+1}</div><h3 style="margin:8px 0">${s.demoTitle}</h3><p style="opacity:.8;max-width:420px;font-size:14px">Demo navegável do estilo ${s.short}. Posso entregar exatamente assim para o seu negócio.</p><button style="margin-top:20px;background:${s.btnBg};color:#fff;padding:8px 20px;font-family:'Archivo Black',sans-serif">${s.demoBtn} ▶</button></div>
  </div>
  <div class="ideal-box"><span class="tag tag-red bordered" style="border-color:#000"><span>IDEAL PARA</span></span><ul>${s.ideal.map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn-blood clip-tab" style="display:inline-block" href="${WHATSAPP}" target="_blank">Quero este estilo ▶</a></div>`;
}
window.setStyle=i=>{curStyle=i;renderStyles();};
renderStyles();

/* SYSTEM tabs */
const sysTabs=["Login","Catálogo","Agendamento","Orçamento","Formulário","Dashboard"];
let curSys=0;
function renderSys(){
  document.getElementById("sysTabs").innerHTML=sysTabs.map((n,i)=>`<button class="${i===curSys?'sel':''}" onclick="setSys(${i})">${n}</button>`).join("");
  const panel=document.getElementById("sysPanel");
  panel.innerHTML=`<span class="head"><span style="display:inline-block;transform:skewX(12deg)">▌ ${sysTabs[curSys]}</span></span><div id="sysBody"></div>`;
  const body=panel.querySelector("#sysBody");
  if(curSys===0)body.innerHTML=`<form class="form" onsubmit="event.preventDefault();this.nextElementSibling.textContent='✔ Login simulado. Em produção: auth real, JWT, OAuth.';"><input type="email" placeholder="email@empresa.com" required><input type="password" placeholder="senha" required><button class="btn-blood clip-tab" style="align-self:flex-start">ENTRAR ▶</button></form><p style="margin-top:12px;font-family:monospace;font-size:12px"></p>`;
  if(curSys===1){const prods=[{id:1,n:"Produto Alpha",p:49.9},{id:2,n:"Produto Beta",p:79.9},{id:3,n:"Produto Gamma",p:129.9},{id:4,n:"Produto Delta",p:199.9}];window._cart={};body.innerHTML=`<div class="grid2"><div class="prod-grid">${prods.map(p=>`<div class="prod"><b>${p.n}</b><div class="pr">R$ ${p.p.toFixed(2)}</div><button onclick="addCart(${p.id})">+ Add</button></div>`).join("")}</div><div class="cart" id="cartBox"><b>🛒 Pedido</b><div id="cartItems" style="margin-top:8px"><p style="font-size:12px;opacity:.6">Carrinho vazio</p></div></div></div>`;window._prods=prods;}
  if(curSys===2)body.innerHTML=`<form class="form" onsubmit="event.preventDefault();this.nextElementSibling.style.display='block';"><select><option>Consulta de Site</option><option>Estratégia de Conversão</option><option>Auditoria de UX</option></select><input type="date" required><input type="time" required><button class="btn-blood clip-tab" style="align-self:flex-start">CONFIRMAR ▶</button></form><p style="display:none;background:var(--blood);padding:12px;font-family:'Archivo Black',sans-serif;margin-top:12px">✔ Agendamento confirmado.</p>`;
  if(curSys===3){body.innerHTML=`<div class="grid2"><div class="form"><label class="mono tiny">Tipo<select id="bt"><option value="1500">Landing Page</option><option value="3500">Site Institucional</option><option value="7000">Sistema/Catálogo</option></select></label><label class="mono tiny">Páginas: <span id="bpv">3</span><input id="bp" type="range" min="1" max="10" value="3" style="display:block;width:100%;accent-color:#e60012"></label><div class="mono tiny">Extras</div>${["Blog 600","Pagamento 800","Multi-idioma 700","CMS 1200"].map((x,i)=>{const[n,v]=x.split(" ");return`<label style="display:flex;gap:8px;font-size:14px"><input type="checkbox" data-v="${v}" class="bx">${n}</label>`}).join("")}</div><div class="ideal-box" style="background:#fff;color:#000"><div class="mono tiny dim">ESTIMATIVA</div><div class="display" style="font-size:48px;color:var(--blood)" id="bsum">R$ 1.500</div><a class="btn-blood clip-tab" style="display:inline-block" href="${WHATSAPP}" target="_blank">SOLICITAR ORÇAMENTO ▶</a></div></div>`;const upd=()=>{const base=+document.getElementById("bt").value;const pg=+document.getElementById("bp").value;document.getElementById("bpv").textContent=pg;const ex=[...document.querySelectorAll(".bx:checked")].reduce((s,el)=>s+ +el.dataset.v,0);document.getElementById("bsum").textContent="R$ "+(base+(pg-1)*300+ex).toLocaleString("pt-BR");};document.getElementById("bt").addEventListener("change",upd);document.getElementById("bp").addEventListener("input",upd);document.querySelectorAll(".bx").forEach(el=>el.addEventListener("change",upd));}
  if(curSys===4)body.innerHTML=`<form class="form" onsubmit="event.preventDefault();this.nextElementSibling.style.display='block';"><input required placeholder="Nome"><input required placeholder="WhatsApp"><select><option>Landing Page</option><option>Institucional</option><option>E-commerce</option><option>Sistema</option></select><textarea required rows="3" placeholder="Conte sobre o projeto"></textarea><button class="btn-blood clip-tab" style="align-self:flex-start">ENVIAR ▶</button></form><p style="display:none;background:var(--blood);padding:12px;font-family:'Archivo Black',sans-serif;margin-top:12px">✔ Mensagem registrada.</p>`;
  if(curSys===5){const data=[12,18,9,22,30,25,40];const max=Math.max(...data);body.innerHTML=`<div class="kpi-grid"><div class="kpi"><div class="mono tiny dim">Leads</div><b>${data.reduce((a,b)=>a+b,0)}</b></div><div class="kpi"><div class="mono tiny dim">Conversão</div><b>18%</b></div><div class="kpi"><div class="mono tiny dim">Receita</div><b style="font-size:22px">R$ ${(data.reduce((a,b)=>a+b,0)*47).toLocaleString("pt-BR")}</b></div></div><div class="chart">${data.map(v=>`<i style="height:${(v/max)*100}%"></i>`).join("")}</div>`;}
}
window.setSys=i=>{curSys=i;renderSys();};
window.addCart=id=>{window._cart[id]=(window._cart[id]||0)+1;const items=Object.entries(window._cart).map(([id,q])=>{const p=window._prods.find(x=>x.id===+id);return`<div class="item"><span>${q}x ${p.n}</span><span>R$ ${(p.p*q).toFixed(2)}</span></div>`;}).join("");const total=Object.entries(window._cart).reduce((s,[id,q])=>s+window._prods.find(x=>x.id===+id).p*q,0);const txt=encodeURIComponent("Pedido:\n"+Object.entries(window._cart).map(([id,q])=>`${q}x ${window._prods.find(x=>x.id===+id).n}`).join("\n")+`\nTotal: R$ ${total.toFixed(2)}`);document.getElementById("cartItems").innerHTML=items+`<div class="total">Total: R$ ${total.toFixed(2)}</div><a class="send" href="${WHATSAPP}?text=${txt}" target="_blank">▶ ENVIAR PELO WHATSAPP</a>`;};
renderSys();

/* ROUTE */
const stages=["Diagnóstico","Estratégia","Direção Visual","Desenvolvimento","Conversão"];
document.getElementById("route").innerHTML=stages.map((s,i)=>`<div class="stage"><small>0${i+1}</small>${s}</div>${i<stages.length-1?'<span class="arr">▶</span>':''}`).join("");

/* QUIZ */
const quiz=[
  {q:"Qual o tipo do seu negócio?",a:["Loja","Clínica","Consultoria","Criador de conteúdo","Produto digital","Serviço local","SaaS","Outro"]},
  {q:"Você já tem site?",a:["Não tenho","Tenho, mas fraco","Tenho, mas não converte","Só Instagram/WhatsApp","Quero algo profissional"]},
  {q:"Qual seu objetivo principal?",a:["Vender mais","Captar leads","Passar confiança","Apresentar empresa","Divulgar serviços","Lançar produto","Receber pedidos"]},
  {q:"Sua maior dificuldade hoje?",a:["Pouca credibilidade","Baixa conversão","Cliente não entende oferta","Visual pouco profissional","Falta organização","Sem presença digital","Anúncios sem resultado"]},
  {q:"Funcionalidade que gostaria?",a:["WhatsApp","Formulário","Agendamento","Catálogo","Carrinho","Login","Dashboard","Orçamento automático"]},
];
let qStep=0,qAns=[];
function diag(){const o=(qAns[2]||"").toLowerCase();if(o.includes("vender"))return{p:"Visitantes que não compram",s:"Landing Page focada em conversão",t:"Landing Page de Vendas"};if(o.includes("lead"))return{p:"Pouca captação qualificada",s:"Página com isca + formulário",t:"Landing Page de Captação"};if(o.includes("confian")||o.includes("apresent"))return{p:"Marca parece amadora",s:"Site institucional premium",t:"Site Institucional"};if(o.includes("pedido"))return{p:"Pedidos desorganizados",s:"Catálogo com carrinho + WhatsApp",t:"Catálogo Online"};if(o.includes("lançar"))return{p:"Lançamento sem expectativa",s:"Página de lançamento com countdown",t:"Landing de Lançamento"};return{p:"Presença digital fraca",s:"Site profissional completo",t:"Site Profissional"};}
function renderQuiz(){
  const box=document.getElementById("quizBox");
  if(qStep<quiz.length){
    box.innerHTML=`<div class="q-head"><span>Q ${qStep+1}/${quiz.length}</span><div class="q-prog">${quiz.map((_,i)=>`<span class="${i<qStep?'on':''}"></span>`).join("")}</div></div><h3>${quiz[qStep].q}</h3><div class="q-opts">${quiz[qStep].a.map(a=>`<button onclick="pickQuiz('${a.replace(/'/g,"\\'")}')">▸ ${a}</button>`).join("")}</div>`;
  } else {
    const r=diag();
    const link=`${WHATSAPP}?text=${encodeURIComponent(`Olá soshito! Fiz o DIAGNOSIS no seu site.\n\n• Negócio: ${qAns[0]}\n• Site atual: ${qAns[1]}\n• Objetivo: ${qAns[2]}\n• Dificuldade: ${qAns[3]}\n• Funcionalidade: ${qAns[4]}\n\n→ Recomendação: ${r.t}\n→ Solução: ${r.s}`)}`;
    box.innerHTML=`<span class="tag tag-red"><span>✔ DIAGNÓSTICO COMPLETO</span></span><div class="res-grid" style="margin-top:16px"><div class="res-card"><small>PROBLEMA</small><b>${r.p}</b></div><div class="res-card"><small>SOLUÇÃO</small><b>${r.s}</b></div><div class="res-card"><small>TIPO DE SITE</small><b>${r.t}</b></div></div><div style="margin-top:24px;display:flex;gap:8px;flex-wrap:wrap"><a class="btn-blood clip-tab" href="${link}" target="_blank">▶ ENVIAR DIAGNÓSTICO NO WHATSAPP</a><button class="btn-outline" onclick="resetQuiz()">↺ REFAZER</button></div>`;
  }
}
window.pickQuiz=a=>{qAns[qStep]=a;qStep++;renderQuiz();};
window.resetQuiz=()=>{qAns=[];qStep=0;renderQuiz();};
renderQuiz();

/* COPY discord */
document.getElementById("copyDiscord").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("Hitorishh");document.getElementById("dcMsg").textContent="✔ Copiado!";setTimeout(()=>document.getElementById("dcMsg").textContent="Clique para copiar",1500);}catch(e){}});
