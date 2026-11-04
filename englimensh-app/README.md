# إنجليمنش | EngliMensh

A new, standalone Egyptian-curriculum English learning app.

## Scope
- Primary 1–6 and Preparatory 1–3 (the nine Student Books previously supplied by the user).
- Organize by grade, term, unit, and lesson.
- Each unit: at least 30 vocabulary entries (Arabic meaning, simple English explanation, example), graded grammar explanations, reading passage + comprehension, listening exam script + MCQs, and MCQ practice for vocabulary and grammar.
- All quiz items are multiple choice with answer key, feedback, and score.

## Content integrity rules
- Do not invent textbook passages, listening scripts, vocabulary lists, or lesson claims.
- Keep textbook page references and provenance on every extracted content block.
- Mark each unit as draft until checked against the actual Student Book.
- Enforce at least 30 vocabulary items per unit before marking it complete.
- Keep original book source files in a private/source folder or a separate controlled archive; only add files when their actual bytes are available and repository licensing/redistribution permission is confirmed.

## Current status
This branch contains a clean app scaffold and a curriculum data contract only. The nine original PDF binaries are not currently available in the active file library/session, so no textbook content has yet been imported. Do not treat placeholders as lessons or publish an APK as complete.

## Run
```bash
cd englimensh-app
npm install
npm run dev
```
