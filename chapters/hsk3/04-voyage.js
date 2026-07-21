/* Nouveau HSK 3.0 · Leçon 4 — 这家宾馆跟别的都不一样
   Source : « 新HSK教程 3 », leçon 4. Exercices audio originaux. */
registerChapter({
  group:"hsk3", id:"hsk3-04", badge:4,
  hanzi:"这家宾馆跟别的都不一样",
  title:"Leçon 4 · Préparer un voyage",
  desc:"6 cours · négation totale · 一样 · 除了 · voyage",
  intro:"Vous allez choisir une destination, préparer un départ, accueillir des voyageurs et raconter une première journée. Les focus intermédiaires vous feront distinguer la négation totale, la comparaison avec 一样 et les deux constructions très différentes avec 除了.",
  lessons:[

  {num:1, hanzi:"一点儿也不冷", title:"Partie 1 · Choisir la destination", desc:"Dialogue 1 · mer ou steppe · négation totale", build(){return[
  N("Partie 1. Deux amis préparent leurs vacances. Écoutez comment ils éliminent une destination et en choisissent une autre."),
  HC("这个假期咱们去哪儿玩儿？", "Où allons-nous pendant ces vacances ?", .66),
  HC("好啊，你想去哪儿，咱们就去哪儿。", "D'accord. Nous irons où tu voudras.", .62),
  HC("你喜欢海，找个海边住几天，怎么样？", "Tu aimes la mer. Et si nous trouvions un endroit en bord de mer pour quelques jours ?", .56),
  HC("现在去海边有点儿冷。", "En ce moment, il fait un peu froid pour aller au bord de la mer.", .68),
  HC("那去草原吧，草原一点儿也不冷。", "Alors allons dans la steppe ; il n'y fait pas froid du tout.", .62),
  HC("这个主意好！我好久没骑马了。", "Bonne idée ! Cela fait longtemps que je n'ai pas fait de cheval.", .64),
  HC("对，在草原上骑马、吃羊肉、看月亮，一定很有意思。", "Oui. Faire du cheval, manger du mouton et regarder la lune dans la steppe, ce sera sûrement très intéressant.", .54),

  N("Pour une négation absolue, utilisez 一 + classificateur + nom + 也 ou 都 + 不/没. Avec un adjectif, 一点儿也不 est le modèle le plus courant."),
  HC("草原一点儿也不冷。", "Il ne fait pas froid du tout dans la steppe.", .7),
  HC("我一件衣服都不想买。", "Je ne veux acheter aucun vêtement.", .68),
  HC("我一个中国电影也没看过。", "Je n'ai vu aucun film chinois.", .68),
  HC("他一点儿东西也不想吃。", "Il ne veut absolument rien manger.", .68),
  N("不 nie une habitude, un état ou une intention. 没 nie un fait accompli ou une expérience."),
  ...h3drill("Refusez totalement : je ne veux rien acheter.", "我一点儿东西都不想买。", "Je ne veux absolument rien acheter."),
  ...h3drill("Parlez d'expérience : je ne suis jamais allé dans la steppe.", "我一次也没去过草原。", "Je ne suis jamais allé dans la steppe."),
  ...h3drill("Rassurez votre ami : il ne fait pas chaud du tout là-bas.", "那边一点儿也不热。", "Il ne fait pas chaud du tout là-bas."),

  N("Jeu de rôle. Proposez une destination différente : la montagne."),
  ...h3drill("Faites la proposition.", "咱们去山里住几天，怎么样？", "Et si nous passions quelques jours à la montagne ?"),
  N("Votre ami craint le froid. Rassurez-le avec une négation totale."),
  ...h3drill("Répondez.", "现在山里一点儿也不冷。", "En ce moment, il ne fait pas froid du tout à la montagne."),
  N("Fin de la partie 1. Vous savez dire « aucun », « rien » ou « pas du tout » sans ambiguïté."),
  ];}},

  {num:2, hanzi:"跟别的不一样", title:"Partie 2 · Réserver et préparer", desc:"Dialogue 2 · hôtel · comparaison avec 一样", build(){return[
  N("Partie 2. Les billets et l'hôtel sont-ils prêts ? Écoutez."),
  HC("出去玩的机票买好了吗？", "Les billets d'avion pour le voyage sont-ils achetés ?", .62),
  HC("买好了，星期六上午十点一刻起飞。", "Oui. Le départ est samedi matin à dix heures et quart.", .6),
  HC("宾馆也选好了吗？", "L'hôtel est-il choisi lui aussi ?", .66),
  HC("是的，这家宾馆很特别，跟别的都不一样，一出门就能看见牛和羊。", "Oui. Cet hôtel est très particulier, différent de tous les autres : dès qu'on sort, on voit des vaches et des moutons.", .5),
  HC("太好了！你看看要带什么东西。", "Génial ! Regarde ce qu'il faut emporter.", .62),
  HC("不用带太多东西，别忘了拿上新买的相机。", "Inutile d'emporter trop de choses ; n'oublie pas le nouvel appareil photo.", .56),
  HC("一定不会忘带的。我现在就去准备行李。", "Je ne l'oublierai sûrement pas. Je vais préparer les bagages tout de suite.", .58),

  N("Comparaison : A 跟 B 一样 signifie que A et B sont identiques sur le point considéré. Ajoutez un adjectif après 一样 pour nommer ce point."),
  HC("这个房间跟那个房间一样大。", "Cette chambre est aussi grande que l'autre.", .68),
  HC("他的手机跟我的一样。", "Son téléphone est identique au mien.", .68),
  HC("这家宾馆跟别的不一样。", "Cet hôtel est différent des autres.", .68),
  N("La négation se place avant 一样 : 不一样. Attention : 跟别的都不一样 signifie « différent de tous les autres », pas « tous ne sont pas pareils »."),
  ...h3drill("Comparez deux valises : cette valise est aussi lourde que celle-là.", "这个行李箱跟那个一样重。", "Cette valise est aussi lourde que l'autre."),
  ...h3drill("Distinguez l'hôtel : cette chambre est différente des autres.", "这个房间跟别的不一样。", "Cette chambre est différente des autres."),
  ...h3drill("Dites que vos billets sont identiques aux miens.", "你的机票跟我的一样。", "Tes billets sont identiques aux miens."),

  N("Pratique. Une tâche terminée se formule souvent avec verbe + 好 + 了 : 买好了, 选好了, 准备好了."),
  ...h3teach("行李准备好了。", "Les bagages sont prêts."),
  ...h3drill("Demandez si l'hôtel a déjà été réservé.", "宾馆订好了吗？", "L'hôtel a-t-il été réservé ?"),
  ...h3drill("Répondez que oui, puis donnez l'heure du vol.", "订好了，飞机十点一刻起飞。", "Oui. L'avion décolle à dix heures et quart."),
  N("Fin de la partie 2. Vous savez comparer précisément et vérifier qu'une préparation est achevée."),
  ];}},

  {num:3, hanzi:"除了怎么用", title:"Partie 3 · Focus intermédiaire sur 除了", desc:"Exclure avec 都 · ajouter avec 还/也", build(){return[
  N("Focus intermédiaire. 除了 possède deux constructions. La première exclut un élément d'un ensemble ; la seconde ajoute une information. Le mot qui suit change donc le raisonnement."),

  N("Structure 1 : 除了 A 以外，其他都… : sauf A, tous les autres…"),
  HC("除了我以外，大家都在玩儿手机。", "Tout le monde joue sur son téléphone, sauf moi.", .66),
  HC("除了这个汉字，别的汉字我都会写。", "À part ce caractère, je sais écrire tous les autres.", .64),
  N("Ici, 都 porte sur le groupe restant après l'exclusion."),

  N("Structure 2 : 除了 A 以外，还/也 B : en plus de A, il y a aussi B."),
  HC("除了这个行李箱以外，还有别的东西吗？", "À part cette valise, y a-t-il autre chose ?", .64),
  HC("除了骑马以外，我们还可以看月亮。", "En plus de faire du cheval, nous pouvons aussi regarder la lune.", .64),
  HC("除了唱歌以外，他也喜欢跳舞。", "En plus de chanter, il aime aussi danser.", .66),

  N("Test. « Sauf le thé, toutes les boissons me conviennent » appelle 都."),
  ...h3drill("Construisez la phrase.", "除了茶以外，别的饮料我都可以。", "À part le thé, toutes les autres boissons me conviennent."),
  N("« En plus du thé, je veux aussi du café » appelle 还."),
  ...h3drill("Construisez la phrase.", "除了茶以外，我还想喝咖啡。", "En plus du thé, je voudrais aussi du café."),
  N("Exclusion dans un groupe : sauf Li Wen, tout le monde est arrivé."),
  ...h3drill("Répondez.", "除了李文以外，大家都到了。", "Tout le monde est arrivé, sauf Li Wen."),
  N("Addition dans un programme : en plus de la steppe, nous voulons aussi visiter la ville."),
  ...h3drill("Répondez.", "除了草原以外，我们还想去城里看看。", "En plus de la steppe, nous voulons aussi visiter la ville."),
  N("Fin du focus. Après 除了, écoutez 都 pour une exception et 还/也 pour une addition."),
  ];}},

  {num:4, hanzi:"让您久等了", title:"Partie 4 · Retrouver le chauffeur", desc:"Dialogue 3 · retard · accueil professionnel", build(){return[
  N("Partie 4. À l'aéroport, les voyageurs rencontrent le chauffeur-guide réservé par l'hôtel."),
  HC("欢迎你们！我是你们的司机，我姓李，叫我小李就可以。", "Bienvenue ! Je suis votre chauffeur. Je m'appelle Li ; vous pouvez m'appeler Xiao Li.", .52),
  HC("您好，小李！不好意思，飞机晚点了，让您久等了。", "Bonjour, Xiao Li. Désolés, l'avion a eu du retard et nous vous avons fait attendre longtemps.", .54),
  HC("没关系。除了这两个行李箱，还有别的东西吗？", "Ce n'est rien. À part ces deux valises, avez-vous autre chose ?", .56),
  HC("那边还有一个包，我自己拿就可以。", "Il y a encore un sac là-bas ; je peux le porter moi-même.", .6),
  HC("宾馆离机场有点儿远，开车需要三十分钟。", "L'hôtel est un peu loin de l'aéroport ; il faut trente minutes en voiture.", .6),
  HC("两位到了可以先休息休息，晚饭的时候我叫你们。", "À votre arrivée, vous pourrez d'abord vous reposer un peu. Je viendrai vous chercher pour le dîner.", .56),

  N("Formule de politesse importante : [[让您久等了|ràng nín jiǔ děng le]], littéralement « je vous ai fait attendre longtemps ». Elle reconnaît le désagrément sans traduire mot à mot."),
  ...h3teach("不好意思，让您久等了。", "Désolé de vous avoir fait attendre."),
  ...h3drill("Vous arrivez en retard à un rendez-vous formel. Excusez-vous.", "不好意思，让您久等了。", "Désolé de vous avoir fait attendre."),

  N("Le redoublement d'un verbe adoucit et raccourcit l'action : 看看 regarder un peu, 问问 demander, 休息休息 se reposer un peu."),
  ...h3teach("你们先休息休息。", "Reposez-vous d'abord un peu."),
  ...h3drill("Proposez de regarder la chambre un instant.", "我们先看看房间吧。", "Regardons d'abord la chambre."),

  N("Rejouez l'accueil avec une variation. Vous êtes le chauffeur : présentez-vous et demandez s'il y a d'autres bagages."),
  ...h3drill("Dites les deux idées.", "我是你们的司机。除了这两个行李箱，还有别的东西吗？", "Je suis votre chauffeur. À part ces deux valises, avez-vous autre chose ?"),
  N("Le voyageur répond qu'il n'a qu'un sac et le portera lui-même."),
  ...h3drill("Répondez.", "我只有一个包，我自己拿就可以。", "Je n'ai qu'un sac ; je peux le porter moi-même."),
  N("Fin de la partie 4. Vous pouvez gérer un retard et un accueil de manière naturelle et polie."),
  ];}},

  {num:5, hanzi:"旅游第一天", title:"Partie 5 · Raconter la première journée", desc:"Récit guidé · chronologie · avis personnel", build(){return[
  N("Partie 5. Wang Yifei écrit son journal le soir de la première journée. Écoutez le récit."),
  HC("今天是我们旅游的第一天。", "Aujourd'hui est le premier jour de notre voyage.", .7),
  HC("我们很早就起床去机场了，没想到飞机晚点了。", "Nous nous sommes levés très tôt pour aller à l'aéroport, mais contre toute attente, l'avion a eu du retard.", .58),
  HC("我们到的时候，天已经黑了，但是司机小李一直在机场等我们，一点儿也没着急。", "À notre arrivée, il faisait déjà nuit. Pourtant, notre chauffeur Xiao Li nous avait attendus tout le temps sans s'impatienter du tout.", .5),
  HC("他特别热情，路上给我们介绍了很多东西，还准备了水果。", "Il était très chaleureux : sur la route, il nous a présenté beaucoup de choses et avait même préparé des fruits.", .54),
  HC("宾馆的房间跟我想的一样漂亮，又大又干净，我非常满意。", "La chambre était aussi belle que je l'imaginais, grande et propre ; j'en suis très satisfaite.", .54),

  N("Compréhension. Quel imprévu a retardé les voyageurs ?"),
  TH(), HC("飞机晚点了。", "L'avion a eu du retard.", .72), HOLD(),
  N("Pourquoi Wang Yifei trouve-t-elle le chauffeur chaleureux ?"),
  TH(), HC("因为他一直在机场等，还准备了水果。", "Parce qu'il les a attendus à l'aéroport et avait aussi préparé des fruits.", .66), HOLD(),
  N("Que pense-t-elle de la chambre ?"),
  TH(), HC("房间又大又干净，她非常满意。", "La chambre est grande et propre ; elle en est très satisfaite.", .68), HOLD(),

  N("Reconstruction. Commencez par le départ matinal et l'imprévu."),
  ...h3drill("Racontez.", "我们很早就起床了，没想到飞机晚点了。", "Nous nous sommes levés très tôt, mais contre toute attente, l'avion a eu du retard."),
  N("Ajoutez l'accueil, sans recopier tout le récit."),
  ...h3drill("Racontez.", "司机一直在机场等我们，一点儿也没着急。", "Le chauffeur nous a attendus à l'aéroport sans s'impatienter du tout."),

  N("Réponse personnelle. Décrivez un hôtel réel ou imaginaire avec 跟…一样, 又…又… et 满意. Modèle :"),
  TH(),
  HC("房间跟照片里的一样漂亮，又安静又干净，我很满意。", "La chambre est aussi belle que sur les photos, calme et propre ; j'en suis très satisfait.", .62), HOLD("Répète ce modèle ou donne ta propre version, puis ▶"),
  N("Fin de la partie 5. Vous savez transformer un voyage en récit chronologique et évaluatif."),
  ];}},

  {num:6, hanzi:"综合练习", title:"Partie 6 · Exercices créés", desc:"Structures · compréhension · plan de voyage", exercise:true, build(){return[
  N("Exercices originaux de la leçon 4. Répondez avant la correction."),
  N("Exercice 1. Négation totale : je n'ai préparé aucun bagage."),
  TH(), HC("我一件行李也没准备。", "Je n'ai préparé aucun bagage.", .7), HOLD(),
  N("Exercice 2. Dites que l'hôtel n'est pas du tout loin de l'aéroport."),
  TH(), HC("宾馆离机场一点儿也不远。", "L'hôtel n'est pas du tout loin de l'aéroport.", .68), HOLD(),
  N("Exercice 3. Comparaison positive : ma chambre est aussi propre que la tienne."),
  TH(), HC("我的房间跟你的一样干净。", "Ma chambre est aussi propre que la tienne.", .68), HOLD(),
  N("Exercice 4. Différence : ce programme n'est pas le même que le précédent."),
  TH(), HC("这个计划跟上次的不一样。", "Ce programme est différent du précédent.", .68), HOLD(),
  N("Exercice 5. Exception : sauf Xiaoli, tout le monde est à l'hôtel."),
  TH(), HC("除了小李以外，大家都在宾馆。", "Tout le monde est à l'hôtel, sauf Xiao Li.", .68), HOLD(),
  N("Exercice 6. Addition : en plus de l'appareil photo, il faut aussi prendre le passeport."),
  TH(), HC("除了相机以外，还要带护照。", "En plus de l'appareil photo, il faut aussi emporter le passeport.", .68), HOLD(),
  N("Exercice 7. Réagissez au retard : excusez-vous d'avoir fait attendre le chauffeur."),
  TH(), HC("不好意思，飞机晚点了，让您久等了。", "Désolé, l'avion a eu du retard et nous vous avons fait attendre.", .66), HOLD(),
  N("Exercice 8. Mini-projet. Proposez la montagne, deux activités et un hôtel calme."),
  TH(), HC("我们去山里吧，可以爬山、看月亮，再找一家安静的宾馆。", "Allons à la montagne : nous pourrons marcher, regarder la lune et trouver un hôtel calme.", .6),
  N("Votre partenaire craint le froid. Répondez qu'il n'y fait pas froid du tout en ce moment."),
  TH(), HC("别担心，现在那边一点儿也不冷。", "Ne t'inquiète pas, il n'y fait pas froid du tout en ce moment.", .66), HOLD(),
  N("Bravo. Vous savez exclure, ajouter, comparer et raconter les détails pratiques d'un voyage."),
  HC("除了看风景以外，我们还要多说中文。", "En plus d'admirer le paysage, nous devons aussi beaucoup parler chinois.", .68),
  HC("再见！", "Au revoir !", .74),
  ];}}
  ]
});
