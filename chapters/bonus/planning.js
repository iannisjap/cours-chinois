/* ============================================================
   Chapitre Bonus 2 · 谈日程安排 — Dates et planning
   D'après « 谈日程安排 cours planning » (话题一 谈日期 / 话题二 谈日程).
   Contenu uniquement : le moteur (helpers N, C, P, HOLD, TH,
   teach, drill et registerChapter) est défini dans
   engine/player.js, chargé AVANT ce fichier.

   Chapitre AUTONOME : tout le vocabulaire du PDF de référence est
   enseigné ici depuis la base, rien n'est supposé acquis. On reprend
   les jours de la semaine, les dates, les années, puis les
   anniversaires, les fêtes, un mariage et l'emploi du temps.
   ============================================================ */
registerChapter({
  group: "bonus",
  id: "02-planning",
  badge: "★2",
  star: true,
  hanzi: "谈日程",
  title: "Bonus 2 · Dates et planning",
  desc: "Jours, dates, années, anniversaires, fêtes, mariage et planning — 8 leçons",
  intro: "Huit leçons dans l'esprit Pimsleur, sur les dates et l'organisation du temps. On reprend tout depuis la base — les jours, les mois, les années — sans rien supposer connu. Fais les leçons dans l'ordre : chacune révise les précédentes. La leçon s'arrête quand c'est à toi de parler (désactivable avec « Mode continu »).",
  lessons: [

  /* ============================================================
     LEÇON 1 — Les jours de la semaine
     ============================================================ */
  { num:1, hanzi:"星期几", title:"Les jours de la semaine", desc:"星期 · 星期一…星期六 · 星期天 · 今天/昨天/明天",
    build(){ return [
N("Bienvenue dans ce chapitre bonus sur les dates et le planning. On va tout reprendre depuis la base, sans rien supposer connu. Aujourd'hui : les jours de la semaine, et les mots hier, aujourd'hui, demain. Écoutez d'abord la petite conversation que vous saurez tenir à la fin."),
  C("今天星期几？","Jīntiān xīngqī jǐ?","On est quel jour aujourd'hui ?",0.4),
  P(2,"…"),
  C("今天星期三，明天星期四。","Jīntiān xīngqīsān, míngtiān xīngqīsì.","Aujourd'hui mercredi, demain jeudi.",0.4),
  N("Apprenons les mots un par un."),

  // ---------- 星期 + jours ----------
  N("« La semaine » se dit [[星期|xīngqī]]. Écoutez et répétez."),
  ...teach("星期","xīngqī","la semaine"),
  N("Pour les jours, c'est très simple : on prend [[星期|xīngqī]] et on ajoute un chiffre. Lundi, le jour numéro un, se dit [[星期一|xīngqīyī]] — « semaine-un »."),
  ...teach("星期一","xīngqīyī","lundi"),
  N("Mardi, « semaine-deux » : [[星期二|xīngqī'èr]]."),
  ...teach("星期二","xīngqī'èr","mardi"),
  N("Mercredi : [[星期三|xīngqīsān]]."),
  ...teach("星期三","xīngqīsān","mercredi"),
  N("Jeudi : [[星期四|xīngqīsì]]."),
  ...teach("星期四","xīngqīsì","jeudi"),
  N("Vendredi : [[星期五|xīngqīwǔ]]."),
  ...teach("星期五","xīngqīwǔ","vendredi"),
  N("Samedi, « semaine-six » : [[星期六|xīngqīliù]]."),
  ...teach("星期六","xīngqīliù","samedi"),
  N("Mais dimanche est spécial : on ne dit pas « semaine-sept ». On dit [[星期日|xīngqīrì]], ou, plus courant à l'oral, [[星期天|xīngqītiān]]."),
  ...teach("星期天","xīngqītiān","dimanche"),
  N("Pour demander quel jour on est, on remplace le chiffre par [[几|jǐ]], « combien, quel » : [[星期几|xīngqī jǐ]], mot à mot « semaine-quel »."),
  ...teach("星期几","xīngqī jǐ","quel jour de la semaine"),

  // ---------- 今天 / 昨天 / 明天 ----------
  N("Trois mots de base pour se repérer. « Aujourd'hui » se dit [[今天|jīntiān]]."),
  ...teach("今天","jīntiān","aujourd'hui"),
  N("« Hier » se dit [[昨天|zuótiān]]."),
  ...teach("昨天","zuótiān","hier"),
  N("« Demain » se dit [[明天|míngtiān]]."),
  ...teach("明天","míngtiān","demain"),

  // ---------- Drills ----------
  ...drill("Demandez : on est quel jour aujourd'hui ?","今天星期几？","Jīntiān xīngqī jǐ?","On est quel jour aujourd'hui ?"),
  N("Répondez : aujourd'hui, c'est mercredi. Remarquez : pas de verbe « être », on dit directement « aujourd'hui semaine-trois »."),
  TH(),
  C("今天星期三。","Jīntiān xīngqīsān.","Aujourd'hui, c'est mercredi.",0.6), HOLD(),
  ...drill("Demandez : demain, c'est quel jour ?","明天星期几？","Míngtiān xīngqī jǐ?","Demain, c'est quel jour ?"),
  N("Répondez : demain, c'est jeudi."),
  TH(),
  C("明天星期四。","Míngtiān xīngqīsì.","Demain, c'est jeudi.",0.6), HOLD(),
  N("Et hier, quel jour était-ce ? Dites : hier, c'était mardi."),
  TH(),
  C("昨天星期二。","Zuótiān xīngqī'èr.","Hier, c'était mardi.",0.6), HOLD(),

  // ---------- Mini-conversation ----------
  N("Mini-conversation. On vous demande :"),
  C("今天星期几？","Jīntiān xīngqī jǐ?","On est quel jour aujourd'hui ?",0.65),
  N("Répondez : aujourd'hui mercredi, demain jeudi."),
  TH(),
  C("今天星期三，明天星期四。","Jīntiān xīngqīsān, míngtiān xīngqīsì.","Aujourd'hui mercredi, demain jeudi.",0.6), HOLD(),

  // ---------- Révision finale ----------
  N("Révision finale. Dites : lundi."),
  TH(),
  C("星期一","xīngqīyī","lundi",0.65),
  N("Samedi."),
  TH(),
  C("星期六","xīngqīliù","samedi",0.65),
  N("Dimanche."),
  TH(),
  C("星期天","xīngqītiān","dimanche",0.65),
  N("On est quel jour aujourd'hui ?"),
  TH(),
  C("今天星期几？","Jīntiān xīngqī jǐ?","On est quel jour aujourd'hui ?",0.65),
  N("Demain."),
  TH(),
  C("明天","míngtiān","demain",0.65),
  N("Excellent ! Vous savez nommer tous les jours de la semaine. Fin de la leçon 1. À demain pour la leçon 2 : dire la date complète."),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  /* ============================================================
     LEÇON 2 — La date : mois, jour, année
     ============================================================ */
  { num:2, hanzi:"几月几号", title:"Dire la date et l'année", desc:"年 · 月 · 日/号 · 几月几号 · 今年/去年/明年 · 哪一年",
    build(){ return [
N("Bienvenue dans la leçon 2. Aujourd'hui : dire la date complète — le mois, le jour, et l'année. Révision d'abord. Demandez : on est quel jour aujourd'hui ?"),
  TH(),
  C("今天星期几？","Jīntiān xīngqī jǐ?","On est quel jour aujourd'hui ?",0.65),
  N("Dites : aujourd'hui, c'est mercredi."),
  TH(),
  C("今天星期三。","Jīntiān xīngqīsān.","Aujourd'hui, c'est mercredi.",0.65), HOLD(),

  // ---------- Dialogue cible ----------
  N("Écoutez la conversation d'aujourd'hui."),
  C("今天几月几号？","Jīntiān jǐ yuè jǐ hào?","Quelle est la date aujourd'hui ?",0.4),
  P(2,"…"),
  C("今天九月二十四号。","Jīntiān jiǔ yuè èrshísì hào.","Aujourd'hui, c'est le 24 septembre.",0.4),
  P(2,"…"),
  C("今年是哪一年？","Jīnnián shì nǎ yì nián?","On est en quelle année ?",0.4),
  P(2,"…"),
  C("今年是二零一一年。","Jīnnián shì èr líng yī yī nián.","On est en 2011.",0.4),
  N("À la fin de cette leçon, cette conversation sera à vous."),

  // ---------- 月 / 号 / 日 ----------
  N("« Le mois » se dit [[月|yuè]]. Pour dire un mois, on met simplement le chiffre devant. Septembre, le neuvième mois, se dit [[九月|jiǔyuè]] — « neuf-mois »."),
  ...teach("九月","jiǔyuè","septembre"),
  N("« Le jour du mois », la date, se dit [[号|hào]] à l'oral. On met le chiffre devant. Le 24 se dit [[二十四号|èrshísì hào]]."),
  ...teach("二十四号","èrshísì hào","le 24 (du mois)"),
  N("À l'écrit, ou de façon plus formelle, on remplace [[号|hào]] par [[日|rì]]. Les deux veulent dire « jour du mois »."),
  ...teach("日","rì","jour (du mois, écrit/formel)"),
  N("Attention à l'ordre chinois : le mois d'abord, le jour ensuite — l'inverse du français. « Le 24 septembre » se dit donc « neuf-mois vingt-quatre » : [[九月二十四号|jiǔyuè èrshísì hào]]."),
  ...teach("九月二十四号","jiǔyuè èrshísì hào","le 24 septembre"),
  N("Pour demander la date, on utilise [[几|jǐ]] deux fois : [[几月几号|jǐ yuè jǐ hào]], « quel mois, quel jour ». Là encore, pas de verbe « être »."),
  ...drill("Demandez : quelle est la date aujourd'hui ?","今天几月几号？","Jīntiān jǐ yuè jǐ hào?","Quelle est la date aujourd'hui ?"),
  N("Répondez : aujourd'hui, c'est le 24 septembre."),
  TH(),
  C("今天九月二十四号。","Jīntiān jiǔ yuè èrshísì hào.","Aujourd'hui, c'est le 24 septembre.",0.6), HOLD(),

  // ---------- Années ----------
  N("Passons aux années. « L'année » se dit [[年|nián]]. « Cette année » se dit [[今年|jīnnián]] — avec le même [[今|jīn]] que dans [[今天|jīntiān]], aujourd'hui."),
  ...teach("今年","jīnnián","cette année"),
  N("« L'an dernier » se dit [[去年|qùnián]]."),
  ...teach("去年","qùnián","l'an dernier"),
  N("« L'an prochain » se dit [[明年|míngnián]] — avec le même [[明|míng]] que dans [[明天|míngtiān]], demain."),
  ...teach("明年","míngnián","l'an prochain"),
  N("Pour dire une année précise, on énonce les chiffres un par un, puis [[年|nián]]. 2011 se lit « deux-zéro-un-un » : [[二零一一年|èr líng yī yī nián]]."),
  ...teach("二零一一年","èr líng yī yī nián","l'année 2011"),
  N("Pour demander « c'est quelle année ? », on dit [[哪一年|nǎ yì nián]], « quelle année ». Demandez : on est en quelle année ?"),
  ...drill("Demandez : on est en quelle année ?","今年是哪一年？","Jīnnián shì nǎ yì nián?","On est en quelle année ?"),
  N("Répondez : on est en 2011."),
  TH(),
  C("今年是二零一一年。","Jīnnián shì èr líng yī yī nián.","On est en 2011.",0.6), HOLD(),

  // ---------- Mini-conversation ----------
  N("Mini-conversation. On vous demande :"),
  C("今天几月几号？","Jīntiān jǐ yuè jǐ hào?","Quelle est la date aujourd'hui ?",0.65),
  N("Répondez : aujourd'hui, c'est le 24 septembre."),
  TH(),
  C("今天九月二十四号。","Jīntiān jiǔ yuè èrshísì hào.","Aujourd'hui, c'est le 24 septembre.",0.6),
  C("今年是哪一年？","Jīnnián shì nǎ yì nián?","On est en quelle année ?",0.65),
  N("Répondez : on est en 2011."),
  TH(),
  C("今年是二零一一年。","Jīnnián shì èr líng yī yī nián.","On est en 2011.",0.6), HOLD(),

  // ---------- Révision finale ----------
  N("Révision finale. Dites : le mois."),
  TH(),
  C("月","yuè","le mois",0.65),
  N("Septembre."),
  TH(),
  C("九月","jiǔyuè","septembre",0.65),
  N("Le 24 septembre."),
  TH(),
  C("九月二十四号","jiǔyuè èrshísì hào","le 24 septembre",0.65),
  N("Cette année."),
  TH(),
  C("今年","jīnnián","cette année",0.65),
  N("L'an dernier, l'an prochain."),
  TH(),
  C("去年，明年","qùnián, míngnián","l'an dernier, l'an prochain",0.65),
  N("Excellent ! Vous savez dire une date complète. Fin de la leçon 2. Demain, on ira plus loin : avant-hier, après-demain, et les années passées et futures."),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  /* ============================================================
     LEÇON 3 — Avant-hier, après-demain, et les années
     ============================================================ */
  { num:3, hanzi:"大前天，大后天", title:"Se situer plus loin dans le temps", desc:"前天 · 后天 · 大前天 · 大后天 · 前年 · 后年 · 大前年 · 大后年",
    build(){ return [
N("Bienvenue dans la leçon 3. Vous savez dire hier, aujourd'hui, demain. Aujourd'hui, on va plus loin : avant-hier, après-demain, et jusqu'à trois jours et trois ans en avant ou en arrière. Révision d'abord. Dites : aujourd'hui, c'est le 24 septembre."),
  TH(),
  C("今天九月二十四号。","Jīntiān jiǔ yuè èrshísì hào.","Aujourd'hui, c'est le 24 septembre.",0.65),
  N("Dites : demain, c'est quel jour ?"),
  TH(),
  C("明天星期几？","Míngtiān xīngqī jǐ?","Demain, c'est quel jour ?",0.65), HOLD(),

  // ---------- Dialogue cible ----------
  N("Écoutez la conversation d'aujourd'hui."),
  C("后天你做什么？","Hòutiān nǐ zuò shénme?","Que fais-tu après-demain ?",0.4),
  P(2,"…"),
  C("后天星期六，我休息。大后天呢？","Hòutiān xīngqīliù, wǒ xiūxi. Dàhòutiān ne?","Après-demain c'est samedi, je me repose. Et dans trois jours ?",0.4),
  P(2,"…"),
  C("大后天我去北京。","Dàhòutiān wǒ qù Běijīng.","Dans trois jours, je vais à Pékin.",0.4),
  N("À la fin de cette leçon, cette conversation sera à vous."),

  // ---------- 前天 / 后天 ----------
  N("Un cran avant hier : « avant-hier », le jour qui précède hier, se dit [[前天|qiántiān]]. Le mot [[前|qián]] veut dire « avant, devant »."),
  ...teach("前天","qiántiān","avant-hier"),
  N("Un cran après demain : « après-demain », le jour qui suit demain, se dit [[后天|hòutiān]]. Le mot [[后|hòu]] veut dire « après, derrière »."),
  ...teach("后天","hòutiān","après-demain"),
  ...drill("Dites : après-demain, c'est samedi.","后天星期六。","Hòutiān xīngqīliù.","Après-demain, c'est samedi."),

  // ---------- 大前天 / 大后天 ----------
  N("Encore un cran plus loin : on ajoute [[大|dà]], « grand », devant le mot. « Il y a trois jours » se dit [[大前天|dàqiántiān]]."),
  ...teach("大前天","dàqiántiān","il y a trois jours"),
  N("Et « dans trois jours » se dit [[大后天|dàhòutiān]]."),
  ...teach("大后天","dàhòutiān","dans trois jours"),
  N("Récapitulons toute la série, du passé vers le futur : il y a trois jours, avant-hier, hier, aujourd'hui, demain, après-demain, dans trois jours."),
  C("大前天，前天，昨天，今天，明天，后天，大后天。","Dàqiántiān, qiántiān, zuótiān, jīntiān, míngtiān, hòutiān, dàhòutiān.","Il y a 3 j, avant-hier, hier, aujourd'hui, demain, après-demain, dans 3 j.",0.5), HOLD(),
  ...drill("Dites : dans trois jours, je vais à Pékin.","大后天我去北京。","Dàhòutiān wǒ qù Běijīng.","Dans trois jours, je vais à Pékin."),

  // ---------- 前年 / 后年 ----------
  N("La même logique marche pour les années. Vous savez déjà : l'an dernier [[去年|qùnián]], l'an prochain [[明年|míngnián]]. Un cran plus loin : « il y a deux ans » se dit [[前年|qiánnián]]."),
  ...teach("前年","qiánnián","il y a deux ans"),
  N("Et « dans deux ans » se dit [[后年|hòunián]]."),
  ...teach("后年","hòunián","dans deux ans"),

  // ---------- 大前年 / 大后年 ----------
  N("Et avec [[大|dà]] devant, on gagne encore un an. « Il y a trois ans » se dit [[大前年|dàqiánnián]]."),
  ...teach("大前年","dàqiánnián","il y a trois ans"),
  N("« Dans trois ans » se dit [[大后年|dàhòunián]]."),
  ...teach("大后年","dàhòunián","dans trois ans"),
  N("Souvenez-vous de « quelle année » : [[哪一年|nǎ yì nián]]. Demandez : dans trois ans, ce sera quelle année ?"),
  TH(),
  C("大后年是哪一年？","Dàhòunián shì nǎ yì nián?","Dans trois ans, ce sera quelle année ?",0.6), HOLD(),
  N("Si on est en 2011, répondez : dans trois ans, ce sera 2014."),
  TH(),
  C("大后年是二零一四年。","Dàhòunián shì èr líng yī sì nián.","Dans trois ans, ce sera 2014.",0.6), HOLD(),

  // ---------- Mini-conversation ----------
  N("Mini-conversation. On vous demande :"),
  C("后天你做什么？","Hòutiān nǐ zuò shénme?","Que fais-tu après-demain ?",0.65),
  N("Répondez : après-demain c'est samedi, je me repose."),
  TH(),
  C("后天星期六，我休息。","Hòutiān xīngqīliù, wǒ xiūxi.","Après-demain c'est samedi, je me repose.",0.6),
  C("大后天呢？","Dàhòutiān ne?","Et dans trois jours ?",0.65),
  N("Répondez : dans trois jours, je vais à Pékin."),
  TH(),
  C("大后天我去北京。","Dàhòutiān wǒ qù Běijīng.","Dans trois jours, je vais à Pékin.",0.6), HOLD(),

  // ---------- Révision finale ----------
  N("Révision finale. Dites : avant-hier."),
  TH(),
  C("前天","qiántiān","avant-hier",0.65),
  N("Après-demain."),
  TH(),
  C("后天","hòutiān","après-demain",0.65),
  N("Il y a trois jours."),
  TH(),
  C("大前天","dàqiántiān","il y a trois jours",0.65),
  N("Dans trois jours."),
  TH(),
  C("大后天","dàhòutiān","dans trois jours",0.65),
  N("Il y a deux ans."),
  TH(),
  C("前年","qiánnián","il y a deux ans",0.65),
  N("Dans deux ans."),
  TH(),
  C("后年","hòunián","dans deux ans",0.65),
  N("Excellent ! Vous savez vous situer jusqu'à trois jours et trois ans dans le passé ou le futur. Fin de la leçon 3. Demain : les anniversaires !"),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  /* ============================================================
     LEÇON 4 — Les anniversaires
     ============================================================ */
  { num:4, hanzi:"你的生日", title:"Les anniversaires et les cadeaux", desc:"生日 · 多大 · 礼物 · 蛋糕 · 想要",
    build(){ return [
N("Bienvenue dans la leçon 4. Aujourd'hui : parler des anniversaires, de l'âge et des cadeaux. Révision. Demandez : quelle est la date aujourd'hui ?"),
  TH(),
  C("今天几月几号？","Jīntiān jǐ yuè jǐ hào?","Quelle est la date aujourd'hui ?",0.65),
  N("Dites : aujourd'hui, c'est le 24 septembre."),
  TH(),
  C("今天九月二十四号。","Jīntiān jiǔ yuè èrshísì hào.","Aujourd'hui, c'est le 24 septembre.",0.65), HOLD(),

  // ---------- Dialogue cible ----------
  N("Écoutez la conversation d'aujourd'hui, entre deux camarades de classe."),
  C("你的生日是几月几号？","Nǐ de shēngrì shì jǐ yuè jǐ hào?","Ton anniversaire, c'est quel jour ?",0.4),
  P(2,"…"),
  C("我的生日是九月二十四号。","Wǒ de shēngrì shì jiǔ yuè èrshísì hào.","Mon anniversaire est le 24 septembre.",0.4),
  P(2,"…"),
  C("今年的生日你想要什么礼物？","Jīnnián de shēngrì nǐ xiǎngyào shénme lǐwù?","Pour ton anniversaire cette année, tu veux quel cadeau ?",0.4),
  P(2,"…"),
  C("我想要一个蛋糕。","Wǒ xiǎngyào yí ge dàngāo.","Je veux un gâteau.",0.4),
  N("À la fin de cette leçon, cette conversation sera à vous."),

  // ---------- 生日 ----------
  N("« L'anniversaire », le jour de naissance, se dit [[生日|shēngrì]] — mot à mot « naître-jour ». Écoutez et répétez."),
  ...teach("生日","shēngrì","l'anniversaire"),
  N("Vous savez déjà demander une date avec [[几月几号|jǐ yuè jǐ hào]]. Demandez donc : ton anniversaire, c'est quel jour ?"),
  TH(),
  C("你的生日是几月几号？","Nǐ de shēngrì shì jǐ yuè jǐ hào?","Ton anniversaire, c'est quel jour ?",0.6), HOLD(),
  N("Répondez avec votre vraie date, ou avec l'exemple : mon anniversaire est le 24 septembre. Ici, on a bien un verbe « être », [[是|shì]], parce qu'on relie deux noms."),
  TH(),
  C("我的生日是九月二十四号。","Wǒ de shēngrì shì jiǔ yuè èrshísì hào.","Mon anniversaire est le 24 septembre.",0.6), HOLD(),

  // ---------- 多大 ----------
  N("Pour demander l'âge de quelqu'un, on dit [[多大|duō dà]] — mot à mot « combien grand ». Demandez : quel âge a-t-il cette année ?"),
  ...teach("多大","duō dà","quel âge"),
  ...drill("Demandez : quel âge a-t-il cette année ?","他今年多大？","Tā jīnnián duō dà?","Quel âge a-t-il cette année ?"),

  // ---------- 礼物 / 蛋糕 / 想要 ----------
  N("« Un cadeau », un présent, se dit [[礼物|lǐwù]]."),
  ...teach("礼物","lǐwù","un cadeau"),
  N("« Un gâteau » se dit [[蛋糕|dàngāo]]."),
  ...teach("蛋糕","dàngāo","un gâteau"),
  N("Pour dire qu'on veut un objet précis, on utilise [[想要|xiǎngyào]] : « vouloir avoir ». Écoutez : je veux un gâteau. N'oubliez pas le petit mot [[个|ge]] devant l'objet."),
  ...teach("我想要一个蛋糕。","Wǒ xiǎngyào yí ge dàngāo.","Je veux un gâteau."),
  N("Pour demander ce que quelqu'un veut, on remplace l'objet par [[什么|shénme]], « quoi ». Demandez : pour ton anniversaire cette année, tu veux quel cadeau ?"),
  TH(),
  C("今年的生日你想要什么礼物？","Jīnnián de shēngrì nǐ xiǎngyào shénme lǐwù?","Pour ton anniversaire cette année, tu veux quel cadeau ?",0.55), HOLD(),
  ...drill("Répondez : je veux un cadeau.","我想要一个礼物。","Wǒ xiǎngyào yí ge lǐwù.","Je veux un cadeau."),

  // ---------- Enquête façon Pimsleur ----------
  N("Imaginez que vous faites une petite enquête sur les anniversaires de vos camarades. Demandez à quelqu'un : ton anniversaire, c'est quel jour ?"),
  TH(),
  C("你的生日是几月几号？","Nǐ de shēngrì shì jǐ yuè jǐ hào?","Ton anniversaire, c'est quel jour ?",0.6),
  N("On vous répond : mon anniversaire est le 8 mars."),
  C("我的生日是三月八号。","Wǒ de shēngrì shì sān yuè bā hào.","Mon anniversaire est le 8 mars.",0.6),
  N("Demandez maintenant ce qu'il ou elle veut comme cadeau cette année."),
  TH(),
  C("今年的生日你想要什么礼物？","Jīnnián de shēngrì nǐ xiǎngyào shénme lǐwù?","Cette année, tu veux quel cadeau ?",0.6), HOLD(),

  // ---------- Mini-conversation ----------
  N("Mini-conversation. Un ami vous demande :"),
  C("你的生日是几月几号？","Nǐ de shēngrì shì jǐ yuè jǐ hào?","Ton anniversaire, c'est quel jour ?",0.65),
  N("Répondez avec votre date d'anniversaire — ou avec l'exemple : le 24 septembre."),
  TH(),
  C("我的生日是九月二十四号。","Wǒ de shēngrì shì jiǔ yuè èrshísì hào.","Mon anniversaire est le 24 septembre.",0.6),
  C("今年的生日你想要什么礼物？","Jīnnián de shēngrì nǐ xiǎngyào shénme lǐwù?","Cette année, tu veux quel cadeau ?",0.65),
  N("Répondez : je veux un gâteau."),
  TH(),
  C("我想要一个蛋糕。","Wǒ xiǎngyào yí ge dàngāo.","Je veux un gâteau.",0.65), HOLD(),

  // ---------- Révision finale ----------
  N("Révision finale. Dites : l'anniversaire."),
  TH(),
  C("生日","shēngrì","l'anniversaire",0.65),
  N("Ton anniversaire, c'est quel jour ?"),
  TH(),
  C("你的生日是几月几号？","Nǐ de shēngrì shì jǐ yuè jǐ hào?","Ton anniversaire, c'est quel jour ?",0.65),
  N("Quel âge a-t-il cette année ?"),
  TH(),
  C("他今年多大？","Tā jīnnián duō dà?","Quel âge a-t-il cette année ?",0.65),
  N("Un cadeau."),
  TH(),
  C("礼物","lǐwù","un cadeau",0.65),
  N("Je veux un gâteau."),
  TH(),
  C("我想要一个蛋糕。","Wǒ xiǎngyào yí ge dàngāo.","Je veux un gâteau.",0.65),
  N("Parfait. Fin de la leçon 4. Demain, la leçon 5 : Noël, le Nouvel An et offrir des cadeaux !"),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  /* ============================================================
     LEÇON 5 — Fêtes et cadeaux
     ============================================================ */
  { num:5, hanzi:"圣诞晚会", title:"Noël, le Nouvel An et offrir", desc:"圣诞节 · 新年 · 晚会 · 参加 · 送 · 到时候",
    build(){ return [
N("Bienvenue dans la leçon 5. Aujourd'hui : les fêtes, les soirées, et offrir un cadeau à quelqu'un. Révision. Dites : je veux un gâteau."),
  TH(),
  C("我想要一个蛋糕。","Wǒ xiǎngyào yí ge dàngāo.","Je veux un gâteau.",0.65),
  N("Demandez : ton anniversaire, c'est quel jour ?"),
  TH(),
  C("你的生日是几月几号？","Nǐ de shēngrì shì jǐ yuè jǐ hào?","Ton anniversaire, c'est quel jour ?",0.65), HOLD(),

  // ---------- Dialogue cible ----------
  N("Écoutez la conversation d'aujourd'hui."),
  C("圣诞节你想送爸爸什么礼物？","Shèngdànjié nǐ xiǎng sòng bàba shénme lǐwù?","Pour Noël, tu veux offrir quoi à ton papa ?",0.4),
  P(2,"…"),
  C("我想送他一个蛋糕。你参加圣诞晚会吗？","Wǒ xiǎng sòng tā yí ge dàngāo. Nǐ cānjiā Shèngdàn wǎnhuì ma?","Je veux lui offrir un gâteau. Tu vas à la soirée de Noël ?",0.4),
  P(2,"…"),
  C("参加！新年晚会我也参加。","Cānjiā! Xīnnián wǎnhuì wǒ yě cānjiā.","J'y vais ! La soirée du Nouvel An aussi, j'y vais.",0.4),
  N("À la fin de cette leçon, cette conversation sera à vous."),

  // ---------- 圣诞节 / 新年 ----------
  N("« Noël » se dit [[圣诞节|Shèngdànjié]]. Le dernier mot, [[节|jié]], veut dire « fête, jour férié ». Écoutez et répétez."),
  ...teach("圣诞节","Shèngdànjié","Noël"),
  N("« Le Nouvel An » se dit [[新年|xīnnián]] — mot à mot « nouvelle-année », avec le [[年|nián]] que vous connaissez."),
  ...teach("新年","xīnnián","le Nouvel An"),

  // ---------- 晚会 / 参加 ----------
  N("« Une soirée », « une fête » où l'on se réunit, se dit [[晚会|wǎnhuì]]. « La soirée de Noël » se dit alors [[圣诞晚会|Shèngdàn wǎnhuì]]."),
  ...teach("晚会","wǎnhuì","une soirée, une fête"),
  N("« Participer à », « aller à » un événement, se dit [[参加|cānjiā]]. Demandez : tu vas à la soirée de Noël ?"),
  ...teach("参加","cānjiā","participer à, aller à"),
  ...drill("Demandez : tu vas à la soirée de Noël ?","你参加圣诞晚会吗？","Nǐ cānjiā Shèngdàn wǎnhuì ma?","Tu vas à la soirée de Noël ?"),
  N("Pour répondre « oui, j'y vais », on répète simplement le verbe seul : [[参加|cānjiā]] !"),
  TH(),
  C("参加！","Cānjiā!","J'y vais !",0.65), HOLD(),

  // ---------- 送 ----------
  N("« Offrir », donner un cadeau à quelqu'un, se dit [[送|sòng]]. La structure est : sujet, puis [[送|sòng]], puis la personne, puis l'objet. Écoutez : j'offre un cadeau à papa."),
  ...teach("我送爸爸一个礼物。","Wǒ sòng bàba yí ge lǐwù.","J'offre un cadeau à papa."),
  N("On peut offrir à différentes personnes : à maman, [[妈妈|māma]] ; au professeur, [[老师|lǎoshī]] ; à son petit ami, [[男朋友|nánpéngyou]] ; à sa petite amie, [[女朋友|nǚpéngyou]]."),
  ...drill("Dites : pour le Nouvel An, je veux offrir un gâteau à maman.","新年我想送妈妈一个蛋糕。","Xīnnián wǒ xiǎng sòng māma yí ge dàngāo.","Pour le Nouvel An, je veux offrir un gâteau à maman."),
  N("Pour demander « quoi », on met [[什么|shénme]] devant l'objet. Demandez : pour Noël, tu veux offrir quoi à ton papa ?"),
  TH(),
  C("圣诞节你想送爸爸什么礼物？","Shèngdànjié nǐ xiǎng sòng bàba shénme lǐwù?","Pour Noël, tu veux offrir quoi à ton papa ?",0.55), HOLD(),

  // ---------- 到时候 ----------
  N("Un mot utile pour parler du futur : [[到时候|dào shíhou]], « le moment venu », « à ce moment-là ». Écoutez : le moment venu, je veux offrir un cadeau à papa."),
  ...teach("到时候我想送爸爸一个礼物。","Dào shíhou wǒ xiǎng sòng bàba yí ge lǐwù.","Le moment venu, je veux offrir un cadeau à papa."),

  // ---------- Mini-conversation ----------
  N("Mini-conversation. On vous demande :"),
  C("圣诞节你想送爸爸什么礼物？","Shèngdànjié nǐ xiǎng sòng bàba shénme lǐwù?","Pour Noël, tu veux offrir quoi à ton papa ?",0.65),
  N("Répondez : je veux lui offrir un gâteau."),
  TH(),
  C("我想送他一个蛋糕。","Wǒ xiǎng sòng tā yí ge dàngāo.","Je veux lui offrir un gâteau.",0.6),
  C("你参加圣诞晚会吗？","Nǐ cānjiā Shèngdàn wǎnhuì ma?","Tu vas à la soirée de Noël ?",0.65),
  N("Répondez : j'y vais ! Et la soirée du Nouvel An aussi, j'y vais."),
  TH(),
  C("参加！新年晚会我也参加。","Cānjiā! Xīnnián wǎnhuì wǒ yě cānjiā.","J'y vais ! La soirée du Nouvel An aussi, j'y vais.",0.6), HOLD(),

  // ---------- Révision finale ----------
  N("Révision finale. Dites : Noël."),
  TH(),
  C("圣诞节","Shèngdànjié","Noël",0.65),
  N("Le Nouvel An."),
  TH(),
  C("新年","xīnnián","le Nouvel An",0.65),
  N("Tu vas à la soirée de Noël ?"),
  TH(),
  C("你参加圣诞晚会吗？","Nǐ cānjiā Shèngdàn wǎnhuì ma?","Tu vas à la soirée de Noël ?",0.65),
  N("J'offre un cadeau à papa."),
  TH(),
  C("我送爸爸一个礼物。","Wǒ sòng bàba yí ge lǐwù.","J'offre un cadeau à papa.",0.65),
  N("Excellent ! Fin de la leçon 5. Demain, la leçon 6 : un mariage !"),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  /* ============================================================
     LEÇON 6 — Un mariage
     ============================================================ */
  { num:6, hanzi:"参加婚礼", title:"Un mariage", desc:"结婚 · 婚礼 · 红包 · 时候 · 什么时候 · 事 · 问题",
    build(){ return [
N("Bienvenue dans la leçon 6. Aujourd'hui : parler d'un mariage, et demander « quand ». Révision. Dites : j'offre un cadeau à papa."),
  TH(),
  C("我送爸爸一个礼物。","Wǒ sòng bàba yí ge lǐwù.","J'offre un cadeau à papa.",0.65),
  N("Demandez : tu vas à la soirée de Noël ?"),
  TH(),
  C("你参加圣诞晚会吗？","Nǐ cānjiā Shèngdàn wǎnhuì ma?","Tu vas à la soirée de Noël ?",0.65), HOLD(),

  // ---------- Dialogue cible ----------
  N("Écoutez la conversation d'aujourd'hui, une amie vous annonce une nouvelle."),
  C("我朋友要结婚了！","Wǒ péngyou yào jié hūn le!","Mon amie va se marier !",0.4),
  P(2,"…"),
  C("婚礼是什么时候？","Hūnlǐ shì shénme shíhou?","Le mariage, c'est quand ?",0.4),
  P(2,"…"),
  C("大后天。你参加吗？","Dàhòutiān. Nǐ cānjiā ma?","Dans trois jours. Tu y vas ?",0.4),
  P(2,"…"),
  C("参加！我送一个红包。","Cānjiā! Wǒ sòng yí ge hóngbāo.","J'y vais ! J'offre une enveloppe rouge.",0.4),
  N("À la fin de cette leçon, cette conversation sera à vous."),

  // ---------- 结婚 / 婚礼 ----------
  N("« Se marier » se dit [[结婚|jié hūn]] — mot à mot « nouer le mariage ». Écoutez et répétez."),
  ...teach("结婚","jié hūn","se marier"),
  N("« Le mariage », la cérémonie, se dit [[婚礼|hūnlǐ]]."),
  ...teach("婚礼","hūnlǐ","le mariage (la cérémonie)"),
  N("Annoncez une nouvelle : mon amie va se marier ! Le [[要|yào]] au début et le [[了|le]] à la fin signalent ensemble un événement qui va bientôt arriver."),
  TH(),
  C("我朋友要结婚了！","Wǒ péngyou yào jié hūn le!","Mon amie va se marier !",0.6), HOLD(),

  // ---------- 时候 / 什么时候 ----------
  N("« Le moment » se dit [[时候|shíhou]]. Pour demander « quand », on dit [[什么时候|shénme shíhou]] — mot à mot « quel moment »."),
  ...teach("什么时候","shénme shíhou","quand"),
  ...drill("Demandez : le mariage, c'est quand ?","婚礼是什么时候？","Hūnlǐ shì shénme shíhou?","Le mariage, c'est quand ?"),
  N("Répondez avec ce que vous avez appris : dans trois jours."),
  TH(),
  C("大后天。","Dàhòutiān.","Dans trois jours.",0.65), HOLD(),

  // ---------- 红包 ----------
  N("Un mot de culture chinoise : [[红包|hóngbāo]], « l'enveloppe rouge » — une enveloppe contenant de l'argent, qu'on offre pour un mariage, une naissance ou le Nouvel An. On utilise le verbe [[送|sòng]] : offrir."),
  ...teach("红包","hóngbāo","l'enveloppe rouge (argent porte-bonheur)"),
  ...drill("Dites : j'offre une enveloppe rouge.","我送一个红包。","Wǒ sòng yí ge hóngbāo.","J'offre une enveloppe rouge."),

  // ---------- 事 / 问题 ----------
  N("Deux petits mots très utiles. « Une affaire », quelque chose à faire, se dit [[事|shì]]. Écoutez : demain, j'ai quelque chose à faire."),
  ...teach("明天我有事。","Míngtiān wǒ yǒu shì.","Demain, j'ai quelque chose à faire."),
  N("« Une question », ou « un problème », se dit [[问题|wèntí]]. Pour dire « pas de problème », on dit [[没问题|méi wèntí]]."),
  ...teach("没问题！","Méi wèntí!","Pas de problème !"),

  // ---------- Mini-conversation ----------
  N("Mini-conversation. Une amie vous annonce :"),
  C("我朋友要结婚了！","Wǒ péngyou yào jié hūn le!","Mon amie va se marier !",0.65),
  N("Demandez : le mariage, c'est quand ?"),
  TH(),
  C("婚礼是什么时候？","Hūnlǐ shì shénme shíhou?","Le mariage, c'est quand ?",0.6),
  C("大后天。你参加吗？","Dàhòutiān. Nǐ cānjiā ma?","Dans trois jours. Tu y vas ?",0.65),
  N("Répondez : j'y vais ! J'offre une enveloppe rouge."),
  TH(),
  C("参加！我送一个红包。","Cānjiā! Wǒ sòng yí ge hóngbāo.","J'y vais ! J'offre une enveloppe rouge.",0.6), HOLD(),

  // ---------- Révision finale ----------
  N("Révision finale. Dites : se marier."),
  TH(),
  C("结婚","jié hūn","se marier",0.65),
  N("Le mariage, c'est quand ?"),
  TH(),
  C("婚礼是什么时候？","Hūnlǐ shì shénme shíhou?","Le mariage, c'est quand ?",0.65),
  N("Une enveloppe rouge."),
  TH(),
  C("红包","hóngbāo","une enveloppe rouge",0.65),
  N("Demain, j'ai quelque chose à faire."),
  TH(),
  C("明天我有事。","Míngtiān wǒ yǒu shì.","Demain, j'ai quelque chose à faire.",0.65),
  N("Pas de problème !"),
  TH(),
  C("没问题！","Méi wèntí!","Pas de problème !",0.65),
  N("Excellent ! Fin de la leçon 6. Demain, la leçon 7 : organiser sa semaine !"),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  /* ============================================================
     LEÇON 7 — L'emploi du temps de la semaine
     ============================================================ */
  { num:7, hanzi:"下周的安排", title:"L'emploi du temps de la semaine", desc:"下 · 周 · 下周 · 下周一 · 安排 · 日程",
    build(){ return [
N("Bienvenue dans la leçon 7. Aujourd'hui : parler de son emploi du temps pour la semaine prochaine. Révision. Demandez : le mariage, c'est quand ?"),
  TH(),
  C("婚礼是什么时候？","Hūnlǐ shì shénme shíhou?","Le mariage, c'est quand ?",0.65),
  N("Dites : dans trois jours."),
  TH(),
  C("大后天。","Dàhòutiān.","Dans trois jours.",0.65), HOLD(),

  // ---------- Dialogue cible ----------
  N("Écoutez la conversation d'aujourd'hui."),
  C("你下周有什么安排？","Nǐ xiàzhōu yǒu shénme ānpái?","Qu'est-ce que tu as de prévu la semaine prochaine ?",0.4),
  P(2,"…"),
  C("下周一我上课，下周三我有事，下周六我参加一个婚礼。","Xiàzhōuyī wǒ shàngkè, xiàzhōusān wǒ yǒu shì, xiàzhōuliù wǒ cānjiā yí ge hūnlǐ.","Lundi j'ai cours, mercredi j'ai quelque chose, samedi je vais à un mariage.",0.4),
  N("À la fin de cette leçon, cette conversation sera à vous."),

  // ---------- 周 / 下 / 下周 ----------
  N("Il existe un autre mot pour « semaine », synonyme de [[星期|xīngqī]] : c'est [[周|zhōu]]. On l'emploie souvent pour parler du planning."),
  ...teach("周","zhōu","la semaine"),
  N("Le mot [[下|xià]] veut dire « suivant, prochain ». « La semaine prochaine » se dit donc [[下周|xiàzhōu]]."),
  ...teach("下周","xiàzhōu","la semaine prochaine"),
  ...drill("Dites : la semaine prochaine.","下周","xiàzhōu","la semaine prochaine"),

  // ---------- 安排 ----------
  N("« Ce qui est prévu », « le programme », se dit [[安排|ānpái]]. Demandez : qu'est-ce que tu as de prévu la semaine prochaine ?"),
  ...teach("安排","ānpái","ce qui est prévu, le programme"),
  TH(),
  C("你下周有什么安排？","Nǐ xiàzhōu yǒu shénme ānpái?","Qu'est-ce que tu as de prévu la semaine prochaine ?",0.6), HOLD(),

  // ---------- 下周一 etc. ----------
  N("Pour dire un jour précis de la semaine prochaine, on place [[下周|xiàzhōu]] devant le jour. « Lundi prochain » se dit [[下周一|xiàzhōuyī]]."),
  ...teach("下周一","xiàzhōuyī","lundi prochain"),
  N("« Mercredi prochain » : [[下周三|xiàzhōusān]]. « Samedi prochain » : [[下周六|xiàzhōuliù]]."),
  ...teach("下周三","xiàzhōusān","mercredi prochain"),
  N("Répondez à la question : lundi j'ai cours, mercredi j'ai quelque chose, samedi je vais à un mariage."),
  TH(),
  C("下周一我上课，下周三我有事，下周六我参加一个婚礼。","Xiàzhōuyī wǒ shàngkè, xiàzhōusān wǒ yǒu shì, xiàzhōuliù wǒ cānjiā yí ge hūnlǐ.","Lundi j'ai cours, mercredi j'ai quelque chose, samedi un mariage.",0.5), HOLD(),

  // ---------- 日程 ----------
  N("Enfin, le mot du titre de ce chapitre : [[日程|rìchéng]], « l'emploi du temps », « l'agenda ». Faire son emploi du temps de la semaine prochaine, et le présenter, c'est exactement l'objectif de ce chapitre."),
  ...teach("日程","rìchéng","l'emploi du temps"),

  // ---------- Mini-conversation ----------
  N("Mini-conversation. On vous demande :"),
  C("你下周有什么安排？","Nǐ xiàzhōu yǒu shénme ānpái?","Qu'est-ce que tu as de prévu la semaine prochaine ?",0.65),
  N("Présentez votre semaine avec vos propres activités, ou reprenez l'exemple."),
  TH(),
  C("下周一我上课，下周三我有事，下周六我参加一个婚礼。","Xiàzhōuyī wǒ shàngkè, xiàzhōusān wǒ yǒu shì, xiàzhōuliù wǒ cānjiā yí ge hūnlǐ.","Lundi j'ai cours, mercredi j'ai quelque chose, samedi un mariage.",0.6), HOLD(),

  // ---------- Révision finale ----------
  N("Révision finale. Dites : la semaine prochaine."),
  TH(),
  C("下周","xiàzhōu","la semaine prochaine",0.65),
  N("Lundi prochain."),
  TH(),
  C("下周一","xiàzhōuyī","lundi prochain",0.65),
  N("Qu'est-ce que tu as de prévu la semaine prochaine ?"),
  TH(),
  C("你下周有什么安排？","Nǐ xiàzhōu yǒu shénme ānpái?","Qu'est-ce que tu as de prévu la semaine prochaine ?",0.65),
  N("L'emploi du temps."),
  TH(),
  C("日程","rìchéng","l'emploi du temps",0.65),
  N("Formidable ! Vous savez maintenant construire et présenter tout un emploi du temps. Fin de la leçon 7. Demain, la grande révision de tout le chapitre !"),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  /* ============================================================
     LEÇON 8 — Révision totale
     ============================================================ */
  { num:8, star:true, hanzi:"总复习", title:"Révision totale", desc:"Uniquement des questions — leçons 1 à 7",
    build(){ return [
N("Bienvenue dans la grande révision de ce chapitre. Ici, pas de nouveau vocabulaire : uniquement des questions sur tout ce que vous avez appris dans les leçons 1 à 7. Répondez à voix haute avant chaque correction. C'est parti."),

  N("Leçon 1, les jours. Demandez : on est quel jour aujourd'hui ?"),
  TH(),
  C("今天星期几？","Jīntiān xīngqī jǐ?","On est quel jour aujourd'hui ?",0.65),
  N("Dites : aujourd'hui c'est mercredi, demain jeudi."),
  TH(),
  C("今天星期三，明天星期四。","Jīntiān xīngqīsān, míngtiān xīngqīsì.","Aujourd'hui mercredi, demain jeudi.",0.65),
  N("Dimanche."),
  TH(),
  C("星期天","xīngqītiān","dimanche",0.65),

  N("Leçon 2, la date. Demandez : quelle est la date aujourd'hui ?"),
  TH(),
  C("今天几月几号？","Jīntiān jǐ yuè jǐ hào?","Quelle est la date aujourd'hui ?",0.65),
  N("Dites : aujourd'hui, c'est le 24 septembre."),
  TH(),
  C("今天九月二十四号。","Jīntiān jiǔ yuè èrshísì hào.","Aujourd'hui, c'est le 24 septembre.",0.65),
  N("On est en quelle année ? Répondez : on est en 2011."),
  TH(),
  C("今年是二零一一年。","Jīnnián shì èr líng yī yī nián.","On est en 2011.",0.65),

  N("Leçon 3, se situer dans le temps. Dites : avant-hier."),
  TH(),
  C("前天","qiántiān","avant-hier",0.65),
  N("Après-demain."),
  TH(),
  C("后天","hòutiān","après-demain",0.65),
  N("Dans trois jours."),
  TH(),
  C("大后天","dàhòutiān","dans trois jours",0.65),
  N("Il y a deux ans."),
  TH(),
  C("前年","qiánnián","il y a deux ans",0.65),

  N("Leçon 4, les anniversaires. Demandez : ton anniversaire, c'est quel jour ?"),
  TH(),
  C("你的生日是几月几号？","Nǐ de shēngrì shì jǐ yuè jǐ hào?","Ton anniversaire, c'est quel jour ?",0.65),
  N("Quel âge a-t-il cette année ?"),
  TH(),
  C("他今年多大？","Tā jīnnián duō dà?","Quel âge a-t-il cette année ?",0.65),
  N("Je veux un gâteau."),
  TH(),
  C("我想要一个蛋糕。","Wǒ xiǎngyào yí ge dàngāo.","Je veux un gâteau.",0.65),

  N("Leçon 5, les fêtes. Dites : Noël, le Nouvel An."),
  TH(),
  C("圣诞节，新年","Shèngdànjié, xīnnián","Noël, le Nouvel An",0.65),
  N("Demandez : tu vas à la soirée de Noël ?"),
  TH(),
  C("你参加圣诞晚会吗？","Nǐ cānjiā Shèngdàn wǎnhuì ma?","Tu vas à la soirée de Noël ?",0.65),
  N("J'offre un cadeau à papa."),
  TH(),
  C("我送爸爸一个礼物。","Wǒ sòng bàba yí ge lǐwù.","J'offre un cadeau à papa.",0.65),

  N("Leçon 6, un mariage. Dites : se marier."),
  TH(),
  C("结婚","jié hūn","se marier",0.65),
  N("Demandez : le mariage, c'est quand ?"),
  TH(),
  C("婚礼是什么时候？","Hūnlǐ shì shénme shíhou?","Le mariage, c'est quand ?",0.65),
  N("J'offre une enveloppe rouge."),
  TH(),
  C("我送一个红包。","Wǒ sòng yí ge hóngbāo.","J'offre une enveloppe rouge.",0.65),

  N("Leçon 7, l'emploi du temps. Demandez : qu'est-ce que tu as de prévu la semaine prochaine ?"),
  TH(),
  C("你下周有什么安排？","Nǐ xiàzhōu yǒu shénme ānpái?","Qu'est-ce que tu as de prévu la semaine prochaine ?",0.65),
  N("Dites : lundi prochain j'ai cours."),
  TH(),
  C("下周一我上课。","Xiàzhōuyī wǒ shàngkè.","Lundi prochain, j'ai cours.",0.65),

  N("Félicitations ! Vous venez de réviser les sept leçons de ce chapitre. Vous savez nommer les jours et les dates, vous situer dans le temps, parler des anniversaires, des fêtes, d'un mariage, et présenter tout un emploi du temps. Refaites cette révision régulièrement. À bientôt !"),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  ]
});
