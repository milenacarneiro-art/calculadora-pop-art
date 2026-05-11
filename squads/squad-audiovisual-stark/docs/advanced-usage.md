# Advanced Usage Guide
## Squad Audiovisual Stark — AS-DOC-001

---

## Overview

Este guia cobre padrões avançados de uso do `squad-audiovisual-stark`. Para uso básico, consulte o `README.md`.

---

## 1. Modos de Execução

### 1.1 Modo Orquestrado (Recomendado para projetos completos)

O `@studio-chief` roteia automaticamente para os agentes corretos baseado no tipo de projeto.

```
@studio-chief *orchestrate

> Qual o tipo de projeto?
> [brand_identity / social_media / landing_page / ux_interface / motion / full_campaign]
```

**Quando usar:**
- Projetos novos sem brief definido
- Projetos multi-deliverable (ex: identidade + social + landing)
- Quando não tem certeza de qual agente usar

**Fluxo completo:** `wf-full-project.yaml` — ver `workflows/` para detalhes

---

### 1.2 Modo Direto (Acesso a agente específico)

Quando já sabe exatamente o que precisa, ative o agente diretamente:

```
@brief-analyst *brief
@brand-strategist *brand-strategy
@art-director *art-direction
@identity-designer *create-identity
@social-designer *create-post
@landing-designer *landing-concept
@ux-ui-designer *ux-audit
@motion-designer *motion-concept
@design-critic *review
```

**Quando usar:**
- Brief já existe e validado
- Iteração rápida em um deliverable específico
- Review isolado sem refazer o processo completo

---

### 1.3 Modo Review Rápido

Para auditar um trabalho existente sem passar pelo processo completo:

```
@design-critic *review
> Forneça: descrição do deliverable + brief original

@ux-ui-designer *ux-audit
> Forneça: interface/página + objetivo do usuário

@landing-designer *landing-audit
> Forneça: URL ou descrição da landing page
```

---

## 2. Padrões de Workflow

### 2.1 Workflow: Identidade Visual Completa

```
1. @brief-analyst *brief
   → brief score >= 7/8 obrigatório

2. @brand-strategist *brand-strategy
   → onliness statement + personalidade da marca

3. @art-director *art-direction
   → sistema visual: tipografia + cor + composição

4. @identity-designer *create-identity
   → logo system + brand applications

5. @identity-designer *brand-guide
   → manual da marca completo

6. @design-critic *review
   → GO/NO-GO com score >= 7.0/10
```

**Tempo estimado:** 2h – 4h
**Deliverables:** Logo (4 versões), manual da marca, aplicações

---

### 2.2 Workflow: Pack de Redes Sociais

```
1. @brief-analyst *brief
   → foco: persona, plataformas, objetivo de comunicação

2. @art-director *art-direction (simplificado)
   → direção visual: referências + paleta + fonte

3. @social-designer *content-strategy
   → estratégia de conteúdo + arquitetura de feed

4. @social-designer *create-post (para cada formato)
   → posts, stories, carrosséis

5. @design-critic *review
   → validação final
```

**Tempo estimado:** 1h – 2.5h
**Deliverables:** Templates de post, stories, carrossel, estratégia de conteúdo

---

### 2.3 Workflow: Landing Page de Conversão

```
1. @brief-analyst *brief
   → foco: objetivo de conversão único, persona, CTA principal

2. @brand-strategist *brand-personality
   → personalidade da marca para tom do copy

3. @landing-designer *landing-concept
   → arquitetura da página (CURE framework)

4. @art-director *layout
   → composição visual da página

5. @ux-ui-designer *heuristic-review
   → auditoria H1-H10 (foco em H3, H5, H8)

6. @landing-designer *conversion-audit
   → attention ratio + friction points

7. @design-critic *review
   → GO/NO-GO final
```

**Tempo estimado:** 2h – 4h
**Deliverables:** Wireframe, design final, relatório de conversão

---

### 2.4 Workflow: Naming de Marca

```
1. @brief-analyst *diagnose
   → contexto do negócio + diferenciadores

2. @brand-strategist *naming
   → aplicação dos 7 filtros de naming
   → 5-10 candidatos iniciais

3. @brand-strategist *differentiation
   → teste de diferenciação dos candidatos

4. @brand-strategist *brand-personality
   → validação: o nome comunica a personalidade?

5. @design-critic *validate
   → revisão de coerência estratégica
```

**Tempo estimado:** 1h – 2h
**Deliverables:** 3-5 opções rankeadas com justificativa

---

## 3. Configurações Avançadas

### 3.1 Modo YOLO vs Interativo

Cada agente opera em dois modos:

| Modo | Comportamento | Quando usar |
|------|--------------|-------------|
| **YOLO** | Executa sem perguntar, usa defaults | Projetos simples, iterações rápidas |
| **Interativo** | Faz perguntas-chave antes de executar | Projetos novos, alto risco, cliente novo |

Para forçar modo interativo:
```
@studio-chief *orchestrate --interactive
```

Para YOLO explícito:
```
@brief-analyst *brief --yolo
```

---

### 3.2 Referências entre Agentes

Ao passar de um agente para outro, sempre forneça o documento gerado:

```
# Correto ✅
@art-director *art-direction
> Aqui está o brief validado: [cole o brief]
> Aqui está a estratégia de marca: [cole a estratégia]

# Errado ❌
@art-director *art-direction
> Faça a direção de arte
```

---

### 3.3 Iteração com Design Critic

O `@design-critic` usa 7 critérios ponderados. Se receber **NO-GO**, o relatório especifica:

- Qual critério falhou
- Por que é blocking
- O que especificamente corrigir
- Para qual agente rotear

**Fluxo de iteração:**

```
@design-critic *review → NO-GO

→ Critério 1 (Brief Alignment) falhou?
  Volte para @brief-analyst ou @art-director

→ Critério 2 (Audience Fit) falhou?
  Volte para @art-director ou @brand-strategist

→ Critério 3 (Message Clarity) falhou?
  Volte para @art-director

→ Critério 4 (Technical Quality) falhou?
  Corrija no agente que criou o deliverable

→ Critério 5 (System Consistency) falhou?
  Volte para @identity-designer ou @art-director

→ Critério 6 ou 7 falhou?
  Refinamento com o agente responsável
```

**Máximo 2 iterações antes de escalar para @studio-chief.**

---

## 4. Templates e Checklists

### 4.1 Usar Templates

Os templates em `templates/` são estruturas base para documentos:

| Template | Quando usar |
|----------|------------|
| `creative-brief-tmpl.md` | Sempre que iniciar um projeto novo |
| Mais templates via `@studio-chief *status` | Ver lista completa |

Para usar um template:
```
@brief-analyst *brief
> Use o template AS-DP-001 para estruturar o brief
```

---

### 4.2 Usar Checklists

O `checklists/design-quality-checklist.md` (AS-QG-001) serve como:

1. **Self-check** antes de solicitar revisão do @design-critic
2. **Critério de aceitação** para aprovação de deliverables
3. **Documentação** de qualidade para o cliente

**Seções críticas:**
- Section A (Strategic Alignment): QUALQUER falha = AUTO NO-GO
- Section B (Visual System): itens B1-B10 peso mais alto na nota geral

---

## 5. Conhecimento dos Agentes

### 5.1 Expert Clone Behavior

Os agentes Tier 1 e Tier 2 são expert clones. Eles:

- **Citam frameworks reais** (Neumeier, Norman, Scher, Bass, Gardner, Bierut, Heller)
- **Usam terminologia técnica** da área
- **Tomam decisões opinionadas** — não entregam "opções neutras"
- **Defendem a decisão certa** mesmo que contrarie o pedido inicial

**Exemplo de comportamento esperado:**

```
# Input: "quero o logo em Comic Sans"

# @art-director (Paula Scher) vai responder:
"Comic Sans não é Comic Sans — é uma escolha que comunica falta de
intenção. O que você quer comunicar com leveza e acessibilidade pode
ser resolvido com [alternativa específica] que tem craft sem ser genérica.
Posso mostrar 3 opções que atingem o mesmo objetivo com credibilidade?"
```

---

### 5.2 Knowledge Base (KB)

O arquivo `data/squad-audiovisual-stark-kb.md` (AS-KB-001) contém:
- Conceitos fundamentais de todas as disciplinas do squad
- Boas práticas consolidadas
- Anti-patterns documentados
- Glossário de 40+ termos

Os agentes referenciam o KB automaticamente via `command_loader`. Não é necessário mencioná-lo explicitamente.

---

## 6. Integração com AIOX

### 6.1 Handoff entre Squads

Se o projeto exigir capacidades fora do squad audiovisual:

```
# Para desenvolvimento técnico (código):
→ Acione @dev (Dex) do AIOX core

# Para estratégia de produto:
→ Acione @pm (Morgan) do AIOX core

# Para análise de mercado aprofundada:
→ Acione @analyst (Atlas) do AIOX core
```

**O @studio-chief reconhece quando escalar** e sinaliza explicitamente.

---

### 6.2 Git & Entrega

O squad não faz push direto. Para commitar trabalho criativo:

```
# Após aprovação do @design-critic
@devops *push
> Squad audiovisual stark — [nome do projeto] — GO aprovado por @design-critic
```

---

## 7. Troubleshooting

### "O agente não sabe o que fazer"

**Causa:** Contexto insuficiente.
**Fix:** Forneça sempre o brief ou objetivo antes de qualquer comando.

```
# Sempre forneça contexto:
@social-designer *create-post
> Contexto: empresa de skincare, persona mulher 25-35, objetivo aumentar engajamento,
> plataforma Instagram, tom: sofisticado mas acessível, produto: sérum vitamina C
```

---

### "O brief está travado abaixo de 7/8"

**Causa:** Um ou mais blocos do 8-block incompletos.
**Fix:** Peça ao @brief-analyst para identificar os blocos faltantes:

```
@brief-analyst *validate-brief
> O score está em 5/8. Quais blocos precisam de mais informação?
```

---

### "Ciclo de NO-GO repetido"

**Causa:** Problema na fase de briefing ou estratégia, não no design.
**Fix:** Retorne à fase 1:

```
@brief-analyst *diagnose
> O @design-critic retornou NO-GO por Brief Alignment (score 4/10).
> O problema original era: [descreva]
> Preciso redefinir o brief.
```

---

### "Preciso de um formato não coberto pelos agentes"

**Causa:** Deliverable fora do escopo padrão.
**Fix:** Use @studio-chief para adaptar:

```
@studio-chief *brief
> Preciso de [formato específico] que não é um formato padrão.
> Pode me guiar para o agente mais adequado?
```

---

## 8. Referência Rápida de Comandos

| Agente | Comando Principal | Para que serve |
|--------|------------------|----------------|
| `@studio-chief` | `*orchestrate` | Iniciar projeto orquestrado |
| `@studio-chief` | `*status` | Ver status do projeto |
| `@brief-analyst` | `*brief` | Criar brief do zero |
| `@brief-analyst` | `*validate-brief` | Validar brief existente |
| `@brand-strategist` | `*brand-strategy` | Estratégia completa |
| `@brand-strategist` | `*naming` | Processo de naming |
| `@art-director` | `*art-direction` | Direção de arte completa |
| `@art-director` | `*moodboard` | Referências visuais |
| `@identity-designer` | `*create-identity` | Sistema de identidade |
| `@identity-designer` | `*brand-guide` | Manual da marca |
| `@social-designer` | `*content-strategy` | Estratégia de conteúdo |
| `@social-designer` | `*feed-design` | Design do feed |
| `@landing-designer` | `*landing-concept` | Landing page completa |
| `@landing-designer` | `*conversion-audit` | Auditoria de conversão |
| `@ux-ui-designer` | `*ux-audit` | Auditoria H1-H10 |
| `@motion-designer` | `*motion-concept` | Conceito de motion |
| `@motion-designer` | `*logo-animation` | Animação de logo |
| `@design-critic` | `*review` | Review GO/NO-GO |

---

*Guia: AS-DOC-001 — Squad Audiovisual Stark v1.0*
*Última atualização: 2026-05-11*
