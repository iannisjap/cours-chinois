/* ============================================================
   HSK 2 · Leçon 11 — 我最喜欢吃中国菜 J'aime surtout la cuisine chinoise
   D'après « 新HSK教程 2 », leçon 11.
   Vocabulaire de la leçon :
   头 · 疼 · 经常 · 动 · 着 · 路上 · 慢 ·
   进 · 药 · 身体 · 时 · 最 · 药店
   Grammaire : particule aspectuelle 着 (1)(2) ·
   adverbe de degré 最.
   Nouveaux personnages : Wang Yifei (professeure), Bai Jiayue
   (élève), Li Wen (camarade).
   Structure : leçon → 3 parties (les 3 dialogues du manuel,
   le texte 4/journal intégré en révision de la partie 3) +
   partie 4 exercice.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-11",
  badge: 11,
  hanzi: "我最喜欢吃中国菜",
  title: "Leçon 11 · J'aime surtout la cuisine chinoise",
  desc: "3 parties · particule 着 · adverbe 最",
  intro: "Bai Jiayue a mal à la tête après les cours ; sa professeure Wang Yifei l'emmène à l'hôpital, et son ami Li Wen vient lui rendre visite. Au programme : la particule aspectuelle 着 pour exprimer la continuation d'une action ou d'un état, et l'adverbe de degré 最 pour dire « le plus ».",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"一动就疼", title:"Partie 1 · Mal de tête en classe", desc:"头 · 疼 · 经常 · 动 · 着",
    build(){ return [
  N("Partie 1. Dans la salle de classe, la professeure Wang Yifei parle avec son élève Bai Jiayue. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("家月，都下课了，你怎么还不回家？","Jiāyuè, dōu xiàkè le, nǐ zěnme hái bù huí jiā?","Jiayue, les cours sont finis, pourquoi tu ne rentres pas encore chez toi ?",0.4),
  C("我头疼，不太舒服。","Wǒ tóu téng, bú tài shūfu.","J'ai mal à la tête, je ne me sens pas très bien.",0.5),
  C("你这几天经常头疼，去医院看看吧。","Nǐ zhè jǐ tiān jīngcháng tóu téng, qù yīyuàn kànkan ba.","Ces derniers jours tu as souvent mal à la tête, va donc voir un médecin à l'hôpital.",0.4),
  C("我想休息一下，现在不能动，一动就疼。","Wǒ xiǎng xiūxi yíxià, xiànzài bù néng dòng, yí dòng jiù téng.","Je veux me reposer un peu, là je ne peux pas bouger, dès que je bouge ça fait mal.",0.4),
  C("那你在这儿坐着，我去开车，一会儿送你去医院。","Nà nǐ zài zhèr zuòzhe, wǒ qù kāichē, yíhuìr sòng nǐ qù yīyuàn.","Alors reste assise ici, je vais chercher la voiture, dans un instant je t'emmène à l'hôpital.",0.4),
  C("谢谢王老师。","Xièxie Wáng lǎoshī.","Merci, professeure Wang.",0.6),

  N("« La tête » se dit [[头|tóu]]. Dites : « Jiayue, les cours sont finis, pourquoi tu ne rentres pas encore chez toi ? »"),
  ...teach2("头","tóu","la tête"),
  TH(),
  C("家月，都下课了，你怎么还不回家？","Jiāyuè, dōu xiàkè le, nǐ zěnme hái bù huí jiā?","Jiayue, les cours sont finis, pourquoi tu ne rentres pas encore chez toi ?",0.4), HOLD(),

  N("« Faire mal » se dit [[疼|téng]]. Répondez : « j'ai mal à la tête, je ne me sens pas très bien. »"),
  ...teach2("疼","téng","faire mal"),
  TH(),
  C("我头疼，不太舒服。","Wǒ tóu téng, bú tài shūfu.","J'ai mal à la tête, je ne me sens pas très bien.",0.5), HOLD(),

  N("« Souvent, fréquemment » se dit [[经常|jīngcháng]]. Dites : « ces derniers jours tu as souvent mal à la tête, va donc voir un médecin à l'hôpital. »"),
  ...teach2("经常","jīngcháng","souvent, fréquemment"),
  TH(),
  C("你这几天经常头疼，去医院看看吧。","Nǐ zhè jǐ tiān jīngcháng tóu téng, qù yīyuàn kànkan ba.","Ces derniers jours tu as souvent mal à la tête, va donc voir un médecin à l'hôpital.",0.4), HOLD(),

  N("« Bouger » se dit [[动|dòng]]. Répondez : « je veux me reposer un peu, là je ne peux pas bouger, dès que je bouge ça fait mal. »"),
  ...teach2("动","dòng","bouger"),
  TH(),
  C("我想休息一下，现在不能动，一动就疼。","Wǒ xiǎng xiūxi yíxià, xiànzài bù néng dòng, yí dòng jiù téng.","Je veux me reposer un peu, là je ne peux pas bouger, dès que je bouge ça fait mal.",0.4), HOLD(),

  N("Grammaire : la particule aspectuelle [[着|zhe]] se place après un verbe pour exprimer la continuation d'une action ou d'un état. La forme négative s'obtient en ajoutant 没(有) devant le verbe. Écoutez ces exemples."),
  ...teach2("着","zhe","(particule) — indique la continuation d'une action ou d'un état"),
  C("那你在这儿坐着。","Nà nǐ zài zhèr zuòzhe.","Alors reste assise ici (litt. assise-continuellement).",0.5),
  C("教室的门开着。","Jiàoshì de mén kāizhe.","La porte de la salle de classe est ouverte.",0.5),
  C("教室的门没开着。","Jiàoshì de mén méi kāizhe.","La porte de la salle de classe n'est pas ouverte.",0.5),
  N("Essayez, avec 着 : dites « la porte de la salle de classe est ouverte. »"),
  TH(),
  C("教室的门开着。","Jiàoshì de mén kāizhe.","La porte de la salle de classe est ouverte.",0.5), HOLD(),
  N("Dites, avec 着 : « alors reste assise ici, je vais chercher la voiture, dans un instant je t'emmène à l'hôpital. »"),
  TH(),
  C("那你在这儿坐着，我去开车，一会儿送你去医院。","Nà nǐ zài zhèr zuòzhe, wǒ qù kāichē, yíhuìr sòng nǐ qù yīyuàn.","Alors reste assise ici, je vais chercher la voiture, dans un instant je t'emmène à l'hôpital.",0.4), HOLD(),
  N("On vous répond : « merci, professeure Wang. »"),
  C("谢谢王老师。","Xièxie Wáng lǎoshī.","Merci, professeure Wang.",0.6),

  N("Révision. Dites, avec la forme négative de 着 : la porte de la salle de classe n'est pas ouverte."),
  TH(),
  C("教室的门没开着。","Jiàoshì de mén méi kāizhe.","La porte de la salle de classe n'est pas ouverte.",0.5),
  N("Fin de la partie 1. À la partie 2 : en voiture, sous la neige, direction l'hôpital."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"下着雪", title:"Partie 2 · En route pour l'hôpital", desc:"路上 · 慢 · 着 (objet)",
    build(){ return [
  N("Partie 2. Dans la voiture, Wang Yifei conduit Bai Jiayue à l'hôpital ; Li Wen appelle. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("现在路上车多，还下着雪，我开慢一点儿。","Xiànzài lùshang chē duō, hái xiàzhe xuě, wǒ kāi màn yìdiǎnr.","Il y a beaucoup de voitures sur la route en ce moment, et il neige en plus, je vais rouler un peu plus lentement.",0.35),
  C("没问题，现在头没那么疼了。","Méi wèntí, xiànzài tóu méi nàme téng le.","Pas de problème, ma tête ne me fait plus si mal maintenant.",0.45),
  C("好。李文来电话了，你帮我接一下。","Hǎo. Lǐ Wén lái diànhuà le, nǐ bāng wǒ jiē yíxià.","D'accord. Li Wen appelle, réponds pour moi s'il te plaît.",0.4),
  C("喂，李文，王老师开着车呢，你找她有事吗？","Wèi, Lǐ Wén, Wáng lǎoshī kāizhe chē ne, nǐ zhǎo tā yǒu shì ma?","Allô, Li Wen, la professeure Wang est en train de conduire, tu as besoin de lui parler ?",0.35),
  C("没什么事。今天雪这么大，你们开车去哪儿啊？","Méi shénme shì. Jīntiān xuě zhème dà, nǐmen kāichē qù nǎr a?","Rien d'important. Il neige tellement fort aujourd'hui, où allez-vous en voiture ?",0.4),
  C("去医院，我头有点儿疼。","Qù yīyuàn, wǒ tóu yǒudiǎnr téng.","À l'hôpital, j'ai un peu mal à la tête.",0.5),
  C("那我一会儿去看看你。","Nà wǒ yíhuìr qù kànkan nǐ.","Alors je viendrai te voir tout à l'heure.",0.5),

  N("« La route, le trajet » se dit [[路上|lùshang]]. Dites : « il y a beaucoup de voitures sur la route en ce moment, et il neige en plus, je vais rouler un peu plus lentement. »"),
  ...teach2("路上","lùshang","la route, le trajet"),
  TH(),
  C("现在路上车多，还下着雪，我开慢一点儿。","Xiànzài lùshang chē duō, hái xiàzhe xuě, wǒ kāi màn yìdiǎnr.","Il y a beaucoup de voitures sur la route en ce moment, et il neige en plus, je vais rouler un peu plus lentement.",0.35), HOLD(),

  N("« Lent » se dit [[慢|màn]]. On vous répond : « pas de problème, ma tête ne me fait plus si mal maintenant. »"),
  ...teach2("慢","màn","lent"),
  C("没问题，现在头没那么疼了。","Méi wèntí, xiànzài tóu méi nàme téng le.","Pas de problème, ma tête ne me fait plus si mal maintenant.",0.45),
  N("Dites : « d'accord. Li Wen appelle, réponds pour moi s'il te plaît. »"),
  TH(),
  C("好。李文来电话了，你帮我接一下。","Hǎo. Lǐ Wén lái diànhuà le, nǐ bāng wǒ jiē yíxià.","D'accord. Li Wen appelle, réponds pour moi s'il te plaît.",0.4), HOLD(),

  N("Grammaire : quand une phrase avec 着 a un objet (chose), cet objet se place après 着. Écoutez ces exemples."),
  C("她穿着白色的裤子。","Tā chuānzhe báisè de kùzi.","Elle porte un pantalon blanc.",0.45),
  C("陈天中没拿着咖啡。","Chén Tiānzhōng méi názhe kāfēi.","Chen Tianzhong ne tient pas de café.",0.4),
  N("Il existe trois formes interrogatives : ajouter 吗 en fin de phrase, ajouter 没有 en fin de phrase, ou répéter le verbe avec 没 : verbe + 没 + verbe + 着. Écoutez."),
  C("教室的门开着吗？","Jiàoshì de mén kāizhe ma?","La porte de la salle de classe est-elle ouverte ?",0.45),
  C("白家月坐着没有？","Bái Jiāyuè zuòzhe méiyǒu?","Bai Jiayue est-elle assise ?",0.45),
  C("她拿没拿着手机？","Tā ná méi ná zhe shǒujī?","Tient-elle son téléphone ou non ?",0.45),
  N("Essayez, avec 着 et l'objet après : dites « elle porte un pantalon blanc. »"),
  TH(),
  C("她穿着白色的裤子。","Tā chuānzhe báisè de kùzi.","Elle porte un pantalon blanc.",0.45), HOLD(),

  N("Répondez au téléphone, avec 着 : « allô, Li Wen, la professeure Wang est en train de conduire, tu as besoin de lui parler ? »"),
  TH(),
  C("喂，李文，王老师开着车呢，你找她有事吗？","Wèi, Lǐ Wén, Wáng lǎoshī kāizhe chē ne, nǐ zhǎo tā yǒu shì ma?","Allô, Li Wen, la professeure Wang est en train de conduire, tu as besoin de lui parler ?",0.35), HOLD(),
  N("On vous répond : « rien d'important. Il neige tellement fort aujourd'hui, où allez-vous en voiture ? »"),
  C("没什么事。今天雪这么大，你们开车去哪儿啊？","Méi shénme shì. Jīntiān xuě zhème dà, nǐmen kāichē qù nǎr a?","Rien d'important. Il neige tellement fort aujourd'hui, où allez-vous en voiture ?",0.4),
  N("Dites : « à l'hôpital, j'ai un peu mal à la tête. »"),
  TH(),
  C("去医院，我头有点儿疼。","Qù yīyuàn, wǒ tóu yǒudiǎnr téng.","À l'hôpital, j'ai un peu mal à la tête.",0.5), HOLD(),
  N("On vous répond : « alors je viendrai te voir tout à l'heure. »"),
  C("那我一会儿去看看你。","Nà wǒ yíhuìr qù kànkan nǐ.","Alors je viendrai te voir tout à l'heure.",0.5),

  N("Révision. Demandez, avec 着 et une question par répétition du verbe : tient-elle son téléphone ou non ?"),
  TH(),
  C("她拿没拿着手机？","Tā ná méi ná zhe shǒujī?","Tient-elle son téléphone ou non ?",0.45),
  N("Fin de la partie 2. À la partie 3 : Li Wen rend visite à Bai Jiayue."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"你最喜欢吃中国菜", title:"Partie 3 · La visite de Li Wen", desc:"进 · 药 · 身体 · 时 · 最",
    build(){ return [
  N("Partie 3. Dans la chambre, Li Wen vient rendre visite à Bai Jiayue. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("李文，快请进！","Lǐ Wén, kuài qǐng jìn!","Li Wen, entre vite je t'en prie !",0.55),
  C("家月，你怎么样了？头还疼吗？","Jiāyuè, nǐ zěnmeyàng le? Tóu hái téng ma?","Jiayue, comment tu vas ? Ta tête te fait encore mal ?",0.45),
  C("不那么疼了。医生开了一些药，吃完就好多了。","Bú nàme téng le. Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.","Ça ne fait plus si mal. Le médecin m'a prescrit des médicaments, une fois pris je vais beaucoup mieux.",0.35),
  C("那就好！","Nà jiù hǎo!","Tant mieux alors !",0.6),
  C("家月，你想不想吃点儿东西？","Jiāyuè, nǐ xiǎng bu xiǎng chī diǎnr dōngxi?","Jiayue, tu veux manger quelque chose ?",0.45),
  C("吃点儿吧，身体不舒服时更要好好吃饭。","Chī diǎnr ba, shēntǐ bù shūfu shí gèng yào hǎohāo chī fàn.","Mange un peu, quand on ne se sent pas bien il faut d'autant plus bien manger.",0.35),
  C("吃点儿什么呢？","Chī diǎnr shénme ne?","Qu'est-ce que je pourrais manger ?",0.5),
  C("你最喜欢吃中国菜，我做几个中国菜吧。","Nǐ zuì xǐhuan chī Zhōngguó cài, wǒ zuò jǐ ge Zhōngguó cài ba.","Tu aimes surtout la cuisine chinoise, je vais te préparer quelques plats chinois.",0.4),
  C("好的，谢谢王老师。","Hǎo de, xièxie Wáng lǎoshī.","D'accord, merci professeure Wang.",0.5),

  N("« Entrer » se dit [[进|jìn]]. Dites : « Li Wen, entre vite je t'en prie ! »"),
  ...teach2("进","jìn","entrer"),
  TH(),
  C("李文，快请进！","Lǐ Wén, kuài qǐng jìn!","Li Wen, entre vite je t'en prie !",0.55), HOLD(),
  N("On vous demande : « Jiayue, comment tu vas ? Ta tête te fait encore mal ? »"),
  C("家月，你怎么样了？头还疼吗？","Jiāyuè, nǐ zěnmeyàng le? Tóu hái téng ma?","Jiayue, comment tu vas ? Ta tête te fait encore mal ?",0.45),

  N("« Le médicament » se dit [[药|yào]]. Répondez : « ça ne fait plus si mal. Le médecin m'a prescrit des médicaments, une fois pris je vais beaucoup mieux. »"),
  ...teach2("药","yào","le médicament"),
  TH(),
  C("不那么疼了。医生开了一些药，吃完就好多了。","Bú nàme téng le. Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.","Ça ne fait plus si mal. Le médecin m'a prescrit des médicaments, une fois pris je vais beaucoup mieux.",0.35), HOLD(),
  N("On vous répond, soulagé : « tant mieux alors ! »"),
  C("那就好！","Nà jiù hǎo!","Tant mieux alors !",0.6),
  N("La professeure Wang demande : « Jiayue, tu veux manger quelque chose ? »"),
  C("家月，你想不想吃点儿东西？","Jiāyuè, nǐ xiǎng bu xiǎng chī diǎnr dōngxi?","Jiayue, tu veux manger quelque chose ?",0.45),

  N("« Le corps » se dit [[身体|shēntǐ]], et « une période de temps » se dit [[时|shí]]. Répondez : « mange un peu, quand on ne se sent pas bien il faut d'autant plus bien manger. »"),
  ...teach2("身体，时","shēntǐ, shí","le corps ; une période de temps"),
  TH(),
  C("吃点儿吧，身体不舒服时更要好好吃饭。","Chī diǎnr ba, shēntǐ bù shūfu shí gèng yào hǎohāo chī fàn.","Mange un peu, quand on ne se sent pas bien il faut d'autant plus bien manger.",0.35), HOLD(),
  N("On vous demande : « qu'est-ce que je pourrais manger ? »"),
  C("吃点儿什么呢？","Chī diǎnr shénme ne?","Qu'est-ce que je pourrais manger ?",0.5),

  N("Grammaire : l'adverbe de degré [[最|zuì]] se place devant un adjectif ou un verbe psychologique pour exprimer qu'une qualité dépasse celle de tous les autres du même genre. Écoutez ces exemples."),
  ...teach2("最","zuì","le plus"),
  C("你最喜欢吃中国菜。","Nǐ zuì xǐhuan chī Zhōngguó cài.","Tu aimes surtout (le plus) la cuisine chinoise.",0.45),
  C("在我们家，爸爸最高。","Zài wǒmen jiā, bàba zuì gāo.","Dans notre famille, c'est papa le plus grand.",0.5),
  C("你们班谁说中文说得最好？","Nǐmen bān shéi shuō Zhōngwén shuō de zuì hǎo?","Dans votre classe, qui parle le mieux chinois ?",0.45),
  N("Essayez, avec 最 : dites « dans notre famille, c'est papa le plus grand. »"),
  TH(),
  C("在我们家，爸爸最高。","Zài wǒmen jiā, bàba zuì gāo.","Dans notre famille, c'est papa le plus grand.",0.5), HOLD(),
  N("Dites, avec 最 : « tu aimes surtout la cuisine chinoise, je vais te préparer quelques plats chinois. »"),
  TH(),
  C("你最喜欢吃中国菜，我做几个中国菜吧。","Nǐ zuì xǐhuan chī Zhōngguó cài, wǒ zuò jǐ ge Zhōngguó cài ba.","Tu aimes surtout la cuisine chinoise, je vais te préparer quelques plats chinois.",0.4), HOLD(),
  N("On vous répond : « d'accord, merci professeure Wang. »"),
  C("好的，谢谢王老师。","Hǎo de, xièxie Wáng lǎoshī.","D'accord, merci professeure Wang.",0.5),

  N("Le soir, Bai Jiayue écrit dans son journal. « La pharmacie » se dit [[药店|yàodiàn]]. Écoutez ce qu'elle raconte."),
  ...teach2("药店","yàodiàn","la pharmacie"),
  C("我这几天经常头疼，从药店买了点儿药，没去医院。","Wǒ zhè jǐ tiān jīngcháng tóu téng, cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.","Ces derniers jours j'avais souvent mal à la tête, j'ai acheté des médicaments à la pharmacie, sans aller à l'hôpital.",0.35),
  C("今天下课后，王老师看我不舒服，就送我去医院了。","Jīntiān xiàkè hòu, Wáng lǎoshī kàn wǒ bù shūfu, jiù sòng wǒ qù yīyuàn le.","Aujourd'hui après les cours, la professeure Wang a vu que je n'allais pas bien, alors elle m'a emmenée à l'hôpital.",0.35),
  C("从医院回来，李文也来看我了。现在他们都回去了，我也要睡觉了。","Cóng yīyuàn huílái, Lǐ Wén yě lái kàn wǒ le. Xiànzài tāmen dōu huíqù le, wǒ yě yào shuìjiào le.","En rentrant de l'hôpital, Li Wen est aussi venu me voir. Maintenant ils sont tous repartis, je vais aller me coucher moi aussi.",0.35),
  N("Dites : ces derniers jours j'avais souvent mal à la tête, j'ai acheté des médicaments à la pharmacie, sans aller à l'hôpital."),
  TH(),
  C("我这几天经常头疼，从药店买了点儿药，没去医院。","Wǒ zhè jǐ tiān jīngcháng tóu téng, cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.","Ces derniers jours j'avais souvent mal à la tête, j'ai acheté des médicaments à la pharmacie, sans aller à l'hôpital.",0.35), HOLD(),

  // Révision finale de la leçon 11
  N("Révision finale de la leçon 11. Dites, avec 着 : la porte de la salle de classe est ouverte."),
  TH(),
  C("教室的门开着。","Jiàoshì de mén kāizhe.","La porte de la salle de classe est ouverte.",0.5),
  N("Dites, avec 着 et l'objet placé après : elle porte un pantalon blanc."),
  TH(),
  C("她穿着白色的裤子。","Tā chuānzhe báisè de kùzi.","Elle porte un pantalon blanc.",0.45),
  N("Dites, avec 最 : dans notre famille, c'est papa le plus grand."),
  TH(),
  C("在我们家，爸爸最高。","Zài wǒmen jiā, bàba zuì gāo.","Dans notre famille, c'est papa le plus grand.",0.5),
  N("Excellent ! Vous avez terminé la leçon 11 du HSK 2. Réécoutez-la demain, puis passez à la leçon 12. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("你怎么没接电话？","Nǐ zěnme méi jiē diànhuà?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、你打电话时，我正在上课呢。","Yī. Nǐ dǎ diànhuà shí, wǒ zhèngzài shàngkè ne.","",0.35),
  P(4,"…"),
  C("二、没事，我慢点儿开。","Èr. Méishì, wǒ màn diǎnr kāi.","",0.5),
  P(4,"…"),
  C("三、现在没有昨天那么疼了。","Sān. Xiànzài méiyǒu zuótiān nàme téng le.","",0.4),
  TH(),
  C("你打电话时，我正在上课呢。","Nǐ dǎ diànhuà shí, wǒ zhèngzài shàngkè ne.","",0.4), HOLD(),

  // Question 2
  C("外边下着雪，你别开车了。","Wàibian xiàzhe xuě, nǐ bié kāichē le.","",0.45),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、没事，我慢点儿开。","Yī. Méishì, wǒ màn diǎnr kāi.","",0.5),
  P(4,"…"),
  C("二、好的，我会跟他说的。","Èr. Hǎo de, wǒ huì gēn tā shuō de.","",0.45),
  P(4,"…"),
  C("三、他出去了，一会儿就回来。","Sān. Tā chūqù le, yíhuìr jiù huílái.","",0.4),
  TH(),
  C("没事，我慢点儿开。","Méishì, wǒ màn diǎnr kāi.","",0.55), HOLD(),

  // Question 3
  C("你现在动一动手，看看还疼不疼。","Nǐ xiànzài dòng yi dòng shǒu, kànkan hái téng bu téng.","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、现在没有昨天那么疼了。","Yī. Xiànzài méiyǒu zuótiān nàme téng le.","",0.4),
  P(4,"…"),
  C("二、你打电话时，我正在上课呢。","Èr. Nǐ dǎ diànhuà shí, wǒ zhèngzài shàngkè ne.","",0.35),
  P(4,"…"),
  C("三、他出去了，一会儿就回来。","Sān. Tā chūqù le, yíhuìr jiù huílái.","",0.4),
  TH(),
  C("现在没有昨天那么疼了。","Xiànzài méiyǒu zuótiān nàme téng le.","",0.45), HOLD(),

  // Question 4
  C("爷爷身体不好，你记得让他吃药。","Yéye shēntǐ bù hǎo, nǐ jìde ràng tā chī yào.","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、好的，我会跟他说的。","Yī. Hǎo de, wǒ huì gēn tā shuō de.","",0.45),
  P(4,"…"),
  C("二、没事，我慢点儿开。","Èr. Méishì, wǒ màn diǎnr kāi.","",0.5),
  P(4,"…"),
  C("三、现在没有昨天那么疼了。","Sān. Xiànzài méiyǒu zuótiān nàme téng le.","",0.4),
  TH(),
  C("好的，我会跟他说的。","Hǎo de, wǒ huì gēn tā shuō de.","",0.5), HOLD(),

  // Question 5
  C("女儿生病了，医生开了很多药。白色的药一天三次，绿色的药一天两次，红色的药一天一次。","Nǚ'ér shēngbìng le, yīshēng kāile hěn duō yào. Báisè de yào yì tiān sān cì, lǜsè de yào yì tiān liǎng cì, hóngsè de yào yì tiān yí cì.","",0.3),
  C("白色的药怎么吃？","Báisè de yào zěnme chī?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、一天一次。","Yī. Yì tiān yí cì.","",0.55),
  P(4,"…"),
  C("二、一天两次。","Èr. Yì tiān liǎng cì.","",0.55),
  P(4,"…"),
  C("三、一天三次。","Sān. Yì tiān sān cì.","",0.55),
  TH(),
  C("一天三次。","Yì tiān sān cì.","",0.6), HOLD(),

  // Question 6
  C("上小学时，爷爷经常走路送我上学。上中学后，爷爷就没送过我了，学校离家远，我都是自己坐车去。","Shàng xiǎoxué shí, yéye jīngcháng zǒulù sòng wǒ shàngxué. Shàng zhōngxué hòu, yéye jiù méi sòngguo wǒ le, xuéxiào lí jiā yuǎn, wǒ dōu shì zìjǐ zuò chē qù.","",0.28),
  C("上小学时，爷爷是怎么送他的？","Shàng xiǎoxué shí, yéye shì zěnme sòng tā de?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、开车。","Yī. Kāichē.","",0.6),
  P(4,"…"),
  C("二、坐车。","Èr. Zuò chē.","",0.6),
  P(4,"…"),
  C("三、走路。","Sān. Zǒulù.","",0.6),
  TH(),
  C("走路。","Zǒulù.","",0.65), HOLD(),

  // Question 7
  C("我经常早早地到公司。但是今天早上我头疼，路上我开得很慢，是最晚到公司的。","Wǒ jīngcháng zǎozǎo de dào gōngsī. Dànshì jīntiān zǎoshang wǒ tóu téng, lùshang wǒ kāi de hěn màn, shì zuì wǎn dào gōngsī de.","",0.3),
  C("他今天：","Tā jīntiān:","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、头疼。","Yī. Tóu téng.","",0.6),
  P(4,"…"),
  C("二、起床晚了。","Èr. Qǐchuáng wǎn le.","",0.55),
  P(4,"…"),
  C("三、没休息好。","Sān. Méi xiūxi hǎo.","",0.55),
  TH(),
  C("头疼。","Tóu téng.","",0.65), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 12."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
