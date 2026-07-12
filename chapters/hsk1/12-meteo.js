/* ============================================================
   HSK 1 · Leçon 12 — 昨天下雪了 Il a neigé hier
   D'après « 新HSK教程 1 », leçon 12.
   Vocabulaire de la leçon :
   天气 · 这里 · 天 · 下雨 · 了 · 雨 · 有点儿 · 觉得 · 冷 ·
   下(tomber) · 雪 · 来 · 公司 · 生病 · 看病 · 病 · 一点儿 · 药 ·
   回 · 再(alors) · 喝 · 热 · 水
   Attention aux homophones : 下(tomber, ici) a le même son que
   下(sous, leçon 8) mais un rôle différent (verbe, pas position) ;
   药(médicament) a le même son que 要(vouloir, leçon 11) mais un
   caractère différent ; 再(alors, ensuite) a le même son que
   在(être à/en cours) mais un caractère différent — vous connaissez
   déjà 再 dans 再见.
   Grammaire : phrases sans sujet explicite (下雨了！) · particule 了
   (changement d'état/nouvelle situation) · tournure 太……了
   (exclamation).
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  group: "hsk1",
  id: "hsk1-12",
  badge: 12,
  hanzi: "昨天下雪了",
  title: "Leçon 12 · La météo et la maladie",
  desc: "3 parties · 下雨了 · 太冷了 · 吃一点儿药",
  intro: "Leçon 12 du HSK 1 : parler de la météo, annoncer un changement avec la particule 了, et décrire un état avec 太……了. Puis une visite chez le médecin.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"下雨了", title:"Partie 1 · Il pleut", desc:"天气 · 这里 · 天 · 下雨 · 了 · 雨 · 有点儿 · 觉得 · 冷",
    build(){ return [
  N("Bienvenue dans la leçon 12 du HSK 1. Aujourd'hui : parler de la météo, et décrire un état de santé. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("今天天气怎么样？","Jīntiān tiānqì zěnmeyàng?","Comment est le temps aujourd'hui ?",0.5),
  C("这里的天不太好，下雨了。","Zhèlǐ de tiān bú tài hǎo, xià yǔ le.","Il ne fait pas très beau ici, il s'est mis à pleuvoir.",0.5),
  C("雨大吗？","Yǔ dà ma?","Il pleut fort ?",0.5),
  C("有点儿大，我觉得很冷。","Yǒudiǎnr dà, wǒ juéde hěn lěng.","Un peu fort, je trouve qu'il fait froid.",0.5),
  N("D'abord, révision de la leçon 10 : demandez « qu'en penses-tu ? »"),
  TH(),
  C("怎么样？","Zěnmeyàng?","Qu'en penses-tu ?",0.6), HOLD(),

  N("« Le temps », la météo, se dit [[天气|tiānqì]]. Demandez : « Comment est le temps aujourd'hui ? »"),
  TH(),
  C("今天天气怎么样？","Jīntiān tiānqì zěnmeyàng?","Comment est le temps aujourd'hui ?",0.6),
  C("今天天气怎么样？","Jīntiān tiānqì zěnmeyàng?","Comment est le temps aujourd'hui ?",0.6), HOLD(),

  N("« Ici » se dit aussi [[这里|zhèlǐ]] — comme [[这儿|zhèr]] et [[这边|zhèbiān]] que vous connaissez. Et voici un mot très important : [[了|le]], placé à la fin d'une phrase pour dire qu'une situation a changé, qu'il y a du nouveau. « Il s'est mis à pleuvoir » — mot à mot « tombe pluie, changement » — se dit [[下雨了|xià yǔ le]]. Écoutez et répétez."),
  ...teach2("下雨了","xià yǔ le","il s'est mis à pleuvoir"),
  N("Répondez : « Il ne fait pas très beau ici, il s'est mis à pleuvoir. »"),
  TH(),
  C("这里的天不太好，下雨了。","Zhèlǐ de tiān bú tài hǎo, xià yǔ le.","Il ne fait pas très beau ici, il s'est mis à pleuvoir.",0.55),
  C("这里的天不太好，下雨了。","Zhèlǐ de tiān bú tài hǎo, xià yǔ le.","Il ne fait pas très beau ici, il s'est mis à pleuvoir.",0.6), HOLD(),

  N("« La pluie » se dit [[雨|yǔ]]. Demandez : « Il pleut fort ? »"),
  TH(),
  C("雨大吗？","Yǔ dà ma?","Il pleut fort ?",0.6), HOLD(),

  N("« Un peu », « plutôt », se dit [[有点儿|yǒudiǎnr]] — placé avant un adjectif. Et « trouver que », « avoir l'impression que », se dit [[觉得|juéde]]. « Froid » se dit [[冷|lěng]]. Répondez : « Un peu fort, je trouve qu'il fait froid. »"),
  TH(),
  C("有点儿大，我觉得很冷。","Yǒudiǎnr dà, wǒ juéde hěn lěng.","Un peu fort, je trouve qu'il fait froid.",0.55),
  C("有点儿大，我觉得很冷。","Yǒudiǎnr dà, wǒ juéde hěn lěng.","Un peu fort, je trouve qu'il fait froid.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : « Comment est le temps aujourd'hui ? »"),
  TH(),
  C("今天天气怎么样？","Jīntiān tiānqì zěnmeyàng?","Comment est le temps aujourd'hui ?",0.6),
  N("On vous répond : « Il ne fait pas très beau ici, il s'est mis à pleuvoir. » Demandez : « Il pleut fort ? »"),
  TH(),
  C("雨大吗？","Yǔ dà ma?","Il pleut fort ?",0.6),
  N("On vous répond : « Un peu fort, je trouve qu'il fait froid. »"),
  C("有点儿大，我觉得很冷。","Yǒudiǎnr dà, wǒ juéde hěn lěng.","Un peu fort, je trouve qu'il fait froid.",0.55), HOLD(),

  // Révision
  N("Révision. Dites : il s'est mis à pleuvoir."),
  TH(),
  C("下雨了。","Xià yǔ le.","Il s'est mis à pleuvoir.",0.6),
  N("Dites : je trouve qu'il fait froid."),
  TH(),
  C("我觉得很冷。","Wǒ juéde hěn lěng.","Je trouve qu'il fait froid.",0.6),
  N("Fin de la partie 1. À la partie 2 : la neige, et un collègue malade."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"太冷了", title:"Partie 2 · Un collègue malade", desc:"下(tomber) · 雪 · 来 · 公司 · 生病 · 看病",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("昨天下雪了。","Zuótiān xià xuě le.","Il a neigé hier.",0.5),
  C("是的，太冷了。","Shì de, tài lěng le.","Oui, il faisait vraiment trop froid.",0.5),
  C("你昨天没来公司，生病了？","Nǐ zuótiān méi lái gōngsī, shēngbìng le?","Tu n'es pas venu à l'entreprise hier, tu étais malade ?",0.5),
  C("对，我昨天去医院看病了。","Duì, wǒ zuótiān qù yīyuàn kànbìng le.","Oui, je suis allé à l'hôpital voir un médecin hier.",0.5),
  N("Révision : dites « il pleut fort ? »"),
  TH(),
  C("雨大吗？","Yǔ dà ma?","Il pleut fort ?",0.6), HOLD(),

  N("Attention : [[下|xià]] veut aussi dire « tomber », pour la pluie ou la neige — même caractère, même son, mais un rôle différent de « sous » que vous connaissez. « La neige » se dit [[雪|xuě]]. Écoutez et répétez."),
  ...teach2("下雪了","xià xuě le","il s'est mis à neiger"),
  N("Dites : « Il a neigé hier. »"),
  TH(),
  C("昨天下雪了。","Zuótiān xià xuě le.","Il a neigé hier.",0.6),
  C("昨天下雪了。","Zuótiān xià xuě le.","Il a neigé hier.",0.6), HOLD(),

  N("Pour une exclamation forte, on encadre l'adjectif avec [[太|tài]]…[[了|le]] : «[[太冷了|tài lěng le]] » veut dire « il faisait vraiment trop froid ». Écoutez et répétez."),
  ...teach2("太冷了","tài lěng le","il fait vraiment trop froid"),
  N("Répondez : « Oui, il faisait vraiment trop froid. »"),
  TH(),
  C("是的，太冷了。","Shì de, tài lěng le.","Oui, il faisait vraiment trop froid.",0.6), HOLD(),

  N("« Venir » se dit [[来|lái]] — le contraire de [[去|qù]]. Et « une entreprise », « une société », se dit [[公司|gōngsī]]. Écoutez et répétez."),
  ...teach2("来公司","lái gōngsī","venir à l'entreprise"),
  N("« Tomber malade » se dit [[生病|shēngbìng]]. Demandez : « Tu n'es pas venu à l'entreprise hier, tu étais malade ? »"),
  TH(),
  C("你昨天没来公司，生病了？","Nǐ zuótiān méi lái gōngsī, shēngbìng le?","Tu n'es pas venu à l'entreprise hier, tu étais malade ?",0.55),
  C("你昨天没来公司，生病了？","Nǐ zuótiān méi lái gōngsī, shēngbìng le?","Tu n'es pas venu à l'entreprise hier, tu étais malade ?",0.6), HOLD(),

  N("« Consulter un médecin », pour le patient, se dit [[看病|kànbìng]] — vous connaissez déjà [[看|kàn]]. Répondez : « Oui, je suis allé à l'hôpital voir un médecin hier. »"),
  TH(),
  C("对，我昨天去医院看病了。","Duì, wǒ zuótiān qù yīyuàn kànbìng le.","Oui, je suis allé à l'hôpital voir un médecin hier.",0.55),
  C("对，我昨天去医院看病了。","Duì, wǒ zuótiān qù yīyuàn kànbìng le.","Oui, je suis allé à l'hôpital voir un médecin hier.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Dites : « Il a neigé hier. »"),
  TH(),
  C("昨天下雪了。","Zuótiān xià xuě le.","Il a neigé hier.",0.6),
  N("On vous répond : « Oui, il faisait vraiment trop froid. » Demandez : « Tu n'es pas venu à l'entreprise hier, tu étais malade ? »"),
  TH(),
  C("你昨天没来公司，生病了？","Nǐ zuótiān méi lái gōngsī, shēngbìng le?","Tu n'es pas venu à l'entreprise hier, tu étais malade ?",0.55),
  N("Répondez : « Oui, je suis allé à l'hôpital voir un médecin hier. »"),
  TH(),
  C("对，我昨天去医院看病了。","Duì, wǒ zuótiān qù yīyuàn kànbìng le.","Oui, je suis allé à l'hôpital voir un médecin hier.",0.6), HOLD(),

  // Révision
  N("Révision. Dites : il a neigé."),
  TH(),
  C("下雪了。","Xià xuě le.","Il a neigé.",0.6),
  N("Dites : il faisait vraiment trop froid."),
  TH(),
  C("太冷了。","Tài lěng le.","Il faisait vraiment trop froid.",0.6),
  N("Fin de la partie 2. À la partie 3 : chez le médecin."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"吃一点儿药", title:"Partie 3 · Chez le médecin", desc:"病 · 一点儿 · 药 · 天(jour) · 回 · 再(alors) · 喝 · 热 · 水",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("医生，我病了。","Yīshēng, wǒ bìng le.","Docteur, je suis malade.",0.5),
  C("我看看。你觉得怎么样？","Wǒ kànkan. Nǐ juéde zěnmeyàng?","Laissez-moi voir. Comment vous sentez-vous ?",0.5),
  C("我很冷。","Wǒ hěn lěng.","J'ai très froid.",0.5),
  C("好的，吃一点儿药，今天休息半天吧。","Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàntiān ba.","D'accord, prenez un peu de médicament, reposez-vous une demi-journée aujourd'hui.",0.5),
  C("好的。","Hǎo de.","D'accord.",0.5),
  C("回家后再喝些热水。","Huí jiā hòu zài hē xiē rè shuǐ.","Une fois rentré à la maison, buvez aussi de l'eau chaude.",0.5),
  N("Révision : dites « je suis allé voir un médecin hier »."),
  TH(),
  C("我昨天去看病了。","Wǒ zuótiān qù kànbìng le.","Je suis allé voir un médecin hier.",0.6), HOLD(),

  N("« Être malade », comme état, se dit [[病|bìng]] tout seul — vous connaissez déjà [[生病|shēngbìng]]. Dites : « Docteur, je suis malade. »"),
  TH(),
  C("医生，我病了。","Yīshēng, wǒ bìng le.","Docteur, je suis malade.",0.6),
  C("医生，我病了。","Yīshēng, wǒ bìng le.","Docteur, je suis malade.",0.6), HOLD(),

  N("Le médecin répond : « Laissez-moi voir. Comment vous sentez-vous ? » Puis répondez : « J'ai très froid. »"),
  TH(),
  C("我看看。你觉得怎么样？","Wǒ kànkan. Nǐ juéde zěnmeyàng?","Laissez-moi voir. Comment vous sentez-vous ?",0.6),
  N("Répondez :"),
  TH(),
  C("我很冷。","Wǒ hěn lěng.","J'ai très froid.",0.6), HOLD(),

  N("« Un peu », en quantité, se dit [[一点儿|yìdiǎnr]] — après le verbe, différent de [[有点儿|yǒudiǎnr]] qui se place avant un adjectif. « Un médicament » se dit [[药|yào]] — attention, même son que [[要|yào]] « vouloir », mais un caractère différent. Écoutez et répétez."),
  ...teach2("吃一点儿药","chī yìdiǎnr yào","prendre un peu de médicament"),
  N("« Se reposer une demi-journée » : [[半|bàn]] veut dire « et demi/moitié », et [[天|tiān]] ici veut dire « jour ». Écoutez et répétez."),
  ...teach2("休息半天","xiūxi bàntiān","se reposer une demi-journée"),
  N("Le médecin dit : « D'accord, prenez un peu de médicament, reposez-vous une demi-journée aujourd'hui. » Répondez simplement : « D'accord. »"),
  TH(),
  C("好的，吃一点儿药，今天休息半天吧。","Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàntiān ba.","D'accord, prenez un peu de médicament, reposez-vous une demi-journée aujourd'hui.",0.5),
  N("Répondez :"),
  TH(),
  C("好的。","Hǎo de.","D'accord.",0.6), HOLD(),

  N("« Retourner », « rentrer », se dit [[回|huí]]. Écoutez et répétez."),
  ...teach2("回家","huí jiā","rentrer à la maison"),
  N("Attention à un nouveau mot : [[再|zài]] veut dire « alors », « ensuite » — même son que [[在|zài]], mais un caractère différent ; vous le connaissez déjà dans [[再见|zàijiàn]]. « Boire » se dit [[喝|hē]], et « chaud » se dit [[热|rè]] — « l'eau » se dit [[水|shuǐ]]. Écoutez et répétez."),
  ...teach2("喝热水","hē rè shuǐ","boire de l'eau chaude"),
  N("Le médecin ajoute : « Une fois rentré à la maison, buvez aussi de l'eau chaude. »"),
  TH(),
  C("回家后再喝些热水。","Huí jiā hòu zài hē xiē rè shuǐ.","Une fois rentré à la maison, buvez aussi de l'eau chaude.",0.55),
  C("回家后再喝些热水。","Huí jiā hòu zài hē xiē rè shuǐ.","Une fois rentré à la maison, buvez aussi de l'eau chaude.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Dites : « Docteur, je suis malade. »"),
  TH(),
  C("医生，我病了。","Yīshēng, wǒ bìng le.","Docteur, je suis malade.",0.6),
  N("On vous répond : « Laissez-moi voir. Comment vous sentez-vous ? » Répondez : « J'ai très froid. »"),
  TH(),
  C("我很冷。","Wǒ hěn lěng.","J'ai très froid.",0.6),
  N("On vous répond : « D'accord, prenez un peu de médicament, reposez-vous une demi-journée aujourd'hui. » Dites : « D'accord. »"),
  TH(),
  C("好的。","Hǎo de.","D'accord.",0.6),
  N("Et pour finir, on vous dit : « Une fois rentré à la maison, buvez aussi de l'eau chaude. »"),
  C("回家后再喝些热水。","Huí jiā hòu zài hē xiē rè shuǐ.","Une fois rentré à la maison, buvez aussi de l'eau chaude.",0.55), HOLD(),

  // Révision finale de la leçon 12
  N("Révision finale de la leçon 12. Dites : il s'est mis à pleuvoir."),
  TH(),
  C("下雨了。","Xià yǔ le.","Il s'est mis à pleuvoir.",0.6),
  N("Dites : il faisait vraiment trop froid."),
  TH(),
  C("太冷了。","Tài lěng le.","Il faisait vraiment trop froid.",0.6),
  N("Dites : docteur, je suis malade."),
  TH(),
  C("医生，我病了。","Yīshēng, wǒ bìng le.","Docteur, je suis malade.",0.6),
  N("Et pour finir : buvez de l'eau chaude."),
  TH(),
  C("喝热水。","Hē rè shuǐ.","Buvez de l'eau chaude.",0.6),
  N("Excellent ! Vous avez terminé la leçon 12. Vous savez parler de la météo et décrire un état de santé avec [[了|le]] et [[太|tài]]……[[了|le]]. Réécoutez-la demain, puis passez à la leçon 13. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"D'après 新HSK教程1 学练手册 · Leçon 12",
    build(){ return [
N("Pour finir cette leçon, un petit exercice de compréhension tiré du manuel officiel HSK 1. Écoutez chaque phrase, réfléchissez à la question posée, puis répondez à voix haute avant la correction."),

  N("Première question. Écoutez bien."),
  C("昨天的天气很好，我和朋友外边玩了。","Zuótiān de tiānqì hěn hǎo, wǒ hé péngyou wàibian wán le.","Hier le temps était très beau, mon ami et moi avons joué dehors.",0.5),
  N("Question : d'après cette personne, comment était le temps hier ?"),
  TH(),
  N("Les trois choix étaient : A il faisait beau, B la pluie n'était pas forte, C il faisait un peu froid."),
  C("天气好","tiānqì hǎo","il faisait beau",0.6), HOLD(),

  N("Deuxième question."),
  C("老张去看病，医生说他要吃三天药。","Lǎo Zhāng qù kànbìng, yīshēng shuō tā yào chī sān tiān yào.","Lao Zhang est allé voir un médecin, le médecin a dit qu'il devait prendre des médicaments pendant trois jours.",0.5),
  N("Question : que dit le médecin à Lao Zhang de faire ?"),
  TH(),
  N("Les trois choix étaient : A prendre des médicaments, B faire plus de sport, C boire plus d'eau."),
  C("要吃药","yào chī yào","il doit prendre des médicaments",0.6), HOLD(),

  N("Bravo, exercice terminé ! Passez maintenant à la leçon 13."),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  ]
});
