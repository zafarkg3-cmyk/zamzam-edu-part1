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
  {
    id: 51,
    icon: "🌟",
    titleUz: "Тажрибаларим",
    titleEn: "My Experiences",
    vocabulary: [
      { en: "experience", uz: "тажриба", emoji: "🎯", mnemonic: "«икспириенс» — «экспери»мент қилиб тажриба орттирасиз." },
      { en: "ever", uz: "ҳеч қачон (савол учун)", emoji: "❓", mnemonic: "«эвэр» — «эвара, ҳеч қачон борганмисан?» деб сўрагандай." },
      { en: "never", uz: "ҳеч қачон", emoji: "🚫", mnemonic: "«невэр» — «нев», яъни «йўқ, ҳеч қачон!» деганга ўхшайди." },
      { en: "already", uz: "аллақачон", emoji: "✅", mnemonic: "«олреди» — «ол реди» (ҳаммаси тайёр), яъни аллақачон бажарилган." },
      { en: "yet", uz: "ҳали (манфий/сўроқда)", emoji: "⏳", mnemonic: "«йет» — «йетмади ҳали» деб эсланг." },
      { en: "before", uz: "олдин", emoji: "⏮️", mnemonic: "«бифор» — «би фор»мага тушишдан олдин тайёргарлик кўрасиз." },
      { en: "travel", uz: "саёҳат қилмоқ", emoji: "🧳", mnemonic: "«трэвл» — «травел»(йўл) сўзига ўхшаш, саёҳатда йўл босасиз." },
      { en: "visit", uz: "ташриф буюрмоқ", emoji: "🗺️", mnemonic: "«визит» — «виза олиб» бир жойга ташриф буюрасиз." },
    ],
    phrases: [
      { en: "Have you ever been to London?", uz: "Сиз ҳеч қачон Лондонда бўлганмисиз?" },
      { en: "I have never eaten sushi.", uz: "Мен ҳеч қачон суши емаганман." },
      { en: "I have already finished my homework.", uz: "Мен уй вазифамни аллақачон тугатдим." },
      { en: "I haven't visited that museum yet.", uz: "Мен ҳали ўша музейга ташриф буюрмаганман." },
      { en: "She has visited many countries.", uz: "У кўп мамлакатларга ташриф буюрган." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "Have you ever traveled outside Kyrgyzstan?", uz: "Сиз ҳеч қачон Қирғизистондан ташқарига саёҳат қилганмисиз?" },
        { speaker: "Malika", en: "Yes, I have visited Uzbekistan twice.", uz: "Ҳа, мен Ўзбекистонга икки марта ташриф буюрганман." },
        { speaker: "Anvar", en: "Wow! I have never been there.", uz: "Вой! Мен у ерда ҳеч қачон бўлмаганман." },
        { speaker: "Malika", en: "You should go. Have you finished your exams yet?", uz: "Боришингиз керак. Имтиҳонларингизни аллақачон тугатдингизми?" },
        { speaker: "Anvar", en: "I have already finished two of them.", uz: "Мен уларнинг иккитасини аллақачон тугатганман." },
        { speaker: "Malika", en: "Great! Maybe we can travel together this summer.", uz: "Ажойиб! Балки ёзда бирга саёҳат қилармиз." },
        { speaker: "Anvar", en: "That sounds like a great experience!", uz: "Бу ажойиб тажриба бўларди!" },
      ],
    },
    homeworkPrompt:
      "Ўзингизнинг тажрибаларингиз ҳақида 9-10 та гап ёзинг: қаерларга ташриф буюргансиз, нималарни ҳали қилмагансиз, нималарни аллақачон қилгансиз. Present Perfect (have/has + V3) дан фойдаланинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 52,
    icon: "🕰️",
    titleUz: "Қачон бўлди?",
    titleEn: "When Did It Happen?",
    vocabulary: [
      { en: "just", uz: "ҳозиргина", emoji: "⏱️", mnemonic: "«жаст» — «жаст ҳозир» деганга ўхшаб, ҳозиргина бўлганини билдиради." },
      { en: "recently", uz: "яқинда", emoji: "🆕", mnemonic: "«рисентли» — «резент» (янги) сўзидан, яқинда содир бўлган." },
      { en: "ago", uz: "олдин (аниқ вақт)", emoji: "⌛", mnemonic: "«эго» — «эгов»гандай, вақт орқага «эгилиб» кетган." },
      { en: "last week", uz: "ўтган ҳафта", emoji: "📆", mnemonic: "«ласт вик» — «ласт» (охирги) ҳафта, яъни ўтган ҳафта." },
      { en: "since", uz: "...дан бери", emoji: "🔁", mnemonic: "«синс» — «синчиклаб» ўша вақтдан бери кузатяпсиз." },
      { en: "for", uz: "давомида (муддат)", emoji: "📏", mnemonic: "«фор» — «форма» ичида қанча вақт бўлганини кўрсатади." },
      { en: "finish", uz: "тугатмоқ", emoji: "🏁", mnemonic: "«финиш» — спортда «финиш» чизиғи, яъни тугатиш." },
      { en: "arrive", uz: "етиб келмоқ", emoji: "🛬", mnemonic: "«эрайв» — «эр» (ер)га «айв»ониб (пастга тушиб) етиб келасиз." },
    ],
    phrases: [
      { en: "I have just finished my homework.", uz: "Мен уй вазифамни ҳозиргина тугатдим." },
      { en: "She arrived three days ago.", uz: "У уч кун олдин етиб келди." },
      { en: "We have lived here for five years.", uz: "Биз бу ерда беш йилдан бери яшаймиз." },
      { en: "He finished the book last week.", uz: "У китобни ўтган ҳафта тугатди." },
      { en: "I haven't seen him since Monday.", uz: "Мен уни душанбадан бери кўрмадим." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "When did you arrive home?", uz: "Уйга қачон етиб келдингиз?" },
        { speaker: "Anvar", en: "I arrived home ten minutes ago.", uz: "Уйга ўн дақиқа олдин етиб келдим." },
        { speaker: "Malika", en: "Have you finished your project yet?", uz: "Лойиҳангизни аллақачон тугатдингизми?" },
        { speaker: "Anvar", en: "Yes, I have just finished it.", uz: "Ҳа, мен уни ҳозиргина тугатдим." },
        { speaker: "Malika", en: "How long have you studied English for?", uz: "Инглиз тилини қанча вақтдан бери ўрганяпсиз?" },
        { speaker: "Anvar", en: "I have studied it for two years now.", uz: "Мен уни ҳозирда икки йилдан бери ўрганяпман." },
        { speaker: "Malika", en: "That's impressive progress!", uz: "Бу ажойиб ривожланиш!" },
      ],
    },
    homeworkPrompt:
      "Present Perfect ва Past Simple ни солиштириб, ўзингиз ҳақингизда 9-10 та гап ёзинг: нималарни қачон қилгансиз (ago, last week), нима қанча вақтдан бери давом этяпти (for, since). Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 53,
    icon: "💪",
    titleUz: "Мен нима қила оламан",
    titleEn: "What I Can Do",
    vocabulary: [
      { en: "able", uz: "қодир", emoji: "🏅", mnemonic: "«эйбл» — «эйб»гарчилик (қобилият) билан боғлиқ." },
      { en: "skill", uz: "маҳорат", emoji: "🛠️", mnemonic: "«скил» — «скелет»дай, маҳорат ишнинг таянчи." },
      { en: "swim", uz: "сузмоқ", emoji: "🏊", mnemonic: "«свим» — сувда «свим»лаб (сирғалиб) сузасиз." },
      { en: "drive", uz: "ҳайдамоқ", emoji: "🚗", mnemonic: "«драйв» — машинани «драйв»лаб (ҳайдаб) юрасиз." },
      { en: "play an instrument", uz: "мусиқа асбобида чалмоқ", emoji: "🎸", mnemonic: "«инструмент» — «инструмент» сўзи ўзбекчада ҳам шундай эшитилади." },
      { en: "cook", uz: "овқат пиширмоқ", emoji: "👨‍🍳", mnemonic: "«кук» — ошпаз «кук»каниб (пишириб) овқат тайёрлайди." },
      { en: "paint", uz: "чизмоқ (бўёқ билан)", emoji: "🎨", mnemonic: "«пейнт» — «пейнт»(бўёқ) билан расм чизасиз." },
      { en: "dance", uz: "рақс қилмоқ", emoji: "💃", mnemonic: "«данс» — «данс»лаб (ўйнаб) рақс тушасиз." },
    ],
    phrases: [
      { en: "I can swim very well.", uz: "Мен жуда яхши сузаман." },
      { en: "She is able to drive a car.", uz: "У машина ҳайдай олади." },
      { en: "Can you play the guitar?", uz: "Сиз гитара чала оласизми?" },
      { en: "He couldn't come yesterday.", uz: "У кеча кела олмади." },
      { en: "I want to be able to cook well.", uz: "Мен яхши овқат пиша олишни хоҳлайман." },
    ],
    dialogue: {
      speakers: ["Muhammad", "Malika"],
      lines: [
        { speaker: "Muhammad", en: "Can you play any instrument?", uz: "Сиз бирор мусиқа асбобида чала оласизми?" },
        { speaker: "Malika", en: "Yes, I can play the piano. Can you swim?", uz: "Ҳа, мен пианино чала оламан. Сиз суза оласизми?" },
        { speaker: "Muhammad", en: "I can swim, but I can't dance well.", uz: "Мен суза оламан, лекин яхши рақс туша олмайман." },
        { speaker: "Malika", en: "That's okay! Are you able to cook?", uz: "Ҳечқиси йўқ! Сиз овқат пиша оласизми?" },
        { speaker: "Muhammad", en: "Yes, I can cook plov very well.", uz: "Ҳа, мен палов жуда яхши пишира оламан." },
        { speaker: "Malika", en: "Amazing! I want to be able to cook like that.", uz: "Ажойиб! Мен ҳам шундай пишира олишни хоҳлайман." },
      ],
    },
    homeworkPrompt:
      "Сиз нима қила олишингиз ва нима қила олмаслигингиз ҳақида 9-10 та гап ёзинг: can/can't, could/couldn't, be able to дан фойдаланинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 54,
    icon: "📏",
    titleUz: "Қоидалар",
    titleEn: "Rules & Obligation",
    vocabulary: [
      { en: "must", uz: "шарт (кучли)", emoji: "❗", mnemonic: "«маст» — «маст»(қатъий) талаб қилинади." },
      { en: "have to", uz: "керак/мажбур", emoji: "📌", mnemonic: "«хэв ту» — «ҳав» (эга бўлиш) ва «ту» (учун), яъни мажбурсиз." },
      { en: "should", uz: "лозим (тавсия)", emoji: "👍", mnemonic: "«шуд» — «шод» бўлиш учун шундай қилиш лозим." },
      { en: "need to", uz: "эҳтиёж бор", emoji: "🔔", mnemonic: "«нид ту» — «нид»о (чақириқ) эҳтиёжни билдиради." },
      { en: "rule", uz: "қоида", emoji: "📜", mnemonic: "«рул» — машина «рул»и йўналишни бошқаргани каби, қоида ҳам тартибни бошқаради." },
      { en: "obligation", uz: "мажбурият", emoji: "⚖️", mnemonic: "«облигейшн» — «облигация»(қарз мажбурияти)га ўхшаш сўз." },
      { en: "permission", uz: "рухсат", emoji: "🖊️", mnemonic: "«пёмишн» — «пермит» (рухсатнома) сўзидан келади." },
      { en: "forbidden", uz: "тақиқланган", emoji: "⛔", mnemonic: "«форбиден» — «фор бид»(таъқиқ учун) сўзидан." },
    ],
    phrases: [
      { en: "Students must wear a uniform.", uz: "Ўқувчилар форма кийишлари шарт." },
      { en: "You have to finish your homework.", uz: "Сиз уй вазифангизни тугатишингиз керак." },
      { en: "You should sleep early.", uz: "Сиз эрта ухлашингиз лозим." },
      { en: "You don't need to worry.", uz: "Ташвишланишингиз шарт эмас." },
      { en: "It is forbidden to run in the hallway.", uz: "Йўлакда югуриш тақиқланган." },
    ],
    dialogue: {
      speakers: ["Anvar", "Muhammad"],
      lines: [
        { speaker: "Anvar", en: "What are the rules in our school?", uz: "Мактабимизда қандай қоидалар бор?" },
        { speaker: "Muhammad", en: "We must wear a uniform every day.", uz: "Биз ҳар куни форма кийишимиз шарт." },
        { speaker: "Anvar", en: "Do we have to bring our books?", uz: "Дарсликларимизни олиб келишимиз керакми?" },
        { speaker: "Muhammad", en: "Yes, and you shouldn't be late for class.", uz: "Ҳа, ва дарсга кечикмаслигингиз лозим." },
        { speaker: "Anvar", en: "Is it forbidden to use a phone?", uz: "Телефондан фойдаланиш тақиқланганми?" },
        { speaker: "Muhammad", en: "Yes, phones are forbidden during lessons.", uz: "Ҳа, дарслар давомида телефонлар тақиқланган." },
        { speaker: "Anvar", en: "I need to remember all these rules!", uz: "Мен бу қоидаларнинг ҳаммасини эслаб қолишим керак!" },
      ],
    },
    homeworkPrompt:
      "Мактаб ёки уйингиздаги қоидалар ҳақида 9-10 та гап ёзинг: must, have to, should, don't need to, forbidden сўзларидан фойдаланинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 55,
    icon: "💬",
    titleUz: "Маслаҳат бериш",
    titleEn: "Giving Advice",
    vocabulary: [
      { en: "advice", uz: "маслаҳат", emoji: "🗣️", mnemonic: "«эдвайс» — «эд» (эди) «вайс»лаб (доно) маслаҳат беради." },
      { en: "problem", uz: "муаммо", emoji: "❗", mnemonic: "«проблем» — ўзбекчада ҳам «проблема» деб айтилади." },
      { en: "suggest", uz: "таклиф қилмоқ", emoji: "💡", mnemonic: "«сагжест» — «сажда»гандай эгилиб фикр таклиф қиласиз (ёдда қолиши учун)." },
      { en: "better", uz: "яхшироқ", emoji: "⬆️", mnemonic: "«бетэр» — «бет»(юз)ингиз яхшироқ кўринади." },
      { en: "healthy", uz: "соғлом", emoji: "🥗", mnemonic: "«хэлси» — «хелс»(соғлиқ)дан келади." },
      { en: "exercise", uz: "машқ қилмоқ", emoji: "🏃", mnemonic: "«эксерсайз» — «эксер»лаб (ҳаракат қилиб) машқ қиласиз." },
      { en: "rest", uz: "дам олмоқ", emoji: "🛋️", mnemonic: "«рест» — «ресторан»да дам олгандай тасаввур қилинг." },
      { en: "stress", uz: "стресс", emoji: "😣", mnemonic: "«стрес» — ўзбекчада ҳам худди шундай айтилади." },
    ],
    phrases: [
      { en: "You should drink more water.", uz: "Кўпроқ сув ичишингиз керак." },
      { en: "You shouldn't stay up late.", uz: "Кеч ухлашингиз керак эмас." },
      { en: "Why don't you try running?", uz: "Югуришни синаб кўрсангиз-чи?" },
      { en: "I think you need some rest.", uz: "Менимча, сизга дам олиш керак." },
      { en: "My advice is to talk to a doctor.", uz: "Менинг маслаҳатим — шифокор билан гаплашинг." },
    ],
    dialogue: {
      speakers: ["Malika", "Muhammad"],
      lines: [
        { speaker: "Malika", en: "I feel very tired these days.", uz: "Мен сўнгги кунларда жуда чарчаган ҳис қиляпман." },
        { speaker: "Muhammad", en: "Why don't you sleep earlier?", uz: "Эртароқ ухласангиз-чи?" },
        { speaker: "Malika", en: "That's a good idea. What else do you suggest?", uz: "Бу яхши фикр. Яна нима таклиф қиласиз?" },
        { speaker: "Muhammad", en: "You should exercise every morning. It helps with stress.", uz: "Сиз ҳар куни эрталаб машқ қилишингиз керак. Бу стрессга ёрдам беради." },
        { speaker: "Malika", en: "I think I need to eat healthier too.", uz: "Менимча, соғломроқ овқатланишим ҳам керак." },
        { speaker: "Muhammad", en: "Exactly! My advice is to make small changes first.", uz: "Худди шундай! Менинг маслаҳатим — аввал кичик ўзгаришлардан бошланг." },
      ],
    },
    homeworkPrompt:
      "Дўстингизга соғлиғи ёки муаммоси бўйича маслаҳат берувчи 9-10 та гап ёзинг: should/shouldn't, why don't you, my advice is дан фойдаланинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 56,
    icon: "🌦️",
    titleUz: "Агар... унда...",
    titleEn: "If... Then... (First Conditional)",
    vocabulary: [
      { en: "if", uz: "агар", emoji: "🔀", mnemonic: "«иф» — «иф»тидо (бошланиш) шартдан бошланади." },
      { en: "condition", uz: "шарт", emoji: "📋", mnemonic: "«кондишн» — «кондитсия»(ҳолат)дан келади." },
      { en: "result", uz: "натижа", emoji: "🎯", mnemonic: "«ризалт» — «ризалт»(натижа) ўзбекчада ҳам ўхшаш эшитилади." },
      { en: "rain", uz: "ёмғир", emoji: "🌧️", mnemonic: "«рейн» — ёмғир томчилари «рей-рей» товуш чиқаргандай." },
      { en: "weather forecast", uz: "об-ҳаво башорати", emoji: "📺", mnemonic: "«форкаст» — «фор»(олдиндан) «каст»(айтиш), яъни олдиндан айтиш." },
      { en: "decide", uz: "қарор қилмоқ", emoji: "🤔", mnemonic: "«дисайд» — «сайд»(томон)ни танлаб қарор қиласиз." },
      { en: "happen", uz: "содир бўлмоқ", emoji: "💥", mnemonic: "«хэпен» — «ҳаяжон»ли воқеа содир бўлади." },
      { en: "chance", uz: "имконият", emoji: "🎲", mnemonic: "«чанс» — «шанс» сўзи ўзбекчада ҳам шундай ишлатилади." },
    ],
    phrases: [
      { en: "If it rains, I will stay home.", uz: "Агар ёмғир ёғса, мен уйда қоламан." },
      { en: "If you study hard, you will pass the exam.", uz: "Агар қаттиқ ўқисангиз, имтиҳондан ўтасиз." },
      { en: "What will you do if you are late?", uz: "Агар кечиксангиз, нима қиласиз?" },
      { en: "If I have time, I will call you.", uz: "Агар вақтим бўлса, сизга қўнғироқ қиламан." },
      { en: "She will be happy if you come.", uz: "Агар келсангиз, у хурсанд бўлади." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What will we do if it rains tomorrow?", uz: "Агар эртага ёмғир ёғса, нима қиламиз?" },
        { speaker: "Malika", en: "If it rains, we will stay at home and watch a film.", uz: "Агар ёмғир ёғса, уйда қолиб фильм кўрамиз." },
        { speaker: "Anvar", en: "And if it is sunny?", uz: "Агар қуёшли бўлса-чи?" },
        { speaker: "Malika", en: "If it is sunny, we will go to the park.", uz: "Агар қуёшли бўлса, боққа борамиз." },
        { speaker: "Anvar", en: "I hope the weather forecast is good.", uz: "Умид қиламанки, об-ҳаво башорати яхши бўлади." },
        { speaker: "Malika", en: "If we have a good chance, let's have a picnic.", uz: "Агар яхши имконият бўлса, пикник қилайлик." },
      ],
    },
    homeworkPrompt:
      "\"Агар... унда...\" (If + Present Simple, will + V1) шаклида 9-10 та гап ёзинг: об-ҳаво, дарс, дам олиш ҳақидаги режаларингизни ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 57,
    icon: "🙏",
    titleUz: "Илтимос ва таклиф",
    titleEn: "Requests & Offers",
    vocabulary: [
      { en: "request", uz: "илтимос", emoji: "🙋", mnemonic: "«рикуест» — «рикуест»(сўраш)дан келади, илтимос қиляпсиз." },
      { en: "offer", uz: "таклиф қилмоқ", emoji: "🤲", mnemonic: "«офэр» — «офис»да бирор нарса таклиф қилгандай." },
      { en: "favor", uz: "яхшилик", emoji: "💝", mnemonic: "«фейвэр» — «фаворит»(севимли) кишингиздан яхшилик сўрайсиз." },
      { en: "borrow", uz: "қарзга олмоқ", emoji: "🔄", mnemonic: "«бороу» — «бор»иб бирор нарсани қарзга оласиз." },
      { en: "lend", uz: "қарзга бермоқ", emoji: "🤝", mnemonic: "«лэнд» — «ленд»(қўл узатиб) нарсани қарзга берасиз." },
      { en: "help", uz: "ёрдам бермоқ", emoji: "🆘", mnemonic: "«хэлп» — «ҳалп»лашиб ёрдам берасиз." },
      { en: "polite", uz: "хушмуомала", emoji: "😊", mnemonic: "«полайт» — «пол»(нозик) муомала қилинг." },
      { en: "kindly", uz: "илтимос билан", emoji: "🌸", mnemonic: "«кайндли» — «кайнд»(меҳрибон) тарзда сўрайсиз." },
    ],
    phrases: [
      { en: "Could you help me, please?", uz: "Илтимос, менга ёрдам бера оласизми?" },
      { en: "Would you like some tea?", uz: "Чой ичасизми?" },
      { en: "Can I borrow your pen?", uz: "Ручкангизни қарзга ола оламанми?" },
      { en: "Shall I open the window?", uz: "Деразани очайми?" },
      { en: "Would you mind closing the door?", uz: "Эшикни ёпиб қўя оласизми?" },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Excuse me, could you help me with this bag?", uz: "Кечирасиз, менга бу сумка билан ёрдам бера оласизми?" },
        { speaker: "Anvar", en: "Of course! Would you like me to carry it?", uz: "Албатта! Уни олиб юришимни хоҳлайсизми?" },
        { speaker: "Malika", en: "Yes, please. Can I ask you a favor too?", uz: "Ҳа, илтимос. Сиздан бир яхшилик ҳам сўрасам майлими?" },
        { speaker: "Anvar", en: "Sure, what is it?", uz: "Албатта, нима эди у?" },
        { speaker: "Malika", en: "Could you lend me your notebook for tomorrow?", uz: "Эртага учун дафтарингизни менга бера оласизми?" },
        { speaker: "Anvar", en: "No problem, here you are.", uz: "Муаммо йўқ, марҳамат." },
      ],
    },
    homeworkPrompt:
      "Илтимос ва таклиф билдирувчи 9-10 та гап ёзинг: could you, would you like, can I, shall I, would you mind каби иборалардан фойдаланинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 58,
    icon: "⚖️",
    titleUz: "Таққослашни давом эттирамиз",
    titleEn: "More Comparisons",
    vocabulary: [
      { en: "similar", uz: "ўхшаш", emoji: "🔁", mnemonic: "«симилар» — «симметрия»гадай ўхшашлик." },
      { en: "different", uz: "фарқли", emoji: "↔️", mnemonic: "«диффрент» — «дифферент» (фарқли) сўзи ўзбекчада ҳам шундай." },
      { en: "as...as", uz: "...дек ...", emoji: "🟰", mnemonic: "«эз...эз» — икки томон «эз»гидай (тенг) кўринади." },
      { en: "less", uz: "камроқ", emoji: "➖", mnemonic: "«лес» — «лесс»(кам) сўзидан келади." },
      { en: "more than", uz: "...дан кўпроқ", emoji: "➕", mnemonic: "«мор зэн» — «мор»(кўп) сон «зэн»(шундан) ортиқ." },
      { en: "equal", uz: "тенг", emoji: "⚖️", mnemonic: "«иквал» — «эквивалент»(тенг) сўзидан келади." },
      { en: "unique", uz: "ноёб", emoji: "💎", mnemonic: "«юник» — «уникал»(ноёб) сўзи ўзбекчада ҳам шундай." },
      { en: "alike", uz: "бир хил", emoji: "👯", mnemonic: "«элайк» — «э лайк»(шунга ўхшаш) кўринади." },
    ],
    phrases: [
      { en: "My brother is as tall as my father.", uz: "Акам отамдек баланд." },
      { en: "This book is less interesting than that one.", uz: "Бу китоб у китобдан камроқ қизиқарли." },
      { en: "They are not alike.", uz: "Улар бир хил эмас." },
      { en: "English is more difficult than math for me.", uz: "Мен учун инглиз тили математикадан қийинроқ." },
      { en: "We have similar hobbies.", uz: "Бизнинг қизиқишларимиз ўхшаш." },
    ],
    dialogue: {
      speakers: ["Muhammad", "Malika"],
      lines: [
        { speaker: "Muhammad", en: "Are you and your sister similar?", uz: "Сиз ва опангиз ўхшашмисиз?" },
        { speaker: "Malika", en: "A little. She is as tall as me, but our hobbies are different.", uz: "Бир оз. У мендек баланд, лекин қизиқишларимиз фарқли." },
        { speaker: "Muhammad", en: "What does she like?", uz: "У нимани ёқтиради?" },
        { speaker: "Malika", en: "She likes music more than sport.", uz: "У спортдан кўра мусиқани кўпроқ ёқтиради." },
        { speaker: "Muhammad", en: "That's interesting. My brother and I are alike, though.", uz: "Бу қизиқ. Мен ва акам эса бир хилмиз." },
        { speaker: "Malika", en: "Every family is unique in its own way!", uz: "Ҳар бир оила ўзича ноёб!" },
      ],
    },
    homeworkPrompt:
      "Оила аъзоларингиз ёки дўстларингизни таққослаб 9-10 та гап ёзинг: as...as, less...than, more...than, similar, different, alike сўзларидан фойдаланинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 59,
    icon: "🏆",
    titleUz: "Энг...",
    titleEn: "The Most... (Superlatives)",
    vocabulary: [
      { en: "best", uz: "энг яхши", emoji: "🥇", mnemonic: "«бест» — «бест»(энг яхши) ўзбекчада ҳам «бест дуст» деб ишлатилади." },
      { en: "worst", uz: "энг ёмон", emoji: "💀", mnemonic: "«вёрст» — «ворст» сўзи «worse»дан ёмонроқ маънони билдиради." },
      { en: "biggest", uz: "энг катта", emoji: "🐘", mnemonic: "«бигест» — «биг»(катта)нинг энг юқори даражаси." },
      { en: "smallest", uz: "энг кичик", emoji: "🐜", mnemonic: "«смолест» — «смол»(кичик)нинг энг юқори даражаси." },
      { en: "fastest", uz: "энг тезкор", emoji: "🐆", mnemonic: "«фастест» — «фаст»(тез)нинг энг юқори даражаси." },
      { en: "most beautiful", uz: "энг гўзал", emoji: "🌹", mnemonic: "«моуст бьютифул» — «моуст»(энг кўп) даражада гўзал." },
      { en: "tallest", uz: "энг баланд", emoji: "🗼", mnemonic: "«толест» — «толл»(баланд)нинг энг юқори даражаси." },
      { en: "cheapest", uz: "энг арзон", emoji: "💰", mnemonic: "«чипест» — «чип»(арзон)нинг энг юқори даражаси." },
    ],
    phrases: [
      { en: "This is the best restaurant in town.", uz: "Бу шаҳардаги энг яхши ресторан." },
      { en: "He is the fastest runner in our class.", uz: "У синфимиздаги энг тезкор югурувчи." },
      { en: "It was the worst day of my life.", uz: "Бу ҳаётимдаги энг ёмон кун эди." },
      { en: "She is the most beautiful singer I know.", uz: "У мен биладиган энг гўзал қўшиқчи." },
      { en: "This is the cheapest shop in the city.", uz: "Бу шаҳардаги энг арзон дўкон." },
    ],
    dialogue: {
      speakers: ["Anvar", "Muhammad"],
      lines: [
        { speaker: "Anvar", en: "What is the biggest city in Kyrgyzstan?", uz: "Қирғизистондаги энг катта шаҳар қайси?" },
        { speaker: "Muhammad", en: "I think Bishkek is the biggest city.", uz: "Менимча, Бишкек энг катта шаҳар." },
        { speaker: "Anvar", en: "And what is the tallest mountain here?", uz: "Бу ердаги энг баланд тоғ қайси?" },
        { speaker: "Muhammad", en: "That would be one of the peaks in the Tian Shan mountains.", uz: "Бу Тянь-Шань тоғларидаги чўққилардан бири бўлса керак." },
        { speaker: "Anvar", en: "Amazing! What's the most beautiful place you have visited?", uz: "Ажойиб! Сиз ташриф буюрган энг гўзал жой қайси?" },
        { speaker: "Muhammad", en: "Issyk-Kul Lake, definitely the most beautiful.", uz: "Иссиқ-Кўл кўли, аниқ энг гўзали." },
      ],
    },
    homeworkPrompt:
      "Superlative (энг...) шаклидан фойдаланиб 9-10 та гап ёзинг: оилангиз, шаҳрингиз, мактабингиз ёки дўстларингиз ҳақида. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 60,
    icon: "🔧",
    titleUz: "Қандай қилиб...",
    titleEn: "How To... (Describing a Process)",
    vocabulary: [
      { en: "first", uz: "биринчидан", emoji: "1️⃣", mnemonic: "«фёрст» — «фёрст»(биринчи) сўзидан." },
      { en: "then", uz: "сўнгра", emoji: "➡️", mnemonic: "«зэн» — «зан»жирдай кетма-кет давом этади." },
      { en: "next", uz: "кейин", emoji: "⏭️", mnemonic: "«некст» — «некст»(кейинги) қадам." },
      { en: "after that", uz: "шундан кейин", emoji: "🔜", mnemonic: "«афтэр зэт» — «афтер»(кейин) «зет»(шу)дан." },
      { en: "finally", uz: "ниҳоят", emoji: "🏁", mnemonic: "«файнали» — «файнал»(охирги) босқич." },
      { en: "step", uz: "қадам", emoji: "👣", mnemonic: "«степ» — «степ»лаб (қадамлаб) юрасиз." },
      { en: "recipe", uz: "рецепт", emoji: "📃", mnemonic: "«ресипи» — «рецепт» сўзи ўзбекчада ҳам шундай ишлатилади." },
      { en: "mix", uz: "аралаштирмоқ", emoji: "🥣", mnemonic: "«микс» — «микс»ер билан аралаштирасиз." },
    ],
    phrases: [
      { en: "First, you mix the eggs and sugar.", uz: "Биринчидан, тухум ва шакарни аралаштирасиз." },
      { en: "Then, add some flour.", uz: "Сўнгра, бироз ун қўшасиз." },
      { en: "Next, put it in the oven.", uz: "Кейин, уни духовкага қўясиз." },
      { en: "After that, wait ten minutes.", uz: "Шундан кейин, ўн дақиқа кутасиз." },
      { en: "Finally, enjoy your cake!", uz: "Ниҳоят, тортингиздан баҳраманд бўлинг!" },
    ],
    dialogue: {
      speakers: ["Malika", "Muhammad"],
      lines: [
        { speaker: "Malika", en: "Can you teach me how to make somsa?", uz: "Менга сомса қандай пиширишни ўргата оласизми?" },
        { speaker: "Muhammad", en: "Sure! First, you make the dough.", uz: "Албатта! Биринчидан, хамир тайёрлайсиз." },
        { speaker: "Malika", en: "What's the next step?", uz: "Кейинги қадам нима?" },
        { speaker: "Muhammad", en: "Then, you mix the meat and onions for the filling.", uz: "Сўнгра, ичи учун гўшт ва пиёзни аралаштирасиз." },
        { speaker: "Malika", en: "And after that?", uz: "Шундан кейин-чи?" },
        { speaker: "Muhammad", en: "After that, you put them in the oven. Finally, you eat them hot!", uz: "Шундан кейин, уларни духовкага қўясиз. Ниҳоят, иссиқлигида ейсиз!" },
      ],
    },
    homeworkPrompt:
      "Севимли таомингизни ёки бирор ишни қандай қилишни (first, then, next, after that, finally сўзлари билан) 9-10 қадамда тушунтиринг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 61,
    icon: "🌙",
    titleUz: "Ўшанда нима қиляпман эди",
    titleEn: "What I Was Doing",
    vocabulary: [
      { en: "was/were", uz: "эди (давомийлик)", emoji: "🕰️", mnemonic: "«воз/вёр» — «воз»гандай ўтмишда давом этган." },
      { en: "while", uz: "ўша пайтда", emoji: "⏳", mnemonic: "«вайл» — «вайл»гандай (шу орада) вақт ўтади." },
      { en: "at that moment", uz: "ўша лаҳзада", emoji: "⏱️", mnemonic: "«эт зэт моумент» — «моумент»(лаҳза)да содир бўлади." },
      { en: "happening", uz: "содир бўлаётган", emoji: "🎬", mnemonic: "«хэпенинг» — «ҳаяжон»ли воқеа содир бўлаяпти." },
      { en: "interrupt", uz: "тўхтатмоқ (гапни)", emoji: "✋", mnemonic: "«интерапт» — «интер»(орага) кириб «рапт»(тўхтатади)." },
      { en: "suddenly", uz: "тўсатдан", emoji: "⚡", mnemonic: "«садднли» — «садди»гандай тўсатдан бўлади." },
      { en: "meanwhile", uz: "шу орада", emoji: "🔀", mnemonic: "«минвайл» — «мин»(мен)«вайл»(орада) содир бўлади." },
      { en: "midnight", uz: "ярим тун", emoji: "🌌", mnemonic: "«миднайт» — «мид»(ўрта) «найт»(тун)да, яъни ярим тунда." },
    ],
    phrases: [
      { en: "I was sleeping at midnight.", uz: "Мен ярим тунда ухлаётган эдим." },
      { en: "What were you doing at 5 pm?", uz: "Соат 17:00 да нима қилаётган эдингиз?" },
      { en: "While I was reading, the phone rang.", uz: "Мен ўқиб ўтирган пайтимда телефон жиринглади." },
      { en: "She was cooking when I arrived.", uz: "Мен келганимда у овқат пишираётган эди." },
      { en: "Suddenly, it started to rain.", uz: "Тўсатдан ёмғир ёға бошлади." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What were you doing at seven yesterday evening?", uz: "Кеча кечаси соат еттида нима қилаётган эдингиз?" },
        { speaker: "Malika", en: "I was doing my homework. What about you?", uz: "Мен уй вазифамни бажараётган эдим. Сиз-чи?" },
        { speaker: "Anvar", en: "I was watching TV when my mother called me.", uz: "Онам менга қўнғироқ қилганида телевизор кўраётган эдим." },
        { speaker: "Malika", en: "While you were talking to her, what happened?", uz: "Сиз у билан гаплашаётган пайтингизда нима бўлди?" },
        { speaker: "Anvar", en: "Suddenly, the lights went out!", uz: "Тўсатдан чироқлар ўчиб қолди!" },
        { speaker: "Malika", en: "Meanwhile, I was still doing my homework in the dark!", uz: "Шу орада, мен ҳали ҳам қоронғида уй вазифамни бажараётган эдим!" },
      ],
    },
    homeworkPrompt:
      "Кеча муайян вақтларда нима қилаётганингиз ҳақида 9-10 та гап ёзинг (Past Continuous: was/were + V-ing). Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 62,
    icon: "⚡",
    titleUz: "Қачон нима бўлди",
    titleEn: "When What Happened",
    vocabulary: [
      { en: "when", uz: "қачонки", emoji: "🕐", mnemonic: "«вэн» — «вэн»(қачон) сўроқ сўзи." },
      { en: "while", uz: "давомида", emoji: "⏳", mnemonic: "«вайл» — олдинги дарсда ўрганганимиздек «шу орада»." },
      { en: "interrupted", uz: "тўхтатилди", emoji: "🛑", mnemonic: "«интерраптид» — «интер»га кириб тўхтатилди." },
      { en: "happened", uz: "содир бўлди", emoji: "💥", mnemonic: "«хэпенд» — воқеа содир бўлди." },
      { en: "background", uz: "фон (воқеа)", emoji: "🖼️", mnemonic: "«бэкграунд» — «бэк»(орқа) «граунд»(замин), яъни фон." },
      { en: "ongoing", uz: "давом этаётган", emoji: "🔄", mnemonic: "«онгоуинг» — «он»(давом) «гоуинг»(бораётган)." },
      { en: "event", uz: "воқеа", emoji: "🎪", mnemonic: "«ивент» — «ивент» сўзи ўзбекчада ҳам «ивент» деб ишлатилади." },
      { en: "moment", uz: "лаҳза", emoji: "📸", mnemonic: "«моумент» — «моумент»(лаҳза) фотосуратдай тезда ўтади." },
    ],
    phrases: [
      { en: "I was walking home when it started to rain.", uz: "Уйга пиёда кетаётганимда ёмғир ёға бошлади." },
      { en: "While she was studying, her brother was playing.", uz: "У дарс тайёрлаётганда, укаси ўйнаётган эди." },
      { en: "He broke his leg while he was skiing.", uz: "У чана учаётганда оёғини синдирди." },
      { en: "What happened while I was away?", uz: "Мен йўқ пайтимда нима содир бўлди?" },
      { en: "They were talking when the teacher entered.", uz: "Ўқитувчи кирганида улар гаплашаётган эди." },
    ],
    dialogue: {
      speakers: ["Muhammad", "Anvar"],
      lines: [
        { speaker: "Muhammad", en: "What happened yesterday? I heard something interesting.", uz: "Кеча нима содир бўлди? Мен қизиқарли нарса эшитдим." },
        { speaker: "Anvar", en: "We were playing football when it suddenly started to rain.", uz: "Биз футбол ўйнаётган эдик, тўсатдан ёмғир ёға бошлади." },
        { speaker: "Muhammad", en: "Did the rain interrupt the game?", uz: "Ёмғир ўйинни тўхтатдими?" },
        { speaker: "Anvar", en: "Yes! While we were running to shelter, Sardor fell down.", uz: "Ҳа! Биз бошпанага югураётганимизда, Сардор йиқилиб тушди." },
        { speaker: "Muhammad", en: "Oh no! What happened when he fell?", uz: "Вой, йўқ! У йиқилганда нима бўлди?" },
        { speaker: "Anvar", en: "He was fine, luckily. He was just laughing at that moment!", uz: "Яхшиямки, у яхши эди. У ўша лаҳзада шунчаки куляпти эди!" },
      ],
    },
    homeworkPrompt:
      "Past Continuous ва Past Simple ни бирга қўллаб (when/while ёрдамида) 9-10 та гап ёзинг: бирор воқеа давомида нима содир бўлганини тасвирланг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 63,
    icon: "🔮",
    titleUz: "Режа ва башорат",
    titleEn: "Plans & Predictions",
    vocabulary: [
      { en: "plan", uz: "режа", emoji: "🗂️", mnemonic: "«плэн» — «план» сўзи ўзбекчада ҳам шундай ишлатилади." },
      { en: "predict", uz: "башорат қилмоқ", emoji: "🔭", mnemonic: "«придикт» — «пред»(олдиндан) «дикт»(айтиш)." },
      { en: "intend", uz: "мўлжалламоқ", emoji: "🎯", mnemonic: "«интенд» — «интен»сив ниятланиш." },
      { en: "decide", uz: "қарор қилмоқ", emoji: "🤔", mnemonic: "олдинги дарсдагидек — «сайд»(томон)ни танлайсиз." },
      { en: "future", uz: "келажак", emoji: "🚀", mnemonic: "«фьючер» — «фьючерс»(келажак битими) сўзидан." },
      { en: "expect", uz: "кутмоқ (умид)", emoji: "🙏", mnemonic: "«икспект» — «икс»(номаълум)ни «спект»(кузатиб) кутасиз." },
      { en: "probably", uz: "эҳтимол", emoji: "🎲", mnemonic: "«пробабли» — «пробабилити»(эҳтимоллик)дан." },
      { en: "certainly", uz: "албатта", emoji: "✅", mnemonic: "«сёртнли» — «сёртн»(аниқ) тарзда бўлади." },
    ],
    phrases: [
      { en: "I am going to visit my grandmother tomorrow.", uz: "Мен эртага бувимга бораман (режа)." },
      { en: "I think it will rain tomorrow.", uz: "Менимча, эртага ёмғир ёғади." },
      { en: "She is going to study medicine.", uz: "У тиббиётни ўрганишни режалаштиряпти." },
      { en: "We will probably win the match.", uz: "Биз эҳтимол ўйинда ютамиз." },
      { en: "What are you going to do this weekend?", uz: "Дам олиш кунлари нима қилмоқчисиз?" },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "What are you going to do this weekend?", uz: "Дам олиш кунлари нима қилмоқчисиз?" },
        { speaker: "Anvar", en: "I am going to visit my cousins in Osh.", uz: "Мен Ошдаги қариндошларимга бормоқчиман." },
        { speaker: "Malika", en: "Nice! Do you think the weather will be good?", uz: "Ажойиб! Об-ҳаво яхши бўлади деб ўйлайсизми?" },
        { speaker: "Anvar", en: "I think it will be sunny. What about you?", uz: "Менимча, қуёшли бўлади. Сиз-чи?" },
        { speaker: "Malika", en: "I haven't decided yet, but I will probably stay home and study.", uz: "Мен ҳали қарор қилмадим, лекин эҳтимол уйда қолиб ўқийман." },
        { speaker: "Anvar", en: "You will certainly pass your exams with that plan!", uz: "Шу режа билан сиз имтиҳонларингиздан албатта ўтасиз!" },
      ],
    },
    homeworkPrompt:
      "Эртанги ёки шу ҳафта охиридаги режаларингиз (going to) ва башоратларингиз (will) ҳақида 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 64,
    icon: "❓",
    titleUz: "Шундай эмасми?",
    titleEn: "Isn't It? (Question Tags)",
    vocabulary: [
      { en: "tag question", uz: "тасдиқловчи савол", emoji: "🏷️", mnemonic: "«тэг квесчн» — «тэг»(ёрлиқ)дай гапнинг охирига қўшилади." },
      { en: "agree", uz: "рози бўлмоқ", emoji: "🤝", mnemonic: "«эгри» — «эгри»лик йўқ, тўғри рози бўлади (ёдда қолиши учун)." },
      { en: "confirm", uz: "тасдиқламоқ", emoji: "✔️", mnemonic: "«конфёрм» — «конфирмация»(тасдиқлаш)дан." },
      { en: "right", uz: "тўғри", emoji: "👌", mnemonic: "«райт» — «райт»(тўғри) томонда туради." },
      { en: "correct", uz: "тўғри (жавоб)", emoji: "✅", mnemonic: "«коррект» — «коррект»ировка (тузатиш) орқали тўғриланади." },
      { en: "opinion", uz: "фикр", emoji: "💭", mnemonic: "«опинион» — «опинион» сўзи ўзбекчада ҳам «опинион сўров» деб ишлатилади." },
      { en: "isn't it", uz: "шундай эмасми", emoji: "❔", mnemonic: "«изнт ит» — гап охирида «шундайми?» деб сўралади." },
      { en: "don't you", uz: "сиз-чи (эмасми)", emoji: "❔", mnemonic: "«донт ю» — «дон»(қилмайсизми) деб сўралади." },
    ],
    phrases: [
      { en: "You are a student, aren't you?", uz: "Сиз ўқувчисиз, шундай эмасми?" },
      { en: "She doesn't like coffee, does she?", uz: "У қаҳва ёқтирмайди, шундай эмасми?" },
      { en: "He can swim, can't he?", uz: "У суза олади, шундай эмасми?" },
      { en: "They didn't come, did they?", uz: "Улар келмади, шундай эмасми?" },
      { en: "It's a nice day, isn't it?", uz: "Бугун ажойиб кун, шундай эмасми?" },
    ],
    dialogue: {
      speakers: ["Anvar", "Muhammad"],
      lines: [
        { speaker: "Anvar", en: "It's a beautiful morning, isn't it?", uz: "Бугун ажойиб тонг, шундай эмасми?" },
        { speaker: "Muhammad", en: "Yes, it is! You like English, don't you?", uz: "Ҳа, шундай! Сиз инглиз тилини ёқтирасиз, шундай эмасми?" },
        { speaker: "Anvar", en: "Yes, I love it. You've studied here for two years, haven't you?", uz: "Ҳа, жуда яхши кўраман. Сиз бу ерда икки йилдан бери ўқияпсиз, шундай эмасми?" },
        { speaker: "Muhammad", en: "That's right. You can't come to the party tonight, can you?", uz: "Тўғри. Сиз бугун кечки зиёфатга кела олмайсиз, шундай эмасми?" },
        { speaker: "Anvar", en: "Actually, I can come! We agree on the time, don't we?", uz: "Аслида, кела оламан! Вақт бўйича келишдик, шундай эмасми?" },
        { speaker: "Muhammad", en: "Yes, seven o'clock, isn't it?", uz: "Ҳа, соат еттида, шундай эмасми?" },
      ],
    },
    homeworkPrompt:
      "Question tags (aren't you? isn't it? don't you? can't he?) дан фойдаланиб 9-10 та гап ёзинг: дўстингиз, оилангиз ёки мактаб ҳақида. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 65,
    icon: "🗨️",
    titleUz: "У нима деди",
    titleEn: "What He Said (Reported Speech)",
    vocabulary: [
      { en: "said", uz: "деди", emoji: "💬", mnemonic: "«сед» — «сад»(содда) тарзда деди." },
      { en: "told", uz: "айтди (кимгадир)", emoji: "🗣️", mnemonic: "«тоулд» — «тол»(сўзлаб) айтиб берди." },
      { en: "reported", uz: "хабар қилди", emoji: "📰", mnemonic: "«рипортид» — «репортёр»гадай хабар қилди." },
      { en: "mentioned", uz: "тилга олди", emoji: "📌", mnemonic: "«меншнд» — «меню»даги каби тилга олди." },
      { en: "explained", uz: "тушунтирди", emoji: "📖", mnemonic: "«иксплейнд» — «икс»(номаълум)ни «плейн»(содда) қилиб тушунтирди." },
      { en: "according to", uz: "...га кўра", emoji: "📊", mnemonic: "«акординг ту» — «акорд»(мослик)га кўра." },
      { en: "quote", uz: "иқтибос", emoji: "❝", mnemonic: "«квоут» — «квот»а(белгиланган)дай иқтибос олинади." },
      { en: "message", uz: "хабар", emoji: "✉️", mnemonic: "«месиж» — «мессаж» сўзи ўзбекчада ҳам шундай ишлатилади." },
    ],
    phrases: [
      { en: "She said that she was tired.", uz: "У чарчаганини айтди." },
      { en: "He told me he would come later.", uz: "У менга кейинроқ келишини айтди." },
      { en: "They said they liked the movie.", uz: "Улар филмни ёқтирганини айтишди." },
      { en: "My teacher said homework was important.", uz: "Ўқитувчим уй вазифаси муҳимлигини айтди." },
      { en: "He mentioned that he was busy.", uz: "У бандлигини тилга олди." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "What did the teacher say about the test?", uz: "Ўқитувчи тест ҳақида нима деди?" },
        { speaker: "Anvar", en: "She said that the test would be next Monday.", uz: "У тест келгуси душанба куни бўлишини айтди." },
        { speaker: "Malika", en: "Did she mention what topics we should study?", uz: "У қандай мавзуларни ўрганишимиз кераклигини тилга олдими?" },
        { speaker: "Anvar", en: "Yes, she explained that we need to review lessons 51 to 60.", uz: "Ҳа, у 51-60-дарсларни такрорлашимиз кераклигини тушунтирди." },
        { speaker: "Malika", en: "Thanks! I heard Muhammad said he was worried about it.", uz: "Раҳмат! Мен Муҳаммад бу ҳақда ташвишланганини айтди деб эшитдим." },
        { speaker: "Anvar", en: "Don't worry, I told him it would be easy!", uz: "Хавотир олманг, мен унга бу осон бўлишини айтдим!" },
      ],
    },
    homeworkPrompt:
      "Кимдир сизга айтган гапларни (Reported Speech: said that, told me) 9-10 та гап шаклида ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 66,
    icon: "🌅",
    titleUz: "Кундалик феъллар",
    titleEn: "Everyday Phrasal Verbs",
    vocabulary: [
      { en: "get up", uz: "ўрнидан турмоқ", emoji: "🛏️", mnemonic: "«гет ап» — «гет»(олиш)+«ап»(юқорига), ўрнингиздан турасиз." },
      { en: "turn on", uz: "ёқмоқ (қурилма)", emoji: "🔛", mnemonic: "«тёрн он» — «тёрн»(бурамоқ)+«он»(очиқ)." },
      { en: "turn off", uz: "ўчирмоқ", emoji: "🔴", mnemonic: "«тёрн оф» — «тёрн»(бурамоқ)+«оф»(ёпиқ)." },
      { en: "put on", uz: "кийимоқ", emoji: "👕", mnemonic: "«пут он» — «пут»(қўймоқ)+«он»(устига), кийимни устингизга қўясиз." },
      { en: "take off", uz: "ечмоқ (кийим)", emoji: "🧥", mnemonic: "«тейк оф» — «тейк»(олмоқ)+«оф»(узоққа), кийимни ечиб оласиз." },
      { en: "look after", uz: "қарамоқ (парвариш)", emoji: "👶", mnemonic: "«лук афтэр» — «лук»(қарамоқ)+«афтер»(ортидан) кузатасиз." },
      { en: "wake up", uz: "уйғонмоқ", emoji: "⏰", mnemonic: "«вейк ап» — «вейк»(уйғонмоқ)+«ап»(тўлиқ)." },
      { en: "go out", uz: "ташқарига чиқмоқ", emoji: "🚪", mnemonic: "«гоу аут» — «гоу»(бормоқ)+«аут»(ташқарига)." },
    ],
    phrases: [
      { en: "I get up at six every day.", uz: "Мен ҳар куни соат олтида ўрнимдан тураман." },
      { en: "Please turn off the lights.", uz: "Илтимос, чироқларни ўчиринг." },
      { en: "She puts on her jacket before going out.", uz: "У чиқишдан олдин куртка кийиб олади." },
      { en: "He looks after his little brother every afternoon.", uz: "У ҳар куни тушдан кейин укасига қарайди." },
      { en: "We go out with friends on weekends.", uz: "Биз дам олиш кунлари дўстлар билан ташқарига чиқамиз." },
    ],
    dialogue: {
      speakers: ["Muhammad", "Malika"],
      lines: [
        { speaker: "Muhammad", en: "What time do you get up on school days?", uz: "Мактаб кунлари соат нечада ўрнингиздан турасиз?" },
        { speaker: "Malika", en: "I wake up at six and get up right away.", uz: "Мен соат олтида уйғонаман ва дарҳол ўрнимдан тураман." },
        { speaker: "Muhammad", en: "Do you look after anyone in your family?", uz: "Оилангизда кимгадир қарайсизми?" },
        { speaker: "Malika", en: "Yes, I look after my younger brother in the evening.", uz: "Ҳа, мен кечқурун укамга қарайман." },
        { speaker: "Muhammad", en: "Nice. Don't forget to turn off the TV before you go out!", uz: "Яхши. Ташқарига чиқишдан олдин телевизорни ўчиришни унутманг!" },
        { speaker: "Malika", en: "I always turn it off and put on my shoes before leaving.", uz: "Мен доим уни ўчириб, чиқишдан олдин пойабзалимни кияман." },
      ],
    },
    homeworkPrompt:
      "Кундалик ҳаётингиз ҳақида phrasal verbs (get up, turn on/off, put on, take off, look after, go out) дан фойдаланиб 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 67,
    icon: "🛫",
    titleUz: "Саёҳат феъллари",
    titleEn: "Travel Phrasal Verbs",
    vocabulary: [
      { en: "check in", uz: "рўйхатдан ўтмоқ", emoji: "🧾", mnemonic: "«чек ин» — «чек»(текшириш)+«ин»(ичкарига), аэропортда рўйхатдан ўтасиз." },
      { en: "take off", uz: "учиб кетмоқ (самолёт)", emoji: "🛫", mnemonic: "«тейк оф» — самолёт ердан «олиниб» юқорига кетади." },
      { en: "land", uz: "қўнмоқ", emoji: "🛬", mnemonic: "«лэнд» — «лэнд»(ер)га қўнади." },
      { en: "pick up", uz: "олиб кетмоқ (машинада)", emoji: "🚗", mnemonic: "«пик ап» — «пик»(олмоқ)+«ап»(юқорига), машинага ўтқазиб оласиз." },
      { en: "drop off", uz: "тушириб қўймоқ", emoji: "🚕", mnemonic: "«дроп оф» — «дроп»(тушириш)+«оф»(пастга)." },
      { en: "set off", uz: "йўлга чиқмоқ", emoji: "🏃", mnemonic: "«сет оф» — «сет»(қўйиш)+«оф»(бошлаш), йўлга чиқасиз." },
      { en: "come back", uz: "қайтиб келмоқ", emoji: "🔙", mnemonic: "«кам бэк» — «кам»(келмоқ)+«бэк»(орқага)." },
      { en: "look forward to", uz: "интиқлик билан кутмоқ", emoji: "😍", mnemonic: "«лук форвард ту» — «лук»(қарамоқ)+«форвард»(олдинга), интизорлик билан кутасиз." },
    ],
    phrases: [
      { en: "We checked in at the airport early.", uz: "Биз аэропортда эрта рўйхатдан ўтдик." },
      { en: "The plane will take off at noon.", uz: "Самолёт пешинда учиб кетади." },
      { en: "Can you pick me up at six?", uz: "Мени соат олтида олиб кета оласизми?" },
      { en: "We set off early in the morning.", uz: "Биз эрталаб эрта йўлга чиқдик." },
      { en: "I look forward to our trip.", uz: "Мен саёҳатимизни интиқлик билан кутяпман." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What time do we need to check in at the airport?", uz: "Аэропортда соат нечада рўйхатдан ўтишимиз керак?" },
        { speaker: "Malika", en: "We should check in two hours before the plane takes off.", uz: "Самолёт учиб кетишидан икки соат олдин рўйхатдан ўтишимиз керак." },
        { speaker: "Anvar", en: "Can my father drop us off at the airport?", uz: "Отам бизни аэропортгача тушириб қўя оладими?" },
        { speaker: "Malika", en: "Yes, and someone will pick us up when we land.", uz: "Ҳа, ва биз қўнганимизда бизни кимдир олиб кетади." },
        { speaker: "Anvar", en: "When do we set off from home?", uz: "Уйдан қачон йўлга чиқамиз?" },
        { speaker: "Malika", en: "At five in the morning. I look forward to this trip!", uz: "Эрталаб соат бешда. Мен бу саёҳатни интиқлик билан кутяпман!" },
      ],
    },
    homeworkPrompt:
      "Саёҳат ҳақида phrasal verbs (check in, take off, land, pick up, drop off, set off, come back) дан фойдаланиб 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 68,
    icon: "📍",
    titleUz: "Жой ва ҳаракат предлоглари",
    titleEn: "Prepositions of Place & Movement",
    vocabulary: [
      { en: "between", uz: "ўртасида", emoji: "↔️", mnemonic: "«битвин» — «би»(икки) «твин»(эгизак) ўртасида." },
      { en: "behind", uz: "орқасида", emoji: "⬅️", mnemonic: "«бихайнд» — «би»(бўлмоқ) «хайнд»(орқа)да." },
      { en: "in front of", uz: "олдида", emoji: "➡️", mnemonic: "«ин фронт оф» — «фронт»(олд қисм)ида." },
      { en: "next to", uz: "ёнида", emoji: "↕️", mnemonic: "«некст ту» — «некст»(кейинги) жойда, яъни ёнида." },
      { en: "through", uz: "орқали (ичидан)", emoji: "🚇", mnemonic: "«сру» — тунелдан «сру-у» деб ўтгандай." },
      { en: "across", uz: "рўпарасида/кесиб", emoji: "🚶", mnemonic: "«экросс» — «кросс»(кесиб ўтиш) сўзидан." },
      { en: "along", uz: "бўйлаб", emoji: "🌊", mnemonic: "«элонг» — «лонг»(узун) йўл бўйлаб борасиз." },
      { en: "around", uz: "атрофида", emoji: "🔄", mnemonic: "«эраунд» — «раунд»(доира) шаклида атрофида." },
    ],
    phrases: [
      { en: "The shop is between the bank and the school.", uz: "Дўкон банк билан мактаб ўртасида." },
      { en: "He is standing behind the door.", uz: "У эшик орқасида турибди." },
      { en: "Walk across the street carefully.", uz: "Кўчани эҳтиёткорлик билан кесиб ўтинг." },
      { en: "We walked along the river.", uz: "Биз дарё бўйлаб юрдик." },
      { en: "The cat is sitting next to the box.", uz: "Мушук қути ёнида ўтирибди." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "Excuse me, where is the pharmacy?", uz: "Кечирасиз, дорихона қаерда?" },
        { speaker: "Anvar", en: "It's between the bakery and the bookshop.", uz: "У новвойхона билан китоб дўкони ўртасида." },
        { speaker: "Malika", en: "Is it in front of the park?", uz: "У боғнинг олдидами?" },
        { speaker: "Anvar", en: "No, it's behind the park. Walk along this street first.", uz: "Йўқ, у боғнинг орқасида. Аввал шу кўча бўйлаб юринг." },
        { speaker: "Malika", en: "Should I go through the market?", uz: "Бозор ичидан ўтишим керакми?" },
        { speaker: "Anvar", en: "Yes, and then cross the street. It's right next to the fountain.", uz: "Ҳа, кейин кўчадан ўтинг. У фавворанинг айнан ёнида." },
      ],
    },
    homeworkPrompt:
      "Уйингиз ёки маҳаллангиз атрофидаги жойларни (between, behind, in front of, next to, across, along, around) тасвирлаб 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 69,
    icon: "🥕",
    titleUz: "Қанча? Нечта?",
    titleEn: "How Much? How Many? (Quantifiers)",
    vocabulary: [
      { en: "much", uz: "кўп (саналмас)", emoji: "💧", mnemonic: "«мач» — «мач»та (кўп миқдорда) суюқлик." },
      { en: "many", uz: "кўп (саналувчи)", emoji: "🔢", mnemonic: "«мени» — «мени» дегандай кўп сонли нарса." },
      { en: "a lot of", uz: "жуда кўп", emoji: "📦", mnemonic: "«э лот оф» — «лот»(партия) миқдорда кўп." },
      { en: "a little", uz: "бироз (саналмас)", emoji: "🥄", mnemonic: "«э литл» — «литл»(кичик) миқдор." },
      { en: "a few", uz: "бир нечта (саналувчи)", emoji: "🔟", mnemonic: "«э фью» — «фью»(кам сон)дан." },
      { en: "some", uz: "баъзи/бироз", emoji: "🍪", mnemonic: "«сам» — «сам»овардаги бироз чой." },
      { en: "any", uz: "ҳеч қандай/бирор", emoji: "❓", mnemonic: "«эни» — «эни»қса саволда ишлатилади." },
      { en: "enough", uz: "етарли", emoji: "👍", mnemonic: "«инаф» — «инаф»тидан (шунга) етарли бўлади." },
    ],
    phrases: [
      { en: "How much water do you drink every day?", uz: "Ҳар куни қанча сув ичасиз?" },
      { en: "How many books do you have?", uz: "Сизда нечта китоб бор?" },
      { en: "I have a little time before class.", uz: "Дарсдан олдин менда бироз вақт бор." },
      { en: "There are a few apples left.", uz: "Бир нечта олма қолган." },
      { en: "We don't have enough money for this.", uz: "Бунинг учун бизда етарли пул йўқ." },
    ],
    dialogue: {
      speakers: ["Muhammad", "Malika"],
      lines: [
        { speaker: "Muhammad", en: "How much rice do we need for the plov?", uz: "Палов учун қанча гуруч керак?" },
        { speaker: "Malika", en: "We need a lot of rice, about two kilograms.", uz: "Бизга жуда кўп гуруч керак, тахминан икки килограмм." },
        { speaker: "Muhammad", en: "How many carrots should I buy?", uz: "Мен нечта сабзи сотиб олишим керак?" },
        { speaker: "Malika", en: "Just a few, maybe five or six.", uz: "Фақат бир нечта, балки беш ёки олтита." },
        { speaker: "Muhammad", en: "Do we have enough onions at home?", uz: "Уйда етарли пиёзимиз борми?" },
        { speaker: "Malika", en: "We have some, but let's buy a little more to be safe.", uz: "Бироз бор, лекин ишончли бўлиши учун яна бироз сотиб олайлик." },
      ],
    },
    homeworkPrompt:
      "Ошхонангиздаги озиқ-овқатлар ёки кундалик буюмларингиз ҳақида much, many, a lot of, a little, a few, some, any, enough сўзларидан фойдаланиб 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 70,
    icon: "🧠",
    titleUz: "Характер",
    titleEn: "Character & Personality",
    vocabulary: [
      { en: "honest", uz: "ростгўй", emoji: "🤲", mnemonic: "«онест» — «он»(унинг) «эст»(бор) ростлиги." },
      { en: "generous", uz: "саховатли", emoji: "🎁", mnemonic: "«женерос» — «жен»тлмен каби саховатли." },
      { en: "shy", uz: "уятчан", emoji: "🙈", mnemonic: "«шай» — «шай»тонга ўхшамай, тортинчоқ." },
      { en: "confident", uz: "ўзига ишонган", emoji: "💪", mnemonic: "«конфидент» — «конфиденциал»(ишончли) ҳисдан." },
      { en: "patient", uz: "сабрли", emoji: "⏳", mnemonic: "«пейшент» — беморга ўхшаб «пейшент»лик билан кутади (аслида «bemor» ҳам шу сўз, лекин бу ерда сабр маъноси)." },
      { en: "lazy", uz: "дангаса", emoji: "🦥", mnemonic: "«лейзи» — «лейзи»боб (ялқов) сифатдай ётади." },
      { en: "creative", uz: "ижодкор", emoji: "🎨", mnemonic: "«криейтив» — «криейт»(яратмоқ)дан." },
      { en: "stubborn", uz: "қайсар", emoji: "🐐", mnemonic: "«стабон» — «стоп»лашга «бор»гандай қайсарлик билан туради." },
    ],
    phrases: [
      { en: "My friend is very honest with everyone.", uz: "Дўстим ҳамма билан жуда ростгўй." },
      { en: "She is generous with her time and money.", uz: "У вақти ва пулида саховатли." },
      { en: "He is a bit shy at first, but friendly later.", uz: "У аввалига бироз уятчан, лекин кейин самимий бўлади." },
      { en: "You need to be patient with young children.", uz: "Кичик болалар билан сабрли бўлишингиз керак." },
      { en: "My sister is very creative and loves art.", uz: "Синглим жуда ижодкор ва санъатни яхши кўради." },
    ],
    dialogue: {
      speakers: ["Anvar", "Muhammad"],
      lines: [
        { speaker: "Anvar", en: "What is your best friend like?", uz: "Энг яқин дўстингиз қандай инсон?" },
        { speaker: "Muhammad", en: "He is very honest and confident.", uz: "У жуда ростгўй ва ўзига ишонган." },
        { speaker: "Anvar", en: "Is he ever stubborn?", uz: "У баъзан қайсар бўладими?" },
        { speaker: "Muhammad", en: "Sometimes! But he is also generous and patient.", uz: "Баъзан! Лекин у саховатли ва сабрли ҳам." },
        { speaker: "Anvar", en: "My cousin is a bit shy, but very creative.", uz: "Амакивачам бироз уятчан, лекин жуда ижодкор." },
        { speaker: "Muhammad", en: "That's a great combination of qualities!", uz: "Бу ажойиб хусусиятлар уйғунлиги!" },
      ],
    },
    homeworkPrompt:
      "Дўстингиз ёки оила аъзоингизнинг характери ҳақида (honest, generous, shy, confident, patient, lazy, creative, stubborn сўзлари билан) 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 71,
    icon: "🚫",
    titleUz: "Рухсат ва тақиқ",
    titleEn: "Permission & Prohibition",
    vocabulary: [
      { en: "allowed", uz: "рухсат этилган", emoji: "✅", mnemonic: "«элауд» — «элоу»(рухсат бермоқ)дан." },
      { en: "not allowed", uz: "рухсат этилмаган", emoji: "🚷", mnemonic: "«нот элауд» — «нот»(эмас) рухсат этилган." },
      { en: "permit", uz: "рухсат бермоқ", emoji: "📝", mnemonic: "«пёрмит» — «permission»(рухсат)дан." },
      { en: "prohibit", uz: "тақиқламоқ", emoji: "🛑", mnemonic: "«прохибит» — «про»(олдин) «хибит»(тўсиш)." },
      { en: "may", uz: "мумкин (рухсат учун)", emoji: "🙋", mnemonic: "«мей» — «мей»лига қараб рухсат сўралади." },
      { en: "mustn't", uz: "қатъиян тақиқланган", emoji: "⛔", mnemonic: "«маснт» — «маст»(шарт) эмас (эмас), яъни қатъиян мумкин эмас." },
      { en: "rule", uz: "қоида", emoji: "📜", mnemonic: "олдинги дарсдагидек — машина «рул»и йўналишни бошқаради." },
      { en: "sign", uz: "белги/лавҳа", emoji: "🚸", mnemonic: "«сайн» — «сайн»бордда белги кўринади." },
    ],
    phrases: [
      { en: "You are allowed to use a dictionary in the exam.", uz: "Имтиҳонда луғатдан фойдаланишга рухсат берилган." },
      { en: "You mustn't smoke here.", uz: "Бу ерда чекиш қатъиян тақиқланган." },
      { en: "Are we allowed to leave early today?", uz: "Бугун эрта кетишга рухсат борми?" },
      { en: "Photography is prohibited in this museum.", uz: "Бу музейда фотосуратга олиш тақиқланган." },
      { en: "May I ask a question?", uz: "Савол бера оламанми?" },
    ],
    dialogue: {
      speakers: ["Malika", "Muhammad"],
      lines: [
        { speaker: "Malika", en: "May I use my phone during the lesson?", uz: "Дарс давомида телефонимдан фойдаланишим мумкинми?" },
        { speaker: "Muhammad", en: "No, phones are not allowed in class.", uz: "Йўқ, синфда телефонлар рухсат этилмаган." },
        { speaker: "Malika", en: "I see. Are we allowed to drink water?", uz: "Тушунарли. Сув ичишга рухсат берилганми?" },
        { speaker: "Muhammad", en: "Yes, that's fine. But you mustn't eat during the lesson.", uz: "Ҳа, буниси мумкин. Лекин дарс давомида овқат ейиш тақиқланган." },
        { speaker: "Malika", en: "What does that sign on the wall mean?", uz: "Деворда турган лавҳа нима маънони билдиради?" },
        { speaker: "Muhammad", en: "It shows that running in the hallway is prohibited.", uz: "У йўлакда югуриш тақиқланганини кўрсатади." },
      ],
    },
    homeworkPrompt:
      "Мактабингиз ёки уйингиздаги рухсат ва тақиқлар ҳақида (allowed, not allowed, may, mustn't, prohibited) 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 72,
    icon: "🏦",
    titleUz: "Банк ва почтада",
    titleEn: "At the Bank & Post Office",
    vocabulary: [
      { en: "account", uz: "ҳисоб рақами", emoji: "💳", mnemonic: "«эккаунт» — «акаунт» сўзи ўзбекчада ҳам шундай." },
      { en: "deposit", uz: "омонат қўймоқ", emoji: "💰", mnemonic: "«дипозит» — «депозит» сўзи ўзбекчада ҳам шундай." },
      { en: "withdraw", uz: "пул ечмоқ", emoji: "🏧", mnemonic: "«виздро» — «виз»(билан) «дро»(тортиб олиш)." },
      { en: "package", uz: "почта посилкаси", emoji: "📦", mnemonic: "«пакиж» — «пакет» сўзига ўхшаш." },
      { en: "stamp", uz: "марка", emoji: "📮", mnemonic: "«стэмп» — «штамп» сўзига ўхшаш." },
      { en: "address", uz: "манзил", emoji: "🏠", mnemonic: "«эдрес» — «адрес» сўзи ўзбекчада ҳам шундай." },
      { en: "envelope", uz: "конверт", emoji: "✉️", mnemonic: "«энвилоуп» — «конверт» сўзига ўхшаш эшитилади." },
      { en: "receipt", uz: "чек/квитанция", emoji: "🧾", mnemonic: "«рисит» — «receipt»да «recipe»(рецепт)дай ёзилган маълумот бор." },
    ],
    phrases: [
      { en: "I want to open a bank account.", uz: "Мен банк ҳисоб рақами очмоқчиман." },
      { en: "Can I withdraw some money, please?", uz: "Илтимос, бироз пул ечиб ола оламанми?" },
      { en: "I need to send this package to Osh.", uz: "Мен бу посилкани Ошга юборишим керак." },
      { en: "What is the postage for this letter?", uz: "Бу хат учун почта ҳақи қанча?" },
      { en: "Please give me a receipt.", uz: "Илтимос, менга чек беринг." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "I need to go to the bank to deposit some money.", uz: "Менга банкка бориб бироз пул қўйишим керак." },
        { speaker: "Malika", en: "Do you also need to withdraw money?", uz: "Сизга пул ечиш ҳам керакми?" },
        { speaker: "Anvar", en: "No, just a deposit. After that, I'll go to the post office.", uz: "Йўқ, фақат омонат қўйиш. Шундан кейин почтага бораман." },
        { speaker: "Malika", en: "What are you sending?", uz: "Нима жўнатяпсиз?" },
        { speaker: "Anvar", en: "A package for my grandmother. I need a stamp and her address.", uz: "Бувимга посилка. Менга марка ва унинг манзили керак." },
        { speaker: "Malika", en: "Don't forget to ask for a receipt!", uz: "Чек сўрашни унутманг!" },
      ],
    },
    homeworkPrompt:
      "Банк ёки почтада бўлган (ёки бўладиган) ишларингиз ҳақида account, deposit, withdraw, package, stamp, address, receipt сўзлари билан 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 73,
    icon: "🔑",
    titleUz: "Уй ижараси",
    titleEn: "Renting a House",
    vocabulary: [
      { en: "rent", uz: "ижара ҳақи", emoji: "🏠", mnemonic: "«рент» — «рент»а сўзи ўзбекчада ҳам «ижара» маъносида." },
      { en: "landlord", uz: "уй эгаси", emoji: "🧑‍💼", mnemonic: "«лэндлорд» — «лэнд»(ер)нинг «лорд»и (эгаси)." },
      { en: "tenant", uz: "ижарачи", emoji: "🧍", mnemonic: "«тенант» — уйда «тен»тираб (яшаб) юрган ижарачи." },
      { en: "furnished", uz: "жиҳозланган", emoji: "🛋️", mnemonic: "«фёрнишд» — «фёрничер»(мебель) билан жиҳозланган." },
      { en: "deposit", uz: "кафолат пули", emoji: "💵", mnemonic: "олдинги дарсдагидек — банкка қўйиладиган омонат." },
      { en: "contract", uz: "шартнома", emoji: "📄", mnemonic: "«контракт» сўзи ўзбекчада ҳам шундай ишлатилади." },
      { en: "monthly", uz: "ойлик", emoji: "🗓️", mnemonic: "«манфли» — «манф»(ой)лик тўлов." },
      { en: "apartment", uz: "квартира", emoji: "🏢", mnemonic: "«эпартмент» — «апартамент» сўзига ўхшаш." },
    ],
    phrases: [
      { en: "How much is the rent per month?", uz: "Ойлик ижара ҳақи қанча?" },
      { en: "Is the apartment furnished?", uz: "Квартира жиҳозланганми?" },
      { en: "I need to pay a deposit first.", uz: "Аввал кафолат пулини тўлашим керак." },
      { en: "The landlord lives nearby.", uz: "Уй эгаси яқин атрофда яшайди." },
      { en: "We signed a one-year contract.", uz: "Биз бир йиллик шартнома имзоладик." },
    ],
    dialogue: {
      speakers: ["Malika", "Anvar"],
      lines: [
        { speaker: "Malika", en: "My family is looking for a new apartment.", uz: "Оиламиз янги квартира қидиряпти." },
        { speaker: "Anvar", en: "How much is the monthly rent in your area?", uz: "Сизнинг ҳудудингизда ойлик ижара ҳақи қанча?" },
        { speaker: "Malika", en: "It's about ten thousand som, and it's furnished.", uz: "У тахминан ўн минг сўм, ва у жиҳозланган." },
        { speaker: "Anvar", en: "Do you need to pay a deposit to the landlord?", uz: "Уй эгасига кафолат пули тўлашингиз керакми?" },
        { speaker: "Malika", en: "Yes, and we also need to sign a contract.", uz: "Ҳа, ва биз шартнома ҳам имзолашимиз керак." },
        { speaker: "Anvar", en: "I hope you find a good tenant agreement!", uz: "Умид қиламанки, яхши ижара шартномаси топасиз!" },
      ],
    },
    homeworkPrompt:
      "Уй ижараси ҳақида (rent, landlord, tenant, furnished, deposit, contract, monthly, apartment сўзлари билан) 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 74,
    icon: "💼",
    titleUz: "Иш суҳбати",
    titleEn: "Job Interview",
    vocabulary: [
      { en: "interview", uz: "суҳбат (ишга)", emoji: "🗣️", mnemonic: "«интервью» сўзи ўзбекчада ҳам шундай ишлатилади." },
      { en: "résumé", uz: "резюме", emoji: "📄", mnemonic: "«резюме» сўзи ўзбекчада ҳам шундай." },
      { en: "experience", uz: "тажриба", emoji: "🎯", mnemonic: "51-дарсдагидек — «экспери»мент қилиб тажриба орттирасиз." },
      { en: "strength", uz: "кучли томон", emoji: "💪", mnemonic: "«стренгс» — «стронг»(кучли)дан." },
      { en: "weakness", uz: "заиф томон", emoji: "🪫", mnemonic: "«викнес» — «вик»(заиф)дан." },
      { en: "qualification", uz: "малака", emoji: "🎓", mnemonic: "«квалификейшн» — «квалификация» сўзи ўзбекчада ҳам шундай." },
      { en: "salary", uz: "маош", emoji: "💵", mnemonic: "«сэлари» — «сол»(тузланиб) олинадиган маош (қадимги тарихдан)." },
      { en: "apply", uz: "ариза бермоқ", emoji: "📝", mnemonic: "«эплай» — «эплай»лаб (ёзиб) ариза берасиз." },
    ],
    phrases: [
      { en: "I would like to apply for this job.", uz: "Мен бу ишга ариза бермоқчиман." },
      { en: "What are your strengths and weaknesses?", uz: "Сизнинг кучли ва заиф томонларингиз нима?" },
      { en: "I have two years of experience in this field.", uz: "Менда бу соҳада икки йиллик тажриба бор." },
      { en: "What is the salary for this position?", uz: "Бу лавозим учун маош қанча?" },
      { en: "Thank you very much for the interview.", uz: "Суҳбат учун сизга катта раҳмат." },
    ],
    dialogue: {
      speakers: ["Muhammad", "Malika"],
      lines: [
        { speaker: "Muhammad", en: "Why do you want to apply for this job?", uz: "Нега бу ишга ариза бермоқчисиз?" },
        { speaker: "Malika", en: "I have good qualifications and I love working with people.", uz: "Менда яхши малака бор ва мен одамлар билан ишлашни яхши кўраман." },
        { speaker: "Muhammad", en: "What is your biggest strength?", uz: "Энг катта кучли томонингиз нима?" },
        { speaker: "Malika", en: "I am very patient and hardworking. My weakness is that I worry too much.", uz: "Мен жуда сабрли ва меҳнатсеварман. Заиф томоним — жуда кўп ташвишланаман." },
        { speaker: "Muhammad", en: "Do you have any experience in this field?", uz: "Бу соҳада тажрибангиз борми?" },
        { speaker: "Malika", en: "Yes, one year. Also, may I ask about the salary?", uz: "Ҳа, бир йил. Шунингдек, маош ҳақида сўрасам майлими?" },
      ],
    },
    homeworkPrompt:
      "Иш суҳбати ҳақида (interview, résumé, experience, strength, weakness, qualification, salary, apply сўзлари билан) 9-10 та гап ёзинг — ўзингизни номзод сифатида тасаввур қилинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 75,
    icon: "🚀",
    titleUz: "Орзуларим",
    titleEn: "Future Goals & Ambitions",
    vocabulary: [
      { en: "goal", uz: "мақсад", emoji: "🎯", mnemonic: "«гоул» — футболда «гол» уриш каби мақсадга эришасиз." },
      { en: "ambition", uz: "орзу-интилиш", emoji: "🌠", mnemonic: "«эмбишн» — «эмбиция» сўзи ўзбекчада ҳам шундай." },
      { en: "achieve", uz: "эришмоқ", emoji: "🏆", mnemonic: "«эчив» — «эч»(ҳар бир) қадамда эришасиз." },
      { en: "dream job", uz: "орзудаги касб", emoji: "💭", mnemonic: "«дрим жоб» — «дрим»(туш/орзу) касби." },
      { en: "succeed", uz: "муваффақиятга эришмоқ", emoji: "🌟", mnemonic: "«саксид» — «сакс»(музикадай) яхши натижа." },
      { en: "hope", uz: "умид қилмоқ", emoji: "🤞", mnemonic: "«хоуп» — «ҳоп»(сакраш) билан умид қиласиз." },
      { en: "future", uz: "келажак", emoji: "🔮", mnemonic: "63-дарсдагидек — «фьючерс»(келажак битими) сўзидан." },
      { en: "become", uz: "бўлмоқ (касб)", emoji: "🔄", mnemonic: "«бикам» — «би»(бўлиш)+«кам»(келиш), нимадир бўлиб қоласиз." },
    ],
    phrases: [
      { en: "My goal is to become a doctor.", uz: "Менинг мақсадим шифокор бўлиш." },
      { en: "I hope to study abroad one day.", uz: "Умид қиламанки, бир куни чет элда ўқийман." },
      { en: "She wants to achieve her dreams.", uz: "У орзуларига эришишни хоҳлайди." },
      { en: "What do you hope to become in the future?", uz: "Келажакда ким бўлишни умид қиласиз?" },
      { en: "I will work hard to succeed.", uz: "Мен муваффақиятга эришиш учун қаттиқ ишлайман." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What is your dream job, Malika?", uz: "Орзудаги касбингиз нима, Малика?" },
        { speaker: "Malika", en: "My dream job is to become an English teacher.", uz: "Орзудаги касбим инглиз тили ўқитувчиси бўлиш." },
        { speaker: "Anvar", en: "That's a great goal! How will you achieve it?", uz: "Бу ажойиб мақсад! Унга қандай эришасиз?" },
        { speaker: "Malika", en: "I will study hard and hope to go to a good university.", uz: "Мен қаттиқ ўқийман ва яхши университетга кириш умидидаман." },
        { speaker: "Anvar", en: "I believe you will succeed. What about your ambitions after that?", uz: "Ишонаманки, муваффақиятга эришасиз. Ундан кейинги орзуларингиз-чи?" },
        { speaker: "Malika", en: "In the future, I hope to open my own school!", uz: "Келажакда ўз мактабимни очишни умид қиламан!" },
      ],
    },
    homeworkPrompt:
      "Келажакдаги орзу ва мақсадларингиз ҳақида (goal, ambition, achieve, dream job, succeed, hope, future, become сўзлари билан) 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 76,
    icon: "🖼️",
    titleUz: "Расмни таърифлаш",
    titleEn: "Describing a Scene",
    vocabulary: [
      { en: "scene", uz: "манзара", emoji: "🎬", mnemonic: "«син» — «сцена»(саҳна) сўзига ўхшаш." },
      { en: "background", uz: "орқа фон", emoji: "🖼️", mnemonic: "62-дарсдагидек — «бэк»(орқа) «граунд»(замин)." },
      { en: "foreground", uz: "олд фон", emoji: "🔍", mnemonic: "«форграунд» — «фор»(олд) «граунд»(замин)." },
      { en: "crowd", uz: "оломон", emoji: "👥", mnemonic: "«крауд» — «крауд»гандай (қалин) тўпланган одамлар." },
      { en: "view", uz: "манзара/кўриниш", emoji: "🌄", mnemonic: "«вью» — «view»гандай кўриб турасиз." },
      { en: "landscape", uz: "пейзаж", emoji: "🏞️", mnemonic: "«лендскейп» — «лэнд»(ер) «скейп»(шакли)." },
      { en: "detail", uz: "тафсилот", emoji: "🔎", mnemonic: "«дитейл» — «детал» сўзи ўзбекчада ҳам шундай." },
      { en: "atmosphere", uz: "муҳит/кайфият", emoji: "🌫️", mnemonic: "«этмосфир» — «атмосфера» сўзи ўзбекчада ҳам шундай." },
    ],
    phrases: [
      { en: "In the picture, I can see a park.", uz: "Расмда мен боғни кўраяпман." },
      { en: "There are many people in the background.", uz: "Орқа фонда кўп одамлар бор." },
      { en: "The atmosphere looks peaceful.", uz: "Муҳит тинч кўринади." },
      { en: "In the foreground, there is a big tree.", uz: "Олд фонда катта дарахт бор." },
      { en: "It looks like a sunny day.", uz: "Бу қуёшли кунга ўхшайди." },
    ],
    dialogue: {
      speakers: ["Malika", "Muhammad"],
      lines: [
        { speaker: "Malika", en: "Look at this photo! What can you see?", uz: "Бу суратга қаранг! Нима кўраяпсиз?" },
        { speaker: "Muhammad", en: "I can see a beautiful landscape with mountains.", uz: "Мен тоғлар билан гўзал пейзажни кўраяпман." },
        { speaker: "Malika", en: "Yes, and in the foreground, there is a small lake.", uz: "Ҳа, ва олд фонда кичик кўл бор." },
        { speaker: "Muhammad", en: "What is happening in the background?", uz: "Орқа фонда нима содир бўляпти?" },
        { speaker: "Malika", en: "There is a crowd of people having a picnic.", uz: "У ерда пикник қилаётган одамлар оломони бор." },
        { speaker: "Muhammad", en: "The atmosphere in this scene looks so relaxing.", uz: "Бу манзарадаги муҳит жуда осойишта кўринади." },
      ],
    },
    homeworkPrompt:
      "Сиз яхши кўрган бир расм ёки хотирадаги манзарани (scene, background, foreground, crowd, view, landscape, detail, atmosphere сўзлари билан) 9-10 та гап билан тасвирланг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 77,
    icon: "🗳️",
    titleUz: "Фикр билдириш",
    titleEn: "Opinions: Agree & Disagree",
    vocabulary: [
      { en: "opinion", uz: "фикр", emoji: "💭", mnemonic: "64-дарсдагидек — «опинион сўров» ўзбекчада ҳам ишлатилади." },
      { en: "agree", uz: "рози бўлмоқ", emoji: "🤝", mnemonic: "64-дарсдагидек — «эгри»лик йўқ, тўғри рози бўлади." },
      { en: "disagree", uz: "рози бўлмаслик", emoji: "🙅", mnemonic: "«дисэгри» — «дис»(эмас)+«агри»(рози)." },
      { en: "believe", uz: "ишонмоқ", emoji: "🙏", mnemonic: "«билив» — «билив»гандай (билиб) ишонасиз." },
      { en: "in my view", uz: "менимча", emoji: "👁️", mnemonic: "«ин май вью» — «вью»(кўриниш)га кўра менинг фикрим." },
      { en: "point", uz: "фикр нуқтаси", emoji: "📍", mnemonic: "«пойнт» — «пункт» сўзига ўхшаш." },
      { en: "argument", uz: "далил/баҳс", emoji: "⚔️", mnemonic: "«аргюмент» — «аргумент» сўзи ўзбекчада ҳам шундай." },
      { en: "convince", uz: "ишонтирмоқ", emoji: "🎤", mnemonic: "«конвинс» — «кон»(билан) «винс»(ютиш), ишонтириб ютасиз." },
    ],
    phrases: [
      { en: "In my opinion, English is very useful.", uz: "Менимча, инглиз тили жуда фойдали." },
      { en: "I agree with you completely.", uz: "Мен сиз билан тўлиқ розиман." },
      { en: "I disagree, I think differently.", uz: "Мен рози эмасман, бошқача фикрдаман." },
      { en: "I believe reading is very important.", uz: "Мен китоб ўқиш жуда муҳим деб ишонаман." },
      { en: "That's a good point.", uz: "Бу яхши фикр." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "In my opinion, learning English is the most useful skill.", uz: "Менимча, инглиз тилини ўрганиш энг фойдали кўникма." },
        { speaker: "Malika", en: "I agree with you. It opens many opportunities.", uz: "Мен сиз билан розиман. У кўп имкониятлар очади." },
        { speaker: "Anvar", en: "Do you think technology is more important, though?", uz: "Лекин технология муҳимроқ деб ўйлайсизми?" },
        { speaker: "Malika", en: "I disagree, I believe language skills come first.", uz: "Мен рози эмасман, тил кўникмалари биринчи ўринда деб ишонаман." },
        { speaker: "Anvar", en: "That's a good point. Both are useful, actually.", uz: "Бу яхши фикр. Аслида, иккаласи ҳам фойдали." },
        { speaker: "Malika", en: "Yes, you convinced me!", uz: "Ҳа, сиз мени ишонтирдингиз!" },
      ],
    },
    homeworkPrompt:
      "Бирор мавзу (масалан, мактабда телефон ишлатиш, спорт) бўйича фикрингизни (in my opinion, I agree, I disagree, I believe сўзлари билан) 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 78,
    icon: "😤",
    titleUz: "Шикоят қилиш",
    titleEn: "Making a Complaint",
    vocabulary: [
      { en: "complaint", uz: "шикоят", emoji: "📢", mnemonic: "«комплейнт» — «комплекс»гандай (мураккаб) муаммодан шикоят." },
      { en: "problem", uz: "муаммо", emoji: "❗", mnemonic: "55-дарсдагидек — ўзбекчада ҳам «проблема»." },
      { en: "refund", uz: "пулни қайтариш", emoji: "💸", mnemonic: "«рифанд» — «ри»(қайта)+«фанд»(маблағ)." },
      { en: "broken", uz: "бузилган", emoji: "💔", mnemonic: "«броукен» — «брок»(синган) ҳолат." },
      { en: "disappointed", uz: "хафа/умидсиз", emoji: "😞", mnemonic: "«дисапойнтед» — «дис»(эмас)+«апойнт»(тайинланган умид)." },
      { en: "apologize", uz: "узр сўрамоқ", emoji: "🙇", mnemonic: "«эположайз» — «апология» сўзи ўзбекчада ҳам шундай." },
      { en: "solve", uz: "ҳал қилмоқ", emoji: "🧩", mnemonic: "«солв» — «solve»гандай масалани ечасиз." },
      { en: "service", uz: "хизмат", emoji: "🛎️", mnemonic: "«сёрвис» — «сервис» сўзи ўзбекчада ҳам шундай." },
    ],
    phrases: [
      { en: "I have a complaint about the service.", uz: "Менда хизмат бўйича шикоят бор." },
      { en: "This product is broken.", uz: "Бу маҳсулот бузилган." },
      { en: "I would like a refund, please.", uz: "Илтимос, пулимни қайтариб беринг." },
      { en: "I am disappointed with this restaurant.", uz: "Мен бу ресторандан хафаман." },
      { en: "Could you solve this problem, please?", uz: "Илтимос, бу муаммони ҳал қила оласизми?" },
    ],
    dialogue: {
      speakers: ["Malika", "Muhammad"],
      lines: [
        { speaker: "Malika", en: "Excuse me, I have a complaint about my order.", uz: "Кечирасиз, менинг буюртмам бўйича шикоятим бор." },
        { speaker: "Muhammad", en: "I'm sorry to hear that. What's the problem?", uz: "Буни эшитиб афсусдаман. Муаммо нимада?" },
        { speaker: "Malika", en: "This phone I bought is broken.", uz: "Мен сотиб олган бу телефон бузилган." },
        { speaker: "Muhammad", en: "I apologize for the inconvenience. Would you like a refund?", uz: "Ноқулайлик учун узр сўрайман. Пулингизни қайтариб беришни хоҳлайсизми?" },
        { speaker: "Malika", en: "Yes, please. I am very disappointed.", uz: "Ҳа, илтимос. Мен жуда хафаман." },
        { speaker: "Muhammad", en: "I understand. We will solve this problem right away.", uz: "Тушунарли. Биз бу муаммони дарҳол ҳал қиламиз." },
      ],
    },
    homeworkPrompt:
      "Дўкон, ресторан ёки хизмат кўрсатиш бўйича шикоят қилувчи 9-10 та гап ёзинг (complaint, broken, refund, disappointed, apologize, solve сўзлари билан). Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 79,
    icon: "🌱",
    titleUz: "Атроф-муҳит муаммолари",
    titleEn: "Environmental Problems",
    vocabulary: [
      { en: "pollution", uz: "ифлослантириш", emoji: "🏭", mnemonic: "«пелюшн» — «полюция» сўзи ўзбекчада ҳам шундай." },
      { en: "recycle", uz: "қайта ишлаш", emoji: "♻️", mnemonic: "«рисайкл» — «ри»(қайта)+«сайкл»(айланма)." },
      { en: "protect", uz: "ҳимоя қилмоқ", emoji: "🛡️", mnemonic: "«протект» — «протект»ор сўзи ўзбекчада ҳам шундай." },
      { en: "waste", uz: "чиқинди/исроф", emoji: "🗑️", mnemonic: "«вейст» — «вейст»(исроф) қилинган нарса." },
      { en: "climate change", uz: "иқлим ўзгариши", emoji: "🌡️", mnemonic: "«клаймит чейндж» — «клаймит»(иқлим) ва «чейндж»(ўзгариш)." },
      { en: "solution", uz: "ечим", emoji: "💡", mnemonic: "«солюшн» — «солв»(ечмоқ)дан келади." },
      { en: "plastic", uz: "пластмасса", emoji: "🥤", mnemonic: "«пластик» сўзи ўзбекчада ҳам шундай ишлатилади." },
      { en: "save", uz: "тежамоқ/сақламоқ", emoji: "💧", mnemonic: "«сейв» — «сейв»лаб (сақлаб) қоласиз." },
    ],
    phrases: [
      { en: "We must protect the environment.", uz: "Биз атроф-муҳитни ҳимоя қилишимиз керак." },
      { en: "Please recycle your plastic bottles.", uz: "Илтимос, пластик шишаларингизни қайта ишланг." },
      { en: "Pollution is a big problem in big cities.", uz: "Ифлослантириш катта шаҳарларда катта муаммо." },
      { en: "Climate change affects everyone on Earth.", uz: "Иқлим ўзгариши Ердаги ҳамма кишиларга таъсир қилади." },
      { en: "We should save water every day.", uz: "Биз ҳар куни сувни тежашимиз керак." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "What is one big problem for our planet?", uz: "Сайёрамиз учун бир катта муаммо нима?" },
        { speaker: "Malika", en: "I think pollution and climate change are the biggest problems.", uz: "Менимча, ифлослантириш ва иқлим ўзгариши энг катта муаммолар." },
        { speaker: "Anvar", en: "What can we do to help?", uz: "Ёрдам бериш учун нима қила оламиз?" },
        { speaker: "Malika", en: "We can recycle plastic and save water at home.", uz: "Биз пластикни қайта ишлаб, уйда сувни тежашимиз мумкин." },
        { speaker: "Anvar", en: "Do you have any other solutions?", uz: "Бошқа ечимларингиз борми?" },
        { speaker: "Malika", en: "Yes, we should also plant more trees to protect nature.", uz: "Ҳа, табиатни ҳимоя қилиш учун кўпроқ дарахт ҳам экишимиз керак." },
      ],
    },
    homeworkPrompt:
      "Атроф-муҳит муаммолари ва уларнинг ечимлари ҳақида (pollution, recycle, protect, waste, climate change, solution, plastic, save сўзлари билан) 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 80,
    icon: "🪔",
    titleUz: "Анъаналар ва байрамлар",
    titleEn: "Traditions & Festivals",
    vocabulary: [
      { en: "tradition", uz: "анъана", emoji: "🏺", mnemonic: "«традишн» — «традиция» сўзи ўзбекчада ҳам шундай." },
      { en: "celebrate", uz: "нишонламоқ", emoji: "🎉", mnemonic: "«селебрейт» — «селебрити»(машҳур) байрам каби нишонланади." },
      { en: "custom", uz: "урф-одат", emoji: "🎭", mnemonic: "«кастем» — «костюм»лар кийиб урф-одатни бажарасиз." },
      { en: "festival", uz: "фестивал", emoji: "🎪", mnemonic: "«фестивал» сўзи ўзбекчада ҳам шундай ишлатилади." },
      { en: "guest", uz: "меҳмон", emoji: "🤵", mnemonic: "«гест» — «гест»хона (меҳмонхона)да меҳмонлар қолади." },
      { en: "feast", uz: "зиёфат/дастурхон", emoji: "🍽️", mnemonic: "«фист» — «фест»ивал вақтида катта дастурхон ёзилади." },
      { en: "ceremony", uz: "маросим", emoji: "🎊", mnemonic: "«серимони» — «церемония» сўзи ўзбекчада ҳам шундай." },
      { en: "culture", uz: "маданият", emoji: "🏛️", mnemonic: "«калчер» — «культура» сўзи ўзбекчада ҳам шундай." },
    ],
    phrases: [
      { en: "We celebrate Navruz every year in spring.", uz: "Биз ҳар йили баҳорда Наврўзни нишонлаймиз." },
      { en: "It is our tradition to welcome guests warmly.", uz: "Меҳмонларни илиқ кутиб олиш бизнинг анъанамиз." },
      { en: "The festival lasts three days.", uz: "Фестивал уч кун давом этади." },
      { en: "People wear traditional clothes during the ceremony.", uz: "Маросим давомида одамлар анъанавий кийимлар кийишади." },
      { en: "Every culture has its own beautiful customs.", uz: "Ҳар бир маданиятнинг ўзига хос гўзал урф-одатлари бор." },
    ],
    dialogue: {
      speakers: ["Muhammad", "Malika"],
      lines: [
        { speaker: "Muhammad", en: "How does your family celebrate Navruz?", uz: "Оилангиз Наврўзни қандай нишонлайди?" },
        { speaker: "Malika", en: "We cook sumalak and invite many guests for a feast.", uz: "Биз сумалак пиширамиз ва зиёфатга кўп меҳмон таклиф қиламиз." },
        { speaker: "Muhammad", en: "That's a beautiful tradition. Is there a special ceremony?", uz: "Бу гўзал анъана. Махсус маросим борми?" },
        { speaker: "Malika", en: "Yes, there is a festival in our neighborhood with music and dancing.", uz: "Ҳа, маҳалламизда мусиқа ва рақс билан фестивал бўлади." },
        { speaker: "Muhammad", en: "What customs do people follow that day?", uz: "Ўша куни одамлар қандай урф-одатларга амал қилишади?" },
        { speaker: "Malika", en: "People clean their homes and visit relatives. It's part of our culture.", uz: "Одамлар уйларини тозалашади ва қариндошларини зиёрат қилишади. Бу маданиятимизнинг бир қисми." },
      ],
    },
    homeworkPrompt:
      "Сизнинг оилангиз ёки халқингизнинг анъана ва байрамлари ҳақида (tradition, celebrate, custom, festival, guest, feast, ceremony, culture сўзлари билан) 9-10 та гап ёзинг. Ҳар бир қаторга битта гап ёзинг.",
  },

  {
    id: 81,
    icon: "📗",
    titleUz: "Ҳикоя қилиш",
    titleEn: "Telling a Story",
    vocabulary: [
      { en: "once", uz: "бир куни", emoji: "📖", mnemonic: "«ванс» — «ванс апон э тайм» (эртаклар бошланиши)." },
      { en: "suddenly", uz: "тўсатдан", emoji: "⚡", mnemonic: "61-дарсдагидек — «садди»гандай тўсатдан бўлади." },
      { en: "then", uz: "сўнгра", emoji: "➡️", mnemonic: "60-дарсдагидек — «зан»жирдай кетма-кет давом этади." },
      { en: "in the end", uz: "охирида", emoji: "🔚", mnemonic: "«ин зи энд» — «энд»(охир)да якунланади." },
      { en: "finally", uz: "ниҳоят", emoji: "🏁", mnemonic: "60-дарсдагидек — «файнал»(охирги) босқич." },
      { en: "story", uz: "ҳикоя", emoji: "📚", mnemonic: "«стори» — «стори» сўзи ўзбекчада ҳам «сторис» деб ишлатилади." },
      { en: "happened", uz: "содир бўлди", emoji: "💥", mnemonic: "62-дарсдагидек — воқеа содир бўлди." },
      { en: "adventure", uz: "саргузашт", emoji: "🗺️", mnemonic: "«эдвенчер» — «адвентура» сўзи ўзбекчада ҳам шундай." },
    ],
    phrases: [
      { en: "Once, I went to Osh with my family.", uz: "Бир куни мен оилам билан Ошга бордим." },
      { en: "Suddenly, it started to rain heavily.", uz: "Тўсатдан кучли ёмғир ёға бошлади." },
      { en: "Then, we found a small café to wait.", uz: "Сўнгра, биз кутиш учун кичик кафе топдик." },
      { en: "In the end, everything was fine.", uz: "Охирида, ҳаммаси яхши бўлди." },
      { en: "It was an unforgettable adventure.", uz: "Бу унутилмас саргузашт эди." },
    ],
    dialogue: {
      speakers: ["Anvar", "Malika"],
      lines: [
        { speaker: "Anvar", en: "Can you tell me about an interesting trip you have had?", uz: "Менга бўлган қизиқарли саёҳатингиз ҳақида гапириб бера оласизми?" },
        { speaker: "Malika", en: "Once, I traveled to Issyk-Kul with my cousins.", uz: "Бир куни мен амакивачаларим билан Иссиқ-Кўлга саёҳат қилдим." },
        { speaker: "Anvar", en: "What happened during the trip?", uz: "Саёҳат давомида нима содир бўлди?" },
        { speaker: "Malika", en: "While we were swimming, suddenly the weather changed.", uz: "Биз сузаётганимизда, тўсатдан об-ҳаво ўзгарди." },
        { speaker: "Anvar", en: "What did you do then?", uz: "Кейин нима қилдингиз?" },
        { speaker: "Malika", en: "Then, we ran to our tent, and in the end, we laughed about it all night.", uz: "Сўнгра, чодиримизга югурдик, ва охирида биз бутун кеча буни эслаб куламиз." },
        { speaker: "Anvar", en: "That sounds like a wonderful adventure!", uz: "Бу ажойиб саргузашт бўлса керак!" },
      ],
    },
    homeworkPrompt:
      "51-80-дарсларда ўрганилган мавзулар ва грамматикани (Present Perfect, Past Continuous, Conditionals, Modal Verbs, Phrasal Verbs) бирлаштириб, бошингиздан ўтган қизиқарли бир воқеа ёки саёҳат ҳақида ҳикоя қилувчи 9-10 та гап ёзинг. Боғловчи сўзлардан (once, suddenly, then, finally, in the end) фойдаланинг. Ҳар бир қаторга битта гап ёзинг.",
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
