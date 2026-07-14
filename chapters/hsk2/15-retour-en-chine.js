/* ============================================================
   HSK 2 · Leçon 15 — 我想再去一次中国 Je veux retourner en Chine
   D'après « 新HSK教程 2 », leçon 15 (dernière leçon du cours).
   Vocabulaire de la leçon :
   姓名 ·
   出国 · 门票 · 高中 · 出门 · 路 · (颐和园) ·
   机场 · 机票 · 飞 ·
   好像 · 鸟
   Grammaire : complément de fréquence (1)(2) — 数词+次 après
   le verbe ; phrase avec 有 (2) — 有+syntagme numéral pour
   indiquer une quantité atteinte.
   Structure : leçon → 3 parties (les 3 dialogues du manuel,
   le texte 4/journal intégré en révision de la partie 3) +
   partie 4 exercice.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-15",
  badge: 15,
  hanzi: "我想再去一次中国",
  title: "Leçon 15 · Je veux retourner en Chine",
  desc: "3 parties · complément de fréquence · phrase avec 有 (quantité atteinte) · dernière leçon du HSK 2",
  intro: "L'examen est terminé ! Bai Jiayue, Chen Tianzhong et Li Wen peuvent enfin voyager : Bai Jiayue veut retourner à Pékin, et Li Wen prépare son propre retour au pays pour le nouvel an. Au programme, pour cette dernière leçon du HSK 2 : le complément de fréquence pour compter combien de fois une action se produit, et la phrase avec 有 pour indiquer qu'une quantité est atteinte.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"再去一次", title:"Partie 1 · Le jour de l'examen", desc:"姓名 · complément de fréquence (1)",
    build(){ return [
  N("Partie 1. Dans la salle d'examen, la professeure Wang Yifei surveille Bai Jiayue et Chen Tianzhong. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("考试就要开始了，请大家写上姓名，写好后就可以做题了。","Kǎoshì jiù yào kāishǐ le, qǐng dàjiā xiě shàng xìngmíng, xiěhǎo hòu jiù kěyǐ zuò tí le.","L'examen va bientôt commencer, veuillez tous écrire votre nom, une fois cela fait vous pourrez commencer les questions.",0.28),
  C("老师，我做完了。","Lǎoshī, wǒ zuòwán le.","Professeure, j'ai fini.",0.5),
  C("老师，我也做完了。","Lǎoshī, wǒ yě zuòwán le.","Professeure, j'ai fini aussi.",0.5),
  C("……对了，你们考完试想做什么？","Duìle, nǐmen kǎowán shì xiǎng zuò shénme?","Au fait, qu'est-ce que vous voulez faire après l'examen ?",0.4),
  C("我很想去中国，虽然去过一次，但是很想再去一次。","Wǒ hěn xiǎng qù Zhōngguó, suīrán qùguo yí cì, dànshì hěn xiǎng zài qù yí cì.","J'ai très envie d'aller en Chine, même si j'y suis déjà allée une fois, j'ai très envie d'y retourner encore une fois.",0.3),
  C("不错，到中国后你就可以经常说中文了。","Búcuò, dào Zhōngguó hòu nǐ jiù kěyǐ jīngcháng shuō Zhōngwén le.","Bien, une fois en Chine tu pourras parler chinois souvent.",0.35),

  N("« Nom et prénom » se dit [[姓名|xìngmíng]]. Dites : « l'examen va bientôt commencer, veuillez tous écrire votre nom, une fois cela fait vous pourrez commencer les questions. »"),
  ...teach2("姓名","xìngmíng","nom et prénom, nom complet"),
  TH(),
  C("考试就要开始了，请大家写上姓名，写好后就可以做题了。","Kǎoshì jiù yào kāishǐ le, qǐng dàjiā xiě shàng xìngmíng, xiěhǎo hòu jiù kěyǐ zuò tí le.","L'examen va bientôt commencer, veuillez tous écrire votre nom, une fois cela fait vous pourrez commencer les questions.",0.28), HOLD(),

  N("Un peu plus tard. On vous dit : « professeure, j'ai fini. » puis « professeure, j'ai fini aussi. »"),
  C("老师，我做完了。","Lǎoshī, wǒ zuòwán le.","Professeure, j'ai fini.",0.5),
  C("老师，我也做完了。","Lǎoshī, wǒ yě zuòwán le.","Professeure, j'ai fini aussi.",0.5),
  N("Dites : « au fait, qu'est-ce que vous voulez faire après l'examen ? »"),
  TH(),
  C("……对了，你们考完试想做什么？","Duìle, nǐmen kǎowán shì xiǎng zuò shénme?","Au fait, qu'est-ce que vous voulez faire après l'examen ?",0.4), HOLD(),

  N("Grammaire : « chiffre + 次 » après le verbe forme un complément de fréquence, qui indique le nombre de fois qu'une action se produit. Si le verbe a un complément d'objet qui est un nom de personne ou de lieu, celui-ci peut se placer avant ou après le complément de fréquence. Écoutez ces exemples."),
  C("我想去中国，虽然去过一次，但是很想再去一次。","Wǒ xiǎng qù Zhōngguó, suīrán qùguo yí cì, dànshì hěn xiǎng zài qù yí cì.","Je veux aller en Chine, même si j'y suis déjà allée une fois, j'ai très envie d'y retourner encore une fois.",0.3),
  C("安妮去过一次北京。","Ānnī qùguo yí cì Běijīng.","Annie est allée une fois à Pékin.",0.5),
  C("李文见了杨同乐两次。","Lǐ Wén jiànle Yáng Tónglè liǎng cì.","Li Wen a vu Yang Tongle deux fois.",0.45),
  N("Essayez : dites « Annie est allée une fois à Pékin. »"),
  TH(),
  C("安妮去过一次北京。","Ānnī qùguo yí cì Běijīng.","Annie est allée une fois à Pékin.",0.5), HOLD(),
  N("Dites : « j'ai très envie d'aller en Chine, même si j'y suis déjà allée une fois, j'ai très envie d'y retourner encore une fois. »"),
  TH(),
  C("我很想去中国，虽然去过一次，但是很想再去一次。","Wǒ hěn xiǎng qù Zhōngguó, suīrán qùguo yí cì, dànshì hěn xiǎng zài qù yí cì.","J'ai très envie d'aller en Chine, même si j'y suis déjà allée une fois, j'ai très envie d'y retourner encore une fois.",0.3), HOLD(),

  N("On vous répond : « bien, une fois en Chine tu pourras parler chinois souvent. »"),
  C("不错，到中国后你就可以经常说中文了。","Búcuò, dào Zhōngguó hòu nǐ jiù kěyǐ jīngcháng shuō Zhōngwén le.","Bien, une fois en Chine tu pourras parler chinois souvent.",0.35),

  N("Révision. Dites, avec le complément de fréquence : Li Wen a vu Yang Tongle deux fois."),
  TH(),
  C("李文见了杨同乐两次。","Lǐ Wén jiànle Yáng Tónglè liǎng cì.","Li Wen a vu Yang Tongle deux fois.",0.45),
  N("Fin de la partie 1. À la partie 2 : dans un café, Bai Jiayue et Li Wen parlent de voyage."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"多条路", title:"Partie 2 · Direction Pékin", desc:"出国 · 门票 · 高中 · 出门 · 路 · complément de fréquence (2)",
    build(){ return [
  N("Partie 2. Au café, Bai Jiayue annonce à Li Wen ses projets de voyage. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("考完试了，我现在可以出国旅游了。","Kǎowán shì le, wǒ xiànzài kěyǐ chūguó lǚyóu le.","L'examen est terminé, maintenant je peux voyager à l'étranger.",0.35),
  C("你要去哪儿？","Nǐ yào qù nǎr?","Tu vas où ?",0.55),
  C("我要再去一次北京。","Wǒ yào zài qù yí cì Běijīng.","Je vais retourner à Pékin encore une fois.",0.45),
  C("为什么还去北京？","Wèi shénme hái qù Běijīng?","Pourquoi encore Pékin ?",0.5),
  C("因为我想再吃一次烤鸭，再喝一次奶茶，再去北京大学看一次电影……","Yīnwèi wǒ xiǎng zài chī yí cì kǎoyā, zài hē yí cì nǎichá, zài qù Běijīng Dàxué kàn yí cì diànyǐng……","Parce que je veux remanger du canard laqué, reboire du thé au lait, revoir un film à l'université de Pékin...",0.28),
  C("你想做的事情很多啊！","Nǐ xiǎng zuò de shìqing hěn duō a!","Tu as beaucoup de choses à faire !",0.4),
  C("是啊，你看，我还在网上买好颐和园的门票了呢。","Shì a, nǐ kàn, wǒ hái zài wǎngshang mǎihǎo Yíhé Yuán de ménpiào le ne.","Eh oui, tu vois, j'ai déjà acheté en ligne les billets d'entrée pour le Palais d'Été.",0.28),
  C("我的高中同学就在颐和园上班，可以让他给你好好介绍介绍。","Wǒ de gāozhōng tóngxué jiù zài Yíhé Yuán shàngbān, kěyǐ ràng tā gěi nǐ hǎohǎo jièshào jièshào.","Un de mes camarades du lycée travaille justement au Palais d'Été, je peux lui demander de bien te faire visiter.",0.26),
  C("太好了！出门旅游，多个朋友多条路。","Tài hǎo le! Chūmén lǚyóu, duō ge péngyou duō tiáo lù.","Génial ! Pour voyager, plus on a d'amis, plus on a de chemins possibles.",0.35),

  N("« Voyager à l'étranger » se dit [[出国|chūguó]]. Dites : « l'examen est terminé, maintenant je peux voyager à l'étranger. »"),
  ...teach2("出国","chūguó","voyager à l'étranger, quitter le pays"),
  TH(),
  C("考完试了，我现在可以出国旅游了。","Kǎowán shì le, wǒ xiànzài kěyǐ chūguó lǚyóu le.","L'examen est terminé, maintenant je peux voyager à l'étranger.",0.35), HOLD(),
  N("On vous demande : « tu vas où ? »"),
  C("你要去哪儿？","Nǐ yào qù nǎr?","Tu vas où ?",0.55),
  N("Dites : « je vais retourner à Pékin encore une fois. »"),
  TH(),
  C("我要再去一次北京。","Wǒ yào zài qù yí cì Běijīng.","Je vais retourner à Pékin encore une fois.",0.45), HOLD(),

  N("On vous demande : « pourquoi encore Pékin ? »"),
  C("为什么还去北京？","Wèi shénme hái qù Běijīng?","Pourquoi encore Pékin ?",0.5),

  N("Grammaire : quand le verbe a à la fois un complément de fréquence et un complément d'objet, si l'objet est une chose, il se place généralement après le complément de fréquence ; si c'est un pronom, il se place avant. Dites : « parce que je veux remanger du canard laqué, reboire du thé au lait, revoir un film à l'université de Pékin... »"),
  TH(),
  C("因为我想再吃一次烤鸭，再喝一次奶茶，再去北京大学看一次电影……","Yīnwèi wǒ xiǎng zài chī yí cì kǎoyā, zài hē yí cì nǎichá, zài qù Běijīng Dàxué kàn yí cì diànyǐng……","Parce que je veux remanger du canard laqué, reboire du thé au lait, revoir un film à l'université de Pékin...",0.28), HOLD(),
  C("我想找他一次。","Wǒ xiǎng zhǎo tā yí cì.","Je veux le voir une fois.",0.55),
  C("安妮来过这儿两次。","Ānnī láiguo zhèr liǎng cì.","Annie est venue ici deux fois.",0.5),
  N("Essayez, avec un pronom avant le complément de fréquence : dites « je veux le voir une fois. »"),
  TH(),
  C("我想找他一次。","Wǒ xiǎng zhǎo tā yí cì.","Je veux le voir une fois.",0.55), HOLD(),

  N("On vous répond : « tu as beaucoup de choses à faire ! »"),
  C("你想做的事情很多啊！","Nǐ xiǎng zuò de shìqing hěn duō a!","Tu as beaucoup de choses à faire !",0.4),

  N("« Un billet d'entrée » se dit [[门票|ménpiào]]. Dites : « eh oui, tu vois, j'ai déjà acheté en ligne les billets d'entrée pour le Palais d'Été. »"),
  ...teach2("门票","ménpiào","un billet d'entrée"),
  TH(),
  C("是啊，你看，我还在网上买好颐和园的门票了呢。","Shì a, nǐ kàn, wǒ hái zài wǎngshang mǎihǎo Yíhé Yuán de ménpiào le ne.","Eh oui, tu vois, j'ai déjà acheté en ligne les billets d'entrée pour le Palais d'Été.",0.28), HOLD(),

  N("« Le lycée » se dit [[高中|gāozhōng]]. On vous répond : « un de mes camarades du lycée travaille justement au Palais d'Été, je peux lui demander de bien te faire visiter. »"),
  ...teach2("高中","gāozhōng","le lycée"),
  C("我的高中同学就在颐和园上班，可以让他给你好好介绍介绍。","Wǒ de gāozhōng tóngxué jiù zài Yíhé Yuán shàngbān, kěyǐ ràng tā gěi nǐ hǎohǎo jièshào jièshào.","Un de mes camarades du lycée travaille justement au Palais d'Été, je peux lui demander de bien te faire visiter.",0.26),

  N("« Sortir de chez soi » se dit [[出门|chūmén]], et « un chemin, une route » se dit [[路|lù]]. Dites : « génial ! Pour voyager, plus on a d'amis, plus on a de chemins possibles. »"),
  ...teach2("出门，路","chūmén, lù","sortir de chez soi ; un chemin, une route"),
  TH(),
  C("太好了！出门旅游，多个朋友多条路。","Tài hǎo le! Chūmén lǚyóu, duō ge péngyou duō tiáo lù.","Génial ! Pour voyager, plus on a d'amis, plus on a de chemins possibles.",0.35), HOLD(),

  N("Révision. Dites, avec le complément de fréquence : Annie est venue ici deux fois."),
  TH(),
  C("安妮来过这儿两次。","Ānnī láiguo zhèr liǎng cì.","Annie est venue ici deux fois.",0.5),
  N("Fin de la partie 2. À la partie 3 : Bai Jiayue et Li Wen reparlent d'un précédent retour de Li Wen chez lui."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"有一年没回国", title:"Partie 3 · Le vol de retour de Li Wen", desc:"机场 · 机票 · 飞 · phrase avec 有 (quantité atteinte)",
    build(){ return [
  N("Partie 3. Toujours au café, Bai Jiayue et Li Wen parlent du dernier retour au pays de Li Wen. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("李文，你有一年没回国了吧？","Lǐ Wén, nǐ yǒu yì nián méi huí guó le ba?","Li Wen, ça fait un an que tu n'es pas rentré dans ton pays, non ?",0.35),
  C("不到一年。我六月的时候回去了一次。","Bú dào yì nián. Wǒ Liùyuè de shíhou huíqùle yí cì.","Pas tout à fait un an. En juin j'y suis retourné une fois.",0.35),
  C("我怎么忘了？还是我送你去的机场呢。","Wǒ zěnme wàng le? Hái shì wǒ sòng nǐ qù de jīchǎng ne.","Comment ai-je pu oublier ? C'est même moi qui t'avais accompagné à l'aéroport.",0.3),
  C("是啊。","Shì a.","Eh oui.",0.7),
  C("我记得你那次的机票很便宜。","Wǒ jìde nǐ nà cì de jīpiào hěn piányi.","Je me souviens que ton billet d'avion cette fois-là était très bon marché.",0.35),
  C("没错，可能因为那个时候去北京的人不多吧。","Méi cuò, kěnéng yīnwèi nàge shíhou qù Běijīng de rén bù duō ba.","C'est exact, peut-être parce qu'à ce moment-là il n'y avait pas beaucoup de gens qui allaient à Pékin.",0.3),
  C("这次的机票虽然有点儿贵，但想到就要飞北京了，我还是很高兴的。","Zhè cì de jīpiào suīrán yǒudiǎnr guì, dàn xiǎngdào jiù yào fēi Běijīng le, wǒ háishi hěn gāoxìng de.","Cette fois le billet est un peu cher, mais rien qu'à l'idée de bientôt m'envoler vers Pékin, je suis quand même très contente.",0.26),

  N("Grammaire : « 有 + syntagme numéral » indique qu'une quantité est atteinte. Dites : « Li Wen, ça fait un an que tu n'es pas rentré dans ton pays, non ? »"),
  TH(),
  C("李文，你有一年没回国了吧？","Lǐ Wén, nǐ yǒu yì nián méi huí guó le ba?","Li Wen, ça fait un an que tu n'es pas rentré dans ton pays, non ?",0.35), HOLD(),
  C("你女儿今年有10岁了吗？","Nǐ nǚ'ér jīnnián yǒu shí suì le ma?","Ta fille a-t-elle dix ans cette année ?",0.4),
  C("我有一个月没给家里打电话了。","Wǒ yǒu yí ge yuè méi gěi jiā lǐ dǎ diànhuà le.","Ça fait un mois que je n'ai pas appelé chez moi.",0.35),
  N("Essayez : dites « ça fait un mois que je n'ai pas appelé chez moi. »"),
  TH(),
  C("我有一个月没给家里打电话了。","Wǒ yǒu yí ge yuè méi gěi jiā lǐ dǎ diànhuà le.","Ça fait un mois que je n'ai pas appelé chez moi.",0.35), HOLD(),

  N("On vous répond : « pas tout à fait un an. En juin j'y suis retourné une fois. »"),
  C("不到一年。我六月的时候回去了一次。","Bú dào yì nián. Wǒ Liùyuè de shíhou huíqùle yí cì.","Pas tout à fait un an. En juin j'y suis retourné une fois.",0.35),

  N("« Un aéroport » se dit [[机场|jīchǎng]]. Dites : « comment ai-je pu oublier ? C'est même moi qui t'avais accompagné à l'aéroport. »"),
  ...teach2("机场","jīchǎng","un aéroport"),
  TH(),
  C("我怎么忘了？还是我送你去的机场呢。","Wǒ zěnme wàng le? Hái shì wǒ sòng nǐ qù de jīchǎng ne.","Comment ai-je pu oublier ? C'est même moi qui t'avais accompagné à l'aéroport.",0.3), HOLD(),

  N("On vous répond : « eh oui. »"),
  C("是啊。","Shì a.","Eh oui.",0.7),

  N("« Un billet d'avion » se dit [[机票|jīpiào]]. Dites : « je me souviens que ton billet d'avion cette fois-là était très bon marché. »"),
  ...teach2("机票","jīpiào","un billet d'avion"),
  TH(),
  C("我记得你那次的机票很便宜。","Wǒ jìde nǐ nà cì de jīpiào hěn piányi.","Je me souviens que ton billet d'avion cette fois-là était très bon marché.",0.35), HOLD(),

  N("On vous répond : « c'est exact, peut-être parce qu'à ce moment-là il n'y avait pas beaucoup de gens qui allaient à Pékin. »"),
  C("没错，可能因为那个时候去北京的人不多吧。","Méi cuò, kěnéng yīnwèi nàge shíhou qù Běijīng de rén bù duō ba.","C'est exact, peut-être parce qu'à ce moment-là il n'y avait pas beaucoup de gens qui allaient à Pékin.",0.3),

  N("« Voler, prendre l'avion » se dit [[飞|fēi]]. Dites : « cette fois le billet est un peu cher, mais rien qu'à l'idée de bientôt m'envoler vers Pékin, je suis quand même très contente. »"),
  ...teach2("飞","fēi","voler, prendre l'avion"),
  TH(),
  C("这次的机票虽然有点儿贵，但想到就要飞北京了，我还是很高兴的。","Zhè cì de jīpiào suīrán yǒudiǎnr guì, dàn xiǎngdào jiù yào fēi Běijīng le, wǒ háishi hěn gāoxìng de.","Cette fois le billet est un peu cher, mais rien qu'à l'idée de bientôt m'envoler vers Pékin, je suis quand même très contente.",0.26), HOLD(),

  N("Le soir, Li Wen écrit dans son journal. « Sembler, être comme » se dit [[好像|hǎoxiàng]], et « un oiseau » se dit [[鸟|niǎo]]. Écoutez ce qu'il raconte."),
  ...teach2("好像，鸟","hǎoxiàng, niǎo","sembler, être comme ; un oiseau"),
  C("我六月的时候回过一次北京，现在有半年多没回去了，我有点儿想家。","Wǒ Liùyuè de shíhou huíguo yí cì Běijīng, xiànzài yǒu bàn nián duō méi huíqù le, wǒ yǒudiǎnr xiǎng jiā.","En juin je suis retourné une fois à Pékin, maintenant ça fait plus de six mois que je n'y suis pas retourné, le pays me manque un peu.",0.26),
  C("就要过年了，我要回家过年。","Jiù yào guònián le, wǒ yào huí jiā guònián.","Le nouvel an approche, je vais rentrer chez moi pour le fêter.",0.4),
  C("家月这次也要去北京，我们都是星期五的飞机。","Jiāyuè zhè cì yě yào qù Běijīng, wǒmen dōu shì Xīngqīwǔ de fēijī.","Jiayue va aussi à Pékin cette fois-ci, nous prenons toutes les deux l'avion de vendredi.",0.3),
  C("家月说我们好像小鸟，一起飞到北京，再一起飞回这里。","Jiāyuè shuō wǒmen hǎoxiàng xiǎoniǎo, yìqǐ fēidào Běijīng, zài yìqǐ fēihuí zhèlǐ.","Jiayue dit qu'on est comme des petits oiseaux, on s'envole ensemble vers Pékin, puis on revole ensemble jusqu'ici.",0.28),
  N("Dites, avec 好像 : Jiayue dit qu'on est comme des petits oiseaux, on s'envole ensemble vers Pékin, puis on revole ensemble jusqu'ici."),
  TH(),
  C("家月说我们好像小鸟，一起飞到北京，再一起飞回这里。","Jiāyuè shuō wǒmen hǎoxiàng xiǎoniǎo, yìqǐ fēidào Běijīng, zài yìqǐ fēihuí zhèlǐ.","Jiayue dit qu'on est comme des petits oiseaux, on s'envole ensemble vers Pékin, puis on revole ensemble jusqu'ici.",0.28), HOLD(),

  // Révision finale de la leçon 15 — et de tout le cours HSK 2
  N("Révision finale de la leçon 15. Dites, avec le complément de fréquence : j'ai très envie d'aller en Chine, même si j'y suis déjà allée une fois, j'ai très envie d'y retourner encore une fois."),
  TH(),
  C("我很想去中国，虽然去过一次，但是很想再去一次。","Wǒ hěn xiǎng qù Zhōngguó, suīrán qùguo yí cì, dànshì hěn xiǎng zài qù yí cì.","J'ai très envie d'aller en Chine, même si j'y suis déjà allée une fois, j'ai très envie d'y retourner encore une fois.",0.3),
  N("Dites, avec 有 + syntagme numéral : ça fait un an que tu n'es pas rentré dans ton pays, non ?"),
  TH(),
  C("你有一年没回国了吧？","Nǐ yǒu yì nián méi huí guó le ba?","Ça fait un an que tu n'es pas rentré dans ton pays, non ?",0.4),
  N("Dites : pour voyager, plus on a d'amis, plus on a de chemins possibles."),
  TH(),
  C("出门旅游，多个朋友多条路。","Chūmén lǚyóu, duō ge péngyou duō tiáo lù.","Pour voyager, plus on a d'amis, plus on a de chemins possibles.",0.35),
  N("Félicitations ! Vous venez de terminer la leçon 15, la toute dernière leçon du HSK 2 ! Vous avez parcouru quinze leçons, des retrouvailles à l'aéroport jusqu'à ce voyage de retour en Chine. Réécoutez cette leçon demain pour bien la fixer, et surtout, bravo pour tout le chemin parcouru. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("你在这儿等着，我去买门票。","Nǐ zài zhèr děngzhe, wǒ qù mǎi ménpiào.","",0.35),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我们一起去买吧。","Yī. Wǒmen yìqǐ qù mǎi ba.","",0.45),
  P(4,"…"),
  C("二、没有，她就比我大四岁。","Èr. Méiyǒu, tā jiù bǐ wǒ dà sì suì.","",0.4),
  P(4,"…"),
  C("三、是的，她说要去中国上大学。","Sān. Shì de, tā shuō yào qù Zhōngguó shàng dàxué.","",0.28),
  TH(),
  C("我们一起去买吧。","Wǒmen yìqǐ qù mǎi ba.","",0.5), HOLD(),

  // Question 2
  C("你们的中文老师有30岁吗？","Nǐmen de Zhōngwén lǎoshī yǒu sānshí suì ma?","",0.35),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、没有，她就比我大四岁。","Yī. Méiyǒu, tā jiù bǐ wǒ dà sì suì.","",0.4),
  P(4,"…"),
  C("二、是的，她说要去中国上大学。","Èr. Shì de, tā shuō yào qù Zhōngguó shàng dàxué.","",0.28),
  P(4,"…"),
  C("三、这条路我开过很多次，没事。","Sān. Zhè tiáo lù wǒ kāiguo hěn duō cì, méishì.","",0.3),
  TH(),
  C("没有，她就比我大四岁。","Méiyǒu, tā jiù bǐ wǒ dà sì suì.","",0.45), HOLD(),

  // Question 3
  C("安妮就要出国了，她告诉你了吗？","Ānnī jiù yào chūguó le, tā gàosu nǐ le ma?","",0.3),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、是的，她说要去中国上大学。","Yī. Shì de, tā shuō yào qù Zhōngguó shàng dàxué.","",0.28),
  P(4,"…"),
  C("二、这条路我开过很多次，没事。","Èr. Zhè tiáo lù wǒ kāiguo hěn duō cì, méishì.","",0.3),
  P(4,"…"),
  C("三、我们一起去买吧。","Sān. Wǒmen yìqǐ qù mǎi ba.","",0.45),
  TH(),
  C("是的，她说要去中国上大学。","Shì de, tā shuō yào qù Zhōngguó shàng dàxué.","",0.3), HOLD(),

  // Question 4
  C("可能要下雨了，你别开车了。","Kěnéng yào xià yǔ le, nǐ bié kāichē le.","",0.35),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、这条路我开过很多次，没事。","Yī. Zhè tiáo lù wǒ kāiguo hěn duō cì, méishì.","",0.3),
  P(4,"…"),
  C("二、我们一起去买吧。","Èr. Wǒmen yìqǐ qù mǎi ba.","",0.45),
  P(4,"…"),
  C("三、没有，她就比我大四岁。","Sān. Méiyǒu, tā jiù bǐ wǒ dà sì suì.","",0.4),
  TH(),
  C("这条路我开过很多次，没事。","Zhè tiáo lù wǒ kāiguo hěn duō cì, méishì.","",0.35), HOLD(),

  // Question 5
  C("大家都说坐飞机比坐火车贵，但是有时候机票比火车票还便宜。你早一点儿买，就可能买到便宜的机票。","Dàjiā dōu shuō zuò fēijī bǐ zuò huǒchē guì, dànshì yǒu shíhou jīpiào bǐ huǒchēpiào hái piányi. Nǐ zǎo yìdiǎnr mǎi, jiù kěnéng mǎidào piányi de jīpiào.","",0.24),
  C("机票：","Jīpiào:","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、都很贵。","Yī. Dōu hěn guì.","",0.55),
  P(4,"…"),
  C("二、都很便宜。","Èr. Dōu hěn piányi.","",0.5),
  P(4,"…"),
  C("三、有时很便宜。","Sān. Yǒushí hěn piányi.","",0.45),
  TH(),
  C("有时很便宜。","Yǒushí hěn piányi.","",0.5), HOLD(),

  // Question 6
  C("我去过一次北京的新机场。新机场很大，也很漂亮。网上说每天有十多万人在那里坐飞机。","Wǒ qùguo yí cì Běijīng de xīn jīchǎng. Xīn jīchǎng hěn dà, yě hěn piàoliang. Wǎngshang shuō měi tiān yǒu shí duō wàn rén zài nàlǐ zuò fēijī.","",0.26),
  C("北京的新机场怎么样？","Běijīng de xīn jīchǎng zěnmeyàng?","",0.35),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、人不多。","Yī. Rén bù duō.","",0.55),
  P(4,"…"),
  C("二、很漂亮。","Èr. Hěn piàoliang.","",0.55),
  P(4,"…"),
  C("三、不太大。","Sān. Bú tài dà.","",0.55),
  TH(),
  C("很漂亮。","Hěn piàoliang.","",0.6), HOLD(),

  // Question 7
  C("我每个星期上七次中文课，每天上午都有课，有时候下午也上课。我们的老师是从中国来的。她教得很好，所以我很喜欢上她的中文课。","Wǒ měi ge xīngqī shàng qī cì Zhōngwén kè, měitiān shàngwǔ dōu yǒu kè, yǒu shíhou xiàwǔ yě shàngkè. Wǒmen de lǎoshī shì cóng Zhōngguó lái de. Tā jiāo de hěn hǎo, suǒyǐ wǒ hěn xǐhuan shàng tā de Zhōngwén kè.","",0.24),
  C("他为什么喜欢那位中文老师的课？","Tā wèi shénme xǐhuan nà wèi Zhōngwén lǎoshī de kè?","",0.32),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、她的课多。","Yī. Tā de kè duō.","",0.55),
  P(4,"…"),
  C("二、她是中国人。","Èr. Tā shì Zhōngguó rén.","",0.5),
  P(4,"…"),
  C("三、她教得很好。","Sān. Tā jiāo de hěn hǎo.","",0.5),
  TH(),
  C("她教得很好。","Tā jiāo de hěn hǎo.","",0.55), HOLD(),

N("Bravo, exercice terminé ! Et avec lui, c'est tout le cours HSK 2 que vous venez de terminer, quinze leçons durant. De 她请我们吃了北京烤鸭 à aujourd'hui, vous avez énormément progressé. Prenez le temps de réécouter les leçons qui vous semblent encore fragiles, et félicitations pour ce travail accompli !"),
  C("再见，恭喜你！","Zàijiàn, gōngxǐ nǐ!","Au revoir, félicitations à toi !",0.4),
    ]; } },
  ]
});
