# Task: Brief Analysis

## Task Anatomy (AS-TP-001)

```yaml
task_name: "Analyze and Structure Creative Brief"
status: pending
responsible_executor: brief-analyst
execution_type: Hybrid
estimated_time: "30m-1h"
input:
  - "Client/user description of the project (any format)"
  - "Optional: existing brief or PRD"
  - "Optional: brand strategy document"
output:
  - "Creative brief structured with 8 blocks"
  - "Brief validation score (0-8)"
  - "Next agent recommendation"
acceptance_criteria:
  - "All 8 blocks have content"
  - "Problem declared in 1-2 sentences"
  - "Persona is concrete (name, age, context, behavior)"
  - "Single most important message defined"
  - "Measurable success criteria"
  - "Validation score >= 7/8"
```

---

## Workflow: Structuring a Creative Brief

### Phase 0: Understand the Request

Before starting, assess what you have:

**If brief already exists:**
- Go to Phase 3 (Validate Brief)

**If partial information exists:**
- Go to Phase 1, only ask missing blocks

**If starting from scratch:**
- Go to Phase 1 in full

---

### Phase 1: Discovery Questions

Ask questions organized by the 8-block structure. Adapt tone to context.
Never ask all questions at once — be conversational.

**Block 1 — Business Context:**
> "Tell me about the company/brand. What does it do, where is it in the market, and what is the current moment (launch, repositioning, growth)?"

**Block 2 — The Real Problem:**
> "What needs to change? What behavior, perception or result is different today vs. what you want after this project?"
> *Follow-up: "And why does that problem exist?"*

**Block 3 — Persona:**
> "Who is the primary person this is for? Give me someone specific — a name, age, context, and daily behavior related to this brand."
> *Never accept demographics without psychographics*

**Block 4 — Communication Objective:**
> "After seeing this design/campaign/content, what do you want this person to think, feel, or do?"
> *One objective only. If they name multiple, prioritize together.*

**Block 5 — Central Message:**
> "If you could only say one thing — what would it be? The single most important thing."

**Block 6 — Tone & Personality:**
> "Describe the brand's personality in 3-5 adjectives. And importantly: what is it NOT?"

**Block 7 — References & Constraints:**
> "What do you love? What do you hate? Any technical, budget, or deadline constraints I should know about?"

**Block 8 — Deliverables & Success Criteria:**
> "What specifically will be produced? And how will we know it worked?"

---

### Phase 2: Synthesis

After gathering information, structure the brief:

```markdown
## Creative Brief — [PROJECT NAME]

### 1. Business Context
[Company name, segment, current moment, location if relevant]

### 2. The Real Problem
[Problem declared in 1-2 clear sentences]

### 3. Target Audience (Persona)
**[Name], [age]**
- Role/occupation
- Income/lifestyle
- Values
- Relevant behaviors
- Pain point

### 4. Communication Objective
[Single, measurable objective]

### 5. Central Message
"[Single most important thing — in quotes]"

### 6. Tone & Personality
[Adjectives] | NOT: [what to avoid]

### 7. References & Constraints
**Love:** [references]
**Dislike:** [anti-references]
**Constraints:** [technical, budget, deadline]

### 8. Deliverables & Success Criteria
**Deliverables:** [list]
**Success:** [how we'll know it worked]

---
**Status:** Draft — pending validation
**Next step:** [recommended agent]
```

---

### Phase 3: Validate Brief

Run the Brief Clarity Test on the completed brief:

**Test 1 — The Child Test**
Can you explain the problem in 1 sentence to a 10-year-old?
- PASS: Problem is clear
- FAIL: Need to simplify / clarify

**Test 2 — The Why Test**
Why does this problem exist? (Ask why 3-5 times)
- PASS: Root cause identified
- FAIL: Need deeper exploration

**Test 3 — The Metric Test**
How will we know the problem is solved? Is there a metric?
- PASS: Measurable criteria exist
- FAIL: Define success metrics

**Test 4 — The Scope Test**
What is IN and OUT of scope?
- PASS: Boundaries are clear
- FAIL: Define boundaries explicitly

---

### Phase 4: Scoring

Score each of the 8 blocks:

| Block | Score (0-1) | Notes |
|-------|------------|-------|
| 1. Business Context | | |
| 2. The Real Problem | | |
| 3. Persona | | |
| 4. Objective | | |
| 5. Central Message | | |
| 6. Tone & Personality | | |
| 7. References & Constraints | | |
| 8. Deliverables & Success | | |
| **TOTAL** | **/8** | |

**Score >= 7/8 = VALIDATED → proceed to next agent**
**Score < 7/8 = INCOMPLETE → return to Phase 1 for missing blocks**

---

### Phase 5: Handoff

Based on project type, recommend next agent:

| Project Type | Next Agent |
|-------------|-----------|
| Brand identity | @brand-strategist |
| Visual direction | @art-director |
| UX/interface | @ux-ui-designer |
| Social media | @social-designer |
| Landing page | @landing-designer |
| Motion/video | @motion-designer |
| Full project | @studio-chief |

Include handoff summary:
```
## Handoff to [AGENT]

**Brief summary:** [2-3 sentences]
**Key persona:** [name + key insight]
**Central message:** "[quote]"
**Personality:** [3 adjectives]
**Constraints to know:** [list]
**Deliverables:** [list]
```

---

## Quality Checklist

Before declaring brief complete:
- [ ] All 8 blocks filled
- [ ] Problem in 1-2 sentences
- [ ] Persona is a concrete person, not a demographic
- [ ] Single communication objective
- [ ] Central message in 1 sentence
- [ ] References AND anti-references listed
- [ ] Measurable success criteria
- [ ] Score >= 7/8
- [ ] Next agent identified
