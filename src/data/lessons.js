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
