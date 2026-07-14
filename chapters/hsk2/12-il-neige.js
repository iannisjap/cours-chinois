/* ============================================================
   HSK 2 · Leçon 12 — 这里比北京冷多了 Il fait beaucoup plus froid ici qu'à Pékin
   D'après « 新HSK教程 2 », leçon 12.
   Vocabulaire de la leçon :
   事情 · 晴 · 正 · 外面 · 阴 ·
   从小 · 地铁 · 楼 · 站 · 小时候 · 好(adv.)
   Grammaire : phrase comparative avec 比 (4)(5)(6) —
   多了/得多, complément d'état, objet déplacé/verbe répété.
   Structure : leçon → 3 parties (les 3 dialogues du manuel,
   le texte 4/journal intégré en révision de la partie 3) +
   partie 4 exercice.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-12",
  badge: 12,
  hanzi: "这里比北京冷多了",
  title: "Leçon 12 · Il neige chez Bai Jiayue",
  desc: "3 parties · comparatif 多了/得多 · 比 avec complément d'état",
  intro: "Bai Jiayue, Wang Yifei et Li Wen s'appellent pour parler du temps qu'il fait et se donner des nouvelles. Au programme : trois nouvelles nuances de la phrase comparative avec 比, pour exprimer une grande différence, situer 比 autour d'un complément d'état, et déplacer l'objet ou répéter le verbe quand la phrase en a besoin.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"冷多了", title:"Partie 1 · Un coup de fil de Jiayue", desc:"事情 · 晴 · 正 · comparatif 多了/得多",
    build(){ return [
  N("Partie 1. Wang Yixue reçoit un appel de Bai Jiayue. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("喂，家月，是你啊！有什么事情吗？","Wèi, Jiāyuè, shì nǐ a! Yǒu shénme shìqing ma?","Allô, Jiayue, c'est toi ! Il y a quelque chose ?",0.4),
  C("没什么事，就想跟您说说话。","Méi shénme shì, jiù xiǎng gēn nín shuōshuo huà.","Rien de spécial, je voulais juste discuter un peu avec vous.",0.4),
  C("好啊。你今天没课吗？","Hǎo a. Nǐ jīntiān méi kè ma?","D'accord. Tu n'as pas cours aujourd'hui ?",0.5),
  C("下午有课。您那里天气怎么样？","Xiàwǔ yǒu kè. Nín nàlǐ tiānqì zěnmeyàng?","J'ai cours l'après-midi. Le temps est comment chez vous ?",0.45),
  C("北京这几天虽然是晴天，但是有点儿冷。","Běijīng zhè jǐ tiān suīrán shì qíngtiān, dànshì yǒudiǎnr lěng.","Ces jours-ci à Pékin il fait beau, mais il fait un peu froid.",0.4),
  C("我这里比北京冷多了，外边还正下着雪呢！","Wǒ zhèlǐ bǐ Běijīng lěngduō le, wàibian hái zhèng xiàzhe xuě ne!","Ici il fait beaucoup plus froid qu'à Pékin, et il neige encore dehors en ce moment !",0.35),

  N("« Une affaire » se dit [[事情|shìqing]]. Dites : « allô, Jiayue, c'est toi ! Il y a quelque chose ? »"),
  ...teach2("事情","shìqing","une affaire, quelque chose"),
  TH(),
  C("喂，家月，是你啊！有什么事情吗？","Wèi, Jiāyuè, shì nǐ a! Yǒu shénme shìqing ma?","Allô, Jiayue, c'est toi ! Il y a quelque chose ?",0.4), HOLD(),
  N("On vous répond : « rien de spécial, je voulais juste discuter un peu avec vous. »"),
  C("没什么事，就想跟您说说话。","Méi shénme shì, jiù xiǎng gēn nín shuōshuo huà.","Rien de spécial, je voulais juste discuter un peu avec vous.",0.4),
  N("Dites : « d'accord. Tu n'as pas cours aujourd'hui ? »"),
  TH(),
  C("好啊。你今天没课吗？","Hǎo a. Nǐ jīntiān méi kè ma?","D'accord. Tu n'as pas cours aujourd'hui ?",0.5), HOLD(),

  N("« Ensoleillé » se dit [[晴|qíng]]. On vous répond : « j'ai cours l'après-midi. Le temps est comment chez vous ? »"),
  ...teach2("晴","qíng","ensoleillé"),
  C("下午有课。您那里天气怎么样？","Xiàwǔ yǒu kè. Nín nàlǐ tiānqì zěnmeyàng?","J'ai cours l'après-midi. Le temps est comment chez vous ?",0.45),

  N("« En train de » se dit [[正|zhèng]] — indique qu'une action est en train de se produire. Dites : « ces jours-ci à Pékin il fait beau, mais il fait un peu froid. »"),
  ...teach2("正","zhèng","en train de (action en cours)"),
  TH(),
  C("北京这几天虽然是晴天，但是有点儿冷。","Běijīng zhè jǐ tiān suīrán shì qíngtiān, dànshì yǒudiǎnr lěng.","Ces jours-ci à Pékin il fait beau, mais il fait un peu froid.",0.4), HOLD(),

  N("Grammaire : dans une phrase comparative avec 比, on ajoute 多了 ou 得多 après l'adjectif pour indiquer une grande différence. Structure : A 比 B + adjectif + 多了/得多. Écoutez ces exemples."),
  C("我这里比北京冷多了。","Wǒ zhèlǐ bǐ Běijīng lěngduō le.","Ici il fait beaucoup plus froid qu'à Pékin.",0.4),
  C("坐飞机比坐火车快得多。","Zuò fēijī bǐ zuò huǒchē kuàiduō.","Prendre l'avion est beaucoup plus rapide que prendre le train.",0.4),
  C("他觉得红茶比绿茶好喝得多。","Tā juéde hóngchá bǐ lǜchá hǎohēduō.","Il trouve le thé noir bien meilleur que le thé vert.",0.4),
  N("Essayez, avec 得多 : dites « prendre l'avion est beaucoup plus rapide que prendre le train. »"),
  TH(),
  C("坐飞机比坐火车快得多。","Zuò fēijī bǐ zuò huǒchē kuàiduō.","Prendre l'avion est beaucoup plus rapide que prendre le train.",0.4), HOLD(),
  N("Dites, avec 多了 : « ici il fait beaucoup plus froid qu'à Pékin, et il neige encore dehors en ce moment ! »"),
  TH(),
  C("我这里比北京冷多了，外边还正下着雪呢！","Wǒ zhèlǐ bǐ Běijīng lěngduō le, wàibian hái zhèng xiàzhe xuě ne!","Ici il fait beaucoup plus froid qu'à Pékin, et il neige encore dehors en ce moment !",0.35), HOLD(),

  N("Révision. Dites, avec 得多 : il trouve le thé noir bien meilleur que le thé vert."),
  TH(),
  C("他觉得红茶比绿茶好喝得多。","Tā juéde hóngchá bǐ lǜchá hǎohēduō.","Il trouve le thé noir bien meilleur que le thé vert.",0.4),
  N("Fin de la partie 1. À la partie 2 : Wang Yixue appelle la professeure Wang Yifei."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"下得大", title:"Partie 2 · La neige chez Wang Yifei", desc:"外面 · 阴 · 比 avec complément d'état",
    build(){ return [
  N("Partie 2. Wang Yixue appelle sa collègue Wang Yifei. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("喂，一飞，听家月说你那边下雪了，下得大不大？","Wèi, Yīfēi, tīng Jiāyuè shuō nǐ nàbiān xià xuě le, xià de dà bu dà?","Allô, Yifei, Jiayue m'a dit qu'il neigeait chez toi, ça neige beaucoup ?",0.35),
  C("今天不大，昨天比今天下得大。","Jīntiān bú dà, zuótiān bǐ jīntiān xià de dà.","Aujourd'hui pas trop, hier ça neigeait plus fort qu'aujourd'hui.",0.45),
  C("天气不好，你去外面的时候多穿点儿衣服。","Tiānqì bù hǎo, nǐ qù wàimiàn de shíhou duō chuān diǎnr yīfu.","Le temps n'est pas bon, quand tu sors mets plus de vêtements.",0.4),
  C("这几天我在网上上课，没出去过。","Zhè jǐ tiān wǒ zài wǎngshang shàngkè, méi chūqùguo.","Ces derniers jours je fais cours en ligne, je ne suis pas sortie.",0.4),
  C("那就好，有事记得给我打电话。","Nà jiù hǎo, yǒu shì jìde gěi wǒ dǎ diànhuà.","Tant mieux alors, s'il y a quelque chose pense à m'appeler.",0.45),
  C("好的。现在不下雪了，我出去买点儿吃的。","Hǎo de. Xiànzài bú xià xuě le, wǒ chūqù mǎi diǎnr chī de.","D'accord. Il ne neige plus maintenant, je vais sortir acheter de quoi manger.",0.4),
  C("一次多买点儿，阴天下雪什么的就少出去吧。","Yí cì duō mǎi diǎnr, yīntiān xià xuě shénmede jiù shǎo chūqù ba.","Achète-en plus d'un coup, sors moins quand il fait gris ou qu'il neige.",0.4),

  N("« Dehors » se dit [[外面|wàimiàn]]. Dites : « allô, Yifei, Jiayue m'a dit qu'il neigeait chez toi, ça neige beaucoup ? »"),
  ...teach2("外面","wàimiàn","dehors"),
  TH(),
  C("喂，一飞，听家月说你那边下雪了，下得大不大？","Wèi, Yīfēi, tīng Jiāyuè shuō nǐ nàbiān xià xuě le, xià de dà bu dà?","Allô, Yifei, Jiayue m'a dit qu'il neigeait chez toi, ça neige beaucoup ?",0.35), HOLD(),

  N("Grammaire : dans une phrase comparative avec 比, si le verbe a un complément d'état, 比 peut se placer avant ou après le verbe. Écoutez ces exemples."),
  C("昨天比今天下得大。","Zuótiān bǐ jīntiān xià de dà.","Hier ça neigeait plus fort qu'aujourd'hui.",0.45),
  C("妈妈比我睡得晚。","Māma bǐ wǒ shuì de wǎn.","Maman se couche plus tard que moi.",0.45),
  C("李文跑得比白家月快。","Lǐ Wén pǎo de bǐ Bái Jiāyuè kuài.","Li Wen court plus vite que Bai Jiayue.",0.4),
  N("Essayez, avec 比 placé après le verbe : dites « Li Wen court plus vite que Bai Jiayue. »"),
  TH(),
  C("李文跑得比白家月快。","Lǐ Wén pǎo de bǐ Bái Jiāyuè kuài.","Li Wen court plus vite que Bai Jiayue.",0.4), HOLD(),
  N("Répondez, avec 比 avant le verbe : « aujourd'hui pas trop, hier ça neigeait plus fort qu'aujourd'hui. »"),
  TH(),
  C("今天不大，昨天比今天下得大。","Jīntiān bú dà, zuótiān bǐ jīntiān xià de dà.","Aujourd'hui pas trop, hier ça neigeait plus fort qu'aujourd'hui.",0.45), HOLD(),
  N("Dites : « le temps n'est pas bon, quand tu sors mets plus de vêtements. »"),
  TH(),
  C("天气不好，你去外面的时候多穿点儿衣服。","Tiānqì bù hǎo, nǐ qù wàimiàn de shíhou duō chuān diǎnr yīfu.","Le temps n'est pas bon, quand tu sors mets plus de vêtements.",0.4), HOLD(),
  N("On vous répond : « ces derniers jours je fais cours en ligne, je ne suis pas sortie. »"),
  C("这几天我在网上上课，没出去过。","Zhè jǐ tiān wǒ zài wǎngshang shàngkè, méi chūqùguo.","Ces derniers jours je fais cours en ligne, je ne suis pas sortie.",0.4),
  N("Dites : « tant mieux alors, s'il y a quelque chose pense à m'appeler. »"),
  TH(),
  C("那就好，有事记得给我打电话。","Nà jiù hǎo, yǒu shì jìde gěi wǒ dǎ diànhuà.","Tant mieux alors, s'il y a quelque chose pense à m'appeler.",0.45), HOLD(),
  N("On vous répond : « d'accord. Il ne neige plus maintenant, je vais sortir acheter de quoi manger. »"),
  C("好的。现在不下雪了，我出去买点儿吃的。","Hǎo de. Xiànzài bú xià xuě le, wǒ chūqù mǎi diǎnr chī de.","D'accord. Il ne neige plus maintenant, je vais sortir acheter de quoi manger.",0.4),

  N("« Nuageux, gris » se dit [[阴|yīn]]. Dites : « achète-en plus d'un coup, sors moins quand il fait gris ou qu'il neige. »"),
  ...teach2("阴","yīn","nuageux, gris (ciel couvert)"),
  TH(),
  C("一次多买点儿，阴天下雪什么的就少出去吧。","Yí cì duō mǎi diǎnr, yīntiān xià xuě shénmede jiù shǎo chūqù ba.","Achète-en plus d'un coup, sors moins quand il fait gris ou qu'il neige.",0.4), HOLD(),

  N("Révision. Dites, avec 比 avant le verbe : maman se couche plus tard que moi."),
  TH(),
  C("妈妈比我睡得晚。","Māma bǐ wǒ shuì de wǎn.","Maman se couche plus tard que moi.",0.45),
  N("Fin de la partie 2. À la partie 3 : Li Wen invite Bai Jiayue à courir."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"跑得比我快", title:"Partie 3 · Un jogging avec Li Wen", desc:"从小 · 地铁 · 楼 · 比 avec objet/verbe répété",
    build(){ return [
  N("Partie 3. Li Wen appelle Bai Jiayue pour l'inviter à courir. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("喂，家月，今天天气不错，我们去跑步吧！","Wèi, Jiāyuè, jīntiān tiānqì búcuò, wǒmen qù pǎobù ba!","Allô, Jiayue, il fait beau aujourd'hui, allons courir !",0.4),
  C("你跑步跑得比我快，我们能一起跑吗？","Nǐ pǎobù pǎo de bǐ wǒ kuài, wǒmen néng yìqǐ pǎo ma?","Tu cours plus vite que moi, on peut courir ensemble quand même ?",0.4),
  C("可以的，我慢慢跑，等着你。","Kěyǐ de, wǒ mànmàn pǎo, děngzhe nǐ.","Bien sûr, je courrai doucement, je t'attendrai.",0.5),
  C("好吧。你真爱跑步啊！","Hǎo ba. Nǐ zhēn ài pǎobù a!","D'accord. Tu aimes vraiment courir !",0.5),
  C("我从小就经常跟爸爸跑步，跑步能让人快乐！","Wǒ cóngxiǎo jiù jīngcháng gēn bàba pǎobù, pǎobù néng ràng rén kuàilè!","Depuis tout petit je courais souvent avec mon père, courir rend heureux !",0.35),
  C("好，那我准备一下。","Hǎo, nà wǒ zhǔnbèi yíxià.","D'accord, alors je me prépare un peu.",0.55),
  C("我现在坐地铁去找你，一会儿楼下见。","Wǒ xiànzài zuò dìtiě qù zhǎo nǐ, yíhuìr lóu xià jiàn.","Je prends le métro pour venir te chercher, à tout à l'heure en bas de l'immeuble.",0.4),

  N("« Depuis l'enfance » se dit [[从小|cóngxiǎo]]. Dites : « allô, Jiayue, il fait beau aujourd'hui, allons courir ! »"),
  ...teach2("从小","cóngxiǎo","depuis l'enfance, depuis tout petit"),
  TH(),
  C("喂，家月，今天天气不错，我们去跑步吧！","Wèi, Jiāyuè, jīntiān tiānqì búcuò, wǒmen qù pǎobù ba!","Allô, Jiayue, il fait beau aujourd'hui, allons courir !",0.4), HOLD(),

  N("Grammaire : dans une phrase comparative avec 比, si le verbe a à la fois un objet et un complément d'état, on peut déplacer l'objet en tête de phrase, ou répéter le verbe. Si le verbe est un mot dissociable, on répète l'élément verbal. Écoutez ces exemples."),
  C("你跑步跑得比我快。","Nǐ pǎobù pǎo de bǐ wǒ kuài.","Tu cours plus vite que moi (litt. toi courir, courir plus vite que moi).",0.4),
  C("白家月汉字写得比陈天中好。","Bái Jiāyuè hànzì xiě de bǐ Chén Tiānzhōng hǎo.","Bai Jiayue écrit les caractères mieux que Chen Tianzhong.",0.4),
  C("他踢足球比我踢得好。","Tā tī zúqiú bǐ wǒ tī de hǎo.","Il joue au foot mieux que moi.",0.45),
  N("Essayez, avec l'objet déplacé en tête : dites « Bai Jiayue écrit les caractères mieux que Chen Tianzhong. »"),
  TH(),
  C("白家月汉字写得比陈天中好。","Bái Jiāyuè hànzì xiě de bǐ Chén Tiānzhōng hǎo.","Bai Jiayue écrit les caractères mieux que Chen Tianzhong.",0.4), HOLD(),
  N("Répondez, avec le verbe répété : « tu cours plus vite que moi, on peut courir ensemble quand même ? »"),
  TH(),
  C("你跑步跑得比我快，我们能一起跑吗？","Nǐ pǎobù pǎo de bǐ wǒ kuài, wǒmen néng yìqǐ pǎo ma?","Tu cours plus vite que moi, on peut courir ensemble quand même ?",0.4), HOLD(),
  N("On vous répond : « bien sûr, je courrai doucement, je t'attendrai. »"),
  C("可以的，我慢慢跑，等着你。","Kěyǐ de, wǒ mànmàn pǎo, děngzhe nǐ.","Bien sûr, je courrai doucement, je t'attendrai.",0.5),
  N("Dites : « d'accord. Tu aimes vraiment courir ! »"),
  TH(),
  C("好吧。你真爱跑步啊！","Hǎo ba. Nǐ zhēn ài pǎobù a!","D'accord. Tu aimes vraiment courir !",0.5), HOLD(),
  N("On vous répond : « depuis tout petit je courais souvent avec mon père, courir rend heureux ! »"),
  C("我从小就经常跟爸爸跑步，跑步能让人快乐！","Wǒ cóngxiǎo jiù jīngcháng gēn bàba pǎobù, pǎobù néng ràng rén kuàilè!","Depuis tout petit je courais souvent avec mon père, courir rend heureux !",0.35),
  N("Dites : « d'accord, alors je me prépare un peu. »"),
  TH(),
  C("好，那我准备一下。","Hǎo, nà wǒ zhǔnbèi yíxià.","D'accord, alors je me prépare un peu.",0.55), HOLD(),

  N("« Le métro » se dit [[地铁|dìtiě]], et « un immeuble, un étage » se dit [[楼|lóu]]. On vous dit : « je prends le métro pour venir te chercher, à tout à l'heure en bas de l'immeuble. »"),
  ...teach2("地铁，楼","dìtiě, lóu","le métro ; un immeuble, un étage"),
  C("我现在坐地铁去找你，一会儿楼下见。","Wǒ xiànzài zuò dìtiě qù zhǎo nǐ, yíhuìr lóu xià jiàn.","Je prends le métro pour venir te chercher, à tout à l'heure en bas de l'immeuble.",0.4),

  N("Le soir, Bai Jiayue écrit dans son journal. « Une station » se dit [[站|zhàn]], « l'enfance » se dit [[小时候|xiǎoshíhou]], et [[好|hǎo]] comme adverbe veut dire « vraiment, bien ». Écoutez ce qu'elle raconte."),
  ...teach2("站，小时候，好","zhàn, xiǎoshíhou, hǎo","la station ; l'enfance ; (adv.) vraiment, bien"),
  C("前几天天气不好，我没走路，每天坐两站地铁去学校。","Qián jǐ tiān tiānqì bù hǎo, wǒ méi zǒulù, měitiān zuò liǎng zhàn dìtiě qù xuéxiào.","Ces derniers jours le temps n'était pas bon, je n'ai pas marché, chaque jour je prenais le métro deux stations pour aller à l'école.",0.3),
  C("今天是个大晴天，李文让我跟他去外面跑步。","Jīntiān shì gè dà qíngtiān, Lǐ Wén ràng wǒ gēn tā qù wàimiàn pǎobù.","Aujourd'hui il fait très beau, Li Wen m'a proposé d'aller courir dehors avec lui.",0.4),
  C("他小时候经常跑步，跑得比我快，但是他会等我。","Tā xiǎoshíhou jīngcháng pǎobù, pǎo de bǐ wǒ kuài, dànshì tā huì děng wǒ.","Quand il était petit il courait souvent, il court plus vite que moi, mais il m'attend.",0.35),
  C("跟李文一起跑步，我好高兴啊！","Gēn Lǐ Wén yìqǐ pǎobù, wǒ hǎo gāoxìng a!","Courir avec Li Wen, ça me rend vraiment heureuse !",0.5),
  N("Dites, avec 好 (adverbe) : courir avec Li Wen, ça me rend vraiment heureuse !"),
  TH(),
  C("跟李文一起跑步，我好高兴啊！","Gēn Lǐ Wén yìqǐ pǎobù, wǒ hǎo gāoxìng a!","Courir avec Li Wen, ça me rend vraiment heureuse !",0.5), HOLD(),

  // Révision finale de la leçon 12
  N("Révision finale de la leçon 12. Dites, avec 多了 : ici il fait beaucoup plus froid qu'à Pékin."),
  TH(),
  C("我这里比北京冷多了。","Wǒ zhèlǐ bǐ Běijīng lěngduō le.","Ici il fait beaucoup plus froid qu'à Pékin.",0.4),
  N("Dites, avec 比 avant le verbe : hier ça neigeait plus fort qu'aujourd'hui."),
  TH(),
  C("昨天比今天下得大。","Zuótiān bǐ jīntiān xià de dà.","Hier ça neigeait plus fort qu'aujourd'hui.",0.45),
  N("Dites, avec le verbe répété : tu cours plus vite que moi."),
  TH(),
  C("你跑步跑得比我快。","Nǐ pǎobù pǎo de bǐ wǒ kuài.","Tu cours plus vite que moi.",0.4),
  N("Excellent ! Vous avez terminé la leçon 12 du HSK 2. Réécoutez-la demain, puis passez à la leçon 13. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("你家离学校远不远？","Nǐ jiā lí xuéxiào yuǎn bu yuǎn?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、不太远，坐三站地铁就到了。","Yī. Bú tài yuǎn, zuò sān zhàn dìtiě jiù dào le.","",0.35),
  P(4,"…"),
  C("二、我喜欢游泳，每个星期天都跟爸爸去游泳。","Èr. Wǒ xǐhuan yóuyǒng, měi ge Xīngqītiān dōu gēn bàba qù yóuyǒng.","",0.3),
  P(4,"…"),
  C("三、我觉得比昨天好多了。","Sān. Wǒ juéde bǐ zuótiān hǎoduō le.","",0.45),
  TH(),
  C("不太远，坐三站地铁就到了。","Bú tài yuǎn, zuò sān zhàn dìtiě jiù dào le.","",0.4), HOLD(),

  // Question 2
  C("你小时候有什么爱好？","Nǐ xiǎoshíhou yǒu shénme àihào?","",0.45),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我喜欢游泳，每个星期天都跟爸爸去游泳。","Yī. Wǒ xǐhuan yóuyǒng, měi ge Xīngqītiān dōu gēn bàba qù yóuyǒng.","",0.3),
  P(4,"…"),
  C("二、我觉得红色的比黑色的好看多了。","Èr. Wǒ juéde hóngsè de bǐ hēisè de hǎokàn duō le.","",0.35),
  P(4,"…"),
  C("三、不太远，坐三站地铁就到了。","Sān. Bú tài yuǎn, zuò sān zhàn dìtiě jiù dào le.","",0.35),
  TH(),
  C("我喜欢游泳，每个星期天都跟爸爸去游泳。","Wǒ xǐhuan yóuyǒng, měi ge Xīngqītiān dōu gēn bàba qù yóuyǒng.","",0.35), HOLD(),

  // Question 3
  C("你今天身体好一些了吗？","Nǐ jīntiān shēntǐ hǎo yìxiē le ma?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我觉得比昨天好多了。","Yī. Wǒ juéde bǐ zuótiān hǎoduō le.","",0.45),
  P(4,"…"),
  C("二、不太远，坐三站地铁就到了。","Èr. Bú tài yuǎn, zuò sān zhàn dìtiě jiù dào le.","",0.35),
  P(4,"…"),
  C("三、我觉得红色的比黑色的好看多了。","Sān. Wǒ juéde hóngsè de bǐ hēisè de hǎokàn duō le.","",0.35),
  TH(),
  C("我觉得比昨天好多了。","Wǒ juéde bǐ zuótiān hǎoduō le.","",0.5), HOLD(),

  // Question 4
  C("这两个杯子哪个好看？","Zhè liǎng ge bēizi nǎge hǎokàn?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我觉得红色的比黑色的好看多了。","Yī. Wǒ juéde hóngsè de bǐ hēisè de hǎokàn duō le.","",0.35),
  P(4,"…"),
  C("二、我觉得比昨天好多了。","Èr. Wǒ juéde bǐ zuótiān hǎoduō le.","",0.45),
  P(4,"…"),
  C("三、我喜欢游泳，每个星期天都跟爸爸去游泳。","Sān. Wǒ xǐhuan yóuyǒng, měi ge Xīngqītiān dōu gēn bàba qù yóuyǒng.","",0.3),
  TH(),
  C("我觉得红色的比黑色的好看多了。","Wǒ juéde hóngsè de bǐ hēisè de hǎokàn duō le.","",0.4), HOLD(),

  // Question 5
  C("我觉得一个人旅游比跟朋友一起旅游好得多。一个人旅游，玩累了，我就在酒店休息，读读书，看看电视，休息好再出去。","Wǒ juéde yí ge rén lǚyóu bǐ gēn péngyou yìqǐ lǚyóu hǎo de duō. Yí ge rén lǚyóu, wánlèi le, wǒ jiù zài jiǔdiàn xiūxi, dúdu shū, kànkan diànshì, xiūxi hǎo zài chūqù.","",0.28),
  C("他为什么喜欢一个人旅游？","Tā wèi shénme xǐhuan yí ge rén lǚyóu?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、不会累。","Yī. Bú huì lèi.","",0.6),
  P(4,"…"),
  C("二、有更多时间。","Èr. Yǒu gèng duō shíjiān.","",0.5),
  P(4,"…"),
  C("三、能做想做的事。","Sān. Néng zuò xiǎng zuò de shì.","",0.5),
  TH(),
  C("能做想做的事。","Néng zuò xiǎng zuò de shì.","",0.55), HOLD(),

  // Question 6
  C("我经常走路去上学。但是今天是阴天，电视上说会下雨，所以我就坐地铁去学校了。坐地铁比走路快多了，我今天是第一个到教室的。","Wǒ jīngcháng zǒulù qù shàngxué. Dànshì jīntiān shì yīntiān, diànshì shang shuō huì xià yǔ, suǒyǐ wǒ jiù zuò dìtiě qù xuéxiào le. Zuò dìtiě bǐ zǒulù kuàiduō le, wǒ jīntiān shì dì-yī ge dào jiàoshì de.","",0.26),
  C("他今天为什么很早就到学校了？","Tā jīntiān wèi shénme hěn zǎo jiù dào xuéxiào le?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、地铁很快。","Yī. Dìtiě hěn kuài.","",0.55),
  P(4,"…"),
  C("二、今天没下雨。","Èr. Jīntiān méi xià yǔ.","",0.55),
  P(4,"…"),
  C("三、他走路很快。","Sān. Tā zǒulù hěn kuài.","",0.55),
  TH(),
  C("地铁很快。","Dìtiě hěn kuài.","",0.6), HOLD(),

  // Question 7
  C("我从小个子就高。上小学时，我就坐在教室最后面。到了中学，我还是比同学们高得多，所以老师就让我学习打篮球。","Wǒ cóngxiǎo gèzi jiù gāo. Shàng xiǎoxué shí, wǒ jiù zuò zài jiàoshì zuì hòumiàn. Dàole zhōngxué, wǒ háishi bǐ tóngxuémen gāo de duō, suǒyǐ lǎoshī jiù ràng wǒ xuéxí dǎ lánqiú.","",0.28),
  C("老师为什么让他学习打篮球？","Lǎoshī wèi shénme ràng tā xuéxí dǎ lánqiú?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、他爱打球。","Yī. Tā ài dǎqiú.","",0.55),
  P(4,"…"),
  C("二、他学习好。","Èr. Tā xuéxí hǎo.","",0.55),
  P(4,"…"),
  C("三、他个子很高。","Sān. Tā gèzi hěn gāo.","",0.55),
  TH(),
  C("他个子很高。","Tā gèzi hěn gāo.","",0.6), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 13."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
