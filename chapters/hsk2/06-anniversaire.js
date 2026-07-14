/* ============================================================
   HSK 2 · Leçon 6 — 小雪，生日快乐！Joyeux anniversaire, Xiaoxue !
   D'après « 新HSK教程 2 », leçon 6.
   Vocabulaire de la leçon :
   生日 · 忘 · 画 · 画笔 · 蛋糕 · 快乐 · 打开 ·
   长 · 鱼 · 肉 · 过 (passer, fêter) · 地 · 床 · 舒服
   Grammaire : redoublement des adjectifs (AA / AABB) ·
   locution fixe 什么的 (« et ainsi de suite ») ·
   particule structurale 地 (devant un verbe, pour la manière).
   Structure : leçon → 3 parties (les 3 dialogues du manuel) +
   texte 4 (journal) intégré en révision de la partie 3.
   Nouveau personnage : Liu Xiaoming, le petit frère de Liu Xiaoxue.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-06",
  badge: 6,
  hanzi: "小雪，生日快乐！",
  title: "Leçon 6 · L'anniversaire de Xiaoxue",
  desc: "3 parties · redoublement des adjectifs · 什么的 · particule 地",
  intro: "C'est l'anniversaire de Liu Xiaoxue. Toute la famille — dont son petit frère Liu Xiaoming — se retrouve pour fêter ça. Au programme : le redoublement des adjectifs pour intensifier ou exprimer l'affection, la locution 什么的 (« et ainsi de suite »), et la particule 地 qui décrit la manière d'agir.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"准备礼物", title:"Partie 1 · Un cadeau pour Xiaoxue", desc:"生日 · 忘 · 画 · 画笔 · 蛋糕",
    build(){ return [
  N("Partie 1. À la maison, Liu Ming et Wang Yixue discutent de l'anniversaire de leur fille. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("明天就是女儿的生日了。","Míngtiān jiù shì nǚ'ér de shēngrì le.","Demain, c'est déjà l'anniversaire de notre fille.",0.5),
  C("你不说，我还真忘了。我们给她准备个什么礼物呢？","Nǐ bù shuō, wǒ hái zhēn wàng le. Wǒmen gěi tā zhǔnbèi ge shénme lǐwù ne?","Si tu ne le disais pas, je l'aurais complètement oublié. Quel cadeau on lui prépare ?",0.4),
  C("她喜欢画画，你觉得画笔怎么样？","Tā xǐhuan huà huà, nǐ juéde huàbǐ zěnmeyàng?","Elle aime dessiner, que penses-tu de crayons de couleur ?",0.45),
  C("就送画笔吧！","Jiù sòng huàbǐ ba!","Va pour les crayons de couleur !",0.6),
  C("那我明天上午就去买。","Nà wǒ míngtiān shàngwǔ jiù qù mǎi.","Alors j'irai les acheter demain matin.",0.5),
  C("好的！我再给她买个大大的生日蛋糕。","Hǎo de! Wǒ zài gěi tā mǎi ge dàdà de shēngrì dàngāo.","D'accord ! Je vais aussi lui acheter un grand, grand gâteau d'anniversaire.",0.45),

  N("« L'anniversaire » se dit [[生日|shēngrì]]. Écoutez et répétez."),
  ...teach2("生日","shēngrì","l'anniversaire"),
  N("Dites : « demain, c'est déjà l'anniversaire de notre fille. »"),
  TH(),
  C("明天就是女儿的生日了。","Míngtiān jiù shì nǚ'ér de shēngrì le.","Demain, c'est déjà l'anniversaire de notre fille.",0.5), HOLD(),

  N("« Oublier » se dit [[忘|wàng]]. Écoutez et répétez."),
  ...teach2("忘","wàng","oublier"),
  N("Répondez : « si tu ne le disais pas, je l'aurais complètement oublié. Quel cadeau on lui prépare ? »"),
  TH(),
  C("你不说，我还真忘了。我们给她准备个什么礼物呢？","Nǐ bù shuō, wǒ hái zhēn wàng le. Wǒmen gěi tā zhǔnbèi ge shénme lǐwù ne?","Si tu ne le disais pas, je l'aurais complètement oublié. Quel cadeau on lui prépare ?",0.4), HOLD(),

  N("« Dessiner » se dit [[画|huà]], et « les crayons de couleur » se disent [[画笔|huàbǐ]]. Écoutez et répétez."),
  ...teach2("画，画笔","huà, huàbǐ","dessiner ; les crayons de couleur"),
  N("Suggérez : « elle aime dessiner, que penses-tu de crayons de couleur ? »"),
  TH(),
  C("她喜欢画画，你觉得画笔怎么样？","Tā xǐhuan huà huà, nǐ juéde huàbǐ zěnmeyàng?","Elle aime dessiner, que penses-tu de crayons de couleur ?",0.45), HOLD(),
  N("On vous répond : « va pour les crayons de couleur ! »"),
  C("就送画笔吧！","Jiù sòng huàbǐ ba!","Va pour les crayons de couleur !",0.6),
  N("Dites : « alors j'irai les acheter demain matin. »"),
  TH(),
  C("那我明天上午就去买。","Nà wǒ míngtiān shàngwǔ jiù qù mǎi.","Alors j'irai les acheter demain matin.",0.5), HOLD(),

  N("« Le gâteau » se dit [[蛋糕|dàngāo]]. Écoutez et répétez."),
  ...teach2("蛋糕","dàngāo","le gâteau"),
  N("Grammaire : le redoublement des adjectifs. Un adjectif monosyllabique « A » se redouble en « AA », et un adjectif dissyllabique « AB » se redouble le plus souvent en « AABB ». Cela renforce l'intensité ou exprime une nuance affectueuse. Écoutez ces exemples."),
  C("我再给她买个大大的生日蛋糕。","Wǒ zài gěi tā mǎi ge dàdà de shēngrì dàngāo.","Je vais aussi lui acheter un grand, grand gâteau d'anniversaire.",0.4),
  C("这只猫小小的，真让人喜欢。","Zhè zhī māo xiǎoxiǎo de, zhēn ràng rén xǐhuan.","Ce chat, tout petit, tout petit, on ne peut que l'aimer.",0.45),
  C("一雪的女儿每天都漂漂亮亮的。","Yīxuě de nǚ'ér měitiān dōu piàopiàoliangliang de.","La fille de Yixue est chaque jour toute jolie, toute jolie.",0.4),
  N("Essayez : dites « ce chat, tout petit, tout petit, on ne peut que l'aimer. »"),
  TH(),
  C("这只猫小小的，真让人喜欢。","Zhè zhī māo xiǎoxiǎo de, zhēn ràng rén xǐhuan.","Ce chat, tout petit, tout petit, on ne peut que l'aimer.",0.45), HOLD(),
  N("Concluez le dialogue : « d'accord ! Je vais aussi lui acheter un grand, grand gâteau d'anniversaire. »"),
  TH(),
  C("好的！我再给她买个大大的生日蛋糕。","Hǎo de! Wǒ zài gěi tā mǎi ge dàdà de shēngrì dàngāo.","D'accord ! Je vais aussi lui acheter un grand, grand gâteau d'anniversaire.",0.45), HOLD(),

  N("Révision. Dites, avec un adjectif redoublé : la fille de Yixue est chaque jour toute jolie, toute jolie."),
  TH(),
  C("一雪的女儿每天都漂漂亮亮的。","Yīxuě de nǚ'ér měitiān dōu piàopiàoliangliang de.","La fille de Yixue est chaque jour toute jolie, toute jolie.",0.45),
  N("Fin de la partie 1. À la partie 2 : le jour J, Liu Xiaoxue ouvre son cadeau — et l'on rencontre son petit frère, Liu Xiaoming."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"打开礼物", title:"Partie 2 · Le petit frère Xiaoming", desc:"快乐 · 打开 · 什么的",
    build(){ return [
  N("Partie 2. Nouveau personnage : Liu Xiaoming, le petit frère de Liu Xiaoxue. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("小雪，生日快乐！","Xiǎoxuě, shēngrì kuàilè!","Xiaoxue, joyeux anniversaire !",0.55),
  C("姐姐，生日快乐！","Jiějie, shēngrì kuàilè!","Grande sœur, joyeux anniversaire !",0.55),
  C("小雪，这是爸爸、妈妈送你的礼物。","Xiǎoxuě, zhè shì bàba, māma sòng nǐ de lǐwù.","Xiaoxue, voici un cadeau de la part de papa et maman.",0.45),
  C("你打开看看喜欢不喜欢。","Nǐ dǎkāi kànkan xǐhuan bu xǐhuan.","Ouvre-le pour voir si ça te plaît.",0.5),
  C("画笔！我很喜欢！","Huàbǐ! Wǒ hěn xǐhuan!","Des crayons de couleur ! Je les adore !",0.6),
  C("那你想画点儿什么？","Nà nǐ xiǎng huà diǎnr shénme?","Alors qu'est-ce que tu voudrais dessiner ?",0.5),
  C("画我们的家！有爸爸、妈妈、弟弟，还有黑色的狗、白色的猫什么的。","Huà wǒmen de jiā! Yǒu bàba, māma, dìdi, hái yǒu hēisè de gǒu, báisè de māo shénmede.","Dessiner notre famille ! Avec papa, maman, petit frère, et aussi le chien noir, le chat blanc, et tout ça.",0.35),
  C("那我要画一个穿白色衣服的姐姐。","Nà wǒ yào huà yí ge chuān báisè yīfu de jiějie.","Alors moi, je vais dessiner une grande sœur en habits blancs.",0.4),
  N("Révision : dites « je vais aussi lui acheter un grand, grand gâteau d'anniversaire. »"),
  TH(),
  C("我再给她买个大大的生日蛋糕。","Wǒ zài gěi tā mǎi ge dàdà de shēngrì dàngāo.","Je vais aussi lui acheter un grand, grand gâteau d'anniversaire.",0.45), HOLD(),

  N("« Heureux, joyeux » se dit [[快乐|kuàilè]]. Souhaitez : « Xiaoxue, joyeux anniversaire ! »"),
  ...teach2("快乐","kuàilè","heureux, joyeux"),
  TH(),
  C("小雪，生日快乐！","Xiǎoxuě, shēngrì kuàilè!","Xiaoxue, joyeux anniversaire !",0.55), HOLD(),
  N("Le petit frère de Xiaoxue s'appelle Liu Xiaoming, et il dit à son tour : « grande sœur, joyeux anniversaire ! »"),
  C("姐姐，生日快乐！","Jiějie, shēngrì kuàilè!","Grande sœur, joyeux anniversaire !",0.55),
  N("On lui dit : « Xiaoxue, voici un cadeau de la part de papa et maman. »"),
  C("小雪，这是爸爸、妈妈送你的礼物。","Xiǎoxuě, zhè shì bàba, māma sòng nǐ de lǐwù.","Xiaoxue, voici un cadeau de la part de papa et maman.",0.45),

  N("« Ouvrir » se dit [[打开|dǎkāi]]. Écoutez et répétez."),
  ...teach2("打开","dǎkāi","ouvrir"),
  N("Dites : « ouvre-le pour voir si ça te plaît. »"),
  TH(),
  C("你打开看看喜欢不喜欢。","Nǐ dǎkāi kànkan xǐhuan bu xǐhuan.","Ouvre-le pour voir si ça te plaît.",0.5), HOLD(),
  N("Elle s'exclame : « des crayons de couleur ! Je les adore ! »"),
  TH(),
  C("画笔！我很喜欢！","Huàbǐ! Wǒ hěn xǐhuan!","Des crayons de couleur ! Je les adore !",0.6), HOLD(),
  N("On lui demande : « alors qu'est-ce que tu voudrais dessiner ? »"),
  C("那你想画点儿什么？","Nà nǐ xiǎng huà diǎnr shénme?","Alors qu'est-ce que tu voudrais dessiner ?",0.5),

  N("Grammaire : la locution fixe 什么的 signifie « et ainsi de suite, et tout ça » — elle s'ajoute à la fin d'une énumération. Structure : …什么的. Écoutez ces exemples."),
  C("画我们的家！有爸爸、妈妈、弟弟，还有黑色的狗、白色的猫什么的。","Huà wǒmen de jiā! Yǒu bàba, māma, dìdi, hái yǒu hēisè de gǒu, báisè de māo shénmede.","Dessiner notre famille ! Avec papa, maman, petit frère, et aussi le chien noir, le chat blanc, et tout ça.",0.35),
  C("桌子上有电脑、杯子、书和画笔什么的。","Zhuōzi shang yǒu diànnǎo, bēizi, shū hé huàbǐ shénmede.","Sur la table il y a un ordinateur, une tasse, des livres, des crayons, et tout ça.",0.4),
  C("她拿来了一些水、面包和苹果什么的。","Tā nálái le yìxiē shuǐ, miànbāo hé píngguǒ shénmede.","Elle a apporté de l'eau, du pain, des pommes, et tout ça.",0.4),
  N("Essayez : dites « sur la table il y a un ordinateur, une tasse, des livres, des crayons, et tout ça. »"),
  TH(),
  C("桌子上有电脑、杯子、书和画笔什么的。","Zhuōzi shang yǒu diànnǎo, bēizi, shū hé huàbǐ shénmede.","Sur la table il y a un ordinateur, une tasse, des livres, des crayons, et tout ça.",0.4), HOLD(),
  N("Répondez, avec 什么的 : « dessiner notre famille ! Avec papa, maman, petit frère, et aussi le chien noir, le chat blanc, et tout ça. »"),
  TH(),
  C("画我们的家！有爸爸、妈妈、弟弟，还有黑色的狗、白色的猫什么的。","Huà wǒmen de jiā! Yǒu bàba, māma, dìdi, hái yǒu hēisè de gǒu, báisè de māo shénmede.","Dessiner notre famille ! Avec papa, maman, petit frère, et aussi le chien noir, le chat blanc, et tout ça.",0.35), HOLD(),
  N("Liu Xiaoming conclut : « alors moi, je vais dessiner une grande sœur en habits blancs. »"),
  C("那我要画一个穿白色衣服的姐姐。","Nà wǒ yào huà yí ge chuān báisè yīfu de jiějie.","Alors moi, je vais dessiner une grande sœur en habits blancs.",0.4),

  N("Révision. Dites, avec 什么的 : elle a apporté de l'eau, du pain, des pommes, et tout ça."),
  TH(),
  C("她拿来了一些水、面包和苹果什么的。","Tā nálái le yìxiē shuǐ, miànbāo hé píngguǒ shénmede.","Elle a apporté de l'eau, du pain, des pommes, et tout ça.",0.4),
  N("Fin de la partie 2. À la partie 3 : le repas d'anniversaire."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"高高兴兴地玩", title:"Partie 3 · Le repas d'anniversaire", desc:"长 · 鱼 · 肉 · 过 · 地 · 床 · 舒服",
    build(){ return [
  N("Partie 3. À table, la famille fête l'anniversaire de Liu Xiaoxue. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("小雪，看看今天有什么好吃的。","Xiǎoxuě, kànkan jīntiān yǒu shénme hǎochī de.","Xiaoxue, regarde tout ce qu'il y a de bon aujourd'hui.",0.5),
  C("长长的面条儿，大大的蛋糕。","Chángcháng de miàntiáor, dàdà de dàngāo.","De longues, longues nouilles, et un grand, grand gâteau.",0.5),
  C("你看，还有鱼啊肉啊什么的，都是你喜欢吃的。","Nǐ kàn, hái yǒu yú a ròu a shénmede, dōu shì nǐ xǐhuan chī de.","Regarde, il y a aussi du poisson, de la viande, et tout ça — tout ce que tu aimes manger.",0.4),
  C("谢谢爸爸、妈妈！","Xièxie bàba, māma!","Merci papa, merci maman !",0.55),
  C("快去叫弟弟过来吃饭吧，吃完饭我们还要出去玩呢。","Kuài qù jiào dìdi guòlái chī fàn ba, chīwán fàn wǒmen hái yào chūqù wán ne.","Va vite appeler ton petit frère pour venir manger, après manger on va encore sortir s'amuser.",0.4),
  C("过生日真好啊！","Guò shēngrì zhēn hǎo a!","C'est vraiment bien, les anniversaires !",0.55),
  C("是的，过生日就要吃好吃的，还要高高兴兴地玩。","Shì de, guò shēngrì jiù yào chī hǎochī de, hái yào gāogāoxìngxìng de wán.","Oui, pour un anniversaire il faut manger de bonnes choses, et s'amuser joyeusement.",0.4),
  N("Révision : dites, avec 什么的 : sur la table il y a un ordinateur, une tasse, des livres, des crayons, et tout ça."),
  TH(),
  C("桌子上有电脑、杯子、书和画笔什么的。","Zhuōzi shang yǒu diànnǎo, bēizi, shū hé huàbǐ shénmede.","Sur la table il y a un ordinateur, une tasse, des livres, des crayons, et tout ça.",0.4), HOLD(),

  N("« Long » se dit [[长|cháng]]. Dites, avec un adjectif redoublé : « de longues, longues nouilles, et un grand, grand gâteau. »"),
  ...teach2("长","cháng","long"),
  TH(),
  C("长长的面条儿，大大的蛋糕。","Chángcháng de miàntiáor, dàdà de dàngāo.","De longues, longues nouilles, et un grand, grand gâteau.",0.5), HOLD(),

  N("« Le poisson » se dit [[鱼|yú]], et « la viande » se dit [[肉|ròu]]. Écoutez et répétez."),
  ...teach2("鱼，肉","yú, ròu","le poisson, la viande"),
  N("Dites : « regarde, il y a aussi du poisson, de la viande, et tout ça — tout ce que tu aimes manger. »"),
  TH(),
  C("你看，还有鱼啊肉啊什么的，都是你喜欢吃的。","Nǐ kàn, hái yǒu yú a ròu a shénmede, dōu shì nǐ xǐhuan chī de.","Regarde, il y a aussi du poisson, de la viande, et tout ça — tout ce que tu aimes manger.",0.4), HOLD(),
  N("On vous remercie : « merci papa, merci maman ! »"),
  C("谢谢爸爸、妈妈！","Xièxie bàba, māma!","Merci papa, merci maman !",0.55),
  N("On vous demande : « va vite appeler ton petit frère pour venir manger, après manger on va encore sortir s'amuser. »"),
  C("快去叫弟弟过来吃饭吧，吃完饭我们还要出去玩呢。","Kuài qù jiào dìdi guòlái chī fàn ba, chīwán fàn wǒmen hái yào chūqù wán ne.","Va vite appeler ton petit frère pour venir manger, après manger on va encore sortir s'amuser.",0.4),
  N("Xiaoxue s'exclame : « c'est vraiment bien, les anniversaires ! »"),
  TH(),
  C("过生日真好啊！","Guò shēngrì zhēn hǎo a!","C'est vraiment bien, les anniversaires !",0.55), HOLD(),

  N("Grammaire : la particule structurale 地, placée entre un adjectif (souvent redoublé) et un verbe, indique la manière dont se déroule l'action. Écoutez ces exemples."),
  C("过生日就要吃好吃的，还要高高兴兴地玩。","Guò shēngrì jiù yào chī hǎochī de, hái yào gāogāoxìngxìng de wán.","Pour un anniversaire il faut manger de bonnes choses, et s'amuser joyeusement.",0.4),
  C("老师早早地到了教室。","Lǎoshī zǎozǎo de dàole jiàoshì.","Le professeur est arrivé très tôt en classe.",0.5),
  C("爸爸很快地吃完早饭，就去上班了。","Bàba hěn kuài de chīwán zǎofàn, jiù qù shàngbān le.","Papa a fini son petit-déjeuner très vite, puis est allé travailler.",0.45),
  N("« Passer (du temps), fêter » se dit [[过|guò]] — attention, différent du 过 vu en leçon 4 (l'expérience passée) : ici c'est un verbe à part entière. Essayez de dire, avec 地 : le professeur est arrivé très tôt en classe."),
  ...teach2("过","guò","passer (du temps), fêter"),
  TH(),
  C("老师早早地到了教室。","Lǎoshī zǎozǎo de dàole jiàoshì.","Le professeur est arrivé très tôt en classe.",0.5), HOLD(),
  N("Concluez le dialogue, avec 地 : « oui, pour un anniversaire il faut manger de bonnes choses, et s'amuser joyeusement. »"),
  TH(),
  C("是的，过生日就要吃好吃的，还要高高兴兴地玩。","Shì de, guò shēngrì jiù yào chī hǎochī de, hái yào gāogāoxìngxìng de wán.","Oui, pour un anniversaire il faut manger de bonnes choses, et s'amuser joyeusement.",0.4), HOLD(),

  N("Le soir, Wang Yixue écrit dans son journal. Écoutez ce qu'elle raconte."),
  C("今天是女儿的生日。我们买了蛋糕，做了面条儿，还做了鱼啊肉啊什么的。","Jīntiān shì nǚ'ér de shēngrì. Wǒmen mǎile dàngāo, zuòle miàntiáor, hái zuòle yú a ròu a shénmede.","Aujourd'hui c'est l'anniversaire de notre fille. Nous avons acheté un gâteau, fait des nouilles, et aussi préparé du poisson, de la viande, et tout ça.",0.35),
  C("吃完晚饭，一家人去看了个电影。","Chīwán wǎnfàn, yì jiā rén qù kànle ge diànyǐng.","Après le dîner, toute la famille est allée voir un film.",0.5),
  C("回家后，孩子们早早地就上床了。","Huí jiā hòu, háizimen zǎozǎo de jiù shàng chuáng le.","Une fois rentrés, les enfants sont allés se coucher très tôt.",0.45),
  C("明天不上学，他们说要舒舒服服地睡一觉，让我们晚点儿叫他们起床。","Míngtiān bú shàngxué, tāmen shuō yào shūshūfúfú de shuì yí jiào, ràng wǒmen wǎn diǎnr jiào tāmen qǐchuáng.","Comme il n'y a pas école demain, ils ont dit qu'ils voulaient dormir bien confortablement, et nous ont demandé de les réveiller plus tard.",0.35),
  C("这是很忙、很累，但很快乐的一天。","Zhè shì hěn máng, hěn lèi, dàn hěn kuàilè de yì tiān.","Ce fut une journée bien occupée, bien fatigante, mais très heureuse.",0.45),
  N("Deux mots nouveaux : [[床|chuáng]] veut dire « le lit », et [[舒服|shūfu]] veut dire « confortable »."),
  ...teach2("床","chuáng","le lit"),
  ...teach2("舒服","shūfu","confortable"),
  N("Dites, avec un adjectif redoublé et 地 : ils ont dit qu'ils voulaient dormir bien confortablement."),
  TH(),
  C("他们说要舒舒服服地睡一觉。","Tāmen shuō yào shūshūfúfú de shuì yí jiào.","Ils ont dit qu'ils voulaient dormir bien confortablement.",0.45), HOLD(),

  // Révision finale de la leçon 6
  N("Révision finale de la leçon 6. Dites, avec un adjectif redoublé : ce chat, tout petit, tout petit, on ne peut que l'aimer."),
  TH(),
  C("这只猫小小的，真让人喜欢。","Zhè zhī māo xiǎoxiǎo de, zhēn ràng rén xǐhuan.","Ce chat, tout petit, tout petit, on ne peut que l'aimer.",0.45),
  N("Dites, avec 什么的 : sur la table il y a un ordinateur, une tasse, des livres, des crayons, et tout ça."),
  TH(),
  C("桌子上有电脑、杯子、书和画笔什么的。","Zhuōzi shang yǒu diànnǎo, bēizi, shū hé huàbǐ shénmede.","Sur la table il y a un ordinateur, une tasse, des livres, des crayons, et tout ça.",0.4),
  N("Dites, avec la particule 地 : le professeur est arrivé très tôt en classe."),
  TH(),
  C("老师早早地到了教室。","Lǎoshī zǎozǎo de dàole jiàoshì.","Le professeur est arrivé très tôt en classe.",0.5),
  N("Excellent ! Vous avez terminé la leçon 6 du HSK 2. Réécoutez-la demain, puis passez à la leçon 7. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("爸爸为什么不来看电视？","Bàba wèi shénme bù lái kàn diànshì?","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、他累了，早早地去睡觉了。","Yī. Tā lèi le, zǎozǎo de qù shuìjiào le.","",0.45),
  P(4,"…"),
  C("二、我们能吃完吗？","Èr. Wǒmen néng chīwán ma?","",0.55),
  P(4,"…"),
  C("三、喜欢，我和弟弟都很喜欢。","Sān. Xǐhuan, wǒ hé dìdi dōu hěn xǐhuan.","",0.5),
  TH(),
  C("他累了，早早地去睡觉了。","Tā lèi le, zǎozǎo de qù shuìjiào le.","",0.5), HOLD(),

  // Question 2
  C("你喜欢学画画吗？","Nǐ xǐhuan xué huà huà ma?","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、这么长时间？我们去北京旅游吧？","Yī. Zhème cháng shíjiān? Wǒmen qù Běijīng lǚyóu ba?","",0.4),
  P(4,"…"),
  C("二、喜欢，我和弟弟都很喜欢。","Èr. Xǐhuan, wǒ hé dìdi dōu hěn xǐhuan.","",0.5),
  P(4,"…"),
  C("三、他累了，早早地去睡觉了。","Sān. Tā lèi le, zǎozǎo de qù shuìjiào le.","",0.45),
  TH(),
  C("喜欢，我和弟弟都很喜欢。","Xǐhuan, wǒ hé dìdi dōu hěn xǐhuan.","",0.5), HOLD(),

  // Question 3
  C("你看，我给你买了一个大大的生日蛋糕。","Nǐ kàn, wǒ gěi nǐ mǎile yí ge dàdà de shēngrì dàngāo.","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我们能吃完吗？","Yī. Wǒmen néng chīwán ma?","",0.55),
  P(4,"…"),
  C("二、喜欢，我和弟弟都很喜欢。","Èr. Xǐhuan, wǒ hé dìdi dōu hěn xǐhuan.","",0.5),
  P(4,"…"),
  C("三、这么长时间？我们去北京旅游吧？","Sān. Zhème cháng shíjiān? Wǒmen qù Běijīng lǚyóu ba?","",0.4),
  TH(),
  C("我们能吃完吗？","Wǒmen néng chīwán ma?","",0.6), HOLD(),

  // Question 4
  C("公司让我休息一下，下个星期再上班。","Gōngsī ràng wǒ xiūxi yíxià, xià ge xīngqī zài shàngbān.","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我们能吃完吗？","Yī. Wǒmen néng chīwán ma?","",0.55),
  P(4,"…"),
  C("二、他累了，早早地去睡觉了。","Èr. Tā lèi le, zǎozǎo de qù shuìjiào le.","",0.45),
  P(4,"…"),
  C("三、这么长时间？我们去北京旅游吧？","Sān. Zhème cháng shíjiān? Wǒmen qù Běijīng lǚyóu ba?","",0.4),
  TH(),
  C("这么长时间？我们去北京旅游吧？","Zhème cháng shíjiān? Wǒmen qù Běijīng lǚyóu ba?","",0.45), HOLD(),

  // Question 5
  C("今年过生日，爷爷给我买了新的画笔，有36个颜色。有了新画笔后，我每次都高高兴兴地去上画画课。","Jīnnián guò shēngrì, yéye gěi wǒ mǎile xīn de huàbǐ, yǒu sānshíliù ge yánsè. Yǒule xīn huàbǐ hòu, wǒ měi cì dōu gāogāoxìngxìng de qù shàng huàhuàkè.","",0.35),
  C("爷爷为什么给他买画笔？","Yéye wèi shénme gěi tā mǎi huàbǐ?","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、他过生日。","Yī. Tā guò shēngrì.","",0.6),
  P(4,"…"),
  C("二、老师让买的。","Èr. Lǎoshī ràng mǎi de.","",0.55),
  P(4,"…"),
  C("三、他的画笔颜色少。","Sān. Tā de huàbǐ yánsè shǎo.","",0.5),
  TH(),
  C("他过生日。","Tā guò shēngrì.","",0.65), HOLD(),

  // Question 6
  C("我的小猫每天都要到我的床上来跟我玩。今天我不太舒服，没让它上来。它有点儿不高兴，自己到床下面睡觉去了。","Wǒ de xiǎomāo měi tiān dōu yào dào wǒ de chuáng shang lái gēn wǒ wán. Jīntiān wǒ bú tài shūfu, méi ràng tā shànglái. Tā yǒudiǎnr bù gāoxìng, zìjǐ dào chuáng xiàmiàn shuìjiào qù le.","",0.35),
  C("他今天为什么不跟小猫玩？","Tā jīntiān wèi shénme bù gēn xiǎomāo wán?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、他不高兴。","Yī. Tā bù gāoxìng.","",0.6),
  P(4,"…"),
  C("二、他不舒服。","Èr. Tā bù shūfu.","",0.6),
  P(4,"…"),
  C("三、他想睡觉。","Sān. Tā xiǎng shuìjiào.","",0.6),
  TH(),
  C("他不舒服。","Tā bù shūfu.","",0.65), HOLD(),

  // Question 7
  C("小李生病了，今天没去上班，在家好好地睡了一觉。起床后，他去超市买了点儿水果、面包和奶茶什么的。","Xiǎo Lǐ shēngbìng le, jīntiān méi qù shàngbān, zài jiā hǎohǎo de shuìle yí jiào. Qǐchuáng hòu, tā qù chāoshì mǎile diǎnr shuǐguǒ, miànbāo hé nǎichá shénmede.","",0.35),
  C("小李为什么没去上班？","Xiǎo Lǐ wèi shénme méi qù shàngbān?","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、生病了。","Yī. Shēngbìng le.","",0.6),
  P(4,"…"),
  C("二、去超市了。","Èr. Qù chāoshì le.","",0.6),
  P(4,"…"),
  C("三、要买东西。","Sān. Yào mǎi dōngxi.","",0.6),
  TH(),
  C("生病了。","Shēngbìng le.","",0.65), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 7."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
