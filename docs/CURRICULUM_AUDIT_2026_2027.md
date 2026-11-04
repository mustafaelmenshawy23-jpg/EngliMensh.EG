# Curriculum audit — Egypt 2026/2027

Audit branch: `curriculum-audit-2026-2027`  
Target release: Egyptian Ministry of Education, academic year 2026/2027.  
Scope: English first foreign language; 15 tracks/grades requested by the product owner.

## Audit policy

A grade is marked **verified** only after comparing the current app data against the matching 2026/2027 Ministry student book and assessment book (where published), including unit order/titles, lesson content, vocabulary, grammar, reading/listening texts, and assessment items. Search snippets and third-party summaries are discovery aids, not final authority. Do not label generated enrichment as official Ministry content. Keep term/edition identifiers and source URLs with every verified unit.

The Ministry's electronic library is the primary source:
- General education books: https://studentbooks.moe.gov.eg/Books
- Egyptian Baccalaureate: https://ellibrary.moe.gov.eg/EgyptianBaccalaureate/

## Initial findings from app source review

- The app stores curriculum in multiple independent files/catalogs (primary, preparatory, general secondary, and Egyptian Baccalaureate); passing TypeScript/build tests does not validate curriculum fidelity.
- `src/data/primaryCurriculumDatabase.ts` contains legacy unit titles such as `Hello!`, `This is me!`, `My School Bag`, and `With My Family`. These do not match the 2026/2027 Primary 1 first-term unit list found during discovery: `Welcome to My School`, `The Garden of Colors and Shapes`, `I Love My Family`, `My Body and My Senses`, `On the Farm`, and `Animals Around Me`. Primary 1 needs replacement/reconciliation against the complete official student and assessment books.
- `src/data/secondaryCurriculumFullTerm1.ts` currently labels Secondary 2 units as `Staying Healthy`, `Eating Around the World`, `The Future of Agriculture`, `Sports, Fitness & Physical Endurance`, `Modern Society & The Power of the Press`, and `Life Journeys, Renewable Energy & Global Frontiers`. The 2026/2027 Secondary 2 first-term list discovered is `Egypt-Africa Cooperation`, `Startups & Young Entrepreneurs`, `Sustainable Development Goals`, `Natural Disasters`, `Media Manipulation`, and `Soft Skills vs. Hard Skills`. This is a confirmed title/content-level mismatch requiring full unit replacement, not simple renaming.
- `src/data/allStagesCurriculumCatalog.ts` includes Term 2 Secondary 2/3 units generated through `createStandardUnit()`; its questions, listening dialogues, and answer keys are templated from generic prompts. These must be replaced or clearly labeled as supplemental until checked against the official book. Several records explicitly carry `corrected_pending_verification` and source references that say the official page citation is pending.
- `src/data/secondary1CurriculumTerm1.ts` and `src/data/secondary1CurriculumTerm2.ts` describe a New Hello 2026/2027 sequence but still require page-by-page source verification.
- `src/data/preparatoryCurriculumData.ts` uses generic generated comprehension, writing, dialogue, and assessment material and labels its source as New Hello; the specific unit/page/lesson alignment has not yet been proven.
- The Baccalaureate app catalog contains generated/advanced enrichment material. The 2026/2027 official electronic-library release confirmed in discovery is for Baccalaureate Grade 11 (Second Secondary) and includes English as the first foreign language. Do not assume Grade 10 or Grade 12 Baccalaureate English books have been released or that the app's three-grade catalog is official without matching Ministry books.

## Grade-by-grade verification tracker

| Grade / track | Initial status | Required source check |
|---|---|---|
| Primary 1 | Mismatch identified | 2026/2027 Term 1 & Term 2 Student Book + Assessment Book |
| Primary 2 | Not verified | 2026/2027 Student Book + Assessment Book |
| Primary 3 | Not verified | 2026/2027 Student Book + Assessment Book |
| Primary 4 | Not verified | 2026/2027 Student Book + Assessment Book |
| Primary 5 | Not verified | 2026/2027 Student Book + Assessment Book |
| Primary 6 | Not verified | 2026/2027 Student Book + Assessment Book |
| Preparatory 1 | Not verified | 2026/2027 New Hello Student Book + Assessment Book |
| Preparatory 2 | Not verified | 2026/2027 New Hello Student Book + Assessment Book |
| Preparatory 3 | Not verified | 2026/2027 New Hello Student Book + Assessment Book |
| General Secondary 1 | Not verified | 2026/2027 New Hello / first foreign language Student Book + assessment |
| General Secondary 2 | Mismatch identified | 2026/2027 Term 1 & Term 2 Student Book + assessment |
| General Secondary 3 | Mismatch suspected; app content differs from current released curriculum references | 2026/2027 Student Book + novel/reading list + assessment |
| Baccalaureate 1 | Official 2026/2027 English source not yet located | Verify Ministry release before authoring/claiming official content |
| Baccalaureate 2 | Official release confirmed; app content not yet page-matched | Both English first-foreign-language student-book parts, story, and assessment book |
| Baccalaureate 3 | Official 2026/2027 English source not yet located | Verify Ministry release before authoring/claiming official content |

## Quality checks required before a grade can be marked verified

1. Every app unit maps to the same official unit number/title and term.
2. Vocabulary is present in the relevant unit/lesson; definitions, parts of speech, collocations, and examples are correct and age-appropriate.
3. Grammar rules and examples match the taught scope and progression; do not introduce later-grade structures as examinable content.
4. Reading passages, literature/novel chapters, and listening scripts are traceable to the official lesson or are clearly labeled as original supplementary practice.
5. Every question is answerable from the stated unit content; answer key, distractors, explanation, difficulty, and skill label are checked.
6. No duplicated/template questions, mismatched answer positions, generic listening dialogues presented as official audio, or fabricated source references.
7. Run curriculum validator, tests, typecheck, web build, and Android APK build after corrections.

## Evidence and discovery links

- Ministry general education electronic library: https://studentbooks.moe.gov.eg/Books
- Ministry Egyptian Baccalaureate library: https://ellibrary.moe.gov.eg/EgyptianBaccalaureate/
- Ministry 2026/2027 release announcement / school-book access: https://www.youm7.com/story/2026/9/10/رابط-الكتب-المدرسية-للابـتدائية-والإعدادية-والثانوية-استعدادا-لعودة-الدراسة/7541730
- 2026/2027 Primary 1 unit discovery list: https://www.egypttelegraph.com/article/277833/
- 2026/2027 Primary 3 unit discovery list: https://www.egypttelegraph.com/article/201900/
- 2026/2027 Primary 4 unit discovery list: https://www.egypttelegraph.com/article/276798/
- 2026/2027 Primary 5 unit discovery list: https://www.egypttelegraph.com/article/278187/
- 2026/2027 Primary 6 unit discovery list: https://www.egypttelegraph.com/article/288407/
- 2026/2027 Secondary 2 unit discovery list: https://www.egypttelegraph.com/article/183139/
- Baccalaureate Grade 11 English book parts and unit index: https://elbakalorya.com/eng-l1-eb-part1/

**Important:** This document is an initial audit log, not a declaration that all 15 grades have been verified. No curriculum unit should be changed from a guess or a search snippet alone.
