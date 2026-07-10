/* ============================================================
   HSK 1 · Leçon 2 — 我叫李文 Je m'appelle Li Wen
   D'après « 新HSK教程 1 », leçon 2.
   Vocabulaire de la leçon :
   请问 · 你 · 叫 · 什么 · 名字 · 我 · 不 · 是 · 对不起 ·
   没关系 · 很 · 高兴 · 认识 · 也
   Point de grammaire : ordre de base Sujet + Verbe + Complément.
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  id: "hsk1-02",
  badge: 2,
  hanzi: "我叫李文",
  title: "Leçon 2 · Se présenter",
  desc: "3 parties · 你叫什么名字 · 是 · 认识你很高兴",
  intro: "Leçon 2 du HSK 1 : demander et dire son nom, dire « je suis / je ne suis pas », s'excuser, et dire « enchanté ». Tu verras aussi l'ordre des mots en chinois : sujet, puis verbe, puis complément.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"你叫什么", title:"Partie 1 · Demander et dire son nom", desc:"请问 · 叫 · 什么 · 名字 · 我",
    build(){ return [
  N("Bienvenue dans la leçon 2 du HSK 1. Aujourd'hui : se présenter. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("请问，你叫什么名字？","Qǐngwèn, nǐ jiào shénme míngzi?","Excusez-moi, comment t'appelles-tu ?",0.5),
  C("我叫陈天中。","Wǒ jiào Chén Tiānzhōng.","Je m'appelle Chen Tianzhong.",0.5),
  N("D'abord, une révision de la leçon 1 : dites bonjour."),
  TH(),
  C("你好！","Nǐ hǎo!","Bonjour !",0.6), HOLD(),

  N("« Je », « moi », se dit [[我|wǒ]]. Écoutez et répétez."),
  ...teach2("我","wǒ","je, moi"),
  N("Le verbe « s'appeler » se dit [[叫|jiào]]. Écoutez et répétez."),
  ...teach2("叫","jiào","s'appeler"),
  N("Pour dire votre nom, l'ordre est : moi — s'appeler — le nom. Par exemple, l'étudiant Chen Tianzhong dit :"),
  ...teach2("我叫陈天中。","Wǒ jiào Chén Tiānzhōng.","Je m'appelle Chen Tianzhong."),
  N("Retenez cet ordre chinois : d'abord qui, puis l'action, puis le reste. Moi — s'appeler — mon nom. À vous, dites votre propre nom : « Je m'appelle… »"),
  HOLD("Dis-le avec TON nom, puis ▶"),

  N("Pour poser la question, « quoi », « quel », se dit [[什么|shénme]]. Écoutez et répétez."),
  ...teach2("什么","shénme","quoi, quel"),
  N("« Le nom » se dit [[名字|míngzi]]. Écoutez et répétez."),
  ...teach2("名字","míngzi","le nom, le prénom"),
  N("Souvenez-vous : « toi » se dit [[你|nǐ]]. Pour demander « comment t'appelles-tu ? », mot à mot « toi t'appelles quel nom ? » :"),
  ...teach2("你叫什么名字？","Nǐ jiào shénme míngzi?","Comment t'appelles-tu ?"),
  N("Pour être poli avant de poser une question, on ajoute [[请问|qǐngwèn]] au début — « puis-je demander ». Écoutez et répétez."),
  ...teach2("请问","qǐngwèn","puis-je demander, excusez-moi"),
  N("À vous : demandez poliment « Comment t'appelles-tu ? »"),
  TH(),
  C("请问，你叫什么名字？","Qǐngwèn, nǐ jiào shénme míngzi?","Excusez-moi, comment t'appelles-tu ?",0.55),
  C("请问，你叫什么名字？","Qǐngwèn, nǐ jiào shénme míngzi?","Excusez-moi, comment t'appelles-tu ?",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Le professeur Wang fait connaissance. Elle demande :"),
  C("请问，你叫什么名字？","Qǐngwèn, nǐ jiào shénme míngzi?","Excusez-moi, comment t'appelles-tu ?",0.6),
  N("Répondez avec le nom Chen Tianzhong."),
  TH(),
  C("我叫陈天中。","Wǒ jiào Chén Tiānzhōng.","Je m'appelle Chen Tianzhong.",0.6), HOLD(),

  // Révision
  N("Révision. Comment dit-on « je, moi » ?"),
  TH(),
  C("我","wǒ","je, moi",0.6),
  N("Demandez : comment t'appelles-tu ?"),
  TH(),
  C("你叫什么名字？","Nǐ jiào shénme míngzi?","Comment t'appelles-tu ?",0.6),
  N("Fin de la partie 1. À la partie 2 : dire « je suis » et s'excuser."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"我是", title:"Partie 2 · Être, ne pas, s'excuser", desc:"是 · 不 · 对不起 · 没关系",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你好，安妮！","Nǐ hǎo, Ānnī!","Bonjour, Annie !",0.5),
  C("我不是安妮，我是白家月。","Wǒ bú shì Ānnī, wǒ shì Bái Jiāyuè.","Je ne suis pas Annie, je suis Bai Jiayue.",0.5),
  C("对不起！","Duìbuqǐ!","Pardon !",0.5),
  C("没关系！","Méi guānxi!","Ce n'est rien !",0.5),
  N("Révision : demandez le nom de quelqu'un, poliment."),
  TH(),
  C("请问，你叫什么名字？","Qǐngwèn, nǐ jiào shénme míngzi?","Excusez-moi, comment t'appelles-tu ?",0.6), HOLD(),

  N("Le verbe « être » se dit [[是|shì]]. Écoutez et répétez."),
  ...teach2("是","shì","être"),
  N("Souvenez-vous de « étudiant », [[学生|xuéshēng]], vu à la leçon 1. Pour dire « je suis étudiant », l'ordre est : moi — être — étudiant."),
  ...teach2("我是学生。","Wǒ shì xuéshēng.","Je suis étudiant."),
  N("À vous : dites « je suis professeur ». Souvenez-vous, professeur se dit [[老师|lǎoshī]]."),
  TH(),
  C("我是老师。","Wǒ shì lǎoshī.","Je suis professeur.",0.6),
  C("我是老师。","Wǒ shì lǎoshī.","Je suis professeur.",0.6), HOLD(),

  N("Pour dire « ne pas », « non », on utilise [[不|bù]]. Écoutez et répétez."),
  ...teach2("不","bù","ne pas, non"),
  N("On le place juste avant le verbe. « Je ne suis pas étudiant » : moi — ne pas — être — étudiant."),
  ...teach2("我不是学生。","Wǒ bú shì xuéshēng.","Je ne suis pas étudiant."),
  N("À vous : dites « je ne suis pas professeur »."),
  TH(),
  C("我不是老师。","Wǒ bú shì lǎoshī.","Je ne suis pas professeur.",0.6), HOLD(),

  N("Maintenant, s'excuser. « Pardon », « désolé », se dit [[对不起|duìbuqǐ]]. Écoutez et répétez."),
  ...teach2("对不起","duìbuqǐ","pardon, désolé"),
  N("Pour répondre « ce n'est rien », « pas de souci », on dit [[没关系|méi guānxi]]. Écoutez et répétez."),
  ...teach2("没关系","méi guānxi","ce n'est rien, pas de souci"),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Chen Tianzhong se trompe de personne. Il croit parler à Annie et dit :"),
  C("你好，安妮！","Nǐ hǎo, Ānnī!","Bonjour, Annie !",0.6),
  N("Mais c'est Bai Jiayue. Elle corrige : « Je ne suis pas Annie, je suis Bai Jiayue. »"),
  TH(),
  C("我不是安妮，我是白家月。","Wǒ bú shì Ānnī, wǒ shì Bái Jiāyuè.","Je ne suis pas Annie, je suis Bai Jiayue.",0.55),
  C("我不是安妮，我是白家月。","Wǒ bú shì Ānnī, wǒ shì Bái Jiāyuè.","Je ne suis pas Annie, je suis Bai Jiayue.",0.6), HOLD(),
  N("Chen Tianzhong s'excuse. Dites : « Pardon ! »"),
  TH(),
  C("对不起！","Duìbuqǐ!","Pardon !",0.6),
  N("Et elle répond gentiment. Dites : « Ce n'est rien ! »"),
  TH(),
  C("没关系！","Méi guānxi!","Ce n'est rien !",0.6), HOLD(),

  // Révision
  N("Révision. Dites : je suis étudiant."),
  TH(),
  C("我是学生。","Wǒ shì xuéshēng.","Je suis étudiant.",0.6),
  N("Dites : je ne suis pas professeur."),
  TH(),
  C("我不是老师。","Wǒ bú shì lǎoshī.","Je ne suis pas professeur.",0.6),
  N("Excusez-vous, puis imaginez la réponse « ce n'est rien »."),
  TH(),
  C("对不起！","Duìbuqǐ!","Pardon !",0.6),
  C("没关系！","Méi guānxi!","Ce n'est rien !",0.6),
  N("Fin de la partie 2. À la partie 3 : dire « enchanté »."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"很高兴", title:"Partie 3 · Enchanté", desc:"很 · 高兴 · 认识 · 也",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你好！我叫李文。","Nǐ hǎo! Wǒ jiào Lǐ Wén.","Bonjour ! Je m'appelle Li Wen.",0.5),
  C("很高兴认识你。","Hěn gāoxìng rènshi nǐ.","Très heureux de te connaître.",0.5),
  C("认识你我也很高兴。","Rènshi nǐ wǒ yě hěn gāoxìng.","Moi aussi, je suis content de te connaître.",0.5),
  N("Révision : dites « je m'appelle », avec votre nom."),
  HOLD("Dis-le avec TON nom, puis ▶"),

  N("« Content », « heureux », se dit [[高兴|gāoxìng]]. Écoutez et répétez."),
  ...teach2("高兴","gāoxìng","content, heureux"),
  N("« Très » se dit [[很|hěn]], et se place avant l'adjectif. « Très content » :"),
  ...teach2("很高兴","hěn gāoxìng","très content"),
  N("Le verbe « connaître », « faire connaissance », se dit [[认识|rènshi]]. Écoutez et répétez."),
  ...teach2("认识","rènshi","connaître, faire connaissance"),
  N("Pour dire « enchanté de te connaître », on dit : très content — connaître — toi. Écoutez."),
  ...teach2("很高兴认识你。","Hěn gāoxìng rènshi nǐ.","Très heureux de te connaître."),
  N("À vous : dites « enchanté de te connaître »."),
  TH(),
  C("很高兴认识你。","Hěn gāoxìng rènshi nǐ.","Très heureux de te connaître.",0.6),
  C("很高兴认识你。","Hěn gāoxìng rènshi nǐ.","Très heureux de te connaître.",0.6), HOLD(),

  N("Pour répondre « moi aussi », on utilise [[也|yě]], « aussi », placé avant le verbe ou l'adjectif. Écoutez et répétez."),
  ...teach2("也","yě","aussi"),
  N("« Moi aussi, je suis content de te connaître » se dit, à la manière chinoise : te connaître, moi aussi très content."),
  ...teach2("认识你我也很高兴。","Rènshi nǐ wǒ yě hěn gāoxìng.","Moi aussi, je suis content de te connaître."),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Li Wen et Bai Jiayue se rencontrent. Li Wen dit : « Bonjour ! Je m'appelle Li Wen. » À vous."),
  TH(),
  C("你好！我叫李文。","Nǐ hǎo! Wǒ jiào Lǐ Wén.","Bonjour ! Je m'appelle Li Wen.",0.6),
  C("你好！我叫李文。","Nǐ hǎo! Wǒ jiào Lǐ Wén.","Bonjour ! Je m'appelle Li Wen.",0.6), HOLD(),
  N("Li Wen ajoute : « Très heureux de te connaître. » À vous."),
  TH(),
  C("很高兴认识你。","Hěn gāoxìng rènshi nǐ.","Très heureux de te connaître.",0.6),
  N("Et Bai Jiayue répond : « Moi aussi, je suis contente de te connaître. »"),
  TH(),
  C("认识你我也很高兴。","Rènshi nǐ wǒ yě hěn gāoxìng.","Moi aussi, je suis contente de te connaître.",0.6), HOLD(),

  // Révision finale de la leçon 2
  N("Révision finale de la leçon 2. Demandez poliment : comment t'appelles-tu ?"),
  TH(),
  C("请问，你叫什么名字？","Qǐngwèn, nǐ jiào shénme míngzi?","Excusez-moi, comment t'appelles-tu ?",0.6),
  N("Dites : je m'appelle Li Wen."),
  TH(),
  C("我叫李文。","Wǒ jiào Lǐ Wén.","Je m'appelle Li Wen.",0.6),
  N("Dites : je suis étudiant."),
  TH(),
  C("我是学生。","Wǒ shì xuéshēng.","Je suis étudiant.",0.6),
  N("Dites : je ne suis pas professeur."),
  TH(),
  C("我不是老师。","Wǒ bú shì lǎoshī.","Je ne suis pas professeur.",0.6),
  N("Et pour finir : très heureux de te connaître."),
  TH(),
  C("很高兴认识你。","Hěn gāoxìng rènshi nǐ.","Très heureux de te connaître.",0.6),
  N("Excellent ! Vous avez terminé la leçon 2. Vous savez vous présenter, dire ce que vous êtes, et faire connaissance. Réécoutez-la demain, puis passez à la leçon 3. 再见！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  ]
});
