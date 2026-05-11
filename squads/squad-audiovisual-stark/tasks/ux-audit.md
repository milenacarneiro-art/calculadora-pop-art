# Task: UX Audit

## Task Anatomy (AS-TP-001)

```yaml
task_name: "Conduct UX Audit Using Nielsen-Norman Heuristics"
status: pending
responsible_executor: ux-ui-designer
execution_type: Hybrid
estimated_time: "45m-1.5h"
input:
  - "Interface, flow, or page to audit (description or URL)"
  - "User goal (what should the user accomplish?)"
  - "Optional: persona / target user"
  - "Optional: existing analytics data"
output:
  - "Heuristic evaluation (10 dimensions, scored)"
  - "Issue list with severity ratings"
  - "Top 3 priority recommendations with estimated impact"
  - "User flow map (if requested)"
acceptance_criteria:
  - "All 10 heuristics evaluated with score"
  - "Issues classified as Critical/High/Medium/Low"
  - "Top 3 recommendations have specific, actionable fixes"
  - "Impact estimate provided for each recommendation"
```

---

## Workflow: UX Audit

### Prerequisite Check

Before starting:
- [ ] Understand what is being audited (describe the interface/flow)
- [ ] Understand the user goal (what should they accomplish?)
- [ ] Understand the user (persona or user description)

---

### Phase 1: Heuristic Evaluation

Evaluate the interface/flow against each of Nielsen-Norman's 10 heuristics:

**Scoring:** 0 = severe violation, 5 = fully satisfied
**Note specific evidence for each score**

---

**H1: Visibility of System Status**
Does the system always keep users informed about what is going on through appropriate feedback within reasonable time?

- Score: [0-5]
- Evidence: [specific finding]
- Issue (if any): [what's wrong]
- Severity: [Critical / High / Medium / Low]

---

**H2: Match Between System and Real World**
Does the system use words, phrases, and concepts familiar to the user, rather than system-oriented terms?

- Score: [0-5]
- Evidence:
- Issue:
- Severity:

---

**H3: User Control and Freedom**
Do users have clearly marked "emergency exits" to leave unwanted states without extended dialogue?
(Undo, redo, back navigation)

- Score: [0-5]
- Evidence:
- Issue:
- Severity:

---

**H4: Consistency and Standards**
Do users have to wonder whether different words, situations, or actions mean the same thing?
(Platform conventions followed)

- Score: [0-5]
- Evidence:
- Issue:
- Severity:

---

**H5: Error Prevention**
Does the design prevent problems from occurring in the first place?
(Confirm dialogs, inline validation, constraints)

- Score: [0-5]
- Evidence:
- Issue:
- Severity:

---

**H6: Recognition Rather Than Recall**
Are objects, actions, and options visible? Does the user need to remember information from one part to another?

- Score: [0-5]
- Evidence:
- Issue:
- Severity:

---

**H7: Flexibility and Efficiency of Use**
Are there accelerators for expert users? Can users customize frequent actions?

- Score: [0-5]
- Evidence:
- Issue:
- Severity:

---

**H8: Aesthetic and Minimalist Design**
Do dialogues contain irrelevant or rarely needed information that competes with relevant content?

- Score: [0-5]
- Evidence:
- Issue:
- Severity:

---

**H9: Help Users Recognize, Diagnose, and Recover from Errors**
Are error messages expressed in plain language, precisely indicating the problem, and constructively suggesting a solution?

- Score: [0-5]
- Evidence:
- Issue:
- Severity:

---

**H10: Help and Documentation**
Is help easy to search? Is it focused on the user's task? Does it list concrete steps?

- Score: [0-5]
- Evidence:
- Issue:
- Severity:

---

### Phase 2: Score Summary

```markdown
## Heuristic Scores

| Heuristic | Score | Issues Found |
|-----------|-------|-------------|
| H1: System Status | /5 | |
| H2: Real World Match | /5 | |
| H3: User Control | /5 | |
| H4: Consistency | /5 | |
| H5: Error Prevention | /5 | |
| H6: Recognition | /5 | |
| H7: Flexibility | /5 | |
| H8: Minimalism | /5 | |
| H9: Error Recovery | /5 | |
| H10: Help | /5 | |
| **Average** | **/5** | |
```

**Interpretation:**
- 4.5-5.0: Excellent — minor improvements only
- 3.5-4.4: Good — specific issues to address
- 2.5-3.4: Needs work — multiple friction points
- Below 2.5: Critical — significant usability problems

---

### Phase 3: Issue Prioritization

List all issues by severity:

```markdown
## Critical Issues (fix before launch)
1. [H# — Description] — Impact: [what fails if not fixed]
   Solution: [specific fix]

## High Priority Issues
1. [H# — Description]
   Solution: [specific fix]
   Estimated impact: [+X% conversion / reduced error rate / etc.]

## Medium Priority Issues
1. [H# — Description]
   Solution: [specific fix]

## Low Priority / Nice-to-have
1. [H# — Description]
```

---

### Phase 4: Top 3 Recommendations

```markdown
## Top 3 Priority Fixes

### #1: [Issue Name]
**Heuristic violated:** H[#]
**Current state:** [what exists now]
**Problem:** [why this hurts the user]
**Solution:** [specific change to make]
**Implementation:** [how hard — Easy / Medium / Complex]
**Estimated impact:** [quantified if possible]

### #2: [Issue Name]
[same structure]

### #3: [Issue Name]
[same structure]
```

---

### Phase 5: User Flow Analysis (if requested)

Map the current flow with friction points:

```markdown
## User Flow — Current State

Step 1: [Action] → [What user sees/experiences]
  ⚠️ Friction: [description of problem]

Step 2: [Action] → [Experience]
  ✅ Works well

Step 3: [Action] → [Experience]
  ❌ Critical friction: [description]

[Continue for all steps]

## User Flow — Recommended

Step 1: [Revised action] → [Improved experience]
Step 2: [Revised] → [Improved]
[Continue]

## Impact of Changes
- Removed [X] unnecessary steps
- Eliminated [Y] friction points
- Expected improvement in: [metric]
```

---

### Phase 6: Handoff

Recommend next agent based on findings:

| Finding | Next Agent |
|---------|-----------|
| Visual/layout issues | @art-director |
| Landing page conversion | @landing-designer |
| Interface redesign needed | @landing-designer |
| System design issues | @ux-ui-designer (continue) |
| Final review | @design-critic |

---

## Quality Checklist

Before declaring UX audit complete:
- [ ] All 10 heuristics scored with evidence
- [ ] Every issue has a severity rating
- [ ] Top 3 recommendations are specific and actionable
- [ ] Impact estimate provided for each recommendation
- [ ] User perspective maintained throughout (never "the designer thinks..." — always "the user experiences...")
- [ ] Next agent or action recommended
