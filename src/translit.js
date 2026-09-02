/* Lexique de prononciation : chaque mot darija, ecrit pour etre lu a haute voix
   par une francophone. Utilise au moment du build pour fabriquer la ligne
   principale de chaque fiche.

   Conventions (expliquees dans le Guide de l app) :
     h    h souffle du fond de la gorge, jamais muet
     â    le son de gorge ; si tu le rates, dis simplement un a
     kh   la jota, comme dans khol
     gh   le r grasseye de Paris
     r    roule, a l espagnole
     q    k prononce tout au fond
     -    separe les morceaux du mot, et casse les nasales francaises
   On ecrit ine, ane, one plutot que in, an, on : aucune nasale en darija.   */

const FR_LEX = {
"/":"/", "a":"a", "b":"b", "f":"f", "l":"l", "w":"ou",

"3a2ila":"âa-ila", "3a2ilat":"âa-ilate", "3achra":"âachra", "3achrin":"âachrine",
"3afak":"âafak", "3allemni":"âallemni", "3am":"âam", "3amm":"âamm", "3amma":"âamma",
"3awd":"âaoud", "3awdi":"âaoudi", "3awed":"âaoued", "3awnouni":"âaounouni",
"3ayyana":"âayyana", "3ejbek":"âejbek", "3ejbni":"âejbni", "3emmerni":"âemmerni",
"3emrha":"âemr-ha", "3emrou":"âemrou", "3endek":"âendek", "3endi":"âendi",
"3endkoum":"âendkoum", "3id":"âid", "3la":"âla", "3lih":"âlih", "3lik":"âlik",
"3likoum":"âlikoum", "3liya":"âliya", "3omri":"âomri", "3qbal":"âqbal",
"3tini":"âtini", "3ziztou":"âziztou",

"7aja":"haja", "7asasiya":"hassassiya", "7echchemtini":"hechchemtini",
"7echmana":"hechmana", "7it":"hite", "7na":"hna", "7yati":"hyati",

"Allah":"Allah", "Chloe":"Chloé", "Youssef":"Youssef",
"a7sen":"ahssen", "allo":"allô", "ana":"ana", "asfa":"assfa", "atay":"atay",
"b3da":"bâda", "b7al":"bhal", "baba":"baba", "bach":"bach",
"barakallahou":"baraka-llahou", "bared":"bared", "bariz":"bariz", "barka":"barka",
"be3d":"bâad", "benti":"benti", "bezzaf":"bezzaf", "bghiti":"bghiti", "bik":"bik",
"bikoum":"bikoum", "bla":"bla", "bnin":"bnine", "bousi":"boussi", "bslama":"bslama",
"bsmillah":"bsmi-llah", "bsse77a":"bs-sehha", "bttaniya":"bttaniya",

"cchargeur":"ch-chargeur", "ch7al":"ch-hal", "chb3et":"chbâate", "chi":"chi",
"chnou":"chnou", "chokran":"chokrane", "chwiya":"chouiya",

"daghya":"daghya", "darek":"darek", "dari":"dari", "dayer":"dayer", "dayra":"dayra",
"dayrin":"dayrine", "dd3wa":"d-dâaoua", "ddar":"d-dar", "ddarija":"d-darija",
"ddini":"ddini", "ddirham":"d-dirham", "ddrari":"d-drari", "ddri":"d-dri",
"drari":"drari", "drayfin":"drayfine", "drif":"drif", "drifa":"drifa", "dyal":"dyal",
"dyalek":"dyalek", "dyali":"dyali", "dyalkoum":"dyalkoum",

"ferhana":"ferhana", "ffarmasyan":"f-farmassyane", "fhemtch":"fhemtch", "fik":"fik",
"fin":"fine", "fiya":"fiya", "fransa":"fransa", "fransawiya":"fransaouiya",
"ftourkoum":"ftourkoum",

"gha":"gha", "ghadi":"ghadi", "ghali":"ghali", "ghedda":"ghedda", "ghir":"ghir",
"glssi":"glessi", "gultha":"goult-ha",

"had":"had", "hada":"hada", "hadi":"hadi", "harr":"harr", "hna":"hna",
"iyeh":"iyeh", "jani":"jani", "jaya":"jaya", "jit":"jite", "jjedd":"j-jedd",
"jjedda":"j-jedda", "jjem3a":"j-jemâa", "jmil":"jmile", "jouj":"jouj",

"kan":"kane", "kan3refch":"kann-ârefch", "kan7ess":"kann-hess",
"kanakoulch":"kann-akoulch", "kanbghi":"kann-bghi", "kanbghik":"kann-bghik",
"kanchouf":"kann-chouf", "kanfekker":"kann-fekker", "kanfhem":"kann-fhem",
"kanhder":"kann-hder", "kanhderch":"kann-hderch", "kankhdem":"kann-khdem",
"kanqelleb":"kann-qelleb", "kansem3ekch":"kann-semâekch", "kanskoun":"kann-skoune",
"kant3allem":"kann-tâallem", "kantsenna":"kann-tsenna",
"kat3ni":"katt-âni", "kat3rfi":"katt-ârfi", "katTayybi":"katt-tayybi",
"katTayyeb":"katt-tayyeb", "katkhedmi":"katt-khedmi", "katsem3ini":"katt-semâini",
"katsem3ni":"katt-semâni", "katsenna":"katt-senna", "katskoni":"katt-skoni",
"katskoun":"katt-skoune", "kay3jebni":"kay-âjebni", "kaygoulou":"kay-goulou",
"kaythez":"kay-thezz", "kayn":"kayne", "kayna":"kayna",

"kelma":"kelma", "khal":"khal", "khala":"khala", "khamsa":"khamsa",
"khamsin":"khamsine", "khayb":"khayb", "khdem":"khdem", "khelli":"khelli",
"khessni":"khessni", "khir":"khir", "khouk":"khouk", "khouya":"khouya",
"khra":"khra", "khtek":"khtek", "khti":"khti", "kif":"kif", "kifach":"kifache",
"klit":"klite", "klitich":"klitiche", "kliti":"kliti", "kolchi":"kolchi",
"koulchi":"koulchi", "kouli":"kouli", "koulkoum":"koulkoum", "koull":"koull",

"l3a2ila":"l-âa-ila", "l7amdoullah":"l-hammdou-llah", "l7sab":"l-hssab",
"l7wayj":"l-hwayj", "la3ksan":"l-aksane", "labas":"labass", "lakhbar":"l-akhbar",
"lb3diyatkoum":"l-bâdiyatkoum", "lberd":"l-berd", "lbibi":"l-bibi",
"lewwla":"lewwla", "lfransawiya":"l-fransaouiya", "li":"li", "lik":"lik",
"limen":"limène", "liser":"lisser", "listiqbal":"l-istiqbal", "liya":"liya",
"lkelma":"l-kelma", "lkhir":"l-khir", "lkhobz":"l-khobz", "lkontour":"l-kontour",
"lla":"lla", "lle7em":"l-lhem", "llil":"l-lil", "lma":"l-ma", "lma3oun":"l-maâoune",
"lmaghrib":"l-maghrib", "lmouloud":"l-mouloud", "lwalid":"l-oualid",
"lwalida":"l-oualida", "lwalidin":"l-oualidine", "lyoum":"l-youm",

"ma":"ma", "makayn":"makayne", "makla":"makla", "mama":"mama", "mazal":"mazal",
"mebrouk":"mebrouk", "men":"mène", "mer7ba":"merhba", "merra":"merra",
"merrakch":"merrakch", "metcharrfa":"metcharrfa", "mezyan":"mezyane",
"milad":"milad", "mmi":"mmi", "mmwek":"mmouek", "moubarak":"moubarak",
"mouchkil":"mouchkil", "mqellqa":"mqellqa", "msa":"mssa", "mya":"mya",

"n3awnek":"nâaounek", "n3aytou":"nâaytou", "n3esti":"nâesti", "n3tik":"nâtik",
"na3am":"naâam", "nabatiya":"nabatiya", "nakhod":"nakhod", "nchallah":"nchallah",
"nchoufek":"nchoufek", "nchoufou":"nchoufou", "ndirha":"ndir-ha", "ndirou":"ndirou",
"ndkhol":"ndkhol", "ndouch":"ndouch", "nemchi":"nemchi", "nensa":"nensa",
"nghsel":"nghsel", "nichan":"nichane", "nkhelli":"nkhelli", "nn3as":"n-nâas",
"nn3es":"nnâes", "nqder":"nqder", "nqes":"nqess", "nqte3":"nqtâa", "nrfed":"nrfed",
"nrje3":"nrjâa", "nt3allem":"nt-âallem", "nta":"nta", "nti":"nti", "ntouma":"ntouma",

"qalbi":"qalbi", "rajli":"rajli", "ramdan":"ramdane", "rassek":"rassek",
"rassi":"rassi", "reb3a":"rebâa", "rrezo":"r-rezo",

"s3ib":"sâib", "s7abi":"s-habi", "s7abtou":"s-habtou", "sa3id":"saâid", "safi":"safi",
"salam":"salam", "sba7":"sbah", "seb3a":"sebâa", "seksou":"seksou", "sellem":"sellem",
"sellmi":"sellmi", "sem7i":"semhi", "setta":"setta", "sewwel":"sewwel",
"sghir":"sghir", "sghira":"sghira", "skhoun":"skhoune", "sme3":"smâa", "sme7":"smeh",
"sme7i":"smehi", "smitek":"smitek", "smiti":"smiti", "sokkar":"sokkar",
"sourour":"sourour", "ss77a":"s-sehha", "ssa77a":"s-sahha", "ssalama":"s-salama",
"ssber":"s-sber",

"t3arreft":"t-âarreft", "t7echmich":"t-hechmich", "tTayybi":"t-tayybi",
"tbarkallah":"tbaraka-llah", "tbqay":"tebqay", "tes3a":"tesâa", "tesb7i":"tesbhi",
"tesba7":"tesbah", "tgoulha":"tgoul-ha", "thella":"t-hella", "thelli":"t-helli",
"tlata":"tlata", "tlatin":"tlatine", "tmnya":"tmenya", "tqder":"tqder", "triq":"triq",
"tsenna":"tsenna", "tsswira":"tsswira", "ttajin":"t-tajine", "ttanya":"t-tanya",
"ttbla":"t-tbla", "ttwalit":"t-toualit", "twa77echtek":"touahhechtek",
"twa77echtkoum":"touahhechtkoum", "twedert":"touedert",

"wa":"oua", "wa3ra":"ouaâra", "wa7ed":"ouahed", "wach":"ouach", "wakha":"ouakha",
"walou":"oualou", "we7da":"ouehda", "wifi":"wifi", "wllakin":"oulakine",
"wqef":"ouqef",

"y3awn":"yâaoune", "y3tik":"yâtik", "y3tikoum":"yâtikoum", "yallah":"yallah",
"ybarek":"ybarek", "ychafik":"ychafik", "ychre7":"ychreh", "yeddik":"yeddik",
"ykhelli":"ykhelli", "ykhellih":"ykhellih", "ykhellik":"ykhellik",
"ykhellikoum":"ykhellikoum", "ykhllik":"ykhellik", "ymkench":"ymkènch",
"yrhemha":"yrhem-ha", "yrhemou":"yrhemou",

"zidi":"zidi", "zwin":"zouine", "zwina":"zouina",
"3awnini":"âaounini", "3ayyan":"âayyane", "3emmer":"âemmer", "3emrek":"âemrek",
"3endich":"âendich", "3jebni":"âjebni", "3jebnich":"âjebnich", "3lach":"âlache",
"3tit":"âtite", "7lou":"hlou", "7ta":"hta", "aji":"aji", "b3diyatna":"bâdiyatna",
"b3id":"bâid", "b7alek":"bhalek", "bekri":"bekri", "bent":"bente", "bghit":"bghite",
"bghitch":"bghitch", "bnina":"bnina", "cadeau":"cadeau", "ch":"ch",
"chab3an":"chabâane", "chab3ana":"chabâana", "chchatt":"ch-chatt", "cheft":"chefte",
"chher":"ch-her", "chofi":"chofi", "chrbi":"chrbi", "chrebt":"chrebte",
"chrit":"chrite", "daba":"daba", "ddaw":"d-daou", "ddjaj":"d-djaj", "ddwa":"d-doua",
"ddyaf":"d-dyaf", "dert":"derte", "dima":"dima", "ferhan":"ferhane",
"fhemt":"fhemte", "fhemti":"fhemti", "ghadya":"ghadya", "gouli":"gouli",
"gult":"goulte", "hakka":"hakka", "hdert":"hderte", "hdri":"hdri", "jdid":"jdide",
"jjame3":"j-jamâa", "jjbel":"j-jbel", "jjiran":"j-jirane",
"kan3awnek":"kann-âaounek", "kan3ref":"kann-âref", "kanakhod":"kann-akhod",
"kanakoul":"kann-akoul", "kancherb":"kann-cherb", "kanchri":"kann-chri",
"kandir":"kann-dir", "kangoul":"kann-goul", "kanji":"kann-ji",
"kankhrej":"kann-khrej", "kanmchi":"kann-mchi", "kann3es":"kann-nâes",
"kansme3":"kann-smâa", "kantsennak":"kann-tsennak", "kas":"kass",
"katakli":"katt-akli", "katdiri":"katt-diri", "katji":"katt-ji",
"kaydrni":"kay-derni", "kayji":"kay-ji", "kaynin":"kaynine", "kbir":"kbire",
"khdemt":"khdemte", "khdi":"khdi", "khdit":"khdite", "khrejt":"khrejte",
"l3chiya":"l-âchiya", "l3inin":"l-âinine", "l7arr":"l-harr", "l7emmam":"l-hemmame",
"l7lib":"l-hlib", "l7lwa":"l-hlwa", "l7out":"l-hout", "l7rira":"l-hrira",
"lagar":"lagar", "lb7ar":"l-bhar", "lbab":"l-bab", "lbare7":"l-bareh",
"lbid":"l-bide", "lbit":"l-bite", "lbttaniya":"l-bttaniya", "lfawakih":"l-faouakih",
"lflous":"l-flouss", "lkerch":"l-kerch", "lkhodra":"l-khodra",
"lkouzina":"l-kouzina", "lmakla":"l-makla", "lmdina":"l-mdina", "lmel7a":"l-melha",
"lqahwa":"l-qahoua", "lqdima":"l-qdima", "lqelb":"l-qelb", "lqhwa":"l-qehoua",
"lweqt":"l-ouqte", "lyedd":"l-yedd", "m3a":"mâa", "m3akoum":"mâakoum",
"m3elqa":"mâelqa", "m3ttel":"mâttel", "mal7":"malh", "mchit":"mchite",
"mqelleq":"mqelleq", "mra":"mra", "mrida":"mrida", "n":"n", "n3ayet":"nâayet",
"n3est":"nâeste", "nakoul":"nakoul", "ncherb":"ncherb", "nchri":"nchri",
"ndir":"ndir", "nemchiw":"nemchiou", "nhar":"nhar", "nhder":"nhder",
"nkhrjou":"nkhrjou", "nnamousiya":"n-namoussiya", "nnas":"n-nass",
"nne3na3":"n-nâanâa", "nqderch":"nqderch", "nqi":"nqi", "nsit":"nsite",
"qbel":"qbel", "qdim":"qdime", "qrib":"qribe", "rajel":"rajel", "rkhis":"rkhiss",
"rras":"r-rass", "rrasi":"r-rassi", "rrjel":"r-rjel", "sa7b":"sahb",
"sa7ba":"sahba", "sahel":"sahel", "sem3i":"semâi", "simana":"simana",
"sme3t":"smâate", "ssalon":"s-salone", "ssarout":"s-sarout", "ssba7":"s-sbah",
"ssbbat":"s-sbbat", "ssbitar":"s-sbitar", "ssokkar":"s-sokkar", "ssouq":"s-souq",
"t3allemt":"t-âallemte", "tebsil":"tebsile", "temma":"temma",
"tilifoun":"tilifoune", "tnsaych":"tnsaych", "tqdri":"tqdri",
"ttonobil":"t-tonobil", "ttran":"t-trane", "waqila":"ouaqila", "weld":"oueld",
"zid":"zide", "zzenqa":"z-zenqa", "zzit":"z-zite", "zzitoun":"z-zitoune",
"nnour":"n-nour", "khatiba":"khatiba", "lkhoDra":"l-khodra", "ou":"ou",
"lhout":"l-hout", "3ammi":"âammi", "7chouma":"hchouma", "3wachr":"âouachr",
"ftour":"ftour", "7bibi":"hbibi", "si":"si", "lalla":"lalla", "amin":"amine",
"kat":"katt", "mmwatou":"mmouatou", "khalti":"khalti", "mebrouka":"mebrouka",
"lkhodra":"l-khodra", "nnas":"n-nass", "3ayni":"âayni"
};

const MISSING = new Set();
function toFR(phon){
  return phon.replace(/[A-Za-z0-9]+/g, w => {
    if (FR_LEX[w] !== undefined) return FR_LEX[w];
    MISSING.add(w);
    return w;
  });
}
module.exports = { FR_LEX, toFR, MISSING };
