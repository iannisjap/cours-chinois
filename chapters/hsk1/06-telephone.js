/* ============================================================
   HSK 1 · Leçon 6 — 你的手机号是多少？ Quel est ton numéro ?
   D'après « 新HSK教程 1 », leçon 6.
   Vocabulaire de la leçon :
   手机 · 电话 · 号(numéro) · 明天 · 去 · 哪儿 · 想(vouloir) ·
   超市 · 买 · 东西 · 些 · 牛奶 · 吃 · 晚饭 · 那边 · 包子 ·
   非常 · 好吃 · 米饭 · 怎么 · 坐 · 出租车 · 零
   Attention aux réutilisations : 号 signifiait « date » (leçon 5),
   ici « numéro » ; 想 signifiait « penser à, manquer » (leçon 3),
   ici le verbe modal « vouloir, avoir envie de ».
   Grammaire : verbe modal 想 · phrases à verbes en série (but/manière) ·
   pronom interrogatif 怎么 (comment).
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  group: "hsk1",
  id: "hsk1-06",
  badge: 6,
  hanzi: "你的手机号",
  title: "Leçon 6 · Numéro, courses, restaurant",
  desc: "3 parties · 手机号 · 我想去 · 怎么去",
  intro: "Leçon 6 du HSK 1 : donner son numéro de téléphone, dire ce qu'on veut faire avec 想, aller faire des courses, et demander comment se rendre quelque part avec 怎么.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"手机号", title:"Partie 1 · Le numéro de téléphone", desc:"手机 · 电话 · 号 · 零",
    build(){ return [
  N("Bienvenue dans la leçon 6 du HSK 1. Aujourd'hui : donner son numéro de téléphone, faire des courses, et aller au restaurant. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你的手机号是多少？","Nǐ de shǒujīhào shì duōshao?","Quel est ton numéro de portable ?",0.5),
  C("我的手机号是幺三五零二四。","Wǒ de shǒujīhào shì yāo sān wǔ líng èr sì.","Mon numéro de portable est le 135024.",0.5),
  N("D'abord, révision de la leçon 4 : comptez de un à dix."),
  TH(),
  C("一，二，三，四，五，六，七，八，九，十","yī, èr, sān, sì, wǔ, liù, qī, bā, jiǔ, shí","un à dix",0.6), HOLD(),

  N("« Le téléphone portable » se dit [[手机|shǒujī]]. Écoutez et répétez."),
  ...teach2("手机","shǒujī","téléphone portable"),
  N("Le mot général pour « téléphone », « appel », est [[电话|diànhuà]]. Écoutez et répétez."),
  ...teach2("电话","diànhuà","téléphone, appel"),
  N("Vous connaissez déjà [[号|hào]] pour la date. Ici, il signifie « numéro » — même mot, sens un peu plus large. « Numéro de portable » se dit [[手机号|shǒujīhào]]."),
  ...teach2("手机号","shǒujīhào","numéro de portable"),
  N("Pour demander un numéro, on utilise [[多少|duōshao]], « combien », déjà vu à la leçon 4. Demandez : « Quel est ton numéro de portable ? »"),
  TH(),
  C("你的手机号是多少？","Nǐ de shǒujīhào shì duōshao?","Quel est ton numéro de portable ?",0.55),
  C("你的手机号是多少？","Nǐ de shǒujīhào shì duōshao?","Quel est ton numéro de portable ?",0.6), HOLD(),

  N("Pour donner un numéro, on lit chaque chiffre un par un. « Zéro » se dit [[零|líng]]. Écoutez et répétez."),
  ...teach2("零","líng","zéro"),
  N("Attention, point important : dans un numéro, [[一|yī]] « un » se prononce [[幺|yāo]] pour ne pas le confondre avec [[七|qī]] « sept ». Écoutez et répétez."),
  ...teach2("幺","yāo","un (dans un numéro)"),
  N("À vous : dites votre numéro de portable, chiffre par chiffre — utilisez [[幺|yāo]] pour le un."),
  HOLD("Dis TON numéro, puis ▶"),
  N("Voici un exemple : mon numéro de portable est le un-trois-cinq-zéro-deux-quatre."),
  TH(),
  C("我的手机号是幺三五零二四。","Wǒ de shǒujīhào shì yāo sān wǔ líng èr sì.","Mon numéro de portable est le 135024.",0.55), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. On vous demande :"),
  C("你的手机号是多少？","Nǐ de shǒujīhào shì duōshao?","Quel est ton numéro de portable ?",0.6),
  N("Répondez avec le numéro de l'exemple."),
  TH(),
  C("我的手机号是幺三五零二四。","Wǒ de shǒujīhào shì yāo sān wǔ líng èr sì.","Mon numéro de portable est le 135024.",0.6), HOLD(),

  // Révision
  N("Révision. Comment dit-on « téléphone portable » ?"),
  TH(),
  C("手机","shǒujī","téléphone portable",0.6),
  N("Comment dit-on « zéro » ?"),
  TH(),
  C("零","líng","zéro",0.6),
  N("Fin de la partie 1. À la partie 2 : aller faire des courses."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"我想去超市", title:"Partie 2 · Aller faire des courses", desc:"明天 · 去 · 哪儿 · 想 · 超市 · 买 · 东西 · 些 · 牛奶",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("明天你去哪儿？","Míngtiān nǐ qù nǎr?","Où vas-tu demain ?",0.5),
  C("我想去超市买东西。","Wǒ xiǎng qù chāoshì mǎi dōngxi.","Je veux aller au supermarché acheter des choses.",0.5),
  C("你去超市买什么？","Nǐ qù chāoshì mǎi shénme?","Qu'est-ce que tu vas acheter au supermarché ?",0.5),
  C("我想买些牛奶。","Wǒ xiǎng mǎi xiē niúnǎi.","Je veux acheter un peu de lait.",0.5),
  N("Révision : comment dit-on « numéro de portable » ?"),
  TH(),
  C("手机号","shǒujīhào","numéro de portable",0.6), HOLD(),

  N("« Demain » se dit [[明天|míngtiān]]. Écoutez et répétez."),
  ...teach2("明天","míngtiān","demain"),
  N("« Aller (à un endroit) » se dit [[去|qù]]. Écoutez et répétez."),
  ...teach2("去","qù","aller"),
  N("« Où » se dit [[哪儿|nǎr]]. Écoutez et répétez."),
  ...teach2("哪儿","nǎr","où"),
  N("Demandez : « Où vas-tu demain ? »"),
  TH(),
  C("明天你去哪儿？","Míngtiān nǐ qù nǎr?","Où vas-tu demain ?",0.6),
  C("明天你去哪儿？","Míngtiān nǐ qù nǎr?","Où vas-tu demain ?",0.6), HOLD(),

  N("Nouveau mot important : [[想|xiǎng]]. Vous connaissez déjà ce caractère au sens de « penser à, manquer » — ici, placé devant un verbe, il veut dire « vouloir, avoir envie de ». Écoutez et répétez."),
  ...teach2("想","xiǎng","vouloir (faire quelque chose)"),
  N("« Le supermarché » se dit [[超市|chāoshì]]. Écoutez et répétez."),
  ...teach2("超市","chāoshì","le supermarché"),
  N("« Acheter » se dit [[买|mǎi]], et « des choses », « des affaires », se dit [[东西|dōngxi]]. Écoutez et répétez."),
  ...teach2("买东西","mǎi dōngxi","acheter des choses"),
  N("En chinois, on enchaîne souvent deux verbes pour dire « aller quelque part pour faire quelque chose » : aller — supermarché — acheter — choses. Répondez : « Je veux aller au supermarché acheter des choses. »"),
  TH(),
  C("我想去超市买东西。","Wǒ xiǎng qù chāoshì mǎi dōngxi.","Je veux aller au supermarché acheter des choses.",0.55),
  C("我想去超市买东西。","Wǒ xiǎng qù chāoshì mǎi dōngxi.","Je veux aller au supermarché acheter des choses.",0.6), HOLD(),

  N("Demandez : « Qu'est-ce que tu vas acheter au supermarché ? »"),
  TH(),
  C("你去超市买什么？","Nǐ qù chāoshì mǎi shénme?","Qu'est-ce que tu vas acheter au supermarché ?",0.6), HOLD(),

  N("« Quelques », « un peu de », se dit [[些|xiē]] — après un verbe comme acheter, il précède le nom. « Le lait » se dit [[牛奶|niúnǎi]]. Écoutez et répétez."),
  ...teach2("牛奶","niúnǎi","le lait"),
  N("Répondez : « Je veux acheter un peu de lait. »"),
  TH(),
  C("我想买些牛奶。","Wǒ xiǎng mǎi xiē niúnǎi.","Je veux acheter un peu de lait.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. On vous demande : « Où vas-tu demain ? »"),
  C("明天你去哪儿？","Míngtiān nǐ qù nǎr?","Où vas-tu demain ?",0.6),
  N("Répondez : « Je veux aller au supermarché acheter des choses. »"),
  TH(),
  C("我想去超市买东西。","Wǒ xiǎng qù chāoshì mǎi dōngxi.","Je veux aller au supermarché acheter des choses.",0.6),
  N("On vous demande :"),
  C("你去超市买什么？","Nǐ qù chāoshì mǎi shénme?","Qu'est-ce que tu vas acheter au supermarché ?",0.6),
  N("Répondez : « Je veux acheter un peu de lait. »"),
  TH(),
  C("我想买些牛奶。","Wǒ xiǎng mǎi xiē niúnǎi.","Je veux acheter un peu de lait.",0.6), HOLD(),

  // Révision
  N("Révision. Dites : demain."),
  TH(),
  C("明天","míngtiān","demain",0.6),
  N("Demandez : où vas-tu demain ?"),
  TH(),
  C("明天你去哪儿？","Míngtiān nǐ qù nǎr?","Où vas-tu demain ?",0.6),
  N("Fin de la partie 2. À la partie 3 : aller au restaurant."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"怎么去", title:"Partie 3 · Aller au restaurant", desc:"吃 · 晚饭 · 那边 · 包子 · 非常 · 好吃 · 米饭 · 怎么 · 坐 · 出租车",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("我们去哪儿吃晚饭？","Wǒmen qù nǎr chī wǎnfàn?","Où allons-nous dîner ?",0.5),
  C("我想去西安饭店，那边的包子非常好吃。","Wǒ xiǎng qù Xī'ān Fàndiàn, nàbian de bāozi fēicháng hǎochī.","Je veux aller au restaurant Xi'an, leurs bāozi sont délicieux là-bas.",0.5),
  C("好的。我们怎么去？","Hǎo de. Wǒmen zěnme qù?","D'accord. Comment y allons-nous ?",0.5),
  C("坐出租车去。","Zuò chūzūchē qù.","On y va en taxi.",0.5),
  N("Révision : dites « je veux acheter un peu de lait »."),
  TH(),
  C("我想买些牛奶。","Wǒ xiǎng mǎi xiē niúnǎi.","Je veux acheter un peu de lait.",0.6), HOLD(),

  N("Vous connaissez déjà [[饭|fàn]], le repas, depuis la leçon 5. « Manger » se dit [[吃|chī]]. Écoutez et répétez."),
  ...teach2("吃","chī","manger"),
  N("« Le dîner », « le repas du soir », se dit [[晚饭|wǎnfàn]]. Écoutez et répétez."),
  ...teach2("晚饭","wǎnfàn","le dîner"),
  N("Demandez : « Où allons-nous dîner ? »"),
  TH(),
  C("我们去哪儿吃晚饭？","Wǒmen qù nǎr chī wǎnfàn?","Où allons-nous dîner ?",0.6), HOLD(),

  N("« Là-bas » se dit [[那边|nàbian]]. Écoutez et répétez."),
  ...teach2("那边","nàbian","là-bas"),
  N("« Un petit pain fourré cuit à la vapeur » se dit [[包子|bāozi]]. Écoutez et répétez."),
  ...teach2("包子","bāozi","bāozi (petit pain fourré)"),
  N("« Vraiment », « extrêmement », se dit [[非常|fēicháng]] — plus fort que [[很|hěn]]. Et « délicieux » se dit [[好吃|hǎochī]]. Écoutez et répétez."),
  ...teach2("非常好吃","fēicháng hǎochī","vraiment délicieux"),
  N("Répondez : « Je veux aller au restaurant Xi'an, leurs [[包子|bāozi]] sont délicieux là-bas. »"),
  TH(),
  C("我想去西安饭店，那边的包子非常好吃。","Wǒ xiǎng qù Xī'ān Fàndiàn, nàbian de bāozi fēicháng hǎochī.","Je veux aller au restaurant Xi'an, leurs bāozi sont délicieux là-bas.",0.5),
  C("我想去西安饭店，那边的包子非常好吃。","Wǒ xiǎng qù Xī'ān Fàndiàn, nàbian de bāozi fēicháng hǎochī.","Je veux aller au restaurant Xi'an, leurs bāozi sont délicieux là-bas.",0.6), HOLD(),

  N("« Le riz cuit » se dit [[米饭|mǐfàn]]. Écoutez et répétez."),
  ...teach2("米饭","mǐfàn","le riz cuit"),
  N("Pour demander « comment », la manière de faire quelque chose, on utilise [[怎么|zěnme]] devant le verbe. Écoutez et répétez."),
  ...teach2("怎么","zěnme","comment"),
  N("Demandez : « Comment y allons-nous ? »"),
  TH(),
  C("我们怎么去？","Wǒmen zěnme qù?","Comment y allons-nous ?",0.6), HOLD(),

  N("« S'asseoir », mais aussi « prendre » un moyen de transport, se dit [[坐|zuò]]. Et « un taxi » se dit [[出租车|chūzūchē]]. Écoutez et répétez."),
  ...teach2("坐出租车","zuò chūzūchē","prendre un taxi"),
  N("Répondez : « On y va en taxi. »"),
  TH(),
  C("坐出租车去。","Zuò chūzūchē qù.","On y va en taxi.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : où allons-nous dîner ?"),
  TH(),
  C("我们去哪儿吃晚饭？","Wǒmen qù nǎr chī wǎnfàn?","Où allons-nous dîner ?",0.6),
  N("Répondez : « Je veux aller au restaurant Xi'an, leurs [[包子|bāozi]] sont délicieux là-bas. »"),
  TH(),
  C("我想去西安饭店，那边的包子非常好吃。","Wǒ xiǎng qù Xī'ān Fàndiàn, nàbian de bāozi fēicháng hǎochī.","Je veux aller au restaurant Xi'an, leurs bāozi sont délicieux là-bas.",0.55),
  N("On vous répond : « D'accord. Comment y allons-nous ? »"),
  C("好的。我们怎么去？","Hǎo de. Wǒmen zěnme qù?","D'accord. Comment y allons-nous ?",0.6),
  N("Répondez : « On y va en taxi. »"),
  TH(),
  C("坐出租车去。","Zuò chūzūchē qù.","On y va en taxi.",0.6), HOLD(),

  // Révision finale de la leçon 6
  N("Révision finale de la leçon 6. Demandez : quel est ton numéro de portable ?"),
  TH(),
  C("你的手机号是多少？","Nǐ de shǒujīhào shì duōshao?","Quel est ton numéro de portable ?",0.6),
  N("Demandez : où vas-tu demain ?"),
  TH(),
  C("明天你去哪儿？","Míngtiān nǐ qù nǎr?","Où vas-tu demain ?",0.6),
  N("Dites : je veux aller au supermarché acheter des choses."),
  TH(),
  C("我想去超市买东西。","Wǒ xiǎng qù chāoshì mǎi dōngxi.","Je veux aller au supermarché acheter des choses.",0.55),
  N("Demandez : comment y allons-nous ?"),
  TH(),
  C("我们怎么去？","Wǒmen zěnme qù?","Comment y allons-nous ?",0.6),
  N("Et pour finir : on y va en taxi."),
  TH(),
  C("坐出租车去。","Zuò chūzūchē qù.","On y va en taxi.",0.6),
  N("Excellent ! Vous avez terminé la leçon 6. Vous savez donner votre numéro, dire ce que vous voulez faire, et demander comment se rendre quelque part. Réécoutez-la demain, puis passez à la leçon 7. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice audio du cahier", desc:"Exercice immersif adapté du cahier HSK 1 — tout en chinois",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("你吃什么？","Nǐ chī shénme?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、坐出租车。","Yī. Zuò chūzūchē.","",0.6),
  P(4,"…"),
  C("二、真好看！","Èr. Zhēn hǎokàn!","",0.6),
  P(4,"…"),
  C("三、包子。","Sān. Bāozi.","",0.6),
  TH(),
  C("包子。","Bāozi.","",0.65), HOLD(),

  // Question 2
  C("我们怎么去？","Wǒmen zěnme qù?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、坐出租车。","Yī. Zuò chūzūchē.","",0.6),
  P(4,"…"),
  C("二、包子。","Èr. Bāozi.","",0.6),
  P(4,"…"),
  C("三、好的，谢谢！","Sān. Hǎo de, xièxie!","",0.6),
  TH(),
  C("坐出租车。","Zuò chūzūchē.","",0.65), HOLD(),

  // Question 3
  C("这是老师的新电脑。","Zhè shì lǎoshī de xīn diànnǎo.","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、坐出租车。","Yī. Zuò chūzūchē.","",0.6),
  P(4,"…"),
  C("二、真好看！","Èr. Zhēn hǎokàn!","",0.6),
  P(4,"…"),
  C("三、包子。","Sān. Bāozi.","",0.6),
  TH(),
  C("真好看！","Zhēn hǎokàn!","",0.65), HOLD(),

  // Question 4
  C("我家有三口人，爸爸、妈妈和我。","Wǒ jiā yǒu sān kǒu rén, bàba, māma hé wǒ.","",0.55),
  C("家里有几口人？","Jiā li yǒu jǐ kǒu rén?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、三口人。","Yī. Sān kǒu rén.","",0.6),
  P(4,"…"),
  C("二、四口人。","Èr. Sì kǒu rén.","",0.6),
  P(4,"…"),
  C("三、六口人。","Sān. Liù kǒu rén.","",0.6),
  TH(),
  C("三口人。","Sān kǒu rén.","",0.65), HOLD(),

  // Question 5
  C("明天星期天，我休息，想去超市买牛奶。","Míngtiān Xīngqītiān, wǒ xiūxi, xiǎng qù chāoshì mǎi niúnǎi.","",0.55),
  C("说话人想买什么？","Shuōhuàrén xiǎng mǎi shénme?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、菜。","Yī. Cài.","",0.6),
  P(4,"…"),
  C("二、牛奶。","Èr. Niúnǎi.","",0.6),
  P(4,"…"),
  C("三、饺子。","Sān. Jiǎozi.","",0.6),
  TH(),
  C("牛奶。","Niúnǎi.","",0.65), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 7."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
