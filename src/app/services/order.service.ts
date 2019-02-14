import { Injectable, OnDestroy } from '@angular/core';
import { Subject, timer, Subscription } from 'rxjs';

const fakeData = [{
  'id': 1,
  'clientName': 'Pixonyx',
  'email': 'oheritege0@tamu.edu',
  'productName': 'Bread - White, Sliced',
  'price': '$497.79',
  'sellerName': 'Ofilia Heritege'
}, {
  'id': 2,
  'clientName': 'Yoveo',
  'email': 'cerdes1@weibo.com',
  'productName': 'Beer - Mcauslan Apricot',
  'price': '$59.14',
  'sellerName': 'Claudianus Erdes'
}, {
  'id': 3,
  'clientName': 'Wordware',
  'email': 'afirebrace2@businessinsider.com',
  'productName': 'Pepper - Chili Powder',
  'price': '$230.68',
  'sellerName': 'Aeriela Firebrace'
}, {
  'id': 4,
  'clientName': 'Fatz',
  'email': 'cgorrissen3@360.cn',
  'productName': 'Sauce - Gravy, Au Jus, Mix',
  'price': '$372.36',
  'sellerName': 'Cristionna Gorrissen'
}, {
  'id': 5,
  'clientName': 'Skippad',
  'email': 'veardley4@netlog.com',
  'productName': 'Pasta - Orzo, Dry',
  'price': '$491.24',
  'sellerName': 'Veda Eardley'
}, {
  'id': 6,
  'clientName': 'Meeveo',
  'email': 'agullan5@bloglovin.com',
  'productName': 'Beer - Creemore',
  'price': '$228.02',
  'sellerName': 'Amory Gullan'
}, {
  'id': 7,
  'clientName': 'Flashset',
  'email': 'acastagnet6@wufoo.com',
  'productName': 'Bread Ww Cluster',
  'price': '$233.39',
  'sellerName': 'Andrej Castagnet'
}, {
  'id': 8,
  'clientName': 'Flashpoint',
  'email': 'cpavinese7@addthis.com',
  'productName': 'Soup - Beef, Base Mix',
  'price': '$77.74',
  'sellerName': 'Chauncey Pavinese'
}, {
  'id': 9,
  'clientName': 'Vitz',
  'email': 'ldew8@desdev.cn',
  'productName': 'Doilies - 10, Paper',
  'price': '$358.70',
  'sellerName': 'Leeann Dew'
}, {
  'id': 10,
  'clientName': 'Shuffletag',
  'email': 'gponten9@cdbaby.com',
  'productName': 'Bread Base - Toscano',
  'price': '$281.41',
  'sellerName': 'Gretal Ponten'
}, {
  'id': 11,
  'clientName': 'Realcube',
  'email': 'wguttridgea@squidoo.com',
  'productName': 'Sage - Ground',
  'price': '$97.95',
  'sellerName': 'Wallis Guttridge'
}, {
  'id': 12,
  'clientName': 'Kwimbee',
  'email': 'ctapsellb@ask.com',
  'productName': 'Paper Towel Touchless',
  'price': '$241.00',
  'sellerName': 'Cherianne Tapsell'
}, {
  'id': 13,
  'clientName': 'Gabcube',
  'email': 'iduckhamc@upenn.edu',
  'productName': 'Mini - Vol Au Vents',
  'price': '$296.89',
  'sellerName': 'Idette Duckham'
}, {
  'id': 14,
  'clientName': 'Skyba',
  'email': 'sdresched@un.org',
  'productName': 'Bread - Bagels, Plain',
  'price': '$471.48',
  'sellerName': 'Susy Dresche'
}, {
  'id': 15,
  'clientName': 'Zoonoodle',
  'email': 'tcarpmilee@google.com.au',
  'productName': 'Wine - Magnotta - Pinot Gris Sr',
  'price': '$207.94',
  'sellerName': 'Tabatha Carpmile'
}, {
  'id': 16,
  'clientName': 'Gabvine',
  'email': 'gtappingtonf@rakuten.co.jp',
  'productName': 'Irish Cream - Baileys',
  'price': '$298.82',
  'sellerName': 'Gill Tappington'
}, {
  'id': 17,
  'clientName': 'Youspan',
  'email': 'cdavydkovg@wikipedia.org',
  'productName': 'Garlic - Primerba, Paste',
  'price': '$164.72',
  'sellerName': 'Cheryl Davydkov'
}, {
  'id': 18,
  'clientName': 'Feedfire',
  'email': 'misbellh@state.tx.us',
  'productName': 'Guinea Fowl',
  'price': '$366.35',
  'sellerName': 'Maura Isbell'
}, {
  'id': 19,
  'clientName': 'Katz',
  'email': 'liddoni@myspace.com',
  'productName': 'Carbonated Water - Blackcherry',
  'price': '$399.30',
  'sellerName': 'Lorne Iddon'
}, {
  'id': 20,
  'clientName': 'Dazzlesphere',
  'email': 'acurryj@yelp.com',
  'productName': 'Juice - Pineapple, 341 Ml',
  'price': '$312.26',
  'sellerName': 'Albertina Curry'
}, {
  'id': 21,
  'clientName': 'Quimm',
  'email': 'pessamk@businesswire.com',
  'productName': 'Wine - Mondavi Coastal Private',
  'price': '$66.84',
  'sellerName': 'Pincus Essam'
}, {
  'id': 22,
  'clientName': 'Brainverse',
  'email': 'edavidsohnl@technorati.com',
  'productName': 'Dehydrated Kelp Kombo',
  'price': '$433.99',
  'sellerName': 'Erv Davidsohn'
}, {
  'id': 23,
  'clientName': 'Wikivu',
  'email': 'fhelem@google.de',
  'productName': 'Pastry - Banana Tea Loaf',
  'price': '$256.80',
  'sellerName': 'Ferris Hele'
}, {
  'id': 24,
  'clientName': 'Voomm',
  'email': 'wgittosen@posterous.com',
  'productName': 'Black Currants',
  'price': '$123.93',
  'sellerName': 'Wade Gittose'
}, {
  'id': 25,
  'clientName': 'Demizz',
  'email': 'rfelsteado@multiply.com',
  'productName': 'Pate - Peppercorn',
  'price': '$391.95',
  'sellerName': 'Ricardo Felstead'
}, {
  'id': 26,
  'clientName': 'Wikizz',
  'email': 'bramalhop@sohu.com',
  'productName': 'Chicken - Whole',
  'price': '$231.54',
  'sellerName': 'Bartholemy Ramalho'
}, {
  'id': 27,
  'clientName': 'Fliptune',
  'email': 'ojanochq@who.int',
  'productName': 'Sour Puss Raspberry',
  'price': '$397.28',
  'sellerName': 'Ofella Janoch'
}, {
  'id': 28,
  'clientName': 'Linkbuzz',
  'email': 'dkleinmannr@independent.co.uk',
  'productName': 'Plasticknivesblack',
  'price': '$108.42',
  'sellerName': 'Derek Kleinmann'
}, {
  'id': 29,
  'clientName': 'Realcube',
  'email': 'ebonomes@seesaa.net',
  'productName': 'Tendrils - Baby Pea, Organic',
  'price': '$14.61',
  'sellerName': 'Effie Bonome'
}, {
  'id': 30,
  'clientName': 'Browseblab',
  'email': 'kjewert@jiathis.com',
  'productName': 'Steel Wool S.o.s',
  'price': '$73.89',
  'sellerName': 'Kingston Jewer'
}, {
  'id': 31,
  'clientName': 'Browsezoom',
  'email': 'koakeyu@wordpress.org',
  'productName': 'Onion - Dried',
  'price': '$18.64',
  'sellerName': 'Katharyn Oakey'
}, {
  'id': 32,
  'clientName': 'Edgeblab',
  'email': 'gbrayfordv@baidu.com',
  'productName': 'Filling - Mince Meat',
  'price': '$396.92',
  'sellerName': 'Gaspar Brayford'
}, {
  'id': 33,
  'clientName': 'Demivee',
  'email': 'lpointinw@google.com.au',
  'productName': 'Wine - Red, Gamay Noir',
  'price': '$161.90',
  'sellerName': 'Lynn Pointin'
}, {
  'id': 34,
  'clientName': 'Tambee',
  'email': 'oshervilx@so-net.ne.jp',
  'productName': 'Mountain Dew',
  'price': '$70.98',
  'sellerName': 'Ody Shervil'
}, {
  'id': 35,
  'clientName': 'Yodoo',
  'email': 'vhayseldeny@photobucket.com',
  'productName': 'Tomatoes - Vine Ripe, Yellow',
  'price': '$125.14',
  'sellerName': 'Venus Hayselden'
}, {
  'id': 36,
  'clientName': 'Devcast',
  'email': 'gpratiz@kickstarter.com',
  'productName': 'Coriander - Seed',
  'price': '$378.36',
  'sellerName': 'Godiva Prati'
}, {
  'id': 37,
  'clientName': 'Digitube',
  'email': 'qmconie10@marketwatch.com',
  'productName': 'Kellogs Special K Cereal',
  'price': '$271.55',
  'sellerName': 'Quint McOnie'
}, {
  'id': 38,
  'clientName': 'Brightdog',
  'email': 'scantopher11@t-online.de',
  'productName': 'Beer - Muskoka Cream Ale',
  'price': '$134.21',
  'sellerName': 'Shawnee Cantopher'
}, {
  'id': 39,
  'clientName': 'Quinu',
  'email': 'rbruckenthal12@usa.gov',
  'productName': 'Wine - Chardonnay Mondavi',
  'price': '$355.92',
  'sellerName': 'Rosalind Bruckenthal'
}, {
  'id': 40,
  'clientName': 'Shufflebeat',
  'email': 'sgothrup13@ycombinator.com',
  'productName': 'Pasta - Rotini, Colour, Dry',
  'price': '$415.69',
  'sellerName': 'Sadie Gothrup'
}, {
  'id': 41,
  'clientName': 'Browsebug',
  'email': 'icottell14@craigslist.org',
  'productName': 'Pork - Tenderloin, Frozen',
  'price': '$355.02',
  'sellerName': 'Ingar Cottell'
}, {
  'id': 42,
  'clientName': 'Jabbersphere',
  'email': 'rpiddington15@unc.edu',
  'productName': 'Onions - Cooking',
  'price': '$34.51',
  'sellerName': 'Rebekah Piddington'
}, {
  'id': 43,
  'clientName': 'Babbleblab',
  'email': 'prysdale16@mapy.cz',
  'productName': 'Pepper - Cubanelle',
  'price': '$99.92',
  'sellerName': 'Phaedra Rysdale'
}, {
  'id': 44,
  'clientName': 'Twitterlist',
  'email': 'eethelstone17@fc2.com',
  'productName': 'Nantucket Pine Orangebanana',
  'price': '$314.06',
  'sellerName': 'Edna Ethelstone'
}, {
  'id': 45,
  'clientName': 'Linklinks',
  'email': 'hdeaton18@imageshack.us',
  'productName': 'Shrimp - 31/40',
  'price': '$397.28',
  'sellerName': 'Henderson Deaton'
}, {
  'id': 46,
  'clientName': 'Aivee',
  'email': 'flente19@engadget.com',
  'productName': 'Squid Ink',
  'price': '$466.14',
  'sellerName': 'Filbert Lente'
}, {
  'id': 47,
  'clientName': 'Jamia',
  'email': 'npiggins1a@google.nl',
  'productName': 'Flour - Fast / Rapid',
  'price': '$55.76',
  'sellerName': 'Nelli Piggins'
}, {
  'id': 48,
  'clientName': 'Oozz',
  'email': 'shenrique1b@mediafire.com',
  'productName': 'Sponge Cake Mix - Vanilla',
  'price': '$347.58',
  'sellerName': 'Sheena Henrique'
}, {
  'id': 49,
  'clientName': 'Jabbercube',
  'email': 'bplan1c@prnewswire.com',
  'productName': 'Beer - Sleemans Cream Ale',
  'price': '$497.34',
  'sellerName': 'Bertie Plan'
}, {
  'id': 50,
  'clientName': 'Bluezoom',
  'email': 'wjaslem1d@wufoo.com',
  'productName': 'Lettuce - Green Leaf',
  'price': '$452.95',
  'sellerName': 'Wilt Jaslem'
}, {
  'id': 51,
  'clientName': 'Gabtune',
  'email': 'tridd1e@constantcontact.com',
  'productName': 'Wine - Alsace Riesling Reserve',
  'price': '$248.34',
  'sellerName': 'Tybalt Ridd'
}, {
  'id': 52,
  'clientName': 'Vinder',
  'email': 'afosdike1f@ameblo.jp',
  'productName': 'Cake Circle, Foil, Scallop',
  'price': '$23.43',
  'sellerName': 'Ashli Fosdike'
}, {
  'id': 53,
  'clientName': 'Skimia',
  'email': 'wtims1g@gravatar.com',
  'productName': 'Buffalo - Striploin',
  'price': '$348.65',
  'sellerName': 'Ware Tims'
}, {
  'id': 54,
  'clientName': 'Skippad',
  'email': 'nbratchell1h@who.int',
  'productName': 'Wine - Ej Gallo Sierra Valley',
  'price': '$428.02',
  'sellerName': 'Nathanial Bratchell'
}, {
  'id': 55,
  'clientName': 'Miboo',
  'email': 'swiggam1i@indiatimes.com',
  'productName': 'Cinnamon - Ground',
  'price': '$152.65',
  'sellerName': 'Sheila-kathryn Wiggam'
}, {
  'id': 56,
  'clientName': 'Mycat',
  'email': 'vroseborough1j@jigsy.com',
  'productName': 'Dikon',
  'price': '$215.07',
  'sellerName': 'Vinny Roseborough'
}, {
  'id': 57,
  'clientName': 'Linktype',
  'email': 'rnassie1k@hao123.com',
  'productName': 'Tomatoes Tear Drop',
  'price': '$362.50',
  'sellerName': 'Ring Nassie'
}, {
  'id': 58,
  'clientName': 'Jabberstorm',
  'email': 'cingerith1l@163.com',
  'productName': 'Tea - Grapefruit Green Tea',
  'price': '$354.37',
  'sellerName': 'Celinda Ingerith'
}, {
  'id': 59,
  'clientName': 'Skajo',
  'email': 'bskitterel1m@about.me',
  'productName': 'Yogurt - Assorted Pack',
  'price': '$165.35',
  'sellerName': 'Byram Skitterel'
}, {
  'id': 60,
  'clientName': 'Devshare',
  'email': 'cmoncreiff1n@ow.ly',
  'productName': 'Food Colouring - Blue',
  'price': '$402.51',
  'sellerName': 'Chrisse Moncreiff'
}, {
  'id': 61,
  'clientName': 'Edgeify',
  'email': 'wjoe1o@squarespace.com',
  'productName': 'Mushroom - Shitake, Fresh',
  'price': '$363.97',
  'sellerName': 'Win Joe'
}, {
  'id': 62,
  'clientName': 'Thoughtsphere',
  'email': 'tblannin1p@taobao.com',
  'productName': 'Nacho Chips',
  'price': '$64.27',
  'sellerName': 'Tandie Blannin'
}, {
  'id': 63,
  'clientName': 'Linktype',
  'email': 'jgraal1q@cloudflare.com',
  'productName': 'Cookies - Amaretto',
  'price': '$243.64',
  'sellerName': 'Jenny Graal'
}, {
  'id': 64,
  'clientName': 'Rhynoodle',
  'email': 'rlannon1r@usnews.com',
  'productName': 'Fish - Atlantic Salmon, Cold',
  'price': '$151.15',
  'sellerName': 'Rhoda Lannon'
}, {
  'id': 65,
  'clientName': 'Zoomzone',
  'email': 'rkernes1s@sina.com.cn',
  'productName': 'Pork - Ham Hocks - Smoked',
  'price': '$319.41',
  'sellerName': 'Rosaleen Kernes'
}, {
  'id': 66,
  'clientName': 'Feedfire',
  'email': 'jboxill1t@patch.com',
  'productName': 'Soup - Knorr, Classic Can. Chili',
  'price': '$262.01',
  'sellerName': 'Jasper Boxill'
}, {
  'id': 67,
  'clientName': 'Devify',
  'email': 'creyburn1u@businessinsider.com',
  'productName': 'Pepper - Red, Finger Hot',
  'price': '$289.94',
  'sellerName': 'Cody Reyburn'
}, {
  'id': 68,
  'clientName': 'Talane',
  'email': 'farlett1v@abc.net.au',
  'productName': 'Wine - Rioja Campo Viejo',
  'price': '$377.17',
  'sellerName': 'Fabien Arlett'
}, {
  'id': 69,
  'clientName': 'Tekfly',
  'email': 'vsyfax1w@sakura.ne.jp',
  'productName': 'Dill Weed - Fresh',
  'price': '$495.72',
  'sellerName': 'Vernon Syfax'
}, {
  'id': 70,
  'clientName': 'LiveZ',
  'email': 'rverner1x@uiuc.edu',
  'productName': 'Pepper - White, Whole',
  'price': '$123.42',
  'sellerName': 'Romeo Verner'
}, {
  'id': 71,
  'clientName': 'Izio',
  'email': 'kballe1y@godaddy.com',
  'productName': 'Wine - Sauvignon Blanc',
  'price': '$34.27',
  'sellerName': 'Klarrisa Balle'
}, {
  'id': 72,
  'clientName': 'Zava',
  'email': 'ryeabsley1z@google.co.jp',
  'productName': 'Soup - Base Broth Beef',
  'price': '$263.34',
  'sellerName': 'Rolland Yeabsley'
}, {
  'id': 73,
  'clientName': 'Meedoo',
  'email': 'cbilam20@sfgate.com',
  'productName': 'Potatoes - Yukon Gold, 80 Ct',
  'price': '$121.31',
  'sellerName': 'Colleen Bilam'
}, {
  'id': 74,
  'clientName': 'Meeveo',
  'email': 'cculross21@qq.com',
  'productName': 'Crackers - Soda / Saltins',
  'price': '$483.74',
  'sellerName': 'Christiane Culross'
}, {
  'id': 75,
  'clientName': 'Oyondu',
  'email': 'imcgifford22@google.ca',
  'productName': 'Mushroom - Portebello',
  'price': '$114.15',
  'sellerName': 'Ibby McGifford'
}, {
  'id': 76,
  'clientName': 'Oloo',
  'email': 'rgammon23@ebay.com',
  'productName': 'Cake - Dulce De Leche',
  'price': '$208.45',
  'sellerName': 'Ravi Gammon'
}, {
  'id': 77,
  'clientName': 'Babbleblab',
  'email': 'sdeackes24@cyberchimps.com',
  'productName': 'Milkettes - 2%',
  'price': '$328.57',
  'sellerName': 'Say Deackes'
}, {
  'id': 78,
  'clientName': 'Yambee',
  'email': 'rlauritzen25@feedburner.com',
  'productName': 'Salmon - Smoked, Sliced',
  'price': '$232.30',
  'sellerName': 'Rhianon Lauritzen'
}, {
  'id': 79,
  'clientName': 'Realcube',
  'email': 'ctrevino26@hexun.com',
  'productName': 'Pasta - Bauletti, Chicken White',
  'price': '$368.42',
  'sellerName': 'Clayton Trevino'
}, {
  'id': 80,
  'clientName': 'Kwideo',
  'email': 'apavlov27@cargocollective.com',
  'productName': 'Vodka - Moskovskaya',
  'price': '$51.46',
  'sellerName': 'Abbie Pavlov'
}, {
  'id': 81,
  'clientName': 'Geba',
  'email': 'egromley28@lulu.com',
  'productName': 'Mussels - Cultivated',
  'price': '$345.76',
  'sellerName': 'Emily Gromley'
}, {
  'id': 82,
  'clientName': 'Feedmix',
  'email': 'clawman29@dailymail.co.uk',
  'productName': 'Chickhen - Chicken Phyllo',
  'price': '$24.67',
  'sellerName': 'Corey Lawman'
}, {
  'id': 83,
  'clientName': 'Cogibox',
  'email': 'jfawbert2a@symantec.com',
  'productName': 'Long Island Ice Tea',
  'price': '$410.86',
  'sellerName': 'Jordon Fawbert'
}, {
  'id': 84,
  'clientName': 'Dabtype',
  'email': 'vbisset2b@japanpost.jp',
  'productName': 'Pickles - Gherkins',
  'price': '$259.57',
  'sellerName': 'Vaclav Bisset'
}, {
  'id': 85,
  'clientName': 'Mydeo',
  'email': 'jbazely2c@berkeley.edu',
  'productName': 'Table Cloth 53x53 White',
  'price': '$42.92',
  'sellerName': 'Justina Bazely'
}, {
  'id': 86,
  'clientName': 'Skimia',
  'email': 'ldearn2d@1und1.de',
  'productName': 'Danishes - Mini Raspberry',
  'price': '$281.67',
  'sellerName': 'Lemmie Dearn'
}, {
  'id': 87,
  'clientName': 'Tavu',
  'email': 'bfaldo2e@unesco.org',
  'productName': 'Bread - Bagels, Mini',
  'price': '$243.13',
  'sellerName': 'Baillie Faldo'
}, {
  'id': 88,
  'clientName': 'Devbug',
  'email': 'hcraigheid2f@cbsnews.com',
  'productName': 'Cake Sheet Combo Party Pack',
  'price': '$311.75',
  'sellerName': 'Hurleigh Craigheid'
}, {
  'id': 89,
  'clientName': 'Skilith',
  'email': 'pneave2g@bandcamp.com',
  'productName': 'Vector Energy Bar',
  'price': '$382.73',
  'sellerName': 'Pamela Neave'
}, {
  'id': 90,
  'clientName': 'Feedbug',
  'email': 'gveeler2h@fc2.com',
  'productName': 'Pepper - Sorrano',
  'price': '$259.47',
  'sellerName': 'Gavan Veeler'
}, {
  'id': 91,
  'clientName': 'Yombu',
  'email': 'gcuthbertson2i@unicef.org',
  'productName': 'V8 Splash Strawberry Banana',
  'price': '$248.88',
  'sellerName': 'Gwynne Cuthbertson'
}, {
  'id': 92,
  'clientName': 'Ntags',
  'email': 'ysergison2j@goo.ne.jp',
  'productName': 'Arctic Char - Fillets',
  'price': '$437.44',
  'sellerName': 'Yul Sergison'
}, {
  'id': 93,
  'clientName': 'Trunyx',
  'email': 'rlindeberg2k@pcworld.com',
  'productName': 'Figs',
  'price': '$217.33',
  'sellerName': 'Ricki Lindeberg'
}, {
  'id': 94,
  'clientName': 'Eazzy',
  'email': 'ksturridge2l@sun.com',
  'productName': 'Dawn Professionl Pot And Pan',
  'price': '$413.20',
  'sellerName': 'Karisa Sturridge'
}, {
  'id': 95,
  'clientName': 'Youtags',
  'email': 'apower2m@discuz.net',
  'productName': 'Sole - Fillet',
  'price': '$82.74',
  'sellerName': 'Araldo Power'
}, {
  'id': 96,
  'clientName': 'Zoozzy',
  'email': 'medge2n@examiner.com',
  'productName': 'Garbag Bags - Black',
  'price': '$414.89',
  'sellerName': 'Mignonne Edge'
}, {
  'id': 97,
  'clientName': 'Wordtune',
  'email': 'ming2o@craigslist.org',
  'productName': 'Turkey - Breast, Double',
  'price': '$120.20',
  'sellerName': 'Maye Ing'
}, {
  'id': 98,
  'clientName': 'Pixonyx',
  'email': 'xsidworth2p@harvard.edu',
  'productName': 'Mop Head - Cotton, 24 Oz',
  'price': '$139.35',
  'sellerName': 'Xenos Sidworth'
}, {
  'id': 99,
  'clientName': 'Riffpath',
  'email': 'shupe2q@qq.com',
  'productName': 'Dried Apple',
  'price': '$347.89',
  'sellerName': 'Sophie Hupe'
}, {
  'id': 100,
  'clientName': 'Skynoodle',
  'email': 'dfurmedge2r@angelfire.com',
  'productName': 'Pork - Loin, Center Cut',
  'price': '$443.23',
  'sellerName': 'Duff Furmedge'
}];

export class OrderItem {
  id: Number;
  clientName: string;
  email: string;
  productName: string;
  price: string;
  sellerName: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnDestroy {

  private _ordersSource = new Subject<OrderItem>();
  orderPlaces$ = this._ordersSource.asObservable();

  private timerSubscription: Subscription;
  constructor() {
    this.timerSubscription  = timer(1000, 5000)
      .subscribe((index) => {
        const newOrder: OrderItem = fakeData[index];
        this._ordersSource.next(newOrder);
      });
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
