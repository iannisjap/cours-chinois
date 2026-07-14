/* ============================================================
   HSK 2 · Leçon 14 — 一个人过年多没意思啊 C'est ennuyeux de passer le nouvel an seul
   D'après « 新HSK教程 2 », leçon 14.
   Vocabulaire de la leçon :
   站(v.) · 包 ·
   过年 · 没意思 · 位 · 前面 ·
   房子 · 小孩儿 · 女孩儿 ·
   姓 · 眼睛 · 跳舞
   Grammaire : phrase existentielle (2) avec 着 ; adverbe de
   degré 多 dans les phrases exclamatives ; complément
   directionnel composé (上/下/进/出/回/过 + 来/去, ou 起来).
   Structure : leçon → 3 parties (les 3 dialogues du manuel,
   le texte 4/journal intégré en révision de la partie 3) +
   partie 4 exercice.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-14",
  badge: 14,
  hanzi: "一个人过年多没意思啊",
  title: "Leçon 14 · C'est ennuyeux de fêter le nouvel an seul",
  desc: "3 parties · phrase existentielle avec 着 · adverbe 多 · complément directionnel composé",
  intro: "Li Wen repère quelqu'un devant l'immeuble de la professeure Wang Yifei : c'est son petit ami Yang Tongle, venu la voir avant le nouvel an chinois. Au programme : la phrase existentielle avec 着 pour décrire ce qui se trouve quelque part, l'adverbe 多 dans les phrases exclamatives, et le complément directionnel composé pour préciser la direction d'une action.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"站着一个人", title:"Partie 1 · Quelqu'un en bas de l'immeuble", desc:"站 · 包 · phrase existentielle avec 着",
    build(){ return [
  N("Partie 1. Li Wen et Wang Yifei rentrent ensemble à pied. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("王老师，你家楼下站着一个人。","Wáng lǎoshī, nǐ jiā lóu xià zhànzhe yí gè rén.","Professeure Wang, il y a quelqu'un debout en bas de votre immeuble.",0.35),
  C("我家楼下？我看看。","Wǒ jiā lóu xià? Wǒ kànkan.","En bas de chez moi ? Je vais regarder.",0.5),
  C("那个人穿着黑色的裤子，手里还拿着一个黑色的包。","Nàge rén chuānzhe hēisè de kùzi, shǒuli hái názhe yí gè hēisè de bāo.","Cette personne porte un pantalon noir, et tient encore un sac noir à la main.",0.3),
  C("我看见那个人了，他是我男朋友。","Wǒ kànjiàn nàge rén le, tā shì wǒ nánpéngyou.","Je vois cette personne, c'est mon petit ami.",0.4),
  C("那我们快过去吧。","Nà wǒmen kuài guòqù ba.","Alors allons-y vite.",0.5),

  N("« Être debout » se dit [[站|zhàn]]. Dites : « professeure Wang, il y a quelqu'un debout en bas de votre immeuble. »"),
  ...teach2("站","zhàn","être debout, se tenir debout"),
  TH(),
  C("王老师，你家楼下站着一个人。","Wáng lǎoshī, nǐ jiā lóu xià zhànzhe yí gè rén.","Professeure Wang, il y a quelqu'un debout en bas de votre immeuble.",0.35), HOLD(),

  N("Grammaire : la phrase existentielle avec 着 indique qu'une personne ou une chose non précisée se trouve à un endroit. Structure : lieu + verbe + 着 + personne/chose. Écoutez ces exemples."),
  C("你家楼下站着一个人。","Nǐ jiā lóu xià zhànzhe yí gè rén.","Il y a quelqu'un debout en bas de chez toi.",0.4),
  C("爸爸手里拿着一杯咖啡。","Bàba shǒu lǐ názhe yì bēi kāfēi.","Papa tient une tasse de café à la main.",0.4),
  C("那间教室里坐着不少学生。","Nà jiān jiàoshì lǐ zuòzhe bù shǎo xuésheng.","Il y a pas mal d'élèves assis dans cette salle de classe.",0.35),
  N("Essayez : dites « papa tient une tasse de café à la main. »"),
  TH(),
  C("爸爸手里拿着一杯咖啡。","Bàba shǒu lǐ názhe yì bēi kāfēi.","Papa tient une tasse de café à la main.",0.4), HOLD(),

  N("On vous répond : « en bas de chez moi ? Je vais regarder. »"),
  C("我家楼下？我看看。","Wǒ jiā lóu xià? Wǒ kànkan.","En bas de chez moi ? Je vais regarder.",0.5),

  N("« Un sac » se dit [[包|bāo]]. Dites : « cette personne porte un pantalon noir, et tient encore un sac noir à la main. »"),
  ...teach2("包","bāo","un sac ; empaqueter (classificateur de paquet)"),
  TH(),
  C("那个人穿着黑色的裤子，手里还拿着一个黑色的包。","Nàge rén chuānzhe hēisè de kùzi, shǒuli hái názhe yí gè hēisè de bāo.","Cette personne porte un pantalon noir, et tient encore un sac noir à la main.",0.3), HOLD(),

  N("On vous répond : « je vois cette personne, c'est mon petit ami. »"),
  C("我看见那个人了，他是我男朋友。","Wǒ kànjiàn nàge rén le, tā shì wǒ nánpéngyou.","Je vois cette personne, c'est mon petit ami.",0.4),
  N("Dites : « alors allons-y vite. »"),
  TH(),
  C("那我们快过去吧。","Nà wǒmen kuài guòqù ba.","Alors allons-y vite.",0.5), HOLD(),

  N("Révision. Dites, avec la phrase existentielle : il y a pas mal d'élèves assis dans cette salle de classe."),
  TH(),
  C("那间教室里坐着不少学生。","Nà jiān jiàoshì lǐ zuòzhe bù shǎo xuésheng.","Il y a pas mal d'élèves assis dans cette salle de classe.",0.35),
  N("Fin de la partie 1. À la partie 2 : ce jeune homme n'est autre que Yang Tongle, le petit ami de Wang Yifei."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"多没意思啊", title:"Partie 2 · Les retrouvailles avec Yang Tongle", desc:"过年 · 没意思 · 位 · 前面 · adverbe 多 (exclamatif)",
    build(){ return [
  N("Partie 2. Wang Yifei retrouve son petit ami Yang Tongle, venu lui rendre visite avant le nouvel an. Li Wen est avec elle. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("同乐，真是你啊！上次打电话，你说有时间过来看我，没想到这么快就来了！","Tónglè, zhēn shì nǐ a! Shàng cì dǎ diànhuà, nǐ shuō yǒu shíjiān guòlái kàn wǒ, méi xiǎngdào zhème kuài jiù lái le!","Tongle, c'est vraiment toi ! La dernière fois au téléphone, tu as dit que tu viendrais me voir quand tu aurais le temps, je ne pensais pas que tu viendrais si vite !",0.25),
  C("就要过年了，你一个人在这儿多没意思啊，所以我就早早过来了。","Jiù yào guònián le, nǐ yí gè rén zài zhèr duō méi yìsi a, suǒyǐ wǒ jiù zǎozǎo guòlái le.","Le nouvel an chinois approche, c'est tellement ennuyeux que tu sois toute seule ici, alors je suis venu tôt.",0.3),
  C("你能来，我太高兴了！","Nǐ néng lái, wǒ tài gāoxìng le!","Que tu puisses venir, je suis tellement contente !",0.4),
  C("一飞，你旁边这位是？","Yīfēi, nǐ pángbiān zhè wèi shì?","Yifei, qui est cette personne à côté de toi ?",0.5),
  C("同乐，这是李文，他在我们学校学医。李文，这是我男朋友杨同乐。","Tónglè, zhè shì Lǐ Wén, tā zài wǒmen xuéxiào xué yī. Lǐ Wén, zhè shì wǒ nánpéngyou Yáng Tónglè.","Tongle, voici Li Wen, il étudie la médecine dans notre école. Li Wen, voici mon petit ami Yang Tongle.",0.3),
  C("李文，很高兴认识你！","Lǐ Wén, hěn gāoxìng rènshi nǐ!","Li Wen, ravi de te rencontrer !",0.45),
  C("认识你我也很高兴！我家就在前面那个楼，有时间来玩。","Rènshi nǐ wǒ yě hěn gāoxìng! Wǒ jiā jiù zài qiánmiàn nàge lóu, yǒu shíjiān lái wán.","Ravi de te rencontrer aussi ! Chez moi c'est juste dans cet immeuble devant, viens quand tu as le temps.",0.3),

  N("« Fêter le nouvel an chinois » se dit [[过年|guònián]]. Grammaire : l'adverbe 多, dans une phrase exclamative, exprime un degré très élevé. Dites : « le nouvel an chinois approche, c'est tellement ennuyeux que tu sois toute seule ici, alors je suis venu tôt. »"),
  ...teach2("过年","guònián","fêter le nouvel an chinois"),
  C("就要过年了，你一个人在这儿多没意思啊，所以我就早早过来了。","Jiù yào guònián le, nǐ yí gè rén zài zhèr duō méi yìsi a, suǒyǐ wǒ jiù zǎozǎo guòlái le.","Le nouvel an chinois approche, c'est tellement ennuyeux que tu sois toute seule ici, alors je suis venu tôt.",0.3),

  N("« Ennuyeux, sans intérêt » se dit [[没意思|méi yìsi]]. Écoutez d'autres exemples avec 多 dans une phrase exclamative."),
  ...teach2("没意思","méi yìsi","ennuyeux, sans intérêt"),
  C("我们一起去多好啊！","Wǒmen yìqǐ qù duō hǎo a!","Ce serait tellement bien si on y allait ensemble !",0.45),
  C("多好看啊！买这件吧。","Duō hǎokàn a! Mǎi zhè jiàn ba.","C'est tellement joli ! Achète celui-là.",0.5),
  N("Essayez : dites « ce serait tellement bien si on y allait ensemble ! »"),
  TH(),
  C("我们一起去多好啊！","Wǒmen yìqǐ qù duō hǎo a!","Ce serait tellement bien si on y allait ensemble !",0.45), HOLD(),
  N("Dites, avec 多没意思 : « le nouvel an chinois approche, c'est tellement ennuyeux que tu sois toute seule ici, alors je suis venu tôt. »"),
  TH(),
  C("就要过年了，你一个人在这儿多没意思啊，所以我就早早过来了。","Jiù yào guònián le, nǐ yí gè rén zài zhèr duō méi yìsi a, suǒyǐ wǒ jiù zǎozǎo guòlái le.","Le nouvel an chinois approche, c'est tellement ennuyeux que tu sois toute seule ici, alors je suis venu tôt.",0.3), HOLD(),

  N("On vous dit : « que tu puisses venir, je suis tellement contente ! »"),
  C("你能来，我太高兴了！","Nǐ néng lái, wǒ tài gāoxìng le!","Que tu puisses venir, je suis tellement contente !",0.4),

  N("« Cette personne » (poli) se dit [[这位|zhè wèi]], avec [[位|wèi]] utilisé par déférence pour parler de quelqu'un. Dites : « Yifei, qui est cette personne à côté de toi ? »"),
  ...teach2("位","wèi","classificateur poli pour une personne"),
  TH(),
  C("一飞，你旁边这位是？","Yīfēi, nǐ pángbiān zhè wèi shì?","Yifei, qui est cette personne à côté de toi ?",0.5), HOLD(),

  N("On vous répond : « Tongle, voici Li Wen, il étudie la médecine dans notre école. Li Wen, voici mon petit ami Yang Tongle. »"),
  C("同乐，这是李文，他在我们学校学医。李文，这是我男朋友杨同乐。","Tónglè, zhè shì Lǐ Wén, tā zài wǒmen xuéxiào xué yī. Lǐ Wén, zhè shì wǒ nánpéngyou Yáng Tónglè.","Tongle, voici Li Wen, il étudie la médecine dans notre école. Li Wen, voici mon petit ami Yang Tongle.",0.3),
  N("Dites : « Li Wen, ravi de te rencontrer ! »"),
  TH(),
  C("李文，很高兴认识你！","Lǐ Wén, hěn gāoxìng rènshi nǐ!","Li Wen, ravi de te rencontrer !",0.45), HOLD(),

  N("« Devant, l'avant » se dit [[前面|qiánmiàn]]. On vous répond : « ravi de te rencontrer aussi ! Chez moi c'est juste dans cet immeuble devant, viens quand tu as le temps. »"),
  ...teach2("前面","qiánmiàn","devant, l'avant"),
  C("认识你我也很高兴！我家就在前面那个楼，有时间来玩。","Rènshi nǐ wǒ yě hěn gāoxìng! Wǒ jiā jiù zài qiánmiàn nàge lóu, yǒu shíjiān lái wán.","Ravi de te rencontrer aussi ! Chez moi c'est juste dans cet immeuble devant, viens quand tu as le temps.",0.3),

  N("Révision. Dites, avec 多 dans une phrase exclamative : c'est tellement joli ! Achète celui-là."),
  TH(),
  C("多好看啊！买这件吧。","Duō hǎokàn a! Mǎi zhè jiàn ba.","C'est tellement joli ! Achète celui-là.",0.5),
  N("Fin de la partie 2. À la partie 3 : chez Wang Yifei, elle raconte à Yang Tongle qui sont ses voisins."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"跑上来找我玩", title:"Partie 3 · Les voisins de Wang Yifei", desc:"房子 · 小孩儿 · 女孩儿 · complément directionnel composé",
    build(){ return [
  N("Partie 3. Chez elle, Wang Yifei discute avec Yang Tongle. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("一飞，你住的房子真不错，很大，离学校也不远。","Yīfēi, nǐ zhù de fángzi zhēn búcuò, hěn dà, lí xuéxiào yě bù yuǎn.","Yifei, la maison où tu habites est vraiment bien, très grande, et pas loin de l'école non plus.",0.3),
  C("是啊！我楼下还住着一家中国人，他们人很好。","Shì a! Wǒ lóu xià hái zhùzhe yì jiā Zhōngguó rén, tāmen rén hěn hǎo.","Eh oui ! En bas de chez moi habite aussi une famille chinoise, ils sont très gentils.",0.35),
  C("这样你有事情就可以找他们帮忙。","Zhèyàng nǐ yǒu shìqing jiù kěyǐ zhǎo tāmen bāngmáng.","Comme ça si tu as besoin de quelque chose tu peux leur demander de l'aide.",0.4),
  C("对，我也帮他们家的小孩儿学中文。","Duì, wǒ yě bāng tāmen jiā de xiǎoháir xué Zhōngwén.","Oui, j'aide aussi leur enfant à apprendre le chinois.",0.4),
  C("我记得你跟我说过，是个女孩儿，学得也很好。","Wǒ jìde nǐ gēn wǒ shuōguo, shì gè nǚháir, xué de yě hěn hǎo.","Je me souviens que tu m'avais dit que c'était une fille, et qu'elle apprenait très bien.",0.3),
  C("没错，她经常跑上来找我玩。","Méi cuò, tā jīngcháng pǎo shànglái zhǎo wǒ wán.","C'est exact, elle monte souvent en courant pour venir jouer avec moi.",0.4),
  C("你问问他们什么时候有时间，我请他们吃个饭。","Nǐ wènwen tāmen shénme shíhou yǒu shíjiān, wǒ qǐng tāmen chī gè fàn.","Demande-leur quand ils sont libres, je les invite à manger.",0.35),

  N("« Une maison » se dit [[房子|fángzi]]. Dites : « Yifei, la maison où tu habites est vraiment bien, très grande, et pas loin de l'école non plus. »"),
  ...teach2("房子","fángzi","une maison"),
  TH(),
  C("一飞，你住的房子真不错，很大，离学校也不远。","Yīfēi, nǐ zhù de fángzi zhēn búcuò, hěn dà, lí xuéxiào yě bù yuǎn.","Yifei, la maison où tu habites est vraiment bien, très grande, et pas loin de l'école non plus.",0.3), HOLD(),

  N("On vous répond : « eh oui ! En bas de chez moi habite aussi une famille chinoise, ils sont très gentils. »"),
  C("是啊！我楼下还住着一家中国人，他们人很好。","Shì a! Wǒ lóu xià hái zhùzhe yì jiā Zhōngguó rén, tāmen rén hěn hǎo.","Eh oui ! En bas de chez moi habite aussi une famille chinoise, ils sont très gentils.",0.35),
  N("Dites : « comme ça si tu as besoin de quelque chose tu peux leur demander de l'aide. »"),
  TH(),
  C("这样你有事情就可以找他们帮忙。","Zhèyàng nǐ yǒu shìqing jiù kěyǐ zhǎo tāmen bāngmáng.","Comme ça si tu as besoin de quelque chose tu peux leur demander de l'aide.",0.4), HOLD(),

  N("« Un enfant » se dit [[小孩儿|xiǎoháir]]. On vous répond : « oui, j'aide aussi leur enfant à apprendre le chinois. »"),
  ...teach2("小孩儿","xiǎoháir","un enfant"),
  C("对，我也帮他们家的小孩儿学中文。","Duì, wǒ yě bāng tāmen jiā de xiǎoháir xué Zhōngwén.","Oui, j'aide aussi leur enfant à apprendre le chinois.",0.4),

  N("« Une fille » se dit [[女孩儿|nǚháir]]. Dites : « je me souviens que tu m'avais dit que c'était une fille, et qu'elle apprenait très bien. »"),
  ...teach2("女孩儿","nǚháir","une fille"),
  TH(),
  C("我记得你跟我说过，是个女孩儿，学得也很好。","Wǒ jìde nǐ gēn wǒ shuōguo, shì gè nǚháir, xué de yě hěn hǎo.","Je me souviens que tu m'avais dit que c'était une fille, et qu'elle apprenait très bien.",0.3), HOLD(),

  N("Grammaire : les verbes 上, 下, 进, 出, 回, 过 combinés avec 来/去 (ou 起来) après un verbe forment un complément directionnel composé, qui indique la direction d'une action. Écoutez ces exemples."),
  C("她经常跑上来找我玩。","Tā jīngcháng pǎo shànglái zhǎo wǒ wán.","Elle monte souvent en courant pour venir jouer avec moi.",0.4),
  C("楼不高，我们走上去吧。","Lóu bù gāo, wǒmen zǒu shàngqù ba.","L'immeuble n'est pas haut, montons à pied.",0.45),
  C("一听到老师叫他的名字，他就站起来了。","Yì tīngdào lǎoshī jiào tā de míngzi, tā jiù zhàn qǐlái le.","Dès qu'il a entendu le professeur appeler son nom, il s'est levé.",0.3),
  N("Essayez, avec 起来 : dites « dès qu'il a entendu le professeur appeler son nom, il s'est levé. »"),
  TH(),
  C("一听到老师叫他的名字，他就站起来了。","Yì tīngdào lǎoshī jiào tā de míngzi, tā jiù zhàn qǐlái le.","Dès qu'il a entendu le professeur appeler son nom, il s'est levé.",0.3), HOLD(),
  N("Dites, avec 上来 : « c'est exact, elle monte souvent en courant pour venir jouer avec moi. »"),
  TH(),
  C("没错，她经常跑上来找我玩。","Méi cuò, tā jīngcháng pǎo shànglái zhǎo wǒ wán.","C'est exact, elle monte souvent en courant pour venir jouer avec moi.",0.4), HOLD(),

  N("Quand le verbe a un complément d'objet, deux cas se présentent : si l'objet est un lieu, il se place avant 来/去 ; si l'objet est une chose, il peut se placer avant ou après 来/去. Écoutez ces exemples."),
  C("同学们都走出教室去了。","Tóngxuémen dōu zǒuchū jiàoshì qù le.","Les élèves sont tous sortis de la salle de classe.",0.35),
  C("白家月从书包里找出来一个漂亮的本子。","Bái Jiāyuè cóng shūbāo lǐ zhǎo chūlái yí gè piàoliang de běnzi.","Bai Jiayue a sorti un joli cahier de son sac.",0.3),
  N("Essayez, avec le lieu avant 去 : dites « les élèves sont tous sortis de la salle de classe. »"),
  TH(),
  C("同学们都走出教室去了。","Tóngxuémen dōu zǒuchū jiàoshì qù le.","Les élèves sont tous sortis de la salle de classe.",0.35), HOLD(),

  N("On vous répond : « demande-leur quand ils sont libres, je les invite à manger. »"),
  C("你问问他们什么时候有时间，我请他们吃个饭。","Nǐ wènwen tāmen shénme shíhou yǒu shíjiān, wǒ qǐng tāmen chī gè fàn.","Demande-leur quand ils sont libres, je les invite à manger.",0.35),

  N("Le soir, dans son journal, Wang Yifei parle de Yang Tongle. « Être surnommé, s'appeler » se dit [[姓|xìng]], « un œil » se dit [[眼睛|yǎnjing]], et « danser » se dit [[跳舞|tiàowǔ]]. Écoutez."),
  ...teach2("姓，眼睛，跳舞","xìng, yǎnjing, tiàowǔ","être surnommé, s'appeler ; un œil ; danser"),
  C("我男朋友姓杨，叫杨同乐。","Wǒ nánpéngyou xìng Yáng, jiào Yáng Tónglè.","Mon petit ami s'appelle Yang, son nom complet est Yang Tongle.",0.4),
  C("他高个子、大眼睛，唱歌唱得很好，跳舞跳得也不错。","Tā gāo gèzi, dà yǎnjing, chànggē chàng de hěn hǎo, tiàowǔ tiào de yě búcuò.","Il est grand, avec de grands yeux, il chante très bien et danse bien aussi.",0.3),
  C("他和我姐姐一起工作，是姐姐介绍我们认识的。","Tā hé wǒ jiějie yìqǐ gōngzuò, shì jiějie jièshào wǒmen rènshi de.","Il travaille avec ma grande sœur, c'est elle qui nous a présentés.",0.35),
  C("他告诉我，从见到我的第一天开始，他就喜欢上我了。","Tā gàosu wǒ, cóng jiàndào wǒ de dì-yī tiān kāishǐ, tā jiù xǐhuan shàng wǒ le.","Il m'a dit que depuis le premier jour où il m'a vue, il a commencé à m'aimer, et n'a plus arrêté depuis.",0.28),
  N("« 喜欢上 » signifie commencer à aimer quelque chose ou quelqu'un, et continuer à l'aimer par la suite. Dites : il m'a dit que depuis le premier jour où il m'a vue, il a commencé à m'aimer."),
  TH(),
  C("他告诉我，从见到我的第一天开始，他就喜欢上我了。","Tā gàosu wǒ, cóng jiàndào wǒ de dì-yī tiān kāishǐ, tā jiù xǐhuan shàng wǒ le.","Il m'a dit que depuis le premier jour où il m'a vue, il a commencé à m'aimer, et n'a plus arrêté depuis.",0.28), HOLD(),

  // Révision finale de la leçon 14
  N("Révision finale de la leçon 14. Dites, avec la phrase existentielle : il y a quelqu'un debout en bas de chez toi."),
  TH(),
  C("你家楼下站着一个人。","Nǐ jiā lóu xià zhànzhe yí gè rén.","Il y a quelqu'un debout en bas de chez toi.",0.4),
  N("Dites, avec l'adverbe 多 : c'est tellement ennuyeux que tu sois toute seule ici."),
  TH(),
  C("你一个人在这儿多没意思啊。","Nǐ yí gè rén zài zhèr duō méi yìsi a.","C'est tellement ennuyeux que tu sois toute seule ici.",0.35),
  N("Dites, avec le complément directionnel composé : elle monte souvent en courant pour venir jouer avec moi."),
  TH(),
  C("她经常跑上来找我玩。","Tā jīngcháng pǎo shànglái zhǎo wǒ wán.","Elle monte souvent en courant pour venir jouer avec moi.",0.4),
  N("Excellent ! Vous avez terminé la leçon 14 du HSK 2. Réécoutez-la demain, puis passez à la leçon 15, la dernière de ce cours. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("那个女孩儿跳舞跳得真好！","Nàge nǚháir tiàowǔ tiào de zhēn hǎo!","",0.35),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、是啊，一看就知道她是从小学的。","Yī. Shì a, yí kàn jiù zhīdào tā shì cóngxiǎo xué de.","",0.28),
  P(4,"…"),
  C("二、太好了，我们多准备点儿他们爱吃的东西。","Èr. Tài hǎo le, wǒmen duō zhǔnbèi diǎnr tāmen ài chī de dōngxi.","",0.26),
  P(4,"…"),
  C("三、电视前面那个是你的吗？","Sān. Diànshì qiánmiàn nàge shì nǐ de ma?","",0.4),
  TH(),
  C("是啊，一看就知道她是从小学的。","Shì a, yí kàn jiù zhīdào tā shì cóngxiǎo xué de.","",0.3), HOLD(),

  // Question 2
  C("我的手表呢？你看见了吗？","Wǒ de shǒubiǎo ne? Nǐ kànjiànle ma?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、电视前面那个是你的吗？","Yī. Diànshì qiánmiàn nàge shì nǐ de ma?","",0.4),
  P(4,"…"),
  C("二、从这儿走过去，十分钟就到了。","Èr. Cóng zhèr zǒu guòqù, shí fēnzhōng jiù dào le.","",0.35),
  P(4,"…"),
  C("三、是啊，一看就知道她是从小学的。","Sān. Shì a, yí kàn jiù zhīdào tā shì cóngxiǎo xué de.","",0.28),
  TH(),
  C("电视前面那个是你的吗？","Diànshì qiánmiàn nàge shì nǐ de ma?","",0.45), HOLD(),

  // Question 3
  C("今年过年，女儿和儿子都会回来。","Jīnnián guònián, nǚ'ér hé érzi dōu huì huílái.","",0.35),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、太好了，我们多准备点儿他们爱吃的东西。","Yī. Tài hǎo le, wǒmen duō zhǔnbèi diǎnr tāmen ài chī de dōngxi.","",0.26),
  P(4,"…"),
  C("二、电视前面那个是你的吗？","Èr. Diànshì qiánmiàn nàge shì nǐ de ma?","",0.4),
  P(4,"…"),
  C("三、从这儿走过去，十分钟就到了。","Sān. Cóng zhèr zǒu guòqù, shí fēnzhōng jiù dào le.","",0.35),
  TH(),
  C("太好了，我们多准备点儿他们爱吃的东西。","Tài hǎo le, wǒmen duō zhǔnbèi diǎnr tāmen ài chī de dōngxi.","",0.28), HOLD(),

  // Question 4
  C("你的新房子真不错，离公司很近。","Nǐ de xīn fángzi zhēn búcuò, lí gōngsī hěn jìn.","",0.35),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、从这儿走过去，十分钟就到了。","Yī. Cóng zhèr zǒu guòqù, shí fēnzhōng jiù dào le.","",0.35),
  P(4,"…"),
  C("二、太好了，我们多准备点儿他们爱吃的东西。","Èr. Tài hǎo le, wǒmen duō zhǔnbèi diǎnr tāmen ài chī de dōngxi.","",0.26),
  P(4,"…"),
  C("三、是啊，一看就知道她是从小学的。","Sān. Shì a, yí kàn jiù zhīdào tā shì cóngxiǎo xué de.","",0.28),
  TH(),
  C("从这儿走过去，十分钟就到了。","Cóng zhèr zǒu guòqù, shí fēnzhōng jiù dào le.","",0.4), HOLD(),

  // Question 5
  C("弟弟经常很晚睡觉，还喜欢玩手机。他经常说眼睛很累，很不舒服。","Dìdi jīngcháng hěn wǎn shuìjiào, hái xǐhuan wán shǒujī. Tā jīngcháng shuō yǎnjing hěn lèi, hěn bù shūfu.","",0.28),
  C("弟弟：","Dìdi:","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、睡得很早。","Yī. Shuì de hěn zǎo.","",0.55),
  P(4,"…"),
  C("二、眼睛不舒服。","Èr. Yǎnjing bù shūfu.","",0.5),
  P(4,"…"),
  C("三、不爱玩手机。","Sān. Bú ài wán shǒujī.","",0.5),
  TH(),
  C("眼睛不舒服。","Yǎnjing bù shūfu.","",0.55), HOLD(),

  // Question 6
  C("中国人过年的时候，孩子们都会回到爸妈家里。爸妈会做很多好吃的，在家等孩子们回来。孩子们会送给爸妈礼物。大家在一起高高兴兴地过个年。","Zhōngguó rén guònián de shíhou, háizimen dōu huì huídào bà-mā jiā lǐ. Bà-mā huì zuò hěn duō hǎochī de, zài jiā děng háizimen huílái. Háizimen huì sòng gěi bà-mā lǐwù. Dàjiā zài yìqǐ gāogāoxìngxìng de guò gè nián.","",0.24),
  C("过年时，爸妈会做什么？","Guònián shí, bà-mā huì zuò shénme?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、准备礼物。","Yī. Zhǔnbèi lǐwù.","",0.55),
  P(4,"…"),
  C("二、准备好吃的。","Èr. Zhǔnbèi hǎochī de.","",0.5),
  P(4,"…"),
  C("三、跟孩子一起回家。","Sān. Gēn háizi yìqǐ huí jiā.","",0.45),
  TH(),
  C("准备好吃的。","Zhǔnbèi hǎochī de.","",0.55), HOLD(),

  // Question 7
  C("家月有一个好看的新包，上面还写着她的名字。她告诉我，这个包是在网上买的，那家店还卖本子和咖啡杯什么的，上面可以写些自己喜欢的字。","Jiāyuè yǒu yí gè hǎokàn de xīn bāo, shàngmiàn hái xiězhe tā de míngzi. Tā gàosu wǒ, zhège bāo shì zài wǎngshang mǎi de, nà jiā diàn hái mài běnzi hé kāfēibēi shénmede, shàngmiàn kěyǐ xiě xiē zìjǐ xǐhuan de zì.","",0.24),
  C("家月的包上面有什么？","Jiāyuè de bāo shàngmiàn yǒu shénme?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、漂亮的花。","Yī. Piàoliang de huā.","",0.55),
  P(4,"…"),
  C("二、好看的画。","Èr. Hǎokàn de huà.","",0.55),
  P(4,"…"),
  C("三、她的名字。","Sān. Tā de míngzi.","",0.55),
  TH(),
  C("她的名字。","Tā de míngzi.","",0.6), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 15, la dernière leçon du HSK 2."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
