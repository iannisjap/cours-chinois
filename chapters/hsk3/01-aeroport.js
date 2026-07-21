/* ============================================================
   Nouveau HSK 3.0 · Leçon 1 — 我们去机场接你们
   Source principale : « 新HSK教程 3 », leçon 1.
   Objectifs : décrire précisément une personne, gérer un bagage perdu,
   employer 看起来, les interrogatifs indéfinis et les déterminants multiples.
   Parcours : 3 dialogues + laboratoire intermédiaire + récit guidé +
   exercices originaux. Aucune question ne vient d'un cahier d'exercices.
   ============================================================ */
registerChapter({
  group: "hsk3",
  id: "hsk3-01",
  badge: 1,
  hanzi: "我们去机场接你们",
  title: "Leçon 1 · Se retrouver à l'aéroport",
  desc: "6 cours · 看起来 · interrogatifs indéfinis · déterminants multiples",
  intro: "Cette première leçon du nouveau HSK 3 prend le temps de vous faire décrire une personne, signaler un bagage perdu et retrouver quelqu'un dans un aéroport. Vous travaillerez les dialogues du manuel, deux focus de grammaire, un récit guidé, un jeu de rôle et des exercices créés spécialement pour l'oral.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"看起来", title:"Partie 1 · Reconnaître quelqu'un", desc:"Dialogue 1 · 以为 · 身高 · 看起来",
    build(){ return [
  N("Bienvenue dans le HSK 3. Avant le nouveau dialogue, réactivez une description simple du HSK 2."),
  ...h3drill("Dites : il est grand et il a de grands yeux.", "他个子很高，眼睛很大。", "Il est grand et il a de grands yeux."),

  N("Liu Ming regarde une photo avec Wang Yixue. Écoutez d'abord tout le dialogue sans chercher à répéter."),
  HC("这是杨同乐吗？他怎么跟白家月在一起？", "C'est Yang Tongle ? Pourquoi est-il avec Bai Jiayue ?", .55),
  HC("他不是杨同乐，他叫李文，是白家月的好朋友。", "Ce n'est pas Yang Tongle. Il s'appelle Li Wen et c'est un bon ami de Bai Jiayue.", .52),
  HC("我还以为是同乐呢。他们两个长得有点儿像，但是李文比同乐高，身高有一米八。", "Je croyais que c'était Tongle. Ils se ressemblent un peu, mais Li Wen est plus grand : il mesure un mètre quatre-vingts.", .46),
  HC("李文看起来也比同乐瘦一点儿。", "Li Wen a aussi l'air un peu plus mince que Tongle.", .55),
  HC("下个星期家月和李文要来北京，我去机场接他们。", "La semaine prochaine, Jiayue et Li Wen viennent à Pékin. J'irai les chercher à l'aéroport.", .5),
  HC("他们哪天到北京？我跟你一起去机场接他们吧。", "Quel jour arrivent-ils à Pékin ? Je viendrai les chercher avec toi.", .5),

  N("Reprenons les éléments utiles. [[以为|yǐwéi]] signifie « croire à tort, penser que ». L'information qui suit se révèle généralement fausse."),
  ...h3teach("我还以为是同乐呢。", "Je croyais que c'était Tongle."),
  ...h3drill("Vous aviez mal compris. Dites : je croyais que tu étais professeur.", "我还以为你是老师呢。", "Je croyais que tu étais professeur."),

  N("[[身高|shēngāo]] désigne la taille d'une personne. Pour annoncer une taille, dites 身高 + 有 + mesure."),
  ...h3teach("身高有一米八。", "Il mesure un mètre quatre-vingts."),
  ...h3drill("Changez la taille. Dites : il mesure un mètre soixante-quinze.", "他身高有一米七五。", "Il mesure un mètre soixante-quinze."),

  N("Focus : [[看起来|kànqǐlái]] et [[看上去|kànshàngqu]] signifient « avoir l'air, sembler » d'après une impression visuelle. Placez ensuite l'adjectif ou la description."),
  ...h3teach("李文看起来瘦一点儿。", "Li Wen a l'air un peu plus mince."),
  HC("这些菜看起来都很好吃。", "Tous ces plats ont l'air délicieux.", .62),
  HC("那个新来的老师看上去很年轻。", "Le nouveau professeur a l'air jeune.", .62),
  ...h3drill("Vous voyez que votre ami est fatigué. Dites : tu as l'air un peu fatigué.", "你看起来有点儿累。", "Tu as l'air un peu fatigué."),
  ...h3drill("Changez de sujet. Dites : ce plat a l'air très bon.", "这个菜看起来很好吃。", "Ce plat a l'air très bon."),

  N("Rejouons maintenant le cœur du dialogue. Vous êtes Liu Ming. Demandez si l'homme de la photo est Yang Tongle."),
  ...h3drill("Dites toute la question.", "这是杨同乐吗？", "C'est Yang Tongle ?"),
  N("Wang Yixue répond que non et présente Li Wen."),
  HC("他不是杨同乐，他叫李文。", "Ce n'est pas Yang Tongle. Il s'appelle Li Wen.", .64),
  N("Vous comparez les deux hommes. Dites que Li Wen est plus grand et qu'il mesure un mètre quatre-vingts."),
  ...h3drill("Construisez la réponse.", "李文比同乐高，身高有一米八。", "Li Wen est plus grand que Tongle et mesure un mètre quatre-vingts."),

  N("Variation personnelle. Décrivez une personne que vous connaissez avec 看起来. Voici un modèle possible."),
  TH(),
  HC("我的朋友看起来很年轻。", "Mon ami a l'air très jeune.", .68), HOLD("Répète le modèle ou donne ta propre réponse, puis ▶"),
  N("Fin de la partie 1. Vous savez maintenant exprimer une impression visuelle sans la présenter comme une certitude."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"行李不见了", title:"Partie 2 · Un bagage a disparu", desc:"Dialogue 2 · 行李箱 · 护照 · interrogatifs indéfinis",
    build(){ return [
  N("Partie 2. À la livraison des bagages, la valise de Bai Jiayue n'arrive pas. Écoutez le dialogue complet."),
  HC("我的行李怎么还没出来？是不是丢了？", "Pourquoi mon bagage n'est-il toujours pas arrivé ? Il est peut-être perdu ?", .55),
  HC("你的行李箱是什么样的？", "À quoi ressemble ta valise ?", .62),
  HC("是一个黑色的箱子，上面写着我的名字和电话号码。", "C'est une valise noire sur laquelle sont écrits mon nom et mon numéro de téléphone.", .52),
  HC("我好像在哪儿看到过这个箱子，是不是有人拿错了？", "Il me semble avoir vu cette valise quelque part. Quelqu'un l'a peut-être prise par erreur ?", .5),
  HC("我们快找谁问一下吧，箱子里有不少重要的东西。", "Demandons vite à quelqu'un : il y a beaucoup de choses importantes dans la valise.", .5),
  HC("别着急。我们拿着护照和机票，去服务台问问吧。", "Ne t'inquiète pas. Prenons le passeport et le billet d'avion et allons demander au comptoir d'assistance.", .5),

  N("Le vocabulaire de survie. [[行李|xíngli]] signifie « bagages » ; [[行李箱|xínglixiāng]], une valise."),
  ...h3teach("行李箱", "une valise"),
  ...h3teach("护照", "un passeport"),
  ...h3teach("服务台", "un comptoir d'assistance"),
  ...h3teach("拿错了", "avoir pris quelque chose par erreur"),
  ...h3teach("重要", "important"),

  N("Pour décrire un objet, demandez 什么样的 : « de quel genre, à quoi ressemble »."),
  ...h3drill("Demandez : à quoi ressemble ta valise ?", "你的行李箱是什么样的？", "À quoi ressemble ta valise ?"),
  ...h3drill("Répondez en changeant la couleur : c'est une valise rouge.", "是一个红色的行李箱。", "C'est une valise rouge."),
  ...h3drill("Ajoutez un détail : mon nom est écrit dessus.", "上面写着我的名字。", "Mon nom est écrit dessus."),

  N("Premier emploi indéfini d'un interrogatif. Dans 我好像在哪儿看到过, 哪儿 ne pose pas une question : il signifie « quelque part », parce que le lieu exact est inconnu."),
  HC("我好像在哪儿见过他。", "Il me semble l'avoir vu quelque part.", .64),
  HC("你吃点儿什么再走吧。", "Mange quelque chose avant de partir.", .64),
  HC("我们哪天一起去踢足球吧。", "Un de ces jours, allons jouer au football ensemble.", .64),
  ...h3drill("Vous ne savez plus où. Dites : il me semble avoir vu cette valise quelque part.", "我好像在哪儿看到过这个箱子。", "Il me semble avoir vu cette valise quelque part."),
  ...h3drill("Proposez sans préciser le plat : mange quelque chose avant de partir.", "你吃点儿什么再走吧。", "Mange quelque chose avant de partir."),

  N("Jeu de rôle. Vous avez perdu votre valise. Signalez le problème."),
  ...h3drill("Dites : excusez-moi, ma valise a disparu.", "请问，我的行李箱不见了。", "Excusez-moi, ma valise a disparu."),
  N("L'employé demande à quoi elle ressemble."),
  HC("您的行李箱是什么样的？", "À quoi ressemble votre valise ?", .64),
  ...h3drill("Répondez : elle est noire et mon nom est écrit dessus.", "是黑色的，上面写着我的名字。", "Elle est noire et mon nom est écrit dessus."),
  N("Fin de la partie 2. Vous savez décrire votre bagage et employer 哪儿 ou 什么 avec un sens indéfini."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"哪儿还是某处", title:"Partie 3 · Focus intermédiaire", desc:"Question réelle ou sens indéfini · 哪儿 · 什么 · 谁 · 哪天",
    build(){ return [
  N("Cours intermédiaire de grammaire. Nous allons distinguer une vraie question d'un interrogatif qui signifie « quelque part », « quelque chose » ou « quelqu'un »."),

  N("Écoutez la vraie question : où est-il ? Le locuteur attend un lieu précis."),
  HC("他在哪儿？", "Où est-il ?", .68),
  N("Comparez avec l'affirmation : il me semble l'avoir vu quelque part. Aucun lieu précis n'est demandé."),
  HC("我好像在哪儿见过他。", "Il me semble l'avoir vu quelque part.", .66),
  ...h3drill("Produisez maintenant la vraie question : où as-tu vu cette valise ?", "你在哪儿看到这个箱子的？", "Où as-tu vu cette valise ?"),
  ...h3drill("Puis produisez l'idée imprécise : il me semble l'avoir vue quelque part.", "我好像在哪儿看到过它。", "Il me semble l'avoir vue quelque part."),

  N("Même contraste avec 什么. Dans 你想吃什么, on demande quel aliment. Dans 你吃点儿什么吧, le choix exact n'a pas d'importance."),
  HC("你想吃什么？", "Qu'est-ce que tu veux manger ?", .68),
  HC("你吃点儿什么吧。", "Mange quelque chose.", .68),
  ...h3drill("Votre ami doit partir, mais il n'a pas mangé. Dites : mange quelque chose avant de partir.", "你吃点儿什么再走吧。", "Mange quelque chose avant de partir."),

  N("Avec 谁, la question 谁来接你 signifie « qui vient te chercher ? ». Dans 找谁问一下, la personne n'est pas encore choisie : « demander à quelqu'un »."),
  HC("谁来接你？", "Qui vient te chercher ?", .68),
  HC("我们找谁问一下吧。", "Demandons à quelqu'un.", .68),
  ...h3drill("Vous acceptez n'importe quel interlocuteur. Dites : tu peux demander à n'importe qui.", "你找谁问都可以。", "Tu peux demander à n'importe qui."),

  N("Dernier cas : 哪天 peut être une question, « quel jour ? », ou une proposition vague, « un de ces jours ». L'intonation et le contexte font la différence."),
  HC("他们哪天到北京？", "Quel jour arrivent-ils à Pékin ?", .68),
  HC("我们哪天一起吃饭吧。", "Un de ces jours, allons manger ensemble.", .68),
  ...h3drill("Proposez : un de ces jours, allons voir un film ensemble.", "我们哪天一起看电影吧。", "Un de ces jours, allons voir un film ensemble."),

  N("Test rapide. Traduisez l'intention, pas les mots. Dites : quelqu'un a peut-être pris ma valise par erreur."),
  ...h3drill("À vous.", "是不是有人拿错了我的行李箱？", "Quelqu'un a peut-être pris ma valise par erreur ?"),
  N("Dites maintenant : où est mon passeport ? Ici, c'est une vraie question."),
  ...h3drill("À vous.", "我的护照在哪儿？", "Où est mon passeport ?"),
  N("Fin du focus. Vous devez toujours vous demander si l'interrogatif réclame une réponse précise ou remplace une information inconnue."),
    ]; } },

  // ================= PARTIE 4 =================
  { num:4, hanzi:"穿黑衣服的人", title:"Partie 4 · Décrire pour se retrouver", desc:"Dialogue 3 · plusieurs déterminants devant un nom",
    build(){ return [
  N("Partie 4. Liu Ming et Wang Yixue attendent leurs amis dans le hall des arrivées. Écoutez."),
  HC("飞机早就到了，你看见白家月他们了吗？", "L'avion est arrivé depuis un moment. As-tu vu Bai Jiayue et les autres ?", .54),
  HC("没有，他们应该快出来了。", "Non. Ils ne devraient plus tarder à sortir.", .62),
  HC("我们站到中间去吧，这样他们好找一些。", "Plaçons-nous au milieu : ils nous trouveront plus facilement.", .56),
  HC("你看那个高个子的人是李文吗？", "Tu crois que cette personne de grande taille est Li Wen ?", .58),
  HC("你说的是哪个？那个穿着黑衣服的短头发的年轻人？", "Duquel parles-tu ? Du jeune homme aux cheveux courts qui porte des vêtements noirs ?", .5),
  HC("对，那个人就是李文！你看，家月在他后面呢。", "Oui, cet homme, c'est bien Li Wen ! Regarde, Jiayue est derrière lui.", .52),

  N("Focus : plusieurs déterminants peuvent précéder le même nom. L'ordre le plus utile est : lieu ou moment, puis action ou état, puis caractéristique, puis le nom."),
  N("Construisons depuis le nom. « Un jeune homme » :"),
  ...h3teach("年轻人", "un jeune homme"),
  N("Ajoutez les cheveux courts :"),
  ...h3teach("短头发的年轻人", "un jeune homme aux cheveux courts"),
  N("Ajoutez ce qu'il porte :"),
  ...h3teach("穿着黑衣服的短头发的年轻人", "un jeune homme aux cheveux courts qui porte des vêtements noirs"),
  N("Enfin, désignez-le :"),
  ...h3teach("那个穿着黑衣服的短头发的年轻人", "ce jeune homme aux cheveux courts qui porte des vêtements noirs"),

  HC("昨天和家月一起看电影的两个人是我的朋友。", "Les deux personnes qui ont regardé un film avec Jiayue hier sont mes amis.", .56),
  HC("我那件新买的白色的衣服在哪儿？", "Où est le vêtement blanc que j'ai acheté récemment ?", .58),
  ...h3drill("Construisez une autre description : la personne qui tient une valise rouge.", "那个拿着红色行李箱的人。", "La personne qui tient une valise rouge."),
  ...h3drill("Ajoutez une caractéristique : ce jeune homme de grande taille qui tient une valise rouge.", "那个拿着红色行李箱的高个子的年轻人。", "Ce jeune homme de grande taille qui tient une valise rouge."),

  N("Jeu de rôle au téléphone. Vous cherchez votre ami dans la foule. Demandez lequel est Li Wen."),
  ...h3drill("Posez la question.", "哪个是李文？", "Lequel est Li Wen ?"),
  N("Répondez en donnant un signe distinctif."),
  ...h3drill("Dites : le jeune homme qui porte des vêtements noirs, c'est Li Wen.", "那个穿黑衣服的年轻人是李文。", "Le jeune homme qui porte des vêtements noirs, c'est Li Wen."),
  N("Changez maintenant le détail sans recopier le dialogue."),
  ...h3drill("Dites : la femme qui tient un passeport, c'est mon amie.", "那个拿着护照的女人是我的朋友。", "La femme qui tient un passeport, c'est mon amie."),
  N("Fin de la partie 4. Vous savez ajouter progressivement plusieurs informations avant un nom sans perdre la structure."),
    ]; } },

  // ================= PARTIE 5 =================
  { num:5, hanzi:"到北京以后", title:"Partie 5 · Récit guidé et mission", desc:"Texte 4 · compréhension · reconstruction · dialogue transféré",
    build(){ return [
  N("Partie 5. Le quatrième texte du manuel devient un vrai cours de compréhension. Li Wen raconte son arrivée à Pékin. Écoutez une première fois sans répéter."),
  HC("昨天我到北京了。", "Hier, je suis arrivé à Pékin.", .65),
  HC("虽然路上花了十几个小时，但是跟家月坐在一起，我觉得时间过得很快。", "Le trajet a duré plus de dix heures, mais comme j'étais assis avec Jiayue, j'ai trouvé que le temps passait vite.", .48),
  HC("到机场的时候，家月发现行李箱不见了。", "À l'aéroport, Jiayue s'est aperçue que sa valise avait disparu.", .56),
  HC("我带她去服务台，帮助她找到了行李箱。", "Je l'ai accompagnée au comptoir d'assistance et je l'ai aidée à retrouver sa valise.", .54),
  HC("走出机场的时候，已经八点多了。", "Lorsque nous sommes sortis de l'aéroport, il était déjà plus de huit heures.", .58),
  HC("我们一出来就看见了王老师的姐姐。", "Dès notre sortie, nous avons vu la grande sœur de la professeure Wang.", .56),
  HC("她看起来比照片上年轻。", "Elle avait l'air plus jeune que sur la photo.", .62),
  HC("晚上，一雪姐带我们去一家饭馆吃了很好吃的中国菜。", "Le soir, Yixue nous a emmenés manger dans un très bon restaurant chinois.", .52),

  N("Question de compréhension. Pourquoi Li Wen trouve-t-il que le temps est passé vite ?"),
  TH(),
  HC("因为他跟家月坐在一起。", "Parce qu'il était assis avec Jiayue.", .66),
  N("Quel problème Jiayue découvre-t-elle à l'aéroport ?"),
  TH(),
  HC("她发现行李箱不见了。", "Elle découvre que sa valise a disparu.", .66),
  N("Qui les attend à la sortie ?"),
  TH(),
  HC("王老师的姐姐在机场接他们。", "La grande sœur de la professeure Wang les attend à l'aéroport.", .64),

  N("Reconstruction. Commencez par le problème : à l'aéroport, Jiayue s'est aperçue que sa valise avait disparu."),
  ...h3drill("Dites la phrase.", "到机场的时候，家月发现行李箱不见了。", "À l'aéroport, Jiayue s'est aperçue que sa valise avait disparu."),
  N("Ajoutez la solution : je l'ai accompagnée au comptoir et je l'ai aidée à retrouver sa valise."),
  ...h3drill("Dites la phrase.", "我带她去服务台，帮助她找到了行李箱。", "Je l'ai accompagnée au comptoir d'assistance et je l'ai aidée à retrouver sa valise."),
  N("Terminez par la rencontre : elle avait l'air plus jeune que sur la photo."),
  ...h3drill("Dites la phrase.", "她看起来比照片上年轻。", "Elle avait l'air plus jeune que sur la photo."),

  N("Mission finale. Vous jouez d'abord le voyageur qui a perdu un bagage, puis l'employé du comptoir. Les détails diffèrent du dialogue du manuel."),
  ...h3drill("Voyageur : excusez-moi, mon bagage est perdu. Pouvez-vous m'aider à le chercher ?", "请问，我的行李丢了，可以帮我找找吗？", "Excusez-moi, mon bagage est perdu. Pouvez-vous m'aider à le chercher ?"),
  HC("您的行李箱是什么颜色的？", "De quelle couleur est votre valise ?", .64),
  ...h3drill("Voyageur : elle est noire et mon nom est écrit dessus.", "是黑色的，上面写着我的名字。", "Elle est noire et mon nom est écrit dessus."),
  HC("您拿着护照和机票吗？", "Avez-vous votre passeport et votre billet d'avion ?", .64),
  ...h3drill("Voyageur : oui, je les ai ; tout est ici.", "拿着呢，都在这里。", "Oui, je les ai ; tout est ici."),
  ...h3drill("Employé : d'accord, ne vous inquiétez pas, nous allons chercher.", "好的，请别着急，我们帮您找一下。", "D'accord, ne vous inquiétez pas, nous allons chercher."),
  N("Fin de la partie 5. Vous avez compris le récit, reconstruit ses étapes et transféré le vocabulaire dans un nouveau dialogue."),
    ]; } },

  // ================= PARTIE 6 =================
  { num:6, hanzi:"综合练习", title:"Partie 6 · Exercices créés", desc:"Compréhension · grammaire · production · correction immédiate", exercise:true,
    build(){ return [
  N("Exercices originaux de la leçon 1. Chaque question est suivie d'un temps de réponse, puis d'une correction expliquée."),

  N("Exercice 1. Vous voyez un homme et vous formulez seulement une impression. Dites : il a l'air très jeune."),
  TH(),
  HC("他看起来很年轻。", "Il a l'air très jeune.", .68),
  N("Correction : 看起来 indique une impression visuelle, pas une certitude."), HOLD(),

  N("Exercice 2. Transformez la vraie question « où l'as-tu vu ? » en affirmation imprécise : il me semble l'avoir vu quelque part."),
  TH(),
  HC("我好像在哪儿见过他。", "Il me semble l'avoir vu quelque part.", .66),
  N("Correction : 哪儿 ne demande plus un lieu ; il remplace un endroit dont vous ne vous souvenez pas."), HOLD(),

  N("Exercice 3. Vous ne savez pas quelle personne interroger. Dites : demandons à quelqu'un."),
  TH(),
  HC("我们找谁问一下吧。", "Demandons à quelqu'un.", .68),
  N("Correction : 谁 reste dans la phrase, mais signifie ici une personne non déterminée."), HOLD(),

  N("Exercice 4. Construisez la description du général au précis : ce jeune homme aux cheveux courts qui porte des vêtements noirs."),
  TH(),
  HC("那个穿着黑衣服的短头发的年轻人。", "Ce jeune homme aux cheveux courts qui porte des vêtements noirs.", .62),
  N("Correction : action ou état, puis caractéristique, puis le nom 年轻人."), HOLD(),

  N("Exercice 5. Répondez à la question : à quoi ressemble sa valise ?"),
  HC("她的行李箱是什么样的？", "À quoi ressemble sa valise ?", .68),
  TH(),
  HC("是一个黑色的箱子，上面有她的名字。", "C'est une valise noire sur laquelle figure son nom.", .64),
  N("Vous pouviez changer la couleur ou le détail tout en gardant 是一个…的箱子."), HOLD(),

  N("Exercice 6. Répondez à une question de compréhension : pourquoi vont-ils au comptoir d'assistance ?"),
  HC("他们为什么去服务台？", "Pourquoi vont-ils au comptoir d'assistance ?", .68),
  TH(),
  HC("因为她的行李箱不见了。", "Parce que sa valise a disparu.", .68), HOLD(),

  N("Exercice 7. Variation libre. Décrivez la personne qui doit venir vous chercher. Donnez au moins deux détails. Exemple possible :"),
  TH(),
  HC("来接我的人穿着白衣服，拿着一个红色的包。", "La personne qui vient me chercher porte des vêtements blancs et tient un sac rouge.", .62),
  N("Votre réponse pouvait être différente. L'objectif était d'enchaîner deux indices suffisamment précis."), HOLD(),

  N("Exercice 8. Mini-dialogue final. Vous êtes au téléphone dans le hall. Demandez : lequel est Li Wen ?"),
  TH(),
  HC("哪个是李文？", "Lequel est Li Wen ?", .68),
  N("On vous répond : le jeune homme qui porte des vêtements noirs."),
  HC("那个穿黑衣服的年轻人是李文。", "Le jeune homme qui porte des vêtements noirs, c'est Li Wen.", .66),
  N("Répondez que vous le voyez et que Jiayue est derrière lui."),
  TH(),
  HC("我看见他了，家月在他后面呢。", "Je le vois ; Jiayue est derrière lui.", .66), HOLD(),

  N("Bravo. Vous avez terminé la première leçon du HSK 3. Vous savez maintenant décrire une personne avec précision, gérer un bagage perdu et distinguer les interrogatifs réels des interrogatifs indéfinis."),
  HC("我们去机场接你们。", "Nous allons vous chercher à l'aéroport.", .68),
  N("Refaites demain les parties 3, 5 et 6 pour consolider la grammaire et la production. 再见！"),
  HC("再见！", "Au revoir !", .72),
    ]; } }
  ]
});
