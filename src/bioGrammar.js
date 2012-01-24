var bioGrammar = [];

bioGrammar["book_title"] = [
	"Agile <programming_language>",
	"Clean <programming_language>",
	"The best practices for <programming_language>",
	"Learn <programming_language> the easy way",
	"Implementing <agile_adj_lowercase> software projects",
	"Developing <agile_adj_lowercase> <programming_language> software",
	"Applying <craftman_method_lowercase>",
	"Applying <craftman_method_lowercase> the hard way"
];

bioGrammar["craftman_method_lowercase"] = [
	"TDD",
	"Scrum",
	"Kanban",
	"continuous integration",
	"XP",
	"pair programming",
	"test automation",
	"unit testing",
	"BDD",
	"ATDD"
];

bioGrammar["craftman_method_uppercase"] = [
	"TDD",
	"Scrum",
	"Kanban",
	"Continuous integration",
	"XP",
	"Pair programming",
	"Test automation",
	"Unit testing",
	"BDD",
	"ATDD"
];

bioGrammar["agile_adj_lowercase"] = [
	"agile",
	"lean",
	"handcrafted",
	"XP"
];

bioGrammar["agile_adj_uppercase"] = [
	"Agile",
	"Lean",
	"Handcrafted",
	"XP"
];

bioGrammar["book_sentence"] = [
	"'<book_title>'",
	"'<book_title>' and '<book_title>'",
	"'<book_title>' and '<book_title>' (contributor)"
];

bioGrammar["book_bio"] = [
	"Prize-Winning author of <book_sentence>",
	"Author of <book_sentence>",
	"Co-author of <book_sentence>"
];

bioGrammar["programming_language"] = [
	"Ruby on Rails",
	"Java",
	"Clojure",
	"Haskell",
	"RoR",
	"Groovy",
	"Python",
	"Javascript"
];

bioGrammar["code"] = [
	"code",
	"<programming_language> <software>"
];

bioGrammar["software"] = [
	"software",
	"apps",
	"webs",
	"applications"
];

bioGrammar["company"] = [
	"<company_domain>",
	"<company_name>",
	"<company_with_surname> <company_surname>"
];

bioGrammar["company_name"] = [
	"CompuGlobalHyperMegaNet",
	"Agile<company_complement>",
	"Awesome<company_complement>",
	"Next<company_complement>"
];

bioGrammar["company_with_surname"] = [
	"Craft",
	"Zen",
	"Superior",
	"Kryptonite",
	"Adamantium",
	"Grosso",
	"63arrows",
	"XProg",
	"Stark",
	"TREX",
	"ExtraPro",
	"Droid",
	"Bushido"
];

bioGrammar["company_surname"] = [
	"Technologies",
	"Soft",
	"Software",
	"Solutions",
	"Business",
	"Inc",
	"Tech",
];

bioGrammar["company_complement"] = [
	"Learning",
	"Coding",
	"Crafting",
	"Developers",
	"Craftmen",
	"Ninjas"
];

bioGrammar["domain"] = [
	".com",
	".net",
	".biz",
];

bioGrammar["company_domain"] = [
	"<company_name><domain>",
	"<company_with_surname><company_surname><domain>"
];

bioGrammar["code_writer"] = [
	"I write <code> for <company>",
	"Writing <code> for <company>"
];

bioGrammar["pro_item_beginning"] = [
	"<craftman_method_uppercase> <pro_adj>"
];

bioGrammar["pro_item"] = [
	"<craftman_method_lowercase> <pro_adj>"
];

bioGrammar["pro_adj"] = [
	"coach",
	"junkie",
	"enthusiast",
	"lover",
	"ninja",
	"ronin",
	"samurai",
	"expert"
];

bioGrammar["programmer"] = [
	"programmer",
	"developer",
	"craftman",
	"expert",
	"ninja"
];

bioGrammar["programmer_title"] = [
	"<programming_language> <programmer>"
];

bioGrammar["job_title"] = [
	"CEO",
	"CTO",
	"CIO",
	"Founder",
	"Cofounder"
];

bioGrammar["job_sentence"] = [
	"<job_title> of <company>",
	"Working at <company>"
];

bioGrammar["lil_item"] = [
	"husband",
	"mom",
	"father",
	"vegetarian",
	"sports fan",
	"family man"
];

bioGrammar["joy_item"] = [
	"bassoon player",
	"guitarist",
	"fisherman",
	"drum player",
	"football player",
	"beatboxer",
	"pilot"
];

bioGrammar["joy_activity"] = [
	"cheese",
	"wine",
	"reading",
	"watching TV series",
	"running",
	"playing ping-pong",
	"flying"
];

bioGrammar["enumerations"] = [
	"<pro_item_beginning>  and <joy_item_adj> <joy_item>",
	"<job_sentence>, <programmer_title>, <lil_item>. Likes <joy_activity>",
	"<job_sentence>, <pro_item>, <lil_item>",
	"<pro_item_beginning>, <programmer_title>, <lil_item>",
	"<job_sentence> / <pro_item> / <lil_item> / <joy_item_adj> <joy_item>"
];

bioGrammar["joy_item_adj"] = [
	"occasional",
	"amateur",
	"semi-pro",
	""
];

bioGrammar["bio"] = [
	"<code_writer>. <book_bio>.",
	"<enumerations>.",
	"<enumerations>. <code_writer> also.",
	"<book_bio>. <enumerations>."
];


