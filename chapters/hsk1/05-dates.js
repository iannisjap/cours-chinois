/* ============================================================
   HSK 1 · Leçon 5 — 今天我休息 Aujourd'hui je suis en repos
   D'après « 新HSK教程 1 », leçon 5.
   Vocabulaire de la leçon :
   今天 · 号 · 月 · 日 · 星期 · 星期日/星期天 · 休息 ·
   会 · 做饭 · 做 · 面条儿 · 饺子 · 一些 · 菜 ·
   下班 · 新 · 电脑 · 真 · 好看 · 喜欢 · 它
   Grammaire : expression de la date (année→mois→jour→jour de semaine) ·
   phrase nominale (今天9月8号, sans verbe être) · verbe modal 会 (savoir faire).
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  group: "hsk1",
  id: "hsk1-05",
  badge: 5,
  hanzi: "今天我休息",
  title: "Leçon 5 · Dates et savoir-faire",
  desc: "3 parties · 今天几号 · 会做饭 · 喜欢",
  intro: "Leçon 5 du HSK 1 : dire la date et le jour de la semaine, exprimer qu'on sait faire quelque chose avec 会, et dire ce qu'on aime avec 喜欢.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"今天几号", title:"Partie 1 · La date et les jours", desc:"今天 · 号 · 月 · 日 · 星期 · 休息",
    build(){ return [
  N("Bienvenue dans la leçon 5 du HSK 1. Aujourd'hui : dire la date, et dire ce qu'on sait faire. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("今天几号？","Jīntiān jǐ hào?","Quelle est la date aujourd'hui ?",0.5),
  C("今天九月八号。","Jīntiān jiǔ yuè bā hào.","Aujourd'hui, c'est le 8 septembre.",0.5),
  C("星期几？","Xīngqī jǐ?","Quel jour de la semaine ?",0.5),
  C("星期日。今天我休息。","Xīngqīrì. Jīntiān wǒ xiūxi.","Dimanche. Aujourd'hui, je suis en repos.",0.5),
  N("D'abord, révision de la leçon 4 : demandez combien de personnes dans ta famille."),
  TH(),
  C("你家有几口人？","Nǐ jiā yǒu jǐ kǒu rén?","Combien de personnes dans ta famille ?",0.6), HOLD(),

  N("« Aujourd'hui » se dit [[今天|jīntiān]]. Écoutez et répétez."),
  ...teach2("今天","jīntiān","aujourd'hui"),
  N("« Le mois » se dit [[月|yuè]]. Pour dire un mois, on met le nombre juste avant : « septembre », mois numéro neuf, se dit :"),
  ...teach2("九月","jiǔ yuè","septembre"),
  N("Pour le jour du mois à l'oral, on utilise [[号|hào]] après le nombre. « Le 8 », comme date, se dit :"),
  ...teach2("八号","bā hào","le 8 (du mois)"),
  N("En chinois, l'ordre est important : d'abord l'année, puis le mois, puis le jour. « Aujourd'hui, le 8 septembre » se dit donc : aujourd'hui — neuf mois — huit [[号|hào]]."),
  ...teach2("今天九月八号。","Jīntiān jiǔ yuè bā hào.","Aujourd'hui, c'est le 8 septembre."),
  N("Remarquez : il n'y a pas de verbe « être » dans cette phrase ! En chinois, pour les dates, on peut dire directement « aujourd'hui neuf mois huit » sans [[是|shì]]. Pour demander la date, on utilise [[几|jǐ]] avec [[号|hào]] : « Aujourd'hui, quelle date ? »"),
  TH(),
  C("今天几号？","Jīntiān jǐ hào?","Quelle est la date aujourd'hui ?",0.6),
  C("今天几号？","Jīntiān jǐ hào?","Quelle est la date aujourd'hui ?",0.6), HOLD(),

  N("« La semaine » se dit [[星期|xīngqī]]. Les jours de la semaine se disent [[星期|xīngqī]] plus un nombre : lundi, [[星期一|xīngqīyī]] ; mardi, [[星期二|xīngqī'èr]] ; et ainsi de suite jusqu'à samedi, [[星期六|xīngqīliù]]."),
  ...teach2("星期一，星期二，星期六","xīngqīyī, xīngqī'èr, xīngqīliù","lundi, mardi, samedi"),
  N("Mais dimanche est spécial : on dit [[星期日|xīngqīrì]], ou de façon plus courante [[星期天|xīngqītiān]]. Écoutez et répétez."),
  ...teach2("星期天","xīngqītiān","dimanche"),
  N("Pour demander le jour de la semaine : « Quel jour de la semaine ? »"),
  TH(),
  C("星期几？","Xīngqī jǐ?","Quel jour de la semaine ?",0.6), HOLD(),

  N("Le verbe « se reposer », « être en repos », se dit [[休息|xiūxi]]. Écoutez et répétez."),
  ...teach2("休息","xiūxi","se reposer, être en repos"),
  N("Répondez : « C'est dimanche. Aujourd'hui, je suis en repos. »"),
  TH(),
  C("星期日。今天我休息。","Xīngqīrì. Jīntiān wǒ xiūxi.","C'est dimanche. Aujourd'hui, je suis en repos.",0.55),
  C("星期日。今天我休息。","Xīngqīrì. Jīntiān wǒ xiūxi.","C'est dimanche. Aujourd'hui, je suis en repos.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Wang Yixue demande : « Quelle est la date aujourd'hui ? »"),
  C("今天几号？","Jīntiān jǐ hào?","Quelle est la date aujourd'hui ?",0.6),
  N("Répondez : « Aujourd'hui, c'est le 8 septembre. »"),
  TH(),
  C("今天九月八号。","Jīntiān jiǔ yuè bā hào.","Aujourd'hui, c'est le 8 septembre.",0.6),
  N("Elle demande :"),
  C("星期几？","Xīngqī jǐ?","Quel jour de la semaine ?",0.6),
  N("Répondez : « Dimanche. Aujourd'hui, je suis en repos. »"),
  TH(),
  C("星期日。今天我休息。","Xīngqīrì. Jīntiān wǒ xiūxi.","Dimanche. Aujourd'hui, je suis en repos.",0.6), HOLD(),

  // Révision
  N("Révision. Demandez : quelle est la date aujourd'hui ?"),
  TH(),
  C("今天几号？","Jīntiān jǐ hào?","Quelle est la date aujourd'hui ?",0.6),
  N("Demandez : quel jour de la semaine ?"),
  TH(),
  C("星期几？","Xīngqī jǐ?","Quel jour de la semaine ?",0.6),
  N("Fin de la partie 1. À la partie 2 : dire ce qu'on sait cuisiner."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"会做饭", title:"Partie 2 · Savoir faire, cuisiner", desc:"会 · 做饭 · 做 · 面条儿 · 饺子 · 菜",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你会做饭吗？","Nǐ huì zuò fàn ma?","Sais-tu cuisiner ?",0.5),
  C("我会做。","Wǒ huì zuò.","Je sais cuisiner.",0.5),
  C("你会做什么？","Nǐ huì zuò shénme?","Que sais-tu préparer ?",0.5),
  C("我会做面条儿、饺子，也会做一些菜。星期天我也做饭。","Wǒ huì zuò miàntiáor, jiǎozi, yě huì zuò yìxiē cài. Xīngqītiān wǒ yě zuò fàn.","Je sais faire des nouilles, des jiaozi, et aussi quelques plats. Le dimanche, je cuisine aussi.",0.5),
  N("Révision : dites « aujourd'hui, je suis en repos »."),
  TH(),
  C("今天我休息。","Jīntiān wǒ xiūxi.","Aujourd'hui, je suis en repos.",0.6), HOLD(),

  N("Pour dire qu'on sait faire quelque chose — parce qu'on l'a appris — on utilise [[会|huì]] avant le verbe. Écoutez et répétez."),
  ...teach2("会","huì","savoir (faire)"),
  N("« Cuisiner », « préparer un repas », se dit [[做饭|zuò fàn]]. [[饭|fàn]] veut dire « repas », et [[做|zuò]] tout seul veut dire « faire », « préparer »."),
  ...teach2("做饭","zuò fàn","cuisiner"),
  N("Demandez : « Sais-tu cuisiner ? »"),
  TH(),
  C("你会做饭吗？","Nǐ huì zuò fàn ma?","Sais-tu cuisiner ?",0.6),
  C("你会做饭吗？","Nǐ huì zuò fàn ma?","Sais-tu cuisiner ?",0.6), HOLD(),
  N("Répondez : « Je sais cuisiner. »"),
  TH(),
  C("我会做。","Wǒ huì zuò.","Je sais cuisiner.",0.6), HOLD(),

  N("Demandez : « Que sais-tu préparer ? »"),
  TH(),
  C("你会做什么？","Nǐ huì zuò shénme?","Que sais-tu préparer ?",0.6), HOLD(),

  N("« Les nouilles » se disent [[面条儿|miàntiáor]]. Écoutez et répétez."),
  ...teach2("面条儿","miàntiáor","les nouilles"),
  N("« Les jiaozi », des raviolis chinois, se disent [[饺子|jiǎozi]]. Écoutez et répétez."),
  ...teach2("饺子","jiǎozi","les jiaozi (raviolis)"),
  N("« Quelques », « un peu de », se dit [[一些|yìxiē]], et « un plat », « un mets », se dit [[菜|cài]]. Écoutez et répétez."),
  ...teach2("一些菜","yìxiē cài","quelques plats"),
  N("Répondez : « Je sais faire des nouilles, des jiaozi, et aussi quelques plats. Le dimanche, je cuisine aussi. »"),
  TH(),
  C("我会做面条儿、饺子，也会做一些菜。星期天我也做饭。","Wǒ huì zuò miàntiáor, jiǎozi, yě huì zuò yìxiē cài. Xīngqītiān wǒ yě zuò fàn.","Je sais faire des nouilles, des jiaozi, et aussi quelques plats. Le dimanche, je cuisine aussi.",0.5), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. On vous demande :"),
  C("你会做饭吗？","Nǐ huì zuò fàn ma?","Sais-tu cuisiner ?",0.6),
  N("Répondez : « Je sais cuisiner. »"),
  TH(),
  C("我会做。","Wǒ huì zuò.","Je sais cuisiner.",0.6),
  N("On vous demande :"),
  C("你会做什么？","Nǐ huì zuò shénme?","Que sais-tu préparer ?",0.6),
  N("Répondez : « Je sais faire des nouilles, des jiaozi, et aussi quelques plats. Le dimanche, je cuisine aussi. »"),
  TH(),
  C("我会做面条儿、饺子，也会做一些菜。星期天我也做饭。","Wǒ huì zuò miàntiáor, jiǎozi, yě huì zuò yìxiē cài. Xīngqītiān wǒ yě zuò fàn.","Je sais faire des nouilles, des jiaozi, et aussi quelques plats. Le dimanche, je cuisine aussi.",0.5), HOLD(),

  // Révision
  N("Révision. Demandez : sais-tu cuisiner ?"),
  TH(),
  C("你会做饭吗？","Nǐ huì zuò fàn ma?","Sais-tu cuisiner ?",0.6),
  N("Dites : je sais faire des jiaozi."),
  TH(),
  C("我会做饺子。","Wǒ huì zuò jiǎozi.","Je sais faire des jiaozi.",0.6),
  N("Fin de la partie 2. À la partie 3 : parler d'un ordinateur neuf."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"真好看", title:"Partie 3 · Un ordinateur neuf", desc:"下班 · 新 · 电脑 · 真 · 好看 · 喜欢 · 它",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("同乐，下班吗？","Tóngle, xiàbān ma?","Tongle, as-tu fini le travail ?",0.5),
  C("下班。","Xiàbān.","Fini.",0.5),
  C("这是你的新电脑吗？","Zhè shì nǐ de xīn diànnǎo ma?","C'est ton nouvel ordinateur ?",0.5),
  C("是的，是我的新电脑。","Shì de, shì wǒ de xīn diànnǎo.","Oui, c'est mon nouvel ordinateur.",0.5),
  C("真好看！","Zhēn hǎokàn!","Il est vraiment beau !",0.5),
  C("我也很喜欢它。","Wǒ yě hěn xǐhuan tā.","Je l'aime beaucoup aussi.",0.5),
  N("Révision : dites « je sais cuisiner »."),
  TH(),
  C("我会做饭。","Wǒ huì zuò fàn.","Je sais cuisiner.",0.6), HOLD(),

  N("« Finir le travail », « sortir du bureau », se dit [[下班|xiàbān]]. Écoutez et répétez."),
  ...teach2("下班","xiàbān","finir le travail"),
  N("Demandez à un collègue : « As-tu fini le travail ? »"),
  TH(),
  C("下班吗？","Xiàbān ma?","As-tu fini le travail ?",0.6),
  C("下班。","Xiàbān.","J'ai fini.",0.6), HOLD(),

  N("« Neuf », « nouveau », se dit [[新|xīn]]. Et « un ordinateur » se dit [[电脑|diànnǎo]]. Écoutez et répétez."),
  ...teach2("新电脑","xīn diànnǎo","un ordinateur neuf"),
  N("Demandez : « C'est ton nouvel ordinateur ? »"),
  TH(),
  C("这是你的新电脑吗？","Zhè shì nǐ de xīn diànnǎo ma?","C'est ton nouvel ordinateur ?",0.6),
  C("这是你的新电脑吗？","Zhè shì nǐ de xīn diànnǎo ma?","C'est ton nouvel ordinateur ?",0.6), HOLD(),
  N("Répondez : « Oui, c'est mon nouvel ordinateur. »"),
  TH(),
  C("是的，是我的新电脑。","Shì de, shì wǒ de xīn diànnǎo.","Oui, c'est mon nouvel ordinateur.",0.6), HOLD(),

  N("« Vraiment », « très », se dit [[真|zhēn]] — il renforce un adjectif, comme dans une exclamation. « Beau », « qui a un bel aspect », se dit [[好看|hǎokàn]]. Écoutez et répétez."),
  ...teach2("真好看！","Zhēn hǎokàn!","Il est vraiment beau !"),
  N("« Aimer », « apprécier », se dit [[喜欢|xǐhuan]]. Et « il », « elle », pour un objet, se dit [[它|tā]]. Écoutez et répétez."),
  ...teach2("我也很喜欢它。","Wǒ yě hěn xǐhuan tā.","Je l'aime beaucoup aussi."),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Wang Yixue demande : « Tongle, as-tu fini le travail ? »"),
  C("同乐，下班吗？","Tóngle, xiàbān ma?","Tongle, as-tu fini le travail ?",0.6),
  N("Répondez : « Fini. »"),
  TH(),
  C("下班。","Xiàbān.","Fini.",0.6),
  N("Elle remarque son ordinateur. Elle demande : « C'est ton nouvel ordinateur ? »"),
  C("这是你的新电脑吗？","Zhè shì nǐ de xīn diànnǎo ma?","C'est ton nouvel ordinateur ?",0.6),
  N("Répondez : « Oui, c'est mon nouvel ordinateur. »"),
  TH(),
  C("是的，是我的新电脑。","Shì de, shì wǒ de xīn diànnǎo.","Oui, c'est mon nouvel ordinateur.",0.6),
  N("Elle s'exclame : « Il est vraiment beau ! » Répondez : « Je l'aime beaucoup aussi. »"),
  TH(),
  C("我也很喜欢它。","Wǒ yě hěn xǐhuan tā.","Je l'aime beaucoup aussi.",0.6), HOLD(),

  // Révision finale de la leçon 5
  N("Révision finale de la leçon 5. Demandez : quelle est la date aujourd'hui ?"),
  TH(),
  C("今天几号？","Jīntiān jǐ hào?","Quelle est la date aujourd'hui ?",0.6),
  N("Dites : aujourd'hui, je suis en repos."),
  TH(),
  C("今天我休息。","Jīntiān wǒ xiūxi.","Aujourd'hui, je suis en repos.",0.6),
  N("Demandez : sais-tu cuisiner ?"),
  TH(),
  C("你会做饭吗？","Nǐ huì zuò fàn ma?","Sais-tu cuisiner ?",0.6),
  N("Dites : je sais faire des nouilles."),
  TH(),
  C("我会做面条儿。","Wǒ huì zuò miàntiáor.","Je sais faire des nouilles.",0.6),
  N("Et pour finir : je l'aime beaucoup."),
  TH(),
  C("我很喜欢它。","Wǒ hěn xǐhuan tā.","Je l'aime beaucoup.",0.6),
  N("Excellent ! Vous avez terminé la leçon 5. Vous savez dire la date, le jour de la semaine, et parler de ce que vous savez faire. Réécoutez-la demain, puis passez à la leçon 6. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"D'après 新HSK教程1 学练手册 · Leçon 5",
    build(){ return [
N("Pour finir cette leçon, un petit exercice de compréhension tiré du manuel officiel HSK 1. Écoutez chaque phrase, réfléchissez à la question posée, puis répondez à voix haute avant la correction."),

  N("Première question. Écoutez bien."),
  C("我非常喜欢我的中文名字。","Wǒ fēicháng xǐhuan wǒ de Zhōngwén míngzi.","J'aime beaucoup mon prénom chinois.",0.5),
  N("Question : qu'est-ce que cette personne aime beaucoup ?"),
  TH(),
  N("Les trois choix étaient : A un nouvel ordinateur, B la cuisine chinoise, C son prénom chinois."),
  C("中文名字","Zhōngwén míngzi","le prénom chinois",0.6), HOLD(),

  N("Deuxième question."),
  C("今天8号，你几号休息？","Jīntiān bā hào, nǐ jǐ hào xiūxi?","Aujourd'hui c'est le 8, toi tu es en repos quel jour ?",0.5),
  N("Question : que veut savoir la personne qui parle ?"),
  TH(),
  N("Les trois choix étaient : A la date d'aujourd'hui, B quel jour tu es en repos, C quel jour tu travailles."),
  C("哪天休息","nǎ tiān xiūxi","quel jour on est en repos",0.6), HOLD(),

  N("Bravo, exercice terminé ! Passez maintenant à la leçon 6."),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  ]
});
