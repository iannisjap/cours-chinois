/* ============================================================
   HSK 1 · Leçon 9 — 我明天上午在学校学习 J'étudierai à l'école demain matin
   D'après « 新HSK教程 1 », leçon 9.
   Vocabulaire de la leçon :
   前边 · 边 · 家(classificateur) · 那个 · 外边 · 椅子 · 上 · 本 ·
   书 · 那 · 第 · 学习 · 做 · 白天 · 读书 · 和(préposition) ·
   朋友 · 唱 · 歌 · 好听 · 电视 · 狗 · 玩
   Attention aux réutilisations : 家 signifiait « famille/maison »
   (leçons 4/7), ici un classificateur pour compter les commerces ;
   和 signifiait « et » (leçon 4), ici une préposition « avec » ;
   前/外 (leçon 8) s'étendent en 前边/外边 avec le suffixe 边 ;
   做(zuò, faire) a la même prononciation que 坐(zuò, s'asseoir/
   prendre, leçon 6) mais un caractère différent.
   Grammaire : phrases d'existence (有/是) · ordre temps puis lieu ·
   préfixe ordinal 第.
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  group: "hsk1",
  id: "hsk1-09",
  badge: 9,
  hanzi: "在学校学习",
  title: "Leçon 9 · Il y a, ordinaux, loisirs",
  desc: "3 parties · 前边有 · 第二本书 · 唱歌好听",
  intro: "Leçon 9 du HSK 1 : dire ce qu'il y a quelque part avec 有/是, compter avec 第 (premier, deuxième…), et parler de ses loisirs du week-end.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"前边有", title:"Partie 1 · Il y a un cinéma", desc:"前边 · 边 · 家(classificateur) · 那个 · 外边",
    build(){ return [
  N("Bienvenue dans la leçon 9 du HSK 1. Aujourd'hui : dire ce qu'il y a quelque part, compter avec des ordinaux, et parler de ses loisirs. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("学校前边有一家电影院。","Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.","Il y a un cinéma devant l'école.",0.5),
  C("对。我们晚上去那个电影院看电影吧。","Duì. Wǒmen wǎnshang qù nàge diànyǐngyuàn kàn diànyǐng ba.","Oui. Allons voir un film dans ce cinéma ce soir.",0.5),
  C("好！我们七点在电影院外边见，好吗？","Hǎo! Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?","D'accord ! Retrouvons-nous devant le cinéma à 19 h, ça te va ?",0.5),
  C("好的，晚上七点见！","Hǎo de, wǎnshang qī diǎn jiàn!","D'accord, à 19 h ce soir !",0.5),
  N("D'abord, révision de la leçon 8 : dites « devant » et « dehors »."),
  TH(),
  C("前","qián","devant",0.6),
  C("外","wài","dehors",0.6), HOLD(),

  N("Vous connaissez déjà [[前|qián]], « devant ». On y ajoute souvent le suffixe [[边|biān]], qui marque un côté, une direction. « Devant », de façon plus complète, se dit [[前边|qiánbian]]. Écoutez et répétez."),
  ...teach2("前边","qiánbian","devant"),
  N("Pour dire qu'il y a quelque chose quelque part, on utilise [[有|yǒu]], que vous connaissez déjà. Et pour compter les commerces comme un cinéma ou un magasin, on utilise un nouveau classificateur : [[家|jiā]] — le même caractère que « famille », mais ici un classificateur. Écoutez et répétez."),
  ...teach2("一家电影院","yì jiā diànyǐngyuàn","un cinéma"),
  N("Dites : « Il y a un cinéma devant l'école. »"),
  TH(),
  C("学校前边有一家电影院。","Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.","Il y a un cinéma devant l'école.",0.55),
  C("学校前边有一家电影院。","Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.","Il y a un cinéma devant l'école.",0.6), HOLD(),

  N("« Ce », « celui-là » se dit [[那个|nàge]] — vous connaissez déjà [[个|ge]]. Répondez : « Oui. Allons voir un film dans ce cinéma ce soir. »"),
  TH(),
  C("对。我们晚上去那个电影院看电影吧。","Duì. Wǒmen wǎnshang qù nàge diànyǐngyuàn kàn diànyǐng ba.","Oui. Allons voir un film dans ce cinéma ce soir.",0.5),
  C("对。我们晚上去那个电影院看电影吧。","Duì. Wǒmen wǎnshang qù nàge diànyǐngyuàn kàn diànyǐng ba.","Oui. Allons voir un film dans ce cinéma ce soir.",0.55), HOLD(),

  N("Comme [[前边|qiánbian]], « dehors » se dit plus complètement [[外边|wàibian]] — vous connaissez déjà [[外|wài]]. Écoutez et répétez."),
  ...teach2("外边","wàibian","dehors"),
  N("Proposez : « D'accord ! Retrouvons-nous devant le cinéma à 19 h, ça te va ? »"),
  TH(),
  C("好！我们七点在电影院外边见，好吗？","Hǎo! Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?","D'accord ! Retrouvons-nous devant le cinéma à 19 h, ça te va ?",0.5),
  C("好！我们七点在电影院外边见，好吗？","Hǎo! Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?","D'accord ! Retrouvons-nous devant le cinéma à 19 h, ça te va ?",0.55), HOLD(),

  N("Répondez : « D'accord, à 19 h ce soir ! »"),
  TH(),
  C("好的，晚上七点见！","Hǎo de, wǎnshang qī diǎn jiàn!","D'accord, à 19 h ce soir !",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Dites : « Il y a un cinéma devant l'école. »"),
  TH(),
  C("学校前边有一家电影院。","Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.","Il y a un cinéma devant l'école.",0.55),
  N("On vous répond : « Oui. Allons voir un film dans ce cinéma ce soir. »"),
  C("对。我们晚上去那个电影院看电影吧。","Duì. Wǒmen wǎnshang qù nàge diànyǐngyuàn kàn diànyǐng ba.","Oui. Allons voir un film dans ce cinéma ce soir.",0.5),
  N("Proposez : « D'accord ! Retrouvons-nous devant le cinéma à 19 h, ça te va ? »"),
  TH(),
  C("好！我们七点在电影院外边见，好吗？","Hǎo! Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?","D'accord ! Retrouvons-nous devant le cinéma à 19 h, ça te va ?",0.5),
  N("Et pour finir, répondez : « D'accord, à 19 h ce soir ! »"),
  TH(),
  C("好的，晚上七点见！","Hǎo de, wǎnshang qī diǎn jiàn!","D'accord, à 19 h ce soir !",0.6), HOLD(),

  // Révision
  N("Révision. Dites : devant."),
  TH(),
  C("前边","qiánbian","devant",0.6),
  N("Dites : dehors."),
  TH(),
  C("外边","wàibian","dehors",0.6),
  N("Fin de la partie 1. À la partie 2 : un livre sur une chaise."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"第二本书", title:"Partie 2 · Un livre sur la chaise", desc:"椅子 · 上 · 本 · 书 · 那 · 第 · 学习",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("椅子上有一本中文书，那是谁的书？","Yǐzi shang yǒu yì běn Zhōngwén shū, nà shì shéi de shū?","Il y a un livre de chinois sur la chaise, c'est le livre de qui ?",0.5),
  C("是我的书，谢谢。这是我的第二本中文书。","Shì wǒ de shū, xièxie. Zhè shì wǒ de dì-èr běn Zhōngwén shū.","C'est mon livre, merci. C'est mon deuxième livre de chinois.",0.5),
  C("不客气。你明天上午在哪儿？","Bú kèqi. Nǐ míngtiān shàngwǔ zài nǎr?","De rien. Tu seras où demain matin ?",0.5),
  C("我明天上午在学校学习。","Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.","J'étudierai à l'école demain matin.",0.5),
  N("Révision : dites « il y a un cinéma devant l'école »."),
  TH(),
  C("学校前边有一家电影院。","Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.","Il y a un cinéma devant l'école.",0.55), HOLD(),

  N("« Une chaise » se dit [[椅子|yǐzi]]. Et « sur », « dessus », se dit [[上|shang]] — le contraire de [[下|xià]] que vous connaissez. Écoutez et répétez."),
  ...teach2("椅子上","yǐzi shang","sur la chaise"),
  N("Pour compter les livres, on utilise le classificateur [[本|běn]]. Et « un livre » se dit [[书|shū]]. Écoutez et répétez."),
  ...teach2("一本书","yì běn shū","un livre"),
  N("« Celui-là », « cela », se dit [[那|nà]] — le contraire de [[这|zhè]] que vous connaissez. Dites : « Il y a un livre de chinois sur la chaise, c'est le livre de qui ? »"),
  TH(),
  C("椅子上有一本中文书，那是谁的书？","Yǐzi shang yǒu yì běn Zhōngwén shū, nà shì shéi de shū?","Il y a un livre de chinois sur la chaise, c'est le livre de qui ?",0.5),
  C("椅子上有一本中文书，那是谁的书？","Yǐzi shang yǒu yì běn Zhōngwén shū, nà shì shéi de shū?","Il y a un livre de chinois sur la chaise, c'est le livre de qui ?",0.55), HOLD(),

  N("Pour dire « le premier », « le deuxième », on place [[第|dì]] devant le nombre. « Le deuxième » se dit [[第二|dì-èr]]. Écoutez et répétez."),
  ...teach2("第二本","dì-èr běn","le deuxième (livre)"),
  N("Répondez : « C'est mon livre, merci. C'est mon deuxième livre de chinois. »"),
  TH(),
  C("是我的书，谢谢。这是我的第二本中文书。","Shì wǒ de shū, xièxie. Zhè shì wǒ de dì-èr běn Zhōngwén shū.","C'est mon livre, merci. C'est mon deuxième livre de chinois.",0.5),
  C("是我的书，谢谢。这是我的第二本中文书。","Shì wǒ de shū, xièxie. Zhè shì wǒ de dì-èr běn Zhōngwén shū.","C'est mon livre, merci. C'est mon deuxième livre de chinois.",0.55), HOLD(),

  N("Demandez : « De rien. Tu seras où demain matin ? »"),
  TH(),
  C("不客气。你明天上午在哪儿？","Bú kèqi. Nǐ míngtiān shàngwǔ zài nǎr?","De rien. Tu seras où demain matin ?",0.6), HOLD(),

  N("« Étudier », « apprendre », se dit [[学习|xuéxí]]. Répondez : « J'étudierai à l'école demain matin. »"),
  TH(),
  C("我明天上午在学校学习。","Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.","J'étudierai à l'école demain matin.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Dites : « Il y a un livre de chinois sur la chaise, c'est le livre de qui ? »"),
  TH(),
  C("椅子上有一本中文书，那是谁的书？","Yǐzi shang yǒu yì běn Zhōngwén shū, nà shì shéi de shū?","Il y a un livre de chinois sur la chaise, c'est le livre de qui ?",0.5),
  N("On vous répond : « C'est mon livre, merci. C'est mon deuxième livre de chinois. »"),
  C("是我的书，谢谢。这是我的第二本中文书。","Shì wǒ de shū, xièxie. Zhè shì wǒ de dì-èr běn Zhōngwén shū.","C'est mon livre, merci. C'est mon deuxième livre de chinois.",0.5),
  N("Demandez : « De rien. Tu seras où demain matin ? »"),
  TH(),
  C("不客气。你明天上午在哪儿？","Bú kèqi. Nǐ míngtiān shàngwǔ zài nǎr?","De rien. Tu seras où demain matin ?",0.55),
  N("Répondez : « J'étudierai à l'école demain matin. »"),
  TH(),
  C("我明天上午在学校学习。","Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.","J'étudierai à l'école demain matin.",0.6), HOLD(),

  // Révision
  N("Révision. Dites : sur la chaise."),
  TH(),
  C("椅子上","yǐzi shang","sur la chaise",0.6),
  N("Dites : le deuxième livre."),
  TH(),
  C("第二本书","dì-èr běn shū","le deuxième livre",0.6),
  N("Fin de la partie 2. À la partie 3 : parler de ses loisirs du week-end."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"唱歌好听", title:"Partie 3 · Les loisirs du week-end", desc:"做 · 白天 · 读书 · 和(préposition) · 朋友 · 唱歌 · 好听 · 电视 · 狗 · 玩",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("明天星期六，你做什么？","Míngtiān Xīngqīliù, nǐ zuò shénme?","Demain c'est samedi, qu'est-ce que tu vas faire ?",0.5),
  C("我白天在家里读书，晚上和朋友们去外边唱歌。","Wǒ báitiān zài jiā li dúshū, wǎnshang hé péngyoumen qù wàibian chàng gē.","Le jour je lirai à la maison, le soir j'irai chanter dehors avec des amis.",0.5),
  C("你唱歌很好听。","Nǐ chàng gē hěn hǎotīng.","Tu chantes très bien.",0.5),
  C("谢谢！您星期六做什么？","Xièxie! Nín Xīngqīliù zuò shénme?","Merci ! Et vous, que faites-vous samedi ?",0.5),
  C("我在家里做饭、看电视，和孩子们、小狗玩。","Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.","Je cuisinerai, regarderai la télé, et jouerai avec mes enfants et mon chien à la maison.",0.5),
  C("我也有一只小狗。","Wǒ yě yǒu yì zhī xiǎo gǒu.","J'ai aussi un petit chien.",0.5),
  N("Révision : dites « j'étudierai à l'école demain matin »."),
  TH(),
  C("我明天上午在学校学习。","Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.","J'étudierai à l'école demain matin.",0.6), HOLD(),

  N("Attention, nouveau mot : [[做|zuò]] veut dire « faire ». Il se prononce comme [[坐|zuò]], « s'asseoir, prendre un transport », vu à la leçon 6 — même son, caractère différent. Écoutez et répétez."),
  ...teach2("做什么","zuò shénme","faire quoi"),
  N("Demandez : « Demain c'est samedi, qu'est-ce que tu vas faire ? »"),
  TH(),
  C("明天星期六，你做什么？","Míngtiān Xīngqīliù, nǐ zuò shénme?","Demain c'est samedi, qu'est-ce que tu vas faire ?",0.55),
  C("明天星期六，你做什么？","Míngtiān Xīngqīliù, nǐ zuò shénme?","Demain c'est samedi, qu'est-ce que tu vas faire ?",0.6), HOLD(),

  N("« Le jour », « la journée », se dit [[白天|báitiān]] — le contraire de [[晚上|wǎnshang]] que vous connaissez. Et « lire un livre » se dit [[读书|dúshū]] — vous reconnaissez [[书|shū]]. Écoutez et répétez."),
  ...teach2("白天读书","báitiān dúshū","lire pendant la journée"),
  N("Nouveau sens pour [[和|hé]] : vous le connaissiez comme « et », entre deux noms — ici, c'est une préposition, « avec ». « Un ami » se dit [[朋友|péngyou]]. Écoutez et répétez."),
  ...teach2("和朋友们","hé péngyoumen","avec des amis"),
  N("« Chanter » se dit [[唱|chàng]], et « une chanson » se dit [[歌|gē]]. Écoutez et répétez."),
  ...teach2("唱歌","chàng gē","chanter"),
  N("Répondez : « Le jour je lirai à la maison, le soir j'irai chanter dehors avec des amis. »"),
  TH(),
  C("我白天在家里读书，晚上和朋友们去外边唱歌。","Wǒ báitiān zài jiā li dúshū, wǎnshang hé péngyoumen qù wàibian chàng gē.","Le jour je lirai à la maison, le soir j'irai chanter dehors avec des amis.",0.5),
  C("我白天在家里读书，晚上和朋友们去外边唱歌。","Wǒ báitiān zài jiā li dúshū, wǎnshang hé péngyoumen qù wàibian chàng gē.","Le jour je lirai à la maison, le soir j'irai chanter dehors avec des amis.",0.55), HOLD(),

  N("« Agréable à entendre », « qui chante bien », se dit [[好听|hǎotīng]] — sur le même modèle que [[好吃|hǎochī]] et [[好看|hǎokàn]] que vous connaissez. Dites : « Tu chantes très bien. »"),
  TH(),
  C("你唱歌很好听。","Nǐ chàng gē hěn hǎotīng.","Tu chantes très bien.",0.6), HOLD(),

  N("Demandez poliment : « Merci ! Et vous, que faites-vous samedi ? »"),
  TH(),
  C("谢谢！您星期六做什么？","Xièxie! Nín Xīngqīliù zuò shénme?","Merci ! Et vous, que faites-vous samedi ?",0.6), HOLD(),

  N("« La télévision » se dit [[电视|diànshì]], et « un chien » se dit [[狗|gǒu]]. « Jouer », « s'amuser », se dit [[玩|wán]]. Écoutez et répétez."),
  ...teach2("看电视","kàn diànshì","regarder la télévision"),
  ...teach2("和小狗玩","hé xiǎo gǒu wán","jouer avec le petit chien"),
  N("Répondez : « Je cuisinerai, regarderai la télé, et jouerai avec mes enfants et mon chien à la maison. »"),
  TH(),
  C("我在家里做饭、看电视，和孩子们、小狗玩。","Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.","Je cuisinerai, regarderai la télé, et jouerai avec mes enfants et mon chien à la maison.",0.5),
  C("我在家里做饭、看电视，和孩子们、小狗玩。","Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.","Je cuisinerai, regarderai la télé, et jouerai avec mes enfants et mon chien à la maison.",0.55), HOLD(),

  N("Dites : « J'ai aussi un petit chien. »"),
  TH(),
  C("我也有一只小狗。","Wǒ yě yǒu yì zhī xiǎo gǒu.","J'ai aussi un petit chien.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : « Demain c'est samedi, qu'est-ce que tu vas faire ? »"),
  TH(),
  C("明天星期六，你做什么？","Míngtiān Xīngqīliù, nǐ zuò shénme?","Demain c'est samedi, qu'est-ce que tu vas faire ?",0.55),
  N("Répondez : « Le jour je lirai à la maison, le soir j'irai chanter dehors avec des amis. »"),
  TH(),
  C("我白天在家里读书，晚上和朋友们去外边唱歌。","Wǒ báitiān zài jiā li dúshū, wǎnshang hé péngyoumen qù wàibian chàng gē.","Le jour je lirai à la maison, le soir j'irai chanter dehors avec des amis.",0.5),
  N("On vous complimente : « Tu chantes très bien. » Répondez poliment : « Merci ! Et vous, que faites-vous samedi ? »"),
  TH(),
  C("谢谢！您星期六做什么？","Xièxie! Nín Xīngqīliù zuò shénme?","Merci ! Et vous, que faites-vous samedi ?",0.55),
  N("Répondez : « Je cuisinerai, regarderai la télé, et jouerai avec mes enfants et mon chien à la maison. »"),
  TH(),
  C("我在家里做饭、看电视，和孩子们、小狗玩。","Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.","Je cuisinerai, regarderai la télé, et jouerai avec mes enfants et mon chien à la maison.",0.5),
  N("Et pour finir, dites : « J'ai aussi un petit chien. »"),
  TH(),
  C("我也有一只小狗。","Wǒ yě yǒu yì zhī xiǎo gǒu.","J'ai aussi un petit chien.",0.6), HOLD(),

  // Révision finale de la leçon 9
  N("Révision finale de la leçon 9. Dites : il y a un cinéma devant l'école."),
  TH(),
  C("学校前边有一家电影院。","Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.","Il y a un cinéma devant l'école.",0.55),
  N("Dites : le deuxième livre."),
  TH(),
  C("第二本书","dì-èr běn shū","le deuxième livre",0.6),
  N("Demandez : qu'est-ce que tu vas faire ?"),
  TH(),
  C("你做什么？","Nǐ zuò shénme?","Qu'est-ce que tu vas faire ?",0.6),
  N("Dites : j'irai chanter avec des amis."),
  TH(),
  C("我和朋友们去唱歌。","Wǒ hé péngyoumen qù chàng gē.","J'irai chanter avec des amis.",0.6),
  N("Et pour finir : j'ai aussi un petit chien."),
  TH(),
  C("我也有一只小狗。","Wǒ yě yǒu yì zhī xiǎo gǒu.","J'ai aussi un petit chien.",0.6),
  N("Excellent ! Vous avez terminé la leçon 9. Vous savez dire ce qu'il y a quelque part, compter avec des ordinaux, et parler de vos loisirs. Réécoutez-la demain, puis passez à la leçon 10. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"6 questions · section lecture du cahier officiel HSK 1",
    build(){ return [
N("Pour finir cette leçon, six questions tirées de la section lecture du cahier d'exercices officiel HSK 1. Écoute chaque phrase, réfléchis, puis réponds à voix haute avant la correction."),

  // Q14 — associer
  N("Question 1. On te demande :"),
  C("桌子上有什么？","Zhuōzi shang yǒu shénme?","Qu'est-ce qu'il y a sur la table ?",0.6),
  N("Laquelle de ces réponses convient : A « À la maison. » ; B « Ma copine. » ; C « Un petit chat. » ?"),
  TH(),
  N("C'est la réponse C."),
  C("一只小猫。","Yì zhī xiǎo māo.","Un petit chat.",0.6), HOLD(),

  // Q15 — associer
  N("Question 2. On te demande :"),
  C("你今天下午在哪儿？","Nǐ jīntiān xiàwǔ zài nǎr?","Où es-tu cet après-midi ?",0.6),
  N("Laquelle convient : A « À la maison. » ; B « Un petit chat. » ; C « Ma copine. » ?"),
  TH(),
  N("C'est la réponse A."),
  C("在家里。","Zài jiā li.","À la maison.",0.6), HOLD(),

  // Q16 — associer
  N("Question 3. On te demande :"),
  C("你和谁在超市呢？","Nǐ hé shéi zài chāoshì ne?","Avec qui es-tu au supermarché ?",0.6),
  N("Laquelle convient : A « À la maison. » ; B « Ma copine. » ; C « Un petit chat. » ?"),
  TH(),
  N("C'est la réponse B."),
  C("我女朋友。","Wǒ nǚpéngyou.","Ma copine.",0.6), HOLD(),

  // Q17 — texte à trou
  N("Question 4, un mot à trouver. La phrase : « Le matin je suis à l'école pour… quelque chose, l'après-midi on va au cinéma. » Quel mot manque : A « deux heures » ; B « avoir cours » ; C « prénom » ?"),
  TH(),
  N("C'était « avoir cours »."),
  C("我上午在学校上课。","Wǒ shàngwǔ zài xuéxiào shàngkè.","Le matin, j'ai cours à l'école.",0.6), HOLD(),

  // Q19 — compréhension
  N("Question 5. Écoute bien."),
  C("我有一只小狗，很漂亮，它是我的好朋友。","Wǒ yǒu yì zhī xiǎo gǒu, hěn piàoliang, tā shì wǒ de hǎo péngyou.","J'ai un petit chien, il est très mignon, c'est mon bon ami.",0.55),
  N("Question : combien de petits chiens a cette personne ? A un ; B quatre ; C onze ?"),
  TH(),
  C("一只。","Yì zhī.","Un.",0.6), HOLD(),

  // Q20 — compréhension
  N("Question 6, la dernière. Écoute."),
  C("星期天中午妈妈在做饭，我和妹妹在房间里玩。","Xīngqītiān zhōngwǔ māma zài zuò fàn, wǒ hé mèimei zài fángjiān li wán.","Dimanche midi, maman fait la cuisine, ma petite sœur et moi jouons dans la chambre.",0.55),
  N("Question : où sont-ils, elle et sa petite sœur ? A dehors ; B dans la chambre ; C au supermarché ?"),
  TH(),
  C("房间里。","Fángjiān li.","Dans la chambre.",0.6), HOLD(),

  N("Bravo, exercice terminé ! Passe maintenant à la leçon 10."),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  ]
});
