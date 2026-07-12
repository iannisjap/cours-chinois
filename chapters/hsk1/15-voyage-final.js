/* ============================================================
   HSK 1 · Leçon 15 — 大兴机场见！ Rendez-vous à l'aéroport de Daxing !
   D'après « 新HSK教程 1 », leçon 15. DERNIÈRE LEÇON DU COURS.
   Vocabulaire de la leçon :
   爱 · 哪个 · 去年 · 男朋友 · 几(quelques) · 年 · 好玩儿 · 飞机 ·
   要(prendre du temps) · 小时 · 家人 · 时间 · 机场 · 接 · 住 ·
   早 · 那(alors)
   哪个/去年 étendent 那个/今年 déjà connus ; 男朋友 étend 女朋友 ;
   好玩儿 suit le modèle de 好吃/好看/好听 ; 时间 complète 时候 déjà
   connu ; 要 prend ici un troisième sens : « prendre (du temps) »,
   après « vouloir » (leçon 11) et « demander » (leçon 13) ; 那 prend
   ici le sens de « alors », en plus de « celui-là » (leçon 9).
   Grammaire : phrase composée coordonnée « ……，还/也…… ».
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  group: "hsk1",
  id: "hsk1-15",
  badge: 15,
  hanzi: "大兴机场见",
  title: "Leçon 15 · Voyage et retrouvailles",
  desc: "3 parties · 我爱吃中国菜 · 去年去了西安 · 大兴机场见",
  intro: "Dernière leçon du HSK 1 ! Aujourd'hui : parler de ses goûts, de ses voyages passés et futurs, et organiser des retrouvailles à l'aéroport.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"我爱吃中国菜", title:"Partie 1 · Un dîner entre amis", desc:"爱 · 哪个",
    build(){ return [
  N("Bienvenue dans la leçon 15, la dernière du HSK 1 ! Aujourd'hui : parler de ses goûts, de ses voyages, et se dire au revoir à l'aéroport. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你们爱吃哪个菜？","Nǐmen ài chī nǎge cài?","Quel plat aimez-vous manger ?",0.5),
  C("我喜欢这个，也喜欢那个。","Wǒ xǐhuan zhège, yě xǐhuan nàge.","J'aime celui-ci, et j'aime aussi celui-là.",0.5),
  C("这些菜都好吃，还很好看。","Zhèxiē cài dōu hǎochī, hái hěn hǎokàn.","Tous ces plats sont délicieux, et ils sont beaux aussi.",0.5),
  C("我爱吃中国菜，也喜欢做。大家多吃点儿。","Wǒ ài chī Zhōngguó cài, yě xǐhuan zuò. Dàjiā duō chī diǎnr.","J'aime manger la cuisine chinoise, et j'aime aussi la préparer. Servez-vous, mangez-en beaucoup.",0.5),
  N("D'abord, révision de la leçon 5 : dites « j'aime » quelque chose, très fort."),
  TH(),
  C("我很喜欢。","Wǒ hěn xǐhuan.","J'aime beaucoup.",0.6), HOLD(),

  N("« Aimer », « adorer », se dit [[爱|ài]] — un peu plus fort que [[喜欢|xǐhuan]]. Écoutez et répétez."),
  ...teach2("我爱吃","wǒ ài chī","j'adore manger"),
  N("Et « lequel », se dit [[哪个|nǎge]] — comme [[这个|zhège]] et [[那个|nàge]] que vous connaissez. Écoutez et répétez."),
  ...teach2("哪个菜","nǎge cài","quel plat"),
  N("Demandez : « Quel plat aimez-vous manger ? »"),
  TH(),
  C("你们爱吃哪个菜？","Nǐmen ài chī nǎge cài?","Quel plat aimez-vous manger ?",0.6),
  C("你们爱吃哪个菜？","Nǐmen ài chī nǎge cài?","Quel plat aimez-vous manger ?",0.6), HOLD(),

  N("Répondez : « J'aime celui-ci, et j'aime aussi celui-là. » Remarquez la structure « …，也… » pour relier deux idées semblables."),
  TH(),
  C("我喜欢这个，也喜欢那个。","Wǒ xǐhuan zhège, yě xǐhuan nàge.","J'aime celui-ci, et j'aime aussi celui-là.",0.6),
  C("我喜欢这个，也喜欢那个。","Wǒ xǐhuan zhège, yě xǐhuan nàge.","J'aime celui-ci, et j'aime aussi celui-là.",0.6), HOLD(),

  N("Dites : « Tous ces plats sont délicieux, et ils sont beaux aussi. » — remarquez la structure « …，还… », qui ajoute une seconde qualité."),
  TH(),
  C("这些菜都好吃，还很好看。","Zhèxiē cài dōu hǎochī, hái hěn hǎokàn.","Tous ces plats sont délicieux, et ils sont beaux aussi.",0.6),
  C("这些菜都好吃，还很好看。","Zhèxiē cài dōu hǎochī, hái hěn hǎokàn.","Tous ces plats sont délicieux, et ils sont beaux aussi.",0.6), HOLD(),

  N("Dites : « J'aime manger la cuisine chinoise, et j'aime aussi la préparer. Servez-vous, mangez-en beaucoup. »"),
  TH(),
  C("我爱吃中国菜，也喜欢做。大家多吃点儿。","Wǒ ài chī Zhōngguó cài, yě xǐhuan zuò. Dàjiā duō chī diǎnr.","J'aime manger la cuisine chinoise, et j'aime aussi la préparer. Servez-vous, mangez-en beaucoup.",0.5),
  C("我爱吃中国菜，也喜欢做。大家多吃点儿。","Wǒ ài chī Zhōngguó cài, yě xǐhuan zuò. Dàjiā duō chī diǎnr.","J'aime manger la cuisine chinoise, et j'aime aussi la préparer. Servez-vous, mangez-en beaucoup.",0.55), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : « Quel plat aimez-vous manger ? »"),
  TH(),
  C("你们爱吃哪个菜？","Nǐmen ài chī nǎge cài?","Quel plat aimez-vous manger ?",0.6),
  N("Répondez : « J'aime celui-ci, et j'aime aussi celui-là. »"),
  TH(),
  C("我喜欢这个，也喜欢那个。","Wǒ xǐhuan zhège, yě xǐhuan nàge.","J'aime celui-ci, et j'aime aussi celui-là.",0.6),
  N("On vous dit : « Tous ces plats sont délicieux, et ils sont beaux aussi. » Ajoutez : « J'aime manger la cuisine chinoise, et j'aime aussi la préparer. Servez-vous, mangez-en beaucoup. »"),
  TH(),
  C("我爱吃中国菜，也喜欢做。大家多吃点儿。","Wǒ ài chī Zhōngguó cài, yě xǐhuan zuò. Dàjiā duō chī diǎnr.","J'aime manger la cuisine chinoise, et j'aime aussi la préparer. Servez-vous, mangez-en beaucoup.",0.55), HOLD(),

  // Révision
  N("Révision. Dites : j'adore."),
  TH(),
  C("我爱吃。","Wǒ ài chī.","J'adore manger ça.",0.6),
  N("Demandez : quel plat ?"),
  TH(),
  C("哪个菜？","Nǎge cài?","Quel plat ?",0.6),
  N("Fin de la partie 1. À la partie 2 : les voyages passés et futurs."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"去年去了西安", title:"Partie 2 · Voyages passés et futurs", desc:"去年 · 男朋友 · 几(quelques) · 年 · 好玩儿",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你们都想去哪儿？","Nǐmen dōu xiǎng qù nǎr?","Où voulez-vous tous aller ?",0.5),
  C("去年我和男朋友去了西安，今年我想去北京。","Qùnián wǒ hé nánpéngyou qùle Xī'ān, jīnnián wǒ xiǎng qù Běijīng.","L'an dernier, mon copain et moi sommes allés à Xi'an, cette année je veux aller à Pékin.",0.5),
  C("前几年我去了西安，非常好玩儿。今年我也想去北京。","Qián jǐ nián wǒ qùle Xī'ān, fēicháng hǎowánr. Jīnnián wǒ yě xiǎng qù Běijīng.","Il y a quelques années, je suis allée à Xi'an, c'était vraiment amusant. Cette année je veux aussi aller à Pékin.",0.5),
  C("我和王老师都是北京人，北京非常漂亮。","Wǒ hé Wáng lǎoshī dōu shì Běijīng rén, Běijīng fēicháng piàoliang.","Le professeur Wang et moi sommes tous les deux de Pékin, Pékin est vraiment magnifique.",0.5),
  N("Révision : dites « j'aime celui-ci, et j'aime aussi celui-là »."),
  TH(),
  C("我喜欢这个，也喜欢那个。","Wǒ xǐhuan zhège, yě xǐhuan nàge.","J'aime celui-ci, et j'aime aussi celui-là.",0.6), HOLD(),

  N("Demandez : « Où voulez-vous tous aller ? »"),
  TH(),
  C("你们都想去哪儿？","Nǐmen dōu xiǎng qù nǎr?","Où voulez-vous tous aller ?",0.6), HOLD(),

  N("« L'an dernier » se dit [[去年|qùnián]] — vous connaissez déjà [[今年|jīnnián]] et [[明年|míngnián]]. Et « un petit copain » se dit [[男朋友|nánpéngyou]] — comme [[女朋友|nǚpéngyou]] que vous connaissez. Écoutez et répétez."),
  ...teach2("去年","qùnián","l'an dernier"),
  N("Dites : « L'an dernier, mon copain et moi sommes allés à Xi'an, cette année je veux aller à Pékin. »"),
  TH(),
  C("去年我和男朋友去了西安，今年我想去北京。","Qùnián wǒ hé nánpéngyou qùle Xī'ān, jīnnián wǒ xiǎng qù Běijīng.","L'an dernier, mon copain et moi sommes allés à Xi'an, cette année je veux aller à Pékin.",0.5),
  C("去年我和男朋友去了西安，今年我想去北京。","Qùnián wǒ hé nánpéngyou qùle Xī'ān, jīnnián wǒ xiǎng qù Běijīng.","L'an dernier, mon copain et moi sommes allés à Xi'an, cette année je veux aller à Pékin.",0.55), HOLD(),

  N("« Quelques », dans une phrase affirmative, se dit aussi [[几|jǐ]] — le même mot que « combien » dans une question. « Une année » se dit [[年|nián]]. Écoutez et répétez."),
  ...teach2("前几年","qián jǐ nián","il y a quelques années"),
  N("« Amusant », « divertissant », se dit [[好玩儿|hǎowánr]] — sur le modèle de [[好吃|hǎochī]], [[好看|hǎokàn]] et [[好听|hǎotīng]] que vous connaissez. Dites : « Il y a quelques années, je suis allée à Xi'an, c'était vraiment amusant. Cette année je veux aussi aller à Pékin. »"),
  TH(),
  C("前几年我去了西安，非常好玩儿。今年我也想去北京。","Qián jǐ nián wǒ qùle Xī'ān, fēicháng hǎowánr. Jīnnián wǒ yě xiǎng qù Běijīng.","Il y a quelques années, je suis allée à Xi'an, c'était vraiment amusant. Cette année je veux aussi aller à Pékin.",0.5),
  C("前几年我去了西安，非常好玩儿。今年我也想去北京。","Qián jǐ nián wǒ qùle Xī'ān, fēicháng hǎowánr. Jīnnián wǒ yě xiǎng qù Běijīng.","Il y a quelques années, je suis allée à Xi'an, c'était vraiment amusant. Cette année je veux aussi aller à Pékin.",0.55), HOLD(),

  N("Dites : « Le professeur Wang et moi sommes tous les deux de Pékin, Pékin est vraiment magnifique. »"),
  TH(),
  C("我和王老师都是北京人，北京非常漂亮。","Wǒ hé Wáng lǎoshī dōu shì Běijīng rén, Běijīng fēicháng piàoliang.","Le professeur Wang et moi sommes tous les deux de Pékin, Pékin est vraiment magnifique.",0.55),
  C("我和王老师都是北京人，北京非常漂亮。","Wǒ hé Wáng lǎoshī dōu shì Běijīng rén, Běijīng fēicháng piàoliang.","Le professeur Wang et moi sommes tous les deux de Pékin, Pékin est vraiment magnifique.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : « Où voulez-vous tous aller ? »"),
  TH(),
  C("你们都想去哪儿？","Nǐmen dōu xiǎng qù nǎr?","Où voulez-vous tous aller ?",0.6),
  N("Répondez : « L'an dernier, mon copain et moi sommes allés à Xi'an, cette année je veux aller à Pékin. »"),
  TH(),
  C("去年我和男朋友去了西安，今年我想去北京。","Qùnián wǒ hé nánpéngyou qùle Xī'ān, jīnnián wǒ xiǎng qù Běijīng.","L'an dernier, mon copain et moi sommes allés à Xi'an, cette année je veux aller à Pékin.",0.55),
  N("On ajoute : « Il y a quelques années, je suis allée à Xi'an, c'était vraiment amusant. Cette année je veux aussi aller à Pékin. »"),
  C("前几年我去了西安，非常好玩儿。今年我也想去北京。","Qián jǐ nián wǒ qùle Xī'ān, fēicháng hǎowánr. Jīnnián wǒ yě xiǎng qù Běijīng.","Il y a quelques années, je suis allée à Xi'an, c'était vraiment amusant. Cette année je veux aussi aller à Pékin.",0.5),
  N("Dites : « Le professeur Wang et moi sommes tous les deux de Pékin, Pékin est vraiment magnifique. »"),
  TH(),
  C("我和王老师都是北京人，北京非常漂亮。","Wǒ hé Wáng lǎoshī dōu shì Běijīng rén, Běijīng fēicháng piàoliang.","Le professeur Wang et moi sommes tous les deux de Pékin, Pékin est vraiment magnifique.",0.55), HOLD(),

  // Révision
  N("Révision. Dites : l'an dernier."),
  TH(),
  C("去年","qùnián","l'an dernier",0.6),
  N("Dites : c'était vraiment amusant."),
  TH(),
  C("非常好玩儿。","Fēicháng hǎowánr.","C'était vraiment amusant.",0.6),
  N("Fin de la partie 2. À la dernière partie de tout le cours : l'aéroport de Daxing !"),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"大兴机场见", title:"Partie 3 · Rendez-vous à l'aéroport", desc:"飞机 · 要(durée) · 小时 · 家人 · 时间 · 机场 · 接 · 住 · 早 · 那(alors)",
    build(){ return [
  N("Partie 3, la toute dernière du cours ! Voici le dialogue que vous saurez tenir à la fin. Écoutez."),
  C("你们的飞机到北京要几个小时？","Nǐmen de fēijī dào Běijīng yào jǐ ge xiǎoshí?","Combien d'heures met votre avion pour arriver à Pékin ?",0.5),
  C("九个小时。","Jiǔ ge xiǎoshí.","Neuf heures.",0.5),
  C("我家人都在北京，星期天我姐姐也有时间，她可以去机场接你们，你们也可以住我家。","Wǒ jiārén dōu zài Běijīng, Xīngqītiān wǒ jiějie yě yǒu shíjiān, tā kěyǐ qù jīchǎng jiē nǐmen, nǐmen yě kěyǐ zhù wǒ jiā.","Toute ma famille est à Pékin, dimanche ma sœur sera aussi libre, elle peut aller vous chercher à l'aéroport, et vous pouvez aussi loger chez moi.",0.5),
  C("我们星期日早上八点到大兴机场，早不早？","Wǒmen Xīngqīrì zǎoshang bā diǎn dào Dàxīng Jīchǎng, zǎo bu zǎo?","Nous arrivons à l'aéroport de Daxing à 8 h dimanche matin, c'est trop tôt ?",0.5),
  C("不早。","Bù zǎo.","Pas trop tôt.",0.5),
  C("谢谢老师！那我们和您姐姐在大兴机场见！","Xièxie lǎoshī! Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!","Merci, professeur ! Alors, rendez-vous avec votre sœur à l'aéroport de Daxing !",0.5),
  N("Révision : dites « c'était vraiment amusant »."),
  TH(),
  C("非常好玩儿。","Fēicháng hǎowánr.","C'était vraiment amusant.",0.6), HOLD(),

  N("« Un avion » se dit [[飞机|fēijī]]. Écoutez et répétez."),
  ...teach2("飞机","fēijī","avion"),
  N("Nouveau sens pour [[要|yào]] : ici, il veut dire « prendre du temps », « nécessiter » — un troisième sens, après « vouloir » et « demander » que vous connaissez. « Une heure », comme durée, se dit [[小时|xiǎoshí]]. Écoutez et répétez."),
  ...teach2("要几个小时","yào jǐ ge xiǎoshí","prend combien d'heures"),
  N("Demandez : « Combien d'heures met votre avion pour arriver à Pékin ? »"),
  TH(),
  C("你们的飞机到北京要几个小时？","Nǐmen de fēijī dào Běijīng yào jǐ ge xiǎoshí?","Combien d'heures met votre avion pour arriver à Pékin ?",0.55),
  C("你们的飞机到北京要几个小时？","Nǐmen de fēijī dào Běijīng yào jǐ ge xiǎoshí?","Combien d'heures met votre avion pour arriver à Pékin ?",0.6), HOLD(),

  N("Répondez : « Neuf heures. »"),
  TH(),
  C("九个小时。","Jiǔ ge xiǎoshí.","Neuf heures.",0.6), HOLD(),

  N("« Les membres de la famille » se dit [[家人|jiārén]]. « Le temps », la durée disponible, se dit [[时间|shíjiān]] — vous connaissez déjà [[时候|shíhou]], le moment. « Un aéroport » se dit [[机场|jīchǎng]], et « aller chercher quelqu'un » se dit [[接|jiē]]. Écoutez et répétez."),
  ...teach2("去机场接你们","qù jīchǎng jiē nǐmen","aller vous chercher à l'aéroport"),
  N("Et « habiter », « loger », se dit [[住|zhù]]. Écoutez et répétez."),
  ...teach2("住我家","zhù wǒ jiā","loger chez moi"),
  N("Dites : « Toute ma famille est à Pékin, dimanche ma sœur sera aussi libre, elle peut aller vous chercher à l'aéroport, et vous pouvez aussi loger chez moi. »"),
  TH(),
  C("我家人都在北京，星期天我姐姐也有时间，她可以去机场接你们，你们也可以住我家。","Wǒ jiārén dōu zài Běijīng, Xīngqītiān wǒ jiějie yě yǒu shíjiān, tā kěyǐ qù jīchǎng jiē nǐmen, nǐmen yě kěyǐ zhù wǒ jiā.","Toute ma famille est à Pékin, dimanche ma sœur sera aussi libre, elle peut aller vous chercher à l'aéroport, et vous pouvez aussi loger chez moi.",0.5),
  C("我家人都在北京，星期天我姐姐也有时间，她可以去机场接你们，你们也可以住我家。","Wǒ jiārén dōu zài Běijīng, Xīngqītiān wǒ jiějie yě yǒu shíjiān, tā kěyǐ qù jīchǎng jiē nǐmen, nǐmen yě kěyǐ zhù wǒ jiā.","Toute ma famille est à Pékin, dimanche ma sœur sera aussi libre, elle peut aller vous chercher à l'aéroport, et vous pouvez aussi loger chez moi.",0.55), HOLD(),

  N("« Tôt » se dit [[早|zǎo]] — vous connaissez déjà [[早上|zǎoshang]] et [[早饭|zǎofàn]]. Demandez : « Nous arrivons à l'aéroport de Daxing à 8 h dimanche matin, c'est trop tôt ? »"),
  TH(),
  C("我们星期日早上八点到大兴机场，早不早？","Wǒmen Xīngqīrì zǎoshang bā diǎn dào Dàxīng Jīchǎng, zǎo bu zǎo?","Nous arrivons à l'aéroport de Daxing à 8 h dimanche matin, c'est trop tôt ?",0.55),
  C("我们星期日早上八点到大兴机场，早不早？","Wǒmen Xīngqīrì zǎoshang bā diǎn dào Dàxīng Jīchǎng, zǎo bu zǎo?","Nous arrivons à l'aéroport de Daxing à 8 h dimanche matin, c'est trop tôt ?",0.6), HOLD(),

  N("Répondez : « Pas trop tôt. »"),
  TH(),
  C("不早。","Bù zǎo.","Pas trop tôt.",0.6), HOLD(),

  N("Enfin, [[那|nà]] prend ici un nouveau sens : « alors », « dans ce cas » — en plus de « celui-là » que vous connaissez. Dites : « Merci, professeur ! Alors, rendez-vous avec votre sœur à l'aéroport de Daxing ! »"),
  TH(),
  C("谢谢老师！那我们和您姐姐在大兴机场见！","Xièxie lǎoshī! Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!","Merci, professeur ! Alors, rendez-vous avec votre sœur à l'aéroport de Daxing !",0.5),
  C("谢谢老师！那我们和您姐姐在大兴机场见！","Xièxie lǎoshī! Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!","Merci, professeur ! Alors, rendez-vous avec votre sœur à l'aéroport de Daxing !",0.55), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début, une dernière fois. Demandez : « Combien d'heures met votre avion pour arriver à Pékin ? »"),
  TH(),
  C("你们的飞机到北京要几个小时？","Nǐmen de fēijī dào Běijīng yào jǐ ge xiǎoshí?","Combien d'heures met votre avion pour arriver à Pékin ?",0.55),
  N("Répondez : « Neuf heures. »"),
  TH(),
  C("九个小时。","Jiǔ ge xiǎoshí.","Neuf heures.",0.6),
  N("On vous dit : « Toute ma famille est à Pékin, ma sœur peut aller vous chercher à l'aéroport, et vous pouvez loger chez moi. » Demandez : « Nous arrivons à 8 h dimanche matin, c'est trop tôt ? »"),
  TH(),
  C("我们星期日早上八点到大兴机场，早不早？","Wǒmen Xīngqīrì zǎoshang bā diǎn dào Dàxīng Jīchǎng, zǎo bu zǎo?","Nous arrivons à l'aéroport de Daxing à 8 h dimanche matin, c'est trop tôt ?",0.55),
  N("On vous répond : « Pas trop tôt. » Concluez : « Merci, professeur ! Alors, rendez-vous avec votre sœur à l'aéroport de Daxing ! »"),
  TH(),
  C("谢谢老师！那我们和您姐姐在大兴机场见！","Xièxie lǎoshī! Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!","Merci, professeur ! Alors, rendez-vous avec votre sœur à l'aéroport de Daxing !",0.55), HOLD(),

  // Révision finale de la leçon 15 ET de tout le cours HSK 1
  N("Révision finale de la leçon 15 — et de tout le cours HSK 1 ! Dites : quel plat aimez-vous manger ?"),
  TH(),
  C("你们爱吃哪个菜？","Nǐmen ài chī nǎge cài?","Quel plat aimez-vous manger ?",0.6),
  N("Dites : l'an dernier, je suis allé à Xi'an."),
  TH(),
  C("去年我去了西安。","Qùnián wǒ qùle Xī'ān.","L'an dernier, je suis allé à Xi'an.",0.6),
  N("Demandez : combien d'heures ça prend ?"),
  TH(),
  C("要几个小时？","Yào jǐ ge xiǎoshí?","Combien d'heures ça prend ?",0.6),
  N("Et pour finir, dites : rendez-vous à l'aéroport de Daxing !"),
  TH(),
  C("大兴机场见！","Dàxīng Jīchǎng jiàn!","Rendez-vous à l'aéroport de Daxing !",0.6),
  N("Félicitations, magnifique travail ! Vous venez de terminer les quinze leçons du HSK niveau 1. Vous savez vous présenter, parler de votre famille, dire l'heure et les dates, faire des achats, décrire la météo, raconter vos actions passées, et organiser un voyage. Continuez à réécouter ces leçons régulièrement — c'est la répétition espacée qui ancre tout durablement. Vous avez fait un travail formidable. À bientôt, et 再见！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"D'après 新HSK教程1 学练手册 · Leçon 15",
    build(){ return [
N("Pour finir ce chapitre, un dernier petit exercice de compréhension tiré du manuel officiel «新HSK教程1 学练手册». Écoutez chaque phrase, réfléchissez à la question posée, puis répondez à voix haute avant la correction."),

  N("Première question. Un mot manque dans cette phrase : « Cette année, nous voulons tous aller (   ). »"),
  TH(),
  N("Les trois choix étaient : A la télévision, B Pékin, C le prénom. Le bon choix était Pékin."),
  C("今年我们都想去北京。","Jīnnián wǒmen dōu xiǎng qù Běijīng.","Cette année, nous voulons tous aller à Pékin.",0.55), HOLD(),

  N("Deuxième question. Écoutez bien."),
  C("明天星期天，儿子想去看一个电影。","Míngtiān Xīngqītiān, érzi xiǎng qù kàn yí ge diànyǐng.","Demain c'est dimanche, le fils veut aller voir un film.",0.5),
  N("Question : que veut faire le fils demain ?"),
  TH(),
  N("Les trois choix étaient : A acheter un ordinateur, B passer un appel, C voir un film."),
  C("看电影","kàn diànyǐng","voir un film",0.6), HOLD(),

  N("Bravo, dernier exercice terminé ! Vous avez fini tout le HSK niveau 1, avec en plus un aperçu du style d'examen officiel. Félicitations !"),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  ]
});
