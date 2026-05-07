# Requirements

## Functional Requirements

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

## Non-Functional Requirements

- **NFR1:** O tempo de carregamento total da página deve ser inferior a 1 segundo em conexão padrão
- **NFR2:** O tamanho total dos arquivos (HTML + CSS + JS) deve ser inferior a 50KB (excluindo fonte externa)
- **NFR3:** Nenhuma biblioteca JavaScript externa deve ser utilizada no runtime — apenas HTML, CSS e JS vanilla
- **NFR4:** A calculadora deve funcionar corretamente nos navegadores: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **NFR5:** Todos os botões devem ter `aria-label` descritivo para suporte a leitores de tela
- **NFR6:** A aplicação não deve transmitir dados do usuário, não deve usar cookies e não deve coletar informações pessoais
- **NFR7:** A precisão decimal deve ser tratada com `parseFloat(result.toPrecision(12))` para evitar o problema clássico de `0.1 + 0.2 = 0.30000000004`
- **NFR8:** A fonte "Bangers" deve ter fallback stack definido (`Impact, fantasy`) para uso sem conexão à internet
