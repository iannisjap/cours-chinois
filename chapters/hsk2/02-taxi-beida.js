/* ============================================================
   HSK 2 · Leçon 2 — 还是打车去北大吧 On ferait mieux d'y aller en taxi
   D'après « 新HSK教程 2 », leçon 2.
   Vocabulaire de la leçon :
   公交车 · 但 · 车站 · 远 · 打车 · 还是 · 啊 · 万 · 名 · 网上 ·
   外国 · 间 · 教室 · 票 · 别 · 过来
   Grammaire : structure fixe 还是……吧 (choix préférentiel) ·
   多 pour les nombres approximatifs · verbe/phrase verbale/phrase
   sujet-prédicat comme attribut (定语).
   Structure : leçon → 3 parties (les 3 dialogues du manuel) +
   texte 4 (message) intégré en révision de la partie 3.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-02",
  badge: 2,
  hanzi: "还是打车去北大吧",
  title: "Leçon 2 · En route vers l'université",
  desc: "3 parties · 还是……吧 · 多 (nombres approximatifs) · attribut verbal",
  intro: "Bai Jiayue et Annie quittent l'hôtel pour visiter l'université de Pékin (北大). Au programme : la structure 还是……吧 pour exprimer un choix préférentiel, 多 pour les nombres approximatifs, et l'usage d'un verbe comme attribut d'un nom.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"打车去", title:"Partie 1 · À la réception", desc:"公交车 · 但 · 车站 · 远 · 打车 · 还是……吧",
    build(){ return [
  N("Partie 1. À la réception de l'hôtel, Bai Jiayue et Annie demandent leur chemin. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("请问，这儿有到北京大学的公交车吗？","Qǐngwèn, zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?","Excusez-moi, y a-t-il un bus d'ici jusqu'à l'université de Pékin ?",0.5),
  C("有，但车站有点儿远。","Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.","Oui, mais l'arrêt est un peu loin.",0.5),
  C("这儿好打车吗？","Zhèr hǎo dǎchē ma?","Est-ce facile de prendre un taxi ici ?",0.5),
  C("好打车。","Hǎo dǎchē.","Oui, c'est facile.",0.6),
  C("谢谢。安妮，我们还是打车去吧。","Xièxie. Ānnī, wǒmen háishi dǎchē qù ba.","Merci. Annie, on ferait mieux d'y aller en taxi.",0.5),
  C("好，没问题。","Hǎo, méi wèntí.","D'accord, pas de problème.",0.6),

  N("Bienvenue dans la leçon 2. « Le bus » se dit [[公交车|gōngjiāochē]]. Écoutez et répétez."),
  ...teach2("公交车","gōngjiāochē","le bus"),
  N("[[但|dàn]] veut dire « mais ». Écoutez et répétez."),
  ...teach2("但","dàn","mais"),
  N("« L'arrêt », « la gare » se dit [[车站|chēzhàn]]. Écoutez et répétez."),
  ...teach2("车站","chēzhàn","l'arrêt, la gare"),
  N("« Loin » se dit [[远|yuǎn]]. Écoutez et répétez."),
  ...teach2("远","yuǎn","loin"),
  N("Dites : « oui, mais l'arrêt est un peu loin »."),
  TH(),
  C("有，但车站有点儿远。","Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.","Oui, mais l'arrêt est un peu loin.",0.55),
  C("有，但车站有点儿远。","Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.","Oui, mais l'arrêt est un peu loin.",0.6), HOLD(),

  N("« Prendre un taxi », « héler un taxi » se dit [[打车|dǎchē]]. Écoutez et répétez."),
  ...teach2("打车","dǎchē","prendre un taxi"),
  N("Petite remarque : ici, [[好|hǎo]] ne veut pas dire « bon » mais « facile ». « Facile à prendre en taxi » se dit :"),
  ...teach2("好打车","hǎo dǎchē","facile à prendre en taxi"),
  N("Demandez : « est-ce facile de prendre un taxi ici ? »"),
  TH(),
  C("这儿好打车吗？","Zhèr hǎo dǎchē ma?","Est-ce facile de prendre un taxi ici ?",0.55),
  C("这儿好打车吗？","Zhèr hǎo dǎchē ma?","Est-ce facile de prendre un taxi ici ?",0.6), HOLD(),

  N("Grammaire : la structure fixe 还是……吧 exprime un choix préférentiel — l'idée que « cette solution est meilleure ». Écoutez ces exemples."),
  C("我们还是打车去吧。","Wǒmen háishi dǎchē qù ba.","On ferait mieux d'y aller en taxi.",0.55),
  C("那件衣服很好看，还是买那件吧。","Nà jiàn yīfu hěn hǎokàn, háishi mǎi nà jiàn ba.","Ce vêtement est joli, on ferait mieux d'acheter celui-là.",0.55),
  C("你第一次去北京，还是找个人接你吧。","Nǐ dì-yī cì qù Běijīng, háishi zhǎo ge rén jiē nǐ ba.","C'est ta première fois à Pékin, on ferait mieux de trouver quelqu'un pour venir te chercher.",0.5),
  N("Essayez : dites « on ferait mieux d'y aller en taxi »."),
  TH(),
  C("我们还是打车去吧。","Wǒmen háishi dǎchē qù ba.","On ferait mieux d'y aller en taxi.",0.6), HOLD(),

  N("Revenons au dialogue. On vous répond, après avoir remercié : « merci. Annie, on ferait mieux d'y aller en taxi. »"),
  TH(),
  C("谢谢。安妮，我们还是打车去吧。","Xièxie. Ānnī, wǒmen háishi dǎchē qù ba.","Merci. Annie, on ferait mieux d'y aller en taxi.",0.5),
  N("Annie répond : « d'accord, pas de problème. »"),
  TH(),
  C("好，没问题。","Hǎo, méi wèntí.","D'accord, pas de problème.",0.6), HOLD(),

  N("Révision. Dites : est-ce facile de prendre un taxi ici ?"),
  TH(),
  C("这儿好打车吗？","Zhèr hǎo dǎchē ma?","Est-ce facile de prendre un taxi ici ?",0.6),
  N("Dites, avec 还是……吧 : ce vêtement est joli, on ferait mieux d'acheter celui-là."),
  TH(),
  C("那件衣服很好看，还是买那件吧。","Nà jiàn yīfu hěn hǎokàn, háishi mǎi nà jiàn ba.","Ce vêtement est joli, on ferait mieux d'acheter celui-là.",0.6),
  N("Fin de la partie 1. À la partie 2 : sur le campus de l'université de Pékin."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"四万多名学生", title:"Partie 2 · Sur le campus", desc:"啊 · 万 · 名 · 网上 · 外国 · 间 · 教室 · 多 (nombres approximatifs)",
    build(){ return [
  N("Partie 2. Sur le campus de l'université de Pékin. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("学校里人真多啊！","Xuéxiào li rén zhēn duō a!","Il y a vraiment beaucoup de monde à l'école !",0.5),
  C("是啊，北京大学有四万多名学生呢！","Shì a, Běijīng Dàxué yǒu sìwàn duō míng xuéshēng ne!","Eh oui, l'université de Pékin a plus de quarante mille étudiants !",0.5),
  C("你是怎么知道的？","Nǐ shì zěnme zhīdào de?","Comment le sais-tu ?",0.5),
  C("是网上说的，网上还说北京大学有三千多名外国学生。","Shì wǎngshang shuō de, wǎngshang hái shuō Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuéshēng.","Je l'ai lu en ligne. Il est aussi écrit que l'université de Pékin a plus de trois mille étudiants étrangers.",0.5),
  C("我也想来这儿学习。","Wǒ yě xiǎng lái zhèr xuéxí.","Moi aussi j'aimerais venir étudier ici.",0.5),
  C("那边就有一间教室，我们去看一下吧。","Nàbiān jiù yǒu yì jiān jiàoshì, wǒmen qù kàn yíxià ba.","Il y a justement une salle de classe là-bas, allons y jeter un œil.",0.5),
  N("Révision : dites « on ferait mieux d'y aller en taxi »."),
  TH(),
  C("我们还是打车去吧。","Wǒmen háishi dǎchē qù ba.","On ferait mieux d'y aller en taxi.",0.6), HOLD(),

  N("[[啊|a]] à la fin d'une phrase exprime l'admiration, l'accord, l'enthousiasme. Écoutez et répétez."),
  ...teach2("真多啊！","Zhēn duō a!","Il y en a vraiment beaucoup !"),
  N("[[万|wàn]] veut dire « dix mille ». Écoutez et répétez."),
  ...teach2("万","wàn","dix mille"),
  N("[[名|míng]] est un classificateur pour les personnes, notamment dans un contexte scolaire ou officiel : « un étudiant » se dit un-[[名|míng]]-étudiant. Écoutez et répétez."),
  ...teach2("名","míng","(classificateur pour les personnes)"),
  N("Grammaire : pour exprimer un nombre approximatif, on ajoute [[多|duō]] après le nombre ou après le classificateur. Quand le nombre est un multiple de dix, 多 se place juste après le chiffre ; sinon, 多 se place après le classificateur. Écoutez ces exemples."),
  C("北京大学有四万多名学生呢！","Běijīng Dàxué yǒu sìwàn duō míng xuéshēng ne!","L'université de Pékin a plus de quarante mille étudiants !",0.5),
  C("教室里有二十多个学生。","Jiàoshì li yǒu èrshí duō ge xuéshēng.","Il y a un peu plus de vingt étudiants dans la salle.",0.5),
  C("这两个苹果五块多钱。","Zhè liǎng ge píngguǒ wǔ kuài duō qián.","Ces deux pommes coûtent un peu plus de cinq yuans.",0.5),
  N("Essayez : dites « il y a un peu plus de vingt étudiants dans la salle »."),
  TH(),
  C("教室里有二十多个学生。","Jiàoshì li yǒu èrshí duō ge xuéshēng.","Il y a un peu plus de vingt étudiants dans la salle.",0.6), HOLD(),

  N("Dites : « il y a vraiment beaucoup de monde à l'école ! »"),
  TH(),
  C("学校里人真多啊！","Xuéxiào li rén zhēn duō a!","Il y a vraiment beaucoup de monde à l'école !",0.55),
  N("On vous répond : « eh oui, l'université de Pékin a plus de quarante mille étudiants ! »"),
  C("是啊，北京大学有四万多名学生呢！","Shì a, Běijīng Dàxué yǒu sìwàn duō míng xuéshēng ne!","Eh oui, l'université de Pékin a plus de quarante mille étudiants !",0.55),
  N("Demandez : « comment le sais-tu ? »"),
  TH(),
  C("你是怎么知道的？","Nǐ shì zěnme zhīdào de?","Comment le sais-tu ?",0.6), HOLD(),

  N("« En ligne, sur internet » se dit [[网上|wǎngshang]]. Écoutez et répétez."),
  ...teach2("网上","wǎngshang","en ligne, sur internet"),
  N("« Étranger », « pays étranger » se dit [[外国|wàiguó]]. Écoutez et répétez."),
  ...teach2("外国","wàiguó","étranger, pays étranger"),
  N("Répondez : « je l'ai lu en ligne. Il est aussi écrit que l'université de Pékin a plus de trois mille étudiants étrangers. »"),
  TH(),
  C("是网上说的，网上还说北京大学有三千多名外国学生。","Shì wǎngshang shuō de, wǎngshang hái shuō Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuéshēng.","Je l'ai lu en ligne. Il est aussi écrit que l'université de Pékin a plus de trois mille étudiants étrangers.",0.45), HOLD(),

  N("[[间|jiān]] est le classificateur des petites pièces, comme les salles de classe ou les chambres. « La salle de classe » se dit [[教室|jiàoshì]]. Écoutez et répétez."),
  ...teach2("一间教室","yì jiān jiàoshì","une salle de classe"),
  N("Dites : « moi aussi j'aimerais venir étudier ici. »"),
  TH(),
  C("我也想来这儿学习。","Wǒ yě xiǎng lái zhèr xuéxí.","Moi aussi j'aimerais venir étudier ici.",0.6), HOLD(),
  N("On vous propose : « il y a justement une salle de classe là-bas, allons y jeter un œil. »"),
  C("那边就有一间教室，我们去看一下吧。","Nàbiān jiù yǒu yì jiān jiàoshì, wǒmen qù kàn yíxià ba.","Il y a justement une salle de classe là-bas, allons y jeter un œil.",0.5), HOLD(),

  N("Révision. Dites : ces deux pommes coûtent un peu plus de cinq yuans."),
  TH(),
  C("这两个苹果五块多钱。","Zhè liǎng ge píngguǒ wǔ kuài duō qián.","Ces deux pommes coûtent un peu plus de cinq yuans.",0.6),
  N("Fin de la partie 2. À la partie 3 : Bai Jiayue et Annie découvrent un cinéma sur le campus."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"电影院", title:"Partie 3 · Un cinéma sur le campus", desc:"票 · 别 · verbe/phrase comme attribut (的)",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("家月，你看，学校里有家电影院！","Jiāyuè, nǐ kàn, xuéxiào li yǒu jiā diànyǐngyuàn!","Jiayue, regarde, il y a un cinéma dans l'école !",0.5),
  C("是啊，电影院还不小。","Shì a, diànyǐngyuàn hái bù xiǎo.","Eh oui, et le cinéma n'est pas petit du tout.",0.5),
  C("他们卖的电影票也很便宜。","Tāmen mài de diànyǐngpiào yě hěn piányi.","Les billets qu'ils vendent sont aussi très bon marché.",0.5),
  C("天啊！有的还不到二十块钱。","Tiān a! Yǒude hái bú dào èrshí kuài qián.","Mon Dieu ! Certains coûtent même moins de vingt yuans.",0.5),
  C("那你想不想去看个电影？","Nà nǐ xiǎng bu xiǎng qù kàn ge diànyǐng?","Alors, tu veux aller voir un film ?",0.5),
  C("还是别看电影了，北京大学就很好看！","Háishi bié kàn diànyǐng le, Běijīng Dàxué jiù hěn hǎokàn!","Autant ne pas aller voir de film, l'université de Pékin elle-même est déjà si belle à voir !",0.5),
  N("Révision : dites « il y a un peu plus de vingt étudiants dans la salle »."),
  TH(),
  C("教室里有二十多个学生。","Jiàoshì li yǒu èrshí duō ge xuéshēng.","Il y a un peu plus de vingt étudiants dans la salle.",0.6), HOLD(),

  N("« Le billet », « le ticket » se dit [[票|piào]]. Écoutez et répétez."),
  ...teach2("票","piào","le billet, le ticket"),
  N("« Le billet de cinéma » se dit :"),
  ...teach2("电影票","diànyǐngpiào","le billet de cinéma"),
  N("Grammaire : un verbe, une phrase verbale, ou une phrase sujet-prédicat peut se placer devant un nom pour en préciser la caractéristique ou l'état — comme un attribut avec [[的|de]]. Écoutez ces exemples."),
  C("他们卖的电影票也很便宜。","Tāmen mài de diànyǐngpiào yě hěn piányi.","Les billets qu'ils vendent sont aussi très bon marché.",0.5),
  C("现在学中文的学生很多。","Xiànzài xué Zhōngwén de xuéshēng hěn duō.","Les étudiants qui apprennent le chinois sont nombreux en ce moment.",0.5),
  C("这是朋友给我的杯子。","Zhè shì péngyou gěi wǒ de bēizi.","C'est une tasse que mon ami m'a offerte.",0.5),
  N("Essayez : dites « c'est une tasse que mon ami m'a offerte »."),
  TH(),
  C("这是朋友给我的杯子。","Zhè shì péngyou gěi wǒ de bēizi.","C'est une tasse que mon ami m'a offerte.",0.55), HOLD(),

  N("Dites : « les billets qu'ils vendent sont aussi très bon marché. »"),
  TH(),
  C("他们卖的电影票也很便宜。","Tāmen mài de diànyǐngpiào yě hěn piányi.","Les billets qu'ils vendent sont aussi très bon marché.",0.55),
  C("他们卖的电影票也很便宜。","Tāmen mài de diànyǐngpiào yě hěn piányi.","Les billets qu'ils vendent sont aussi très bon marché.",0.6), HOLD(),

  N("[[别|bié]] veut dire « ne pas », comme un ordre : « ne fais pas ». Écoutez et répétez."),
  ...teach2("别","bié","ne pas (impératif négatif)"),
  N("Dites : « mon Dieu ! Certains coûtent même moins de vingt yuans. »"),
  TH(),
  C("天啊！有的还不到二十块钱。","Tiān a! Yǒude hái bú dào èrshí kuài qián.","Mon Dieu ! Certains coûtent même moins de vingt yuans.",0.55), HOLD(),
  N("On vous demande : « alors, tu veux aller voir un film ? »"),
  C("那你想不想去看个电影？","Nà nǐ xiǎng bu xiǎng qù kàn ge diànyǐng?","Alors, tu veux aller voir un film ?",0.6),
  N("Répondez, avec 还是……别……了 : « autant ne pas aller voir de film, l'université de Pékin elle-même est déjà si belle à voir ! »"),
  TH(),
  C("还是别看电影了，北京大学就很好看！","Háishi bié kàn diànyǐng le, Běijīng Dàxué jiù hěn hǎokàn!","Autant ne pas aller voir de film, l'université de Pékin elle-même est déjà si belle à voir !",0.5), HOLD(),

  N("Xiaoyu vous fait aussi lire le message que Bai Jiayue envoie à Chen Tianzhong, à la porte de l'université. Écoutez."),
  C("北京大学很大，有四万多名学生。","Běijīng Dàxué hěn dà, yǒu sìwàn duō míng xuéshēng.","L'université de Pékin est très grande, elle a plus de quarante mille étudiants.",0.5),
  C("学校很漂亮，里边还有家电影院，电影票也不贵。","Xuéxiào hěn piàoliang, lǐbian hái yǒu jiā diànyǐngyuàn, diànyǐngpiào yě bú guì.","L'école est très belle, il y a aussi un cinéma à l'intérieur, et les billets ne sont pas chers non plus.",0.5),
  C("我们有时间还想再过来看个电影。","Wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.","Si nous avons le temps, nous aimerions revenir voir un film.",0.5),
  N("Un mot nouveau dans ce message : [[过来|guòlái]] veut dire « venir (ici) »."),
  ...teach2("过来","guòlái","venir (ici)"),
  N("Dites : « si nous avons le temps, nous aimerions revenir voir un film. »"),
  TH(),
  C("我们有时间还想再过来看个电影。","Wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.","Si nous avons le temps, nous aimerions revenir voir un film.",0.55), HOLD(),

  // Révision finale de la leçon 2
  N("Révision finale de la leçon 2. Dites, avec 还是……吧 : on ferait mieux d'y aller en taxi."),
  TH(),
  C("我们还是打车去吧。","Wǒmen háishi dǎchē qù ba.","On ferait mieux d'y aller en taxi.",0.6),
  N("Dites, avec 多 : l'université de Pékin a plus de quarante mille étudiants."),
  TH(),
  C("北京大学有四万多名学生。","Běijīng Dàxué yǒu sìwàn duō míng xuéshēng.","L'université de Pékin a plus de quarante mille étudiants.",0.55),
  N("Dites, avec un verbe comme attribut : les billets qu'ils vendent sont très bon marché."),
  TH(),
  C("他们卖的电影票很便宜。","Tāmen mài de diànyǐngpiào hěn piányi.","Les billets qu'ils vendent sont très bon marché.",0.55),
  N("Excellent ! Vous avez terminé la leçon 2 du HSK 2. Réécoutez-la demain, puis passez à la leçon 3. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("小王说你生病了，我下班后就去看你。","Xiǎo Wáng shuō nǐ shēngbìng le, wǒ xiàbān hòu jiù qù kàn nǐ.","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、他五岁多了。","Yī. Tā wǔ suì duō le.","",0.6),
  P(4,"…"),
  C("二、我没事，你别过来了。","Èr. Wǒ méishì, nǐ bié guòlái le.","",0.6),
  P(4,"…"),
  C("三、天气不好，我们还是在家看电视吧。","Sān. Tiānqì bù hǎo, wǒmen háishi zài jiā kàn diànshì ba.","",0.6),
  TH(),
  C("我没事，你别过来了。","Wǒ méishì, nǐ bié guòlái le.","",0.65), HOLD(),

  // Question 2
  C("王老师，你儿子几岁了？","Wáng lǎoshī, nǐ érzi jǐ suì le?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、他五岁多了。","Yī. Tā wǔ suì duō le.","",0.6),
  P(4,"…"),
  C("二、我去找几个人过来帮忙。","Èr. Wǒ qù zhǎo jǐ ge rén guòlái bāngmáng.","",0.6),
  P(4,"…"),
  C("三、天气不好，我们还是在家看电视吧。","Sān. Tiānqì bù hǎo, wǒmen háishi zài jiā kàn diànshì ba.","",0.6),
  TH(),
  C("他五岁多了。","Tā wǔ suì duō le.","",0.65), HOLD(),

  // Question 3
  C("今天星期天，我们去看电影吧。","Jīntiān Xīngqītiān, wǒmen qù kàn diànyǐng ba.","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、他五岁多了。","Yī. Tā wǔ suì duō le.","",0.6),
  P(4,"…"),
  C("二、天气不好，我们还是在家看电视吧。","Èr. Tiānqì bù hǎo, wǒmen háishi zài jiā kàn diànshì ba.","",0.6),
  P(4,"…"),
  C("三、我没事，你别过来了。","Sān. Wǒ méishì, nǐ bié guòlái le.","",0.6),
  TH(),
  C("天气不好，我们还是在家看电视吧。","Tiānqì bù hǎo, wǒmen háishi zài jiā kàn diànshì ba.","",0.65), HOLD(),

  // Question 4
  C("今天工作太多了。","Jīntiān gōngzuò tài duō le.","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我去找几个人过来帮忙。","Yī. Wǒ qù zhǎo jǐ ge rén guòlái bāngmáng.","",0.6),
  P(4,"…"),
  C("二、他五岁多了。","Èr. Tā wǔ suì duō le.","",0.6),
  P(4,"…"),
  C("三、我没事，你别过来了。","Sān. Wǒ méishì, nǐ bié guòlái le.","",0.6),
  TH(),
  C("我去找几个人过来帮忙。","Wǒ qù zhǎo jǐ ge rén guòlái bāngmáng.","",0.65), HOLD(),

  // Question 5
  C("我今年要去外国上大学，我妈有个朋友在那儿工作，她让我有事就给她的朋友打电话。","Wǒ jīnnián yào qù wàiguó shàng dàxué, wǒ mā yǒu ge péngyou zài nàr gōngzuò, tā ràng wǒ yǒu shì jiù gěi tā de péngyou dǎ diànhuà.","",0.45),
  C("他要到外国做什么？","Tā yào dào wàiguó zuò shénme?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、找朋友。","Yī. Zhǎo péngyou.","",0.6),
  P(4,"…"),
  C("二、上大学。","Èr. Shàng dàxué.","",0.6),
  P(4,"…"),
  C("三、打电话。","Sān. Dǎ diànhuà.","",0.6),
  TH(),
  C("上大学。","Shàng dàxué.","",0.65), HOLD(),

  // Question 6
  C("我在网上认识了一个外国朋友。他九月要来北京学中文，他说到时候来西安找我玩。","Wǒ zài wǎngshang rènshile yí ge wàiguó péngyou. Tā jiǔyuè yào lái Běijīng xué Zhōngwén, tā shuō dào shíhou lái Xī'ān zhǎo wǒ wán.","",0.45),
  C("外国朋友来北京做什么？","Wàiguó péngyou lái Běijīng zuò shénme?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、旅游。","Yī. Lǚyóu.","",0.6),
  P(4,"…"),
  C("二、找朋友。","Èr. Zhǎo péngyou.","",0.6),
  P(4,"…"),
  C("三、学中文。","Sān. Xué Zhōngwén.","",0.6),
  TH(),
  C("学中文。","Xué Zhōngwén.","",0.65), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 3."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
