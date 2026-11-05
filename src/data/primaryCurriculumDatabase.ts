// =========================================================================
// EngliMensh.EG - Primary Stage Master Curriculum Database
// System Architect: Mohammad El-Menshawy (محمد المنشاوي)
// Official Egyptian Ministry of Education (MOE) Connect Specifications
// Primary 1 through Primary 3 Complete 18 Units + Full Primary 1-6 Master DB
// All Five Exam Levels Populated with MOE Connect Syllabus Content
// =========================================================================

import type {
  PrimaryLessonContent,
  VocabularyItem,
  PhonicsCard,
  GrammarRuleItem,
  SkillsActivity,
  PrimaryExamQuestion
} from './primaryStageData.ts';
import { primary4Curriculum } from './primary3And4Curriculum.ts';
import { primary5And6Curriculum } from './primary5And6Curriculum.ts';
import {
  p1_u1_exams, p1_u2_exams, p1_u3_exams, p1_u4_exams, p1_u5_exams, p1_u6_exams,
  p2_u1_exams, p2_u2_exams, p2_u3_exams, p2_u4_exams, p2_u5_exams, p2_u6_exams
} from './questionBanks/primary1And2Exams.ts';
import {
  p3_u1_exams, p3_u2_exams, p3_u3_exams, p3_u4_exams, p3_u5_exams, p3_u6_exams,
  p4_u1_exams, p4_u2_exams, p4_u3_exams, p4_u4_exams, p4_u5_exams, p4_u6_exams
} from './questionBanks/primary3And4Exams.ts';
import {
  p5_u1_exams, p5_u2_exams, p5_u3_exams, p5_u4_exams, p5_u5_exams, p5_u6_exams,
  p6_u1_exams, p6_u2_exams, p6_u3_exams, p6_u4_exams, p6_u5_exams, p6_u6_exams
} from './questionBanks/primary5And6Exams.ts';

// =========================================================================
// PRIMARY 1 CURRICULUM (CONNECT 1 - TERM 1) - UNITS 1 TO 6
// =========================================================================
export const primary1Curriculum: PrimaryLessonContent[] = [
  // -----------------------------------------------------------------------
  // P1 - UNIT 1: Hello! (أهلاً وسهلاً!)
  // -----------------------------------------------------------------------
  {
    unitId: 'p1_t1_c_u1',
    grade: 'primary_1',
    track: 'connect',
    term: 1,
    unitNumber: 1,
    unitTitleEn: 'Welcome to My School',
    unitTitleAr: 'أهلاً وسهلاً والتعريف بالنفس',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p1_u1_w1',
          word: 'Hello',
          phonetics: '/həˈləʊ/',
          arabicMeaning: 'مرحباً',
          partOfSpeech: 'phrase',
          exampleSentence: 'Hello, Maya!',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w2',
          word: 'Goodbye',
          phonetics: '/ˌɡʊdˈbaɪ/',
          arabicMeaning: 'مع السلامة',
          partOfSpeech: 'phrase',
          exampleSentence: 'Goodbye, Hana!',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w3',
          word: 'play',
          phonetics: '/pleɪ/',
          arabicMeaning: 'يلعب',
          partOfSpeech: 'verb',
          exampleSentence: 'We play together.',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w4',
          word: 'friends',
          phonetics: '/frendz/',
          arabicMeaning: 'أصدقاء',
          partOfSpeech: 'noun',
          exampleSentence: 'We are friends.',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w5',
          word: 'bag',
          phonetics: '/bæɡ/',
          arabicMeaning: 'حقيبة',
          partOfSpeech: 'noun',
          exampleSentence: 'This is my bag.',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w6',
          word: 'chair',
          phonetics: '/tʃeə(r)/',
          arabicMeaning: 'كرسي',
          partOfSpeech: 'noun',
          exampleSentence: 'This is a chair.',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w7',
          word: 'ruler',
          phonetics: '/ˈruːlə(r)/',
          arabicMeaning: 'مسطرة',
          partOfSpeech: 'noun',
          exampleSentence: 'This is my ruler.',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w8',
          word: 'teacher',
          phonetics: '/ˈtiːtʃə(r)/',
          arabicMeaning: 'معلّم',
          partOfSpeech: 'noun',
          exampleSentence: 'My teacher is kind.',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w9',
          word: 'board',
          phonetics: '/bɔːd/',
          arabicMeaning: 'سبورة',
          partOfSpeech: 'noun',
          exampleSentence: 'Look at the board.',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w10',
          word: 'desk',
          phonetics: '/desk/',
          arabicMeaning: 'مكتب',
          partOfSpeech: 'noun',
          exampleSentence: 'This is my desk.',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w11',
          word: 'book',
          phonetics: '/bʊk/',
          arabicMeaning: 'كتاب',
          partOfSpeech: 'noun',
          exampleSentence: 'Open your book.',
          visualCue: 'school_object'
        },
        {
          id: 'p1_u1_w12',
          word: 'pencil',
          phonetics: '/ˈpensəl/',
          arabicMeaning: 'قلم رصاص',
          partOfSpeech: 'noun',
          exampleSentence: 'I have a pencil.',
          visualCue: 'school_object'
        }
      ],
      phonics: [
        {
          letterSound: 'Letters T/t, L/l and D/d — source Scope and Sequence',
          sampleWords: ['table', 'tiger', 'tomato', 'teacher', 'tree'],
          rhymingPair: ['tree', 'three']
        }
      ],
      conversationTerms: [
        { en: "Hello! I am Adam. What's your name?", ar: "أهلاً! أنا آدم. ما اسمك؟" },
        { en: "Hello, Adam! I am Omar. Goodbye!", ar: "أهلاً يا آدم! أنا عمر. مع السلامة!" }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Self-Introduction & Greetings (I am / I'm + Name)",
          ruleExplanationAr: "للتعريف بالنفس نستخدم التركيب I am أو الاختصار I'm متبوعاً بالاسم: I am + Name.",
          structureFormula: "Hello, I'm + [Name] / What's your name?",
          examples: [
            { en: "Hello! I am Hany.", ar: "أهلاً! أنا هاني." },
            { en: "What's your name? — I'm Hana.", ar: "ما اسمك؟ — أنا هناء." }
          ],
          visualPatternBlocks: ["Hello!", "I'm [Name]", "What's your name?"]
        },
        {
          title: "Classroom Imperatives (أوامر الفصل الإيجابية)",
          ruleExplanationAr: "لإعطاء تعليمات مهذبة في الفصل نبدأ بالفعل في المصدر: Open your bag / Close your book.",
          structureFormula: "Verb (base) + your + object (e.g., Open your book)",
          examples: [
            { en: "Open your bag, please.", ar: "افتح حقيبتك من فضلك." },
            { en: "Shake hands with your friend.", ar: "صافح صديقك باليد." }
          ],
          visualPatternBlocks: ["Open", "Close", "Shake hands"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['am', 'I', 'Hany'],
          correctOrder: ['I', 'am', 'Hany'],
          translationAr: 'أنا هاني'
        },
        {
          jumbledParts: ['your', "What's", 'name?'],
          correctOrder: ["What's", 'your', 'name?'],
          translationAr: 'ما اسمك؟'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Listen and repeat the target initial sound /b/ in Bag, Book, and Bee.',
        prompt: 'Which word starts with the /b/ sound?',
        targetResponses: ['Bag', 'Book', 'Bee', 'Bus'],
        scaffoldingHints: ['Listen to the first sound: /b/ like Busy Bee']
      },
      {
        type: 'dictation',
        instruction: 'Write the missing greeting word in English:',
        prompt: '______! I am Amira.',
        targetResponses: ['Hello', 'Hi'],
        scaffoldingHints: ['Say hello when meeting someone']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p1_u1_l1_q1',
          type: 'mcq',
          questionPrompt: 'Look at the picture: Someone waving a friendly hand says ______.',
          options: ['Hello', 'Car', 'Apple', 'Pen'],
          correctAnswer: 'Hello',
          explanationAr: 'عند لقاء شخص نقول مرحباً (Hello).',
          marks: 1
        },
        {
          id: 'p1_u1_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word starts with the letter sound /b/?',
          options: ['Bag', 'Apple', 'Cat', 'Egg'],
          correctAnswer: 'Bag',
          explanationAr: 'كلمة Bag تبدأ بصوت الحرف B /b/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p1_u1_l2_q1',
          type: 'fill_in_the_blank',
          questionPrompt: 'Complete the greeting: "______ your name? — I am Youssef."',
          options: ["What's", 'How', 'Where', 'Who'],
          correctAnswer: "What's",
          explanationAr: "السؤال عن الاسم يبدأ بـ What's your name?",
          marks: 1
        },
        {
          id: 'p1_u1_l2_q2',
          type: 'matching',
          questionPrompt: 'Teacher says: "______ your bag, please."',
          options: ['Open', 'Eat', 'Sleep', 'Run'],
          correctAnswer: 'Open',
          explanationAr: 'أمر الفصل المدرسي: Open your bag (افتح حقيبتك).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p1_u1_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder to form a correct sentence: [Mona - I - Miss - am].',
          options: ['I am Miss Mona', 'Miss Mona am I', 'Am I Miss Mona', 'Mona Miss am I'],
          correctAnswer: 'I am Miss Mona',
          explanationAr: 'الترتيب الصحيح: الفاعل I ثم الفعل am ثم الاسم Miss Mona.',
          marks: 2
        },
        {
          id: 'p1_u1_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [book - your - Close].',
          options: ['Close your book', 'Your book close', 'Book close your', 'Close book your'],
          correctAnswer: 'Close your book',
          explanationAr: 'صيغة الأمر: الفعل أولاً Close ثم المفعول your book.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p1_u1_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: When class finishes and we leave, we say ______.',
          options: ['Goodbye', 'Hello', 'Good morning', 'Yes'],
          correctAnswer: 'Goodbye',
          explanationAr: 'عند الانصراف من المدرسة نقول وداعاً (Goodbye).',
          marks: 1
        },
        {
          id: 'p1_u1_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: "Hello, I am Hany." — Hany is ______.',
          options: ['introducing himself', 'eating lunch', 'sleeping in bed', 'buying a car'],
          correctAnswer: 'introducing himself',
          explanationAr: 'هاني يقدم نفسه لزملائه في الفصل.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p1_u1_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Complete your own English introduction: "Hello! I am ______."',
          correctAnswer: 'a clever student',
          explanationAr: 'يقوم الطالب بكتابة اسمه أو وصف نفسه بعد I am.',
          marks: 3
        },
        {
          id: 'p1_u1_l5_q2',
          type: 'punctuation',
          questionPrompt: 'Choose the sentence with correct capital letters: [i am amira / I am Amira.]',
          options: ['I am Amira.', 'i am amira.', 'I Am amira.', 'i Am Amira.'],
          correctAnswer: 'I am Amira.',
          explanationAr: 'الضمير I واسم العلم Amira يبدآن بحرف كبير كبير Capital.',
          marks: 2
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P1 - UNIT 2: This is me! (هذا أنا وأجزاء الجسم)
  // -----------------------------------------------------------------------
  {
    unitId: 'p1_t1_c_u2',
    grade: 'primary_1',
    track: 'connect',
    term: 1,
    unitNumber: 2,
    unitTitleEn: 'The Garden of Colors and Shapes',
    unitTitleAr: 'هذا أنا وأجزاء الجسم والحواس',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p1_u2_w1',
          word: 'Eye',
          phonetics: '/aɪ/',
          arabicMeaning: 'عين',
          partOfSpeech: 'noun',
          exampleSentence: 'I see with my eye.',
          visualCue: 'human_eye'
        },
        {
          id: 'p1_u2_w2',
          word: 'Nose',
          phonetics: '/nəʊz/',
          arabicMeaning: 'أنف',
          partOfSpeech: 'noun',
          exampleSentence: 'Touch your nose, please.',
          visualCue: 'human_nose'
        },
        {
          id: 'p1_u2_w3',
          word: 'Mouth',
          phonetics: '/maʊθ/',
          arabicMeaning: 'فم',
          partOfSpeech: 'noun',
          exampleSentence: 'I speak and smile with my mouth.',
          visualCue: 'mouth_smile'
        },
        {
          id: 'p1_u2_w4',
          word: 'Ear',
          phonetics: '/ɪər/',
          arabicMeaning: 'أذن',
          partOfSpeech: 'noun',
          exampleSentence: 'I hear music with my ear.',
          visualCue: 'human_ear'
        },
        {
          id: 'p1_u2_w5',
          word: 'Hand',
          phonetics: '/hænd/',
          arabicMeaning: 'يد',
          partOfSpeech: 'noun',
          exampleSentence: 'Wash your hands before eating.',
          visualCue: 'hand_clean'
        }
      ],
      phonics: [
        {
          letterSound: 'Sound /h/ (Letter H) and /n/ (Letter N)',
          sampleWords: ['Hand', 'Hair', 'Hat', 'Nose', 'Nut', 'Neck'],
          rhymingPair: ['Hat', 'Cat']
        }
      ],
      conversationTerms: [
        { en: "Touch your nose! Well done, Hany!", ar: "المس أنفك! أحسنت يا هاني!" },
        { en: "Wash your face with clean water.", ar: "اغسل وجهك بالماء النظيف." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Identifying Body Parts (This is my...)",
          ruleExplanationAr: "للإشارة إلى جزء من أجزاء الجسم المفردة القريبة نقول: This is my + [الجسم].",
          structureFormula: "This is my + [eye / nose / mouth / ear / hand]",
          examples: [
            { en: "This is my nose.", ar: "هذا أنفي." },
            { en: "This is my hand.", ar: "هذه يدي." }
          ],
          visualPatternBlocks: ["This is my", "[body part]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['my', 'is', 'This', 'nose'],
          correctOrder: ['This', 'is', 'my', 'nose'],
          translationAr: 'هذا أنفي'
        },
        {
          jumbledParts: ['your', 'Touch', 'ear'],
          correctOrder: ['Touch', 'your', 'ear'],
          translationAr: 'المس أذنك'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify the initial sound /h/ in Hand and Hat, and /n/ in Nose.',
        prompt: 'Which word starts with the /h/ sound?',
        targetResponses: ['Hand', 'Hair', 'Hat'],
        scaffoldingHints: ['Listen to the sound: /h/ like Hello and Hand']
      },
      {
        type: 'guided_writing',
        instruction: 'Write the command: Touch your ______.',
        prompt: 'Touch your ______ (أنفك)',
        targetResponses: ['nose'],
        scaffoldingHints: ['Starts with letter N']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p1_u2_l1_q1',
          type: 'mcq',
          questionPrompt: 'We use our ______ to see beautiful pictures.',
          options: ['eyes', 'ears', 'mouth', 'hands'],
          correctAnswer: 'eyes',
          explanationAr: 'نرى الأشياء بأعيننا (eyes).',
          marks: 1
        },
        {
          id: 'p1_u2_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word starts with the letter N /n/?',
          options: ['Nose', 'Hand', 'Ear', 'Eye'],
          correctAnswer: 'Nose',
          explanationAr: 'كلمة Nose تبدأ بحرف N وصوته /n/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p1_u2_l2_q1',
          type: 'matching',
          questionPrompt: 'Match the command: "______ your hands with water and soap."',
          options: ['Wash', 'Touch', 'Listen', 'Look'],
          correctAnswer: 'Wash',
          explanationAr: 'نقول: Wash your hands (اغسل يديك).',
          marks: 1
        },
        {
          id: 'p1_u2_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'Complete: "This ______ my ear."',
          options: ['is', 'are', 'am', 'be'],
          correctAnswer: 'is',
          explanationAr: 'مع المفرد This نستخدم فعل is.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p1_u2_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [my - is - This - eye].',
          options: ['This is my eye', 'My eye is this', 'Is this my eye', 'Eye is my this'],
          correctAnswer: 'This is my eye',
          explanationAr: 'الترتيب: This is my eye (هذه عيني).',
          marks: 2
        },
        {
          id: 'p1_u2_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [your - nose - Touch].',
          options: ['Touch your nose', 'Nose touch your', 'Your touch nose', 'Touch nose your'],
          correctAnswer: 'Touch your nose',
          explanationAr: 'صيغة الأمر: Touch your nose (المس أنفك).',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p1_u2_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: "Touch your ______!" — Hana touches her ear.',
          options: ['ear', 'nose', 'mouth', 'eye'],
          correctAnswer: 'ear',
          explanationAr: 'هناء تلمس أذنها (ear).',
          marks: 1
        },
        {
          id: 'p1_u2_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: Before eating a healthy salad, we must ______ our hands.',
          options: ['wash', 'sleep', 'kick', 'throw'],
          correctAnswer: 'wash',
          explanationAr: 'يجب غسل اليدين قبل الأكل للنظافة الصحية.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p1_u2_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write what body part you smile with: "This is my ______."',
          correctAnswer: 'mouth and I smile happily',
          explanationAr: 'يكتب الطالب جزء الجسم المناسب (mouth).',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P1 - UNIT 3: My School Bag (حقيبتي المدرسية وأدواتي)
  // -----------------------------------------------------------------------
  {
    unitId: 'p1_t1_c_u3',
    grade: 'primary_1',
    track: 'connect',
    term: 1,
    unitNumber: 3,
    unitTitleEn: 'I Love My Family',
    unitTitleAr: 'حقيبتي المدرسية والأدوات والأرقام من 1 إلى 5',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p1_u3_w1',
          word: 'Pencil',
          phonetics: '/ˈpen.səl/',
          arabicMeaning: 'قلم رصاص',
          partOfSpeech: 'noun',
          exampleSentence: 'I draw with my yellow pencil.',
          visualCue: 'pencil_tool'
        },
        {
          id: 'p1_u3_w2',
          word: 'Pencil case',
          phonetics: '/ˈpen.səl keɪs/',
          arabicMeaning: 'مقلمة للأدوات',
          partOfSpeech: 'noun',
          exampleSentence: 'Put your pens inside your pencil case.',
          visualCue: 'pencil_case'
        },
        {
          id: 'p1_u3_w3',
          word: 'Ruler',
          phonetics: '/ˈruː.lər/',
          arabicMeaning: 'مسطرة للتسطير',
          partOfSpeech: 'noun',
          exampleSentence: 'Draw a straight line with your ruler.',
          visualCue: 'ruler_tool'
        },
        {
          id: 'p1_u3_w4',
          word: 'Sharpener',
          phonetics: '/ˈʃɑː.pən.ər/',
          arabicMeaning: 'براية أقلام',
          partOfSpeech: 'noun',
          exampleSentence: 'My sharpener makes my pencil sharp.',
          visualCue: 'sharpener_tool'
        },
        {
          id: 'p1_u3_w5',
          word: 'Eraser',
          phonetics: '/ɪˈreɪ.zər/',
          arabicMeaning: 'ممحاة / أستيكة',
          partOfSpeech: 'noun',
          exampleSentence: 'Erase the line with your rubber eraser.',
          visualCue: 'eraser_tool'
        }
      ],
      phonics: [
        {
          letterSound: 'Sound /p/ (Letter P) and /r/ (Letter R)',
          sampleWords: ['Pen', 'Pencil', 'Pencil case', 'Ruler', 'Red'],
          rhymingPair: ['Pen', 'Ten']
        }
      ],
      conversationTerms: [
        { en: "What's this? — It's a pencil case.", ar: "ما هذا؟ — إنها مقلمة." },
        { en: "How many rulers do you have? — Two rulers.", ar: "كم عدد المساطر لديك؟ — مسطرتان." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Asking about Singular School Objects (What's this? It's a...)",
          ruleExplanationAr: "للسؤال عن شيء مفرد قريب غير عاقل نسأل: What's this? والإجابة تكون: It's a/an + اسم الشيء.",
          structureFormula: "What's this? — It's a [pen / pencil / ruler / sharpener].",
          examples: [
            { en: "What's this? — It's a pen.", ar: "ما هذا؟ — إنه قلم حبر." },
            { en: "What's this? — It's an eraser.", ar: "ما هذا؟ — إنها ممحاة." }
          ],
          visualPatternBlocks: ["What's this?", "It's a", "[object]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['this?', "What's", 'It', 'a', 'is', 'ruler'],
          correctOrder: ["What's", 'this?', 'It', 'is', 'a', 'ruler'],
          translationAr: 'ما هذا؟ إنها مسطرة'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Differentiate between sound /p/ in Pencil and /r/ in Ruler.',
        prompt: 'Which word begins with /p/?',
        targetResponses: ['Pen', 'Pencil'],
        scaffoldingHints: ['Say: /p/ /p/ Pencil']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p1_u3_l1_q1',
          type: 'mcq',
          questionPrompt: 'We use a ______ to sharpen our wooden pencils.',
          options: ['sharpener', 'chair', 'bed', 'car'],
          correctAnswer: 'sharpener',
          explanationAr: 'نستخدم البراية (sharpener) لبري القلم الرصاص.',
          marks: 1
        },
        {
          id: 'p1_u3_l1_q2',
          type: 'mcq',
          questionPrompt: 'Which word starts with the /p/ sound?',
          options: ['Pencil', 'Book', 'Door', 'Cat'],
          correctAnswer: 'Pencil',
          explanationAr: 'كلمة Pencil تبدأ بصوت /p/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p1_u3_l2_q1',
          type: 'fill_in_the_blank',
          questionPrompt: "What's this? — It's ______ pencil case.",
          options: ['a', 'an', 'two', 'three'],
          correctAnswer: 'a',
          explanationAr: 'نضع أداة النكرة a قبل الاسم المفرد البادئ بحرف ساكن (a pencil case).',
          marks: 1
        },
        {
          id: 'p1_u3_l2_q2',
          type: 'matching',
          questionPrompt: 'How many pens do you have? — I have ______ pens (1, 2, 3).',
          options: ['three', 'one', 'no', 'blue'],
          correctAnswer: 'three',
          explanationAr: 'العدد three يطابق اسم الجمع pens.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p1_u3_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [pen - It - is - a].',
          options: ['It is a pen', 'A pen is it', 'Is it a pen', 'Pen is a it'],
          correctAnswer: 'It is a pen',
          explanationAr: 'الترتيب الصحيح: It is a pen.',
          marks: 2
        },
        {
          id: 'p1_u3_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [have - two - I - rulers].',
          options: ['I have two rulers', 'Two rulers have I', 'Have I two rulers', 'I two have rulers'],
          correctAnswer: 'I have two rulers',
          explanationAr: 'الترتيب: I have two rulers (معي مسطرتان).',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p1_u3_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: We keep all our pens, pencils, and erasers in our ______.',
          options: ['pencil case', 'fridge', 'kitchen', 'shoe'],
          correctAnswer: 'pencil case',
          explanationAr: 'نحفظ الأدوات المدرسية في المقلمة (pencil case).',
          marks: 1
        },
        {
          id: 'p1_u3_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: "What is this?" — "______ is a red ruler."',
          options: ['It', 'They', 'We', 'He'],
          correctAnswer: 'It',
          explanationAr: 'الضمير العائد على غير العاقل المفرد هو It.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p1_u3_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write what you have in your bag: "In my bag, I have a ______ and a ______."',
          correctAnswer: 'pen and a book',
          explanationAr: 'يكتب الطالب أدواته المدرسية التي يحملها في الحقيبة.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P1 - UNIT 4: It's My Birthday! (إنه عيد ميلادي والأرقام)
  // -----------------------------------------------------------------------
  {
    unitId: 'p1_t1_c_u4',
    grade: 'primary_1',
    track: 'connect',
    term: 1,
    unitNumber: 4,
    unitTitleEn: 'My Body and My Senses',
    unitTitleAr: 'إنه عيد ميلادي والأرقام من 6 إلى 10',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p1_u4_w1',
          word: 'Birthday',
          phonetics: '/ˈbɜːθ.deɪ/',
          arabicMeaning: 'عيد ميلاد',
          partOfSpeech: 'noun',
          exampleSentence: "Today is my birthday!",
          visualCue: 'birthday_cake'
        },
        {
          id: 'p1_u4_w2',
          word: 'Candle',
          phonetics: '/ˈkæn.dəl/',
          arabicMeaning: 'شمعة مضيئة',
          partOfSpeech: 'noun',
          exampleSentence: 'There are seven candles on my cake.',
          visualCue: 'cake_candles'
        },
        {
          id: 'p1_u4_w3',
          word: 'Cake',
          phonetics: '/keɪk/',
          arabicMeaning: 'كعكة / تورتة',
          partOfSpeech: 'noun',
          exampleSentence: 'Mom made a sweet birthday cake.',
          visualCue: 'sweet_cake'
        },
        {
          id: 'p1_u4_w4',
          word: 'Balloon',
          phonetics: '/bəˈluːn/',
          arabicMeaning: 'بالون ملون',
          partOfSpeech: 'noun',
          exampleSentence: 'We have red and blue balloons.',
          visualCue: 'party_balloon'
        },
        {
          id: 'p1_u4_w5',
          word: 'Seven',
          phonetics: '/ˈsev.ən/',
          arabicMeaning: 'الرقم سبعة (7)',
          partOfSpeech: 'noun',
          exampleSentence: 'I am seven years old.',
          visualCue: 'number_seven'
        }
      ],
      phonics: [
        {
          letterSound: 'Sound /k/ (Letter C) and /ɒ/ (Letter O)',
          sampleWords: ['Cake', 'Candle', 'Card', 'Orange', 'Oil', 'Olive'],
          rhymingPair: ['Cake', 'Bake']
        }
      ],
      conversationTerms: [
        { en: "How old are you? — I am seven years old.", ar: "كم عمرك؟ — عمري سبع سنوات." },
        { en: "Happy birthday to you, Amira!", ar: "عيد ميلاد سعيد يا أميرة!" }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Inquiring and Stating Age (How old are you? I am...)",
          ruleExplanationAr: "للسؤال عن العمر نسأل: How old are you? والإجابة: I am + [العمر] + years old.",
          structureFormula: "How old are you? — I am + [Number] + years old.",
          examples: [
            { en: "How old are you? — I am six.", ar: "كم عمرك؟ — عمري ست سنوات." },
            { en: "I am seven years old today.", ar: "أنا عمري سبع سنوات اليوم." }
          ],
          visualPatternBlocks: ["How old are you?", "I am [number]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['am', 'seven', 'I', 'years', 'old'],
          correctOrder: ['I', 'am', 'seven', 'years', 'old'],
          translationAr: 'عمري سبع سنوات'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify the hard /k/ sound in Cake and Candle.',
        prompt: 'Which word begins with /k/?',
        targetResponses: ['Cake', 'Candle', 'Card'],
        scaffoldingHints: ['Sounds like: /k/ /k/ Cake']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p1_u4_l1_q1',
          type: 'mcq',
          questionPrompt: 'On a birthday, we put lit ______ on top of the cake.',
          options: ['candles', 'shoes', 'books', 'pencils'],
          correctAnswer: 'candles',
          explanationAr: 'نضع الشموع (candles) على كعكة عيد الميلاد.',
          marks: 1
        },
        {
          id: 'p1_u4_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word starts with letter C (/k/)?',
          options: ['Cake', 'Orange', 'Apple', 'Door'],
          correctAnswer: 'Cake',
          explanationAr: 'كلمة Cake تبدأ بحرف C وصوته /k/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p1_u4_l2_q1',
          type: 'fill_in_the_blank',
          questionPrompt: 'How ______ are you? — I am six.',
          options: ['old', 'many', 'much', 'tall'],
          correctAnswer: 'old',
          explanationAr: 'السؤال عن العمر هو How old are you?',
          marks: 1
        },
        {
          id: 'p1_u4_l2_q2',
          type: 'matching',
          questionPrompt: 'Look at the party: "Happy ______ to you!"',
          options: ['birthday', 'ruler', 'pencil', 'nose'],
          correctAnswer: 'birthday',
          explanationAr: 'التهنئة بعيد الميلاد: Happy birthday!',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p1_u4_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [seven - am - I - old - years].',
          options: ['I am seven years old', 'Seven years old am I', 'Am I seven years old', 'I seven am years old'],
          correctAnswer: 'I am seven years old',
          explanationAr: 'الترتيب: I am seven years old.',
          marks: 2
        },
        {
          id: 'p1_u4_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [candles - ten - are - There].',
          options: ['There are ten candles', 'Ten candles are there', 'Are there ten candles', 'There ten candles are'],
          correctAnswer: 'There are ten candles',
          explanationAr: 'الترتيب: There are ten candles (يوجد عشر شمعات).',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p1_u4_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: Count: 1, 2, 3, 4, ______ comes next.',
          options: ['5 (five)', '10 (ten)', '0 (zero)', '100'],
          correctAnswer: '5 (five)',
          explanationAr: 'الرقم التالي للعدد 4 هو 5 (five).',
          marks: 1
        },
        {
          id: 'p1_u4_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: "How old are you, Hany?" — "I am ______ years old."',
          options: ['seven', 'book', 'red', 'pencil'],
          correctAnswer: 'seven',
          explanationAr: 'الإجابة عن العمر تكون بعدد (seven).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p1_u4_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write how old you are: "I am ______ years old today!"',
          correctAnswer: 'seven years old today',
          explanationAr: 'يكتب الطالب عمره بالأرقام أو الحروف.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P1 - UNIT 5: With My Family (مع عائلتي وأفراد الأسرة)
  // -----------------------------------------------------------------------
  {
    unitId: 'p1_t1_c_u5',
    grade: 'primary_1',
    track: 'connect',
    term: 1,
    unitNumber: 5,
    unitTitleEn: 'On the Farm',
    unitTitleAr: 'مع عائلتي وأفراد الأسرة والمشاعر الطيبة',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p1_u5_w1',
          word: 'Father',
          phonetics: '/ˈfɑː.ðər/',
          arabicMeaning: 'أب',
          partOfSpeech: 'noun',
          exampleSentence: 'My father is kind and strong.',
          visualCue: 'family_father'
        },
        {
          id: 'p1_u5_w2',
          word: 'Mother',
          phonetics: '/ˈmʌð.ər/',
          arabicMeaning: 'أم',
          partOfSpeech: 'noun',
          exampleSentence: 'My mother prepares delicious food.',
          visualCue: 'family_mother'
        },
        {
          id: 'p1_u5_w3',
          word: 'Brother',
          phonetics: '/ˈbrʌð.ər/',
          arabicMeaning: 'أخ',
          partOfSpeech: 'noun',
          exampleSentence: 'My brother plays football with me.',
          visualCue: 'family_brother'
        },
        {
          id: 'p1_u5_w4',
          word: 'Sister',
          phonetics: '/ˈsɪs.tər/',
          arabicMeaning: 'أخت',
          partOfSpeech: 'noun',
          exampleSentence: 'This is my sister Hana.',
          visualCue: 'family_sister'
        },
        {
          id: 'p1_u5_w5',
          word: 'Grandfather',
          phonetics: '/ˈɡræn.fɑː.ðər/',
          arabicMeaning: 'جد',
          partOfSpeech: 'noun',
          exampleSentence: 'My grandfather tells sweet stories.',
          visualCue: 'family_grandpa'
        }
      ],
      phonics: [
        {
          letterSound: 'Sound /f/ (Letter F) and /t/ (Letter T)',
          sampleWords: ['Father', 'Family', 'Flag', 'Tea', 'Tree'],
          rhymingPair: ['Tree', 'Bee']
        }
      ],
      conversationTerms: [
        { en: "Have some tea, Grandmother, please.", ar: "تفضلي بعض الشاي يا جدتي من فضلك." },
        { en: "Thank you, Hany! You are very kind.", ar: "شكراً لك يا هاني! أنت طيب جداً." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Introducing Family Members (This is my...)",
          ruleExplanationAr: "لتقديم أفراد العائلة بأدب نقول: This is my + [فرد العائلة].",
          structureFormula: "This is my + [father / mother / sister / brother].",
          examples: [
            { en: "This is my father.", ar: "هذا أبي." },
            { en: "This is my mother.", ar: "هذه أمي." }
          ],
          visualPatternBlocks: ["This is my", "[family member]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['my', 'is', 'This', 'mother'],
          correctOrder: ['This', 'is', 'my', 'mother'],
          translationAr: 'هذه أمي'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the /f/ sound in Father and Family.',
        prompt: 'Which word starts with /f/?',
        targetResponses: ['Father', 'Family'],
        scaffoldingHints: ['Listen: /f/ /f/ Father']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p1_u5_l1_q1',
          type: 'mcq',
          questionPrompt: 'Your mother and father together are your ______.',
          options: ['parents', 'books', 'rulers', 'cars'],
          correctAnswer: 'parents',
          explanationAr: 'الأب والأم معاً هما الوالدان (parents).',
          marks: 1
        },
        {
          id: 'p1_u5_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word starts with letter F (/f/)?',
          options: ['Father', 'Mother', 'Sister', 'Brother'],
          correctAnswer: 'Father',
          explanationAr: 'كلمة Father تبدأ بحرف F وصوته /f/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p1_u5_l2_q1',
          type: 'matching',
          questionPrompt: 'Polite offering: "Have some tea, Grandmother." — "______ you, Hany!"',
          options: ['Thank', 'Open', 'Close', 'Kick'],
          correctAnswer: 'Thank',
          explanationAr: 'الرد المهذب على الضيافة هو Thank you (شكراً لك).',
          marks: 1
        },
        {
          id: 'p1_u5_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'This ______ my grandfather.',
          options: ['is', 'are', 'am', 'be'],
          correctAnswer: 'is',
          explanationAr: 'مع المفرد This نستخدم is.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p1_u5_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [my - is - father - This].',
          options: ['This is my father', 'My father is this', 'Is this my father', 'Father is my this'],
          correctAnswer: 'This is my father',
          explanationAr: 'الترتيب الصحيح: This is my father.',
          marks: 2
        },
        {
          id: 'p1_u5_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [tea - some - Have - please].',
          options: ['Have some tea please', 'Tea some have please', 'Some please have tea', 'Have tea please some'],
          correctAnswer: 'Have some tea please',
          explanationAr: 'الترتيب: Have some tea, please.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p1_u5_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The mother of your mother is your ______.',
          options: ['grandmother', 'brother', 'uncle', 'father'],
          correctAnswer: 'grandmother',
          explanationAr: 'والدة الأم أو الأب هي الجدة (grandmother).',
          marks: 1
        },
        {
          id: 'p1_u5_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: Hany is polite. He gives his grandfather a cup of ______.',
          options: ['warm tea', 'stones', 'pens', 'shoes'],
          correctAnswer: 'warm tea',
          explanationAr: 'يقدم هاني لجده كوباً من الشاي الدافئ بأدب.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p1_u5_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write a sentence about your family: "I love my ______."',
          correctAnswer: 'family very much',
          explanationAr: 'يكتب الطالب حبه لأسرته (family).',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P1 - UNIT 6: Let's Play Music! (هيا نعزف الموسيقى)
  // -----------------------------------------------------------------------
  {
    unitId: 'p1_t1_c_u6',
    grade: 'primary_1',
    track: 'connect',
    term: 1,
    unitNumber: 6,
    unitTitleEn: 'Animals Around Me',
    unitTitleAr: 'هيا نعزف الموسيقى والآلات الموسيقية',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p1_u6_w1',
          word: 'Guitar',
          phonetics: '/ɡɪˈtɑːr/',
          arabicMeaning: 'جيتار',
          partOfSpeech: 'noun',
          exampleSentence: 'I can play the guitar.',
          visualCue: 'music_guitar'
        },
        {
          id: 'p1_u6_w2',
          word: 'Drum',
          phonetics: '/drʌm/',
          arabicMeaning: 'طبلة',
          partOfSpeech: 'noun',
          exampleSentence: 'He hits the drum boom boom.',
          visualCue: 'music_drum'
        },
        {
          id: 'p1_u6_w3',
          word: 'Piano',
          phonetics: '/piˈæn.əʊ/',
          arabicMeaning: 'بيانو',
          partOfSpeech: 'noun',
          exampleSentence: 'She plays classical tunes on the piano.',
          visualCue: 'music_piano'
        },
        {
          id: 'p1_u6_w4',
          word: 'Flute',
          phonetics: '/fluːt/',
          arabicMeaning: 'ناي / مزمار',
          partOfSpeech: 'noun',
          exampleSentence: 'The flute produces soft sweet notes.',
          visualCue: 'music_flute'
        },
        {
          id: 'p1_u6_w5',
          word: 'Triangle',
          phonetics: '/ˈtraɪ.æŋ.ɡəl/',
          arabicMeaning: 'مثلث موسيقي',
          partOfSpeech: 'noun',
          exampleSentence: 'Strike the triangle ding ding.',
          visualCue: 'music_triangle'
        }
      ],
      phonics: [
        {
          letterSound: 'Sound /d/ (Letter D) and /f/ (Letter F)',
          sampleWords: ['Drum', 'Dog', 'Door', 'Flute', 'Flag'],
          rhymingPair: ['Dog', 'Frog']
        }
      ],
      conversationTerms: [
        { en: "I can play the drum. Listen!", ar: "أستطيع عزف الطبلة. استمع!" },
        { en: "Let's play music together in the band!", ar: "هيا نعزف الموسيقى معاً في الفرقة!" }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Ability with Modal 'can' (I can play...)",
          ruleExplanationAr: "للتعبير عن القدرة على عزف آلة موسيقية نستخدم: I can play the + [الآلة].",
          structureFormula: "Subject + can + play + the + [instrument]",
          examples: [
            { en: "I can play the piano.", ar: "أنا أستطيع عزف البيانو." },
            { en: "He can play the drum.", ar: "هو يستطيع عزف الطبلة." }
          ],
          visualPatternBlocks: ["I can play", "the [instrument]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['can', 'I', 'play', 'the', 'guitar'],
          correctOrder: ['I', 'can', 'play', 'the', 'guitar'],
          translationAr: 'أستطيع عزف الجيتار'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify the initial /d/ sound in Drum and Dog.',
        prompt: 'Which word starts with /d/?',
        targetResponses: ['Drum', 'Dog'],
        scaffoldingHints: ['Listen: /d/ /d/ Drum']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p1_u6_l1_q1',
          type: 'mcq',
          questionPrompt: 'A musical instrument with strings that you strum is a ______.',
          options: ['guitar', 'chair', 'book', 'shoe'],
          correctAnswer: 'guitar',
          explanationAr: 'الجيتار (guitar) آلة وترية موسيقية.',
          marks: 1
        },
        {
          id: 'p1_u6_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word starts with letter D (/d/)?',
          options: ['Drum', 'Flute', 'Piano', 'Guitar'],
          correctAnswer: 'Drum',
          explanationAr: 'كلمة Drum تبدأ بحرف D وصوته /d/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p1_u6_l2_q1',
          type: 'fill_in_the_blank',
          questionPrompt: 'I can play ______ drum in the school band.',
          options: ['the', 'an', 'at', 'on'],
          correctAnswer: 'the',
          explanationAr: 'مع الآلات الموسيقية نستخدم أداة التعريف the (play the drum).',
          marks: 1
        },
        {
          id: 'p1_u6_l2_q2',
          type: 'matching',
          questionPrompt: 'Let\'s ______ cheerful music together.',
          options: ['play', 'sleep', 'wash', 'touch'],
          correctAnswer: 'play',
          explanationAr: 'نقول play music (يعزف موسيقى).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p1_u6_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [flute - can - the - I - play].',
          options: ['I can play the flute', 'The flute can play I', 'Can I play the flute', 'Play the flute can I'],
          correctAnswer: 'I can play the flute',
          explanationAr: 'الترتيب: I can play the flute.',
          marks: 2
        },
        {
          id: 'p1_u6_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [music - Let\'s - play - together].',
          options: ["Let's play music together", "Music let's play together", "Play music let's together", "Together play music let's"],
          correctAnswer: "Let's play music together",
          explanationAr: "الترتيب: Let's play music together.",
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p1_u6_l4_q1',
          type: 'mcq',
          questionPrompt: "Practice MOE Mock: Let's ______ music together in our class concert.",
          options: ['make', 'eat', 'sleep', 'brush'],
          correctAnswer: 'make',
          explanationAr: "التعبير: make music (يصنع ويعزف موسيقى).",
          marks: 1
        },
        {
          id: 'p1_u6_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: Youssef hits the drum with sticks. It makes a ______ sound.',
          options: ['loud boom boom', 'green colour', 'cold temperature', 'silent book'],
          correctAnswer: 'loud boom boom',
          explanationAr: 'صوت الطبلة boom boom.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p1_u6_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write which instrument you like: "I like the ______ because ______."',
          correctAnswer: 'piano because it has beautiful sounds',
          explanationAr: 'يكتب الطالب آلته الموسيقية المفضلة والسبب.',
          marks: 3
        }
      ]
    }
  }
];

// =========================================================================
// PRIMARY 2 CURRICULUM (CONNECT 2 - TERM 1) - UNITS 1 TO 6
// =========================================================================
export const primary2Curriculum: PrimaryLessonContent[] = [
  // -----------------------------------------------------------------------
  // P2 - UNIT 1: Meet My Family (تعرف على عائلتي والتحيات)
  // -----------------------------------------------------------------------
  {
    unitId: 'p2_t1_c_u1',
    grade: 'primary_2',
    track: 'connect',
    term: 1,
    unitNumber: 1,
    unitTitleEn: "Let's Get Started!",
    unitTitleAr: 'تعرف على عائلتي والتحيات اليومية',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p2_u1_w1',
          word: 'Parents',
          phonetics: '/ˈpeə.rənts/',
          arabicMeaning: 'الوالدان (الأب والأم)',
          partOfSpeech: 'noun',
          exampleSentence: 'These are my loving parents.',
          visualCue: 'family_parents'
        },
        {
          id: 'p2_u1_w2',
          word: 'Grandparents',
          phonetics: '/ˈɡræn.peə.rənts/',
          arabicMeaning: 'الجدان (الجد والجدة)',
          partOfSpeech: 'noun',
          exampleSentence: 'These are my grandparents.',
          visualCue: 'grandparents'
        },
        {
          id: 'p2_u1_w3',
          word: 'Uncle',
          phonetics: '/ˈʌŋ.kəl/',
          arabicMeaning: 'عم / خال',
          partOfSpeech: 'noun',
          exampleSentence: 'My uncle Amr wears glasses.',
          visualCue: 'uncle_man'
        },
        {
          id: 'p2_u1_w4',
          word: 'Cousin',
          phonetics: '/ˈkʌz.ən/',
          arabicMeaning: 'ابن / ابنة العم أو الخال',
          partOfSpeech: 'noun',
          exampleSentence: 'My cousin Mazen is five years old.',
          visualCue: 'cousin_friend'
        },
        {
          id: 'p2_u1_w5',
          word: 'Morning',
          phonetics: '/ˈmɔː.nɪŋ/',
          arabicMeaning: 'الصباح',
          partOfSpeech: 'noun',
          exampleSentence: 'In the morning, the sun comes up.',
          visualCue: 'sun_rise'
        }
      ],
      phonics: [
        {
          letterSound: 'Digraph /tʃ/ (Letters CH)',
          sampleWords: ['Children', 'Chicken', 'Beach', 'Chips'],
          rhymingPair: ['Beach', 'Peach']
        }
      ],
      conversationTerms: [
        { en: "Good morning, Grandpa! How are you?", ar: "صباح الخير يا جدي! كيف حالك؟" },
        { en: "Good evening, everyone! Let's have dinner.", ar: "مساء الخير للجميع! هيا نتناول العشاء." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Singular vs. Plural Demonstratives (This is / These are)",
          ruleExplanationAr: "نستخدم This is مع المفرد القريب (This is my friend)، ونستخدم These are مع الجمع القريب (These are my parents).",
          structureFormula: "This is my + [singular] / These are my + [plural]",
          examples: [
            { en: "This is my sister.", ar: "هذه أختي." },
            { en: "These are my grandparents.", ar: "هؤلاء هم جديا." }
          ],
          visualPatternBlocks: ["This is", "These are", "[noun]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['are', 'my', 'These', 'grandparents'],
          correctOrder: ['These', 'are', 'my', 'grandparents'],
          translationAr: 'هؤلاء هم جديا'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the /tʃ/ digraph sound in Children and Chicken.',
        prompt: 'Which word contains the /ch/ sound?',
        targetResponses: ['Children', 'Chicken', 'Beach'],
        scaffoldingHints: ['Sounds like: /tʃ/ in Chicken']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p2_u1_l1_q1',
          type: 'mcq',
          questionPrompt: 'In the morning when the sun rises, we say ______.',
          options: ['Good morning', 'Good night', 'Goodbye', 'Good afternoon'],
          correctAnswer: 'Good morning',
          explanationAr: 'في الصباح نقول صباح الخير (Good morning).',
          marks: 1
        },
        {
          id: 'p2_u1_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word starts with the /ch/ digraph sound?',
          options: ['Children', 'Mother', 'Father', 'Sister'],
          correctAnswer: 'Children',
          explanationAr: 'كلمة Children تبدأ بالصوت /ch/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p2_u1_l2_q1',
          type: 'matching',
          questionPrompt: 'Choose the correct word: "______ is my sister."',
          options: ['This', 'These', 'Those', 'They'],
          correctAnswer: 'This',
          explanationAr: 'مع المفرد sister نستخدم This is.',
          marks: 1
        },
        {
          id: 'p2_u1_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: '"These ______ my cousins."',
          options: ['are', 'is', 'am', 'was'],
          correctAnswer: 'are',
          explanationAr: 'مع اسم الإشارة للجمع These نستخدم are.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p2_u1_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [grandparents - are - my - These].',
          options: ['These are my grandparents', 'My grandparents are these', 'Are these my grandparents', 'These grandparents are my'],
          correctAnswer: 'These are my grandparents',
          explanationAr: 'الترتيب الصحيح: These are my grandparents.',
          marks: 2
        },
        {
          id: 'p2_u1_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [sister - This - my - is].',
          options: ['This is my sister', 'My sister is this', 'Is this my sister', 'This sister is my'],
          correctAnswer: 'This is my sister',
          explanationAr: 'الترتيب: This is my sister.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p2_u1_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The son of my uncle is my ______.',
          options: ['cousin', 'grandfather', 'sister', 'mother'],
          correctAnswer: 'cousin',
          explanationAr: 'ابن العم أو الخال هو cousin.',
          marks: 1
        },
        {
          id: 'p2_u1_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: At 9:00 PM when we go to sleep, we say ______.',
          options: ['Good night', 'Good morning', 'Hello', 'Play'],
          correctAnswer: 'Good night',
          explanationAr: 'قبل النوم نقول تصبح على خير (Good night).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p2_u1_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Introduce your friends politely: "These are my ______ and this is ______."',
          correctAnswer: 'friends and this is my best friend Hany',
          explanationAr: 'يقوم الطالب بالتقديم باستخدام صيغتي الجمع والمفرد.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P2 - UNIT 2: My Body (جسمي والجمع الشاذ وأعضاء الكائنات)
  // -----------------------------------------------------------------------
  {
    unitId: 'p2_t1_c_u2',
    grade: 'primary_2',
    track: 'connect',
    term: 1,
    unitNumber: 2,
    unitTitleEn: "Colors, Shapes, and Numbers",
    unitTitleAr: 'جسمي والجمع الشاذ وأعضاء الكائنات الحية',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p2_u2_w1',
          word: 'Head',
          phonetics: '/hed/',
          arabicMeaning: 'رأس',
          partOfSpeech: 'noun',
          exampleSentence: 'I have one head with dark hair.',
          visualCue: 'human_head'
        },
        {
          id: 'p2_u2_w2',
          word: 'Feet',
          phonetics: '/fiːt/',
          arabicMeaning: 'أقدام (جمع قدم foot)',
          partOfSpeech: 'noun',
          exampleSentence: 'I have two feet to run fast.',
          visualCue: 'feet_shoes'
        },
        {
          id: 'p2_u2_w3',
          word: 'Teeth',
          phonetics: '/tiːθ/',
          arabicMeaning: 'أسنان (جمع سن tooth)',
          partOfSpeech: 'noun',
          exampleSentence: 'I brush my white teeth twice every day.',
          visualCue: 'clean_teeth'
        },
        {
          id: 'p2_u2_w4',
          word: 'Beak',
          phonetics: '/biːk/',
          arabicMeaning: 'منقار الطائر',
          partOfSpeech: 'noun',
          exampleSentence: 'The little yellow bird has a sharp beak.',
          visualCue: 'bird_beak'
        },
        {
          id: 'p2_u2_w5',
          word: 'Wings',
          phonetics: '/wɪŋz/',
          arabicMeaning: 'أجنحة الطائر',
          partOfSpeech: 'noun',
          exampleSentence: 'Birds use their two wings to fly high.',
          visualCue: 'bird_wings'
        }
      ],
      phonics: [
        {
          letterSound: 'Digraph /θ/ (Letters TH) and Long /iː/ (Letters EE)',
          sampleWords: ['Three', 'Thirteen', 'Mouth', 'Teeth', 'Feet', 'Green'],
          rhymingPair: ['Feet', 'Meet']
        }
      ],
      conversationTerms: [
        { en: "A bird has two legs, two wings, and one beak.", ar: "للطائر ساقان وجناحان ومنقار واحد." },
        { en: "A monkey has two arms, two legs, and a long face.", ar: "للقرد ذراعان وساقان ووجه طويل." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Irregular Plurals (one foot -> two feet, one tooth -> teeth)",
          ruleExplanationAr: "بعض الأسماء تجمع جمعاً غير منتظم بدون إضافة s: foot تصبح feet (أقدام)، و tooth تصبح teeth (أسنان).",
          structureFormula: "one foot -> two feet / one tooth -> thirty-two teeth",
          examples: [
            { en: "I have one foot on the grass.", ar: "لدي قدم واحدة على العشب." },
            { en: "I have two feet.", ar: "لدي قدمان اثنتان." },
            { en: "Brush your teeth every morning.", ar: "اغسل أسنانك كل صباح." }
          ],
          visualPatternBlocks: ["one foot -> feet", "one tooth -> teeth"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['two', 'have', 'I', 'feet'],
          correctOrder: ['I', 'have', 'two', 'feet'],
          translationAr: 'لدي قدمان'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Practice the /th/ sound in Three and Mouth, and /ee/ in Teeth.',
        prompt: 'Which word contains the long /ee/ sound?',
        targetResponses: ['Teeth', 'Feet', 'Green'],
        scaffoldingHints: ['Pronounce: /iː/ like Teeth']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p2_u2_l1_q1',
          type: 'mcq',
          questionPrompt: 'Birds eat seeds using their ______.',
          options: ['beak', 'arm', 'hand', 'shoes'],
          correctAnswer: 'beak',
          explanationAr: 'تأكل الطيور الحبوب بمنقارها (beak).',
          marks: 1
        },
        {
          id: 'p2_u2_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word has the /th/ sound /θ/?',
          options: ['Three', 'Cat', 'Dog', 'Book'],
          correctAnswer: 'Three',
          explanationAr: 'كلمة Three تبدأ بصوت /θ/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p2_u2_l2_q1',
          type: 'matching',
          questionPrompt: 'Complete: "The dentist checks my ______."',
          options: ['teeth', 'foot', 'pencil', 'car'],
          correctAnswer: 'teeth',
          explanationAr: 'طبيب الأسنان يفحص الأسنان (teeth).',
          marks: 1
        },
        {
          id: 'p2_u2_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'A bird has ______ wings to fly.',
          options: ['two', 'ten', 'one', 'zero'],
          correctAnswer: 'two',
          explanationAr: 'للطائر جناحان (two wings).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p2_u2_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [two - I - have - feet].',
          options: ['I have two feet', 'Two feet have I', 'Have I two feet', 'I two have feet'],
          correctAnswer: 'I have two feet',
          explanationAr: 'الترتيب: I have two feet (لدي قدمان).',
          marks: 2
        },
        {
          id: 'p2_u2_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [beak - has - A - bird - a].',
          options: ['A bird has a beak', 'A beak has a bird', 'Has a bird a beak', 'Bird a has a beak'],
          correctAnswer: 'A bird has a beak',
          explanationAr: 'الترتيب: A bird has a beak (للطائر منقار).',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p2_u2_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: Plural of tooth is ______.',
          options: ['teeth', 'tooths', 'toothes', 'teethes'],
          correctAnswer: 'teeth',
          explanationAr: 'جمع كلمة tooth غير منتظم وهو teeth.',
          marks: 1
        },
        {
          id: 'p2_u2_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: A monkey does not have a beak. It has a ______.',
          options: ['mouth and teeth', 'wings', 'feathers', 'beak'],
          correctAnswer: 'mouth and teeth',
          explanationAr: 'القرد ليس له منقار بل له فم وأسنان.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p2_u2_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe a bird in one sentence: "A bird has ______ and ______."',
          correctAnswer: 'two wings and a beak',
          explanationAr: 'يصف الطالب الطائر بذكر جناحيه ومنقاره.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P2 - UNIT 3: Off to School (إلى المدرسة والملابس والساعة)
  // -----------------------------------------------------------------------
  {
    unitId: 'p2_t1_c_u3',
    grade: 'primary_2',
    track: 'connect',
    term: 1,
    unitNumber: 3,
    unitTitleEn: "Classroom Actions & Routines",
    unitTitleAr: 'إلى المدرسة والملابس وأوقات الساعة',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p2_u3_w1',
          word: 'Shirt',
          phonetics: '/ʃɜːt/',
          arabicMeaning: 'قميص',
          partOfSpeech: 'noun',
          exampleSentence: 'I wear a neat white shirt to school.',
          visualCue: 'clothes_shirt'
        },
        {
          id: 'p2_u3_w2',
          word: 'Dress',
          phonetics: '/dres/',
          arabicMeaning: 'فستان',
          partOfSpeech: 'noun',
          exampleSentence: 'Hana wears a pretty yellow dress.',
          visualCue: 'clothes_dress'
        },
        {
          id: 'p2_u3_w3',
          word: 'Glasses',
          phonetics: '/ˈɡlɑː.sɪz/',
          arabicMeaning: 'نظارة طبية',
          partOfSpeech: 'noun',
          exampleSentence: 'My grandfather wears his reading glasses.',
          visualCue: 'eye_glasses'
        },
        {
          id: 'p2_u3_w4',
          word: 'Watch',
          phonetics: '/wɒtʃ/',
          arabicMeaning: 'ساعة يد',
          partOfSpeech: 'noun',
          exampleSentence: 'Look at my new wrist watch.',
          visualCue: 'wrist_watch'
        },
        {
          id: 'p2_u3_w5',
          word: "O'clock",
          phonetics: '/əˈklɒk/',
          arabicMeaning: 'بالضبط (للوقت)',
          partOfSpeech: 'phrase',
          exampleSentence: "It is exactly seven o'clock.",
          visualCue: 'wall_clock'
        }
      ],
      phonics: [
        {
          letterSound: 'Digraph /ʃ/ (Letters SH) and Sound /ɑː/ (Letters AR)',
          sampleWords: ['Shirt', 'Shoes', 'Sheep', 'Fish', 'Car', 'Park', 'Star'],
          rhymingPair: ['Car', 'Star']
        }
      ],
      conversationTerms: [
        { en: "What time is it? — It's seven o'clock.", ar: "كم الساعة؟ — الساعة السابعة تماماً." },
        { en: "These are my brown shoes.", ar: "هذا حذائي البني." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Telling Time on the Hour (What time is it? It's ... o'clock)",
          ruleExplanationAr: "للسؤال عن الوقت بالساعة الكاملة نسأل: What time is it? والإجابة: It's + [الرقم] + o'clock.",
          structureFormula: "What time is it? — It's + [Number] + o'clock.",
          examples: [
            { en: "What time is it? — It's two o'clock.", ar: "كم الساعة؟ — إنها الثانية تماماً." },
            { en: "It's seven o'clock; time for school!", ar: "إنها السابعة تماماً، حان وقت المدرسة!" }
          ],
          visualPatternBlocks: ["What time is it?", "It's [number] o'clock"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['is', 'time', 'What', 'it?'],
          correctOrder: ['What', 'time', 'is', 'it?'],
          translationAr: 'كم الوقت؟'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the /sh/ sound in Shirt and Shoes, and /ar/ in Car.',
        prompt: 'Which word contains the /sh/ sound?',
        targetResponses: ['Shirt', 'Shoes', 'Fish'],
        scaffoldingHints: ['Listen: /ʃ/ in Shoes']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p2_u3_l1_q1',
          type: 'mcq',
          questionPrompt: 'On a sunny day, we wear a ______ on our head for shade.',
          options: ['hat', 'pencil', 'table', 'bed'],
          correctAnswer: 'hat',
          explanationAr: 'نرتدي القبعة (hat) لحماية رؤوسنا من الشمس.',
          marks: 1
        },
        {
          id: 'p2_u3_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word starts with the /sh/ sound?',
          options: ['Shirt', 'Car', 'Star', 'Pen'],
          correctAnswer: 'Shirt',
          explanationAr: 'كلمة Shirt تبدأ بالصوت /ʃ/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p2_u3_l2_q1',
          type: 'matching',
          questionPrompt: 'Telling time: "What time is it?" — "It\'s seven ______."',
          options: ["o'clock", 'shoes', 'glasses', 'boots'],
          correctAnswer: "o'clock",
          explanationAr: "الساعة بالضبط يتبعها o'clock.",
          marks: 1
        },
        {
          id: 'p2_u3_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: '"These are my ______." (حذاء)',
          options: ['shoes', 'shirt', 'hat', 'watch'],
          correctAnswer: 'shoes',
          explanationAr: 'كلمة shoes جمع يناسبها These are.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p2_u3_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [glasses - are - my - These].',
          options: ['These are my glasses', 'My glasses are these', 'Are these my glasses', 'These glasses are my'],
          correctAnswer: 'These are my glasses',
          explanationAr: 'الترتيب: These are my glasses (هذه نظارتي).',
          marks: 2
        },
        {
          id: 'p2_u3_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [is - What - it - time - ?].',
          options: ['What time is it ?', 'Time what is it ?', 'Is it what time ?', 'What is time it ?'],
          correctAnswer: 'What time is it ?',
          explanationAr: 'السؤال عن الوقت: What time is it?',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p2_u3_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: We check the current time by looking at a ______.',
          options: ['clock or watch', 'ruler', 'sock', 'jacket'],
          correctAnswer: 'clock or watch',
          explanationAr: 'نعرف الوقت من خلال الساعة (clock or watch).',
          marks: 1
        },
        {
          id: 'p2_u3_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: "This is my coat." — The word coat is ______.',
          options: ['singular', 'plural', 'a verb', 'a number'],
          correctAnswer: 'singular',
          explanationAr: 'كلمة coat مفرد لأنها سبقت بـ This is.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p2_u3_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe what you wear to school: "I wear my ______ and ______."',
          correctAnswer: 'school shirt and blue trousers',
          explanationAr: 'يكتب الطالب ملابسه المدرسية بالإنجليزية.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P2 - UNIT 4: Time to Play Sports! (وقت الرياضة)
  // -----------------------------------------------------------------------
  {
    unitId: 'p2_t1_c_u4',
    grade: 'primary_2',
    track: 'connect',
    term: 1,
    unitNumber: 4,
    unitTitleEn: "Everyday Life",
    unitTitleAr: 'وقت ممارسة الرياضة والأفعال الحركية والقدرة',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p2_u4_w1',
          word: 'Football',
          phonetics: '/ˈfʊt.bɔːl/',
          arabicMeaning: 'كرة القدم',
          partOfSpeech: 'noun',
          exampleSentence: 'I can play football with my team.',
          visualCue: 'sport_football'
        },
        {
          id: 'p2_u4_w2',
          word: 'Basketball',
          phonetics: '/ˈbɑː.skɪt.bɔːl/',
          arabicMeaning: 'كرة السلة',
          partOfSpeech: 'noun',
          exampleSentence: 'Throw the ball into the hoop in basketball.',
          visualCue: 'sport_basketball'
        },
        {
          id: 'p2_u4_w3',
          word: 'Tennis',
          phonetics: '/ˈten.ɪs/',
          arabicMeaning: 'تنس',
          partOfSpeech: 'noun',
          exampleSentence: 'I hit the tennis ball with my racket.',
          visualCue: 'sport_tennis'
        },
        {
          id: 'p2_u4_w4',
          word: 'Kick',
          phonetics: '/kɪk/',
          arabicMeaning: 'يركل الكرة بالقدم',
          partOfSpeech: 'verb',
          exampleSentence: 'Kick the ball hard towards the goal!',
          visualCue: 'action_kick'
        },
        {
          id: 'p2_u4_w5',
          word: 'Swimming',
          phonetics: '/ˈswɪm.ɪŋ/',
          arabicMeaning: 'السباحة',
          partOfSpeech: 'noun',
          exampleSentence: 'Swimming in the cool pool is refreshing.',
          visualCue: 'action_swim'
        }
      ],
      phonics: [
        {
          letterSound: 'Sound /ŋ/ (Letters NG) and /sp/ (Letters SP)',
          sampleWords: ['Sing', 'Ring', 'King', 'Running', 'Sport', 'Spring'],
          rhymingPair: ['King', 'Ring']
        }
      ],
      conversationTerms: [
        { en: "Can you kick the ball? — Yes, I can!", ar: "هل تستطيع ركل الكرة؟ — نعم، أستطيع!" },
        { en: "I can't play tennis, but I can swim.", ar: "لا أستطيع لعب التنس، لكنني أستطيع السباحة." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Ability Questions with 'Can you...?'",
          ruleExplanationAr: "للسؤال عن القدرة نستخدم: Can you + [الفعل في المصدر]؟ وتكون الإجابة: Yes, I can / No, I can't.",
          structureFormula: "Can you + verb? — Yes, I can / No, I can't.",
          examples: [
            { en: "Can you swim? — Yes, I can.", ar: "هل تستطيع السباحة؟ — نعم، أستطيع." },
            { en: "Can you play basketball? — No, I can't.", ar: "هل تستطيع لعب السلة؟ — لا، لا أستطيع." }
          ],
          visualPatternBlocks: ["Can you [verb]?", "Yes, I can"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['play', 'I', 'tennis', 'can'],
          correctOrder: ['I', 'can', 'play', 'tennis'],
          translationAr: 'أستطيع لعب التنس'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the /ng/ nasal sound in Running, Sing, and Ring.',
        prompt: 'Which word ends with the /ng/ sound?',
        targetResponses: ['Sing', 'Ring', 'Running'],
        scaffoldingHints: ['Listen to the end: /ŋ/ in Sing']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p2_u4_l1_q1',
          type: 'mcq',
          questionPrompt: 'In football, players use their feet to ______ the ball.',
          options: ['kick', 'read', 'eat', 'sleep'],
          correctAnswer: 'kick',
          explanationAr: 'في كرة القدم يركل (kick) اللاعبون الكرة بأقدامهم.',
          marks: 1
        },
        {
          id: 'p2_u4_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word contains the /ng/ sound?',
          options: ['Sing', 'Ball', 'Kick', 'Hat'],
          correctAnswer: 'Sing',
          explanationAr: 'كلمة Sing تنتهي بصوت /ng/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p2_u4_l2_q1',
          type: 'matching',
          questionPrompt: 'Can you swim? — "Yes, I ______."',
          options: ['can', 'am', 'is', 'have'],
          correctAnswer: 'can',
          explanationAr: 'الإجابة المثبتة عن سؤال Can you هي Yes, I can.',
          marks: 1
        },
        {
          id: 'p2_u4_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'In basketball, we ______ the ball into the basket.',
          options: ['throw', 'kick', 'sleep', 'read'],
          correctAnswer: 'throw',
          explanationAr: 'في كرة السلة نرمي (throw) الكرة.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p2_u4_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [play - I - tennis - can].',
          options: ['I can play tennis', 'Tennis play can I', 'Can I play tennis', 'Play tennis can I'],
          correctAnswer: 'I can play tennis',
          explanationAr: 'الترتيب: I can play tennis.',
          marks: 2
        },
        {
          id: 'p2_u4_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [you - Can - kick - the - ball - ?].',
          options: ['Can you kick the ball ?', 'You can kick the ball ?', 'Kick you can the ball ?', 'Can kick you the ball ?'],
          correctAnswer: 'Can you kick the ball ?',
          explanationAr: 'تكوين السؤال: Can you kick the ball?',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p2_u4_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: In tennis, players hit the small yellow ball with a ______.',
          options: ['racket', 'shoe', 'book', 'pencil'],
          correctAnswer: 'racket',
          explanationAr: 'في التنس نضرب الكرة بالمضرب (racket).',
          marks: 1
        },
        {
          id: 'p2_u4_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: Mazen runs fast on the track. He is very ______.',
          options: ['active and sporty', 'sleeping', 'tired and sick', 'small pencil'],
          correctAnswer: 'active and sporty',
          explanationAr: 'مازن نشيط ورياضي (active and sporty).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p2_u4_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write your favourite sport: "My favourite sport is ______ because I can ______."',
          correctAnswer: 'swimming because I can move fast in water',
          explanationAr: 'يكتب الطالب رياضته المفضلة مع ذكر مهارته فيها.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P2 - UNIT 5: My Day (يومي والروتين اليومي)
  // -----------------------------------------------------------------------
  {
    unitId: 'p2_t1_c_u5',
    grade: 'primary_2',
    track: 'connect',
    term: 1,
    unitNumber: 5,
    unitTitleEn: "My Home",
    unitTitleAr: 'يومي والروتين اليومي وأوقات نصف الساعة',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p2_u5_w1',
          word: 'Wake up',
          phonetics: '/weɪk ʌp/',
          arabicMeaning: 'يستيقظ من النوم',
          partOfSpeech: 'verb',
          exampleSentence: "I wake up at six o'clock every morning.",
          visualCue: 'bed_wake'
        },
        {
          id: 'p2_u5_w2',
          word: 'Eat breakfast',
          phonetics: '/iːt ˈbrek.fəst/',
          arabicMeaning: 'يتناول وجبة الإفطار',
          partOfSpeech: 'phrase',
          exampleSentence: 'I eat healthy eggs and cheese for breakfast.',
          visualCue: 'healthy_breakfast'
        },
        {
          id: 'p2_u5_w3',
          word: 'Walk to school',
          phonetics: '/wɔːk tuː skuːl/',
          arabicMeaning: 'يمشي إلى المدرسة',
          partOfSpeech: 'phrase',
          exampleSentence: 'I walk to school with my sister Hana.',
          visualCue: 'walk_school'
        },
        {
          id: 'p2_u5_w4',
          word: 'Do homework',
          phonetics: '/duː ˈhəʊm.wɜːk/',
          arabicMeaning: 'يعمل الواجب المدرسي',
          partOfSpeech: 'phrase',
          exampleSentence: 'I do my English homework in the afternoon.',
          visualCue: 'desk_homework'
        },
        {
          id: 'p2_u5_w5',
          word: 'Half past',
          phonetics: '/hɑːf pɑːst/',
          arabicMeaning: 'والنصف (في التوقيت)',
          partOfSpeech: 'phrase',
          exampleSentence: "It is half past two in the afternoon.",
          visualCue: 'clock_half'
        }
      ],
      phonics: [
        {
          letterSound: 'Blends /cl/ and /fl/',
          sampleWords: ['Clock', 'Class', 'Clean', 'Flag', 'Flower', 'Flute'],
          rhymingPair: ['Clock', 'Lock']
        }
      ],
      conversationTerms: [
        { en: "What time do you wake up? — At six o'clock.", ar: "في أي وقت تستيقظ؟ — في السادسة تماماً." },
        { en: "I eat my dinner at half past seven.", ar: "أتناول عشائي في السابعة والنصف." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Present Simple Routine & Half Past (I wake up at...)",
          ruleExplanationAr: "للتعبير عن الروتين اليومي نستخدم زمن المضارع البسيط مع حرف الجر at قبل الوقت: I wake up at half past six.",
          structureFormula: "Subject + verb + at + [time] (e.g., at half past two)",
          examples: [
            { en: "I wake up at half past six.", ar: "أستيقظ في السادسة والنصف." },
            { en: "I do my homework at four o'clock.", ar: "أقوم بواجبي في الرابعة تماماً." }
          ],
          visualPatternBlocks: ["I [routine verb]", "at [time]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['school', 'go', 'to', 'I'],
          correctOrder: ['I', 'go', 'to', 'school'],
          translationAr: 'أنا أذهب إلى المدرسة'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify the /cl/ blend in Clock and /fl/ in Flag.',
        prompt: 'Which word starts with the /fl/ blend?',
        targetResponses: ['Flag', 'Flower', 'Flute'],
        scaffoldingHints: ['Listen: /fl/ in Flag']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p2_u5_l1_q1',
          type: 'mcq',
          questionPrompt: 'The first meal we eat in the morning is ______.',
          options: ['breakfast', 'dinner', 'shoes', 'pencil'],
          correctAnswer: 'breakfast',
          explanationAr: 'أول وجبة في الصباح هي الإفطار (breakfast).',
          marks: 1
        },
        {
          id: 'p2_u5_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word starts with the /cl/ blend?',
          options: ['Clock', 'Flag', 'Hand', 'Drum'],
          correctAnswer: 'Clock',
          explanationAr: 'كلمة Clock تبدأ بمزيج الحروف /cl/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p2_u5_l2_q1',
          type: 'matching',
          questionPrompt: 'Complete: "I wake ______ at six o’clock."',
          options: ['up', 'down', 'in', 'on'],
          correctAnswer: 'up',
          explanationAr: 'الفعل المركب هو wake up (يستيقظ).',
          marks: 1
        },
        {
          id: 'p2_u5_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'I eat lunch ______ two o\'clock in the afternoon.',
          options: ['at', 'on', 'in', 'to'],
          correctAnswer: 'at',
          explanationAr: 'حرف الجر المستخدم قبل التوقيت والساعات هو at.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p2_u5_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [school - go - to - I].',
          options: ['I go to school', 'School go to I', 'Go to school I', 'To school I go'],
          correctAnswer: 'I go to school',
          explanationAr: 'الترتيب الصحيح: I go to school.',
          marks: 2
        },
        {
          id: 'p2_u5_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [breakfast - I - eat - morning - the - in].',
          options: ['I eat breakfast in the morning', 'In the morning eat I breakfast', 'Breakfast I eat in the morning', 'Eat I breakfast in the morning'],
          correctAnswer: 'I eat breakfast in the morning',
          explanationAr: 'الترتيب: I eat breakfast in the morning.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p2_u5_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: "Half past two" means ______ in numbers.',
          options: ['2:30', '2:00', '12:00', '3:00'],
          correctAnswer: '2:30',
          explanationAr: 'تعبير Half past two يعني الثانية والنصف (2:30).',
          marks: 1
        },
        {
          id: 'p2_u5_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: After coming home from school, Hany ______ his homework neatly.',
          options: ['does', 'sleeps', 'breaks', 'throws'],
          correctAnswer: 'does',
          explanationAr: 'يقوم بعمل الواجب (does his homework).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p2_u5_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write what time you wake up: "I wake up at ______ and I ______."',
          correctAnswer: "seven o'clock and I brush my teeth",
          explanationAr: 'يكتب الطالب توقيت استيقاظه وما يفعله.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P2 - UNIT 6: Healthy Habits (عادات صحية والتغذية)
  // -----------------------------------------------------------------------
  {
    unitId: 'p2_t1_c_u6',
    grade: 'primary_2',
    track: 'connect',
    term: 1,
    unitNumber: 6,
    unitTitleEn: "Rooms at Home",
    unitTitleAr: 'عادات صحية والتغذية السليمة',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p2_u6_w1',
          word: 'Healthy',
          phonetics: '/ˈhel.θi/',
          arabicMeaning: 'صحي / مفيد للجسم',
          partOfSpeech: 'adjective',
          exampleSentence: 'Eating fresh apples is healthy.',
          visualCue: 'healthy_food'
        },
        {
          id: 'p2_u6_w2',
          word: 'Vegetables',
          phonetics: '/ˈvedʒ.tə.bəlz/',
          arabicMeaning: 'خضراوات طازجة',
          partOfSpeech: 'noun',
          exampleSentence: 'Carrots and tomatoes are nutritious vegetables.',
          visualCue: 'fresh_vegetables'
        },
        {
          id: 'p2_u6_w3',
          word: 'Water',
          phonetics: '/ˈwɔː.tər/',
          arabicMeaning: 'ماء نظيف',
          partOfSpeech: 'noun',
          exampleSentence: 'Drink eight glasses of clean water every day.',
          visualCue: 'water_glass'
        },
        {
          id: 'p2_u6_w4',
          word: 'Exercise',
          phonetics: '/ˈek.sə.saɪz/',
          arabicMeaning: 'يمارس الرياضة والتمرين',
          partOfSpeech: 'verb',
          exampleSentence: 'Exercise helps our muscles grow strong.',
          visualCue: 'fitness_exercise'
        },
        {
          id: 'p2_u6_w5',
          word: 'Sleep',
          phonetics: '/sliːp/',
          arabicMeaning: 'ينام نوماً كافياً',
          partOfSpeech: 'verb',
          exampleSentence: 'Children should sleep eight hours each night.',
          visualCue: 'good_sleep'
        }
      ],
      phonics: [
        {
          letterSound: 'Blends /sm/ and /sn/',
          sampleWords: ['Smile', 'Small', 'Snack', 'Snake'],
          rhymingPair: ['Small', 'Ball']
        }
      ],
      conversationTerms: [
        { en: "Drink plenty of water and eat fresh fruits.", ar: "اشرب كميات كافية من الماء وتناول الفواكه الطازجة." },
        { en: "Don't eat too much candy; it hurts your teeth.", ar: "لا تأكل الكثير من الحلوى؛ فإنها تؤذي أسنانك." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Imperatives for Health (Eat healthy food! Drink water!)",
          ruleExplanationAr: "لإعطاء نصائح أو توجيهات صحية نبدأ بالفعل في المصدر: Eat fruits! أو Don't + المصدر: Don't eat fast food.",
          structureFormula: "Verb (base) + healthy object / Don't + verb",
          examples: [
            { en: "Eat fresh vegetables.", ar: "تناول الخضراوات الطازجة." },
            { en: "Don't stay up late.", ar: "لا تسهر لوقت متأخر." }
          ],
          visualPatternBlocks: ["Eat", "Drink", "Don't [verb]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['food', 'healthy', 'Eat'],
          correctOrder: ['Eat', 'healthy', 'food'],
          translationAr: 'تناول طعاماً صحياً'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the /sm/ blend in Smile and /sn/ in Snack.',
        prompt: 'Which word begins with the /sm/ sound?',
        targetResponses: ['Smile', 'Small'],
        scaffoldingHints: ['Listen: /sm/ in Smile']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p2_u6_l1_q1',
          type: 'mcq',
          questionPrompt: 'To keep our bodies healthy, we must drink clean ______.',
          options: ['water', 'cola', 'ink', 'oil'],
          correctAnswer: 'water',
          explanationAr: 'يجب شرب الماء النظيف (water) لصحة الجسم.',
          marks: 1
        },
        {
          id: 'p2_u6_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word starts with the /sn/ blend?',
          options: ['Snack', 'Smile', 'Star', 'Shirt'],
          correctAnswer: 'Snack',
          explanationAr: 'كلمة Snack تبدأ بالصوت /sn/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p2_u6_l2_q1',
          type: 'matching',
          questionPrompt: 'Healthy habit: "______ your teeth twice a day with toothpaste."',
          options: ['Brush', 'Sleep', 'Kick', 'Break'],
          correctAnswer: 'Brush',
          explanationAr: 'نقول: Brush your teeth (اغسل أسنانك بالفرشاة).',
          marks: 1
        },
        {
          id: 'p2_u6_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'Eating plenty of apples and bananas is ______ for our body.',
          options: ['healthy', 'bad', 'sick', 'sad'],
          correctAnswer: 'healthy',
          explanationAr: 'أكل الفواكه صحي ومفيد (healthy).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p2_u6_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [food - healthy - Eat].',
          options: ['Eat healthy food', 'Healthy food eat', 'Food eat healthy', 'Eat food healthy'],
          correctAnswer: 'Eat healthy food',
          explanationAr: 'الترتيب: Eat healthy food (تناول طعاماً صحياً).',
          marks: 2
        },
        {
          id: 'p2_u6_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [water - clean - Drink - of - plenty].',
          options: ['Drink plenty of clean water', 'Clean water drink plenty of', 'Plenty of water drink clean', 'Drink clean of plenty water'],
          correctAnswer: 'Drink plenty of clean water',
          explanationAr: 'الترتيب: Drink plenty of clean water.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p2_u6_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: Fresh vegetables and fruits give our bodies vitamins and ______.',
          options: ['energy to grow strong', 'sleepiness', 'bad teeth', 'sadness'],
          correctAnswer: 'energy to grow strong',
          explanationAr: 'الخضراوات والفواكه تمنحنا الطاقة والنمو السليم.',
          marks: 1
        },
        {
          id: 'p2_u6_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: "Don\'t stay up late at night!" — This is an advice to ______.',
          options: ['get good sleep', 'eat fast food', 'play loud music', 'stop school'],
          correctAnswer: 'get good sleep',
          explanationAr: 'نصيحة بالنوم المبكر للحفاظ على الصحة.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p2_u6_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write one healthy habit you do every day: "Every day, I ______ to be healthy."',
          correctAnswer: 'drink fresh milk and exercise',
          explanationAr: 'يكتب الطالب عادة صحية يمارسها بانتظام.',
          marks: 3
        }
      ]
    }
  }
];

// =========================================================================
// PRIMARY 3 CURRICULUM (CONNECT 3 - TERM 1) - UNITS 1 TO 6
// =========================================================================
export const primary3Curriculum: PrimaryLessonContent[] = [
  // -----------------------------------------------------------------------
  // P3 - UNIT 1: I Feel Happy! (أشعر بالسعادة!)
  // -----------------------------------------------------------------------
  {
    unitId: 'p3_t1_c_u1',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 1,
    unitTitleEn: "Let's Learn Together!",
    unitTitleAr: 'أشعر بالسعادة والمشاعر المختلفة',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p3_u1_w1',
          word: 'Happy',
          phonetics: '/ˈhæp.i/',
          arabicMeaning: 'سعيد / مسرور',
          partOfSpeech: 'adjective',
          exampleSentence: 'I feel happy because today is the weekend.',
          visualCue: 'happy_face'
        },
        {
          id: 'p3_u1_w2',
          word: 'Thirsty',
          phonetics: '/ˈθɜː.sti/',
          arabicMeaning: 'عطشان',
          partOfSpeech: 'adjective',
          exampleSentence: 'After playing football in the sun, I am thirsty.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p3_u1_w3',
          word: 'Excited',
          phonetics: '/ɪkˈsaɪ.tɪd/',
          arabicMeaning: 'متحمس / في غاية الفرح',
          partOfSpeech: 'adjective',
          exampleSentence: "Daddy is coming home soon; I feel excited!",
          visualCue: 'jumping_joy'
        },
        {
          id: 'p3_u1_w4',
          word: 'Tired',
          phonetics: '/taɪəd/',
          arabicMeaning: 'متعب / مرهق',
          partOfSpeech: 'adjective',
          exampleSentence: 'Mom worked all day and feels tired.',
          visualCue: 'tired_person'
        },
        {
          id: 'p3_u1_w5',
          word: 'Kitchen',
          phonetics: '/ˈkɪtʃ.ən/',
          arabicMeaning: 'مطبخ',
          partOfSpeech: 'noun',
          exampleSentence: "Let's go to the kitchen to make a fresh snack.",
          visualCue: 'kitchen_room'
        }
      ],
      phonics: [
        {
          letterSound: 'Long /iː/ spelled EE and EA',
          sampleWords: ['Feel', 'Sleep', 'Green', 'Meet', 'Eat', 'Leaf', 'Clean', 'Meat'],
          rhymingPair: ['Sleep', 'Deep']
        }
      ],
      conversationTerms: [
        { en: "How do you feel? — I feel thirsty.", ar: "بماذا تشعر؟ — أشعر بالعطش." },
        { en: "Let's go to the kitchen and drink cool water.", ar: "هيا نذهب إلى المطبخ ونشرب ماءً منعشاً." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Inquiring About Feelings (How do you feel? I feel...)",
          ruleExplanationAr: "للسؤال عن المشاعر نسأل: How do you feel? وتكون الإجابة: I feel + [الصفة]. واقتراح نشاط نستخدم Let's + الفعل في المصدر.",
          structureFormula: "How do you feel? — I feel + [adjective]. / Let's + [verb]",
          examples: [
            { en: "How do you feel? — I feel happy.", ar: "كيف تشعر؟ — أشعر بالسعادة." },
            { en: "Let's make a healthy sandwich.", ar: "هيا نصنع شطيرة صحية." }
          ],
          visualPatternBlocks: ["How do you feel?", "I feel [adjective]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['feel', 'I', 'excited'],
          correctOrder: ['I', 'feel', 'excited'],
          translationAr: 'أشعر بالحماس'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Compare long /ee/ in Feel and /ea/ in Clean.',
        prompt: 'Which word contains the long /iː/ sound?',
        targetResponses: ['Feel', 'Sleep', 'Clean', 'Leaf'],
        scaffoldingHints: ['Pronounce the long /iː/ like Green']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u1_l1_q1',
          type: 'mcq',
          questionPrompt: 'When you want to drink water, you feel ______.',
          options: ['thirsty', 'hungry', 'sleepy', 'happy'],
          correctAnswer: 'thirsty',
          explanationAr: 'عند الرغبة في شرب الماء يشعر الإنسان بالعطش (thirsty).',
          marks: 1
        },
        {
          id: 'p3_u1_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word has the long /ee/ sound spelled with EA?',
          options: ['Clean', 'Bed', 'Red', 'Pen'],
          correctAnswer: 'Clean',
          explanationAr: 'كلمة Clean تحتوي على صوت /iː/ الطويل المكتوب بـ EA.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u1_l2_q1',
          type: 'matching',
          questionPrompt: 'Complete the dialogue: "How do you ______? — I feel happy."',
          options: ['feel', 'look', 'run', 'read'],
          correctAnswer: 'feel',
          explanationAr: 'السؤال عن المشاعر: How do you feel?',
          marks: 1
        },
        {
          id: 'p3_u1_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: '"Let\'s ______ a sandwich in the kitchen."',
          options: ['make', 'making', 'makes', 'made'],
          correctAnswer: 'make',
          explanationAr: "بعد Let's يأتي الفعل دائماً في المصدر (make).",
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u1_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [feel - I - excited].',
          options: ['I feel excited', 'Excited feel I', 'Feel I excited', 'I excited feel'],
          correctAnswer: 'I feel excited',
          explanationAr: 'الترتيب: I feel excited.',
          marks: 2
        },
        {
          id: 'p3_u1_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [kitchen - the - Let\'s - to - go].',
          options: ["Let's go to the kitchen", "To the kitchen let's go", "Go to the kitchen let's", "The kitchen let's go to"],
          correctAnswer: "Let's go to the kitchen",
          explanationAr: "الترتيب: Let's go to the kitchen.",
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u1_l4_q1',
          type: 'mcq',
          questionPrompt: "Practice MOE Mock: Let's ______ to the kitchen to help our mother.",
          options: ['go', 'goes', 'went', 'going'],
          correctAnswer: 'go',
          explanationAr: "يأتي بعد Let's الفعل في صيغة المصدر (go).",
          marks: 1
        },
        {
          id: 'p3_u1_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: Hany is very kind. He helps his tired mother clean the ______.',
          options: ['living room', 'street', 'hospital', 'roof'],
          correctAnswer: 'living room',
          explanationAr: 'يساعد هاني والدته المتعبة في تنظيف غرفة المعيشة.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u1_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write how you feel when you meet your friends: "When I see my friends, I feel ______."',
          correctAnswer: 'happy and excited to play together',
          explanationAr: 'يكتب الطالب مشاعره الصادقة عند لقاء أصدقائه.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P3 - UNIT 2: What's the Matter? (ما الأمر؟ والأمراض)
  // -----------------------------------------------------------------------
  {
    unitId: 'p3_t1_c_u2',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 2,
    unitTitleEn: "My Family and I",
    unitTitleAr: 'ما الأمر؟ والأمراض والعلاج والرعاية الصحية',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p3_u2_w1',
          word: 'Headache',
          phonetics: '/ˈhed.eɪk/',
          arabicMeaning: 'صداع في الرأس',
          partOfSpeech: 'noun',
          exampleSentence: 'I have a headache; my head hurts.',
          visualCue: 'headache_person'
        },
        {
          id: 'p3_u2_w2',
          word: 'Fever',
          phonetics: '/ˈfiː.vər/',
          arabicMeaning: 'حمى / ارتفاع حرارة الجسم',
          partOfSpeech: 'noun',
          exampleSentence: 'My body is very hot; I have a fever.',
          visualCue: 'fever_thermometer'
        },
        {
          id: 'p3_u2_w3',
          word: 'Cold',
          phonetics: '/kəʊld/',
          arabicMeaning: 'نزلة برد / زكام',
          partOfSpeech: 'noun',
          exampleSentence: 'I have a bad cold and I cough.',
          visualCue: 'sick_cold'
        },
        {
          id: 'p3_u2_w4',
          word: 'Cough',
          phonetics: '/kɒf/',
          arabicMeaning: 'سعال / كحة',
          partOfSpeech: 'noun',
          exampleSentence: 'Drink warm water with lemon for your cough.',
          visualCue: 'cough_person'
        },
        {
          id: 'p3_u2_w5',
          word: 'Medicine',
          phonetics: '/ˈmed.sən/',
          arabicMeaning: 'دواء / علاج طبي',
          partOfSpeech: 'noun',
          exampleSentence: 'The doctor gives me medicine to feel better.',
          visualCue: 'medical_pills'
        }
      ],
      phonics: [
        {
          letterSound: 'Sound /k/ spelled CK and /sk/ spelled SK',
          sampleWords: ['Sick', 'Black', 'Clock', 'Duck', 'Skin', 'Skirt', 'Sky'],
          rhymingPair: ['Clock', 'Lock']
        }
      ],
      conversationTerms: [
        { en: "What's the matter, Dad? — I have a headache.", ar: "ما بك يا أبي؟ — لدي صداع." },
        { en: "Can I bring you a glass of water and your medicine?", ar: "هل أحضر لك كوب ماء ودواءك؟" }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Inquiring About Illness (What's the matter? I have a...)",
          ruleExplanationAr: "للسؤال عما يؤلم شخصاً نسأل: What's the matter? وتكون الإجابة: I have a + [المرض/العَرَض].",
          structureFormula: "What's the matter? — I have a [cold / headache / fever / cough].",
          examples: [
            { en: "What's the matter? — I have a fever.", ar: "ما الأمر؟ — لدي حمى." },
            { en: "He has a headache.", ar: "هو يعاني من صداع." }
          ],
          visualPatternBlocks: ["What's the matter?", "I have a [symptom]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['have', 'a', 'cold', 'I'],
          correctOrder: ['I', 'have', 'a', 'cold'],
          translationAr: 'لدي نزلة برد'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Differentiate between sound CK /k/ in Sick and SK /sk/ in Skin.',
        prompt: 'Which word contains the /sk/ sound?',
        targetResponses: ['Skin', 'Skirt', 'Sky'],
        scaffoldingHints: ['Listen to the initial blend: /sk/ in Skin']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u2_l1_q1',
          type: 'mcq',
          questionPrompt: 'When someone has a sick headache, their ______ hurts.',
          options: ['head', 'foot', 'shoe', 'pen'],
          correctAnswer: 'head',
          explanationAr: 'الصداع ألم في الرأس (head).',
          marks: 1
        },
        {
          id: 'p3_u2_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word ends with the /k/ sound spelled with CK?',
          options: ['Sick', 'Skin', 'Sky', 'Sun'],
          correctAnswer: 'Sick',
          explanationAr: 'كلمة Sick تنتهي بصوت /k/ المكتوب بـ CK.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u2_l2_q1',
          type: 'matching',
          questionPrompt: 'Inquiring: "What\'s the ______? — I have a cough."',
          options: ['matter', 'book', 'colour', 'pencil'],
          correctAnswer: 'matter',
          explanationAr: "السؤال عن المرض: What's the matter?",
          marks: 1
        },
        {
          id: 'p3_u2_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'My body is very hot. I have a ______.',
          options: ['fever', 'happy', 'ruler', 'hat'],
          correctAnswer: 'fever',
          explanationAr: 'سخونة الجسم تدل على الحمى (fever).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u2_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [have - a - cold - I].',
          options: ['I have a cold', 'A cold have I', 'Cold have a I', 'Have I a cold'],
          correctAnswer: 'I have a cold',
          explanationAr: 'الترتيب: I have a cold (عندي نزلة برد).',
          marks: 2
        },
        {
          id: 'p3_u2_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [medicine - this - Take - water - with].',
          options: ['Take this medicine with water', 'Medicine take this with water', 'With water take this medicine', 'This medicine take with water'],
          correctAnswer: 'Take this medicine with water',
          explanationAr: 'الترتيب: Take this medicine with water.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u2_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The doctor gives the patient ______ to recover from illness.',
          options: ['medicine', 'toys', 'candies', 'stones'],
          correctAnswer: 'medicine',
          explanationAr: 'يصف الطبيب الدواء (medicine) للمريض.',
          marks: 1
        },
        {
          id: 'p3_u2_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: "I feel sick." — The kind advice is: "______ and take your medicine."',
          options: ['Go to bed', 'Play football', 'Jump high', 'Sing loud'],
          correctAnswer: 'Go to bed',
          explanationAr: 'نصيحة المريض أن يخلد للراحة والنوم (Go to bed).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u2_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Give helpful advice to a sick person: "Please ______ and drink ______."',
          correctAnswer: 'rest in bed and drink warm water with lemon',
          explanationAr: 'يكتب الطالب نصيحة علاجية مفيدة لشخص مريض.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P3 - UNIT 3: On the Weekend (في عطلة نهاية الأسبوع)
  // -----------------------------------------------------------------------
  {
    unitId: 'p3_t1_c_u3',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 3,
    unitTitleEn: "New Adventures",
    unitTitleAr: 'في عطلة نهاية الأسبوع والهوايات والأنشطة',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p3_u3_w1',
          word: 'Take photos',
          phonetics: '/teɪk ˈfəʊ.təʊz/',
          arabicMeaning: 'يلتقط صوراً فوتوغرافية',
          partOfSpeech: 'phrase',
          exampleSentence: 'I take photos of pretty flowers in the park.',
          visualCue: 'camera_photo'
        },
        {
          id: 'p3_u3_w2',
          word: 'Draw pictures',
          phonetics: '/drɔː ˈpɪk.tʃəz/',
          arabicMeaning: 'يرسم لوحات وصوراً',
          partOfSpeech: 'phrase',
          exampleSentence: 'Hana likes to draw pictures with colored pencils.',
          visualCue: 'art_drawing'
        },
        {
          id: 'p3_u3_w3',
          word: 'Listen to pop music',
          phonetics: '/ˈlɪs.ən tuː pɒp ˈmjuː.zɪk/',
          arabicMeaning: 'يستمع إلى الموسيقى',
          partOfSpeech: 'phrase',
          exampleSentence: 'He listens to cheerful music on his headphones.',
          visualCue: 'headphones_music'
        },
        {
          id: 'p3_u3_w4',
          word: 'Play sports',
          phonetics: '/pleɪ spɔːts/',
          arabicMeaning: 'يمارس الألعاب الرياضية',
          partOfSpeech: 'phrase',
          exampleSentence: 'We play sports in the school playground.',
          visualCue: 'sports_activities'
        },
        {
          id: 'p3_u3_w5',
          word: 'Collect magnets',
          phonetics: '/kəˈlekt ˈmæɡ.nɪts/',
          arabicMeaning: 'يجمع المغناطيسات',
          partOfSpeech: 'phrase',
          exampleSentence: 'My brother loves to collect colorful magnets.',
          visualCue: 'horseshoe_magnet'
        }
      ],
      phonics: [
        {
          letterSound: 'Sound /ŋ/ (Letters NG) and /sp/ (Letters SP)',
          sampleWords: ['Singing', 'Drawing', 'Fishing', 'Playing', 'Sports', 'Spider'],
          rhymingPair: ['Singing', 'Ringing']
        }
      ],
      conversationTerms: [
        { en: "What are you doing? — I am taking photos.", ar: "ماذا تفعل الآن؟ — أنا ألتقط صوراً." },
        { en: "I like drawing pictures, but I don't like collecting magnets.", ar: "أحب رسم الصور، لكنني لا أحب جمع المغناطيسات." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Present Continuous & Conjunction 'but' (I am + verb-ing)",
          ruleExplanationAr: "للتعبير عما يحدث الآن نستخدم المضارع المستمر: am/is/are + verb-ing. ونستخدم but للتعبير عن التناقض بين جملتين.",
          structureFormula: "Subject + am/is/are + Verb-ing ... but ...",
          examples: [
            { en: "I am taking photos right now.", ar: "أنا ألتقط صوراً في هذه اللحظة." },
            { en: "I like sports, but I don't like music.", ar: "أحب الرياضة، لكنني لا أحب الموسيقى." }
          ],
          visualPatternBlocks: ["am/is/are + Verb-ing", "I like ... but I don't like"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['taking', 'I', 'photos', 'am'],
          correctOrder: ['I', 'am', 'taking', 'photos'],
          translationAr: 'أنا ألتقط صوراً'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the -ing suffix /ŋ/ in Drawing and Singing.',
        prompt: 'Which word contains the /ng/ sound?',
        targetResponses: ['Drawing', 'Singing', 'Fishing'],
        scaffoldingHints: ['Listen to the ending: /ŋ/ in Drawing']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u3_l1_q1',
          type: 'mcq',
          questionPrompt: 'We use a camera or phone to take ______ of nature.',
          options: ['photos', 'shoes', 'water', 'beds'],
          correctAnswer: 'photos',
          explanationAr: 'نلتقط الصور (photos) بالكاميرا.',
          marks: 1
        },
        {
          id: 'p3_u3_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word starts with the /sp/ consonant cluster?',
          options: ['Sports', 'Book', 'Pencil', 'Door'],
          correctAnswer: 'Sports',
          explanationAr: 'كلمة Sports تبدأ بالصوت المركب /sp/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u3_l2_q1',
          type: 'matching',
          questionPrompt: 'Look! She is ______ a colourful picture right now.',
          options: ['drawing', 'draw', 'draws', 'drew'],
          correctAnswer: 'drawing',
          explanationAr: 'بعد is في المضارع المستمر نضع الفعل منتهياً بـ ing (drawing).',
          marks: 1
        },
        {
          id: 'p3_u3_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'I like playing football, ______ I do not like tennis.',
          options: ['but', 'and', 'so', 'because'],
          correctAnswer: 'but',
          explanationAr: 'نستخدم but للربط بين جملتين متناقضتين.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u3_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [taking - I - photos - am].',
          options: ['I am taking photos', 'Taking photos am I', 'Am I taking photos', 'I taking am photos'],
          correctAnswer: 'I am taking photos',
          explanationAr: 'الترتيب: I am taking photos.',
          marks: 2
        },
        {
          id: 'p3_u3_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [music - He - listening - is - to].',
          options: ['He is listening to music', 'Listening to music is he', 'Is he listening to music', 'He music is listening to'],
          correctAnswer: 'He is listening to music',
          explanationAr: 'الترتيب: He is listening to music.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u3_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: I like ice cream, ______ I don\'t like cake.',
          options: ['but', 'or', 'so', 'with'],
          correctAnswer: 'but',
          explanationAr: 'نستخدم but لبيان الاختلاف والتناقض.',
          marks: 1
        },
        {
          id: 'p3_u3_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: "What is Omar doing?" — "He is ______ his magnet collection."',
          options: ['sorting', 'sleep', 'eats', 'jump'],
          correctAnswer: 'sorting',
          explanationAr: 'الفعل يتبع is في صيغة المضارع المستمر (sorting).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u3_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write what you do on Friday: "On the weekend, I like ______ but I don\'t like ______."',
          correctAnswer: 'drawing pictures but I do not like cleaning my room',
          explanationAr: 'يكتب الطالب جملة مركبة باستخدام but.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P3 - UNIT 4: I Love My Home (أنا أحب بيتي والأثاث)
  // -----------------------------------------------------------------------
  {
    unitId: 'p3_t1_c_u4',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 4,
    unitTitleEn: "Let's Tell Stories!",
    unitTitleAr: 'أنا أحب بيتي والأثاث المنزلي وحروف الجر',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p3_u4_w1',
          word: 'Living room',
          phonetics: '/ˈlɪv.ɪŋ ˌruːm/',
          arabicMeaning: 'غرفة المعيشة / الصالون',
          partOfSpeech: 'noun',
          exampleSentence: 'We sit in the living room and talk happily.',
          visualCue: 'living_room'
        },
        {
          id: 'p3_u4_w2',
          word: 'Armchair',
          phonetics: '/ˈɑːm.tʃeər/',
          arabicMeaning: 'كرسي بذراعين مريح',
          partOfSpeech: 'noun',
          exampleSentence: 'Grandpa rests in his comfortable armchair.',
          visualCue: 'comfortable_armchair'
        },
        {
          id: 'p3_u4_w3',
          word: 'Bookcase',
          phonetics: '/ˈbʊk.keɪs/',
          arabicMeaning: 'خزانة كتب / مكتبة',
          partOfSpeech: 'noun',
          exampleSentence: 'Our bookcase is full of interesting stories.',
          visualCue: 'wooden_bookcase'
        },
        {
          id: 'p3_u4_w4',
          word: 'Couch',
          phonetics: '/kaʊtʃ/',
          arabicMeaning: 'أريكة / كنبة',
          partOfSpeech: 'noun',
          exampleSentence: 'We sit together on the long couch.',
          visualCue: 'soft_couch'
        },
        {
          id: 'p3_u4_w5',
          word: 'Lamp',
          phonetics: '/læmp/',
          arabicMeaning: 'مصباح / أباجورة',
          partOfSpeech: 'noun',
          exampleSentence: 'Turn on the desk lamp to read clearly.',
          visualCue: 'desk_lamp'
        }
      ],
      phonics: [
        {
          letterSound: 'Sounds /eə/ (Spelled AIR) and /ɪə/ (Spelled EAR)',
          sampleWords: ['Chair', 'Armchair', 'Hair', 'Pair', 'Ear', 'Hear', 'Near'],
          rhymingPair: ['Chair', 'Hair']
        }
      ],
      conversationTerms: [
        { en: "Where is the lamp? — It's next to the bookcase.", ar: "أين المصباح؟ — إنه بجانب خزانة الكتب." },
        { en: "There are two armchairs in the living room.", ar: "يوجد كرسيان بذراعين في غرفة المعيشة." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "There is / There are & Prepositions of Place",
          ruleExplanationAr: "نستخدم There is مع المفرد، و There are مع الجمع، مع حروف الجر: next to (بجانب)، on (على)، behind (خلف).",
          structureFormula: "There is a + [singular] / There are + [plural] + [preposition]",
          examples: [
            { en: "There is a lamp next to the bed.", ar: "يوجد مصباح بجانب السرير." },
            { en: "There are four books on the table.", ar: "توجد أربعة كتب على الطاولة." }
          ],
          visualPatternBlocks: ["There is a [singular]", "There are [plural]", "next to / on / behind"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['next', 'is', 'lamp', 'The', 'to', 'bookcase', 'the'],
          correctOrder: ['The', 'lamp', 'is', 'next', 'to', 'the', 'bookcase'],
          translationAr: 'المصباح بجانب خزانة الكتب'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Compare /air/ in Armchair and /ear/ in Ear.',
        prompt: 'Which word contains the /air/ sound?',
        targetResponses: ['Chair', 'Armchair', 'Hair'],
        scaffoldingHints: ['Sounds like: /eə/ in Chair']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u4_l1_q1',
          type: 'mcq',
          questionPrompt: 'We store our books and stories neatly on a ______.',
          options: ['bookcase', 'shoe', 'fridge', 'towel'],
          correctAnswer: 'bookcase',
          explanationAr: 'نحفظ الكتب على خزانة الكتب (bookcase).',
          marks: 1
        },
        {
          id: 'p3_u4_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word contains the /air/ sound?',
          options: ['Armchair', 'Bed', 'Clock', 'Door'],
          correctAnswer: 'Armchair',
          explanationAr: 'كلمة Armchair تحتوي على الصوت /air/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u4_l2_q1',
          type: 'matching',
          questionPrompt: 'Complete: "______ is a soft armchair in the corner."',
          options: ['There', 'Their', 'They', 'These'],
          correctAnswer: 'There',
          explanationAr: 'للتعبير عن وجود شيء مفرد نقول There is.',
          marks: 1
        },
        {
          id: 'p3_u4_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'The lamp is next ______ the armchair.',
          options: ['to', 'on', 'at', 'with'],
          correctAnswer: 'to',
          explanationAr: 'حرف الجر المركب الدال على المجاورة هو next to.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u4_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [next - is - lamp - The - to - bookcase - the].',
          options: ['The lamp is next to the bookcase', 'The bookcase is next to the lamp', 'Next to the lamp is the bookcase', 'Is the lamp next to the bookcase'],
          correctAnswer: 'The lamp is next to the bookcase',
          explanationAr: 'الترتيب الصحيح: The lamp is next to the bookcase.',
          marks: 2
        },
        {
          id: 'p3_u4_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [pillows - There - two - are - on - couch - the].',
          options: ['There are two pillows on the couch', 'Two pillows are there on the couch', 'On the couch there are two pillows', 'There two pillows are on the couch'],
          correctAnswer: 'There are two pillows on the couch',
          explanationAr: 'الترتيب: There are two pillows on the couch.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u4_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: There ______ three pillows on the couch.',
          options: ['are', 'is', 'am', 'be'],
          correctAnswer: 'are',
          explanationAr: 'مع اسم الجمع pillows نستخدم There are.',
          marks: 1
        },
        {
          id: 'p3_u4_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: "Where is the television?" — "It is on the wooden ______."',
          options: ['table', 'head', 'shoe', 'pen'],
          correctAnswer: 'table',
          explanationAr: 'يوضع التلفاز على الطاولة الخشبية (table).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u4_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe your bedroom: "In my bedroom, there is a ______ next to the ______."',
          correctAnswer: 'comfortable bed next to the big wardrobe',
          explanationAr: 'يصف الطالب ترتيب أثاث غرفته بدقة.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P3 - UNIT 5: At the Zoo (في حديقة الحيوان والبيئات)
  // -----------------------------------------------------------------------
  {
    unitId: 'p3_t1_c_u5',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 5,
    unitTitleEn: "Together Is Better",
    unitTitleAr: 'في حديقة الحيوان وبيئات الحيوانات والاتجاهات',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p3_u5_w1',
          word: 'Giraffe',
          phonetics: '/dʒɪˈrɑːf/',
          arabicMeaning: 'زرافة',
          partOfSpeech: 'noun',
          exampleSentence: 'The giraffe has a long neck to reach high leaves.',
          visualCue: 'animal_giraffe'
        },
        {
          id: 'p3_u5_w2',
          word: 'Elephant',
          phonetics: '/ˈel.ɪ.fənt/',
          arabicMeaning: 'فيل ضخم',
          partOfSpeech: 'noun',
          exampleSentence: 'The elephant is a big animal with a long trunk.',
          visualCue: 'animal_elephant'
        },
        {
          id: 'p3_u5_w3',
          word: 'Panda',
          phonetics: '/ˈpæn.də/',
          arabicMeaning: 'باندا',
          partOfSpeech: 'noun',
          exampleSentence: 'The black and white panda eats green bamboo.',
          visualCue: 'animal_panda'
        },
        {
          id: 'p3_u5_w4',
          word: 'Hippo',
          phonetics: '/ˈhɪp.əʊ/',
          arabicMeaning: 'فرس النهر',
          partOfSpeech: 'noun',
          exampleSentence: 'The hippo loves swimming in lakes and rivers.',
          visualCue: 'animal_hippo'
        },
        {
          id: 'p3_u5_w5',
          word: 'Grasslands',
          phonetics: '/ˈɡrɑːs.lændz/',
          arabicMeaning: 'مراعي وسهول عشبية',
          partOfSpeech: 'noun',
          exampleSentence: 'Lions and giraffes live in the African grasslands.',
          visualCue: 'african_savanna'
        }
      ],
      phonics: [
        {
          letterSound: 'Sound /f/ spelled PH vs. F',
          sampleWords: ['Photo', 'Elephant', 'Giraffe', 'Fish', 'Frog'],
          rhymingPair: ['Fish', 'Dish']
        }
      ],
      conversationTerms: [
        { en: "Where does the giraffe live? — In the grasslands.", ar: "أين تعيش الزرافة؟ — في المراعي العشبية." },
        { en: "Go straight on and turn right to see the lions.", ar: "سر إلى الأمام مباشرة ثم انعطف يميناً لرؤية الأسود." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Animal Habitats in Present Simple & Directions",
          ruleExplanationAr: "للتحدث عن موطن الحيوان نستخدم المضارع البسيط: The [animal] lives in + [الموطن]. وللاتجاهات: Go straight on / Turn left / Turn right.",
          structureFormula: "The [animal] lives in the [habitat] / eats [food]",
          examples: [
            { en: "The giraffe lives in the grasslands.", ar: "تعيش الزرافة في السهول العشبية." },
            { en: "Go straight on and turn right.", ar: "امشِ للأمام مباشرة ثم اتجه يميناً." }
          ],
          visualPatternBlocks: ["lives in", "eats [food]", "Go straight on", "Turn right"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['lives', 'The', 'in', 'water', 'hippo'],
          correctOrder: ['The', 'hippo', 'lives', 'in', 'water'],
          translationAr: 'فرس النهر يعيش في الماء'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify the /f/ sound spelled PH in Photo and Elephant.',
        prompt: 'Which word contains the /f/ sound spelled PH?',
        targetResponses: ['Photo', 'Elephant'],
        scaffoldingHints: ['Letters PH sound like /f/']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u5_l1_q1',
          type: 'mcq',
          questionPrompt: 'A very tall animal with a long neck that eats tree leaves is a ______.',
          options: ['giraffe', 'cat', 'duck', 'rabbit'],
          correctAnswer: 'giraffe',
          explanationAr: 'الزرافة (giraffe) حيوان طويل الرقبة يتغذى على أوراق الشجر العالية.',
          marks: 1
        },
        {
          id: 'p3_u5_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word contains the letters PH with /f/ sound?',
          options: ['Elephant', 'Lion', 'Panda', 'Tiger'],
          correctAnswer: 'Elephant',
          explanationAr: 'كلمة Elephant تكتب بحرفي PH وينطقان /f/.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u5_l2_q1',
          type: 'matching',
          questionPrompt: 'Where does the panda live? — "It lives in the ______ forests of China."',
          options: ['bamboo', 'desert', 'ice', 'sea'],
          correctAnswer: 'bamboo',
          explanationAr: 'تعيش الباندا في غابات الخيزران (bamboo forests).',
          marks: 1
        },
        {
          id: 'p3_u5_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'To visit the elephants, go straight on and turn ______ (يميناً).',
          options: ['right', 'red', 'run', 'read'],
          correctAnswer: 'right',
          explanationAr: 'انعطف يميناً تعني turn right.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u5_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [lives - The - in - water - hippo].',
          options: ['The hippo lives in water', 'In water lives the hippo', 'Lives the hippo in water', 'The water lives in hippo'],
          correctAnswer: 'The hippo lives in water',
          explanationAr: 'الترتيب: The hippo lives in water.',
          marks: 2
        },
        {
          id: 'p3_u5_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [on - straight - Go - turn - and - left].',
          options: ['Go straight on and turn left', 'Turn left and go straight on', 'Straight on go and turn left', 'Go turn left and straight on'],
          correctAnswer: 'Go straight on and turn left',
          explanationAr: 'إعطاء الاتجاهات: Go straight on and turn left.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u5_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The giant panda eats ______ all day long.',
          options: ['green bamboo', 'fish and meat', 'candies', 'bread'],
          correctAnswer: 'green bamboo',
          explanationAr: 'يتغذى الباندا على نبات البامبو (bamboo).',
          marks: 1
        },
        {
          id: 'p3_u5_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: "Where do penguins live?" — "They live on ______."',
          options: ['cold ice and snow', 'hot sand deserts', 'high trees', 'cars'],
          correctAnswer: 'cold ice and snow',
          explanationAr: 'تعيش طيور البطريق على الجليد والثلج.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u5_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe your favourite zoo animal: "My favourite animal is the ______ because ______."',
          correctAnswer: 'elephant because it is strong, friendly, and has a long trunk',
          explanationAr: 'يكتب الطالب بطاقة تعريفية بحيوانه المفضل.',
          marks: 3
        }
      ]
    }
  },

  // -----------------------------------------------------------------------
  // P3 - UNIT 6: Let's Go to the Circus! (هيا نذهب إلى السيرك)
  // -----------------------------------------------------------------------
  {
    unitId: 'p3_t1_c_u6',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 6,
    unitTitleEn: "Dare to Dream",
    unitTitleAr: 'هيا نذهب إلى السيرك والشخصيات والوصف',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p3_u6_w1',
          word: 'Clown',
          phonetics: '/klaʊn/',
          arabicMeaning: 'مهرج السيرك المضحك',
          partOfSpeech: 'noun',
          exampleSentence: 'The clown has a red nose and tells funny jokes.',
          visualCue: 'circus_clown'
        },
        {
          id: 'p3_u6_w2',
          word: 'Ringmaster',
          phonetics: '/ˈrɪŋˌmɑː.stər/',
          arabicMeaning: 'مدير حلبة السيرك',
          partOfSpeech: 'noun',
          exampleSentence: 'The ringmaster is tall and welcomes the audience.',
          visualCue: 'circus_ringmaster'
        },
        {
          id: 'p3_u6_w3',
          word: 'Acrobat',
          phonetics: '/ˈæk.rə.bæt/',
          arabicMeaning: 'لاعب أكروبات وبهلوان',
          partOfSpeech: 'noun',
          exampleSentence: 'The brave acrobat jumps high into the air.',
          visualCue: 'circus_acrobat'
        },
        {
          id: 'p3_u6_w4',
          word: 'Juggler',
          phonetics: '/ˈdʒʌɡ.lər/',
          arabicMeaning: 'لاعب خفة اليد والتوازن',
          partOfSpeech: 'noun',
          exampleSentence: 'The juggler throws six balls into the air fast.',
          visualCue: 'circus_juggler'
        },
        {
          id: 'p3_u6_w5',
          word: 'Dog trainer',
          phonetics: '/dɒɡ ˈtreɪ.nər/',
          arabicMeaning: 'مدرب الكلاب في العرض',
          partOfSpeech: 'noun',
          exampleSentence: 'The dog trainer teaches smart dogs fun tricks.',
          visualCue: 'dog_trainer'
        }
      ],
      phonics: [
        {
          letterSound: 'Diphthong /aʊ/ spelled OU and OW',
          sampleWords: ['Clown', 'Cow', 'House', 'Mouse', 'Cloud', 'Brown'],
          rhymingPair: ['Clown', 'Brown']
        }
      ],
      conversationTerms: [
        { en: "What does the clown look like? — He is short and funny.", ar: "كيف يبدو المهرج؟ — إنه قصير ومضحك." },
        { en: "The acrobat can stand on one hand; she is very strong!", ar: "لاعبة الأكروبات تقف على يد واحدة؛ إنها قوية جداً!" }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Describing Physical Appearance (What does he/she look like?)",
          ruleExplanationAr: "للسؤال عن المظهر الخارجي نسأل: What does he/she look like? والإجابة: He/She is + [الصفات] (tall, short, thin, funny).",
          structureFormula: "What does [person] look like? — He/She is + [adjectives]",
          examples: [
            { en: "What does the ringmaster look like? — He is tall and smart.", ar: "كيف يبدو مدير الحلبة؟ — إنه طويل وأنيق." },
            { en: "The clown is very funny.", ar: "المهرج مضحك للغاية." }
          ],
          visualPatternBlocks: ["What does he look like?", "He is [adjective]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['juggler', 'The', 'fast', 'is'],
          correctOrder: ['The', 'juggler', 'is', 'fast'],
          translationAr: 'لاعب الخفة سريع'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the /ou/ sound in Clown, House, and Mouse.',
        prompt: 'Which word contains the /aʊ/ sound?',
        targetResponses: ['Clown', 'House', 'Mouse', 'Cloud'],
        scaffoldingHints: ['Sounds like: /aʊ/ in Clown']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u6_l1_q1',
          type: 'mcq',
          questionPrompt: 'A circus performer who wears makeup and makes people laugh is a ______.',
          options: ['clown', 'doctor', 'pilot', 'farmer'],
          correctAnswer: 'clown',
          explanationAr: 'المهرج (clown) يضحك الجمهور في السيرك.',
          marks: 1
        },
        {
          id: 'p3_u6_l1_q2',
          type: 'matching',
          questionPrompt: 'Which word contains the /ow/ sound as in Clown?',
          options: ['Brown', 'Book', 'Fish', 'Head'],
          correctAnswer: 'Brown',
          explanationAr: 'كلمة Brown لها نفس الصوت /aʊ/ الموجود في Clown.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u6_l2_q1',
          type: 'matching',
          questionPrompt: 'Physical description: "What does he look like?" — "He is ______ and thin."',
          options: ['tall', 'book', 'table', 'shoe'],
          correctAnswer: 'tall',
          explanationAr: 'لوصف الطول نستخدم صفة tall (طويل).',
          marks: 1
        },
        {
          id: 'p3_u6_l2_q2',
          type: 'fill_in_the_blank',
          questionPrompt: 'The juggler ______ throw five rings into the air.',
          options: ['can', 'is', 'are', 'am'],
          correctAnswer: 'can',
          explanationAr: 'للتعبير عن القدرة على المهارة نستخدم can.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u6_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [juggler - The - fast - is].',
          options: ['The juggler is fast', 'Fast is the juggler', 'Is the juggler fast', 'The fast is juggler'],
          correctAnswer: 'The juggler is fast',
          explanationAr: 'الترتيب: The juggler is fast.',
          marks: 2
        },
        {
          id: 'p3_u6_l3_q2',
          type: 'reorder',
          questionPrompt: 'Reorder: [funny - and - The - clown - is - short].',
          options: ['The clown is short and funny', 'Short and funny the clown is', 'Is the clown short and funny', 'The clown short is and funny'],
          correctAnswer: 'The clown is short and funny',
          explanationAr: 'الترتيب: The clown is short and funny.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u6_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The circus show takes place inside a huge colorful ______.',
          options: ['tent', 'fridge', 'car', 'bag'],
          correctAnswer: 'tent',
          explanationAr: 'يقام عرض السيرك داخل خيمة كبرى (tent).',
          marks: 1
        },
        {
          id: 'p3_u6_l4_q2',
          type: 'mcq',
          questionPrompt: 'MOE Question: "What does the ringmaster wear?" — "He wears a red coat and a black ______."',
          options: ['tall hat', 'pencil', 'spoon', 'book'],
          correctAnswer: 'tall hat',
          explanationAr: 'يرتدي مدير الحلبة قبعة سوداء طويلة (tall hat).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u6_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe a circus act you like: "At the circus, I enjoy watching the ______ because ______."',
          correctAnswer: 'acrobat because she can jump high and do brave stunts',
          explanationAr: 'يكتب الطالب فقرته المفضلة في السيرك مع ذكر السبب.',
          marks: 3
        }
      ]
    }
  }
];

// =========================================================================
// MASTER CONSOLIDATED CURRICULUM DATABASE (ALL 36 UNITS: PRIMARY 1 TO 6)
// =========================================================================
const masterExamSuitesMap: Record<string, typeof p1_u1_exams> = {
  p1_t1_c_u1: p1_u1_exams,
  p1_t1_c_u2: p1_u2_exams,
  p1_t1_c_u3: p1_u3_exams,
  p1_t1_c_u4: p1_u4_exams,
  p1_t1_c_u5: p1_u5_exams,
  p1_t1_c_u6: p1_u6_exams,

  p2_t1_c_u1: p2_u1_exams,
  p2_t1_c_u2: p2_u2_exams,
  p2_t1_c_u3: p2_u3_exams,
  p2_t1_c_u4: p2_u4_exams,
  p2_t1_c_u5: p2_u5_exams,
  p2_t1_c_u6: p2_u6_exams,

  p3_t1_c_u1: p3_u1_exams,
  p3_t1_c_u2: p3_u2_exams,
  p3_t1_c_u3: p3_u3_exams,
  p3_t1_c_u4: p3_u4_exams,
  p3_t1_c_u5: p3_u5_exams,
  p3_t1_c_u6: p3_u6_exams,

  p4_t1_c_u1: p4_u1_exams,
  p4_t1_c_u2: p4_u2_exams,
  p4_t1_c_u3: p4_u3_exams,
  p4_t1_c_u4: p4_u4_exams,
  p4_t1_c_u5: p4_u5_exams,
  p4_t1_c_u6: p4_u6_exams,

  p5_t1_c_u1: p5_u1_exams,
  p5_t1_c_u2: p5_u2_exams,
  p5_t1_c_u3: p5_u3_exams,
  p5_t1_c_u4: p5_u4_exams,
  p5_t1_c_u5: p5_u5_exams,
  p5_t1_c_u6: p5_u6_exams,

  p6_t1_c_u1: p6_u1_exams,
  p6_t1_c_u2: p6_u2_exams,
  p6_t1_c_u3: p6_u3_exams,
  p6_t1_c_u4: p6_u4_exams,
  p6_t1_c_u5: p6_u5_exams,
  p6_t1_c_u6: p6_u6_exams,
};

const rawPrimaryCurriculumDatabase: PrimaryLessonContent[] = [
  ...primary1Curriculum,
  ...primary2Curriculum,
  ...primary3Curriculum,
  ...primary4Curriculum,
  ...primary5And6Curriculum
];

export const primaryCurriculumDatabase: PrimaryLessonContent[] = rawPrimaryCurriculumDatabase.map(unit => {
  const enhancedSuite = masterExamSuitesMap[unit.unitId];
  if (!enhancedSuite) return unit;
  return {
    ...unit,
    examSuite: {
      level1_Foundation: enhancedSuite.level1_Foundation,
      level2_Contextual: enhancedSuite.level2_Contextual,
      level3_AdvancedStructure: enhancedSuite.level3_AdvancedStructure,
      level4_MoeMockExam: enhancedSuite.level4_MoeMockExam,
      level5_HigherThinking: enhancedSuite.level5_HigherThinking
    }
  };
});

// Helper functions for accessing primary curriculum data
export function getPrimaryLesson(
  grade: string,
  unitNumber: number,
  track: 'connect' | 'connect_plus' = 'connect',
  term: 1 | 2 = 1
): PrimaryLessonContent | undefined {
  return primaryCurriculumDatabase.find(
    lesson =>
      lesson.grade === grade &&
      lesson.unitNumber === unitNumber &&
      lesson.track === track &&
      lesson.term === term
  ) || primaryCurriculumDatabase.find(
    lesson => lesson.grade === grade && lesson.unitNumber === unitNumber
  ) || primaryCurriculumDatabase.find(
    lesson => lesson.grade === grade
  );
}

export function getPrimaryLessonsByGrade(grade: string): PrimaryLessonContent[] {
  return primaryCurriculumDatabase.filter(lesson => lesson.grade === grade);
}

export function registerPrimaryLesson(lesson: PrimaryLessonContent): void {
  const existingIndex = primaryCurriculumDatabase.findIndex(l => l.unitId === lesson.unitId);
  if (existingIndex >= 0) {
    primaryCurriculumDatabase[existingIndex] = lesson;
  } else {
    primaryCurriculumDatabase.push(lesson);
  }
}

export function getAllPrimaryLessons(): PrimaryLessonContent[] {
  return primaryCurriculumDatabase;
}

export function getInjectedPrimaryUnit(
  grade: string,
  unitNumber: number,
  track: 'connect' | 'connect_plus' = 'connect',
  term: 1 | 2 = 1
): PrimaryLessonContent | undefined {
  return getPrimaryLesson(grade, unitNumber, track, term);
}

export function getAllInjectedPrimaryUnits(): PrimaryLessonContent[] {
  return primaryCurriculumDatabase;
}

export type {
  PrimaryLessonContent,
  VocabularyItem,
  PhonicsCard,
  GrammarRuleItem,
  SkillsActivity,
  PrimaryExamQuestion
};
