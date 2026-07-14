/* ============================================================
   HSK 2 · Leçon 8 — 虽然你忘了，但是我记得
   Même si tu as oublié, moi je m'en souviens
   D'après « 新HSK教程 2 », leçon 8.
   Vocabulaire de la leçon :
   手表 · 左边 · 左 · 比 · 右边 · 右 · 记得 · 爱情片 ·
   有意思 · 点 · 虽然 · 但是 · 花 · 妻子 · 丈夫 · 饭馆
   Grammaire : phrase comparative avec 比 (1) et (2) ·
   phrase adversative 虽然……但是……
   Structure : leçon → 3 parties (les 3 dialogues du manuel) +
   texte 4 (récit à la 3e personne) intégré en révision de la partie 3.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-08",
  badge: 8,
  hanzi: "虽然你忘了，但是我记得",
  title: "Leçon 8 · L'anniversaire de Wang Yixue",
  desc: "3 parties · comparatif avec 比 · 虽然……但是……",
  intro: "Wang Yixue et Liu Ming font du shopping, puis vont au cinéma, puis au restaurant — sans que Wang Yixue se doute que c'est en fait son anniversaire ! Au programme : la phrase comparative avec 比 pour comparer deux choses, et la phrase adversative 虽然……但是…… pour marquer un contraste.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"左边的比右边的好看", title:"Partie 1 · Deux montres à comparer", desc:"手表 · 左边 · 左 · 比 · 右边 · 右",
    build(){ return [
  N("Partie 1. Dans le centre commercial, Wang Yixue et Liu Ming regardent des montres. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你看，这两块手表怎么样？","Nǐ kàn, zhè liǎng kuài shǒubiǎo zěnmeyàng?","Regarde, que penses-tu de ces deux montres ?",0.45),
  C("都不错！","Dōu búcuò!","Elles sont belles toutes les deux !",0.6),
  C("我喜欢左边这个。","Wǒ xǐhuan zuǒbian zhège.","Moi je préfère celle de gauche.",0.5),
  C("我也觉得左边的比右边的好看。","Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.","Je trouve aussi que celle de gauche est plus jolie que celle de droite.",0.45),
  C("你看看要多少钱！","Nǐ kànkan yào duōshao qián!","Regarde donc combien elle coûte !",0.55),
  C("真不便宜！八千八！","Zhēn bù piányi! Bāqiānbā!","Ce n'est vraiment pas donné ! Huit mille huit cents !",0.5),

  N("« La montre » se dit [[手表|shǒubiǎo]]. Écoutez et répétez."),
  ...teach2("手表","shǒubiǎo","la montre"),
  N("Demandez : « regarde, que penses-tu de ces deux montres ? »"),
  TH(),
  C("你看，这两块手表怎么样？","Nǐ kàn, zhè liǎng kuài shǒubiǎo zěnmeyàng?","Regarde, que penses-tu de ces deux montres ?",0.45), HOLD(),
  N("On vous répond : « elles sont belles toutes les deux ! »"),
  C("都不错！","Dōu búcuò!","Elles sont belles toutes les deux !",0.6),

  N("« Gauche, à gauche » se dit [[左边|zuǒbian]], de [[左|zuǒ]] « gauche ». Dites : « moi je préfère celle de gauche. »"),
  ...teach2("左边","zuǒbian","gauche, à gauche"),
  TH(),
  C("我喜欢左边这个。","Wǒ xǐhuan zuǒbian zhège.","Moi je préfère celle de gauche.",0.5), HOLD(),

  N("« Droite, à droite » se dit [[右边|yòubian]], de [[右|yòu]] « droite ». Grammaire : la phrase comparative avec 比 compare deux choses selon une qualité ou un état. Structure : A + 比 + B + adjectif (ou groupe adjectival). Écoutez ces exemples."),
  ...teach2("右边","yòubian","droite, à droite"),
  ...teach2("比","bǐ","que (comparaison), comparer"),
  C("我也觉得左边的比右边的好看。","Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.","Je trouve aussi que celle de gauche est plus jolie que celle de droite.",0.45),
  C("今天比昨天冷。","Jīntiān bǐ zuótiān lěng.","Aujourd'hui il fait plus froid qu'hier.",0.5),
  C("他觉得踢足球比打篮球有意思。","Tā juéde tī zúqiú bǐ dǎ lánqiú yǒu yìsi.","Il trouve le football plus intéressant que le basket.",0.45),
  N("Essayez, avec 比 : dites « aujourd'hui il fait plus froid qu'hier. »"),
  TH(),
  C("今天比昨天冷。","Jīntiān bǐ zuótiān lěng.","Aujourd'hui il fait plus froid qu'hier.",0.5), HOLD(),
  N("Dites, avec 比 : « je trouve aussi que celle de gauche est plus jolie que celle de droite. »"),
  TH(),
  C("我也觉得左边的比右边的好看。","Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.","Je trouve aussi que celle de gauche est plus jolie que celle de droite.",0.45), HOLD(),

  N("On vous encourage à vérifier le prix : « regarde donc combien elle coûte ! »"),
  C("你看看要多少钱！","Nǐ kànkan yào duōshao qián!","Regarde donc combien elle coûte !",0.55),
  N("Répondez, choqué : « ce n'est vraiment pas donné ! Huit mille huit cents ! »"),
  TH(),
  C("真不便宜！八千八！","Zhēn bù piányi! Bāqiānbā!","Ce n'est vraiment pas donné ! Huit mille huit cents !",0.5), HOLD(),

  N("Révision. Dites, avec 比 : il trouve le football plus intéressant que le basket."),
  TH(),
  C("他觉得踢足球比打篮球有意思。","Tā juéde tī zúqiú bǐ dǎ lánqiú yǒu yìsi.","Il trouve le football plus intéressant que le basket.",0.45),
  N("Fin de la partie 1. À la partie 2 : Wang Yixue et Liu Ming choisissent un film."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"更有意思", title:"Partie 2 · Quel film choisir ?", desc:"记得 · 爱情片 · 有意思 · comparatif avec 还/更",
    build(){ return [
  N("Partie 2. Devant le cinéma. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("今天有不少电影，我们看个电影吧。","Jīntiān yǒu bù shǎo diànyǐng, wǒmen kàn ge diànyǐng ba.","Il y a pas mal de films aujourd'hui, allons en voir un.",0.45),
  C("好啊！我们看哪个？","Hǎo a! Wǒmen kàn nǎge?","D'accord ! On regarde lequel ?",0.55),
  C("我记得你喜欢看爱情片，我们看那个爱情片，怎么样？","Wǒ jìde nǐ xǐhuan kàn àiqíngpiàn, wǒmen kàn nàge àiqíngpiàn, zěnmeyàng?","Je me souviens que tu aimes les films romantiques, si on regardait ce film romantique-là ?",0.4),
  C("还是看这个吧，我看网上说这个电影比那个爱情片更有意思。","Háishi kàn zhège ba, wǒ kàn wǎngshang shuō zhège diànyǐng bǐ nàge àiqíngpiàn gèng yǒu yìsi.","Regardons plutôt celui-ci, j'ai lu en ligne que ce film est encore plus intéressant que ce film romantique.",0.35),
  C("好。我去买票。","Hǎo. Wǒ qù mǎi piào.","D'accord. Je vais acheter les billets.",0.55),
  C("到网上买吧，网上买比在这里买便宜。","Dào wǎngshang mǎi ba, wǎngshang mǎi bǐ zài zhèlǐ mǎi piányi.","Achète-les en ligne plutôt, c'est moins cher en ligne qu'ici.",0.4),
  N("Révision : dites, avec 比 : aujourd'hui il fait plus froid qu'hier."),
  TH(),
  C("今天比昨天冷。","Jīntiān bǐ zuótiān lěng.","Aujourd'hui il fait plus froid qu'hier.",0.5), HOLD(),

  N("« Se souvenir » se dit [[记得|jìde]]. Écoutez et répétez."),
  ...teach2("记得","jìde","se souvenir"),
  N("« Le film romantique » se dit [[爱情片|àiqíngpiàn]]. Dites : « je me souviens que tu aimes les films romantiques, si on regardait ce film romantique-là ? »"),
  ...teach2("爱情片","àiqíngpiàn","le film romantique"),
  TH(),
  C("我记得你喜欢看爱情片，我们看那个爱情片，怎么样？","Wǒ jìde nǐ xǐhuan kàn àiqíngpiàn, wǒmen kàn nàge àiqíngpiàn, zěnmeyàng?","Je me souviens que tu aimes les films romantiques, si on regardait ce film romantique-là ?",0.4), HOLD(),

  N("« Intéressant » se dit [[有意思|yǒu yìsi]]. Grammaire : dans une phrase comparative avec 比, on ne peut pas utiliser d'adverbes de degré comme 很 ou 非常 devant l'adjectif — en revanche, 还 et 更 sont possibles pour renforcer la comparaison. Écoutez ces exemples."),
  ...teach2("有意思","yǒu yìsi","intéressant"),
  C("我看网上说这个电影比那个爱情片更有意思。","Wǒ kàn wǎngshang shuō zhège diànyǐng bǐ nàge àiqíngpiàn gèng yǒu yìsi.","J'ai lu en ligne que ce film est encore plus intéressant que ce film romantique.",0.4),
  C("今天比昨天更热。","Jīntiān bǐ zuótiān gèng rè.","Aujourd'hui il fait encore plus chaud qu'hier.",0.5),
  C("我觉得奶茶比牛奶还好喝。","Wǒ juéde nǎichá bǐ niúnǎi hái hǎohē.","Je trouve le thé au lait encore meilleur que le lait.",0.45),
  N("Essayez, avec 更 : dites « aujourd'hui il fait encore plus chaud qu'hier. »"),
  TH(),
  C("今天比昨天更热。","Jīntiān bǐ zuótiān gèng rè.","Aujourd'hui il fait encore plus chaud qu'hier.",0.5), HOLD(),
  N("Répondez au dialogue, avec 更 : « regardons plutôt celui-ci, j'ai lu en ligne que ce film est encore plus intéressant que ce film romantique. »"),
  TH(),
  C("还是看这个吧，我看网上说这个电影比那个爱情片更有意思。","Háishi kàn zhège ba, wǒ kàn wǎngshang shuō zhège diànyǐng bǐ nàge àiqíngpiàn gèng yǒu yìsi.","Regardons plutôt celui-ci, j'ai lu en ligne que ce film est encore plus intéressant que ce film romantique.",0.35), HOLD(),
  N("On vous répond : « d'accord. Je vais acheter les billets. »"),
  C("好。我去买票。","Hǎo. Wǒ qù mǎi piào.","D'accord. Je vais acheter les billets.",0.55),
  N("Dites, avec 比 : « achète-les en ligne plutôt, c'est moins cher en ligne qu'ici. »"),
  TH(),
  C("到网上买吧，网上买比在这里买便宜。","Dào wǎngshang mǎi ba, wǎngshang mǎi bǐ zài zhèlǐ mǎi piányi.","Achète-les en ligne plutôt, c'est moins cher en ligne qu'ici.",0.4), HOLD(),

  N("Révision. Dites, avec 还 : je trouve le thé au lait encore meilleur que le lait."),
  TH(),
  C("我觉得奶茶比牛奶还好喝。","Wǒ juéde nǎichá bǐ niúnǎi hái hǎohē.","Je trouve le thé au lait encore meilleur que le lait.",0.45),
  N("Fin de la partie 2. À la partie 3 : au restaurant, une surprise attend Wang Yixue."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"生日快乐", title:"Partie 3 · Au restaurant, la surprise", desc:"点 · 虽然 · 但是 · 花 · 虽然……但是……",
    build(){ return [
  N("Partie 3. Au restaurant, Liu Ming commande beaucoup de plats. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("您好！就要这几个菜吧，谢谢！","Nín hǎo! Jiù yào zhè jǐ ge cài ba, xièxie!","Bonjour ! On va prendre ces quelques plats, merci !",0.45),
  C("怎么点这么多菜？","Zěnme diǎn zhème duō cài?","Pourquoi tu commandes autant de plats ?",0.55),
  C("你想想，今天是几月几号？","Nǐ xiǎngxiang, jīntiān shì jǐ yuè jǐ hào?","Réfléchis un peu, on est le combien aujourd'hui ?",0.5),
  C("8月27号。啊！我的生日！","Bā yuè èrshíqī hào. À! Wǒ de shēngrì!","Le 27 août. Ah ! C'est mon anniversaire !",0.5),
  C("生日快乐！虽然你忘了，但是我记得。看看这是什么？","Shēngrì kuàilè! Suīrán nǐ wàng le, dànshì wǒ jìde. Kànkan zhè shì shénme?","Joyeux anniversaire ! Même si toi tu avais oublié, moi je m'en souvenais. Regarde ce que c'est.",0.4),
  C("手表！吃饭、看电影、买手表，今天花了不少钱吧？","Shǒubiǎo! Chī fàn, kàn diànyǐng, mǎi shǒubiǎo, jīntiān huāle bù shǎo qián ba?","Une montre ! Repas, cinéma, montre : tu as dépensé pas mal d'argent aujourd'hui, non ?",0.4),
  C("虽然花了一些钱，但是我们过了一个快乐的生日。","Suīrán huāle yìxiē qián, dànshì wǒmen guòle yí ge kuàilè de shēngrì.","Même si on a dépensé un peu d'argent, on a passé un anniversaire heureux.",0.4),
  N("Révision : dites, avec 更 : aujourd'hui il fait encore plus chaud qu'hier."),
  TH(),
  C("今天比昨天更热。","Jīntiān bǐ zuótiān gèng rè.","Aujourd'hui il fait encore plus chaud qu'hier.",0.5), HOLD(),

  N("« Choisir, commander » se dit [[点|diǎn]]. Demandez : « pourquoi tu commandes autant de plats ? »"),
  ...teach2("点","diǎn","choisir, commander"),
  TH(),
  C("怎么点这么多菜？","Zěnme diǎn zhème duō cài?","Pourquoi tu commandes autant de plats ?",0.55), HOLD(),
  N("On vous répond : « réfléchis un peu, on est le combien aujourd'hui ? »"),
  C("你想想，今天是几月几号？","Nǐ xiǎngxiang, jīntiān shì jǐ yuè jǐ hào?","Réfléchis un peu, on est le combien aujourd'hui ?",0.5),
  N("Dites : « le 27 août. Ah ! C'est mon anniversaire ! »"),
  TH(),
  C("8月27号。啊！我的生日！","Bā yuè èrshíqī hào. À! Wǒ de shēngrì!","Le 27 août. Ah ! C'est mon anniversaire !",0.5), HOLD(),

  N("Grammaire : la phrase adversative 虽然……但是…… marque un contraste — 虽然 introduit le fait concédé, 但是 la conséquence contraire à l'attente. On peut utiliser les deux mots ensemble, ou un seul des deux. Écoutez ces exemples."),
  ...teach2("虽然，但是","suīrán, dànshì","même si… ; mais, cependant"),
  C("虽然你忘了，但是我记得。","Suīrán nǐ wàng le, dànshì wǒ jìde.","Même si toi tu avais oublié, moi je m'en souvenais.",0.45),
  C("外边下雪了，但是不太冷。","Wàibian xià xuě le, dànshì bú tài lěng.","Il neige dehors, mais il ne fait pas trop froid.",0.45),
  C("虽然觉得有点儿累，我还是走回家了。","Suīrán juéde yǒudiǎnr lèi, wǒ háishi zǒuhuí jiā le.","Même si je me sentais un peu fatigué, je suis quand même rentré à pied.",0.4),
  N("Essayez, avec 虽然……但是…… : dites « il neige dehors, mais il ne fait pas trop froid. »"),
  TH(),
  C("外边下雪了，但是不太冷。","Wàibian xià xuě le, dànshì bú tài lěng.","Il neige dehors, mais il ne fait pas trop froid.",0.45), HOLD(),
  N("Souhaitez, avec 虽然……但是…… : « joyeux anniversaire ! Même si toi tu avais oublié, moi je m'en souvenais. Regarde ce que c'est. »"),
  TH(),
  C("生日快乐！虽然你忘了，但是我记得。看看这是什么？","Shēngrì kuàilè! Suīrán nǐ wàng le, dànshì wǒ jìde. Kànkan zhè shì shénme?","Joyeux anniversaire ! Même si toi tu avais oublié, moi je m'en souvenais. Regarde ce que c'est.",0.4), HOLD(),

  N("« Dépenser » se dit [[花|huā]]. Dites : « une montre ! Repas, cinéma, montre : tu as dépensé pas mal d'argent aujourd'hui, non ? »"),
  ...teach2("花","huā","dépenser"),
  TH(),
  C("手表！吃饭、看电影、买手表，今天花了不少钱吧？","Shǒubiǎo! Chī fàn, kàn diànyǐng, mǎi shǒubiǎo, jīntiān huāle bù shǎo qián ba?","Une montre ! Repas, cinéma, montre : tu as dépensé pas mal d'argent aujourd'hui, non ?",0.4), HOLD(),
  N("Concluez, avec 虽然……但是…… : « même si on a dépensé un peu d'argent, on a passé un anniversaire heureux. »"),
  TH(),
  C("虽然花了一些钱，但是我们过了一个快乐的生日。","Suīrán huāle yìxiē qián, dànshì wǒmen guòle yí ge kuàilè de shēngrì.","Même si on a dépensé un peu d'argent, on a passé un anniversaire heureux.",0.4), HOLD(),

  N("Xiaoyu vous raconte cette journée du point de vue du couple. Écoutez."),
  C("虽然妻子忘了今天是自己的生日，但是丈夫记得。","Suīrán qīzi wàngle jīntiān shì zìjǐ de shēngrì, dànshì zhàngfu jìde.","Même si la femme avait oublié que c'était son anniversaire, le mari s'en souvenait.",0.4),
  C("丈夫请妻子去饭馆吃饭、去电影院看电影，还给妻子买了一块非常漂亮的手表。","Zhàngfu qǐng qīzi qù fànguǎn chī fàn, qù diànyǐngyuàn kàn diànyǐng, hái gěi qīzi mǎile yí kuài fēicháng piàoliang de shǒubiǎo.","Le mari a invité sa femme au restaurant, puis au cinéma, et lui a même acheté une très belle montre.",0.35),
  C("妻子觉得今天很快乐。","Qīzi juéde jīntiān hěn kuàilè.","La femme trouve que cette journée fut très heureuse.",0.5),
  N("Trois mots nouveaux : [[妻子|qīzi]] veut dire « la femme, l'épouse », [[丈夫|zhàngfu]] veut dire « le mari », et [[饭馆|fànguǎn]] veut dire « le restaurant »."),
  ...teach2("妻子，丈夫","qīzi, zhàngfu","la femme, l'épouse ; le mari"),
  ...teach2("饭馆","fànguǎn","le restaurant"),
  N("Dites : le mari a invité sa femme au restaurant, puis au cinéma, et lui a même acheté une très belle montre."),
  TH(),
  C("丈夫请妻子去饭馆吃饭、去电影院看电影，还给妻子买了一块非常漂亮的手表。","Zhàngfu qǐng qīzi qù fànguǎn chī fàn, qù diànyǐngyuàn kàn diànyǐng, hái gěi qīzi mǎile yí kuài fēicháng piàoliang de shǒubiǎo.","Le mari a invité sa femme au restaurant, puis au cinéma, et lui a même acheté une très belle montre.",0.35), HOLD(),

  // Révision finale de la leçon 8
  N("Révision finale de la leçon 8. Dites, avec 比 : je trouve aussi que celle de gauche est plus jolie que celle de droite."),
  TH(),
  C("我也觉得左边的比右边的好看。","Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.","Je trouve aussi que celle de gauche est plus jolie que celle de droite.",0.45),
  N("Dites, avec 更 : aujourd'hui il fait encore plus chaud qu'hier."),
  TH(),
  C("今天比昨天更热。","Jīntiān bǐ zuótiān gèng rè.","Aujourd'hui il fait encore plus chaud qu'hier.",0.5),
  N("Dites, avec 虽然……但是…… : même si on a dépensé un peu d'argent, on a passé un anniversaire heureux."),
  TH(),
  C("虽然花了一些钱，但是我们过了一个快乐的生日。","Suīrán huāle yìxiē qián, dànshì wǒmen guòle yí ge kuàilè de shēngrì.","Même si on a dépensé un peu d'argent, on a passé un anniversaire heureux.",0.4),
  N("Excellent ! Vous avez terminé la leçon 8 du HSK 2. Réécoutez-la demain, puis passez à la leçon 9. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("这些都是在网上买的吗？","Zhèxiē dōu shì zài wǎngshang mǎi de ma?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、是啊，网上的东西比超市的便宜。","Yī. Shì a, wǎngshang de dōngxi bǐ chāoshì de piányi.","",0.4),
  P(4,"…"),
  C("二、我觉得比昨天冷。","Èr. Wǒ juéde bǐ zuótiān lěng.","",0.55),
  P(4,"…"),
  C("三、没事，你来了我们再点菜。","Sān. Méishì, nǐ láile wǒmen zài diǎn cài.","",0.45),
  TH(),
  C("是啊，网上的东西比超市的便宜。","Shì a, wǎngshang de dōngxi bǐ chāoshì de piányi.","",0.4), HOLD(),

  // Question 2
  C("今天天气怎么样？","Jīntiān tiānqì zěnmeyàng?","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、没事，你来了我们再点菜。","Yī. Méishì, nǐ láile wǒmen zài diǎn cài.","",0.45),
  P(4,"…"),
  C("二、我觉得比昨天冷。","Èr. Wǒ juéde bǐ zuótiān lěng.","",0.55),
  P(4,"…"),
  C("三、是啊，网上的东西比超市的便宜。","Sān. Shì a, wǎngshang de dōngxi bǐ chāoshì de piányi.","",0.4),
  TH(),
  C("我觉得比昨天冷。","Wǒ juéde bǐ zuótiān lěng.","",0.55), HOLD(),

  // Question 3
  C("不好意思，我一会儿就到。","Bù hǎoyìsi, wǒ yíhuìr jiù dào.","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我觉得比昨天冷。","Yī. Wǒ juéde bǐ zuótiān lěng.","",0.55),
  P(4,"…"),
  C("二、我准备给她唱个歌，歌的名字叫《爱你一万年》。","Èr. Wǒ zhǔnbèi gěi tā chàng ge gē, gē de míngzi jiào Ài Nǐ Yíwàn Nián.","",0.35),
  P(4,"…"),
  C("三、没事，你来了我们再点菜。","Sān. Méishì, nǐ láile wǒmen zài diǎn cài.","",0.45),
  TH(),
  C("没事，你来了我们再点菜。","Méishì, nǐ láile wǒmen zài diǎn cài.","",0.45), HOLD(),

  // Question 4
  C("今天是我妻子的生日。","Jīntiān shì wǒ qīzi de shēngrì.","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、是啊，网上的东西比超市的便宜。","Yī. Shì a, wǎngshang de dōngxi bǐ chāoshì de piányi.","",0.4),
  P(4,"…"),
  C("二、我准备给她唱个歌，歌的名字叫《爱你一万年》。","Èr. Wǒ zhǔnbèi gěi tā chàng ge gē, gē de míngzi jiào Ài Nǐ Yíwàn Nián.","",0.35),
  P(4,"…"),
  C("三、我觉得比昨天冷。","Sān. Wǒ juéde bǐ zuótiān lěng.","",0.55),
  TH(),
  C("我准备给她唱个歌，歌的名字叫《爱你一万年》。","Wǒ zhǔnbèi gěi tā chàng ge gē, gē de míngzi jiào Ài Nǐ Yíwàn Nián.","",0.35), HOLD(),

  // Question 5
  C("这几天天气都很冷，今天比昨天更冷。但是爸爸还是早早地叫我起床，让我跟他一起去跑步。","Zhè jǐ tiān tiānqì dōu hěn lěng, jīntiān bǐ zuótiān gèng lěng. Dànshì bàba háishi zǎozǎo de jiào wǒ qǐchuáng, ràng wǒ gēn tā yìqǐ qù pǎobù.","",0.35),
  C("爸爸早早叫他起床去做什么？","Bàba zǎozǎo jiào tā qǐchuáng qù zuò shénme?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、看病。","Yī. Kànbìng.","",0.6),
  P(4,"…"),
  C("二、跑步。","Èr. Pǎobù.","",0.6),
  P(4,"…"),
  C("三、吃早饭。","Sān. Chī zǎofàn.","",0.6),
  TH(),
  C("跑步。","Pǎobù.","",0.65), HOLD(),

  // Question 6
  C("今天我是坐出租车去的公司，一个人坐在车上玩玩手机、听听歌，很快就到了。但是不能每天都坐出租车，因为坐出租车比坐公交车贵。","Jīntiān wǒ shì zuò chūzūchē qù de gōngsī, yí ge rén zuò zài chē shang wánwan shǒujī, tīngting gē, hěn kuài jiù dào le. Dànshì bù néng měi tiān dōu zuò chūzūchē, yīnwèi zuò chūzūchē bǐ zuò gōngjiāochē guì.","",0.32),
  C("他觉得坐出租车怎么样？","Tā juéde zuò chūzūchē zěnmeyàng?","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、很贵。","Yī. Hěn guì.","",0.6),
  P(4,"…"),
  C("二、没意思。","Èr. Méi yìsi.","",0.6),
  P(4,"…"),
  C("三、不太快。","Sān. Bú tài kuài.","",0.6),
  TH(),
  C("很贵。","Hěn guì.","",0.65), HOLD(),

  // Question 7
  C("我喜欢请朋友们来家里吃饭，但是我不会做菜，所以每次我都在网上点好菜，让他们送家里来。鱼啊肉啊什么的都可以点，比自己做的还好吃。","Wǒ xǐhuan qǐng péngyoumen lái jiā li chī fàn, dànshì wǒ bú huì zuò cài, suǒyǐ měi cì wǒ dōu zài wǎngshang diǎnhǎo cài, ràng tāmen sòng jiā li lái. Yú a ròu a shénmede dōu kěyǐ diǎn, bǐ zìjǐ zuò de hái hǎochī.","",0.32),
  C("朋友来家里吃饭，他会：","Péngyou lái jiā li chī fàn, tā huì:","",0.5),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、自己做。","Yī. Zìjǐ zuò.","",0.6),
  P(4,"…"),
  C("二、去饭馆买。","Èr. Qù fànguǎn mǎi.","",0.6),
  P(4,"…"),
  C("三、在网上点。","Sān. Zài wǎngshang diǎn.","",0.6),
  TH(),
  C("在网上点。","Zài wǎngshang diǎn.","",0.65), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 9."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
