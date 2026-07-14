/* ============================================================
   HSK 2 · Leçon 10 — 就要考试了 L'examen approche
   D'après « 新HSK教程 2 », leçon 10.
   Vocabulaire de la leçon :
   开学 · 门 · 后面 · 笔 · 帮 · 考试 · 词 · 本子 ·
   错 · 题 · 还是 · 考 · 快要 · 笑
   Grammaire : phrase avec syntagme sujet-prédicat comme
   prédicat · phrase interrogative alternative (还是) ·
   formule figée 要/快/快要/就要……了.
   Structure : leçon → 3 parties (les 3 dialogues du manuel,
   le texte 4/journal intégré en révision de la partie 3) +
   partie 4 exercice.
   ============================================================ */
registerChapter({
  group: "hsk2",
  id: "hsk2-10",
  badge: 10,
  hanzi: "就要考试了",
  title: "Leçon 10 · L'examen approche",
  desc: "3 parties · phrase sujet-prédicat · question alternative 还是 · 快要……了",
  intro: "La rentrée approche chez les Liu : Liu Ming aide son fils à préparer son sac d'école, Wang Yixue aide sa fille Liu Xiaoxue à réviser. Au programme : la phrase où un syntagme sujet-prédicat sert de prédicat, la question alternative avec 还是, et la formule figée 要/快/快要/就要……了 pour dire qu'un événement est sur le point de se produire.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"你准备好了吗", title:"Partie 1 · La rentrée de Xiaoming", desc:"开学 · 门 · 后面 · 笔 · 帮",
    build(){ return [
  N("Partie 1. Liu Ming aide son fils Liu Xiaoming à préparer son sac pour la rentrée. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("小明，你们明天开学，你准备好了吗？","Xiǎomíng, nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?","Xiaoming, vous rentrez en classe demain, tu es prêt ?",0.4),
  C("明天就开学啊？爸爸，我的书包你看见了吗？","Míngtiān jiù kāixué a? Bàba, wǒ de shūbāo nǐ kànjiàn le ma?","C'est déjà demain la rentrée ? Papa, tu as vu mon sac d'école ?",0.4),
  C("书包在门后面。","Shūbāo zài mén hòumiàn.","Le sac est derrière la porte.",0.55),
  C("书在哪儿呢？笔呢？","Shū zài nǎr ne? Bǐ ne?","Où sont les livres ? Et les stylos ?",0.55),
  C("书在床上，笔在桌子上。","Shū zài chuáng shang, bǐ zài zhuōzi shang.","Les livres sont sur le lit, les stylos sont sur la table.",0.45),
  C("太好了！现在都准备好了。","Tài hǎo le! Xiànzài dōu zhǔnbèi hǎo le.","Génial ! Maintenant tout est prêt.",0.5),
  C("这次爸爸帮你，下次你自己准备，好不好？","Zhè cì bàba bāng nǐ, xià cì nǐ zìjǐ zhǔnbèi, hǎo bu hǎo?","Cette fois papa t'a aidé, la prochaine fois tu prépares tout seul, d'accord ?",0.4),
  C("好！","Hǎo!","D'accord !",0.6),

  N("« La rentrée, le début des cours » se dit [[开学|kāixué]]. Dites : « Xiaoming, vous rentrez en classe demain, tu es prêt ? »"),
  ...teach2("开学","kāixué","la rentrée, le début des cours"),
  TH(),
  C("小明，你们明天开学，你准备好了吗？","Xiǎomíng, nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?","Xiaoming, vous rentrez en classe demain, tu es prêt ?",0.4), HOLD(),
  N("On vous répond, surpris : « c'est déjà demain la rentrée ? Papa, tu as vu mon sac d'école ? »"),
  C("明天就开学啊？爸爸，我的书包你看见了吗？","Míngtiān jiù kāixué a? Bàba, wǒ de shūbāo nǐ kànjiàn le ma?","C'est déjà demain la rentrée ? Papa, tu as vu mon sac d'école ?",0.4),

  N("« La porte » se dit [[门|mén]], et « derrière » se dit [[后面|hòumiàn]]. Dites : « le sac est derrière la porte. »"),
  ...teach2("门，后面","mén, hòumiàn","la porte ; derrière"),
  TH(),
  C("书包在门后面。","Shūbāo zài mén hòumiàn.","Le sac est derrière la porte.",0.55), HOLD(),
  N("On vous demande : « où sont les livres ? Et les stylos ? »"),
  C("书在哪儿呢？笔呢？","Shū zài nǎr ne? Bǐ ne?","Où sont les livres ? Et les stylos ?",0.55),

  N("« Le stylo, le crayon » se dit [[笔|bǐ]]. Répondez : « les livres sont sur le lit, les stylos sont sur la table. »"),
  ...teach2("笔","bǐ","le stylo, le crayon"),
  TH(),
  C("书在床上，笔在桌子上。","Shū zài chuáng shang, bǐ zài zhuōzi shang.","Les livres sont sur le lit, les stylos sont sur la table.",0.45), HOLD(),
  N("On vous répond, content : « génial ! Maintenant tout est prêt. »"),
  C("太好了！现在都准备好了。","Tài hǎo le! Xiànzài dōu zhǔnbèi hǎo le.","Génial ! Maintenant tout est prêt.",0.5),

  N("« Aider » se dit [[帮|bāng]]. Grammaire : dans une phrase, un syntagme sujet-prédicat entier peut servir de prédicat pour décrire ou expliquer le sujet principal. Structure : sujet + (petit sujet + petit prédicat). Écoutez ces exemples."),
  ...teach2("帮","bāng","aider"),
  C("我的书包你看见了吗？","Wǒ de shūbāo nǐ kànjiàn le ma?","Mon sac, l'as-tu vu ? (litt. Mon sac, toi l'as vu ?)",0.45),
  C("弟弟手很小。","Dìdi shǒu hěn xiǎo.","Le petit frère a de petites mains. (litt. Petit frère, mains très petites.)",0.5),
  C("这件事他知道。","Zhè jiàn shì tā zhīdào.","Cette affaire, il la connaît.",0.5),
  N("Essayez, avec cette structure : dites « cette affaire, il la connaît. »"),
  TH(),
  C("这件事他知道。","Zhè jiàn shì tā zhīdào.","Cette affaire, il la connaît.",0.5), HOLD(),

  N("Dites : « cette fois papa t'a aidé, la prochaine fois tu prépares tout seul, d'accord ? »"),
  TH(),
  C("这次爸爸帮你，下次你自己准备，好不好？","Zhè cì bàba bāng nǐ, xià cì nǐ zìjǐ zhǔnbèi, hǎo bu hǎo?","Cette fois papa t'a aidé, la prochaine fois tu prépares tout seul, d'accord ?",0.4), HOLD(),
  N("On vous répond : « d'accord ! »"),
  C("好！","Hǎo!","D'accord !",0.6),

  N("Révision. Dites, avec la structure sujet + petit sujet + petit prédicat : mon sac, l'as-tu vu ?"),
  TH(),
  C("我的书包你看见了吗？","Wǒ de shūbāo nǐ kànjiàn le ma?","Mon sac, l'as-tu vu ?",0.45),
  N("Fin de la partie 1. À la partie 2 : Liu Xiaoxue révise pour son examen."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"还是我准备考试", title:"Partie 2 · Réviser pour l'examen", desc:"考试 · 词 · 本子 · 错 · 题 · 还是",
    build(){ return [
  N("Partie 2. Wang Yixue voit sa fille Liu Xiaoxue en train de réviser. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("小雪，你在做什么呢？","Xiǎoxuě, nǐ zài zuò shénme ne?","Xiaoxue, qu'est-ce que tu fais ?",0.5),
  C("明天考试，我在看书呢。","Míngtiān kǎoshì, wǒ zài kàn shū ne.","J'ai un examen demain, je révise mes livres.",0.5),
  C("这些词要好好看看。","Zhèxiē cí yào hǎohāo kànkan.","Il faut bien regarder ces mots.",0.5),
  C("我看过了，意思也都懂了。","Wǒ kànguo le, yìsi yě dōu dǒng le.","Je les ai déjà regardés, j'ai compris le sens aussi.",0.5),
  C("你的本子呢？本子上做错的题也要看一看。","Nǐ de běnzi ne? Běnzi shang zuòcuò de tí yě yào kàn yi kàn.","Et ton cahier ? Il faut aussi revoir les questions que tu as ratées dans ton cahier.",0.4),
  C("妈妈，是您准备考试还是我准备考试？","Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?","Maman, c'est vous qui préparez l'examen ou moi ?",0.4),

  N("« L'examen, passer un examen » se dit [[考试|kǎoshì]]. Dites : « Xiaoxue, qu'est-ce que tu fais ? »"),
  ...teach2("考试","kǎoshì","l'examen ; passer un examen"),
  TH(),
  C("小雪，你在做什么呢？","Xiǎoxuě, nǐ zài zuò shénme ne?","Xiaoxue, qu'est-ce que tu fais ?",0.5), HOLD(),
  N("On vous répond : « j'ai un examen demain, je révise mes livres. »"),
  C("明天考试，我在看书呢。","Míngtiān kǎoshì, wǒ zài kàn shū ne.","J'ai un examen demain, je révise mes livres.",0.5),

  N("« Le mot » se dit [[词|cí]]. Dites : « il faut bien regarder ces mots. »"),
  ...teach2("词","cí","le mot"),
  TH(),
  C("这些词要好好看看。","Zhèxiē cí yào hǎohāo kànkan.","Il faut bien regarder ces mots.",0.5), HOLD(),
  N("On vous répond : « je les ai déjà regardés, j'ai compris le sens aussi. »"),
  C("我看过了，意思也都懂了。","Wǒ kànguo le, yìsi yě dōu dǒng le.","Je les ai déjà regardés, j'ai compris le sens aussi.",0.5),

  N("« Le cahier » se dit [[本子|běnzi]], « faux, une erreur » se dit [[错|cuò]], et « la question, l'exercice » se dit [[题|tí]]. Dites : « et ton cahier ? Il faut aussi revoir les questions que tu as ratées dans ton cahier. »"),
  ...teach2("本子，错，题","běnzi, cuò, tí","le cahier ; faux, une erreur ; la question, l'exercice"),
  TH(),
  C("你的本子呢？本子上做错的题也要看一看。","Nǐ de běnzi ne? Běnzi shang zuòcuò de tí yě yào kàn yi kàn.","Et ton cahier ? Il faut aussi revoir les questions que tu as ratées dans ton cahier.",0.4), HOLD(),

  N("Grammaire : la conjonction [[还是|háishi]] s'utilise dans une phrase interrogative pour indiquer un choix. Structure : (是) A 还是 B. Écoutez ces exemples."),
  ...teach2("还是","háishi","ou (dans une question de choix)"),
  C("妈妈，是您准备考试还是我准备考试？","Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?","Maman, c'est vous qui préparez l'examen ou moi ?",0.4),
  C("你更喜欢打篮球、踢足球还是游泳？","Nǐ gèng xǐhuan dǎ lánqiú, tī zúqiú háishi yóuyǒng?","Tu préfères jouer au basket, au foot, ou nager ?",0.4),
  C("我们什么时候去看电影？今天还是明天？","Wǒmen shénme shíhou qù kàn diànyǐng? Jīntiān háishi míngtiān?","On va voir un film quand ? Aujourd'hui ou demain ?",0.45),
  N("Essayez, avec 还是 : dites « on va voir un film quand ? Aujourd'hui ou demain ? »"),
  TH(),
  C("我们什么时候去看电影？今天还是明天？","Wǒmen shénme shíhou qù kàn diànyǐng? Jīntiān háishi míngtiān?","On va voir un film quand ? Aujourd'hui ou demain ?",0.45), HOLD(),
  N("Demandez, taquine, avec 还是 : « maman, c'est vous qui préparez l'examen ou moi ? »"),
  TH(),
  C("妈妈，是您准备考试还是我准备考试？","Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?","Maman, c'est vous qui préparez l'examen ou moi ?",0.4), HOLD(),

  N("Révision. Demandez, avec 还是 : tu préfères jouer au basket, au foot, ou nager ?"),
  TH(),
  C("你更喜欢打篮球、踢足球还是游泳？","Nǐ gèng xǐhuan dǎ lánqiú, tī zúqiú háishi yóuyǒng?","Tu préfères jouer au basket, au foot, ou nager ?",0.4),
  N("Fin de la partie 2. À la partie 3 : le jour de l'examen, et la rentrée en famille."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"快要做好了", title:"Partie 3 · Le jour de l'examen", desc:"考 · 快要 · 笑 · 要/快/快要/就要……了",
    build(){ return [
  N("Partie 3. Liu Xiaoxue rentre de l'école le jour de son examen. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("妈妈，我回来了！","Māma, wǒ huílái le!","Maman, je suis rentrée !",0.55),
  C("我买了奶茶，就在桌子上，自己去拿吧。","Wǒ mǎile nǎichá, jiù zài zhuōzi shang, zìjǐ qù ná ba.","Je t'ai acheté un thé au lait, il est sur la table, sers-toi.",0.4),
  C("谢谢妈妈！","Xièxie māma!","Merci maman !",0.6),
  C("今天考试考得怎么样？","Jīntiān kǎoshì kǎo de zěnmeyàng?","Comment s'est passé l'examen aujourd'hui ?",0.5),
  C("我觉得比上次好。","Wǒ juéde bǐ shàng cì hǎo.","Je trouve que c'était mieux que la dernière fois.",0.55),
  C("真不错！饭菜快要做好了，你叫弟弟一起去洗手吧。","Zhēn búcuò! Fàncài kuàiyào zuòhǎo le, nǐ jiào dìdi yìqǐ qù xǐshǒu ba.","Bravo ! Le repas est presque prêt, va te laver les mains avec ton petit frère.",0.4),
  C("妈妈，我是第一名，姐姐还没洗完呢。","Māma, wǒ shì dì-yī míng, jiějie hái méi xǐwán ne.","Maman, je suis premier, ma grande sœur n'a pas encore fini de se laver.",0.4),
  C("你洗得真快啊！","Nǐ xǐ de zhēn kuài a!","Tu t'es lavé vite dis donc !",0.55),

  N("« Passer un examen » (verbe) se dit [[考|kǎo]]. Dites : « maman, je suis rentrée ! »"),
  ...teach2("考","kǎo","passer un examen (verbe)"),
  TH(),
  C("妈妈，我回来了！","Māma, wǒ huílái le!","Maman, je suis rentrée !",0.55), HOLD(),
  N("On vous répond : « je t'ai acheté un thé au lait, il est sur la table, sers-toi. »"),
  C("我买了奶茶，就在桌子上，自己去拿吧。","Wǒ mǎile nǎichá, jiù zài zhuōzi shang, zìjǐ qù ná ba.","Je t'ai acheté un thé au lait, il est sur la table, sers-toi.",0.4),
  N("Dites : « merci maman ! »"),
  TH(),
  C("谢谢妈妈！","Xièxie māma!","Merci maman !",0.6), HOLD(),
  N("On vous demande : « comment s'est passé l'examen aujourd'hui ? »"),
  C("今天考试考得怎么样？","Jīntiān kǎoshì kǎo de zěnmeyàng?","Comment s'est passé l'examen aujourd'hui ?",0.5),
  N("Répondez : « je trouve que c'était mieux que la dernière fois. »"),
  TH(),
  C("我觉得比上次好。","Wǒ juéde bǐ shàng cì hǎo.","Je trouve que c'était mieux que la dernière fois.",0.55), HOLD(),

  N("« Sur le point de, presque » se dit [[快要|kuàiyào]]. Grammaire : la formule figée 要/快/快要/就要……了 indique qu'un événement est sur le point de se produire. S'il y a un complément de temps dans la phrase, on utilise en général 就要……了. Écoutez ces exemples."),
  ...teach2("快要","kuàiyào","sur le point de, presque"),
  C("饭菜快要做好了。","Fàncài kuàiyào zuòhǎo le.","Le repas est presque prêt.",0.5),
  C("火车快开了。","Huǒchē kuài kāi le.","Le train va bientôt partir.",0.55),
  C("我们下星期就要考试了。","Wǒmen xià xīngqī jiù yào kǎoshì le.","Nous aurons bientôt un examen la semaine prochaine.",0.45),
  N("Essayez, avec 就要……了 : dites « nous aurons bientôt un examen la semaine prochaine. »"),
  TH(),
  C("我们下星期就要考试了。","Wǒmen xià xīngqī jiù yào kǎoshì le.","Nous aurons bientôt un examen la semaine prochaine.",0.45), HOLD(),
  N("Dites, avec 快要……了 : « le repas est presque prêt, va te laver les mains avec ton petit frère. »"),
  TH(),
  C("真不错！饭菜快要做好了，你叫弟弟一起去洗手吧。","Zhēn búcuò! Fàncài kuàiyào zuòhǎo le, nǐ jiào dìdi yìqǐ qù xǐshǒu ba.","Bravo ! Le repas est presque prêt, va te laver les mains avec ton petit frère.",0.4), HOLD(),
  N("Le petit frère Liu Xiaoming arrive en courant : « maman, je suis premier, ma grande sœur n'a pas encore fini de se laver. »"),
  C("妈妈，我是第一名，姐姐还没洗完呢。","Māma, wǒ shì dì-yī míng, jiějie hái méi xǐwán ne.","Maman, je suis premier, ma grande sœur n'a pas encore fini de se laver.",0.4),
  N("On lui répond, amusée : « tu t'es lavé vite dis donc ! »"),
  C("你洗得真快啊！","Nǐ xǐ de zhēn kuài a!","Tu t'es lavé vite dis donc !",0.55),

  N("Le soir, Liu Xiaoxue écrit dans son journal. « Rire, sourire » se dit [[笑|xiào]]. Écoutez ce qu'elle raconte."),
  ...teach2("笑","xiào","rire, sourire"),
  C("快要开学了，爸爸帮弟弟准备书包、本子和笔。","Kuàiyào kāixué le, bàba bāng dìdi zhǔnbèi shūbāo, běnzi hé bǐ.","La rentrée approche, papa aide mon petit frère à préparer son sac, ses cahiers et ses stylos.",0.35),
  C("我就要考试了，妈妈让我看书、看做错的题。","Wǒ jiù yào kǎoshì le, māma ràng wǒ kàn shū, kàn zuòcuò de tí.","Moi je vais bientôt avoir un examen, maman me fait relire mes livres et mes erreurs.",0.35),
  C("我们上学，爸爸、妈妈比我们还忙。","Wǒmen shàngxué, bàba, māma bǐ wǒmen hái máng.","C'est nous qui allons à l'école, mais papa et maman sont encore plus occupés que nous.",0.4),
  C("我问他们：\"是我和弟弟上学还是你们上学？\"","Wǒ wèn tāmen: \"Shì wǒ hé dìdi shàngxué háishi nǐmen shàngxué?\"","Je leur ai demandé : « c'est mon frère et moi qui allons à l'école, ou vous ? »",0.35),
  C("我问完，他们都笑了。","Wǒ wènwán, tāmen dōu xiào le.","Après ma question, ils ont tous les deux éclaté de rire.",0.45),
  N("Dites, avec 比……还…… : c'est nous qui allons à l'école, mais papa et maman sont encore plus occupés que nous."),
  TH(),
  C("我们上学，爸爸、妈妈比我们还忙。","Wǒmen shàngxué, bàba, māma bǐ wǒmen hái máng.","C'est nous qui allons à l'école, mais papa et maman sont encore plus occupés que nous.",0.4), HOLD(),

  // Révision finale de la leçon 10
  N("Révision finale de la leçon 10. Dites, avec un syntagme sujet-prédicat comme prédicat : mon sac, l'as-tu vu ?"),
  TH(),
  C("我的书包你看见了吗？","Wǒ de shūbāo nǐ kànjiàn le ma?","Mon sac, l'as-tu vu ?",0.45),
  N("Demandez, avec 还是 : on va voir un film quand ? Aujourd'hui ou demain ?"),
  TH(),
  C("我们什么时候去看电影？今天还是明天？","Wǒmen shénme shíhou qù kàn diànyǐng? Jīntiān háishi míngtiān?","On va voir un film quand ? Aujourd'hui ou demain ?",0.45),
  N("Dites, avec 就要……了 : nous aurons bientôt un examen la semaine prochaine."),
  TH(),
  C("我们下星期就要考试了。","Wǒmen xià xīngqī jiù yào kǎoshì le.","Nous aurons bientôt un examen la semaine prochaine.",0.45),
  N("Excellent ! Vous avez terminé la leçon 10 du HSK 2. Réécoutez-la demain, puis passez à la leçon 11. [[再见|zàijiàn]]！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Exercice immersif — tout en chinois, questions du cahier officiel HSK 2",
    build(){ return [
N("Exercice, tout en chinois. Écoute la question, réfléchis, puis écoute les trois réponses. Choisis la bonne à voix haute, puis écoute la correction."),

  // Question 1
  C("谁帮你准备的画笔？是爸爸还是妈妈？","Shéi bāng nǐ zhǔnbèi de huàbǐ? Shì bàba háishi māma?","",0.35),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、都不是，是我自己。","Yī. Dōu bú shì, shì wǒ zìjǐ.","",0.45),
  P(4,"…"),
  C("二、我也不知道，你去问问老师吧。","Èr. Wǒ yě bù zhīdào, nǐ qù wènwen lǎoshī ba.","",0.35),
  P(4,"…"),
  C("三、别去了，我有两个本子，给你一个。","Sān. Bié qù le, wǒ yǒu liǎng ge běnzi, gěi nǐ yí gè.","",0.35),
  TH(),
  C("都不是，是我自己。","Dōu bú shì, shì wǒ zìjǐ.","",0.5), HOLD(),

  // Question 2
  C("你看，这个题做对了还是做错了？","Nǐ kàn, zhège tí zuòduì le háishi zuòcuò le?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我也不知道，你去问问老师吧。","Yī. Wǒ yě bù zhīdào, nǐ qù wènwen lǎoshī ba.","",0.35),
  P(4,"…"),
  C("二、我26号回去。","Èr. Wǒ èrshíliù hào huíqù.","",0.5),
  P(4,"…"),
  C("三、别去了，我有两个本子，给你一个。","Sān. Bié qù le, wǒ yǒu liǎng ge běnzi, gěi nǐ yí gè.","",0.35),
  TH(),
  C("我也不知道，你去问问老师吧。","Wǒ yě bù zhīdào, nǐ qù wènwen lǎoshī ba.","",0.4), HOLD(),

  // Question 3
  C("我忘了拿本子，现在去商店买一个。","Wǒ wàngle ná běnzi, xiànzài qù shāngdiàn mǎi yí gè.","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、别去了，我有两个本子，给你一个。","Yī. Bié qù le, wǒ yǒu liǎng ge běnzi, gěi nǐ yí gè.","",0.35),
  P(4,"…"),
  C("二、都不是，是我自己。","Èr. Dōu bú shì, shì wǒ zìjǐ.","",0.5),
  P(4,"…"),
  C("三、我26号回去。","Sān. Wǒ èrshíliù hào huíqù.","",0.5),
  TH(),
  C("别去了，我有两个本子，给你一个。","Bié qù le, wǒ yǒu liǎng ge běnzi, gěi nǐ yí gè.","",0.4), HOLD(),

  // Question 4
  C("快要开学了，你什么时候回来？","Kuàiyào kāixué le, nǐ shénme shíhou huílái?","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、我26号回去。","Yī. Wǒ èrshíliù hào huíqù.","",0.5),
  P(4,"…"),
  C("二、我也不知道，你去问问老师吧。","Èr. Wǒ yě bù zhīdào, nǐ qù wènwen lǎoshī ba.","",0.35),
  P(4,"…"),
  C("三、都不是，是我自己。","Sān. Dōu bú shì, shì wǒ zìjǐ.","",0.5),
  TH(),
  C("我26号回去。","Wǒ èrshíliù hào huíqù.","",0.55), HOLD(),

  // Question 5
  C("女儿已经上小学了，她学习不错，她的本子我看过，错题不多，字写得也很好。","Nǚ'ér yǐjīng shàng xiǎoxué le, tā xuéxí búcuò, tā de běnzi wǒ kànguo, cuò tí bù duō, zì xiě de yě hěn hǎo.","",0.3),
  C("女儿现在：","Nǚ'ér xiànzài:","",0.55),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、很少写字。","Yī. Hěn shǎo xiě zì.","",0.5),
  P(4,"…"),
  C("二、是小学生。","Èr. Shì xiǎoxuéshēng.","",0.5),
  P(4,"…"),
  C("三、没有本子。","Sān. Méiyǒu běnzi.","",0.55),
  TH(),
  C("是小学生。","Shì xiǎoxuéshēng.","",0.55), HOLD(),

  // Question 6
  C("还有一个星期爷爷就要过生日了。爸爸想去饭馆给爷爷过生日，但是爷爷觉得饭馆的菜没有家里的好吃，所以今年还是在家里过。","Hái yǒu yí ge xīngqī yéye jiù yào guò shēngrì le. Bàba xiǎng qù fànguǎn gěi yéye guò shēngrì, dànshì yéye juéde fànguǎn de cài méiyǒu jiā li de hǎochī, suǒyǐ jīnnián háishi zài jiā li guò.","",0.28),
  C("爷爷要在家里过生日，因为：","Yéye yào zài jiā li guò shēngrì, yīnwèi:","",0.4),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、饭馆人太多。","Yī. Fànguǎn rén tài duō.","",0.55),
  P(4,"…"),
  C("二、爸爸不去饭馆。","Èr. Bàba bú qù fànguǎn.","",0.5),
  P(4,"…"),
  C("三、家里的菜好吃。","Sān. Jiā li de cài hǎochī.","",0.5),
  TH(),
  C("家里的菜好吃。","Jiā li de cài hǎochī.","",0.55), HOLD(),

  // Question 7
  C("就要开学了，儿子的笔、本子什么的都没有准备好。我在网上看了看，网上有很多，今天买完，明天就能送到家，真不错！","Jiù yào kāixué le, érzi de bǐ, běnzi shénmede dōu méiyǒu zhǔnbèi hǎo. Wǒ zài wǎngshang kànle kàn, wǎngshang yǒu hěn duō, jīntiān mǎiwán, míngtiān jiù néng sòngdào jiā, zhēn búcuò!","",0.28),
  C("他在网上给儿子买什么？","Tā zài wǎngshang gěi érzi mǎi shénme?","",0.45),
  HOLD("Réfléchis… puis ▶ pour entendre les choix.", 4),
  C("一、笔。","Yī. Bǐ.","",0.65),
  P(4,"…"),
  C("二、衣服。","Èr. Yīfu.","",0.6),
  P(4,"…"),
  C("三、电影票。","Sān. Diànyǐngpiào.","",0.55),
  TH(),
  C("笔。","Bǐ.","",0.7), HOLD(),

N("Bravo, exercice terminé ! Passe à la leçon 11."),
  C("再见！","Zàijiàn!","",0.65),
    ]; } },
  ]
});
