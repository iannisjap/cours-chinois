/* ============================================================
   HSK 1 · Leçon 13 — 请给我一杯茶 Un thé, s'il vous plaît
   D'après « 新HSK教程 1 », leçon 13.
   Vocabulaire de la leçon :
   可以 · 问题 · 卖 · 一下 · 服务员 · 女士 · 请(seul) · 坐(s'asseoir) ·
   给 · 杯 · 要(demander) · 早饭 · 这个 · 面包 · 鸡蛋 · 先生 · 一半 · 茶
   Attention : 卖(mài, vendre) a un ton différent de 买(mǎi, acheter,
   leçon 6) — à ne pas confondre. 坐 retrouve ici son sens premier
   « s'asseoir » (vu leçon 6 pour « prendre un transport »). 要 est
   ici un verbe « demander, vouloir [un objet] », prolongement du
   verbe modal déjà connu (leçon 11).
   Grammaire : verbe modal 可以 (pouvoir, avoir la permission) ·
   structure verbe+一下 (faire brièvement, à l'essai) · phrases à
   double complément avec 给/问.
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  group: "hsk1",
  id: "hsk1-13",
  badge: 13,
  hanzi: "请给我一杯茶",
  title: "Leçon 13 · Permission et commander",
  desc: "3 parties · 我可以问一下 · 给我一杯牛奶 · 我要一斤饺子",
  intro: "Leçon 13 du HSK 1 : demander la permission avec 可以, essayer de faire quelque chose avec verbe+一下, et commander à boire et à manger.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"我可以问一下", title:"Partie 1 · Demander la permission", desc:"可以 · 问题 · 卖 · 一下",
    build(){ return [
  N("Bienvenue dans la leçon 13 du HSK 1. Aujourd'hui : demander la permission, et commander au restaurant. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("王老师，我可以再问您一个问题吗？","Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí ge wèntí ma?","Professeur Wang, puis-je encore vous poser une question ?",0.5),
  C("可以。你有什么问题？","Kěyǐ. Nǐ yǒu shénme wèntí?","Bien sûr. Quelle est ta question ?",0.5),
  C("那个小店卖不卖手机？","Nàge xiǎo diàn mài bu mài shǒujī?","Est-ce que ce petit magasin vend des téléphones ?",0.5),
  C("我不知道。你可以打电话问一下。","Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.","Je ne sais pas. Tu peux appeler pour demander.",0.5),
  N("D'abord, révision de la leçon 11 : dites « je sais »."),
  TH(),
  C("我知道。","Wǒ zhīdào.","Je sais.",0.6), HOLD(),

  N("« Pouvoir », « avoir la permission de », se dit [[可以|kěyǐ]]. Écoutez et répétez."),
  ...teach2("可以","kěyǐ","pouvoir, avoir la permission"),
  N("Et « une question » se dit [[问题|wèntí]] — vous connaissez déjà [[问|wèn]]. Écoutez et répétez."),
  ...teach2("一个问题","yí ge wèntí","une question"),
  N("Demandez poliment : « Professeur Wang, puis-je encore vous poser une question ? »"),
  TH(),
  C("王老师，我可以再问您一个问题吗？","Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí ge wèntí ma?","Professeur Wang, puis-je encore vous poser une question ?",0.5),
  C("王老师，我可以再问您一个问题吗？","Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí ge wèntí ma?","Professeur Wang, puis-je encore vous poser une question ?",0.55), HOLD(),

  N("Répondez : « Bien sûr. Quelle est ta question ? »"),
  TH(),
  C("可以。你有什么问题？","Kěyǐ. Nǐ yǒu shénme wèntí?","Bien sûr. Quelle est ta question ?",0.6), HOLD(),

  N("Attention, mot important : « vendre » se dit [[卖|mài]], au quatrième ton — différent de [[买|mǎi]], « acheter », au troisième ton. Ne les confondez pas ! Écoutez et répétez."),
  ...teach2("卖不卖","mài bu mài","vend ou ne vend pas"),
  N("Demandez : « Est-ce que ce petit magasin vend des téléphones ? »"),
  TH(),
  C("那个小店卖不卖手机？","Nàge xiǎo diàn mài bu mài shǒujī?","Est-ce que ce petit magasin vend des téléphones ?",0.55),
  C("那个小店卖不卖手机？","Nàge xiǎo diàn mài bu mài shǒujī?","Est-ce que ce petit magasin vend des téléphones ?",0.6), HOLD(),

  N("Pour dire « faire brièvement », « essayer de faire », on ajoute [[一下|yíxià]] après le verbe. « Appeler pour demander » se dit :"),
  ...teach2("打电话问一下","dǎ diànhuà wèn yíxià","appeler pour demander"),
  N("Répondez : « Je ne sais pas. Tu peux appeler pour demander. »"),
  TH(),
  C("我不知道。你可以打电话问一下。","Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.","Je ne sais pas. Tu peux appeler pour demander.",0.55),
  C("我不知道。你可以打电话问一下。","Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.","Je ne sais pas. Tu peux appeler pour demander.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : « Professeur Wang, puis-je encore vous poser une question ? »"),
  TH(),
  C("王老师，我可以再问您一个问题吗？","Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí ge wèntí ma?","Professeur Wang, puis-je encore vous poser une question ?",0.55),
  N("On vous répond : « Bien sûr. Quelle est ta question ? » Demandez : « Est-ce que ce petit magasin vend des téléphones ? »"),
  TH(),
  C("那个小店卖不卖手机？","Nàge xiǎo diàn mài bu mài shǒujī?","Est-ce que ce petit magasin vend des téléphones ?",0.55),
  N("On vous répond : « Je ne sais pas. Tu peux appeler pour demander. »"),
  C("我不知道。你可以打电话问一下。","Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.","Je ne sais pas. Tu peux appeler pour demander.",0.55), HOLD(),

  // Révision
  N("Révision. Demandez la permission : puis-je ?"),
  TH(),
  C("我可以吗？","Wǒ kěyǐ ma?","Puis-je ?",0.6),
  N("Dites : vend ou ne vend pas."),
  TH(),
  C("卖不卖","mài bu mài","vend ou ne vend pas",0.6),
  N("Fin de la partie 1. À la partie 2 : commander un café."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"给我一杯牛奶", title:"Partie 2 · Au café", desc:"服务员 · 女士 · 请 · 坐 · 给 · 杯 · 要(demander) · 早饭 · 这个 · 面包 · 鸡蛋",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("女士，请坐！您喝什么？","Nǚshì, qǐng zuò! Nín hē shénme?","Madame, asseyez-vous je vous prie ! Que buvez-vous ?",0.5),
  C("我看一下。请给我一杯牛奶。","Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.","Laissez-moi voir. Donnez-moi un verre de lait, s'il vous plaît.",0.5),
  C("好的。您还要什么？","Hǎo de. Nín hái yào shénme?","Très bien. Vous désirez autre chose ?",0.5),
  C("我还没吃早饭，再要这个面包和鸡蛋吧。","Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.","Je n'ai pas encore pris de petit-déjeuner, je prendrai aussi ce pain et cet œuf.",0.5),
  N("Révision : dites « appeler pour demander »."),
  TH(),
  C("打电话问一下。","Dǎ diànhuà wèn yíxià.","Appeler pour demander.",0.6), HOLD(),

  N("« Un serveur », « une serveuse », se dit [[服务员|fúwùyuán]]. Et « madame » se dit [[女士|nǚshì]] — vous connaissez déjà [[女|nǚ]]. Écoutez et répétez."),
  ...teach2("女士","nǚshì","madame"),
  N("[[请|qǐng]] tout seul veut dire « je vous en prie », « s'il vous plaît » — vous le connaissiez dans [[请问|qǐngwèn]]. Et « s'asseoir » se dit [[坐|zuò]] — son sens premier, que vous connaissiez pour « prendre un transport ». Dites : « Madame, asseyez-vous je vous prie ! Que buvez-vous ? »"),
  TH(),
  C("女士，请坐！您喝什么？","Nǚshì, qǐng zuò! Nín hē shénme?","Madame, asseyez-vous je vous prie ! Que buvez-vous ?",0.55),
  C("女士，请坐！您喝什么？","Nǚshì, qǐng zuò! Nín hē shénme?","Madame, asseyez-vous je vous prie ! Que buvez-vous ?",0.6), HOLD(),

  N("« Donner » se dit [[给|gěi]]. Écoutez et répétez."),
  ...teach2("给我","gěi wǒ","me donner"),
  N("Pour compter les boissons, on utilise [[杯|bēi]] — comme dans [[杯子|bēizi]] que vous connaissez. Répondez : « Laissez-moi voir. Donnez-moi un verre de lait, s'il vous plaît. »"),
  TH(),
  C("我看一下。请给我一杯牛奶。","Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.","Laissez-moi voir. Donnez-moi un verre de lait, s'il vous plaît.",0.55),
  C("我看一下。请给我一杯牛奶。","Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.","Laissez-moi voir. Donnez-moi un verre de lait, s'il vous plaît.",0.6), HOLD(),

  N("Nouveau sens pour [[要|yào]] : vous le connaissiez comme « vouloir faire » devant un verbe, ici c'est un verbe qui signifie « demander », « vouloir [un objet] ». Demandez : « Très bien. Vous désirez autre chose ? »"),
  TH(),
  C("好的。您还要什么？","Hǎo de. Nín hái yào shénme?","Très bien. Vous désirez autre chose ?",0.6), HOLD(),

  N("« Le petit-déjeuner » se dit [[早饭|zǎofàn]] — comme [[午饭|wǔfàn]] et [[晚饭|wǎnfàn]] que vous connaissez. « Ceci », « celui-ci », se dit [[这个|zhège]] — le contraire de [[那个|nàge]] que vous connaissez. Écoutez et répétez."),
  ...teach2("这个面包","zhège miànbāo","ce pain"),
  N("« Le pain » se dit [[面包|miànbāo]], et « un œuf » se dit [[鸡蛋|jīdàn]]. Écoutez et répétez."),
  ...teach2("面包和鸡蛋","miànbāo hé jīdàn","du pain et un œuf"),
  N("Répondez : « Je n'ai pas encore pris de petit-déjeuner, je prendrai aussi ce pain et cet œuf. »"),
  TH(),
  C("我还没吃早饭，再要这个面包和鸡蛋吧。","Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.","Je n'ai pas encore pris de petit-déjeuner, je prendrai aussi ce pain et cet œuf.",0.5),
  C("我还没吃早饭，再要这个面包和鸡蛋吧。","Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.","Je n'ai pas encore pris de petit-déjeuner, je prendrai aussi ce pain et cet œuf.",0.55), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. On vous accueille : « Madame, asseyez-vous je vous prie ! Que buvez-vous ? »"),
  C("女士，请坐！您喝什么？","Nǚshì, qǐng zuò! Nín hē shénme?","Madame, asseyez-vous je vous prie ! Que buvez-vous ?",0.55),
  N("Répondez : « Laissez-moi voir. Donnez-moi un verre de lait, s'il vous plaît. »"),
  TH(),
  C("我看一下。请给我一杯牛奶。","Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.","Laissez-moi voir. Donnez-moi un verre de lait, s'il vous plaît.",0.55),
  N("On vous demande : « Vous désirez autre chose ? » Répondez : « Je n'ai pas encore pris de petit-déjeuner, je prendrai aussi ce pain et cet œuf. »"),
  TH(),
  C("我还没吃早饭，再要这个面包和鸡蛋吧。","Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.","Je n'ai pas encore pris de petit-déjeuner, je prendrai aussi ce pain et cet œuf.",0.5), HOLD(),

  // Révision
  N("Révision. Dites : donnez-moi un verre de lait."),
  TH(),
  C("给我一杯牛奶。","Gěi wǒ yì bēi niúnǎi.","Donnez-moi un verre de lait.",0.6),
  N("Dites : le petit-déjeuner."),
  TH(),
  C("早饭","zǎofàn","le petit-déjeuner",0.6),
  N("Fin de la partie 2. À la partie 3 : commander au restaurant."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"我要一斤饺子", title:"Partie 3 · Au restaurant", desc:"先生 · 一半 · 茶",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("先生，请坐！您要什么？","Xiānsheng, qǐng zuò! Nín yào shénme?","Monsieur, asseyez-vous je vous prie ! Que désirez-vous ?",0.5),
  C("我要一斤饺子。","Wǒ yào yì jīn jiǎozi.","Je voudrais un jin de jiaozi.",0.5),
  C("好的。一斤饺子四十个。","Hǎo de. Yì jīn jiǎozi sìshí ge.","Très bien. Un jin de jiaozi fait quarante pièces.",0.5),
  C("四十个太多了，我要一半吧。","Sìshí ge tài duō le, wǒ yào yíbàn ba.","Quarante c'est trop, je vais en prendre la moitié.",0.5),
  C("半斤二十个。您想喝什么？","Bàn jīn èrshí ge. Nín xiǎng hē shénme?","Un demi-jin fait vingt pièces. Que voulez-vous boire ?",0.5),
  C("请给我一杯茶吧。","Qǐng gěi wǒ yì bēi chá ba.","Donnez-moi un thé, s'il vous plaît.",0.5),
  N("Révision : dites « ce pain »."),
  TH(),
  C("这个面包","zhège miànbāo","ce pain",0.6), HOLD(),

  N("« Monsieur » se dit [[先生|xiānsheng]] — comme [[女士|nǚshì]] que vous connaissez. Dites : « Monsieur, asseyez-vous je vous prie ! Que désirez-vous ? »"),
  TH(),
  C("先生，请坐！您要什么？","Xiānsheng, qǐng zuò! Nín yào shénme?","Monsieur, asseyez-vous je vous prie ! Que désirez-vous ?",0.55),
  C("先生，请坐！您要什么？","Xiānsheng, qǐng zuò! Nín yào shénme?","Monsieur, asseyez-vous je vous prie ! Que désirez-vous ?",0.6), HOLD(),

  N("Répondez : « Je voudrais un jin de jiaozi. » Vous connaissez déjà [[斤|jīn]] et [[饺子|jiǎozi]]."),
  TH(),
  C("我要一斤饺子。","Wǒ yào yì jīn jiǎozi.","Je voudrais un jin de jiaozi.",0.6), HOLD(),

  N("On vous répond : « Très bien. Un jin de jiaozi fait quarante pièces. »"),
  TH(),
  C("好的。一斤饺子四十个。","Hǎo de. Yì jīn jiǎozi sìshí ge.","Très bien. Un jin de jiaozi fait quarante pièces.",0.6), HOLD(),

  N("« La moitié » se dit [[一半|yíbàn]] — vous connaissez déjà [[半|bàn]] pour « et demi ». Dites : « Quarante c'est trop, je vais en prendre la moitié. »"),
  TH(),
  C("四十个太多了，我要一半吧。","Sìshí ge tài duō le, wǒ yào yíbàn ba.","Quarante c'est trop, je vais en prendre la moitié.",0.55),
  C("四十个太多了，我要一半吧。","Sìshí ge tài duō le, wǒ yào yíbàn ba.","Quarante c'est trop, je vais en prendre la moitié.",0.6), HOLD(),

  N("On vous répond : « Un demi-jin fait vingt pièces. Que voulez-vous boire ? »"),
  TH(),
  C("半斤二十个。您想喝什么？","Bàn jīn èrshí ge. Nín xiǎng hē shénme?","Un demi-jin fait vingt pièces. Que voulez-vous boire ?",0.6), HOLD(),

  N("« Le thé » se dit [[茶|chá]]. Écoutez et répétez."),
  ...teach2("茶","chá","le thé"),
  N("Répondez : « Donnez-moi un thé, s'il vous plaît. »"),
  TH(),
  C("请给我一杯茶吧。","Qǐng gěi wǒ yì bēi chá ba.","Donnez-moi un thé, s'il vous plaît.",0.6),
  C("请给我一杯茶吧。","Qǐng gěi wǒ yì bēi chá ba.","Donnez-moi un thé, s'il vous plaît.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. On vous accueille : « Monsieur, asseyez-vous je vous prie ! Que désirez-vous ? »"),
  C("先生，请坐！您要什么？","Xiānsheng, qǐng zuò! Nín yào shénme?","Monsieur, asseyez-vous je vous prie ! Que désirez-vous ?",0.55),
  N("Répondez : « Je voudrais un jin de jiaozi. »"),
  TH(),
  C("我要一斤饺子。","Wǒ yào yì jīn jiǎozi.","Je voudrais un jin de jiaozi.",0.6),
  N("On vous dit : « Un jin de jiaozi fait quarante pièces. » Répondez : « Quarante c'est trop, je vais en prendre la moitié. »"),
  TH(),
  C("四十个太多了，我要一半吧。","Sìshí ge tài duō le, wǒ yào yíbàn ba.","Quarante c'est trop, je vais en prendre la moitié.",0.55),
  N("On vous demande : « Que voulez-vous boire ? » Répondez : « Donnez-moi un thé, s'il vous plaît. »"),
  TH(),
  C("请给我一杯茶吧。","Qǐng gěi wǒ yì bēi chá ba.","Donnez-moi un thé, s'il vous plaît.",0.6), HOLD(),

  // Révision finale de la leçon 13
  N("Révision finale de la leçon 13. Demandez la permission de poser une question."),
  TH(),
  C("我可以问一个问题吗？","Wǒ kěyǐ wèn yí ge wèntí ma?","Puis-je poser une question ?",0.6),
  N("Dites : appeler pour demander."),
  TH(),
  C("打电话问一下。","Dǎ diànhuà wèn yíxià.","Appeler pour demander.",0.6),
  N("Dites : donnez-moi un verre de lait."),
  TH(),
  C("给我一杯牛奶。","Gěi wǒ yì bēi niúnǎi.","Donnez-moi un verre de lait.",0.6),
  N("Et pour finir : donnez-moi un thé, s'il vous plaît."),
  TH(),
  C("请给我一杯茶吧。","Qǐng gěi wǒ yì bēi chá ba.","Donnez-moi un thé, s'il vous plaît.",0.6),
  N("Excellent ! Vous avez terminé la leçon 13. Vous savez demander la permission, et commander à boire et à manger. Réécoutez-la demain, puis passez à la leçon 14. 再见！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  ]
});
