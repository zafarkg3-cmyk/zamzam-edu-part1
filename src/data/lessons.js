// Zam-Zam EDU — Part 1 curriculum content.
// Static data: no CMS needed for the MVP. Each lesson has vocabulary,
// key phrases, a model dialogue, and an auto-generated multiple-choice
// quiz built from that lesson's own vocabulary + phrases (see
// `generateLessonQuiz` below). Homework is a free-text prompt reviewed
// by the teacher, not auto-graded.
//
// To add Lesson 6+: copy one lesson object, give it the next `id`, and
// fill in the fields — everything else (locking, quiz generation,
// progress tracking) picks it up automatically.

export const LESSONS = [
  {
    id: 1,
    icon: "🙋",
    titleUz: "Мен ҳақимда",
    titleEn: "About Myself",
    vocabulary: [
      { en: "name", uz: "исм", emoji: "📛", mnemonic: "«нейм» — исмингизни айтганда «на, ойим!» деб чақиргандай эшитилади." },
      { en: "age", uz: "ёш", emoji: "🎂", mnemonic: "«эйдж» — «эй, жиян, неча ёшдасан?» деб сўрагандай." },
      { en: "country", uz: "мамлакат", emoji: "🌍", mnemonic: "«кантри» — «қанди» мамлакатлар ширин бўлади деб эслаб қолинг." },
      { en: "city", uz: "шаҳар", emoji: "🏙️", mnemonic: "«сити» — катта шаҳарда «сити»лар (марказлар) кўп бўлади." },
      { en: "student", uz: "ўқувчи", emoji: "🎒", mnemonic: "«стьюдент» — ҳар куни «студ»ент каби дарсга «студ»иб (шошиб) боради." },
      { en: "happy", uz: "хурсанд", emoji: "😄", mnemonic: "«хэппи» — хурсанд бўлганда «хэй, пи!» деб қичқиргандай кулгили овоз." },
      { en: "tired", uz: "чарчаган", emoji: "😴", mnemonic: "«тайерд» — чарчаганда «тай»ёқлаб ётгингиz келади." },
      { en: "friend", uz: "дўст", emoji: "🤝", mnemonic: "«френд» — дўстингиз билан «фрэнд»овол (самимий) гаплашасиз." },
    ],
    phrases: [
      { en: "My name is Muhammad.", uz: "Менинг исмим Муҳаммад." },
      { en: "I am ten years old.", uz: "Мен ўн ёшдаман." },
      { en: "I am from Kyrgyzstan.", uz: "Мен Қирғизистондан бўламан." },
      { en: "I live in Kirov.", uz: "Мен Кировда яшайман." },
      { en: "I am happy to meet you.", uz: "Сиз билан танишганимдан хурсандман." },
    ],
    dialogue: {
      speakers: ["Anvar", "Muhammad"],
      lines: [
        { speaker: "Anvar", en: "Hello! What is your name?", uz: "Салом! Исмингиз нима?" },
        { speaker: "Muhammad", en: "Hi! My name is Muhammad.", uz: "Салом! Менинг исмим Муҳаммад." },
        { speaker: "Anvar", en: "Nice to meet you. How old are you?", uz: "Танишганимдан хурсандман. Неча ёшдасиз?" },
        { speaker: "Muhammad", en: "I am ten years old. And you?", uz: "Мен ўн ёшдаман. Сиз-чи?" },
        { speaker: "Anvar", en: "I am eleven. Where are you from?", uz: "Мен ўн бир ёшдаман. Сиз қаердансиз?" },
        { speaker: "Muhammad", en: "I am from Kyrgyzstan. I live in Kirov now.", uz: "Мен Қирғизистондан бўламан. Ҳозир Кировда яшайман." },
        { speaker: "Anvar", en: "I am happy to meet you, Muhammad!", uz: "Сиз билан танишганимдан хурсандман, Муҳаммад!" },
        { speaker: "Muhammad", en: "Me too!", uz: "Мен ҳам!" },
      ],
    },
    homeworkPrompt:
      "Ўзингиз ҳақингизда 9-10 та гап ёзинг: исмингиз, ёшингиз, қаерданлигингиз, қаерда яшашингиз ва бугун ўзингизни қандай ҳис қилаётганингиз каби маълумотларни киритинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 2,
    icon: "👨‍👩‍👧‍👦",
    titleUz: "Оилам",
    titleEn: "My Family",
    vocabulary: [
      { en: "mother", uz: "она", emoji: "👩", mnemonic: "«мазер» — онамиз энг мазали таомларни пишириб беради." },
      { en: "father", uz: "ота", emoji: "👨", mnemonic: "«фазер» — отамиз оиламизнинг «фаза»даги устуни." },
      { en: "sister", uz: "опа/сингил", emoji: "👧", mnemonic: "«систер» — опам «систем»ли (тартибли) қиз." },
      { en: "brother", uz: "ака/ука", emoji: "👦", mnemonic: "«бразер» — акам билан «браво» деб қарсак чаламиз." },
      { en: "grandmother", uz: "буви", emoji: "👵", mnemonic: "«грандмазер» — бувимиз «гранд» (буюк) меҳрибон." },
      { en: "grandfather", uz: "бобо", emoji: "👴", mnemonic: "«грандфазер» — бобомиз «гранд» гапларни билади." },
      { en: "family", uz: "оила", emoji: "🏠", mnemonic: "«фэмили» — оиламиз доим «фэн» (мухлис) каби бир-бирини қўллаб-қувватлайди." },
      { en: "love", uz: "севмоқ", emoji: "❤️", mnemonic: "«лав» — «лаб»имиз билан оиламизга «лав» (яхши гап) айтамиз." },
    ],
    phrases: [
      { en: "This is my mother.", uz: "Бу менинг онам." },
      { en: "I have two sisters.", uz: "Менинг икки опам/синглим бор." },
      { en: "My father is a teacher.", uz: "Отам ўқитувчи." },
      { en: "I love my family.", uz: "Мен оиламни севаман." },
      { en: "How many people are in your family?", uz: "Оилангизда неча киши бор?" },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Do you have brothers or sisters?", uz: "Сизда ака-ука ёки опа-сингил борми?" },
        { speaker: "Anvar", en: "Yes, I have one brother and one sister.", uz: "Ҳа, менда бир ука ва бир синглим бор." },
        { speaker: "Malika", en: "What does your father do?", uz: "Отангиз ким бўлиб ишлайди?" },
        { speaker: "Anvar", en: "My father is a teacher. My mother is a doctor.", uz: "Отам ўқитувчи. Онам шифокор." },
        { speaker: "Malika", en: "That's nice! I live with my grandmother too.", uz: "Ажойиб! Мен ҳам бувим билан яшайман." },
        { speaker: "Anvar", en: "I love my family very much.", uz: "Мен оиламни жуда яхши кўраман." },
        { speaker: "Malika", en: "Me too!", uz: "Мен ҳам!" },
      ],
    },
    homeworkPrompt:
      "Оилангиз ҳақида 9-10 та гап ёзинг: оилангизда неча киши бор, ота-онангиз ким бўлиб ишлайди, ака-ука ёки опа-сингилларингиз ҳақида ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 3,
    icon: "☀️",
    titleUz: "Куним",
    titleEn: "My Day",
    vocabulary: [
      { en: "morning", uz: "эрталаб", emoji: "🌅", mnemonic: "«морнинг» — эрталаб «мор» (кўк) осмонни кўрамиз." },
      { en: "wake up", uz: "уйғонмоқ", emoji: "⏰", mnemonic: "«вэйк ап» — соат чалганда «вой, эк!» деб уйғонасиз." },
      { en: "breakfast", uz: "нонушта", emoji: "🍳", mnemonic: "«брэкфаст» — нонуштани «фаст» (тез) қилиб ейсиз." },
      { en: "school", uz: "мактаб", emoji: "🏫", mnemonic: "«скул» — мактабда «скул»(шакл) чизиб ўрганасиз." },
      { en: "afternoon", uz: "тушдан кейин", emoji: "🌤️", mnemonic: "«афтернун» — туш(афтер)дан кейинги вақт." },
      { en: "evening", uz: "кечқурун", emoji: "🌇", mnemonic: "«ивнинг» — кечқурун «иван»дай (баланд) осмон қизаради." },
      { en: "sleep", uz: "ухламоқ", emoji: "🛌", mnemonic: "«слип» — ёстиқдан «слип» (сирғалиб) уйқуга кетасиз." },
      { en: "homework", uz: "уй вазифаси", emoji: "📚", mnemonic: "«хоумворк» — уйда (хоум) ишлайсиз (ворк)." },
    ],
    phrases: [
      { en: "I wake up at seven.", uz: "Мен соат еттида уйғонаман." },
      { en: "I go to school in the morning.", uz: "Мен эрталаб мактабга бораман." },
      { en: "I do my homework in the afternoon.", uz: "Мен тушдан кейин уй вазифамни бажараман." },
      { en: "I have dinner in the evening.", uz: "Мен кечқурун кечки овқат ейман." },
      { en: "I go to sleep at nine.", uz: "Мен соат тўққизда ухлайман." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What time do you wake up?", uz: "Соат нечада уйғонасиз?" },
        { speaker: "Malika", en: "I wake up at seven o'clock.", uz: "Мен соат еттида уйғонаман." },
        { speaker: "Anvar", en: "What do you do in the morning?", uz: "Эрталаб нима қиласиз?" },
        { speaker: "Malika", en: "I eat breakfast and go to school.", uz: "Нонушта қилиб, мактабга бораман." },
        { speaker: "Anvar", en: "And in the evening?", uz: "Кечқурун-чи?" },
        { speaker: "Malika", en: "I do my homework and then I sleep.", uz: "Уй вазифамни бажариб, кейин ухлайман." },
        { speaker: "Anvar", en: "My day is the same!", uz: "Менинг кунимам худди шундай!" },
      ],
    },
    homeworkPrompt:
      "Кунингиз ҳақида 9-10 та гап ёзинг: соат нечада уйғонасиз, мактабга қачон борасиз, кечқурун нима қиласиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 4,
    icon: "🎒",
    titleUz: "Мактабим ва дўстларим",
    titleEn: "My School & Friends",
    vocabulary: [
      { en: "teacher", uz: "ўқитувчи", emoji: "🧑‍🏫", mnemonic: "«тичер» — ўқитувчи бизга «тич» (ўргатади)." },
      { en: "classmate", uz: "синфдош", emoji: "🧑‍🤝‍🧑", mnemonic: "«класмейт» — синфдошим «класс» (аъло) дўстим." },
      { en: "subject", uz: "фан", emoji: "📖", mnemonic: "«сабжект» — ҳар бир фан бир «сабаб»ли мавзу." },
      { en: "math", uz: "математика", emoji: "➗", mnemonic: "«мэт» — математикада «мет»р ва рақамлар кўп." },
      { en: "English", uz: "инглиз тили", emoji: "🇬🇧", mnemonic: "«инглиш» — инглиз тилида «инг» билан тугайдиган сўзлар кўп." },
      { en: "book", uz: "китоб", emoji: "📕", mnemonic: "«бук» — китобни очганда «бук!» деган товуш чиққандай тасаввур қилинг." },
      { en: "kind", uz: "меҳрибон", emoji: "🤗", mnemonic: "«кайнд» — меҳрибон одам «қайно»қ (иссиқ) юракли." },
      { en: "funny", uz: "кулгили", emoji: "😂", mnemonic: "«фани» — кулгили гап эшитганда «фан-фан» кулиб юборасиз." },
    ],
    phrases: [
      { en: "My favorite subject is English.", uz: "Менинг севимли фаним инглиз тили." },
      { en: "My teacher is very kind.", uz: "Ўқитувчим жуда меҳрибон." },
      { en: "This is my classmate.", uz: "Бу менинг синфдошим." },
      { en: "My friend is funny.", uz: "Дўстим кулгили." },
      { en: "We study math together.", uz: "Биз бирга математика ўрганамиз." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Who is your best friend?", uz: "Энг яхши дўстингиз ким?" },
        { speaker: "Anvar", en: "My best friend is Sardor. He is very funny.", uz: "Энг яхши дўстим Сардор. У жуда кулгили." },
        { speaker: "Malika", en: "What is your favorite subject?", uz: "Севимли фанингиз нима?" },
        { speaker: "Anvar", en: "I like English. What about you?", uz: "Мен инглиз тилини ёқтираман. Сиз-чи?" },
        { speaker: "Malika", en: "I like math. Our teacher is very kind.", uz: "Мен математикани ёқтираман. Ўқитувчимиз жуда меҳрибон." },
        { speaker: "Anvar", en: "Yes, she is the best!", uz: "Ҳа, у энг яхшиси!" },
      ],
    },
    homeworkPrompt:
      "Мактабингиз ва дўстларингиз ҳақида 9-10 та гап ёзинг: севимли фанингиз нима, энг яхши дўстингиз ким, ўқитувчиларингиз қандай. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 5,
    icon: "⭐",
    titleUz: "Севимли нарсаларим",
    titleEn: "My Favorites",
    vocabulary: [
      { en: "color", uz: "ранг", emoji: "🎨", mnemonic: "«калэр» — рангли қалам «колор»лаб чизади." },
      { en: "food", uz: "овқат", emoji: "🍕", mnemonic: "«фуд» — овқатни «фух»лаб (пуфлаб) совитасиз." },
      { en: "animal", uz: "ҳайвон", emoji: "🐱", mnemonic: "«энимал» — ҳайвонлар «эни» (ҳар қандай) шаклда бўлади." },
      { en: "sport", uz: "спорт", emoji: "⚽", mnemonic: "«спорт» — ўзбекчада ҳам «спорт» деб айтилади, эслаш осон." },
      { en: "game", uz: "ўйин", emoji: "🎮", mnemonic: "«гейм» — ўйинда «гей»(ғайрат) билан ютасиз." },
      { en: "music", uz: "мусиқа", emoji: "🎵", mnemonic: "«мьюзик» — мусиқа «мьюн» (ёқимли) товуш чиқаради." },
      { en: "movie", uz: "кино", emoji: "🎬", mnemonic: "«муви» — киного«муви»лгандай (ҳаракат) саҳналар кўп." },
      { en: "swim", uz: "сузмоқ", emoji: "🏊", mnemonic: "«свим» — сувда «свинг» қилгандай сузасиз." },
    ],
    phrases: [
      { en: "My favorite color is blue.", uz: "Менинг севимли рангим кўк." },
      { en: "I like pizza.", uz: "Мен пиццани ёқтираман." },
      { en: "My favorite animal is a cat.", uz: "Севимли ҳайвоним мушук." },
      { en: "I love playing football.", uz: "Мен футбол ўйнашни севаман." },
      { en: "What is your favorite movie?", uz: "Севимли киноингиз нима?" },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What is your favorite color?", uz: "Севимли рангингиз нима?" },
        { speaker: "Malika", en: "My favorite color is pink. And yours?", uz: "Севимли рангим пушти. Сизники-чи?" },
        { speaker: "Anvar", en: "I like blue. What food do you like?", uz: "Мен кўкни ёқтираман. Қандай овқатни ёқтирасиз?" },
        { speaker: "Malika", en: "I like pizza! Do you like sports?", uz: "Мен пиццани ёқтираман! Спортни ёқтирасизми?" },
        { speaker: "Anvar", en: "Yes, I love playing football.", uz: "Ҳа, мен футбол ўйнашни севаман." },
        { speaker: "Malika", en: "I prefer swimming.", uz: "Мен сузишни афзал кўраман." },
      ],
    },
    homeworkPrompt:
      "Севимли нарсаларингиз ҳақида 9-10 та гап ёзинг: ранг, овқат, ҳайвон, спорт ёки ўйин ҳақида ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  // ============================================================
  // PART 2 — lessons 6-15: everyday conversational situations.
  // Same object shape as Part 1, so the existing lock/quiz/homework
  // system picks these up automatically — nothing else needs to change.
  // ============================================================

  {
    id: 6,
    icon: "🌦️",
    titleUz: "Об-ҳаво",
    titleEn: "The Weather",
    vocabulary: [
      { en: "sunny", uz: "қуёшли", emoji: "☀️", mnemonic: "«сани» — қуёшли кунда «сани» (сен) кўзингни қисасан." },
      { en: "rainy", uz: "ёмғирли", emoji: "🌧️", mnemonic: "«рейни» — ёмғир «рей»лар (чизиқлар) каби ёғади." },
      { en: "cloudy", uz: "булутли", emoji: "☁️", mnemonic: "«клауди» — булутлар «клав»иатура тугмачалари каби осмонда терилган." },
      { en: "snowy", uz: "қорли", emoji: "❄️", mnemonic: "«сноуи» — қор ёққанда «сноу»бордда учгинг келади." },
      { en: "windy", uz: "шамолли", emoji: "💨", mnemonic: "«винди» — шамол «вин»тдай айланиб эсади." },
      { en: "hot", uz: "иссиқ", emoji: "🥵", mnemonic: "«хот» — иссиқда «хў, от!» деб сув сўрайсиз." },
      { en: "cold", uz: "совуқ", emoji: "🥶", mnemonic: "«коулд» — совуқда «қалт»ирайсиз." },
      { en: "weather", uz: "об-ҳаво", emoji: "🌈", mnemonic: "«везер» — об-ҳаво ҳар куни «вазият»дай ўзгаради." },
    ],
    phrases: [
      { en: "What's the weather like today?", uz: "Бугун об-ҳаво қандай?" },
      { en: "It is sunny today.", uz: "Бугун қуёшли." },
      { en: "It is very cold outside.", uz: "Ташқарида жуда совуқ." },
      { en: "I like rainy days.", uz: "Мен ёмғирли кунларни ёқтираман." },
      { en: "Take an umbrella, it's raining.", uz: "Соябон олинг, ёмғир ёғяпти." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What's the weather like today?", uz: "Бугун об-ҳаво қандай?" },
        { speaker: "Malika", en: "It is sunny and warm.", uz: "Қуёшли ва илиқ." },
        { speaker: "Anvar", en: "Great! Is it windy?", uz: "Ажойиб! Шамолми?" },
        { speaker: "Malika", en: "No, it's calm today.", uz: "Йўқ, бугун тинч." },
        { speaker: "Anvar", en: "I don't like cold and snowy days.", uz: "Мен совуқ ва қорли кунларни ёқтирмайман." },
        { speaker: "Malika", en: "Me too! I prefer sunny weather.", uz: "Мен ҳам! Қуёшли об-ҳавони афзал кўраман." },
        { speaker: "Anvar", en: "Let's go outside then!", uz: "Унда ташқарига чиқайлик!" },
        { speaker: "Malika", en: "Good idea!", uz: "Яхши фикр!" },
      ],
    },
    homeworkPrompt:
      "Об-ҳаво ҳақида 9-10 та гап ёзинг: бугун об-ҳаво қандай, қандай об-ҳавони ёқтирасиз, ёмғир/қор/шамол ҳақида ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 7,
    icon: "🛍️",
    titleUz: "Дўконда",
    titleEn: "At the Shop",
    vocabulary: [
      { en: "shop", uz: "дўкон", emoji: "🏪", mnemonic: "«шоп» — дўконга «шоп-шоп» юриб борасиз." },
      { en: "price", uz: "нарх", emoji: "🏷️", mnemonic: "«прайс» — нархни «прайс-лист»да кўрасиз." },
      { en: "money", uz: "пул", emoji: "💵", mnemonic: "«мани» — пул «мени» бой қилади." },
      { en: "buy", uz: "сотиб олмоқ", emoji: "🛒", mnemonic: "«бай» — сотиб олгач «бай-бай» дейсиз." },
      { en: "sell", uz: "сотмоқ", emoji: "🏬", mnemonic: "«сел» — сотувчи молини «сел»лаб (оқизиб) сотади." },
      { en: "expensive", uz: "қиммат", emoji: "💎", mnemonic: "«экспенсив» — қиммат нарса «экспресс» тезликда тугайди." },
      { en: "cheap", uz: "арзон", emoji: "🪙", mnemonic: "«чип» — арзон нарса «чипроқ» (кичикроқ) пулга тушади." },
      { en: "bag", uz: "сумка", emoji: "👜", mnemonic: "«бэг» — сумкага харидни «бек» (орқа) томонга соласиз." },
    ],
    phrases: [
      { en: "How much is this?", uz: "Бу қанча туради?" },
      { en: "It is too expensive.", uz: "Бу жуда қиммат." },
      { en: "Can I have a discount?", uz: "Чегирма бера оласизми?" },
      { en: "I want to buy this bag.", uz: "Мен бу сумкани сотиб олмоқчиман." },
      { en: "Here is your change.", uz: "Мана қайтимингиз." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "How much is this shirt?", uz: "Бу кўйлак қанча туради?" },
        { speaker: "Anvar", en: "It is fifty som.", uz: "Эллик сўм." },
        { speaker: "Malika", en: "That's too expensive!", uz: "Бу жуда қиммат!" },
        { speaker: "Anvar", en: "Okay, I can give you a discount.", uz: "Хўп, сизга чегирма бера оламан." },
        { speaker: "Malika", en: "Thank you! I will buy it.", uz: "Раҳмат! Мен уни сотиб оламан." },
        { speaker: "Anvar", en: "Here is your bag. Thank you for shopping!", uz: "Мана сумкангиз. Харид қилганингиз учун раҳмат!" },
      ],
    },
    homeworkPrompt:
      "Дўконда харид қилиш ҳақида 9-10 та гап ёзинг: нима сотиб олмоқчисиз, нархи қанча, арзонми ёки қимматми. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 8,
    icon: "🍽️",
    titleUz: "Ресторанда",
    titleEn: "At the Restaurant",
    vocabulary: [
      { en: "menu", uz: "меню", emoji: "📋", mnemonic: "«менью» — меню «мен» танлайдиган рўйхат." },
      { en: "order", uz: "буюртма бермоқ", emoji: "📝", mnemonic: "«ордер» — буюртма «орден» каби расмий сўров." },
      { en: "delicious", uz: "мазали", emoji: "😋", mnemonic: "«делишес» — мазали таом «дели»катес каби нозик." },
      { en: "hungry", uz: "оч", emoji: "🍽️", mnemonic: "«хангри» — очлик «ханг»раб (қаттиқ) қорин бўшлигини сездиради." },
      { en: "thirsty", uz: "ташна", emoji: "🥤", mnemonic: "«тёрсти» — ташналикда «терс» (қуруқ) томоқ ачийди." },
      { en: "waiter", uz: "официант", emoji: "🧑‍🍳", mnemonic: "«вейтер» — официант столга «вейт» (кутиб) хизмат қилади." },
      { en: "bill", uz: "чек", emoji: "🧾", mnemonic: "«билл» — чекни «бил»иб (аниқ) тўлайсиз." },
      { en: "restaurant", uz: "ресторан", emoji: "🍴", mnemonic: "«рестурант» — ресторанда «рест» (дам) оласиз." },
    ],
    phrases: [
      { en: "Can I see the menu, please?", uz: "Менюни кўрсата оласизми?" },
      { en: "I would like to order pizza.", uz: "Мен пицца буюртма бермоқчиман." },
      { en: "This food is delicious.", uz: "Бу овқат жуда мазали." },
      { en: "Can I have the bill, please?", uz: "Чекни бера оласизми?" },
      { en: "I am very hungry.", uz: "Мен жуда очман." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "I am hungry. Let's go to a restaurant.", uz: "Мен очман. Ресторанга борайлик." },
        { speaker: "Malika", en: "Good idea! Can I see the menu, please?", uz: "Яхши фикр! Менюни кўрсата оласизми?" },
        { speaker: "Anvar", en: "Here you are.", uz: "Мана." },
        { speaker: "Malika", en: "I would like to order soup and bread.", uz: "Мен шўрва ва нон буюртма бермоқчиман." },
        { speaker: "Anvar", en: "This food is delicious!", uz: "Бу овқат жуда мазали!" },
        { speaker: "Malika", en: "Yes! Can we have the bill, please?", uz: "Ҳа! Чекни бера оласизми?" },
      ],
    },
    homeworkPrompt:
      "Ресторанда буюртма бериш ҳақида 9-10 та гап ёзинг: нима буюртма берасиз, нимани ёқтирасиз, овқат мазалими. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 9,
    icon: "🧭",
    titleUz: "Йўл сўраш",
    titleEn: "Asking for Directions",
    vocabulary: [
      { en: "street", uz: "кўча", emoji: "🛣️", mnemonic: "«стрит» — кўчада «стрим» (оқим)дай одамлар юради." },
      { en: "left", uz: "чап", emoji: "⬅️", mnemonic: "«лефт» — чапга «лифт»дан чиққандай бурилинг." },
      { en: "right", uz: "ўнг", emoji: "➡️", mnemonic: "«райт» — ўнг томон «рейт»инги (тўғри) йўналиш." },
      { en: "straight", uz: "тўғри", emoji: "⬆️", mnemonic: "«стрейт» — тўғри йўл «стрелка»дай тик боради." },
      { en: "near", uz: "яқин", emoji: "📍", mnemonic: "«ниа» — яқин жой «ния»тингизга тез етказади." },
      { en: "far", uz: "узоқ", emoji: "🚶", mnemonic: "«фар» — узоқ йўл «фара»лар ёниб кетгунча давом этади." },
      { en: "map", uz: "харита", emoji: "🗺️", mnemonic: "«мэп» — харитада «меп» (белги)лар билан йўл кўрсатилади." },
      { en: "corner", uz: "бурчак", emoji: "📐", mnemonic: "«корнер» — бурчакда «кўр»иб турган нарса бор." },
    ],
    phrases: [
      { en: "Excuse me, where is the market?", uz: "Кечирасиз, бозор қаерда?" },
      { en: "Go straight and turn left.", uz: "Тўғри юринг ва чапга буринг." },
      { en: "It is near the school.", uz: "У мактабга яқин." },
      { en: "Is it far from here?", uz: "Бу ердан узоқми?" },
      { en: "Turn right at the corner.", uz: "Бурчакда ўнгга буринг." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Excuse me, where is the library?", uz: "Кечирасиз, кутубхона қаерда?" },
        { speaker: "Anvar", en: "Go straight and turn right.", uz: "Тўғри юринг ва ўнгга буринг." },
        { speaker: "Malika", en: "Is it far from here?", uz: "Бу ердан узоқми?" },
        { speaker: "Anvar", en: "No, it is very near.", uz: "Йўқ, жуда яқин." },
        { speaker: "Malika", en: "Thank you very much!", uz: "Katta раҳмат!" },
        { speaker: "Anvar", en: "You're welcome. Have a nice day!", uz: "Арзимайди. Кунингиз хайрли ўтсин!" },
      ],
    },
    homeworkPrompt:
      "Йўл сўраш ҳақида 9-10 та гап ёзинг: уйингиздан мактабгача бўлган йўлни таърифланг, чап/ўнг/тўғри сўзларини ишлатинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 10,
    icon: "🎨",
    titleUz: "Бўш вақт машғулотлари",
    titleEn: "Hobbies & Free Time",
    vocabulary: [
      { en: "hobby", uz: "хобби", emoji: "🎯", mnemonic: "«хоби» — хобби «хоб»ингиздаги (орзу) машғулот." },
      { en: "draw", uz: "чизмоқ", emoji: "✏️", mnemonic: "«дро» — расм чизишда қалам «дровен»дай (тортилиб) юради." },
      { en: "read", uz: "ўқимоқ", emoji: "📚", mnemonic: "«рид» — китоб ўқишда «рид»ер (ўқувчи) бўласиз." },
      { en: "dance", uz: "рақс тушмоқ", emoji: "💃", mnemonic: "«данс» — рақсда «данс»пол устида айланасиз." },
      { en: "sing", uz: "қўшиқ айтмоқ", emoji: "🎤", mnemonic: "«синг» — қўшиқда овоз «синг»иб (чуқур) чиқади." },
      { en: "paint", uz: "бўямоқ", emoji: "🖌️", mnemonic: "«пейнт» — бўёқ билан «пейнт»бол ўйнагандай рангли бўласиз." },
      { en: "collect", uz: "йиғмоқ", emoji: "🧩", mnemonic: "«коллект» — йиғганда «коллекция» ҳосил бўлади." },
      { en: "free time", uz: "бўш вақт", emoji: "⏳", mnemonic: "«фри тайм» — бўш вақтда «фри» (эркин) бўласиз." },
    ],
    phrases: [
      { en: "What is your hobby?", uz: "Сизнинг хобингиз нима?" },
      { en: "I like reading books.", uz: "Мен китоб ўқишни ёқтираман." },
      { en: "She dances very well.", uz: "У жуда яхши рақс тушади." },
      { en: "In my free time, I draw pictures.", uz: "Бўш вақтимда мен расм чизаман." },
      { en: "He collects stamps.", uz: "У маркалар йиғади." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What is your hobby, Malika?", uz: "Хобинг нима, Малика?" },
        { speaker: "Malika", en: "I like singing and dancing. What about you?", uz: "Мен қўшиқ айтиш ва рақс тушишни ёқтираман. Сен-чи?" },
        { speaker: "Anvar", en: "I like reading and drawing.", uz: "Мен ўқиш ва чизишни ёқтираман." },
        { speaker: "Malika", en: "That's wonderful! Do you paint too?", uz: "Ажойиб! Бўяш билан ҳам шуғулланасанми?" },
        { speaker: "Anvar", en: "Yes, I paint in my free time.", uz: "Ҳа, бўш вақтимда бўяйман." },
        { speaker: "Malika", en: "Let's do our hobbies together sometime!", uz: "Қачондир хобиларимиз билан бирга шуғулланайлик!" },
      ],
    },
    homeworkPrompt:
      "Хобби ва бўш вақтингиз ҳақида 9-10 та гап ёзинг: нима қилишни ёқтирасиз, бўш вақтда нима қиласиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 11,
    icon: "🏥",
    titleUz: "Соғлиқ",
    titleEn: "Health & Body",
    vocabulary: [
      { en: "head", uz: "бош", emoji: "🤕", mnemonic: "«хед» — бош «хет» (шляпа) кийиладиган жой." },
      { en: "hand", uz: "қўл", emoji: "✋", mnemonic: "«хэнд» — қўл билан «хэндшейк» (сalomlashish) қиласиз." },
      { en: "leg", uz: "оёқ", emoji: "🦵", mnemonic: "«лег» — оёқ билан «лего»дай қадам босасиз." },
      { en: "sick", uz: "касал", emoji: "🤒", mnemonic: "«сик» — касал бўлганда «сиқ»илиб ётасиз." },
      { en: "doctor", uz: "шифокор", emoji: "🩺", mnemonic: "«доктор» — шифокор «докт»рин (билим) билан даволайди." },
      { en: "healthy", uz: "соғлом", emoji: "💪", mnemonic: "«хэлси» — соғлом бўлиш учун «хел»(соғлиқ) керак." },
      { en: "pain", uz: "оғриқ", emoji: "😖", mnemonic: "«пейн» — оғриқда «пайп»(нафас) тезлашади." },
      { en: "medicine", uz: "дори", emoji: "💊", mnemonic: "«медсин» — дори «медицина»дан келади." },
    ],
    phrases: [
      { en: "I have a headache.", uz: "Бошим оғрияпти." },
      { en: "I feel sick today.", uz: "Бугун ўзимни ёмон ҳис қиляпман." },
      { en: "You should see a doctor.", uz: "Сиз шифокорга кўринишингиз керак." },
      { en: "Take this medicine.", uz: "Бу дорини ичинг." },
      { en: "I feel healthy now.", uz: "Ҳозир ўзимни соғлом ҳис қиляпман." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "What's wrong, Anvar?", uz: "Нима бўлди, Анвар?" },
        { speaker: "Anvar", en: "I have a headache and I feel sick.", uz: "Бошим оғрияпти ва ёмон ҳис қиляпман." },
        { speaker: "Malika", en: "You should see a doctor.", uz: "Шифокорга кўринишинг керак." },
        { speaker: "Anvar", en: "Yes, I will go now.", uz: "Ҳа, ҳозир бораман." },
        { speaker: "Malika", en: "Take this medicine twice a day.", uz: "Бу дорини кунига икки марта ич." },
        { speaker: "Anvar", en: "Thank you. I feel better already.", uz: "Раҳмат. Ўзимни аллақачон яхши ҳис қиляпман." },
      ],
    },
    homeworkPrompt:
      "Соғлиқ ҳақида 9-10 та гап ёзинг: касал бўлганингизда нима қиласиз, тана аъзолари номларини ишлатинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 12,
    icon: "👕",
    titleUz: "Кийимлар",
    titleEn: "Clothes",
    vocabulary: [
      { en: "shirt", uz: "кўйлак", emoji: "👔", mnemonic: "«шёрт» — кўйлак «шер»(гўзал) кийим." },
      { en: "trousers", uz: "шим", emoji: "👖", mnemonic: "«траузерс» — шим «траур»(расмий) кийимда бўлади." },
      { en: "shoes", uz: "туфли", emoji: "👟", mnemonic: "«шуз» — туфли «шу»ердан қадам ташлайди." },
      { en: "hat", uz: "қалпоқ", emoji: "🧢", mnemonic: "«хэт» — қалпоқ «хет»трик (уч марта) кийилади." },
      { en: "jacket", uz: "куртка", emoji: "🧥", mnemonic: "«жакет» — куртка «жак» (йигит)ка совуқдан ҳимоя қилади." },
      { en: "dress", uz: "кўйлак (аёл)", emoji: "👗", mnemonic: "«дресс» — кўйлак «дресс-код»га мос бўлади." },
      { en: "wear", uz: "киймоқ", emoji: "🙋", mnemonic: "«веа» — киймоқ «вей»тда (вазн) қулай бўлиши керак." },
      { en: "size", uz: "ўлчам", emoji: "📏", mnemonic: "«сайз» — ўлчам «сайт»даги жадвалда кўрсатилади." },
    ],
    phrases: [
      { en: "I am wearing a blue shirt.", uz: "Мен кўк кўйлак кийиб турибман." },
      { en: "What size do you wear?", uz: "Сиз қандай ўлчам киясиз?" },
      { en: "This jacket is too small.", uz: "Бу куртка жуда кичик." },
      { en: "Can I try this dress on?", uz: "Бу кўйлакни кийиб кўрсам бўладими?" },
      { en: "These shoes are very comfortable.", uz: "Бу туфлилар жуда қулай." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "I like your new dress, Malika!", uz: "Янги кўйлагинг ёқди, Малика!" },
        { speaker: "Malika", en: "Thank you! I bought new shoes too.", uz: "Раҳмат! Мен янги туфли ҳам сотиб олдим." },
        { speaker: "Anvar", en: "What size do you wear?", uz: "Қандай ўлчам киясан?" },
        { speaker: "Malika", en: "I wear size thirty-seven.", uz: "Мен ўттиз етти ўлчам кияман." },
        { speaker: "Anvar", en: "I need a new jacket for winter.", uz: "Менга қиш учун янги куртка керак." },
        { speaker: "Malika", en: "Let's go shopping together!", uz: "Биргаликда харид қилгани борайлик!" },
      ],
    },
    homeworkPrompt:
      "Кийимлар ҳақида 9-10 та гап ёзинг: бугун нима кийгансиз, қандай кийимларни ёқтирасиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 13,
    icon: "🚌",
    titleUz: "Сафар ва транспорт",
    titleEn: "Travel & Transport",
    vocabulary: [
      { en: "bus", uz: "автобус", emoji: "🚌", mnemonic: "«бас» — автобус «бас»сейндай катта." },
      { en: "train", uz: "поезд", emoji: "🚆", mnemonic: "«трейн» — поезд «трек» (рельс) бўйлаб юради." },
      { en: "airplane", uz: "самолёт", emoji: "✈️", mnemonic: "«эаплейн» — самолёт «эа»(ҳаво)да учади." },
      { en: "ticket", uz: "чипта", emoji: "🎫", mnemonic: "«тикит» — чипта «тик»(тез) сотиб олинади." },
      { en: "travel", uz: "сафар қилмоқ", emoji: "🧳", mnemonic: "«травел» — сафарда «трек»(йўл)да юрасиз." },
      { en: "station", uz: "бекат", emoji: "🚉", mnemonic: "«стейшн» — бекатда «стенд»(тик) кутасиз." },
      { en: "driver", uz: "ҳайдовчи", emoji: "👨‍✈️", mnemonic: "«драйвер» — ҳайдовчи «драйв»(ҳайдаш) қилади." },
      { en: "journey", uz: "сафар", emoji: "🗺️", mnemonic: "«жерни» — сафар «жур»(кун)лаб давом этади." },
    ],
    phrases: [
      { en: "I want to buy a ticket.", uz: "Мен чипта сотиб олмоқчиман." },
      { en: "The bus is coming.", uz: "Автобус келяпти." },
      { en: "How long is the journey?", uz: "Сафар қанча вақт давом этади?" },
      { en: "I travel by train.", uz: "Мен поездда сафар қиламан." },
      { en: "Where is the bus station?", uz: "Автобус бекати қаерда?" },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "I want to travel to Bishkek.", uz: "Мен Бишкекка сафар қилмоқчиман." },
        { speaker: "Anvar", en: "You can go by bus or train.", uz: "Автобус ёки поездда бориш мумкин." },
        { speaker: "Malika", en: "How long is the journey by bus?", uz: "Автобусда сафар қанча давом этади?" },
        { speaker: "Anvar", en: "It takes about three hours.", uz: "Тахминан уч соат вақт олади." },
        { speaker: "Malika", en: "I will buy a ticket now.", uz: "Мен ҳозир чипта сотиб оламан." },
        { speaker: "Anvar", en: "Have a nice journey!", uz: "Сафарингиз хайрли бўлсин!" },
      ],
    },
    homeworkPrompt:
      "Сафар ва транспорт ҳақида 9-10 та гап ёзинг: қандай транспортда юрасиз, қаерга сафар қилишни хоҳлайсиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 14,
    icon: "⏰",
    titleUz: "Вақт ва сана",
    titleEn: "Time & Calendar",
    vocabulary: [
      { en: "today", uz: "бугун", emoji: "📅", mnemonic: "«тудей» — бугун «ту»(сен) учун янги кун." },
      { en: "tomorrow", uz: "эртага", emoji: "🌅", mnemonic: "«тумороу» — эртага «ту мор»(яна кўпроқ) вақт бор." },
      { en: "yesterday", uz: "кеча", emoji: "🌙", mnemonic: "«естедей» — кеча «ест»(ейилган) вақт ортда қолди." },
      { en: "week", uz: "ҳафта", emoji: "🗓️", mnemonic: "«вик» — ҳафта «вики»(рўйхат)да етти кун бор." },
      { en: "month", uz: "ой", emoji: "📆", mnemonic: "«манс» — ой «манс»(муддат) билан ўлчанади." },
      { en: "year", uz: "йил", emoji: "🎊", mnemonic: "«йиа» — йил «йил»(ushbu so'z) охирида байрам бор." },
      { en: "o'clock", uz: "соат", emoji: "🕐", mnemonic: "«оклок» — соат «клок»(соат)ка қараб билинади." },
      { en: "birthday", uz: "туғилган кун", emoji: "🎂", mnemonic: "«бёрздей» — туғилган кунда «бёрз»(туг)илган кунингиз нишонланади." },
    ],
    phrases: [
      { en: "What time is it now?", uz: "Ҳозир соат неча?" },
      { en: "It is three o'clock.", uz: "Соат уч." },
      { en: "My birthday is in May.", uz: "Менинг туғилган кунim майда." },
      { en: "See you tomorrow!", uz: "Эртага кўришгунча!" },
      { en: "Today is Monday.", uz: "Бугун душанба." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What time is it now?", uz: "Ҳозир соат неча?" },
        { speaker: "Malika", en: "It is four o'clock.", uz: "Соат тўрт." },
        { speaker: "Anvar", en: "When is your birthday?", uz: "Туғилган кунинг қачон?" },
        { speaker: "Malika", en: "My birthday is in July. When is yours?", uz: "Туғилган куним июлда. Сеники-чи?" },
        { speaker: "Anvar", en: "Mine is in March.", uz: "Меники мартда." },
        { speaker: "Malika", en: "Let's celebrate together next year!", uz: "Келгуси йил биргаликда нишонлайлик!" },
      ],
    },
    homeworkPrompt:
      "Вақт ва сана ҳақида 9-10 та гап ёзинг: бугун қайси кун, туғилган кунингиз қачон, соат нечада уйғонасиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 15,
    icon: "😊",
    titleUz: "Ҳис-туйғулар",
    titleEn: "Emotions & Feelings",
    vocabulary: [
      { en: "happy", uz: "хурсанд", emoji: "😄", mnemonic: "«хэппи» — хурсандликда «хэй!» деб қичқирасиз." },
      { en: "sad", uz: "хафа", emoji: "😢", mnemonic: "«сэд» — хафаликда «сет»(ўтирган) бўлиб қоласиз." },
      { en: "angry", uz: "жаҳли чиққан", emoji: "😠", mnemonic: "«энгри» — жаҳл «энерги»(куч) билан чиқади." },
      { en: "scared", uz: "қўрққан", emoji: "😨", mnemonic: "«скеад» — қўрқувда «скрим»(қичқириқ) чиқасиз." },
      { en: "excited", uz: "хаяжонланган", emoji: "🤩", mnemonic: "«эксайтед» — хаяжонда «экс»(жуда) фаол бўласиз." },
      { en: "surprised", uz: "ҳайрон", emoji: "😲", mnemonic: "«сапрайзд» — ҳайронликда «сюрприз» кутмагансиз." },
      { en: "calm", uz: "хотиржам", emoji: "😌", mnemonic: "«калм» — хотиржамликда «калм»(тинч) ўтирасиз." },
      { en: "feel", uz: "ҳис қилмоқ", emoji: "💭", mnemonic: "«фил» — ҳис қилганда юрагингиз «фил»(тўлиб) кетади." },
    ],
    phrases: [
      { en: "I feel very happy today.", uz: "Бугун ўзимни жуда хурсанд ҳис қиляпман." },
      { en: "Why are you sad?", uz: "Нега хафасиз?" },
      { en: "Don't be scared.", uz: "Қўрқманг." },
      { en: "I am so excited!", uz: "Мен жуда хаяжонландим!" },
      { en: "She looks surprised.", uz: "У ҳайрон кўринади." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Why do you look sad, Anvar?", uz: "Нега хафа кўринасан, Анвар?" },
        { speaker: "Anvar", en: "I miss my family. But now I feel better.", uz: "Оиламни соғиндим. Лекин ҳозир ўзимни яхши ҳис қиляпман." },
        { speaker: "Malika", en: "Don't be sad, I am your friend!", uz: "Хафа бўлма, мен сенинг дўстингман!" },
        { speaker: "Anvar", en: "Thank you, that makes me happy.", uz: "Раҳмат, бу мени хурсанд қилди." },
        { speaker: "Malika", en: "I am excited about our trip tomorrow!", uz: "Мен эртанги сафаримиздан хаяжонландим!" },
        { speaker: "Anvar", en: "Me too! I feel great now.", uz: "Мен ҳам! Ҳозир ўзимни жуда яхши ҳис қиляпман." },
      ],
    },
    homeworkPrompt:
      "Ҳис-туйғуларингиз ҳақида 9-10 та гап ёзинг: қачон хурсанд бўласиз, қачон хафа бўласиз, ҳозир ўзингизни қандай ҳис қиляпсиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  // ============================================================
  // PART 3 — lessons 16-25: begins the A1 -> A2 grammar progression
  // (there is/are, "can", Past Simple, "going to" future, comparatives)
  // woven into everyday topics, on the road to the app's A1->C1 /
  // 150-lesson roadmap. Same object shape as Parts 1-2.
  // ============================================================

  {
    id: 16,
    icon: "🐾",
    titleUz: "Ҳайвонлар",
    titleEn: "Animals",
    vocabulary: [
      { en: "dog", uz: "ит", emoji: "🐶", mnemonic: "«дог» — ит «дог»лаб (изма-из) эргашади." },
      { en: "cat", uz: "мушук", emoji: "🐱", mnemonic: "«кэт» — мушук «кэт»так (қути) ичида ухлайди." },
      { en: "bird", uz: "қуш", emoji: "🐦", mnemonic: "«бёрд» — қуш «бир» жойдан «бир» жойга учади." },
      { en: "fish", uz: "балиқ", emoji: "🐟", mnemonic: "«фиш» — балиқ сувда «фыш-фыш» сузади." },
      { en: "horse", uz: "от", emoji: "🐴", mnemonic: "«хос» — от «хос» (тезкор) ҳайвон." },
      { en: "cow", uz: "сигир", emoji: "🐄", mnemonic: "«кау» — сигир «моо» эмас, «кау» деб маърайди инглизчада." },
      { en: "elephant", uz: "фил", emoji: "🐘", mnemonic: "«элефант» — фил «элефант» каби улкан." },
      { en: "lion", uz: "шер", emoji: "🦁", mnemonic: "«лайон» — шер «лайон»гача (арслон) кучли." },
    ],
    phrases: [
      { en: "There is a cat in the garden.", uz: "Боғда мушук бор." },
      { en: "I have a dog at home.", uz: "Уйимда итим бор." },
      { en: "Look at that bird!", uz: "Анави қушга қара!" },
      { en: "Elephants are very big.", uz: "Филлар жуда катта." },
      { en: "Do you like animals?", uz: "Ҳайвонларни ёқтирасизми?" },
    ],
    dialogue: {
      speakers: ["Anvar", "Muhammad"],
      lines: [
        { speaker: "Anvar", en: "Do you have any pets?", uz: "Сизда уй ҳайвони борми?" },
        { speaker: "Muhammad", en: "Yes, I have a dog and a cat.", uz: "Ҳа, менда ит ва мушук бор." },
        { speaker: "Anvar", en: "I have a bird. What is your dog's name?", uz: "Менда қуш бор. Итингизнинг исми нима?" },
        { speaker: "Muhammad", en: "His name is Rex. He is very friendly.", uz: "Унинг исми Рекс. У жуда дўстона." },
        { speaker: "Anvar", en: "I want a horse one day!", uz: "Мен қачондир от олишни хоҳлайман!" },
        { speaker: "Muhammad", en: "Me too! Horses are beautiful animals.", uz: "Мен ҳам! Отлар гўзал ҳайвонлар." },
      ],
    },
    homeworkPrompt:
      "Ҳайвонлар ҳақида 9-10 та гап ёзинг: қандай ҳайвонларни ёқтирасиз, уйингизда ҳайвон борми. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 17,
    icon: "🏠",
    titleUz: "Уйда",
    titleEn: "At Home",
    vocabulary: [
      { en: "room", uz: "хона", emoji: "🚪", mnemonic: "«рум» — хонада «рум»ча (кичик) буюмлар бор." },
      { en: "kitchen", uz: "ошхона", emoji: "🍳", mnemonic: "«китчен» — ошхонада «кич»ик товалар бор." },
      { en: "bedroom", uz: "ётоқхона", emoji: "🛏️", mnemonic: "«бедрум» — ётоқхонада «бед» (каравот) бор." },
      { en: "table", uz: "стол", emoji: "🪑", mnemonic: "«тейбл» — стол устида «тейбл»клот (дастурхон) ёзилади." },
      { en: "chair", uz: "стул", emoji: "🪑", mnemonic: "«чеа» — стулда «чей»нaб (чайнаб) овқат ейсиз." },
      { en: "bed", uz: "каравот", emoji: "🛌", mnemonic: "«бед» — каравотда «бед» (ёмон эмас, яхши) ухлайсиз." },
      { en: "window", uz: "дераза", emoji: "🪟", mnemonic: "«виндоу» — дераза «винд» (шамол)ни киритади." },
      { en: "door", uz: "эшик", emoji: "🚪", mnemonic: "«до» — эшикдан «до»имо кириб-чиқасиз." },
    ],
    phrases: [
      { en: "My bedroom is upstairs.", uz: "Менинг ётоқхонам юқорида." },
      { en: "The table is in the kitchen.", uz: "Стол ошхонада." },
      { en: "There is a chair near the window.", uz: "Дераза ёнида стул бор." },
      { en: "Please close the door.", uz: "Илтимос эшикни ёпинг." },
      { en: "How many rooms are in your house?", uz: "Уйингизда неча хона бор?" },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "How many rooms are in your house?", uz: "Уйингизда неча хона бор?" },
        { speaker: "Anvar", en: "We have four rooms: a kitchen, a living room, and two bedrooms.", uz: "Бизда тўртта хона бор: ошхона, меҳмонхона ва иккита ётоқхона." },
        { speaker: "Malika", en: "Is your bedroom big?", uz: "Ётоқхонангиз каттами?" },
        { speaker: "Anvar", en: "Yes, it has a bed, a table, and a big window.", uz: "Ҳа, унда каравот, стол ва катта дераза бор." },
        { speaker: "Malika", en: "I like your house!", uz: "Уйингиз ёқди!" },
        { speaker: "Anvar", en: "Thank you! Come and visit us sometime.", uz: "Раҳмат! Қачондир бизникига келинг." },
      ],
    },
    homeworkPrompt:
      "Уйингиз ҳақида 9-10 та гап ёзинг: неча хона бор, қайси хонада нима бор. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 18,
    icon: "👷",
    titleUz: "Касблар",
    titleEn: "Jobs & Professions",
    vocabulary: [
      { en: "doctor", uz: "шифокор", emoji: "👨‍⚕️", mnemonic: "«доктор» — шифокор «доктор»лик билими билан даволайди." },
      { en: "teacher", uz: "ўқитувчи", emoji: "🧑‍🏫", mnemonic: "«тичер» — ўқитувчи «тич»(ўргатади)." },
      { en: "engineer", uz: "муҳандис", emoji: "👷", mnemonic: "«инжинир» — муҳандис «инженер»лик ишлари билан шуғулланади." },
      { en: "driver", uz: "ҳайдовчи", emoji: "🚕", mnemonic: "«драйвер» — ҳайдовчи «драйв» (ҳайдаш) қилади." },
      { en: "farmer", uz: "деҳқон", emoji: "🌾", mnemonic: "«фамер» — деҳқон «фарм»(экин)да ишлайди." },
      { en: "police officer", uz: "полиция ходими", emoji: "👮", mnemonic: "«полис офисер» — полиция «полис»(шаҳар)ни қўриқлайди." },
      { en: "cook", uz: "ошпаз", emoji: "👨‍🍳", mnemonic: "«кук» — ошпаз «кук»(пиширади) овқатни." },
      { en: "job", uz: "касб", emoji: "💼", mnemonic: "«жоб» — касб «жой» (иш жойи)да бажарилади." },
    ],
    phrases: [
      { en: "What is your job?", uz: "Касбингиз нима?" },
      { en: "I am a teacher.", uz: "Мен ўқитувчиман." },
      { en: "My father is an engineer.", uz: "Отам муҳандис." },
      { en: "She wants to be a doctor.", uz: "У шифокор бўлишни хоҳлайди." },
      { en: "What do you want to be?", uz: "Сиз ким бўлишни хоҳлайсиз?" },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What does your mother do?", uz: "Онангиз ким бўлиб ишлайди?" },
        { speaker: "Malika", en: "She is a doctor. What about your father?", uz: "У шифокор. Отангиз-чи?" },
        { speaker: "Anvar", en: "My father is an engineer.", uz: "Отам муҳандис." },
        { speaker: "Malika", en: "What do you want to be in the future?", uz: "Келажакда ким бўлишни хоҳлайсиз?" },
        { speaker: "Anvar", en: "I want to be a teacher. And you?", uz: "Мен ўқитувчи бўлишни хоҳлайман. Сиз-чи?" },
        { speaker: "Malika", en: "I want to be a doctor, like my mother.", uz: "Мен онам каби шифокор бўлишни хоҳлайман." },
      ],
    },
    homeworkPrompt:
      "Касблар ҳақида 9-10 та гап ёзинг: ота-онангиз ким бўлиб ишлайди, сиз ким бўлишни хоҳлайсиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 19,
    icon: "🌐",
    titleUz: "Мамлакат ва миллат",
    titleEn: "Countries & Nationalities",
    vocabulary: [
      { en: "country", uz: "мамлакат", emoji: "🗺️", mnemonic: "«кантри» — мамлакат «кантри»(қишлоқ)лардан иборат." },
      { en: "nationality", uz: "миллат", emoji: "🏳️", mnemonic: "«нэшенэлити» — миллат «нэйшн» (халқ) деганидан келади." },
      { en: "language", uz: "тил", emoji: "🗣️", mnemonic: "«лэнгвиж» — тил «ланг»(узун) сўзлардан иборат." },
      { en: "flag", uz: "байроқ", emoji: "🚩", mnemonic: "«флэг» — байроқ «флаг»шток(устун)да ҳилпирайди." },
      { en: "Kyrgyz", uz: "қирғиз", emoji: "🇰🇬", mnemonic: "«кыргыз» — ўзбекчадагидек айтилади." },
      { en: "Uzbek", uz: "ўзбек", emoji: "🇺🇿", mnemonic: "«узбек» — ўзбекчадагидек айтилади." },
      { en: "foreign", uz: "хорижий", emoji: "✈️", mnemonic: "«форин» — хорижий «фор»(узоқ)дан келади." },
      { en: "world", uz: "дунё", emoji: "🌍", mnemonic: "«ворлд» — дунё «ворл»(айланувчи) шар шаклида." },
    ],
    phrases: [
      { en: "I am Uzbek. I am from Uzbekistan.", uz: "Мен ўзбекман. Мен Ўзбекистонданман." },
      { en: "What nationality are you?", uz: "Сиз қайси миллатдансиз?" },
      { en: "He speaks three languages.", uz: "У уч тилда гаплашади." },
      { en: "Kyrgyzstan is a beautiful country.", uz: "Қирғизистон гўзал мамлакат." },
      { en: "I want to visit other countries.", uz: "Мен бошқа мамлакатларга боришни хоҳлайман." },
    ],
    dialogue: {
      speakers: ["Muhammad", "Anvar"],
      lines: [
        { speaker: "Muhammad", en: "What nationality are you, Anvar?", uz: "Сиз қайси миллатдансиз, Анвар?" },
        { speaker: "Anvar", en: "I am Uzbek, but I live in Kyrgyzstan.", uz: "Мен ўзбекман, лекин Қирғизистонда яшайман." },
        { speaker: "Muhammad", en: "That's interesting! Do you speak Kyrgyz?", uz: "Қизиқ экан! Қирғизча гаплаша оласизми?" },
        { speaker: "Anvar", en: "Yes, I speak Uzbek, Kyrgyz, and a little English.", uz: "Ҳа, мен ўзбекча, қирғизча ва озгина инглизча гаплашаман." },
        { speaker: "Muhammad", en: "Wow, three languages! I only speak two.", uz: "Вой, уч тил! Мен фақат иккита тилда гаплашаман." },
        { speaker: "Anvar", en: "You can learn more with practice!", uz: "Машқ қилсангиз, кўпроқ ўрганишингиз мумкин!" },
      ],
    },
    homeworkPrompt:
      "Мамлакатингиз ва миллатингиз ҳақида 9-10 та гап ёзинг: қаерликсиз, қайси тилларда гаплашасиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 20,
    icon: "🏆",
    titleUz: "Спорт мусобақалари",
    titleEn: "Sports & Competitions",
    vocabulary: [
      { en: "can", uz: "...(қила) олади", emoji: "💪", mnemonic: "«кэн» — «кан»иат (қобилият)ни билдиради." },
      { en: "win", uz: "ютмоқ", emoji: "🏅", mnemonic: "«вин» — ютганда «вин»нер (ғолиб) бўласиз." },
      { en: "lose", uz: "ютқазмоқ", emoji: "😔", mnemonic: "«луз» — ютқазганда «луз»(йўқотиш) сезасиз." },
      { en: "team", uz: "жамоа", emoji: "🤼", mnemonic: "«тим» — жамоа «тим»(гуруҳ) бўлиб ўйнайди." },
      { en: "match", uz: "мусобақа", emoji: "⚽", mnemonic: "«мэтч» — мусобақада икки жамоа «мэтч»(мос) келади." },
      { en: "run", uz: "югурмоқ", emoji: "🏃", mnemonic: "«ран» — югурганда «ран»г-баранг кийимда бўласиз." },
      { en: "jump", uz: "сакрамоқ", emoji: "🤸", mnemonic: "«жамп» — сакраганда «жамп»лаб юқорига учасиз." },
      { en: "strong", uz: "кучли", emoji: "💪", mnemonic: "«стронг» — кучли «стронг»(мустаҳкам) мушакка эга." },
    ],
    phrases: [
      { en: "I can play football well.", uz: "Мен футболни яхши ўйнай оламан." },
      { en: "Can you swim?", uz: "Сиз суза оласизми?" },
      { en: "Our team won the match!", uz: "Бизнинг жамоамиз ўйинда ютди!" },
      { en: "He can run very fast.", uz: "У жуда тез югура олади." },
      { en: "I can't jump very high.", uz: "Мен баланд сакрай олмайман." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "Can you play basketball?", uz: "Баскетбол ўйнай оласизми?" },
        { speaker: "Malika", en: "Yes, I can! I play every weekend.", uz: "Ҳа, ўйнай оламан! Ҳар дам олиш куни ўйнайман." },
        { speaker: "Anvar", en: "That's great! Our team won the last match.", uz: "Ажойиб! Бизнинг жамоамиз охирги ўйинда ютди." },
        { speaker: "Malika", en: "Congratulations! Can you swim too?", uz: "Табриклайман! Суза ҳам оласизми?" },
        { speaker: "Anvar", en: "No, I can't swim well. Can you teach me?", uz: "Йўқ, мен яхши сузолмайман. Менга ўргата оласизми?" },
        { speaker: "Malika", en: "Of course! Let's practice together.", uz: "Албатта! Биргаликда машқ қилайлик." },
      ],
    },
    homeworkPrompt:
      "Спорт ҳақида 9-10 та гап ёзинг: нима қила оласиз (can), нима қила олмайсиз, севимли спортингиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 21,
    icon: "📅",
    titleUz: "Кеча нима қилдим",
    titleEn: "Yesterday",
    vocabulary: [
      { en: "yesterday", uz: "кеча", emoji: "🌙", mnemonic: "«естедей» — кеча «ест»(ейилган) вақт ортда." },
      { en: "played", uz: "ўйнади", emoji: "⚽", mnemonic: "«плейд» — ўйнаган пайт «плей»(play)дан келади." },
      { en: "watched", uz: "томоша қилди", emoji: "📺", mnemonic: "«вочд» — томоша қилганда «вотч»(соат)дай кўзингиз тикилади." },
      { en: "visited", uz: "ташриф буюрди", emoji: "🚪", mnemonic: "«визитед» — ташриф «визит»(зиёрат)дан келади." },
      { en: "cooked", uz: "пиширди", emoji: "🍲", mnemonic: "«кукт» — пиширганда «кук»(ошпаз) бўласиз." },
      { en: "cleaned", uz: "тозалади", emoji: "🧹", mnemonic: "«клинд» — тозаланганда «клин»(тоза) бўлади." },
      { en: "walked", uz: "юрди", emoji: "🚶", mnemonic: "«вокт» — юрганда «вок»(қадам) ташлайсиз." },
      { en: "finished", uz: "тугатди", emoji: "✅", mnemonic: "«финишт» — тугатганда «финиш»(марра)га етасиз." },
    ],
    phrases: [
      { en: "I played football yesterday.", uz: "Мен кеча футбол ўйнадим." },
      { en: "She watched a movie last night.", uz: "У кеча кечаси кино кўрди." },
      { en: "We visited our grandmother.", uz: "Биз бувимизникига бордик." },
      { en: "He cleaned his room.", uz: "У хонасини тозалади." },
      { en: "Did you finish your homework?", uz: "Уй вазифангизни тугатдингизми?" },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "What did you do yesterday?", uz: "Кеча нима қилдингиз?" },
        { speaker: "Anvar", en: "I played football with my friends. And you?", uz: "Дўстларим билан футбол ўйнадим. Сиз-чи?" },
        { speaker: "Malika", en: "I visited my grandmother and cooked with her.", uz: "Бувимникига бордим ва у билан овқат пиширдим." },
        { speaker: "Anvar", en: "That sounds nice! Did you finish your homework?", uz: "Яхши экан! Уй вазифангизни тугатдингизми?" },
        { speaker: "Malika", en: "Yes, I finished it in the evening.", uz: "Ҳа, кечқурун тугатдим." },
        { speaker: "Anvar", en: "Great job!", uz: "Ажойиб!" },
      ],
    },
    homeworkPrompt:
      "Кеча нима қилганингиз ҳақида 9-10 та гап ёзинг (ўтган замонда): қаерга бордингиз, нима қилдингиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 22,
    icon: "🗓️",
    titleUz: "Эртанги режалар",
    titleEn: "Tomorrow's Plans",
    vocabulary: [
      { en: "tomorrow", uz: "эртага", emoji: "🌅", mnemonic: "«тумороу» — эртага «ту мор»(яна кўпроқ) вақт бор." },
      { en: "plan", uz: "режа", emoji: "📝", mnemonic: "«плэн» — режа «план»(тартиб)ли бўлади." },
      { en: "going to", uz: "...(қил)моқчи", emoji: "➡️", mnemonic: "«гоуинг ту» — «гоу»(бормоқ)дан келади, режани билдиради." },
      { en: "weekend", uz: "дам олиш куни", emoji: "🎉", mnemonic: "«викенд» — «вик»(ҳафта) охирида дам оласиз." },
      { en: "party", uz: "зиёфат", emoji: "🎊", mnemonic: "«парти» — зиёфатда «парти»(гуруҳ) одамлар йиғилади." },
      { en: "trip", uz: "саёҳат", emoji: "🧳", mnemonic: "«трип» — саёҳатда «трип»(қадам)лаб юрасиз." },
      { en: "meet", uz: "учрашмоқ", emoji: "🤝", mnemonic: "«мит» — учрашганда «мит»(гўшт эмас, вохўрlash) қиласиз." },
      { en: "prepare", uz: "тайёрланмоқ", emoji: "📚", mnemonic: "«припеа» — тайёрланганда «при»(олдиндан) ҳаракат қиласиз." },
    ],
    phrases: [
      { en: "I am going to visit my friend tomorrow.", uz: "Мен эртага дўстимникига боришни режалаштиряпман." },
      { en: "We are going to have a party.", uz: "Биз зиёфат ўтказмоқчимиз." },
      { en: "What are you going to do this weekend?", uz: "Дам олиш кунлари нима қилмоқчисиз?" },
      { en: "She is going to travel next month.", uz: "У келгуси ойда сафар қилмоқчи." },
      { en: "I am going to prepare for the exam.", uz: "Мен имтиҳонга тайёрланмоқчиман." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What are you going to do this weekend?", uz: "Дам олиш кунлари нима қилмоқчисиз?" },
        { speaker: "Malika", en: "I am going to visit my cousin. What about you?", uz: "Мен амакивачаммникига боришни режалаштиряпман. Сиз-чи?" },
        { speaker: "Anvar", en: "I am going to prepare for my English test.", uz: "Мен инглиз тили тестига тайёрланмоқчиман." },
        { speaker: "Malika", en: "Good luck! Are we going to meet on Monday?", uz: "Омад! Душанба куни учрашамизми?" },
        { speaker: "Anvar", en: "Yes, let's meet after school.", uz: "Ҳа, мактабдан кейин учрашайлик." },
        { speaker: "Malika", en: "Perfect, see you then!", uz: "Аъло, кўришгунча!" },
      ],
    },
    homeworkPrompt:
      "Эртанги ёки дам олиш кунидаги режаларингиз ҳақида 9-10 та гап ёзинг ('going to' қолипидан фойдаланинг). Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 23,
    icon: "⚖️",
    titleUz: "Таққослаш",
    titleEn: "Comparisons",
    vocabulary: [
      { en: "big", uz: "катта", emoji: "🐘", mnemonic: "«биг» — катта нарса «биг» деб аталади." },
      { en: "bigger", uz: "каттароқ", emoji: "📈", mnemonic: "«биггер» — «биг»+«ер» қўшимчаси каттароқни билдиради." },
      { en: "small", uz: "кичик", emoji: "🐜", mnemonic: "«смол» — кичик нарса «смол» деб аталади." },
      { en: "tall", uz: "баланд", emoji: "🏢", mnemonic: "«толл» — баланд бино «толл» деб аталади." },
      { en: "taller", uz: "баландроқ", emoji: "📏", mnemonic: "«толлер» — «толл»+«ер» баландроқни билдиради." },
      { en: "fast", uz: "тез", emoji: "🚀", mnemonic: "«фаст» — тез нарса «фаст» деб аталади." },
      { en: "faster", uz: "тезроқ", emoji: "🏎️", mnemonic: "«фастер» — «фаст»+«ер» тезроқни билдиради." },
      { en: "the best", uz: "энг яхши", emoji: "🥇", mnemonic: "«зе бест» — энг яхшиси «бест» деб аталади." },
    ],
    phrases: [
      { en: "This house is bigger than that one.", uz: "Бу уй ундан каттароқ." },
      { en: "He is taller than me.", uz: "У мендан баландроқ." },
      { en: "This car is faster than mine.", uz: "Бу машина меникидан тезроқ." },
      { en: "She is the best student in our class.", uz: "У синфимиздаги энг яхши ўқувчи." },
      { en: "Which one is smaller?", uz: "Қайсиси кичикроқ?" },
    ],
    dialogue: {
      speakers: ["Muhammad", "Anvar"],
      lines: [
        { speaker: "Muhammad", en: "Your bag is bigger than mine.", uz: "Сумкангиз меникидан каттароқ." },
        { speaker: "Anvar", en: "Yes, but yours is nicer!", uz: "Ҳа, лекин сизники чиройлироқ!" },
        { speaker: "Muhammad", en: "Who is the tallest in your family?", uz: "Оилангизда ким энг баланди?" },
        { speaker: "Anvar", en: "My father is the tallest. I am taller than my sister.", uz: "Отам энг баланди. Мен синглимдан баландроқман." },
        { speaker: "Muhammad", en: "I think Malika is the best student in our class.", uz: "Менимча, Малика синфимиздаги энг яхши ўқувчи." },
        { speaker: "Anvar", en: "I agree, she always studies hard.", uz: "Розиман, у доим қаттиқ ўқийди." },
      ],
    },
    homeworkPrompt:
      "Таққослаш ҳақида 9-10 та гап ёзинг: оилангиздаги/дўстларингиздаги баланд-паст, катта-кичик каби таққослашларни ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 24,
    icon: "📱",
    titleUz: "Технология ва алоқа",
    titleEn: "Technology & Communication",
    vocabulary: [
      { en: "phone", uz: "телефон", emoji: "📱", mnemonic: "«фоун» — телефонда «фон» (овоз) эшитилади." },
      { en: "computer", uz: "компьютер", emoji: "💻", mnemonic: "«компьютер» — ўзбекчадагидек айтилади." },
      { en: "internet", uz: "интернет", emoji: "🌐", mnemonic: "«интернет» — ўзбекчадагидек айтилади." },
      { en: "message", uz: "хабар", emoji: "💬", mnemonic: "«месиж» — хабар «мессенжер»да юборилади." },
      { en: "call", uz: "қўнғироқ қилмоқ", emoji: "📞", mnemonic: "«кол» — қўнғироқ қилганда «кол»(чақирасиз)." },
      { en: "video", uz: "видео", emoji: "🎥", mnemonic: "«видио» — ўзбекчадагидек айтилади." },
      { en: "camera", uz: "камера", emoji: "📷", mnemonic: "«камера» — ўзбекчадагидек айтилади." },
      { en: "app", uz: "илова", emoji: "📲", mnemonic: "«эп» — иловани «эп»(осон) ишлатасиз." },
    ],
    phrases: [
      { en: "I use my phone every day.", uz: "Мен телефонимдан ҳар куни фойдаланаман." },
      { en: "Can you send me a message?", uz: "Менга хабар юбора оласизми?" },
      { en: "Let's make a video call.", uz: "Видео қўнғироқ қилайлик." },
      { en: "This app is very useful.", uz: "Бу илова жуда фойдали." },
      { en: "I don't have internet at home.", uz: "Уйимда интернет йўқ." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Do you have a smartphone?", uz: "Сизда смартфон борми?" },
        { speaker: "Anvar", en: "Yes, I use it to study English.", uz: "Ҳа, мен ундан инглиз тилини ўрганиш учун фойдаланаман." },
        { speaker: "Malika", en: "Me too! I use the Zam-Zam EDU app every day.", uz: "Мен ҳам! Мен ҳар куни Zam-Zam EDU иловасидан фойдаланаман." },
        { speaker: "Anvar", en: "Can you send me the link?", uz: "Менга линкни юбора оласизми?" },
        { speaker: "Malika", en: "Sure, I will send you a message now.", uz: "Албатта, ҳозир сизга хабар юбораман." },
        { speaker: "Anvar", en: "Thank you! Technology makes learning easier.", uz: "Раҳмат! Технология ўрганишни осонлаштиради." },
      ],
    },
    homeworkPrompt:
      "Технология ҳақида 9-10 та гап ёзинг: телефон/компьютерни қандай ишлатасиз, қайси иловаларни ёқтирасиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 25,
    icon: "🏔️",
    titleUz: "Ватаним",
    titleEn: "My Country, Kyrgyzstan",
    vocabulary: [
      { en: "mountain", uz: "тоғ", emoji: "⛰️", mnemonic: "«маунтин» — тоғ «маунт»(миниб) чиқилади." },
      { en: "lake", uz: "кўл", emoji: "🏞️", mnemonic: "«лейк» — кўл «лейк»сайд(қирғоғи)да дам оласиз." },
      { en: "capital", uz: "пойтахт", emoji: "🏛️", mnemonic: "«капитал» — пойтахт «капитал»(бош) шаҳар." },
      { en: "beautiful", uz: "гўзал", emoji: "🌸", mnemonic: "«бьютифул» — гўзал «бьюти»(гўзаллик)дан келади." },
      { en: "nature", uz: "табиат", emoji: "🌳", mnemonic: "«нейча» — табиат «нейча»рал (табиий) ҳолда бўлади." },
      { en: "culture", uz: "маданият", emoji: "🎭", mnemonic: "«калча» — маданият «культ»(қадрият)дан келади." },
      { en: "tradition", uz: "анъана", emoji: "🎎", mnemonic: "«традишн» — анъана «трэйд»(ўтказилиб келинган)дан келади." },
      { en: "proud", uz: "фахрланувчи", emoji: "🦚", mnemonic: "«прауд» — фахрланганда «прауд»(мағрур) юрасиз." },
    ],
    phrases: [
      { en: "Kyrgyzstan has beautiful mountains.", uz: "Қирғизистонда гўзал тоғлар бор." },
      { en: "Bishkek is the capital city.", uz: "Бишкек пойтахт шаҳар." },
      { en: "I am proud of my country.", uz: "Мен ватаним билан фахрланаман." },
      { en: "Issyk-Kul is a famous lake.", uz: "Иссиқкўл машҳур кўл." },
      { en: "We have rich traditions.", uz: "Бизда бой анъаналар бор." },
    ],
    dialogue: {
      speakers: ["Anvar", "Muhammad"],
      lines: [
        { speaker: "Anvar", en: "Have you been to Issyk-Kul?", uz: "Иссиқкўлга борганмисиз?" },
        { speaker: "Muhammad", en: "Yes! It is a beautiful lake with big mountains around it.", uz: "Ҳа! У атрофида катта тоғлари бор гўзал кўл." },
        { speaker: "Anvar", en: "I love the nature of Kyrgyzstan.", uz: "Мен Қирғизистон табиатини яхши кўраман." },
        { speaker: "Muhammad", en: "Me too. Bishkek is a nice capital city.", uz: "Мен ҳам. Бишкек яхши пойтахт шаҳар." },
        { speaker: "Anvar", en: "I am proud of our traditions and culture.", uz: "Мен анъаналаримиз ва маданиятимиз билан фахрланаман." },
        { speaker: "Muhammad", en: "We are lucky to live in such a beautiful country!", uz: "Биз шундай гўзал мамлакатда яшагани бахтлимиз!" },
      ],
    },
    homeworkPrompt:
      "Ватанингиз ҳақида 9-10 та гап ёзинг: қандай гўзал жойлар бор, нимаси билан фахрланасиз. Ҳар бир қаторга битта гап ёзинг.",
  },
];

export function getLesson(lessonId) {
  return LESSONS.find((l) => l.id === Number(lessonId));
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Build a randomized multiple-choice quiz from one lesson's vocabulary and
 * key phrases: an Uzbek word/phrase is shown, the student picks the
 * matching English one from 4 shuffled options.
 */
export function generateLessonQuiz(lesson) {
  const vocabQuestions = shuffle(lesson.vocabulary).map((item) => {
    const distractors = shuffle(lesson.vocabulary.filter((v) => v.en !== item.en)).slice(0, 3);
    return {
      kind: "vocab",
      prompt: item.uz,
      correctAnswer: item.en,
      options: shuffle([item.en, ...distractors.map((d) => d.en)]),
    };
  });

  const phraseQuestions = shuffle(lesson.phrases).map((item) => {
    const distractors = shuffle(lesson.phrases.filter((p) => p.en !== item.en)).slice(0, 3);
    return {
      kind: "phrase",
      prompt: item.uz,
      correctAnswer: item.en,
      options: shuffle([item.en, ...distractors.map((d) => d.en)]),
    };
  });

  return shuffle([...vocabQuestions, ...phraseQuestions]);
}
