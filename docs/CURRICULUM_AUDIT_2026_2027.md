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


### Primary 5 — Unit 2 lesson-level cross-check

A further page-level check of the user-provided Primary 5 book (PDF pages 25–28) confirms Unit 2 is titled “My Healthy Body”. Its opening lesson is “Sports for Better Health” and the next lesson is “My Habits: Then and Now”; the Unit 2 learning outcomes include healthy-habit speaking/listening/reading and countable/uncountable nouns with determiners in writing.

The app's P5 Unit 2 record in primary5And6Curriculum.ts is titled “I Want to Be Healthy” and contains sports vocabulary (squash, kung fu, goggles, football pitch, tennis court), but its stated grammar is “Good at / Bad at / Great at + Verb-ing / Noun” and its phonics target is diphthongs /aɪ/, /eɪ/, /ɔɪ/. This is not a safe one-to-one mapping to the official Unit 2 outcomes just established: there is thematic overlap around health/sport, but the grammar/phonics scope differs from the book's stated Unit 2 outcomes. Mark P5 U2 as partial thematic overlap with content-scope mismatch pending inspection of every lesson page and the Assessment Book; do not simply rename the unit.



### Further verified source-level findings

- The live primary database (primaryCurriculumDatabase.ts), which is imported by primaryCurriculumData.ts, independently repeats the P1–P3 Unit 1–6 title map found in the alternate detailed files. Therefore the already documented mismatches are not merely stale titles in an unused alternative source: they are present in the primary catalog's actual database source.
- The live P5 Unit 2 application record (primary5And6Curriculum.ts) is “I Want to Be Healthy”. Its app lesson material emphasizes sports equipment and sports venues (squash, kung fu, goggles, football pitch, tennis court), “good at / bad at / great at + -ing”, and diphthongs /aɪ/, /eɪ/, /ɔɪ/. The official P5 Unit 2 book pages 25–28 identify “My Healthy Body”, opening with “Sports for Better Health” and “My Habits: Then and Now”; the printed unit outcomes explicitly include countable/uncountable nouns and determiners. This is a concrete partial thematic overlap with a grammar/phonics scope discrepancy, not a full unit match.
- The official P5 Unit 2 book text describes football/swimming benefits, muscles, lungs, energy, stress and exercise; the current app's five vocabulary entries do not cover this full lesson scope. More pages are needed before a complete vocabulary coverage percentage can be reported.
- Attempted further page reads for P3/P4/P6 and Prep 2/3 beyond the previously readable sample pages returned no readable page content from the indexed file service in this pass. No claims about those unseen pages are made; they remain pending image/OCR inspection.

### Action gate

Do not patch only the unit titles. P5 U2 shows that matching a broad theme can conceal a grammar/phonics and lesson-sequence mismatch. The implementation correction must be based on a full unit matrix (book lesson → app lesson → vocabulary → grammar → skills → exercises/answer key), and the source-of-truth import path must be respected. No curriculum content edits or APK build were made in this pass.


## Primary 5 — Unit 3 page-level comparison (4 November 2026)

The Primary 5 Term 1 student-book PDF was processed locally with layout-preserving text extraction to continue beyond the previously inspected opening pages. The Unit 3 section is legible in the extracted source (printed book pages approximately 41–55; page numbers should be confirmed against page images before quoting exact page references).

### Student-book evidence: Unit 3 — “When Nature Changes”
The unit learning outcomes explicitly cover:
- describing weather conditions;
- talking about past events with the past simple;
- recognizing/repeating vowel digraphs;
- listening to conversations about environmental changes and weather vocabulary;
- reading comprehension about extreme weather;
- identifying characters and moral in a fictional story;
- completing past-simple sentences and writing a fiction story.

The inspected lesson sequence includes:
1. **Weather Wonders and Warnings!** — thunderstorm, sandstorm, wildfire, drought, heat wave and flood; a dialogue about a flood, drought and wildfire; comprehension questions and weather vocabulary practice.
2. **Extreme Weather in Ancient Egypt** — informational reading on Nile floods, droughts, Khamsin sandstorms, canals/basins, irrigation systems and mud-brick homes; comprehension questions.
3. **Past Simple** — form/use of past simple for finished past events, affirmative/negative/question practice and contextual exercises.
4. **Story / reading work** — a fictional story about frogs responding to a dry pond, with true/false, summary and inference tasks.
5. **Pronunciation** — vowel digraphs, including “ea”, “oo” and “oa”; examples include leap, flood and boat.
6. **Writing** — a model fiction story “Lily’s flowers get sunshine!”, explicit fiction/plot structure (beginning, problem, middle, climax, ending), then a guided story-writing task about Ziad.
7. **Think and Create** — a weather-themed collage and peer-feedback questions.
8. **Quick Review / Self-Assessment** — weather vocabulary, past-tense completion and a short reading response.

### Application comparison: Primary 5 Unit 3
The live curriculum record in `src/data/primary5And6Curriculum.ts` identifies P5 U3 as **“How Do I Look?”** and builds its content around:
- clothing/traditional clothing vocabulary such as Galabeya, linen, suitcase, sneakers and sombrero;
- compound-word stress;
- adjective order (opinion/size/age/color/material) plus a past-simple component;
- travel/clothing dialogues and related generated exam prompts.

### Finding
This is a **confirmed Unit 3 topic and vocabulary mismatch** between the supplied student book and the current app record. The app's past-simple component overlaps with one official grammar target, but that isolated overlap does not make the unit aligned: the book's central scope is extreme weather, Ancient Egyptian responses to weather, vowel digraphs and fiction writing, while the app record is primarily clothing, appearance and adjective order. The app's Unit 3 content must not be relabeled as official Unit 3 without rebuilding and checking the full lesson and assessment mapping.

The student-book evidence above is based on the user-provided Primary 5 Term 1 PDF. This is a student-book comparison only; the matching Primary 5 Assessment Book has not yet been located in the available source set. OCR/text extraction may contain character-recognition artifacts, so exact quotations and page numbers should be checked against rendered page images before final publication.

### Primary 5 tracker adjustment
| Grade | Unit | Status | Remaining evidence |
|---|---|---|---|
| Primary 5 | Unit 1 | Detailed sample read | Complete page-level item/question and assessment-book mapping |
| Primary 5 | Unit 2 | Partial detailed sample read | Finish remaining student-book pages; compare full app unit and assessment book |
| Primary 5 | Unit 3 | Student-book scope read; app mismatch confirmed | Verify exact printed/PDF page references visually; compare assessment-book items |
| Primary 5 | Units 4–6 | Pending | Read each complete unit and compare app records / exam bank |

No application curriculum or question-bank content was modified. No APK/build was started.


## Primary 5 — Unit 4 index and opening lessons (4 November 2026)

The same student-book extraction was continued into Unit 4. The supplied book's Unit 4 heading is **“My Community”**, not “Visiting Elephantine Island”.

The printed learning outcomes for Unit 4 include:
- identifying places in the community and asking/answering about favorite places;
- identifying trigraph sounds;
- listening to descriptive passages to identify specific places and related vocabulary;
- reading about village life and new city developments;
- solving word problems;
- writing a first-person narrative about a place or experience using structure, personal voice and descriptive language;
- using prepositions of time in context.

The opening lessons confirm this scope:
- Lesson 1 “Places in Our Community” teaches restaurant, bakery, club, theme park, supermarket and coffee shop, followed by a dialogue about neighborhood places and comprehension questions.
- Lesson 2 “Egyptian Villages” introduces field, cottage, community center, barn and main square; the reading “Life in My Village” describes village life, farmers, animals, the market and community center.

The app record in `src/data/primary5And6Curriculum.ts` calls P5 U4 **“Visiting Elephantine Island”** and focuses on Elephantine Island, felucca, Nilometer, Nubian village and sunset, with past continuous / while / when grammar. The exam-bank title was previously found to differ again (“Looking After Our World”).

**Finding:** P5 Unit 4 has a confirmed title and central-scope mismatch. The book's opening lessons concern community places and Egyptian village life; the app's unit concerns a visit to Elephantine Island and Aswan/Nubian tourism. No inference is made about the rest of the official unit beyond the learning outcomes and opening lessons inspected. The matching Assessment Book remains unavailable in the current source set.

### Primary 5 tracker adjustment
| Unit | Student-book evidence | App comparison | Status |
|---|---|---|---|
| Unit 3 | “When Nature Changes”; extreme weather, Ancient Egypt, past simple, vowel digraphs, fiction writing | “How Do I Look?”; clothing, adjective order, partial past-simple overlap | Confirmed topic/scope mismatch |
| Unit 4 | “My Community”; community places and Egyptian village life in opening lessons | “Visiting Elephantine Island”; Aswan/Nubian tourism and past continuous | Confirmed title and opening-scope mismatch |

Exact page references for Unit 4 should be visually checked before final publication; the text extraction identifies the Unit 4 opening around printed pages 61–65. No app data was modified and no APK was built.


## Primary 5 — Units 5 and 6 page/index-level comparison (4 November 2026)

The supplied Primary 5 Term 1 PDF metadata identifies the edition year as **2026–2027** (the extracted imprint shows 2026–2027, 116 pages, and a 2026 deposit number). This strengthens the edition identification for this particular Primary 5 file; it does not independently authenticate the other eight grade PDFs.

### Unit 5 — “Our World, Our Resources”
The student-book unit framework lists the following scope:
- Vocabulary: sunlight, water, soil, fossil fuel, minerals, wind, natural resources, cotton, electricity, fertile, cargo, digger, give up, cheerfully, path, thick, load.
- Language in use: formation and usage of comparative adjectives.
- Reading: informational texts about Egypt's natural resources and their uses.
- Writing: object-perspective narratives.
- Listening: stories and factual texts about the environment and resource use.
- Speaking: talk about resource use and conservation; express comparisons using comparative adjectives.
- Prefixes are also an explicit skills target.
The inspected lesson pages include “The Gifts of Nature”, “Treasures of Egypt” (Nile water, oil/natural gas, cotton/wheat/fruit, fertile Delta land, gold/iron), and “Metals and Minerals in Our World” (“Hidden Treasures”, gold/diamond/copper/iron, mining, non-renewable resources and responsible use).

The app's P5 Unit 5 record in `src/data/primary5And6Curriculum.ts` is **“Jobs We Do”** and focuses on Ancient Egyptian craftsmen, scribes, traders, papyrus and clay pots; its phonics/word study target is the negative prefix **un-**, and its grammar target is past/present ability with **could/couldn't/can**. The P5 U5 exam suite in `src/data/questionBanks/primary5And6Exams.ts` repeats “Jobs We Do” and the same Ancient Egyptian occupations.

**Finding:** confirmed title, topic, vocabulary, and grammar-scope mismatch. There is some broad historical/cultural proximity (Egyptian context), but the supplied book's Unit 5 is about natural resources, conservation, comparative adjectives, prefixes and object-perspective writing—not an occupations unit about scribes and craftsmen. The app's un- prefix target also differs from the framework's listed prefix skill; the exact prefix taught in all book lessons still needs full page-level review.

### Unit 6 — “The Talking Earth”
The student-book framework identifies Unit 6 as a literary narrative about nature and environmental identity. Its stated scope includes:
- expressive sentence structures and tense reflection (present vs. past);
- narrative listening for details and thematic understanding;
- speaking about emotions, personal reflections, and connection with nature;
- writing creative reflections on personal and environmental themes.
The Unit 6 learning-outcomes page specifically asks students to answer questions about the story, analyze story elements, answer critical-thinking questions, and rewrite the story from the heroine's perspective. The story vocabulary includes canoe, Earth, Everglades, alligator, owl, National Park, shell, scientist, swamp and splash. The story follows Billie Wind, a young girl who doubts that the Earth can teach people; after entering the Everglades, she learns survival skills by observing animals and recognizes that nature communicates through its sounds and patterns. The inspected story pages include comprehension, event sequencing, true/false and story-response activities.

The app's P5 Unit 6 record in `src/data/primary5And6Curriculum.ts` is **“What's the Weather Like?”**, centered on tornado, sandstorm, heatwave, breeze and thermometer, with future predictions using **will/won't** and question tags. The matching P5 U6 exam suite in `src/data/questionBanks/primary5And6Exams.ts` repeats that weather title and scope.

**Finding:** confirmed title, genre, topic, vocabulary and grammar-scope mismatch. Both units touch broad environmental themes, but the official Unit 6 is a literary story and reflective narrative task, not a weather-forecast unit. Future predictions with will/won't are not the stated central grammar outcome in the supplied Unit 6 framework.

### Primary 5 — consolidated six-unit status
| Unit | Supplied student-book title | Current app title | Current finding |
|---|---|---|---|
| 1 | Food, Nature, and Culture | We Plant Our Food | Title/topic and sequence mismatch; book sample includes Nile life, desert animals, adverbs of frequency, The Giving Tree, consonant clusters and koshari recipe writing |
| 2 | My Healthy Body | I Want to Be Healthy | Partial thematic overlap; sampled official outcomes include countable/uncountable nouns and a/an/some/any, while app emphasizes good at/bad at + -ing and diphthongs; full unit still pending |
| 3 | When Nature Changes | How Do I Look? | Confirmed topic/scope mismatch |
| 4 | My Community | Visiting Elephantine Island | Confirmed title and opening-scope mismatch |
| 5 | Our World, Our Resources | Jobs We Do | Confirmed title/topic/grammar-scope mismatch |
| 6 | The Talking Earth | What's the Weather Like? | Confirmed title/topic/genre/grammar-scope mismatch |

**Grade-level conclusion:** Primary 5 now has a student-book title/scope comparison for all six units, with sampled detailed lesson evidence for Units 1, 2, 3, 4, 5 and 6. This is not yet a complete verification of every page, exercise, answer key, or assessment item. Unit 2 remains a partial-overlap finding; Units 3–6 have confirmed central-scope discrepancies. The matching Primary 5 Assessment Book has not been located in the available files, so assessment alignment remains unverified.

No app curriculum records or question banks were changed. No APK was built.


## Primary 5 — source edition and Unit 5/6 reconciliation notes (4 November 2026)

A further retrieval of the Primary 5 PDF confirms its imprint metadata: the file states **2026–2027**, 116 pages, and carries a 2026 deposit number. This is direct edition metadata for the supplied Primary 5 Student Book (not proof about the other grade files).

### Student-book framework detail clarified
The Unit 5 learning-outcomes page explicitly names:
- speaking about natural resources in Egypt and their importance;
- identifying stressed syllables in words with prefixes;
- listening to a dialogue and answering comprehension questions;
- reading comprehension about natural resources;
- writing sentences with comparative adjectives and a descriptive paragraph about natural resources and conservation.

This supplements the earlier Unit 5 comparison: the official learning-outcomes page does **not** describe an Ancient Egyptian occupations unit.

The Unit 6 learning-outcomes page explicitly identifies “The Talking Earth” (by Jean Craighead George) as a story unit. Its learning outcomes are story comprehension, analysis of story elements, critical-thinking questions, discussion, and rewriting the story from the heroine's perspective. The story's central character is Billie Wind, who learns to understand nature while surviving in the Everglades. The framework also lists reflective narrative skills and present-versus-past tense reflection.

### Unit 5/6 application assessment linkage
The app exam-bank file confirms the mismatch is carried into the assessment layer:
- `p5_u5_exams` is titled “Jobs We Do” and tests scribes/craftsmen, matching the app's non-book-aligned Unit 5 record rather than the book's natural-resources Unit 5.
- `p5_u6_exams` is titled “What's the Weather Like?” and tests weather vocabulary/future predictions, matching the app's weather unit rather than the book's literary story “The Talking Earth”.

This is a confirmed curriculum-to-exam-bank propagation issue for Primary 5 Units 5 and 6. It does not prove that every question is invalid, but the suites are mapped to the wrong official unit scope and cannot be marked as aligned to the supplied book.

### Evidence and boundaries
The student-book index and learning-outcomes pages, plus the Unit 5 lesson extracts and Unit 6 story/outcome extracts, support the scope findings. The full Unit 5/6 pages and every generated question have not yet been individually transcribed and checked. The Primary 5 Assessment Book remains absent from the retrieved source set. No content changes were made to the app.


## Primary 6 — six-unit contents-page comparison (4 November 2026)

The previously supplied `English_Primary6_T1 (1).pdf` was located in the conversation files and processed from its original PDF bytes. Its contents/index page was rendered and OCR-read. The visible official Unit 1–6 sequence is:
1. Amazing Places in Egypt
2. Our Home
3. Community Builders
4. Resources Around Us
5. Made in Egypt
6. Water Savers

The live Primary 6 records in `src/data/primary5And6Curriculum.ts` currently use:
1. Green Cities
2. We Are All Different
3. Vacation Plans
4. Celebrate Good Times!
5. Amazing Journeys
6. Taking Care

### Findings
All six app Unit 1–6 headings differ from the supplied Primary 6 Student Book contents page. This confirms a **six-unit title/sequence-level mismatch** for Primary 6. The mismatch is particularly consequential because the app topics imply unrelated scopes (personality, vacation plans, celebrations, historical journeys and herbal/natural care) rather than the book's sequence on Egyptian places, home, community workers, resources, Egyptian products/projects and water conservation.

The Unit 1 mismatch is already supported by sampled book pages: “Amazing Places in Egypt” includes a day in Egypt, Ras Mohamed, Egyptian places and school-day writing, whereas the app says “Green Cities”. For Units 2–6, this pass establishes the official titles from the contents page and the app-side titles from the actual live curriculum records only. It does **not** claim that every lesson or grammar target in those five units has been read or compared yet.

### Primary 6 tracker
| Unit | Official student-book title | Current app title | Evidence status |
|---|---|---|---|
| 1 | Amazing Places in Egypt | Green Cities | Contents + sampled lesson pages; topic mismatch confirmed |
| 2 | Our Home | We Are All Different | Contents-page title mismatch; lesson pages pending |
| 3 | Community Builders | Vacation Plans | Contents-page title mismatch; lesson pages pending |
| 4 | Resources Around Us | Celebrate Good Times! | Contents-page title mismatch; lesson pages pending |
| 5 | Made in Egypt | Amazing Journeys | Contents-page title mismatch; lesson pages pending |
| 6 | Water Savers | Taking Care | Contents-page title mismatch; lesson pages pending |

The PDF's index also exposes the intended Unit 2–6 language areas in summary form (including present continuous in Unit 2, modal verbs in Units 3–4, past simple in Unit 5, and a water-related Unit 6 vocabulary set); these summary cues are not a substitute for the full unit pages. The assessment book for Primary 6 has not yet been located in the current source set.

No application curriculum or question-bank content was changed. No APK was built.


## Primary 6 — Unit 2 and Unit 3 opening-page follow-up (4 November 2026)

The original Primary 6 PDF was rendered page-by-page to inspect the first two units beyond the contents page.

### Unit 2 — “Our Home”
The sampled Unit 2 opening pages include:
- “Caring for Plants”: vocabulary and tasks on natural fertilizer, weeds, hibiscus, basil, pulling out weeds, watering and caring for plants; a dialogue between Laila and her grandfather about the garden; comprehension and vocabulary-in-context exercises.
- A weather-in-Egypt text comparing Alexandria (windy/rainy), Cairo (warm/sunny) and Aswan (hot), with comprehension questions about weather and safety.
- A full “Present Continuous” lesson covering actions happening now, negative forms and question forms, with sentence transformation and gap-fill exercises.
The official unit learning-outcomes page also lists plant care, weather in different places, listening for main ideas/details, pronunciation of /e/ and /ɪ/, reading about plants/weather/animal habitats in Egypt, present-continuous writing and a short story task.

The app's P6 U2 record is **“We Are All Different”**, with personality adjectives and relative pronouns. This is a confirmed topic and grammar-scope mismatch against the supplied book's plant-care/weather/habitat and present-continuous content.

### Unit 3 — “Community Builders”
The Unit 3 learning-outcomes page identifies jobs that help the community, listening to conversations about helping people, describing jobs, talking about ability and permission, reading key vocabulary and biography/famous-person texts, and writing a biography. The opening lesson “Jobs that Help the Community” teaches paramedic, architect, water-resources engineer, mechanic, tailor, delivery person, street cleaner and traffic officer. Sample dialogue and comprehension tasks ask why these jobs matter and what different workers do.

The app's P6 U3 record is **“Vacation Plans”**, centered on holiday/travel activities. This is a confirmed title/topic mismatch against the supplied book's community occupations and biography-writing unit.

### Evidence boundary
These are direct student-book page observations from the supplied Primary 6 Term 1 PDF, supported by the OCR of the rendered pages. The OCR can distort some individual words, so the report records the clear lesson titles, vocabulary sets and grammar labels rather than relying on uncertain OCR spellings. Units 4–6 still have contents-page evidence only in this pass; their full lesson pages and the Primary 6 Assessment Book remain to be checked.


## Primary 6 — detailed continuation: Units 3–6 (4 November 2026)

The supplied 113-page Primary 6 Student Book was rendered page-by-page for this pass; OCR text below was checked against the rendered pages. These are student-book findings, not Assessment Book verification.

### Unit 3 — “Community Builders”
The sampled Unit 3 pages include community problem-solving and occupations that serve the community. Tasks ask learners to identify a local problem (traffic near school), propose solutions, listen to a dialogue about making posters to improve a park, and identify community roles such as paramedic, architect, mechanic, traffic officer and teacher. Another lesson asks learners to identify a community problem and design a solution; one project page addresses food waste in Egypt and the lack of easy ways to donate surplus food.

The app's Primary 6 Unit 3 is “Vacation Plans”, centered on vacation activities/travel vocabulary (including quad biking) and future plans. This is a confirmed central-topic mismatch against the sampled community-service/problem-solving lessons in the official book.

### Unit 4 — “Resources Around Us”
The inspected lesson pages establish a strong environmental-resource and energy-conservation focus:
- “Man-Made Resources” introduces resources people create and use.
- An informational text explains energy use in Egypt (electricity, gas and solar power), renewable sources such as sun and wind, solar panels and saving energy.
- A language lesson explicitly teaches **must / mustn't / should / shouldn't** for rules, prohibition and advice, with examples about turning off lights, not wasting water, recycling and not littering.
- A further reading explains Egypt's underground minerals/resources, including oil, natural gas, gold and iron, and their uses.

The app's P6 Unit 4 is “Celebrate Good Times!” with birthday-party vocabulary and celebration content. This is a confirmed title/topic/grammar-scope mismatch: the supplied book's sampled unit concerns resources, energy and conservation, while the app unit is celebrations.

### Unit 5 — “Made in Egypt”
The inspected Unit 5 pages include “A Trip Through Time”, travel and museum vocabulary (passport, brochure, exhibition, travel plan, information desk, guided tour), travel verbs (fly, pack, book), and reading/comprehension about Egyptian destinations and projects. A later reading is about **Benban Solar Park**, its solar energy, location near Aswan, solar panels and jobs created. The writing section explicitly teaches **opinion writing** and distinguishing fact from opinion. A review page practices past-simple verb forms and opinion matching.

The app's P6 Unit 5 is “Amazing Journeys”, focused on historical travelers (Marco Polo and Ibn Battuta) and past continuous. There is partial thematic proximity through travel/journeys, but the supplied book's sampled content emphasizes Egyptian-made projects/places, Benban Solar Park and opinion writing; the app record's historical-traveler focus is not established as the same scope. Therefore record this as **partial travel-theme overlap with a confirmed unit-title/scope discrepancy**, not a claim that no travel overlap exists.

### Unit 6 — “Water Savers”
The inspected Unit 6 pages include a story about Noor, Ahmed and Farida noticing a dripping tap and a broken garden pipe, then proposing a school “Water Savers” initiative. The story is followed by comprehension, discussion of water waste and conservation, and action-oriented tasks. This directly supports the official Unit 6 environmental water-conservation focus.

The app's P6 Unit 6 is “Taking Care”, with vocabulary around mint/herbs and natural care and a conditional **if** structure. The app title and sampled central content do not align with the official “Water Savers” story and water-conservation scope. This is a confirmed title/topic mismatch based on the available samples; a full grammar-by-grammar comparison still requires all Unit 6 pages.

### Primary 6 tracker — revised evidence status
| Unit | Official book title | App title | Detailed evidence / current finding |
|---|---|---|---|
| 1 | Amazing Places in Egypt | Green Cities | Sampled lesson pages; mismatch confirmed |
| 2 | Our Home | We Are All Different | Sampled lesson pages; mismatch confirmed |
| 3 | Community Builders | Vacation Plans | Sampled community-service/problem-solving pages; mismatch confirmed |
| 4 | Resources Around Us | Celebrate Good Times! | Sampled energy/resources/minerals pages; mismatch confirmed |
| 5 | Made in Egypt | Amazing Journeys | Sampled Egyptian travel/projects/Benban Solar Park and opinion writing; partial travel overlap, scope discrepancy |
| 6 | Water Savers | Taking Care | Sampled water-conservation story; mismatch confirmed |

The sample-page evidence now extends across all six Primary 6 units, but it is not a full audit of every lesson, exercise, answer key, generated question, or Assessment Book. The matching Primary 6 Assessment Book has not yet been located. No app records or question banks were changed; no APK was built.
