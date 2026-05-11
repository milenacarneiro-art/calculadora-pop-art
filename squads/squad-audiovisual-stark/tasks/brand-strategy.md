# Task: Brand Strategy

## Task Anatomy (AS-TP-001)

```yaml
task_name: "Develop Brand Strategy Document"
status: pending
responsible_executor: brand-strategist
execution_type: Hybrid
estimated_time: "1h-2h"
input:
  - "Validated creative brief (score >= 7/8)"
  - "Optional: competitive landscape research"
  - "Optional: existing brand materials"
output:
  - "Onliness statement"
  - "Brand personality (5 adjectives + tone of voice)"
  - "Differentiation map"
  - "Brand gap analysis (if auditing existing brand)"
  - "Naming analysis (if applicable)"
acceptance_criteria:
  - "Onliness statement in 1 sentence"
  - "Personality has 5 adjectives with concrete examples"
  - "Differentiation is real (not generic like 'quality service')"
  - "Brand gap score calculated (if audit)"
  - "Naming passed 7 filters (if applicable)"
```

---

## Workflow: Building Brand Strategy

### Prerequisite Check

Before starting, verify:
- [ ] Creative brief exists with score >= 7/8
- [ ] Problem clearly defined
- [ ] Persona identified

If brief is incomplete → `@brief-analyst *brief` first

---

### Phase 1: Competitive Mapping

**Ask the user:**
> "Who are the main competitors? Name 3-5 brands in the same space."
> "What does each communicate visually and verbally?"

Build a simple map:

| Competitor | Core Message | Visual Tone | Key Color | Target |
|-----------|-------------|------------|----------|--------|
| [Name] | | | | |
| [Name] | | | | |
| [Name] | | | | |

**Identify white space:** What positioning is NOT occupied?

---

### Phase 2: Differentiation — The Onliness Statement

Apply the Onliness Statement framework:

**Template:**
> Our [category] is the only [what] that [how] for [who] in [where] during [when] because [why].

**Process:**
1. Fill each component
2. Test: Can any competitor claim this honestly?
   - YES → Not differentiated enough. Refine.
   - NO → You have real differentiation.
3. Shorten to the most essential version
4. Test with someone unfamiliar with the brand

**Output format:**
```
## Onliness Statement

"Our [category] is the only [what] that [how]
for [who] in [where]
because [why]."

Differentiation test: [PASS/FAIL + explanation]
```

---

### Phase 3: Brand Personality

**Ask:**
> "If this brand were a person at a dinner party, how would they talk? What would they never say?"

Build the personality:

```
## Brand Personality

### Core Adjectives (5)
1. [Adjective] — example: "like a [metaphor]"
2. [Adjective] — example
3. [Adjective] — example
4. [Adjective] — example
5. [Adjective] — example

### NOT (equally important)
- Not [adjective] — [why not, what that would look like]
- Not [adjective]
- Not [adjective]

### Tone of Voice
The brand sounds like: [description]

✅ We say: "[example sentence]"
❌ We don't say: "[example of wrong tone]"
✅ We say: "[example sentence]"
❌ We don't say: "[example of wrong tone]"
```

---

### Phase 4: Brand Architecture

**Brand promise:**
> The single commitment the brand makes to its audience. In 1 sentence.

**Brand values:** (3 maximum)
- Value 1 + what it means in practice
- Value 2 + what it means in practice
- Value 3 + what it means in practice

**Brand tagline (if applicable):**
Apply: Short. Memorable. Expresses essence. Test for clarity and differentiation.

---

### Phase 5: Naming Analysis (if applicable)

Run the 7 Naming Filters:

| Filter | Test | Pass/Fail | Notes |
|--------|------|----------|-------|
| 1. Distinctiveness | Different from competitors? | | |
| 2. Brevity | Short, memorable? | | |
| 3. Appropriateness | Fits what brand does? | | |
| 4. Spelling/Pronunciation | Easy in target language? | | |
| 5. Likability | Pleasant sound? | | |
| 6. Extendability | Works for future extensions? | | |
| 7. Protectability | Can be registered? | | |

**Score:** [X]/7
**Recommendation:** APPROVED / APPROVED WITH RESERVATIONS / REJECTED

---

### Phase 6: Brand Gap Analysis (if auditing existing brand)

Score each of the 5 Brand Gap dimensions (1-5):

| Dimension | Score | Key Finding |
|-----------|-------|------------|
| Differentiate | /5 | |
| Collaborate | /5 | |
| Innovate | /5 | |
| Validate | /5 | |
| Cultivate | /5 | |
| **Total** | **/25** | |

**Interpretation:**
- 20-25: Brand is well-managed
- 12-19: Gaps exist, prioritize interventions
- Below 12: Critical — brand needs strategic intervention

---

### Phase 7: Brand Strategy Document

Compile everything into the final document:

```markdown
## Brand Strategy — [BRAND NAME]

### Onliness Statement
"[statement]"

### Competitive Position
[Map summary + white space identified]

### Brand Personality
[5 adjectives + examples + tone of voice]

### Brand Promise
"[1-sentence commitment]"

### Brand Values
1. [Value]: [what it means in practice]
2. [Value]: [what it means in practice]
3. [Value]: [what it means in practice]

### Naming Assessment
[Score + recommendation, if applicable]

### Brand Gap Score
[Total/25 + key findings, if audit]

### Next Steps
→ [Recommended agent for visual execution]
```

---

## Quality Checklist

Before declaring brand strategy complete:
- [ ] Onliness statement in 1 sentence
- [ ] Differentiation test: no competitor can claim this honestly
- [ ] 5 personality adjectives with concrete examples
- [ ] Tone of voice with ✅/❌ examples
- [ ] Brand promise in 1 sentence
- [ ] Naming passed >= 5/7 filters (if applicable)
- [ ] Brand gap scored (if audit)
- [ ] Next agent identified (typically @identity-designer or @art-director)
