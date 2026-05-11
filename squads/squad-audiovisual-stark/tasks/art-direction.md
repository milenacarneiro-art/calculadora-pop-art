# Task: Art Direction

## Task Anatomy (AS-TP-001)

```yaml
task_name: "Define Visual Language and Art Direction"
status: pending
responsible_executor: art-director
execution_type: Hybrid
estimated_time: "45m-1.5h"
input:
  - "Creative brief (validated)"
  - "Brand strategy document (recommended)"
  - "Optional: existing brand materials"
output:
  - "Visual concept in 1 sentence"
  - "Verbal moodboard with references + rationale"
  - "Typography system (primary + secondary)"
  - "Color system (palette with psychology)"
  - "Grid/composition principles"
  - "Art direction document"
acceptance_criteria:
  - "Visual concept articulated verbally before any execution"
  - "References have rationale (not just 'I like this')"
  - "Typography selected for personality, not just aesthetics"
  - "Color palette has psychology and usage rules"
  - "Document ready to brief Tier 2 agents"
```

---

## Workflow: Defining Art Direction

### Prerequisite Check

Before starting:
- [ ] Creative brief available
- [ ] Brand strategy available (at minimum: personality + onliness)

If missing → request from user or route to appropriate agent

---

### Phase 1: Extract the Essence

From brief and brand strategy, identify:

**The most true thing about this brand:**
> [3-5 words that capture the core]

**The single visual question:**
> "If this brand were a place/texture/material/moment — what would it be?"

**Anti-essence (what to avoid):**
> [what visual territory to stay away from and why]

---

### Phase 2: Visual Concept

Develop the concept in 1 sentence:

**Format:**
> "[The visual direction] as a way to express [the brand essence]"

**Test:**
- Can you articulate it without showing any visual?
- Does it distinguish this brand from competitors?
- Will it guide consistent decisions across mediums?

If NO to any → refine until YES

---

### Phase 3: Verbal Moodboard

List 5-10 visual references with rationale:

```markdown
## Verbal Moodboard — [PROJECT]

### Concept Unifier
"[The visual concept in 1 sentence]"

### References

**[Reference 1 — designer/movement/object]**
Why: [What specifically about this we're drawing from]
What to extract: [Specific elements — not the whole thing]

**[Reference 2]**
Why: [specific reason]
What to extract: [elements]

[Continue...]

### Anti-references (what to avoid)
- [Anti-reference 1]: [why we're avoiding this territory]
- [Anti-reference 2]: [reason]
- [Anti-reference 3]: [reason]
```

---

### Phase 4: Typography System

**Step 1 — Personality first:**
What voice does the brand need? Match to typographic categories:

| Voice Need | Typography Direction |
|-----------|-------------------|
| Authoritative + warm | Humanist serif |
| Clean + trustworthy | Geometric sans-serif |
| Approachable + smart | Humanist sans-serif |
| Bold + assertive | Display sans-serif |
| Traditional + reliable | Old-style serif |
| Progressive + tech | Monospace or grotesque |
| Playful + human | Script or informal |

**Step 2 — Select families:**

```markdown
## Typography System

### Primary (Headlines/Display)
Font: [Family name]
Weights used: [Bold/Semibold/Regular]
Why: [Personality match + technical reason]
Use for: [H1, large titles, brand name]

### Secondary (Body)
Font: [Family name]
Weight: [Regular/Medium]
Why: [Readability + brand complement]
Use for: [Body text, long-form, descriptions]

### Tertiary/Utility (optional)
Font: [Family name]
Why: [When/why to use]
Use for: [Labels, numbers, technical content]

### Hierarchy
- H1: [Family] [Weight] [Size guideline]
- H2: [Family] [Weight] [Size]
- H3: [Family] [Weight] [Size]
- Body: [Family] [Weight] [Size]
- Small/Caption: [Family] [Weight] [Size]

### Rules
✅ [What's always correct]
✅ [What's always correct]
❌ [What's never done]
❌ [What's never done]
```

---

### Phase 5: Color System

**Step 1 — Personality and differentiation:**
- What emotional territory must this brand own?
- What does the competition use? (Avoid same)
- What color category fits the personality?

**Step 2 — Build the palette:**

```markdown
## Color System

### Primary Color
Name: [Name]
Hex: #[VALUE]
RGB: [R, G, B]
CMYK: [C, M, Y, K]
Psychology: [What this color communicates]
Rationale: [Why this specific value/shade]
Use for: [Primary applications]

### Secondary Color
Name: [Name]
Hex: #[VALUE]
Psychology: [Communication]
Rationale: [Why]
Use for: [Secondary applications]

### Neutral Colors
Light: #[VALUE] — [use]
Mid: #[VALUE] — [use]
Dark: #[VALUE] — [use]

### Usage Rules
✅ [Combination that works]
✅ [Combination that works]
❌ [Combination to avoid]
❌ [Combination to avoid]

### Color Proportions
Primary: [X%] of visual space
Secondary: [Y%]
Neutrals: [Z%]
```

---

### Phase 6: Grid & Composition

```markdown
## Grid & Composition

### Grid System
Type: [12-column / 8-column / modular]
Gutters: [size]
Margins: [size — generous = premium, tight = bold]
Columns: [number]

### Composition Principles
1. [First principle — e.g., "White space is deliberate, not leftover"]
2. [Second principle]
3. [Third principle]

### Visual Hierarchy
Primary attention: [what draws the eye first]
Secondary: [what comes second]
Supporting: [background elements]

### Image Style (if applicable)
Photography direction: [style description]
Illustration: [style or absence]
Icons: [style — if used]
```

---

### Phase 7: Art Direction Document

Compile all phases into the final document:

```markdown
## Art Direction — [PROJECT NAME]

### Essence
[3-5 words]

### Visual Concept
"[1 sentence]"

### Moodboard
[Condensed reference list with key extractions]

### Typography System
[Summary from Phase 4]

### Color System
[Summary from Phase 5]

### Composition
[Key principles from Phase 6]

### This is NOT
[3 clear anti-directions]

### Next Steps
→ [Which Tier 2 agents receive this document]
→ [Priority order of execution]
```

---

## Quality Checklist

Before declaring art direction complete:
- [ ] Visual concept articulated in 1 sentence (verbal before visual)
- [ ] Minimum 5 references with rationale (not just "I like this")
- [ ] Anti-references listed (at least 3)
- [ ] Typography: family + reason + hierarchy + rules
- [ ] Color: each color has hex value + psychology + usage
- [ ] Grid and composition principles documented
- [ ] Document is sufficient to brief any Tier 2 agent without additional explanation
- [ ] Cover the logo test: identity would be recognizable from type + color + composition alone
