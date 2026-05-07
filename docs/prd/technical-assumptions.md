# Technical Assumptions

## Repository Structure

**Single directory** — Sem monorepo/polyrepo formal. Três arquivos no diretório raiz do projeto:
```
Calculadora/
├── index.html
├── style.css
└── script.js
```

## Service Architecture

**Client-side only** — Sem backend, sem servidor, sem API. Arquivo estático abrível diretamente no navegador via `file://` ou servido por qualquer servidor estático (GitHub Pages, Netlify, etc.).

## Testing Requirements

**Manual** — Sem framework de testes automatizados para este escopo. Verificação manual dos casos de uso e edge cases listados nos critérios de aceitação das stories. Checklist de testes documentado na story de lógica JS.

## Additional Technical Assumptions

- **Linguagens:** HTML5 semântico + CSS3 (Grid, Custom Properties, Keyframes, `radial-gradient`) + JavaScript ES6+ (`const`, `let`, arrow functions, template literals)
- **Dependências de build:** Nenhuma — sem Webpack, Vite, Sass, TypeScript ou qualquer preprocessador
- **Dependência externa de runtime:** Zero — apenas Google Fonts CDN via `@import` no CSS (somente visual, sem impacto funcional offline)
- **CSS Custom Properties:** Toda a paleta de cores definida em variáveis CSS em `:root` para manutenibilidade
- **Compatibilidade:** Sem suporte a Internet Explorer — CSS moderno sem polyfills ou fallbacks legacy
- **Precisão numérica:** `parseFloat(result.toPrecision(12))` para normalizar resultados de ponto flutuante
- **Fonte offline:** Fallback stack `'Bangers', Impact, fantasy` definido no CSS
