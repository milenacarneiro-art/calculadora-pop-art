# Calculadora Pop Art — Product Requirements Document (PRD)

**Versão:** 1.0
**Data:** 2026-05-07
**Autor:** Morgan (PM) — Synkra AIOX
**Status:** Draft
**Fonte:** Project Brief `docs/brief.md`

---

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-05-07 | 1.0 | Versão inicial — gerada a partir do Project Brief aprovado | Morgan (PM) |

---

## 1. Goals and Background Context

### Goals

- Entregar uma calculadora web com identidade visual pop art completa e imediatamente reconhecível (Ben-Day dots, Bangers, paleta primária bold)
- Garantir que 100% das operações matemáticas básicas funcionem corretamente, sem concessões de usabilidade em favor da estética
- Criar um projeto portátil e autossuficiente: abre com duplo-clique, sem instalação, sem dependências de runtime
- Servir como referência técnica reutilizável demonstrando que ferramentas utilitárias podem ter alma visual
- Suportar teclado completamente, garantindo acessibilidade básica (WCAG 2.1 AA parcial)

### Background Context

Calculadoras web existentes são funcionalmente corretas mas visualmente genéricas. Para desenvolvedores e designers que constroem ambientes visuais cuidadosos, usar uma ferramenta sem personalidade quebra a coesão estética do seu espaço de trabalho. As poucas calculadoras "temáticas" disponíveis sacrificam usabilidade pelo estilo — botões mal proporcionados, legibilidade comprometida, sem suporte a teclado.

A Calculadora Pop Art resolve esse gap entregando uma ferramenta que é simultaneamente confiável e visualmente marcante. Inspirada em Roy Lichtenstein (Ben-Day dots, bordas pretas grossas), Andy Warhol (paleta primária bold) e Keith Haring (reservado para Phase 2), o projeto prova que utilidade e estética podem coexistir sem concessões — e serve como ponto de partida educacional para desenvolvedores que querem aprender CSS moderno através de um projeto gratificante visualmente.

---

## 2. Requirements

### Functional Requirements

- **FR1:** A calculadora deve realizar as quatro operações básicas: adição (`+`), subtração (`−`), multiplicação (`×`) e divisão (`÷`)
- **FR2:** A calculadora deve suportar as funções auxiliares: `AC` (limpar tudo), `+/−` (inverter sinal do número atual), `%` (calcular percentual) e `.` (inserir ponto decimal)
- **FR3:** O display deve apresentar duas linhas: a linha superior exibe a expressão em construção (ex: `8 × 5`); a linha inferior exibe o resultado após pressionar `=`
- **FR4:** Ao pressionar `=` múltiplas vezes consecutivas, a última operação deve ser repetida sobre o resultado anterior
- **FR5:** O display deve limitar-se a 12 dígitos; resultados maiores devem ser exibidos em notação científica
- **FR6:** A calculadora deve tratar divisão por zero exibindo a mensagem `"ERROR! 💥"` no display
- **FR7:** A calculadora deve ignorar entradas de operadores consecutivos, substituindo o operador anterior pelo novo sem duplicar
- **FR8:** Todas as operações devem ser acessíveis via teclado, com o mesmo feedback visual do clique (mapeamento: `0-9`, `.`, `+`, `-`, `*`, `/`, `Enter`/`=`, `Escape`/AC, `Backspace`)
- **FR9:** Ao pressionar `=`, uma animação "POW!" deve aparecer brevemente sobre a calculadora e desaparecer automaticamente (duração ≤ 0.8s, não bloqueia input)
- **FR10:** Os botões devem ter efeito visual de "afundamento" ao ser pressionados (clique físico), revertendo ao estado original ao soltar
- **FR11:** A interface deve incluir o padrão Ben-Day dots no fundo gerado 100% em CSS via `radial-gradient`, sem imagens externas
- **FR12:** A interface deve usar a tipografia "Bangers" (Google Fonts) em todos os textos da calculadora
- **FR13:** A interface deve aplicar a paleta primária bold: botões numéricos em amarelo `#FFE600`, botões de operação em vermelho `#FF0044`, botão `=` em azul `#0044FF`, botão `AC` em preto com texto branco
- **FR14:** Todos os elementos da calculadora devem ter bordas pretas de 3–4px e box-shadow offset de 4px para criar efeito visual de quadrinho
- **FR15:** O display deve ter estilo de balão de quadrinho com borda espessa e fundo branco
- **FR16:** A interface deve incluir o título "POW! CALC!" no topo, estilo onomatopeia de quadrinho

### Non-Functional Requirements

- **NFR1:** O tempo de carregamento total da página deve ser inferior a 1 segundo em conexão padrão
- **NFR2:** O tamanho total dos arquivos (HTML + CSS + JS) deve ser inferior a 50KB (excluindo fonte externa)
- **NFR3:** Nenhuma biblioteca JavaScript externa deve ser utilizada no runtime — apenas HTML, CSS e JS vanilla
- **NFR4:** A calculadora deve funcionar corretamente nos navegadores: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **NFR5:** Todos os botões devem ter `aria-label` descritivo para suporte a leitores de tela
- **NFR6:** A aplicação não deve transmitir dados do usuário, não deve usar cookies e não deve coletar informações pessoais
- **NFR7:** A precisão decimal deve ser tratada com `parseFloat(result.toPrecision(12))` para evitar o problema clássico de `0.1 + 0.2 = 0.30000000004`
- **NFR8:** A fonte "Bangers" deve ter fallback stack definido (`Impact, fantasy`) para uso sem conexão à internet

---

## 3. User Interface Design Goals

### Overall UX Vision

Uma calculadora que comunica "pop art" instantaneamente — sem tutorial, sem onboarding. O usuário abre e já vê: cores vibrantes, Ben-Day dots, tipografia de quadrinho. A interação é imediata e satisfatória: botões que "afundam" fisicamente, animação "POW!" que celebra o resultado. A usabilidade é a de qualquer calculadora padrão — zero curva de aprendizado — mas a experiência visual é singular.

### Key Interaction Paradigms

- **Click / Touch:** Botões respondem com feedback visual imediato (efeito de afundamento via `transform`)
- **Keyboard:** Todas as operações mapeadas para teclas naturais; tecla pressionada recebe mesmo estado visual do clique
- **Display passivo:** O resultado aparece apenas após `=` — sem cálculo live enquanto o usuário digita
- **Feedback de erro:** Estados inválidos exibem mensagem clara no display, sem alertas modais

### Core Screens and Views

- **Tela única:** A calculadora é uma single-page application sem navegação. Toda a interface está visível em uma tela:
  - Título "POW! CALC!" (topo)
  - Display duplo (expressão + resultado)
  - Grid de botões 4×5

### Accessibility

**WCAG 2.1 AA Parcial:**
- ✅ Suporte completo a teclado
- ✅ `aria-label` em todos os botões
- ✅ Contraste de texto verificado (texto preto sobre amarelo #FFE600 — ratio ≥ 4.5:1 a confirmar)
- ❌ Screen reader completo fora do escopo MVP
- ❌ Alto contraste / modo escuro fora do escopo MVP

### Branding

Identidade visual ancorada no movimento pop art americano dos anos 1960:
- **Roy Lichtenstein:** Ben-Day dots no fundo, bordas pretas 3–4px, box-shadow offset, display estilo balão de quadrinho, paleta de primários puros
- **Andy Warhol:** Repetição de cores bold, amarelo vibrante #FFE600 como cor dominante dos números
- **Tipografia:** "Bangers" (Google Fonts) — lettering comic book, todas as letras maiúsculas
- **Onomatopeia:** "POW! CALC!" como título, animação "POW!" ao pressionar `=`

### Target Device and Platforms

**Web Responsive** — Desktop como plataforma primária. Layout adaptável para mobile (botões mínimo 60×60px para touch). Sem PWA no MVP.

---

## 4. Technical Assumptions

### Repository Structure

**Single directory** — Sem monorepo/polyrepo formal. Três arquivos no diretório raiz do projeto:
```
Calculadora/
├── index.html
├── style.css
└── script.js
```

### Service Architecture

**Client-side only** — Sem backend, sem servidor, sem API. Arquivo estático abrível diretamente no navegador via `file://` ou servido por qualquer servidor estático (GitHub Pages, Netlify, etc.).

### Testing Requirements

**Manual** — Sem framework de testes automatizados para este escopo. Verificação manual dos casos de uso e edge cases listados nos critérios de aceitação das stories. Checklist de testes documentado na story de lógica JS.

### Additional Technical Assumptions

- **Linguagens:** HTML5 semântico + CSS3 (Grid, Custom Properties, Keyframes, `radial-gradient`) + JavaScript ES6+ (`const`, `let`, arrow functions, template literals)
- **Dependências de build:** Nenhuma — sem Webpack, Vite, Sass, TypeScript ou qualquer preprocessador
- **Dependência externa de runtime:** Zero — apenas Google Fonts CDN via `@import` no CSS (somente visual, sem impacto funcional offline)
- **CSS Custom Properties:** Toda a paleta de cores definida em variáveis CSS em `:root` para manutenibilidade
- **Compatibilidade:** Sem suporte a Internet Explorer — CSS moderno sem polyfills ou fallbacks legacy
- **Precisão numérica:** `parseFloat(result.toPrecision(12))` para normalizar resultados de ponto flutuante
- **Fonte offline:** Fallback stack `'Bangers', Impact, fantasy` definido no CSS

---

## 5. Epic List

> **Decisão de escopo:** Dado o tamanho reduzido do projeto (3 arquivos, sem backend), um único epic cobre o MVP completo. Cada story é um "vertical slice" completável por um agente AI em sessão única (2–4 horas). Stories são sequenciais — cada uma depende da anterior.

### Epic 1 — Calculadora Pop Art MVP

**Goal:** Entregar a calculadora web completa com identidade visual pop art e lógica matemática funcional, pronta para uso imediato via abertura direta do arquivo no navegador.

---

## 6. Epic 1 — Calculadora Pop Art MVP

**Objetivo expandido:** Construir os três arquivos da calculadora (HTML, CSS, JS) de forma incremental e sequencial. Cada story entrega uma camada completa e funcional — ao final do Epic 1, o projeto está 100% utilizável com identidade visual pop art e lógica de calculadora robusta.

---

### Story 1.1 — Estrutura HTML Semântica e Layout CSS Grid

Como **desenvolvedor e usuário final**,
quero uma estrutura HTML semântica com o layout de botões organizado em CSS Grid,
para que a calculadora tenha base sólida, acessível e visualmente organizada antes de qualquer estilização.

#### Acceptance Criteria

1. Arquivo `index.html` criado com doctype HTML5, `lang="pt-BR"`, `<meta charset="UTF-8">` e `<meta name="viewport">`
2. `<link>` para `style.css` e `<script src="script.js" defer>` presentes no `<head>`
3. `@import` para Google Fonts "Bangers" incluído em `style.css`
4. Estrutura semântica presente: `.calculator-wrapper` > `h1.title` + `.calculator` > `.display` + `.buttons`
5. Display com dois elementos: `#expression` (linha superior) e `#result` (linha inferior)
6. Grid de botões com exatamente 20 botões na ordem padrão de calculadora (AC, +/−, %, ÷, 7, 8, 9, ×, 4, 5, 6, −, 1, 2, 3, +, 0 [span 2], ., =)
7. Cada botão tem atributo `data-value` com seu valor e `aria-label` descritivo
8. Botões classificados por tipo com classes CSS: `.btn-number`, `.btn-operator`, `.btn-equals`, `.btn-clear`, `.btn-special`
9. `script.js` criado com estrutura básica (variáveis de estado vazias, event listeners não implementados)
10. Página abre no navegador sem erros no console, exibindo a estrutura básica (sem estilo)

---

### Story 1.2 — Tema Visual Pop Art Completo

Como **usuário final**,
quero que a calculadora tenha identidade visual pop art imediatamente reconhecível,
para que a experiência estética seja impactante desde a primeira abertura.

#### Acceptance Criteria

1. CSS Custom Properties definidas em `:root`: `--yellow`, `--red`, `--blue`, `--black`, `--white` com os valores exatos da paleta
2. Fundo da página com padrão Ben-Day dots: `radial-gradient` gerando pontos circulares azuis sobre fundo amarelo, repetição via `background-size`
3. Tipografia "Bangers" aplicada globalmente com fallback `Impact, fantasy`; todos os textos em `text-transform: uppercase`
4. `.calculator` com `background: white`, `border: 4px solid black`, `box-shadow: 6px 6px 0px black` e `border-radius` mínimo
5. `.display` estilizado como balão de quadrinho: `border: 3px solid black`, fundo branco, `text-align: right`, padding adequado
6. `#expression` com fonte menor (18–22px) e cor cinza escuro; `#result` com fonte maior (36–42px) e cor preta bold
7. Botões numéricos `.btn-number` com `background: var(--yellow)`, `border: 3px solid black`, `box-shadow: 3px 3px 0px black`
8. Botões de operação `.btn-operator` com `background: var(--red)`, mesma borda e sombra
9. Botão equals `.btn-equals` com `background: var(--blue)`, `color: white`, mesma borda e sombra
10. Botão clear `.btn-clear` com `background: var(--black)`, `color: white`, mesma borda e sombra
11. Título `h1.title` "POW! CALC!" com fonte Bangers grande (36–48px), cor preta, efeito de texto estilo quadrinho (text-shadow ou outline)
12. Botão `0` ocupa duas colunas no grid (`grid-column: span 2`)
13. Layout responsivo: calculadora centralizada na viewport, largura máxima de 340px, funciona em viewport de 375px (mobile)
14. Nenhuma imagem externa utilizada — todo visual gerado via CSS puro

---

### Story 1.3 — Lógica da Calculadora (State Machine JS)

Como **usuário final**,
quero que todas as operações matemáticas funcionem corretamente com tratamento de estados inválidos,
para que eu possa confiar na calculadora para cálculos do dia a dia.

#### Acceptance Criteria

1. State machine com variáveis: `currentValue` (string do número em construção), `previousValue` (string do operando anterior), `operator` (operador pendente), `shouldResetDisplay` (flag de reset)
2. Função `handleNumber(digit)`: acrescenta dígito ao display, respeita limite de 12 caracteres, ignora múltiplos pontos decimais
3. Função `handleOperator(op)`: armazena operador e `currentValue` em `previousValue`; se operador já pendente, substitui sem calcular
4. Função `calculate()`: executa a operação pendente usando `parseFloat`; resultado normalizado com `parseFloat(result.toPrecision(12))`; pressionar `=` repetidamente repete a última operação com o mesmo operando
5. Divisão por zero retorna a string `"ERROR! 💥"` e reseta o estado
6. Função `handleClear()`: reseta todas as variáveis de estado e exibe `0` no display de resultado e vazio no display de expressão
7. Função `handlePlusMinus()`: inverte o sinal do `currentValue` atual
8. Função `handlePercent()`: converte `currentValue` para percentual (`/ 100`)
9. Função `handleDecimal()`: adiciona `.` ao `currentValue` se ainda não houver ponto
10. Display `#expression` atualizado em tempo real mostrando a expressão (ex: `8 × 5`); display `#result` atualizado apenas após `=` ou operador
11. Todos os botões conectados via event listeners no `DOMContentLoaded`
12. Edge cases verificados manualmente: `0.1 + 0.2` retorna `0.3` (não `0.30000000004`), `5 ÷ 0` retorna `"ERROR! 💥"`, sequência `5 + =` retorna `10`

---

### Story 1.4 — Interações, Animações e Suporte a Teclado

Como **usuário final**,
quero feedback visual satisfatório ao interagir com a calculadora e poder usar o teclado,
para que a experiência seja completa, acessível e alinhada com a personalidade pop art do projeto.

#### Acceptance Criteria

1. Efeito de clique nos botões via CSS `:active`: `transform: translate(3px, 3px)` + `box-shadow` reduzida para `0px 0px 0px black` (simula afundamento físico)
2. Animação "POW!" implementada: elemento `.pow-animation` posicionado absolutamente sobre a calculadora, visível por 0.8s ao pressionar `=`, usando `@keyframes` CSS (escala de 0 a 1.2 e fade out)
3. Animação "POW!" adicionada via classe JS temporária (`.show-pow`) e removida após `animationend` event — não bloqueia input durante execução
4. Suporte a teclado implementado via `document.addEventListener('keydown')` com mapeamento:
   - `0–9` → dígitos correspondentes
   - `.` → decimal
   - `+`, `-`, `*`, `/` → operadores correspondentes
   - `Enter` ou `=` → calcular
   - `Escape` → AC (limpar)
   - `Backspace` → remover último dígito (bonus: não obrigatório no MVP)
5. Tecla pressionada dispara o mesmo estado visual do clique (classe `.active` adicionada e removida no botão correspondente)
6. Hover nos botões com leve brighten (`filter: brightness(1.1)`) e cursor `pointer`
7. Transição CSS suave nos botões: `transition: transform 0.1s, box-shadow 0.1s`
8. Testado em Chrome e Firefox: todas as teclas mapeadas funcionam corretamente
9. Animação "POW!" não interfere com operações rápidas consecutivas (múltiplos `=` em sequência)
10. Página final sem erros no console do navegador

---

## 7. Checklist Results Report

### PM Checklist — Validação do PRD

| # | Critério | Status | Observação |
|---|----------|--------|------------|
| 1 | Goals claros e mensuráveis | ✅ | 5 goals com KPIs verificáveis |
| 2 | Problem Statement com evidências | ✅ | Problema documentado no Brief |
| 3 | Target users definidos | ✅ | 2 segmentos (Brief seção 4) |
| 4 | Requisitos funcionais completos | ✅ | FR1–FR16 cobrem MVP completo |
| 5 | Requisitos não-funcionais presentes | ✅ | NFR1–NFR8 com valores concretos |
| 6 | UI/UX goals capturados | ✅ | Branding, plataformas, acessibilidade |
| 7 | Technical assumptions documentadas | ✅ | Stack, arquitetura, testing |
| 8 | Epic list lógica e sequencial | ✅ | 1 epic suficiente para escopo |
| 9 | Stories como vertical slices | ✅ | 4 stories sequenciais e autossuficientes |
| 10 | Acceptance criteria testáveis | ✅ | Cada AC é verificável manualmente |
| 11 | Out of scope explícito | ✅ | Documentado no Brief (seção 6) |
| 12 | Riscos identificados | ✅ | Documentados no Brief (seção 10) |
| 13 | Open questions resolvidas | ✅ | Todas as 4 OQs respondidas no Brief |
| 14 | Rastreabilidade Brief → PRD | ✅ | Todas as decisões originam do Brief |

**Resultado:** ✅ PRD aprovado — 14/14 critérios atendidos

---

## 8. Next Steps

### UX Expert Prompt

> **Para @ux-design-expert (Uma):** O PRD da Calculadora Pop Art está disponível em `docs/prd.md`. O projeto tem identidade visual detalhada (seção 3 — UI Goals): Ben-Day dots via CSS, tipografia Bangers, paleta primária bold (#FFE600, #FF0044, #0044FF), bordas pretas 3–4px, box-shadow offset, display estilo balão de quadrinho. Se desejar revisar a especificação visual ou criar um guia de estilo antes da implementação, use este PRD como insumo.

### Architect Prompt

> *Não aplicável — projeto client-side sem arquitetura de sistema a definir. As decisões técnicas estão completamente documentadas na seção 4 (Technical Assumptions): HTML5 + CSS3 + JS ES6 vanilla, sem frameworks, sem backend, 3 arquivos estáticos.*

### Dev Handoff

> **Para @dev (Dex):** PRD disponível em `docs/prd.md`. Implementar as 4 stories do Epic 1 em ordem sequencial: 1.1 (HTML estrutura) → 1.2 (CSS pop art) → 1.3 (JS lógica) → 1.4 (interações + teclado). Project Brief em `docs/brief.md` contém contexto adicional sobre decisões de design e edge cases.

---

*Documento gerado por Morgan (PM) · Synkra AIOX · 2026-05-07*
