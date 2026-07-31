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
