/* ============================================================
   Nouveau HSK 3.0 · Leçon 2 — 你们想吃什么就点什么
   Source principale : « 新HSK教程 3 », leçon 2.
   Objectifs : commander, parler de ses habitudes alimentaires, employer
   又……又…… et les trois grands emplois non interrogatifs des interrogatifs.
   Exercices et variations créés pour ce parcours audio.
   ============================================================ */
registerChapter({
  group: "hsk3",
  id: "hsk3-02",
  badge: 2,
  hanzi: "你们想吃什么就点什么",
  title: "Leçon 2 · Au restaurant et à emporter",
  desc: "6 cours · 又……又…… · 哪个都 · 想……就……",
  intro: "Cette leçon développe un chinois réellement utilisable au restaurant : exprimer la faim, commander, demander des couverts, parler du service et choisir une livraison. Un focus intermédiaire reliera les trois emplois des interrogatifs étudiés dans les leçons 1 et 2.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"又饿又渴", title:"Partie 1 · Choisir les premiers plats", desc:"Dialogue 1 · 又……又…… · faim et soif",
    build(){ return [
  N("Réactivation de la leçon 1. Décrivez une personne : le jeune homme qui porte des vêtements noirs."),
  ...h3drill("Dites le groupe nominal.", "那个穿着黑衣服的年轻人。", "Le jeune homme qui porte des vêtements noirs."),

  N("Au restaurant, Wang Yixue, Liu Ming, Bai Jiayue et Li Wen commencent à commander. Écoutez."),
  HC("家月、李文，你们看看菜单，想吃点儿什么？", "Jiayue, Li Wen, regardez le menu. Qu'est-ce que vous aimeriez manger ?", .54),
  HC("谢谢一雪姐，我都可以，你们点吧。", "Merci, Yixue. Tout me va, choisissez vous-mêmes.", .58),
  HC("飞了这么远，现在还真是又饿又渴。", "Après un vol aussi long, j'ai vraiment faim et soif.", .56),
  HC("你们喝什么饮料？", "Qu'est-ce que vous voulez boire ?", .66),
  HC("好久没喝中国茶了，我想喝绿茶、吃饺子，可以吗？", "Cela fait longtemps que je n'ai pas bu de thé chinois. J'aimerais du thé vert et des raviolis, c'est possible ?", .52),
  HC("没问题。你们看看还想吃什么。", "Pas de problème. Regardez ce que vous aimeriez manger d'autre.", .6),

  N("[[菜单|càidān]] est le menu et [[饮料|yǐnliào]] une boisson."),
  ...h3teach("菜单", "le menu"),
  ...h3teach("饮料", "une boisson"),
  ...h3drill("Demandez naturellement : qu'est-ce que vous aimeriez manger ?", "你们想吃点儿什么？", "Qu'est-ce que vous aimeriez manger ?"),

  N("Grammaire : 又 + adjectif + 又 + adjectif attribue deux caractéristiques simultanées au même sujet."),
  ...h3teach("又饿又渴", "avoir à la fois faim et soif"),
  HC("那个女孩儿又高又漂亮。", "Cette jeune femme est à la fois grande et jolie.", .64),
  HC("这个饭馆的菜又便宜又好吃。", "Les plats de ce restaurant sont à la fois bon marché et délicieux.", .62),
  ...h3drill("Décrivez un logement : il est à la fois grand et propre.", "这个房子又大又干净。", "Ce logement est à la fois grand et propre."),
  ...h3drill("Décrivez un plat : il est à la fois simple et bon.", "这个菜又简单又好吃。", "Ce plat est à la fois simple et bon."),

  N("Jeu de rôle. Vous êtes le voyageur. Dites que tout vous va et laissez votre ami choisir."),
  ...h3drill("Répondez.", "我都可以，你点吧。", "Tout me va, choisis toi-même."),
  N("Votre ami demande ce que vous voulez boire."),
  HC("你想喝什么饮料？", "Qu'est-ce que tu veux boire ?", .66),
  ...h3drill("Changez la boisson du dialogue : je voudrais boire du thé noir.", "我想喝红茶。", "Je voudrais boire du thé noir."),
  N("Fin de la partie 1. Vous savez cumuler deux adjectifs et exprimer simplement votre choix."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"哪个菜都好吃", title:"Partie 2 · Le service et les couverts", desc:"Dialogue 2 · classificateurs · interrogatif + 都",
    build(){ return [
  N("Partie 2. Le repas a commencé. Écoutez comment les clients demandent des couverts et parlent du service."),
  HC("服务员，再给我们拿一双筷子、一把勺子和一个碗。", "S'il vous plaît, apportez-nous encore une paire de baguettes, une cuillère et un bol.", .5),
  HC("好的，请等一下，我马上去拿。", "Bien sûr, attendez un instant, je vais les chercher tout de suite.", .58),
  HC("这家饭馆的服务很热情，菜也很好吃。家月，你尝尝这个菜。", "Le service de ce restaurant est très chaleureux et les plats sont très bons. Jiayue, goûte ce plat.", .5),
  HC("哪个菜都好吃，您点的这些菜真不错。", "Tous les plats sont bons. Ceux que vous avez choisis sont vraiment réussis.", .56),
  HC("这里的饭菜又便宜又好吃，我们经常来，服务员都记住我们爱吃的菜了。", "Ici, les plats sont bons et peu chers. Nous venons souvent, et le personnel se souvient même de nos plats préférés.", .48),
  HC("王姐，您经常来吃饭，今天送您些水果，您慢用。", "Madame Wang, vous venez souvent manger ici. Aujourd'hui, nous vous offrons quelques fruits. Prenez votre temps.", .5),

  N("Les classificateurs utiles à table : [[双|shuāng]] pour une paire, [[把|bǎ]] pour certains objets munis d'un manche, et 个 pour un bol dans le dialogue courant."),
  ...h3teach("一双筷子", "une paire de baguettes"),
  ...h3teach("一把勺子", "une cuillère"),
  ...h3teach("一个碗", "un bol"),
  ...h3drill("Demandez une paire de baguettes supplémentaire.", "请再给我拿一双筷子。", "Apportez-moi une paire de baguettes supplémentaire, s'il vous plaît."),

  N("[[马上|mǎshàng]] signifie « immédiatement, tout de suite »."),
  ...h3teach("我马上去拿。", "Je vais le chercher tout de suite."),
  ...h3drill("Dites au serveur que vous allez regarder le menu tout de suite.", "我马上看菜单。", "Je regarde le menu tout de suite."),

  N("Grammaire : interrogatif + 都 exprime une totalité sans exception. 哪个菜都好吃 ne demande pas « lequel » ; cela signifie que tous les plats sont bons."),
  HC("哪个菜都好吃。", "Tous les plats sont bons.", .66),
  HC("这次旅游，我去哪儿都可以。", "Pour ce voyage, toutes les destinations me conviennent.", .64),
  HC("你想什么时候来都没问题。", "Tu peux venir quand tu veux.", .64),
  ...h3drill("Dites que tous les restaurants vous conviennent.", "哪个饭馆都可以。", "Tous les restaurants me conviennent."),
  ...h3drill("Dites : je peux manger n'importe quoi.", "我吃什么都可以。", "Je peux manger n'importe quoi."),
  ...h3drill("Dites à votre ami : tu peux venir quand tu veux.", "你什么时候来都可以。", "Tu peux venir quand tu veux."),

  N("Rejouez les deux rôles. Client : demandez les baguettes, la cuillère et le bol."),
  ...h3drill("À vous.", "请再给我们拿一双筷子、一把勺子和一个碗。", "Apportez-nous encore une paire de baguettes, une cuillère et un bol, s'il vous plaît."),
  N("Serveur : répondez que vous allez les chercher immédiatement."),
  ...h3drill("À vous.", "好的，我马上去拿。", "Bien sûr, je vais les chercher tout de suite."),
  N("Fin de la partie 2. Vous savez demander des couverts et transformer un interrogatif en totalité avec 都."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"三个不同的意思", title:"Partie 3 · Focus intermédiaire", desc:"Quelque chose · n'importe quoi · ce que…",
    build(){ return [
  N("Focus intermédiaire. Les mêmes mots 什么, 谁, 哪儿 ou 哪个 peuvent produire trois sens différents. Nous allons les comparer directement."),

  N("Premier sens : une information inconnue. 我好像在哪儿见过他 signifie « quelque part »."),
  HC("我好像在哪儿见过他。", "Il me semble l'avoir vu quelque part.", .66),
  HC("你吃点儿什么吧。", "Mange quelque chose.", .68),

  N("Deuxième sens : aucune restriction. Avec 都, l'idée devient « n'importe lequel, tous »."),
  HC("我去哪儿都可以。", "Je peux aller n'importe où.", .68),
  HC("我吃什么都可以。", "Je peux manger n'importe quoi.", .68),
  HC("谁做的饭我都喜欢吃。", "J'aime les plats préparés par n'importe qui.", .64),

  N("Troisième sens : deux interrogatifs identiques se répondent. Le premier choix détermine le second : ce que vous voulez manger, commandez-le."),
  HC("你们想吃什么就点什么。", "Commandez ce que vous voulez manger.", .64),
  HC("你觉得哪个好看就买哪个。", "Achète celui que tu trouves joli.", .62),
  HC("你想去哪儿，我们就去哪儿。", "Nous irons là où tu veux aller.", .62),

  N("Attention à la place du sujet. Quand le sujet change, placez le second sujet avant 就 : 你想去哪儿, 我们就去哪儿."),
  ...h3drill("Vous choisissez le restaurant et nous suivons. Dites : nous irons dans le restaurant que tu veux.", "你想去哪家饭馆，我们就去哪家饭馆。", "Nous irons dans le restaurant que tu veux."),
  ...h3drill("Le sujet reste le même. Dites : mange ce que tu veux.", "你想吃什么就吃什么。", "Mange ce que tu veux."),
  ...h3drill("Appliquez la structure aux boissons : commande ce que tu veux boire.", "你想喝什么就点什么。", "Commande ce que tu veux boire."),

  N("Test de sens. Vous ne connaissez pas le choix exact : je voudrais manger quelque chose."),
  ...h3drill("Produisez le premier sens.", "我想吃点儿什么再走。", "Je voudrais manger quelque chose avant de partir."),
  N("Aucune restriction : tout me va."),
  ...h3drill("Produisez le deuxième sens.", "我吃什么都可以。", "Je peux manger n'importe quoi."),
  N("Le désir commande le choix : je commande ce que j'ai envie de manger."),
  ...h3drill("Produisez le troisième sens.", "我想吃什么就点什么。", "Je commande ce que j'ai envie de manger."),
  N("Fin du focus. Ne traduisez jamais mécaniquement 什么 par « quoi » : identifiez d'abord la structure complète."),
    ]; } },

  // ================= PARTIE 4 =================
  { num:4, hanzi:"想吃什么就点什么", title:"Partie 4 · Commander sur le téléphone", desc:"Dialogue 3 · livraison · reprise corrélative",
    build(){ return [
  N("Partie 4. Le repas continue et Bai Jiayue découvre que le restaurant livre aussi à domicile. Écoutez."),
  HC("这个鸡肉饭太好吃了，我要再来吃一次。", "Ce riz au poulet est délicieux. Je reviendrai en manger.", .56),
  HC("你可以拿走这张菜单，看看下次还吃点儿什么。", "Tu peux emporter ce menu et regarder ce que tu prendras la prochaine fois.", .54),
  HC("不用拿菜单，在手机上就能看到，也可以选好了让他们给你送。", "Pas besoin d'emporter le menu : on peut le consulter sur son téléphone, choisir et se faire livrer.", .5),
  HC("他们家还能送外卖？", "Ce restaurant livre aussi à domicile ?", .64),
  HC("对，现在很多饭馆都能送外卖，想吃什么就点什么。", "Oui. Beaucoup de restaurants livrent maintenant : tu commandes ce que tu veux manger.", .54),
  HC("那真是太方便了！", "C'est vraiment très pratique !", .66),

  ...h3teach("外卖", "un plat à emporter ou une livraison de repas"),
  ...h3teach("不用", "ne pas avoir besoin de"),
  ...h3teach("方便", "pratique"),
  ...h3teach("选择", "choisir"),

  N("Dans la vie quotidienne, 点 désigne couramment l'action de commander, notamment depuis une application. À table, 来一个 ou 来一份 est également très naturel pour demander un plat."),
  HC("我在手机上点外卖。", "Je commande une livraison sur mon téléphone.", .66),
  HC("来一份鸡肉饭。", "Un riz au poulet, s'il vous plaît.", .68),
  ...h3drill("Sur une application, dites : je voudrais commander une livraison.", "我想点个外卖。", "Je voudrais commander une livraison."),
  ...h3drill("À table, commandez naturellement une portion de raviolis.", "来一份饺子。", "Une portion de raviolis, s'il vous plaît."),

  N("Rejouez la découverte. Vous demandez si le restaurant peut vraiment livrer."),
  ...h3drill("Posez la question.", "他们家还能送外卖？", "Ce restaurant livre aussi à domicile ?"),
  N("Votre ami explique que beaucoup de restaurants livrent maintenant."),
  ...h3drill("Répondez.", "现在很多饭馆都能送外卖。", "Beaucoup de restaurants livrent maintenant."),
  N("Ajoutez : commande ce que tu veux manger."),
  ...h3drill("Terminez la réponse.", "想吃什么就点什么。", "Commande ce que tu veux manger."),

  N("Variation. Vous préférez cuisiner, mais votre ami est très fatigué. Proposez de commander ce qu'il veut."),
  ...h3drill("Dites : tu es fatigué ; commandons ce que tu veux manger.", "你累了，你想吃什么我们就点什么。", "Tu es fatigué ; commandons ce que tu veux manger."),
  N("Fin de la partie 4. Vous savez distinguer 点 sur une application et 来 pour commander directement un plat."),
    ]; } },

  // ================= PARTIE 5 =================
  { num:5, hanzi:"妈妈做的饭", title:"Partie 5 · Récit et choix personnel", desc:"Texte 4 · habitudes alimentaires · mission pratique",
    build(){ return [
  N("Partie 5. Li Wen compare ses repas à l'étranger et les repas préparés par sa mère en Chine. Écoutez le récit."),
  HC("这些年在国外，我很少自己做饭。", "Pendant toutes ces années à l'étranger, j'ai rarement cuisiné moi-même.", .58),
  HC("早饭我吃一个面包，有时候吃一块蛋糕，再喝一杯咖啡。", "Au petit-déjeuner, je mange un petit pain, parfois une part de gâteau, puis je bois un café.", .52),
  HC("午饭和晚饭也都在外面吃。", "Je déjeune et je dîne également à l'extérieur.", .62),
  HC("快要考试的时候又忙又累，没时间出去吃饭，家里又什么吃的都没有。", "À l'approche des examens, je suis très occupé et fatigué. Je n'ai pas le temps de sortir manger et il n'y a rien à manger chez moi.", .48),
  HC("我可能好几天只吃方便面。", "Il peut m'arriver de ne manger que des nouilles instantanées pendant plusieurs jours.", .6),
  HC("现在回到中国了，每天能吃到妈妈做的饭，我真是太高兴了！", "Maintenant que je suis rentré en Chine, je peux manger chaque jour les plats préparés par ma mère. J'en suis vraiment heureux !", .52),
  HC("有时候妈妈只做几个简单的菜，我也非常爱吃。", "Même lorsque ma mère ne prépare que quelques plats simples, je les aime beaucoup.", .56),
  HC("因为什么都没有妈妈做的饭好吃。", "Parce que rien n'est aussi bon que les plats de ma mère.", .6),

  N("Question de compréhension. Li Wen cuisinait-il souvent à l'étranger ?"),
  TH(),
  HC("没有，他很少自己做饭。", "Non, il cuisinait rarement lui-même.", .68),
  N("Pourquoi mangeait-il parfois des nouilles instantanées plusieurs jours de suite ?"),
  TH(),
  HC("因为考试前又忙又累，也没时间出去吃饭。", "Parce qu'avant les examens, il était très occupé et fatigué et n'avait pas le temps de sortir manger.", .62),
  N("Qu'est-ce qui le rend heureux depuis son retour ?"),
  TH(),
  HC("他每天能吃到妈妈做的饭。", "Il peut manger chaque jour les plats préparés par sa mère.", .66),

  N("Reconstruction. Dites qu'à l'approche des examens, vous êtes à la fois occupé et fatigué."),
  ...h3drill("À vous.", "快要考试的时候，我又忙又累。", "À l'approche des examens, je suis à la fois occupé et fatigué."),
  ...h3drill("Ajoutez : je n'ai pas le temps de sortir manger.", "我没时间出去吃饭。", "Je n'ai pas le temps de sortir manger."),
  ...h3drill("Concluez : rien n'est aussi bon que les plats de ma mère.", "什么都没有妈妈做的饭好吃。", "Rien n'est aussi bon que les plats de ma mère."),

  N("Mission personnelle. Choisissez entre cuisiner, manger au restaurant et commander. Donnez une raison. Exemple possible :"),
  TH(),
  HC("我喜欢自己做饭，因为又便宜又健康。", "J'aime cuisiner moi-même parce que c'est économique et bon pour la santé.", .64),
  N("Autre réponse possible si vous êtes fatigué :"),
  HC("我累的时候就点外卖，想吃什么就点什么。", "Quand je suis fatigué, je commande : je choisis ce que j'ai envie de manger.", .62),
  N("Fin de la partie 5. Vous avez transformé le récit en paroles personnelles sur vos propres habitudes."),
    ]; } },

  // ================= PARTIE 6 =================
  { num:6, hanzi:"综合练习", title:"Partie 6 · Exercices créés", desc:"Choix de structure · compréhension · dialogue libre", exercise:true,
    build(){ return [
  N("Exercices originaux de la leçon 2. Répondez avant d'écouter la correction."),

  N("Exercice 1. Réunissez les deux adjectifs : ce restaurant est bon marché et délicieux."),
  TH(),
  HC("这个饭馆的菜又便宜又好吃。", "Les plats de ce restaurant sont à la fois bon marché et délicieux.", .68),
  N("Correction : 又 apparaît devant chacun des deux adjectifs."), HOLD(),

  N("Exercice 2. Aucune destination ne vous dérange. Dites : je peux aller n'importe où."),
  TH(),
  HC("我去哪儿都可以。", "Je peux aller n'importe où.", .68),
  N("Correction : 哪儿 + 都 supprime toute restriction de lieu."), HOLD(),

  N("Exercice 3. Votre ami choisit. Dites : achète celui que tu trouves joli."),
  TH(),
  HC("你觉得哪个好看就买哪个。", "Achète celui que tu trouves joli.", .66),
  N("Correction : 哪个 est répété ; le premier choix commande le second."), HOLD(),

  N("Exercice 4. Choisissez le mot le plus naturel pour une commande directe. Dites au serveur : une portion de riz au poulet, s'il vous plaît."),
  TH(),
  HC("来一份鸡肉饭。", "Un riz au poulet, s'il vous plaît.", .68),
  N("Correction : 来一份 est très naturel face au serveur ; 点 reste courant pour parler de l'action de commander."), HOLD(),

  N("Exercice 5. Demandez une cuillère et un bol supplémentaires."),
  TH(),
  HC("请再给我拿一把勺子和一个碗。", "Apportez-moi une cuillère et un bol supplémentaires, s'il vous plaît.", .66), HOLD(),

  N("Exercice 6. Compréhension. Pourquoi le restaurant offre-t-il des fruits à Madame Wang ?"),
  TH(),
  HC("因为她经常来这家饭馆吃饭。", "Parce qu'elle vient souvent manger dans ce restaurant.", .68), HOLD(),

  N("Exercice 7. Vous êtes végétarien. Répondez librement à « qu'est-ce que tu veux manger ? ». Exemple : je voudrais un plat sans viande."),
  TH(),
  HC("我想吃一道不放肉的菜。", "Je voudrais un plat sans viande.", .66),
  N("Votre réponse pouvait utiliser un autre plat ; l'important était de ne pas répéter exactement le dialogue."), HOLD(),

  N("Exercice 8. Mini-dialogue. Demandez si le restaurant livre."),
  TH(),
  HC("你们能送外卖吗？", "Est-ce que vous livrez à domicile ?", .68),
  N("Le serveur répond que oui et vous laisse choisir."),
  HC("可以，您想吃什么就点什么。", "Oui. Commandez ce que vous souhaitez manger.", .66),
  N("Commandez une portion de raviolis et un thé vert."),
  TH(),
  HC("来一份饺子，再来一杯绿茶。", "Une portion de raviolis et un thé vert, s'il vous plaît.", .66), HOLD(),

  N("Bravo. Vous savez commander de manière pratique, décrire deux qualités et reconnaître les trois emplois non interrogatifs de 什么, 谁, 哪儿 et 哪个."),
  HC("想吃什么就点什么。", "Commande ce que tu veux manger.", .7),
  HC("再见！", "Au revoir !", .72),
    ]; } }
  ]
});
