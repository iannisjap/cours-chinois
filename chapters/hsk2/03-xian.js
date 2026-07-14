/* ============================================================
   HSK 2 · Leçon 3 — 我想去西安旅游 Je veux visiter Xi'an
   D'après « 新HSK教程 2 », leçon 3.
   Vocabulaire de la leçon :
   回来 · 这么 · 完 · 一起 · 出去 · 洗 · 自己 · 拿 · 手 ·
   为什么 · 不错 · 送 · 回去 · 每 · 累
   Grammaire : complément de résultat (结果补语) · redoublement
   verbal (1) tentative/futur · redoublement verbal (2) action
   accomplie.
   Structure : leçon → 3 parties (les 3 dialogues du manuel) +
   texte 4 (message) intégré en révision de la partie 3.
   Nouveaux personnages : Liu Ming et Wang Yixue, un couple à Pékin.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-03",
  badge: 3,
  hanzi: "我想去西安旅游",
  title: "Leçon 3 · Envie de voyage",
  desc: "3 parties · complément de résultat · redoublement verbal (1) et (2)",
  intro: "Nouveaux personnages : Liu Ming rentre du travail chez lui, où sa femme Wang Yixue l'attend. Au programme : le complément de résultat pour dire qu'une action a abouti, et le redoublement des verbes — pour proposer d'essayer quelque chose, ou pour raconter une action déjà faite.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"做完了", title:"Partie 1 · De retour à la maison", desc:"回来 · 这么 · 完 · complément de résultat",
    build(){ return [
  N("Partie 1. Nouveaux personnages : Liu Ming rentre chez lui, où Wang Yixue, sa femme, l'attend. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("今天回来这么晚啊！","Jīntiān huílái zhème wǎn a!","Tu rentres tard aujourd'hui !",0.5),
  C("工作太多了，下班的时候没做完。","Gōngzuò tài duō le, xiàbān de shíhou méi zuòwán.","J'avais trop de travail, je n'avais pas fini à l'heure de sortir du bureau.",0.5),
  C("菜都做好了，过来吃饭吧。","Cài dōu zuòhǎo le, guòlái chī fàn ba.","Les plats sont tous prêts, viens manger.",0.5),
  C("我想休息一下，喝杯水。","Wǒ xiǎng xiūxi yíxià, hē bēi shuǐ.","Je voudrais me reposer un peu, boire un verre d'eau.",0.5),
  C("好的。","Hǎo de.","D'accord.",0.6),

  N("« Revenir, rentrer » se dit [[回来|huílái]]. Écoutez et répétez."),
  ...teach2("回来","huílái","revenir, rentrer"),
  N("[[这么|zhème]] veut dire « si, tellement, comme ça ». Écoutez et répétez."),
  ...teach2("这么","zhème","si, tellement"),
  N("Dites : « tu rentres tard aujourd'hui ! »"),
  TH(),
  C("今天回来这么晚啊！","Jīntiān huílái zhème wǎn a!","Tu rentres tard aujourd'hui !",0.55),
  C("今天回来这么晚啊！","Jīntiān huílái zhème wǎn a!","Tu rentres tard aujourd'hui !",0.6), HOLD(),

  N("Grammaire : le complément de résultat. Certains verbes ou adjectifs, placés juste après un verbe, expriment le résultat de l'action. Écoutez ces exemples."),
  C("菜都做好了。","Cài dōu zuòhǎo le.","Les plats sont tous prêts (littéralement : faits-bien).",0.55),
  C("我吃完饭了。","Wǒ chīwán fàn le.","J'ai fini de manger.",0.55),
  C("小雪今天来晚了。","Xiǎoxuě jīntiān lái wǎn le.","Xiaoxue est arrivée en retard aujourd'hui.",0.55),
  N("À la forme négative, on ajoute [[没|méi]] (ou 没有) devant le verbe, et on enlève [[了|le]]. Écoutez."),
  C("我没吃完饭。","Wǒ méi chīwán fàn.","Je n'ai pas fini de manger.",0.55),
  C("小雪没来晚。","Xiǎoxuě méi lái wǎn.","Xiaoxue n'est pas arrivée en retard.",0.55),
  N("Il existe trois formes de question : ajouter 了吗 à la fin ; ajouter (了)没有 à la fin ; ou répéter verbe+没+verbe+complément. Écoutez."),
  C("你吃完饭了吗？","Nǐ chīwán fàn le ma?","As-tu fini de manger ?",0.55),
  C("小雪来晚了没有？","Xiǎoxuě lái wǎn le méiyǒu?","Est-ce que Xiaoxue est arrivée en retard ?",0.55),
  C("你学没学会？","Nǐ xué méi xuéhuì?","As-tu réussi à l'apprendre, ou pas ?",0.55),
  N("Essayez : demandez « as-tu fini de manger ? »"),
  TH(),
  C("你吃完饭了吗？","Nǐ chīwán fàn le ma?","As-tu fini de manger ?",0.6), HOLD(),

  N("Répondez au dialogue. Dites : « j'avais trop de travail, je n'avais pas fini à l'heure de sortir du bureau. »"),
  TH(),
  C("工作太多了，下班的时候没做完。","Gōngzuò tài duō le, xiàbān de shíhou méi zuòwán.","J'avais trop de travail, je n'avais pas fini à l'heure de sortir du bureau.",0.5),
  N("On vous dit : « les plats sont tous prêts, viens manger. »"),
  C("菜都做好了，过来吃饭吧。","Cài dōu zuòhǎo le, guòlái chī fàn ba.","Les plats sont tous prêts, viens manger.",0.55),
  N("Répondez : « je voudrais me reposer un peu, boire un verre d'eau. »"),
  TH(),
  C("我想休息一下，喝杯水。","Wǒ xiǎng xiūxi yíxià, hē bēi shuǐ.","Je voudrais me reposer un peu, boire un verre d'eau.",0.55), HOLD(),

  N("Révision. Dites : je n'ai pas fini de manger."),
  TH(),
  C("我没吃完饭。","Wǒ méi chīwán fàn.","Je n'ai pas fini de manger.",0.6),
  N("Demandez : as-tu réussi à l'apprendre, ou pas ?"),
  TH(),
  C("你学没学会？","Nǐ xué méi xuéhuì?","As-tu réussi à l'apprendre, ou pas ?",0.6),
  N("Fin de la partie 1. À la partie 2 : Liu Ming et Wang Yixue discutent d'un futur voyage."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"想一想", title:"Partie 2 · Un projet de voyage", desc:"一起 · 出去 · redoublement verbal (1) — tentative",
    build(){ return [
  N("Partie 2. Dans le salon, Liu Ming propose un voyage. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("我们找个时间去旅游，怎么样？","Wǒmen zhǎo ge shíjiān qù lǚyóu, zěnmeyàng?","Si on trouvait le temps de partir en voyage, qu'en penses-tu ?",0.5),
  C("好啊，我也很想一起出去玩。","Hǎo a, wǒ yě hěn xiǎng yìqǐ chūqù wán.","Bonne idée, moi aussi j'ai très envie qu'on sorte s'amuser ensemble.",0.5),
  C("你想去哪儿？","Nǐ xiǎng qù nǎr?","Où veux-tu aller ?",0.5),
  C("我还没想好呢。","Wǒ hái méi xiǎnghǎo ne.","Je n'ai pas encore décidé.",0.5),
  C("那你再想一想，你想好了，我来买票。","Nà nǐ zài xiǎng yi xiǎng, nǐ xiǎnghǎo le, wǒ lái mǎi piào.","Alors réfléchis-y encore un peu ; une fois décidée, j'achèterai les billets.",0.5),
  N("Révision : dites « les plats sont tous prêts »."),
  TH(),
  C("菜都做好了。","Cài dōu zuòhǎo le.","Les plats sont tous prêts.",0.6), HOLD(),

  N("« Ensemble » se dit [[一起|yìqǐ]]. Écoutez et répétez."),
  ...teach2("一起","yìqǐ","ensemble"),
  N("« Sortir » se dit [[出去|chūqù]]. Écoutez et répétez."),
  ...teach2("出去","chūqù","sortir"),
  N("Proposez : « si on trouvait le temps de partir en voyage, qu'en penses-tu ? »"),
  TH(),
  C("我们找个时间去旅游，怎么样？","Wǒmen zhǎo ge shíjiān qù lǚyóu, zěnmeyàng?","Si on trouvait le temps de partir en voyage, qu'en penses-tu ?",0.5),
  C("我们找个时间去旅游，怎么样？","Wǒmen zhǎo ge shíjiān qù lǚyóu, zěnmeyàng?","Si on trouvait le temps de partir en voyage, qu'en penses-tu ?",0.55), HOLD(),
  N("Répondez : « bonne idée, moi aussi j'ai très envie qu'on sorte s'amuser ensemble. »"),
  TH(),
  C("好啊，我也很想一起出去玩。","Hǎo a, wǒ yě hěn xiǎng yìqǐ chūqù wán.","Bonne idée, moi aussi j'ai très envie qu'on sorte s'amuser ensemble.",0.5), HOLD(),

  N("Grammaire : le redoublement verbal. Un verbe d'action, répétable ou continu, peut se redoubler pour exprimer une action brève, légère, ou une simple tentative — un ton décontracté, surtout à l'oral. Un verbe d'une syllabe se redouble en A(一)A ; un verbe de deux syllabes en ABAB ; un mot séparable en AAB. Écoutez ces exemples."),
  C("那你再想一想，你想好了，我来买票。","Nà nǐ zài xiǎng yi xiǎng, nǐ xiǎnghǎo le, wǒ lái mǎi piào.","Alors réfléchis-y encore un peu ; une fois décidée, j'achèterai les billets.",0.5),
  C("我有点儿累，现在想休息休息。","Wǒ yǒudiǎnr lèi, xiànzài xiǎng xiūxi xiūxi.","Je suis un peu fatigué, j'aimerais me reposer un peu maintenant.",0.5),
  C("你能过来帮帮忙吗？","Nǐ néng guòlái bāng bang máng ma?","Peux-tu venir m'aider un peu ?",0.5),
  N("Essayez : dites « je suis un peu fatigué, j'aimerais me reposer un peu maintenant »."),
  TH(),
  C("我有点儿累，现在想休息休息。","Wǒ yǒudiǎnr lèi, xiànzài xiǎng xiūxi xiūxi.","Je suis un peu fatigué, j'aimerais me reposer un peu maintenant.",0.55), HOLD(),

  N("On vous demande : « où veux-tu aller ? »"),
  C("你想去哪儿？","Nǐ xiǎng qù nǎr?","Où veux-tu aller ?",0.6),
  N("Répondez : « je n'ai pas encore décidé. »"),
  TH(),
  C("我还没想好呢。","Wǒ hái méi xiǎnghǎo ne.","Je n'ai pas encore décidé.",0.6), HOLD(),
  N("On vous encourage, avec le redoublement verbal : « alors réfléchis-y encore un peu ; une fois décidée, j'achèterai les billets. »"),
  TH(),
  C("那你再想一想，你想好了，我来买票。","Nà nǐ zài xiǎng yi xiǎng, nǐ xiǎnghǎo le, wǒ lái mǎi piào.","Alors réfléchis-y encore un peu ; une fois décidée, j'achèterai les billets.",0.5), HOLD(),

  N("Révision. Dites : peux-tu venir m'aider un peu ?"),
  TH(),
  C("你能过来帮帮忙吗？","Nǐ néng guòlái bāng bang máng ma?","Peux-tu venir m'aider un peu ?",0.6),
  N("Fin de la partie 2. À la partie 3 : Wang Yixue propose Xi'an comme destination."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"看了看", title:"Partie 3 · Direction Xi'an", desc:"洗 · 自己 · 拿 · 手 · 为什么 · 不错 · redoublement verbal (2) — action accomplie",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("吃个苹果吧，我都洗好了。","Chī ge píngguǒ ba, wǒ dōu xǐhǎo le.","Prends une pomme, je les ai déjà toutes lavées.",0.5),
  C("好的。","Hǎo de.","D'accord.",0.6),
  C("就在桌子上，你自己拿。","Jiù zài zhuōzi shang, nǐ zìjǐ ná.","Elles sont juste sur la table, sers-toi toi-même.",0.5),
  C("我去洗洗手。对了，我们去西安旅游，怎么样？","Wǒ qù xǐxi shǒu. Duìle, wǒmen qù Xī'ān lǚyóu, zěnmeyàng?","Je vais me laver un peu les mains. Au fait, si on allait visiter Xi'an, qu'en penses-tu ?",0.5),
  C("为什么想去西安？","Wèi shénme xiǎng qù Xī'ān?","Pourquoi veux-tu aller à Xi'an ?",0.5),
  C("我看了看网上的介绍，这个时候去西安很不错！","Wǒ kànle kàn wǎngshang de jièshào, zhège shíhou qù Xī'ān hěn búcuò!","J'ai jeté un œil aux présentations en ligne, c'est une très bonne période pour visiter Xi'an !",0.5),
  N("Révision : dites « je suis un peu fatigué, j'aimerais me reposer un peu maintenant »."),
  TH(),
  C("我有点儿累，现在想休息休息。","Wǒ yǒudiǎnr lèi, xiànzài xiǎng xiūxi xiūxi.","Je suis un peu fatigué, j'aimerais me reposer un peu maintenant.",0.55), HOLD(),

  N("« Laver » se dit [[洗|xǐ]]. Écoutez et répétez."),
  ...teach2("洗","xǐ","laver"),
  N("Dites : « prends une pomme, je les ai déjà toutes lavées. »"),
  TH(),
  C("吃个苹果吧，我都洗好了。","Chī ge píngguǒ ba, wǒ dōu xǐhǎo le.","Prends une pomme, je les ai déjà toutes lavées.",0.5), HOLD(),

  N("« Soi-même » se dit [[自己|zìjǐ]]. Écoutez et répétez."),
  ...teach2("自己","zìjǐ","soi-même"),
  N("« Prendre, tenir » se dit [[拿|ná]]. Écoutez et répétez."),
  ...teach2("拿","ná","prendre, tenir"),
  N("Dites : « elles sont juste sur la table, sers-toi toi-même. »"),
  TH(),
  C("就在桌子上，你自己拿。","Jiù zài zhuōzi shang, nǐ zìjǐ ná.","Elles sont juste sur la table, sers-toi toi-même.",0.55),
  C("就在桌子上，你自己拿。","Jiù zài zhuōzi shang, nǐ zìjǐ ná.","Elles sont juste sur la table, sers-toi toi-même.",0.6), HOLD(),

  N("« La main » se dit [[手|shǒu]]. Écoutez et répétez."),
  ...teach2("手","shǒu","la main"),
  N("Grammaire : le redoublement verbal pour une action déjà accomplie. Un verbe d'une syllabe se redouble en A了A ; un verbe de deux syllabes ne se redouble généralement pas — on dit plutôt AB了一下 ; un mot séparable se redouble en A了AB. Écoutez ces exemples."),
  C("我看了看网上的介绍。","Wǒ kànle kàn wǎngshang de jièshào.","J'ai jeté un œil aux présentations en ligne.",0.5),
  C("我休息了一下，现在觉得不累了。","Wǒ xiūxile yíxià, xiànzài juéde bú lèi le.","Je me suis un peu reposé, maintenant je ne me sens plus fatigué.",0.5),
  C("他昨天来帮了帮忙。","Tā zuótiān lái bāngle bāngmáng.","Il est venu aider un peu hier.",0.5),
  N("Essayez : dites « je me suis un peu reposé, maintenant je ne me sens plus fatigué »."),
  TH(),
  C("我休息了一下，现在觉得不累了。","Wǒ xiūxile yíxià, xiànzài juéde bú lèi le.","Je me suis un peu reposé, maintenant je ne me sens plus fatigué.",0.5), HOLD(),

  N("Dites : « je vais me laver un peu les mains. Au fait, si on allait visiter Xi'an, qu'en penses-tu ? »"),
  TH(),
  C("我去洗洗手。对了，我们去西安旅游，怎么样？","Wǒ qù xǐxi shǒu. Duìle, wǒmen qù Xī'ān lǚyóu, zěnmeyàng?","Je vais me laver un peu les mains. Au fait, si on allait visiter Xi'an, qu'en penses-tu ?",0.5), HOLD(),
  N("« Pourquoi » se dit [[为什么|wèi shénme]]. On vous demande : « pourquoi veux-tu aller à Xi'an ? »"),
  ...teach2("为什么","wèi shénme","pourquoi"),
  C("为什么想去西安？","Wèi shénme xiǎng qù Xī'ān?","Pourquoi veux-tu aller à Xi'an ?",0.6),
  N("« Pas mal, plutôt bien » se dit [[不错|búcuò]]. Répondez, avec le redoublement verbal : « j'ai jeté un œil aux présentations en ligne, c'est une très bonne période pour visiter Xi'an ! »"),
  ...teach2("不错","búcuò","pas mal, plutôt bien"),
  TH(),
  C("我看了看网上的介绍，这个时候去西安很不错！","Wǒ kànle kàn wǎngshang de jièshào, zhège shíhou qù Xī'ān hěn búcuò!","J'ai jeté un œil aux présentations en ligne, c'est une très bonne période pour visiter Xi'an !",0.45), HOLD(),

  N("Xiaoyu vous fait aussi écouter ce que Wang Yixue raconte à une amie, au téléphone. Écoutez."),
  C("早上，刘明开车送孩子去学校，送完孩子回家后，医院就来电话了，让他回去上班。","Zǎoshang, Liú Míng kāichē sòng háizi qù xuéxiào, sòngwán háizi huí jiā hòu, yīyuàn jiù lái diànhuà le, ràng tā huíqù shàngbān.","Ce matin, Liu Ming a conduit les enfants à l'école ; une fois rentré à la maison, l'hôpital a appelé pour lui demander de retourner travailler.",0.45),
  C("我觉得他这个月每天都很累，真想让他休息休息。","Wǒ juéde tā zhège yuè měi tiān dōu hěn lèi, zhēn xiǎng ràng tā xiūxi xiūxi.","Je trouve qu'il est fatigué tous les jours ce mois-ci, j'aimerais vraiment qu'il se repose un peu.",0.5),
  N("Quatre mots nouveaux. [[送|sòng]] veut dire « accompagner, déposer, offrir »."),
  ...teach2("送","sòng","accompagner, déposer, offrir"),
  N("[[回去|huíqù]] veut dire « retourner, rentrer (là-bas) »."),
  ...teach2("回去","huíqù","retourner, rentrer"),
  N("[[每|měi]] veut dire « chaque »."),
  ...teach2("每天","měi tiān","chaque jour"),
  N("Et [[累|lèi]] veut dire « fatigué »."),
  ...teach2("累","lèi","fatigué"),
  N("Dites : « je trouve qu'il est fatigué tous les jours ce mois-ci, j'aimerais vraiment qu'il se repose un peu. »"),
  TH(),
  C("我觉得他这个月每天都很累，真想让他休息休息。","Wǒ juéde tā zhège yuè měi tiān dōu hěn lèi, zhēn xiǎng ràng tā xiūxi xiūxi.","Je trouve qu'il est fatigué tous les jours ce mois-ci, j'aimerais vraiment qu'il se repose un peu.",0.45), HOLD(),

  // Révision finale de la leçon 3
  N("Révision finale de la leçon 3. Dites, avec un complément de résultat : j'ai fini de manger."),
  TH(),
  C("我吃完饭了。","Wǒ chīwán fàn le.","J'ai fini de manger.",0.6),
  N("Dites, avec le redoublement verbal : réfléchis-y encore un peu."),
  TH(),
  C("你再想一想。","Nǐ zài xiǎng yi xiǎng.","Réfléchis-y encore un peu.",0.6),
  N("Dites, pour une action déjà faite : j'ai jeté un œil aux présentations en ligne."),
  TH(),
  C("我看了看网上的介绍。","Wǒ kànle kàn wǎngshang de jièshào.","J'ai jeté un œil aux présentations en ligne.",0.55),
  N("Demandez : pourquoi veux-tu aller à Xi'an ?"),
  TH(),
  C("为什么想去西安？","Wèi shénme xiǎng qù Xī'ān?","Pourquoi veux-tu aller à Xi'an ?",0.6),
  N("Excellent ! Vous avez terminé la leçon 3 du HSK 2. Réécoutez-la demain, puis passez à la leçon 4. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("你们都吃好了吗？","Nǐmen dōu chīhǎole ma?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、她去医院看病了。","Yī. Tā qù yīyuàn kànbìng le.","",0.55),
  P(4,"…"),
  C("二、是的，今天的菜非常好吃。","Èr. Shì de, jīntiān de cài fēicháng hǎochī.","",0.55),
  P(4,"…"),
  C("三、我这个星期工作太多了。","Sān. Wǒ zhège xīngqī gōngzuò tài duō le.","",0.55),
  TH(),
  C("是的，今天的菜非常好吃。","Shì de, jīntiān de cài fēicháng hǎochī.","",0.6), HOLD(),

  // Question 2
  C("家月为什么没有来上课？","Jiāyuè wèi shénme méiyǒu lái shàngkè?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、她去医院看病了。","Yī. Tā qù yīyuàn kànbìng le.","",0.55),
  P(4,"…"),
  C("二、给我吧，我去洗一洗。","Èr. Gěi wǒ ba, wǒ qù xǐ yi xǐ.","",0.55),
  P(4,"…"),
  C("三、我这个星期工作太多了。","Sān. Wǒ zhège xīngqī gōngzuò tài duō le.","",0.55),
  TH(),
  C("她去医院看病了。","Tā qù yīyuàn kànbìng le.","",0.6), HOLD(),

  // Question 3
  C("你看，我今天买了这么多苹果。","Nǐ kàn, wǒ jīntiān mǎile zhème duō píngguǒ.","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、是的，今天的菜非常好吃。","Yī. Shì de, jīntiān de cài fēicháng hǎochī.","",0.55),
  P(4,"…"),
  C("二、给我吧，我去洗一洗。","Èr. Gěi wǒ ba, wǒ qù xǐ yi xǐ.","",0.55),
  P(4,"…"),
  C("三、她去医院看病了。","Sān. Tā qù yīyuàn kànbìng le.","",0.55),
  TH(),
  C("给我吧，我去洗一洗。","Gěi wǒ ba, wǒ qù xǐ yi xǐ.","",0.6), HOLD(),

  // Question 4
  C("你为什么每天都这么晚回来啊？","Nǐ wèi shénme měi tiān dōu zhème wǎn huílái a?","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、给我吧，我去洗一洗。","Yī. Gěi wǒ ba, wǒ qù xǐ yi xǐ.","",0.55),
  P(4,"…"),
  C("二、我这个星期工作太多了。","Èr. Wǒ zhège xīngqī gōngzuò tài duō le.","",0.55),
  P(4,"…"),
  C("三、她去医院看病了。","Sān. Tā qù yīyuàn kànbìng le.","",0.55),
  TH(),
  C("我这个星期工作太多了。","Wǒ zhège xīngqī gōngzuò tài duō le.","",0.6), HOLD(),

  // Question 5
  C("我这几天看完了一本书。这本书很不错，我想给我的学生们介绍一下，让他们也看看。","Wǒ zhè jǐ tiān kànwánle yì běn shū. Zhè běn shū hěn búcuò, wǒ xiǎng gěi wǒ de xuéshēngmen jièshào yíxià, ràng tāmen yě kànkan.","",0.45),
  C("他想让谁看看那本书？","Tā xiǎng ràng shéi kànkan nà běn shū?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、朋友。","Yī. Péngyou.","",0.6),
  P(4,"…"),
  C("二、学生。","Èr. Xuéshēng.","",0.6),
  P(4,"…"),
  C("三、老师。","Sān. Lǎoshī.","",0.6),
  TH(),
  C("学生。","Xuéshēng.","",0.65), HOLD(),

  // Question 6
  C("我是和朋友一起来北京旅游的。昨天我们到北京大学看了看。北京大学很大，人也很多。网上说有三千多名外国学生在这里学习。","Wǒ shì hé péngyou yìqǐ lái Běijīng lǚyóu de. Zuótiān wǒmen dào Běijīng Dàxué kànle kàn. Běijīng Dàxué hěn dà, rén yě hěn duō. Wǎngshang shuō yǒu sānqiān duō míng wàiguó xuéshēng zài zhèlǐ xuéxí.","",0.4),
  C("他到北京大学做什么？","Tā dào Běijīng Dàxué zuò shénme?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、旅游。","Yī. Lǚyóu.","",0.6),
  P(4,"…"),
  C("二、学习。","Èr. Xuéxí.","",0.6),
  P(4,"…"),
  C("三、看朋友。","Sān. Kàn péngyou.","",0.6),
  TH(),
  C("旅游。","Lǚyóu.","",0.65), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 4."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
