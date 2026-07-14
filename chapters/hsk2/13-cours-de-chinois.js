/* ============================================================
   HSK 2 · Leçon 13 — 我们爱上中文课 On adore les cours de chinois
   D'après « 新HSK教程 2 », leçon 13.
   Vocabulaire de la leçon :
   新年 · 教 · 花 · 希望 ·
   上面 · 洗手间 · 里面 · 笔 ·
   可能 · 上网 · 那样 · 告诉 · 班
   Grammaire : phrase à double complément d'objet (2) avec
   拿/送/卖 + 给 ; phrase comparative avec 比 (7)(8) —
   syntagme numéral-classificateur après l'adjectif, et
   一点儿/一些 après l'adjectif.
   Structure : leçon → 3 parties (les 3 dialogues du manuel,
   le texte 4/journal intégré en révision de la partie 3) +
   partie 4 exercice.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-13",
  badge: 13,
  hanzi: "我们爱上中文课",
  title: "Leçon 13 · On adore les cours de chinois",
  desc: "3 parties · double complément d'objet · comparatif avec quantité précise",
  intro: "Le nouvel an approche : Bai Jiayue et Chen Tianzhong préparent un cadeau pour la professeure Wang Yifei, puis toute la classe (avec la nouvelle camarade Annie) fait une dictée. Au programme : la phrase à double complément d'objet avec 送/拿/卖 + 给, et deux nouvelles nuances de la phrase comparative avec 比, pour préciser une différence exacte ou une petite différence.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"送给她花", title:"Partie 1 · Un cadeau pour la professeure", desc:"新年 · 教 · 花 · 希望 · double complément d'objet",
    build(){ return [
  N("Partie 1. Bai Jiayue et Chen Tianzhong discutent en classe. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("时间过得真快啊！新年就要到了。","Shíjiān guò de zhēn kuài a! Xīnnián jiù yào dào le.","Le temps passe vraiment vite ! Le nouvel an va bientôt arriver.",0.4),
  C("这一年王老师教我们中文，每天工作都很累。","Zhè yì nián Wáng lǎoshī jiāo wǒmen Zhōngwén, měitiān gōngzuò dōu hěn lèi.","Cette année, la professeure Wang nous a enseigné le chinois, elle a travaillé dur chaque jour.",0.35),
  C("是啊，她教得很好。因为她，我们都非常爱上中文课。","Shì a, tā jiāo de hěn hǎo. Yīnwèi tā, wǒmen dōu fēicháng ài shàng Zhōngwén kè.","Oui, elle enseigne très bien. Grâce à elle, nous avons tous fini par adorer les cours de chinois.",0.35),
  C("我们给她准备个新年礼物吧。你觉得送给她什么好呢？","Wǒmen gěi tā zhǔnbèi gè xīnnián lǐwù ba. Nǐ juéde sòng gěi tā shénme hǎo ne?","Préparons-lui un cadeau de nouvel an. Qu'est-ce que tu penses qu'on devrait lui offrir ?",0.35),
  C("王老师喜欢花，就送给她花吧。","Wáng lǎoshī xǐhuan huā, jiù sòng gěi tā huā ba.","La professeure Wang aime les fleurs, offrons-lui donc des fleurs.",0.4),
  C("那我们去花店看看，现在买花的人多，希望花店还有漂亮的花。","Nà wǒmen qù huādiàn kànkan, xiànzài mǎi huā de rén duō, xīwàng huādiàn hái yǒu piàoliang de huā.","Alors allons voir à la boutique de fleurs, il y a beaucoup de monde qui achète des fleurs en ce moment, espérons qu'il reste de belles fleurs.",0.28),

  N("« Le nouvel an » se dit [[新年|xīnnián]]. Dites : « le temps passe vraiment vite ! Le nouvel an va bientôt arriver. »"),
  ...teach2("新年","xīnnián","le nouvel an"),
  TH(),
  C("时间过得真快啊！新年就要到了。","Shíjiān guò de zhēn kuài a! Xīnnián jiù yào dào le.","Le temps passe vraiment vite ! Le nouvel an va bientôt arriver.",0.4), HOLD(),

  N("« Enseigner » se dit [[教|jiāo]]. On vous dit : « cette année, la professeure Wang nous a enseigné le chinois, elle a travaillé dur chaque jour. »"),
  ...teach2("教","jiāo","enseigner"),
  C("这一年王老师教我们中文，每天工作都很累。","Zhè yì nián Wáng lǎoshī jiāo wǒmen Zhōngwén, měitiān gōngzuò dōu hěn lèi.","Cette année, la professeure Wang nous a enseigné le chinois, elle a travaillé dur chaque jour.",0.35),

  N("Dites : « oui, elle enseigne très bien. Grâce à elle, nous avons tous fini par adorer les cours de chinois. »"),
  TH(),
  C("是啊，她教得很好。因为她，我们都非常爱上中文课。","Shì a, tā jiāo de hěn hǎo. Yīnwèi tā, wǒmen dōu fēicháng ài shàng Zhōngwén kè.","Oui, elle enseigne très bien. Grâce à elle, nous avons tous fini par adorer les cours de chinois.",0.35), HOLD(),

  N("On vous dit : « préparons-lui un cadeau de nouvel an. Qu'est-ce que tu penses qu'on devrait lui offrir ? »"),
  C("我们给她准备个新年礼物吧。你觉得送给她什么好呢？","Wǒmen gěi tā zhǔnbèi gè xīnnián lǐwù ba. Nǐ juéde sòng gěi tā shénme hǎo ne?","Préparons-lui un cadeau de nouvel an. Qu'est-ce que tu penses qu'on devrait lui offrir ?",0.35),

  N("Grammaire : la phrase à double complément d'objet peut se former avec les verbes 拿, 送 ou 卖 suivis de 给, puis la personne, puis la chose. Structure : sujet + verbe + 给 + personne + chose. Écoutez ces exemples."),
  C("王老师喜欢花，就送给她花吧。","Wáng lǎoshī xǐhuan huā, jiù sòng gěi tā huā ba.","La professeure Wang aime les fleurs, offrons-lui donc des fleurs.",0.4),
  C("她拿给我一杯水。","Tā ná gěi wǒ yì bēi shuǐ.","Elle m'a apporté un verre d'eau.",0.5),
  C("他卖给我一本中文书。","Tā mài gěi wǒ yì běn Zhōngwén shū.","Il m'a vendu un livre de chinois.",0.45),
  N("Essayez, avec 拿给 : dites « elle m'a apporté un verre d'eau. »"),
  TH(),
  C("她拿给我一杯水。","Tā ná gěi wǒ yì bēi shuǐ.","Elle m'a apporté un verre d'eau.",0.5), HOLD(),
  N("Dites, avec 送给 : « la professeure Wang aime les fleurs, offrons-lui donc des fleurs. »"),
  TH(),
  C("王老师喜欢花，就送给她花吧。","Wáng lǎoshī xǐhuan huā, jiù sòng gěi tā huā ba.","La professeure Wang aime les fleurs, offrons-lui donc des fleurs.",0.4), HOLD(),

  N("« Espérer » se dit [[希望|xīwàng]]. On vous dit : « alors allons voir à la boutique de fleurs, il y a beaucoup de monde qui achète des fleurs en ce moment, espérons qu'il reste de belles fleurs. »"),
  ...teach2("希望","xīwàng","espérer"),
  C("那我们去花店看看，现在买花的人多，希望花店还有漂亮的花。","Nà wǒmen qù huādiàn kànkan, xiànzài mǎi huā de rén duō, xīwàng huādiàn hái yǒu piàoliang de huā.","Alors allons voir à la boutique de fleurs, il y a beaucoup de monde qui achète des fleurs en ce moment, espérons qu'il reste de belles fleurs.",0.28),

  N("Révision. Dites, avec 卖给 : il m'a vendu un livre de chinois."),
  TH(),
  C("他卖给我一本中文书。","Tā mài gěi wǒ yì běn Zhōngwén shū.","Il m'a vendu un livre de chinois.",0.45),
  N("Fin de la partie 1. À la partie 2 : une dictée dans la classe de la professeure Wang Yifei."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"多了十个", title:"Partie 2 · La dictée", desc:"上面 · 洗手间 · 里面 · 笔 · comparatif avec quantité précise",
    build(){ return [
  N("Partie 2. Dans la classe, la professeure Wang Yifei fait une dictée avec les élèves, dont la nouvelle camarade Annie. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("王老师，今天的词比昨天多了十个。","Wáng lǎoshī, jīntiān de cí bǐ zuótiān duōle shí gè.","Professeure Wang, il y a dix mots de plus aujourd'hui qu'hier.",0.35),
  C("是啊！你们都学会了吗？","Shì a! Nǐmen dōu xuéhuìle ma?","Eh oui ! Vous les avez tous appris ?",0.5),
  C("学会了，没有问题。","Xuéhuì le, méiyǒu wèntí.","On les a appris, pas de problème.",0.5),
  C("好。现在我来说，你们在本子上面写。","Hǎo. Xiànzài wǒ lái shuō, nǐmen zài běnzi shàngmiàn xiě.","Bien. Maintenant je dicte, et vous écrivez sur votre cahier.",0.4),
  C("同学们，\"洗手间\"的\"间\"字写错了，它的里面是\"日\"，不是\"口\"。","Tóngxuémen, \"xǐshǒujiān\" de \"jiān\" zì xiěcuò le, tā de lǐmiàn shì \"rì\", bú shì \"kǒu\".","Les élèves, le caractère 间 de 洗手间 (les toilettes) est mal écrit, à l'intérieur c'est 日 (soleil), pas 口 (bouche).",0.28),
  C("\"日\"比\"口\"多一笔，写\"口\"就是\"问题\"的\"问\"了。","\"Rì\" bǐ \"kǒu\" duō yì bǐ, xiě \"kǒu\" jiù shì wèntí de wèn le.","日 a un trait de plus que 口, si on écrit 口 ça devient le 问 de 问题 (question).",0.28),
  C("没错，你说得很对。","Méi cuò, nǐ shuō de hěn duì.","C'est exact, tu as tout à fait raison.",0.5),

  N("Grammaire : dans une phrase comparative avec 比, on peut ajouter un syntagme numéral-classificateur après l'adjectif pour préciser exactement la différence. Structure : A 比 B + adjectif + syntagme numéral-classificateur. Écoutez ces exemples."),
  C("今天的词比昨天多了十个。","Jīntiān de cí bǐ zuótiān duōle shí gè.","Il y a dix mots de plus aujourd'hui qu'hier.",0.4),
  C("姐姐比我大三岁。","Jiějie bǐ wǒ dà sān suì.","Ma grande sœur a trois ans de plus que moi.",0.45),
  C("坐飞机比坐火车快五个多小时。","Zuò fēijī bǐ zuò huǒchē kuài wǔ gè duō xiǎoshí.","Prendre l'avion est plus de cinq heures plus rapide que prendre le train.",0.35),
  N("Essayez : dites « ma grande sœur a trois ans de plus que moi. »"),
  TH(),
  C("姐姐比我大三岁。","Jiějie bǐ wǒ dà sān suì.","Ma grande sœur a trois ans de plus que moi.",0.45), HOLD(),
  N("Dites : « professeure Wang, il y a dix mots de plus aujourd'hui qu'hier. »"),
  TH(),
  C("王老师，今天的词比昨天多了十个。","Wáng lǎoshī, jīntiān de cí bǐ zuótiān duōle shí gè.","Professeure Wang, il y a dix mots de plus aujourd'hui qu'hier.",0.35), HOLD(),

  N("On vous demande : « eh oui ! Vous les avez tous appris ? »"),
  C("是啊！你们都学会了吗？","Shì a! Nǐmen dōu xuéhuìle ma?","Eh oui ! Vous les avez tous appris ?",0.5),
  N("Dites, c'est Annie qui répond : « on les a appris, pas de problème. »"),
  TH(),
  C("学会了，没有问题。","Xuéhuì le, méiyǒu wèntí.","On les a appris, pas de problème.",0.5), HOLD(),

  N("« Le dessus, la surface » se dit [[上面|shàngmiàn]]. On vous dit : « bien. Maintenant je dicte, et vous écrivez sur votre cahier. »"),
  ...teach2("上面","shàngmiàn","le dessus, la surface"),
  C("好。现在我来说，你们在本子上面写。","Hǎo. Xiànzài wǒ lái shuō, nǐmen zài běnzi shàngmiàn xiě.","Bien. Maintenant je dicte, et vous écrivez sur votre cahier.",0.4),

  N("« Les toilettes » se dit [[洗手间|xǐshǒujiān]], et « l'intérieur » se dit [[里面|lǐmiàn]]. On vous corrige : « les élèves, le caractère 间 de 洗手间 est mal écrit, à l'intérieur c'est 日, pas 口. »"),
  ...teach2("洗手间，里面","xǐshǒujiān, lǐmiàn","les toilettes ; l'intérieur"),
  C("同学们，\"洗手间\"的\"间\"字写错了，它的里面是\"日\"，不是\"口\"。","Tóngxuémen, \"xǐshǒujiān\" de \"jiān\" zì xiěcuò le, tā de lǐmiàn shì \"rì\", bú shì \"kǒu\".","Les élèves, le caractère 间 de 洗手间 (les toilettes) est mal écrit, à l'intérieur c'est 日 (soleil), pas 口 (bouche).",0.28),

  N("« Un trait (d'écriture) » se dit [[笔|bǐ]]. Dites : « 日 a un trait de plus que 口, si on écrit 口 ça devient le 问 de 问题. »"),
  ...teach2("笔","bǐ","un trait (d'écriture, classificateur)"),
  TH(),
  C("\"日\"比\"口\"多一笔，写\"口\"就是\"问题\"的\"问\"了。","\"Rì\" bǐ \"kǒu\" duō yì bǐ, xiě \"kǒu\" jiù shì wèntí de wèn le.","日 a un trait de plus que 口, si on écrit 口 ça devient le 问 de 问题 (question).",0.28), HOLD(),
  N("On vous répond : « c'est exact, tu as tout à fait raison. »"),
  C("没错，你说得很对。","Méi cuò, nǐ shuō de hěn duì.","C'est exact, tu as tout à fait raison.",0.5),

  N("Révision. Dites, avec un syntagme numéral-classificateur : prendre l'avion est plus de cinq heures plus rapide que prendre le train."),
  TH(),
  C("坐飞机比坐火车快五个多小时。","Zuò fēijī bǐ zuò huǒchē kuài wǔ gè duō xiǎoshí.","Prendre l'avion est plus de cinq heures plus rapide que prendre le train.",0.35),
  N("Fin de la partie 2. À la partie 3 : Annie offre un cadeau à Bai Jiayue."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"贵一点儿", title:"Partie 3 · Le cadeau d'Annie", desc:"可能 · 上网 · 那样 · comparatif avec petite différence",
    build(){ return [
  N("Partie 3. Annie montre un nouveau cahier à Bai Jiayue. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("家月，你觉得这个本子怎么样？","Jiāyuè, nǐ juéde zhège běnzi zěnmeyàng?","Jiayue, tu trouves ce cahier comment ?",0.45),
  C("很漂亮，多少钱一个？","Hěn piàoliang, duōshao qián yí gè?","Très joli, combien ça coûte l'unité ?",0.5),
  C("比我们一起买的那个本子贵一点儿。","Bǐ wǒmen yìqǐ mǎi de nàge běnzi guì yìdiǎnr.","Un peu plus cher que le cahier qu'on avait acheté ensemble.",0.35),
  C("这么漂亮的本子，不可能贵一点儿吧？","Zhème piàoliang de běnzi, bù kěnéng guì yìdiǎnr ba?","Un cahier aussi joli, ça ne peut pas être juste un peu plus cher, si ?",0.35),
  C("我是上网买的，真没那么贵。我买了两个，送你一个。","Wǒ shì shàngwǎng mǎi de, zhēn méi nàme guì. Wǒ mǎile liǎng gè, sòng nǐ yí gè.","Je l'ai acheté en ligne, ce n'est vraiment pas si cher. J'en ai acheté deux, je t'en offre un.",0.3),
  C("谢谢！那我送给你什么呢？","Xièxie! Nà wǒ sòng gěi nǐ shénme ne?","Merci ! Alors qu'est-ce que je t'offre, moi ?",0.4),
  C("咖啡杯吧，我最喜欢喝咖啡了。","Kāfēibēi ba, wǒ zuì xǐhuan hē kāfēi le.","Une tasse à café, j'adore boire du café.",0.45),
  C("好，那样我们就都有新年礼物了！","Hǎo, nàyàng wǒmen jiù dōu yǒu xīnnián lǐwù le!","D'accord, comme ça on aura chacune un cadeau de nouvel an !",0.35),

  N("Dites : « Jiayue, tu trouves ce cahier comment ? »"),
  TH(),
  C("家月，你觉得这个本子怎么样？","Jiāyuè, nǐ juéde zhège běnzi zěnmeyàng?","Jiayue, tu trouves ce cahier comment ?",0.45), HOLD(),
  N("On vous répond : « très joli, combien ça coûte l'unité ? »"),
  C("很漂亮，多少钱一个？","Hěn piàoliang, duōshao qián yí gè?","Très joli, combien ça coûte l'unité ?",0.5),

  N("Grammaire : dans une phrase comparative avec 比, on peut ajouter 一点儿 ou 一些 après l'adjectif pour indiquer une petite différence. Structure : A 比 B + adjectif + 一点儿/一些. Écoutez ces exemples."),
  C("比我们一起买的那个本子贵一点儿。","Bǐ wǒmen yìqǐ mǎi de nàge běnzi guì yìdiǎnr.","Un peu plus cher que le cahier qu'on avait acheté ensemble.",0.35),
  C("姐姐比我高一点儿。","Jiějie bǐ wǒ gāo yìdiǎnr.","Ma grande sœur est un peu plus grande que moi.",0.5),
  C("那间教室比这间大一些。","Nà jiān jiàoshì bǐ zhè jiān dà yìxiē.","Cette salle de classe-là est un peu plus grande que celle-ci.",0.4),
  N("Essayez, avec 一点儿 : dites « ma grande sœur est un peu plus grande que moi. »"),
  TH(),
  C("姐姐比我高一点儿。","Jiějie bǐ wǒ gāo yìdiǎnr.","Ma grande sœur est un peu plus grande que moi.",0.5), HOLD(),
  N("Dites : « un peu plus cher que le cahier qu'on avait acheté ensemble. »"),
  TH(),
  C("比我们一起买的那个本子贵一点儿。","Bǐ wǒmen yìqǐ mǎi de nàge běnzi guì yìdiǎnr.","Un peu plus cher que le cahier qu'on avait acheté ensemble.",0.35), HOLD(),

  N("« Possible, probable » se dit [[可能|kěnéng]]. Dites : « un cahier aussi joli, ça ne peut pas être juste un peu plus cher, si ? »"),
  ...teach2("可能","kěnéng","possible, probable"),
  TH(),
  C("这么漂亮的本子，不可能贵一点儿吧？","Zhème piàoliang de běnzi, bù kěnéng guì yìdiǎnr ba?","Un cahier aussi joli, ça ne peut pas être juste un peu plus cher, si ?",0.35), HOLD(),

  N("« Se connecter à internet » se dit [[上网|shàngwǎng]]. On vous répond : « je l'ai acheté en ligne, ce n'est vraiment pas si cher. J'en ai acheté deux, je t'en offre un. »"),
  ...teach2("上网","shàngwǎng","se connecter à internet, aller en ligne"),
  C("我是上网买的，真没那么贵。我买了两个，送你一个。","Wǒ shì shàngwǎng mǎi de, zhēn méi nàme guì. Wǒ mǎile liǎng gè, sòng nǐ yí gè.","Je l'ai acheté en ligne, ce n'est vraiment pas si cher. J'en ai acheté deux, je t'en offre un.",0.3),

  N("Dites : « merci ! Alors qu'est-ce que je t'offre, moi ? »"),
  TH(),
  C("谢谢！那我送给你什么呢？","Xièxie! Nà wǒ sòng gěi nǐ shénme ne?","Merci ! Alors qu'est-ce que je t'offre, moi ?",0.4), HOLD(),
  N("On vous répond : « une tasse à café, j'adore boire du café. »"),
  C("咖啡杯吧，我最喜欢喝咖啡了。","Kāfēibēi ba, wǒ zuì xǐhuan hē kāfēi le.","Une tasse à café, j'adore boire du café.",0.45),

  N("« Ainsi, comme ça » se dit [[那样|nàyàng]]. Dites : « d'accord, comme ça on aura chacune un cadeau de nouvel an ! »"),
  ...teach2("那样","nàyàng","ainsi, comme ça"),
  TH(),
  C("好，那样我们就都有新年礼物了！","Hǎo, nàyàng wǒmen jiù dōu yǒu xīnnián lǐwù le!","D'accord, comme ça on aura chacune un cadeau de nouvel an !",0.35), HOLD(),

  N("Le soir, Bai Jiayue écrit dans son journal. « Dire, informer » se dit [[告诉|gàosu]], et « une classe » se dit [[班|bān]]. Écoutez ce qu'elle raconte."),
  ...teach2("告诉，班","gàosu, bān","dire, informer ; une classe"),
  C("新年就要到了，安妮送给我一个新本子。","Xīnnián jiù yào dào le, Ānnī sòng gěi wǒ yí gè xīn běnzi.","Le nouvel an approche, Annie m'a offert un nouveau cahier.",0.35),
  C("她告诉我是在网上买的，比我的本子贵一点儿。","Tā gàosu wǒ shì zài wǎngshang mǎi de, bǐ wǒ de běnzi guì yìdiǎnr.","Elle m'a dit qu'elle l'avait acheté en ligne, un peu plus cher que mon cahier.",0.3),
  C("我们班同学也送了王老师漂亮的花，希望她高高兴兴地过个新年。","Wǒmen bān tóngxué yě sòngle Wáng lǎoshī piàoliang de huā, xīwàng tā gāogāoxìngxìng de guò gè xīnnián.","Les camarades de notre classe ont aussi offert de belles fleurs à la professeure Wang, en espérant qu'elle passe un joyeux nouvel an.",0.25),
  N("Dites, avec 告诉 : elle m'a dit qu'elle l'avait acheté en ligne, un peu plus cher que mon cahier."),
  TH(),
  C("她告诉我是在网上买的，比我的本子贵一点儿。","Tā gàosu wǒ shì zài wǎngshang mǎi de, bǐ wǒ de běnzi guì yìdiǎnr.","Elle m'a dit qu'elle l'avait acheté en ligne, un peu plus cher que mon cahier.",0.3), HOLD(),

  // Révision finale de la leçon 13
  N("Révision finale de la leçon 13. Dites, avec le double complément d'objet : la professeure Wang aime les fleurs, offrons-lui donc des fleurs."),
  TH(),
  C("王老师喜欢花，就送给她花吧。","Wáng lǎoshī xǐhuan huā, jiù sòng gěi tā huā ba.","La professeure Wang aime les fleurs, offrons-lui donc des fleurs.",0.4),
  N("Dites, avec un syntagme numéral-classificateur : il y a dix mots de plus aujourd'hui qu'hier."),
  TH(),
  C("今天的词比昨天多了十个。","Jīntiān de cí bǐ zuótiān duōle shí gè.","Il y a dix mots de plus aujourd'hui qu'hier.",0.4),
  N("Dites, avec 一点儿 : un peu plus cher que le cahier qu'on avait acheté ensemble."),
  TH(),
  C("比我们一起买的那个本子贵一点儿。","Bǐ wǒmen yìqǐ mǎi de nàge běnzi guì yìdiǎnr.","Un peu plus cher que le cahier qu'on avait acheté ensemble.",0.35),
  N("Excellent ! Vous avez terminé la leçon 13 du HSK 2. Réécoutez-la demain, puis passez à la leçon 14. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("你找我有什么事情吗？","Nǐ zhǎo wǒ yǒu shénme shìqing ma?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我就是想告诉你，我要去上海旅游了。","Yī. Wǒ jiù shì xiǎng gàosu nǐ, wǒ yào qù Shànghǎi lǚyóu le.","",0.28),
  P(4,"…"),
  C("二、可能会下雨。","Èr. Kěnéng huì xià yǔ.","",0.55),
  P(4,"…"),
  C("三、没有，我还比他高一点儿呢。","Sān. Méiyǒu, wǒ hái bǐ tā gāo yìdiǎnr ne.","",0.4),
  TH(),
  C("我就是想告诉你，我要去上海旅游了。","Wǒ jiù shì xiǎng gàosu nǐ, wǒ yào qù Shànghǎi lǚyóu le.","",0.3), HOLD(),

  // Question 2
  C("明天天气怎么样？","Míngtiān tiānqì zěnmeyàng?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、可能会下雨。","Yī. Kěnéng huì xià yǔ.","",0.55),
  P(4,"…"),
  C("二、但是我没有女朋友，找谁一起去看电影呢？","Èr. Dànshì wǒ méiyǒu nǚpéngyou, zhǎo shéi yìqǐ qù kàn diànyǐng ne?","",0.28),
  P(4,"…"),
  C("三、我就是想告诉你，我要去上海旅游了。","Sān. Wǒ jiù shì xiǎng gàosu nǐ, wǒ yào qù Shànghǎi lǚyóu le.","",0.28),
  TH(),
  C("可能会下雨。","Kěnéng huì xià yǔ.","",0.6), HOLD(),

  // Question 3
  C("你儿子现在比你高了吧？","Nǐ érzi xiànzài bǐ nǐ gāole ba?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、没有，我还比他高一点儿呢。","Yī. Méiyǒu, wǒ hái bǐ tā gāo yìdiǎnr ne.","",0.4),
  P(4,"…"),
  C("二、可能会下雨。","Èr. Kěnéng huì xià yǔ.","",0.55),
  P(4,"…"),
  C("三、但是我没有女朋友，找谁一起去看电影呢？","Sān. Dànshì wǒ méiyǒu nǚpéngyou, zhǎo shéi yìqǐ qù kàn diànyǐng ne?","",0.28),
  TH(),
  C("没有，我还比他高一点儿呢。","Méiyǒu, wǒ hái bǐ tā gāo yìdiǎnr ne.","",0.4), HOLD(),

  // Question 4
  C("家月送了我两张电影票。","Jiāyuè sòngle wǒ liǎng zhāng diànyǐngpiào.","",0.35),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、但是我没有女朋友，找谁一起去看电影呢？","Yī. Dànshì wǒ méiyǒu nǚpéngyou, zhǎo shéi yìqǐ qù kàn diànyǐng ne?","",0.28),
  P(4,"…"),
  C("二、没有，我还比他高一点儿呢。","Èr. Méiyǒu, wǒ hái bǐ tā gāo yìdiǎnr ne.","",0.4),
  P(4,"…"),
  C("三、我就是想告诉你，我要去上海旅游了。","Sān. Wǒ jiù shì xiǎng gàosu nǐ, wǒ yào qù Shànghǎi lǚyóu le.","",0.28),
  TH(),
  C("但是我没有女朋友，找谁一起去看电影呢？","Dànshì wǒ méiyǒu nǚpéngyou, zhǎo shéi yìqǐ qù kàn diànyǐng ne?","",0.3), HOLD(),

  // Question 5
  C("我教会奶奶上网买东西了，她很高兴。她说：\"在家就能买东西，还比去商场买便宜一些，真不错！\"","Wǒ jiāohuì nǎinai shàngwǎng mǎi dōngxi le, tā hěn gāoxìng. Tā shuō: \"Zài jiā jiù néng mǎi dōngxi, hái bǐ qù shāngchǎng mǎi piányi yìxiē, zhēn búcuò!\"","",0.26),
  C("奶奶为什么很高兴？","Nǎinai wèi shénme hěn gāoxìng?","",0.45),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、买的东西好。","Yī. Mǎi de dōngxi hǎo.","",0.5),
  P(4,"…"),
  C("二、能去商场了。","Èr. Néng qù shāngchǎng le.","",0.5),
  P(4,"…"),
  C("三、会上网买东西了。","Sān. Huì shàngwǎng mǎi dōngxi le.","",0.4),
  TH(),
  C("会上网买东西了。","Huì shàngwǎng mǎi dōngxi le.","",0.45), HOLD(),

  // Question 6
  C("过完新年，我们就要开学了。陈天中告诉我，李老师要回国了，我们班会有一个新老师。他说新老师比李老师小两岁，个子高高的，还很爱笑。","Guòwán xīnnián, wǒmen jiù yào kāixué le. Chén Tiānzhōng gàosu wǒ, Lǐ lǎoshī yào huí guó le, wǒmen bān huì yǒu yí gè xīn lǎoshī. Tā shuō xīn lǎoshī bǐ Lǐ lǎoshī xiǎo liǎng suì, gèzi gāogāo de, hái hěn ài xiào.","",0.24),
  C("新老师：","Xīn lǎoshī:","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、回国了。","Yī. Huí guó le.","",0.6),
  P(4,"…"),
  C("二、个子高。","Èr. Gèzi gāo.","",0.6),
  P(4,"…"),
  C("三、比我们大两岁。","Sān. Bǐ wǒmen dà liǎng suì.","",0.5),
  TH(),
  C("个子高。","Gèzi gāo.","",0.65), HOLD(),

  // Question 7
  C("今天下班回到家，我一开门，丈夫就送给我一个礼物。没想到，他记得我的生日，早早地回来做了生日面，还给我准备了生日礼物。","Jīntiān xiàbān huídào jiā, wǒ yì kāimén, zhàngfu jiù sòng gěi wǒ yí gè lǐwù. Méi xiǎngdào, tā jìde wǒ de shēngrì, zǎozǎo de huílái zuòle shēngrìmiàn, hái gěi wǒ zhǔnbèile shēngrì lǐwù.","",0.26),
  C("丈夫：","Zhàngfu:","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、没有去上班。","Yī. Méiyǒu qù shàngbān.","",0.5),
  P(4,"…"),
  C("二、没有准备礼物。","Èr. Méiyǒu zhǔnbèi lǐwù.","",0.45),
  P(4,"…"),
  C("三、记得妻子生日。","Sān. Jìde qīzi shēngrì.","",0.45),
  TH(),
  C("记得妻子生日。","Jìde qīzi shēngrì.","",0.5), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 14."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
