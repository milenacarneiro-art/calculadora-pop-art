# Project Brief: Calculadora Pop Art

**Data:** 2026-05-07
**Versão:** 1.0
**Status:** Aprovado
**Autor:** Atlas (Analyst) — Synkra AIOX
**Insumos:** Sessão de brainstorming facilitada (29 ideias · 5 categorias · 10 recomendações priorizadas)

---

## Executive Summary

**Calculadora Pop Art** é uma calculadora web de página única com identidade visual inspirada no movimento pop art (Lichtenstein, Warhol, Haring) — bold, colorida e cheia de personalidade. O projeto resolve a falta de ferramentas funcionais com design expressivo e autoral, entregando uma experiência que combina utilidade com estética de quadrinho. Público-alvo: desenvolvedores, designers e entusiastas de cultura pop que valorizam interfaces com personalidade visual marcante. Valor principal: uma calculadora que é também um objeto visual — funciona perfeitamente e impressiona esteticamente.

---

## Problem Statement

**Estado atual:** Calculadoras web existentes são funcionalmente corretas mas visualmente genéricas — interfaces cinzas, tipografia sem personalidade, sem nenhuma identidade estética. Ferramentas como a calculadora nativa do sistema operacional ou Google Calculator priorizam utilidade pura, ignorando completamente a expressão visual.

**Impacto do problema:** Para desenvolvedores e designers que vivem em ambientes visuais ricos, usar uma ferramenta sem personalidade quebra o contexto estético do seu trabalho. Não existe uma calculadora web que seja simultaneamente confiável e visualmente marcante.

**Por que as soluções atuais falham:** As poucas calculadoras "temáticas" disponíveis ou são projetos abandonados, ou sacrificam a usabilidade pelo estilo — botões mal proporcionados, legibilidade comprometida, sem suporte a teclado.

**Urgência:** Com o crescimento de projetos de design system e portfólios criativos, existe uma oportunidade clara de criar uma referência de como utilidade e estética podem coexistir sem concessões.

---

## Proposed Solution

**Conceito central:** Uma calculadora web com três arquivos separados (HTML + CSS + JS vanilla) com identidade visual pop art completa — sem frameworks, sem dependências externas além de uma Google Font, abrindo instantaneamente em qualquer navegador.

**Abordagem:**
- Layout CSS Grid 4×5 com botões coloridos em paleta primária bold (amarelo #FFE600, vermelho #FF0044, azul #0044FF, preto)
- Fundo com padrão Ben-Day dots gerado 100% em CSS via `radial-gradient`
- Tipografia "Bangers" (Google Fonts) — lettering estilo comic book
- Bordas pretas 3–4px + box-shadow offset em todos os elementos (estética Lichtenstein)
- Animação "POW!" ao pressionar `=`, efeito de clique físico nos botões via `transform`
- Display duplo: expressão atual + resultado, estilo balão de quadrinho

**Diferenciais:**
- Usabilidade não sacrificada: suporte completo a teclado, ARIA labels, prevenção de estados inválidos
- Zero dependências de runtime — funciona offline, sem CDN de JS
- Visual imediatamente reconhecível como pop art sem precisar de explicação

**Por que vai funcionar:** A solução usa técnicas CSS maduras e acessíveis, não hacks frágeis. O resultado é um projeto portátil, manutenível e visualmente impressionante que pode ser aberto com duplo-clique no arquivo.

---

## Target Users

### Segmento Primário: Desenvolvedores & Designers Criativos

**Perfil:** Profissionais de tecnologia e design, 20–40 anos, que trabalham em projetos com forte identidade visual — portfólios, design systems, projetos pessoais. Familiarizados com cultura pop, arte contemporânea e referências visuais dos anos 60–80.

**Comportamentos atuais:** Usam calculadora nativa do SO ou Google Calculator por conveniência, mas sentem que essas ferramentas "quebram" o ambiente visual cuidadosamente construído ao seu redor.

**Necessidades específicas:** Uma ferramenta que funcione sem atrito (suporte a teclado, operações rápidas) e que possa ser deixada aberta sem "poluir" visualmente a tela.

**Goals:** Ter um ambiente de trabalho coeso visualmente, mesmo nas ferramentas utilitárias.

---

### Segmento Secundário: Estudantes de Desenvolvimento Web

**Perfil:** Estudantes e devs em início de carreira buscando referências de código bem estruturado e visualmente interessante para aprender ou usar como ponto de partida.

**Comportamentos atuais:** Buscam projetos open-source no GitHub e CodePen para estudar técnicas de CSS, animações e lógica JS.

**Necessidades específicas:** Código limpo, comentado, com padrões modernos de CSS (custom properties, grid, keyframes).

**Goals:** Aprender implementando ou adaptando um projeto real com resultado visual gratificante.

---

## Goals & Success Metrics

### Objetivos de Negócio

- **Entregar MVP funcional em sessão única** — projeto completo em 1 dia de desenvolvimento, sem iterações longas
- **Demonstrar que estética e usabilidade coexistem** — nenhuma operação básica deve falhar por causa de decisão visual
- **Criar referência técnica reutilizável** — código serve como template para outros projetos temáticos

### Métricas de Sucesso do Usuário

- **Operações sem erro:** Usuário consegue executar 10 cálculos consecutivos sem estado inválido
- **Curva zero de aprendizado:** Layout intuitivo — usuário opera sem ler documentação
- **Experiência visual imediata:** Primeira impressão "isso é pop art" sem precisar de contexto

### KPIs

- **Funcionalidade:** 100% das operações básicas (+, −, ×, ÷, %, +/−) funcionando corretamente
- **Acessibilidade:** Todas as operações executáveis via teclado
- **Performance:** Carregamento < 1s em conexão padrão (arquivo leve, sem JS pesado)
- **Visual fidelity:** Padrão Ben-Day, tipografia Bangers e paleta primária presentes e corretos
- **Robustez:** Divisão por zero e estados inválidos tratados com mensagem clara

---

## MVP Scope

### ✅ Core Features (Must Have)

- **Operações básicas:** `+` `−` `×` `÷` com display de expressão + resultado em duas linhas
- **Funções auxiliares:** `AC` (limpar tudo), `+/−` (inverter sinal), `%` (percentual), `.` (decimal)
- **Identidade visual pop art completa:**
  - Fundo Ben-Day dots via CSS `radial-gradient`
  - Tipografia "Bangers" (Google Fonts)
  - Paleta primária bold: amarelo #FFE600, vermelho #FF0044, azul #0044FF
  - Bordas pretas 3–4px + box-shadow offset em todos os elementos
  - Título "POW! CALC!" estilo starburst
- **Animação "POW!"** ao pressionar `=` — keyframe CSS, aparece e some
- **Efeito de clique físico** nos botões via `transform: translate` + sombra reduzida
- **Display estilo balão de quadrinho** com borda espessa e layout duplo
- **Suporte a teclado** com feedback visual idêntico ao clique
- **Tratamento de estados inválidos:** divisão por zero, duplo operador, overflow de dígitos

### ❌ Out of Scope para MVP

- Toggle de tema (Warhol / Lichtenstein / Haring)
- Histórico de cálculos com localStorage
- Efeitos sonoros nos botões
- Cursor CSS customizado (starburst)
- Easter egg Keith Haring (`1337`)
- Animações por operador (`+` = "PLUS!", `×` = "POW!", `÷` = "ZAP!", `−` = "SLASH!")
- Modo científico (sin, cos, log)
- PWA / instalação offline

### Critério de Sucesso do MVP

O MVP é bem-sucedido quando: (1) todas as operações básicas funcionam corretamente, (2) o visual é imediatamente reconhecível como pop art, (3) o arquivo abre com duplo-clique sem configuração, e (4) o suporte a teclado está operacional.

---

## Post-MVP Vision

### Phase 2 Features

Funcionalidades validadas no brainstorming com alto valor mas esforço maior — prontas para implementar após MVP estável:

- **Toggle de temas artísticos** — alternar entre paleta Lichtenstein (primários), Warhol (neons) e Haring (contornos neon + preto) via botão discreto na interface
- **Histórico de cálculos** — painel lateral estilo tirinha de quadrinho com os últimos 10 resultados, persistido via `localStorage`
- **Animações por operador** — cada operação tem sua onomatopeia: `+` = "PLUS!", `×` = "POW!", `÷` = "ZAP!", `−` = "SLASH!"
- **Easter egg Keith Haring** — digitar `1337` ativa paleta neon especial com contornos estilo Haring

### Long-term Vision

A calculadora evolui para uma **coleção de ferramentas utilitárias com temas artísticos** — conversor de unidades, contador de tempo, gerador de números aleatórios — cada uma com identidade visual de um movimento artístico diferente (pop art, bauhaus, art déco, minimalismo suíço). Um micro-projeto de design system que prova que ferramentas do dia a dia podem ter alma visual.

### Expansion Opportunities

- **Versão PWA** — instalável no desktop/mobile, funciona offline, com ícone customizado estilo starburst
- **Tema customizável** — usuário escolhe cores primárias e cria sua própria paleta pop art
- **Open source no GitHub** — repositório com README visual rico para atrair contribuições e servir como portfólio
- **Embed widget** — versão compacta para embutir em portfólios e sites pessoais via `<iframe>`

---

## Technical Considerations

### Platform Requirements

- **Target Platforms:** Web — qualquer navegador moderno (Chrome, Firefox, Safari, Edge)
- **Browser/OS Support:** Chromium 90+, Firefox 88+, Safari 14+ — CSS Grid, Custom Properties e `radial-gradient` são amplamente suportados
- **Performance Requirements:** Carregamento < 1s · Arquivo total < 50KB (incluindo fonte) · Zero requests de JS externo

### Technology Preferences

- **Frontend:** HTML5 semântico + CSS3 puro (Grid, Custom Properties, Keyframes) + JavaScript ES6 vanilla
- **Backend:** Não se aplica — projeto puramente client-side
- **Database:** Não se aplica no MVP · `localStorage` para histórico no Phase 2
- **Hosting/Infrastructure:** Nenhum necessário — arquivo estático abrível localmente · Opcionalmente GitHub Pages para distribuição

### Architecture Considerations

- **Repository Structure:** Três arquivos separados — `index.html`, `style.css`, `script.js` — para legibilidade e manutenibilidade
- **Service Architecture:** Single-page, sem rotas, sem estado persistido no MVP
- **Integration Requirements:** Google Fonts via `@import` no CSS (única dependência externa, apenas visual)
- **Security/Compliance:** Sem inputs de usuário transmitidos · Sem cookies · Sem dados coletados · ARIA labels para acessibilidade básica (WCAG 2.1 AA parcial)

---

## Constraints & Assumptions

### Constraints

- **Budget:** Zero — projeto pessoal/educacional sem custos de infraestrutura ou licenças
- **Timeline:** MVP entregável em sessão única de desenvolvimento (estimativa: 2–4 horas de implementação)
- **Resources:** Desenvolvedor solo · Sem equipe de design separada · Sem processo de QA formal
- **Technical:** Sem frameworks JS (React, Vue, etc.) · Sem build tools (Webpack, Vite) · Sem preprocessadores CSS (Sass) · Compatibilidade com navegadores modernos apenas (sem IE11)

### Key Assumptions

- Usuário tem navegador moderno instalado — sem necessidade de polyfills
- Google Fonts está acessível no ambiente de uso (conexão à internet para carregamento da fonte)
- A paleta pop art escolhida (primários bold + Ben-Day dots) comunica "pop art" sem necessidade de onboarding
- Operações matemáticas básicas são suficientes para o público-alvo — não há demanda por funções científicas no MVP
- O valor estético do projeto justifica o esforço mesmo sem métricas de usuários reais pré-validadas
- Três arquivos separados (`index.html`, `style.css`, `script.js`) são preferíveis a um único arquivo para fins educacionais

---

## Risks & Open Questions

### Key Risks

- **Legibilidade comprometida pelo tema:** Cores vibrantes e tipografia bold podem dificultar a leitura dos números no display — *Impacto: alto · Mitigação: alto contraste entre texto e fundo do display, fundo branco com texto preto/azul escuro*
- **Fonte Bangers ilegível em tamanhos pequenos:** Em telas pequenas (mobile), o lettering estilo comic pode perder clareza — *Impacto: médio · Mitigação: tamanho mínimo de fonte definido, teste em viewport 375px*
- **Conflito entre personalidade visual e usabilidade:** Animações e efeitos excessivos podem distrair da operação — *Impacto: médio · Mitigação: animações sutis, curtas (< 0.3s) e não-bloqueantes*
- **Lógica de calculadora com edge cases:** Estados como `0.1 + 0.2`, operadores consecutivos, ou resultado muito longo — *Impacto: alto · Mitigação: state machine simples com validação em cada input*
- **Dependência de Google Fonts offline:** Sem internet, a fonte cai para fallback do sistema — *Impacto: baixo · Mitigação: definir fallback stack com fonte similar (`Impact, fantasy`)*

### Open Questions — Resolvidas

- **`=` múltiplos consecutivos** → repetir última operação
- **Display live vs. pós-`=`** → mostrar resultado apenas após pressionar `=`
- **Limite de dígitos** → máximo 12 dígitos, truncar com notação científica
- **Animação "POW!" bloqueia input?** → não, roda em paralelo

### Areas Needing Further Research

- Paleta de cores exata: verificar contraste WCAG entre amarelo #FFE600 e texto preto (ratio mínimo 4.5:1)
- Comportamento de `parseFloat` vs precisão decimal em JS para evitar `0.1 + 0.2 = 0.30000000004`
- Suporte a `@font-face` local como alternativa ao Google Fonts CDN para uso offline

---

## Appendices

### A. Research Summary

**Fonte:** Sessão de brainstorming facilitada por Atlas (2026-05-07)
**Participantes simulados:** Atlas (Analyst), Uma (UX Expert), Dex (Dev), Aria (Architect)

**Principais findings:**
- **29 ideias geradas** em 3 rounds de ideação divergente
- **5 categorias identificadas:** Identidade Visual, Interação & Animação, Estrutura & Arquitetura, Features Avançadas, Personalidade & Easter Eggs
- **Top 3 por ROI:** Tipografia Bangers (9.0), Efeito de clique CSS (8.0), Ben-Day dots radial-gradient (4.5)
- **Decisão de MVP:** Implementar Top 6 ideias (ROI > 3.0) para máximo impacto com esforço mínimo
- **Features diferidas para Phase 2:** Toggle de temas, histórico, efeitos sonoros, easter eggs

### B. References

- **Movimento Pop Art:** Roy Lichtenstein (Ben-Day dots, bordas grossas), Andy Warhol (paletas bold, repetição), Keith Haring (contornos neon)
- **Tipografia:** [Bangers — Google Fonts](https://fonts.google.com/specimen/Bangers)
- **CSS Ben-Day Dots:** Técnica com `radial-gradient` — padrão repetido de pontos circulares sobre fundo amarelo
- **Referência de calculadora:** Apple Calculator, Google Calculator — benchmarks de usabilidade a igualar
- **Acessibilidade:** WCAG 2.1 AA — contraste mínimo 4.5:1 para texto normal
- **Precisão decimal JS:** `Number.EPSILON` e `parseFloat(result.toPrecision(12))` como mitigação do problema `0.1 + 0.2`

---

## Next Steps

### Immediate Actions

1. Acionar **`@dev`** para implementação dos 3 arquivos (`index.html`, `style.css`, `script.js`) com base neste brief
2. Verificar **contraste WCAG** da paleta antes de finalizar CSS — amarelo #FFE600 com texto preto
3. Implementar **state machine** da calculadora com as Open Questions já resolvidas
4. Testar **edge cases** após implementação: `0.1 + 0.2`, divisão por zero, operadores consecutivos, overflow
5. Validar **visual fidelity**: Ben-Day dots, Bangers, bordas pretas, animação POW!

### PM Handoff

Este Project Brief fornece o contexto completo para a **Calculadora Pop Art**. O próximo passo natural é acionar `@dev` para implementação direta — o escopo está bem definido, as decisões técnicas estão tomadas e os edge cases estão mapeados. Alternativamente, `@pm` pode criar um PRD formal se o projeto evoluir para algo maior que um MVP single-session.

---

*Documento gerado por Atlas (Analyst) · Synkra AIOX · 2026-05-07*
