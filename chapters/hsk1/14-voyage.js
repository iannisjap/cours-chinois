/* ============================================================
   HSK 1 · Leçon 14 — 我看了一个电影 J'ai regardé un film
   D'après « 新HSK教程 1 », leçon 14.
   Vocabulaire de la leçon :
   上(monter/embarquer) · 火车 · 中午 · 开(partir) · 有些 · 有的 ·
   了(accomplissement) · 写 · 都 · 听见 · 不要 · 说话 · 听 · 哪些 ·
   字 · 汉语 · 汉字 · 明年 · 中学 · 小学 · 中学生 · 小学生 · 上学 ·
   他们 · 她们 · 它们 · 晚
   Attention : ce 了, juste après le verbe, marque qu'une action a
   eu lieu (« j'ai regardé »), différent du 了 de fin de phrase vu
   à la leçon 12 (changement de situation, « il pleut maintenant »).
   有些/有的 étendent 一些/这些/那些 déjà connus. 听见 est formé
   comme 看见 (leçon 8). 中学生 et 小学生 tandis que 上学 étend
   上课/上班 déjà connus.
   Grammaire : particule d'aspect 了 (action accomplie) · mots
   séparables (上课, 下课, 说话, 睡觉…) · adverbe de portée 都 (tous).
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  group: "hsk1",
  id: "hsk1-14",
  badge: 14,
  hanzi: "我看了一个电影",
  title: "Leçon 14 · Un trajet en train, l'école",
  desc: "3 parties · 我看了一个电影 · 你们都会写了 · 上学后他们都忙了",
  intro: "Leçon 14 du HSK 1 : dire qu'une action a eu lieu avec 了, généraliser avec 都, et parler de l'entrée à l'école.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"我看了一个电影", title:"Partie 1 · Dans le train", desc:"上(monter) · 火车 · 中午 · 开 · 有些 · 了(accompli)",
    build(){ return [
  N("Bienvenue dans la leçon 14 du HSK 1. Aujourd'hui : dire qu'une action a eu lieu, généraliser avec [[都|dōu]], et parler de l'école. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你们上火车后看见王老师了吗？","Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?","Après être montés dans le train, avez-vous vu le professeur Wang ?",0.5),
  C("没看见。中午车开后，有些人在看书，有些人睡觉了。","Méi kànjiàn. Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kàn shū, yǒuxiē rén shuìjiào le.","Non. Après le départ du train à midi, certains lisaient, d'autres se sont endormis.",0.5),
  C("你呢？","Nǐ ne?","Et toi ?",0.5),
  C("我看了一个电影。","Wǒ kànle yí ge diànyǐng.","J'ai regardé un film.",0.5),
  N("D'abord, révision de la leçon 8 : dites « voir », « apercevoir »."),
  TH(),
  C("看见","kànjiàn","voir",0.6), HOLD(),

  N("« Monter », « embarquer », se dit [[上|shàng]] — un autre sens du mot que vous connaissez pour « sur ». « Le train » se dit [[火车|huǒchē]]. Écoutez et répétez."),
  ...teach2("上火车","shàng huǒchē","monter dans le train"),
  N("Demandez : « Après être montés dans le train, avez-vous vu le professeur Wang ? »"),
  TH(),
  C("你们上火车后看见王老师了吗？","Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?","Après être montés dans le train, avez-vous vu le professeur Wang ?",0.5),
  C("你们上火车后看见王老师了吗？","Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?","Après être montés dans le train, avez-vous vu le professeur Wang ?",0.55), HOLD(),

  N("« Midi » se dit [[中午|zhōngwǔ]]. Et « partir », pour un véhicule, se dit [[开|kāi]] — vous connaissez déjà [[开车|kāichē]], conduire. Écoutez et répétez."),
  ...teach2("车开了","chē kāi le","le véhicule est parti"),
  N("« Certains », « une partie des gens », se dit [[有些|yǒuxiē]] — comme [[一些|yìxiē]] que vous connaissez. Écoutez et répétez."),
  ...teach2("有些人","yǒuxiē rén","certaines personnes"),
  N("Répondez : « Non. Après le départ du train à midi, certains lisaient, d'autres se sont endormis. »"),
  TH(),
  C("没看见。中午车开后，有些人在看书，有些人睡觉了。","Méi kànjiàn. Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kàn shū, yǒuxiē rén shuìjiào le.","Non. Après le départ du train à midi, certains lisaient, d'autres se sont endormis.",0.5),
  C("没看见。中午车开后，有些人在看书，有些人睡觉了。","Méi kànjiàn. Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kàn shū, yǒuxiē rén shuìjiào le.","Non. Après le départ du train à midi, certains lisaient, d'autres se sont endormis.",0.55), HOLD(),

  N("Attention, nouveau sens pour [[了|le]] : placé juste après le verbe, il marque qu'une action a eu lieu, s'est accomplie — différent du [[了|le]] de fin de phrase vu à la leçon 12, qui marquait un changement de situation. « J'ai regardé un film » se dit :"),
  ...teach2("我看了一个电影。","Wǒ kànle yí ge diànyǐng.","J'ai regardé un film."),
  N("Demandez : « Et toi ? » puis répondez : « J'ai regardé un film. »"),
  TH(),
  C("你呢？","Nǐ ne?","Et toi ?",0.6),
  C("我看了一个电影。","Wǒ kànle yí ge diànyǐng.","J'ai regardé un film.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : « Après être montés dans le train, avez-vous vu le professeur Wang ? »"),
  TH(),
  C("你们上火车后看见王老师了吗？","Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?","Après être montés dans le train, avez-vous vu le professeur Wang ?",0.55),
  N("On vous répond : « Non. Après le départ du train à midi, certains lisaient, d'autres se sont endormis. » Puis on vous demande : « Et toi ? »"),
  C("没看见。中午车开后，有些人在看书，有些人睡觉了。你呢？","Méi kànjiàn. Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kàn shū, yǒuxiē rén shuìjiào le. Nǐ ne?","Non. Après le départ du train à midi, certains lisaient, d'autres se sont endormis. Et toi ?",0.5),
  N("Répondez : « J'ai regardé un film. »"),
  TH(),
  C("我看了一个电影。","Wǒ kànle yí ge diànyǐng.","J'ai regardé un film.",0.6), HOLD(),

  // Révision
  N("Révision. Dites : monter dans le train."),
  TH(),
  C("上火车","shàng huǒchē","monter dans le train",0.6),
  N("Dites : j'ai regardé un film."),
  TH(),
  C("我看了一个电影。","Wǒ kànle yí ge diànyǐng.","J'ai regardé un film.",0.6),
  N("Fin de la partie 1. À la partie 2 : les progrès en chinois."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"你们都会写了", title:"Partie 2 · Les progrès en chinois", desc:"写 · 都 · 听见 · 不要 · 说话 · 听 · 哪些 · 字",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你们会说汉语了，也会写汉字了吗？","Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?","Vous savez parler chinois maintenant, savez-vous aussi écrire des caractères chinois ?",0.5),
  C("我们都会写了。","Wǒmen dōu huì xiě le.","Nous savons tous écrire maintenant.",0.5),
  C("老师，我听不见。","Lǎoshī, wǒ tīng bú jiàn.","Professeur, je n'entends pas.",0.5),
  C("请大家不要说话！请听老师的问题：你们都会写哪些汉字了？","Qǐng dàjiā búyào shuōhuà! Qǐng tīng lǎoshī de wèntí: Nǐmen dōu huì xiě nǎxiē Hànzì le?","Que tout le monde arrête de parler s'il vous plaît ! Écoutez la question du professeur : quels caractères chinois savez-vous tous écrire ?",0.5),
  C("我会写这些字了，您看！","Wǒ huì xiě zhèxiē zì le, nín kàn!","Je sais écrire ces caractères maintenant, regardez !",0.5),
  N("Révision : dites « j'ai regardé un film »."),
  TH(),
  C("我看了一个电影。","Wǒ kànle yí ge diànyǐng.","J'ai regardé un film.",0.6), HOLD(),

  N("« Écrire » se dit [[写|xiě]]. Écoutez et répétez."),
  ...teach2("写","xiě","écrire"),
  N("« Le chinois », la langue, se dit [[汉语|Hànyǔ]], et « un caractère chinois » se dit [[汉字|Hànzì]]. Écoutez et répétez."),
  ...teach2("汉语，汉字","Hànyǔ, Hànzì","le chinois, un caractère chinois"),
  N("Demandez : « Vous savez parler chinois maintenant, savez-vous aussi écrire des caractères chinois ? »"),
  TH(),
  C("你们会说汉语了，也会写汉字了吗？","Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?","Vous savez parler chinois maintenant, savez-vous aussi écrire des caractères chinois ?",0.5),
  C("你们会说汉语了，也会写汉字了吗？","Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?","Vous savez parler chinois maintenant, savez-vous aussi écrire des caractères chinois ?",0.55), HOLD(),

  N("« Tous », « tout le monde ensemble », se dit [[都|dōu]] — il se place devant le verbe, après le groupe qu'il résume. Écoutez et répétez."),
  ...teach2("我们都会","wǒmen dōu huì","nous savons tous"),
  N("Répondez : « Nous savons tous écrire maintenant. »"),
  TH(),
  C("我们都会写了。","Wǒmen dōu huì xiě le.","Nous savons tous écrire maintenant.",0.6),
  C("我们都会写了。","Wǒmen dōu huì xiě le.","Nous savons tous écrire maintenant.",0.6), HOLD(),

  N("« Entendre », « percevoir un son », se dit [[听见|tīngjiàn]] — formé comme [[看见|kànjiàn]] que vous connaissez. Dites : « Professeur, je n'entends pas. »"),
  TH(),
  C("老师，我听不见。","Lǎoshī, wǒ tīng bú jiàn.","Professeur, je n'entends pas.",0.6), HOLD(),

  N("« Ne pas », à l'impératif, se dit [[不要|búyào]] — « ne faites pas ». « Parler », « discuter », se dit [[说话|shuōhuà]] — vous connaissez déjà [[说|shuō]]. Écoutez et répétez."),
  ...teach2("不要说话","búyào shuōhuà","ne parlez pas"),
  N("Et « écouter » se dit [[听|tīng]]. Écoutez et répétez."),
  ...teach2("听","tīng","écouter"),
  N("« Lesquels », se dit [[哪些|nǎxiē]] — comme [[这些|zhèxiē]] et [[那些|nàxiē]] que vous connaissez. Et « un caractère » se dit [[字|zì]]. Dites : « Que tout le monde arrête de parler s'il vous plaît ! Écoutez la question du professeur : quels caractères chinois savez-vous tous écrire ? »"),
  TH(),
  C("请大家不要说话！请听老师的问题：你们都会写哪些汉字了？","Qǐng dàjiā búyào shuōhuà! Qǐng tīng lǎoshī de wèntí: Nǐmen dōu huì xiě nǎxiē Hànzì le?","Que tout le monde arrête de parler s'il vous plaît ! Écoutez la question du professeur : quels caractères chinois savez-vous tous écrire ?",0.5),
  C("请大家不要说话！请听老师的问题：你们都会写哪些汉字了？","Qǐng dàjiē búyào shuōhuà! Qǐng tīng lǎoshī de wèntí: Nǐmen dōu huì xiě nǎxiē Hànzì le?","Que tout le monde arrête de parler s'il vous plaît ! Écoutez la question du professeur : quels caractères chinois savez-vous tous écrire ?",0.55), HOLD(),

  N("Répondez : « Je sais écrire ces caractères maintenant, regardez ! »"),
  TH(),
  C("我会写这些字了，您看！","Wǒ huì xiě zhèxiē zì le, nín kàn!","Je sais écrire ces caractères maintenant, regardez !",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. On vous demande : « Vous savez parler chinois maintenant, savez-vous aussi écrire des caractères chinois ? »"),
  C("你们会说汉语了，也会写汉字了吗？","Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?","Vous savez parler chinois maintenant, savez-vous aussi écrire des caractères chinois ?",0.5),
  N("Répondez : « Nous savons tous écrire maintenant. »"),
  TH(),
  C("我们都会写了。","Wǒmen dōu huì xiě le.","Nous savons tous écrire maintenant.",0.6),
  N("Puis dites : « Professeur, je n'entends pas. »"),
  TH(),
  C("老师，我听不见。","Lǎoshī, wǒ tīng bú jiàn.","Professeur, je n'entends pas.",0.6),
  N("On vous répond : « Que tout le monde arrête de parler s'il vous plaît ! Quels caractères chinois savez-vous tous écrire ? »"),
  C("请大家不要说话！你们都会写哪些汉字了？","Qǐng dàjiā búyào shuōhuà! Nǐmen dōu huì xiě nǎxiē Hànzì le?","Que tout le monde arrête de parler s'il vous plaît ! Quels caractères chinois savez-vous tous écrire ?",0.5),
  N("Répondez : « Je sais écrire ces caractères maintenant, regardez ! »"),
  TH(),
  C("我会写这些字了，您看！","Wǒ huì xiě zhèxiē zì le, nín kàn!","Je sais écrire ces caractères maintenant, regardez !",0.6), HOLD(),

  // Révision
  N("Révision. Dites : nous savons tous écrire."),
  TH(),
  C("我们都会写了。","Wǒmen dōu huì xiě le.","Nous savons tous écrire.",0.6),
  N("Dites : ne parlez pas."),
  TH(),
  C("不要说话。","Búyào shuōhuà.","Ne parlez pas.",0.6),
  N("Fin de la partie 2. À la partie 3 : l'entrée à l'école."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"他们都忙了", title:"Partie 3 · L'entrée à l'école", desc:"明年 · 中学 · 小学 · 中学生 · 小学生 · 上学 · 他们 · 晚",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("明年女儿上中学。","Míngnián nǚ'ér shàng zhōngxué.","L'an prochain, notre fille entrera au collège.",0.5),
  C("对。儿子也上小学了。","Duì. Érzi yě shàng xiǎoxué le.","Oui. Notre fils aussi commencera l'école primaire.",0.5),
  C("我们家有了一个中学生。","Wǒmen jiā yǒule yí ge zhōngxuéshēng.","Notre famille aura un collégien.",0.5),
  C("还有了一个小学生。","Hái yǒule yí ge xiǎoxuéshēng.","Et aussi un écolier.",0.5),
  C("上学后，他们都忙了。","Shàngxué hòu, tāmen dōu máng le.","Une fois à l'école, ils seront tous les deux occupés.",0.5),
  C("是的。太晚了，睡觉吧。","Shì de. Tài wǎn le, shuìjiào ba.","Oui. Il est tard, allons nous coucher.",0.5),
  N("Révision : dites « ne parlez pas »."),
  TH(),
  C("不要说话。","Búyào shuōhuà.","Ne parlez pas.",0.6), HOLD(),

  N("« L'an prochain » se dit [[明年|míngnián]] — vous connaissez déjà [[今年|jīnnián]]. « Le collège » se dit [[中学|zhōngxué]]. Dites : « L'an prochain, notre fille entrera au collège. »"),
  TH(),
  C("明年女儿上中学。","Míngnián nǚ'ér shàng zhōngxué.","L'an prochain, notre fille entrera au collège.",0.6),
  C("明年女儿上中学。","Míngnián nǚ'ér shàng zhōngxué.","L'an prochain, notre fille entrera au collège.",0.6), HOLD(),

  N("« L'école primaire » se dit [[小学|xiǎoxué]]. Répondez : « Oui. Notre fils aussi commencera l'école primaire. »"),
  TH(),
  C("对。儿子也上小学了。","Duì. Érzi yě shàng xiǎoxué le.","Oui. Notre fils aussi commencera l'école primaire.",0.6),
  C("对。儿子也上小学了。","Duì. Érzi yě shàng xiǎoxué le.","Oui. Notre fils aussi commencera l'école primaire.",0.6), HOLD(),

  N("« Un collégien » se dit [[中学生|zhōngxuéshēng]], et « un écolier » se dit [[小学生|xiǎoxuéshēng]]. Dites : « Notre famille aura un collégien. »"),
  TH(),
  C("我们家有了一个中学生。","Wǒmen jiā yǒule yí ge zhōngxuéshēng.","Notre famille aura un collégien.",0.6), HOLD(),

  N("Ajoutez : « Et aussi un écolier. »"),
  TH(),
  C("还有了一个小学生。","Hái yǒule yí ge xiǎoxuéshēng.","Et aussi un écolier.",0.6), HOLD(),

  N("« Commencer l'école », « aller en cours » comme étape de la vie, se dit [[上学|shàngxué]]. Et « ils » se dit [[他们|tāmen]] — vous connaissez déjà le suffixe pluriel [[们|men]]. Dites : « Une fois à l'école, ils seront tous les deux occupés. »"),
  TH(),
  C("上学后，他们都忙了。","Shàngxué hòu, tāmen dōu máng le.","Une fois à l'école, ils seront tous les deux occupés.",0.6),
  C("上学后，他们都忙了。","Shàngxué hòu, tāmen dōu máng le.","Une fois à l'école, ils seront tous les deux occupés.",0.6), HOLD(),

  N("« Tard » se dit [[晚|wǎn]] — vous connaissez déjà [[晚上|wǎnshang]], le soir. Répondez : « Oui. Il est tard, allons nous coucher. »"),
  TH(),
  C("是的。太晚了，睡觉吧。","Shì de. Tài wǎn le, shuìjiào ba.","Oui. Il est tard, allons nous coucher.",0.6),
  C("是的。太晚了，睡觉吧。","Shì de. Tài wǎn le, shuìjiào ba.","Oui. Il est tard, allons nous coucher.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Dites : « L'an prochain, notre fille entrera au collège. »"),
  TH(),
  C("明年女儿上中学。","Míngnián nǚ'ér shàng zhōngxué.","L'an prochain, notre fille entrera au collège.",0.6),
  N("On vous répond : « Oui. Notre fils aussi commencera l'école primaire. » Dites : « Notre famille aura un collégien. »"),
  TH(),
  C("我们家有了一个中学生。","Wǒmen jiā yǒule yí ge zhōngxuéshēng.","Notre famille aura un collégien.",0.6),
  N("Ajoutez : « Et aussi un écolier. »"),
  TH(),
  C("还有了一个小学生。","Hái yǒule yí ge xiǎoxuéshēng.","Et aussi un écolier.",0.6),
  N("Concluez : « Une fois à l'école, ils seront tous les deux occupés. »"),
  TH(),
  C("上学后，他们都忙了。","Shàngxué hòu, tāmen dōu máng le.","Une fois à l'école, ils seront tous les deux occupés.",0.6),
  N("On vous répond : « Oui. Il est tard, allons nous coucher. »"),
  C("是的。太晚了，睡觉吧。","Shì de. Tài wǎn le, shuìjiào ba.","Oui. Il est tard, allons nous coucher.",0.6), HOLD(),

  // Révision finale de la leçon 14
  N("Révision finale de la leçon 14. Dites : j'ai regardé un film."),
  TH(),
  C("我看了一个电影。","Wǒ kànle yí ge diànyǐng.","J'ai regardé un film.",0.6),
  N("Dites : nous savons tous écrire."),
  TH(),
  C("我们都会写了。","Wǒmen dōu huì xiě le.","Nous savons tous écrire.",0.6),
  N("Dites : l'an prochain, notre fille entrera au collège."),
  TH(),
  C("明年女儿上中学。","Míngnián nǚ'ér shàng zhōngxué.","L'an prochain, notre fille entrera au collège.",0.6),
  N("Et pour finir : il est tard, allons nous coucher."),
  TH(),
  C("太晚了，睡觉吧。","Tài wǎn le, shuìjiào ba.","Il est tard, allons nous coucher.",0.6),
  N("Excellent ! Vous avez terminé la leçon 14. Vous savez dire qu'une action a eu lieu avec [[了|le]], généraliser avec [[都|dōu]], et parler de l'école. Réécoutez-la demain, puis passez à la leçon 15, la dernière ! [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"6 questions · section lecture du cahier officiel HSK 1",
    build(){ return [
N("Pour finir cette leçon, six questions tirées de la section lecture du cahier d'exercices officiel HSK 1. Écoute chaque phrase, réfléchis, puis réponds à voix haute avant la correction."),

  // Q14 — associer
  N("Question 1. On te demande :"),
  C("谁去学校了？","Shéi qù xuéxiào le?","Qui est allé à l'école ?",0.6),
  N("Laquelle de ces réponses convient : A « Oui, j'ai fait une sieste. » ; B « Nous y sommes tous allés. » ; C « Écrire, lire, manger. » ?"),
  TH(),
  N("C'est la réponse B."),
  C("我们都去了。","Wǒmen dōu qù le.","Nous y sommes tous allés.",0.6), HOLD(),

  // Q16 — associer
  N("Question 2. On te demande :"),
  C("你今天上午都忙了些什么？","Nǐ jīntiān shàngwǔ dōu mángle xiē shénme?","Tu étais occupé à quoi ce matin ?",0.6),
  N("Laquelle convient : A « Oui, j'ai fait une sieste. » ; B « Nous y sommes tous allés. » ; C « À écrire, lire et manger. » ?"),
  TH(),
  N("C'est la réponse C."),
  C("写字、看书、吃饭。","Xiě zì, kàn shū, chī fàn.","À écrire, lire et manger.",0.6), HOLD(),

  // Q17 — texte à trou
  N("Question 3, un mot à trouver. La phrase : « J'ai bu une tasse de… quoi ? » Quel mot manque : A « tous » ; B « thé » ; C « prénom » ?"),
  TH(),
  N("C'était « thé »."),
  C("我喝了一杯茶。","Wǒ hēle yì bēi chá.","J'ai bu une tasse de thé.",0.6), HOLD(),

  // Q18 — texte à trou
  N("Question 4. Un dialogue : « Le cours commence, ne parlez plus s'il vous plaît. — D'accord, professeur, nous… on ne parle plus. » Quel mot manque : A « tous » ; B « thé » ; C « prénom » ?"),
  TH(),
  N("C'était « tous »."),
  C("我们都不说话了。","Wǒmen dōu bù shuōhuà le.","Nous arrêtons tous de parler.",0.6), HOLD(),

  // Q19 — compréhension
  N("Question 5. Écoute bien."),
  C("服务员，我想问一下，我们的房间号是多少？","Fúwùyuán, wǒ xiǎng wèn yíxià, wǒmen de fángjiānhào shì duōshao?","Serveur, je voudrais demander : quel est le numéro de notre chambre ?",0.55),
  N("Question : que veut savoir cette personne ? A l'heure ; B un numéro de téléphone ; C le numéro de la chambre ?"),
  TH(),
  C("房间号。","Fángjiānhào.","Le numéro de la chambre.",0.6), HOLD(),

  // Q20 — compréhension
  N("Question 6, la dernière. Écoute."),
  C("儿子和女儿都上小学了，他们会写很多字了。","Érzi hé nǚ'ér dōu shàng xiǎoxué le, tāmen huì xiě hěn duō zì le.","Le fils et la fille vont maintenant à l'école primaire, ils savent écrire beaucoup de caractères.",0.55),
  N("Question : que sont les deux enfants maintenant ? A des écoliers ; B des collégiens ; C des étudiants ?"),
  TH(),
  C("小学生。","Xiǎoxuéshēng.","Des écoliers.",0.6), HOLD(),

  N("Bravo, exercice terminé ! Passe maintenant à la leçon 15, la dernière !"),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  ]
});
