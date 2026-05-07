# Epic 1 — Calculadora Pop Art MVP

**ID:** EPIC-1
**Status:** Ready for Development
**Data:** 2026-05-07
**Autor:** Morgan (PM) — Synkra AIOX
**Fontes:** `docs/prd.md` · `docs/brief.md` · `docs/architecture.md`

---

## Epic Goal

Entregar a calculadora web completa com identidade visual pop art e lógica matemática funcional, pronta para uso imediato via abertura direta do arquivo no navegador — sem instalação, sem dependências de runtime, sem configuração.

## Epic Description

### Existing System Context

- **Current relevant functionality:** N/A — projeto greenfield, nenhum código existente
- **Technology stack:** HTML5 + CSS3 + JS ES6 vanilla (sem frameworks, sem build tools)
- **Integration points:** Google Fonts CDN (fonte Bangers — apenas visual, com fallback definido)

### Enhancement Details

- **O que será construído:** 3 arquivos (`index.html`, `style.css`, `script.js`) formando uma calculadora web com identidade visual pop art completa
- **Como integra:** Arquivos estáticos — CSS e JS linkados no HTML via `<link>` e `<script defer>`
- **Success criteria:** Todas as operações básicas funcionam + visual pop art imediatamente reconhecível + suporte completo a teclado + abertura via duplo-clique

### Complexity Assessment (por @architect)

| Dimensão | Score | Classe |
|----------|-------|--------|
| Scope | 1–2 | SIMPLE |
| Integration | 1 | SIMPLE |
| Infrastructure | 1 | SIMPLE |
| Knowledge | 1–2 | SIMPLE |
| Risk | 1–2 | SIMPLE |
| **Epic Total** | **25** | ✅ **SIMPLE** |

**Esforço estimado:** < 1 dia de desenvolvimento

---

## Stories

### Story 1.1 — Estrutura HTML Semântica e Layout CSS Grid

**Executor:** `@dev`
**Quality Gate:** `@architect`
**Quality Gate Tools:** `[html_validation, accessibility_check, semantic_review]`
**Esforço estimado:** < 1h
**Complexidade:** SIMPLE (score: 5)

**Descrição:** Criar `index.html` com estrutura semântica completa e `script.js` com esqueleto básico. Estabelece a fundação do projeto.

**Acceptance Criteria (resumo):**
1. `index.html` com doctype HTML5, charset, viewport
2. Links para `style.css` e `script.js defer`
3. Estrutura semântica: `.calculator-wrapper` > `h1.title` + `.calculator` > `.display` + `.buttons`
4. Display com `#expression` e `#result`
5. Grid de 20 botões com `data-value` e `aria-label`
6. Classes `.btn-number`, `.btn-operator`, `.btn-equals`, `.btn-clear`, `.btn-special`
7. `script.js` com estrutura básica (estado vazio + event listeners não implementados)
8. Abre no browser sem erros no console

**Quality Gates:**
- Pre-Commit: Validação HTML5, verificação de ARIA labels, estrutura semântica

**Dependencies:** Nenhuma — primeira story

---

### Story 1.2 — Tema Visual Pop Art Completo

**Executor:** `@dev`
**Quality Gate:** `@architect`
**Quality Gate Tools:** `[css_validation, visual_review, contrast_check]`
**Esforço estimado:** < 2h
**Complexidade:** SIMPLE (score: 6)

**Descrição:** Implementar `style.css` completo com identidade visual pop art — Ben-Day dots, Bangers, paleta primária bold, bordas grossas, sombras, display estilo balão, título POW! CALC!

**Acceptance Criteria (resumo):**
1. CSS Custom Properties em `:root` com paleta (#FFE600, #FF0044, #0044FF, #000)
2. Ben-Day dots no fundo via `radial-gradient` puro (sem imagens)
3. Tipografia Bangers com fallback `Impact, fantasy`
4. `.calculator` com borda 4px solid black + box-shadow 6px offset
5. `.display` estilo balão de quadrinho
6. `#expression` (18–22px) e `#result` (36–42px) estilizados
7. Variantes de botões com cores corretas (número=amarelo, operador=vermelho, iguais=azul, clear=preto)
8. Título `h1.title` "POW! CALC!" com Bangers 36–48px
9. Botão `0` com `grid-column: span 2`
10. Responsivo em viewport 375px

**Quality Gates:**
- Pre-Commit: Verificação de contraste WCAG (amarelo #FFE600 + preto), CSS válido

**Dependencies:** Story 1.1 (estrutura HTML deve existir)

---

### Story 1.3 — Lógica da Calculadora (State Machine JS)

**Executor:** `@dev`
**Quality Gate:** `@architect`
**Quality Gate Tools:** `[logic_review, edge_case_validation, precision_check]`
**Esforço estimado:** 1–2h
**Complexidade:** SIMPLE (score: 7)

**Descrição:** Implementar `script.js` com state machine completa — operações básicas, funções auxiliares, tratamento de edge cases e precisão decimal.

**Acceptance Criteria (resumo):**
1. State machine com 6 variáveis: `currentValue`, `previousValue`, `operator`, `shouldResetDisplay`, `lastOperator`, `lastOperand`
2. `handleNumber()` — dígitos, limite 12 chars, sem pontos duplicados
3. `handleOperator()` — armazena operando, substitui operador consecutivo
4. `calculate()` — executa com `parseFloat + toPrecision(12)`, repete `=` consecutivo
5. Divisão por zero → `"ERROR! 💥"` + reset estado
6. `handleClear()`, `handlePlusMinus()`, `handlePercent()`, `handleDecimal()`
7. `updateDisplay()` sincroniza DOM com estado
8. Todos os botões conectados via event listeners em `DOMContentLoaded`
9. Edge cases verificados: `0.1 + 0.2 = 0.3`, `5 ÷ 0 = "ERROR! 💥"`, `5 + = → 10`

**Quality Gates:**
- Pre-Commit: Revisão de lógica, verificação de edge cases, teste de precisão decimal

**Dependencies:** Story 1.2 (CSS deve estar completo para testes visuais integrados)

---

### Story 1.4 — Interações, Animações e Suporte a Teclado

**Executor:** `@dev`
**Quality Gate:** `@architect`
**Quality Gate Tools:** `[ux_review, animation_check, keyboard_validation]`
**Esforço estimado:** 1–2h
**Complexidade:** SIMPLE (score: 7)

**Descrição:** Adicionar efeito de clique físico nos botões, animação "POW!" ao pressionar `=`, hover states e suporte completo a teclado com feedback visual idêntico ao clique.

**Acceptance Criteria (resumo):**
1. `:active` nos botões: `transform: translate(3px, 3px)` + box-shadow `0 0 0 black`
2. `.pow-animation` posicionado absolutamente, visível 0.8s ao pressionar `=` via `@keyframes`
3. Animação POW! via classe JS temporária `.show-pow`, removida em `animationend` — não bloqueia input
4. Suporte a teclado: `0–9`, `.`, `+`, `-`, `*`, `/`, `Enter`/`=`, `Escape`/AC
5. Tecla pressionada dispara estado visual `.active` no botão correspondente
6. Hover: `filter: brightness(1.1)` + `cursor: pointer`
7. `transition: transform 0.1s, box-shadow 0.1s` nos botões
8. Testado em Chrome e Firefox
9. POW! não interfere com `=` rápido consecutivo
10. Console sem erros

**Quality Gates:**
- Pre-Commit: Teste de keyboard mapping, verificação de animações, testes cross-browser

**Dependencies:** Story 1.3 (lógica JS deve estar completa)

---

## Compatibility Requirements

- [x] Sem APIs existentes para manter compatibilidade (projeto greenfield)
- [x] Sem schema de banco de dados
- [x] Sem padrões de UI existentes (estilo definido pelo brief/prd)
- [x] Performance: carregamento < 1s, total < 50KB

## Risk Mitigation

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Legibilidade comprometida pelo tema | Baixa | Alto | Fundo branco no display, texto preto, contraste WCAG verificado |
| Precisão decimal (0.1 + 0.2) | Média | Alto | `parseFloat(result.toPrecision(12))` obrigatório em `calculate()` |
| Fonte Bangers offline | Alta | Baixo | Fallback `Impact, fantasy` definido no CSS |
| Animação POW! bloqueia input | Baixa | Médio | `animationend` event para remoção, não timeout fixo |

**Rollback Plan:** Cada story é um commit isolado — reverter story N não afeta stories anteriores.

## Quality Assurance Strategy

- **CodeRabbit:** Integrado via WSL — executado ao final de cada story antes de marcar como Done
- **Agente de Quality Gate:** `@architect` revisa cada story (arquitetura client-side, padrões CSS/JS)
- **Testes manuais:** Checklist de 40 itens distribuído pelas 4 stories (ver `docs/architecture.md` seção 15)
- **Risk level:** LOW — Feature totalmente isolada, sem impacto em sistemas existentes

## Definition of Done (Epic)

- [x] Story 1.1 status: Done
- [x] Story 1.2 status: Done
- [x] Story 1.3 status: Done
- [x] Story 1.4 status: Done
- [x] `index.html`, `style.css`, `script.js` criados e funcionais
- [x] Visual pop art: Ben-Day dots, Bangers, paleta primária, bordas grossas, POW! anim
- [x] Todas as operações básicas funcionam sem erro
- [x] Suporte a teclado completo
- [x] Abre com duplo-clique sem configuração
- [x] Console do browser sem erros

---

## Story Manager Handoff

> **Para @sm (River):** Epic 1 pronto para criação de stories formais. Criar 4 story files em `docs/stories/` usando `story-tmpl.yaml`. Sequência obrigatória: **1.1 → 1.2 → 1.3 → 1.4** (cada story depende da anterior). Acceptance criteria detalhados no PRD `docs/prd.md` seções 6.1–6.4. Arquitetura técnica em `docs/architecture.md`.

---

## References

| Documento | Path | Relevância |
|-----------|------|-----------|
| Project Brief | `docs/brief.md` | Contexto, decisões de design, features diferidas |
| PRD | `docs/prd.md` | FR1–FR16, NFR1–NFR8, ACs detalhados por story |
| Architecture | `docs/architecture.md` | Stack técnico, estrutura de arquivos, coding standards |

---

*Epic criado por Morgan (PM) · Synkra AIOX · 2026-05-07*
