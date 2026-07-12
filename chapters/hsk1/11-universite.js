/* ============================================================
   HSK 1 · Leçon 11 — 我读大学呢 J'étudie à l'université
   D'après « 新HSK教程 1 », leçon 11.
   Vocabulaire de la leçon :
   时候 · 饭店 · 知道 · 正在 · 找 · 开车 · 车 · 在(en cours) ·
   读 · 大学 · 大学生 · 学 · 医 · 弟弟 · 起床 · 睡觉 · 睡 · 那里 ·
   哪里 · 昨天 · 问 · 对(préposition) · 说 · 要 · 小朋友
   Attention : 在 prend ici un TROISIÈME sens — marqueur d'action en
   cours (在/正在 + verbe), différent de « être à » (leçon 7) et de
   la préposition de lieu (leçon 8). 对 signifiait « correct » (leçon
   3), ici une préposition « vers, à ». 那里/哪里 sont des variantes
   de 那儿/哪儿 (leçons 6, 10). 弟弟 complète la fratrie (姐姐, 哥哥,
   妹妹). 读/学/医 étendent 读书, 学习/学校, 医院/医生 déjà connus.
   Grammaire : questions alternatives (X不/没X) · adverbes de temps
   在/正在 (action en cours) · verbe modal 要 (vouloir, avoir
   l'intention de).
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  group: "hsk1",
  id: "hsk1-11",
  badge: 11,
  hanzi: "我读大学呢",
  title: "Leçon 11 · Action en cours, université",
  desc: "3 parties · 正在找 · 我读大学呢 · 弟弟在睡觉",
  intro: "Leçon 11 du HSK 1 : poser des questions alternatives (X不X), dire qu'on est en train de faire quelque chose avec 在/正在, et exprimer une intention avec 要.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"正在找", title:"Partie 1 · Au téléphone, chercher le restaurant", desc:"时候 · 饭店 · 知道 · 正在 · 找 · 开车 · 车",
    build(){ return [
  N("Bienvenue dans la leçon 11 du HSK 1. Aujourd'hui : poser des questions alternatives, dire qu'on est en train de faire quelque chose, et exprimer une intention. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("喂，李文，你什么时候能到饭店？","Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?","Allô, Li Wen, quand pourras-tu arriver au restaurant ?",0.5),
  C("还不知道，正在找呢。它是不是在超市后边？","Hái bù zhīdào, zhèngzài zhǎo ne. Tā shì bu shì zài chāoshì hòubian?","Je ne sais pas encore, je suis en train de le chercher. C'est bien derrière le supermarché ?",0.5),
  C("是的。你开车没开车？","Shì de. Nǐ kāichē méi kāichē?","Oui. Est-ce que tu conduis ?",0.5),
  C("我没开车，坐车呢。","Wǒ méi kāichē, zuò chē ne.","Je ne conduis pas, je suis en voiture.",0.5),
  N("D'abord, révision de la leçon 8 : dites « derrière »."),
  TH(),
  C("后","hòu","derrière, après",0.6), HOLD(),

  N("« Un moment », dans « quand », se dit [[时候|shíhou]]. Écoutez et répétez."),
  ...teach2("什么时候","shénme shíhou","quand"),
  N("« Un restaurant », plus général que [[饭馆儿|fànguǎnr]] que vous connaissez, se dit [[饭店|fàndiàn]]. Demandez : « Allô, Li Wen, quand pourras-tu arriver au restaurant ? »"),
  TH(),
  C("喂，李文，你什么时候能到饭店？","Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?","Allô, Li Wen, quand pourras-tu arriver au restaurant ?",0.5),
  C("喂，李文，你什么时候能到饭店？","Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?","Allô, Li Wen, quand pourras-tu arriver au restaurant ?",0.55), HOLD(),

  N("« Savoir » se dit [[知道|zhīdào]]. Écoutez et répétez."),
  ...teach2("知道","zhīdào","savoir"),
  N("« En train de », pour une action en cours, se dit [[正在|zhèngzài]] — devant le verbe. Et « chercher » se dit [[找|zhǎo]]. Écoutez et répétez."),
  ...teach2("正在找","zhèngzài zhǎo","en train de chercher"),
  N("Pour poser une question avec « oui ou non », on répète le verbe avec [[不|bù]] entre les deux : [[是不是|shì bu shì]] veut dire « est-ce que oui ou non ». Répondez : « Je ne sais pas encore, je suis en train de le chercher. C'est bien derrière le supermarché ? »"),
  TH(),
  C("还不知道，正在找呢。它是不是在超市后边？","Hái bù zhīdào, zhèngzài zhǎo ne. Tā shì bu shì zài chāoshì hòubian?","Je ne sais pas encore, je suis en train de le chercher. C'est bien derrière le supermarché ?",0.5),
  C("还不知道，正在找呢。它是不是在超市后边？","Hái bù zhīdào, zhèngzài zhǎo ne. Tā shì bu shì zài chāoshì hòubian?","Je ne sais pas encore, je suis en train de le chercher. C'est bien derrière le supermarché ?",0.55), HOLD(),

  N("« Conduire » se dit [[开车|kāichē]] — [[车|chē]] veut dire « véhicule ». Pour la question alternative d'un verbe, on utilise [[不|bù]] ou [[没|méi]] : « conduire pas conduire » demande si l'action a lieu. Demandez : « Oui. Est-ce que tu conduis ? »"),
  TH(),
  C("是的。你开车没开车？","Shì de. Nǐ kāichē méi kāichē?","Oui. Est-ce que tu conduis ?",0.6),
  C("是的。你开车没开车？","Shì de. Nǐ kāichē méi kāichē?","Oui. Est-ce que tu conduis ?",0.6), HOLD(),

  N("Répondez : « Je ne conduis pas, je suis en voiture. » — souvenez-vous, « prendre un transport » se dit [[坐|zuò]]."),
  TH(),
  C("我没开车，坐车呢。","Wǒ méi kāichē, zuò chē ne.","Je ne conduis pas, je suis en voiture.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : « Allô, Li Wen, quand pourras-tu arriver au restaurant ? »"),
  TH(),
  C("喂，李文，你什么时候能到饭店？","Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?","Allô, Li Wen, quand pourras-tu arriver au restaurant ?",0.55),
  N("On vous répond : « Je ne sais pas encore, je suis en train de le chercher. C'est bien derrière le supermarché ? »"),
  C("还不知道，正在找呢。它是不是在超市后边？","Hái bù zhīdào, zhèngzài zhǎo ne. Tā shì bu shì zài chāoshì hòubian?","Je ne sais pas encore, je suis en train de le chercher. C'est bien derrière le supermarché ?",0.5),
  N("Confirmez, puis demandez : « Oui. Est-ce que tu conduis ? »"),
  TH(),
  C("是的。你开车没开车？","Shì de. Nǐ kāichē méi kāichē?","Oui. Est-ce que tu conduis ?",0.6),
  N("Répondez : « Je ne conduis pas, je suis en voiture. »"),
  TH(),
  C("我没开车，坐车呢。","Wǒ méi kāichē, zuò chē ne.","Je ne conduis pas, je suis en voiture.",0.6), HOLD(),

  // Révision
  N("Révision. Dites : en train de chercher."),
  TH(),
  C("正在找","zhèngzài zhǎo","en train de chercher",0.6),
  N("Dites : conduire."),
  TH(),
  C("开车","kāichē","conduire",0.6),
  N("Fin de la partie 1. À la partie 2 : l'université."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"我读大学呢", title:"Partie 2 · Étudier à l'université", desc:"在(en cours) · 读 · 大学 · 大学生 · 学 · 医",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你还在读大学吗？","Nǐ hái zài dú dàxué ma?","Tu es toujours en train d'étudier à l'université ?",0.5),
  C("对，我读大学呢，还是大学生。","Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.","Oui, j'étudie à l'université, je suis toujours étudiant.",0.5),
  C("你们学习忙不忙？","Nǐmen xuéxí máng bu máng?","Vos études, c'est chargé ou pas ?",0.5),
  C("非常忙，我学医，我们的课很多。","Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.","Très chargé, j'étudie la médecine, nous avons beaucoup de cours.",0.5),
  N("Révision : dites « je ne conduis pas, je suis en voiture »."),
  TH(),
  C("我没开车，坐车呢。","Wǒ méi kāichē, zuò chē ne.","Je ne conduis pas, je suis en voiture.",0.6), HOLD(),

  N("Nouveau sens important pour [[在|zài]] : placé devant un verbe, il marque qu'une action est EN COURS — « en train de ». Vous le connaissiez comme « être à » et comme préposition de lieu, c'est un troisième usage. « Étudier », « fréquenter l'école », se dit [[读|dú]] — vous connaissez déjà [[读书|dúshū]]. Et « l'université » se dit [[大学|dàxué]]. Écoutez et répétez."),
  ...teach2("在读大学","zài dú dàxué","être en train d'étudier à l'université"),
  N("Demandez : « Tu es toujours en train d'étudier à l'université ? »"),
  TH(),
  C("你还在读大学吗？","Nǐ hái zài dú dàxué ma?","Tu es toujours en train d'étudier à l'université ?",0.6),
  C("你还在读大学吗？","Nǐ hái zài dú dàxué ma?","Tu es toujours en train d'étudier à l'université ?",0.6), HOLD(),

  N("« Un étudiant d'université » se dit [[大学生|dàxuéshēng]]. Remarquez : au lieu de [[在|zài]], on peut aussi juste ajouter [[呢|ne]] après le verbe pour dire la même chose. Répondez : « Oui, j'étudie à l'université, je suis toujours étudiant. »"),
  TH(),
  C("对，我读大学呢，还是大学生。","Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.","Oui, j'étudie à l'université, je suis toujours étudiant.",0.55),
  C("对，我读大学呢，还是大学生。","Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.","Oui, j'étudie à l'université, je suis toujours étudiant.",0.6), HOLD(),

  N("Demandez avec une question alternative sur l'adjectif : « Vos études, c'est chargé ou pas ? »"),
  TH(),
  C("你们学习忙不忙？","Nǐmen xuéxí máng bu máng?","Vos études, c'est chargé ou pas ?",0.6), HOLD(),

  N("« Étudier », « apprendre une matière », se dit [[学|xué]] — vous connaissez déjà [[学习|xuéxí]] et [[学校|xuéxiào]]. Et « la médecine » se dit [[医|yī]] — vous connaissez déjà [[医院|yīyuàn]] et [[医生|yīshēng]]. Répondez : « Très chargé, j'étudie la médecine, nous avons beaucoup de cours. »"),
  TH(),
  C("非常忙，我学医，我们的课很多。","Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.","Très chargé, j'étudie la médecine, nous avons beaucoup de cours.",0.5),
  C("非常忙，我学医，我们的课很多。","Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.","Très chargé, j'étudie la médecine, nous avons beaucoup de cours.",0.55), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : « Tu es toujours en train d'étudier à l'université ? »"),
  TH(),
  C("你还在读大学吗？","Nǐ hái zài dú dàxué ma?","Tu es toujours en train d'étudier à l'université ?",0.6),
  N("Répondez : « Oui, j'étudie à l'université, je suis toujours étudiant. »"),
  TH(),
  C("对，我读大学呢，还是大学生。","Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.","Oui, j'étudie à l'université, je suis toujours étudiant.",0.55),
  N("On vous demande : « Vos études, c'est chargé ou pas ? »"),
  C("你们学习忙不忙？","Nǐmen xuéxí máng bu máng?","Vos études, c'est chargé ou pas ?",0.6),
  N("Répondez : « Très chargé, j'étudie la médecine, nous avons beaucoup de cours. »"),
  TH(),
  C("非常忙，我学医，我们的课很多。","Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.","Très chargé, j'étudie la médecine, nous avons beaucoup de cours.",0.55), HOLD(),

  // Révision
  N("Révision. Dites : l'université."),
  TH(),
  C("大学","dàxué","l'université",0.6),
  N("Dites : j'étudie la médecine."),
  TH(),
  C("我学医。","Wǒ xué yī.","J'étudie la médecine.",0.6),
  N("Fin de la partie 2. À la partie 3 : le petit frère dort encore."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"弟弟在睡觉", title:"Partie 3 · Le petit frère dort encore", desc:"弟弟 · 起床 · 睡觉 · 那里 · 哪里 · 昨天 · 问 · 对(vers) · 说 · 要 · 小朋友",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("弟弟起床没起床呢？","Dìdi qǐchuáng méi qǐchuáng ne?","Le petit frère est-il levé ?",0.5),
  C("没起床呢，还在睡觉。","Méi qǐchuáng ne, hái zài shuìjiào.","Pas encore, il dort toujours.",0.5),
  C("还睡呢？他今天去不去那里？","Hái shuì ne? Tā jīntiān qù bu qù nàli?","Il dort encore ? Il y va aujourd'hui ou pas ?",0.5),
  C("去哪里？","Qù nǎli?","Aller où ?",0.5),
  C("去超市。","Qù chāoshì.","Au supermarché.",0.5),
  C("我昨天问他，他对我说，他不去，他今天要和小朋友玩。","Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù, tā jīntiān yào hé xiǎopéngyou wán.","Je lui ai demandé hier, il m'a dit qu'il n'irait pas, qu'il voulait jouer avec des amis aujourd'hui.",0.5),
  N("Révision : dites « très chargé, j'étudie la médecine »."),
  TH(),
  C("非常忙，我学医。","Fēicháng máng, wǒ xué yī.","Très chargé, j'étudie la médecine.",0.6), HOLD(),

  N("« Le petit frère » se dit [[弟弟|dìdi]] — vous connaissez déjà [[哥哥|gēge]], [[姐姐|jiějie]] et [[妹妹|mèimei]]. « Se lever » se dit [[起床|qǐchuáng]]. Écoutez et répétez."),
  ...teach2("弟弟起床","dìdi qǐchuáng","le petit frère se lève"),
  N("Demandez avec une question alternative : « Le petit frère est-il levé ? »"),
  TH(),
  C("弟弟起床没起床呢？","Dìdi qǐchuáng méi qǐchuáng ne?","Le petit frère est-il levé ?",0.6),
  C("弟弟起床没起床呢？","Dìdi qǐchuáng méi qǐchuáng ne?","Le petit frère est-il levé ?",0.6), HOLD(),

  N("« Dormir » se dit [[睡觉|shuìjiào]], ou juste [[睡|shuì]] tout seul. Écoutez et répétez."),
  ...teach2("睡觉","shuìjiào","dormir"),
  N("Répondez : « Pas encore, il dort toujours. »"),
  TH(),
  C("没起床呢，还在睡觉。","Méi qǐchuáng ne, hái zài shuìjiào.","Pas encore, il dort toujours.",0.6),
  C("没起床呢，还在睡觉。","Méi qǐchuáng ne, hái zài shuìjiào.","Pas encore, il dort toujours.",0.6), HOLD(),

  N("« Là-bas » se dit aussi [[那里|nàli]] — une variante de [[那儿|nàr]] que vous connaissez. Demandez : « Il dort encore ? Il y va aujourd'hui ou pas ? »"),
  TH(),
  C("还睡呢？他今天去不去那里？","Hái shuì ne? Tā jīntiān qù bu qù nàli?","Il dort encore ? Il y va aujourd'hui ou pas ?",0.55),
  C("还睡呢？他今天去不去那里？","Hái shuì ne? Tā jīntiān qù bu qù nàli?","Il dort encore ? Il y va aujourd'hui ou pas ?",0.6), HOLD(),

  N("« Où » se dit aussi [[哪里|nǎlǐ]] — une variante de [[哪儿|nǎr]]. Demandez : « Aller où ? »"),
  TH(),
  C("去哪里？","Qù nǎli?","Aller où ?",0.6), HOLD(),

  N("Répondez : « Au supermarché. »"),
  TH(),
  C("去超市。","Qù chāoshì.","Au supermarché.",0.6), HOLD(),

  N("« Hier » se dit [[昨天|zuótiān]], et « demander » se dit [[问|wèn]]. Nouveau sens pour [[对|duì]] : vous le connaissiez comme « correct », ici c'est une préposition, « vers », « à ». Et « dire », « parler », se dit [[说|shuō]]. Écoutez et répétez."),
  ...teach2("昨天问","zuótiān wèn","demandé hier"),
  ...teach2("对我说","duì wǒ shuō","m'a dit"),
  N("« Vouloir », « avoir l'intention de », se dit [[要|yào]] — comme [[想|xiǎng]]. Écoutez et répétez."),
  ...teach2("要","yào","vouloir, avoir l'intention de"),
  N("Et « des enfants », « des copains », se dit [[小朋友|xiǎopéngyou]] — vous connaissez déjà [[朋友|péngyou]]. Dites : « Je lui ai demandé hier, il m'a dit qu'il n'irait pas, qu'il voulait jouer avec des amis aujourd'hui. »"),
  TH(),
  C("我昨天问他，他对我说，他不去，他今天要和小朋友玩。","Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù, tā jīntiān yào hé xiǎopéngyou wán.","Je lui ai demandé hier, il m'a dit qu'il n'irait pas, qu'il voulait jouer avec des amis aujourd'hui.",0.5),
  C("我昨天问他，他对我说，他不去，他今天要和小朋友玩。","Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù, tā jīntiān yào hé xiǎopéngyou wán.","Je lui ai demandé hier, il m'a dit qu'il n'irait pas, qu'il voulait jouer avec des amis aujourd'hui.",0.55), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : « Le petit frère est-il levé ? »"),
  TH(),
  C("弟弟起床没起床呢？","Dìdi qǐchuáng méi qǐchuáng ne?","Le petit frère est-il levé ?",0.6),
  N("Répondez : « Pas encore, il dort toujours. »"),
  TH(),
  C("没起床呢，还在睡觉。","Méi qǐchuáng ne, hái zài shuìjiào.","Pas encore, il dort toujours.",0.6),
  N("On demande : « Il dort encore ? Il y va aujourd'hui ou pas ? » Demandez : « Aller où ? »"),
  TH(),
  C("去哪里？","Qù nǎli?","Aller où ?",0.6),
  N("On répond : « Au supermarché. » Dites : « Je lui ai demandé hier, il m'a dit qu'il n'irait pas, qu'il voulait jouer avec des amis aujourd'hui. »"),
  TH(),
  C("我昨天问他，他对我说，他不去，他今天要和小朋友玩。","Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù, tā jīntiān yào hé xiǎopéngyou wán.","Je lui ai demandé hier, il m'a dit qu'il n'irait pas, qu'il voulait jouer avec des amis aujourd'hui.",0.5), HOLD(),

  // Révision finale de la leçon 11
  N("Révision finale de la leçon 11. Demandez : est-ce que tu conduis ?"),
  TH(),
  C("你开车没开车？","Nǐ kāichē méi kāichē?","Est-ce que tu conduis ?",0.6),
  N("Dites : je suis en train d'étudier à l'université."),
  TH(),
  C("我在读大学。","Wǒ zài dú dàxué.","Je suis en train d'étudier à l'université.",0.6),
  N("Demandez : le petit frère est-il levé ?"),
  TH(),
  C("弟弟起床没起床？","Dìdi qǐchuáng méi qǐchuáng?","Le petit frère est-il levé ?",0.6),
  N("Et pour finir, dites : il veut jouer avec des amis."),
  TH(),
  C("他要和小朋友玩。","Tā yào hé xiǎopéngyou wán.","Il veut jouer avec des amis.",0.6),
  N("Excellent ! Vous avez terminé la leçon 11. Vous savez poser des questions alternatives, dire qu'une action est en cours, et exprimer une intention avec [[要|yào]]. Réécoutez-la demain, puis passez à la leçon 12. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"D'après 新HSK教程1 学练手册 · Leçon 11",
    build(){ return [
N("Pour finir cette leçon, un petit exercice de compréhension tiré du manuel officiel HSK 1. Écoutez chaque phrase, réfléchissez à la question posée, puis répondez à voix haute avant la correction."),

  N("Première question. Écoutez bien."),
  C("我姐姐今年20岁，正在读大学呢，她学医。","Wǒ jiějie jīnnián èrshí suì, zhèngzài dú dàxué ne, tā xué yī.","Ma grande sœur a 20 ans cette année, elle est en train de faire des études à l'université, elle étudie la médecine.",0.5),
  N("Question : que fait la grande sœur de cette personne en ce moment ?"),
  TH(),
  N("Les trois choix étaient : A professeure, B médecin, C étudiante à l'université."),
  C("大学生","dàxuéshēng","étudiante à l'université",0.6), HOLD(),

  N("Deuxième question."),
  C("我明天有事，要去学校找老师，不知道老师在不在。","Wǒ míngtiān yǒu shì, yào qù xuéxiào zhǎo lǎoshī, bù zhīdào lǎoshī zài bu zài.","Demain j'ai quelque chose à faire, je dois aller à l'école voir le professeur, je ne sais pas s'il sera là.",0.5),
  N("Question : qui cette personne va-t-elle voir demain à l'école ?"),
  TH(),
  N("Les trois choix étaient : A un ami, B un élève, C le professeur."),
  C("老师","lǎoshī","le professeur",0.6), HOLD(),

  N("Bravo, exercice terminé ! Passez maintenant à la leçon 12."),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  ]
});
