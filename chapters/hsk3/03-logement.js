/* ============================================================
   Nouveau HSK 3.0 · Leçon 3 — 这个小区挺好的
   Source principale : « 新HSK教程 3 », leçon 3.
   Objectifs : parler d'un logement et d'un déménagement, employer 挺…的,
   le complément 坏了 et distinguer 就 de 才.
   Exercices originaux conçus pour l'apprentissage audio.
   ============================================================ */
registerChapter({
  group: "hsk3",
  id: "hsk3-03",
  badge: 3,
  hanzi: "这个小区挺好的",
  title: "Leçon 3 · Chercher un logement",
  desc: "6 cours · 挺…的 · 坏了 · 就 et 才 · déménagement",
  intro: "Cette leçon vous fait visiter un logement, signaler des problèmes dans une maison et organiser un déménagement. Deux ateliers intermédiaires séparent clairement les degrés d'intensité et l'opposition entre 就 et 才, puis une mission orale vous fait négocier un vrai projet de déménagement.",
  lessons: [

  { num:1, hanzi:"环境挺好的", title:"Partie 1 · Visiter un logement", desc:"Dialogue 1 · environnement · 挺…的",
    build(){ return [
  N("Partie 1. Wang Yixue et Liu Ming cherchent un logement plus proche du collège de leur fille. Écoutez leur échange."),
  HC("小雪的初中离家有点儿远，我们换一个近点儿的房子吧。", "Le collège de Xiaoxue est un peu loin de chez nous. Cherchons un logement plus proche.", .5),
  HC("好，我上网看看。你觉得这个小区怎么样？", "D'accord, je vais regarder sur Internet. Que penses-tu de cette résidence ?", .54),
  HC("环境挺好的，离地铁站还不远。", "L'environnement est plutôt agréable et ce n'est pas loin du métro.", .6),
  HC("房子里面也不错，空调和洗衣机都是新的。", "L'intérieur est bien aussi ; la climatisation et le lave-linge sont neufs.", .56),
  HC("是不错，但是我不喜欢住一层。", "C'est vrai, mais je n'aime pas habiter au rez-de-chaussée.", .6),
  HC("这个一层带一个小花园，我觉得我们可以去看看。", "Ce rez-de-chaussée possède un petit jardin. Je pense que nous pouvons aller le visiter.", .54),

  N("Vocabulaire du logement : [[小区|xiǎoqū]] est une résidence ou un ensemble résidentiel ; [[环境|huánjìng]] est l'environnement ; [[一层|yì céng]] désigne ici le rez-de-chaussée."),
  ...h3teach("这个小区环境挺好的。", "L'environnement de cette résidence est plutôt agréable."),
  ...h3teach("这个房子带一个小花园。", "Ce logement possède un petit jardin."),
  ...h3drill("Changez l'équipement : dites que le logement possède la climatisation.", "这个房子带空调。", "Ce logement possède la climatisation."),

  N("Grammaire. [[挺|tǐng]] se place avant un adjectif ou un verbe psychologique. À l'oral, la phrase se termine très souvent par 的 : 挺 + adjectif + 的. Le ton est positif mais mesuré : « plutôt, vraiment assez »."),
  HC("这个房间挺大的。", "Cette pièce est plutôt grande.", .68),
  HC("我挺喜欢这个小区的。", "J'aime plutôt bien cette résidence.", .68),
  HC("今天的天气挺舒服的。", "Il fait plutôt agréable aujourd'hui.", .68),
  ...h3drill("Répondez à une visite : la chambre est plutôt lumineuse.", "这个房间挺亮的。", "Cette chambre est plutôt lumineuse."),
  ...h3drill("Donnez votre avis : j'aime plutôt bien ce petit jardin.", "我挺喜欢这个小花园的。", "J'aime plutôt bien ce petit jardin."),

  N("Jeu de rôle. L'agent vous demande ce que vous pensez de la résidence."),
  HC("你觉得这个小区怎么样？", "Que pensez-vous de cette résidence ?", .66),
  ...h3drill("Répondez avec deux avantages.", "环境挺好的，离地铁站也不远。", "L'environnement est plutôt agréable et ce n'est pas loin du métro."),
  N("Ajoutez maintenant une réserve différente du dialogue."),
  ...h3drill("Dites : mais la chambre est un peu petite.", "但是房间有点儿小。", "Mais la chambre est un peu petite."),
  N("Fin de la partie 1. Vous savez donner un avis nuancé lors d'une visite."),
    ]; } },

  { num:2, hanzi:"我忙坏了", title:"Partie 2 · Les problèmes du nouveau logement", desc:"Dialogue 2 · équipements · complément 坏了",
    build(){ return [
  N("Partie 2. Dans le nouveau logement, plusieurs détails ne sont pas encore réglés. Écoutez."),
  HC("我今天早上来的时候，灯还开着。", "Quand je suis venu ce matin, la lumière était encore allumée.", .58),
  HC("我这几天忙坏了，可能走的时候忘关了。", "Ces derniers jours, j'ai été débordée ; j'ai probablement oublié de l'éteindre en partant.", .54),
  HC("冰箱不能用，这些吃的东西放在哪儿？", "Le réfrigérateur ne fonctionne pas. Où met-on cette nourriture ?", .56),
  HC("不可能吧，冰箱是新买的，我来看看。", "Ce n'est pas possible, le réfrigérateur est neuf. Laisse-moi regarder.", .58),
  HC("洗衣机也坏了吗？", "Le lave-linge est aussi en panne ?", .66),
  HC("没坏，但是卫生间没打扫好，还不能洗衣服。", "Non, mais la salle de bains n'est pas encore bien nettoyée ; on ne peut pas encore laver le linge.", .54),
  HC("星期天我们真的能搬家吗？", "Pourrons-nous vraiment déménager dimanche ?", .64),

  N("Distinguez deux expressions. [[坏了|huài le]] après un appareil signifie « être tombé en panne ». Après un adjectif, 坏了 est un complément de degré : « extrêmement »."),
  HC("洗衣机坏了。", "Le lave-linge est en panne.", .7),
  HC("我忙坏了。", "Je suis terriblement occupé.", .7),
  HC("我渴坏了。", "Je meurs de soif.", .7),
  N("Le sens vient donc du mot placé avant 坏了. Un objet peut être cassé ; une personne peut être fatiguée, affamée ou assoiffée à l'extrême."),
  ...h3drill("Vous avez porté des cartons toute la journée. Dites : je suis épuisé.", "我累坏了。", "Je suis épuisé."),
  ...h3drill("Vous n'avez pas déjeuné. Dites : j'ai terriblement faim.", "我饿坏了。", "Je meurs de faim."),
  ...h3drill("Signalez une panne, sans exprimer un degré : la climatisation est en panne.", "空调坏了。", "La climatisation est en panne."),

  N("Autres mots utiles : [[关|guān]] signifie fermer ou éteindre ; [[打扫|dǎsǎo]] nettoyer ; [[收拾|shōushi]] ranger ou remettre en ordre."),
  ...h3teach("走的时候别忘了关灯。", "N'oublie pas d'éteindre la lumière en partant."),
  ...h3drill("Demandez si la salle de bains est déjà nettoyée.", "卫生间打扫好了吗？", "La salle de bains est-elle bien nettoyée ?"),
  ...h3drill("Répondez : pas encore, je vais la nettoyer tout de suite.", "还没有，我马上打扫。", "Pas encore, je vais la nettoyer tout de suite."),
  N("Fin de la partie 2. Vous pouvez signaler une panne sans la confondre avec l'intensité émotionnelle de 坏了."),
    ]; } },

  { num:3, hanzi:"程度怎么说", title:"Partie 3 · Focus intermédiaire sur le degré", desc:"有点儿 · 挺…的 · 太…了 · 坏了",
    build(){ return [
  N("Focus intermédiaire. Le chinois ne présente pas tous les degrés de la même façon. Comparons quatre outils avec une seule situation : une chambre."),
  HC("这个房间有点儿小。", "Cette pièce est un peu petite.", .7),
  N("有点儿 précède souvent une qualité jugée gênante ou contraire à ce que l'on souhaitait."),
  HC("这个房间挺大的。", "Cette pièce est plutôt grande.", .7),
  N("挺…的 exprime une appréciation assez forte et très orale."),
  HC("这个房间太大了。", "Cette pièce est vraiment trop grande.", .7),
  N("太…了 peut exprimer un excès réel ou une réaction très forte selon le contexte."),
  HC("今天搬家，我累坏了。", "J'ai déménagé aujourd'hui et je suis épuisé.", .68),
  N("坏了 après un adjectif pousse le degré à l'extrême et s'emploie surtout dans une situation pénible."),

  N("Choisissez maintenant l'outil selon l'intention. Petite réserve polie : le métro est un peu loin."),
  ...h3drill("Répondez.", "地铁站有点儿远。", "La station de métro est un peu loin."),
  N("Appréciation positive : le jardin est plutôt joli."),
  ...h3drill("Répondez.", "这个花园挺漂亮的。", "Ce jardin est plutôt joli."),
  N("Réaction forte : cette résidence est vraiment trop calme !"),
  ...h3drill("Répondez.", "这个小区太安静了！", "Cette résidence est vraiment très calme !"),
  N("État extrême après le déménagement : nous sommes morts de fatigue."),
  ...h3drill("Répondez.", "搬完家，我们都累坏了。", "Après le déménagement, nous étions tous épuisés."),

  N("Mini-correction de sens. 空调坏了 parle de l'appareil. 热坏了 parle de votre sensation."),
  HC("空调坏了，我们都热坏了。", "La climatisation est en panne et nous mourons tous de chaud.", .64),
  ...h3drill("Créez le même contraste avec le réfrigérateur et la faim.", "冰箱坏了，我们都饿坏了。", "Le réfrigérateur est en panne et nous mourons tous de faim."),
  N("Fin du focus. Vous choisissez désormais le degré en fonction de l'attitude, pas par traduction mot à mot."),
    ]; } },

  { num:4, hanzi:"几分钟就到", title:"Partie 4 · Tôt avec 就, tard avec 才", desc:"Dialogue 3 · banque · vitesse et attente",
    build(){ return [
  N("Partie 4. Le déménagement coûte cher. Wang Yixue propose de demander une carte bancaire. Écoutez."),
  HC("这个月花了不少钱。", "Nous avons dépensé pas mal d'argent ce mois-ci.", .68),
  HC("是的，我们买了很多搬家时要用的东西。", "Oui, nous avons acheté beaucoup de choses nécessaires au déménagement.", .58),
  HC("咱们办张信用卡吧，花的钱可以慢慢还。", "Prenons une carte de crédit ; nous pourrons rembourser progressivement nos dépenses.", .56),
  HC("听说中国银行的服务不错，办了信用卡买东西还能便宜。", "J'ai entendu dire que le service de la Banque de Chine était bon et que la carte donnait aussi des réductions.", .5),
  HC("好啊。那家银行离这儿不远，走路几分钟就能到。咱们什么时候去？", "D'accord. Cette banque n'est pas loin : quelques minutes à pied suffisent. Quand y allons-nous ?", .48),
  HC("今天下午？", "Cet après-midi ?", .72),
  HC("我下午要去医院，很晚才能回来。", "Je dois aller à l'hôpital cet après-midi et je ne rentrerai que très tard.", .6),
  HC("那我下午自己去吧。", "Alors j'irai seule cet après-midi.", .68),

  N("[[就|jiù]] et [[才|cái]] indiquent le regard du locuteur sur le moment ou la vitesse. 就 : plus tôt, plus vite ou plus facilement que prévu. 才 : plus tard, plus lentement ou avec davantage d'effort que prévu."),
  HC("走路几分钟就能到。", "Quelques minutes à pied suffisent pour arriver.", .7),
  HC("坐火车五个小时才能到。", "Il faut cinq heures de train pour arriver.", .68),
  HC("我早上五点就起床了。", "Je me suis levé dès cinq heures du matin.", .68),
  HC("他晚上十一点才回家。", "Il n'est rentré qu'à onze heures du soir.", .68),

  N("Le nombre seul ne décide pas. C'est l'attente du locuteur qui compte. À huit heures, 就 peut vouloir dire « dès huit heures » et 才 « seulement à huit heures »."),
  HC("他八点就来了。", "Il est arrivé dès huit heures.", .7),
  HC("他八点才来。", "Il n'est arrivé qu'à huit heures.", .7),
  ...h3drill("Vous trouvez le trajet rapide : dix minutes suffisent.", "十分钟就能到。", "On peut y arriver en seulement dix minutes."),
  ...h3drill("Vous trouvez l'attente longue : il ne revient que demain.", "他明天才回来。", "Il ne revient que demain."),
  ...h3drill("Vous commencez tôt : je commence à préparer dès cette semaine.", "我这周就开始准备。", "Je commence à préparer dès cette semaine."),
  N("Fin de la partie 4. 就 et 才 racontent une attente subjective, pas seulement une heure objective."),
    ]; } },

  { num:5, hanzi:"我们什么时候搬家", title:"Partie 5 · Organiser le déménagement", desc:"Dialogue 4 · planification · mission orale",
    build(){ return [
  N("Partie 5. Liu Ming et Wang Yixue n'évaluent pas du tout le temps nécessaire de la même manière."),
  HC("我觉得这个星期就能搬家。", "Je pense que nous pouvons déménager dès cette semaine.", .64),
  HC("我明天去买一些纸箱，很快就能准备好。", "Demain, j'irai acheter des cartons et tout sera vite prêt.", .58),
  HC("搬家那天，我想请几位朋友来帮忙，最多一天就能搬完。", "Le jour du déménagement, je demanderai de l'aide à quelques amis ; une journée au maximum suffira.", .52),
  HC("我觉得下个月才能搬家。", "Moi, je pense que nous ne pourrons déménager que le mois prochain.", .64),
  HC("这周开始准备，下周去打扫新家，这么多事情最少需要两个星期才能做完。", "Nous commençons les préparatifs cette semaine et nettoyons le nouveau logement la semaine prochaine ; il faudra au moins deux semaines pour tout finir.", .48),
  HC("搬家那天，我们应该找一家搬家公司。", "Le jour du déménagement, nous devrions faire appel à une entreprise spécialisée.", .58),

  N("Vocabulaire du projet : [[纸箱|zhǐxiāng]], carton ; [[帮忙|bāngmáng]], donner un coup de main ; [[搬家公司|bānjiā gōngsī]], entreprise de déménagement ; [[最多|zuìduō]], au maximum ; [[最少|zuìshǎo]], au minimum."),
  ...h3teach("请几位朋友来帮忙。", "Demander à quelques amis de venir aider."),
  ...h3teach("找一家搬家公司。", "Faire appel à une entreprise de déménagement."),

  N("Compréhension. Pourquoi Liu Ming pense-t-il pouvoir déménager rapidement ?"),
  TH(),
  HC("因为他想请朋友来帮忙。", "Parce qu'il veut demander de l'aide à ses amis.", .68), HOLD(),
  N("Pourquoi Wang Yixue prévoit-elle plus de temps ?"),
  TH(),
  HC("因为要准备和打扫的事情很多。", "Parce qu'il y a beaucoup de préparatifs et de nettoyage à faire.", .68), HOLD(),

  N("Mission orale. Vous jouez d'abord la personne optimiste. Proposez de déménager dès la semaine prochaine."),
  ...h3drill("Formulez votre proposition.", "我觉得我们下个星期就能搬家。", "Je pense que nous pouvons déménager dès la semaine prochaine."),
  N("Votre partenaire est plus prudent. Dites qu'il faudra au moins deux semaines pour finir."),
  ...h3drill("Répondez.", "这么多事情，最少需要两个星期才能做完。", "Avec tout ce qu'il y a à faire, il faudra au moins deux semaines pour terminer."),
  N("Négociez une solution différente : cette semaine, on prépare les cartons ; la semaine prochaine, une entreprise nous aide."),
  ...h3drill("Dites les deux étapes.", "这周我们准备纸箱，下周请搬家公司来帮忙。", "Cette semaine, nous préparons les cartons ; la semaine prochaine, une entreprise viendra nous aider."),
  N("Réponse personnelle. Combien de temps vous faudrait-il pour déménager ? Répondez avec 就 ou 才, selon votre point de vue."),
  TH(),
  HC("我觉得一个星期就能准备好。", "Je pense qu'une semaine suffirait pour être prêt.", .68), HOLD("Répète ce modèle ou donne ta propre réponse, puis ▶"),
  N("Fin de la partie 5. Vous avez utilisé la grammaire pour défendre deux estimations opposées."),
    ]; } },

  { num:6, hanzi:"综合练习", title:"Partie 6 · Exercices créés", desc:"Compréhension · choix de nuance · projet libre", exercise:true,
    build(){ return [
  N("Exercices originaux de la leçon 3. Répondez avant la correction."),

  N("Exercice 1. Donnez un avis oral positif : cette résidence est plutôt calme."),
  TH(),
  HC("这个小区挺安静的。", "Cette résidence est plutôt calme.", .7), HOLD(),

  N("Exercice 2. Ajoutez une petite réserve : mais elle est un peu loin du métro."),
  TH(),
  HC("但是离地铁站有点儿远。", "Mais elle est un peu loin du métro.", .7), HOLD(),

  N("Exercice 3. Distinguez la panne de la sensation : le réfrigérateur est en panne et j'ai terriblement faim."),
  TH(),
  HC("冰箱坏了，我饿坏了。", "Le réfrigérateur est en panne et je meurs de faim.", .7), HOLD(),

  N("Exercice 4. Vous êtes surpris par la rapidité : en cinq minutes, c'était déjà terminé."),
  TH(),
  HC("五分钟就做完了。", "Cela a été terminé en seulement cinq minutes.", .7),
  N("Correction : 就 présente ces cinq minutes comme rapides."), HOLD(),

  N("Exercice 5. Vous trouvez le retour tardif : elle ne rentre qu'à dix heures."),
  TH(),
  HC("她十点才回来。", "Elle ne rentre qu'à dix heures.", .7),
  N("Correction : 才 indique que dix heures est tard dans la situation."), HOLD(),

  N("Exercice 6. Compréhension. Pourquoi la famille veut-elle changer de logement ?"),
  TH(),
  HC("因为小雪的初中离家有点儿远。", "Parce que le collège de Xiaoxue est un peu loin de chez eux.", .68), HOLD(),

  N("Exercice 7. Lors d'une visite, demandez si le logement possède un jardin."),
  TH(),
  HC("这个房子带花园吗？", "Ce logement possède-t-il un jardin ?", .7),
  N("L'agent répond que oui et ajoute que le jardin est plutôt joli."),
  HC("带一个小花园，花园挺漂亮的。", "Oui, il possède un petit jardin, qui est plutôt joli.", .68), HOLD(),

  N("Exercice 8. Projet final. Proposez un plan différent du dialogue : acheter les cartons demain et déménager samedi avec des amis."),
  TH(),
  HC("我明天去买纸箱，星期六请朋友来帮忙搬家。", "Demain, j'achète les cartons ; samedi, je demande à des amis de m'aider à déménager.", .66),
  N("Ajoutez votre estimation : une journée suffira."),
  TH(),
  HC("我觉得一天就能搬完。", "Je pense qu'une journée suffira pour tout déménager.", .7), HOLD(),

  N("Bilan des leçons 1 à 3. Vous savez décrire précisément, choisir librement, commander, visiter un logement et organiser un projet dans le temps."),
  HC("这个小区环境挺好的，我们下个星期就能搬家。", "L'environnement de cette résidence est plutôt agréable ; nous pourrons déménager dès la semaine prochaine.", .62),
  HC("再见！", "Au revoir !", .74),
    ]; } }
  ]
});
