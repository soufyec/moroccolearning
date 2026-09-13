/* Dar Darija — contenu. Tout est pense pour l oral :
   fr   = ce que ca veut dire
   phon = ce que tu prononces (lecture a la francaise)
   ar   = arabe, invisible dans l app, sert uniquement a la voix du telephone
   alt  = la variante quand tu parles a une femme (ou a un homme)
   note = ce qu il faut savoir pour ne pas se planter                        */

const GUIDE = {
  sounds: [
    { sym:"h", name:"le h soufflé", how:"Un h expiré du fond de la gorge, comme quand tu embues une vitre, mais plus serré. Il ne faut jamais l’avaler : en darija, aucun h n’est muet.", ex:"l-hammdou-llah (Dieu merci), merhba (bienvenue), l-hlib (le lait)" },
    { sym:"kh", name:"la jota", how:"Le ch allemand de Bach, ou la jota espagnole. Comme si tu raclais doucement. Tu le connais déjà par le mot khol.", ex:"khouya (mon frère), l-khobz (le pain), s-bah l-khir (bonjour)" },
    { sym:"gh", name:"le r de Paris", how:"Bonne nouvelle : c’est exactement le r grasseyé du français. Tu l’as depuis toujours.", ex:"l-maghrib (le Maroc), ghadi (je vais), ghali (cher)" },
    { sym:"r", name:"le r roulé", how:"Roule-le comme en espagnol ou en italien. Si tu le prononces à la française, tu dis gh et tu changes le mot.", ex:"merhba (bienvenue), d-darija, bared (froid)" },
    { sym:"â", name:"le son du fond", how:"Le plus dur, et le seul qui ne ressemble à rien de français. Serre la gorge comme si tu allais tousser, puis fais un a. Si tu le rates, prononce un a bien ouvert : tout le monde comprendra.", ex:"âafak (s’il te plaît), âlikoum, âayyana (fatiguée)" },
    { sym:"q", name:"le k profond", how:"Un k prononcé tout au fond, là où tu avales. Différent du k normal, mais un k ordinaire passe très bien.", ex:"l-qahoua (le café), nqder (je peux), ouaqila (peut-être)" },
    { sym:"ou", name:"le ou", how:"Toujours le ou français, jamais le u de tu : le son u n’existe pas en darija. C’est pour ça qu’on écrit ouakha et pas wakha.", ex:"chokrane, kouli (mange), l-youm (aujourd’hui)" },
    { sym:"-", name:"le trait d’union", how:"Il ne se prononce pas : il découpe le mot pour toi et empêche ta bouche de fabriquer une nasale française. kann-bghi se lit kane puis bghi, en un seul souffle.", ex:"kann-bghi (j’aime), l-khobz (le pain), t-tajine" },
    { sym:"ine", name:"aucune nasale", how:"Le darija n’a ni in, ni an, ni on à la française. On écrit donc ine, ane, one, et on double parfois la consonne, pour t’empêcher de nasaliser.", ex:"bnine (délicieux), mezyane (bien), fine (où)" }
  ],
  rules: [
    { t:"Zéro écriture, zéro grammaire", d:"Tu apprends des blocs à sortir au bon moment, et des moules à remplir. Jamais un système, jamais une règle pour la règle." },
    { t:"Toujours à voix haute", d:"Une phrase lue des yeux ne sort pas de ta bouche le jour J. Répète chaque phrase trois fois à voix haute, même en chuchotant dans le métro." },
    { t:"Ne récite pas, fabrique", d:"Une phrase apprise par cœur te sert une fois. Un moule comme bghite ___ (je veux ___) te sert cinquante fois. Dès que tu tiens un moule, change le mot dedans : c’est ça, parler." },
    { t:"Comprendre avant de parler", d:"En famille, tu écouteras 80 pour cent du temps. Le thème Ce qu’ils vont te dire vaut plus que tous les autres : travaille-le dès la semaine 1." },
    { t:"Ton oreille est le seul outil", d:"La voix du téléphone lit de l’arabe classique : elle donne le squelette du mot, pas l’accent. Enregistre-toi avec le bouton Moi, réécoute-toi, recommence. C’est en t’entendant que tu corriges." },
    { t:"12 minutes par jour battent 2 heures le dimanche", d:"La mémoire a besoin de répétitions espacées, pas de marathons. L’app te ressort chaque phrase juste avant le moment où tu l’aurais oubliée." },
    { t:"Le monologue du soir", d:"Une minute, seule, à voix haute : raconte ta journée avec le peu que tu sais. ana âayyana. klite bezzaf. ghadi nnâes. C’est pauvre, c’est parfait, et c’est là que la langue devient la tienne." },
    { t:"Cinq mots te sauvent partout", d:"bezzaf (beaucoup), chouiya (un peu), safi (ça suffit, c’est bon), ouakha (d’accord), nchallah (si Dieu veut). Glisse-les partout : ça sonne immédiatement local." },
    { t:"Vise 30 phrases, pas la perfection", d:"Sa famille ne va pas te noter. Dix phrases dites de travers avec le sourire valent mille fois une grammaire parfaite et un silence gêné." }
  ],
  ecoute: [
    { t:"Les séries marocaines", d:"Cherche série marocaine 2M ou sitcom marocain sur YouTube. C’est le darija de tous les jours, avec le ton, les silences et les interruptions. Cinq minutes par jour suffisent, même sans rien comprendre au début." },
    { t:"Les chaînes de cuisine en darija", d:"Double bénéfice : tu vois ce dont on parle, et c’est exactement le vocabulaire dont tu auras besoin dans sa cuisine." },
    { t:"La radio marocaine en fond", d:"Hit Radio, Chada FM, MFM : mets-les en fond pendant que tu fais autre chose. Ton oreille apprend le rythme et la musique de la langue avant les mots." },
    { t:"Les vlogs et les comptes marocains", d:"Sur TikTok ou Instagram, cherche darija ou maroc vlog. C’est court, c’est rapide, et c’est de la langue vraie." },
    { t:"Une chanson en boucle", d:"Choisis un morceau marocain qui te plaît et écoute-le vingt fois. Les paroles sont répétitives et elles se collent à la mémoire sans effort." }
  ]
};

const PROGRAM = [
  { n:1, title:"Les sons, puis saluer", desc:"Le guide des sons, les 12 phrases de survie, saluer et prendre congé.", themes:["urgence","salamat"] },
  { n:2, title:"Se présenter, et les mots de base", desc:"Dire qui tu es, les formules de politesse, et tes premières familles de mots.", themes:["premiere","politesse","mots"] },
  { n:3, title:"À table", desc:"Le vrai terrain de jeu : complimenter la cuisine, refuser un quatrième service.", themes:["table","ecoute"] },
  { n:4, title:"Comprendre, et les verbes", desc:"Ce qu’ils te disent, comment demander de répéter, et les verbes qui servent tous les jours.", themes:["ecoute","comprendre","verbes"] },
  { n:5, title:"Papoter, la famille", desc:"Les questions faciles à poser, comment appeler chacun, et plus de vocabulaire.", themes:["smalltalk","famille","mots"] },
  { n:6, title:"Fabriquer tes phrases", desc:"Les moules à trous : le moment où tu arrêtes de réciter et où tu commences à parler.", themes:["moules","maison","sentiments"] },
  { n:7, title:"Dehors et au téléphone", desc:"Taxi, souk, chiffres et prix, puis les appels. Et toujours des moules.", themes:["dehors","telephone","moules"] },
  { n:8, title:"Les grandes occasions", desc:"Fêtes, mariage, naissance, condoléances. Puis la révision générale.", themes:["occasions","amour","verbes"] }
];

const THEMES = [
{
  id:"urgence", name:"Les 12 de survie", desc:"Si tu n’apprends que ça, tu tiens déjà une soirée entière.", key:true,
  items:[
    { id:"u1", fr:"Bonjour à tous (partout, tout le temps)", phon:"salam 3likoum", ar:"السلام عليكم", note:"La salutation passe-partout. On te répondra <b>wa 3likoum salam</b>." },
    { id:"u2", fr:"Merci", phon:"chokran", ar:"شكرا", note:"Version plus chaleureuse, très appréciée : <b>barakallahou fik</b> (que Dieu te bénisse)." },
    { id:"u3", fr:"S’il te plaît", phon:"3afak", ar:"عافاك", note:"Se colle à la fin de n’importe quelle demande." },
    { id:"u4", fr:"Oui / D’accord", phon:"iyeh / wakha", ar:"إيه، واخا", note:"<b>wakha</b> est le d’accord national. Tu peux l’utiliser pour tout." },
    { id:"u5", fr:"Non, merci", phon:"lla, chokran", ar:"لا شكرا", note:"Un simple <b>lla</b> seul peut sembler sec : ajoute toujours chokran." },
    { id:"u6", fr:"Pardon, excuse-moi", phon:"sme7 liya", ar:"سمح ليا", alt:{ l:"à une femme", phon:"sem7i liya", ar:"سمحي ليا" } },
    { id:"u7", fr:"Je n’ai pas compris", phon:"ma fhemtch", ar:"ما فهمتش", note:"À dire sans culpabiliser, c’est la phrase que tu utiliseras le plus." },
    { id:"u8", fr:"Répète doucement, s’il te plaît", phon:"3awed b chwiya 3afak", ar:"عاود بشوية عافاك", alt:{ l:"à une femme", phon:"3awdi b chwiya 3afak", ar:"عاودي بشوية عافاك" } },
    { id:"u9", fr:"C’est délicieux", phon:"bnin bezzaf", ar:"بنين بزاف", note:"La phrase qui te fait adopter en trois secondes. Dis-la fort, à table." },
    { id:"u10", fr:"J’ai assez mangé, merci", phon:"chb3et, barakallahou fik", ar:"شبعت، بارك الله فيك", note:"Il faudra la répéter au moins quatre fois. C’est normal, ça fait partie du jeu." },
    { id:"u11", fr:"Je suis très contente d’être ici", phon:"ana ferhana bezzaf", ar:"أنا فرحانة بزاف", note:"<b>ferhana</b> parce que tu es une femme. Un homme dirait ferhan." },
    { id:"u12", fr:"J’apprends le darija, petit à petit", phon:"kant3allem ddarija, chwiya b chwiya", ar:"كنتعلم الدارجة، شوية بشوية", note:"Sors-la dès le début : après ça, tout le monde te parlera plus lentement." }
  ]
},
{
  id:"salamat", name:"Saluer et partir", desc:"Arriver, embrasser tout le monde, et repartir proprement.",
  items:[
    { id:"s1", fr:"Bonjour à tous", phon:"salam 3likoum", ar:"السلام عليكم" },
    { id:"s2", fr:"Et à toi le salut (la réponse)", phon:"wa 3likoum salam", ar:"وعليكم السلام", note:"Quand quelqu’un entre et dit <b>salam 3likoum</b>, c’est ta réponse automatique." },
    { id:"s3", fr:"Bonjour (le matin)", phon:"sba7 lkhir", ar:"صباح الخير", note:"Réponse : <b>sba7 nnour</b> (matin de lumière)." },
    { id:"s4", fr:"Bonsoir", phon:"msa lkhir", ar:"مسا الخير", note:"Réponse : <b>msa nnour</b>." },
    { id:"s5", fr:"Comment tu vas ?", phon:"kif dayer ?", ar:"كيف داير؟", alt:{ l:"à une femme", phon:"kif dayra ?", ar:"كيف دايرة؟" }, note:"À sa mère, c’est donc <b>kif dayra</b>. Retiens la version femme en premier." },
    { id:"s6", fr:"Ça va ? (le plus simple)", phon:"labas ?", ar:"لاباس؟", note:"Marche pour homme, femme, groupe. Si tu ne dois en retenir qu’une, c’est celle-là." },
    { id:"s7", fr:"Ça va bien, Dieu merci", phon:"labas, l7amdoullah", ar:"لاباس الحمد لله", note:"On répond presque toujours <b>l7amdoullah</b>, même quand ça ne va pas." },
    { id:"s8", fr:"Et toi ?", phon:"w nta ?", ar:"ونتا؟", alt:{ l:"à une femme", phon:"w nti ?", ar:"ونتي؟" } },
    { id:"s9", fr:"Bienvenue !", phon:"mer7ba", ar:"مرحبا", note:"On te le dira 20 fois en arrivant. Réponds <b>chokran, Allah ybarek fik</b>." },
    { id:"s10", fr:"Comment va la maisonnée ?", phon:"kif dayrin f ddar ?", ar:"كيف دايرين فالدار؟", note:"On demande des nouvelles de toute la famille avant de parler de quoi que ce soit. Ne saute jamais cette étape." },
    { id:"s11", fr:"Tu m’as manqué", phon:"twa77echtek", ar:"توحشتك", note:"Énorme effet sur la belle-mère. Vraiment." },
    { id:"s12", fr:"Au revoir", phon:"bslama", ar:"بسلامة" },
    { id:"s13", fr:"Prends soin de toi", phon:"thella f rassek", ar:"تهلا فراسك", alt:{ l:"à une femme", phon:"thelli f rassek", ar:"تهلي فراسك" }, note:"Le vrai au revoir affectueux marocain." },
    { id:"s14", fr:"Bonne nuit", phon:"tesba7 3la khir", ar:"تصبح على خير", alt:{ l:"à une femme", phon:"tesb7i 3la khir", ar:"تصبحي على خير" } },
    { id:"s15", fr:"On se voit demain", phon:"nchoufou ghedda", ar:"نشوفو غدا" },
    { id:"s16", fr:"À tout à l’heure", phon:"nchoufek men be3d", ar:"نشوفك من بعد" },
    { id:"s17", fr:"Salue tout le monde de ma part", phon:"sellem liya 3la koulchi", ar:"سلم ليا على كلشي", note:"Se dit à la fin de chaque appel téléphonique, sans exception." },
    { id:"s18", fr:"Que Dieu te garde", phon:"Allah ykhllik", ar:"الله يخليك", note:"Sert de merci, de s’il te plaît et de je t’aime bien. Le couteau suisse." }
  ]
},
{
  id:"premiere", name:"La première rencontre", desc:"Qui tu es, d’où tu viens, et pourquoi ton darija est encore bancal.",
  items:[
    { id:"p1", fr:"Je m’appelle Chloé", phon:"smiti Chloe", ar:"سميتي كلوي", note:"Remplace par ton prénom. <b>smiti</b> = mon nom est." },
    { id:"p2", fr:"Comment tu t’appelles ?", phon:"chnou smitek ?", ar:"شنو سميتك؟" },
    { id:"p3", fr:"Enchantée", phon:"metcharrfa", ar:"متشرفة", note:"Toi tu dis metcharrfa (femme). Lui dirait metcharref." },
    { id:"p4", fr:"Je suis française", phon:"ana fransawiya", ar:"أنا فرنساوية" },
    { id:"p5", fr:"Je viens de France", phon:"ana jaya men fransa", ar:"أنا جاية من فرنسا", note:"<b>jaya</b> au féminin. Un homme dirait jay." },
    { id:"p6", fr:"J’habite à Paris", phon:"kanskoun f bariz", ar:"كنسكن فباريز" },
    { id:"p7", fr:"J’apprends le darija", phon:"kant3allem ddarija", ar:"كنتعلم الدارجة" },
    { id:"p8", fr:"Je parle un tout petit peu", phon:"kanhder ghir chwiya", ar:"كنهضر غير شوية" },
    { id:"p9", fr:"Je comprends un peu", phon:"kanfhem chwiya", ar:"كنفهم شوية" },
    { id:"p10", fr:"Je ne parle pas encore bien", phon:"mazal ma kanhderch mezyan", ar:"مازال ما كنهضرش مزيان" },
    { id:"p11", fr:"Excuse-moi pour mon darija", phon:"sme7 liya, ddarija dyali mazal", ar:"سمح ليا، الدارجة ديالي مازال", note:"Ça fait toujours rire, et ça désamorce tout." },
    { id:"p12", fr:"C’est ma première fois au Maroc", phon:"hadi lewwla merra li jit l lmaghrib", ar:"هادي اللولا مرة لي جيت للمغرب" },
    { id:"p13", fr:"Je travaille dans...", phon:"kankhdem f...", ar:"كنخدم ف", note:"Complète avec le mot français, tout le monde comprendra." },
    { id:"p14", fr:"J’ai trente ans", phon:"3endi tlatin 3am", ar:"عندي تلاتين عام" },
    { id:"p15", fr:"Je suis la fiancée de Soufyan", phon:"ana khatiba dyal Soufyan", ar:"أنا خطيبة ديال سفيان", note:"<b>khatiba</b> = fiancée, c’est le mot qui rassure une famille. Copine se dit <b>s7abtou dyal Soufyan</b>, mais demande-lui le mot qu’il veut que tu emploies devant SA famille : c’est lui qui connaît le terrain." },
    { id:"p16", fr:"Je suis contente de vous rencontrer", phon:"ferhana bach t3arreft bikoum", ar:"فرحانة باش تعرفت بيكم" }
  ]
},
{
  id:"politesse", name:"Merci, pardon, et Dieu", desc:"Les formules qui reviennent toutes les trois phrases. Sans elles, tu sonnes froide.",
  items:[
    { id:"po1", fr:"Merci", phon:"chokran", ar:"شكرا" },
    { id:"po2", fr:"Que Dieu te bénisse (merci chaleureux)", phon:"barakallahou fik", ar:"بارك الله فيك", note:"Le vrai merci du quotidien. Plus fort que chokran." },
    { id:"po3", fr:"De rien", phon:"bla jmil", ar:"بلا جميل", note:"Littéralement sans faveur. Réponse standard à un merci." },
    { id:"po4", fr:"S’il te plaît", phon:"3afak", ar:"عافاك" },
    { id:"po5", fr:"Ce n’est rien, pas de souci", phon:"makayn mouchkil", ar:"ما كاين مشكيل" },
    { id:"po6", fr:"C’est bon, ça suffit, on arrête là", phon:"safi", ar:"صافي", note:"Mot magique. Sert à dire c’est bon, fini, d’accord, arrête. Utilise-le partout." },
    { id:"po7", fr:"Si Dieu veut", phon:"nchallah", ar:"إن شاء الله", note:"S’ajoute à TOUT ce qui n’est pas encore arrivé. On revient l’an prochain, nchallah." },
    { id:"po8", fr:"Dieu merci", phon:"l7amdoullah", ar:"الحمد لله", note:"Après avoir mangé, après ça va bien, après une bonne nouvelle." },
    { id:"po9", fr:"Au nom de Dieu (avant de commencer)", phon:"bsmillah", ar:"بسم الله", note:"Se dit avant de manger, de monter en voiture, de commencer quelque chose. Ne pas le dire à table se remarque." },
    { id:"po10", fr:"Que Dieu bénisse (compliment sans mauvais œil)", phon:"tbarkallah", ar:"تبارك الله", note:"<b>Règle d’or</b> : quand tu complimentes quelqu’un ou un enfant, ajoute tbarkallah, sinon le compliment peut être perçu comme portant le mauvais œil. Ta maison est belle, tbarkallah." },
    { id:"po11", fr:"Bon courage (à quelqu’un qui travaille)", phon:"Allah y3awn", ar:"الله يعاون" },
    { id:"po12", fr:"À ta santé ! (après un repas, un bain, du neuf)", phon:"bsse77a", ar:"بالصحة", note:"On te le dira si tu sors de la douche ou si tu portes un vêtement neuf. Réponse : <b>Allah y3tik ssa77a</b>." },
    { id:"po13", fr:"Que Dieu te donne la santé (la réponse)", phon:"Allah y3tik ssa77a", ar:"الله يعطيك الصحة" },
    { id:"po14", fr:"Je suis désolée", phon:"ana asfa", ar:"أنا آسفة", note:"Au féminin. Un homme dit ana asef." },
    { id:"po15", fr:"Avec plaisir", phon:"b koull sourour", ar:"بكل سرور" },
    { id:"po16", fr:"Que Dieu te garde tes parents (merci profond)", phon:"Allah ykhelli lik lwalidin", ar:"الله يخلي ليك الوالدين", note:"À sortir quand quelqu’un t’a vraiment aidée. Effet garanti." }
  ]
},
{
  id:"table", name:"À table", desc:"Là où tout se joue vraiment. Complimenter, refuser poliment, survivre au quatrième service.", key:true,
  items:[
    { id:"t1", fr:"Au nom de Dieu (avant de manger)", phon:"bsmillah", ar:"بسم الله", note:"On le dit avant la première bouchée. Personne ne t’en voudra si tu l’oublies, mais le dire te fait gagner dix points d’un coup." },
    { id:"t2", fr:"Dieu merci (à la fin du repas)", phon:"l7amdoullah", ar:"الحمد لله" },
    { id:"t3", fr:"C’est délicieux", phon:"bnin bezzaf", ar:"بنين بزاف" },
    { id:"t4", fr:"Que Dieu bénisse tes mains", phon:"Allah ybarek f yeddik", ar:"الله يبارك في يديك", note:"LE compliment à la personne qui a cuisiné. Dis-le en la regardant. C’est celui qui compte." },
    { id:"t5", fr:"Tu cuisines vraiment bien", phon:"katTayybi mezyan bezzaf", ar:"كتطيبي مزيان بزاف", alt:{ l:"à un homme", phon:"katTayyeb mezyan bezzaf", ar:"كتطيب مزيان بزاف" } },
    { id:"t6", fr:"J’ai assez mangé", phon:"chb3et", ar:"شبعت" },
    { id:"t7", fr:"Vraiment, je n’en peux plus", phon:"chb3et bezzaf, Allah ykhllik", ar:"شبعت بزاف، الله يخليك", note:"La deuxième ligne de défense quand on te ressert malgré <b>chb3et</b>." },
    { id:"t8", fr:"C’était beaucoup, merci", phon:"kan bezzaf, barakallahou fik", ar:"كان بزاف، بارك الله فيك" },
    { id:"t9", fr:"Encore un tout petit peu alors", phon:"chwiya sghira barka", ar:"شوية صغيرة بركا", note:"La sortie diplomatique : accepter une micro-portion vaut mieux qu’un refus net. Refuser trop fermement peut vexer." },
    { id:"t10", fr:"Je ne mange pas de viande", phon:"ma kanakoulch lle7em", ar:"ما كناكلش اللحم" },
    { id:"t11", fr:"Je suis végétarienne", phon:"ana nabatiya", ar:"أنا نباتية", note:"Prépare-toi : le concept surprend souvent. Ajoute <b>kanakoul lkhoDra ou lhout</b> (je mange légumes et poisson) si c’est ton cas." },
    { id:"t12", fr:"Je suis allergique à...", phon:"3endi 7asasiya men...", ar:"عندي حساسية من", note:"À faire traduire par ton copain pour l’aliment précis, et à répéter à chaque visite." },
    { id:"t13", fr:"Un peu d’eau, s’il te plaît", phon:"chwiya dyal lma 3afak", ar:"شوية ديال الما عافاك" },
    { id:"t14", fr:"Du thé, volontiers", phon:"atay, b3da", ar:"أتاي بعدا", note:"<b>atay</b> = le thé à la menthe. Refuser le thé est presque impossible, accepte." },
    { id:"t15", fr:"Sans sucre, s’il te plaît", phon:"bla sokkar 3afak", ar:"بلا سكر عافاك", note:"Le thé marocain est TRÈS sucré. Cette phrase peut te sauver." },
    { id:"t16", fr:"Passe-moi le pain, s’il te plaît", phon:"3tini lkhobz 3afak", ar:"عطيني الخبز عافاك", alt:{ l:"à une femme", phon:"3tini lkhobz 3afak", ar:"عطيني الخبز عافاك" } },
    { id:"t17", fr:"C’est un peu piquant pour moi", phon:"harr chwiya 3liya", ar:"حار شوية عليا" },
    { id:"t18", fr:"J’adore le tajine", phon:"kanbghi ttajin bezzaf", ar:"كنبغي الطاجين بزاف" },
    { id:"t19", fr:"Le couscous du vendredi est le meilleur", phon:"seksou dyal jjem3a a7sen 7aja", ar:"سكسو ديال الجمعة أحسن حاجة", note:"Le couscous du vendredi est un rituel familial. Le mentionner montre que tu as compris quelque chose d’important." },
    { id:"t20", fr:"Je peux t’aider ?", phon:"n3awnek ?", ar:"نعاونك؟", note:"Propose-le en débarrassant. Refuse-le d’abord, insiste une fois, puis laisse faire." },
    { id:"t21", fr:"Je peux faire la vaisselle", phon:"nghsel lma3oun", ar:"نغسل الماعون" },
    { id:"t22", fr:"Où je pose ça ?", phon:"fin nkhelli hada ?", ar:"فين نخلي هادا؟" },
    { id:"t23", fr:"Bon appétit (à la santé)", phon:"bsse77a", ar:"بالصحة" },
    { id:"t24", fr:"C’était le meilleur repas de ma vie", phon:"hada a7sen makla klit f 7yati", ar:"هادا أحسن ماكلة كليت فحياتي", note:"Un peu excessif, donc parfait. À garder pour le grand repas du premier jour." }
  ]
},
{
  id:"ecoute", name:"Ce qu’ILS vont te dire", desc:"Le thème le plus rentable : tu ne le diras jamais, tu vas l’entendre tous les jours.", key:true,
  items:[
    { id:"e1", fr:"Bienvenue chez toi !", phon:"mer7ba bik, hadi darek", ar:"مرحبا بيك، هادي دارك", note:"Littéralement c’est ta maison. Réponds <b>chokran, Allah ybarek fik</b>." },
    { id:"e2", fr:"Mange ! Mange !", phon:"kouli ! kouli !", ar:"كلي! كلي!", note:"Adressé à une femme. Tu vas l’entendre en boucle." },
    { id:"e3", fr:"Tu n’as rien mangé !", phon:"ma klitich walou !", ar:"ما كليتيش والو!", note:"Prononcé alors que tu as mangé trois assiettes. C’est un rituel, pas un reproche." },
    { id:"e4", fr:"Reprends-en un peu", phon:"zidi chwiya", ar:"زيدي شوية" },
    { id:"e5", fr:"Ne sois pas timide, fais comme chez toi", phon:"ma t7echmich", ar:"ما تحشميش", note:"On te le dira dès que tu refuses quelque chose." },
    { id:"e6", fr:"Tu veux du thé ?", phon:"wach bghiti atay ?", ar:"واش بغيتي أتاي؟" },
    { id:"e7", fr:"Tu vas bien ?", phon:"labas 3lik ?", ar:"لاباس عليك؟" },
    { id:"e8", fr:"Tu as bien dormi ?", phon:"n3esti mezyan ?", ar:"نعستي مزيان؟" },
    { id:"e9", fr:"Le Maroc te plaît ?", phon:"3ejbek lmaghrib ?", ar:"عجبك المغرب؟", note:"Réponse prête : <b>3ejbni bezzaf, zwin bezzaf</b>." },
    { id:"e10", fr:"Tu sais cuisiner ?", phon:"wach kat3rfi tTayybi ?", ar:"واش كتعرفي تطيبي؟", note:"Question classique. Réponse honnête et souriante : <b>chwiya, wllakin bghit nt3allem</b> (un peu, mais je veux apprendre)." },
    { id:"e11", fr:"Tu fais quoi comme travail ?", phon:"chnou katkhedmi ?", ar:"شنو كتخدمي؟" },
    { id:"e12", fr:"Tu restes combien de temps ?", phon:"ch7al ghadi tbqay ?", ar:"شحال غادي تبقاي؟" },
    { id:"e13", fr:"Doucement, petit à petit", phon:"chwiya b chwiya", ar:"شوية بشوية", note:"Ce qu’on te dira sur ton darija. C’est un encouragement." },
    { id:"e14", fr:"Ma fille (affectueux)", phon:"a benti", ar:"ابنتي", note:"Si sa mère t’appelle benti, c’est gagné." },
    { id:"e15", fr:"Que Dieu vous garde l’un pour l’autre", phon:"Allah ykhellikoum lb3diyatkoum", ar:"الله يخليكم لبعضياتكم", note:"La bénédiction qu’on adresse à un couple. Réponds <b>amin, Allah ybarek fik</b>." },
    { id:"e16", fr:"Que ça vous arrive à vous aussi ! (dans un mariage)", phon:"3qbal 3endkoum", ar:"عقبال عندكم", note:"On vous le dira dix fois par mariage. Réponds en riant <b>amin</b>." },
    { id:"e17", fr:"Allez, on y va", phon:"yallah", ar:"يالله", note:"Signifie aussi viens, dépêche, allons-y, et parfois à peine." },
    { id:"e18", fr:"C’est bon ? C’est fini ?", phon:"safi ?", ar:"صافي؟" },
    { id:"e19", fr:"Ce n’est pas possible ! (surprise)", phon:"ma ymkench !", ar:"ما يمكنش!" },
    { id:"e20", fr:"C’est génial, c’est fort !", phon:"wa3ra !", ar:"وعرة!", note:"Argot très courant chez les jeunes : terrible au sens positif." },
    { id:"e21", fr:"Assieds-toi", phon:"glssi", ar:"كلسي" },
    { id:"e22", fr:"Que Dieu te bénisse, tu es adorable", phon:"tbarkallah 3lik, drifa", ar:"تبارك الله عليك، ظريفة" }
  ]
}
,
{
  id:"comprendre", name:"Quand tu es perdue", desc:"Comment demander de répéter, gagner du temps, et rester dans la conversation.",
  items:[
    { id:"c1", fr:"Je n’ai pas compris", phon:"ma fhemtch", ar:"ما فهمتش" },
    { id:"c2", fr:"Répète, s’il te plaît", phon:"3awdi 3afak", ar:"عاودي عافاك", alt:{ l:"à un homme", phon:"3awed 3afak", ar:"عاود عافاك" } },
    { id:"c3", fr:"Doucement, moins vite", phon:"b chwiya 3afak", ar:"بشوية عافاك" },
    { id:"c4", fr:"Qu’est-ce que ça veut dire ?", phon:"chnou kat3ni hadi ?", ar:"شنو كتعني هادي؟" },
    { id:"c5", fr:"Comment on dit ... en darija ?", phon:"kifach kaygoulou ... b ddarija ?", ar:"كيفاش كيقولو بالدارجة؟", note:"La phrase qui transforme n’importe quel dîner en cours de langue. Ils adorent." },
    { id:"c6", fr:"Tu peux le dire en français ?", phon:"tqder tgoulha b lfransawiya ?", ar:"تقدر تقولها بالفرنساوية؟" },
    { id:"c7", fr:"Attends, je réfléchis", phon:"tsenna, kanfekker", ar:"تسنى، كنفكر" },
    { id:"c8", fr:"Encore une fois", phon:"merra khra 3afak", ar:"مرة أخرى عافاك" },
    { id:"c9", fr:"Je ne connais pas ce mot", phon:"ma kan3refch had lkelma", ar:"ما كنعرفش هاد الكلمة" },
    { id:"c10", fr:"Comment ? (quand tu n’as rien saisi)", phon:"na3am ?", ar:"نعم؟", note:"Plus poli que quoi. Ton montant, sourire, ça marche toujours." },
    { id:"c11", fr:"Demande à Soufyan, il va t’expliquer", phon:"sewwel Soufyan, ghadi ychre7 lik", ar:"سول سفيان، غادي يشرح ليك" },
    { id:"c12", fr:"Je vais apprendre, promis", phon:"ghadi nt3allem, nchallah", ar:"غادي نتعلم، إن شاء الله" },
    { id:"c13", fr:"Un peu seulement", phon:"ghir chwiya", ar:"غير شوية" },
    { id:"c14", fr:"C’est difficile mais j’aime ça", phon:"s3ib, wllakin kay3jebni", ar:"صعيب، ولكن كيعجبني" }
  ]
},
{
  id:"smalltalk", name:"Papoter", desc:"Les questions faciles à poser pour ne pas rester muette dans le salon.",
  items:[
    { id:"k1", fr:"Comment va ta santé ?", phon:"kif ss77a ?", ar:"كيف الصحة؟", note:"On demande la santé avant tout le reste, surtout aux personnes âgées." },
    { id:"k2", fr:"Comment va la famille ?", phon:"labas 3la l3a2ila ?", ar:"لاباس على العائلة؟" },
    { id:"k3", fr:"Quoi de neuf ?", phon:"chnou lakhbar ?", ar:"شنو الأخبار؟" },
    { id:"k4", fr:"Tu as mangé ?", phon:"kliti ?", ar:"كليتي؟", note:"Question d’affection, pas de logistique. On te la posera tout le temps." },
    { id:"k5", fr:"Il fait chaud aujourd’hui", phon:"lyoum skhoun", ar:"اليوم سخون" },
    { id:"k6", fr:"Il fait froid ce soir", phon:"had llil bared", ar:"هاد الليل بارد" },
    { id:"k7", fr:"Le Maroc est magnifique", phon:"lmaghrib zwin bezzaf", ar:"المغرب زوين بزاف" },
    { id:"k8", fr:"J’aime beaucoup Zagora", phon:"kanbghi zagora bezzaf", ar:"كنبغي زاكورة بزاف", note:"À dire à sa mère, avec le sourire. La vallée du Drâa, les palmiers, les dattes : ils sont fiers de leur coin, et à raison." },
    { id:"k9", fr:"Tu habites où ?", phon:"fin katskoni ?", ar:"فين كتسكني؟", alt:{ l:"à un homme", phon:"fin katskoun ?", ar:"فين كتسكن؟" } },
    { id:"k10", fr:"Tu as des enfants ?", phon:"3endek drari ?", ar:"عندك دراري؟" },
    { id:"k11", fr:"Quel âge il a ?", phon:"ch7al f 3emrou ?", ar:"شحال فعمرو؟", alt:{ l:"pour une fille", phon:"ch7al f 3emrha ?", ar:"شحال فعمرها؟" } },
    { id:"k12", fr:"Il est mignon, que Dieu le bénisse", phon:"zwin, tbarkallah 3lih", ar:"زوين، تبارك الله عليه", note:"N’oublie JAMAIS le tbarkallah quand tu complimentes un enfant." },
    { id:"k13", fr:"Je suis fatiguée", phon:"ana 3ayyana", ar:"أنا عيانة", note:"Au féminin. Un homme dit <b>3ayyan</b>." },
    { id:"k14", fr:"J’ai sommeil", phon:"jani nn3as", ar:"جاني النعاس" },
    { id:"k15", fr:"Qu’est-ce qu’on fait aujourd’hui ?", phon:"chnou ghadi ndirou lyoum ?", ar:"شنو غادي نديرو اليوم؟" },
    { id:"k16", fr:"Je peux prendre une photo ?", phon:"nqder nakhod tsswira ?", ar:"نقدر ناخد تصويرة؟", note:"Toujours demander, surtout aux personnes âgées et au souk." },
    { id:"k17", fr:"C’est vraiment beau ici", phon:"zwin bezzaf hna", ar:"زوين بزاف هنا" },
    { id:"k18", fr:"Raconte-moi", phon:"3awd liya", ar:"عاود ليا", note:"Sert aussi bien pour raconte-moi une histoire que pour dis-m’en plus." }
  ]
},
{
  id:"famille", name:"Les gens de la famille", desc:"Comment appeler chacun. Se tromper de mot fait plus de dégâts qu’un mauvais accent.",
  items:[
    { id:"f1", fr:"Maman / sa mère à lui", phon:"mama / lwalida", ar:"ماما، الوالدة", note:"Tu peux appeler sa mère <b>mmi</b> (ma mère, affectueux) si la relation est chaleureuse, ou <b>lalla</b> qui est respectueux. Demande-lui ce qu’il préfère." },
    { id:"f2", fr:"Papa / son père à lui", phon:"baba / lwalid", ar:"بابا، الوالد", note:"On appelle souvent un homme plus âgé <b>3ammi</b> (mon oncle) ou <b>si</b> + prénom, par respect." },
    { id:"f3", fr:"Mon frère", phon:"khouya", ar:"خويا" },
    { id:"f4", fr:"Ma sœur", phon:"khti", ar:"ختي", note:"On appelle aussi khti n’importe quelle femme de ton âge. C’est chaleureux." },
    { id:"f5", fr:"Ton frère / ta sœur", phon:"khouk / khtek", ar:"خوك، ختك" },
    { id:"f6", fr:"La grand-mère", phon:"jjedda", ar:"الجدة", note:"Souvent appelée <b>mmi</b> par toute la maison." },
    { id:"f7", fr:"Le grand-père", phon:"jjedd", ar:"الجد" },
    { id:"f8", fr:"Tante (sœur du père / de la mère)", phon:"3amma / khala", ar:"عمة، خالة", note:"On dit <b>khalti</b> à toute femme plus âgée que soi, même inconnue. Très poli." },
    { id:"f9", fr:"Oncle (frère du père / de la mère)", phon:"3amm / khal", ar:"عم، خال" },
    { id:"f10", fr:"Les enfants", phon:"ddrari", ar:"الدراري" },
    { id:"f11", fr:"Le bébé", phon:"lbibi / ddri sghir", ar:"الدري الصغير" },
    { id:"f12", fr:"La maisonnée, les gens de la maison", phon:"had ddar", ar:"هاد الدار", note:"Quand on demande kif dayrin f ddar, on parle de tout le monde à la maison." },
    { id:"f13", fr:"Ta famille est adorable", phon:"l3a2ila dyalek drayfin bezzaf", ar:"العائلة ديالك ظريفين بزاف" },
    { id:"f14", fr:"Vous me manquez tous", phon:"twa77echtkoum koulkoum", ar:"توحشتكم كلكم", note:"À dire au moment de repartir. Prépare-toi aux larmes." },
    { id:"f15", fr:"Ma belle-famille (litt. la famille de mon mari)", phon:"3a2ilat rajli", ar:"عائلة راجلي", note:"Il n’y a pas vraiment de mot pour belle-mère : on dit <b>mmwatou</b> (sa mère à lui). Et on l’appelle mmi." },
    { id:"f16", fr:"Nous sommes une seule famille", phon:"7na 3a2ila we7da", ar:"حنا عائلة وحدة", note:"Phrase de fin de repas, quand l’ambiance est bonne. Elle fait toujours mouche." }
  ]
},
{
  id:"maison", name:"Chez eux", desc:"S’installer, demander sans gêner, aider à la maison.",
  items:[
    { id:"m1", fr:"Je peux entrer ?", phon:"nqder ndkhol ?", ar:"نقدر ندخل؟" },
    { id:"m2", fr:"Où sont les toilettes ?", phon:"fin kayna ttwalit ?", ar:"فين كاينة التواليت؟", note:"On dit aussi <b>bit lma</b> (la pièce de l’eau), plus pudique." },
    { id:"m3", fr:"Votre maison est très belle", phon:"ddar dyalkoum zwina bezzaf, tbarkallah", ar:"الدار ديالكم زوينة بزاف، تبارك الله" },
    { id:"m4", fr:"Où je peux mettre mes affaires ?", phon:"fin nkhelli l7wayj dyali ?", ar:"فين نخلي الحوايج ديالي؟" },
    { id:"m5", fr:"J’ai froid", phon:"fiya lberd", ar:"فيا البرد", note:"Utile : les maisons marocaines sont glaciales en hiver. On te donnera une couverture immédiatement." },
    { id:"m6", fr:"Je peux avoir une couverture ?", phon:"nqder nakhod chi bttaniya ?", ar:"نقدر ناخد شي بطانية؟" },
    { id:"m7", fr:"Je suis fatiguée, je vais dormir", phon:"ana 3ayyana, ghadi nn3es", ar:"أنا عيانة، غادي نعس" },
    { id:"m8", fr:"Je peux prendre une douche ?", phon:"nqder ndouch ?", ar:"نقدر ندوش؟" },
    { id:"m9", fr:"Merci pour tout", phon:"chokran 3la kolchi", ar:"شكرا على كلشي" },
    { id:"m10", fr:"Je peux aider à débarrasser ?", phon:"n3awnek nrfed ttbla ?", ar:"نعاونك نرفد الطبلة؟" },
    { id:"m11", fr:"Laisse, je le fais", phon:"khelli, ana ndirha", ar:"خلي، أنا نديرها" },
    { id:"m12", fr:"Où est le chargeur ?", phon:"fin cchargeur ?", ar:"فين الشارجور؟", note:"Beaucoup d’objets modernes gardent leur nom français. En cas de doute, dis le mot français avec l’article <b>l</b> devant." },
    { id:"m13", fr:"Il y a du wifi ?", phon:"kayn chi wifi ?", ar:"كاين شي ويفي؟" },
    { id:"m14", fr:"Je me sens chez moi ici", phon:"kan7ess rassi f dari", ar:"كنحس راسي فداري", note:"La phrase à dire à sa mère avant de partir." }
  ]
},
{
  id:"sentiments", name:"Complimenter, ressentir", desc:"Dire que tu es contente, gênée, touchée. C’est ce qui fait la différence.",
  items:[
    { id:"n1", fr:"Je suis très contente", phon:"ana ferhana bezzaf", ar:"أنا فرحانة بزاف" },
    { id:"n2", fr:"Tu es adorable", phon:"nti drifa bezzaf", ar:"نتي ظريفة بزاف", alt:{ l:"à un homme", phon:"nta drif bezzaf", ar:"نتا ظريف بزاف" } },
    { id:"n3", fr:"Ça m’a beaucoup plu", phon:"3ejbni bezzaf", ar:"عجبني بزاف" },
    { id:"n4", fr:"C’est magnifique", phon:"zwin bezzaf", ar:"زوين بزاف", alt:{ l:"pour un mot féminin", phon:"zwina bezzaf", ar:"زوينة بزاف" } },
    { id:"n5", fr:"Je suis timide", phon:"ana 7echmana", ar:"أنا حشمانة", note:"La <b>7chouma</b> (la gêne, la pudeur) est une notion centrale. Dire que tu es timide est compris et bien accueilli." },
    { id:"n6", fr:"Tu me gênes (dans le bon sens), c’est trop", phon:"7echchemtini", ar:"حشمتيني", note:"À dire quand on te couvre de cadeaux ou de nourriture. Signifie tu me combles, c’est trop d’honneur." },
    { id:"n7", fr:"Merci de m’avoir accueillie", phon:"chokran 3la listiqbal", ar:"شكرا على الاستقبال" },
    { id:"n8", fr:"Vous êtes ma deuxième famille", phon:"ntouma l3a2ila ttanya dyali", ar:"نتوما العائلة التانية ديالي" },
    { id:"n9", fr:"Tu es comme ma mère", phon:"nti b7al mmi", ar:"نتي بحال مي", note:"À garder pour un vrai moment. Ce n’est pas une phrase anodine." },
    { id:"n10", fr:"Ça me touche beaucoup", phon:"kaythez fiya bezzaf", ar:"كيتهز فيا بزاف" },
    { id:"n11", fr:"Je suis triste de partir", phon:"ana mqellqa 7it ghadi nemchi", ar:"أنا مقلقة حيت غادي نمشي" },
    { id:"n12", fr:"Je reviens vite, si Dieu veut", phon:"ghadi nrje3 daghya, nchallah", ar:"غادي نرجع دغيا، إن شاء الله" },
    { id:"n13", fr:"Je n’oublierai jamais", phon:"3emmerni ma nensa", ar:"عمرني ما ننسى" },
    { id:"n14", fr:"Vous m’avez trop gâtée", phon:"3ziztou 3liya bezzaf", ar:"عزيزتو عليا بزاف" }
  ]
},
{
  id:"telephone", name:"Au téléphone", desc:"Les appels et les visios avec sa mère : courts, chaleureux, toujours les mêmes phrases.",
  items:[
    { id:"z1", fr:"Allô, bonjour !", phon:"allo, salam 3likoum", ar:"ألو، السلام عليكم" },
    { id:"z2", fr:"Tu m’entends ?", phon:"katsem3ini ?", ar:"كتسمعيني؟", alt:{ l:"à un homme", phon:"katsem3ni ?", ar:"كتسمعني؟" } },
    { id:"z3", fr:"Je t’entends mal", phon:"ma kansem3ekch mezyan", ar:"ما كنسمعكش مزيان" },
    { id:"z4", fr:"Le réseau est mauvais", phon:"rrezo khayb", ar:"الريزو خايب" },
    { id:"z5", fr:"Attends une seconde", phon:"tsenna chwiya", ar:"تسنى شوية" },
    { id:"z6", fr:"Je te passe Soufyan", phon:"ghadi n3tik Soufyan", ar:"غادي نعطيك سفيان" },
    { id:"z7", fr:"Vous me manquez", phon:"twa77echtkoum", ar:"توحشتكم" },
    { id:"z8", fr:"Embrasse les enfants pour moi", phon:"bousi liya ddrari", ar:"بوسي ليا الدراري" },
    { id:"z9", fr:"On se rappelle", phon:"n3aytou lik men be3d", ar:"نعيطو ليك من بعد" },
    { id:"z10", fr:"Je dois raccrocher, pardon", phon:"khessni nqte3, sme7i liya", ar:"خصني نقطع، سمحي ليا" },
    { id:"z11", fr:"Salue tout le monde", phon:"sellmi liya 3la koulchi", ar:"سلمي ليا على كلشي" },
    { id:"z12", fr:"Prends soin de toi, à bientôt", phon:"thelli f rassek, bslama", ar:"تهلي فراسك، بسلامة" }
  ]
},
{
  id:"dehors", name:"Dehors : taxi, souk, chiffres", desc:"Sortir seule sans stress. Les chiffres, les prix, et le piège des riyals.",
  items:[
    { id:"d1", fr:"Un, deux, trois", phon:"wa7ed, jouj, tlata", ar:"واحد، جوج، تلاتة" },
    { id:"d2", fr:"Quatre, cinq, six", phon:"reb3a, khamsa, setta", ar:"ربعة، خمسة، ستة" },
    { id:"d3", fr:"Sept, huit, neuf, dix", phon:"seb3a, tmnya, tes3a, 3achra", ar:"سبعة، تمنية، تسعة، عشرة" },
    { id:"d4", fr:"Vingt, cinquante, cent", phon:"3achrin, khamsin, mya", ar:"عشرين، خمسين، مية" },
    { id:"d5", fr:"Combien ça coûte ?", phon:"b ch7al ?", ar:"بشحال؟" },
    { id:"d6", fr:"Attention : le prix en riyals", phon:"chnou b ddirham ?", ar:"شنو بالدرهم؟", note:"<b>Le piège</b> : au souk on annonce souvent les prix en riyals. 1 dirham = 20 riyals. Si on te dit deux mille, c’est 100 dirhams. Demande toujours le prix <b>b ddirham</b>." },
    { id:"d7", fr:"C’est trop cher", phon:"ghali bezzaf", ar:"غالي بزاف" },
    { id:"d8", fr:"Baisse un peu", phon:"nqes chwiya 3afak", ar:"نقص شوية عافاك" },
    { id:"d9", fr:"Je regarde seulement, merci", phon:"ghir kanchouf, chokran", ar:"غير كنشوف، شكرا", note:"La phrase anti-harcèlement commercial. Dite calmement, elle marche." },
    { id:"d10", fr:"Je prends celui-là", phon:"ghadi nakhod hada", ar:"غادي ناخد هادا" },
    { id:"d11", fr:"Emmène-moi à ..., s’il te plaît", phon:"ddini l ... 3afak", ar:"ديني ل... عافاك" },
    { id:"d12", fr:"Mets le compteur, s’il te plaît", phon:"khdem lkontour 3afak", ar:"خدم الكونتور عافاك", note:"En petit taxi, à dire en montant, avant de démarrer. Ça évite 90 pour cent des discussions." },
    { id:"d13", fr:"Arrête-toi ici", phon:"wqef hna 3afak", ar:"وقف هنا عافاك" },
    { id:"d14", fr:"Où est ... ?", phon:"fin kayn ... ?", ar:"فين كاين؟" },
    { id:"d15", fr:"À droite / à gauche / tout droit", phon:"3la limen / 3la liser / nichan", ar:"على ليمن، على ليسر، نيشان" },
    { id:"d16", fr:"Je me suis perdue", phon:"twedert", ar:"توضرت" },
    { id:"d17", fr:"Aidez-moi s’il vous plaît", phon:"3awnouni 3afak", ar:"عاونوني عافاك" },
    { id:"d18", fr:"L’addition, s’il vous plaît", phon:"l7sab 3afak", ar:"الحساب عافاك" },
    { id:"d19", fr:"Je cherche la pharmacie", phon:"kanqelleb 3la ffarmasyan", ar:"كنقلب على الفارماسيان" },
    { id:"d20", fr:"J’attends mon copain ici", phon:"kantsenna s7abi hna", ar:"كنتسنى صاحبي هنا", note:"Utile pour couper court quand on t’aborde dans la rue." }
  ]
},
{
  id:"occasions", name:"Fêtes et grands moments", desc:"Aïd, mariage, naissance, deuil. Les phrases qu’on attend de toi ces jours-là.",
  items:[
    { id:"o1", fr:"Joyeux Aïd", phon:"3id moubarak sa3id", ar:"عيد مبارك سعيد", note:"Réponse : <b>Allah ybarek fik</b> ou <b>3wachr mebrouka</b>." },
    { id:"o2", fr:"Bon Ramadan", phon:"ramdan moubarak", ar:"رمضان مبارك" },
    { id:"o3", fr:"Bonne rupture du jeûne", phon:"ss77a ftourkoum", ar:"صحة فطوركم", note:"À dire au moment du <b>ftour</b>, quand la table se remplit après l’appel à la prière." },
    { id:"o4", fr:"Félicitations !", phon:"mebrouk", ar:"مبروك", note:"Réponse universelle : <b>Allah ybarek fik</b>." },
    { id:"o5", fr:"Que Dieu te bénisse (la réponse)", phon:"Allah ybarek fik", ar:"الله يبارك فيك" },
    { id:"o6", fr:"Félicitations pour le bébé", phon:"mebrouk lmouloud", ar:"مبروك المولود" },
    { id:"o7", fr:"Que Dieu te le garde", phon:"Allah ykhellih lik", ar:"الله يخليه ليك" },
    { id:"o8", fr:"Bon rétablissement", phon:"Allah ychafik", ar:"الله يشافيك" },
    { id:"o9", fr:"Mes condoléances", phon:"Allah y3tikoum ssber", ar:"الله يعطيكم الصبر", note:"On dit aussi <b>Allah yrhemou</b> (que Dieu lui fasse miséricorde) pour la personne décédée. Ce sont les deux seules phrases à connaître ; le reste est du silence et de la présence." },
    { id:"o10", fr:"Que Dieu lui fasse miséricorde", phon:"Allah yrhemou", ar:"الله يرحمو", alt:{ l:"pour une femme", phon:"Allah yrhemha", ar:"الله يرحمها" } },
    { id:"o11", fr:"Bon voyage", phon:"triq ssalama", ar:"طريق السلامة" },
    { id:"o12", fr:"Bon anniversaire", phon:"3id milad sa3id", ar:"عيد ميلاد سعيد" },
    { id:"o13", fr:"Que Dieu vous garde ensemble", phon:"Allah ykhellikoum lb3diyatkoum", ar:"الله يخليكم لبعضياتكم" },
    { id:"o14", fr:"Merci pour l’invitation", phon:"chokran 3la dd3wa", ar:"شكرا على الدعوة" }
  ]
},
{
  id:"amour", name:"Avec lui", desc:"Pour l’entraînement quotidien : c’est lui ton prof, autant que ce soit agréable.",
  items:[
    { id:"a1", fr:"Je t’aime", phon:"kanbghik", ar:"كنبغيك", note:"Le je t’aime du quotidien. Plus intense : <b>kanbghik bezzaf</b>." },
    { id:"a2", fr:"Tu me manques", phon:"twa77echtek", ar:"توحشتك" },
    { id:"a3", fr:"Mon amour, ma vie", phon:"3omri", ar:"عمري", note:"Littéralement mon âge, ma vie. Le petit nom le plus courant, avec <b>7bibi</b>." },
    { id:"a4", fr:"Mon cœur", phon:"qalbi", ar:"قلبي" },
    { id:"a5", fr:"Je pense à toi", phon:"kanfekker fik", ar:"كنفكر فيك" },
    { id:"a6", fr:"Apprends-moi un mot en darija", phon:"3allemni chi kelma b ddarija", ar:"علمني شي كلمة بالدارجة", note:"À envoyer en vocal tous les jours. C’est ta méthode, en une phrase." },
    { id:"a7", fr:"Comment on dit ça ?", phon:"kifach kaygoulou hadi ?", ar:"كيفاش كيقولو هادي؟" },
    { id:"a8", fr:"Écoute mon accent", phon:"sme3 la3ksan dyali", ar:"سمع لاكسان ديالي" },
    { id:"a9", fr:"J’ai bien dit ?", phon:"gultha mezyan ?", ar:"كلتها مزيان؟" },
    { id:"a10", fr:"Ta mère est adorable", phon:"mmwek drifa bezzaf", ar:"مك ظريفة بزاف", note:"À lui dire à lui, et surtout devant elle." },
    { id:"a11", fr:"Que Dieu te garde pour moi", phon:"Allah ykhellik liya", ar:"الله يخليك ليا" },
    { id:"a12", fr:"Tu es beau", phon:"nta zwin", ar:"نتا زوين" }
  ]
}
];
