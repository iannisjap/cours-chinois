/* ============================================================
   HSK 1 · Leçon 3 — 我是中国人 Je suis chinois
   D'après « 新HSK教程 1 », leçon 3.
   Vocabulaire de la leçon :
   人 · 的 · 这 · 谁 · 女朋友 · 哪 · 国 · 她 · 喂 · 姐姐 ·
   工作 · 还 · 忙 · 吗 · 对 · 太 · 我们 · 想
   Noms propres : 中国 · 法国 · 中文 · 泰国
   Grammaire : phrase en 是 · particule 的 · question en 吗.
   Structure : leçon → 3 parties (les 3 dialogues du manuel).
   ============================================================ */
registerChapter({
  group: "hsk1",
  id: "hsk1-03",
  badge: 3,
  hanzi: "我是中国人",
  title: "Leçon 3 · Nationalités et questions",
  desc: "3 parties · 是 · 的 · 哪国人 · 吗",
  intro: "Leçon 3 du HSK 1 : dire sa nationalité avec le verbe 是, exprimer l'appartenance avec 的, demander « qui ? » et « de quel pays ? », et poser des questions oui/non avec 吗.",
  lessons: [

  // ================= PARTIE 1 =================
  { num:1, hanzi:"中国人", title:"Partie 1 · Dire sa nationalité", desc:"人 · 中国 · 法国 · 中文 · 的",
    build(){ return [
  N("Bienvenue dans la leçon 3 du HSK 1. Aujourd'hui : dire d'où l'on vient et poser des questions. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("我是中国人。","Wǒ shì Zhōngguó rén.","Je suis chinois.",0.5),
  C("我是法国人。我的中文老师也是中国人。","Wǒ shì Fǎguó rén. Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.","Je suis française. Mon professeur de chinois est chinois aussi.",0.5),
  N("D'abord, révision de la leçon 2 : dites « je suis étudiant »."),
  TH(),
  C("我是学生。","Wǒ shì xuéshēng.","Je suis étudiant.",0.6), HOLD(),

  N("« Une personne », « quelqu'un », se dit [[人|rén]]. Écoutez et répétez."),
  ...teach2("人","rén","personne"),
  N("« La Chine » se dit [[中国|Zhōngguó]]. Écoutez et répétez."),
  ...teach2("中国","Zhōngguó","la Chine"),
  N("Pour dire la nationalité, on ajoute simplement [[人|rén]] après le pays. « Un Chinois », mot à mot « personne de Chine » :"),
  ...teach2("中国人","Zhōngguó rén","un Chinois"),
  N("Souvenez-vous du verbe être, [[是|shì]]. Dites : « Je suis chinois. »"),
  TH(),
  C("我是中国人。","Wǒ shì Zhōngguó rén.","Je suis chinois.",0.6),
  C("我是中国人。","Wǒ shì Zhōngguó rén.","Je suis chinois.",0.6), HOLD(),

  N("« La France » se dit [[法国|Fǎguó]]. Écoutez et répétez."),
  ...teach2("法国","Fǎguó","la France"),
  N("À vous : dites « Je suis français. »"),
  TH(),
  C("我是法国人。","Wǒ shì Fǎguó rén.","Je suis français.",0.6),
  C("我是法国人。","Wǒ shì Fǎguó rén.","Je suis français.",0.6), HOLD(),

  N("Voici un petit mot très important : [[的|de]]. Il se place entre le possesseur et ce qu'il possède, comme notre « de ». Écoutez et répétez."),
  ...teach2("的","de","de (possession)"),
  N("« Le chinois », la langue, se dit [[中文|Zhōngwén]]. Ainsi « mon professeur de chinois » se dit : moi — de — chinois — professeur."),
  ...teach2("我的中文老师","wǒ de Zhōngwén lǎoshī","mon professeur de chinois"),
  N("Dites : « Mon professeur de chinois est chinois aussi. » Souvenez-vous, « aussi » se dit [[也|yě]]."),
  TH(),
  C("我的中文老师也是中国人。","Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.","Mon professeur de chinois est chinois aussi.",0.55),
  C("我的中文老师也是中国人。","Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.","Mon professeur de chinois est chinois aussi.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. Li Wen dit : « Je suis chinois. » À vous."),
  TH(),
  C("我是中国人。","Wǒ shì Zhōngguó rén.","Je suis chinois.",0.6),
  N("Bai Jiayue répond : « Je suis française. Mon professeur de chinois est chinois aussi. »"),
  TH(),
  C("我是法国人。我的中文老师也是中国人。","Wǒ shì Fǎguó rén. Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.","Je suis française. Mon professeur de chinois est chinois aussi.",0.55), HOLD(),

  // Révision
  N("Révision. Dites : je suis chinois."),
  TH(),
  C("我是中国人。","Wǒ shì Zhōngguó rén.","Je suis chinois.",0.6),
  N("Dites : mon professeur de chinois."),
  TH(),
  C("我的中文老师","wǒ de Zhōngwén lǎoshī","mon professeur de chinois",0.6),
  N("Fin de la partie 1. À la partie 2 : demander qui c'est et de quel pays."),
    ]; } },

  // ================= PARTIE 2 =================
  { num:2, hanzi:"哪国人", title:"Partie 2 · Qui ? De quel pays ?", desc:"这 · 谁 · 哪 · 国 · 她 · 女朋友",
    build(){ return [
  N("Partie 2. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("这是谁？","Zhè shì shéi?","Qui est-ce ?",0.5),
  C("这是我女朋友。","Zhè shì wǒ nǚpéngyou.","C'est ma petite amie.",0.5),
  C("你女朋友是哪国人？","Nǐ nǚpéngyou shì nǎ guó rén?","Ta petite amie est de quel pays ?",0.5),
  C("她也是泰国人。","Tā yě shì Tàiguó rén.","Elle est thaïlandaise aussi.",0.5),
  N("Révision : dites « je suis français »."),
  TH(),
  C("我是法国人。","Wǒ shì Fǎguó rén.","Je suis français.",0.6), HOLD(),

  N("« Ceci », « celui-ci », se dit [[这|zhè]]. Écoutez et répétez."),
  ...teach2("这","zhè","ceci, celui-ci"),
  N("« Qui » se dit [[谁|shéi]] — on peut aussi le prononcer « shuí ». Écoutez et répétez."),
  ...teach2("谁","shéi","qui"),
  N("Pour demander « Qui est-ce ? », on dit : ceci — être — qui ?"),
  ...teach2("这是谁？","Zhè shì shéi?","Qui est-ce ?"),
  N("À vous : demandez « Qui est-ce ? »"),
  TH(),
  C("这是谁？","Zhè shì shéi?","Qui est-ce ?",0.6), HOLD(),

  N("« Petite amie » se dit [[女朋友|nǚpéngyou]]. Écoutez et répétez."),
  ...teach2("女朋友","nǚpéngyou","petite amie"),
  N("Répondez : « C'est ma petite amie. »"),
  TH(),
  C("这是我女朋友。","Zhè shì wǒ nǚpéngyou.","C'est ma petite amie.",0.6),
  C("这是我女朋友。","Zhè shì wǒ nǚpéngyou.","C'est ma petite amie.",0.6), HOLD(),

  N("« Elle » se dit [[她|tā]]. Écoutez et répétez."),
  ...teach2("她","tā","elle"),
  N("Pour demander la nationalité, « quel » se dit [[哪|nǎ]] et « pays » se dit [[国|guó]]. « De quel pays ? », mot à mot « quel pays personne ? » :"),
  ...teach2("哪国人","nǎ guó rén","de quelle nationalité"),
  N("Demandez : « Ta petite amie, de quel pays est-elle ? »"),
  TH(),
  C("你女朋友是哪国人？","Nǐ nǚpéngyou shì nǎ guó rén?","Ta petite amie est de quel pays ?",0.55),
  C("你女朋友是哪国人？","Nǐ nǚpéngyou shì nǎ guó rén?","Ta petite amie est de quel pays ?",0.6), HOLD(),
  N("« La Thaïlande » se dit [[泰国|Tàiguó]]. Répondez : « Elle est thaïlandaise aussi. »"),
  TH(),
  C("她也是泰国人。","Tā yě shì Tàiguó rén.","Elle est thaïlandaise aussi.",0.6),
  C("她也是泰国人。","Tā yě shì Tàiguó rén.","Elle est thaïlandaise aussi.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. On vous montre une photo et on demande :"),
  C("这是谁？","Zhè shì shéi?","Qui est-ce ?",0.6),
  N("Répondez : « C'est ma petite amie. »"),
  TH(),
  C("这是我女朋友。","Zhè shì wǒ nǚpéngyou.","C'est ma petite amie.",0.6),
  N("On vous demande alors :"),
  C("你女朋友是哪国人？","Nǐ nǚpéngyou shì nǎ guó rén?","Ta petite amie est de quel pays ?",0.6),
  N("Répondez : « Elle est thaïlandaise aussi. »"),
  TH(),
  C("她也是泰国人。","Tā yě shì Tàiguó rén.","Elle est thaïlandaise aussi.",0.6), HOLD(),

  // Révision
  N("Révision. Demandez : qui est-ce ?"),
  TH(),
  C("这是谁？","Zhè shì shéi?","Qui est-ce ?",0.6),
  N("Demandez : tu es de quel pays ?"),
  TH(),
  C("你是哪国人？","Nǐ shì nǎ guó rén?","Tu es de quel pays ?",0.6),
  N("Fin de la partie 2. À la partie 3 : poser des questions avec le petit mot 吗."),
    ]; } },

  // ================= PARTIE 3 =================
  { num:3, hanzi:"忙吗", title:"Partie 3 · Poser une question avec 吗", desc:"吗 · 工作 · 忙 · 还 · 太 · 想 · 我们",
    build(){ return [
  N("Partie 3. Voici le dialogue que vous saurez tenir à la fin de cette partie. Écoutez."),
  C("你工作还忙吗？","Nǐ gōngzuò hái máng ma?","Es-tu encore occupé par le travail ?",0.5),
  C("对，还很忙。你也很忙吗？","Duì, hái hěn máng. Nǐ yě hěn máng ma?","Oui, encore très occupé. Et toi ?",0.5),
  N("Voici le moyen le plus simple de poser une question en chinois : le petit mot [[吗|ma]] à la fin d'une phrase. La phrase reste identique, on ajoute juste [[吗|ma]]. Écoutez et répétez."),
  ...teach2("吗","ma","(marque une question)"),
  N("« Occupé », « avoir beaucoup à faire », se dit [[忙|máng]]. Écoutez et répétez."),
  ...teach2("忙","máng","occupé"),
  N("« Tu es occupé » se dit [[你很忙|nǐ hěn máng]]. Pour en faire une question, on ajoute [[吗|ma]] : « Es-tu occupé ? »"),
  ...teach2("你忙吗？","Nǐ máng ma?","Es-tu occupé ?"),
  N("À vous : demandez « Es-tu occupé ? »"),
  TH(),
  C("你忙吗？","Nǐ máng ma?","Es-tu occupé ?",0.6), HOLD(),

  N("« Le travail » se dit [[工作|gōngzuò]]. Écoutez et répétez."),
  ...teach2("工作","gōngzuò","le travail"),
  N("« Encore », « toujours », se dit [[还|hái]]. Demandez : « Es-tu encore occupé par le travail ? » — mot à mot « ton travail encore occupé 吗 ? »"),
  ...teach2("你工作还忙吗？","Nǐ gōngzuò hái máng ma?","Es-tu encore occupé par le travail ?"),
  N("Pour répondre « oui », « c'est exact », on dit [[对|duì]]. Écoutez et répétez."),
  ...teach2("对","duì","oui, c'est exact"),
  N("Répondez : « Oui, encore très occupé. »"),
  TH(),
  C("对，还很忙。","Duì, hái hěn máng.","Oui, encore très occupé.",0.6),
  C("对，还很忙。","Duì, hái hěn máng.","Oui, encore très occupé.",0.6), HOLD(),

  N("« Trop », « excessivement », se dit [[太|tài]]. Pour dire « pas trop occupé » : moi — ne pas — trop — occupé."),
  ...teach2("我不太忙。","Wǒ bú tài máng.","Je ne suis pas trop occupé."),

  N("« Nous » se dit [[我们|wǒmen]] — vous reconnaissez [[们|men]], le pluriel. Écoutez et répétez."),
  ...teach2("我们","wǒmen","nous"),
  N("Le verbe « penser à quelqu'un », « manquer à », se dit [[想|xiǎng]]. « Tu nous manques », en chinois « nous te pensons beaucoup » :"),
  ...teach2("我们很想你。","Wǒmen hěn xiǎng nǐ.","Tu nous manques beaucoup."),
  N("Répondez : « Vous me manquez aussi. » — mot à mot « moi aussi pense à vous »."),
  TH(),
  C("我也想你们。","Wǒ yě xiǎng nǐmen.","Vous me manquez aussi.",0.6), HOLD(),

  // Rejeu du dialogue de référence entendu au tout début
  N("Rejouons le dialogue du début. « Allô » au téléphone se dit [[喂|wèi]], et « grande sœur » se dit [[姐姐|jiějie]]. La grande sœur demande :"),
  C("你工作还忙吗？","Nǐ gōngzuò hái máng ma?","Es-tu encore occupée par le travail ?",0.6),
  N("Répondez : « Oui, encore très occupée. Et toi, es-tu occupée aussi ? »"),
  TH(),
  C("对，还很忙。你也很忙吗？","Duì, hái hěn máng. Nǐ yě hěn máng ma?","Oui, encore très occupée. Et toi ?",0.55), HOLD(),

  // Révision finale de la leçon 3
  N("Révision finale de la leçon 3. Dites : je suis chinois."),
  TH(),
  C("我是中国人。","Wǒ shì Zhōngguó rén.","Je suis chinois.",0.6),
  N("Demandez : qui est-ce ?"),
  TH(),
  C("这是谁？","Zhè shì shéi?","Qui est-ce ?",0.6),
  N("Demandez : tu es de quel pays ?"),
  TH(),
  C("你是哪国人？","Nǐ shì nǎ guó rén?","Tu es de quel pays ?",0.6),
  N("Demandez : es-tu encore occupé par le travail ?"),
  TH(),
  C("你工作还忙吗？","Nǐ gōngzuò hái máng ma?","Es-tu encore occupé par le travail ?",0.6),
  N("Dites : tu me manques beaucoup."),
  TH(),
  C("我很想你。","Wǒ hěn xiǎng nǐ.","Tu me manques beaucoup.",0.6),
  N("Excellent ! Vous avez terminé la leçon 3. Vous savez parler des nationalités, poser des questions avec 吗 et utiliser 的. Réécoutez-la demain, puis passez à la leçon 4. 再见！"),
  C("再见！","Zàijiàn!","Au revoir !",0.6),
    ]; } },

  { num:4, hanzi:"练习", title:"Partie 4 · Exercice HSK officiel", desc:"Dans l'esprit du manuel «新HSK教程1»",
    build(){ return [
N("Pour finir cette leçon, un petit exercice de compréhension dans l'esprit du manuel officiel «新HSK教程1». Écoutez chaque phrase, réfléchissez à la question posée, puis répondez à voix haute avant la correction."),

  N("Première question. Écoutez bien."),
  C("我是法国人，你呢？","Wǒ shì Fǎguó rén, nǐ ne?","Je suis française, et toi ?",0.55),
  N("Question : de quelle nationalité est la personne qui parle ?"),
  TH(),
  N("Les trois choix étaient : A chinoise, B française, C thaïlandaise."),
  C("法国人","Fǎguó rén","française",0.6), HOLD(),

  N("Deuxième question."),
  C("你忙吗？我很忙，你呢？","Nǐ máng ma? Wǒ hěn máng, nǐ ne?","Tu es occupé ? Moi je suis très occupé, et toi ?",0.55),
  N("Question : que demande « 你忙吗 » ?"),
  TH(),
  N("Les trois choix étaient : A si tu as faim, B si tu es occupé, C comment tu t'appelles."),
  C("忙不忙","máng bu máng","si on est occupé",0.6), HOLD(),

  N("Bravo, exercice terminé ! Passez maintenant à la leçon 4."),
  C("再见！","Zàijiàn!","Au revoir !",0.65),
    ]; } },

  ]
});
