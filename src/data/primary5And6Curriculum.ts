// =========================================================================
// EngliMensh.EG - Primary 5 & Primary 6 Complete Curriculum (Connect 5 & 6)
// Official Egyptian Ministry of Education (MOE) Specifications - Term 1
// System Architect: Mohammad El-Menshawy (محمد المنشاوي)
// Units: P5 (1 to 6) and P6 (1 to 6) - All with 3 Tabs & 5-Level Exam Suite
// =========================================================================

import type { PrimaryLessonContent } from './primaryStageData.ts';

export const primary5And6Curriculum: PrimaryLessonContent[] = [
  // =========================================================================
  // PRIMARY 5 - UNIT 1: We Plant Our Food (نحن نزرع طعامنا)
  // =========================================================================
  {
    unitId: 'p5_t1_c_u1',
    grade: 'primary_5',
    track: 'connect',
    term: 1,
    unitNumber: 1,
    unitTitleEn: "Food, Nature, and Culture",
    unitTitleAr: 'نحن نزرع طعامنا وسلسلة الغذاء',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p5_u1_w1',
          word: 'Chickpeas',
          phonetics: '/ˈtʃɪk.piːz/',
          arabicMeaning: 'حمص الشام (بقوليات غنية بالبروتين)',
          partOfSpeech: 'noun',
          exampleSentence: 'Chickpeas are an important ingredient in koshari and hummus.',
          visualCue: 'food_lunch'
        },
        {
          id: 'p5_u1_w2',
          word: 'Producer',
          phonetics: '/prəˈdʒuː.sər/',
          arabicMeaning: 'كائن منتج للغذاء (النباتات الخضراء)',
          partOfSpeech: 'noun',
          exampleSentence: 'Green plants are producers because they make food using sunlight.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p5_u1_w3',
          word: 'Consumer',
          phonetics: '/kənˈsjuː.mər/',
          arabicMeaning: 'كائن مستهلك (الحيوانات والطيور)',
          partOfSpeech: 'noun',
          exampleSentence: 'Primary consumers eat plants, while secondary consumers eat small animals.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p5_u1_w4',
          word: 'Ingredients',
          phonetics: '/ɪnˈɡriː.di.ənts/',
          arabicMeaning: 'مكونات ومقادير الوصفة',
          partOfSpeech: 'noun',
          exampleSentence: 'We mix all the fresh ingredients to make a delicious mango dessert.',
          visualCue: 'food_lunch'
        },
        {
          id: 'p5_u1_w5',
          word: 'Food chain',
          phonetics: '/fuːd tʃeɪn/',
          arabicMeaning: 'السلسلة الغذائية لانتقال الطاقة',
          partOfSpeech: 'phrase',
          exampleSentence: 'The food chain shows how energy flows from the sun to plants and animals.',
          visualCue: 'trophy_cup'
        }
      ],
      phonics: [
        {
          letterSound: 'Plural Noun Endings (/s/, /z/, /ɪz/)',
          sampleWords: ['Cakes (/s/)', 'Beans (/z/)', 'Oranges (/ɪz/)', 'Chickpeas (/z/)'],
          rhymingPair: ['Peas', 'Trees']
        }
      ],
      conversationTerms: [
        { en: 'Would you like some mango juice? — Yes, please.', ar: 'هل تود بعض عصير المانجو؟ — نعم، من فضلك.' },
        { en: 'Do you have any onions? — No, we don’t have any.', ar: 'هل لديك أي بصل؟ — لا، ليس لدينا أي بصل.' },
        { en: 'How about buying some fresh carrots?', ar: 'ما رأيك في شراء بعض الجزر الطازج؟' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Countable & Uncountable Nouns, Some & Any, Polite Offers (Would you like...?)",
          ruleExplanationAr: "الأسماء المعدودة لها مفرد وجمع (an apple / apples). غير المعدودة تعامل كمفرد (rice, water). نستخدم some في الإثبات والعرض والطلب المهذب: Would you like some tea? ونستخدم any في النفي والسؤال العادي: Do you have any milk? / I don't have any eggs.",
          structureFormula: "Affirmative/Offer: some + [Noun] | Negative/Question: any + [Noun]",
          examples: [
            { en: "There are some apples on the table.", ar: "يوجد بعض التفاح على الطاولة." },
            { en: "We don't have any sugar.", ar: "ليس لدينا أي سكر." }
          ],
          visualPatternBlocks: ["some (Affirmative & Polite Offers)", "any (Negative & Questions)"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['like', 'Would', 'some', 'you', 'tea?'],
          correctOrder: ['Would', 'you', 'like', 'some', 'tea?'],
          translationAr: 'هل تود بعض الشاي؟'
        },
        {
          jumbledParts: ['have', "don't", 'any', 'We', 'onions'],
          correctOrder: ['We', "don't", 'have', 'any', 'onions'],
          translationAr: 'ليس لدينا أي بصل'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the /ɪz/ ending in oranges and boxes:',
        prompt: 'Which plural noun ends with the /ɪz/ sound?',
        targetResponses: ['Oranges', 'Boxes', 'Sandwiches'],
        scaffoldingHints: ['Ends in -es with extra syllable']
      },
      {
        type: 'dictation',
        instruction: 'Fill in some or any:',
        prompt: 'Do you have ______ (أي) chickpeas left?',
        targetResponses: ['any'],
        scaffoldingHints: ['Used in ordinary questions']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p5_u1_l1_q1',
          type: 'mcq',
          questionPrompt: 'In a natural food chain, green plants that make their own food are called ______.',
          options: ['producers', 'consumers', 'cooks', 'mechanics'],
          correctAnswer: 'producers',
          explanationAr: 'النباتات الخضراء كائنات منتجة للغذاء (producers).',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p5_u1_l2_q1',
          type: 'matching',
          questionPrompt: 'Polite offer: "Would you like ______ fresh orange juice?"',
          options: ['some', 'any', 'an', 'many'],
          correctAnswer: 'some',
          explanationAr: 'في العرض والطلب المهذب نستخدم some.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p5_u1_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [have - We - any - don\'t - milk].',
          correctAnswer: "We don't have any milk",
          explanationAr: 'في الجملة المنفية نستخدم any: We don\'t have any milk.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p5_u1_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: Chickpeas and lentils belong to the ______ food group.',
          options: ['legumes', 'fruits', 'dairy', 'sweets'],
          correctAnswer: 'legumes',
          explanationAr: 'الحمص والعدس من فصيلة البقوليات (legumes).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p5_u1_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Explain the role of the sun in the food chain: "The sun provides energy for ______."',
          correctAnswer: 'plants to grow and make food',
          explanationAr: 'الشمس تمد النباتات بالطاقة اللازمة لعملية البناء الضوئي.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 5 - UNIT 2: I Want to Be Healthy (أريد أن أكون بصحة جيدة)
  // =========================================================================
  {
    unitId: 'p5_t1_c_u2',
    grade: 'primary_5',
    track: 'connect',
    term: 1,
    unitNumber: 2,
    unitTitleEn: "My Healthy Body",
    unitTitleAr: 'أريد أن أكون بصحة جيدة والرياضة والبيئة',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p5_u2_w1',
          word: 'Squash',
          phonetics: '/skwɒʃ/',
          arabicMeaning: 'رياضة الإسكواش (مصر بطلة العالم فيها)',
          partOfSpeech: 'noun',
          exampleSentence: 'Egyptian champions like Nour El Sherbini win global squash tournaments.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p5_u2_w2',
          word: 'Kung Fu',
          phonetics: '/ˌkʌŋ ˈfuː/',
          arabicMeaning: 'رياضة الكونغ فو القتالية',
          partOfSpeech: 'noun',
          exampleSentence: 'My brother practices Kung Fu moves to build physical agility.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p5_u2_w3',
          word: 'Goggles',
          phonetics: '/ˈɡɒɡ.əlz/',
          arabicMeaning: 'نظارة سباحة واقية للعين',
          partOfSpeech: 'noun',
          exampleSentence: 'Wear your swimming goggles to protect your eyes under water.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p5_u2_w4',
          word: 'Football pitch',
          phonetics: '/ˈfʊt.bɔːl pɪtʃ/',
          arabicMeaning: 'ملعب كرة القدم العشبي',
          partOfSpeech: 'phrase',
          exampleSentence: 'Players run on the green football pitch wearing boots.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p5_u2_w5',
          word: 'Tennis court',
          phonetics: '/ˈten.ɪs kɔːt/',
          arabicMeaning: 'ملعب التنس المخصص',
          partOfSpeech: 'phrase',
          exampleSentence: 'They hit the yellow ball across the net on the tennis court.',
          visualCue: 'trophy_cup'
        }
      ],
      phonics: [
        {
          letterSound: 'Diphthongs /aɪ/ (bike), /eɪ/ (play), /ɔɪ/ (boy)',
          sampleWords: ['Ride (/aɪ/)', 'Play (/eɪ/)', 'Boy (/ɔɪ/)', 'Point (/ɔɪ/)'],
          rhymingPair: ['Boy', 'Toy']
        }
      ],
      conversationTerms: [
        { en: 'What sport are you good at? — I am good at playing squash.', ar: 'ما الرياضة التي تجيدها؟ — أنا بارع في لعب الإسكواش.' },
        { en: 'I am bad at sailing, but I want to practice.', ar: 'أنا لست جيداً في الإبحار، ولكنني أريد التدرب.' },
        { en: 'What equipment do you need for swimming? — Goggles and a swimsuit.', ar: 'ما الأدوات التي تحتاجها للسباحة؟ — نظارة سباحة وزي سباحة.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Good at / Bad at / Great at + (Verb-ing / Noun)",
          ruleExplanationAr: "للتعبير عن المهارة والبراعة نستخدم: good at (جيد في) / great at (رائع في) / bad at (سيء في) متبوعة بالفعل مضافاً له ing أو اسم.",
          structureFormula: "Subject + am/is/are + [good at / bad at / great at] + [Verb-ing / Noun]",
          examples: [
            { en: "Hedayah Malak is great at doing taekwondo.", ar: "هداية ملاك بارعة في ممارسة التايكوندو." },
            { en: "I am good at swimming, but I am bad at tennis.", ar: "أنا جيد في السباحة ولكنني سيء في التنس." }
          ],
          visualPatternBlocks: ["am/is/are + good at + Verb-ing", "am/is/are + bad at + Verb-ing"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['at', 'is', 'She', 'good', 'playing', 'squash'],
          correctOrder: ['She', 'is', 'good', 'at', 'playing', 'squash'],
          translationAr: 'هي جيدة في لعب الإسكواش'
        },
        {
          jumbledParts: ['great', 'am', 'I', 'taekwondo', 'at', 'doing'],
          correctOrder: ['I', 'am', 'great', 'at', 'doing', 'taekwondo'],
          translationAr: 'أنا بارع في ممارسة التايكوندو'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the diphthong /ɔɪ/ in boy and point:',
        prompt: 'Which word contains the /ɔɪ/ sound?',
        targetResponses: ['Boy', 'Point', 'Coin', 'Toy'],
        scaffoldingHints: ['Sounds like oy']
      },
      {
        type: 'dictation',
        instruction: 'Complete with the correct verb form:',
        prompt: 'I am good at ______ (play) football.',
        targetResponses: ['playing'],
        scaffoldingHints: ['Add -ing after good at']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p5_u2_l1_q1',
          type: 'mcq',
          questionPrompt: 'When you go swimming in the pool, you wear special ______ over your eyes.',
          options: ['goggles', 'boots', 'gloves', 'hats'],
          correctAnswer: 'goggles',
          explanationAr: 'نرتدي نظارة السباحة (goggles) لحماية العين تحت الماء.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p5_u2_l2_q1',
          type: 'matching',
          questionPrompt: 'Grammar practice: "Ali is very good at ______ kung fu."',
          options: ['doing', 'do', 'does', 'did'],
          correctAnswer: 'doing',
          explanationAr: 'بعد good at يأتي الفعل مضافاً له ing: doing.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p5_u2_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [squash - playing - at - is - Nour - great].',
          correctAnswer: 'Nour is great at playing squash',
          explanationAr: 'الترتيب الصحيح: Nour is great at playing squash.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p5_u2_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: We play tennis on a tennis ______ and football on a pitch.',
          options: ['court', 'room', 'balcony', 'tent'],
          correctAnswer: 'court',
          explanationAr: 'ملعب التنس يسمى tennis court.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p5_u2_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe your favourite athletic role model: "Hedayah Malak is an inspiring Egyptian champion because ______."',
          correctAnswer: 'she won two Olympic medals for Egypt in taekwondo',
          explanationAr: 'هداية ملاك بطلة أولمبية مصرية فازت بميداليتين لمصر.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 5 - UNIT 3: How Do I Look? (كيف أبدو؟)
  // =========================================================================
  {
    unitId: 'p5_t1_c_u3',
    grade: 'primary_5',
    track: 'connect',
    term: 1,
    unitNumber: 3,
    unitTitleEn: "When Nature Changes",
    unitTitleAr: 'كيف أبدو؟ والملابس التقليدية وترتيب الصفات',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p5_u3_w1',
          word: 'Galabeya',
          phonetics: '/ˌɡæləˈbiːjə/',
          arabicMeaning: 'الجلباب المصري التقليدي المريح',
          partOfSpeech: 'noun',
          exampleSentence: 'The white cotton galabeya has long sleeves and hidden pockets.',
          visualCue: 'star_badge'
        },
        {
          id: 'p5_u3_w2',
          word: 'Linen',
          phonetics: '/ˈlɪn.ɪn/',
          arabicMeaning: 'قماش الكتان الطبيعي الخفيف',
          partOfSpeech: 'noun',
          exampleSentence: 'In hot summer, clothes made of natural linen keep you cool.',
          visualCue: 'star_badge'
        },
        {
          id: 'p5_u3_w3',
          word: 'Suitcase',
          phonetics: '/ˈsuːt.keɪs/',
          arabicMeaning: 'حقيبة سفر كبيرة',
          partOfSpeech: 'noun',
          exampleSentence: 'Pack your sunglasses and swimsuit inside the suitcase.',
          visualCue: 'school_bag'
        },
        {
          id: 'p5_u3_w4',
          word: 'Sneakers',
          phonetics: '/ˈsniː.kəz/',
          arabicMeaning: 'حذاء رياضي مريح',
          partOfSpeech: 'noun',
          exampleSentence: 'Wear comfortable sneakers when walking long distances.',
          visualCue: 'foot_steps'
        },
        {
          id: 'p5_u3_w5',
          word: 'Sombrero',
          phonetics: '/sɒmˈbreə.rəʊ/',
          arabicMeaning: 'قبعة مكسيكية تقليدية عريضة',
          partOfSpeech: 'noun',
          exampleSentence: 'The Mexican sombrero has a wide brim to protect from the blazing sun.',
          visualCue: 'star_badge'
        }
      ],
      phonics: [
        {
          letterSound: 'Word Stress in Compound Words',
          sampleWords: ['Sunglasses', 'Suitcase', 'Raincoat', 'Footprint'],
          rhymingPair: ['Case', 'Base']
        }
      ],
      conversationTerms: [
        { en: 'What are you packing in your suitcase? — My striped t-shirt and sunglasses.', ar: 'ماذا تحزم في حقيبتك؟ — قميصي المخطط ونظارتي الشمسية.' },
        { en: 'Galabeyas are made from fine Egyptian cotton.', ar: 'الجلاليب مصنوعة من القطن المصري الفاخر.' },
        { en: 'How do I look in this linen shirt?', ar: 'كيف أبدو في هذا القميص الكتاني؟' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Adjective Order (Opinion -> Size -> Age -> Shape -> Color -> Material) & Past Simple",
          ruleExplanationAr: "ترتيب الصفات قبل الاسم: (رأي -> حجم -> عمر -> لون -> مادة خام -> اسم). مثال: a lovely small new white cotton galabeya. والماضي البسيط للأفعال المنتظمة (+ed) والشاذة (packed, wore, bought).",
          structureFormula: "Opinion -> Size -> Age -> Color -> Material + Noun",
          examples: [
            { en: "She wore a lovely long blue cotton dress.", ar: "ارتدت فستاناً قطنياً أزرق طويلاً جميلاً." },
            { en: "I packed my green suitcase yesterday.", ar: "حزمت حقيبتي الخضراء أمس." }
          ],
          visualPatternBlocks: ["Size -> Color -> Material -> Noun", "Past Simple: Verb + ed / Irregular"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['cotton', 'wears', 'a', 'He', 'white', 'galabeya'],
          correctOrder: ['He', 'wears', 'a', 'white', 'cotton', 'galabeya'],
          translationAr: 'هو يرتدي جلباباً قطنياً أبيض'
        },
        {
          jumbledParts: ['packed', 'suitcase', 'my', 'I'],
          correctOrder: ['I', 'packed', 'my', 'suitcase'],
          translationAr: 'أنا حزمت حقيبتي'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Emphasize the primary stress on the first part of compound nouns:',
        prompt: 'Which part of "SUN-glasses" is stressed?',
        targetResponses: ['Sun', 'First part', 'SUN'],
        scaffoldingHints: ['Say SUN louder than glasses']
      },
      {
        type: 'dictation',
        instruction: 'Write the adjective order correctly:',
        prompt: 'A (cotton / white) shirt -> A ______ shirt.',
        targetResponses: ['white cotton'],
        scaffoldingHints: ['Color comes before material']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p5_u3_l1_q1',
          type: 'mcq',
          questionPrompt: 'A traditional long, loose white robe worn in Egypt is a ______.',
          options: ['galabeya', 'sweater', 'jacket', 'scarf'],
          correctAnswer: 'galabeya',
          explanationAr: 'الجلباب المصري التقليدي هو galabeya.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p5_u3_l2_q1',
          type: 'matching',
          questionPrompt: 'Adjective order: "She bought a lovely ______ dress."',
          options: ['blue cotton', 'cotton blue', 'cotton made', 'dress blue'],
          correctAnswer: 'blue cotton',
          explanationAr: 'اللون (blue) يأتي قبل المادة الخام (cotton).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p5_u3_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [suitcase - my - packed - I - yesterday].',
          correctAnswer: 'I packed my suitcase yesterday',
          explanationAr: 'الترتيب الصحيح في الماضي البسيط: I packed my suitcase yesterday.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p5_u3_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: Galabeyas have long sleeves so that people do not get ______.',
          options: ['sunburned', 'frozen', 'wet', 'hungry'],
          correctAnswer: 'sunburned',
          explanationAr: 'أكمام الجلباب الطويلة تحمي من حروق الشمس (sunburned).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p5_u3_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Explain why Egyptian cotton is world-famous: "Egyptian cotton is famous because ______."',
          correctAnswer: 'it is very soft, durable, and high quality',
          explanationAr: 'شهرة القطن المصري لجودته العالية ونعومته ومتانته.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 5 - UNIT 4: Visiting Elephantine Island (زيارة جزيرة إلفنتين)
  // =========================================================================
  {
    unitId: 'p5_t1_c_u4',
    grade: 'primary_5',
    track: 'connect',
    term: 1,
    unitNumber: 4,
    unitTitleEn: "My Community",
    unitTitleAr: 'زيارة جزيرة إلفنتين بأسوان والماضي المستمر',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p5_u4_w1',
          word: 'Elephantine Island',
          phonetics: '/ˌel.ɪ.fænˈtiːn ˈaɪ.lənd/',
          arabicMeaning: 'جزيرة إلفنتين التاريخية بأسوان',
          partOfSpeech: 'phrase',
          exampleSentence: 'Elephantine Island is full of ancient ruins and bright Nubian houses.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p5_u4_w2',
          word: 'Felucca',
          phonetics: '/fəˈlʊk.ə/',
          arabicMeaning: 'فلوكة (مركب شراعي مصري تقليدي)',
          partOfSpeech: 'noun',
          exampleSentence: 'We sailed peacefully on a white felucca down the River Nile at sunset.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p5_u4_w3',
          word: 'Nilometer',
          phonetics: '/naɪˈlɒm.ɪ.tər/',
          arabicMeaning: 'مقياس النيل الأثري لقياس منسوب المياه',
          partOfSpeech: 'noun',
          exampleSentence: 'Ancient Egyptians measured the flood water using the stone Nilometer.',
          visualCue: 'clock_alarm'
        },
        {
          id: 'p5_u4_w4',
          word: 'Nubian village',
          phonetics: '/ˈnjuː.bi.ən ˈvɪl.ɪdʒ/',
          arabicMeaning: 'قرية نوبية ملونة',
          partOfSpeech: 'phrase',
          exampleSentence: 'The Nubian village has vibrant painted walls and friendly residents.',
          visualCue: 'desert_safari'
        },
        {
          id: 'p5_u4_w5',
          word: 'Sunset',
          phonetics: '/ˈsʌn.set/',
          arabicMeaning: 'غروب الشمس الذهبي',
          partOfSpeech: 'noun',
          exampleSentence: 'The golden sunset over the Nile in Aswan is breathtaking.',
          visualCue: 'sun_rise'
        }
      ],
      phonics: [
        {
          letterSound: 'Linking Sounds and Connected Speech',
          sampleWords: ['Island in Aswan', 'Sail on a felucca', 'Look at it'],
          rhymingPair: ['Sail', 'Tail']
        }
      ],
      conversationTerms: [
        { en: 'Aswan is a calm and peaceful city.', ar: 'أسوان مدينة هادئة وجميلة.' },
        { en: 'We visited the botanical garden by boat.', ar: 'زرنا الحديقة النباتية بالقارب.' },
        { en: 'What were you doing at five o’clock yesterday? — I was sailing on a felucca.', ar: 'ماذا كنت تفعل في الخامسة أمس؟ — كنت أركب الفلوكة.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Past Continuous Tense (was/were + Verb-ing) & While / When Clauses",
          ruleExplanationAr: "الماضي المستمر يعبر عن حدث كان مستمراً في وقت محدد في الماضي: was/were + Verb-ing. نستخدم was مع (I, he, she, it) و were مع (we, you, they). وتستخدم While للحدث المستمر و When للحدث القاطع.",
          structureFormula: "Subject + was/were + [Verb-ing] | While + Past Continuous, Past Simple",
          examples: [
            { en: "At six o'clock yesterday, I was watching the sunset.", ar: "في السادسة أمس، كنت أشاهد الغروب." },
            { en: "While we were sailing, we saw Nubian houses.", ar: "بينما كنا نبحر، رأينا بيوتاً نوبية." }
          ],
          visualPatternBlocks: ["was/were + Verb-ing", "While + was/were + V-ing, Past Simple"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['sailing', 'felucca', 'were', 'We', 'on', 'a'],
          correctOrder: ['We', 'were', 'sailing', 'on', 'a', 'felucca'],
          translationAr: 'كنا نبحر في فلوكة'
        },
        {
          jumbledParts: ['was', 'sunset', 'He', 'watching', 'the'],
          correctOrder: ['He', 'was', 'watching', 'the', 'sunset'],
          translationAr: 'هو كان يشاهد غروب الشمس'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Practice smooth linking: "sail_on_a felucca":',
        prompt: 'How do you say "sail on" naturally?',
        targetResponses: ['sail-on', 'sail on smoothly'],
        scaffoldingHints: ['Connect the l to the on']
      },
      {
        type: 'dictation',
        instruction: 'Complete the past continuous sentence:',
        prompt: 'They ______ (sail) on the Nile all afternoon.',
        targetResponses: ['were sailing'],
        scaffoldingHints: ['They takes were + verb-ing']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p5_u4_l1_q1',
          type: 'mcq',
          questionPrompt: 'A traditional Egyptian wooden sailing boat used on the Nile is called a ______.',
          options: ['felucca', 'bus', 'train', 'rocket'],
          correctAnswer: 'felucca',
          explanationAr: 'المركب الشراعي التقليدي في النيل يسمى felucca.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p5_u4_l2_q1',
          type: 'matching',
          questionPrompt: 'At four o’clock yesterday afternoon, Amira ______ reading about Aswan.',
          options: ['was', 'were', 'is', 'are'],
          correctAnswer: 'was',
          explanationAr: 'مع الاسم المفرد Amira في الماضي المستمر نستخدم was: was reading.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p5_u4_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [were - on - sailing - Nile - the - We].',
          correctAnswer: 'We were sailing on the Nile',
          explanationAr: 'الترتيب الصحيح: We were sailing on the Nile.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p5_u4_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The Nilometer on Elephantine Island was used in ancient times to measure the Nile ______.',
          options: ['water level', 'fish speed', 'sunlight', 'wind'],
          correctAnswer: 'water level',
          explanationAr: 'استخدم مقياس النيل لقياس منسوب مياه الفيضان (water level).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p5_u4_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe Elephantine Island in two sentences: "Elephantine Island is a ______ place because ______."',
          correctAnswer: 'peaceful and historic place because it has ancient ruins and colourful Nubian villages',
          explanationAr: 'وصف جزيرة إلفنتين التاريخية وهدوئها وبيوتها الملونة.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 5 - UNIT 5: Jobs We Do (وظائف نقوم بها)
  // =========================================================================
  {
    unitId: 'p5_t1_c_u5',
    grade: 'primary_5',
    track: 'connect',
    term: 1,
    unitNumber: 5,
    unitTitleEn: "Our World, Our Resources",
    unitTitleAr: 'وظائف نقوم بها والحرفيون في مصر القديمة',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p5_u5_w1',
          word: 'Craftsmen',
          phonetics: '/ˈkrɑːfts.mən/',
          arabicMeaning: 'حرفيون مهرة وصناع',
          partOfSpeech: 'noun',
          exampleSentence: 'Ancient Egyptian craftsmen made exquisite gold jewellery and clay pots.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p5_u5_w2',
          word: 'Scribe',
          phonetics: '/skraɪb/',
          arabicMeaning: 'كاتب / ناسخ رسمي في مصر القديمة',
          partOfSpeech: 'noun',
          exampleSentence: 'Scribes recorded important grain records using hieroglyphic signs on papyrus.',
          visualCue: 'open_book'
        },
        {
          id: 'p5_u5_w3',
          word: 'Trader',
          phonetics: '/ˈtreɪ.dər/',
          arabicMeaning: 'تاجر يسافر لبيع وشراء البضائع',
          partOfSpeech: 'noun',
          exampleSentence: 'Traders sailed up and down the Nile to sell linen, gold, and timber.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p5_u5_w4',
          word: 'Papyrus',
          phonetics: '/pəˈpaɪ.rəs/',
          arabicMeaning: 'ورق البردي النباتي القديم',
          partOfSpeech: 'noun',
          exampleSentence: 'Papyrus grew along the banks of the Nile and was made into paper.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p5_u5_w5',
          word: 'Clay pots',
          phonetics: '/kleɪ pɒts/',
          arabicMeaning: 'أوانٍ فخارية مصنوعة من الطمي',
          partOfSpeech: 'phrase',
          exampleSentence: 'Potters shaped river clay pots on wheels and baked them in kilns.',
          visualCue: 'water_bottle'
        }
      ],
      phonics: [
        {
          letterSound: 'Prefix UN- (meaning not or opposite)',
          sampleWords: ['Unhappy', 'Unfair', 'Unwell', 'Unkind'],
          rhymingPair: ['Kind', 'Find']
        }
      ],
      conversationTerms: [
        { en: 'What did ancient Egyptian scribes do? — They recorded everything on papyrus.', ar: 'ماذا كان يفعل الكَتَبَة في مصر القديمة؟ — كانوا يسجلون كل شيء على البردي.' },
        { en: 'Craftsmen were very respected in society.', ar: 'كان الحرفيون يحظون باحترام كبير في المجتمع.' },
        { en: 'Could you write hieroglyphs? — No, it was very difficult.', ar: 'هل كنت تستطيع كتابة الهيروغليفية؟ — لا، كانت صعبة جداً.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Expressing Ability in Past & Present (Could / Couldn't / Was able to)",
          ruleExplanationAr: "للتعبير عن القدرة في الماضي نستخدم could + مصدر الفعل، ولعدم القدرة couldn't + مصدر الفعل. وفي المضارع نستخدم can/can't. والبادئة un- تعني نفي الصفة (unhappy = ليس سعيداً).",
          structureFormula: "Past Ability: Subject + could/couldn't + [Base Verb]",
          examples: [
            { en: "Ancient scribes could read and write hieroglyphs.", ar: "استطاع الكَتَبَة قراءة وكتابة الهيروغليفية." },
            { en: "He was unhappy because he lost his pen.", ar: "كان حزيناً لأنه فقد قلمه." }
          ],
          visualPatternBlocks: ["could + Verb (Past Ability)", "couldn't + Verb", "un- + Adjective"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['could', 'Scribes', 'write', 'hieroglyphs'],
          correctOrder: ['Scribes', 'could', 'write', 'hieroglyphs'],
          translationAr: 'استطاع الكَتَبَة كتابة الهيروغليفية'
        },
        {
          jumbledParts: ['clay', 'made', 'Craftsmen', 'pots'],
          correctOrder: ['Craftsmen', 'made', 'clay', 'pots'],
          translationAr: 'صنع الحرفيون أواني فخارية'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Understand the negative prefix un- in adjectives:',
        prompt: 'What does "unkind" mean?',
        targetResponses: ['Not kind', 'mean', 'not friendly'],
        scaffoldingHints: ['un- means not']
      },
      {
        type: 'dictation',
        instruction: 'Complete with past modal of ability:',
        prompt: 'Ancient Egyptians ______ (استطاعوا) build the magnificent pyramids.',
        targetResponses: ['could'],
        scaffoldingHints: ['Past of can: c-o-u-l-d']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p5_u5_l1_q1',
          type: 'mcq',
          questionPrompt: 'In ancient Egypt, people who could write on papyrus and keep records were called ______.',
          options: ['scribes', 'drivers', 'pilots', 'mechanics'],
          correctAnswer: 'scribes',
          explanationAr: 'الكَتَبَة (scribes) هم من كانوا يتقنون القراءة والكتابة والتوثيق.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p5_u5_l2_q1',
          type: 'matching',
          questionPrompt: 'Past ability: "When he was seven, he ______ swim across the river."',
          options: ['could', 'can', 'is', 'will'],
          correctAnswer: 'could',
          explanationAr: 'للتعبير عن القدرة في الماضي نستخدم could.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p5_u5_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [pots - made - beautiful - Craftsmen].',
          correctAnswer: 'Craftsmen made beautiful pots',
          explanationAr: 'الترتيب الصحيح: Craftsmen made beautiful pots.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p5_u5_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The opposite of "happy" using a prefix is ______.',
          options: ['unhappy', 'dishappy', 'imhappy', 'inshappy'],
          correctAnswer: 'unhappy',
          explanationAr: 'عكس كلمة happy بإضافة البادئة هو unhappy.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p5_u5_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Why were scribes essential in ancient Egyptian government? "Scribes were essential because ______."',
          correctAnswer: 'they recorded taxes, royal laws, and religious texts',
          explanationAr: 'أهمية الكَتَبَة في تسجيل الضرائب والقوانين والنصوص الدينية.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 5 - UNIT 6: What's the Weather Like? (كيف يبدو الطقس؟)
  // =========================================================================
  {
    unitId: 'p5_t1_c_u6',
    grade: 'primary_5',
    track: 'connect',
    term: 1,
    unitNumber: 6,
    unitTitleEn: "The Talking Earth",
    unitTitleAr: 'كيف يبدو الطقس؟ والظواهر المناخية والمستقبل',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p5_u6_w1',
          word: 'Tornado',
          phonetics: '/tɔːˈneɪ.dəʊ/',
          arabicMeaning: 'إعصار قمعي دوار شديد الرياح',
          partOfSpeech: 'noun',
          exampleSentence: 'A tornado is a violent rotating column of air touching the ground.',
          visualCue: 'clock_alarm'
        },
        {
          id: 'p5_u6_w2',
          word: 'Sandstorm',
          phonetics: '/ˈsænd.stɔːm/',
          arabicMeaning: 'عاصفة رملية في الصحراء',
          partOfSpeech: 'noun',
          exampleSentence: 'During a sandstorm, close the windows and stay indoors.',
          visualCue: 'desert_safari'
        },
        {
          id: 'p5_u6_w3',
          word: 'Heatwave',
          phonetics: '/ˈhiːt.weɪv/',
          arabicMeaning: 'موجة حر شديدة وطويلة',
          partOfSpeech: 'noun',
          exampleSentence: 'Drink plenty of water and stay in the shade during a summer heatwave.',
          visualCue: 'sun_rise'
        },
        {
          id: 'p5_u6_w4',
          word: 'Breeze',
          phonetics: '/briːz/',
          arabicMeaning: 'نسيم هواء عليل ولطيف',
          partOfSpeech: 'noun',
          exampleSentence: 'A cool evening breeze blows from the Mediterranean Sea in Alexandria.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p5_u6_w5',
          word: 'Thermometer',
          phonetics: '/θəˈmɒm.ɪ.tər/',
          arabicMeaning: 'مقياس درجة الحرارة (الترمومتر)',
          partOfSpeech: 'noun',
          exampleSentence: 'The thermometer reads 35 degrees Celsius today.',
          visualCue: 'clock_alarm'
        }
      ],
      phonics: [
        {
          letterSound: 'R-Controlled Vowels (/ɑː/ in car, /ɔː/ in storm, /ɜː/ in term)',
          sampleWords: ['Storm (/ɔː/)', 'Tornado (/ɔː/)', 'Thermometer (/ɜː/)', 'Part (/ɑː/)'],
          rhymingPair: ['Storm', 'Form']
        }
      ],
      conversationTerms: [
        { en: "What's the weather like today? — It is sunny and hot.", ar: "كيف يبدو الطقس اليوم؟ — مشمس وحار." },
        { en: 'Will it rain tomorrow? — No, it won’t.', ar: 'هل ستمطر غداً؟ — لا، لن تمطر.' },
        { en: 'Stay safe during extreme weather events.', ar: 'حافظ على سلامتك أثناء الظواهر الجوية القاسية.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Future Predictions with (will / won't) & Question Tags",
          ruleExplanationAr: "للتنبؤ بالمستقبل أو التعبير عن توقعات الطقس: will + مصدر الفعل (إثبات) و won't + مصدر الفعل (نفي).",
          structureFormula: "Subject + will / won't + [Infinitive Verb]",
          examples: [
            { en: "It will be sunny and warm in Cairo tomorrow.", ar: "سيكون الطقس مشمساً ودافئاً في القاهرة غداً." },
            { en: "It won't rain in the desert.", ar: "لن تمطر في الصحراء." }
          ],
          visualPatternBlocks: ["will + Verb (Future Prediction)", "won't + Verb (Negative Prediction)"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['tomorrow', 'will', 'It', 'sunny', 'be'],
          correctOrder: ['It', 'will', 'be', 'sunny', 'tomorrow'],
          translationAr: 'سيكون الطقس مشمساً غداً'
        },
        {
          jumbledParts: ['rain', "won't", 'It', 'today'],
          correctOrder: ['It', "won't", 'rain', 'today'],
          translationAr: 'لن تمطر اليوم'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify the /ɔː/ vowel sound in storm and tornado:',
        prompt: 'Which weather word has the /ɔː/ sound?',
        targetResponses: ['Storm', 'Tornado', 'Warm'],
        scaffoldingHints: ['Spelled with o-r']
      },
      {
        type: 'dictation',
        instruction: 'Complete with future modal:',
        prompt: 'Tomorrow it ______ (سوف) be hot, so wear light clothes.',
        targetResponses: ['will'],
        scaffoldingHints: ['Spelled w-i-l-l']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p5_u6_l1_q1',
          type: 'mcq',
          questionPrompt: 'We measure the temperature of the air using an instrument called a ______.',
          options: ['thermometer', 'ruler', 'pencil', 'book'],
          correctAnswer: 'thermometer',
          explanationAr: 'نقيس درجة الحرارة باستخدام الترمومتر (thermometer).',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p5_u6_l2_q1',
          type: 'matching',
          questionPrompt: 'During a violent desert sandstorm, you should stay ______ your home.',
          options: ['inside', 'outside', 'on the roof', 'in the street'],
          correctAnswer: 'inside',
          explanationAr: 'أثناء العاصفة الرملية يجب البقاء داخل المنزل (inside).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p5_u6_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [be - It - will - hot - tomorrow].',
          correctAnswer: 'It will be hot tomorrow',
          explanationAr: 'التنبؤ المستقبلي: It will be hot tomorrow.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p5_u6_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: A gentle, pleasant cool wind is called a ______.',
          options: ['breeze', 'tornado', 'heatwave', 'flood'],
          correctAnswer: 'breeze',
          explanationAr: 'النسيم العليل الخفيف يسمى breeze.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p5_u6_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Give one piece of safety advice during a summer heatwave: "During a heatwave, you should ______."',
          correctAnswer: 'drink lots of water and stay in the shade',
          explanationAr: 'نصيحة أثناء موجة الحر بشرب الماء والجلوس في الظل.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 6 - UNIT 1: Green Cities (مدن خضراء)
  // =========================================================================
  {
    unitId: 'p6_t1_c_u1',
    grade: 'primary_6',
    track: 'connect',
    term: 1,
    unitNumber: 1,
    unitTitleEn: 'Green Cities',
    unitTitleAr: 'مدن خضراء والحدائق المجتمعية على الأسطح',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p6_u1_w1',
          word: 'Community garden',
          phonetics: '/kəˈmjuː.nə.ti ˈɡɑː.dən/',
          arabicMeaning: 'حديقة مجتمعية يشارك فيها الجيران',
          partOfSpeech: 'phrase',
          exampleSentence: 'Our community garden on the apartment roof produces fresh vegetables for everyone.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p6_u1_w2',
          word: 'Roof garden',
          phonetics: '/ruːf ˈɡɑː.dən/',
          arabicMeaning: 'حديقة فوق سطح المبنى لتنقية الهواء',
          partOfSpeech: 'phrase',
          exampleSentence: 'Roof gardens clean the urban air and create a peaceful green space.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p6_u1_w3',
          word: 'Organic fertilizer',
          phonetics: '/ɔːˈɡæn.ɪk ˈfɜː.tɪ.laɪ.zər/',
          arabicMeaning: 'سماد عضوي طبيعي لتغذية التربة',
          partOfSpeech: 'phrase',
          exampleSentence: 'We use natural organic fertilizer instead of dangerous chemical pesticides.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p6_u1_w4',
          word: 'Harvest',
          phonetics: '/ˈhɑː.vɪst/',
          arabicMeaning: 'يحصد المحصول الزراعي الناضج',
          partOfSpeech: 'verb',
          exampleSentence: 'In autumn, volunteers harvest twenty kilos of sweet red tomatoes.',
          visualCue: 'food_lunch'
        },
        {
          id: 'p6_u1_w5',
          word: 'Volunteer',
          phonetics: '/ˌvɒl.ənˈtɪər/',
          arabicMeaning: 'متطوع يعمل لخدمة المجتمع دون مقابل',
          partOfSpeech: 'noun',
          exampleSentence: 'Friendly volunteers water the rooftop plants every Friday afternoon.',
          visualCue: 'friends_group'
        }
      ],
      phonics: [
        {
          letterSound: 'Word Stress in Multi-Syllable Words (Nouns vs. Verbs)',
          sampleWords: ['PRO-duce (n.)', 'pro-DUCE (v.)', 'VOL-un-teer', 'OR-gan-ic'],
          rhymingPair: ['Clean', 'Green']
        }
      ],
      conversationTerms: [
        { en: 'Do you want to come to our roof garden? — Yes, that sounds wonderful!', ar: 'هل تود المجئ إلى حديقتنا فوق السطح؟ — نعم، هذا يبدو رائعاً!' },
        { en: 'We never use artificial chemicals on our food.', ar: 'نحن لا نستخدم مواد كيميائية صناعية على طعامنا أبداً.' },
        { en: 'Plants help clean the polluted air in our city.', ar: 'النباتات تساعد في تنقية الهواء الملوث بمدينتنا.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Present Simple with Adverbs of Frequency (always, usually, often, sometimes, rarely, never)",
          ruleExplanationAr: "ظروف التكرار توضع قبل الفعل الأساسي (always 100% -> usually 80% -> often 70% -> sometimes 50% -> never 0%)، وتوضع بعد فعل to be (am/is/are).",
          structureFormula: "Subject + [Adverb of Frequency] + [Main Verb] | Subject + am/is/are + [Adverb]",
          examples: [
            { en: "We always use natural fertilizer on our plants.", ar: "نحن دائماً نستخدم سماداً طبيعياً لنباتاتنا." },
            { en: "He is never late for our voluntary community work.", ar: "هو لا يتأخر أبداً عن عملنا التطوعي المجتمعي." }
          ],
          visualPatternBlocks: ["always (100%)", "usually (80%)", "sometimes (50%)", "never (0%)"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['plants', 'always', 'water', 'We', 'the'],
          correctOrder: ['We', 'always', 'water', 'the', 'plants'],
          translationAr: 'نحن دائماً نسقي النباتات'
        },
        {
          jumbledParts: ['never', 'chemicals', 'They', 'use'],
          correctOrder: ['They', 'never', 'use', 'chemicals'],
          translationAr: 'هم لا يستخدمون الكيماويات أبداً'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Notice stress on the first syllable of the noun PRO-duce:',
        prompt: 'Where is the stress in the noun "PRO-duce"?',
        targetResponses: ['First syllable', 'PRO', 'first'],
        scaffoldingHints: ['Nouns have stress on the first syllable']
      },
      {
        type: 'dictation',
        instruction: 'Fill in the adverb of frequency for 100% routine:',
        prompt: 'We ______ (دائماً) harvest fresh lemons in winter.',
        targetResponses: ['always'],
        scaffoldingHints: ['100% frequency: a-l-w-a-y-s']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p6_u1_l1_q1',
          type: 'mcq',
          questionPrompt: 'A shared rooftop garden cared for by neighbors is called a ______.',
          options: ['community garden', 'car garage', 'swimming pool', 'airport'],
          correctAnswer: 'community garden',
          explanationAr: 'الحديقة المجتمعية فوق الأسطح تسمى community garden.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p6_u1_l2_q1',
          type: 'matching',
          questionPrompt: 'Adverbs of frequency position: "Mariam ______ helps her aunt on Fridays."',
          options: ['always', 'is always', 'always is', 'always are'],
          correctAnswer: 'always',
          explanationAr: 'يأتي ظرف التكرار قبل الفعل الأساسي (helps): always helps.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p6_u1_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [plants - clean - air - The - help - city].',
          correctAnswer: 'Plants help clean city air',
          explanationAr: 'الترتيب الصحيح: Plants help clean city air.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p6_u1_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: Organic food is grown without any toxic chemical ______.',
          options: ['pesticides', 'water', 'sunlight', 'air'],
          correctAnswer: 'pesticides',
          explanationAr: 'الطعام العضوي يزرع دون مبيدات كيميائية (pesticides).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p6_u1_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Explain how rooftop gardens benefit residents in crowded cities: "Rooftop gardens benefit cities by ______."',
          correctAnswer: 'reducing heat, producing fresh organic food, and cleaning the air',
          explanationAr: 'فوائد حدائق الأسطح في تقليل الحرارة وتوفير الغذاء وتنقية الهواء.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 6 - UNIT 2: We Are All Different (كلنا مختلفون)
  // =========================================================================
  {
    unitId: 'p6_t1_c_u2',
    grade: 'primary_6',
    track: 'connect',
    term: 1,
    unitNumber: 2,
    unitTitleEn: 'We Are All Different',
    unitTitleAr: 'كلنا مختلفون والصفات الشخصية وضمائر الوصل',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p6_u2_w1',
          word: 'Shy',
          phonetics: '/ʃaɪ/',
          arabicMeaning: 'خجول وهادئ مع الغرباء',
          partOfSpeech: 'adjective',
          exampleSentence: 'Hazem was shy on his first day at school, but now he has many friends.',
          visualCue: 'happy_face'
        },
        {
          id: 'p6_u2_w2',
          word: 'Polite',
          phonetics: '/pəˈlaɪt/',
          arabicMeaning: 'مؤدب ومهذب مع الآخرين',
          partOfSpeech: 'adjective',
          exampleSentence: 'A polite student always says "please" and "thank you".',
          visualCue: 'star_badge'
        },
        {
          id: 'p6_u2_w3',
          word: 'Clever',
          phonetics: '/ˈklev.ər/',
          arabicMeaning: 'ذكي وماهر وسريع البديهة',
          partOfSpeech: 'adjective',
          exampleSentence: 'She is very clever at solving complex math puzzles.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p6_u2_w4',
          word: 'Organised',
          phonetics: '/ˈɔː.ɡən.aɪzd/',
          arabicMeaning: 'منظم ومرتب لأغراضه ووقته',
          partOfSpeech: 'adjective',
          exampleSentence: 'An organised pupil keeps their books and desk neat and tidy.',
          visualCue: 'open_book'
        },
        {
          id: 'p6_u2_w5',
          word: 'Nervous',
          phonetics: '/ˈnɜː.vəs/',
          arabicMeaning: 'قلق أو متوتر قبل الامتحان',
          partOfSpeech: 'adjective',
          exampleSentence: 'Take a deep breath if you feel nervous before a big speech.',
          visualCue: 'happy_face'
        }
      ],
      phonics: [
        {
          letterSound: 'Sounds of SH /ʃ/ and ZH /ʒ/',
          sampleWords: ['Revision (/ʒ/)', 'Measure (/ʒ/)', 'Decision (/ʒ/)', 'Ship (/ʃ/)', 'Shop (/ʃ/)'],
          rhymingPair: ['Pleasure', 'Measure']
        }
      ],
      conversationTerms: [
        { en: 'This is Asser; he is the boy who helped me carry my books.', ar: 'هذا آسر؛ هو الولد الذي ساعدني في حمل كتبي.' },
        { en: 'We all have different strengths and talents.', ar: 'كل منا يمتلك نقاط قوة ومواهب مختلفة.' },
        { en: 'Be welcoming and kind to new classmates.', ar: 'كن ودوداً ولطيفاً مع زملائك الجدد.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Relative Pronouns (who for people, which/that for things, where for places)",
          ruleExplanationAr: "ضمائر الوصل: who للإشارة إلى العاقل (The boy who helped me). و which أو that لغير العاقل (The book which I read). و where للمكان (The school where I learn).",
          structureFormula: "Person + who + clause | Thing + which/that + clause | Place + where + clause",
          examples: [
            { en: "Mr. Mohammad is the teacher who explains English so well.", ar: "مستر محمد هو المعلم الذي يشرح الإنجليزية بإتقان." },
            { en: "This is the library where I read quiet stories.", ar: "هذه هي المكتبة حيث أقرأ القصص الهادئة." }
          ],
          visualPatternBlocks: ["Person + who...", "Thing + which/that...", "Place + where..."]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['who', 'is', 'He', 'the', 'boy', 'helped', 'me'],
          correctOrder: ['He', 'is', 'the', 'boy', 'who', 'helped', 'me'],
          translationAr: 'هو الولد الذي ساعدني'
        },
        {
          jumbledParts: ['where', 'is', 'This', 'the', 'school', 'we', 'learn'],
          correctOrder: ['This', 'is', 'the', 'school', 'where', 'we', 'learn'],
          translationAr: 'هذه هي المدرسة حيث نتعلم'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Differentiate between /ʃ/ in shop and /ʒ/ in measure:',
        prompt: 'Which word contains the /ʒ/ sound?',
        targetResponses: ['Measure', 'Revision', 'Decision'],
        scaffoldingHints: ['Pronounced with a voiced zh sound']
      },
      {
        type: 'dictation',
        instruction: 'Fill in the correct relative pronoun:',
        prompt: 'That is the friendly girl ______ (التي) shared her pencils with me.',
        targetResponses: ['who', 'that'],
        scaffoldingHints: ['Used for a person']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p6_u2_l1_q1',
          type: 'mcq',
          questionPrompt: 'A student who is polite and respectful to others is very ______.',
          options: ['polite', 'messy', 'greedy', 'careless'],
          correctAnswer: 'polite',
          explanationAr: 'الطالب المهذب يوصف بأنه polite.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p6_u2_l2_q1',
          type: 'matching',
          questionPrompt: 'Relative clause: "This is the hospital ______ doctors help sick children."',
          options: ['where', 'who', 'which', 'when'],
          correctAnswer: 'where',
          explanationAr: 'للمكان (the hospital) نستخدم ضمير الوصل where.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p6_u2_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [teacher - the - who - is - She - us - teaches].',
          correctAnswer: 'She is the teacher who teaches us',
          explanationAr: 'صياغة ضمير الوصل للعاقل: She is the teacher who teaches us.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p6_u2_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: The book ______ I borrowed from the library is very interesting.',
          options: ['which', 'who', 'where', 'whose'],
          correctAnswer: 'which',
          explanationAr: 'لغير العاقل (The book) نستخدم which.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p6_u2_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Describe a good friend: "A good friend is someone who ______."',
          correctAnswer: 'listens kindly and helps you when you need support',
          explanationAr: 'وصف الصديق الحقيقي وأهمية المساندة بين الزملاء.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 6 - UNIT 3: Vacation Plans (خطط العطلة)
  // =========================================================================
  {
    unitId: 'p6_t1_c_u3',
    grade: 'primary_6',
    track: 'connect',
    term: 1,
    unitNumber: 3,
    unitTitleEn: 'Vacation Plans',
    unitTitleAr: 'خطط العطلة والأنشطة السياحية والمستقبل',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p6_u3_w1',
          word: 'Quad biking',
          phonetics: '/kwɒd ˈbaɪ.kɪŋ/',
          arabicMeaning: 'ركوب دراجات الدفع الرباعي في الصحراء',
          partOfSpeech: 'phrase',
          exampleSentence: 'We are going quad biking in the Giza desert dunes at sunset.',
          visualCue: 'desert_safari'
        },
        {
          id: 'p6_u3_w2',
          word: 'Minaret',
          phonetics: '/ˌmɪn.əˈret/',
          arabicMeaning: 'مئذنة المسجد التاريخي العالية',
          partOfSpeech: 'noun',
          exampleSentence: 'Climb the Bab Zuweila minaret to enjoy a panoramic view of Islamic Cairo.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p6_u3_w3',
          word: 'Souks',
          phonetics: '/suːks/',
          arabicMeaning: 'الأسواق الشعبية والتراثية مثل خان الخليلي',
          partOfSpeech: 'noun',
          exampleSentence: 'Tourists buy silver jewellery and fragrant spices in Khan el-Khalili souks.',
          visualCue: 'star_badge'
        },
        {
          id: 'p6_u3_w4',
          word: 'Snorkelling',
          phonetics: '/ˈsnɔː.kəl.ɪŋ/',
          arabicMeaning: 'الغطس بأنبوب التنفس لمشاهدة الشعاب المرجانية',
          partOfSpeech: 'noun',
          exampleSentence: 'The Red Sea in Dahab is famous for snorkelling among colourful coral reefs.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p6_u3_w5',
          word: 'Citadel',
          phonetics: '/ˈsɪt.ə.del/',
          arabicMeaning: 'القلعة الحصينة (قلعة صلاح الدين الأيوبي)',
          partOfSpeech: 'noun',
          exampleSentence: 'Salah El-Din Citadel overlooks Cairo and contains grand historical mosques.',
          visualCue: 'trophy_cup'
        }
      ],
      phonics: [
        {
          letterSound: 'Silent Letters in English (s in island, t in castle/listen)',
          sampleWords: ['Island', 'Castle', 'Listen', 'Whistle'],
          rhymingPair: ['Sand', 'Land']
        }
      ],
      conversationTerms: [
        { en: 'What are you going to do this vacation? — I am going to visit Alexandria.', ar: 'ماذا ستفعل في هذه العطلة؟ — سأزور الإسكندرية.' },
        { en: 'Are you going to try quad biking? — Yes, definitely!', ar: 'هل ستجرب ركوب بياتش باجي الصحراء؟ — نعم، بالتأكيد!' },
        { en: 'Let’s explore the historic souks together.', ar: 'هيا نستكشف الأسواق التاريخية معاً.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Future Plans (be going to + infinitive) & Present Continuous for Fixed Arrangements",
          ruleExplanationAr: "للتعبير عن النوايا والخطط المستقبلية: am/is/are + going to + مصدر الفعل. وللترتيبات المؤكدة مسبقاً (تم حجز التذاكر): المضارع المستمر am/is/are + Verb-ing.",
          structureFormula: "Subject + am/is/are + going to + [Infinitive] | S + am/is/are + [Verb-ing]",
          examples: [
            { en: "We are going to visit the Citadel on Monday.", ar: "نحن نخطط لزيارة القلعة يوم الاثنين." },
            { en: "I am travelling to Hurghada tomorrow morning.", ar: "أنا مسافر إلى الغردقة صباح الغد (ترتيب مؤكد)." }
          ],
          visualPatternBlocks: ["am/is/are + going to + Verb (Plan)", "am/is/are + Verb-ing (Arrangement)"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['visit', 'am', 'I', 'to', 'going', 'Cairo'],
          correctOrder: ['I', 'am', 'going', 'to', 'visit', 'Cairo'],
          translationAr: 'أنا سأزور القاهرة'
        },
        {
          jumbledParts: ['are', 'They', 'tomorrow', 'travelling'],
          correctOrder: ['They', 'are', 'travelling', 'tomorrow'],
          translationAr: 'هم سيسافرون غداً'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify silent letters in castle and island:',
        prompt: 'Which letter is silent in the word "island"?',
        targetResponses: ['s', 'letter s'],
        scaffoldingHints: ['Pronounced /ˈaɪ.lənd/']
      },
      {
        type: 'dictation',
        instruction: 'Complete with future plan structure:',
        prompt: 'We are ______ (going to) try snorkelling in the Red Sea.',
        targetResponses: ['going to'],
        scaffoldingHints: ['be + going to + verb']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p6_u3_l1_q1',
          type: 'mcq',
          questionPrompt: 'A tall slender tower of a mosque where the call to prayer is announced is a ______.',
          options: ['minaret', 'sofa', 'tent', 'car'],
          correctAnswer: 'minaret',
          explanationAr: 'المئذنة الشاهقة في المسجد تسمى minaret.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p6_u3_l2_q1',
          type: 'matching',
          questionPrompt: 'Future intention: "Next holiday, my family ______ going to travel to Aswan."',
          options: ['is', 'are', 'am', 'be'],
          correctAnswer: 'is',
          explanationAr: 'مع my family (مفرد) نستخدم is going to.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p6_u3_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [going - are - We - to - explore - souks - the].',
          correctAnswer: 'We are going to explore the souks',
          explanationAr: 'الترتيب الصحيح: We are going to explore the souks.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p6_u3_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: In the Red Sea, tourists love ______ to view colourful fish and corals.',
          options: ['snorkelling', 'skiing', 'skating', 'running'],
          correctAnswer: 'snorkelling',
          explanationAr: 'رياضة الغطس السطحي لمشاهدة الشعاب المرجانية هي snorkelling.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p6_u3_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Write about your upcoming holiday plans: "During the mid-year vacation, I am going to ______."',
          correctAnswer: 'visit Luxor with my family and explore the temples',
          explanationAr: 'يكتب الطالب خطته لعطلة نصف العام.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 6 - UNIT 4: Celebrate Good Times! (احتفل بالأوقات السعيدة!)
  // =========================================================================
  {
    unitId: 'p6_t1_c_u4',
    grade: 'primary_6',
    track: 'connect',
    term: 1,
    unitNumber: 4,
    unitTitleEn: 'Celebrate Good Times!',
    unitTitleAr: 'احتفل بالأوقات السعيدة وحفلات أعياد الميلاد والاستنتاج',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p6_u4_w1',
          word: 'Streamers',
          phonetics: '/ˈstriː.məz/',
          arabicMeaning: 'شرائط الزينة الورقية الملونة',
          partOfSpeech: 'noun',
          exampleSentence: 'We hung bright streamers across the ceiling for the surprise party.',
          visualCue: 'star_badge'
        },
        {
          id: 'p6_u4_w2',
          word: 'Balloons',
          phonetics: '/bəˈluːnz/',
          arabicMeaning: 'بالونات ملونة للحفل',
          partOfSpeech: 'noun',
          exampleSentence: 'Blow up twenty red and yellow balloons for the celebration.',
          visualCue: 'star_badge'
        },
        {
          id: 'p6_u4_w3',
          word: 'Fireworks',
          phonetics: '/ˈfaɪə.wɜːks/',
          arabicMeaning: 'ألعاب نارية مضيئة في السماء',
          partOfSpeech: 'noun',
          exampleSentence: 'Spectacular fireworks lit up the night sky at the carnival.',
          visualCue: 'star_badge'
        },
        {
          id: 'p6_u4_w4',
          word: 'Invitations',
          phonetics: '/ˌɪn.vɪˈteɪ.ʃənz/',
          arabicMeaning: 'بطاقات دعوة رسمية للحفل',
          partOfSpeech: 'noun',
          exampleSentence: 'Sarah sent creative invitations to all her classmates.',
          visualCue: 'open_book'
        },
        {
          id: 'p6_u4_w5',
          word: 'Playlist',
          phonetics: '/ˈpleɪ.lɪst/',
          arabicMeaning: 'قائمة الأغاني والموسيقى المختارة',
          partOfSpeech: 'noun',
          exampleSentence: 'Omar chose a cheerful music playlist on his phone for dancing.',
          visualCue: 'music_singing'
        }
      ],
      phonics: [
        {
          letterSound: 'Sentence Intonation (Rising in Yes/No vs Falling in Wh- questions)',
          sampleWords: ['Are you coming? (↗)', 'What time is the party? (↘)'],
          rhymingPair: ['Light', 'Bright']
        }
      ],
      conversationTerms: [
        { en: 'Can you help me blow up the balloons? — Sure, with pleasure!', ar: 'هل يمكنك مساعدتي في نفخ البالونات؟ — بالتأكيد، بكل سرور!' },
        { en: 'Who is sending the invitations? — Youssef is writing them now.', ar: 'من سيرسل بطاقات الدعوة؟ — يوسف يكتبها الآن.' },
        { en: 'Let’s bake a delicious vanilla cake.', ar: 'هيا نخبز كعكة فانيليا لذيذة.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Modals of Deduction (must be, might be, can't be) & Imperatives",
          ruleExplanationAr: "للاستنتاج والتأكيد: must be (أكيد / لا بد أنه كذا بنسبة 100%). وللاحتمال: might be (ربما بنسبة 50%). وللاستحالة: can't be (مستحيل أن يكون كذا). وصيغة الأمر لإعطاء توجيهات الحفل: Blow up the balloons / Hang the streamers.",
          structureFormula: "Deduction: Subject + must / might / can't + be + [Adjective/Noun]",
          examples: [
            { en: "He has a big cake and candles; it must be his birthday.", ar: "لديه كعكة كبيرة وشموع؛ لا بد أنه عيد ميلاده بالتأكيد." },
            { en: "She might be at home, but I am not certain.", ar: "ربما تكون بالمنزل ولكنني لست متأكداً." }
          ],
          visualPatternBlocks: ["must be (Certain 100%)", "might be (Possibility 50%)", "can't be (Impossible 0%)"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['must', 'He', 'happy', 'be'],
          correctOrder: ['He', 'must', 'be', 'happy'],
          translationAr: 'لا بد أنه سعيد بالتأكيد'
        },
        {
          jumbledParts: ['balloons', 'the', 'up', 'Blow'],
          correctOrder: ['Blow', 'up', 'the', 'balloons'],
          translationAr: 'انفخ البالونات'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Practice rising intonation at the end of Yes/No questions:',
        prompt: 'Does your voice go up or down at the end of "Are you ready?":',
        targetResponses: ['Up', 'Rising', 'goes up'],
        scaffoldingHints: ['Yes/No questions rise in pitch']
      },
      {
        type: 'dictation',
        instruction: 'Fill in the deduction modal for certainty:',
        prompt: 'Look at all those presents; he ______ (لا بد) be very excited.',
        targetResponses: ['must'],
        scaffoldingHints: ['Must shows certainty']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p6_u4_l1_q1',
          type: 'mcq',
          questionPrompt: 'Colorful paper ribbons hung on walls for party decoration are called ______.',
          options: ['streamers', 'desks', 'books', 'coats'],
          correctAnswer: 'streamers',
          explanationAr: 'شرائط الزينة الورقية الملونة تسمى streamers.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p6_u4_l2_q1',
          type: 'matching',
          questionPrompt: 'Deduction: "The lights are off and no one answers the door. They ______ be out."',
          options: ['must', 'can', 'should', 'would'],
          correctAnswer: 'must',
          explanationAr: 'الأدلة تشير للتأكيد بأنهم بالخارج (must be out).',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p6_u4_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [be - It - can\'t - true].',
          correctAnswer: "It can't be true",
          explanationAr: 'صيغة الاستحالة: It can\'t be true.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p6_u4_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: In a birthday party, everyone sings before blowing out the ______ on the cake.',
          options: ['candles', 'plates', 'spoons', 'chairs'],
          correctAnswer: 'candles',
          explanationAr: 'نطفئ الشموع (candles) على الكعكة.',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p6_u4_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'How do you organize a successful surprise party? "To organize a surprise party, we should ______."',
          correctAnswer: 'send secret invitations and decorate the room before the guest arrives',
          explanationAr: 'خطوات تنظيم حفلة مفاجئة ناجحة وإعداد الزينة والبطاقات.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 6 - UNIT 5: Amazing Journeys (رحلات مذهلة)
  // =========================================================================
  {
    unitId: 'p6_t1_c_u5',
    grade: 'primary_6',
    track: 'connect',
    term: 1,
    unitNumber: 5,
    unitTitleEn: 'Amazing Journeys',
    unitTitleAr: 'رحلات مذهلة وابن بطوطة وماركو بولو والماضي المستمر',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p6_u5_w1',
          word: 'Marco Polo',
          phonetics: '/ˌmɑː.kəʊ ˈpəʊ.ləʊ/',
          arabicMeaning: 'الرحالة الإيطالي الشهير ماركو بولو',
          partOfSpeech: 'noun',
          exampleSentence: 'Marco Polo traveled across the Silk Road to China in the thirteenth century.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p6_u5_w2',
          word: 'Ibn Battuta',
          phonetics: '/ˌɪb.ən bætˈtuː.tə/',
          arabicMeaning: 'ابن بطوطة (أمير الرحالة المسلمين والعرب)',
          partOfSpeech: 'noun',
          exampleSentence: 'Ibn Battuta journeyed for almost thirty years across Africa, the Middle East, and Asia.',
          visualCue: 'trophy_cup'
        },
        {
          id: 'p6_u5_w3',
          word: 'Caravan',
          phonetics: '/ˈkær.ə.væn/',
          arabicMeaning: 'قافلة تجارية من الجمال والمسافرين',
          partOfSpeech: 'noun',
          exampleSentence: 'The camel caravan crossed the vast Sahara Desert carrying spices and silk.',
          visualCue: 'desert_safari'
        },
        {
          id: 'p6_u5_w4',
          word: 'Diary',
          phonetics: '/ˈdaɪə.ri/',
          arabicMeaning: 'مذكرات ويوميات شخصية موثقة',
          partOfSpeech: 'noun',
          exampleSentence: 'The traveler recorded daily events and observations in his travel diary.',
          visualCue: 'open_book'
        },
        {
          id: 'p6_u5_w5',
          word: 'Palace',
          phonetics: '/ˈpæl.ɪs/',
          arabicMeaning: 'قصر ملكي فخم',
          partOfSpeech: 'noun',
          exampleSentence: 'The Mongol Emperor welcomed foreign visitors to his magnificent summer palace.',
          visualCue: 'trophy_cup'
        }
      ],
      phonics: [
        {
          letterSound: 'Past Tense -ED Pronunciation Rhythm in Stories',
          sampleWords: ['Traveled (/d/)', 'Reached (/t/)', 'Decided (/ɪd/)', 'Started (/ɪd/)'],
          rhymingPair: ['Ride', 'Guide']
        }
      ],
      conversationTerms: [
        { en: 'How long did his journey take? — It took nearly thirty years.', ar: 'كم استغرقت رحلته؟ — استغرقت قرابة ثلاثين عاماً.' },
        { en: 'Travel teaches us about different cultures and civilizations.', ar: 'السفر يعلمنا عن مختلف الثقافات والحضارات.' },
        { en: 'While he was crossing the desert, he wrote in his diary.', ar: 'بينما كان يعبر الصحراء، كان يدون في مذكراته.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Past Simple vs. Past Continuous with While and When",
          ruleExplanationAr: "الماضي المستمر (was/were + v-ing) يعبر عن حدث طويل مستمر، قاطعه حدث قصير في الماضي البسيط (v-ed). تأتي While متبوعة بالماضي المستمر، بينما When يتبعها الماضي البسيط.",
          structureFormula: "While + Past Continuous, Past Simple | Past Continuous + when + Past Simple",
          examples: [
            { en: "While Marco Polo was traveling, he wrote a book.", ar: "بينما كان ماركو بولو يسافر، كتب كتاباً." },
            { en: "They were riding camels when a sandstorm started.", ar: "كانوا يركبون الجمال عندما بدأت عاصفة رملية." }
          ],
          visualPatternBlocks: ["While + was/were + Verb-ing, Past Simple", "was/were + Verb-ing + when + Past Simple"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['traveling,', 'While', 'he', 'was', 'he', 'notes', 'wrote'],
          correctOrder: ['While', 'he', 'was', 'traveling,', 'he', 'wrote', 'notes'],
          translationAr: 'بينما كان يسافر، كتب ملاحظات'
        },
        {
          jumbledParts: ['crossed', 'caravan', 'The', 'desert', 'the'],
          correctOrder: ['The', 'caravan', 'crossed', 'the', 'desert'],
          translationAr: 'عبرت القافلة الصحراء'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Pronounce the -ed ending correctly: /d/ in traveled vs /t/ in reached:',
        prompt: 'Does "traveled" end with /t/, /d/, or /ɪd/?',
        targetResponses: ['d', '/d/'],
        scaffoldingHints: ['Ends with soft /d/']
      },
      {
        type: 'dictation',
        instruction: 'Complete with past conjunction:',
        prompt: 'They were sailing along the coast ______ (عندما) the storm began.',
        targetResponses: ['when'],
        scaffoldingHints: ['Followed by past simple']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p6_u5_l1_q1',
          type: 'mcq',
          questionPrompt: 'A large group of travelers and camels moving together through the desert is a ______.',
          options: ['caravan', 'boat', 'car', 'plane'],
          correctAnswer: 'caravan',
          explanationAr: 'القافلة التجارية (caravan) مجموعة مسافرين وجمال يعبرون الصحراء.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p6_u5_l2_q1',
          type: 'matching',
          questionPrompt: 'While clause: "While he ______ through China, he saw paper money for the first time."',
          options: ['was traveling', 'travels', 'travel', 'is traveling'],
          correctAnswer: 'was traveling',
          explanationAr: 'بعد While يأتي الماضي المستمر: was traveling.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p6_u5_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [wrote - diary - in - his - He].',
          correctAnswer: 'He wrote in his diary',
          explanationAr: 'الترتيب الصحيح: He wrote in his diary.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p6_u5_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: Ibn Battuta was a legendary Moroccan traveler who visited Egypt and sailed on the ______.',
          options: ['Nile River', 'Amazon River', 'frozen ocean', 'cloud'],
          correctAnswer: 'Nile River',
          explanationAr: 'أبحر ابن بطوطة في نهر النيل بمصر (Nile River).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p6_u5_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'What value does travel documentation bring to future generations? "Writing travel diaries helps us ______."',
          correctAnswer: 'understand the history, geography, and traditions of ancient nations',
          explanationAr: 'أهمية كتب الرحلات في فهم تاريخ وجغرافيا وثقافات الشعوب القديمة.',
          marks: 3
        }
      ]
    }
  },

  // =========================================================================
  // PRIMARY 6 - UNIT 6: Taking Care (الاعتناء بالصحة والنفس)
  // =========================================================================
  {
    unitId: 'p6_t1_c_u6',
    grade: 'primary_6',
    track: 'connect',
    term: 1,
    unitNumber: 6,
    unitTitleEn: 'Taking Care',
    unitTitleAr: 'الاعتناء بالصحة والنباتات الطبيعية وقاعدة If الشرطية',
    tab1_Vocabulary: {
      words: [
        {
          id: 'p6_u6_w1',
          word: 'Mint',
          phonetics: '/mɪnt/',
          arabicMeaning: 'النعناع الأخضر العطري المنعش',
          partOfSpeech: 'noun',
          exampleSentence: 'Add fresh mint leaves to hot black tea for a soothing drink.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p6_u6_w2',
          word: 'Rosemary',
          phonetics: '/ˈrəʊz.mər.i/',
          arabicMeaning: 'عشبة إكليل الجبل (الروزماري)',
          partOfSpeech: 'noun',
          exampleSentence: 'Rosemary has fragrant needle-like leaves used in natural remedies and cooking.',
          visualCue: 'flower_garden'
        },
        {
          id: 'p6_u6_w3',
          word: 'Essential oils',
          phonetics: '/ɪˈsen.ʃəl ɔɪlz/',
          arabicMeaning: 'زيوت عطرية نباتية طبيعية',
          partOfSpeech: 'phrase',
          exampleSentence: 'Essential oils extracted from lavender help soothe stress and relax.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p6_u6_w4',
          word: 'Natural soap',
          phonetics: '/ˈnætʃ.ər.əl səʊp/',
          arabicMeaning: 'صابون طبيعي مصنوع من زيت الزيتون',
          partOfSpeech: 'phrase',
          exampleSentence: 'Handmade natural soap keeps your skin clean and soft without chemicals.',
          visualCue: 'water_bottle'
        },
        {
          id: 'p6_u6_w5',
          word: 'Clay mask',
          phonetics: '/kleɪ mɑːsk/',
          arabicMeaning: 'قناع الطمي الطبيعي للعناية بالبشرة',
          partOfSpeech: 'phrase',
          exampleSentence: 'Natural clay masks cleanse the skin and remove impurities gently.',
          visualCue: 'happy_face'
        }
      ],
      phonics: [
        {
          letterSound: 'Compound Nouns Stress and Word Reduction',
          sampleWords: ['TEAspoon', 'PEPPERmint', 'SUNflower', 'ROOFtop'],
          rhymingPair: ['Care', 'Share']
        }
      ],
      conversationTerms: [
        { en: 'If you have a sore throat, drink warm mint tea.', ar: 'إذا كان لديك التهاب بالحلق، اشرب شاي النعناع الدافئ.' },
        { en: 'Natural herbs have been used in Egypt for thousands of years.', ar: 'الأعشاب الطبيعية مستخدمة في مصر منذ آلاف السنين.' },
        { en: 'How do you make natural candles? — Melt beeswax and add essential oils.', ar: 'كيف تصنع شموعاً طبيعية؟ — نذيب شمع العسل ونضيف الزيوت العطرية.' }
      ]
    },
    tab2_Grammar: {
      rules: [
        {
          title: "Zero & First Conditional (If + Present Simple, Present Simple / Will + Infinitive)",
          ruleExplanationAr: "الحالة الصفرية للحقائق العلمية الثابتة: If/When + مضارع بسيط, مضارع بسيط (If you heat water, it boils). والحالة الأولى للاحتمالات المستقبلية: If + مضارع بسيط, will + المصدر (If you study hard, you will pass).",
          structureFormula: "Zero: If + Present Simple, Present Simple | First: If + Present Simple, will + Infinitive",
          examples: [
            { en: "If you add mint to hot water, it smells fresh.", ar: "إذا أضفت النعناع للماء المغلي، تنبعث منه رائحة زكية (حقيقة)." },
            { en: "If you take your medicine, you will feel better.", ar: "إذا تناولت دواءك، ستشعر بالتحسن (احتمال مستقبلي)." }
          ],
          visualPatternBlocks: ["If + Present Simple, Present Simple (Fact)", "If + Present Simple, will + Verb (Future Result)"]
        }
      ],
      sentenceBuilderDrills: [
        {
          jumbledParts: ['it', 'boils', 'water,', 'you', 'heat', 'If'],
          correctOrder: ['If', 'you', 'heat', 'water,', 'it', 'boils'],
          translationAr: 'إذا سخنت الماء، فإنه يغلي'
        },
        {
          jumbledParts: ['feel', 'you', 'better', 'will', 'If', 'rest,', 'you'],
          correctOrder: ['If', 'you', 'rest,', 'you', 'will', 'feel', 'better'],
          translationAr: 'إذا ارتحت، ستشعر بتحسن'
        }
      ]
    },
    tab3_Skills: [
      {
        type: 'phonics_drill',
        instruction: 'Identify stress on compound words: TEA-spoon:',
        prompt: 'Which syllable is stressed in "TEAspoon"?',
        targetResponses: ['TEA', 'First', 'first syllable'],
        scaffoldingHints: ['Stress the first element']
      },
      {
        type: 'dictation',
        instruction: 'Complete the First Conditional sentence:',
        prompt: 'If she drinks warm mint tea, she ______ (will) feel refreshed.',
        targetResponses: ['will'],
        scaffoldingHints: ['Followed by base verb']
      }
    ],
    examSuite: {
      level1_Foundation: [
        {
          id: 'p6_u6_l1_q1',
          type: 'mcq',
          questionPrompt: 'A green aromatic herb frequently added to tea for a refreshing taste and soothing effect is ______.',
          options: ['mint', 'salt', 'pepper', 'flour'],
          correctAnswer: 'mint',
          explanationAr: 'النعناع الأخضر (mint) عشبة عطرية منعشة تضاف للشاي.',
          marks: 1
        }
      ],
      level2_Contextual: [
        {
          id: 'p6_u6_l2_q1',
          type: 'matching',
          questionPrompt: 'First conditional: "If you sleep early tonight, you ______ wake up energetic tomorrow."',
          options: ['will', 'would', 'did', 'was'],
          correctAnswer: 'will',
          explanationAr: 'في جواب الشرط للحالة الأولى نستخدم will + المصدر: will wake up.',
          marks: 1
        }
      ],
      level3_AdvancedStructure: [
        {
          id: 'p6_u6_l3_q1',
          type: 'reorder',
          questionPrompt: 'Reorder: [boils - water - heat - you - If - it].',
          correctAnswer: 'If you heat water it boils',
          explanationAr: 'صياغة الحالة الصفرية: If you heat water it boils.',
          marks: 2
        }
      ],
      level4_MoeMockExam: [
        {
          id: 'p6_u6_l4_q1',
          type: 'mcq',
          questionPrompt: 'Practice MOE Mock: Pure olive oil is the primary natural ingredient used in handmade Egyptian ______.',
          options: ['soap', 'iron', 'plastic', 'glass'],
          correctAnswer: 'soap',
          explanationAr: 'زيت الزيتون النقي مكون أساسي لصناعة الصابون الطبيعي (soap).',
          marks: 1
        }
      ],
      level5_HigherThinking: [
        {
          id: 'p6_u6_l5_q1',
          type: 'guided_sentence',
          questionPrompt: 'Why do modern consumers prefer natural herbal products over artificial chemicals? "Consumers prefer natural products because ______."',
          correctAnswer: 'they are safer for health and gentle on the skin',
          explanationAr: 'تفضيل المنتجات الطبيعية لكونها آمنة صحياً ولطيفة على البشرة.',
          marks: 3
        }
      ]
    }
  }
];
