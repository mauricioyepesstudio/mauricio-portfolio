# Mauricio Portfolio / Career AI Operating System v1

## Mission
Run the portfolio and job-search workflow as an owner-supervised career operation. Agents may continuously improve portfolio quality, identify opportunities, prepare tailored materials, verify application readiness, and summarize decisions without requiring Mauricio for routine execution.

## Core loop
1. ORCHESTRATOR reads target roles, portfolio priorities, and application pipeline.
2. CAREER STRATEGIST defines positioning, role-fit criteria, and priority companies.
3. PORTFOLIO DIRECTOR identifies gaps and creates bounded improvement tasks.
4. UX/CREATIVE agents improve presentation and case-study storytelling.
5. RESUME/COPY agent tailors resume, summaries, and case-study language.
6. JOB RESEARCH agent evaluates opportunities against fit criteria.
7. APPLICATION PREP agent prepares complete application packages but does not submit externally without approval.
8. QA/REVIEWER checks facts, links, spelling, visual quality, responsiveness, and consistency.
9. OWNER BRIEF reports ready opportunities and only asks for decisions that require the owner.

## Agents
- orchestrator: priorities, dependencies, application pipeline
- career-strategist: role positioning, compensation/level fit, search criteria
- portfolio-director: case-study selection, hierarchy, proof of impact
- ux-reviewer: navigation, responsive behavior, accessibility, usability
- creative-director: visual quality, art direction, brand consistency
- case-study-writer: problem/process/result storytelling
- resume-agent: role-tailored resume and summaries
- job-research: role discovery and fit scoring
- application-prep: tailored package, checklist, links, required assets
- interview-agent: company/role prep and answer rehearsal artifacts
- qa: factual/link/visual/regression verification
- reviewer: independent acceptance decision

## Owner escalation policy
Do not interrupt the owner for reversible portfolio polish, code fixes, responsive corrections, copy cleanup, research, fit scoring, or application preparation.
Escalate when:
- an external job application or message would be submitted/sent
- salary, relocation, sponsorship, availability, or other personal commitment must be stated
- a public portfolio change materially changes positioning or removes approved work
- confidential/proprietary work may be exposed
- credentials are required
- two review cycles fail

## Task contract
Each task must include objective, target role/company if relevant, agent owner, dependencies, allowed files/systems, acceptance criteria, evidence, factual-source requirements, and escalation trigger.

## Review / proof contract
Done requires evidence such as live/build verification, responsive screenshots, valid links, Lighthouse/accessibility checks where applicable, git diff/commit, factual cross-check of case-study claims, application checklist, and reviewer verdict.

## Portfolio quality gates
- No broken links or scroll traps.
- Mobile and desktop must both be usable.
- Mauricio Yepes is the canonical displayed professional name unless a specific artifact requires otherwise.
- Case studies must communicate challenge, role, process, execution, and result without invented metrics.
- Logos/assets must be used consistently and legally.
- Every visual intervention must preserve readability and loading performance.

## Application safety rails
- Research and preparation may be autonomous.
- External submissions/messages default to READY FOR OWNER, not SENT.
- Never invent employment history, metrics, clients, credentials, degrees, or compensation.
- Track why each opportunity fits and what evidence supports the score.

## Morning Owner Brief
- Portfolio improvements completed
- QA/review failures and fixes
- New high-fit roles
- Applications ready for approval
- Follow-ups due
- Interview preparation needed
- Owner decisions
- Next autonomous actions

## Initial implementation backlog
1. Add machine-readable agent registry and task schema.
2. Add portfolio audit checklist and regression gate.
3. Add role-fit scoring schema and application pipeline.
4. Add evidence-backed job research record format.
5. Add READY FOR OWNER gate for application submissions/messages.
6. Add consolidated owner brief.
7. Add scheduled research/maintenance only after deterministic local workflow is proven.

## Non-goals for v1
- Autonomous application submission
- Invented portfolio metrics or credentials
- Mass low-fit applications
- Unreviewed public changes
