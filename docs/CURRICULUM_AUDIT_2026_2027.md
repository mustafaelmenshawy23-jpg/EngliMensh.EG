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

## Preparatory Stage — Term 1 source intake (4 November 2026)

Three user-provided Ministry-branded PDF student books were received and checked:
- Preparatory 1: `English_Prep1_T1 (1).pdf`, 112 pages.
- Preparatory 2: `English_language_prep2_t1 (1).pdf`, 113 pages.
- Preparatory 3: `English_language_prep3_t1 (1).pdf`, 113 pages.

The printed contents pages (PDF page 4 in each file) show these exact unit sequences:

### Preparatory 1
1. Life in a Digital World
2. Learning to Learn
3. Role Models
4. Smart Choices
5. Future Dreams
6. Global Citizens
Review 1 follows Unit 3; Review 2 follows Unit 6.

### Preparatory 2
1. Gen Alpha
2. My Digital Footprint
3. Facing Challenges
4. Art and Expression
5. Around the World
6. Young Innovators
Review 1 follows Unit 3; Review 2 follows Unit 6.

### Preparatory 3
1. Personal Identity
2. Communication with Family and Friends
3. Artificial Intelligence
4. Screen Time
5. Design Thinking
6. Why Do We Like Stories?
Review 1 follows Unit 3; Review 2 follows Unit 6.

Source limitation: these are contents-page findings only. The first five pages were visually sampled; detailed lesson vocabulary, grammar, reading/listening passages, question sets, and assessment-book alignment have not yet been audited. The PDFs are student books; no matching assessment-book PDFs were included in this upload. Therefore none of these three grades is marked fully verified yet.

| Grade | Updated status | Evidence / next action |
|---|---|---|
| Preparatory 1 | Student-book unit index confirmed; detailed audit pending | User PDF, contents page 4; compare app data lesson-by-lesson; obtain assessment book |
| Preparatory 2 | Student-book unit index confirmed; detailed audit pending | User PDF, contents page 4; compare app data lesson-by-lesson; obtain assessment book |
| Preparatory 3 | Student-book unit index confirmed; detailed audit pending | User PDF, contents page 4; compare app data lesson-by-lesson; obtain assessment book |

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


## Primary Stage — Term 1 source intake and OCR review (4 November 2026)

The user had already supplied the Primary 1–6 Term 1 student-book PDFs. All six files were confirmed present in the working session and their page counts checked:
- Primary 1: `English_language_prim1_t1.pdf`, 128 pages.
- Primary 2: `English_language_prim2_t1 (1).pdf`, 104 pages.
- Primary 3: `English_language_prim3_t1 (1).pdf`, 120 pages.
- Primary 4: `English_language_prim4_t1 (1).pdf`, 121 pages.
- Primary 5: `English_language_prim5_t1 (1).pdf`, 113 pages.
- Primary 6: `English_Primary6_T1 (1).pdf`, 113 pages.

Several PDFs are image/scanned documents and their embedded text extraction returned no content. Their contents/scope pages were therefore rendered and read with OCR. OCR can misread letters and words; uncertain strings must be checked against the page image before being used as authoritative text.

### Primary 1 — index evidence
The OCR scope-and-sequence page confirms later units/topics including:
- Unit 4: My Body and My Senses
- Unit 5: On the Farm
- Unit 6: Animals Around Me
The previously discovered 2026/2027 first-term sequence also includes Welcome to My School, The Garden of Colors and Shapes, and I Love My Family. Full page-by-page comparison remains pending.

### Primary 2 — contents evidence
The OCR contents/scope page identifies:
1. Let's Get Started!
2. Colors, Shapes, and Numbers
3. Classroom Actions & Routines
4. Everyday Life
5. My Home
6. Rooms at Home

The same page exposes language targets (introductions, classroom objects/actions, family/home vocabulary, prepositions, and phonics) and life-skill/value labels. Full lesson audit remains pending.

### Primary 3 — scope-and-sequence evidence
The OCR scope-and-sequence page identifies:
1. Let's Learn Together!
2. My Family and I
3. New Adventures
4. Let's Tell Stories!
5. Together Is Better
6. Dare to Dream

It also exposes grammar/phonics targets such as present simple, possessive pronouns, prepositions of place, regular past simple, narrative past forms, present continuous, and consonant clusters. These are index-level findings only; lesson examples and exercise accuracy still need inspection.

### Primary 4 — partial index evidence
The OCR page confirms at least:
- Unit 3: Animals in Our World
- Unit 4: Egypt — My Homeland
Other unit titles were not reliably recoverable from this OCR pass. Do not infer the missing titles; inspect the original contents page image during the detailed audit.

### Primary 5 — first detailed lesson sample
The readable pages 7–24 establish that Unit 1 is **Food, Nature, and Culture**. The sampled lessons include:
- Life Along the Nile: vocabulary and a short informational text/dialogue about water weeds, insects, fish, birds, and crocodiles, followed by comprehension and true/false items.
- Food in the Hot Desert: a reading passage about desert animals and four multiple-choice questions.
- Adverbs of Frequency: frequency scale and placement before main verbs / after forms of “to be”, with sentence-ordering and completion practice.
- Story Time — The Giving Tree: vocabulary (crown, care for, shade, trunk, branch, selfish), a narrative, moral/comprehension questions, summary completion, and problem/solution/result sequencing.
- Pronunciation: consonant clusters, including examples and completion practice.
- Writing: a model recipe for Egyptian koshari using sequencing words, followed by a flyer task and a short paragraph task.
The sample also reveals possible OCR/layout artifacts and a likely printed/OCR spelling issue (“Naitonal Park” in a Unit 6 overview); these must be checked visually before recording as book errors. This is a sample of Unit 1, not a complete Primary 5 audit.

### Primary tracker update
| Grade | Updated status | Evidence / next action |
|---|---|---|
| Primary 1 | Partial student-book index confirmed | OCR scope page plus previously discovered unit list; inspect all units and assessment book |
| Primary 2 | Student-book index confirmed | OCR contents/scope page; inspect lesson pages and obtain assessment book |
| Primary 3 | Student-book index confirmed | OCR scope-and-sequence page; inspect lesson pages and obtain assessment book |
| Primary 4 | Partial index confirmed | Units 3–4 readable; re-check full contents page and all lessons |
| Primary 5 | Unit 1 sample read; detailed audit in progress | Pages 7–24; continue remaining units and obtain assessment book |
| Primary 6 | Partial unit/scope index confirmed | OCR scope page shows six-unit sequence; inspect lesson pages and obtain assessment book |

**Source limitation:** these are user-provided Term 1 student books. Their presence and Ministry-style branding do not alone establish that each file is the final 2026/2027 edition. No matching Primary assessment-book PDFs were part of this intake. None of Primary 1–6 is marked fully verified.


## Cross-check against application source — Primary and Preparatory (4 November 2026)

The repository tree was successfully inspected through GitHub's Contents API. The curriculum files are under `src/data/` (the earlier guessed paths were not reliable because some files have different names).

### Primary app data findings
- `src/data/primaryCurriculumDatabase.ts` contains Primary 1 Term 1 Unit 1 as `Hello!`, with sample vocabulary including Hello, Goodbye, Bag, Book, Busy Bee, Blue; grammar includes self-introduction and classroom imperatives. This conflicts with the 2026/2027 Primary 1 discovery sequence previously recorded (Unit 1: Welcome to My School). This is a confirmed unit-title/theme mismatch requiring lesson-level reconciliation; do not simply rename the unit while retaining unrelated questions.
- `src/data/primaryCurriculumData.ts` builds all Primary grade catalogs from `primaryCurriculumDatabase` and describes the Primary 1–6 set as “36 verified units”. That verification claim is not supported by the current audit evidence and should not be treated as proof of official alignment.
- The same file's grade descriptions are not consistent with the user-provided Term 1 student-book samples:
  - Primary 4 app description emphasizes digestive/respiratory systems, desert ecosystems, plant life cycles, geography, and community jobs, while the supplied book's Unit 1 is **The Five Senses**, with Lesson 1 “What are the Five Senses?”, Lesson 2 “Healthy Habits”, Lesson 3 “Goha's Great Meal”; present simple for habits/routines appears on the sampled grammar page.
  - Primary 5 app description emphasizes food cultivation, diets, clothing, Elephantine Island, jobs, and weather; the supplied book's Unit 1 is **Food, Nature, and Culture**, including Nile River life, hot-desert animals, adverbs of frequency, “The Giving Tree”, consonant clusters, and writing a koshari recipe/flyer.
  - Primary 6 app description emphasizes urban greening, personality, vacation planning, festivals, historical journeys, and animal care; the supplied book's Unit 1 is **Amazing Places in Egypt**, with lessons sampled on “A day in Egypt”, “The Beauty of Ras Mohamed”, “Around Egypt”, and “A Day in My School”; present simple is explicitly taught in the sampled grammar page.
  These are strong discrepancies between current app descriptions and the supplied Term 1 book content. Full unit-by-unit checks are still required before replacing actual records.
- The actual implementation is split across `primaryCurriculumDatabase.ts`, `primary3And4Curriculum.ts`, `primary5And6Curriculum.ts`, and grade question-bank files. Audit all of these, not only the master database.

### User-provided Primary student-book page samples read visually
- Primary 2, PDF pages 7–16: the visible sequence includes classroom greetings / teacher and classroom words, Lesson 2 “Around the Classroom” with short “a” phonics (cat, hat, fan, man, map, cap), Lesson 3 “Our Classroom Objects” (board, pencil case, window, eraser, door, bag, ruler), and Lesson 4 “Let's Write Together!” with short “e” and “i” phonics (pen, ten, hen, zip, fig, bin) plus simple classroom-object sentences. This is a partial sample only.
- Primary 3, PDF pages 7–16: sampled lessons include “Meeting a New Friend” (greetings, introductions, age/name, dialogue completion), “Classroom Rules” (raise your hand, listen carefully, sit down, be kind, keep the classroom clean, don't shout), digraph “wh” phonics (what/when/where/whale/wheel/white), and “Describing People” (appearance/personality adjectives) with present simple forms of “to be”. This is a partial sample only.
- Primary 4, PDF pages 7–16: Unit 1 “The Five Senses”; Lesson 1 “What are the Five Senses?” (taste, smell, see, hear, touch); Lesson 2 “Healthy Habits” with a daily-routine reading and present-simple affirmative forms; Lesson 3 “Goha's Great Meal” with story vocabulary (owner, jingling, share, hungry, greedy), story elements, comprehension and summary tasks. This is a partial sample only.
- Primary 6, PDF pages 7–16: Unit 1 “Amazing Places in Egypt”; lessons “A day in Egypt”, “The Beauty of Ras Mohamed”, “Around Egypt”, and “A Day in My School”; sample targets include tourism/actions in Egypt, Ras Mohamed nature reserve and coral reefs, Egyptian village work, /er/ pronunciation, and daily school routine writing; present simple is practised. This is a partial sample only.
- Primary 5, PDF pages 7–24: Unit 1 sample details are recorded above in the Primary intake section; only Unit 1 has been sampled so far.

### Preparatory app data findings
- `src/data/preparatoryCurriculumData.ts` uses a shared `createPrepUnit()` factory. Its generated dialogue repeatedly uses generic Hazem/Omar prompts, and generated comprehension questions are generic theme prompts (e.g. “What is the general main idea of this reading passage?”). Several generated question records are explicitly assigned `verificationStatus: 'verified'` inside the factory, but the current audit has no official page-level evidence supporting that status. Treat these generated questions/dialogues as unverified supplemental content until checked against each New Hello lesson and assessment book.
- The file imports Units 4–6 from `preparatoryUnits4To6.ts`; inspect that file and Units 1–3 source separately. The previously recorded Prep 1 PDF sample (pages 14–16) confirms Unit 1 “Life in a Digital World” and Lesson 1 “A Day in My Digital Life”, including a blog passage about daily technology use, vocabulary such as digital/screen/amazing/remind/search/website, parts of speech, and speaking about daily routines. This sample is not enough to verify the app's unit records or its use of the label “Official Comprehension Text”.

### Status after this cross-check
No Primary or Preparatory grade is fully verified. The most urgent primary reconciliation targets are Primary 1's Unit 1, and the mismatched Primary 4–6 app grade descriptions. The most urgent preparatory data-quality target is removing unsupported “verified” labels from template-generated items or proving each item against its official source before it is shown as official.


## Additional implementation-to-book cross-check (4 November 2026)

The detailed TypeScript curriculum files were inspected directly, beyond the grade-level summary descriptions. This exposes concrete Unit 1 title mismatches between the current app records and the user-provided Term 1 student books:

| Grade | Current app Unit 1 title | Supplied book Unit 1 title | Finding |
|---|---|---|---|
| Primary 3 | I Feel Happy! | Let's Learn Together! | Direct title/topic mismatch |
| Primary 4 | I Feel Good | The Five Senses | Direct title/topic mismatch |
| Primary 5 | We Plant Our Food | Food, Nature, and Culture | Direct title/topic mismatch |
| Primary 6 | Green Cities | Amazing Places in Egypt | Direct title/topic mismatch |

Evidence locations:
- App source: `src/data/primary3And4Curriculum.ts` (P3/P4 Unit 1 records).
- App source: `src/data/primary5And6Curriculum.ts` (P5/P6 Unit 1 records).
- Student-book evidence: the previously visually sampled Term 1 pages for Primary 3 (PDF pp. 7–16), Primary 4 (pp. 7–16), Primary 5 (pp. 7–24), and Primary 6 (pp. 7–16), as summarized above.

This is stronger than a grade-description discrepancy: the actual Unit 1 records in the app use different titles from the supplied books. It does not yet prove every lesson or question in those units is wrong, and it does not authorize blind replacement of all records. The next step is a lesson-by-lesson mapping of each app unit against the six-unit sequence and the corresponding book pages.

### Preparatory implementation structure — further inspection
- `src/data/preparatoryUnits4To6.ts` exports a helper named `createPrepUnitWithBlueprint`; it sets the whole returned unit to `verificationStatus: 'verified'` and also sets that status on rotated MCQs. The helper's own comment calls the units “MOE-verified”, but the audit currently has no page-level evidence for that assertion. These labels are unsupported by the evidence gathered so far.
- `src/data/preparatoryCurriculumData.ts` uses a separate `createPrepUnit()` factory to generate reusable dialogue, comprehension, vocabulary/grammar, and writing scaffolds. The generated comprehension text is labeled “Official Comprehension Text” and the generated listening title “Official Curriculum Dialogue Track”. These official-source labels must not be treated as proven until matched to the New Hello student books and assessment books.
- The question-bank directory contains three primary exam files: `primary1And2Exams.ts`, `primary3And4Exams.ts`, and `primary5And6Exams.ts`. These are now identified as separate audit targets; their question-level comparison has not yet been completed.

### Current action boundary
No curriculum content or exam questions have been changed in this pass. The work remains an evidence-led audit on the dedicated branch; no APK/build is being claimed. Keep every grade marked partial/pending until the lesson, grammar, vocabulary, reading, question, answer-key, and assessment-book checks are complete.


## Primary exam-bank linkage cross-check (4 November 2026)

The three primary question-bank files were inspected. Their unit titles largely mirror the same app-side curriculum records, so they do not independently resolve the student-book mismatches:

- `primary3And4Exams.ts` contains P3 U1–U6 and P4 U1–U6 using the same titles as the curriculum file, including P3 U1 “I Feel Happy!” and P4 U1 “I Feel Good”.
- `primary5And6Exams.ts` contains P5 U1–U6 and P6 U1–U6 using the same app-side sequence, including P5 U1 “We Plant Our Food” and P6 U1 “Green Cities”.
- `primary1And2Exams.ts` declares 12 units in its header, but the extracted unit IDs currently include only 11: P1 U2–U6 and P2 U1–U6. No `p1_u1` exam-suite ID was found in that file. This is an implementation completeness issue to investigate; do not assume the missing suite is generated elsewhere without tracing its consumers.

Further Unit 1 mismatches established from the supplied book index/sample evidence:
- Primary 1 app U1 “Hello!” versus book U1 “Welcome to My School”.
- Primary 2 app U1 “Meet My Family” versus book U1 “Let’s Get Started!”.
- Primary 3–6 mismatches are recorded in the preceding section.

Important scope note: question-bank title alignment with the app curriculum is not evidence of alignment with the Ministry books. The banks use a shared builder (`buildVerifiedP1P2Suite`) and contain extensive generated practice; all prompts, answer keys, distractors, grammar scope, and unit mapping still need direct source comparison. No exam content was modified in this pass.


## Preparatory Unit 1 and Primary 1–2 cross-check (4 November 2026)

The implementation's first-unit titles were checked against the supplied preparatory book contents and the recorded primary book indexes:

| Grade | App Unit 1 | Supplied book Unit 1 | Result |
|---|---|---|---|
| Primary 1 | Hello! | Welcome to My School | Title/topic mismatch |
| Primary 2 | Meet My Family | Let’s Get Started! | Title/topic mismatch |
| Prep 1 | My Family and Me | Life in a Digital World | Title/topic mismatch |
| Prep 2 | Coming Home | Gen Alpha | Title/topic mismatch |
| Prep 3 | Around Town | Personal Identity | Title/topic mismatch |

App source locations:
- Primary 1–2: `src/data/primary1And2Curriculum.ts`.
- Preparatory: `src/data/prepStageData.ts` (legacy lesson database) and `src/data/preparatoryCurriculumData.ts` (catalog factory). Prep 1 Unit 1 is also explicitly authored in the latter as “My Family and Me”.
- Student-book source: user-provided Term 1 PDFs and their indexes / sampled pages as listed in the intake section. The Prep 1 PDF sample pp. 14–16 specifically supports book Unit 1 “Life in a Digital World” and Lesson 1 “A Day in My Digital Life”. Prep 2 and Prep 3 book Unit 1 names are taken from the supplied book indexes previously transcribed in this audit; detailed lesson-page checks remain pending.

This extends the Unit 1 title discrepancy to all six primary grades and all three preparatory grades. These are title/topic-level findings, not a completed content audit: lesson sequences, grammar, vocabulary, passages, exercises, answer keys, and assessment alignment still require page-level comparison.

### Data architecture note
Preparatory lesson content exists in at least two separate layers: `prepStageData.ts` and the generated catalog in `preparatoryCurriculumData.ts`, plus the Units 4–6 definitions in `preparatoryUnits4To6.ts`. Future corrections must trace which layer is consumed by each screen and exam flow before changing data, to avoid correcting a dormant/legacy file while leaving the live curriculum untouched.


## Page-level follow-up: Primary 1 and Primary 2 Unit 1 (4 November 2026)

### Primary 1 — supplied 2026/2027 book, printed pages 6–18 (PDF pages 7–19)
The supplied book identifies Unit 1 as **“Welcome to My School”**. Its stated outcomes include greetings, classroom instructions, initial-letter recognition for **Tt** and **Ii**, and introducing oneself in complete sentences. The sampled lesson sequence is:
1. Lesson 1 “Greetings”: Hello, Goodbye, shake hands, play; a Maya/Hana greeting and introduction dialogue; picture matching and tracing.
2. Lesson 2 “Phonics”: Tt words include table, tomato, tiger, teacher, tree; tracing and initial-letter recognition.
3. Lesson 3 “Around My Classroom”: teacher, book, bag, pencil, chair, desk, board; classroom actions including sit down / stand up.
4. Lesson 4 “Phonics”: Ii words include in, ill, insect, ink, with tracing and initial-letter activities.

The app's Primary 1 Unit 1 is titled **“Hello!”** and its source begins with greeting words (Hello, Goodbye) but also includes Bag, Book, “Busy Bee”, and Blue. The overlap in greetings is real, so this is not a claim that the whole app unit is unrelated. However, the app unit title and recorded content sequence do not faithfully represent the supplied book's four-lesson structure and explicit Tt/Ii phonics plus classroom vocabulary/actions. The current evidence supports a **partial overlap / incomplete mapping** finding, not a wholesale assertion that every app item is wrong.

### Primary 2 — supplied book, PDF pages 7–16
The sampled pages show the Unit 1 classroom theme and sequence: classroom vocabulary and sentence completion; Lesson 2 “Around the Classroom” with short-a phonics (cat, hat, fan, man, map, cap); Lesson 3 “Our Classroom Objects” (board, pencil case, window, eraser, door, bag, ruler), simple “This is a …” sentences and “Where is the …?” / “It’s over there”; then short-e and short-i phonics (pen, ten, hen, zip, fig, bin) and Lesson 4 “Let’s Write Together!”.
The app's Primary 2 Unit 1 is **“Meet My Family”**. This is a clear title/theme discrepancy against the supplied book's Unit 1 classroom / getting-started content. The pages inspected support this mismatch; full Primary 2 Unit 1 coverage still requires checking the remaining pages and the book's complete lesson map.

Evidence is the user-supplied PDF page content inspected in this pass (Primary 1 PDF pages 7–24; Primary 2 PDF pages 7–16). This page-level inspection strengthens the earlier index-only finding and narrows the Primary 1 discrepancy accurately.


## Nine-grade audit — expanded application-source comparison (4 November 2026)

This pass expands the nine-grade scope (Primary 1–6 and Preparatory 1–3) by enumerating the actual application unit records and checking their unit titles against the user-supplied Term 1 student-book contents and sampled lesson pages. These are source-code findings plus student-book evidence; they are not a claim that all lessons or assessments have been fully verified.

### Primary 1–6: complete app unit-title inventory checked

| Grade | Application Unit 1 | Student-book Unit 1 | Finding |
|---|---|---|---|
| Primary 1 | Hello! | Welcome to My School | Partial overlap only: greetings are present, but the app's unit structure does not reflect the book's Tt/Ii phonics sequence, classroom vocabulary and lesson progression. |
| Primary 2 | Meet My Family | Let's Get Started! | Unit-title/theme mismatch. Sampled book pages focus on classroom readiness, objects/actions and short-a/short-e/short-i phonics, not a family-led Unit 1. |
| Primary 3 | I Feel Happy! | Let's Learn Together! | Unit-title mismatch; app Unit 1 centers on feelings, long-E phonics and a feelings dialogue, while the book's sampled Unit 1 includes meeting a new friend, classroom rules, wh digraph and describing people. |
| Primary 4 | I Feel Good | The Five Senses | Unit-title and scope mismatch; sampled book Unit 1 includes five senses, healthy habits and the Goha story. |
| Primary 5 | We Plant Our Food | Food, Nature, and Culture | Unit-title and scope mismatch; sampled book Unit 1 includes Life Along the Nile, Food in the Hot Desert, adverbs of frequency, The Giving Tree, consonant clusters and writing a koshari recipe. |
| Primary 6 | Green Cities | Amazing Places in Egypt | Unit-title and scope mismatch; sampled book Unit 1 includes A Day in Egypt, The Beauty of Ras Mohamed, Around Egypt and school-day writing. |

The app's primary source files contain all six Term 1 unit records for each grade (P1–P6), but the title inventory above must not be mistaken for six-unit content verification. In particular, P5/P6 application unit titles 2–6 and P3/P4 unit titles 2–6 still need page-level comparison against the corresponding book units, even where a title looks plausible.

### Primary assessment-bank structure and integrity findings

- The primary1And2Exams.ts file declares 12 units in its header, but the explicit unit IDs in the file are P1 U2–U6 and P2 U1–U6; no p1_u1 exam-bank ID is present in that file. Trace whether P1 U1 assessment content is supplied elsewhere before treating the omission as a confirmed user-facing gap.
- The primary3And4Exams.ts and primary5And6Exams.ts files reproduce the app's unit-title map, including the mismatched Unit 1 titles above. This establishes that the exam-bank mapping inherits the same curriculum alignment risk.
- The primary exam-bank files call a shared buildVerifiedP1P2Suite builder. Their comments advertise multi-level/“MOE Mock” assessment suites, but those labels do not establish that prompts, answer keys, distractors, reading passages, or listening items appear in the Ministry assessment books. Every item remains pending evidence-based checking.
- The primary5And6Exams.ts file has a title difference from the primary curriculum source at P5 U4: the curriculum file says “Visiting Elephantine Island”, while the exam bank says “Looking After Our World”. This internal mismatch should be reconciled after the official Unit 4 title and scope are checked.

### Preparatory 1–3: app Unit 1 and legacy data mapping

The user-provided student-book contents pages identify:
- Preparatory 1 Unit 1: Life in a Digital World.
- Preparatory 2 Unit 1: Gen Alpha.
- Preparatory 3 Unit 1: Personal Identity.

The prepStageData.ts file contains:
- Preparatory 1 Unit 1: My Family and Me.
- Preparatory 2 Unit 1: Coming Home.
- Preparatory 3 Unit 1: Around Town.

These are direct Unit 1 title/theme mismatches. The file also contains Preparatory 1 Unit 2 “It's My Favourite Subject”, Preparatory 2 Unit 2 “How Are You Feeling?”, Preparatory 3 Unit 2 “Let's Go Shopping”, and Preparatory 3 Unit 3 “My Community”; these must be compared against the exact official unit titles and lessons, not assumed aligned.

The preparatoryCurriculumData.ts file imports Preparatory Units 4–6 from preparatoryUnits4To6.ts. The latter currently labels generated units/questions as verified through rotatePrepQuestion / its unit factory, while the file content includes authored generic reading passages and dialogues. That status is not backed by page-level Ministry citations in this audit. Remove or downgrade such verification claims unless each item can be traced to the official student/assessment book; clearly label original enrichment as supplementary.

The preparatory Unit 4–6 application headings currently include:
- Prep 1: “We're using technology!”, “Holidays”, “Let's eat!”
- Prep 2: “Into the past”, “Helping you, helping me”, “Different environments”
- Prep 3: “Have you ever traveled by plane?”, “Young role models”, “What's the matter?”

The official student-book contents list for Prep 1–3 must be used to confirm these titles and their sequence. The current source-book contents evidence in this audit already shows the official Units 1–6 listed earlier; title similarity alone is not proof of matching lesson scope.

### Nine-grade status after this pass

| Grade | Status after expanded comparison |
|---|---|
| Primary 1 | Unit 1 partial overlap; unit structure/scope mismatch; remaining five units and assessments pending |
| Primary 2 | Unit 1 mismatch; remaining five units and assessments pending |
| Primary 3 | Unit 1 mismatch; remaining five units and assessments pending |
| Primary 4 | Unit 1 mismatch; remaining five units and assessments pending |
| Primary 5 | Unit 1 mismatch; remaining five units and assessments pending |
| Primary 6 | Unit 1 mismatch; remaining five units and assessments pending |
| Preparatory 1 | Unit 1 mismatch; detailed Units 2–6 and assessments pending |
| Preparatory 2 | Unit 1 mismatch; detailed Units 2–6 and assessments pending |
| Preparatory 3 | Unit 1 mismatch; detailed Units 2–6 and assessments pending |

No app curriculum content was changed in this audit pass. No APK was built. The next evidence pass must continue unit-by-unit through the remaining official student-book pages, then compare the assessment books (not yet supplied for the nine grades in the current source set), then trace the live application import/selection path before modifying data. Until that is done, none of the nine grades is fully verified.


## Live catalog/import-path risk — traced (4 November 2026)

A further source trace found that the detailed primary files already inspected are not necessarily the records used by the grade catalog:

- primaryCurriculumData.ts imports primaryCurriculumDatabase.ts and converts that database through primaryCurriculumInjector.ts.
- primaryCurriculumInjector.ts explicitly sets injectedPrimaryCurriculumDatabase to primaryCurriculumDatabase and its header comment calls the database “all 36 verified units”.
- The primary1And2Curriculum.ts, primary3And4Curriculum.ts, and primary5And6Curriculum.ts files contain detailed alternative curriculum arrays, but they are not imported by the two primary catalog files just inspected. Do not edit those alternative files alone and assume the running app has changed.
- primaryCurriculumInjector.ts maps questions into curriculum questions with verificationStatus: 'verified' and constructs sourceReference values from a generic “Egyptian MOE Connect Series” string. This is not page-level evidence. Those generated verification flags/source references must be audited and corrected at the actual live data source.
- preparatoryCurriculumData.ts imports the generated Units 4–6 from preparatoryUnits4To6.ts. prepStageData.ts separately exports prepCurriculumDatabase with the Unit 1 records. There are therefore at least two preparatory content paths to trace through the grade catalog and UI before any edits.

This means the next implementation step is not simply to replace the mismatched title strings. First identify every live consumer of primaryCurriculumData, prepCurriculumDatabase, and preparatoryCurriculumData; then choose one canonical source per grade and remove or explicitly mark duplicate/legacy catalogs. A build-only pass cannot prove which curriculum source is rendered.

No curriculum implementation was changed in this pass. No APK was built.
