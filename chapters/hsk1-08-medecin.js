/* ============================================================
   HSK 1 · Leçon 8 — 我爸爸也在医院工作 Mon père travaille aussi à l'hôpital
   D'après « 新HSK教程 1 », leçon 8.
   Vocabulaire de la leçon :
   房间 · 外 · 只 · 小 · 猫 · 没 · 看见 · 桌子 · 下 · 漂亮 ·
   在(préposition) · 学校 · 书店 · 前 · 能 · 到 · 午饭 · 大(grand) ·
   病人 · 多(nombreux) · 医生
   Attention aux réutilisations : 在 signifiait « se trouver, être à »
   (leçon 7), ici c'est une préposition « à » devant un lieu ;
   大 signifiait « âgé » dans 多大 (leçon 4), ici « grand » ;
   多 signifiait « combien » dans 多大 (leçon 4), ici « nombreux ».
   Vous connaissez déjà 工作 (leçon 3), 饭/晚饭 (leçons 5-6) et
   里 (leçon 7).
   Grammaire : mots de position (下/外/前) · préposition 在 + lieu +
   verbe · verbe modal 能 (pouvoir, être capable de).
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  id: "hsk1-08",
  badge: 8,
  hanzi: "爸爸也在医院工作",
  title: "Leçon 8 · Position, rendez-vous, docteurs",
  desc: "3 parties · 桌子下 · 在学校吃午饭 · 医生非常忙",
  intro: "Leçon 8 du HSK 1 : dire où se trouve quelque chose, donner rendez-vous avec 在 + lieu + verbe, et parler de métiers avec 能.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"桌子下", title:"Partie 1 · Où est le chat ?", desc:"房间 · 外 · 只 · 小 · 猫 · 没 · 看见 · 桌子 · 下 · 漂亮",
    build(){ return [
  N("Bienvenue dans la leçon 8 du HSK 1. Aujourd'hui : dire où se trouvent les choses, donner rendez-vous, et parler de métiers. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("房间外有一只小猫。","Fángjiān wài yǒu yì zhī xiǎo māo.","Il y a un petit chat dehors, devant la chambre.",0.5),
  P(1.5,"…"),
  C("我没看见，它在哪儿呢？","Wǒ méi kànjiàn, tā zài nǎr ne?","Je ne le vois pas, où est-il ?",0.5),
  P(1.5,"…"),
  C("它在桌子下呢。","Tā zài zhuōzi xià ne.","Il est sous la table.",0.5),
  P(1.5,"…"),
  C("这只小猫真漂亮！","Zhè zhī xiǎo māo zhēn piàoliang!","Ce petit chat est vraiment mignon !",0.5),
  N("D'abord, révision de la leçon 7 : dites « je suis à la maison »."),
  TH(),
  C("我在家里呢。","Wǒ zài jiā li ne.","Je suis à la maison.",0.6), HOLD(),

  N("« Une chambre », « une pièce », se dit [[房间|fángjiān]]. Écoutez et répétez."),
  ...teach2("房间","fángjiān","la chambre, la pièce"),
  N("« Dehors » se dit [[外|wài]]. Écoutez et répétez."),
  ...teach2("外","wài","dehors"),
  N("Pour compter les animaux, on utilise le classificateur [[只|zhī]] — différent de [[个|ge]] et [[口|kǒu]] que vous connaissez. Écoutez et répétez."),
  ...teach2("只","zhī","(classificateur pour les animaux)"),
  N("« Petit » se dit [[小|xiǎo]], et « un chat » se dit [[猫|māo]]. « Un petit chat » se dit :"),
  ...teach2("一只小猫","yì zhī xiǎo māo","un petit chat"),
  N("Dites : « Il y a un petit chat dehors, devant la chambre. »"),
  TH(),
  C("房间外有一只小猫。","Fángjiān wài yǒu yì zhī xiǎo māo.","Il y a un petit chat dehors, devant la chambre.",0.55), P(3,"…"),
  C("房间外有一只小猫。","Fángjiān wài yǒu yì zhī xiǎo māo.","Il y a un petit chat dehors, devant la chambre.",0.6), HOLD(),

  N("« Ne pas » au passé, « pas encore », se dit [[没|méi]] — différent de [[不|bù]]. Et « voir », « apercevoir », se dit [[看见|kànjiàn]]. Écoutez et répétez."),
  ...teach2("没看见","méi kànjiàn","ne pas voir, ne pas avoir vu"),
  N("Répondez : « Je ne le vois pas, où est-il ? »"),
  TH(),
  C("我没看见，它在哪儿呢？","Wǒ méi kànjiàn, tā zài nǎr ne?","Je ne le vois pas, où est-il ?",0.6), HOLD(),

  N("« Une table » se dit [[桌子|zhuōzi]], et « en dessous » se dit [[下|xià]]. Écoutez et répétez."),
  ...teach2("桌子下","zhuōzi xià","sous la table"),
  N("Répondez : « Il est sous la table. »"),
  TH(),
  C("它在桌子下呢。","Tā zài zhuōzi xià ne.","Il est sous la table.",0.6), HOLD(),

  N("« Joli », « mignon », « beau », se dit [[漂亮|piàoliang]]. Écoutez et répétez."),
  ...teach2("漂亮","piàoliang","joli, mignon"),
  N("Dites : « Ce petit chat est vraiment mignon ! »"),
  TH(),
  C("这只小猫真漂亮！","Zhè zhī xiǎo māo zhēn piàoliang!","Ce petit chat est vraiment mignon !",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Dites : « Il y a un petit chat dehors, devant la chambre. »"),
  TH(),
  C("房间外有一只小猫。","Fángjiān wài yǒu yì zhī xiǎo māo.","Il y a un petit chat dehors, devant la chambre.",0.55), P(2.5,"…"),
  N("On vous répond : « Je ne le vois pas, où est-il ? »"),
  C("我没看见，它在哪儿呢？","Wǒ méi kànjiàn, tā zài nǎr ne?","Je ne le vois pas, où est-il ?",0.6),
  N("Répondez : « Il est sous la table. »"),
  TH(),
  C("它在桌子下呢。","Tā zài zhuōzi xià ne.","Il est sous la table.",0.6), P(2,"…"),
  N("Et pour finir : « Ce petit chat est vraiment mignon ! »"),
  TH(),
  C("这只小猫真漂亮！","Zhè zhī xiǎo māo zhēn piàoliang!","Ce petit chat est vraiment mignon !",0.6), HOLD(),

  // Révision
  N("Révision. Comment dit-on « dehors » ?"),
  TH(),
  C("外","wài","dehors",0.6), P(1.5,"…"),
  N("Comment dit-on « sous la table » ?"),
  TH(),
  C("桌子下","zhuōzi xià","sous la table",0.6), P(1.5,"…"),
  N("Fin de la partie 1. À la partie 2 : donner rendez-vous."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"在学校吃午饭", title:"Partie 2 · Donner rendez-vous", desc:"在(préposition) · 学校 · 书店 · 前 · 能 · 到 · 午饭",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("我们在哪儿见呢？","Wǒmen zài nǎr jiàn ne?","Où allons-nous nous voir ?",0.5),
  P(1.5,"…"),
  C("在学校书店前见吧。","Zài xuéxiào shūdiàn qián jiàn ba.","Retrouvons-nous devant la librairie de l'école.",0.5),
  P(1.5,"…"),
  C("好的。下午两点你能到吗？","Hǎo de. Xiàwǔ liǎng diǎn nǐ néng dào ma?","D'accord. Peux-tu arriver à 14 h ?",0.5),
  P(1.5,"…"),
  C("我能到。我在学校吃午饭。","Wǒ néng dào. Wǒ zài xuéxiào chī wǔfàn.","Je peux arriver. Je déjeune à l'école.",0.5),
  N("Révision : dites « ce petit chat est vraiment mignon »."),
  TH(),
  C("这只小猫真漂亮！","Zhè zhī xiǎo māo zhēn piàoliang!","Ce petit chat est vraiment mignon !",0.6), HOLD(),

  N("Nouveau : [[在|zài]] peut aussi s'utiliser comme une préposition, juste avant un lieu et un verbe, pour dire « faire quelque chose À un endroit ». Vous le connaissiez déjà comme verbe « se trouver » — c'est le même mot. Écoutez et répétez."),
  ...teach2("在学校","zài xuéxiào","à l'école"),
  N("« L'école » se dit [[学校|xuéxiào]]. Demandez : « Où allons-nous nous voir ? »"),
  TH(),
  C("我们在哪儿见呢？","Wǒmen zài nǎr jiàn ne?","Où allons-nous nous voir ?",0.6), P(2.5,"…"),
  C("我们在哪儿见呢？","Wǒmen zài nǎr jiàn ne?","Où allons-nous nous voir ?",0.6), HOLD(),

  N("« Une librairie » se dit [[书店|shūdiàn]], et « devant » se dit [[前|qián]]. Écoutez et répétez."),
  ...teach2("书店前","shūdiàn qián","devant la librairie"),
  N("Répondez : « Retrouvons-nous devant la librairie de l'école. »"),
  TH(),
  C("在学校书店前见吧。","Zài xuéxiào shūdiàn qián jiàn ba.","Retrouvons-nous devant la librairie de l'école.",0.55), P(3,"…"),
  C("在学校书店前见吧。","Zài xuéxiào shūdiàn qián jiàn ba.","Retrouvons-nous devant la librairie de l'école.",0.6), HOLD(),

  N("« Pouvoir », « être capable de », se dit [[能|néng]] — devant le verbe, comme [[会|huì]] et [[想|xiǎng]] que vous connaissez. Et « arriver » se dit [[到|dào]]. Écoutez et répétez."),
  ...teach2("能到","néng dào","pouvoir arriver"),
  N("Demandez : « Peux-tu arriver à 14 h ? »"),
  TH(),
  C("下午两点你能到吗？","Xiàwǔ liǎng diǎn nǐ néng dào ma?","Peux-tu arriver à 14 h ?",0.6), HOLD(),

  N("« Le déjeuner » se dit [[午饭|wǔfàn]] — vous connaissez déjà [[饭|fàn]] le repas et [[晚饭|wǎnfàn]] le dîner. Répondez : « Je peux arriver. Je déjeune à l'école. »"),
  TH(),
  C("我能到。我在学校吃午饭。","Wǒ néng dào. Wǒ zài xuéxiào chī wǔfàn.","Je peux arriver. Je déjeune à l'école.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : où allons-nous nous voir ?"),
  TH(),
  C("我们在哪儿见呢？","Wǒmen zài nǎr jiàn ne?","Où allons-nous nous voir ?",0.6), P(2,"…"),
  N("On vous répond : « Retrouvons-nous devant la librairie de l'école. »"),
  C("在学校书店前见吧。","Zài xuéxiào shūdiàn qián jiàn ba.","Retrouvons-nous devant la librairie de l'école.",0.55),
  N("Demandez : « Peux-tu arriver à 14 h ? »"),
  TH(),
  C("下午两点你能到吗？","Xiàwǔ liǎng diǎn nǐ néng dào ma?","Peux-tu arriver à 14 h ?",0.6), P(2,"…"),
  N("Répondez : « Je peux arriver. Je déjeune à l'école. »"),
  TH(),
  C("我能到。我在学校吃午饭。","Wǒ néng dào. Wǒ zài xuéxiào chī wǔfàn.","Je peux arriver. Je déjeune à l'école.",0.6), HOLD(),

  // Révision
  N("Révision. Dites : à l'école."),
  TH(),
  C("在学校","zài xuéxiào","à l'école",0.6), P(1.5,"…"),
  N("Demandez : peux-tu arriver ?"),
  TH(),
  C("你能到吗？","Nǐ néng dào ma?","Peux-tu arriver ?",0.6), P(1.5,"…"),
  N("Fin de la partie 2. À la partie 3 : parler de métiers, à l'hôpital."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"医生非常忙", title:"Partie 3 · Une famille de médecins", desc:"大(grand) · 病人 · 多(nombreux) · 医生",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("小胡，还没吃饭呢？","Xiǎo Hú, hái méi chī fàn ne?","Xiao Hu, tu n'as pas encore mangé ?",0.5),
  P(1.5,"…"),
  C("没吃呢。","Méi chī ne.","Pas encore.",0.5),
  P(1.5,"…"),
  C("大医院病人多，医生非常忙。","Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.","Dans les grands hôpitaux il y a beaucoup de patients, les médecins sont très occupés.",0.5),
  P(1.5,"…"),
  C("是的。我爸爸也在医院工作，他也非常忙。","Shì de. Wǒ bàba yě zài yīyuàn gōngzuò, tā yě fēicháng máng.","Oui. Mon père travaille aussi à l'hôpital, il est très occupé aussi.",0.5),
  P(1.5,"…"),
  C("你家有两个医生？","Nǐ jiā yǒu liǎng ge yīshēng?","Il y a deux médecins dans ta famille ?",0.5),
  P(1.5,"…"),
  C("对。","Duì.","Oui.",0.5),
  N("Révision : dites « je déjeune à l'école »."),
  TH(),
  C("我在学校吃午饭。","Wǒ zài xuéxiào chī wǔfàn.","Je déjeune à l'école.",0.6), HOLD(),

  N("Nouveau sens pour un mot connu : [[大|dà]] signifiait « âgé » dans [[多大|duō dà]] — ici, seul devant un nom, il veut dire « grand », « grande taille ». Écoutez et répétez."),
  ...teach2("大医院","dà yīyuàn","un grand hôpital"),
  N("« Un patient » se dit [[病人|bìngrén]]. Et [[多|duō]], qui signifiait « combien » dans [[多大|duō dà]], veut dire ici « nombreux », comme adjectif. Écoutez et répétez."),
  ...teach2("病人多","bìngrén duō","il y a beaucoup de patients"),
  N("« Un médecin » se dit [[医生|yīshēng]]. Dites : « Dans les grands hôpitaux il y a beaucoup de patients, les médecins sont très occupés. »"),
  TH(),
  C("大医院病人多，医生非常忙。","Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.","Dans les grands hôpitaux il y a beaucoup de patients, les médecins sont très occupés.",0.5), P(3,"…"),
  C("大医院病人多，医生非常忙。","Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.","Dans les grands hôpitaux il y a beaucoup de patients, les médecins sont très occupés.",0.55), HOLD(),

  N("Vous connaissez déjà [[工作|gōngzuò]] depuis la leçon 3. Dites : « Mon père travaille aussi à l'hôpital, il est très occupé aussi. »"),
  TH(),
  C("我爸爸也在医院工作，他也非常忙。","Wǒ bàba yě zài yīyuàn gōngzuò, tā yě fēicháng máng.","Mon père travaille aussi à l'hôpital, il est très occupé aussi.",0.5), P(3,"…"),
  C("我爸爸也在医院工作，他也非常忙。","Wǒ bàba yě zài yīyuàn gōngzuò, tā yě fēicháng máng.","Mon père travaille aussi à l'hôpital, il est très occupé aussi.",0.55), HOLD(),

  N("Demandez : « Il y a deux médecins dans ta famille ? »"),
  TH(),
  C("你家有两个医生？","Nǐ jiā yǒu liǎng ge yīshēng?","Il y a deux médecins dans ta famille ?",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. On vous demande : « Xiao Hu, tu n'as pas encore mangé ? »"),
  C("小胡，还没吃饭呢？","Xiǎo Hú, hái méi chī fàn ne?","Xiao Hu, tu n'as pas encore mangé ?",0.6),
  N("Répondez : « Pas encore. »"),
  TH(),
  C("没吃呢。","Méi chī ne.","Pas encore.",0.6), P(2,"…"),
  N("Dites : « Dans les grands hôpitaux il y a beaucoup de patients, les médecins sont très occupés. »"),
  TH(),
  C("大医院病人多，医生非常忙。","Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.","Dans les grands hôpitaux il y a beaucoup de patients, les médecins sont très occupés.",0.55), P(2.5,"…"),
  N("Ajoutez : « Oui. Mon père travaille aussi à l'hôpital, il est très occupé aussi. »"),
  TH(),
  C("是的。我爸爸也在医院工作，他也非常忙。","Shì de. Wǒ bàba yě zài yīyuàn gōngzuò, tā yě fēicháng máng.","Oui. Mon père travaille aussi à l'hôpital, il est très occupé aussi.",0.5), P(2.5,"…"),
  N("On vous demande : « Il y a deux médecins dans ta famille ? »"),
  C("你家有两个医生？","Nǐ jiā yǒu liǎng ge yīshēng?","Il y a deux médecins dans ta famille ?",0.6),
  N("Répondez simplement : « Oui. »"),
  TH(),
  C("对。","Duì.","Oui.",0.6), HOLD(),

  // Révision finale de la leçon 8
  N("Révision finale de la leçon 8. Dites : il y a un petit chat dehors, devant la chambre."),
  TH(),
  C("房间外有一只小猫。","Fángjiān wài yǒu yì zhī xiǎo māo.","Il y a un petit chat dehors, devant la chambre.",0.55), P(2,"…"),
  N("Demandez : où allons-nous nous voir ?"),
  TH(),
  C("我们在哪儿见呢？","Wǒmen zài nǎr jiàn ne?","Où allons-nous nous voir ?",0.6), P(1.5,"…"),
  N("Demandez : peux-tu arriver à 14 h ?"),
  TH(),
  C("下午两点你能到吗？","Xiàwǔ liǎng diǎn nǐ néng dào ma?","Peux-tu arriver à 14 h ?",0.6), P(1.5,"…"),
  N("Dites : je déjeune à l'école."),
  TH(),
  C("我在学校吃午饭。","Wǒ zài xuéxiào chī wǔfàn.","Je déjeune à l'école.",0.6), P(1.5,"…"),
  N("Et pour finir : mon père travaille aussi à l'hôpital."),
  TH(),
  C("我爸爸也在医院工作。","Wǒ bàba yě zài yīyuàn gōngzuò.","Mon père travaille aussi à l'hôpital.",0.6), P(1.5,"…"),
  N("Excellent ! Vous avez terminé la leçon 8. Vous savez situer les choses, donner rendez-vous, et parler de métiers. Réécoutez-la demain, puis passez à la leçon 9. 再见！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  ]
});
