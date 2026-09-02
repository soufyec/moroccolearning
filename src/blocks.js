/* Les briques : de quoi fabriquer ses propres phrases au lieu de reciter.
   MOTS = vocabulaire par famille, VERBES = les formes qui servent vraiment,
   MOULES = les structures a trous, avec des exemples deja remplis.        */

const MOTS = [
{ cat:"Les gens", items:[
  { id:"w1", fr:"un homme", phon:"rajel", ar:"راجل" },
  { id:"w2", fr:"une femme", phon:"mra", ar:"مرا" },
  { id:"w3", fr:"un garcon", phon:"weld", ar:"ولد" },
  { id:"w4", fr:"une fille", phon:"bent", ar:"بنت" },
  { id:"w5", fr:"les enfants", phon:"ddrari", ar:"الدراري" },
  { id:"w6", fr:"un ami, un copain", phon:"sa7b", ar:"صاحب" },
  { id:"w7", fr:"une amie, une copine", phon:"sa7ba", ar:"صاحبة" },
  { id:"w8", fr:"les voisins", phon:"jjiran", ar:"الجيران" },
  { id:"w9", fr:"les invites", phon:"ddyaf", ar:"الضياف" },
  { id:"w10", fr:"tout le monde", phon:"koulchi", ar:"كلشي" },
  { id:"w11", fr:"quelqu un", phon:"chi wa7ed", ar:"شي واحد" },
  { id:"w12", fr:"personne", phon:"7ta wa7ed", ar:"حتى واحد" }
]},
{ cat:"A table", items:[
  { id:"w20", fr:"la nourriture, le repas", phon:"lmakla", ar:"الماكلة" },
  { id:"w21", fr:"le pain", phon:"lkhobz", ar:"الخبز" },
  { id:"w22", fr:"l eau", phon:"lma", ar:"الما" },
  { id:"w23", fr:"le the a la menthe", phon:"atay b nne3na3", ar:"أتاي بالنعناع" },
  { id:"w24", fr:"le cafe", phon:"lqhwa", ar:"القهوة" },
  { id:"w25", fr:"le lait", phon:"l7lib", ar:"الحليب" },
  { id:"w26", fr:"le sucre", phon:"ssokkar", ar:"السكر" },
  { id:"w27", fr:"le sel", phon:"lmel7a", ar:"الملحة" },
  { id:"w28", fr:"l huile d olive", phon:"zzit dyal zzitoun", ar:"الزيت ديال الزيتون" },
  { id:"w29", fr:"la viande", phon:"lle7em", ar:"اللحم" },
  { id:"w30", fr:"le poulet", phon:"ddjaj", ar:"الدجاج" },
  { id:"w31", fr:"le poisson", phon:"l7out", ar:"الحوت" },
  { id:"w32", fr:"les legumes", phon:"lkhodra", ar:"الخضرة" },
  { id:"w33", fr:"les fruits", phon:"lfawakih", ar:"الفواكه" },
  { id:"w34", fr:"les olives", phon:"zzitoun", ar:"الزيتون" },
  { id:"w35", fr:"les oeufs", phon:"lbid", ar:"البيض" },
  { id:"w36", fr:"la soupe du soir", phon:"l7rira", ar:"الحريرة" },
  { id:"w37", fr:"les gateaux", phon:"l7lwa", ar:"الحلوة" },
  { id:"w38", fr:"une assiette", phon:"tebsil", ar:"طبسيل" },
  { id:"w39", fr:"un verre", phon:"kas", ar:"كاس" },
  { id:"w40", fr:"une cuillere", phon:"m3elqa", ar:"معلقة" },
  { id:"w41", fr:"la table", phon:"ttbla", ar:"الطبلة" },
  { id:"w42", fr:"chaud", phon:"skhoun", ar:"سخون" },
  { id:"w43", fr:"froid", phon:"bared", ar:"بارد" },
  { id:"w44", fr:"sucre", phon:"7lou", ar:"حلو" },
  { id:"w45", fr:"sale", phon:"mal7", ar:"مالح" }
]},
{ cat:"La maison", items:[
  { id:"w50", fr:"la maison", phon:"ddar", ar:"الدار" },
  { id:"w51", fr:"la chambre", phon:"lbit", ar:"البيت" },
  { id:"w52", fr:"le salon marocain", phon:"ssalon", ar:"الصالون" },
  { id:"w53", fr:"la cuisine", phon:"lkouzina", ar:"الكوزينة" },
  { id:"w54", fr:"les toilettes", phon:"ttwalit", ar:"التواليت" },
  { id:"w55", fr:"la porte", phon:"lbab", ar:"الباب" },
  { id:"w56", fr:"la cle", phon:"ssarout", ar:"الساروت" },
  { id:"w57", fr:"le lit", phon:"nnamousiya", ar:"الناموسية" },
  { id:"w58", fr:"la couverture", phon:"lbttaniya", ar:"البطانية" },
  { id:"w59", fr:"les vetements", phon:"l7wayj", ar:"الحوايج" },
  { id:"w60", fr:"les chaussures", phon:"ssbbat", ar:"الصباط" },
  { id:"w61", fr:"le telephone", phon:"tilifoun", ar:"تيليفون" },
  { id:"w62", fr:"l argent", phon:"lflous", ar:"الفلوس" },
  { id:"w63", fr:"un cadeau", phon:"cadeau", ar:"كادو", note:"Beaucoup d objets modernes gardent leur nom francais. En cas de doute, dis le mot francais." },
  { id:"w64", fr:"la lumiere", phon:"ddaw", ar:"الضو" }
]},
{ cat:"Le temps", items:[
  { id:"w70", fr:"aujourd hui", phon:"lyoum", ar:"اليوم" },
  { id:"w71", fr:"demain", phon:"ghedda", ar:"غدا" },
  { id:"w72", fr:"hier", phon:"lbare7", ar:"البارح" },
  { id:"w73", fr:"maintenant", phon:"daba", ar:"دابا" },
  { id:"w74", fr:"apres", phon:"men be3d", ar:"من بعد" },
  { id:"w75", fr:"avant", phon:"qbel", ar:"قبل" },
  { id:"w76", fr:"le matin", phon:"ssba7", ar:"الصباح" },
  { id:"w77", fr:"le soir", phon:"l3chiya", ar:"العشية" },
  { id:"w78", fr:"la nuit", phon:"llil", ar:"الليل" },
  { id:"w79", fr:"un jour", phon:"nhar", ar:"نهار" },
  { id:"w80", fr:"une semaine", phon:"simana", ar:"سيمانة" },
  { id:"w81", fr:"un mois", phon:"chher", ar:"شهر" },
  { id:"w82", fr:"une annee", phon:"3am", ar:"عام" },
  { id:"w83", fr:"tot", phon:"bekri", ar:"بكري" },
  { id:"w84", fr:"tard", phon:"m3ttel", ar:"معطل" },
  { id:"w85", fr:"toujours", phon:"dima", ar:"ديما" },
  { id:"w86", fr:"jamais", phon:"3emmer", ar:"عمر" }
]},
{ cat:"Dehors", items:[
  { id:"w90", fr:"la rue", phon:"zzenqa", ar:"الزنقة" },
  { id:"w91", fr:"le marche", phon:"ssouq", ar:"السوق" },
  { id:"w92", fr:"l ancienne medina", phon:"lmdina lqdima", ar:"المدينة القديمة" },
  { id:"w93", fr:"la mer", phon:"lb7ar", ar:"البحر" },
  { id:"w94", fr:"la montagne", phon:"jjbel", ar:"الجبل" },
  { id:"w95", fr:"la voiture", phon:"ttonobil", ar:"الطونوبيل" },
  { id:"w96", fr:"le train", phon:"ttran", ar:"التران" },
  { id:"w97", fr:"la gare", phon:"lagar", ar:"لاگار" },
  { id:"w98", fr:"le cafe (le lieu)", phon:"lqahwa", ar:"القهوة" },
  { id:"w99", fr:"la pharmacie", phon:"ffarmasyan", ar:"الفارماسيان" },
  { id:"w100", fr:"l hopital", phon:"ssbitar", ar:"السبيطار" },
  { id:"w101", fr:"la mosquee", phon:"jjame3", ar:"الجامع" },
  { id:"w102", fr:"le hammam", phon:"l7emmam", ar:"الحمام" },
  { id:"w103", fr:"la plage", phon:"chchatt", ar:"الشط" }
]},
{ cat:"Comment c est", items:[
  { id:"w110", fr:"bien, bon", phon:"mezyan", ar:"مزيان", note:"Au feminin : <b>mezyana</b>. La regle vaut pour presque tous les adjectifs : on ajoute a." },
  { id:"w111", fr:"mauvais", phon:"khayb", ar:"خايب" },
  { id:"w112", fr:"beau, joli", phon:"zwin", ar:"زوين" },
  { id:"w113", fr:"grand", phon:"kbir", ar:"كبير" },
  { id:"w114", fr:"petit", phon:"sghir", ar:"صغير" },
  { id:"w115", fr:"nouveau", phon:"jdid", ar:"جديد" },
  { id:"w116", fr:"vieux, ancien", phon:"qdim", ar:"قديم" },
  { id:"w117", fr:"cher", phon:"ghali", ar:"غالي" },
  { id:"w118", fr:"pas cher", phon:"rkhis", ar:"رخيص" },
  { id:"w119", fr:"facile", phon:"sahel", ar:"ساهل" },
  { id:"w120", fr:"difficile", phon:"s3ib", ar:"صعيب" },
  { id:"w121", fr:"fatigue", phon:"3ayyan", ar:"عيان" },
  { id:"w122", fr:"content", phon:"ferhan", ar:"فرحان" },
  { id:"w123", fr:"triste, contrarie", phon:"mqelleq", ar:"مقلق" },
  { id:"w124", fr:"gentil, charmant", phon:"drif", ar:"ظريف" },
  { id:"w125", fr:"delicieux", phon:"bnin", ar:"بنين" },
  { id:"w126", fr:"plein, rassasie", phon:"chab3an", ar:"شبعان" },
  { id:"w127", fr:"propre", phon:"nqi", ar:"نقي" },
  { id:"w128", fr:"loin", phon:"b3id", ar:"بعيد" },
  { id:"w129", fr:"pres", phon:"qrib", ar:"قريب" }
]},
{ cat:"Le corps et la sante", items:[
  { id:"w140", fr:"la tete", phon:"rras", ar:"الراس" },
  { id:"w141", fr:"le ventre", phon:"lkerch", ar:"الكرش" },
  { id:"w142", fr:"la main", phon:"lyedd", ar:"اليد" },
  { id:"w143", fr:"le pied", phon:"rrjel", ar:"الرجل" },
  { id:"w144", fr:"les yeux", phon:"l3inin", ar:"العينين" },
  { id:"w145", fr:"le coeur", phon:"lqelb", ar:"القلب" },
  { id:"w146", fr:"j ai mal a la tete", phon:"kaydrni rrasi", ar:"كيضرني راسي" },
  { id:"w147", fr:"je suis malade", phon:"ana mrida", ar:"أنا مريضة" },
  { id:"w148", fr:"le medicament", phon:"ddwa", ar:"الدوا" },
  { id:"w149", fr:"la sante", phon:"ss77a", ar:"الصحة" }
]},
{ cat:"Les petits mots qui relient", items:[
  { id:"w160", fr:"et", phon:"w", ar:"و" },
  { id:"w161", fr:"mais", phon:"wllakin", ar:"ولكن" },
  { id:"w162", fr:"parce que", phon:"7it", ar:"حيت" },
  { id:"w163", fr:"pourquoi ?", phon:"3lach ?", ar:"علاش؟" },
  { id:"w164", fr:"avec", phon:"m3a", ar:"مع" },
  { id:"w165", fr:"sans", phon:"bla", ar:"بلا" },
  { id:"w166", fr:"aussi", phon:"7ta ana", ar:"حتى أنا", note:"Litteralement moi aussi. <b>7ta nta</b> = toi aussi." },
  { id:"w167", fr:"ici", phon:"hna", ar:"هنا" },
  { id:"w168", fr:"la-bas", phon:"temma", ar:"تما" },
  { id:"w169", fr:"beaucoup", phon:"bezzaf", ar:"بزاف" },
  { id:"w170", fr:"un peu", phon:"chwiya", ar:"شوية" },
  { id:"w171", fr:"tout", phon:"kolchi", ar:"كلشي" },
  { id:"w172", fr:"rien", phon:"walou", ar:"والو" },
  { id:"w173", fr:"encore, en plus", phon:"zid", ar:"زيد" },
  { id:"w174", fr:"peut-etre", phon:"waqila", ar:"واقيلا" },
  { id:"w175", fr:"vite", phon:"daghya", ar:"دغيا" },
  { id:"w176", fr:"doucement", phon:"b chwiya", ar:"بشوية" },
  { id:"w177", fr:"ensemble", phon:"m3a b3diyatna", ar:"مع بعضياتنا" },
  { id:"w178", fr:"comme ca", phon:"hakka", ar:"هاكا" },
  { id:"w179", fr:"seulement", phon:"ghir", ar:"غير" }
]}
];

const VERBES = [
{ id:"v1", fr:"vouloir, aimer", note:"<b>bghit</b> a l air d un passe mais veut dire je veux, maintenant. <b>kanbghi</b> veut dire j aime.", forms:[
  { l:"je veux", phon:"bghit", ar:"بغيت" },
  { l:"tu veux (a une femme)", phon:"bghiti", ar:"بغيتي" },
  { l:"je ne veux pas", phon:"ma bghitch", ar:"ما بغيتش" },
  { l:"j aime, j aime bien", phon:"kanbghi", ar:"كنبغي" } ]},
{ id:"v2", fr:"manger", forms:[
  { l:"je mange", phon:"kanakoul", ar:"كناكل" },
  { l:"tu manges (a une femme)", phon:"katakli", ar:"كتاكلي" },
  { l:"j ai mange", phon:"klit", ar:"كليت" },
  { l:"je vais manger", phon:"ghadi nakoul", ar:"غادي ناكل" },
  { l:"mange ! (a une femme)", phon:"kouli", ar:"كلي" } ]},
{ id:"v3", fr:"boire", forms:[
  { l:"je bois", phon:"kancherb", ar:"كنشرب" },
  { l:"j ai bu", phon:"chrebt", ar:"شربت" },
  { l:"je vais boire", phon:"ghadi ncherb", ar:"غادي نشرب" },
  { l:"bois ! (a une femme)", phon:"chrbi", ar:"شربي" } ]},
{ id:"v4", fr:"aller", forms:[
  { l:"je vais (d habitude)", phon:"kanmchi", ar:"كنمشي" },
  { l:"je suis allee", phon:"mchit", ar:"مشيت" },
  { l:"je vais y aller", phon:"ghadi nemchi", ar:"غادي نمشي" },
  { l:"tu vas ou ? (a une femme)", phon:"fin ghadya ?", ar:"فين غادية؟" },
  { l:"allez, on y va", phon:"yallah nemchiw", ar:"يالله نمشيو" } ]},
{ id:"v5", fr:"venir", forms:[
  { l:"je viens", phon:"kanji", ar:"كنجي" },
  { l:"je suis venue", phon:"jit", ar:"جيت" },
  { l:"viens ! (a une femme)", phon:"aji", ar:"أجي" },
  { l:"il vient / elle vient", phon:"kayji / katji", ar:"كيجي، كتجي" } ]},
{ id:"v6", fr:"faire", forms:[
  { l:"je fais", phon:"kandir", ar:"كندير" },
  { l:"j ai fait", phon:"dert", ar:"درت" },
  { l:"je vais faire", phon:"ghadi ndir", ar:"غادي ندير" },
  { l:"qu est-ce que tu fais ? (a une femme)", phon:"chnou katdiri ?", ar:"شنو كتديري؟" } ]},
{ id:"v7", fr:"dire", forms:[
  { l:"je dis", phon:"kangoul", ar:"كنقول" },
  { l:"j ai dit", phon:"gult", ar:"كلت" },
  { l:"dis-moi (a une femme)", phon:"gouli liya", ar:"قولي ليا" },
  { l:"comment on dit ?", phon:"kifach kaygoulou ?", ar:"كيفاش كيقولو؟" } ]},
{ id:"v8", fr:"parler", forms:[
  { l:"je parle", phon:"kanhder", ar:"كنهضر" },
  { l:"j ai parle", phon:"hdert", ar:"هضرت" },
  { l:"parle doucement (a une femme)", phon:"hdri b chwiya", ar:"هضري بشوية" } ]},
{ id:"v9", fr:"comprendre", forms:[
  { l:"je comprends", phon:"kanfhem", ar:"كنفهم" },
  { l:"j ai compris", phon:"fhemt", ar:"فهمت" },
  { l:"je n ai pas compris", phon:"ma fhemtch", ar:"ما فهمتش" },
  { l:"tu as compris ? (a une femme)", phon:"fhemti ?", ar:"فهمتي؟" } ]},
{ id:"v10", fr:"savoir, connaitre", forms:[
  { l:"je sais, je connais", phon:"kan3ref", ar:"كنعرف" },
  { l:"je ne sais pas", phon:"ma kan3refch", ar:"ما كنعرفش" },
  { l:"tu sais ? (a une femme)", phon:"kat3rfi ?", ar:"كتعرفي؟" } ]},
{ id:"v11", fr:"pouvoir", forms:[
  { l:"je peux", phon:"nqder", ar:"نقدر" },
  { l:"je ne peux pas", phon:"ma nqderch", ar:"ما نقدرش" },
  { l:"tu peux ? (a une femme)", phon:"tqdri ?", ar:"تقدري؟" } ]},
{ id:"v12", fr:"donner", forms:[
  { l:"donne-moi (a une femme)", phon:"3tini", ar:"عطيني" },
  { l:"j ai donne", phon:"3tit", ar:"عطيت" },
  { l:"je vais te donner", phon:"ghadi n3tik", ar:"غادي نعطيك" } ]},
{ id:"v13", fr:"prendre", forms:[
  { l:"je prends", phon:"kanakhod", ar:"كناخد" },
  { l:"j ai pris", phon:"khdit", ar:"خديت" },
  { l:"prends ! (a une femme)", phon:"khdi", ar:"خدي" } ]},
{ id:"v14", fr:"voir, regarder", forms:[
  { l:"je vois, je regarde", phon:"kanchouf", ar:"كنشوف" },
  { l:"j ai vu", phon:"cheft", ar:"شفت" },
  { l:"regarde ! (a une femme)", phon:"chofi", ar:"شوفي" },
  { l:"on se voit", phon:"nchoufou", ar:"نشوفو" } ]},
{ id:"v15", fr:"entendre, ecouter", forms:[
  { l:"j entends", phon:"kansme3", ar:"كنسمع" },
  { l:"j ai entendu", phon:"sme3t", ar:"سمعت" },
  { l:"ecoute ! (a une femme)", phon:"sem3i", ar:"سمعي" } ]},
{ id:"v16", fr:"dormir", forms:[
  { l:"je dors", phon:"kann3es", ar:"كنعس" },
  { l:"j ai dormi", phon:"n3est", ar:"نعست" },
  { l:"je vais dormir", phon:"ghadi nn3es", ar:"غادي نعس" } ]},
{ id:"v17", fr:"sortir", forms:[
  { l:"je sors", phon:"kankhrej", ar:"كنخرج" },
  { l:"je suis sortie", phon:"khrejt", ar:"خرجت" },
  { l:"on sort ?", phon:"nkhrjou ?", ar:"نخرجو؟" } ]},
{ id:"v18", fr:"acheter", forms:[
  { l:"j achete", phon:"kanchri", ar:"كنشري" },
  { l:"j ai achete", phon:"chrit", ar:"شريت" },
  { l:"je veux acheter", phon:"bghit nchri", ar:"بغيت نشري" } ]},
{ id:"v19", fr:"travailler", forms:[
  { l:"je travaille", phon:"kankhdem", ar:"كنخدم" },
  { l:"j ai travaille", phon:"khdemt", ar:"خدمت" },
  { l:"tu travailles ou ? (a une femme)", phon:"fin katkhedmi ?", ar:"فين كتخدمي؟" } ]},
{ id:"v20", fr:"apprendre", forms:[
  { l:"j apprends", phon:"kant3allem", ar:"كنتعلم" },
  { l:"j ai appris", phon:"t3allemt", ar:"تعلمت" },
  { l:"je veux apprendre", phon:"bghit nt3allem", ar:"بغيت نتعلم" } ]},
{ id:"v21", fr:"aider", forms:[
  { l:"je t aide", phon:"kan3awnek", ar:"كنعاونك" },
  { l:"je peux t aider ?", phon:"n3awnek ?", ar:"نعاونك؟" },
  { l:"aide-moi (a une femme)", phon:"3awnini", ar:"عاونيني" } ]},
{ id:"v22", fr:"attendre", forms:[
  { l:"j attends", phon:"kantsenna", ar:"كنتسنى" },
  { l:"je t attends", phon:"kantsennak", ar:"كنتسناك" },
  { l:"attends ! ", phon:"tsenna", ar:"تسنى" } ]},
{ id:"v23", fr:"oublier", forms:[
  { l:"j ai oublie", phon:"nsit", ar:"نسيت" },
  { l:"je vais oublier", phon:"ghadi nensa", ar:"غادي ننسى" },
  { l:"n oublie pas (a une femme)", phon:"ma tnsaych", ar:"ما تنسايش" } ]},
{ id:"v24", fr:"plaire", note:"On ne dit pas j aime ca mais ca m a plu : <b>3jebni</b>. C est la tournure la plus utilisee du quotidien.", forms:[
  { l:"ca m a plu, j aime ca", phon:"3jebni", ar:"عجبني" },
  { l:"ca ne m a pas plu", phon:"ma 3jebnich", ar:"ما عجبنيش" },
  { l:"ca te plait ?", phon:"3ejbek ?", ar:"عجبك؟" } ]}
];

const MOULES = [
{ id:"x1", fr:"Je veux ___", phon:"bghit ___", note:"Le moule le plus rentable de tous. Colle n importe quel mot derriere.", ex:[
  { fr:"Je veux du the", phon:"bghit atay", ar:"بغيت أتاي" },
  { fr:"Je veux de l eau", phon:"bghit lma", ar:"بغيت الما" },
  { fr:"Je ne veux pas de sucre", phon:"ma bghitch sokkar", ar:"ما بغيتش سكر" } ]},
{ id:"x2", fr:"Je veux (faire) ___", phon:"bghit n___", note:"Devant un verbe, on met <b>n</b> : bghit + n + le verbe.", ex:[
  { fr:"Je veux aller au marche", phon:"bghit nemchi l ssouq", ar:"بغيت نمشي للسوق" },
  { fr:"Je veux apprendre le darija", phon:"bghit nt3allem ddarija", ar:"بغيت نتعلم الدارجة" },
  { fr:"Je veux dormir un peu", phon:"bghit nn3es chwiya", ar:"بغيت نعس شوية" } ]},
{ id:"x3", fr:"Je vais ___ (bientot)", phon:"ghadi n___", note:"<b>ghadi</b> est le futur. Il ne change jamais, seul le verbe change.", ex:[
  { fr:"Je vais revenir vite", phon:"ghadi nrje3 daghya", ar:"غادي نرجع دغيا" },
  { fr:"Je vais manger avec vous", phon:"ghadi nakoul m3akoum", ar:"غادي ناكل معاكم" },
  { fr:"Je vais t appeler demain", phon:"ghadi n3ayet lik ghedda", ar:"غادي نعيط ليك غدا" } ]},
{ id:"x4", fr:"Je ___ (tous les jours)", phon:"kan___", note:"<b>kan</b> devant le verbe = ce que je fais d habitude. <b>kat</b> = ce que tu fais.", ex:[
  { fr:"Je mange des legumes", phon:"kanakoul lkhodra", ar:"كناكل الخضرة" },
  { fr:"J habite a Paris", phon:"kanskoun f bariz", ar:"كنسكن فباريز" },
  { fr:"Je travaille beaucoup", phon:"kankhdem bezzaf", ar:"كنخدم بزاف" } ]},
{ id:"x5", fr:"Je ne ___ pas", phon:"ma ___ ch", note:"La negation encadre le verbe, exactement comme ne pas en francais.", ex:[
  { fr:"Je ne mange pas de viande", phon:"ma kanakoulch lle7em", ar:"ما كناكلش اللحم" },
  { fr:"Je n ai pas compris", phon:"ma fhemtch", ar:"ما فهمتش" },
  { fr:"Je ne sais pas", phon:"ma kan3refch", ar:"ما كنعرفش" } ]},
{ id:"x6", fr:"J ai ___", phon:"3endi ___", note:"Il n y a pas de verbe avoir : <b>3endi</b> veut dire chez moi. <b>3endek</b> = chez toi.", ex:[
  { fr:"J ai une soeur", phon:"3endi khti we7da", ar:"عندي ختي وحدة" },
  { fr:"J ai une allergie", phon:"3endi 7asasiya", ar:"عندي حساسية" },
  { fr:"Je n ai pas d argent sur moi", phon:"ma 3endich lflous", ar:"ما عنديش الفلوس" } ]},
{ id:"x7", fr:"Est-ce que ___ ?", phon:"wach ___ ?", note:"<b>wach</b> ouvre une question fermee. Le reste de la phrase ne bouge pas.", ex:[
  { fr:"Est-ce que tu veux du the ?", phon:"wach bghiti atay ?", ar:"واش بغيتي أتاي؟" },
  { fr:"Est-ce que c est loin ?", phon:"wach b3id ?", ar:"واش بعيد؟" },
  { fr:"Est-ce que c est a toi ?", phon:"wach hada dyalek ?", ar:"واش هادا ديالك؟" } ]},
{ id:"x8", fr:"Ou est ___ ?", phon:"fin kayn ___ ?", note:"<b>kayn</b> pour un mot masculin, <b>kayna</b> pour un feminin, <b>kaynin</b> pour un pluriel.", ex:[
  { fr:"Ou est le marche ?", phon:"fin kayn ssouq ?", ar:"فين كاين السوق؟" },
  { fr:"Ou sont les toilettes ?", phon:"fin kayna ttwalit ?", ar:"فين كاينة التواليت؟" },
  { fr:"Ou sont les enfants ?", phon:"fin kaynin ddrari ?", ar:"فين كاينين الدراري؟" } ]},
{ id:"x9", fr:"Quoi, qu est-ce que ___ ?", phon:"chnou ___ ?", ex:[
  { fr:"Qu est-ce que c est ?", phon:"chnou hada ?", ar:"شنو هادا؟" },
  { fr:"Comment tu t appelles ?", phon:"chnou smitek ?", ar:"شنو سميتك؟" },
  { fr:"Qu est-ce que tu fais ?", phon:"chnou katdiri ?", ar:"شنو كتديري؟" } ]},
{ id:"x10", fr:"Combien ___ ?", phon:"ch7al ___ ?", ex:[
  { fr:"Ca coute combien ?", phon:"ch7al hada ?", ar:"شحال هادا؟" },
  { fr:"Tu as quel age ?", phon:"ch7al f 3emrek ?", ar:"شحال فعمرك؟" },
  { fr:"Combien de temps ?", phon:"ch7al dyal lweqt ?", ar:"شحال ديال الوقت؟" } ]},
{ id:"x11", fr:"Pourquoi ___ ? Parce que ___", phon:"3lach ___ ? / 7it ___", ex:[
  { fr:"Pourquoi comme ca ?", phon:"3lach hakka ?", ar:"علاش هاكا؟" },
  { fr:"Parce que je suis fatiguee", phon:"7it ana 3ayyana", ar:"حيت أنا عيانة" },
  { fr:"Parce que je t aime", phon:"7it kanbghik", ar:"حيت كنبغيك" } ]},
{ id:"x12", fr:"___ a moi, ___ a toi", phon:"___ dyali / dyalek", note:"<b>dyal</b> = de. dyali, dyalek, dyalou (a lui), dyalkoum (a vous).", ex:[
  { fr:"C est mon telephone", phon:"hada tilifoun dyali", ar:"هادا تيليفون ديالي" },
  { fr:"Votre maison est belle", phon:"ddar dyalkoum zwina", ar:"الدار ديالكم زوينة" },
  { fr:"C est le the de maman", phon:"hada atay dyal mama", ar:"هادا أتاي ديال ماما" } ]},
{ id:"x13", fr:"C est ___", phon:"hada / hadi ___", note:"<b>hada</b> pour un mot masculin, <b>hadi</b> pour un feminin. Pas de verbe etre.", ex:[
  { fr:"C est delicieux", phon:"hadi bnina", ar:"هادي بنينة" },
  { fr:"C est trop cher", phon:"hada ghali bezzaf", ar:"هادا غالي بزاف" },
  { fr:"C est ma premiere fois", phon:"hadi lewwla merra", ar:"هادي اللولا مرة" } ]},
{ id:"x14", fr:"Je suis ___", phon:"ana ___", note:"Toi, tu ajoutes un a a la fin de l adjectif : ferhan devient ferhana.", ex:[
  { fr:"Je suis contente", phon:"ana ferhana", ar:"أنا فرحانة" },
  { fr:"Je suis fatiguee", phon:"ana 3ayyana", ar:"أنا عيانة" },
  { fr:"Je suis rassasiee", phon:"ana chab3ana", ar:"أنا شبعانة" } ]},
{ id:"x15", fr:"Il me faut ___", phon:"khessni ___", note:"Marche avec un mot ou avec un verbe.", ex:[
  { fr:"Il me faut de l eau", phon:"khessni lma", ar:"خصني الما" },
  { fr:"J ai besoin de dormir", phon:"khessni nn3es", ar:"خصني نعس" },
  { fr:"Je dois y aller maintenant", phon:"khessni nemchi daba", ar:"خصني نمشي دابا" } ]},
{ id:"x16", fr:"___ m a plu", phon:"3jebni ___", ex:[
  { fr:"J aime le Maroc", phon:"3jebni lmaghrib", ar:"عجبني المغرب" },
  { fr:"J ai adore le tajine", phon:"3jebni ttajin", ar:"عجبني الطاجين" },
  { fr:"Je n aime pas le piquant", phon:"ma 3jebnich l7arr", ar:"ما عجبنيش الحار" } ]},
{ id:"x17", fr:"Un peu de ___ / beaucoup de ___", phon:"chwiya dyal ___ / bezzaf dyal ___", ex:[
  { fr:"Un peu d eau", phon:"chwiya dyal lma", ar:"شوية ديال الما" },
  { fr:"Un tout petit peu de sucre", phon:"chwiya sghira dyal sokkar", ar:"شوية صغيرة ديال السكر" },
  { fr:"Il y a beaucoup de monde", phon:"kayn bezzaf dyal nnas", ar:"كاين بزاف ديال الناس" } ]},
{ id:"x18", fr:"S il te plait, ___", phon:"3afak, ___", note:"L imperatif a une femme finit souvent par i : <b>3awdi</b>, <b>hdri</b>, <b>chofi</b>.", ex:[
  { fr:"Passe-moi le pain s il te plait", phon:"3afak, 3tini lkhobz", ar:"عافاك عطيني الخبز" },
  { fr:"Repete s il te plait", phon:"3afak, 3awdi", ar:"عافاك عاودي" },
  { fr:"Parle doucement s il te plait", phon:"3afak, hdri b chwiya", ar:"عافاك هضري بشوية" } ]},
{ id:"x19", fr:"Comment ___ ?", phon:"kifach ___ ?", ex:[
  { fr:"Comment on dit ca ?", phon:"kifach kaygoulou hadi ?", ar:"كيفاش كيقولو هادي؟" },
  { fr:"Comment on y va ?", phon:"kifach nemchiw l temma ?", ar:"كيفاش نمشيو لتما؟" },
  { fr:"Comment tu fais ca ?", phon:"kifach katdiri hadi ?", ar:"كيفاش كتديري هادي؟" } ]},
{ id:"x20", fr:"Comme ___", phon:"b7al ___", note:"Sert a comparer, et c est une machine a compliments.", ex:[
  { fr:"Tu es comme ma mere", phon:"nti b7al mmi", ar:"نتي بحال مي" },
  { fr:"C est bon comme celui de maman", phon:"bnin b7al dyal mama", ar:"بنين بحال ديال ماما" },
  { fr:"Je veux parler comme toi", phon:"bghit nhder b7alek", ar:"بغيت نهضر بحالك" } ]}
];
