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

  // ============================================================
  // PART 4 — lessons 26-38: continues the A1 -> A2 progression with new
  // everyday domains (classroom, cooking, seasons, holidays, quantities,
  // transport) plus adverbs of frequency and Present Continuous.
  // ============================================================

  {
    id: 26,
    icon: "🏫",
    titleUz: "Синфда",
    titleEn: "In the Classroom",
    vocabulary: [
      { en: "open", uz: "очмоқ", emoji: "📖", mnemonic: "«оупен» — китобни «оупен» (оч) деб буюрадилар." },
      { en: "close", uz: "ёпмоқ", emoji: "📕", mnemonic: "«клоуз» — эшикни «клоуз» (ёп) деб буюрадилар." },
      { en: "listen", uz: "тингламоқ", emoji: "👂", mnemonic: "«лисен» — «лист»(рўйхат)ни тинглаб ёзасиз." },
      { en: "repeat", uz: "такрорламоқ", emoji: "🔁", mnemonic: "«рипит» — «рипит»иция(такрор) сўзидан келади." },
      { en: "write", uz: "ёзмоқ", emoji: "✍️", mnemonic: "«райт» — ёзганда қўлингиз «райт» (ўнг) томонга силжийди." },
      { en: "pencil", uz: "қалам", emoji: "✏️", mnemonic: "«пенсил» — қалам билан «пенс»(чизиқ) чизасиз." },
      { en: "notebook", uz: "дафтар", emoji: "📓", mnemonic: "«ноутбук» — дафтарга «ноут»(эслатма) ёзасиз." },
      { en: "quiet", uz: "жим", emoji: "🤫", mnemonic: "«квайет» — жим бўлганда «квай»(секин) овоз чиқасиз." },
    ],
    phrases: [
      { en: "Open your book, please.", uz: "Китобингизни очинг, илтимос." },
      { en: "Listen and repeat.", uz: "Тингланг ва такрорланг." },
      { en: "Can I borrow your pencil?", uz: "Қаламингизни олсам майлими?" },
      { en: "Write your name here.", uz: "Исмингизни шу ерга ёзинг." },
      { en: "Please be quiet.", uz: "Илтимос жим бўлинг." },
    ],
    dialogue: {
      speakers: ["Teacher", "Anvar"],
      lines: [
        { speaker: "Teacher", en: "Open your books to page ten.", uz: "Китобларингизни ўнинчи бетга очинг." },
        { speaker: "Anvar", en: "Excuse me, I don't have a pencil.", uz: "Кечирасиз, менда қалам йўқ." },
        { speaker: "Malika", en: "Here, you can borrow mine.", uz: "Мана, меникини олсангиз бўлади." },
        { speaker: "Anvar", en: "Thank you!", uz: "Раҳмат!" },
        { speaker: "Teacher", en: "Now, listen and repeat after me.", uz: "Энди тингланг ва мендан кейин такрорланг." },
        { speaker: "Anvar", en: "Okay, we are ready!", uz: "Хўп, биз тайёрмиз!" },
      ],
    },
    homeworkPrompt:
      "Синфдаги буюмлар ва топшириқлар ҳақида 9-10 та гап ёзинг: ўқитувчингиз нима деб буюради, синфда нима бор. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 27,
    icon: "🍲",
    titleUz: "Овқат тайёрлаш",
    titleEn: "Cooking & Recipes",
    vocabulary: [
      { en: "cut", uz: "кесмоқ", emoji: "🔪", mnemonic: "«кат» — кесганда «кат»так товуш чиқади." },
      { en: "mix", uz: "аралаштирмоқ", emoji: "🥣", mnemonic: "«микс» — аралаштирганда «микс»(қоришма) ҳосил бўлади." },
      { en: "add", uz: "қўшмоқ", emoji: "➕", mnemonic: "«эд» — қўшганда «эд»(қўшимча) бўлади." },
      { en: "boil", uz: "қайнатмоқ", emoji: "🍳", mnemonic: "«бойл» — сув қайнаганда «бойл»(пуфак)лар чиқади." },
      { en: "recipe", uz: "рецепт", emoji: "📋", mnemonic: "«рэсипи» — рецепт «рэсепи»(тартиб)дан иборат." },
      { en: "salt", uz: "туз", emoji: "🧂", mnemonic: "«солт» — туз «солт»(шўр) таъм беради." },
      { en: "sugar", uz: "шакар", emoji: "🍬", mnemonic: "«шугар» — шакар «шугар»(ширин) таъм беради." },
      { en: "pan", uz: "тава", emoji: "🍳", mnemonic: "«пэн» — тавада «пэн»(чарс) овоз чиқади." },
    ],
    phrases: [
      { en: "First, cut the vegetables.", uz: "Аввал сабзавотларни кесинг." },
      { en: "Add some salt and sugar.", uz: "Бироз туз ва шакар қўшинг." },
      { en: "Mix it well.", uz: "Яхшилаб аралаштиринг." },
      { en: "Boil the water first.", uz: "Аввал сувни қайнатинг." },
      { en: "This is my favorite recipe.", uz: "Бу менинг севимли рецептим." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "What are you cooking?", uz: "Нима пиширяпсиз?" },
        { speaker: "Anvar", en: "I am making soup. First, I cut the vegetables.", uz: "Мен шўрва қиляпман. Аввал сабзавотларни кесяпман." },
        { speaker: "Malika", en: "Do you add salt?", uz: "Туз қўшасизми?" },
        { speaker: "Anvar", en: "Yes, and a little sugar too. Then I boil it.", uz: "Ҳа, озгина шакар ҳам. Кейин қайнатаман." },
        { speaker: "Malika", en: "Can I help you mix it?", uz: "Аралаштиришда ёрдам бера оламанми?" },
        { speaker: "Anvar", en: "Sure! Thank you for your help.", uz: "Албатта! Ёрдамингиз учун раҳмат." },
      ],
    },
    homeworkPrompt:
      "Овқат тайёрлаш ҳақида 9-10 та гап ёзинг: севимли таомингизни қандай тайёрлайсиз (cut, mix, add сўзларидан фойдаланинг). Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 28,
    icon: "🍂",
    titleUz: "Йил фасллари",
    titleEn: "Seasons",
    vocabulary: [
      { en: "spring", uz: "баҳор", emoji: "🌷", mnemonic: "«спринг» — баҳорда табиат «спринг»(сакраб) уйғонади." },
      { en: "summer", uz: "ёз", emoji: "☀️", mnemonic: "«самер» — ёзда «сам»(қуёш) иссиқ бўлади." },
      { en: "autumn", uz: "куз", emoji: "🍁", mnemonic: "«отом» — кузда барглар «отом»(тушади)." },
      { en: "winter", uz: "қиш", emoji: "❄️", mnemonic: "«винтер» — қишда «винт»(шамол) совуқ эсади." },
      { en: "season", uz: "фасл", emoji: "🗓️", mnemonic: "«сизн» — тўртта фасл «сизн»(мавсум)ни ташкил қилади." },
      { en: "leaves", uz: "барглар", emoji: "🍃", mnemonic: "«ливз» — барглар «лив»(қолиш)ни тарк этади кузда." },
      { en: "snowfall", uz: "қор ёғиши", emoji: "🌨️", mnemonic: "«сноуфол» — қор «сноу»(қор) «фол»(тушиши)дан иборат." },
      { en: "flower", uz: "гул", emoji: "🌸", mnemonic: "«флауэр» — гул «флауэр»(гулзор)да очилади." },
    ],
    phrases: [
      { en: "I like spring because flowers bloom.", uz: "Мен баҳорни ёқтираман, чунки гуллар очилади." },
      { en: "It snows a lot in winter.", uz: "Қишда кўп қор ёғади." },
      { en: "Leaves fall in autumn.", uz: "Кузда барглар тўкилади." },
      { en: "Summer is very hot here.", uz: "Бу ерда ёз жуда иссиқ." },
      { en: "Which season do you like best?", uz: "Қайси фаслни энг кўп ёқтирасиз?" },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "Which season do you like best, Malika?", uz: "Қайси фаслни энг кўп ёқтирасиз, Малика?" },
        { speaker: "Malika", en: "I like spring because flowers bloom everywhere.", uz: "Баҳорни ёқтираман, чунки ҳамма жойда гуллар очилади." },
        { speaker: "Anvar", en: "I prefer winter. I love the snowfall.", uz: "Мен қишни афзал кўраман. Қор ёғишини яхши кўраман." },
        { speaker: "Malika", en: "Really? I don't like the cold much.", uz: "Ростданми? Мен совуқни унча ёқтирмайман." },
        { speaker: "Anvar", en: "What about autumn?", uz: "Куз-чи?" },
        { speaker: "Malika", en: "Autumn is nice too, when the leaves change color.", uz: "Куз ҳам яхши, барглар ранг ўзгартирганда." },
      ],
    },
    homeworkPrompt:
      "Йил фасллари ҳақида 9-10 та гап ёзинг: қайси фаслни ёқтирасиз, ҳар фаслда об-ҳаво қандай. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 29,
    icon: "🎉",
    titleUz: "Байрамлар",
    titleEn: "Holidays & Celebrations",
    vocabulary: [
      { en: "holiday", uz: "байрам", emoji: "🎊", mnemonic: "«холидей» — байрамда «холи»(бўш кун)дан фойдаланасиз." },
      { en: "celebrate", uz: "нишонламоқ", emoji: "🥳", mnemonic: "«селебрейт» — нишонлаганда «селебрити»(машҳур) каби ажралиб турасиз." },
      { en: "gift", uz: "совға", emoji: "🎁", mnemonic: "«гифт» — совға «гифт»(қобилият) каби қадрли." },
      { en: "guest", uz: "меҳмон", emoji: "🚪", mnemonic: "«гест» — меҳмон «гест»(зиёфат)га келади." },
      { en: "Navruz", uz: "Наврўз", emoji: "🌱", mnemonic: "«наврўз» — ўзбекчадагидек айтилади." },
      { en: "New Year", uz: "Янги йил", emoji: "🎄", mnemonic: "«нью йиа» — «нью»(янги) сўзидан келади." },
      { en: "festival", uz: "фестиваль", emoji: "🎪", mnemonic: "«фестивал» — ўзбекчадагидек айтилади." },
      { en: "special", uz: "алоҳида", emoji: "⭐", mnemonic: "«спешл» — алоҳида кун «спешл»(махсус) бўлади." },
    ],
    phrases: [
      { en: "We celebrate Navruz in March.", uz: "Биз Наврўзни мартда нишонлаймиз." },
      { en: "I give gifts to my family.", uz: "Мен оилам аъзоларига совғалар бераман." },
      { en: "We invite guests to our home.", uz: "Биз уйимизга меҳмонлар таклиф қиламиз." },
      { en: "Happy New Year!", uz: "Янги йилингиз билан!" },
      { en: "This holiday is very special.", uz: "Бу байрам жуда алоҳида." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Do you celebrate Navruz?", uz: "Наврўзни нишонлайсизми?" },
        { speaker: "Anvar", en: "Yes! We cook special food and invite guests.", uz: "Ҳа! Биз алоҳида таом пиширамиз ва меҳмон чақирамиз." },
        { speaker: "Malika", en: "What do you do on New Year?", uz: "Янги йилда нима қиласиз?" },
        { speaker: "Anvar", en: "We decorate our house and give gifts.", uz: "Уйимизни безаймиз ва совғалар берамиз." },
        { speaker: "Malika", en: "That sounds fun! My favorite holiday is Navruz too.", uz: "Қизиқ экан! Менинг севимли байрамим ҳам Наврўз." },
        { speaker: "Anvar", en: "Happy holidays to your family!", uz: "Оилангизга байрам муборак!" },
      ],
    },
    homeworkPrompt:
      "Байрамлар ҳақида 9-10 та гап ёзинг: қайси байрамларни нишонлайсиз, оилангиз билан нима қиласиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 30,
    icon: "🛒",
    titleUz: "Миқдорлар ва харид рўйхати",
    titleEn: "Quantities & Shopping List",
    vocabulary: [
      { en: "some", uz: "бироз", emoji: "🥖", mnemonic: "«сам» — бироз «сам»(кичик миқдор)ни билдиради." },
      { en: "a lot of", uz: "кўп", emoji: "📦", mnemonic: "«э лот оф» — «лот»(катта миқдор)дан келади." },
      { en: "a little", uz: "озгина", emoji: "🤏", mnemonic: "«э литл» — «литл»(кичкина)дан келади." },
      { en: "how much", uz: "қанча (нарх)", emoji: "💰", mnemonic: "«хау мач» — нархни сўраганда ишлатилади." },
      { en: "how many", uz: "нечта", emoji: "🔢", mnemonic: "«хау мени» — сонни сўраганда ишлатилади." },
      { en: "kilogram", uz: "килограмм", emoji: "⚖️", mnemonic: "«килограм» — ўзбекчадагидек айтилади." },
      { en: "list", uz: "рўйхат", emoji: "📝", mnemonic: "«лист» — рўйхат «лист»(қоғоз)га ёзилади." },
      { en: "need", uz: "керак бўлмоқ", emoji: "❗", mnemonic: "«нид» — керакли нарса «нид»(эҳтиёж)дан келади." },
    ],
    phrases: [
      { en: "I need some bread and milk.", uz: "Менга бироз нон ва сут керак." },
      { en: "How much does this cost?", uz: "Бу қанча туради?" },
      { en: "How many apples do you want?", uz: "Нечта олма хоҳлайсиз?" },
      { en: "I have a little money.", uz: "Менда озгина пул бор." },
      { en: "We need a lot of vegetables.", uz: "Бизга кўп сабзавот керак." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "I am making a shopping list. What do we need?", uz: "Мен харид рўйхати тузяпман. Бизга нима керак?" },
        { speaker: "Malika", en: "We need some bread, milk, and a kilogram of apples.", uz: "Бизга бироз нон, сут ва бир килограмм олма керак." },
        { speaker: "Anvar", en: "How much money do we have?", uz: "Бизда қанча пул бор?" },
        { speaker: "Malika", en: "We have a little, but it should be enough.", uz: "Бизда озгина бор, лекин етарли бўлиши керак." },
        { speaker: "Anvar", en: "Great, let's go to the shop.", uz: "Аъло, дўконга борайлик." },
        { speaker: "Malika", en: "How many eggs do we need too?", uz: "Нечта тухум ҳам керак бизга?" },
      ],
    },
    homeworkPrompt:
      "Харид рўйхати ҳақида 9-10 та гап ёзинг: нима сотиб олишингиз керак, қанча/нечта керак. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 31,
    icon: "🚌",
    titleUz: "Жамоат транспорти",
    titleEn: "Public Transport",
    vocabulary: [
      { en: "bus stop", uz: "автобус бекати", emoji: "🚏", mnemonic: "«бас стоп» — автобус «стоп»(тўхтайдиган) жой." },
      { en: "timetable", uz: "жадвал", emoji: "🕐", mnemonic: "«таймтейбл» — «тайм»(вақт) жадвали." },
      { en: "ticket", uz: "чипта", emoji: "🎫", mnemonic: "«тикит» — чипта «тик»(тез) сотиб олинади." },
      { en: "fare", uz: "йўл ҳақи", emoji: "💵", mnemonic: "«феа» — йўл ҳақи «фэа»(адолатли) миқдорда." },
      { en: "seat", uz: "ўриндиқ", emoji: "💺", mnemonic: "«сит» — ўриндиққа «сит»(ўтирасиз)." },
      { en: "get on", uz: "минмоқ", emoji: "🚶‍♂️", mnemonic: "«гет он» — автобусга «он»(устига) минасиз." },
      { en: "get off", uz: "тушмоқ", emoji: "🚶", mnemonic: "«гет офф» — автобусдан «офф»(пастга) тушасиз." },
      { en: "crowded", uz: "гавжум", emoji: "👥", mnemonic: "«краудед» — гавжум жойда «крауд»(тўда) бор." },
    ],
    phrases: [
      { en: "Where is the nearest bus stop?", uz: "Энг яқин автобус бекати қаерда?" },
      { en: "What time does the bus arrive?", uz: "Автобус соат нечада келади?" },
      { en: "I need to get off here.", uz: "Мен шу ерда тушишим керак." },
      { en: "The bus is very crowded today.", uz: "Бугун автобус жуда гавжум." },
      { en: "How much is the fare?", uz: "Йўл ҳақи қанча?" },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Where is the nearest bus stop?", uz: "Энг яқин автобус бекати қаерда?" },
        { speaker: "Anvar", en: "It's just around the corner.", uz: "У бурчакнинг ортида." },
        { speaker: "Malika", en: "What time does the bus arrive?", uz: "Автобус соат нечада келади?" },
        { speaker: "Anvar", en: "It comes every fifteen minutes.", uz: "У ҳар ўн беш дақиқада келади." },
        { speaker: "Malika", en: "The bus is very crowded today!", uz: "Бугун автобус жуда гавжум!" },
        { speaker: "Anvar", en: "Yes, let's find a seat quickly.", uz: "Ҳа, тезда ўриндиқ топайлик." },
      ],
    },
    homeworkPrompt:
      "Жамоат транспорти ҳақида 9-10 та гап ёзинг: қандай транспортда мактабга борасиз, бекатда қанча кутасиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 32,
    icon: "🔄",
    titleUz: "Ҳар доим, баъзан, ҳеч қачон",
    titleEn: "Adverbs of Frequency",
    vocabulary: [
      { en: "always", uz: "ҳар доим", emoji: "🔁", mnemonic: "«олвейз» — «ол»(ҳамма) вақт деганидан келади." },
      { en: "usually", uz: "одатда", emoji: "📆", mnemonic: "«южуали» — «южуал»(одатий)дан келади." },
      { en: "sometimes", uz: "баъзан", emoji: "🕓", mnemonic: "«самтаймз» — «сам»(баъзи) вақтларда." },
      { en: "never", uz: "ҳеч қачон", emoji: "🚫", mnemonic: "«невер» — «нев»(ҳеч)дан келади." },
      { en: "often", uz: "тез-тез", emoji: "🔂", mnemonic: "«офтен» — «офт»(кўп марта)дан келади." },
      { en: "rarely", uz: "кам ҳолда", emoji: "🌙", mnemonic: "«реали» — «рэа»(кам)дан келади." },
      { en: "routine", uz: "тартиб", emoji: "📋", mnemonic: "«рутин» — «рут»(йўл)дан такрорланувчи тартиб." },
      { en: "habit", uz: "одат", emoji: "🔂", mnemonic: "«хабит» — «хабит»уал(одатий)дан келади." },
    ],
    phrases: [
      { en: "I always brush my teeth.", uz: "Мен ҳар доим тишимни ювaman." },
      { en: "She usually wakes up early.", uz: "У одатда эрта уйғонади." },
      { en: "We sometimes watch movies together.", uz: "Биз баъзан бирга кино кўрамиз." },
      { en: "He never eats breakfast.", uz: "У ҳеч қачон нонушта қилмайди." },
      { en: "I often read books before bed.", uz: "Мен ётишдан олдин тез-тез китоб ўqiyman." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "Do you always do your homework right after school?", uz: "Сиз ҳар доим мактабдан кейин уй вазифангизни қиласизми?" },
        { speaker: "Malika", en: "Usually, yes. Sometimes I play first.", uz: "Одатда, ҳа. Баъзан аввал ўйнайман." },
        { speaker: "Anvar", en: "I never study right after school. I need a break!", uz: "Мен мактабдан кейин ҳеч қачон ўqиmайман. Менга дам керак!" },
        { speaker: "Malika", en: "I understand. Do you often read books?", uz: "Тушунарли. Сиз тез-тез китоб ўqiysizmi?" },
        { speaker: "Anvar", en: "Yes, I often read before bed.", uz: "Ҳа, мен ётишдан олдин тез-тез ўqiyman." },
        { speaker: "Malika", en: "That's a great habit!", uz: "Бу ажойиб одат!" },
      ],
    },
    homeworkPrompt:
      "Кундалик одатларингиз ҳақида 9-10 та гап ёзинг (always/usually/sometimes/never сўзларидан фойдаланинг). Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 33,
    icon: "⏳",
    titleUz: "Ҳозир нима қиляпман",
    titleEn: "Present Continuous",
    vocabulary: [
      { en: "now", uz: "ҳозир", emoji: "⏰", mnemonic: "«нау» — «нау»(айнан шу пайт)дан келади." },
      { en: "doing", uz: "қилаётган", emoji: "🔄", mnemonic: "«дуинг» — «ду»(қилмоқ)+«инг»дан ясалади." },
      { en: "playing", uz: "ўйнаётган", emoji: "🎮", mnemonic: "«плейинг» — «плей»(ўйнамоқ)+«инг»дан ясалади." },
      { en: "reading", uz: "ўқиётган", emoji: "📖", mnemonic: "«ридинг» — «рид»(ўqiмоқ)+«инг»дан ясалади." },
      { en: "writing", uz: "ёзаётган", emoji: "✍️", mnemonic: "«райтинг» — «райт»(ёзмоқ)+«инг»дан ясалади." },
      { en: "eating", uz: "еётган", emoji: "🍽️", mnemonic: "«итинг» — «ит»(емоқ)+«инг»дан ясалади." },
      { en: "sleeping", uz: "ухлаётган", emoji: "😴", mnemonic: "«слипинг» — «слип»(ухламоқ)+«инг»дан ясалади." },
      { en: "right now", uz: "худди ҳозир", emoji: "⏱️", mnemonic: "«райт нау» — «райт»(айнан)+«нау»(ҳозир)дан келади." },
    ],
    phrases: [
      { en: "I am reading a book now.", uz: "Мен ҳозир китоб ўqiyapman." },
      { en: "She is playing football right now.", uz: "У ҳозир футбол ўйнаяпти." },
      { en: "What are you doing?", uz: "Нима қиляпсиз?" },
      { en: "They are eating lunch.", uz: "Улар тушлик қиляпти." },
      { en: "He is sleeping now.", uz: "У ҳозир ухлаяпти." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Hi Anvar, what are you doing right now?", uz: "Салом Анвар, ҳозир нима қиляпсиз?" },
        { speaker: "Anvar", en: "I am reading my English book. What about you?", uz: "Мен инглиз тили китобимни ўqiyapman. Сиз-чи?" },
        { speaker: "Malika", en: "I am writing my homework.", uz: "Мен уй вазифамни ёзяпман." },
        { speaker: "Anvar", en: "Is your sister playing outside?", uz: "Синглингиз ташqarida ўйнаяптими?" },
        { speaker: "Malika", en: "No, she is sleeping right now.", uz: "Йўq, у ҳозир ухлаяпти." },
        { speaker: "Anvar", en: "Okay, talk to you later!", uz: "Хўп, кейинроқ гаплашамиз!" },
      ],
    },
    homeworkPrompt:
      "Ҳозир нима қилаётганингиз ва оила аъзоларингиз нима қилаётгани ҳақида 9-10 та гап ёзинг (is/am/are + ...ing қолипидан фойдаланинг). Ҳар бир қаторга битта гап ёзинг.",
  },

  // ============================================================
  // PART 5 — lessons 34-50: neighborhood, social language (invitations,
  // suggestions, permission, opinions), possessions, descriptive
  // adjectives, dates/months, and a culminating review lesson.
  // ============================================================

  {
    id: 34,
    icon: "🏥",
    titleUz: "Шифокорда",
    titleEn: "At the Doctor's",
    vocabulary: [
      { en: "symptom", uz: "касаллик белгиси", emoji: "🤒", mnemonic: "«симптом» — ўзбекчадагидек айтилади." },
      { en: "fever", uz: "иситма", emoji: "🌡️", mnemonic: "«фивер» — иситмада тана «фив»(қиздиради)." },
      { en: "cough", uz: "йўтал", emoji: "😷", mnemonic: "«коф» — йўталганда «коф-коф» товуш чиқади." },
      { en: "appointment", uz: "қабул (вақти)", emoji: "📅", mnemonic: "«эпойнтмент» — «эпойнт»(белгилаш)дан келади." },
      { en: "prescription", uz: "дори рецепти", emoji: "💊", mnemonic: "«прискрипшн» — «прискрайб»(тавсия)дан келади." },
      { en: "rest", uz: "дам олмоқ", emoji: "🛌", mnemonic: "«рест» — дам олганда «рест»(тинчланасиз)." },
      { en: "better", uz: "яхшироқ", emoji: "😊", mnemonic: "«бетер» — «бет»(яхши)+«ер»дан ясалади." },
      { en: "sick", uz: "касал", emoji: "🤢", mnemonic: "«сик» — касал бўлганда «сиқ»иласиз." },
    ],
    phrases: [
      { en: "I have a fever and a cough.", uz: "Менда иситма ва йўтал бор." },
      { en: "I need to make an appointment.", uz: "Менга қабулга ёзилиш керак." },
      { en: "The doctor gave me a prescription.", uz: "Шифокор менга рецепт берди." },
      { en: "You need to rest.", uz: "Сизга дам олиш керак." },
      { en: "I feel better now.", uz: "Ҳозир ўзимни яхшироқ ҳис қиляпман." },
    ],
    dialogue: {
      speakers: ["Anvar", "Doctor"],
      lines: [
        { speaker: "Anvar", en: "I don't feel well. I have a fever and a cough.", uz: "Ўзимни яхши ҳис қилмаяпман. Менда иситма ва йўтал бор." },
        { speaker: "Malika", en: "You should make an appointment with the doctor.", uz: "Сиз шифокорга қабулга ёзилишингиз керак." },
        { speaker: "Doctor", en: "What are your symptoms?", uz: "Касаллик белгиларингиз қандай?" },
        { speaker: "Anvar", en: "I have a fever and a cough.", uz: "Менда иситма ва йўтал бор." },
        { speaker: "Doctor", en: "Take this medicine and rest at home.", uz: "Бу дорини ичинг ва уйда дам олинг." },
        { speaker: "Anvar", en: "Thank you, doctor. I hope I feel better soon.", uz: "Раҳмат, шифокор. Тезда яхши бўлиб қолишимга умид қиляпман." },
      ],
    },
    homeworkPrompt:
      "Шифокорга бориш ҳақида 9-10 та гап ёзинг: қандай белгилар бўлганда шифокорга борасиз, шифокор нима дейди. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 35,
    icon: "🏘️",
    titleUz: "Маҳаллам",
    titleEn: "My Neighborhood",
    vocabulary: [
      { en: "neighborhood", uz: "маҳалла", emoji: "🏘️", mnemonic: "«нейборхуд» — «нейбор»(қўшни)лар яшайдиган жой." },
      { en: "neighbor", uz: "қўшни", emoji: "🧑‍🤝‍🧑", mnemonic: "«нейбор» — «ниа»(яқин)да яшайдиган одам." },
      { en: "park", uz: "парк", emoji: "🌳", mnemonic: "«парк» — ўзбекчадагидек айтилади." },
      { en: "mosque", uz: "масжид", emoji: "🕌", mnemonic: "«моск» — ўзбекчадаги «масжид»га яқин." },
      { en: "shop", uz: "дўкон", emoji: "🏪", mnemonic: "«шоп» — дўконга «шоп-шоп» юриб борасиз." },
      { en: "street", uz: "кўча", emoji: "🛣️", mnemonic: "«стрит» — кўчада «стрим»(оқим)дай одамлар юради." },
      { en: "nearby", uz: "яқин атрофда", emoji: "📍", mnemonic: "«ниабай» — «ниа»(яқин)дан келади." },
      { en: "quiet", uz: "тинч", emoji: "🤫", mnemonic: "«квайет» — тинч жойда «квай»(секин) овоз чиқади." },
    ],
    phrases: [
      { en: "My neighbor is very kind.", uz: "Қўшним жуда меҳрибон." },
      { en: "There is a park near my house.", uz: "Уйим яқинида парк бор." },
      { en: "I walk to the shop every day.", uz: "Мен ҳар куни дўконга пиёда бораман." },
      { en: "Our neighborhood is quiet.", uz: "Бизнинг маҳалламиз тинч." },
      { en: "What is your neighborhood like?", uz: "Сизнинг маҳаллангиз қандай?" },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "What is your neighborhood like, Anvar?", uz: "Маҳаллангиз қандай, Анвар?" },
        { speaker: "Anvar", en: "It's quiet and friendly. There is a park nearby.", uz: "У тинч ва дўстона. Яқин атрофда парк бор." },
        { speaker: "Malika", en: "Do you know your neighbors?", uz: "Қўшниларингизни биласизми?" },
        { speaker: "Anvar", en: "Yes, my neighbor helps us often. He is very kind.", uz: "Ҳа, қўшним бизга тез-тез ёрдам беради. У жуда меҳрибон." },
        { speaker: "Malika", en: "That's nice. I love my neighborhood too.", uz: "Яхши экан. Мен ҳам маҳалламни яхши кўраман." },
        { speaker: "Anvar", en: "Let's walk to the park together sometime!", uz: "Қачондир биргаликда паркка боринг!" },
      ],
    },
    homeworkPrompt:
      "Маҳаллангиз ҳақида 9-10 та гап ёзинг: атрофда нима бор, қўшниларингиз қандай. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 36,
    icon: "🎈",
    titleUz: "Зиёфат ва таклифнома",
    titleEn: "Party & Invitations",
    vocabulary: [
      { en: "invite", uz: "таклиф қилмоқ", emoji: "✉️", mnemonic: "«инвайт» — «инвайт»(чақирмоқ)дан келади." },
      { en: "invitation", uz: "таклифнома", emoji: "💌", mnemonic: "«инвитейшн» — «инвайт»(таклиф)дан ясалади." },
      { en: "birthday party", uz: "туғилган кун зиёфати", emoji: "🎂", mnemonic: "«бёрздей парти» — «бёрздей»(туғилган кун)+«парти»(зиёфат)." },
      { en: "come", uz: "келмоқ", emoji: "🚶", mnemonic: "«кам» — «кам»(келмоқ)дан айнан ўзи." },
      { en: "balloon", uz: "шар", emoji: "🎈", mnemonic: "«балун» — ўзбекчадагидек айтилади." },
      { en: "cake", uz: "торт", emoji: "🎂", mnemonic: "«кейк» — торт «кейк»(ширин) бўлади." },
      { en: "guest", uz: "меҳмон", emoji: "🧑‍🤝‍🧑", mnemonic: "«гест» — меҳмон «гест»(зиёфат)га келади." },
      { en: "game", uz: "ўйин", emoji: "🎮", mnemonic: "«гейм» — ўйинда «гей»(ғайрат) билан ютасиз." },
    ],
    phrases: [
      { en: "I would like to invite you to my party.", uz: "Сизни зиёфатимга таклиф қилмоқчиман." },
      { en: "Can you come to my birthday party?", uz: "Туғилган кун зиёфатимга кела оласизми?" },
      { en: "Thank you for the invitation.", uz: "Таклиф учун раҳмат." },
      { en: "We are going to have cake and balloons.", uz: "Бизда торт ва шарлар бўлади." },
      { en: "What time does the party start?", uz: "Зиёфат соат нечада бошланади?" },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "I would like to invite you to my birthday party.", uz: "Сизни туғилган кун зиёфатимга таклиф қилмоқчиман." },
        { speaker: "Malika", en: "Thank you! What time does it start?", uz: "Раҳмат! У соат нечада бошланади?" },
        { speaker: "Anvar", en: "It starts at five o'clock on Saturday.", uz: "У шанба куни соат бешда бошланади." },
        { speaker: "Malika", en: "I will come! Should I bring anything?", uz: "Мен келaman! Нимадир олиб келишим керакми?" },
        { speaker: "Anvar", en: "Just bring yourself! We will have cake and games.", uz: "Фақат ўзингиз келинг! Бизда торт ва ўйинлар бўлади." },
        { speaker: "Malika", en: "I can't wait!", uz: "Сабрсизлик билан кутяпман!" },
      ],
    },
    homeworkPrompt:
      "Зиёфат ва таклифнома ҳақида 9-10 та гап ёзинг: кимни туғилган кунингизга таклиф қиласиз, зиёфатда нима бўлади. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 37,
    icon: "💭",
    titleUz: "Мактаб фанлари ҳақида фикр",
    titleEn: "School Opinions",
    vocabulary: [
      { en: "because", uz: "чунки", emoji: "🔗", mnemonic: "«бикоз» — сабабни билдиради." },
      { en: "subject", uz: "фан", emoji: "📚", mnemonic: "«сабжект» — ҳар бир фан бир мавзу." },
      { en: "difficult", uz: "қийин", emoji: "😓", mnemonic: "«дификалт» — «дификалт»и (қийинчилик)дан келади." },
      { en: "easy", uz: "осон", emoji: "😌", mnemonic: "«изи» — осон нарса «изи» деб аталади." },
      { en: "interesting", uz: "қизиқарли", emoji: "🤩", mnemonic: "«интерестинг» — «интерест»(қизиқиш)дан келади." },
      { en: "boring", uz: "зерикарли", emoji: "😴", mnemonic: "«боринг» — «бор»(зерика)дан келади." },
      { en: "favorite", uz: "севимли", emoji: "❤️", mnemonic: "«фейворит» — «фейвор»(маъқуллаш)дан келади." },
      { en: "opinion", uz: "фикр", emoji: "💬", mnemonic: "«опинион» — «опинион»(қараш)дан келади." },
    ],
    phrases: [
      { en: "I like math because it is easy for me.", uz: "Мен математикани ёқтираман, чунки у мен учун осон." },
      { en: "English is interesting, not boring.", uz: "Инглиз тили қизиқарли, зерикарли эмас." },
      { en: "I don't like history because it is difficult.", uz: "Мен тарихни ёқтирмайман, чунки у қийин." },
      { en: "What is your opinion about this subject?", uz: "Бу фан ҳақида фикрингиз қандай?" },
      { en: "Science is my favorite subject.", uz: "Табиатшунослик менинг севимли фаним." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "What is your favorite subject, Anvar?", uz: "Севимли фанингиз нима, Анвар?" },
        { speaker: "Anvar", en: "I like English because it is interesting.", uz: "Мен инглиз тилини ёқтираман, чунки у қизиқарли." },
        { speaker: "Malika", en: "I think math is difficult, but I like it.", uz: "Менимча математика қийин, лекин мен уни ёqтираман." },
        { speaker: "Anvar", en: "Why do you like a difficult subject?", uz: "Нега қийин фанни ёқтирасиз?" },
        { speaker: "Malika", en: "Because it makes me think! What about boring subjects?", uz: "Чунки у мени ўйлантиради! Зерикарли фанлар-чи?" },
        { speaker: "Anvar", en: "I find history a little boring, honestly.", uz: "Тўғрисини айтганда, тарих менга бироз зерикарли туюлади." },
      ],
    },
    homeworkPrompt:
      "Мактаб фанлари ҳақидаги фикрингизни 9-10 та гап билан ёзинг: қайси фанни нима учун ёқтирасиз/ёқтирмайсиз ('because' сўзидан фойдаланинг). Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 38,
    icon: "💡",
    titleUz: "Таклиф бермоқ",
    titleEn: "Making Suggestions",
    vocabulary: [
      { en: "suggestion", uz: "таклиф", emoji: "💡", mnemonic: "«сагжешн» — «сагжест»(таклиф қилмоқ)дан келади." },
      { en: "let's", uz: "келинг...", emoji: "🙌", mnemonic: "«летс» — «лет ас»(бизга рухсат бер)дан қисқарган." },
      { en: "why don't we", uz: "нега биз...қилмаймиз", emoji: "🤔", mnemonic: "«вай донт ви» — таклиф беришда ишлатилади." },
      { en: "shall we", uz: "...қиламизми", emoji: "❓", mnemonic: "«шал ви» — таклиф сўраганда ишлатилади." },
      { en: "idea", uz: "ғоя", emoji: "💭", mnemonic: "«айдиа» — ўзбекчадаги «идея»га яқин." },
      { en: "sounds good", uz: "яхши эшитилади", emoji: "👍", mnemonic: "«саундз гуд» — «саунд»(товуш)+«гуд»(яхши)." },
      { en: "agree", uz: "рози бўлмоқ", emoji: "🤝", mnemonic: "«эгри» — «эгри»(рози)дан келади." },
      { en: "disagree", uz: "рози бўлмаслик", emoji: "🙅", mnemonic: "«дисэгри» — «дис»(эмас)+«эгри»(рози)." },
    ],
    phrases: [
      { en: "Let's go to the park.", uz: "Паркка борайлик." },
      { en: "Why don't we watch a movie?", uz: "Нега биз кино кўрмаймиз?" },
      { en: "Shall we start now?", uz: "Ҳозир бошлаймизми?" },
      { en: "That sounds like a good idea!", uz: "Бу яхши ғоя каби эшитилади!" },
      { en: "I agree with you.", uz: "Мен сиз билан розиман." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "Let's go to the park this weekend.", uz: "Шу дам олиш куни паркка борайлик." },
        { speaker: "Malika", en: "That sounds like a good idea! Why don't we invite Muhammad too?", uz: "Бу яхши ғоя каби эшитилади! Нега биз Муҳаммадни ҳам таклиф қилмаймиз?" },
        { speaker: "Anvar", en: "Great idea! Shall we call him now?", uz: "Ажойиб ғоя! Унга ҳозир қўнғироқ қиламизми?" },
        { speaker: "Malika", en: "Yes, let's call him.", uz: "Ҳа, унга қўнғироқ қилайлик." },
        { speaker: "Anvar", en: "I agree, the more the better!", uz: "Розиман, кўпроқ бўлса яхши!" },
        { speaker: "Malika", en: "Perfect, see you at the park!", uz: "Аъло, паркда кўришгунча!" },
      ],
    },
    homeworkPrompt:
      "Таклифлар ҳақида 9-10 та гап ёзинг: дўстларингизга нима таклиф қиласиз ('Let's', 'Why don't we', 'Shall we' қолипларидан фойдаланинг). Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 39,
    icon: "🙋",
    titleUz: "Рухсат сўраш",
    titleEn: "Asking Permission",
    vocabulary: [
      { en: "permission", uz: "рухсат", emoji: "✅", mnemonic: "«пермишн» — «пермит»(рухсат бермоқ)дан келади." },
      { en: "may", uz: "мумкинми", emoji: "❓", mnemonic: "«мей» — рухсат сўраганда ишлатилади." },
      { en: "allow", uz: "рухсат бермоқ", emoji: "👍", mnemonic: "«элоу» — «элоу»(имкон бермоқ)дан келади." },
      { en: "borrow", uz: "қарзга олмоқ", emoji: "🤲", mnemonic: "«бороу» — вақтинча олишни билдиради." },
      { en: "enter", uz: "кирмоқ", emoji: "🚪", mnemonic: "«энтер» — «энтранс»(кириш)дан келади." },
      { en: "leave", uz: "чиқиб кетмоқ", emoji: "🚶", mnemonic: "«лив» — «лив»(тарк этмоқ)дан айнан ўзи." },
      { en: "sure", uz: "албатта", emoji: "😊", mnemonic: "«шуа» — ишончли жавоб «шуа» дейилади." },
      { en: "sorry", uz: "кечирасиз", emoji: "🙏", mnemonic: "«сори» — кечирим сўраганда ишлатилади." },
    ],
    phrases: [
      { en: "May I come in?", uz: "Кирсам майлими?" },
      { en: "Can I borrow your book?", uz: "Китобингизни олсам майлими?" },
      { en: "May I leave the room?", uz: "Хонадан чиқсам майлими?" },
      { en: "Yes, of course you may.", uz: "Ҳа, албатта мумкин." },
      { en: "Sorry, you may not.", uz: "Кечирасиз, мумкин эмас." },
    ],
    dialogue: {
      speakers: ["Anvar", "Teacher"],
      lines: [
        { speaker: "Anvar", en: "May I come in, teacher?", uz: "Кирсам майлими, ўқитувчи?" },
        { speaker: "Teacher", en: "Yes, of course you may.", uz: "Ҳа, албатта мумкин." },
        { speaker: "Anvar", en: "Thank you. May I borrow a pencil too?", uz: "Раҳмат. Қалам ҳам олсам майлими?" },
        { speaker: "Malika", en: "Sure, here you are.", uz: "Албатта, мана." },
        { speaker: "Anvar", en: "May I leave early today? I have an appointment.", uz: "Бугун эрта кета оламанми? Менда қабул бор." },
        { speaker: "Teacher", en: "Yes, you may leave after the lesson.", uz: "Ҳа, дарсдан кейин кета оласиз." },
      ],
    },
    homeworkPrompt:
      "Рухсат сўраш ҳақида 9-10 та гап ёзинг ('May I...?' қолипидан фойдаланинг): нималар учун рухсат сўрайсиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 40,
    icon: "🎒",
    titleUz: "Шахсий буюмлар",
    titleEn: "Possessions",
    vocabulary: [
      { en: "mine", uz: "меники", emoji: "☝️", mnemonic: "«майн» — «май»(мен)+«н» шахсий эгалик." },
      { en: "yours", uz: "сизники", emoji: "👉", mnemonic: "«юаз» — «ю»(сиз)+«аз» шахсий эгалик." },
      { en: "his", uz: "уники (эркак)", emoji: "🧑", mnemonic: "«хиз» — «хи»(у эркак)+«з» эгалик." },
      { en: "hers", uz: "уники (аёл)", emoji: "👩", mnemonic: "«хёрз» — «хёр»(у аёл)+«з» эгалик." },
      { en: "whose", uz: "кимники", emoji: "❓", mnemonic: "«хуз» — эгасини сўраганда ишлатилади." },
      { en: "belong", uz: "тегишли бўлмоқ", emoji: "🔗", mnemonic: "«билонг» — «билонг»(тегишли)дан айнан ўзи." },
      { en: "own", uz: "ўзига тегишли", emoji: "🏠", mnemonic: "«оун» — «оун»(эгалик)дан айнан ўзи." },
      { en: "share", uz: "баҳам кўрмоқ", emoji: "🤝", mnemonic: "«шеа» — «шеа»(бўлиш)дан айнан ўзи." },
    ],
    phrases: [
      { en: "Is this pen yours or mine?", uz: "Бу ручка сизникими ёки меникими?" },
      { en: "Whose bag is this?", uz: "Бу кимнинг сумкаси?" },
      { en: "This book is hers, not his.", uz: "Бу китоб унинг (аёл), унинг (эркак) эмас." },
      { en: "We share our toys.", uz: "Биз ўйинчоқларимизни бирга ишлатамиз." },
      { en: "That backpack is mine.", uz: "Анави рюкзак меники." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Whose notebook is this?", uz: "Бу кимнинг дафтари?" },
        { speaker: "Anvar", en: "I think it's mine. Let me check... yes, it's mine!", uz: "Менимча, меники. Текшириб кўрай... ҳа, меники!" },
        { speaker: "Malika", en: "Is this pencil yours too?", uz: "Бу қалам ҳам сизникими?" },
        { speaker: "Anvar", en: "No, that one is hers — it belongs to my sister.", uz: "Йўқ, у уники — синглимга тегишли." },
        { speaker: "Malika", en: "We should be careful not to mix our things.", uz: "Биз буюмларимизни аралаштириб юбормаслик учун эҳтиёт бўлишимиз керак." },
        { speaker: "Anvar", en: "You're right, let's write our names on them.", uz: "Тўғри айтасиз, уларга исмимизни ёзайлик." },
      ],
    },
    homeworkPrompt:
      "Шахсий буюмларингиз ҳақида 9-10 та гап ёзинг (mine/yours/his/hers сўзларидан фойдаланинг). Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 41,
    icon: "🎬",
    titleUz: "Тасвирловчи сифатлар",
    titleEn: "Descriptive Adjectives",
    vocabulary: [
      { en: "exciting", uz: "ҳаяжонли", emoji: "🤩", mnemonic: "«эксайтинг» — «эксайт»(ҳаяжонлантирмоқ)дан келади." },
      { en: "dangerous", uz: "хавфли", emoji: "⚠️", mnemonic: "«дейнжерос» — «дейнжер»(хавф)дан келади." },
      { en: "safe", uz: "хавфсиз", emoji: "🛡️", mnemonic: "«сейф» — «сейф»(сейф қутидай ишончли)дан келади." },
      { en: "amazing", uz: "ажойиб", emoji: "🌟", mnemonic: "«эмейзинг» — «эмейз»(ҳайратда қолдирмоқ)дан келади." },
      { en: "interesting", uz: "қизиқарли", emoji: "🤔", mnemonic: "«интерестинг» — «интерест»(қизиқиш)дан келади." },
      { en: "boring", uz: "зерикарли", emoji: "😴", mnemonic: "«боринг» — «бор»(зерика)дан келади." },
      { en: "difficult", uz: "қийин", emoji: "😓", mnemonic: "«дификалт» — «дификалт»и (қийинчилик)дан келади." },
      { en: "easy", uz: "осон", emoji: "😌", mnemonic: "«изи» — осон нарса «изи» деб аталади." },
    ],
    phrases: [
      { en: "This movie is very exciting.", uz: "Бу фильм жуда ҳаяжонли." },
      { en: "That was an amazing trip!", uz: "Бу ажойиб сафар эди!" },
      { en: "Swimming in the sea can be dangerous.", uz: "Денгизда сузиш хавфли бўлиши мумкин." },
      { en: "This place is safe for children.", uz: "Бу жой болалар учун хавфсиз." },
      { en: "I think chemistry is fascinating.", uz: "Менимча кимё ажойиб." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "Did you watch the new movie?", uz: "Янги фильмни кўрдингизми?" },
        { speaker: "Malika", en: "Yes! It was so exciting and amazing.", uz: "Ҳа! У жуда ҳаяжонли ва ажойиб эди." },
        { speaker: "Anvar", en: "I heard it's a bit dangerous in some scenes.", uz: "Баъзи саҳналарда бироз хавфли деб эшитдим." },
        { speaker: "Malika", en: "Don't worry, it's completely safe to watch!", uz: "Хавотир олманг, уни томоша қилиш мутлақо хавфсиз!" },
        { speaker: "Anvar", en: "Haha, I meant the story, not for us!", uz: "Ҳа-ҳа, мен воqeaни назарда тутдим, бизга эмас!" },
        { speaker: "Malika", en: "Oh! Yes, some parts were quite intense.", uz: "Оҳ! Ҳа, баъзи қисмлари жуда кучли эди." },
      ],
    },
    homeworkPrompt:
      "Тасвирловчи сифатлардан фойдаланиб 9-10 та гап ёзинг: нима қизиқарли/зерикарли/хавфли деб ҳисоблайсиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 42,
    icon: "📆",
    titleUz: "Йил ойлари",
    titleEn: "Months of the Year",
    vocabulary: [
      { en: "month", uz: "ой", emoji: "🗓️", mnemonic: "«манс» — «манс»(муддат) билан ўлчанади." },
      { en: "January", uz: "январь", emoji: "❄️", mnemonic: "«жанюари» — ўзбекчадаги «январь»га яқин." },
      { en: "June", uz: "июнь", emoji: "☀️", mnemonic: "«жун» — ўзбекчадаги «июнь»га яқин." },
      { en: "September", uz: "сентябрь", emoji: "🍂", mnemonic: "«септембер» — ўзбекчадаги «сентябрь»га яқин." },
      { en: "December", uz: "декабрь", emoji: "🎄", mnemonic: "«десембер» — ўзбекчадаги «декабрь»га яқин." },
      { en: "calendar", uz: "тақвим", emoji: "📅", mnemonic: "«календар» — ўзбекчадагидек айтилади." },
      { en: "birthday", uz: "туғилган кун", emoji: "🎂", mnemonic: "«бёрздей» — «бёрз»(туғилиш)+«дей»(кун)." },
      { en: "school year", uz: "ўқув йили", emoji: "🏫", mnemonic: "«скул йиа» — «скул»(мактаб)+«йиа»(йил)." },
    ],
    phrases: [
      { en: "My birthday is in June.", uz: "Туғилган куним июнда." },
      { en: "School starts in September.", uz: "Мактаб сентябрда бошланади." },
      { en: "New Year is in January.", uz: "Янги йил январда." },
      { en: "Summer months are June, July, and August.", uz: "Ёз ойлари июн, июл ва августдир." },
      { en: "What month is it now?", uz: "Ҳозир қайси ой?" },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "What month is your birthday, Anvar?", uz: "Туғилган кунингиз қайси ой, Анвар?" },
        { speaker: "Anvar", en: "My birthday is in June. When is yours?", uz: "Туғилган куним июнда. Сизники-чи?" },
        { speaker: "Malika", en: "Mine is in December, close to New Year!", uz: "Меники декабрда, Янги йилга яқин!" },
        { speaker: "Anvar", en: "That's fun! School starts in September, right?", uz: "Қизиқ экан! Мактаб сентябрда бошланади-ку?" },
        { speaker: "Malika", en: "Yes, and it ends in May.", uz: "Ҳа, ва майда тугайди." },
        { speaker: "Anvar", en: "I love summer months the most.", uz: "Мен ёз ойларини энг кўп яхши кўраман." },
      ],
    },
    homeworkPrompt:
      "Ойлар ҳақида 9-10 та гап ёзинг: туғилган кунингиз қайси ойда, севимли ойингиз қайси. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 43,
    icon: "🔢",
    titleUz: "Тартиб сонлар ва саналар",
    titleEn: "Ordinal Numbers & Dates",
    vocabulary: [
      { en: "first", uz: "биринчи", emoji: "🥇", mnemonic: "«фёрст» — «фёрст»(биринчи)дан айнан ўзи." },
      { en: "second", uz: "иккинчи", emoji: "🥈", mnemonic: "«секонд» — «секонд»(иккинчи)дан айнан ўзи." },
      { en: "third", uz: "учинчи", emoji: "🥉", mnemonic: "«тхёрд» — «тхёрд»(учинчи)дан айнан ўзи." },
      { en: "fifth", uz: "бешинчи", emoji: "5️⃣", mnemonic: "«фифс» — «файв»(беш)+«тс» тартиб сон." },
      { en: "tenth", uz: "ўнинчи", emoji: "🔟", mnemonic: "«тенс» — «тен»(ўн)+«тс» тартиб сон." },
      { en: "date", uz: "сана", emoji: "📅", mnemonic: "«дейт» — сана «дейт»(белгиланган кун)дан келади." },
      { en: "birthday", uz: "туғилган кун", emoji: "🎂", mnemonic: "«бёрздей» — «бёрз»(туғилиш)+«дей»(кун)." },
      { en: "anniversary", uz: "юбилей", emoji: "🎉", mnemonic: "«энивёрсари» — «энюал»(йиллик)дан келади." },
    ],
    phrases: [
      { en: "Today is the first of May.", uz: "Бугун майнинг биринчиси." },
      { en: "My birthday is on the fifth of June.", uz: "Туғилган куним июннинг бешинчисида." },
      { en: "He came in second place.", uz: "У иккинчи ўринни олди." },
      { en: "This is our tenth lesson!", uz: "Бу бизнинг ўнинчи дарсимиз!" },
      { en: "What is the date today?", uz: "Бугун нечанчи сана?" },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What is the date today?", uz: "Бугун нечанчи сана?" },
        { speaker: "Malika", en: "It is the third of March.", uz: "Бугун мартнинг учинчиси." },
        { speaker: "Anvar", en: "My birthday is on the fifth of March!", uz: "Туғилган куним мартнинг бешинчисида!" },
        { speaker: "Malika", en: "Wow, that's so soon! Happy early birthday!", uz: "Вой, бу жуда яқин экан! Олдиндан туғилган кунингиз муборак!" },
        { speaker: "Anvar", en: "Thank you! This is also our lesson today.", uz: "Раҳмат! Бу бугунги дарсимиз ҳам." },
        { speaker: "Malika", en: "Amazing, we have learned so much already!", uz: "Ажойиб, биз аллақачон жуда кўп нарса ўрганиб бўлдик!" },
      ],
    },
    homeworkPrompt:
      "Тартиб сонлар ва саналар ҳақида 9-10 та гап ёзинг: туғилган кунингиз қайси сана, бугун нечанчи сана. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 44,
    icon: "🔷",
    titleUz: "Шакллар ва ранглар",
    titleEn: "Shapes & Colors",
    vocabulary: [
      { en: "circle", uz: "доира", emoji: "⭕", mnemonic: "«сёркл» — «сёркл»(айлана)дан айнан ўзи." },
      { en: "square", uz: "квадрат", emoji: "🟦", mnemonic: "«сквеа» — ўзбекчадаги «квадрат»га яқин." },
      { en: "triangle", uz: "учбурчак", emoji: "🔺", mnemonic: "«трайэнгл» — «трай»(уч)+«энгл»(бурчак)." },
      { en: "rectangle", uz: "тўғри тўртбурчак", emoji: "▬", mnemonic: "«ректэнгл» — «рект»(тўғри)+«энгл»(бурчак)." },
      { en: "shape", uz: "шакл", emoji: "🔶", mnemonic: "«шейп» — «шейп»(шакл)дан айнан ўзи." },
      { en: "round", uz: "юмалоқ", emoji: "🔴", mnemonic: "«раунд» — «раунд»(айлана)дан келади." },
      { en: "colorful", uz: "ранг-баранг", emoji: "🌈", mnemonic: "«калафул» — «калар»(ранг)+«фул»(тўла)." },
      { en: "pattern", uz: "нақш", emoji: "🎨", mnemonic: "«патерн» — «патерн»(нақш)дан айнан ўзи." },
    ],
    phrases: [
      { en: "The ball is round, like a circle.", uz: "Тўп доира каби юмалоқ." },
      { en: "This box is a square shape.", uz: "Бу қути квадрат шаклида." },
      { en: "I like colorful patterns.", uz: "Мен ранг-баранг нақшларни ёқтираман." },
      { en: "A triangle has three sides.", uz: "Учбурчакнинг уч томони бор." },
      { en: "What shape is this table?", uz: "Бу стол қандай шаклда?" },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "What shape is this kite, Anvar?", uz: "Бу варрак қандай шаклда, Анвар?" },
        { speaker: "Anvar", en: "It's a triangle shape. I love its colorful pattern.", uz: "У учбурчак шаклида. Унинг ранг-баранг нақшини яхши кўраман." },
        { speaker: "Malika", en: "My kite is a square shape.", uz: "Менинг варрагим квадрат шаклида." },
        { speaker: "Anvar", en: "Look, that ball is perfectly round, like a circle.", uz: "Қаранг, у тўп доира каби мукаммал юмалоқ." },
        { speaker: "Malika", en: "Yes! I love colorful, round things.", uz: "Ҳа! Мен ранг-баранг, юмалоқ нарсаларни яхши кўраман." },
        { speaker: "Anvar", en: "Let's fly our kites together!", uz: "Варракларимизни биргаликда учирайлик!" },
      ],
    },
    homeworkPrompt:
      "Шакллар ва ранглар ҳақида 9-10 та гап ёзинг: атрофингиздаги нарсалар қандай шаклда ва рангда. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 45,
    icon: "✈️",
    titleUz: "Аэропортда",
    titleEn: "At the Airport",
    vocabulary: [
      { en: "airport", uz: "аэропорт", emoji: "🛫", mnemonic: "«эапорт» — «эа»(ҳаво)+«порт»(порт)." },
      { en: "passport", uz: "паспорт", emoji: "🛂", mnemonic: "«паспорт» — ўзбекчадагидек айтилади." },
      { en: "luggage", uz: "юк (чамадон)", emoji: "🧳", mnemonic: "«лагиж» — «лагиж»(юк)дан айнан ўзи." },
      { en: "flight", uz: "парвоз", emoji: "🛩️", mnemonic: "«флайт» — «флай»(учмоқ)+«т» парвоз." },
      { en: "ticket", uz: "чипта", emoji: "🎫", mnemonic: "«тикит» — чипта «тик»(тез) сотиб олинади." },
      { en: "gate", uz: "дарвоза", emoji: "🚪", mnemonic: "«гейт» — «гейт»(дарвоза)дан айнан ўзи." },
      { en: "boarding", uz: "самолётга чиқиш", emoji: "🎫", mnemonic: "«бординг» — «борд»(миниш)+«инг»." },
      { en: "arrive", uz: "етиб келмоқ", emoji: "🛬", mnemonic: "«эрайв» — «эрайв»(етиб келмоқ)дан айнан ўзи." },
    ],
    phrases: [
      { en: "Where is the airport?", uz: "Аэропорт қаерда?" },
      { en: "I need to check my luggage.", uz: "Менга юкимни текширтиришим керак." },
      { en: "What time does the flight leave?", uz: "Парвоз соат нечада учади?" },
      { en: "Please show your passport.", uz: "Пасportingizni кўрсатинг, илтимос." },
      { en: "We arrived at the airport early.", uz: "Биз аэропортга эрта етиб келдик." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "Have you ever been to an airport?", uz: "Ҳеч аэропортда бўлganмисиз?" },
        { speaker: "Malika", en: "Yes! Last year, we checked our luggage and showed our passports.", uz: "Ҳа! Ўтган йили биз юкimizni текширтирдик ва паспортимизни кўрsatдик." },
        { speaker: "Anvar", en: "Was your flight long?", uz: "Парвозингиз узоқ давом этдими?" },
        { speaker: "Malika", en: "It was about two hours. We arrived safely.", uz: "У тахминан икки соат давом этди. Биз хавфсиз етиб келдик." },
        { speaker: "Anvar", en: "I want to travel by airplane someday.", uz: "Мен қачондир самолётда сафар қилишни хоҳлайман." },
        { speaker: "Malika", en: "You will love it! It's very exciting.", uz: "Сизга жуда ёқади! Бу жуда ҳаяжонли." },
      ],
    },
    homeworkPrompt:
      "Аэропорт ва сафар ҳақида 9-10 та гап ёзинг: самолётда учганмисиз, аэропортда нима бор. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 46,
    icon: "📞",
    titleUz: "Телефон орқали гаплашиш",
    titleEn: "Making a Phone Call",
    vocabulary: [
      { en: "phone call", uz: "телефон қўнғироғи", emoji: "📞", mnemonic: "«фоун кол» — «фоун»(телефон)+«кол»(қўнғироқ)." },
      { en: "speaking", uz: "гаплашяпти", emoji: "🗣️", mnemonic: "«спикинг» — «спик»(гапирмоқ)+«инг»." },
      { en: "hold on", uz: "кутинг", emoji: "⏳", mnemonic: "«холд он» — «холд»(ушлаб турмоқ)дан келади." },
      { en: "busy", uz: "банд", emoji: "🚫", mnemonic: "«бизи» — «бизи»(банд)дан айнан ўзи." },
      { en: "message", uz: "хабар", emoji: "💬", mnemonic: "«месиж» — хабар «мессенжер»да юборилади." },
      { en: "later", uz: "кейинроқ", emoji: "⏰", mnemonic: "«лейтер» — «лейт»(кечроқ)+«ер»." },
      { en: "answer", uz: "жавоб бермоқ", emoji: "☎️", mnemonic: "«ансер» — «ансер»(жавоб)дан айнан ўзи." },
      { en: "call back", uz: "қайта қўнғироқ қилмоқ", emoji: "🔄", mnemonic: "«кол бэк» — «кол»(қўнғироқ)+«бэк»(орқага)." },
    ],
    phrases: [
      { en: "Hello, this is Anvar speaking.", uz: "Салом, бу Анвар гаплашяпти." },
      { en: "Can I speak to Malika, please?", uz: "Малика билан гаплаша оламанми?" },
      { en: "Please hold on a moment.", uz: "Илтимос бироз кутинг." },
      { en: "She is busy right now.", uz: "У ҳозир банд." },
      { en: "I will call you back later.", uz: "Мен сизга кейинроқ қайта қўнғироқ қиламан." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "Hello, this is Anvar speaking. Can I speak to Malika, please?", uz: "Салом, бу Анвар гаплашяпти. Малика билан гаплаша оламанми?" },
        { speaker: "Anvar", en: "Please hold on a moment.", uz: "Илтимос бироз кутинг." },
        { speaker: "Malika", en: "Hello, Anvar! How are you?", uz: "Салом, Анвар! Қалайсиз?" },
        { speaker: "Anvar", en: "I'm good! Are you busy right now?", uz: "Яхшиман! Ҳозир бандmisiz?" },
        { speaker: "Malika", en: "A little. Can you call me back later?", uz: "Бироз. Менга кейинроқ қайта қўнғироқ қила оласизми?" },
        { speaker: "Anvar", en: "Sure, no problem. Talk to you soon!", uz: "Албатта, муаммо йўқ. Тезда гаплашамиз!" },
      ],
    },
    homeworkPrompt:
      "Телефон орқали гаплашиш ҳақида 9-10 та гап ёзинг: телефон орқали кимга қандай гаплашасиз. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 47,
    icon: "🌳",
    titleUz: "Атроф-муҳит",
    titleEn: "Environment Basics",
    vocabulary: [
      { en: "environment", uz: "атроф-муҳит", emoji: "🌍", mnemonic: "«энвайронмент» — «энвайрон»(ўраб турган)дан келади." },
      { en: "tree", uz: "дарахт", emoji: "🌳", mnemonic: "«три» — «три»(дарахт)дан айнан ўзи." },
      { en: "clean", uz: "тоза", emoji: "🧼", mnemonic: "«клин» — «клин»(тоза)дан айнан ўзи." },
      { en: "dirty", uz: "ифлос", emoji: "🗑️", mnemonic: "«дёрти» — «дёрт»(тупроқ)+«и»." },
      { en: "recycle", uz: "қайта ишлатмоқ", emoji: "♻️", mnemonic: "«рисайкл» — «ри»(қайта)+«сайкл»(айланма)." },
      { en: "pollution", uz: "ифлосланиш", emoji: "🏭", mnemonic: "«полюшн» — «полют»(ифлослантирмоқ)+«шн»." },
      { en: "protect", uz: "ҳимоя қилмоқ", emoji: "🛡️", mnemonic: "«протект» — «протект»(ҳимоя)дан айнан ўзи." },
      { en: "earth", uz: "ер (сайёра)", emoji: "🌎", mnemonic: "«ёрс» — «ёрс»(ер сайёраси)дан айнан ўзи." },
    ],
    phrases: [
      { en: "We must protect our environment.", uz: "Биз атроф-муҳитимизни ҳимоя қилишимиз керак." },
      { en: "Please keep the park clean.", uz: "Илтимос паркни тоза сақланг." },
      { en: "We should recycle plastic bottles.", uz: "Биз пластик шишаларни қайта ишлатишимиз керак." },
      { en: "Pollution is bad for the earth.", uz: "Ифлосланиш ер учун ёмон." },
      { en: "Let's plant more trees.", uz: "Кўпроқ дарахт эkайlik." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Look at all this trash. It's so dirty here.", uz: "Мана бу чиқиндиларга қаранг. Бу ерда жуда ифлос." },
        { speaker: "Anvar", en: "We should recycle these plastic bottles.", uz: "Биз бу пластик шишаларни қайта ишлатишимиз керак." },
        { speaker: "Malika", en: "You're right. Pollution is really bad for the environment.", uz: "Тўғри айтасиз. Ифлосланиш атроф-муҳит учун жуда ёмон." },
        { speaker: "Anvar", en: "Let's clean this park together.", uz: "Бу паркни биргаликда тозалайлик." },
        { speaker: "Malika", en: "Good idea! We should also plant more trees.", uz: "Яхши ғоя! Биз кўпроқ дарахт ҳам экишimiz керак." },
        { speaker: "Anvar", en: "We must all protect the earth.", uz: "Барчамиз ерни ҳимоя қилишimiz керак." },
      ],
    },
    homeworkPrompt:
      "Атроф-муҳит ҳақида 9-10 та гап ёзинг: уни қандай тоза сақлаш мумкин, нима қилиш керак. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 48,
    icon: "📚",
    titleUz: "Севимли китобим",
    titleEn: "My Favorite Book",
    vocabulary: [
      { en: "story", uz: "ҳикоя", emoji: "📖", mnemonic: "«стори» — «стори»(ҳикоя)дан айнан ўзи." },
      { en: "character", uz: "қаҳрамон", emoji: "🦸", mnemonic: "«каректер» — «каректер»(қаҳрамон)дан айнан ўзи." },
      { en: "author", uz: "муаллиф", emoji: "✍️", mnemonic: "«отхор» — «отхор»(муаллиф)дан айнан ўзи." },
      { en: "chapter", uz: "боб", emoji: "📑", mnemonic: "«чептер» — «чептер»(боб)дан айнан ўзи." },
      { en: "adventure", uz: "саргузашт", emoji: "🗺️", mnemonic: "«эдвенчер» — «эдвенчер»(саргузашт)дан айнан ўзи." },
      { en: "imagine", uz: "тасаввур қилмоқ", emoji: "💭", mnemonic: "«имэжин» — «имэж»(тасвир)+«ин»." },
      { en: "ending", uz: "тугаш (охири)", emoji: "🔚", mnemonic: "«ендинг» — «енд»(тугамоқ)+«инг»." },
      { en: "brave", uz: "жасур", emoji: "🦁", mnemonic: "«брейв» — «брейв»(жасур)дан айнан ўзи." },
    ],
    phrases: [
      { en: "My favorite book is about adventure.", uz: "Менинг севимли китобим саргузашт ҳақида." },
      { en: "Who is the main character?", uz: "Асосий қаҳрамон ким?" },
      { en: "I love this author's stories.", uz: "Мен бу муаллифнинг ҳикояларини яхши кўраман." },
      { en: "The story has an amazing ending.", uz: "Ҳикоянинг охири ажойиб." },
      { en: "Can you imagine that adventure?", uz: "Ўша саргузаштни тасаввур қила оласизми?" },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What is your favorite book, Malika?", uz: "Севимли китобингиз нима, Малика?" },
        { speaker: "Malika", en: "It's a story about a girl's adventure in the mountains.", uz: "Бу тоғлардаги бир қизнинг саргузашти ҳақидаги ҳикоя." },
        { speaker: "Anvar", en: "Who is the main character?", uz: "Асосий қаҳрамон ким?" },
        { speaker: "Malika", en: "Her name is Aigerim. She is very brave.", uz: "Унинг исми Айгерим. У жуда жасур." },
        { speaker: "Anvar", en: "That sounds amazing! Does it have a happy ending?", uz: "Ажойиб экан! Унинг охири бахтли тугайдими?" },
        { speaker: "Malika", en: "Yes! I love happy endings.", uz: "Ҳа! Мен бахтли якунларни яхши кўраман." },
      ],
    },
    homeworkPrompt:
      "Севимли китобингиз ёки ҳикоянгиз ҳақида 9-10 та гап ёзинг: у нима ҳақида, қаҳрамони ким. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 49,
    icon: "📋",
    titleUz: "Дам олиш куни режалари",
    titleEn: "Weekend Plans Review",
    vocabulary: [
      { en: "last weekend", uz: "ўтган дам олиш куни", emoji: "⏮️", mnemonic: "«ласт викенд» — «ласт»(ўтган)+«викенд»." },
      { en: "next weekend", uz: "келаси дам олиш куни", emoji: "⏭️", mnemonic: "«некст викенд» — «некст»(келаси)+«викенд»." },
      { en: "activity", uz: "машғулот", emoji: "🎯", mnemonic: "«эктивити» — «эктив»(фаол)дан келади." },
      { en: "relax", uz: "дам олмоқ", emoji: "🧘", mnemonic: "«рилакс» — «рилакс»(дам олмоқ)дан айнан ўзи." },
      { en: "outdoor", uz: "очиқ ҳавода", emoji: "🏞️", mnemonic: "«аутдоор» — «аут»(ташqarida)+«доор»(эшик)." },
      { en: "indoor", uz: "ёпиқ жойда", emoji: "🏠", mnemonic: "«индоор» — «ин»(ичкарида)+«доор»(эшик)." },
      { en: "favorite activity", uz: "севимли машғулот", emoji: "❤️", mnemonic: "«фейворит эктивити» — «фейворит»(севимли)+«эктивити»." },
      { en: "plan", uz: "режалаштирмоқ", emoji: "📝", mnemonic: "«плэн» — режа «план»(тартиб)ли бўлади." },
    ],
    phrases: [
      { en: "Last weekend, I visited my friend.", uz: "Ўтган дам олиш кунида дўстимникига бордим." },
      { en: "Next weekend, I am going to relax at home.", uz: "Келаси дам олиш кунида уйда дам оламан." },
      { en: "I like outdoor activities more than indoor ones.", uz: "Менга очиq ҳаводаги машғулотлар ёпиқ жойдагилардан кўра кўпроқ ёқади." },
      { en: "What was your favorite activity last weekend?", uz: "Ўтган дам олиш кунидаги севимли машғулотингиз нима эди?" },
      { en: "Let's plan something fun for next weekend.", uz: "Келаси дам олиш куни учун қизиқарли нарса режалаштирайлик." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What did you do last weekend?", uz: "Ўтган дам олиш куни нима қилдингиз?" },
        { speaker: "Malika", en: "I visited my grandmother and we cooked together.", uz: "Бувимникига бордим ва биз бирга овқат пиширдик." },
        { speaker: "Anvar", en: "That's nice! What are you going to do next weekend?", uz: "Яхши экан! Келаси дам олиш куни нима қилмоқчисиз?" },
        { speaker: "Malika", en: "I am going to relax at home and read books.", uz: "Уйда дам олиб, китоб ўqiyman." },
        { speaker: "Anvar", en: "I prefer outdoor activities, like playing football.", uz: "Мен очиq ҳаводаги машғулотларни, масалан футбол ўйнашни афзал кўраман." },
        { speaker: "Malika", en: "Let's plan something fun together for next weekend!", uz: "Келаси дам олиш куни учун биргаликда қизиқарли нарса режалаштирайлик!" },
      ],
    },
    homeworkPrompt:
      "Ўтган ва келаси дам олиш кунлари ҳақида 9-10 та гап ёзинг (ўтган ва келажак замonlardan foydalaning). Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 50,
    icon: "🎓",
    titleUz: "Кенгайтирилган ўз-ўзини таништириш",
    titleEn: "Extended Self-Introduction",
    vocabulary: [
      { en: "also", uz: "шунингдек", emoji: "➕", mnemonic: "«олсоу» — «ол»(ҳам)+«соу»." },
      { en: "but", uz: "лекин", emoji: "↔️", mnemonic: "«бат» — «бат»(лекин)дан айнан ўзи." },
      { en: "for example", uz: "масалан", emoji: "💡", mnemonic: "«фор игзампл» — «игзампл»(мисол)дан келади." },
      { en: "first of all", uz: "аввалambor", emoji: "1️⃣", mnemonic: "«фёрст оф ол» — «фёрст»(биринчи)+«оф ол»." },
      { en: "in addition", uz: "қўшимча равишда", emoji: "➕", mnemonic: "«ин эдишн» — «эдд»(қўшмоқ)дан келади." },
      { en: "finally", uz: "ниҳоят", emoji: "🏁", mnemonic: "«файнали» — «файнал»(охирги)дан келади." },
      { en: "in conclusion", uz: "хулоса қилиб айтганда", emoji: "✅", mnemonic: "«ин конклюжн» — «конклюд»(якунламоq)дан келади." },
      { en: "proud", uz: "фахрланувчи", emoji: "🦚", mnemonic: "«прауд» — фахрланганда «прауд»(мағрур) юрасиз." },
    ],
    phrases: [
      { en: "First of all, let me introduce myself.", uz: "Аввалambor, ўзimni таништирай." },
      { en: "I also like playing football.", uz: "Мен шунингдек футбол ўйнашни ҳам ёқтираман." },
      { en: "I like math, but I prefer English.", uz: "Мен математикани ёқтираман, лекин инглиз тилини афзал кўраман." },
      { en: "For example, I study every day.", uz: "Масалан, мен ҳар куни ўqiyman." },
      { en: "In conclusion, I love learning English.", uz: "Хулоса қилиб айтganda, мен инглиз тилини ўрганишни жуда яхши кўраман." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Anvar, can you introduce yourself in English now?", uz: "Анвар, ҳозир ўзингизни инглиз тилида таништира оласизми?" },
        { speaker: "Anvar", en: "Sure! First of all, my name is Anvar. I am eleven years old, and I am from Uzbekistan, but I live in Kyrgyzstan.", uz: "Албатта! Аввалambor, исмим Анвар. Мен ўн бир ёшдаман ва Ўзбекистонданман, лекин Қирғизистонда яшайман." },
        { speaker: "Malika", en: "That's great! Tell me more.", uz: "Ажойиб! Яна гапиринг." },
        { speaker: "Anvar", en: "I also love football and reading books. In addition, I want to be a teacher one day.", uz: "Мен шунингдек футбол ва китоб ўqishни ҳам яхши кўраман. Қўшимча равишда, қачондир ўqituvchi бўлишни хоҳлайман." },
        { speaker: "Malika", en: "Amazing! You have learned so much.", uz: "Ажойиб! Сиз жуда кўп нарса ўрgangansiz." },
        { speaker: "Anvar", en: "Yes! In conclusion, I am proud of my progress with Zam-Zam EDU.", uz: "Ҳа! Хулоса қилиб айтganda, Zam-Zam EDU билан бўлган ривожланишimdan фахрланаman." },
      ],
    },
    homeworkPrompt:
      "Ўзингиз ҳақингизда 9-10 та гап билан тўлиқ танishtiruv ёзинг — 1-49-дарсларда ўрgangan барча мавзуларни (исм, оила, кун, мактаб, мамлакат, севимли нарсалар ва ҳ.к.) бирлаштириб, боғловчи сўзлардан (also, but, because, for example) фойдаланинг. Ҳар бир қаторга битта гап ёзинг.",
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
