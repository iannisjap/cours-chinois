/* ============================================================
   HSK 1 · Leçon 10 — 这儿的苹果真便宜！ Les pommes ici sont vraiment pas chères !
   D'après « 新HSK教程 1 », leçon 10.
   Vocabulaire de la leçon :
   杯子 · 售货员 · 这边 · 钱 · 这些 · 块 · 那些 · 这儿 · 水果 ·
   少 · 斤 · 苹果 · 便宜 · 商店 · 衣服 · 件 · 元 · 怎么样 · 贵 ·
   穿 · 女 · 男 · 那儿
   怎么样 étend 怎么 (leçon 6) ; 那儿 étend 那 (leçon 9) et
   forme un trio avec 这儿/哪儿 ; 少 est le pendant de 多 (leçon 8).
   Grammaire : expression des sommes d'argent (元/块) · phrase à
   prédicat adjectival (sans 是) · pronom 怎么样 (qu'en penses-tu ?).
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  id: "hsk1-10",
  badge: 10,
  hanzi: "苹果真便宜",
  title: "Leçon 10 · Faire des achats",
  desc: "3 parties · 多少钱一个 · 苹果三块五一斤 · 这件怎么样",
  intro: "Leçon 10 du HSK 1 : demander un prix, acheter des fruits au poids, et donner son avis sur des vêtements avec 怎么样.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"多少钱一个", title:"Partie 1 · Acheter une tasse", desc:"杯子 · 售货员 · 这边 · 钱 · 这些 · 块 · 那些",
    build(){ return [
  N("Bienvenue dans la leçon 10 du HSK 1. Aujourd'hui : demander un prix, acheter des fruits, et parler de vêtements. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("请问，有杯子吗？","Qǐngwèn, yǒu bēizi ma?","Excusez-moi, avez-vous des tasses ?",0.5),
  C("有，杯子在这边。","Yǒu, bēizi zài zhèbiān.","Oui, les tasses sont par ici.",0.5),
  C("多少钱一个？","Duōshao qián yí ge?","Combien coûte une pièce ?",0.5),
  C("这些五块钱一个，那些十块钱一个。","Zhèxiē wǔ kuài qián yí ge, nàxiē shí kuài qián yí ge.","Celles-ci sont à cinq yuans pièce, celles-là à dix yuans pièce.",0.5),
  C("我买这个吧。","Wǒ mǎi zhège ba.","Je vais prendre celle-ci.",0.5),
  N("D'abord, révision de la leçon 9 : dites « celui-là »."),
  TH(),
  C("那个","nàge","celui-là",0.6), HOLD(),

  N("« Une tasse » se dit [[杯子|bēizi]]. Écoutez et répétez."),
  ...teach2("杯子","bēizi","une tasse"),
  N("Demandez poliment : « Excusez-moi, avez-vous des tasses ? »"),
  TH(),
  C("请问，有杯子吗？","Qǐngwèn, yǒu bēizi ma?","Excusez-moi, avez-vous des tasses ?",0.6),
  C("请问，有杯子吗？","Qǐngwèn, yǒu bēizi ma?","Excusez-moi, avez-vous des tasses ?",0.6), HOLD(),

  N("« Par ici », « de ce côté », se dit [[这边|zhèbiān]] — comme [[那边|nàbian]] et [[外边|wàibian]] que vous connaissez. Répondez : « Oui, les tasses sont par ici. »"),
  TH(),
  C("有，杯子在这边。","Yǒu, bēizi zài zhèbiān.","Oui, les tasses sont par ici.",0.6),
  C("有，杯子在这边。","Yǒu, bēizi zài zhèbiān.","Oui, les tasses sont par ici.",0.6), HOLD(),

  N("« L'argent » se dit [[钱|qián]]. Vous connaissez déjà [[多少|duōshao]]. Demandez : « Combien coûte une pièce ? »"),
  TH(),
  C("多少钱一个？","Duōshao qián yí ge?","Combien coûte une pièce ?",0.6), HOLD(),

  N("« Ceux-ci », « celles-ci » se dit [[这些|zhèxiē]], et « ceux-là » se dit [[那些|nàxiē]]. Pour compter l'argent, en yuans, on utilise [[块|kuài]]. Écoutez et répétez."),
  ...teach2("五块钱","wǔ kuài qián","cinq yuans"),
  N("Répondez : « Celles-ci sont à cinq yuans pièce, celles-là à dix yuans pièce. »"),
  TH(),
  C("这些五块钱一个，那些十块钱一个。","Zhèxiē wǔ kuài qián yí ge, nàxiē shí kuài qián yí ge.","Celles-ci sont à cinq yuans pièce, celles-là à dix yuans pièce.",0.5),
  C("这些五块钱一个，那些十块钱一个。","Zhèxiē wǔ kuài qián yí ge, nàxiē shí kuài qián yí ge.","Celles-ci sont à cinq yuans pièce, celles-là à dix yuans pièce.",0.55), HOLD(),

  N("Dites : « Je vais prendre celle-ci. »"),
  TH(),
  C("我买这个吧。","Wǒ mǎi zhège ba.","Je vais prendre celle-ci.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Demandez : « Excusez-moi, avez-vous des tasses ? »"),
  TH(),
  C("请问，有杯子吗？","Qǐngwèn, yǒu bēizi ma?","Excusez-moi, avez-vous des tasses ?",0.6),
  N("On vous répond : « Oui, les tasses sont par ici. »"),
  C("有，杯子在这边。","Yǒu, bēizi zài zhèbiān.","Oui, les tasses sont par ici.",0.6),
  N("Demandez : « Combien coûte une pièce ? »"),
  TH(),
  C("多少钱一个？","Duōshao qián yí ge?","Combien coûte une pièce ?",0.6),
  N("On vous répond : « Celles-ci sont à cinq yuans pièce, celles-là à dix yuans pièce. » Dites : « Je vais prendre celle-ci. »"),
  TH(),
  C("我买这个吧。","Wǒ mǎi zhège ba.","Je vais prendre celle-ci.",0.6), HOLD(),

  // Révision
  N("Révision. Dites : par ici."),
  TH(),
  C("这边","zhèbiān","par ici",0.6),
  N("Demandez : combien coûte une pièce ?"),
  TH(),
  C("多少钱一个？","Duōshao qián yí ge?","Combien coûte une pièce ?",0.6),
  N("Fin de la partie 1. À la partie 2 : acheter des fruits."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"苹果三块五一斤", title:"Partie 2 · Acheter des fruits", desc:"这儿 · 水果 · 少 · 斤 · 苹果 · 便宜",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("这儿的水果真不少！","Zhèr de shuǐguǒ zhēn bù shǎo!","Il y a vraiment beaucoup de fruits ici !",0.5),
  C("您想买什么？","Nín xiǎng mǎi shénme?","Que voulez-vous acheter ?",0.5),
  C("我想买两斤苹果。","Wǒ xiǎng mǎi liǎng jīn píngguǒ.","Je veux acheter deux jin de pommes.",0.5),
  C("苹果三块五一斤。这些七块二，七块钱吧。","Píngguǒ sān kuài wǔ yì jīn. Zhèxiē qī kuài èr, qī kuài qián ba.","Les pommes sont à 3,5 yuans le jin. Ça fait 7,2 yuans, disons 7 yuans.",0.5),
  C("好的，这儿的苹果真便宜！","Hǎo de, zhèr de píngguǒ zhēn piányi!","D'accord, les pommes ici sont vraiment pas chères !",0.5),
  N("Révision : dites « je vais prendre celle-ci »."),
  TH(),
  C("我买这个吧。","Wǒ mǎi zhège ba.","Je vais prendre celle-ci.",0.6), HOLD(),

  N("« Ici » se dit [[这儿|zhèr]] — comme [[哪儿|nǎr]] et [[那儿|nàr]] que vous verrez bientôt. « Le fruit » se dit [[水果|shuǐguǒ]]. Et « peu », « pas beaucoup », se dit [[少|shǎo]] — le contraire de [[多|duō]] que vous connaissez. Écoutez et répétez."),
  ...teach2("水果不少","shuǐguǒ bù shǎo","beaucoup de fruits (pas peu)"),
  N("Remarquez : pas besoin de [[是|shì]] devant un adjectif comme [[少|shǎo]] — l'adjectif seul fait office de verbe. Dites : « Il y a vraiment beaucoup de fruits ici ! »"),
  TH(),
  C("这儿的水果真不少！","Zhèr de shuǐguǒ zhēn bù shǎo!","Il y a vraiment beaucoup de fruits ici !",0.6),
  C("这儿的水果真不少！","Zhèr de shuǐguǒ zhēn bù shǎo!","Il y a vraiment beaucoup de fruits ici !",0.6), HOLD(),

  N("Demandez poliment : « Que voulez-vous acheter ? »"),
  TH(),
  C("您想买什么？","Nín xiǎng mǎi shénme?","Que voulez-vous acheter ?",0.6), HOLD(),

  N("Pour peser les fruits, l'unité chinoise est le [[斤|jīn]], environ 500 grammes. Et « une pomme » se dit [[苹果|píngguǒ]]. Écoutez et répétez."),
  ...teach2("两斤苹果","liǎng jīn píngguǒ","deux jin de pommes"),
  N("Répondez : « Je veux acheter deux jin de pommes. »"),
  TH(),
  C("我想买两斤苹果。","Wǒ xiǎng mǎi liǎng jīn píngguǒ.","Je veux acheter deux jin de pommes.",0.6), HOLD(),

  N("Écoutez le prix : « Les pommes sont à 3,5 yuans le jin. Ça fait 7,2 yuans, disons 7 yuans. »"),
  TH(),
  C("苹果三块五一斤。这些七块二，七块钱吧。","Píngguǒ sān kuài wǔ yì jīn. Zhèxiē qī kuài èr, qī kuài qián ba.","Les pommes sont à 3,5 yuans le jin. Ça fait 7,2 yuans, disons 7 yuans.",0.5),
  C("苹果三块五一斤。这些七块二，七块钱吧。","Píngguǒ sān kuài wǔ yì jīn. Zhèxiē qī kuài èr, qī kuài qián ba.","Les pommes sont à 3,5 yuans le jin. Ça fait 7,2 yuans, disons 7 yuans.",0.55), HOLD(),

  N("« Pas cher », « abordable », se dit [[便宜|piányi]]. Écoutez et répétez."),
  ...teach2("便宜","piányi","pas cher"),
  N("Dites : « D'accord, les pommes ici sont vraiment pas chères ! »"),
  TH(),
  C("好的，这儿的苹果真便宜！","Hǎo de, zhèr de píngguǒ zhēn piányi!","D'accord, les pommes ici sont vraiment pas chères !",0.6),
  C("好的，这儿的苹果真便宜！","Hǎo de, zhèr de píngguǒ zhēn piányi!","D'accord, les pommes ici sont vraiment pas chères !",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Dites : « Il y a vraiment beaucoup de fruits ici ! »"),
  TH(),
  C("这儿的水果真不少！","Zhèr de shuǐguǒ zhēn bù shǎo!","Il y a vraiment beaucoup de fruits ici !",0.55),
  N("On vous demande : « Que voulez-vous acheter ? » Répondez : « Je veux acheter deux jin de pommes. »"),
  TH(),
  C("我想买两斤苹果。","Wǒ xiǎng mǎi liǎng jīn píngguǒ.","Je veux acheter deux jin de pommes.",0.6),
  N("On vous répond : « Les pommes sont à 3,5 yuans le jin. Ça fait 7,2 yuans, disons 7 yuans. » Dites : « D'accord, les pommes ici sont vraiment pas chères ! »"),
  TH(),
  C("好的，这儿的苹果真便宜！","Hǎo de, zhèr de píngguǒ zhēn piányi!","D'accord, les pommes ici sont vraiment pas chères !",0.6), HOLD(),

  // Révision
  N("Révision. Dites : ici."),
  TH(),
  C("这儿","zhèr","ici",0.6),
  N("Dites : pas cher."),
  TH(),
  C("便宜","piányi","pas cher",0.6),
  N("Fin de la partie 2. À la partie 3 : acheter des vêtements."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"这件怎么样", title:"Partie 3 · Acheter des vêtements", desc:"商店 · 衣服 · 件 · 元 · 怎么样 · 贵 · 穿 · 女 · 男 · 那儿",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("这家商店衣服真多！这件一百元，怎么样？","Zhè jiā shāngdiàn yīfu zhēn duō! Zhè jiàn yìbǎi yuán, zěnmeyàng?","Il y a vraiment beaucoup de vêtements dans ce magasin ! Celui-ci coûte 100 yuans, qu'en penses-tu ?",0.5),
  C("好看，也不贵。","Hǎokàn, yě bú guì.","C'est joli, et ce n'est pas cher non plus.",0.5),
  C("小雪能穿，买一件吧。","Xiǎoxuě néng chuān, mǎi yí jiàn ba.","Xiaoxue peut le porter, achetons-en un.",0.5),
  C("好的。小明能穿吗？","Hǎo de. Xiǎomíng néng chuān ma?","D'accord. Est-ce que Xiaoming peut le porter ?",0.5),
  C("不能。这些是女孩子穿的衣服，男孩子的衣服在那儿。","Bù néng. Zhèxiē shì nǚ háizi chuān de yīfu, nán háizi de yīfu zài nàr.","Non. Ce sont des vêtements de fille, les vêtements de garçon sont là-bas.",0.5),
  C("好的。","Hǎo de.","D'accord.",0.5),
  N("Révision : dites « les pommes ici sont vraiment pas chères »."),
  TH(),
  C("这儿的苹果真便宜！","Zhèr de píngguǒ zhēn piányi!","Les pommes ici sont vraiment pas chères !",0.6), HOLD(),

  N("« Un magasin » se dit [[商店|shāngdiàn]] — vous connaissez déjà [[店|diàn]]. Et « les vêtements » se dit [[衣服|yīfu]]. Pour les compter, on utilise [[件|jiàn]]. Écoutez et répétez."),
  ...teach2("这件衣服","zhè jiàn yīfu","ce vêtement"),
  N("« Le yuan », de façon plus formelle que [[块|kuài]], se dit [[元|yuán]]. Écoutez et répétez."),
  ...teach2("一百元","yìbǎi yuán","cent yuans"),
  N("Et [[怎么样|zěnmeyàng]], « comment ça », « qu'en penses-tu », étend [[怎么|zěnme]] que vous connaissez. Écoutez et répétez."),
  ...teach2("怎么样","zěnmeyàng","qu'en penses-tu, comment ça"),
  N("Dites : « Il y a vraiment beaucoup de vêtements dans ce magasin ! Celui-ci coûte 100 yuans, qu'en penses-tu ? »"),
  TH(),
  C("这家商店衣服真多！这件一百元，怎么样？","Zhè jiā shāngdiàn yīfu zhēn duō! Zhè jiàn yìbǎi yuán, zěnmeyàng?","Il y a vraiment beaucoup de vêtements dans ce magasin ! Celui-ci coûte 100 yuans, qu'en penses-tu ?",0.5),
  C("这家商店衣服真多！这件一百元，怎么样？","Zhè jiā shāngdiàn yīfu zhēn duō! Zhè jiàn yìbǎi yuán, zěnmeyàng?","Il y a vraiment beaucoup de vêtements dans ce magasin ! Celui-ci coûte 100 yuans, qu'en penses-tu ?",0.55), HOLD(),

  N("« Cher » se dit [[贵|guì]] — le contraire de [[便宜|piányi]]. Écoutez et répétez."),
  ...teach2("贵","guì","cher"),
  N("Répondez : « C'est joli, et ce n'est pas cher non plus. »"),
  TH(),
  C("好看，也不贵。","Hǎokàn, yě bú guì.","C'est joli, et ce n'est pas cher non plus.",0.6), HOLD(),

  N("« Porter », « mettre un vêtement », se dit [[穿|chuān]]. Écoutez et répétez."),
  ...teach2("穿","chuān","porter (un vêtement)"),
  N("Dites : « Xiaoxue peut le porter, achetons-en un. »"),
  TH(),
  C("小雪能穿，买一件吧。","Xiǎoxuě néng chuān, mǎi yí jiàn ba.","Xiaoxue peut le porter, achetons-en un.",0.6), HOLD(),

  N("Demandez : « D'accord. Est-ce que Xiaoming peut le porter ? »"),
  TH(),
  C("好的。小明能穿吗？","Hǎo de. Xiǎomíng néng chuān ma?","D'accord. Est-ce que Xiaoming peut le porter ?",0.6), HOLD(),

  N("« Fille », « féminin », se dit [[女|nǚ]], et « garçon », « masculin », se dit [[男|nán]]. Écoutez et répétez."),
  ...teach2("女，男","nǚ, nán","fille, garçon"),
  N("Et « là-bas » se dit [[那儿|nàr]] — vous connaissez déjà [[那|nà]]. Répondez : « Non. Ce sont des vêtements de fille, les vêtements de garçon sont là-bas. »"),
  TH(),
  C("不能。这些是女孩子穿的衣服，男孩子的衣服在那儿。","Bù néng. Zhèxiē shì nǚ háizi chuān de yīfu, nán háizi de yīfu zài nàr.","Non. Ce sont des vêtements de fille, les vêtements de garçon sont là-bas.",0.5),
  C("不能。这些是女孩子穿的衣服，男孩子的衣服在那儿。","Bù néng. Zhèxiē shì nǚ háizi chuān de yīfu, nán háizi de yīfu zài nàr.","Non. Ce sont des vêtements de fille, les vêtements de garçon sont là-bas.",0.55), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Dites : « Il y a vraiment beaucoup de vêtements dans ce magasin ! Celui-ci coûte 100 yuans, qu'en penses-tu ? »"),
  TH(),
  C("这家商店衣服真多！这件一百元，怎么样？","Zhè jiā shāngdiàn yīfu zhēn duō! Zhè jiàn yìbǎi yuán, zěnmeyàng?","Il y a vraiment beaucoup de vêtements dans ce magasin ! Celui-ci coûte 100 yuans, qu'en penses-tu ?",0.5),
  N("On vous répond : « C'est joli, et ce n'est pas cher non plus. » Puis on ajoute : « Xiaoxue peut le porter, achetons-en un. »"),
  C("好看，也不贵。小雪能穿，买一件吧。","Hǎokàn, yě bú guì. Xiǎoxuě néng chuān, mǎi yí jiàn ba.","C'est joli, et ce n'est pas cher non plus. Xiaoxue peut le porter, achetons-en un.",0.5),
  N("Demandez : « D'accord. Est-ce que Xiaoming peut le porter ? »"),
  TH(),
  C("好的。小明能穿吗？","Hǎo de. Xiǎomíng néng chuān ma?","D'accord. Est-ce que Xiaoming peut le porter ?",0.6),
  N("On vous répond : « Non. Ce sont des vêtements de fille, les vêtements de garçon sont là-bas. » Dites simplement : « D'accord. »"),
  TH(),
  C("好的。","Hǎo de.","D'accord.",0.6), HOLD(),

  // Révision finale de la leçon 10
  N("Révision finale de la leçon 10. Demandez : combien coûte une pièce ?"),
  TH(),
  C("多少钱一个？","Duōshao qián yí ge?","Combien coûte une pièce ?",0.6),
  N("Dites : je veux acheter deux jin de pommes."),
  TH(),
  C("我想买两斤苹果。","Wǒ xiǎng mǎi liǎng jīn píngguǒ.","Je veux acheter deux jin de pommes.",0.6),
  N("Dites : les pommes ici sont vraiment pas chères."),
  TH(),
  C("这儿的苹果真便宜！","Zhèr de píngguǒ zhēn piányi!","Les pommes ici sont vraiment pas chères !",0.6),
  N("Demandez : celui-ci coûte 100 yuans, qu'en penses-tu ?"),
  TH(),
  C("这件一百元，怎么样？","Zhè jiàn yìbǎi yuán, zěnmeyàng?","Celui-ci coûte 100 yuans, qu'en penses-tu ?",0.6),
  N("Et pour finir : c'est joli, et ce n'est pas cher non plus."),
  TH(),
  C("好看，也不贵。","Hǎokàn, yě bú guì.","C'est joli, et ce n'est pas cher non plus.",0.6),
  N("Excellent ! Vous avez terminé la leçon 10. Vous savez demander un prix, acheter au poids, et donner votre avis sur un vêtement. Réécoutez-la demain, puis passez à la leçon 11. 再见！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  ]
});
