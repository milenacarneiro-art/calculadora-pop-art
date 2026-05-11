# 🎨 Audiovisual Stark Squad

## Overview

O **squad-audiovisual-stark** é um squad especializado em design criativo para agências de comunicação, equipes audiovisuais e estúdios de design. Reúne 10 agentes baseados nas metodologias dos maiores praticantes da área: Marty Neumeier (branding), Paula Scher (direção de arte), Don Norman (UX), Michael Bierut (identidade), Saul Bass (motion), entre outros.

Criado para a **Stark** e sua equipe audiovisual, o squad cobre o ciclo completo de produção criativa: do brief estratégico à execução de peças para social media, identidade visual, landing pages e motion design.

---

## Purpose

Este squad existe para ser o **parceiro criativo inteligente** da equipe audiovisual da Stark. Ele fornece:

- **Estrutura metodológica** para projetos de design sem improvisar
- **Especialistas virtuais** baseados em mestres reais do design mundial
- **Fluxo orquestrado** do brief ao entregável final
- **Crítica construtiva** para elevar a qualidade de cada peça

Qualquer membro da equipe — do designer júnior ao diretor criativo — pode acionar um agente especialista para obter orientação precisa e fundamentada.

---

## When to Use This Squad

Use `squad-audiovisual-stark` quando você quiser:

- 🎯 **Desenvolver uma identidade visual** do zero (naming, logo, tipografia, paleta, tom de voz)
- 📱 **Criar posts para redes sociais** com estratégia de comunicação e hierarquia visual
- 🖥️ **Projetar landing pages** que convertem com UX sólido
- 🎬 **Conceber animações e motion design** para reels, vídeos e apresentações
- 🔍 **Auditar um design existente** e receber feedback especializado
- 📋 **Estruturar um creative brief** completo antes de qualquer produção
- 🗂️ **Definir estratégia de marca** para novos clientes ou reposicionamentos
- ✏️ **Orientar a equipe** com diretrizes de arte e sistema de design

---

## What's Included

### Agents

| Agente | Tier | Especialidade |
|--------|------|---------------|
| `studio-chief` | Orchestrator | Diretor de estúdio — orquestra todos os agentes |
| `brief-analyst` | Tier 0 | Diagnóstico e estruturação do creative brief |
| `brand-strategist` | Tier 1 | Estratégia de marca (Marty Neumeier) |
| `art-director` | Tier 1 | Direção de arte e linguagem visual (Paula Scher) |
| `ux-ui-designer` | Tier 1 | Experiência do usuário e interfaces (Don Norman) |
| `social-designer` | Tier 2 | Design para redes sociais e conteúdo |
| `identity-designer` | Tier 2 | Sistemas de identidade visual (Michael Bierut) |
| `motion-designer` | Tier 2 | Motion graphics e animação (Saul Bass) |
| `landing-designer` | Tier 2 | Landing pages e conversão (Oli Gardner) |
| `design-critic` | Tier 3 | Crítica e revisão de design (Steven Heller) |

### Tasks

| Task | Descrição |
|------|-----------|
| `brief-analysis.md` | Estrutura o creative brief completo |
| `brand-strategy.md` | Desenvolve a estratégia de marca |
| `art-direction.md` | Define linguagem visual e diretrizes de arte |
| `ux-audit.md` | Audita interfaces e experiências |
| `design-review.md` | Revisão crítica de peças prontas |

### Templates

| Template | Descrição |
|----------|-----------|
| `creative-brief-tmpl.md` | Template completo de creative brief |

### Checklists

| Checklist | Descrição |
|-----------|-----------|
| `design-quality-checklist.md` | 20-ponto validação de qualidade de design |

---

## Installation

Este squad já está instalado em `squads/squad-audiovisual-stark/`.

Para instalar em outro projeto AIOX:

```bash
npm run install:squad squad-audiovisual-stark
```

---

## Usage Examples

### Exemplo 1: Criar identidade visual para novo cliente

```
@studio-chief
> Preciso criar a identidade visual completa para uma cafeteria artesanal em São Paulo

# studio-chief orquestra:
1. @brief-analyst → estrutura o brief
2. @brand-strategist → define posicionamento e personalidade da marca
3. @identity-designer → cria o sistema visual (logo, cores, tipografia)
4. @design-critic → valida a identidade
```

### Exemplo 2: Criar posts para Instagram

```
@social-designer
*create-post

# social-designer guia:
- Formato, dimensões e hierarquia visual
- Estratégia de comunicação por tipo de post
- Templates e sistema de grade
- Copy e CTA
```

### Exemplo 3: Auditar landing page existente

```
@ux-ui-designer
*ux-audit

# ux-ui-designer entrega:
- Análise de usabilidade (Norman's 10 Heuristics)
- Mapa de problemas e severidade
- Recomendações priorizadas
- Fluxo ideal sugerido
```

### Exemplo 4: Criar brief antes de qualquer projeto

```
@brief-analyst
*brief

# brief-analyst estrutura:
- Objetivo, público, concorrência
- Tom de voz e referências
- Restrições e entregáveis
- KPIs e critérios de sucesso
```

---

## Squad Structure

```
squads/squad-audiovisual-stark/
├── agents/
│   ├── studio-chief.md          # Orchestrator
│   ├── brief-analyst.md         # Tier 0 - Diagnóstico
│   ├── brand-strategist.md      # Tier 1 - Marty Neumeier
│   ├── art-director.md          # Tier 1 - Paula Scher
│   ├── ux-ui-designer.md        # Tier 1 - Don Norman
│   ├── social-designer.md       # Tier 2 - Social Media
│   ├── identity-designer.md     # Tier 2 - Michael Bierut
│   ├── motion-designer.md       # Tier 2 - Saul Bass
│   ├── landing-designer.md      # Tier 2 - Oli Gardner
│   └── design-critic.md         # Tier 3 - Steven Heller
├── tasks/
│   ├── brief-analysis.md
│   ├── brand-strategy.md
│   ├── art-direction.md
│   ├── ux-audit.md
│   └── design-review.md
├── checklists/
│   └── design-quality-checklist.md
├── templates/
│   └── creative-brief-tmpl.md
├── config.yaml
└── README.md
```

---

## Key Features

- 🧠 **Expert Clones**: Agentes baseados nas metodologias documentadas de Marty Neumeier, Paula Scher, Don Norman, Michael Bierut, Saul Bass, Oli Gardner e Steven Heller
- 🎯 **Brief-First**: Todo projeto começa com um brief estruturado — elimina retrabalho
- 🔄 **Fluxo orquestrado**: `studio-chief` coordena os especialistas no momento certo
- 📐 **Design Systems thinking**: Todos os agentes pensam em sistemas, não peças isoladas
- ✅ **Quality Gate integrado**: `design-critic` valida antes de qualquer entrega final

---

## Integration with Core AIOX

`squad-audiovisual-stark` integra com:

- **@dev / Dex** — Para landing pages e web design, colabora com o agente de desenvolvimento
- **@pm / Morgan** — Recebe briefings de produto e campanha do Product Manager
- **@analyst / Atlas** — Consome pesquisas de mercado e personas do Business Analyst
- **@devops / Gage** — Para assets digitais versionados e entrega em repositório

---

## Workspace Integration Governance

- **Integration level:** `read_write`
- **Rationale:** Lê contexto de marca do workspace, escreve guias de identidade e artefatos de design
- **Read paths:** `workspace/businesses/{brand}/company/`, `brand/`, `marketing/`
- **Write paths:** `workspace/businesses/{brand}/brand/`, `design/`, `marketing/`
- **Template namespace:** `audiovisual`

---

## Getting Started

1. **Ative o orquestrador**: `@studio-chief`
2. **Descreva seu projeto**: O studio-chief vai fazer as perguntas certas
3. **Ou acione direto**: Use `@brief-analyst *brief` para começar pela estrutura
4. **Siga o fluxo**: Cada agente entrega algo concreto e passa para o próximo
5. **Valide no final**: `@design-critic *review` antes de qualquer entrega

---

## Best Practices

- **Sempre comece pelo brief** — brief ruim = projeto ruim, sem exceção
- **Use o studio-chief para projetos complexos** — ele sabe qual agente chamar
- **Acione especialistas direto para tarefas pontuais** — sem precisar do orquestrador
- **`design-critic` é seu aliado, não seu inimigo** — feedback cedo é barato
- **Documente decisões de marca** — o que foi acordado vira ativo para o próximo projeto

---

## Dependencies

Este squad requer:

- Core AIOX-FULLSTACK framework v4+

---

## Version History

- **v1.0.0** — Criação inicial com 10 agentes, 5 tasks, 1 checklist, 1 template. Expert squad para equipe audiovisual da Stark.

---

**Pronto para criar design que comunica de verdade? Vamos começar! 🎨**

_Version: 1.0.0_
_Compatible with: AIOX-FULLSTACK v4+_
