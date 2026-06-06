# soshito · Portfólio (versão estática)

Site portfólio de **João Victor (soshito)** — interface inspirada em game UI estilo Persona 5, totalmente em HTML/CSS/JS puro. Pronto para abrir, editar no VS Code e publicar onde quiser.

## 📦 Arquivos

```
index.html        → estrutura completa do site (uma página)
style.css         → design system, tipografia, layouts e animações
script.js         → preloader, cursor, menu rápido, quiz, demos
README.md         → este guia
assets/
  images/
    character-soshito.png
    mockup-1-roupas.jpg .. mockup-8-drop.jpg
docs/instructions.md
```

## ▶️ Como rodar

Abra `index.html` direto no navegador (duplo clique).
Ou rode um servidor local:

```bash
npx serve .
# ou
python3 -m http.server 8080
```

## 🚀 Como hospedar

Funciona em qualquer hospedagem estática:

- **Vercel** → `vercel deploy`
- **Netlify** → arraste a pasta em https://app.netlify.com/drop
- **GitHub Pages** → suba o repo e ative Pages
- **Cloudflare Pages**, **Render**, **Hostinger**, **HostGator**, etc.

## 🛠️ O que editar

| Quer mudar... | Vá em... |
|---|---|
| Textos do hero | `index.html` → seção `<section id="hero">` |
| Bio do Sobre | `index.html` → seção `<section id="profile">` |
| Lista de serviços | `script.js` → constante `const skills = [...]` |
| Cards de projetos | `script.js` → constante `const missions = [...]` |
| Imagens da galeria | substitua arquivos em `assets/images/mockup-*.jpg` |
| Imagem do personagem | substitua `assets/images/character-soshito.png` |
| WhatsApp | `script.js` → constante `WHATSAPP` (linha 2) e também no `index.html` |
| GitHub | `index.html` → procure `github.com/jvctorr` |
| Discord | `index.html` → procure `Hitorishh` e em `script.js` → `copyDiscord` |
| E-mail | `index.html` → procure `Jvictor76900@gmail.com` |
| Paleta de cores | `style.css` → bloco `:root` (variáveis `--blood`, `--ink`, etc.) |
| Fontes | `index.html` → `<link>` do Google Fonts + `style.css` |
| Perguntas do Quiz | `script.js` → constante `const quiz = [...]` |
| Estilos do Style Select | `script.js` → constante `const styles = [...]` |

## ⌨️ Atalhos de teclado

| Tecla | Ação |
|---|---|
| **M** | Abre/fecha menu rápido |
| **Q** | Pula para o Quiz |
| **C** | Pula para Contato |
| **L** | Light / Dark mode |
| **P** | Português / English |
| **ESC** | Fecha menu/popup |

## 🎯 Funcionalidades

- ✅ Preloader interativo "PRESS START"
- ✅ Cursor customizado (desktop)
- ✅ Menu rápido tipo pause de jogo
- ✅ HUD fixa no topo
- ✅ Light / Dark mode
- ✅ Toggle PT / EN
- ✅ 8 projetos com mockups reais legíveis
- ✅ 3 estilos de site com mini demos
- ✅ 6 demos funcionais (login, catálogo+carrinho, agendamento, orçamento, formulário, dashboard)
- ✅ Quiz de 5 perguntas com diagnóstico e envio pro WhatsApp
- ✅ Contato com WhatsApp / GitHub / Discord (copia) / E-mail
- ✅ Totalmente responsivo

## 📁 Estrutura recomendada para expandir

Se quiser separar mais assets:

```
assets/
  images/      ← fotos, mockups, banners
  videos/      ← vídeos curtos / VSL
  icons/       ← ícones SVG
  characters/  ← variações do personagem
  mockups/     ← mockups extras
  textures/    ← texturas / overlays
  animations/  ← lottie / vídeos curtos
```

## 📞 Contato

- WhatsApp: **+55 85 98630-1108** → https://wa.me/5585986301108
- GitHub: **jvctorr** → https://github.com/jvctorr
- Discord: **Hitorishh**
- E-mail: **Jvictor76900@gmail.com**

---

**Site criado por soshito** · João Victor · 2026
