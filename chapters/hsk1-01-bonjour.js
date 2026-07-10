/* ============================================================
   HSK 1 · Leçon 1 — 你好！ Bonjour, merci, au revoir
   D'après « 新HSK教程 1 », leçon 1 (AI小语，你好!).
   Vocabulaire de la leçon uniquement :
   你好 · 你 · 好 · 老师 · 您 · 大家 · 你们 · 们 · 学生 ·
   谢谢 · 不客气 · 同学 · 再见
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  id: "hsk1-01",
  badge: 1,
  hanzi: "你好",
  title: "Leçon 1 · Bonjour, merci, au revoir",
  desc: "3 parties · 你好 · 谢谢 · 再见",
  intro: "Première leçon du HSK 1. Trois parties : saluer, saluer poliment et en groupe, puis remercier et prendre congé. Fais-les dans l'ordre. La leçon s'arrête quand c'est à toi de parler (désactivable avec « Mode continu »).",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"你好", title:"Partie 1 · Saluer quelqu'un", desc:"你好 · 你 · 好 · 老师",
    build(){ return [
  N("Bienvenue dans la leçon 1 du HSK niveau 1. Aujourd'hui, les tout premiers mots : dire bonjour, merci et au revoir. Voici le petit dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你好！","Nǐ hǎo!","Bonjour !",0.5),
  P(1.5,"…"),
  C("老师，你好！","Lǎoshī, nǐ hǎo!","Bonjour, professeur !",0.5),
  N("Dans quelques minutes, vous pourrez tenir cette conversation vous-même. Apprenons les mots un par un. « Bonjour » se dit [[你好|nǐ hǎo]]. Écoutez et répétez."),
  ...teach2("你好","nǐ hǎo","bonjour"),
  N("Ce mot est fait de deux parties. [[你|nǐ]] veut dire « toi ». Répétez."),
  ...teach2("你","nǐ","toi, tu"),
  N("Et [[好|hǎo]] veut dire « bien », « bon ». Répétez."),
  ...teach2("好","hǎo","bien, bon"),
  N("Donc [[你好|nǐ hǎo]], mot à mot, c'est « toi bien ». À vous : dites bonjour."),
  TH(),
  C("你好！","Nǐ hǎo!","Bonjour !",0.6), P(2,"…"),
  C("你好！","Nǐ hǎo!","Bonjour !",0.6), HOLD(),

  N("Pour dire « professeur », « enseignant », on dit [[老师|lǎoshī]]. Écoutez et répétez."),
  ...teach2("老师","lǎoshī","professeur"),
  N("En chinois, on nomme souvent la personne avant de la saluer. À vous : dites « Bonjour, professeur ! »"),
  TH(),
  C("老师，你好！","Lǎoshī, nǐ hǎo!","Bonjour, professeur !",0.6), P(2.5,"…"),
  C("老师，你好！","Lǎoshī, nǐ hǎo!","Bonjour, professeur !",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Quelqu'un vous salue :"),
  C("你好！","Nǐ hǎo!","Bonjour !",0.6),
  N("Répondez en saluant votre professeur."),
  TH(),
  C("老师，你好！","Lǎoshī, nǐ hǎo!","Bonjour, professeur !",0.6), HOLD(),

  // Révision
  N("Petite révision. Comment dit-on « toi » ?"),
  TH(),
  C("你","nǐ","toi",0.6), P(1.5,"…"),
  N("Comment dit-on « bien » ?"),
  TH(),
  C("好","hǎo","bien",0.6), P(1.5,"…"),
  N("Et « bonjour » ?"),
  TH(),
  C("你好！","Nǐ hǎo!","Bonjour !",0.6), P(1.5,"…"),
  N("Parfait. C'est la fin de la partie 1. Passez à la partie 2 quand vous êtes prêt, ou réécoutez celle-ci demain."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"您好", title:"Partie 2 · Saluer poliment et en groupe", desc:"您 · 大家 · 你们 · 学生",
    build(){ return [
  N("Partie 2. Nous allons saluer poliment, et saluer plusieurs personnes à la fois. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("大家好！","Dàjiā hǎo!","Bonjour tout le monde !",0.5),
  P(1.5,"…"),
  C("老师，您好！","Lǎoshī, nín hǎo!","Bonjour, professeur !",0.5),
  P(1.5,"…"),
  C("你们好！","Nǐmen hǎo!","Bonjour à vous !",0.5),
  N("D'abord, une révision : dites bonjour."),
  TH(),
  C("你好！","Nǐ hǎo!","Bonjour !",0.6), HOLD(),

  N("Pour parler poliment à une personne âgée ou qu'on respecte, on ne dit pas [[你|nǐ]] mais [[您|nín]]. C'est le « vous » de politesse. Écoutez et répétez."),
  ...teach2("您","nín","vous (politesse)"),
  N("Donc, pour saluer poliment, on dit [[您好|nín hǎo]]. Écoutez et répétez."),
  ...teach2("您好！","Nín hǎo!","Bonjour ! (poli)"),
  N("À vous : saluez poliment votre professeur — dites « Professeur, bonjour ! » avec la forme de politesse."),
  TH(),
  C("老师，您好！","Lǎoshī, nín hǎo!","Bonjour, professeur ! (poli)",0.6), P(2.5,"…"),
  C("老师，您好！","Lǎoshī, nín hǎo!","Bonjour, professeur ! (poli)",0.6), HOLD(),

  N("Pour saluer tout le monde, un groupe, on dit [[大家|dàjiā]] — « tout le monde ». Écoutez et répétez."),
  ...teach2("大家","dàjiā","tout le monde"),
  N("« Bonjour tout le monde ! » se dit alors :"),
  ...teach2("大家好！","Dàjiā hǎo!","Bonjour tout le monde !"),

  N("Il existe aussi un mot pour dire « vous » à plusieurs personnes : [[你们|nǐmen]]. Écoutez et répétez."),
  ...teach2("你们","nǐmen","vous (pluriel)"),
  N("Le petit mot [[们|men]] à la fin marque le pluriel pour les personnes. [[你|nǐ]], toi ; [[你们|nǐmen]], vous. Dites : « Bonjour à vous tous ! »"),
  TH(),
  C("你们好！","Nǐmen hǎo!","Bonjour à vous !",0.6), HOLD(),

  N("« Un étudiant » se dit [[学生|xuéshēng]]. Écoutez et répétez."),
  ...teach2("学生","xuéshēng","étudiant"),
  N("Et « les étudiants », au pluriel, avec [[们|men]] :"),
  ...teach2("学生们","xuéshēngmen","les étudiants"),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Le professeur salue tout le monde :"),
  C("大家好！","Dàjiā hǎo!","Bonjour tout le monde !",0.6),
  N("Répondez-lui poliment : « Professeur, bonjour ! »"),
  TH(),
  C("老师，您好！","Lǎoshī, nín hǎo!","Bonjour, professeur !",0.6), P(2,"…"),
  N("Puis saluez les étudiants à votre tour. Dites : « Bonjour à vous ! »"),
  TH(),
  C("你们好！","Nǐmen hǎo!","Bonjour à vous !",0.6), HOLD(),

  // Révision
  N("Révision. Comment saluer poliment une seule personne ?"),
  TH(),
  C("您好！","Nín hǎo!","Bonjour ! (poli)",0.6), P(1.5,"…"),
  N("Comment saluer tout le monde ?"),
  TH(),
  C("大家好！","Dàjiā hǎo!","Bonjour tout le monde !",0.6), P(1.5,"…"),
  N("Comment dit-on « étudiant » ?"),
  TH(),
  C("学生","xuéshēng","étudiant",0.6), P(1.5,"…"),
  N("Très bien. Fin de la partie 2. À la partie 3 : remercier et se dire au revoir."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"谢谢", title:"Partie 3 · Remercier et prendre congé", desc:"谢谢 · 不客气 · 同学 · 再见",
    build(){ return [
  N("Partie 3. Nous allons apprendre à remercier et à dire au revoir. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("谢谢！","Xièxie!","Merci !",0.5),
  P(1.5,"…"),
  C("不客气！","Bú kèqi!","De rien !",0.5),
  P(1.5,"…"),
  C("同学们，再见！","Tóngxuémen, zàijiàn!","Au revoir, chers camarades !",0.5),
  N("« Merci » se dit [[谢谢|xièxie]]. Écoutez et répétez."),
  ...teach2("谢谢","xièxie","merci"),
  N("Pour répondre « je vous en prie », « de rien », on dit [[不客气|bú kèqi]]. Écoutez et répétez."),
  ...teach2("不客气","bú kèqi","de rien, je vous en prie"),
  N("À vous : quelqu'un vous aide, remerciez-le."),
  TH(),
  C("谢谢！","Xièxie!","Merci !",0.6), P(2,"…"),
  N("Et répondez-lui « de rien »."),
  TH(),
  C("不客气！","Bú kèqi!","De rien !",0.6), HOLD(),

  N("« Camarade de classe » se dit [[同学|tóngxué]]. Écoutez et répétez."),
  ...teach2("同学","tóngxué","camarade de classe"),
  N("Et « les camarades », au pluriel, avec [[们|men]] — c'est ainsi qu'un professeur s'adresse à sa classe :"),
  ...teach2("同学们","tóngxuémen","(chers) camarades"),

  N("Enfin, « au revoir » se dit [[再见|zàijiàn]]. Écoutez et répétez."),
  ...teach2("再见","zàijiàn","au revoir"),
  N("À vous : dites au revoir à votre professeur."),
  TH(),
  C("老师，再见！","Lǎoshī, zàijiàn!","Au revoir, professeur !",0.6), P(2,"…"),
  C("老师，再见！","Lǎoshī, zàijiàn!","Au revoir, professeur !",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Les étudiants remercient :"),
  C("谢谢！","Xièxie!","Merci !",0.6),
  N("Répondez : « De rien ! »"),
  TH(),
  C("不客气！","Bú kèqi!","De rien !",0.6), P(2,"…"),
  N("Puis saluez la classe en partant. Dites : « Au revoir, chers camarades ! »"),
  TH(),
  C("同学们，再见！","Tóngxuémen, zàijiàn!","Au revoir, chers camarades !",0.6), P(2,"…"),
  C("同学们，再见！","Tóngxuémen, zàijiàn!","Au revoir, chers camarades !",0.6), HOLD(),

  // Révision finale de toute la leçon 1
  N("Révision finale de la leçon 1. Dites bonjour."),
  TH(),
  C("你好！","Nǐ hǎo!","Bonjour !",0.6), P(1.5,"…"),
  N("Saluez poliment le professeur."),
  TH(),
  C("老师，您好！","Lǎoshī, nín hǎo!","Bonjour, professeur !",0.6), P(1.5,"…"),
  N("Saluez tout le monde."),
  TH(),
  C("大家好！","Dàjiā hǎo!","Bonjour tout le monde !",0.6), P(1.5,"…"),
  N("Remerciez."),
  TH(),
  C("谢谢！","Xièxie!","Merci !",0.6), P(1.5,"…"),
  N("Répondez « de rien »."),
  TH(),
  C("不客气！","Bú kèqi!","De rien !",0.6), P(1.5,"…"),
  N("Et pour finir, dites au revoir."),
  TH(),
  C("再见！","Zàijiàn!","Au revoir !",0.6), P(1.5,"…"),
  N("Félicitations, vous avez terminé la leçon 1 du HSK 1 ! Vous savez saluer, remercier et prendre congé. Réécoutez ces trois parties demain, puis passez à la leçon 2. 再见！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  ]
});
