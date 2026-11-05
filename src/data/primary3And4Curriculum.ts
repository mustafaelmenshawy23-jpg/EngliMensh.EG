// =========================================================================
// EngliMensh.EG - Primary 3 & Primary 4 Complete Curriculum (Connect 3 & 4)
// Official Egyptian Ministry of Education (MOE) Specifications - Term 1
// System Architect: Mohammad El-Menshawy (محمد المنشاوي)
// Units: P3 (1 to 6) and P4 (1 to 6) - All with 3 Tabs & 5-Level Exam Suite
// =========================================================================

import type { PrimaryLessonContent } from './primaryStageData.ts';

export const primary3And4Curriculum: PrimaryLessonContent[] = [
  // =========================================================================
  // PRIMARY 3 - UNIT 1: I Feel Happy! (أشعر بالسعادة!)
  // =========================================================================
  {
    unitId: 'p3_t1_c_u1',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 1,
    unitTitleEn: 'I Feel Happy!',
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
          word: 'Hungry',
          phonetics: '/ˈhʌŋ.ɡri/',
          arabicMeaning: 'جائع',
          partOfSpeech: 'adjective',
          exampleSentence: 'He is hungry; he wants to eat a cheese sandwich.',
          visualCue: 'food_lunch'
        },
        {
          id: 'p3_u1_w4',
          word: 'Excited',
          phonetics: '/ɪkˈsaɪ.tɪd/',
          arabicMeaning: 'متحمس ومبتهج',
          partOfSpeech: 'adjective',
          exampleSentence: 'Daddy is coming home soon; we feel excited!',
          visualCue: 'star_badge'
        },
        {
          id: 'p3_u1_w5',
          word: 'Tired',
          phonetics: '/taɪəd/',
          arabicMeaning: 'تعبان / مجهد',
          partOfSpeech: 'adjective',
          exampleSentence: 'Mother worked all day, so she feels tired.',
          visualCue: 'clock_alarm'
        }
      ],
      phonics: [
        {
          letterSound: 'Long E vowel /iː/ (EE & EA)',
          sampleWords: ['Sleep', 'Green', 'Meet', 'Bee', 'Clean', 'Eat', 'Leaf'],
          rhymingPair: ['Meet', 'Sweet']
        }
      ],
      conversationTerms: [
        { en: 'How do you feel today? — I feel happy.', ar: 'كيف تشعر اليوم؟ — أشعر بالسعادة.' },
        { en: "I'm so thirsty and hungry. — Let's go to the kitchen.", ar: 'أنا عطشان وجائع جداً. — هيا نذهب إلى المطبخ.' },
        { en: 'Can I make you a fresh sandwich?', ar: 'هل يمكنني إعداد شطيرة طازجة لك؟' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Expressing Feelings (How do you feel? / I feel + adjective)",
          ruleExplanationAr: "للسؤال عن المشاعر نسأل بـ How do you feel? وتكون الإجابة: I feel + صفة الشعور (happy, thirsty, excited, tired). واقتراح: Let's + مصدر الفعل.",
          structureFormula: "How do you feel? -> I feel + [Adjective] | Let's + [Infinitive]",
          examples: [
            { en: "How do you feel? - I feel excited.", ar: "كيف تشعر؟ - أشعر بالحماس." },
            { en: "Let's make a healthy sandwich.", ar: "هيا نعد شطيرة صحية." }
          ],
          visualPatternBlocks: ["How do you feel?", "I feel [Feeling]", "Let's [Verb]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['feel', 'happy', 'I'],
          correctOrder: ['I', 'feel', 'happy'],
          translationAr: 'أنا أشعر بالسعادة'
        },
        {
          jumbledParts: ['the', "Let's", 'kitchen', 'to', 'go'],
          correctOrder: ["Let's", 'go', 'to', 'the', 'kitchen'],
          translationAr: 'هيا نذهب إلى المطبخ'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify words with the long /iː/ vowel sound (EE / EA):',
        prompt: 'Which word has the long /iː/ sound as in green?',
        targetResponses: ['Sleep', 'Clean', 'Eat', 'Leaf'],
        scaffoldingHints: ['Spelled with double e or ea']
      },
      {
        type: 'dictation',
        instruction: 'Write the feeling word:',
        prompt: 'I want a glass of water because I am ______ (عطشان).',
        targetResponses: ['thirsty'],
        scaffoldingHints: ['Starts with th-i-r-s-t-y']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u1_l1_q1',
          type: 'mcq',
          questionPrompt: 'When you want to drink water, you feel ______.',
          options: ['thirsty', 'hungry', 'sleepy', 'cold'],
          correctAnswer: 'thirsty',
          explanationAr: 'عند الرغبة في شرب الماء يشعر الإنسان بالعطش (thirsty).',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u1_l2_q1',
          type: 'matching',
          questionPrompt: 'Complete the dialogue: "How do you ______? — I feel happy."',
          options: ['feel', 'look', 'make', 'eat'],
          correctAnswer: 'feel',
          explanationAr: 'السؤال عن المشاعر هو How do you feel?.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u1_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [feel - I - excited].',
          correctAnswer: 'I feel excited',
          explanationAr: 'الترتيب الصحيح: I feel excited.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u1_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: Let\'s ______ to the kitchen to have a snack.',
          options: ['go', 'goes', 'went', 'going'],
          correctAnswer: 'go',
          explanationAr: 'بعد Let\'s يأتي الفعل دائماً في المصدر (go).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u1_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write how you feel when you meet your friends: "When I see my friends, I feel ______."',
          correctAnswer: 'happy and excited',
          explanationAr: 'يكتب الطالب مشاعره عند رؤية أصدقائه.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 3 - UNIT 2: What's the Matter? (ما الأمر؟ / مم تشكو؟)
  // =========================================================================
  {
    unitId: 'p3_t1_c_u2',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 2,
    unitTitleEn: "What's the Matter?",
    unitTitleAr: 'ما الأمر؟ والأمراض والعلاج',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p3_u2_w1',
          word: 'Headache',
          phonetics: '/ˈhed.eɪk/',
          arabicMeaning: 'صداع في الرأس',
          partOfSpeech: 'noun',
          exampleSentence: 'I have a headache because of the loud noise.',
          visualCue: 'clock_alarm'
        },
        {
          id: 'p3_u2_w2',
          word: 'Fever',
          phonetics: '/ˈfiː.vər/',
          arabicMeaning: 'حمى / ارتفاع حرارة الجسم',
          partOfSpeech: 'noun',
          exampleSentence: 'His forehead is very hot; he has a fever.',
          visualCue: 'clock_alarm'
        },
        {
          id: 'p3_u2_w3',
          word: 'Cold',
          phonetics: '/kəʊld/',
          arabicMeaning: 'نزلة برد / زكام',
          partOfSpeech: 'noun',
          exampleSentence: 'I have a cold and I am sneezing.',
          visualCue: 'happy_face'
        },
        {
          id: 'p3_u2_w4',
          word: 'Cough',
          phonetics: '/kɒf/',
          arabicMeaning: 'سعال / كحة',
          partOfSpeech: 'noun',
          exampleSentence: 'Drink warm water with lemon for your cough.',
          visualCue: 'happy_face'
        },
        {
          id: 'p3_u2_w5',
          word: 'Medicine',
          phonetics: '/ˈmed.sən/',
          arabicMeaning: 'دواء / علاج',
          partOfSpeech: 'noun',
          exampleSentence: 'Take your prescribed medicine after eating.',
          visualCue: 'water_bottle'
        }
      ],
      phonics: [
        {
          letterSound: 'Sounds of CK /k/ and SK /sk/',
          sampleWords: ['Black', 'Duck', 'Sick', 'Clock', 'Skin', 'Skirt'],
          rhymingPair: ['Duck', 'Truck']
        }
      ],
      conversationTerms: [
        { en: "What's the matter? — I have a headache.", ar: "ما الأمر؟ — لدي صداع." },
        { en: 'Are you okay? — No, I feel sick.', ar: 'هل أنت بخير؟ — لا، أشعر بالمرض.' },
        { en: 'Can I get you some water and medicine?', ar: 'هل يمكنني إحضار بعض الماء والدواء لك؟' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Inquiring about Illnesses (What's the matter? / I have a...)",
          ruleExplanationAr: "للسؤال عن صحة شخص مريض: What's the matter? وللإجابة نستخدم: I have a + اسم المرض (cold, headache, cough, fever).",
          structureFormula: "What's the matter? -> I have a + [illness]",
          examples: [
            { en: "What's the matter? - I have a cold.", ar: "ما الأمر؟ - لدي نزلة برد." },
            { en: "Take this medicine.", ar: "تناول هذا الدواء." }
          ],
          visualPatternBlocks: ["What's the matter?", "I have a [Illness]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['headache', 'have', 'I', 'a'],
          correctOrder: ['I', 'have', 'a', 'headache'],
          translationAr: 'لدي صداع'
        },
        {
          jumbledParts: ['matter?', 'the', "What's"],
          correctOrder: ["What's", 'the', 'matter?'],
          translationAr: 'ما الأمر؟'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the /k/ sound in CK (duck, sick, clock):',
        prompt: 'Which word ends with the /k/ sound of CK?',
        targetResponses: ['Sick', 'Black', 'Duck', 'Clock'],
        scaffoldingHints: ['End sound of sick']
      },
      {
        type: 'dictation',
        instruction: 'Fill in the illness name:',
        prompt: 'I have a high ______ (حمى).',
        targetResponses: ['fever'],
        scaffoldingHints: ['Spelled f-e-v-e-r']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u2_l1_q1',
          type: 'mcq',
          questionPrompt: 'When someone has a sick headache, their ______ hurts.',
          options: ['head', 'foot', 'arm', 'book'],
          correctAnswer: 'head',
          explanationAr: 'الصداع (headache) هو ألم في الرأس (head).',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u2_l2_q1',
          type: 'matching',
          questionPrompt: 'Inquiring: "What\'s the ______? — I have a cough."',
          options: ['matter', 'name', 'color', 'clock'],
          correctAnswer: 'matter',
          explanationAr: 'السؤال عن الشكوى هو What\'s the matter?.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u2_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [have - a - cold - I].',
          correctAnswer: 'I have a cold',
          explanationAr: 'الترتيب الصحيح: I have a cold.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u2_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The doctor gives the patient ______ to feel better.',
          options: ['medicine', 'toys', 'pencils', 'bags'],
          correctAnswer: 'medicine',
          explanationAr: 'يصف الطبيب الدواء (medicine) للمريض.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u2_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Give helpful advice to a sick person: "Please drink ______."',
          correctAnswer: 'warm water and take your medicine',
          explanationAr: 'نصيحة للمريض بشرب السوائل الدافئة والدواء.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 3 - UNIT 3: On the Weekend (في عطلة نهاية الأسبوع)
  // =========================================================================
  {
    unitId: 'p3_t1_c_u3',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 3,
    unitTitleEn: 'On the Weekend',
    unitTitleAr: 'في عطلة نهاية الأسبوع والهوايات',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p3_u3_w1',
          word: 'Collect magnets',
          phonetics: '/kəˈlekt ˈmæɡ.nəts/',
          arabicMeaning: 'يجمع المغناطيسات',
          partOfSpeech: 'phrase',
          exampleSentence: 'My brother likes to collect magnets on the fridge.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p3_u3_w2',
          word: 'Draw pictures',
          phonetics: '/drɔː ˈpɪk.tʃəz/',
          arabicMeaning: 'يرسم صوراً ملونة',
          partOfSpeech: 'phrase',
          exampleSentence: 'In the art room, we draw pictures of animals.',
          visualCue: 'open_book'
        },
        {
          id: 'p3_u3_w3',
          word: 'Take photos',
          phonetics: '/teɪk ˈfəʊ.təʊz/',
          arabicMeaning: 'يلتقط صوراً فوتوغرافية',
          partOfSpeech: 'phrase',
          exampleSentence: 'I take photos of the flowers with my camera.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p3_u3_w4',
          word: 'Listen to pop music',
          phonetics: '/ˈlɪs.ən tuː pɒp ˈmjuː.zɪk/',
          arabicMeaning: 'يستمع إلى موسيقى البوب',
          partOfSpeech: 'phrase',
          exampleSentence: 'Hana listens to pop music in her free time.',
          visualCue: 'music_singing'
        },
        {
          id: 'p3_u3_w5',
          word: 'Play sports',
          phonetics: '/pleɪ spɔːts/',
          arabicMeaning: 'يمارس الرياضة',
          partOfSpeech: 'phrase',
          exampleSentence: 'On Saturdays, we play sports in the park.',
          visualCue: 'foot_steps'
        }
      ],
      phonics: [
        {
          letterSound: 'Sounds of NG /ŋ/ and SP /sp/',
          sampleWords: ['Sing', 'King', 'Fishing', 'Sports', 'Space', 'Spider'],
          rhymingPair: ['Sing', 'Ring']
        }
      ],
      conversationTerms: [
        { en: 'What are you doing? — I am drawing a cat.', ar: 'ماذا تفعل؟ — أنا أرسم قطة.' },
        { en: 'I like collecting magnets, but I don’t like pop music.', ar: 'أحب جمع المغناطيس، ولكنني لا أحب موسيقى البوب.' },
        { en: 'What do you do on the weekend?', ar: 'ماذا تفعل في عطلة نهاية الأسبوع؟' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Present Continuous & Conjunctions (and / but)",
          ruleExplanationAr: "المضارع المستمر للأحداث التي تحدث الآن: am/is/are + Verb-ing. ونستخدم and لإضافة فكرة متفقة، بينما but للتناقض بين فكرتين.",
          structureFormula: "Subject + am/is/are + [Verb-ing] | I like [X], but I don't like [Y]",
          examples: [
            { en: "I am taking photos now.", ar: "أنا ألتقط صوراً الآن." },
            { en: "I like sports, but I don't like singing.", ar: "أحب الرياضة، ولكنني لا أحب الغناء." }
          ],
          visualPatternBlocks: ["am/is/are + Verb-ing", "...and... (Addition)", "...but... (Contrast)"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['drawing', 'am', 'I', 'pictures'],
          correctOrder: ['I', 'am', 'drawing', 'pictures'],
          translationAr: 'أنا أرسم صوراً'
        },
        {
          jumbledParts: ['like', 'I', 'sports,', 'like', 'but', "don't", 'I', 'music'],
          correctOrder: ['I', 'like', 'sports,', 'but', 'I', "don't", 'like', 'music'],
          translationAr: 'أحب الرياضة، ولكنني لا أحب الموسيقى'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the nasal sound /ŋ/ in sing, king, and fishing:',
        prompt: 'Which word contains the /ŋ/ sound at the end?',
        targetResponses: ['Sing', 'King', 'Fishing', 'Ring'],
        scaffoldingHints: ['Ends with n-g']
      },
      {
        type: 'dictation',
        instruction: 'Fill in the coordinating conjunction:',
        prompt: "I like playing football, ______ (ولكن) I don't like tennis.",
        targetResponses: ['but'],
        scaffoldingHints: ['Expresses contrast: b-u-t']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u3_l1_q1',
          type: 'mcq',
          questionPrompt: 'We use a camera or phone to take ______ of nature.',
          options: ['photos', 'pens', 'tables', 'cakes'],
          correctAnswer: 'photos',
          explanationAr: 'نلتقط الصور (photos) بالكاميرا.',
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
          explanationAr: 'مع is نستخدم الفعل مضافاً له ing في المضارع المستمر: drawing.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u3_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [taking - I - photos - am].',
          correctAnswer: 'I am taking photos',
          explanationAr: 'الترتيب الصحيح: I am taking photos.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u3_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: I like ice cream, ______ I don\'t like cake.',
          options: ['but', 'and', 'so', 'because'],
          correctAnswer: 'but',
          explanationAr: 'للتعبير عن التناقض نستخدم but.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u3_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write what you do on Friday: "On the weekend, I ______."',
          correctAnswer: 'play sports with my friends',
          explanationAr: 'يكتب الطالب نشاطه في عطلة نهاية الأسبوع.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 3 - UNIT 4: I Love My Home (أنا أحب بيتي)
  // =========================================================================
  {
    unitId: 'p3_t1_c_u4',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 4,
    unitTitleEn: 'I Love My Home',
    unitTitleAr: 'أنا أحب بيتي والأثاث المنزلي',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p3_u4_w1',
          word: 'Bookcase',
          phonetics: '/ˈbʊk.keɪs/',
          arabicMeaning: 'خزانة كتب / مكتبة',
          partOfSpeech: 'noun',
          exampleSentence: 'I put my storybooks on the wooden bookcase.',
          visualCue: 'open_book'
        },
        {
          id: 'p3_u4_w2',
          word: 'Cupboard',
          phonetics: '/ˈkʌb.əd/',
          arabicMeaning: 'دولاب أو خزانة مطبخ',
          partOfSpeech: 'noun',
          exampleSentence: 'The clean plates are inside the kitchen cupboard.',
          visualCue: 'food_lunch'
        },
        {
          id: 'p3_u4_w3',
          word: 'Armchair',
          phonetics: '/ˈɑːm.tʃeər/',
          arabicMeaning: 'كرسي مريح بذراعين',
          partOfSpeech: 'noun',
          exampleSentence: 'Grandfather sits on the soft armchair to read.',
          visualCue: 'happy_face'
        },
        {
          id: 'p3_u4_w4',
          word: 'Lamp',
          phonetics: '/læmp/',
          arabicMeaning: 'مصباح إضاءة / أباجورة',
          partOfSpeech: 'noun',
          exampleSentence: 'Turn on the desk lamp when you study.',
          visualCue: 'star_badge'
        },
        {
          id: 'p3_u4_w5',
          word: 'Clock',
          phonetics: '/klɒk/',
          arabicMeaning: 'ساعة حائط',
          partOfSpeech: 'noun',
          exampleSentence: 'The round clock is hanging on the wall.',
          visualCue: 'clock_alarm'
        }
      ],
      phonics: [
        {
          letterSound: 'Sounds of AIR /eə/ and EAR /ɪə/',
          sampleWords: ['Chair', 'Hair', 'Pair', 'Ear', 'Hear', 'Near'],
          rhymingPair: ['Chair', 'Hair']
        }
      ],
      conversationTerms: [
        { en: "There is an armchair in the living room.", ar: "يوجد كرسي بذراعين في غرفة المعيشة." },
        { en: "There are four chairs around the dining table.", ar: "توجد أربعة كراسٍ حول طاولة الطعام." },
        { en: "Where is the lamp? — It is next to the bookcase.", ar: "أين المصباح؟ — بجوار خزانة الكتب." }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "There is / There are & Prepositions of Place (in, on, next to, behind)",
          ruleExplanationAr: "للمفرد: There is a/an + [singular noun]. وللجمع: There are + [plural noun]. وحروف الجر المكانية: next to (بجوار)، behind (خلف)، on (على)، in (في).",
          structureFormula: "There is a + [Singular] | There are + [Plural] + [Preposition of place]",
          examples: [
            { en: "There is a lamp next to the bed.", ar: "يوجد مصباح بجوار السرير." },
            { en: "There are books on the shelf.", ar: "توجد كتب على الرف." }
          ],
          visualPatternBlocks: ["There is a [Item]", "There are [Items]", "next to / behind / on"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['is', 'There', 'lamp', 'a', 'table', 'the', 'on'],
          correctOrder: ['There', 'is', 'a', 'lamp', 'on', 'the', 'table'],
          translationAr: 'يوجد مصباح على الطاولة'
        },
        {
          jumbledParts: ['are', 'There', 'chairs', 'two'],
          correctOrder: ['There', 'are', 'two', 'chairs'],
          translationAr: 'يوجد كرسيان'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the /eə/ sound in chair, hair, and pair:',
        prompt: 'Which furniture word has the sound /eə/?',
        targetResponses: ['Chair', 'Armchair'],
        scaffoldingHints: ['You sit on it']
      },
      {
        type: 'dictation',
        instruction: 'Complete the sentence with There is or There are:',
        prompt: '______ two bookcases in the room.',
        targetResponses: ['There are'],
        scaffoldingHints: ['Two is plural']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u4_l1_q1',
          type: 'mcq',
          questionPrompt: 'We store our books and stories neatly on a ______.',
          options: ['bookcase', 'lamp', 'clock', 'bed'],
          correctAnswer: 'bookcase',
          explanationAr: 'نحفظ الكتب على خزانة الكتب (bookcase).',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u4_l2_q1',
          type: 'matching',
          questionPrompt: 'Complete: "______ is a soft armchair in the corner."',
          options: ['There', 'These', 'They', 'Those'],
          correctAnswer: 'There',
          explanationAr: 'يوجد للمفرد هي There is.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u4_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [next - is - lamp - The - to - bookcase - the].',
          correctAnswer: 'The lamp is next to the bookcase',
          explanationAr: 'الترتيب الصحيح: The lamp is next to the bookcase.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u4_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: There ______ three pillows on the sofa.',
          options: ['are', 'is', 'am', 'was'],
          correctAnswer: 'are',
          explanationAr: 'مع الاسم الجمع (three pillows) نستخدم are: There are.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u4_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe your bedroom: "In my bedroom, there is a ______."',
          correctAnswer: 'bed and a small desk',
          explanationAr: 'يكتب الطالب وصف أثاث غرفته.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 3 - UNIT 5: At the Zoo (في حديقة الحيوان)
  // =========================================================================
  {
    unitId: 'p3_t1_c_u5',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 5,
    unitTitleEn: 'At the Zoo',
    unitTitleAr: 'في حديقة الحيوان وبيئات الحيوانات',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p3_u5_w1',
          word: 'Elephant',
          phonetics: '/ˈel.ɪ.fənt/',
          arabicMeaning: 'فيل ضخم',
          partOfSpeech: 'noun',
          exampleSentence: 'The elephant has a long grey trunk.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p3_u5_w2',
          word: 'Giraffe',
          phonetics: '/dʒɪˈrɑːf/',
          arabicMeaning: 'زرافة',
          partOfSpeech: 'noun',
          exampleSentence: 'The giraffe has a very long neck to eat leaves from high trees.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p3_u5_w3',
          word: 'Panda',
          phonetics: '/ˈpæn.də/',
          arabicMeaning: 'دب الباندا',
          partOfSpeech: 'noun',
          exampleSentence: 'The black and white panda eats green bamboo.',
          visualCue: 'happy_face'
        },
        {
          id: 'p3_u5_w4',
          word: 'Hippo',
          phonetics: '/ˈhɪp.əʊ/',
          arabicMeaning: 'فرس النهر (سيد قشطة)',
          partOfSpeech: 'noun',
          exampleSentence: 'The hippo swims in the river to stay cool.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p3_u5_w5',
          word: 'Penguin',
          phonetics: '/ˈpeŋ.ɡwɪn/',
          arabicMeaning: 'طائر البطريق',
          partOfSpeech: 'noun',
          exampleSentence: 'The penguin waddles on the ice and swims fast.',
          visualCue: 'star_badge'
        }
      ],
      phonics: [
        {
          letterSound: 'Sounds of PH /f/ and WH /w/',
          sampleWords: ['Photo', 'Elephant', 'White', 'Whale', 'Where', 'When'],
          rhymingPair: ['Whale', 'Tale']
        }
      ],
      conversationTerms: [
        { en: 'Where does the panda live? — In the bamboo forest in China.', ar: 'أين يعيش الباندا؟ — في غابة الخيزران بالصين.' },
        { en: 'Look at the elephant! It is drinking water.', ar: 'انظر إلى الفيل! إنه يشرب الماء.' },
        { en: 'What does a giraffe eat? — Leaves from tall trees.', ar: 'ماذا تأكل الزرافة؟ — أوراق الأشجار العالية.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Where Questions & Present Simple Habits (Where does it live? / It lives in...)",
          ruleExplanationAr: "للسؤال عن موطن الحيوان: Where does + [اسم الحيوان] + live? والإجابة: It lives in + [المكان]. وفعل المفرد يضاف له s: lives / eats.",
          structureFormula: "Where does the [animal] live? -> It lives in [Habitat]",
          examples: [
            { en: "Where does the lion live? - It lives in the grasslands.", ar: "أين يعيش الأسد؟ - يعيش في المراعي الطبيعية." },
            { en: "The giraffe eats leaves.", ar: "الزرافة تأكل أوراق الأشجار." }
          ],
          visualPatternBlocks: ["Where does it live?", "It lives in...", "It eats..."]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['elephant', 'The', 'big', 'is'],
          correctOrder: ['The', 'elephant', 'is', 'big'],
          translationAr: 'الفيل كبير الحجم'
        },
        {
          jumbledParts: ['bamboo', 'eats', 'panda', 'The'],
          correctOrder: ['The', 'panda', 'eats', 'bamboo'],
          translationAr: 'الباندا تأكل الخيزران'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Notice PH makes the /f/ sound as in Elephant and Photo:',
        prompt: 'Which animal word contains the /f/ sound spelled PH?',
        targetResponses: ['Elephant'],
        scaffoldingHints: ['A large grey animal with a trunk']
      },
      {
        type: 'dictation',
        instruction: 'Fill in the animal name:',
        prompt: 'The tall ______ (زرافة) has a long neck.',
        targetResponses: ['giraffe'],
        scaffoldingHints: ['Spelled g-i-r-a-f-f-e']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u5_l1_q1',
          type: 'mcq',
          questionPrompt: 'A very tall animal with a long neck that eats tree leaves is a ______.',
          options: ['giraffe', 'dog', 'cat', 'duck'],
          correctAnswer: 'giraffe',
          explanationAr: 'الزرافة (giraffe) حيوان طويل الرقبة.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u5_l2_q1',
          type: 'matching',
          questionPrompt: 'Where does the panda live? — "It lives in ______."',
          options: ['China', 'the sea', 'the sky', 'a car'],
          correctAnswer: 'China',
          explanationAr: 'يعيش دب الباندا في غابات الصين (China).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u5_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [lives - The - in - water - hippo].',
          correctAnswer: 'The hippo lives in water',
          explanationAr: 'الترتيب الصحيح: The hippo lives in water.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u5_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The giant panda eats ______ plant.',
          options: ['bamboo', 'meat', 'chocolate', 'bread'],
          correctAnswer: 'bamboo',
          explanationAr: 'يتغذى الباندا على نبات الخيزران (bamboo).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u5_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe your favourite zoo animal: "My favourite zoo animal is the ______ because ______."',
          correctAnswer: 'elephant because it is big and gentle',
          explanationAr: 'يكتب الطالب حيوانه المفضل وسبب تفضيله.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 3 - UNIT 6: Let's Go to the Circus! (هيا نذهب إلى السيرك!)
  // =========================================================================
  {
    unitId: 'p3_t1_c_u6',
    grade: 'primary_3',
    track: 'connect',
    term: 1,
    unitNumber: 6,
    unitTitleEn: "Let's Go to the Circus!",
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
          visualCue: 'happy_face'
        },
        {
          id: 'p3_u6_w2',
          word: 'Ringmaster',
          phonetics: '/ˈrɪŋˌmɑː.stər/',
          arabicMeaning: 'مدير حلبة السيرك',
          partOfSpeech: 'noun',
          exampleSentence: 'The ringmaster wears a tall hat and speaks through a microphone.',
          visualCue: 'star_badge'
        },
        {
          id: 'p3_u6_w3',
          word: 'Acrobat',
          phonetics: '/ˈæk.rə.bæt/',
          arabicMeaning: 'لاعب أكروبات وبهلوان',
          partOfSpeech: 'noun',
          exampleSentence: 'The acrobat jumps and balances high above.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p3_u6_w4',
          word: 'Juggler',
          phonetics: '/ˈdʒʌɡ.lər/',
          arabicMeaning: 'لاعب خفة يرمي الكرات بالهواء',
          partOfSpeech: 'noun',
          exampleSentence: 'The juggler can throw five colourful balls in the air.',
          visualCue: 'star_badge'
        },
        {
          id: 'p3_u6_w5',
          word: 'Tent',
          phonetics: '/tent/',
          arabicMeaning: 'خيمة السيرك الكبيرة',
          partOfSpeech: 'noun',
          exampleSentence: 'The circus is inside a big red and white tent.',
          visualCue: 'desert_safari'
        }
      ],
      phonics: [
        {
          letterSound: 'Sounds of OU /aʊ/ and OW /aʊ/',
          sampleWords: ['Mouse', 'Mouth', 'Cloud', 'Clown', 'Cow', 'Brown'],
          rhymingPair: ['Clown', 'Town']
        }
      ],
      conversationTerms: [
        { en: 'What does the clown look like? — He is tall, funny, and wearing a big hat.', ar: 'كيف يبدو شكل المهرج؟ — هو طويل ومضحك ويرتدي قبعة كبيرة.' },
        { en: 'Can the juggler juggle rings? — Yes, he can!', ar: 'هل يستطيع لاعب الخفة رمي الأطواق؟ — نعم، يستطيع!' },
        { en: 'I love going to the circus with my family.', ar: 'أنا أحب الذهاب إلى السيرك مع عائلتي.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Physical Description (What does he/she look like? / He is + adjectives)",
          ruleExplanationAr: "للسؤال عن المظهر الخارجي: What does he/she look like? وتكون الإجابة: He/She is + [الصفات] (tall, short, funny, fat, thin).",
          structureFormula: "What does he/she look like? -> He/She is + [Adjectives]",
          examples: [
            { en: "What does the acrobat look like? - She is young and thin.", ar: "كيف تبدو لاعبة البهلوان؟ - هي شابة ونحيفة." },
            { en: "The clown is very funny.", ar: "المهرج مضحك للغاية." }
          ],
          visualPatternBlocks: ["What does he look like?", "He is [Adjective]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['funny', 'is', 'clown', 'The'],
          correctOrder: ['The', 'clown', 'is', 'funny'],
          translationAr: 'المهرج مضحك'
        },
        {
          jumbledParts: ['does', 'What', 'look', 'he', 'like?'],
          correctOrder: ['What', 'does', 'he', 'look', 'like?'],
          translationAr: 'كيف يبدو شكله؟'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify the diphthong /aʊ/ in Clown, Cloud, and Cow:',
        prompt: 'Which word contains the /aʊ/ sound?',
        targetResponses: ['Clown', 'Cow', 'Cloud', 'Mouth'],
        scaffoldingHints: ['Sounds like ow']
      },
      {
        type: 'dictation',
        instruction: 'Fill in the performer name:',
        prompt: 'The ______ (مهرج) makes children laugh loudly.',
        targetResponses: ['clown'],
        scaffoldingHints: ['Spelled c-l-o-w-n']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p3_u6_l1_q1',
          type: 'mcq',
          questionPrompt: 'A circus performer who wears makeup and makes people laugh is a ______.',
          options: ['clown', 'doctor', 'teacher', 'mechanic'],
          correctAnswer: 'clown',
          explanationAr: 'المهرج (clown) يضحك الجماهير في السيرك.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p3_u6_l2_q1',
          type: 'matching',
          questionPrompt: 'Physical description: "What does he look like? — He ______ tall and thin."',
          options: ['is', 'are', 'am', 'have'],
          correctAnswer: 'is',
          explanationAr: 'مع الضمير المفرد he نستخدم is: He is tall.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p3_u6_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [juggler - The - fast - is].',
          correctAnswer: 'The juggler is fast',
          explanationAr: 'الترتيب الصحيح: The juggler is fast.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p3_u6_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The circus show takes place inside a gigantic ______.',
          options: ['tent', 'bag', 'bottle', 'car'],
          correctAnswer: 'tent',
          explanationAr: 'يقام عرض السيرك داخل خيمة ضخمة (tent).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p3_u6_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe a circus act you like: "At the circus, I like watching the ______."',
          correctAnswer: 'acrobat because she balances high',
          explanationAr: 'يكتب الطالب فقرته المفضلة في السيرك.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 4 - UNIT 1: I Feel Good (أشعر أنني بحالة جيدة)
  // =========================================================================
  {
    unitId: 'p4_t1_c_u1',
    grade: 'primary_4',
    track: 'connect',
    term: 1,
    unitNumber: 1,
    unitTitleEn: "The Five Senses",
    unitTitleAr: 'أشعر أنني بحالة جيدة والجهاز الهضمي والتنفسي',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p4_u1_w1',
          word: 'Digestive system',
          phonetics: '/daɪˈdʒes.tɪv ˈsɪs.təm/',
          arabicMeaning: 'الجهاز الهضمي',
          partOfSpeech: 'phrase',
          exampleSentence: 'We use our digestive system when we eat and drink.',
          visualCue: 'food_lunch'
        },
        {
          id: 'p4_u1_w2',
          word: 'Nutrients',
          phonetics: '/ˈnjuː.tri.ənts/',
          arabicMeaning: 'العناصر الغذائية المفيدة',
          partOfSpeech: 'noun',
          exampleSentence: 'Our body absorbs essential nutrients from healthy food.',
          visualCue: 'food_lunch'
        },
        {
          id: 'p4_u1_w3',
          word: 'Lungs',
          phonetics: '/lʌŋz/',
          arabicMeaning: 'الرئتان (الجهاز التنفسي)',
          partOfSpeech: 'noun',
          exampleSentence: 'We have two lungs to breathe in fresh oxygen.',
          visualCue: 'happy_face'
        },
        {
          id: 'p4_u1_w4',
          word: 'Damietta cheese',
          phonetics: '/ˌdæm.iˈet.ə tʃiːz/',
          arabicMeaning: 'الجبن الدمياطي الشهير',
          partOfSpeech: 'phrase',
          exampleSentence: 'Damietta cheese is famous all over Egypt and the world.',
          visualCue: 'food_lunch'
        },
        {
          id: 'p4_u1_w5',
          word: 'Stomach',
          phonetics: '/ˈstʌm.ək/',
          arabicMeaning: 'المعدة',
          partOfSpeech: 'noun',
          exampleSentence: 'Food mixes with gastric juice inside the stomach.',
          visualCue: 'food_lunch'
        }
      ],
      phonics: [
        {
          letterSound: 'Prefix RE- (meaning do again)',
          sampleWords: ['Repaint', 'Reread', 'Remake', 'Reclean'],
          rhymingPair: ['Read', 'Lead']
        }
      ],
      conversationTerms: [
        { en: 'What foods do we produce in Egypt? — Rice, onions, tomatoes, and wheat.', ar: 'ما الأغذية التي ننتجها في مصر؟ — الأرز والبصل والطماطم والقمح.' },
        { en: 'Egyptian farmers raise chickens and cows.', ar: 'الفلاحون المصريون يربون الدجاج والأبقار.' },
        { en: 'Chew your food well before swallowing.', ar: 'امضغ طعامك جيداً قبل بلعه.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Compound Sentences with Conjunctions (and / but) & Prefix re-",
          ruleExplanationAr: "نستخدم and لإضافة فكرة متفقة (I eat vegetables and I exercise). ونستخدم but لربط فكرتين متناقضتين (I want to play football, but my leg hurts). والبادئة re- تعني إعادة الفعل مرة أخرى (repaint = يدهن مرة ثانية).",
          structureFormula: "Clause 1 + and/but + Clause 2 | re + [verb]",
          examples: [
            { en: "I like bananas, but I don't like mangoes.", ar: "أحب الموز، ولكنني لا أحب المانجو." },
            { en: "He repainted his bedroom.", ar: "هو أعاد دهان غرفة نومه." }
          ],
          visualPatternBlocks: ["Idea 1 + and + Idea 2", "Idea 1 + but + Opposite Idea", "re- + Verb"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['bananas', 'I', 'eat', 'exercise', 'and', 'I'],
          correctOrder: ['I', 'eat', 'bananas', 'and', 'I', 'exercise'],
          translationAr: 'أنا آكل الموز وأمارس الرياضة'
        },
        {
          jumbledParts: ['house', 'repainted', 'He', 'his'],
          correctOrder: ['He', 'repainted', 'his', 'house'],
          translationAr: 'هو أعاد دهان منزله'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Understand the meaning of prefix re-:',
        prompt: 'What does "reread the story" mean?',
        targetResponses: ['Read the story again', 'read again'],
        scaffoldingHints: ['re- means again']
      },
      {
        type: 'dictation',
        instruction: 'Complete with the organ name:',
        prompt: 'We breathe in oxygen through our ______ (رئتين).',
        targetResponses: ['lungs'],
        scaffoldingHints: ['Spelled l-u-n-g-s']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p4_u1_l1_q1',
          type: 'mcq',
          questionPrompt: 'In the digestive system, food travels from the mouth down the esophagus to the ______.',
          options: ['stomach', 'nose', 'ear', 'eye'],
          correctAnswer: 'stomach',
          explanationAr: 'ينتقل الطعام عبر المريء إلى المعدة (stomach).',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p4_u1_l2_q1',
          type: 'matching',
          questionPrompt: 'Damietta Governorate in Egypt is worldwide famous for making delicious ______.',
          options: ['cheese', 'ice cream', 'snow', 'cars'],
          correctAnswer: 'cheese',
          explanationAr: 'تشتهر محافظة دمياط بصناعة الجبن الدمياطي (Damietta cheese).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p4_u1_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [painted - again - his - bike - He] -> use prefix re-:',
          correctAnswer: 'He repainted his bike',
          explanationAr: 'الصياغة باستخدام البادئة re-: He repainted his bike.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p4_u1_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: I want to practice tennis, ______ it is raining outside.',
          options: ['but', 'and', 'so', 'because'],
          correctAnswer: 'but',
          explanationAr: 'للتعبير عن التناقض نستخدم but.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p4_u1_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Explain how to keep your respiratory system healthy: "To keep our lungs healthy, we should ______."',
          correctAnswer: 'stay away from smoke and exercise',
          explanationAr: 'الحفاظ على صحة الرئتين بالابتعاد عن التدخين وممارسة الرياضة.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 4 - UNIT 2: Desert Animals (حيوانات الصحراء)
  // =========================================================================
  {
    unitId: 'p4_t1_c_u2',
    grade: 'primary_4',
    track: 'connect',
    term: 1,
    unitNumber: 2,
    unitTitleEn: "My Community",
    unitTitleAr: 'حيوانات الصحراء والمقارنة بين الصفات',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p4_u2_w1',
          word: 'Fennec fox',
          phonetics: '/ˈfen.ek fɒks/',
          arabicMeaning: 'ثعلب الفنك الصحراوي',
          partOfSpeech: 'noun',
          exampleSentence: 'The fennec fox has big ears to hear insects and stay cool.',
          visualCue: 'desert_safari'
        },
        {
          id: 'p4_u2_w2',
          word: 'Camel',
          phonetics: '/ˈkæm.əl/',
          arabicMeaning: 'الجمل (سفينة الصحراء)',
          partOfSpeech: 'noun',
          exampleSentence: 'Camels have flat feet so they can walk easily on soft sand.',
          visualCue: 'desert_safari'
        },
        {
          id: 'p4_u2_w3',
          word: 'Steppe eagle',
          phonetics: '/step ˈiː.ɡəl/',
          arabicMeaning: 'عقاب السهوب (طائر جارح)',
          partOfSpeech: 'noun',
          exampleSentence: 'The steppe eagle travels from Europe to Africa in winter.',
          visualCue: 'desert_safari'
        },
        {
          id: 'p4_u2_w4',
          word: 'Pelican',
          phonetics: '/ˈpel.ɪ.kən/',
          arabicMeaning: 'طائر البجع',
          partOfSpeech: 'noun',
          exampleSentence: 'The pelican catches small fish with its huge beak.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p4_u2_w5',
          word: 'Rhim gazelle',
          phonetics: '/riːm ɡəˈzel/',
          arabicMeaning: 'غزال الريم الصحراوي',
          partOfSpeech: 'noun',
          exampleSentence: 'Rhim gazelles have long horns and yellow-white coats.',
          visualCue: 'desert_safari'
        }
      ],
      phonics: [
        {
          letterSound: 'Short vs Long Vowels (/æ/ in cat vs /eɪ/ in cake)',
          sampleWords: ['Cat', 'Cake', 'Pin', 'Pine', 'Not', 'Note'],
          rhymingPair: ['Bake', 'Cake']
        }
      ],
      conversationTerms: [
        { en: 'Camels are perfect for the desert.', ar: 'الجمال ملائمة تماماً للعيش في الصحراء.' },
        { en: 'A snake is more dangerous than a fox.', ar: 'الثعبان أكثر خطورة من الثعلب.' },
        { en: 'Which animal is bigger? The camel or the horse?', ar: 'أي الحيوانين أكبر حجماً؟ الجمل أم الحصان؟' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Comparative Adjectives (Short adj + -er than / more + long adj + than)",
          ruleExplanationAr: "للمقارنة بين اثنين في صفة قصيرة: الصفة + er + than (taller than, bigger than, faster than). ومع الصفات الطويلة: more + الصفة + than (more dangerous than, more beautiful than).",
          structureFormula: "Noun 1 + is + [Short Adj-er / more + Long Adj] + than + Noun 2",
          examples: [
            { en: "A horse is faster than a camel.", ar: "الحصان أسرع من الجمل." },
            { en: "A crocodile is more dangerous than a spider.", ar: "التمساح أكثر خطورة من العنكبوت." }
          ],
          visualPatternBlocks: ["[Short Adj]-er + than", "more + [Long Adj] + than"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['than', 'is', 'A', 'horse', 'faster', 'camel', 'a'],
          correctOrder: ['A', 'horse', 'is', 'faster', 'than', 'a', 'camel'],
          translationAr: 'الحصان أسرع من الجمل'
        },
        {
          jumbledParts: ['fox', 'The', 'smaller', 'is', 'camel', 'the', 'than'],
          correctOrder: ['The', 'fox', 'is', 'smaller', 'than', 'the', 'camel'],
          translationAr: 'الثعلب أصغر حجماً من الجمل'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Distinguish between short vowel /æ/ in cat and long /eɪ/ in cake:',
        prompt: 'Which word has the long vowel sound /eɪ/?',
        targetResponses: ['Cake', 'Plane', 'Plate'],
        scaffoldingHints: ['The letter A says its name']
      },
      {
        type: 'dictation',
        instruction: 'Write the comparative form of fast:',
        prompt: 'A cheetah is ______ (أسرع) than a lion.',
        targetResponses: ['faster'],
        scaffoldingHints: ['Add -er to fast']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p4_u2_l1_q1',
          type: 'mcq',
          questionPrompt: 'The fennec fox has very big ______ to hear tiny desert insects.',
          options: ['ears', 'teeth', 'shoes', 'tails'],
          correctAnswer: 'ears',
          explanationAr: 'يمتلك ثعلب الفنك أذنين كبيرتين (ears) لسماع الحشرات وفقد الحرارة.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p4_u2_l2_q1',
          type: 'matching',
          questionPrompt: 'Camels can survive without water for a long time because they are ______ for the desert.',
          options: ['perfect', 'scared', 'lazy', 'dirty'],
          correctAnswer: 'perfect',
          explanationAr: 'الجمال مخلوقات مثالية للصحراء (perfect for the desert).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p4_u2_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [faster - horse - A - than - is - camel - a].',
          correctAnswer: 'A horse is faster than a camel',
          explanationAr: 'صياغة المقارنة: A horse is faster than a camel.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p4_u2_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: A snake is ______ dangerous than a pelican.',
          options: ['more', 'much', 'as', 'most'],
          correctAnswer: 'more',
          explanationAr: 'مع الصفات الطويلة في المقارنة نستخدم more: more dangerous than.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p4_u2_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Compare two desert animals: "A camel is ______ than a fennec fox."',
          correctAnswer: 'bigger and heavier',
          explanationAr: 'يقارن الطالب بين الجمل وثعلب الفنك.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 4 - UNIT 3: Why Are Plants Green? (لماذا النباتات خضراء؟)
  // =========================================================================
  {
    unitId: 'p4_t1_c_u3',
    grade: 'primary_4',
    track: 'connect',
    term: 1,
    unitNumber: 3,
    unitTitleEn: "Animals In Our World",
    unitTitleAr: 'لماذا النباتات خضراء؟ وعملية الإنبات وصيغ التفضيل',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p4_u3_w1',
          word: 'Germination',
          phonetics: '/ˌdʒɜː.mɪˈneɪ.ʃən/',
          arabicMeaning: 'عملية إنبات البذور',
          partOfSpeech: 'noun',
          exampleSentence: 'Germination is when a seed starts to grow into a plant.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p4_u3_w2',
          word: 'Root',
          phonetics: '/ruːt/',
          arabicMeaning: 'جذر النبات (تحت التربة)',
          partOfSpeech: 'noun',
          exampleSentence: 'Plant roots grow deep below the soil to absorb water.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p4_u3_w3',
          word: 'Shoot',
          phonetics: '/ʃuːt/',
          arabicMeaning: 'النابتة / النبتة الصغيرة فوق التربة',
          partOfSpeech: 'noun',
          exampleSentence: 'The green shoot grows above the brown soil.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p4_u3_w4',
          word: 'Sunflower',
          phonetics: '/ˈsʌnˌflaʊ.ər/',
          arabicMeaning: 'زهرة عباد الشمس',
          partOfSpeech: 'noun',
          exampleSentence: 'The sunflower is the heaviest flower in the garden.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p4_u3_w5',
          word: 'Soil',
          phonetics: '/sɔɪl/',
          arabicMeaning: 'التربة الزراعية',
          partOfSpeech: 'noun',
          exampleSentence: 'We plant the tomato seed inside fertile soil.',
          visualCue: 'flower_garden'
        }
      ],
      phonics: [
        {
          letterSound: 'Pronunciation of -ED endings (/t/, /d/, /ɪd/)',
          sampleWords: ['Looked (/t/)', 'Watered (/d/)', 'Planted (/ɪd/)', 'Started (/ɪd/)'],
          rhymingPair: ['Planted', 'Wanted']
        }
      ],
      conversationTerms: [
        { en: 'We put a seed in the soil and water it every day.', ar: 'نضع بذرة في التربة ونسقيها كل يوم بالماء.' },
        { en: 'The roots grow under the soil.', ar: 'تنمو الجذور تحت التربة.' },
        { en: 'The sunflower is the largest flower.', ar: 'زهرة عباد الشمس هي أكبر الزهور حجماً.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Superlative Adjectives (The + short adj + -est / The most + long adj)",
          ruleExplanationAr: "لتفضيل عنصر واحد على مجموعة كاملة: نضع the + الصفة القصيرة + est (the biggest, the tallest). ومع الصفات الطويلة: the most + الصفة (the most beautiful).",
          structureFormula: "The + [Short Adj]-est | The most + [Long Adj]",
          examples: [
            { en: "The sunflower is the biggest flower in the yard.", ar: "زهرة عباد الشمس هي أكبر زهرة في الفناء." },
            { en: "The rose is the most beautiful flower.", ar: "الوردة هي الزهرة الأكثر جمالاً." }
          ],
          visualPatternBlocks: ["the + [Short Adj]-est", "the most + [Long Adj]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['sunflower', 'The', 'biggest', 'is', 'the'],
          correctOrder: ['The', 'sunflower', 'is', 'the', 'biggest'],
          translationAr: 'زهرة عباد الشمس هي الأكبر'
        },
        {
          jumbledParts: ['Roots', 'soil', 'under', 'the', 'grow'],
          correctOrder: ['Roots', 'grow', 'under', 'the', 'soil'],
          translationAr: 'تنمو الجذور تحت التربة'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify verbs ending in /ɪd/ sound as in planted and started:',
        prompt: 'Which past tense verb ends in the /ɪd/ sound?',
        targetResponses: ['Planted', 'Started', 'Wanted'],
        scaffoldingHints: ['After t or d sounds']
      },
      {
        type: 'dictation',
        instruction: 'Complete the superlative form:',
        prompt: 'The blue whale is the ______ (أكبر) animal in the world.',
        targetResponses: ['biggest'],
        scaffoldingHints: ['Double the g: b-i-g-g-e-s-t']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p4_u3_l1_q1',
          type: 'mcq',
          questionPrompt: 'A plant needs sunlight and ______ to grow well.',
          options: ['water', 'ink', 'oil', 'shoes'],
          correctAnswer: 'water',
          explanationAr: 'يحتاج النبات إلى ضوء الشمس والماء (water) للنمو.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p4_u3_l2_q1',
          type: 'matching',
          questionPrompt: 'The roots of a green plant always grow ______ the soil.',
          options: ['under', 'above', 'on', 'between'],
          correctAnswer: 'under',
          explanationAr: 'تنمو جذور النباتات تحت التربة (under the soil).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p4_u3_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [the - rose - is - The - most - beautiful].',
          correctAnswer: 'The rose is the most beautiful',
          explanationAr: 'صيغة التفضيل: The rose is the most beautiful.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p4_u3_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The sunflower is the ______ flower in the garden.',
          options: ['heaviest', 'heavy', 'heavier', 'heavily'],
          correctAnswer: 'heaviest',
          explanationAr: 'صيغة التفضيل مع the هي heaviest.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p4_u3_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Explain why plants are important for our planet: "Plants are important because ______."',
          correctAnswer: 'they produce oxygen and give us food',
          explanationAr: 'أهمية النباتات في إنتاج الأكسجين وتوفير الغذاء.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 4 - UNIT 4: Where Do You Live? (أين تعيش؟)
  // =========================================================================
  {
    unitId: 'p4_t1_c_u4',
    grade: 'primary_4',
    track: 'connect',
    term: 1,
    unitNumber: 4,
    unitTitleEn: "Egypt – My Homeland",
    unitTitleAr: 'أين تعيش؟ وأنواع المنازل وحروف الجر المكانية',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p4_u4_w1',
          word: 'Apartment',
          phonetics: '/əˈpɑːt.mənt/',
          arabicMeaning: 'شقة سكنية في عمارة',
          partOfSpeech: 'noun',
          exampleSentence: 'My family lives in a modern apartment with a balcony.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p4_u4_w2',
          word: 'Houseboat',
          phonetics: '/ˈhaʊs.bəʊt/',
          arabicMeaning: 'منزل عائم في النيل',
          partOfSpeech: 'noun',
          exampleSentence: 'Grandmother loves living on a quiet houseboat on the Nile.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p4_u4_w3',
          word: 'Tent',
          phonetics: '/tent/',
          arabicMeaning: 'خيمة بدوية من القماش',
          partOfSpeech: 'noun',
          exampleSentence: 'Bedouin people live in durable cloth tents in the desert.',
          visualCue: 'desert_safari'
        },
        {
          id: 'p4_u4_w4',
          word: 'Cave',
          phonetics: '/keɪv/',
          arabicMeaning: 'كهف منحوت في الصخر',
          partOfSpeech: 'noun',
          exampleSentence: 'In a rock cave, the rooms are naturally cool in summer.',
          visualCue: 'desert_safari'
        },
        {
          id: 'p4_u4_w5',
          word: 'Balcony',
          phonetics: '/ˈbæl.kə.ni/',
          arabicMeaning: 'شرفة / بلكونة',
          partOfSpeech: 'noun',
          exampleSentence: 'I can see the busy street from our apartment balcony.',
          visualCue: 'open_book'
        }
      ],
      phonics: [
        {
          letterSound: 'Syllables and Word Stress',
          sampleWords: ['Apartment (3)', 'Balcony (3)', 'House (1)', 'Living room (3)'],
          rhymingPair: ['Near', 'Clear']
        }
      ],
      conversationTerms: [
        { en: 'Where do you live? — I live in an apartment in Cairo.', ar: 'أين تعيش؟ — أعيش في شقة بالقاهرة.' },
        { en: 'My favourite room is the living room with the balcony.', ar: 'غرفتي المفضلة هي غرفة المعيشة ذات الشرفة.' },
        { en: 'The hospital is between the school and the post office.', ar: 'المستشفى تقع بين المدرسة ومكتب البريد.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Prepositions of Place (in front of, behind, next to, between... and...)",
          ruleExplanationAr: "حروف الجر الدالة على المكان: in front of (أمام)، behind (خلف)، next to (بجوار)، between X and Y (بين كذا وكذا).",
          structureFormula: "Subject + is + [Preposition of place] + [Location]",
          examples: [
            { en: "The supermarket is next to the bank.", ar: "السوبرماركت بجوار البنك." },
            { en: "The school is between the park and the library.", ar: "المدرسة تقع بين الحديقة والمكتبة." }
          ],
          visualPatternBlocks: ["is next to...", "is in front of...", "is between [A] and [B]"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['live', 'in', 'an', 'I', 'apartment'],
          correctOrder: ['I', 'live', 'in', 'an', 'apartment'],
          translationAr: 'أنا أعيش في شقة'
        },
        {
          jumbledParts: ['is', 'next', 'The', 'to', 'school', 'bank', 'the'],
          correctOrder: ['The', 'school', 'is', 'next', 'to', 'the', 'bank'],
          translationAr: 'المدرسة بجوار البنك'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Count syllables in housing words:',
        prompt: 'How many syllables are in the word "a-part-ment"?',
        targetResponses: ['3', 'three'],
        scaffoldingHints: ['Clap each beat: a-part-ment']
      },
      {
        type: 'dictation',
        instruction: 'Complete with the preposition:',
        prompt: 'The library is ______ (بين) the school and the park.',
        targetResponses: ['between'],
        scaffoldingHints: ['Used for two objects: b-e-t-w-e-e-n']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p4_u4_l1_q1',
          type: 'mcq',
          questionPrompt: 'A home made of cloth where Bedouin people live in the desert is a ______.',
          options: ['tent', 'boat', 'cave', 'school'],
          correctAnswer: 'tent',
          explanationAr: 'الخيمة (tent) مصنوعة من القماش وتستخدم في الصحراء.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p4_u4_l2_q1',
          type: 'matching',
          questionPrompt: 'Location drill: "The post office is between the supermarket ______ the museum."',
          options: ['and', 'to', 'in', 'with'],
          correctAnswer: 'and',
          explanationAr: 'التركيب هو between ... and ... (بين كذا وكذا).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p4_u4_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [houseboat - on - She - a - lives].',
          correctAnswer: 'She lives on a houseboat',
          explanationAr: 'الترتيب الصحيح: She lives on a houseboat.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p4_u4_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: In a rock cave, the temperature is always ______ in summer.',
          options: ['cool', 'hot', 'boiling', 'burning'],
          correctAnswer: 'cool',
          explanationAr: 'في الكهوف الصخرية تكون درجة الحرارة لطيفة ومعتدلة (cool).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p4_u4_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe your favourite room at home: "My favourite room is the ______ because ______."',
          correctAnswer: 'bedroom because it is quiet and comfortable',
          explanationAr: 'يكتب الطالب غرفته المفضلة في المنزل والسبب.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 4 - UNIT 5: Where Do You Work? (أين تعمل؟)
  // =========================================================================
  {
    unitId: 'p4_t1_c_u5',
    grade: 'primary_4',
    track: 'connect',
    term: 1,
    unitNumber: 5,
    unitTitleEn: "A Day At Work",
    unitTitleAr: 'أين تعمل؟ والمهن الخدمية والأدوات',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p4_u5_w1',
          word: 'Electrician',
          phonetics: '/ˌɪl.ekˈtrɪʃ.ən/',
          arabicMeaning: 'كهربائي',
          partOfSpeech: 'noun',
          exampleSentence: 'An electrician connects the wires and fixes the lights.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p4_u5_w2',
          word: 'Plumber',
          phonetics: '/ˈplʌm.ər/',
          arabicMeaning: 'سباك (حرف b صامت)',
          partOfSpeech: 'noun',
          exampleSentence: 'The plumber fixes pipes and faucets so we have clean running water.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p4_u5_w3',
          word: 'Mail carrier',
          phonetics: '/meɪl ˈkær.i.ər/',
          arabicMeaning: 'ساعي البريد',
          partOfSpeech: 'noun',
          exampleSentence: 'The mail carrier delivers letters and parcels to our doorstep.',
          visualCue: 'school_bag'
        },
        {
          id: 'p4_u5_w4',
          word: 'Garbage collector',
          phonetics: '/ˈɡɑː.bɪdʒ kəˌlek.tər/',
          arabicMeaning: 'عامل جمع القمامة والنظافة',
          partOfSpeech: 'noun',
          exampleSentence: 'Garbage collectors keep our city streets tidy and clean.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p4_u5_w5',
          word: 'Bus driver',
          phonetics: '/bʌs ˈdraɪ.vər/',
          arabicMeaning: 'سائق حافلة مدرسية',
          partOfSpeech: 'noun',
          exampleSentence: 'The bus driver drives pupils safely to school every morning.',
          visualCue: 'star_badge'
        }
      ],
      phonics: [
        {
          letterSound: 'Silent Letters (b in plumber, k in knife)',
          sampleWords: ['Plumber', 'Doubt', 'Climb', 'Knife', 'Knee'],
          rhymingPair: ['Knee', 'See']
        }
      ],
      conversationTerms: [
        { en: 'Who connects the electricity? — The electrician.', ar: 'من يوصل الكهرباء؟ — الكهربائي.' },
        { en: 'All jobs in our city are very important.', ar: 'كل الوظائف في مدينتنا مهمة جداً.' },
        { en: 'What does a plumber do? — He connects pipes and taps.', ar: 'ماذا يفعل السباك؟ — يوصل المواسير والصنابير.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Demonstrative Pronouns (This / That / These / Those) & Jobs with Present Simple",
          ruleExplanationAr: "للقريب المفرد: this. للبعيد المفرد: that. وللقريب الجمع: these. وللبعيد الجمع: those. وأفعال المهن في المضارع البسيط: A plumber fixes (تنتهي بـ s/es).",
          structureFormula: "This/That + is + [singular] | These/Those + are + [plural]",
          examples: [
            { en: "This is my tool.", ar: "هذه أداتي (قريبة)." },
            { en: "Those are electric wires.", ar: "تلك أسلاك كهربائية (بعيدة)." }
          ],
          visualPatternBlocks: ["This is (near singular)", "That is (far singular)", "These are / Those are"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['fixes', 'pipes', 'A', 'plumber'],
          correctOrder: ['A', 'plumber', 'fixes', 'pipes'],
          translationAr: 'السباك يصلح المواسير'
        },
        {
          jumbledParts: ['These', 'electrician\'s', 'are', 'tools', 'the'],
          correctOrder: ['These', 'are', 'the', "electrician's", 'tools'],
          translationAr: 'هذه أدوات الكهربائي'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify silent letters (b in plumber):',
        prompt: 'Which letter is silent in the word "plumber"?',
        targetResponses: ['b', 'letter b'],
        scaffoldingHints: ['Pronounced /plʌm.ər/ without b']
      },
      {
        type: 'dictation',
        instruction: 'Fill in the professional title:',
        prompt: 'An ______ (كهربائي) connects lights and sockets.',
        targetResponses: ['electrician'],
        scaffoldingHints: ['Starts with e-l-e-c-t-r-i-c-i-a-n']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p4_u5_l1_q1',
          type: 'mcq',
          questionPrompt: 'A person who fixes leaking pipes and water faucets is a ______.',
          options: ['plumber', 'teacher', 'doctor', 'pilot'],
          correctAnswer: 'plumber',
          explanationAr: 'السباك (plumber) يصلح مواسير المياه وصنابيرها.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p4_u5_l2_q1',
          type: 'matching',
          questionPrompt: 'Mail carriers walk all day and carry heavy ______ to deliver letters.',
          options: ['bags', 'pianos', 'sofas', 'beds'],
          correctAnswer: 'bags',
          explanationAr: 'يحمل ساعي البريد حقائب (bags) ثقيلة لتوصيل الرسائل.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p4_u5_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [letters - carrier - A - delivers - mail].',
          correctAnswer: 'A mail carrier delivers letters',
          explanationAr: 'الترتيب الصحيح: A mail carrier delivers letters.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p4_u5_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: ______ are the screwdriver tools on the high shelf over there (plural far).',
          options: ['Those', 'This', 'That', 'These'],
          correctAnswer: 'Those',
          explanationAr: 'للجمع البعيد نستخدم Those are.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p4_u5_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Why are garbage collectors important in our society? "Garbage collectors are important because ______."',
          correctAnswer: 'they keep our city clean and healthy',
          explanationAr: 'أهمية عمال النظافة في الحفاظ على صحة وجمال المدينة.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 4 - UNIT 6: What Do You Do? (ماذا تعمل؟)
  // =========================================================================
  {
    unitId: 'p4_t1_c_u6',
    grade: 'primary_4',
    track: 'connect',
    term: 1,
    unitNumber: 6,
    unitTitleEn: "The Hundred Dresses",
    unitTitleAr: 'ماذا تعمل؟ والقطاعات الاقتصادية في مصر',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p4_u6_w1',
          word: 'Fisherman',
          phonetics: '/ˈfɪʃ.ə.mən/',
          arabicMeaning: 'صياد سمك',
          partOfSpeech: 'noun',
          exampleSentence: 'The fisherman catches fresh fish in the sea at dawn.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p4_u6_w2',
          word: 'Farmer',
          phonetics: '/ˈfɑː.mər/',
          arabicMeaning: 'مزارع / فلاح',
          partOfSpeech: 'noun',
          exampleSentence: 'The farmer grows delicious oranges and dates on his farm.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p4_u6_w3',
          word: 'Tour guide',
          phonetics: '/tʊər ɡaɪd/',
          arabicMeaning: 'مرشد سياحي',
          partOfSpeech: 'phrase',
          exampleSentence: 'The tour guide explains Egyptian history to visiting tourists.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p4_u6_w4',
          word: 'Geologist',
          phonetics: '/dʒiˈɒl.ə.dʒɪst/',
          arabicMeaning: 'عالم طبقات الأرض والجيولوجيا',
          partOfSpeech: 'noun',
          exampleSentence: 'The geologist studies underground rocks and minerals in Egypt.',
          visualCue: 'desert_safari'
        },
        {
          id: 'p4_u6_w5',
          word: 'Tourism industry',
          phonetics: '/ˈtʊə.rɪ.zəm ˈɪn.də.stri/',
          arabicMeaning: 'قطاع السياحة وصناعتها',
          partOfSpeech: 'phrase',
          exampleSentence: 'The tourism industry creates thousands of jobs for Egyptian youth.',
          visualCue: 'trophy_cup'
        }
      ],
      phonics: [
        {
          letterSound: 'Suffixes -ER, -OR, and -IST for Professions',
          sampleWords: ['Farmer (-er)', 'Collector (-or)', 'Geologist (-ist)', 'Scientist (-ist)'],
          rhymingPair: ['Teacher', 'Preacher']
        }
      ],
      conversationTerms: [
        { en: 'What do you do? — I am a farmer.', ar: 'ماذا تعمل؟ — أنا مزارع.' },
        { en: 'I catch fish and sell them in the market.', ar: 'أصطاد الأسماك وأبيعها في السوق.' },
        { en: 'Tourists visit Egypt to see the ancient pyramids.', ar: 'السياح يزورون مصر لمشاهدة الأهرامات القديمة.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Sequencing Adverbs (First, Next, Then, Finally) & Present Simple for Occupations",
          ruleExplanationAr: "لترتيب خطوات العمل: First (أولاً)، Next (بعد ذلك)، Then (ثم)، Finally (أخيراً). وأفعال المهن: A guide shows / A fisherman catches.",
          structureFormula: "First, ... -> Next, ... -> Then, ... -> Finally, ...",
          examples: [
            { en: "First, the farmer plants the seeds. Finally, he harvests crops.", ar: "أولاً يزرع الفلاح البذور. وأخيراً يحصد المحصول." },
            { en: "A guide works in the tourism industry.", ar: "يعمل المرشد في قطاع السياحة." }
          ],
          visualPatternBlocks: ["First...", "Next...", "Then...", "Finally..."]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['catches', 'fisherman', 'The', 'fish'],
          correctOrder: ['The', 'fisherman', 'catches', 'fish'],
          translationAr: 'الصياد يصطاد الأسماك'
        },
        {
          jumbledParts: ['crops', 'the', 'Finally,', 'farmer', 'harvests'],
          correctOrder: ['Finally,', 'the', 'farmer', 'harvests', 'crops'],
          translationAr: 'أخيراً يحصد الفلاح المحاصيل'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify the profession suffix (-er, -or, -ist):',
        prompt: 'Which suffix makes the job word in "geolog-______"?',
        targetResponses: ['ist', '-ist'],
        scaffoldingHints: ['Forms geologist']
      },
      {
        type: 'dictation',
        instruction: 'Complete the profession name:',
        prompt: 'A ______ (مرشد سياحي) helps tourists explore Luxor.',
        targetResponses: ['tour guide', 'guide'],
        scaffoldingHints: ['Word guide is spelled g-u-i-d-e']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p4_u6_l1_q1',
          type: 'mcq',
          questionPrompt: 'A person who studies rocks and minerals under the ground is a ______.',
          options: ['geologist', 'fisherman', 'farmer', 'cook'],
          correctAnswer: 'geologist',
          explanationAr: 'الجيولوجي (geologist) يدرس صخور الأرض ومعادنها.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p4_u6_l2_q1',
          type: 'matching',
          questionPrompt: 'In the sequencing of bread-making: "______ , the baker buys flour. Finally, he bakes the bread."',
          options: ['First', 'Last', 'Never', 'Yesterday'],
          correctAnswer: 'First',
          explanationAr: 'نبدأ تسلسل الخطوات بكلمة First (أولاً).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p4_u6_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [works - guide - in - A - tourism].',
          correctAnswer: 'A guide works in tourism',
          explanationAr: 'الترتيب الصحيح: A guide works in tourism.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p4_u6_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: Farmers in Egypt grow rice, wheat, and ______ trees.',
          options: ['orange', 'plastic', 'glass', 'iron'],
          correctAnswer: 'orange',
          explanationAr: 'يزرع الفلاحون أشجار البرتقال (orange trees).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p4_u6_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'What would you like to be in the future? "In the future, I want to be a ______ because ______."',
          correctAnswer: 'tour guide because I love Egyptian history',
          explanationAr: 'يكتب الطالب المهنة التي يطمح لها مستقبلاً مع السبب.',
          marks: 3
        }
      ]
    }
  }
];

export const primary4Curriculum: PrimaryLessonContent[] = primary3And4Curriculum.filter(u => u.grade === 'primary_4');
