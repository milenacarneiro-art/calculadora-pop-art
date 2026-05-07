# 🎨 POW! CALC! — Calculadora Pop Art

Uma calculadora web com tema visual **Pop Art** (estilo Roy Lichtenstein), construída em HTML, CSS e JavaScript puro — zero dependências, zero frameworks.

![Static Badge](https://img.shields.io/badge/Epic%201-PASS%2099%2F100-brightgreen) ![Static Badge](https://img.shields.io/badge/ACs-36%2F36-blue) ![Static Badge](https://img.shields.io/badge/HTML%2FCSS%2FJS-puro-yellow)

---

## ✨ Funcionalidades

- **Operações básicas** — adição, subtração, multiplicação, divisão
- **Teclas especiais** — AC (limpar), +/− (inverter sinal), % (percentual), decimal
- **Suporte a teclado** — teclas numéricas, operadores, Enter, Backspace, Escape
- **Repeat equals** — pressionar `=` repetidamente reaplica a última operação
- **Divisão por zero** — tratada com mensagem `ERROR! 💥` e reset automático
- **Precisão decimal** — `toPrecision(12)` evita erros como `0.1 + 0.2 = 0.30000000004`
- **Animação POW!** — dispara a cada resultado calculado

---

## 🖼️ Visual Pop Art

| Elemento | Detalhe |
|----------|---------|
| Fundo | Padrão Ben-Day dots — `radial-gradient` CSS puro, sem imagens |
| Tipografia | Fonte **Bangers** (Google Fonts) — estilo quadrinho |
| Botões numéricos | Amarelo vibrante `#FFE600` com sombra offset estilo HQ |
| Botões operadores | Vermelho `#FF0044` |
| Botão igual | Azul `#0044FF` |
| Botões AC / +/− / % | Preto com texto branco |
| Bordas | `3px solid black` com `box-shadow` deslocado — efeito 3D quadrinho |
| Hover | Translação + sombra reduzida — efeito de pressionar |

---

## 🗂️ Estrutura

```
calculadora-pop-art/
├── index.html      # Estrutura HTML5 semântica, 19 botões com aria-labels
├── style.css       # Tema Pop Art completo — design tokens, Ben-Day, animações
└── script.js       # State machine JS — lógica, eventos, teclado
```

---

## 🚀 Como usar

Abra `index.html` diretamente no navegador — sem servidor, sem instalação.

```bash
# Ou via servidor local simples
npx serve .
```

---

## ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `0–9` | Dígitos |
| `+` `-` `*` `/` | Operadores (`*` → ×, `/` → ÷) |
| `.` `,` | Decimal |
| `Enter` `=` | Calcular |
| `Escape` | Limpar (AC) |
| `Backspace` | Apagar último dígito |

---

## 🏗️ Arquitetura

- **State machine** — 6 variáveis de estado (`currentValue`, `previousValue`, `operator`, `shouldResetDisplay`, `lastOperator`, `lastOperand`)
- **Event delegation** — 1 listener no container `.buttons` + 1 `keydown` global
- **DOM cacheado** — `querySelector` executado 1× no load
- **CSS custom properties** — 100% das cores via `:root` tokens
- **Sem `innerHTML`** — `textContent` exclusivo (proteção XSS)
- **Animação POW!** — `animationend { once: true }` sem memory leak

---

## 🔒 Segurança

- Zero `innerHTML` em todo o projeto
- Zero `eval` / `document.write` / handlers inline no HTML
- Keyboard input filtrado por `keyMap` estático
- Nenhum dado enviado a servidores externos

---

## 📋 Qualidade

Desenvolvido com o framework **Synkra AIOX** seguindo o ciclo Story-Driven Development:

| Story | Descrição | Score |
|-------|-----------|-------|
| 1.1 | Estrutura HTML Semântica e Layout CSS Grid | 98/100 |
| 1.2 | Tema Visual Pop Art Completo | 98/100 |
| 1.3 | Lógica da Calculadora (State Machine JS) | 100/100 |
| 1.4 | Interações, Animações e Suporte a Teclado | 100/100 |
| **Epic 1** | **MVP Completo** | **99/100** |

---

## 📄 Licença

Projeto de treinamento — uso livre.
