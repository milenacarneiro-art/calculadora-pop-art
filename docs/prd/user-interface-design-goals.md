# User Interface Design Goals

## Overall UX Vision

Uma calculadora que comunica "pop art" instantaneamente — sem tutorial, sem onboarding. O usuário abre e já vê: cores vibrantes, Ben-Day dots, tipografia de quadrinho. A interação é imediata e satisfatória: botões que "afundam" fisicamente, animação "POW!" que celebra o resultado. A usabilidade é a de qualquer calculadora padrão — zero curva de aprendizado — mas a experiência visual é singular.

## Key Interaction Paradigms

- **Click / Touch:** Botões respondem com feedback visual imediato (efeito de afundamento via `transform`)
- **Keyboard:** Todas as operações mapeadas para teclas naturais; tecla pressionada recebe mesmo estado visual do clique
- **Display passivo:** O resultado aparece apenas após `=` — sem cálculo live enquanto o usuário digita
- **Feedback de erro:** Estados inválidos exibem mensagem clara no display, sem alertas modais

## Core Screens and Views

- **Tela única:** A calculadora é uma single-page application sem navegação. Toda a interface está visível em uma tela:
  - Título "POW! CALC!" (topo)
  - Display duplo (expressão + resultado)
  - Grid de botões 4×5

## Accessibility

**WCAG 2.1 AA Parcial:**
- ✅ Suporte completo a teclado
- ✅ `aria-label` em todos os botões
- ✅ Contraste de texto verificado (texto preto sobre amarelo #FFE600 — ratio ≥ 4.5:1 a confirmar)
- ❌ Screen reader completo fora do escopo MVP
- ❌ Alto contraste / modo escuro fora do escopo MVP

## Branding

Identidade visual ancorada no movimento pop art americano dos anos 1960:
- **Roy Lichtenstein:** Ben-Day dots no fundo, bordas pretas 3–4px, box-shadow offset, display estilo balão de quadrinho, paleta de primários puros
- **Andy Warhol:** Repetição de cores bold, amarelo vibrante #FFE600 como cor dominante dos números
- **Tipografia:** "Bangers" (Google Fonts) — lettering comic book, todas as letras maiúsculas
- **Onomatopeia:** "POW! CALC!" como título, animação "POW!" ao pressionar `=`

## Target Device and Platforms

**Web Responsive** — Desktop como plataforma primária. Layout adaptável para mobile (botões mínimo 60×60px para touch). Sem PWA no MVP.
