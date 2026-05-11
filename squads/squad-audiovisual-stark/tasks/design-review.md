# Task: Design Review

## Task Anatomy (AS-TP-001)

```yaml
task_name: "Execute Critical Design Review with GO/NO-GO Verdict"
status: pending
responsible_executor: design-critic
execution_type: Hybrid
estimated_time: "30m-1h"
input:
  - "Design deliverable to review (description)"
  - "Original creative brief"
  - "Optional: brand strategy document"
  - "Optional: art direction document"
output:
  - "Score for each of 7 criteria"
  - "Overall weighted score"
  - "Blocking issues (must fix before delivery)"
  - "Recommendations (should fix, not blocking)"
  - "GO/NO-GO verdict"
  - "Next steps"
acceptance_criteria:
  - "All 7 criteria scored with evidence"
  - "Weighted overall score calculated"
  - "Blocking issues separated from recommendations"
  - "GO declared only if score >= 7.0"
  - "NO-GO includes specific list of required corrections"
```

---

## Workflow: Design Review

### Prerequisite Check

**Required to proceed:**
- [ ] The deliverable to review (described clearly)
- [ ] The original brief

**If brief is not available:**
> "I cannot review without the brief. The brief is the criterion.
> Please provide the brief or describe the original objectives."

---

### Phase 1: Brief Alignment Check

Before scoring, do a quick alignment check:

1. What did the brief ask for?
2. What was delivered?
3. Are they the same thing?

If there is obvious misalignment → note it before scoring (affects criteria 1-3 heavily)

---

### Phase 2: 7-Criteria Scoring

Score each criterion from 0-10.
**Criteria 1-3 are strategic (higher weight). Criteria 4-7 are executional.**

---

**Criterion 1: Brief Alignment (Weight: 25%)**

Does the deliverable serve what was asked?
- Problem being addressed?
- Audience being served?
- Objective being met?

Score: [0-10]
Evidence: [specific finding]
Issues: [what's misaligned]
Severity: [Blocking / High / Medium / Low]

---

**Criterion 2: Audience Fit (Weight: 20%)**

Would the target persona recognize this as "for me"?
- Visual language speaks to the persona?
- Tone matches their sensibility?
- Not too formal / too casual?

Score: [0-10]
Evidence:
Issues:
Severity:

---

**Criterion 3: Message Clarity (Weight: 20%)**

What message is conveyed in 5 seconds? Is it the right message?
- First impression clear?
- Hierarchy guides attention correctly?
- Nothing misleads or confuses?

Score: [0-10]
Evidence:
Issues:
Severity:

---

**Criterion 4: Technical Quality (Weight: 15%)**

Typography, spacing, alignment, hierarchy — executed with craft?
- Type set correctly?
- Visual hierarchy clear?
- Spacing consistent?
- Alignment correct?

Score: [0-10]
Evidence:
Issues:
Severity:

---

**Criterion 5: System Consistency (Weight: 10%)**

Do the pieces form a coherent system?
- Elements are consistent across applications?
- One piece doesn't look like a different brand than another?
- Color usage follows the defined system?

Score: [0-10]
Evidence:
Issues:
Severity:

---

**Criterion 6: Differentiation (Weight: 5%)**

Could this be another brand's design?
- Own visual identity?
- Not generic?
- Not mimicking competitors?

Score: [0-10]
Evidence:
Issues:
Severity:

---

**Criterion 7: Durability (Weight: 5%)**

Will this age well?
- Uses design language that transcends current trends?
- Not heavily dependent on "what's in" right now?
- Could function in 5 years without embarrassment?

Score: [0-10]
Evidence:
Issues:
Severity:

---

### Phase 3: Score Calculation

```markdown
## Score Summary

| Criterion | Weight | Raw Score | Weighted Score |
|-----------|--------|-----------|----------------|
| 1. Brief Alignment | 25% | /10 | |
| 2. Audience Fit | 20% | /10 | |
| 3. Message Clarity | 20% | /10 | |
| 4. Technical Quality | 15% | /10 | |
| 5. System Consistency | 10% | /10 | |
| 6. Differentiation | 5% | /10 | |
| 7. Durability | 5% | /10 | |
| **OVERALL** | 100% | | **/10** |
```

**Calculation:**
Weighted Score = Sum of (Raw Score × Weight) for each criterion

---

### Phase 4: Issue Classification

Separate issues into two categories:

```markdown
## Blocking Issues (must fix before delivery)
These are issues with Criteria 1-3 scoring below 6, or any Critical severity finding.

1. [Issue description]
   - Criterion affected: [#]
   - Why blocking: [specific reason]
   - How to fix: [specific action]
   - Time estimate: [15min / 30min / 2h / etc.]

## Recommended Improvements (should fix, not blocking)
These are issues with Criteria 4-7 or Medium/Low severity findings.

1. [Issue description]
   - Criterion affected: [#]
   - Improvement: [specific action]
   - Priority: [High / Medium / Low]
```

---

### Phase 5: Special Flags

**Critical Failure Conditions** (automatic NO-GO regardless of overall score):
- Criterion 1 (Brief Alignment) scores below 5 → Brief not met
- Criterion 2 (Audience Fit) scores below 5 → Wrong audience

**Automatic GO conditions:**
- Overall score >= 7.0 AND
- No Critical severity blocking issues AND
- Criteria 1 and 2 both >= 6

---

### Phase 6: Verdict

```markdown
## Verdict

### Overall Score: [X.X]/10

### Decision: [GO ✅ / NO-GO ❌]

**If GO:**
Deliverable is approved for delivery/client presentation.
[List any post-delivery recommendations]

**If NO-GO:**
Deliverable cannot be delivered in current state.

Required corrections before re-review:
1. [Blocking issue 1 — specific fix]
2. [Blocking issue 2 — specific fix]
[etc.]

Estimated correction time: [X hours]
Expected score after fixes: [X.X]/10

→ Return to [specific agent] with this review report.
```

---

### Phase 7: Handoff

**After GO:**
→ Deliverable ready for client
→ Notify @studio-chief of approval

**After NO-GO:**
→ Route to the agent responsible for the failing criteria

| Failing Criterion | Route to |
|------------------|---------|
| Brief Alignment | @brief-analyst (brief may need revision) |
| Audience Fit | @art-director or @brand-strategist |
| Message Clarity | @art-director |
| Technical Quality | Specific Tier 2 agent |
| System Consistency | @identity-designer or @art-director |
| Differentiation | @brand-strategist |
| Durability | @art-director |

---

## Quality Checklist

Before declaring review complete:
- [ ] Brief was available and used as primary criterion
- [ ] All 7 criteria scored with specific evidence (not vague impressions)
- [ ] Weighted score calculated correctly
- [ ] Blocking issues clearly separated from recommendations
- [ ] Each blocking issue has a specific fix described
- [ ] Verdict clearly stated (GO or NO-GO)
- [ ] If NO-GO, time estimate for corrections provided
- [ ] Next agent or action specified
