/* ============================================================
   HSK 1 · Leçon 7 — 我晚上六点半下班 Je finis à 18h30
   D'après « 新HSK教程 1 », leçon 7.
   Vocabulaire de la leçon :
   现在 · 点 · 早上 · 上午 · 分 · 课 · 下午 · 见 · 吧 ·
   电影院 · 看 · 电影 · 事 · 上课 · 呢(confirmation) · 半 · 下课 ·
   在 · 家(maison) · 里 · 晚上 · 医院 · 上班 · 店 · 菜(légumes) ·
   分钟 · 后
   Attention aux réutilisations : 呢 signifiait « et toi ? » (leçon 4),
   ici il confirme un fait déjà dit ; 家 signifiait « famille » (leçon 4),
   ici « la maison » ; 菜 signifiait « des plats » (leçon 5),
   ici « des légumes ». Vous connaissez déjà 下班 (leçon 5) : voici
   son contraire, 上班.
   Grammaire : dire l'heure (点/分) et les moments du jour ·
   particule 吧 (suggestion) · position des adverbes/compléments de
   temps avant le verbe · particule 呢 de confirmation.
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  group: "hsk1",
  id: "hsk1-07",
  badge: 7,
  hanzi: "六点半下班",
  title: "Leçon 7 · L'heure et les horaires",
  desc: "3 parties · 现在几点 · 看电影 · 我在家里",
  intro: "Leçon 7 du HSK 1 : dire l'heure, proposer un rendez-vous avec 吧, parler de son emploi du temps, et donner sa position au téléphone avec 在.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"现在几点", title:"Partie 1 · Quelle heure est-il ?", desc:"现在 · 点 · 早上 · 上午 · 分 · 课 · 下午 · 见 · 吧",
    build(){ return [
  N("Bienvenue dans la leçon 7 du HSK 1. Aujourd'hui : dire l'heure, et organiser un rendez-vous. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("现在几点？","Xiànzài jǐ diǎn?","Quelle heure est-il ?",0.5),
  C("早上八点四十。","Zǎoshang bā diǎn sìshí.","Il est 8 h 40 du matin.",0.5),
  C("我上午十点十分有课。","Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.","J'ai cours à 10 h 10 ce matin.",0.5),
  C("好的，我们下午两点见吧。","Hǎo de, wǒmen xiàwǔ liǎng diǎn jiàn ba.","D'accord, retrouvons-nous à 14 h.",0.5),
  N("D'abord, révision de la leçon 4 : dites « vingt »."),
  TH(),
  C("二十","èrshí","vingt",0.6), HOLD(),

  N("« Maintenant » se dit [[现在|xiànzài]]. Écoutez et répétez."),
  ...teach2("现在","xiànzài","maintenant"),
  N("Pour dire l'heure sur l'horloge, « heure » se dit [[点|diǎn]]. Écoutez et répétez."),
  ...teach2("点","diǎn","heure (sur l'horloge)"),
  N("Demandez : « Quelle heure est-il maintenant ? »"),
  TH(),
  C("现在几点？","Xiànzài jǐ diǎn?","Quelle heure est-il ?",0.6),
  C("现在几点？","Xiànzài jǐ diǎn?","Quelle heure est-il ?",0.6), HOLD(),

  N("« Le matin », tôt le matin, se dit [[早上|zǎoshang]]. Écoutez et répétez."),
  ...teach2("早上","zǎoshang","le matin"),
  N("« Quarante » se construit sur le modèle de vingt : quatre-dix, [[四十|sìshí]]. Écoutez et répétez."),
  ...teach2("四十","sìshí","quarante"),
  N("Répondez : « Il est 8 h 40 du matin. »"),
  TH(),
  C("早上八点四十。","Zǎoshang bā diǎn sìshí.","Il est 8 h 40 du matin.",0.6),
  C("早上八点四十。","Zǎoshang bā diǎn sìshí.","Il est 8 h 40 du matin.",0.6), HOLD(),

  N("« La matinée » se dit [[上午|shàngwǔ]]. Écoutez et répétez."),
  ...teach2("上午","shàngwǔ","la matinée"),
  N("Pour les minutes précises, on utilise [[分|fēn]]. Et « un cours », « une leçon », se dit [[课|kè]]. Écoutez et répétez."),
  ...teach2("课","kè","cours, leçon"),
  N("« J'ai cours à 10 h 10 ce matin » se dit : moi — matinée — dix heures dix minutes — avoir — cours."),
  ...teach2("我上午十点十分有课。","Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.","J'ai cours à 10 h 10 ce matin."),

  N("« L'après-midi » se dit [[下午|xiàwǔ]]. Écoutez et répétez."),
  ...teach2("下午","xiàwǔ","l'après-midi"),
  N("« Se retrouver », « se voir », se dit [[见|jiàn]]. Écoutez et répétez."),
  ...teach2("见","jiàn","se voir, se retrouver"),
  N("Pour proposer, suggérer gentiment, on ajoute [[吧|ba]] à la fin de la phrase. Écoutez et répétez."),
  ...teach2("吧","ba","(suggestion)"),
  N("Répondez : « D'accord, retrouvons-nous à 14 h. » — littéralement « après-midi deux heures se voir [[吧|ba]] »."),
  TH(),
  C("好的，我们下午两点见吧。","Hǎo de, wǒmen xiàwǔ liǎng diǎn jiàn ba.","D'accord, retrouvons-nous à 14 h.",0.55),
  C("好的，我们下午两点见吧。","Hǎo de, wǒmen xiàwǔ liǎng diǎn jiàn ba.","D'accord, retrouvons-nous à 14 h.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. On vous demande : « Quelle heure est-il ? »"),
  C("现在几点？","Xiànzài jǐ diǎn?","Quelle heure est-il ?",0.6),
  N("Répondez : « Il est 8 h 40 du matin. »"),
  TH(),
  C("早上八点四十。","Zǎoshang bā diǎn sìshí.","Il est 8 h 40 du matin.",0.6),
  N("Ajoutez : « J'ai cours à 10 h 10 ce matin. »"),
  TH(),
  C("我上午十点十分有课。","Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.","J'ai cours à 10 h 10 ce matin.",0.6),
  N("On vous répond : « D'accord, retrouvons-nous à 14 h. »"),
  TH(),
  C("好的，我们下午两点见吧。","Hǎo de, wǒmen xiàwǔ liǎng diǎn jiàn ba.","D'accord, retrouvons-nous à 14 h.",0.6), HOLD(),

  // Révision
  N("Révision. Demandez : quelle heure est-il ?"),
  TH(),
  C("现在几点？","Xiànzài jǐ diǎn?","Quelle heure est-il ?",0.6),
  N("Dites : la matinée."),
  TH(),
  C("上午","shàngwǔ","la matinée",0.6),
  N("Fin de la partie 1. À la partie 2 : proposer un cinéma."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"看电影", title:"Partie 2 · Aller au cinéma", desc:"电影院 · 看 · 电影 · 事 · 上课 · 呢 · 半 · 下课",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("下午我想去电影院看电影，你去吗？","Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng, nǐ qù ma?","Cet après-midi je veux aller au cinéma voir un film, tu viens ?",0.5),
  C("我不想去，下午还有事。","Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.","Je ne veux pas venir, j'ai encore des choses à faire cet après-midi.",0.5),
  C("好的。明天呢？","Hǎo de. Míngtiān ne?","D'accord. Et demain ?",0.5),
  C("我明天下午两点还上课呢，四点半下课。","Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne, sì diǎn bàn xiàkè.","Demain après-midi j'ai encore cours à 14 h, je finis à 16 h 30.",0.5),
  N("Révision : dites « d'accord, retrouvons-nous à 14 h »."),
  TH(),
  C("我们下午两点见吧。","Wǒmen xiàwǔ liǎng diǎn jiàn ba.","Retrouvons-nous à 14 h.",0.6), HOLD(),

  N("« Le cinéma », le bâtiment, se dit [[电影院|diànyǐngyuàn]]. Écoutez et répétez."),
  ...teach2("电影院","diànyǐngyuàn","le cinéma"),
  N("« Regarder », « voir un spectacle », se dit [[看|kàn]]. Et « un film » se dit [[电影|diànyǐng]]. Écoutez et répétez."),
  ...teach2("看电影","kàn diànyǐng","voir un film"),
  N("Proposez : « Cet après-midi je veux aller au cinéma voir un film, tu viens ? »"),
  TH(),
  C("下午我想去电影院看电影，你去吗？","Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng, nǐ qù ma?","Cet après-midi je veux aller au cinéma voir un film, tu viens ?",0.5),
  C("下午我想去电影院看电影，你去吗？","Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng, nǐ qù ma?","Cet après-midi je veux aller au cinéma voir un film, tu viens ?",0.6), HOLD(),

  N("« Une affaire », « quelque chose à faire », se dit [[事|shì]]. Écoutez et répétez."),
  ...teach2("事","shì","une affaire, quelque chose à faire"),
  N("Répondez : « Je ne veux pas venir, j'ai encore des choses à faire cet après-midi. »"),
  TH(),
  C("我不想去，下午还有事。","Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.","Je ne veux pas venir, j'ai encore des choses à faire cet après-midi.",0.55),
  C("我不想去，下午还有事。","Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.","Je ne veux pas venir, j'ai encore des choses à faire cet après-midi.",0.6), HOLD(),

  N("« Aller en cours », « commencer les cours », se dit [[上课|shàngkè]]. Écoutez et répétez."),
  ...teach2("上课","shàngkè","aller en cours"),
  N("Et son contraire, « finir les cours », que vous ne connaissez pas encore : [[下课|xiàkè]]. Écoutez et répétez."),
  ...teach2("下课","xiàkè","finir les cours"),
  N("« Et demi », pour l'heure, se dit [[半|bàn]]. Écoutez et répétez."),
  ...teach2("半","bàn","et demi(e)"),
  N("Nouveau : à la fin d'une phrase, [[呢|ne]] peut aussi confirmer un fait, pas seulement demander « et toi ? ». « J'ai encore cours à 14 h » devient plus insistant avec [[呢|ne]] à la fin."),
  ...teach2("我明天下午两点还上课呢。","Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne.","Demain après-midi j'ai encore cours à 14 h."),
  N("Complétez : « … je finis à 16 h 30. » Répondez la phrase complète."),
  TH(),
  C("我明天下午两点还上课呢，四点半下课。","Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne, sì diǎn bàn xiàkè.","Demain après-midi j'ai encore cours à 14 h, je finis à 16 h 30.",0.5), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Proposez : « Cet après-midi je veux aller au cinéma voir un film, tu viens ? »"),
  TH(),
  C("下午我想去电影院看电影，你去吗？","Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng, nǐ qù ma?","Cet après-midi je veux aller au cinéma voir un film, tu viens ?",0.55),
  N("On vous répond : « Je ne veux pas venir, j'ai encore des choses à faire cet après-midi. »"),
  C("我不想去，下午还有事。","Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.","Je ne veux pas venir, j'ai encore des choses à faire cet après-midi.",0.55),
  N("Dites : « D'accord. Et demain ? »"),
  TH(),
  C("好的。明天呢？","Hǎo de. Míngtiān ne?","D'accord. Et demain ?",0.6),
  N("On vous répond : « Demain après-midi j'ai encore cours à 14 h, je finis à 16 h 30. »"),
  C("我明天下午两点还上课呢，四点半下课。","Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne, sì diǎn bàn xiàkè.","Demain après-midi j'ai encore cours à 14 h, je finis à 16 h 30.",0.5), HOLD(),

  // Révision
  N("Révision. Dites : aller en cours."),
  TH(),
  C("上课","shàngkè","aller en cours",0.6),
  N("Dites : finir les cours."),
  TH(),
  C("下课","xiàkè","finir les cours",0.6),
  N("Fin de la partie 2. À la partie 3 : un appel téléphonique."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"我在家里", title:"Partie 3 · Un appel téléphonique", desc:"在 · 家 · 里 · 晚上 · 医院 · 上班 · 店 · 菜 · 分钟 · 后",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("喂，你在哪儿呢？","Wèi, nǐ zài nǎr ne?","Allô, où es-tu ?",0.5),
  C("我在家里呢。","Wǒ zài jiā li ne.","Je suis à la maison.",0.5),
  C("我晚上六点半下班。","Wǒ wǎnshang liù diǎn bàn xiàbān.","Je finis le travail à 18 h 30 ce soir.",0.5),
  C("我八点去医院上班。","Wǒ bā diǎn qù yīyuàn shàngbān.","Je vais travailler à l'hôpital à 8 h.",0.5),
  C("好的，你去店里买些菜吧。","Hǎo de, nǐ qù diàn li mǎi xiē cài ba.","D'accord, passe au magasin acheter des légumes.",0.5),
  C("好，我十分钟后去。","Hǎo, wǒ shí fēnzhōng hòu qù.","D'accord, j'y vais dans dix minutes.",0.5),
  N("Révision : dites « je finis les cours »."),
  TH(),
  C("下课","xiàkè","finir les cours",0.6), HOLD(),

  N("Le verbe « se trouver », « être à », se dit [[在|zài]]. Écoutez et répétez."),
  ...teach2("在","zài","être à, se trouver"),
  N("Souvenez-vous, « la famille » se dit [[家|jiā]] — ici, le même mot s'utilise aussi pour « la maison », le lieu où l'on habite. Et « à l'intérieur » se dit [[里|li]]. « À la maison » se dit :"),
  ...teach2("家里","jiā li","à la maison"),
  N("Demandez au téléphone : « Allô, où es-tu ? »"),
  TH(),
  C("喂，你在哪儿呢？","Wèi, nǐ zài nǎr ne?","Allô, où es-tu ?",0.6),
  C("喂，你在哪儿呢？","Wèi, nǐ zài nǎr ne?","Allô, où es-tu ?",0.6), HOLD(),
  N("Répondez : « Je suis à la maison. »"),
  TH(),
  C("我在家里呢。","Wǒ zài jiā li ne.","Je suis à la maison.",0.6), HOLD(),

  N("« Le soir » se dit [[晚上|wǎnshang]]. Dites : « Je finis le travail à 18 h 30 ce soir. » Vous connaissez déjà [[下班|xiàbān]] depuis la leçon 5."),
  TH(),
  C("我晚上六点半下班。","Wǒ wǎnshang liù diǎn bàn xiàbān.","Je finis le travail à 18 h 30 ce soir.",0.55),
  C("我晚上六点半下班。","Wǒ wǎnshang liù diǎn bàn xiàbān.","Je finis le travail à 18 h 30 ce soir.",0.6), HOLD(),

  N("« L'hôpital » se dit [[医院|yīyuàn]]. Et voici le contraire de [[下班|xiàbān]] : « commencer le travail », « aller travailler », se dit [[上班|shàngbān]]. Écoutez et répétez."),
  ...teach2("上班","shàngbān","commencer le travail"),
  N("Dites : « Je vais travailler à l'hôpital à 8 h. »"),
  TH(),
  C("我八点去医院上班。","Wǒ bā diǎn qù yīyuàn shàngbān.","Je vais travailler à l'hôpital à 8 h.",0.6),
  C("我八点去医院上班。","Wǒ bā diǎn qù yīyuàn shàngbān.","Je vais travailler à l'hôpital à 8 h.",0.6), HOLD(),

  N("« Un magasin », « une boutique », se dit [[店|diàn]]. Et souvenez-vous : [[菜|cài]] veut dire « des plats » — ici, il désigne plus précisément « des légumes ». Écoutez et répétez."),
  ...teach2("你去店里买些菜吧。","Nǐ qù diàn li mǎi xiē cài ba.","Passe au magasin acheter des légumes."),
  N("« Les minutes », comme durée, se disent [[分钟|fēnzhōng]] — différent de [[分|fēn]] qui marque l'heure précise. Et « après », « plus tard », se dit [[后|hòu]]. Écoutez et répétez."),
  ...teach2("十分钟后","shí fēnzhōng hòu","dans dix minutes"),
  N("Répondez : « D'accord, j'y vais dans dix minutes. »"),
  TH(),
  C("好，我十分钟后去。","Hǎo, wǒ shí fēnzhōng hòu qù.","D'accord, j'y vais dans dix minutes.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. On vous appelle : « Allô, où es-tu ? »"),
  C("喂，你在哪儿呢？","Wèi, nǐ zài nǎr ne?","Allô, où es-tu ?",0.6),
  N("Répondez : « Je suis à la maison. »"),
  TH(),
  C("我在家里呢。","Wǒ zài jiā li ne.","Je suis à la maison.",0.6),
  N("Dites : « Je finis le travail à 18 h 30 ce soir. »"),
  TH(),
  C("我晚上六点半下班。","Wǒ wǎnshang liù diǎn bàn xiàbān.","Je finis le travail à 18 h 30 ce soir.",0.6),
  N("On vous répond : « Je vais travailler à l'hôpital à 8 h. »"),
  C("我八点去医院上班。","Wǒ bā diǎn qù yīyuàn shàngbān.","Je vais travailler à l'hôpital à 8 h.",0.6),
  N("On vous demande : « D'accord, passe au magasin acheter des légumes. »"),
  C("好的，你去店里买些菜吧。","Hǎo de, nǐ qù diàn li mǎi xiē cài ba.","D'accord, passe au magasin acheter des légumes.",0.55),
  N("Répondez : « D'accord, j'y vais dans dix minutes. »"),
  TH(),
  C("好，我十分钟后去。","Hǎo, wǒ shí fēnzhōng hòu qù.","D'accord, j'y vais dans dix minutes.",0.6), HOLD(),

  // Révision finale de la leçon 7
  N("Révision finale de la leçon 7. Demandez : quelle heure est-il ?"),
  TH(),
  C("现在几点？","Xiànzài jǐ diǎn?","Quelle heure est-il ?",0.6),
  N("Proposez : retrouvons-nous à 14 h."),
  TH(),
  C("我们下午两点见吧。","Wǒmen xiàwǔ liǎng diǎn jiàn ba.","Retrouvons-nous à 14 h.",0.6),
  N("Dites : je vais au cinéma voir un film."),
  TH(),
  C("我去电影院看电影。","Wǒ qù diànyǐngyuàn kàn diànyǐng.","Je vais au cinéma voir un film.",0.6),
  N("Demandez au téléphone : où es-tu ?"),
  TH(),
  C("你在哪儿呢？","Nǐ zài nǎr ne?","Où es-tu ?",0.6),
  N("Et pour finir : je finis le travail à 18 h 30 ce soir."),
  TH(),
  C("我晚上六点半下班。","Wǒ wǎnshang liù diǎn bàn xiàbān.","Je finis le travail à 18 h 30 ce soir.",0.6),
  N("Excellent ! Vous avez terminé la leçon 7. Vous savez dire l'heure, organiser un rendez-vous, et parler au téléphone. Réécoutez-la demain, puis passez à la leçon 8. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice audio du cahier", desc:"Exercice immersif adapté du cahier HSK 1 — tout en chinois",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("我们在哪儿见？","Wǒmen zài nǎr jiàn?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、早上七点半。","Yī. Zǎoshang qī diǎn bàn.","",0.6),
  P(4,"…"),
  C("二、对不起，我有课。","Èr. Duìbuqǐ, wǒ yǒu kè.","",0.6),
  P(4,"…"),
  C("三、电影院。","Sān. Diànyǐngyuàn.","",0.6),
  TH(),
  C("电影院。","Diànyǐngyuàn.","",0.65), HOLD(),

  // Question 2
  C("现在几点？","Xiànzài jǐ diǎn?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、早上七点半。","Yī. Zǎoshang qī diǎn bàn.","",0.6),
  P(4,"…"),
  C("二、电影院。","Èr. Diànyǐngyuàn.","",0.6),
  P(4,"…"),
  C("三、对不起，我有课。","Sān. Duìbuqǐ, wǒ yǒu kè.","",0.6),
  TH(),
  C("早上七点半。","Zǎoshang qī diǎn bàn.","",0.65), HOLD(),

  // Question 3
  C("我们下午去超市吧。","Wǒmen xiàwǔ qù chāoshì ba.","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、电影院。","Yī. Diànyǐngyuàn.","",0.6),
  P(4,"…"),
  C("二、对不起，我有课。","Èr. Duìbuqǐ, wǒ yǒu kè.","",0.6),
  P(4,"…"),
  C("三、早上七点半。","Sān. Zǎoshang qī diǎn bàn.","",0.6),
  TH(),
  C("对不起，我有课。","Duìbuqǐ, wǒ yǒu kè.","",0.65), HOLD(),

  // Question 4
  C("我今天早上八点半上课，十点十分下课。","Wǒ jīntiān zǎoshang bā diǎn bàn shàngkè, shí diǎn shí fēn xiàkè.","",0.55),
  C("今天几点下课？","Jīntiān jǐ diǎn xiàkè?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、八点半。","Yī. Bā diǎn bàn.","",0.6),
  P(4,"…"),
  C("二、十点十分。","Èr. Shí diǎn shí fēn.","",0.6),
  P(4,"…"),
  C("三、十点二十。","Sān. Shí diǎn èrshí.","",0.6),
  TH(),
  C("十点十分。","Shí diǎn shí fēn.","",0.65), HOLD(),

  // Question 5
  C("妈妈今天休息，下午想去菜店买些菜。","Māma jīntiān xiūxi, xiàwǔ xiǎng qù càidiàn mǎi xiē cài.","",0.55),
  C("妈妈想买什么？","Māma xiǎng mǎi shénme?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、菜。","Yī. Cài.","",0.6),
  P(4,"…"),
  C("二、饺子。","Èr. Jiǎozi.","",0.6),
  P(4,"…"),
  C("三、牛奶。","Sān. Niúnǎi.","",0.6),
  TH(),
  C("菜。","Cài.","",0.65), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 8."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
