

n_Britain = {

    name:"United Kingdom",
    link: "https://en.wikipedia.org/wiki/United_Kingdom",
    leaders: [
        new span(1707,5.01,1714,8.01    ,0,"Anne",""),
        new span(1714,8.01,1727,6.11   ,0,"George I",""),
        new span(1727,6.11,1760,10.25   ,0,"George II",""),
        new span(1760,10.25,1820,1.29   ,0,"George III",""),
        new span(1820,1.29,1830,6.26   ,0,"George IV",""),
        new span(1830,6.26,1837,6.20   ,0,"William IV",""),
        new span(1837,6.20,1901,1.22   ,0,"Victoria",""),
        new span(1901,1.22,1910,5.06   ,0,"Edward VII",""),
        new span(1910,5.06,1936,1.20   ,0,"George V",""),
        new span(1936,1.20,1936,12.11   ,0,"Edward VIII",""),
        new span(1936,12.11,1952,2.06   ,0,"George VI",""),
        new span(1952,2.06,2022,9.08   ,0,"Elizabeth II",""),
        new span(2022,9.08,0,0  ,0,"Charles III",""),
    ]

}


var worldevents = [];

worldevents.push( new evnt(1347,0,1,0,"Black Death","The deadliest plague in history reaches Europe",1) );
worldevents.push( new evnt(-45,0,0,7,"Julian Calendar","Julius Caesar creates the Julian Calendar") );
worldevents.push( new evnt(800,0,4,12,"Gunpowder","Gunpowder is invented by Chinese alchemists",1) );
worldevents.push( new evnt(1582,10.15,0,4,"Gregorian Calendar","Pope Gregory XIII implements the Gregorian Calendar") );
worldevents.push( new evnt(1848,2.21,0,13,"Communist Manifesto","Karl Marx and Friedrich Engels publish The Communist Manifesto") );
worldevents.push( new evnt(1876,3.10,0,14,"Telephone","Alexander Graham Bell demonstrates the first working telephone") );
worldevents.push( new evnt(1912,4.15,1,12,"Titanic","The RMS Titanic sinks in the Atlantic") );
worldevents.push( new evnt(1517,10.31,0,13,"Luther's 95 Theses","Martin Luther publishes his 95 Theses against the Catholic Church") );
worldevents.push( new evnt(1884,11.15,4,13,"Berlin Conference","The Berlin Conference opens to regulate European colonial ambitions in Africa") );
worldevents.push( new evnt(1945,7.16,1,7,"Atomic Bomb","The first atomic bomb, is detonated") );

worldevents.push( new evnt(2024,3.30,1,7,"This Program","This timeline was released on itch.io") );

worldevents.push( new evnt(2020,3.11,1,13,"Covid-19","WHO declares SARS-CoV-2 a global pandemic") );

var wars = [];

wars.push(new span(1914,7.28,1918,11.11,0,"World War 1","",-1));
wars.push(new span(1939,9.01,1945,9.02,0,"World War 2","",-1));

//wars.push(new span(1948,5.15,0,0,4,"Arab-Israeli Conflict","",4));



periods = [];

periods.push(new span(1929,0,1939,0,5,"Great Depression","",2));
periods.push(new span(-1200,0,-1150,0,5,"Bronze Age Collapse","",5));

//wars.push(new span(722,0,1492,0,4,"Reconquista","",4));

//worldevents.sort((a , b) => a.date - b.date);

events = worldevents;

empires = [];

//Ancient Axis

axisy = 4

empires.push(new span(-5500,0,-1800,0,6,"Sumer","",axisy+1))
empires.push(new span(-2334,0,-2154,0,1,"Akkadian Empire","",axisy+2))
empires.push(new span(-2686,0,-2181,0,2,"Egypt (Old Kingdom)","",axisy+3))
empires.push(new span(-2134,0,-1690,0,2,"Egypt (Middle Kingdom)","",axisy+3))
empires.push(new span(-1550,0,-1069,0,2,"Egypt (New Kingdom)","",axisy+3))
empires.push(new span(-305,0,-30,0,6,"Egypt (Ptolemaic)","",axisy+3,axisy+3,axisy+2))
empires.push(new span(-312,0,-63,0,3,"Seleucid Empire","",axisy+4,axisy+3,axisy+5))
empires.push(new span(-2600,0,-609,0,5,"Assyria","",axisy+5))
empires.push(new span(-3100,0,-1100,0,7,"Minoan Civilization","",axisy-1))

empires.push(new span(-550,0,-330,0,0,"Achaemenid Empire (Persia)","",axisy+4,axisy+4,axisy+3))
empires.push(new span(-336,0,-319,0,5,"Macedonian Empire","",axisy+3))
empires.push(new span(-247,0,224,0,2,"Parthian Empire","",axisy+5))
empires.push(new span(-814,0,-146,0,6,"Carthage","",axisy+1,axisy,axisy+2))
empires.push(new span(-2500,0,-64,0,9,"Phoenicia","",axisy,axisy,axisy+2))

empires.push(new span(-3300,0,-1300,0,0,"Indus Valley","",axisy+7))

wars.push(new span(-264,0,-241,0,4,"First Punic War","",axisy+1.5));
wars.push(new span(-218,0,-201,0,4,"Second Punic War","",axisy+1.5));
wars.push(new span(-149,0,-146,0,4,"Third Punic War","",axisy+1.5));
wars.push(new span(-58,0,-50,0,4,"Gallic Wars","",axisy+2));
wars.push(new span(-322,0,-281,0,4,"Wars of the Diadochi","",axisy+3));

//Rome / Central Europe Axis

axisy = 5;

empires.push(new span(-509,0,-27,0,4,"Roman Republic","",axisy+1))
empires.push(new span(-27,0,395,0,1,"Roman Empire","",axisy+1))
empires.push(new span(395,0,476,0,1,"Western Roman Empire","",axisy+0,axisy+1))
empires.push(new span(395,0,1453,0,1,"Byzantium (Eastern Roman Empire)","",axisy+2,axisy+1,axisy+3))
worldevents.push( new evnt(1453,5.29,0,axisy+2,"Fall of Constantinople","The Ottomans conquer Constantinople from the Byzantines") );
empires.push(new span(481,0,800,12.25,6,"Francia","",axisy-1.5))
empires.push(new span(800,12.25,843,8.10,6,"Carolingean Empire","",axisy-1.5))
empires.push(new span(843,8.10,887,8.06,6,"East Frankia","",axisy-1,axisy-1.5))
empires.push(new span(843,8.10,987,6.3,6,"West Frankia","",axisy-2,axisy-1.5))
empires.push(new span(887,8.06,962,2.02,6,"Kingdom of Germany","",axisy-1))
empires.push(new span(962,2.02,1806,8.06,2,"Holy Roman Empire","",axisy-1))
empires.push(new span(1000,12.25,1867,3.30,7,"Kingdom of Hungary","",axisy+1,axisy+1,axisy+1.5))
empires.push(new span(1804,8.11,1867,3.30,5,"Austrian Empire","",axisy+2,axisy+2,axisy+1.5))
empires.push(new span(1867,3.30,1918,10.31,5,"Austria-Hungary","",axisy+1.5))
empires.push(new span(1525,4.10,1871,1.18,0,"Prussia","",axisy+0))
empires.push(new span(1871,1.18,1919,8.11,5,"German Empire","",axisy+0))
empires.push(new span(1933,1.30,1945,6.05,4,"Third Reich","",axisy+0))

empires.push(new span(1569,7.01,1795,10.24,4,"Poland-Lithuania","",axisy+2))

worldevents.push( new evnt(-44,3.15,0,axisy+1,"Caesar Assassination","Julius Caesar is assassinated in Rome") );
worldevents.push( new evnt(30,4.07,0,axisy+1,"Jesus' Crucifiction","Jesus Christ of Nazareth is crucified in Judea",1) );

worldevents.push( new evnt(1440,0,3,axisy+0,"Printing Press","The printing press is invented by Johannes Gutenberg",1) );

empires.push(new span(1861,3.17,1943,7.25,3,"Kingdom of Italy","",axisy-1))
empires.push(new span(987,6.3,1792,9.21,8,"Kingdom of France","",axisy-2))
empires.push(new span(1804,5.18,1815,7.07,4,"France (First Empire)","",axisy-2))
empires.push(new span(1848,2.23,1852,1.14,8,"France (Second Republic)","",axisy-2))
empires.push(new span(1852,1.14,1870,10.27,4,"France (Second Empire)","",axisy-2))
empires.push(new span(1870,9.04,1940,7.10,8,"France (Third Republic)","",axisy-2))
empires.push(new span(1946,10.13,0,0,8,"France (4th & 5th Republic)","",axisy-2))

wars.push(new span(1337,5.24,1453,10.19,4,"Hundred Years War","",axisy-2.5));
wars.push(new span(1618,5.23,1648,10.24,4,"Thirty Years War","",axisy-2.5));
wars.push(new span(1803,5.18,1815,11.12,4,"Napoleonic Wars","",axisy-2));

periods.push(new span(375,0,568,0,5,"Barbarian Invasions","",axisy));

wars.push(new span(1991,3.31,2001,8.13,4,"Yugoslav Wars","",axisy+1));

//North Axis

axisy = 2;

empires.push(new span(1066,10.14,1707,5.01,4,"Kingdom of England","",axisy+0))

worldevents.push( new evnt(1066,10.14,4,axisy+0,"Battle of Hastings","William the Conqueror begins his conquest of England") );

worldevents.push( new evnt(1776,7.04,0,axisy-1,"U.S. Independence","The United States declares independence from the British Empire") );
empires.push(new span(1776,7.04,0,0,2,"United States","",axisy-1,axisy+0))
empires.push(new span(1707,5.01,0,0,1,"Great Britain","",axisy+0,null,null,n_Britain))

wars.push(new span(1455,5.22,1487,6.16,4,"Roses' Wars","",axisy));

wars.push(new span(1947,0,1989,11.09,0,"Cold War","",axisy-0.5));
worldevents.push( new evnt(1963,11.22,1,axisy-1,"JFK Assassination","US president John F. Kennedy is assassinated in Dallas, Texas") );
worldevents.push( new evnt(1969,6.20,3,axisy-1,"Moon Landing","The United States successfully lands a manned mission on the moon") );
worldevents.push( new evnt(1989,11.09,3,axisy+3,"Berlin Wall","The Berlin Wall is torn down and the Iron Curtain collapses") );
worldevents.push( new evnt(2001,9.11,1,axisy-1,"9/11","Two hijacked planes hit the World Trade Center in New York City") );

//Siberian Axis

axisy = 11;

empires.push(new span(1922,12.30,1991,12.26,4,"Soviet Union","",axisy))
empires.push(new span(1721,9.10,1917,9.14,5,"Russian Empire","",axisy))
empires.push(new span(1547,1.16,1721,9.10,4,"Russian Tsardom","",axisy))

empires.push(new span(1136,0,1478,0,9,"Novgorod Republic","",axisy-1,axisy,axisy))
empires.push(new span(1282,0,1547,1.16,2,"Muscovy","",axisy))
empires.push(new span(880,0,1240,12.06,0,"Kievan Rus","",axisy,axisy,axisy+2))

wars.push(new span(1700,2.22,1721,9.10,4,"Great Northern War","",axisy));

wars.push(new span(1917,11.07,1923,6.16,4,"Russian Civil War","",axisy));
wars.push(new span(2014,2.27,0,0,4,"Russo-Ukranian War","",axisy));

// Preculumbian Axis

axisy = -2

empires.push(new span(-3500,0,-1800,0,5,"Norte Chico","",axisy-1))
empires.push(new span(-1200,0,-400,0,9,"Olmec","",axisy))

empires.push(new span(250,0,1697,0,3,"Maya","",axisy))
empires.push(new span(1438,0,1572,0,9,"Inca Empire","",axisy-1))
empires.push(new span(1428,0,1521,8.13,1,"Triple Alliance (Aztec)","",axisy-2))
//empires.push(new span(1450,0,0,0,6,"Iroquois Confederacy","",axisy+2))

worldevents.push( new evnt(1325,0,0,axisy-2,"Tenochtitlan","The city of Tenochtitlan is founed by the Mexica people",1) );


// Colonial Axis

axisy = 0;

empires.push(new span(1822,9.07,0,0,3,"Brazil","",axisy-2,axisy-1))
empires.push(new span(1415,8.21,1580,9.12,7,"Portuguese Empire","",axisy-1,axisy-1,axisy))
empires.push(new span(1640,12.01,1974,4.25,7,"Portugal","",axisy-1,axisy))
empires.push(new span(1492,10.12,1898,12.10,5,"Spanish Empire","",axisy))


wars.push(new span(1701,5.0,1714,2.0,4,"War of the Spanish Succession","",axisy));
wars.push(new span(1898,4.21,1898,12.10,4,"Spanish-American War","",axisy));
wars.push(new span(1936,7.17,1939,4.01,4,"Spanish Civil War","",axisy));

worldevents.push( new evnt(1492,10.12,3,axisy,"Columbus reaches America","Christopher Columbus makes landfall in The Bahamas") );

// Middle East

axisy = 8

empires.push(new span(224,4.28,651,0,8,"Sassanid Empire","",axisy))

empires.push(new span(632,0,661,0,3,"Rashidun Caliphate","",axisy+1))
empires.push(new span(661,0,750,0,2,"Umayyad Caliphate","",axisy+1))
empires.push(new span(750,0,1517,0,0,"Abbasid Caliphate","",axisy+1,axisy+1,axisy))
//empires.push(new span(1517,0,1914,0,3,"Ottoman Caliphate","",axisy,axisy+1))
empires.push(new span(1299,0,1924,3.03,3,"Ottoman Empire","",axisy))

wars.push(new span(1096,8.15,1099,8.12,4,"1st Crusade","",axisy));
wars.push(new span(1147,0,1150,0,4,"2nd Crusade","",axisy));
wars.push(new span(1189,5.11,1192,9.02,4,"3rd Crusade","",axisy));
wars.push(new span(1202,0,1204,0,4,"4th Crusade","",axisy));
wars.push(new span(1217,0,1221,0,4,"5th Crusade","",axisy));
wars.push(new span(1227,0,1229,0,4,"6th Crusade","",axisy));
wars.push(new span(1248,0,1254,0,4,"7th Crusade","",axisy));
wars.push(new span(1270,7.02,1270,11.01,4,"8th Crusade","",axisy));

// Africa Axis

axisy = 18

empires.push(new span(-400,0,960,0,9,"Kingdom of Aksum","",axisy))
empires.push(new span(1270,8.10,0,0,9,"Ethiopia","",axisy))

//Central Asia Axis

axisy = 10

wars.push(new span(2001,10.07,2021,8.30,4,"Afghanistan War","",axisy));

// East Asia Axis

axisy = 15

empires.push(new span(-2070,0,-1600,0,9,"Xia","",axisy))
empires.push(new span(-1600,0,-1045,0,3,"Shang","",axisy))
empires.push(new span(-1046,0,-256,0,9,"Zhou","",axisy))
empires.push(new span(-221,0,-206,0,5,"China (Qin)","",axisy))
empires.push(new span(-202,0,9,0,2,"China (West Han)","",axisy))
empires.push(new span(9,1.10,23,10.05,6,"China (Xin)","",axisy))
empires.push(new span(25,8.05,220,0,2,"China (East Han)","",axisy))
empires.push(new span(280,5.01,420,7.10,5,"China (Jin)","",axisy))
empires.push(new span(581,3.04,618,5.23,4,"China (Sui)","",axisy))
empires.push(new span(618,6.18,907,6.01,2,"China (Tang)","",axisy))
empires.push(new span(960,2.04,1279,3.19,6,"China (Song)","",axisy,axisy,axisy-1))
//empires.push(new span(1279,3.19,1300,0,1,"China (Yuan)","",axisy+1,axisy))
empires.push(new span(1260,5.05,1368,0,1,"China (Yuan)","",axisy-1,axisy-2,axisy))
empires.push(new span(1368,1.23,1644,4.25,2,"China (Ming)","",axisy))
empires.push(new span(1662,0,1912,2.12,5,"China (Qing)","",axisy))
empires.push(new span(1912,1.01,1950,5.01,2,"Republic of China","",axisy))
empires.push(new span(1949,10.01,0,0,4,"People's Republic of China","",axisy))

empires.push(new span(1037,0,1194,0,9,"Seljuk Empire","",axisy-2,axisy-2,axisy-3))
empires.push(new span(1077,0,1231,0,3,"Khwarazmian Empire","",axisy-3,axisy-3,axisy-2))

empires.push(new span(1242,0,1502,0,5,"Golden Horde","",axisy-3,axisy-2))
empires.push(new span(1206,0,1294,0,4,"Mongol Empire","",axisy-2))
empires.push(new span(370,0,469,0,0,"Huns","",axisy-2))

empires.push(new span(1600,10.21,1868,1.03,1,"Japan (Tokugawa)","",axisy+1))
empires.push(new span(1868,1.03,1947,5.03,4,"Empire of Japan","",axisy+1))

wars.push(new span(1927,8.01,1949,12.07,4,"Chinese Civil War","",axisy));
wars.push(new span(1618,5.07,1683,8.13,4,"Ming to Qing Transition","",axisy));
wars.push(new span(184,0,280,0,4,"Three Kingdoms War","",axisy));
wars.push(new span(1206,0,1368,0,4,"Mongol Conquests","",axisy-1));
wars.push(new span(1370,0,1405,0,4,"Timur Conquests","",axisy-2));

wars.push(new span(1955,11.01,1975,4.30,4,"Vietnam War","",axisy+2));
wars.push(new span(1950,6.25,1953,7.27,4,"Korean War","",axisy+1));


/*
empires.push(new span(1526,4.21,1858,0,6,"Mughal Empire","",3))
empires.push(new span(1757,6.23,1858,8.02,0,"East-India Company","",3,1))
empires.push(new span(1858,8.02,1947,8.15,1,"British Raj","",3))

*/


spans = wars.concat(periods);

nations = empires;
