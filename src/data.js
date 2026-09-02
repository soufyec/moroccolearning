/* Dar Darija — contenu. Tout est pense pour l oral :
   fr   = ce que ca veut dire
   phon = ce que tu prononces (lecture a la francaise)
   ar   = arabe, invisible dans l app, sert uniquement a la voix du telephone
   alt  = la variante quand tu parles a une femme (ou a un homme)
   note = ce qu il faut savoir pour ne pas se planter                        */

const GUIDE = {
  sounds: [
    { sym:"7", name:"le h souffle", how:"Un h expire du fond de la gorge, comme quand tu embues une vitre, mais plus serre. Ce n est PAS le h muet francais.", ex:"l7amdoullah (Dieu merci), s7ab (ami), 7lib (lait)" },
    { sym:"kh", name:"la jota", how:"Le ch allemand de Bach, ou la jota espagnole. Comme si tu raclais doucement.", ex:"khoya (mon frere), lkhobz (le pain), sba7 lkhir (bonjour)" },
    { sym:"gh", name:"le r francais", how:"Bonne nouvelle : c est exactement le r de Paris, grasseye. Tu l as deja.", ex:"lmaghrib (le Maroc), ghadi (je vais), ghali (cher)" },
    { sym:"r", name:"le r roule", how:"Roule-le comme en espagnol ou en italien. Ne le prononce jamais a la francaise, sinon tu dis gh.", ex:"mer7ba (bienvenue), darija, bared (froid)" },
    { sym:"3", name:"le son du fond", how:"Le plus dur. Serre la gorge comme si tu allais tousser, et fais un a. Personne ne t en voudra si tu le rates : dis un a bien ouvert.", ex:"3afak (s il te plait), 3likoum, 3ayyana (fatiguee)" },
    { sym:"q", name:"le k profond", how:"Un k prononce tout au fond, la ou tu avales. Different du k normal.", ex:"qhwa (cafe), nqder (je peux), waqila (peut-etre)" },
    { sym:"ou", name:"le ou", how:"Toujours le ou francais, jamais le u de tu. Le son u n existe pas en darija.", ex:"chokran, kouli (mange), lyoum (aujourd hui)" },
    { sym:"e", name:"le e avale", how:"Un e tres court, comme dans le petit dit vite. Souvent on l entend a peine.", ex:"kanhder (je parle), sme7 liya (pardon)" }
  ],
  rules: [
    { t:"Zero ecriture, zero grammaire", d:"Tu n apprends pas une langue, tu apprends des blocs entiers a sortir au bon moment. Ne cherche jamais pourquoi ca se dit comme ca." },
    { t:"Toujours a voix haute", d:"Une phrase lue des yeux ne sort pas de ta bouche le jour J. Repete-la 3 fois a voix haute, meme dans le metro, meme en chuchotant." },
    { t:"La voix de ton copain est ta reference", d:"Sur chaque fiche, le bouton micro enregistre sa voix. La voix du telephone lit de l arabe classique : c est une bequille, pas un modele. Fais-lui enregistrer un theme par semaine." },
    { t:"Comprendre avant de parler", d:"En famille, 80 pour cent du temps tu ecoutes. Le theme Ce qu ils vont te dire vaut plus que tous les autres : travaille-le des la semaine 1." },
    { t:"12 minutes par jour battent 2 heures le dimanche", d:"La memoire a besoin de repetitions espacees, pas de marathons. L app te ressort chaque phrase juste avant que tu l oublies." },
    { t:"Le vocal quotidien", d:"Chaque soir, envoie un vocal de 20 secondes a ton copain avec les phrases du jour. C est la seule facon de passer de je sais dire a je dis." },
    { t:"Cinq mots te sauvent partout", d:"bezzaf (beaucoup), chwiya (un peu), safi (ca suffit, c est bon), wakha (d accord), nchallah (si Dieu veut). Glisse-les partout, ca sonne immediatement local." },
    { t:"Vise 30 phrases, pas la perfection", d:"Sa famille ne va pas te noter. Dix phrases dites de travers avec le sourire valent mille fois une grammaire parfaite et un silence gene." }
  ]
};

const PROGRAM = [
  { n:1, title:"Les sons, puis saluer", desc:"Le guide des sons, les 12 phrases de survie, saluer et prendre conge.", themes:["urgence","salamat"] },
  { n:2, title:"Se presenter, remercier", desc:"Dire qui tu es, et les formules de politesse qui reviennent 50 fois par jour.", themes:["premiere","politesse"] },
  { n:3, title:"A table, premiere moitie", desc:"Le vrai terrain de jeu. Compliment sur la cuisine, refuser de se resservir.", themes:["table","ecoute"] },
  { n:4, title:"Comprendre et se debloquer", desc:"Ce qu ils te disent, et comment demander de repeter sans bloquer la conversation.", themes:["ecoute","comprendre"] },
  { n:5, title:"Papoter, la famille", desc:"Les questions faciles a poser, et comment appeler chaque personne.", themes:["smalltalk","famille"] },
  { n:6, title:"Chez eux, et le coeur", desc:"S installer, aider, complimenter, dire ce que tu ressens.", themes:["maison","sentiments"] },
  { n:7, title:"Dehors et au telephone", desc:"Taxi, souk, chiffres et prix. Puis les appels avec sa mere.", themes:["dehors","telephone"] },
  { n:8, title:"Les grandes occasions", desc:"Fetes, mariage, naissance, condoleances. Et la revision generale.", themes:["occasions","amour"] }
];

const THEMES = [
{
  id:"urgence", name:"Les 12 de survie", desc:"Si tu n apprends que ca, tu tiens deja une soiree entiere.", key:true,
  items:[
    { id:"u1", fr:"Bonjour a tous (partout, tout le temps)", phon:"salam 3likoum", ar:"السلام عليكم", note:"La salutation passe-partout. On te repondra <b>wa 3likoum salam</b>." },
    { id:"u2", fr:"Merci", phon:"chokran", ar:"شكرا", note:"Version plus chaleureuse, tres appreciee : <b>barakallahou fik</b> (que Dieu te benisse)." },
    { id:"u3", fr:"S il te plait", phon:"3afak", ar:"عافاك", note:"Se colle a la fin de n importe quelle demande." },
    { id:"u4", fr:"Oui / D accord", phon:"iyeh / wakha", ar:"إيه، واخا", note:"<b>wakha</b> est le d accord national. Tu peux l utiliser pour tout." },
    { id:"u5", fr:"Non, merci", phon:"lla, chokran", ar:"لا شكرا", note:"Un simple <b>lla</b> seul peut sembler sec : ajoute toujours chokran." },
    { id:"u6", fr:"Pardon, excuse-moi", phon:"sme7 liya", ar:"سمح ليا", alt:{ l:"a une femme", phon:"sem7i liya", ar:"سمحي ليا" } },
    { id:"u7", fr:"Je n ai pas compris", phon:"ma fhemtch", ar:"ما فهمتش", note:"A dire sans culpabiliser, c est la phrase que tu utiliseras le plus." },
    { id:"u8", fr:"Repete doucement, s il te plait", phon:"3awed b chwiya 3afak", ar:"عاود بشوية عافاك", alt:{ l:"a une femme", phon:"3awdi b chwiya 3afak", ar:"عاودي بشوية عافاك" } },
    { id:"u9", fr:"C est delicieux", phon:"bnin bezzaf", ar:"بنين بزاف", note:"La phrase qui te fait adopter en trois secondes. Dis-la fort, a table." },
    { id:"u10", fr:"J ai assez mange, merci", phon:"chb3et, barakallahou fik", ar:"شبعت، بارك الله فيك", note:"Il faudra la repeter au moins quatre fois. C est normal, ca fait partie du jeu." },
    { id:"u11", fr:"Je suis tres contente d etre ici", phon:"ana ferhana bezzaf", ar:"أنا فرحانة بزاف", note:"<b>ferhana</b> parce que tu es une femme. Un homme dirait ferhan." },
    { id:"u12", fr:"J apprends le darija, petit a petit", phon:"kant3allem ddarija, chwiya b chwiya", ar:"كنتعلم الدارجة، شوية بشوية", note:"Sors-la des le debut : apres ca, tout le monde te parlera plus lentement." }
  ]
},
{
  id:"salamat", name:"Saluer et partir", desc:"Arriver, embrasser tout le monde, et repartir proprement.",
  items:[
    { id:"s1", fr:"Bonjour a tous", phon:"salam 3likoum", ar:"السلام عليكم" },
    { id:"s2", fr:"Et a toi le salut (la reponse)", phon:"wa 3likoum salam", ar:"وعليكم السلام", note:"Quand quelqu un entre et dit salam 3likoum, c est ta reponse automatique." },
    { id:"s3", fr:"Bonjour (le matin)", phon:"sba7 lkhir", ar:"صباح الخير", note:"Reponse : <b>sba7 nnour</b> (matin de lumiere)." },
    { id:"s4", fr:"Bonsoir", phon:"msa lkhir", ar:"مسا الخير", note:"Reponse : <b>msa nnour</b>." },
    { id:"s5", fr:"Comment tu vas ?", phon:"kif dayer ?", ar:"كيف داير؟", alt:{ l:"a une femme", phon:"kif dayra ?", ar:"كيف دايرة؟" }, note:"A sa mere, c est donc <b>kif dayra</b>. Retiens la version femme en premier." },
    { id:"s6", fr:"Ca va ? (le plus simple)", phon:"labas ?", ar:"لاباس؟", note:"Marche pour homme, femme, groupe. Si tu ne dois en retenir qu une, c est celle-la." },
    { id:"s7", fr:"Ca va bien, Dieu merci", phon:"labas, l7amdoullah", ar:"لاباس الحمد لله", note:"On repond presque toujours l7amdoullah, meme quand ca ne va pas." },
    { id:"s8", fr:"Et toi ?", phon:"w nta ?", ar:"ونتا؟", alt:{ l:"a une femme", phon:"w nti ?", ar:"ونتي؟" } },
    { id:"s9", fr:"Bienvenue !", phon:"mer7ba", ar:"مرحبا", note:"On te le dira 20 fois en arrivant. Reponds <b>chokran, Allah ybarek fik</b>." },
    { id:"s10", fr:"Comment va la maisonnee ?", phon:"kif dayrin f ddar ?", ar:"كيف دايرين فالدار؟", note:"On demande des nouvelles de toute la famille avant de parler de quoi que ce soit. Ne saute jamais cette etape." },
    { id:"s11", fr:"Tu m as manque", phon:"twa77echtek", ar:"توحشتك", note:"Enorme effet sur la belle-mere. Vraiment." },
    { id:"s12", fr:"Au revoir", phon:"bslama", ar:"بسلامة" },
    { id:"s13", fr:"Prends soin de toi", phon:"thella f rassek", ar:"تهلا فراسك", alt:{ l:"a une femme", phon:"thelli f rassek", ar:"تهلي فراسك" }, note:"Le vrai au revoir affectueux marocain." },
    { id:"s14", fr:"Bonne nuit", phon:"tesba7 3la khir", ar:"تصبح على خير", alt:{ l:"a une femme", phon:"tesb7i 3la khir", ar:"تصبحي على خير" } },
    { id:"s15", fr:"On se voit demain", phon:"nchoufou ghedda", ar:"نشوفو غدا" },
    { id:"s16", fr:"A tout a l heure", phon:"nchoufek men be3d", ar:"نشوفك من بعد" },
    { id:"s17", fr:"Salue tout le monde de ma part", phon:"sellem liya 3la koulchi", ar:"سلم ليا على كلشي", note:"Se dit a la fin de chaque appel telephonique, sans exception." },
    { id:"s18", fr:"Que Dieu te garde", phon:"Allah ykhllik", ar:"الله يخليك", note:"Sert de merci, de s il te plait et de je t aime bien. Le couteau suisse." }
  ]
},
{
  id:"premiere", name:"La premiere rencontre", desc:"Qui tu es, d ou tu viens, et pourquoi ton darija est encore bancal.",
  items:[
    { id:"p1", fr:"Je m appelle Chloe", phon:"smiti Chloe", ar:"سميتي كلوي", note:"Remplace par ton prenom. <b>smiti</b> = mon nom est." },
    { id:"p2", fr:"Comment tu t appelles ?", phon:"chnou smitek ?", ar:"شنو سميتك؟" },
    { id:"p3", fr:"Enchantee", phon:"metcharrfa", ar:"متشرفة", note:"Toi tu dis metcharrfa (femme). Lui dirait metcharref." },
    { id:"p4", fr:"Je suis francaise", phon:"ana fransawiya", ar:"أنا فرنساوية" },
    { id:"p5", fr:"Je viens de France", phon:"ana jaya men fransa", ar:"أنا جاية من فرنسا", note:"<b>jaya</b> au feminin. Un homme dirait jay." },
    { id:"p6", fr:"J habite a Paris", phon:"kanskoun f bariz", ar:"كنسكن فباريز" },
    { id:"p7", fr:"J apprends le darija", phon:"kant3allem ddarija", ar:"كنتعلم الدارجة" },
    { id:"p8", fr:"Je parle un tout petit peu", phon:"kanhder ghir chwiya", ar:"كنهضر غير شوية" },
    { id:"p9", fr:"Je comprends un peu", phon:"kanfhem chwiya", ar:"كنفهم شوية" },
    { id:"p10", fr:"Je ne parle pas encore bien", phon:"mazal ma kanhderch mezyan", ar:"مازال ما كنهضرش مزيان" },
    { id:"p11", fr:"Excuse-moi pour mon darija", phon:"sme7 liya, ddarija dyali mazal", ar:"سمح ليا، الدارجة ديالي مازال", note:"Ca fait toujours rire, et ca desamorce tout." },
    { id:"p12", fr:"C est ma premiere fois au Maroc", phon:"hadi lewwla merra li jit l lmaghrib", ar:"هادي اللولا مرة لي جيت للمغرب" },
    { id:"p13", fr:"Je travaille dans...", phon:"kankhdem f...", ar:"كنخدم ف", note:"Complete avec le mot francais, tout le monde comprendra." },
    { id:"p14", fr:"J ai trente ans", phon:"3endi tlatin 3am", ar:"عندي تلاتين عام" },
    { id:"p15", fr:"Je suis la copine de Youssef", phon:"ana s7abtou dyal Youssef", ar:"أنا صاحبتو ديال يوسف", note:"Selon la famille, on presente plutot une <b>khatiba</b> (fiancee). Demande a ton copain le mot qu il veut que tu emploies devant SA famille : c est lui qui connait le terrain." },
    { id:"p16", fr:"Je suis contente de vous rencontrer", phon:"ferhana bach t3arreft bikoum", ar:"فرحانة باش تعرفت بيكم" }
  ]
},
{
  id:"politesse", name:"Merci, pardon, et Dieu", desc:"Les formules qui reviennent toutes les trois phrases. Sans elles, tu sonnes froide.",
  items:[
    { id:"po1", fr:"Merci", phon:"chokran", ar:"شكرا" },
    { id:"po2", fr:"Que Dieu te benisse (merci chaleureux)", phon:"barakallahou fik", ar:"بارك الله فيك", note:"Le vrai merci du quotidien. Plus fort que chokran." },
    { id:"po3", fr:"De rien", phon:"bla jmil", ar:"بلا جميل", note:"Litteralement sans faveur. Reponse standard a un merci." },
    { id:"po4", fr:"S il te plait", phon:"3afak", ar:"عافاك" },
    { id:"po5", fr:"Ce n est rien, pas de souci", phon:"makayn mouchkil", ar:"ما كاين مشكيل" },
    { id:"po6", fr:"C est bon, ca suffit, on arrete la", phon:"safi", ar:"صافي", note:"Mot magique. Sert a dire c est bon, fini, d accord, arrete. Utilise-le partout." },
    { id:"po7", fr:"Si Dieu veut", phon:"nchallah", ar:"إن شاء الله", note:"S ajoute a TOUT ce qui n est pas encore arrive. On revient l an prochain, nchallah." },
    { id:"po8", fr:"Dieu merci", phon:"l7amdoullah", ar:"الحمد لله", note:"Apres avoir mange, apres ca va bien, apres une bonne nouvelle." },
    { id:"po9", fr:"Au nom de Dieu (avant de commencer)", phon:"bsmillah", ar:"بسم الله", note:"Se dit avant de manger, de monter en voiture, de commencer quelque chose. Ne pas le dire a table se remarque." },
    { id:"po10", fr:"Que Dieu benisse (compliment sans mauvais oeil)", phon:"tbarkallah", ar:"تبارك الله", note:"<b>Regle d or</b> : quand tu complimentes quelqu un ou un enfant, ajoute tbarkallah, sinon le compliment peut etre percu comme portant le mauvais oeil. Ta maison est belle, tbarkallah." },
    { id:"po11", fr:"Bon courage (a quelqu un qui travaille)", phon:"Allah y3awn", ar:"الله يعاون" },
    { id:"po12", fr:"A ta sante ! (apres un repas, un bain, du neuf)", phon:"bsse77a", ar:"بالصحة", note:"On te le dira si tu sors de la douche ou si tu portes un vetement neuf. Reponse : <b>Allah y3tik ssa77a</b>." },
    { id:"po13", fr:"Que Dieu te donne la sante (la reponse)", phon:"Allah y3tik ssa77a", ar:"الله يعطيك الصحة" },
    { id:"po14", fr:"Je suis desolee", phon:"ana asfa", ar:"أنا آسفة", note:"Au feminin. Un homme dit ana asef." },
    { id:"po15", fr:"Avec plaisir", phon:"b koull sourour", ar:"بكل سرور" },
    { id:"po16", fr:"Que Dieu te garde tes parents (merci profond)", phon:"Allah ykhelli lik lwalidin", ar:"الله يخلي ليك الوالدين", note:"A sortir quand quelqu un t a vraiment aidee. Effet garanti." }
  ]
},
{
  id:"table", name:"A table", desc:"La ou tout se joue vraiment. Complimenter, refuser poliment, survivre au quatrieme service.", key:true,
  items:[
    { id:"t1", fr:"Au nom de Dieu (avant de manger)", phon:"bsmillah", ar:"بسم الله", note:"On le dit avant la premiere bouchee. Personne ne t en voudra si tu l oublies, mais le dire te fait gagner dix points d un coup." },
    { id:"t2", fr:"Dieu merci (a la fin du repas)", phon:"l7amdoullah", ar:"الحمد لله" },
    { id:"t3", fr:"C est delicieux", phon:"bnin bezzaf", ar:"بنين بزاف" },
    { id:"t4", fr:"Que Dieu benisse tes mains", phon:"Allah ybarek f yeddik", ar:"الله يبارك في يديك", note:"LE compliment a la personne qui a cuisine. Dis-le en la regardant. C est celui qui compte." },
    { id:"t5", fr:"Tu cuisines vraiment bien", phon:"katTayybi mezyan bezzaf", ar:"كتطيبي مزيان بزاف", alt:{ l:"a un homme", phon:"katTayyeb mezyan bezzaf", ar:"كتطيب مزيان بزاف" } },
    { id:"t6", fr:"J ai assez mange", phon:"chb3et", ar:"شبعت" },
    { id:"t7", fr:"Vraiment, je n en peux plus", phon:"chb3et bezzaf, Allah ykhllik", ar:"شبعت بزاف، الله يخليك", note:"La deuxieme ligne de defense quand on te resert malgre chb3et." },
    { id:"t8", fr:"C etait beaucoup, merci", phon:"kan bezzaf, barakallahou fik", ar:"كان بزاف، بارك الله فيك" },
    { id:"t9", fr:"Encore un tout petit peu alors", phon:"chwiya sghira barka", ar:"شوية صغيرة بركا", note:"La sortie diplomatique : accepter une micro-portion vaut mieux qu un refus net. Refuser trop fermement peut vexer." },
    { id:"t10", fr:"Je ne mange pas de viande", phon:"ma kanakoulch lle7em", ar:"ما كناكلش اللحم" },
    { id:"t11", fr:"Je suis vegetarienne", phon:"ana nabatiya", ar:"أنا نباتية", note:"Prepare-toi : le concept surprend souvent. Ajoute <b>kanakoul lkhoDra ou lhout</b> (je mange legumes et poisson) si c est ton cas." },
    { id:"t12", fr:"Je suis allergique a...", phon:"3endi 7asasiya men...", ar:"عندي حساسية من", note:"A faire traduire par ton copain pour l aliment precis, et a repeter a chaque visite." },
    { id:"t13", fr:"Un peu d eau, s il te plait", phon:"chwiya dyal lma 3afak", ar:"شوية ديال الما عافاك" },
    { id:"t14", fr:"Du the, volontiers", phon:"atay, b3da", ar:"أتاي بعدا", note:"<b>atay</b> = le the a la menthe. Refuser le the est presque impossible, accepte." },
    { id:"t15", fr:"Sans sucre, s il te plait", phon:"bla sokkar 3afak", ar:"بلا سكر عافاك", note:"Le the marocain est TRES sucre. Cette phrase peut te sauver." },
    { id:"t16", fr:"Passe-moi le pain, s il te plait", phon:"3tini lkhobz 3afak", ar:"عطيني الخبز عافاك", alt:{ l:"a une femme", phon:"3tini lkhobz 3afak", ar:"عطيني الخبز عافاك" } },
    { id:"t17", fr:"C est un peu piquant pour moi", phon:"harr chwiya 3liya", ar:"حار شوية عليا" },
    { id:"t18", fr:"J adore le tajine", phon:"kanbghi ttajin bezzaf", ar:"كنبغي الطاجين بزاف" },
    { id:"t19", fr:"Le couscous du vendredi est le meilleur", phon:"seksou dyal jjem3a a7sen 7aja", ar:"سكسو ديال الجمعة أحسن حاجة", note:"Le couscous du vendredi est un rituel familial. Le mentionner montre que tu as compris quelque chose d important." },
    { id:"t20", fr:"Je peux t aider ?", phon:"n3awnek ?", ar:"نعاونك؟", note:"Propose-le en debarrassant. Refuse-le d abord, insiste une fois, puis laisse faire." },
    { id:"t21", fr:"Je peux faire la vaisselle", phon:"nghsel lma3oun", ar:"نغسل الماعون" },
    { id:"t22", fr:"Ou je pose ca ?", phon:"fin nkhelli hada ?", ar:"فين نخلي هادا؟" },
    { id:"t23", fr:"Bon appetit (a la sante)", phon:"bsse77a", ar:"بالصحة" },
    { id:"t24", fr:"C etait le meilleur repas de ma vie", phon:"hada a7sen makla klit f 7yati", ar:"هادا أحسن ماكلة كليت فحياتي", note:"Un peu excessif, donc parfait. A garder pour le grand repas du premier jour." }
  ]
},
{
  id:"ecoute", name:"Ce qu ILS vont te dire", desc:"Le theme le plus rentable : tu ne le diras jamais, tu vas l entendre tous les jours.", key:true,
  items:[
    { id:"e1", fr:"Bienvenue chez toi !", phon:"mer7ba bik, hadi darek", ar:"مرحبا بيك، هادي دارك", note:"Litteralement c est ta maison. Reponds <b>chokran, Allah ybarek fik</b>." },
    { id:"e2", fr:"Mange ! Mange !", phon:"kouli ! kouli !", ar:"كلي! كلي!", note:"Adresse a une femme. Tu vas l entendre en boucle." },
    { id:"e3", fr:"Tu n as rien mange !", phon:"ma klitich walou !", ar:"ما كليتيش والو!", note:"Prononce alors que tu as mange trois assiettes. C est un rituel, pas un reproche." },
    { id:"e4", fr:"Reprends-en un peu", phon:"zidi chwiya", ar:"زيدي شوية" },
    { id:"e5", fr:"Ne sois pas timide, fais comme chez toi", phon:"ma t7echmich", ar:"ما تحشميش", note:"On te le dira des que tu refuses quelque chose." },
    { id:"e6", fr:"Tu veux du the ?", phon:"wach bghiti atay ?", ar:"واش بغيتي أتاي؟" },
    { id:"e7", fr:"Tu vas bien ?", phon:"labas 3lik ?", ar:"لاباس عليك؟" },
    { id:"e8", fr:"Tu as bien dormi ?", phon:"n3esti mezyan ?", ar:"نعستي مزيان؟" },
    { id:"e9", fr:"Le Maroc te plait ?", phon:"3ejbek lmaghrib ?", ar:"عجبك المغرب؟", note:"Reponse prete : <b>3ejbni bezzaf, zwin bezzaf</b>." },
    { id:"e10", fr:"Tu sais cuisiner ?", phon:"wach kat3rfi tTayybi ?", ar:"واش كتعرفي تطيبي؟", note:"Question classique. Reponse honnete et souriante : <b>chwiya, wllakin bghit nt3allem</b> (un peu, mais je veux apprendre)." },
    { id:"e11", fr:"Tu fais quoi comme travail ?", phon:"chnou katkhedmi ?", ar:"شنو كتخدمي؟" },
    { id:"e12", fr:"Tu restes combien de temps ?", phon:"ch7al ghadi tbqay ?", ar:"شحال غادي تبقاي؟" },
    { id:"e13", fr:"Doucement, petit a petit", phon:"chwiya b chwiya", ar:"شوية بشوية", note:"Ce qu on te dira sur ton darija. C est un encouragement." },
    { id:"e14", fr:"Ma fille (affectueux)", phon:"a benti", ar:"ابنتي", note:"Si sa mere t appelle benti, c est gagne." },
    { id:"e15", fr:"Que Dieu vous garde l un pour l autre", phon:"Allah ykhellikoum lb3diyatkoum", ar:"الله يخليكم لبعضياتكم", note:"La benediction qu on adresse a un couple. Reponds <b>amin, Allah ybarek fik</b>." },
    { id:"e16", fr:"Que ca vous arrive a vous aussi ! (dans un mariage)", phon:"3qbal 3endkoum", ar:"عقبال عندكم", note:"On vous le dira dix fois par mariage. Reponds en riant <b>amin</b>." },
    { id:"e17", fr:"Allez, on y va", phon:"yallah", ar:"يالله", note:"Signifie aussi viens, depeche, allons-y, et parfois a peine." },
    { id:"e18", fr:"C est bon ? C est fini ?", phon:"safi ?", ar:"صافي؟" },
    { id:"e19", fr:"Ce n est pas possible ! (surprise)", phon:"ma ymkench !", ar:"ما يمكنش!" },
    { id:"e20", fr:"C est genial, c est fort !", phon:"wa3ra !", ar:"وعرة!", note:"Argot tres courant chez les jeunes : terrible au sens positif." },
    { id:"e21", fr:"Assieds-toi", phon:"glssi", ar:"كلسي" },
    { id:"e22", fr:"Que Dieu te benisse, tu es adorable", phon:"tbarkallah 3lik, drifa", ar:"تبارك الله عليك، ظريفة" }
  ]
}
,
{
  id:"comprendre", name:"Quand tu es perdue", desc:"Comment demander de repeter, gagner du temps, et rester dans la conversation.",
  items:[
    { id:"c1", fr:"Je n ai pas compris", phon:"ma fhemtch", ar:"ما فهمتش" },
    { id:"c2", fr:"Repete, s il te plait", phon:"3awdi 3afak", ar:"عاودي عافاك", alt:{ l:"a un homme", phon:"3awed 3afak", ar:"عاود عافاك" } },
    { id:"c3", fr:"Doucement, moins vite", phon:"b chwiya 3afak", ar:"بشوية عافاك" },
    { id:"c4", fr:"Qu est-ce que ca veut dire ?", phon:"chnou kat3ni hadi ?", ar:"شنو كتعني هادي؟" },
    { id:"c5", fr:"Comment on dit ... en darija ?", phon:"kifach kaygoulou ... b ddarija ?", ar:"كيفاش كيقولو بالدارجة؟", note:"La phrase qui transforme n importe quel diner en cours de langue. Ils adorent." },
    { id:"c6", fr:"Tu peux le dire en francais ?", phon:"tqder tgoulha b lfransawiya ?", ar:"تقدر تقولها بالفرنساوية؟" },
    { id:"c7", fr:"Attends, je reflechis", phon:"tsenna, kanfekker", ar:"تسنى، كنفكر" },
    { id:"c8", fr:"Encore une fois", phon:"merra khra 3afak", ar:"مرة أخرى عافاك" },
    { id:"c9", fr:"Je ne connais pas ce mot", phon:"ma kan3refch had lkelma", ar:"ما كنعرفش هاد الكلمة" },
    { id:"c10", fr:"Comment ? (quand tu n as rien saisi)", phon:"na3am ?", ar:"نعم؟", note:"Plus poli que quoi. Ton montant, sourire, ca marche toujours." },
    { id:"c11", fr:"Demande a Youssef, il va t expliquer", phon:"sewwel Youssef, ghadi ychre7 lik", ar:"سول يوسف، غادي يشرح ليك" },
    { id:"c12", fr:"Je vais apprendre, promis", phon:"ghadi nt3allem, nchallah", ar:"غادي نتعلم، إن شاء الله" },
    { id:"c13", fr:"Un peu seulement", phon:"ghir chwiya", ar:"غير شوية" },
    { id:"c14", fr:"C est difficile mais j aime ca", phon:"s3ib, wllakin kayjebni", ar:"صعيب، ولكن كيعجبني" }
  ]
},
{
  id:"smalltalk", name:"Papoter", desc:"Les questions faciles a poser pour ne pas rester muette dans le salon.",
  items:[
    { id:"k1", fr:"Comment va ta sante ?", phon:"kif ss77a ?", ar:"كيف الصحة؟", note:"On demande la sante avant tout le reste, surtout aux personnes agees." },
    { id:"k2", fr:"Comment va la famille ?", phon:"labas 3la l3a2ila ?", ar:"لاباس على العائلة؟" },
    { id:"k3", fr:"Quoi de neuf ?", phon:"chnou lakhbar ?", ar:"شنو الأخبار؟" },
    { id:"k4", fr:"Tu as mange ?", phon:"klliti ?", ar:"كليتي؟", note:"Question d affection, pas de logistique. On te la posera tout le temps." },
    { id:"k5", fr:"Il fait chaud aujourd hui", phon:"lyoum skhoun", ar:"اليوم سخون" },
    { id:"k6", fr:"Il fait froid ce soir", phon:"had llil bared", ar:"هاد الليل بارد" },
    { id:"k7", fr:"Le Maroc est magnifique", phon:"lmaghrib zwin bezzaf", ar:"المغرب زوين بزاف" },
    { id:"k8", fr:"J aime beaucoup Marrakech", phon:"kanbghi merrakch bezzaf", ar:"كنبغي مراكش بزاف" },
    { id:"k9", fr:"Tu habites ou ?", phon:"fin katskoni ?", ar:"فين كتسكني؟", alt:{ l:"a un homme", phon:"fin katskoun ?", ar:"فين كتسكن؟" } },
    { id:"k10", fr:"Tu as des enfants ?", phon:"3endek drari ?", ar:"عندك دراري؟" },
    { id:"k11", fr:"Quel age il a ?", phon:"ch7al f 3emrou ?", ar:"شحال فعمرو؟", alt:{ l:"pour une fille", phon:"ch7al f 3emrha ?", ar:"شحال فعمرها؟" } },
    { id:"k12", fr:"Il est mignon, que Dieu le benisse", phon:"zwin, tbarkallah 3lih", ar:"زوين، تبارك الله عليه", note:"N oublie JAMAIS le tbarkallah quand tu complimentes un enfant." },
    { id:"k13", fr:"Je suis fatiguee", phon:"ana 3ayyana", ar:"أنا عيانة", note:"Au feminin. Un homme dit 3ayyan." },
    { id:"k14", fr:"J ai sommeil", phon:"jani nn3as", ar:"جاني النعاس" },
    { id:"k15", fr:"Qu est-ce qu on fait aujourd hui ?", phon:"chnou ghadi ndirou lyoum ?", ar:"شنو غادي نديرو اليوم؟" },
    { id:"k16", fr:"Je peux prendre une photo ?", phon:"nqder nakhod tsswira ?", ar:"نقدر ناخد تصويرة؟", note:"Toujours demander, surtout aux personnes agees et au souk." },
    { id:"k17", fr:"C est vraiment beau ici", phon:"zwin bezzaf hna", ar:"زوين بزاف هنا" },
    { id:"k18", fr:"Raconte-moi", phon:"3awd liya", ar:"عاود ليا", note:"Sert aussi bien pour raconte-moi une histoire que pour dis-m en plus." }
  ]
},
{
  id:"famille", name:"Les gens de la famille", desc:"Comment appeler chacun. Se tromper de mot fait plus de degats qu un mauvais accent.",
  items:[
    { id:"f1", fr:"Maman / sa mere a lui", phon:"mama / lwalida", ar:"ماما، الوالدة", note:"Tu peux appeler sa mere <b>mmi</b> (ma mere, affectueux) si la relation est chaleureuse, ou <b>lalla</b> qui est respectueux. Demande-lui ce qu il prefere." },
    { id:"f2", fr:"Papa / son pere a lui", phon:"baba / lwalid", ar:"بابا، الوالد", note:"On appelle souvent un homme plus age <b>3ammi</b> (mon oncle) ou <b>si</b> + prenom, par respect." },
    { id:"f3", fr:"Mon frere", phon:"khouya", ar:"خويا" },
    { id:"f4", fr:"Ma soeur", phon:"khti", ar:"ختي", note:"On appelle aussi khti n importe quelle femme de ton age. C est chaleureux." },
    { id:"f5", fr:"Ton frere / ta soeur", phon:"khouk / khtek", ar:"خوك، ختك" },
    { id:"f6", fr:"La grand-mere", phon:"jjedda", ar:"الجدة", note:"Souvent appelee <b>mmi</b> par toute la maison." },
    { id:"f7", fr:"Le grand-pere", phon:"jjedd", ar:"الجد" },
    { id:"f8", fr:"Tante (soeur du pere / de la mere)", phon:"3amma / khala", ar:"عمة، خالة", note:"On dit <b>khalti</b> a toute femme plus agee que soi, meme inconnue. Tres poli." },
    { id:"f9", fr:"Oncle (frere du pere / de la mere)", phon:"3amm / khal", ar:"عم، خال" },
    { id:"f10", fr:"Les enfants", phon:"ddrari", ar:"الدراري" },
    { id:"f11", fr:"Le bebe", phon:"lbibi / ddri sghir", ar:"الدري الصغير" },
    { id:"f12", fr:"La maisonnee, les gens de la maison", phon:"had ddar", ar:"هاد الدار", note:"Quand on demande kif dayrin f ddar, on parle de tout le monde a la maison." },
    { id:"f13", fr:"Ta famille est adorable", phon:"l3a2ila dyalek drayfin bezzaf", ar:"العائلة ديالك ظريفين بزاف" },
    { id:"f14", fr:"Vous me manquez tous", phon:"twa77echtkoum koulkoum", ar:"توحشتكم كلكم", note:"A dire au moment de repartir. Prepare-toi aux larmes." },
    { id:"f15", fr:"Ma belle-famille (litt. la famille de mon mari)", phon:"3a2ilat rajli", ar:"عائلة راجلي", note:"Il n y a pas vraiment de mot pour belle-mere : on dit <b>mmwatou</b> (sa mere a lui). Et on l appelle mmi." },
    { id:"f16", fr:"Nous sommes une seule famille", phon:"7na 3a2ila we7da", ar:"حنا عائلة وحدة", note:"Phrase de fin de repas, quand l ambiance est bonne. Elle fait toujours mouche." }
  ]
},
{
  id:"maison", name:"Chez eux", desc:"S installer, demander sans gener, aider a la maison.",
  items:[
    { id:"m1", fr:"Je peux entrer ?", phon:"nqder ndkhol ?", ar:"نقدر ندخل؟" },
    { id:"m2", fr:"Ou sont les toilettes ?", phon:"fin kayna ttwalit ?", ar:"فين كاينة التواليت؟", note:"On dit aussi <b>bit lma</b> (la piece de l eau), plus pudique." },
    { id:"m3", fr:"Votre maison est tres belle", phon:"ddar dyalkoum zwina bezzaf, tbarkallah", ar:"الدار ديالكم زوينة بزاف، تبارك الله" },
    { id:"m4", fr:"Ou je peux mettre mes affaires ?", phon:"fin nkhelli l7wayj dyali ?", ar:"فين نخلي الحوايج ديالي؟" },
    { id:"m5", fr:"J ai froid", phon:"fiya lberd", ar:"فيا البرد", note:"Utile : les maisons marocaines sont glaciales en hiver. On te donnera une couverture immediatement." },
    { id:"m6", fr:"Je peux avoir une couverture ?", phon:"nqder nakhod chi bttaniya ?", ar:"نقدر ناخد شي بطانية؟" },
    { id:"m7", fr:"Je suis fatiguee, je vais dormir", phon:"ana 3ayyana, ghadi nn3es", ar:"أنا عيانة، غادي نعس" },
    { id:"m8", fr:"Je peux prendre une douche ?", phon:"nqder ndouch ?", ar:"نقدر ندوش؟" },
    { id:"m9", fr:"Merci pour tout", phon:"chokran 3la kolchi", ar:"شكرا على كلشي" },
    { id:"m10", fr:"Je peux aider a debarrasser ?", phon:"n3awnek nrfed ttbla ?", ar:"نعاونك نرفد الطبلة؟" },
    { id:"m11", fr:"Laisse, je le fais", phon:"khelli, ana ndirha", ar:"خلي، أنا نديرها" },
    { id:"m12", fr:"Ou est le chargeur ?", phon:"fin cchargeur ?", ar:"فين الشارجور؟", note:"Beaucoup d objets modernes gardent leur nom francais. En cas de doute, dis le mot francais avec l article <b>l</b> devant." },
    { id:"m13", fr:"Il y a du wifi ?", phon:"kayn chi wifi ?", ar:"كاين شي ويفي؟" },
    { id:"m14", fr:"Je me sens chez moi ici", phon:"kan7ess rassi f dari", ar:"كنحس راسي فداري", note:"La phrase a dire a sa mere avant de partir." }
  ]
},
{
  id:"sentiments", name:"Complimenter, ressentir", desc:"Dire que tu es contente, gênée, touchée. C est ce qui fait la difference.",
  items:[
    { id:"n1", fr:"Je suis tres contente", phon:"ana ferhana bezzaf", ar:"أنا فرحانة بزاف" },
    { id:"n2", fr:"Tu es adorable", phon:"nti drifa bezzaf", ar:"نتي ظريفة بزاف", alt:{ l:"a un homme", phon:"nta drif bezzaf", ar:"نتا ظريف بزاف" } },
    { id:"n3", fr:"Ca m a beaucoup plu", phon:"3ejbni bezzaf", ar:"عجبني بزاف" },
    { id:"n4", fr:"C est magnifique", phon:"zwin bezzaf", ar:"زوين بزاف", alt:{ l:"pour un mot feminin", phon:"zwina bezzaf", ar:"زوينة بزاف" } },
    { id:"n5", fr:"Je suis timide", phon:"ana 7echmana", ar:"أنا حشمانة", note:"La <b>7chouma</b> (la gene, la pudeur) est une notion centrale. Dire que tu es timide est compris et bien accueilli." },
    { id:"n6", fr:"Tu me genes (dans le bon sens), c est trop", phon:"7echchemtini", ar:"حشمتيني", note:"A dire quand on te couvre de cadeaux ou de nourriture. Signifie tu me combles, c est trop d honneur." },
    { id:"n7", fr:"Merci de m avoir accueillie", phon:"chokran 3la listiqbal", ar:"شكرا على الاستقبال" },
    { id:"n8", fr:"Vous etes ma deuxieme famille", phon:"ntouma l3a2ila ttanya dyali", ar:"نتوما العائلة التانية ديالي" },
    { id:"n9", fr:"Tu es comme ma mere", phon:"nti b7al mmi", ar:"نتي بحال مي", note:"A garder pour un vrai moment. Ce n est pas une phrase anodine." },
    { id:"n10", fr:"Ca me touche beaucoup", phon:"kaythez fiya bezzaf", ar:"كيتهز فيا بزاف" },
    { id:"n11", fr:"Je suis triste de partir", phon:"ana mqellqa 7it ghadi nemchi", ar:"أنا مقلقة حيت غادي نمشي" },
    { id:"n12", fr:"Je reviens vite, si Dieu veut", phon:"ghadi nrje3 daghya, nchallah", ar:"غادي نرجع دغيا، إن شاء الله" },
    { id:"n13", fr:"Je n oublierai jamais", phon:"3emmerni gha nnsa", ar:"عمرني غا ننسى" },
    { id:"n14", fr:"Vous m avez trop gatee", phon:"3ziztou 3liya bezzaf", ar:"عزيزتو عليا بزاف" }
  ]
},
{
  id:"telephone", name:"Au telephone", desc:"Les appels et les visios avec sa mere : courts, chaleureux, toujours les memes phrases.",
  items:[
    { id:"z1", fr:"Allo, bonjour !", phon:"allo, salam 3likoum", ar:"ألو، السلام عليكم" },
    { id:"z2", fr:"Tu m entends ?", phon:"katsem3ini ?", ar:"كتسمعيني؟", alt:{ l:"a un homme", phon:"katsem3ni ?", ar:"كتسمعني؟" } },
    { id:"z3", fr:"Je t entends mal", phon:"ma kansem3ekch mezyan", ar:"ما كنسمعكش مزيان" },
    { id:"z4", fr:"Le reseau est mauvais", phon:"rrezo khayb", ar:"الريزو خايب" },
    { id:"z5", fr:"Attends une seconde", phon:"tsenna chwiya", ar:"تسنى شوية" },
    { id:"z6", fr:"Je te passe Youssef", phon:"ghadi n3tik Youssef", ar:"غادي نعطيك يوسف" },
    { id:"z7", fr:"Vous me manquez", phon:"twa77echtkoum", ar:"توحشتكم" },
    { id:"z8", fr:"Embrasse les enfants pour moi", phon:"bousi liya ddrari", ar:"بوسي ليا الدراري" },
    { id:"z9", fr:"On se rappelle", phon:"n3aytou lik men be3d", ar:"نعيطو ليك من بعد" },
    { id:"z10", fr:"Je dois raccrocher, pardon", phon:"khessni nqte3, sme7i liya", ar:"خصني نقطع، سمحي ليا" },
    { id:"z11", fr:"Salue tout le monde", phon:"sellmi liya 3la koulchi", ar:"سلمي ليا على كلشي" },
    { id:"z12", fr:"Prends soin de toi, a bientot", phon:"thelli f rassek, bslama", ar:"تهلي فراسك، بسلامة" }
  ]
},
{
  id:"dehors", name:"Dehors : taxi, souk, chiffres", desc:"Sortir seule sans stress. Les chiffres, les prix, et le piege des riyals.",
  items:[
    { id:"d1", fr:"Un, deux, trois", phon:"wa7ed, jouj, tlata", ar:"واحد، جوج، تلاتة" },
    { id:"d2", fr:"Quatre, cinq, six", phon:"reb3a, khamsa, setta", ar:"ربعة، خمسة، ستة" },
    { id:"d3", fr:"Sept, huit, neuf, dix", phon:"seb3a, tmnya, tes3oud, 3achra", ar:"سبعة، تمنية، تسعود، عشرة" },
    { id:"d4", fr:"Vingt, cinquante, cent", phon:"3achrin, khamsin, mya", ar:"عشرين، خمسين، مية" },
    { id:"d5", fr:"Combien ca coute ?", phon:"b ch7al ?", ar:"بشحال؟" },
    { id:"d6", fr:"Attention : le prix en riyals", phon:"chnou b ddirham ?", ar:"شنو بالدرهم؟", note:"<b>Le piege</b> : au souk on annonce souvent les prix en riyals. 1 dirham = 20 riyals. Si on te dit deux mille, c est 100 dirhams. Demande toujours le prix <b>b ddirham</b>." },
    { id:"d7", fr:"C est trop cher", phon:"ghali bezzaf", ar:"غالي بزاف" },
    { id:"d8", fr:"Baisse un peu", phon:"nqes chwiya 3afak", ar:"نقص شوية عافاك" },
    { id:"d9", fr:"Je regarde seulement, merci", phon:"ghir kanchouf, chokran", ar:"غير كنشوف، شكرا", note:"La phrase anti-harcelement commercial. Dite calmement, elle marche." },
    { id:"d10", fr:"Je prends celui-la", phon:"ghadi nakhod hada", ar:"غادي ناخد هادا" },
    { id:"d11", fr:"Emmene-moi a ..., s il te plait", phon:"ddini l ... 3afak", ar:"ديني ل... عافاك" },
    { id:"d12", fr:"Mets le compteur, s il te plait", phon:"khdem lkontour 3afak", ar:"خدم الكونتور عافاك", note:"En petit taxi, a dire en montant, avant de demarrer. Ca evite 90 pour cent des discussions." },
    { id:"d13", fr:"Arrete-toi ici", phon:"wqef hna 3afak", ar:"وقف هنا عافاك" },
    { id:"d14", fr:"Ou est ... ?", phon:"fin kayn ... ?", ar:"فين كاين؟" },
    { id:"d15", fr:"A droite / a gauche / tout droit", phon:"3la limen / 3la liser / nichan", ar:"على ليمن، على ليسر، نيشان" },
    { id:"d16", fr:"Je me suis perdue", phon:"twedert", ar:"توضرت" },
    { id:"d17", fr:"Aidez-moi s il vous plait", phon:"3awnouni 3afak", ar:"عاونوني عافاك" },
    { id:"d18", fr:"L addition, s il vous plait", phon:"l7sab 3afak", ar:"الحساب عافاك" },
    { id:"d19", fr:"Je cherche la pharmacie", phon:"kanqelleb 3la ffarmasyan", ar:"كنقلب على الفارماسيان" },
    { id:"d20", fr:"J attends mon copain ici", phon:"katsenna s7abi hna", ar:"كنتسنى صاحبي هنا", note:"Utile pour couper court quand on t aborde dans la rue." }
  ]
},
{
  id:"occasions", name:"Fetes et grands moments", desc:"Aid, mariage, naissance, deuil. Les phrases qu on attend de toi ces jours-la.",
  items:[
    { id:"o1", fr:"Joyeux Aid", phon:"3id moubarak sa3id", ar:"عيد مبارك سعيد", note:"Reponse : <b>Allah ybarek fik</b> ou <b>3wachr mebrouka</b>." },
    { id:"o2", fr:"Bon Ramadan", phon:"ramdan moubarak", ar:"رمضان مبارك" },
    { id:"o3", fr:"Bonne rupture du jeune", phon:"ss77a ftourkoum", ar:"صحة فطوركم", note:"A dire au moment du <b>ftour</b>, quand la table se remplit apres l appel a la priere." },
    { id:"o4", fr:"Felicitations !", phon:"mebrouk", ar:"مبروك", note:"Reponse universelle : <b>Allah ybarek fik</b>." },
    { id:"o5", fr:"Que Dieu te benisse (la reponse)", phon:"Allah ybarek fik", ar:"الله يبارك فيك" },
    { id:"o6", fr:"Felicitations pour le bebe", phon:"mebrouk lmouloud", ar:"مبروك المولود" },
    { id:"o7", fr:"Que Dieu te le garde", phon:"Allah ykhellih lik", ar:"الله يخليه ليك" },
    { id:"o8", fr:"Bon retablissement", phon:"Allah ychafik", ar:"الله يشافيك" },
    { id:"o9", fr:"Mes condoleances", phon:"Allah y3tikoum ssber", ar:"الله يعطيكم الصبر", note:"On dit aussi <b>Allah yrhemou</b> (que Dieu lui fasse misericorde) pour la personne decedee. Ce sont les deux seules phrases a connaitre ; le reste est du silence et de la presence." },
    { id:"o10", fr:"Que Dieu lui fasse misericorde", phon:"Allah yrhemou", ar:"الله يرحمو", alt:{ l:"pour une femme", phon:"Allah yrhemha", ar:"الله يرحمها" } },
    { id:"o11", fr:"Bon voyage", phon:"triq ssalama", ar:"طريق السلامة" },
    { id:"o12", fr:"Bon anniversaire", phon:"3id milad sa3id", ar:"عيد ميلاد سعيد" },
    { id:"o13", fr:"Que Dieu vous garde ensemble", phon:"Allah ykhellikoum lb3diyatkoum", ar:"الله يخليكم لبعضياتكم" },
    { id:"o14", fr:"Merci pour l invitation", phon:"chokran 3la dd3wa", ar:"شكرا على الدعوة" }
  ]
},
{
  id:"amour", name:"Avec lui", desc:"Pour l entrainement quotidien : c est lui ton prof, autant que ce soit agreable.",
  items:[
    { id:"a1", fr:"Je t aime", phon:"kanbghik", ar:"كنبغيك", note:"Le je t aime du quotidien. Plus intense : <b>kanbghik bezzaf</b>." },
    { id:"a2", fr:"Tu me manques", phon:"twa77echtek", ar:"توحشتك" },
    { id:"a3", fr:"Mon amour, ma vie", phon:"3omri", ar:"عمري", note:"Litteralement mon age, ma vie. Le petit nom le plus courant, avec <b>7bibi</b>." },
    { id:"a4", fr:"Mon coeur", phon:"qalbi", ar:"قلبي" },
    { id:"a5", fr:"Je pense a toi", phon:"kanfekker fik", ar:"كنفكر فيك" },
    { id:"a6", fr:"Apprends-moi un mot en darija", phon:"3allemni chi kelma b ddarija", ar:"علمني شي كلمة بالدارجة", note:"A envoyer en vocal tous les jours. C est ta methode, en une phrase." },
    { id:"a7", fr:"Comment on dit ca ?", phon:"kifach kaygoulou hadi ?", ar:"كيفاش كيقولو هادي؟" },
    { id:"a8", fr:"Ecoute mon accent", phon:"sme3 la3ksan dyali", ar:"سمع لاكسان ديالي" },
    { id:"a9", fr:"J ai bien dit ?", phon:"gultha mezyan ?", ar:"كلتها مزيان؟" },
    { id:"a10", fr:"Ta mere est adorable", phon:"mmwek drifa bezzaf", ar:"مك ظريفة بزاف", note:"A lui dire a lui, et surtout devant elle." },
    { id:"a11", fr:"Que Dieu te garde pour moi", phon:"Allah ykhellik liya", ar:"الله يخليك ليا" },
    { id:"a12", fr:"Tu es beau", phon:"nta zwin", ar:"نتا زوين" }
  ]
}
];
