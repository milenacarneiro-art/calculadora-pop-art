# Epic 1 — Calculadora Pop Art MVP

**Objetivo expandido:** Construir os três arquivos da calculadora (HTML, CSS, JS) de forma incremental e sequencial. Cada story entrega uma camada completa e funcional — ao final do Epic 1, o projeto está 100% utilizável com identidade visual pop art e lógica de calculadora robusta.

---

## Story 1.1 — Estrutura HTML Semântica e Layout CSS Grid

Como **desenvolvedor e usuário final**,
quero uma estrutura HTML semântica com o layout de botões organizado em CSS Grid,
para que a calculadora tenha base sólida, acessível e visualmente organizada antes de qualquer estilização.

### Acceptance Criteria

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

## Story 1.2 — Tema Visual Pop Art Completo

Como **usuário final**,
quero que a calculadora tenha identidade visual pop art imediatamente reconhecível,
para que a experiência estética seja impactante desde a primeira abertura.

### Acceptance Criteria

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

## Story 1.3 — Lógica da Calculadora (State Machine JS)

Como **usuário final**,
quero que todas as operações matemáticas funcionem corretamente com tratamento de estados inválidos,
para que eu possa confiar na calculadora para cálculos do dia a dia.

### Acceptance Criteria

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

## Story 1.4 — Interações, Animações e Suporte a Teclado

Como **usuário final**,
quero feedback visual satisfatório ao interagir com a calculadora e poder usar o teclado,
para que a experiência seja completa, acessível e alinhada com a personalidade pop art do projeto.

### Acceptance Criteria

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
