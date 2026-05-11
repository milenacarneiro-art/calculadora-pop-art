# Task: Image Generation
## Squad Audiovisual Stark — AS-TP-006

## Task Anatomy (AS-TP-001)

```yaml
task_name: "Generate Visual Asset from Post Spec"
status: pending
responsible_executor: image-generator
execution_type: Hybrid
estimated_time: "15m-45m"
input:
  - "Post spec do @social-designer (obrigatório)"
  - "Arquivo HTML/CSS/JS (se produto já existe em código)"
  - "Optional: art direction document"
output:
  - "Imagem gerada fiel ao spec"
  - "Score de fidelidade (4 dimensões)"
  - "Ferramenta usada e prompt documentado"
  - "Próximo passo (design-critic ou iteração)"
action_items:
  - "Ler e extrair elementos visuais do spec"
  - "Selecionar ferramenta correta"
  - "Construir prompt estruturado"
  - "Gerar imagem"
  - "Avaliar fidelidade spec vs output"
  - "Iterar se necessário (máx 3x)"
  - "Documentar resultado e handoff"
acceptance_criteria:
  - "Imagem gerada com composição fiel ao spec"
  - "Cores correspondem aos hex values especificados"
  - "Dimensões corretas para a plataforma"
  - "Ferramenta selecionada documentada"
  - "Prompt documentado para reprodução"
  - "Score de fidelidade >= 7/10"
```

---

## Workflow: Geração de Imagem a partir de Post Spec

### Prerequisite Check

Antes de iniciar:
- [ ] Post spec do @social-designer está disponível
- [ ] Spec contém: elemento principal, fundo, tipografia, cores hex, dimensões
- [ ] Verificado se produto existe em código (HTML/CSS) no projeto

---

### Phase 1: Extração do Spec

Ler o post spec e extrair em formato estruturado:

```markdown
## Extração do Spec

**Elemento principal:** [produto, objeto, screenshot]
**Fundo:** [cor hex, padrão, textura]
**Tipografia:** [fonte, tamanho, cor, posição, texto exato]
**Paleta:** [hex values em ordem de dominância]
**Composição:** [posicionamento, escala, ângulo]
**Dimensões:** [largura × altura px]
**Estilo visual:** [movimento artístico, referências]
**Anti-referências:** [o que não deve aparecer]
```

---

### Phase 2: Seleção de Ferramenta

Aplicar o Tool Selection Matrix:

```
DECISÃO 1: O produto/interface existe como arquivo HTML/CSS no projeto?
  SIM → usar Claude Preview MCP (*render-preview)
  NÃO → ir para DECISÃO 2

DECISÃO 2: Adobe Firefly MCP está disponível?
  SIM → usar Adobe Firefly para geração generativa
  NÃO → gerar prompt otimizado para ferramenta externa
```

**Documentar a decisão:**
```
Ferramenta selecionada: [nome]
Motivo: [justificativa de 1-2 frases]
Plano de execução: [passos específicos]
```

---

### Phase 3A: Render com Claude Preview (se HTML/CSS existe)

```markdown
## Plano de Render

1. Iniciar preview do arquivo
   - Tool: mcp__Claude_Preview__preview_start
   - Path: [caminho do index.html]

2. Ajustar viewport para dimensão correta
   - Tool: mcp__Claude_Preview__preview_resize
   - Dimensões: [largura baseada no spec]

3. Capturar screenshot
   - Tool: mcp__Claude_Preview__preview_screenshot
   - Output: screenshot do produto real

4. Avaliar screenshot:
   - O produto está visível e nítido?
   - Proporções corretas?
   - Elementos visuais correspondem ao spec?
```

**Nota:** O render via Preview captura o produto real — não uma aproximação.
Use este resultado como elemento principal na composição.

---

### Phase 3B: Geração com Adobe Firefly

**Inicialização obrigatória:**
```
SEMPRE chamar adobe_mandatory_init antes de qualquer ferramenta Adobe.
```

**Construir prompt seguindo a estrutura:**

```markdown
## Prompt Firefly

**Prompt positivo:**
"[estilo visual], [elemento principal com detalhes técnicos],
[composição: posição, escala, ângulo], [fundo: cor hex, padrão],
[tipografia: fonte, texto, cor, posição], [iluminação],
[formato: dimensões e uso]"

**Negative prompt:**
"[lista do que excluir: fotorrealismo, cores fora da paleta,
fontes não especificadas, elementos não especificados]"

**Parâmetros técnicos:**
- Dimensões: [width × height]
- Estilo de referência: [nome do estilo ou artista]
- Fidelidade de cor: alta
```

**Ferramentas Firefly disponíveis para este workflow:**
```
adobe_mandatory_init          → inicialização obrigatória
image_fill_area               → preencher área com geração
image_apply_halftone          → efeito Ben-Day/halftone
change_background_color       → trocar cor de fundo
fill_text                     → adicionar texto/tipografia
image_remove_background       → isolar elemento principal
image_crop_and_resize         → ajustar dimensões finais
image_apply_color_overlay     → aplicar cor sobre imagem
asset_inline_preview          → visualizar resultado inline
```

---

### Phase 3C: Prompt para Ferramenta Externa (fallback)

Quando MCPs indisponíveis ou usuário prefere Midjourney/DALL-E:

```markdown
## Prompt Otimizado — [FERRAMENTA]

### Para Midjourney:
/imagine [estilo] [elemento principal] [composição] [cores],
[tipografia], [formato] --ar [ratio] --style raw --v 6

### Para DALL-E (ChatGPT):
Crie uma imagem de: [descrição completa seguindo a estrutura do spec]
Estilo: [referências artísticas]
Cores exatas: [hex values]
Composição: [descrição detalhada]
Formato: [dimensões]
Não incluir: [anti-prompt]

### Para Adobe Firefly (web):
[prompt positivo]
Negative: [prompt negativo]
Aspect ratio: [ratio]
Content type: Art
Visual intensity: High
```

---

### Phase 4: Avaliação de Fidelidade

Comparar output gerado com o spec original:

```markdown
## Score de Fidelidade

| Dimensão | Spec | Output | Fiel? | Score |
|----------|------|--------|-------|-------|
| Composição | [spec] | [output] | ✅/❌ | /10 |
| Cores | [hex values] | [cores geradas] | ✅/❌ | /10 |
| Tipografia | [fonte + texto] | [tipo gerado] | ✅/❌ | /10 |
| Elemento principal | [spec] | [output] | ✅/❌ | /10 |

**Score médio: [X]/10**

Threshold mínimo para prosseguir: 7/10
```

**Se score >= 7:** → Phase 5 (handoff para @design-critic)
**Se score < 7:** → Phase 4B (iteração)

---

### Phase 4B: Iteração (máximo 3x)

```markdown
## Registro de Iteração [N]

**O que não atendeu ao spec:**
- [dimensão que falhou]: esperado [X], gerado [Y]

**Ajuste no prompt:**
- [o que foi modificado e por quê]

**Nova tentativa...**
```

**Após 3 iterações sem atingir score >= 7:**
→ Escalar para @art-director com relatório completo das 3 tentativas
→ NÃO continuar gerando indefinidamente

---

### Phase 5: Handoff

```markdown
## Handoff para @design-critic

**Imagem gerada:** [descrição ou link/referência]
**Ferramenta usada:** [nome]
**Prompt documentado:** [prompt final que gerou o resultado]
**Score de fidelidade:** [X]/10
**Dimensões:** [width × height px]
**Formato:** [JPG/PNG]

**Divergências do spec (se houver):**
- [item 1: o que diferiu e por quê foi aceito]

**Próximo passo:** @design-critic *validate
```

---

## Quality Checklist

Antes de declarar geração completa:
- [ ] Spec foi completamente lido e extraído
- [ ] Ferramenta selecionada com justificativa documentada
- [ ] Prompt estruturado com todos os 8 campos
- [ ] Imagem gerada e score de fidelidade calculado
- [ ] Score >= 7/10 ou escalação para @art-director documentada
- [ ] Prompt final documentado para reprodução
- [ ] Handoff preparado para @design-critic
