/* ============================================================
   HSK 2 · Leçon 7 — 他篮球打得很好 Il joue très bien au basket
   D'après « 新HSK教程 2 », leçon 7.
   Vocabulaire de la leçon :
   从 · 往 · 跑 · 打 · 篮球 · 运动 · 踢 · 足球 · 球 · 得 ·
   跑步 · 游泳 · 游 · 爱好 · 开始
   Grammaire : phrase contractée 一……就…… ·
   complément de degré/état (1) et (2), avec 得.
   Structure : leçon → 3 parties (les 3 dialogues du manuel) +
   texte 4 (journal) intégré en révision de la partie 3.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-07",
  badge: 7,
  hanzi: "他篮球打得很好",
  title: "Leçon 7 · Le sport",
  desc: "3 parties · 一……就…… · complément d'état avec 得",
  intro: "Annie et Chen Tianzhong parlent de sport : basket, football, course à pied, natation. Au programme : la phrase contractée 一……就…… pour deux actions qui s'enchaînent, et le complément d'état avec 得 pour décrire comment on fait quelque chose.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"一下课就往外跑", title:"Partie 1 · Direction le terrain de basket", desc:"从 · 往 · 跑 · 打 · 篮球 · 一……就……",
    build(){ return [
  N("Partie 1. En classe, Annie retrouve Chen Tianzhong après son séjour à Pékin. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("安妮，你是什么时候从北京回来的？","Ānnī, nǐ shì shénme shíhou cóng Běijīng huílái de?","Annie, quand es-tu rentrée de Pékin ?",0.45),
  C("昨天下午。天中，你怎么一下课就往外跑？","Zuótiān xiàwǔ. Tiānzhōng, nǐ zěnme yí xiàkè jiù wǎng wài pǎo?","Hier après-midi. Tianzhong, pourquoi tu files dehors dès que le cours finit ?",0.4),
  C("我跟同学说好了，一起去打篮球。","Wǒ gēn tóngxué shuōhǎo le, yìqǐ qù dǎ lánqiú.","J'ai prévu avec des camarades d'aller jouer au basket ensemble.",0.45),
  C("我也想跟你们一起玩。","Wǒ yě xiǎng gēn nǐmen yìqǐ wán.","Moi aussi je voudrais venir jouer avec vous.",0.5),
  C("没问题，走吧。","Méi wèntí, zǒu ba.","Pas de problème, allons-y.",0.6),

  N("« Depuis, à partir de » se dit [[从|cóng]]. Écoutez et répétez."),
  ...teach2("从","cóng","depuis, à partir de"),
  N("Demandez : « Annie, quand es-tu rentrée de Pékin ? »"),
  TH(),
  C("安妮，你是什么时候从北京回来的？","Ānnī, nǐ shì shénme shíhou cóng Běijīng huílái de?","Annie, quand es-tu rentrée de Pékin ?",0.45), HOLD(),
  N("On vous répond : « hier après-midi. »"),
  C("昨天下午。","Zuótiān xiàwǔ.","Hier après-midi.",0.6),

  N("« Vers, en direction de » se dit [[往|wǎng]], et « courir » se dit [[跑|pǎo]]. Écoutez et répétez."),
  ...teach2("往，跑","wǎng, pǎo","vers ; courir"),
  N("Grammaire : la phrase contractée 一……就…… indique qu'une action suit immédiatement une autre — la première étant souvent la condition ou la cause de la seconde. Quand le sujet est le même, il se place avant 一 ou avant 就 ; quand les sujets diffèrent, chacun se place devant son propre 一 ou 就. Écoutez ces exemples."),
  C("你怎么一下课就往外跑？","Nǐ zěnme yí xiàkè jiù wǎng wài pǎo?","Pourquoi tu files dehors dès que le cours finit ?",0.45),
  C("我一到家，妈妈就打来电话了。","Wǒ yí dào jiā, māma jiù dǎlái diànhuà le.","Dès que je suis arrivé chez moi, maman a appelé.",0.45),
  C("一到星期六，陈天中就跟同学去打篮球。","Yí dào xīngqīliù, Chén Tiānzhōng jiù gēn tóngxué qù dǎ lánqiú.","Dès que c'est samedi, Chen Tianzhong va jouer au basket avec ses camarades.",0.4),
  N("Essayez : demandez, avec 一……就…… : pourquoi tu files dehors dès que le cours finit ?"),
  TH(),
  C("天中，你怎么一下课就往外跑？","Tiānzhōng, nǐ zěnme yí xiàkè jiù wǎng wài pǎo?","Tianzhong, pourquoi tu files dehors dès que le cours finit ?",0.4), HOLD(),

  N("« Jouer, frapper » se dit [[打|dǎ]], et « le basket » se dit [[篮球|lánqiú]]. Écoutez et répétez."),
  ...teach2("打篮球","dǎ lánqiú","jouer au basket"),
  N("Répondez, avec 一……就…… en tête d'esprit : « j'ai prévu avec des camarades d'aller jouer au basket ensemble. »"),
  TH(),
  C("我跟同学说好了，一起去打篮球。","Wǒ gēn tóngxué shuōhǎo le, yìqǐ qù dǎ lánqiú.","J'ai prévu avec des camarades d'aller jouer au basket ensemble.",0.45), HOLD(),
  N("Dites : « moi aussi je voudrais venir jouer avec vous. »"),
  TH(),
  C("我也想跟你们一起玩。","Wǒ yě xiǎng gēn nǐmen yìqǐ wán.","Moi aussi je voudrais venir jouer avec vous.",0.5), HOLD(),
  N("On vous répond : « pas de problème, allons-y. »"),
  C("没问题，走吧。","Méi wèntí, zǒu ba.","Pas de problème, allons-y.",0.6),

  N("Révision. Dites, avec 一……就…… : dès que je suis arrivé chez moi, maman a appelé."),
  TH(),
  C("我一到家，妈妈就打来电话了。","Wǒ yí dào jiā, māma jiù dǎlái diànhuà le.","Dès que je suis arrivé chez moi, maman a appelé.",0.45),
  N("Fin de la partie 1. À la partie 2 : les goûts sportifs de Chen Tianzhong."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"踢得怎么样", title:"Partie 2 · Le football aussi", desc:"运动 · 踢 · 足球 · 球 · 得 · complément d'état (1)",
    build(){ return [
  N("Partie 2. Sur le terrain de sport. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("天中，你是不是很喜欢打篮球？","Tiānzhōng, nǐ shì bu shì hěn xǐhuan dǎ lánqiú?","Tianzhong, c'est vrai que tu adores jouer au basket ?",0.45),
  C("没错。","Méi cuò.","C'est exact.",0.6),
  C("你还喜欢什么运动？","Nǐ hái xǐhuan shénme yùndòng?","Quel autre sport aimes-tu ?",0.5),
  C("我还喜欢踢足球，一到星期天就跟朋友们去踢球。","Wǒ hái xǐhuan tī zúqiú, yí dào xīngqītiān jiù gēn péngyoumen qù tī qiú.","J'aime aussi jouer au football, dès que c'est dimanche je vais jouer au ballon avec des amis.",0.4),
  C("你踢得怎么样？","Nǐ tī de zěnmeyàng?","Comment tu joues ?",0.55),
  C("我踢得还可以。","Wǒ tī de hái kěyǐ.","Je me débrouille pas mal.",0.6),
  N("Révision : dites, avec 一……就…… : dès que c'est samedi, Chen Tianzhong va jouer au basket avec ses camarades."),
  TH(),
  C("一到星期六，陈天中就跟同学去打篮球。","Yí dào xīngqīliù, Chén Tiānzhōng jiù gēn tóngxué qù dǎ lánqiú.","Dès que c'est samedi, Chen Tianzhong va jouer au basket avec ses camarades.",0.4), HOLD(),

  N("« Le sport, faire du sport » se dit [[运动|yùndòng]]. Écoutez et répétez."),
  ...teach2("运动","yùndòng","le sport, faire du sport"),
  N("Demandez : « quel autre sport aimes-tu ? »"),
  TH(),
  C("你还喜欢什么运动？","Nǐ hái xǐhuan shénme yùndòng?","Quel autre sport aimes-tu ?",0.5), HOLD(),

  N("« Donner un coup de pied » se dit [[踢|tī]], et « le football » se dit [[足球|zúqiú]] — remarquez le classificateur [[球|qiú]] qui veut dire « le ballon ». Écoutez et répétez."),
  ...teach2("踢足球","tī zúqiú","jouer au football"),
  N("Répondez, avec 一……就…… : « j'aime aussi jouer au football, dès que c'est dimanche je vais jouer au ballon avec des amis. »"),
  TH(),
  C("我还喜欢踢足球，一到星期天就跟朋友们去踢球。","Wǒ hái xǐhuan tī zúqiú, yí dào xīngqītiān jiù gēn péngyoumen qù tī qiú.","J'aime aussi jouer au football, dès que c'est dimanche je vais jouer au ballon avec des amis.",0.4), HOLD(),

  N("Grammaire : le complément d'état (ou de degré) se place après le verbe pour préciser comment se déroule l'action. Structure : verbe + 得 + groupe adjectival. À la forme négative, on ajoute 不 devant l'adjectif. Écoutez ces exemples."),
  C("我踢得还可以。","Wǒ tī de hái kěyǐ.","Je me débrouille pas mal.",0.55),
  C("他们玩得很高兴。","Tāmen wán de hěn gāoxìng.","Ils se sont beaucoup amusés.",0.5),
  C("白家月跑得不快。","Bái Jiāyuè pǎo de bú kuài.","Bai Jiayue ne court pas vite.",0.5),
  N("Trois façons de poser la question : ajouter 吗 à la fin ; verbe + 得 + adjectif + 不 + adjectif ; ou verbe + 得 + 怎么样. Écoutez."),
  C("你跑得快吗？","Nǐ pǎo de kuài ma?","Est-ce que tu cours vite ?",0.55),
  C("他来得早不早？","Tā lái de zǎo bu zǎo?","Est-ce qu'il est arrivé tôt ou pas ?",0.5),
  C("他们玩得怎么样？","Tāmen wán de zěnmeyàng?","Comment se sont-ils amusés ?",0.55),
  N("Le mot [[得|de]] introduit donc ce complément. Essayez de demander : comment se sont-ils amusés ?"),
  ...teach2("得","de","(particule du complément d'état)"),
  TH(),
  C("他们玩得怎么样？","Tāmen wán de zěnmeyàng?","Comment se sont-ils amusés ?",0.55), HOLD(),
  N("On vous demande, avec 得 : « comment tu joues ? »"),
  TH(),
  C("你踢得怎么样？","Nǐ tī de zěnmeyàng?","Comment tu joues ?",0.55), HOLD(),
  N("Répondez, avec 得 : « je me débrouille pas mal. »"),
  TH(),
  C("我踢得还可以。","Wǒ tī de hái kěyǐ.","Je me débrouille pas mal.",0.6), HOLD(),

  N("Révision. Dites, avec 得 : Bai Jiayue ne court pas vite."),
  TH(),
  C("白家月跑得不快。","Bái Jiāyuè pǎo de bú kuài.","Bai Jiayue ne court pas vite.",0.5),
  N("Fin de la partie 2. À la partie 3 : la course à pied et la natation."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"游得不快", title:"Partie 3 · Courir, nager", desc:"跑步 · 游泳 · 游 · 爱好 · 开始 · complément d'état (2)",
    build(){ return [
  N("Partie 3. Toujours sur le terrain de sport. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你篮球打得怎么样？","Nǐ lánqiú dǎ de zěnmeyàng?","Comment tu joues au basket ?",0.5),
  C("打得还可以。","Dǎ de hái kěyǐ.","Je me débrouille pas mal.",0.6),
  C("跑步呢？你跑得快不快？","Pǎobù ne? Nǐ pǎo de kuài bu kuài?","Et la course à pied ? Tu cours vite ou pas ?",0.5),
  C("我跑得不快，也不太喜欢跑步。","Wǒ pǎo de bú kuài, yě bú tài xǐhuan pǎobù.","Je ne cours pas vite, et je n'aime pas trop courir non plus.",0.5),
  C("那你喜欢游泳吗？","Nà nǐ xǐhuan yóuyǒng ma?","Alors tu aimes nager ?",0.5),
  C("喜欢，但我游泳游得不快。","Xǐhuan, dàn wǒ yóuyǒng yóu de bú kuài.","J'aime ça, mais je ne nage pas vite.",0.55),
  N("Révision : demandez, avec 得 : est-ce que tu cours vite ?"),
  TH(),
  C("你跑得快吗？","Nǐ pǎo de kuài ma?","Est-ce que tu cours vite ?",0.55), HOLD(),

  N("Grammaire : quand le verbe qui prend un complément d'état est un mot dissociable (comme 打篮球 ou 游泳), il faut répéter l'élément verbal. Si le verbe a un objet, on peut avancer l'objet en tête, ou répéter le verbe. Écoutez ces exemples."),
  C("我游泳游得不快。","Wǒ yóuyǒng yóu de bú kuài.","Je ne nage pas vite.",0.5),
  C("你篮球打得怎么样？","Nǐ lánqiú dǎ de zěnmeyàng?","Comment tu joues au basket ?",0.5),
  C("白家月写汉字写得很好看。","Bái Jiāyuè xiě Hànzì xiě de hěn hǎokàn.","Bai Jiayue écrit les caractères chinois très joliment.",0.45),
  N("« La course à pied » se dit [[跑步|pǎobù]]. Demandez, avec ce mot répété selon la règle : « comment tu joues au basket ? »"),
  ...teach2("跑步","pǎobù","la course à pied"),
  TH(),
  C("你篮球打得怎么样？","Nǐ lánqiú dǎ de zěnmeyàng?","Comment tu joues au basket ?",0.5), HOLD(),
  N("On vous répond : « je me débrouille pas mal. »"),
  C("打得还可以。","Dǎ de hái kěyǐ.","Je me débrouille pas mal.",0.6),
  N("Demandez : « et la course à pied ? Tu cours vite ou pas ? »"),
  TH(),
  C("跑步呢？你跑得快不快？","Pǎobù ne? Nǐ pǎo de kuài bu kuài?","Et la course à pied ? Tu cours vite ou pas ?",0.5), HOLD(),
  N("Répondez : « je ne cours pas vite, et je n'aime pas trop courir non plus. »"),
  TH(),
  C("我跑得不快，也不太喜欢跑步。","Wǒ pǎo de bú kuài, yě bú tài xǐhuan pǎobù.","Je ne cours pas vite, et je n'aime pas trop courir non plus.",0.5), HOLD(),

  N("« Nager » se dit [[游泳|yóuyǒng]], littéralement 游 (nager) + 泳 (la nage). On vous demande : « alors tu aimes nager ? »"),
  ...teach2("游泳","yóuyǒng","nager"),
  C("那你喜欢游泳吗？","Nà nǐ xǐhuan yóuyǒng ma?","Alors tu aimes nager ?",0.5),
  N("Répondez, en répétant le verbe 游 comme l'exige la règle : « j'aime ça, mais je ne nage pas vite. »"),
  ...teach2("游","yóu","nager (verbe seul)"),
  TH(),
  C("喜欢，但我游泳游得不快。","Xǐhuan, dàn wǒ yóuyǒng yóu de bú kuài.","J'aime ça, mais je ne nage pas vite.",0.55), HOLD(),

  N("Le soir, Chen Tianzhong écrit dans son journal. Écoutez ce qu'il raconte."),
  C("我的爱好是运动。从上小学开始，我每天都跟爸爸去运动。","Wǒ de àihào shì yùndòng. Cóng shàng xiǎoxué kāishǐ, wǒ měitiān dōu gēn bàba qù yùndòng.","Mon passe-temps, c'est le sport. Depuis l'école primaire, je fais du sport avec papa tous les jours.",0.35),
  C("现在我篮球打得很好，足球踢得不错，游泳游得也很快。","Xiànzài wǒ lánqiú dǎ de hěn hǎo, zúqiú tī de búcuò, yóuyǒng yóu de yě hěn kuài.","Maintenant je joue très bien au basket, plutôt bien au football, et je nage très vite aussi.",0.35),
  C("我一有时间就去运动。","Wǒ yì yǒu shíjiān jiù qù yùndòng.","Dès que j'ai du temps, je vais faire du sport.",0.5),
  N("Deux mots nouveaux : [[爱好|àihào]] veut dire « le passe-temps, aimer beaucoup », et [[开始|kāishǐ]] veut dire « commencer, le début »."),
  ...teach2("爱好","àihào","le passe-temps, aimer beaucoup"),
  ...teach2("开始","kāishǐ","commencer, le début"),
  N("Dites, avec 从……开始 : depuis l'école primaire, je fais du sport avec papa tous les jours."),
  TH(),
  C("从上小学开始，我每天都跟爸爸去运动。","Cóng shàng xiǎoxué kāishǐ, wǒ měitiān dōu gēn bàba qù yùndòng.","Depuis l'école primaire, je fais du sport avec papa tous les jours.",0.4), HOLD(),
  N("Dites, avec 一……就…… : dès que j'ai du temps, je vais faire du sport."),
  TH(),
  C("我一有时间就去运动。","Wǒ yì yǒu shíjiān jiù qù yùndòng.","Dès que j'ai du temps, je vais faire du sport.",0.5), HOLD(),

  // Révision finale de la leçon 7
  N("Révision finale de la leçon 7. Dites, avec 一……就…… : dès que je suis arrivé chez moi, maman a appelé."),
  TH(),
  C("我一到家，妈妈就打来电话了。","Wǒ yí dào jiā, māma jiù dǎlái diànhuà le.","Dès que je suis arrivé chez moi, maman a appelé.",0.45),
  N("Dites, avec un complément d'état : Bai Jiayue ne court pas vite."),
  TH(),
  C("白家月跑得不快。","Bái Jiāyuè pǎo de bú kuài.","Bai Jiayue ne court pas vite.",0.5),
  N("Dites, avec un complément d'état et le verbe répété : je ne nage pas vite."),
  TH(),
  C("我游泳游得不快。","Wǒ yóuyǒng yóu de bú kuài.","Je ne nage pas vite.",0.5),
  N("Excellent ! Vous avez terminé la leçon 7 du HSK 2. Réécoutez-la demain, puis passez à la leçon 8. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("你会踢球吗？","Nǐ huì tī qiú ma?","",0.6),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、会，但踢得不太好。","Yī. Huì, dàn tī de bú tài hǎo.","",0.5),
  P(4,"…"),
  C("二、鱼做得很好，这两个菜也可以。","Èr. Yú zuò de hěn hǎo, zhè liǎng ge cài yě kěyǐ.","",0.45),
  P(4,"…"),
  C("三、是，我一下班就过来。","Sān. Shì, wǒ yí xiàbān jiù guòlái.","",0.5),
  TH(),
  C("会，但踢得不太好。","Huì, dàn tī de bú tài hǎo.","",0.55), HOLD(),

  // Question 2
  C("今天晚上的菜怎么样？","Jīntiān wǎnshang de cài zěnmeyàng?","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、那我们出去运动运动吧。","Yī. Nà wǒmen chūqù yùndòng yùndòng ba.","",0.45),
  P(4,"…"),
  C("二、鱼做得很好，这两个菜也可以。","Èr. Yú zuò de hěn hǎo, zhè liǎng ge cài yě kěyǐ.","",0.45),
  P(4,"…"),
  C("三、会，但踢得不太好。","Sān. Huì, dàn tī de bú tài hǎo.","",0.5),
  TH(),
  C("鱼做得很好，这两个菜也可以。","Yú zuò de hěn hǎo, zhè liǎng ge cài yě kěyǐ.","",0.45), HOLD(),

  // Question 3
  C("你每天都来这儿游泳吗？","Nǐ měi tiān dōu lái zhèr yóuyǒng ma?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、是，我一下班就过来。","Yī. Shì, wǒ yí xiàbān jiù guòlái.","",0.5),
  P(4,"…"),
  C("二、那我们出去运动运动吧。","Èr. Nà wǒmen chūqù yùndòng yùndòng ba.","",0.45),
  P(4,"…"),
  C("三、鱼做得很好，这两个菜也可以。","Sān. Yú zuò de hěn hǎo, zhè liǎng ge cài yě kěyǐ.","",0.45),
  TH(),
  C("是，我一下班就过来。","Shì, wǒ yí xiàbān jiù guòlái.","",0.55), HOLD(),

  // Question 4
  C("你们不要在家看电视、玩手机了。","Nǐmen búyào zài jiā kàn diànshì, wán shǒujī le.","",0.45),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、会，但踢得不太好。","Yī. Huì, dàn tī de bú tài hǎo.","",0.5),
  P(4,"…"),
  C("二、是，我一下班就过来。","Èr. Shì, wǒ yí xiàbān jiù guòlái.","",0.5),
  P(4,"…"),
  C("三、那我们出去运动运动吧。","Sān. Nà wǒmen chūqù yùndòng yùndòng ba.","",0.45),
  TH(),
  C("那我们出去运动运动吧。","Nà wǒmen chūqù yùndòng yùndòng ba.","",0.5), HOLD(),

  // Question 5
  C("朋友们都知道我是学中文的，他们问我中文说得怎么样，我会跟他们说不太好，但我的中文老师觉得我说得不错。","Péngyoumen dōu zhīdào wǒ shì xué Zhōngwén de, tāmen wèn wǒ Zhōngwén shuō de zěnmeyàng, wǒ huì gēn tāmen shuō bú tài hǎo, dàn wǒ de Zhōngwén lǎoshī juéde wǒ shuō de búcuò.","",0.35),
  C("老师觉得他的中文怎么样？","Lǎoshī juéde tā de Zhōngwén zěnmeyàng?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、不错。","Yī. Búcuò.","",0.6),
  P(4,"…"),
  C("二、不好。","Èr. Bù hǎo.","",0.6),
  P(4,"…"),
  C("三、不太好。","Sān. Bú tài hǎo.","",0.6),
  TH(),
  C("不错。","Búcuò.","",0.65), HOLD(),

  // Question 6
  C("我喜欢旅游，一有时间就往外跑。我去过泰国、加拿大，但我还没去过中国。今年我想去中国看一看。","Wǒ xǐhuan lǚyóu, yì yǒu shíjiān jiù wǎng wài pǎo. Wǒ qùguo Tàiguó, Jiānádà, dàn wǒ hái méi qùguo Zhōngguó. Jīnnián wǒ xiǎng qù Zhōngguó kàn yi kàn.","",0.35),
  C("他想去哪儿旅游？","Tā xiǎng qù nǎr lǚyóu?","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、泰国。","Yī. Tàiguó.","",0.6),
  P(4,"…"),
  C("二、中国。","Èr. Zhōngguó.","",0.6),
  P(4,"…"),
  C("三、加拿大。","Sān. Jiānádà.","",0.6),
  TH(),
  C("中国。","Zhōngguó.","",0.65), HOLD(),

  // Question 7
  C("今天是奶奶的80岁生日。爸爸、妈妈从早上起床就开始准备饭菜，有鱼、肉什么的，妈妈还做了长长的生日面。奶奶说这个生日过得很高兴。","Jīntiān shì nǎinai de bāshí suì shēngrì. Bàba, māma cóng zǎoshang qǐchuáng jiù kāishǐ zhǔnbèi fàncài, yǒu yú, ròu shénmede, māma hái zuòle chángcháng de shēngrìmiàn. Nǎinai shuō zhège shēngrì guò de hěn gāoxìng.","",0.32),
  C("生日面是谁做的？","Shēngrìmiàn shì shéi zuò de?","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、爸爸。","Yī. Bàba.","",0.6),
  P(4,"…"),
  C("二、爷爷。","Èr. Yéye.","",0.6),
  P(4,"…"),
  C("三、妈妈。","Sān. Māma.","",0.6),
  TH(),
  C("妈妈。","Māma.","",0.65), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 8."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
