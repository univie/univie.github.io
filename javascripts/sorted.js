angular.module('LoginPage', [])
.controller('SortedCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
	$http.get('italiantalks_sorted.json').then(function(data) {
		$scope.data = data.data;
		console.log($scope.data);
	});
	$scope.open = function(id) {
		$window.open('http://www.ted.com/talks/view/id/' + id);
	};
// total tokens: 90661
/*	$scope.data = [
  {
    "rank": 0,
    "id": "179",
    "speaker": "Kenichi Ebina",
    "name": "Hip-hop dance and a little magic",
    "shortsummary": "Kenichi Ebina moves his body in a manner that appears to defy the limits imposed by the human skeleton. He combines breakdancing and hip-hop with mime using movements that are simultaneously precise and fluid.",
    "duration": "0:03:32",
    "publishdate": "10/3/2007"
  },
  {
    "rank": 1,
    "id": "1156",
    "speaker": "Robert Gupta and Joshua Roman",
    "name": "Robert Gupta and Joshua Roman duet on \"Passacaglia\"",
    "shortsummary": "It's a master class in collaboration as violinist Robert Gupta and cellist Joshua Roman perform Halvorsen's \"Passacaglia\" for violin and viola. Roman takes the viola part on his Stradivarius cello. It's powerful to watch the two musicians connect moment to moment (and recover from a mid-performance hiccup). The two are both TED Fellows, and their deep connection powers this sparkling duet. ",
    "duration": "0:09:21",
    "publishdate": "5/27/2011"
  },
  {
    "rank": 2,
    "id": "1464",
    "speaker": "Quixotic Fusion",
    "name": "Quixotic Fusion: Dancing with light ",
    "shortsummary": "Quixotic Fusion is an ensemble of artists that brings together aerial acrobatics, dance, theater, film, music and visual fx. Watch as they perform three transporting dance pieces at TED2012.",
    "duration": "0:12:22",
    "publishdate": "6/1/2012 15:10:00"
  },
  {
    "rank": 3,
    "id": "557",
    "speaker": "Kaki King",
    "name": "Kaki King rocks out to \"Pink Noise\"",
    "shortsummary": "Kaki King, the first female on Rolling Stone's \"guitar god\" list, rocks out to a full live set at TED2008, including her breakout single, \"Playing with Pink Noise.\" Jaw-dropping virtuosity meets a guitar technique that truly stands out.",
    "duration": "0:14:49",
    "publishdate": "5/29/2009"
  },
  {
    "rank": 4,
    "id": "1663",
    "speaker": "Cesar Kuriyama",
    "name": "Cesar Kuriyama: One second every day",
    "shortsummary": "There are so many tiny, beautiful, funny, tragic moments in your life -- how are you going to remember them all? Director Cesar Kuriyama shoots one second of video every day as part of an ongoing project to collect all the special bits of his life.",
    "duration": "0:08:02",
    "publishdate": "2/6/2013 16:08:00"
  },
  {
    "rank": 5,
    "id": "1111",
    "speaker": "AnnMarie Thomas",
    "name": "AnnMarie Thomas: Hands-on science with squishy circuits",
    "shortsummary": "In a zippy demo at TED U, AnnMarie Thomas shows how two different kinds of homemade play dough can be used to demonstrate electrical properties -- by lighting up LEDs, spinning motors, and turning little kids into circuit designers.",
    "duration": "0:04:08",
    "publishdate": "4/4/2011"
  },
  {
    "rank": 6,
    "id": "1796",
    "speaker": "Roberto D'Angelo + Francesca Fedeli",
    "name": "Roberto D'Angelo + Francesca Fedeli: In our baby's illness, a life lesson",
    "shortsummary": "Roberto D'Angelo and Francesca Fedeli thought their baby boy Mario was healthy -- until at 10 days old, they discovered he'd had a perinatal stroke. With Mario unable to control the left side of his body, they grappled with tough questions: Would he be \"normal?â€ Could he live a full life? The poignant story of parents facing their fears -- and how they turned them around.\n",
    "duration": "0:06:17",
    "publishdate": "7/24/2013 14:58:00"
  },
  {
    "rank": 7,
    "id": "1704",
    "speaker": "Sanjay Dastoor",
    "name": "Sanjay Dastoor: A skateboard, with a boost",
    "shortsummary": "Imagine an electric vehicle that can get you to work -- or anywhere in a six-mile radius -- quickly, without traffic frustrations or gasoline. Now imagine you can pick it up and carry it with you. Yes, this souped-up skateboard could change the face of morning commutes.",
    "duration": "0:04:20",
    "publishdate": "4/2/2013 15:06:00"
  },
  {
    "rank": 8,
    "id": "755",
    "speaker": "Derek Sivers",
    "name": "Derek Sivers: Weird, or just different?",
    "shortsummary": "There's a flip side to everything, the saying goes, and in 2 minutes, Derek Sivers shows this is true in a few ways you might not expect.",
    "duration": "0:02:42",
    "publishdate": "1/29/2010"
  },
  {
    "rank": 9,
    "id": "623",
    "speaker": "Joshua Silver",
    "name": "Josh Silver demos adjustable liquid-filled eyeglasses ",
    "shortsummary": "Josh Silver delivers his brilliantly simple solution for correcting vision at the lowest cost possible -- adjustable, liquid-filled lenses. At TEDGlobal 2009, he demos his affordable eyeglasses and reveals his global plan to distribute them to a billion people in need by 2020.",
    "duration": "0:05:34",
    "publishdate": "9/1/2009"
  },
  {
    "rank": 10,
    "id": "153",
    "speaker": "William Kamkwamba",
    "name": "How I built my family a windmill",
    "shortsummary": "When he was just 14 years old, Malawian inventor William Kamkwamba built his family an electricity-generating windmill from spare parts, working from rough plans he found in a library book.",
    "duration": "0:04:12",
    "publishdate": "7/31/2007"
  },
  {
    "rank": 11,
    "id": "123",
    "speaker": "Stewart Brand",
    "name": "Why squatter cities are a good thing",
    "shortsummary": "Rural villages worldwide are being deserted, as billions of people flock to cities to live in teeming squatter camps and slums. Stewart Brand says this is a good thing. Why? It'll take you 3 minutes to find out.",
    "duration": "0:00:00",
    "publishdate": "5/17/2007"
  },
  {
    "rank": 12,
    "id": "1726",
    "speaker": "Nilofer Merchant",
    "name": "Nilofer Merchant: Got a meeting? Take a walk",
    "shortsummary": "Nilofer Merchant suggests a small idea that just might have a big impact on your life and health: Next time you have a one-on-one meeting, make it into a \"walking meeting\" -- and let ideas flow while you walk and talk.",
    "duration": "0:03:28",
    "publishdate": "4/29/2013 15:00:00"
  },
  {
    "rank": 13,
    "id": "1634",
    "speaker": "Steven Addis",
    "name": "Steven Addis: A father-daughter bond, one photo at a time",
    "shortsummary": "A long time ago in New York City, Steve Addis stood on a corner holding his 1-year-old daughter in his arms; his wife snapped a photo. The image has inspired an annual father-daughter ritual, where Addis and his daughter pose for the same picture, on the same corner, each year. Addis shares 15 treasured photographs from the series, and explores why this small, repeated ritual means so much.",
    "duration": "0:03:38",
    "publishdate": "12/19/2012 11:00:00"
  },
  {
    "rank": 14,
    "id": "683",
    "speaker": "Edward Burtynsky",
    "name": "Edward Burtynsky photographs the landscape of oil",
    "shortsummary": "In stunning large-format photographs, Edward Burtynsky follows the path of oil through modern society, from wellhead to pipeline to car engine -- and then beyond to the projected peak-oil endgame.",
    "duration": "0:03:40",
    "publishdate": "11/11/2009"
  },
  {
    "rank": 15,
    "id": "964",
    "speaker": "Fabian Hemmert",
    "name": "Fabian Hemmert: The shape-shifting future of the mobile phone",
    "shortsummary": "At TEDxBerlin, Fabian Hemmert demos one future of the mobile phone -- a shape-shifting and weight-shifting handset that \"displays\" information nonvisually, offering a delightfully intuitive way to communicate.",
    "duration": "0:04:15",
    "publishdate": "9/23/2010"
  },
  {
    "rank": 16,
    "id": "1716",
    "speaker": "  BLACK",
    "name": "BLACK: My journey to yo-yo mastery",
    "shortsummary": "Remember the days you struggled just to make a yo-yo spin, and if you were really fancy, to â€œwalk the dogâ€? You ain't seen nothin' yet. Japanese yo-yo world champion BLACK tells the inspiring story of finding his life's passion, and gives an awesome performance that will make you want to pull your yo-yo back out of the closet. ",
    "duration": "0:10:28",
    "publishdate": "4/19/2013 15:00:00"
  },
  {
    "rank": 17,
    "id": "523",
    "speaker": "Erik Hersman",
    "name": "Erik Hersman on reporting crisis via texting",
    "shortsummary": "  At TEDU 2009, Erik Hersman presents the remarkable story of Ushahidi, a GoogleMap mashup that allowed Kenyans to report and track violence via cell phone texts following the 2008 elections, and has evolved to continue saving lives in other countries.",
    "duration": "0:03:56",
    "publishdate": "4/22/2009"
  },
  {
    "rank": 18,
    "id": "298",
    "speaker": "Raul Midon",
    "name": "\"Everybody\" and \"Peace on Earth\"",
    "shortsummary": "Guitarist and singer Raul Midon plays \"Everybody\" and \"Peace on Earth\" during his 2007 set at TED. ",
    "duration": "0:09:19",
    "publishdate": "7/3/2008"
  },
  {
    "rank": 19,
    "id": "587",
    "speaker": "Arthur Benjamin",
    "name": "Arthur Benjamin's formula for changing math education",
    "shortsummary": "Someone always asks the math teacher, \"Am I going to use calculus in real life?\" And for most of us, says Arthur Benjamin, the answer is no. He offers a bold proposal on how to make math education relevant in the digital age.",
    "duration": "0:02:58",
    "publishdate": "6/29/2009"
  },
  {
    "rank": 20,
    "id": "1262",
    "speaker": "Marco Tempest",
    "name": "Marco Tempest: Augmented reality, techno-magic",
    "shortsummary": "Using sleight-of-hand techniques and charming storytelling, illusionist Marco Tempest brings a jaunty stick figure to life onstage at TEDGlobal. ",
    "duration": "0:05:44",
    "publishdate": "11/4/2011"
  },
  {
    "rank": 21,
    "id": "1448",
    "speaker": "Jean-Baptiste Michel",
    "name": "Jean-Baptiste Michel: The mathematics of history",
    "shortsummary": "What can mathematics say about history? According to TED Fellow Jean-Baptiste Michel, quite a lot. From changes to language to the deadliness of wars, he shows how digitized history is just starting to reveal deep underlying patterns.",
    "duration": "0:04:26",
    "publishdate": "5/15/2012 15:00:00"
  },
  {
    "rank": 22,
    "id": "1397",
    "speaker": "Taylor Wilson",
    "name": "Taylor Wilson: Yup, I built a nuclear fusion reactor",
    "shortsummary": "Taylor Wilson believes nuclear fusion is a solution to our future energy needs, and that kids can change the world. And he knows something about both of those: When he was 14, he built a working fusion reactor in his parents' garage. Now 17, he takes the TED stage at short notice to tell (the short version of) his story.",
    "duration": "0:03:32",
    "publishdate": "3/22/2012 15:08:00"
  },
  {
    "rank": 23,
    "id": "1620",
    "speaker": "Jonas Eliasson",
    "name": "Jonas Eliasson: How to solve traffic jams",
    "shortsummary": "It's an unfortunate reality in nearly every major city: road congestion, especially during rush hours. Jonas Eliasson reveals how subtly nudging just a small percentage of drivers to stay off major roads can make traffic jams a thing of the past. (<em>Filmed at TEDxHelvetia.</em>)",
    "duration": "0:08:27",
    "publishdate": "11/27/2012 15:59:00"
  },
  {
    "rank": 24,
    "id": "1500",
    "speaker": "Preston Reed, Usman Riaz",
    "name": "Usman Riaz and Preston Reed: A young guitarist meets his hero",
    "shortsummary": "Usman Riaz is a 21-year-old whiz at the percussive guitar, a style he learned to play by watching his heroes on YouTube. The TED Fellow plays onstage at TEDGlobal 2012 -- followed by a jawdropping solo from the master of percussive guitar, Preston Reed. And watch these two guitarists take on a very spur-of-the-moment improv.",
    "duration": "0:16:50",
    "publishdate": "7/6/2012 14:54:00"
  },
  {
    "rank": 25,
    "id": "1210",
    "speaker": "Lucianne Walkowicz",
    "name": "Lucianne Walkowicz: Finding planets around other stars",
    "shortsummary": "How do we find planets -- even habitable planets -- around other stars? By looking for tiny dimming as a planet passes in front of its sun, TED Fellow Lucianne Walkowicz and the Kepler mission have found some 1,200 potential new planetary systems. With new techniques, they may even find ones with the right conditions for life.",
    "duration": "0:04:24",
    "publishdate": "8/11/2011"
  },
  {
    "rank": 26,
    "id": "552",
    "speaker": "Yves Behar",
    "name": "Yves Behar's supercharged motorcycle design",
    "shortsummary": "Yves Behar and Forrest North unveil Mission One, a sleek, powerful electric motorcycle. They share slides from distant (yet similar) childhoods that show how collaboration kick-started their friendship -- and shared dreams.",
    "duration": "0:02:23",
    "publishdate": "5/22/2009"
  },
  {
    "rank": 27,
    "id": "1600",
    "speaker": "Faith Jegede",
    "name": "Faith Jegede: What I've learned from my autistic brothers",
    "shortsummary": "Faith Jegede tells the moving and funny story of growing up with her two brothers, both autistic -- and both extraordinary. In this talk from the TED Talent Search, she reminds us to pursue a life beyond what is normal.",
    "duration": "0:05:20",
    "publishdate": "11/2/2012 15:03:00"
  },
  {
    "rank": 28,
    "id": "1353",
    "speaker": "Erik Johannson",
    "name": "Erik Johansson: Impossible photography",
    "shortsummary": "Erik Johansson creates realistic photos of impossible scenes -- capturing ideas, not moments. In this witty how-to, the Photoshop wizard describes the principles he uses to make these fantastical scenarios come to life, while keeping them visually plausible.",
    "duration": "0:06:21",
    "publishdate": "2/10/2012 16:01:00"
  },
  {
    "rank": 29,
    "id": "248",
    "speaker": "Alisa Miller",
    "name": "Why we know less than ever about the world",
    "shortsummary": "Alisa Miller, head of Public Radio International, talks about why -- though we want to know more about the world than ever -- the US media is actually showing less. Eye-opening stats and graphs.",
    "duration": "0:04:29",
    "publishdate": "5/14/2008"
  },
  {
    "rank": 30,
    "id": "1677",
    "speaker": "Bruno Maisonnier",
    "name": "Bruno Maisonnier: Dance, tiny robots!",
    "shortsummary": "There's a place in France where the robots do a dance. And that place is TEDxConcorde, where Bruno Maisonnier of Aldebaran Robotics choreographs a troupe of tiny humanoid Nao robots through a surprisingly emotive performance.",
    "duration": "0:03:09",
    "publishdate": "2/26/2013 20:25:00"
  },
  {
    "rank": 31,
    "id": "14",
    "speaker": "Golan Levin",
    "name": "The truly soft side of software",
    "shortsummary": "Engineer and artist Golan Levin pushes the boundaries of what's possible with audiovisuals and technology. In an amazing TED display, he shows two programs he wrote to perform his original compositions.",
    "duration": "0:14:53",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 32,
    "id": "1228",
    "speaker": "Amy Lockwood",
    "name": "Amy Lockwood: Selling condoms in the Congo",
    "shortsummary": "HIV is a serious problem in the DR Congo, and aid agencies have flooded the country with free and cheap condoms. But few people are using them. Why? \"Reformed marketer\" Amy Lockwood offers a surprising answer that upends a traditional model of philanthropy. (Some NSFW images.)",
    "duration": "0:04:16",
    "publishdate": "9/21/2011"
  },
  {
    "rank": 33,
    "id": "1782",
    "speaker": "  Sleepy Man Banjo Boys",
    "name": "Sleepy Man Banjo Boys: Bluegrass virtuosity from ... New Jersey?",
    "shortsummary": "All under the age of 16, brothers Jonny, Robbie and Tommy Mizzone are from New Jersey, a US state that's better known for the rock of Bruce Springsteen than the bluegrass of Earl Scruggs. Nonetheless, the siblings began performing bluegrass covers, as well as their own compositions, at a young age. Here, they play three dazzling songs in three different keys, passing the lead back and forth from fiddle to banjo to guitar.",
    "duration": "0:08:47",
    "publishdate": "7/5/2013 14:57:00"
  },
  {
    "rank": 34,
    "id": "364",
    "speaker": "James Burchfield",
    "name": "Sound stylings by a human beatbox",
    "shortsummary": "Human beatbox James \"AudioPoet\" Burchfield performs an intricate three-minute breakdown -- sexy, propulsive hip-hop rhythms and turntable textures -- all using only his voice.",
    "duration": "0:04:44",
    "publishdate": "10/10/2008"
  },
  {
    "rank": 35,
    "id": "1643",
    "speaker": "Sue Austin",
    "name": "Sue Austin: Deep sea diving \"¦ in a wheelchair",
    "shortsummary": "When Sue Austin got a power chair 16 years ago, she felt a tremendous sense of freedom -- yet others looked at her as though she had lost something. In her art, she aims to convey the spirit of wonder she feels wheeling through the world. Includes thrilling footage of an underwater wheelchair that lets her explore ocean beds, drifting through schools of fish, floating free in 360 degrees. (<em>Filmed at TEDxWomen.</em>)",
    "duration": "0:09:38",
    "publishdate": "1/8/2013 15:59:00"
  },
  {
    "rank": 36,
    "id": "1201",
    "speaker": "Adam Ostrow",
    "name": "Adam Ostrow: After your final status update",
    "shortsummary": "Many of us have a social media presence -- a virtual personality made up of status updates, tweets and connections, stored in the cloud. Adam Ostrow asks a big question: What happens to that personality after you've died? Could it ... live on?",
    "duration": "0:05:29",
    "publishdate": "8/1/2011"
  },
  {
    "rank": 37,
    "id": "276",
    "speaker": "Murray Gell-Mann",
    "name": "Do all languages have a common ancestor?",
    "shortsummary": "After speaking at TED2007 on elegance in physics, the amazing Murray Gell-Mann gives a quick overview of another passionate interest: finding the common ancestry of our modern languages.",
    "duration": "0:02:15",
    "publishdate": "6/11/2008"
  },
  {
    "rank": 38,
    "id": "1272",
    "speaker": "Thomas Suarez",
    "name": "Thomas Suarez: A 12-year-old app developer",
    "shortsummary": "Most 12-year-olds love playing videogames -- Thomas Suarez taught himself how to create them. After developing iPhone apps like \"Bustin Jeiber,\" a whack-a-mole game, he is now using his skills to help other kids become developers.",
    "duration": "",
    "publishdate": "11/16/2011"
  },
  {
    "rank": 39,
    "id": "423",
    "speaker": "Nicholas Negroponte",
    "name": "Bringing One Laptop per Child to Colombia: TED in the Field ",
    "shortsummary": "TED follows Nicholas Negroponte to Colombia as he delivers laptops inside territory once controlled by guerrillas. His partner? Colombia's Defense Department, who see One Laptop per Child as an investment in the region. (And you too can get involved.)",
    "duration": "0:06:48",
    "publishdate": "12/22/2008"
  },
  {
    "rank": 40,
    "id": "836",
    "speaker": "Frederick Balagadde",
    "name": "Frederick Balagadde: Bio-lab on a microchip",
    "shortsummary": "Drugs alone can't stop disease in sub-Saharan Africa: We need diagnostic tools to match. TED Senior Fellow Frederick Balagadde shows how we can multiply the power and availability of an unwieldy, expensive diagnostic lab -- by miniaturizing it to the size of a chip.",
    "duration": "0:06:11",
    "publishdate": "4/21/2010"
  },
  {
    "rank": 41,
    "id": "236",
    "speaker": "Christopher deCharms",
    "name": "Looking inside the brain in real time",
    "shortsummary": "Neuroscientist and inventor Christopher deCharms demonstrates a new way to use fMRI to show brain activity -- thoughts, emotions, pain -- while it is happening. In other words, you can actually see how you feel.",
    "duration": "0:04:02",
    "publishdate": "3/24/2008"
  },
  {
    "rank": 42,
    "id": "1636",
    "speaker": "Ronny Edry",
    "name": "Israel and Iran: A love story?",
    "shortsummary": "When war between Israel and Iran seemed imminent, Israeli graphic designer Ronny Edry shared a poster on Facebook of himself and his daughter with a bold message: \"Iranians ... we [heart] you.\" Other Israelis quickly created their own posters with the same message -- and Iranians responded in kind. The simple act of communication inspired surprising Facebook communities like \"Israel loves Iran,\" \"Iran loves Israel\" and even \"Palestine loves Israel.\"",
    "duration": "0:14:57",
    "publishdate": "12/21/2012 16:08:00"
  },
  {
    "rank": 43,
    "id": "1326",
    "speaker": "Sonaar Luthra",
    "name": "Sonaar Luthra: Meet the Water Canary ",
    "shortsummary": "After a crisis, how can we tell if water is safe to drink? Current tests are slow and complex, and the delay can be deadly, as in the cholera outbreak after Haiti's earthquake in 2010. TED Fellow Sonaar Luthra previews his design for a simple tool that quickly tests water for safety -- the Water Canary. ",
    "duration": "0:03:37",
    "publishdate": "1/16/2012 16:33:00"
  },
  {
    "rank": 44,
    "id": "811",
    "speaker": "Kirk Citron",
    "name": "Kirk Citron: And now, the real news ",
    "shortsummary": "How many of today's headlines will matter in 100 years? 1000? Kirk Citron's \"Long News\" project collects stories that not only matter today, but will resonate for decades -- even centuries -- to come. At TED2010, he highlights recent headlines with the potential to shape our future. ",
    "duration": "0:03:21",
    "publishdate": "4/1/2010"
  },
  {
    "rank": 45,
    "id": "856",
    "speaker": "Julia Sweeney",
    "name": "Julia Sweeney has \"The Talk\" ",
    "shortsummary": "Despite her best efforts, comedian Julia Sweeney is forced to tell a little white lie when her 8-year-old begins learning about frog reproduction -- and starts to ask some very smart questions.",
    "duration": "0:05:16",
    "publishdate": "5/14/2010"
  },
  {
    "rank": 46,
    "id": "1382",
    "speaker": "Colin Robertson",
    "name": "A TED speaker's worst nightmare ",
    "shortsummary": "Colin Robertson had 3 minutes on the TED stage to tell the world about his solar-powered crowdsourced health care solution. And then... ",
    "duration": "0:03:49",
    "publishdate": "3/9/2012 16:03:00"
  },
  {
    "rank": 47,
    "id": "313",
    "speaker": "Marisa Fick-Jordan",
    "name": "The wonders of Zulu wire art",
    "shortsummary": "In this short, image-packed talk, Marisa Fick-Jordan talks about how a village of traditional Zulu wire weavers built a worldwide market for their dazzling work.",
    "duration": "0:02:33",
    "publishdate": "7/21/2008"
  },
  {
    "rank": 48,
    "id": "349",
    "speaker": "Laura Trice",
    "name": "The power of saying thank you",
    "shortsummary": "In this deceptively simple 3-minute talk, Dr. Laura Trice muses on the power of the magic words \"thank you\" -- to deepen a friendship, to repair a bond, to make sure another person knows what they mean to you. Try it.",
    "duration": "0:03:29",
    "publishdate": "9/24/2008"
  },
  {
    "rank": 49,
    "id": "1607",
    "speaker": "Matt Killingsworth",
    "name": "Matt Killingsworth: Want to be happier? Stay in the moment",
    "shortsummary": "When are humans most happy? To gather data on this question, Matt Killingsworth built an app, Track Your Happiness, that let people report their feelings in real time. Among the surprising results: We're often happiest when we're lost in the moment. And the flip side: The more our mind wanders, the less happy we can be. <i>(Filmed at TEDxCambridge.)</i>",
    "duration": "0:10:16",
    "publishdate": "11/5/2012 16:09:00"
  },
  {
    "rank": 50,
    "id": "912",
    "speaker": "Hans Rosling",
    "name": "Hans Rosling on global population growth",
    "shortsummary": "The world's population will grow to 9 billion over the next 50 years -- and only by raising the living standards of the poorest can we check population growth. This is the paradoxical answer that Hans Rosling unveils at TED@Cannes using colorful new data display technology (you'll see).",
    "duration": "0:10:04",
    "publishdate": "7/9/2010"
  },
  {
    "rank": 51,
    "id": "1113",
    "speaker": "Chade-Meng Tan",
    "name": "Chade-Meng Tan: Everyday compassion at Google",
    "shortsummary": "Google's \"Jolly Good Fellow,\" Chade-Meng Tan, talks about how the company practices compassion in its everyday business -- and its bold side projects.",
    "duration": "0:14:08",
    "publishdate": "4/5/2011"
  },
  {
    "rank": 52,
    "id": "1798",
    "speaker": "Bastian Schaefer",
    "name": "Bastian Schaefer: A 3D-printed jumbo jet?",
    "shortsummary": "Designer Bastian Schaefer shows off a speculative design for the future of jet planes, with a skeleton inspired by strong, flexible, natural forms and by the needs of the world's, ahem, growing population. Imagine an airplane that's full of light and space -- and built up from generative parts in a 3D printer.",
    "duration": "0:05:58",
    "publishdate": "7/29/2013 15:52:00"
  },
  {
    "rank": 53,
    "id": "1044",
    "speaker": "Arianna Huffington",
    "name": "Arianna Huffington: How to succeed? Get more sleep",
    "shortsummary": "In this short talk, Arianna Huffington shares a small idea that can awaken much bigger ones: the power of a good night's sleep. Instead of bragging about our sleep deficits, she urges us to shut our eyes and see the big picture: We can sleep our way to increased productivity and happiness -- and smarter decision-making.",
    "duration": "0:04:10",
    "publishdate": "1/3/2011"
  },
  {
    "rank": 54,
    "id": "1150",
    "speaker": "Terry Moore",
    "name": "Terry Moore: How to tie your shoes",
    "shortsummary": "Terry Moore found out he'd been tying his shoes the wrong way his whole life. In the spirit of TED, he takes the stage to share a better way. (Historical note: This was the very first 3-minute audience talk given from the TED stage, in 2005.)",
    "duration": "0:02:59",
    "publishdate": "5/20/2011"
  },
  {
    "rank": 55,
    "id": "957",
    "speaker": "Jessa Gamble",
    "name": "Jessa Gamble: Our natural sleep cycle",
    "shortsummary": "In today's world, balancing school, work, kids and more, most of us can only hope for the recommended eight hours of sleep. Examining the science behind our body's internal clock, Jessa Gamble reveals the surprising and substantial program of rest we should be observing.",
    "duration": "0:04:01",
    "publishdate": "9/15/2010"
  },
  {
    "rank": 56,
    "id": "1622",
    "speaker": "Paolo Cardini",
    "name": "Paolo Cardini: Forget multitasking, try monotasking",
    "shortsummary": "People aren't just cooking anymore -- they're cooking, texting, talking on the phone, watching YouTube and uploading photos of the awesome meal they just made. Designer Paolo Cardini questions the efficiency of our multitasking world and makes the case for -- gasp -- \"monotasking.\" HisÂ <a href=\"http://www.thingiverse.com/thing:26578\" target=\"_blank\">charming 3D-printed smartphone covers</a> just might help.",
    "duration": "0:02:52",
    "publishdate": "11/30/2012 16:09:00"
  },
  {
    "rank": 57,
    "id": "1645",
    "speaker": "Boghuma Kabisen Titanji",
    "name": "Boghuma Kabisen Titanji: Ethical riddles in HIV research",
    "shortsummary": "It's an all too common story: after participating in an HIV clinical trial, a woman in sub-Saharan Africa is left without the resources to buy a bus ticket to her health clinic, let alone to afford life-saving antiretrovirals. Boghuma Kabisen Titanji asks an important question: how can researchers looking for a cure make sure they're not taking advantage of those most affected by the pandemic? (<em>Filmed at TEDxGoodenoughCollege.</em>)",
    "duration": "0:11:10",
    "publishdate": "1/10/2013 16:00:00"
  },
  {
    "rank": 58,
    "id": "1034",
    "speaker": "Diana Laufenberg",
    "name": "Diana Laufenberg: How to learn? From mistakes",
    "shortsummary": "Diana Laufenberg shares 3 surprising things she has learned about teaching -- including a key insight about learning from mistakes.",
    "duration": "0:10:05",
    "publishdate": "12/15/2010"
  },
  {
    "rank": 59,
    "id": "565",
    "speaker": "Kevin Surace",
    "name": "Kevin Surace invents eco-friendly drywall",
    "shortsummary": "Kevin Surace suggests we rethink basic construction materials -- such as the familiar wallboard -- to reduce the huge carbon footprint generated by the manufacturing and construction of our buildings. He introduces EcoRock, a clean, recyclable and energy-efficient drywall created by his team at Serious Materials.",
    "duration": "0:03:19",
    "publishdate": "6/9/2009"
  },
  {
    "rank": 60,
    "id": "947",
    "speaker": "Derek Sivers",
    "name": "Derek Sivers: Keep your goals to yourself",
    "shortsummary": "After hitting on a brilliant new life plan, our first instinct is to tell someone, but Derek Sivers says it's better to keep goals secret. He presents research stretching as far back as the 1920s to show why people who talk about their ambitions may be less likely to achieve them.",
    "duration": "0:03:15",
    "publishdate": "9/2/2010"
  },
  {
    "rank": 61,
    "id": "1487",
    "speaker": "Peter Norvig",
    "name": "Peter Norvig: The 100,000-student classroom",
    "shortsummary": "In the fall of 2011 Peter Norvig taught a class with Sebastian Thrun on artificial intelligence at Stanford attended by 175 students in situ -- and over 100,000 via an interactive webcast. He shares what he learned about teaching to a global classroom.",
    "duration": "0:06:11",
    "publishdate": "6/21/2012 15:34:00"
  },
  {
    "rank": 62,
    "id": "511",
    "speaker": "Renny Gleeson",
    "name": "Busted! The sneaky moves of anti-social smartphone users ",
    "shortsummary": "In this funny (and actually poignant) 3-minute talk, social strategist Renny Gleeson breaks down our always-on social world -- where the experience we're having right now is less interesting than what we'll tweet about it later.",
    "duration": "0:03:46",
    "publishdate": "4/10/2009"
  },
  {
    "rank": 63,
    "id": "1122",
    "speaker": "Marcin Jakubowski",
    "name": "Marcin Jakubowski: Open-sourced blueprints for civilization",
    "shortsummary": "Using wikis and digital fabrication tools, TED Fellow Marcin Jakubowski is open-sourcing the blueprints for 50 farm machines, allowing anyone to build their own tractor or harvester from scratch. And that's only the first step in a project to write an instruction set for an entire self-sustaining village (starting cost: $10,000).",
    "duration": "0:04:10",
    "publishdate": "4/14/2011"
  },
  {
    "rank": 64,
    "id": "1488",
    "speaker": "Jon Nguyen",
    "name": "Jon Nguyen: Tour the solar system from home",
    "shortsummary": "Want to navigate the solar system without having to buy that expensive spacecraft? Jon Nguyen demos NASAJPL's <a href=http://solarsystem.nasa.gov/eyes/>\"Eyes on the Solar System\"</a> -- free-to-use software for exploring the planets, moons, asteroids, and spacecraft that rotate around our sun in real-time. <em>(Filmed at <a href=http://www.ted.com/tedx/events/1880>TEDxSanDiego</a>.)</em>",
    "duration": "0:07:53",
    "publishdate": "6/23/2012 14:04:00"
  },
  {
    "rank": 65,
    "id": "282",
    "speaker": "David Hoffman",
    "name": "How would you feel if you lost everything?",
    "shortsummary": "Nine days before TED2008, filmmaker David Hoffman lost almost everything he owned in a fire that destroyed his home, office and 30 years of passionate collecting. He looks back at a life that's been wiped clean in an instant -- and looks forward.",
    "duration": "0:04:00",
    "publishdate": "7/9/2008"
  },
  {
    "rank": 66,
    "id": "1668",
    "speaker": "James B. Glattfelder",
    "name": "James B. Glattfelder: Who controls the world?",
    "shortsummary": "James Glattfelder studies complexity: how an interconnected system -- say, a swarm of birds -- is more than the sum of its parts. And complexity theory, it turns out, can reveal a lot about how the economy works. Glattfelder shares a groundbreaking study of how control flows through the global economy, and how concentration of power in the hands of a shockingly small number leaves us all vulnerable. (<em>Filmed at TEDxZurich.</em>)",
    "duration": "0:14:10",
    "publishdate": "2/13/2013 16:00:00"
  },
  {
    "rank": 67,
    "id": "679",
    "speaker": "Robert Wright",
    "name": "Robert Wright: The evolution of compassion",
    "shortsummary": "Robert Wright uses evolutionary biology and game theory to explain why we appreciate the Golden Rule (\"Do unto others...\"), why we sometimes ignore it and why there‚Äôs hope that, in the near future, we might all have the compassion to follow it. ",
    "duration": "0:16:56",
    "publishdate": "10/31/2008"
  },
  {
    "rank": 68,
    "id": "1212",
    "speaker": "Dan Ariely",
    "name": "Dan Ariely: Beware conflicts of interest",
    "shortsummary": "In this short talk, psychologist Dan Ariely tells two personal stories that explore scientific conflict of interest: How the pursuit of knowledge and insight can be affected, consciously or not, by shortsighted personal goals. When we're thinking about the big questions, he reminds us, let's be aware of our all-too-human brains.",
    "duration": "0:05:35",
    "publishdate": "8/29/2011"
  },
  {
    "rank": 69,
    "id": "245",
    "speaker": "Johnny Lee",
    "name": "Creating tech marvels out of a $40 Wii Remote",
    "shortsummary": "Building sophisticated educational tools out of cheap parts, Johnny Lee demos his cool Wii Remote hacks, which turn the $40 video game controller into a digital whiteboard, a touchscreen and a head-mounted 3-D viewer.",
    "duration": "0:05:40",
    "publishdate": "4/11/2008"
  },
  {
    "rank": 70,
    "id": "466",
    "speaker": "Gustavo Dudamel and the Teresa Carre√±o Youth Orchestra",
    "name": "A musical sensation from Venezuela",
    "shortsummary": "The Teresa Carreño Youth Orchestra contains the best high school musicians from Venezuela's life-changing music program, El Sistema. Led here by Gustavo Dudamel, they play Shostakovich's Symphony No. 10, 2nd movement, and Arturo Márquez' Danzón No. 2.",
    "duration": "0:17:06",
    "publishdate": "2/18/2009"
  },
  {
    "rank": 71,
    "id": "814",
    "speaker": "Derek Sivers",
    "name": "Derek Sivers: How to start a movement",
    "shortsummary": "With help from some surprising footage, Derek Sivers explains how movements really get started. (Hint: it takes two.)",
    "duration": "0:03:09",
    "publishdate": "4/1/2010"
  },
  {
    "rank": 72,
    "id": "1424",
    "speaker": "Laura Carstensen",
    "name": "Laura Carstensen: Older people are happier",
    "shortsummary": "In the 20th century we added an unprecedented number of years to our lifespans, but is the quality of life as good? Surprisingly, yes! At TEDxWomen psychologist Laura Carstensen shows research that demonstrates that as people get older they become happier, more content, and have a more positive outlook on the world.",
    "duration": "0:11:38",
    "publishdate": "4/19/2012 15:25:00"
  },
  {
    "rank": 73,
    "id": "1176",
    "speaker": "Jok Church",
    "name": "Jok Church: A circle of caring",
    "shortsummary": "In this 3-minute talk, cartoonist and educator Jok Church tells a moving story of the teacher who cared for him when no one else did -- and how he returned the favor. ",
    "duration": "0:03:34",
    "publishdate": "6/22/2011"
  },
  {
    "rank": 74,
    "id": "241",
    "speaker": "Jakob Trollback",
    "name": "Rethinking the music video",
    "shortsummary": "What would a music video look like if it were directed by the music, purely as an expression of a great song, rather than driven by a filmmaker's concept? Designer Jakob Trollback shares the results of his experiment in the form.",
    "duration": "0:04:00",
    "publishdate": "4/3/2008"
  },
  {
    "rank": 75,
    "id": "109",
    "speaker": "Eddi Reader, Thomas Dolby",
    "name": "\"What You Do With What You've Got\"",
    "shortsummary": "Singer/songwriter Eddi Reader performs \"What You Do With What You've Got,\" a meditation on a very TED theme: how to use your gifts and talents to make a difference. With Thomas Dolby on piano.",
    "duration": "0:05:12",
    "publishdate": "4/14/2007"
  },
  {
    "rank": 76,
    "id": "1608",
    "speaker": "Jake Wood",
    "name": "Jake Wood: A new mission for veterans -- disaster relief",
    "shortsummary": "After months or years fighting overseas, 92 percent of American veterans say they want to continue their service; meanwhile, one after another, natural disasters continue to wreak havoc worldwide. What do these two challenges have in common? Team Rubicon co-founder Jake Wood gives a moving talk on how veterans can effectively contribute to disaster relief responses -- and in the process, regain purpose, community and self-worth.",
    "duration": "0:04:59",
    "publishdate": "11/6/2012 16:01:00"
  },
  {
    "rank": 77,
    "id": "1699",
    "speaker": "Richard Turere",
    "name": "Richard Turere: My invention that made peace with lions",
    "shortsummary": "In the Masai community where 13-year-old Richard Turere lives, cattle are all-important. But lion attacks were growing more frequent. In this short, inspiring talk, the young inventor shares the solar-powered solution he designed to safely scare the lions away.",
    "duration": "0:07:20",
    "publishdate": "3/27/2013 13:59:00"
  },
  {
    "rank": 78,
    "id": "1709",
    "speaker": "Keller Rinaudo",
    "name": "Keller Rinaudo: A mini robot -- powered by your phone",
    "shortsummary": "Your smartphone may feel like a friend -- but a true friend would give you a smile once in a while. At TED2013, Keller Rinaudo demos Romo, the smartphone-powered mini robot who can motor along with you on a walk, slide you a cup of coffee across the table, and react to you with programmable expressions. ",
    "duration": "0:05:50",
    "publishdate": "4/9/2013 15:00:00"
  },
  {
    "rank": 79,
    "id": "928",
    "speaker": "Lewis Pugh",
    "name": "Lewis Pugh's mind-shifting Mt. Everest swim",
    "shortsummary": "After he swam the North Pole, Lewis Pugh vowed never to take another cold-water dip. Then he heard of Mt. Everest's Lake Imja -- a body of water at an altitude of 5300 m, entirely created by recent glacial melting -- and began a journey that would teach him a radical new way to approach swimming and think about climate change.",
    "duration": "0:09:45",
    "publishdate": "7/30/2010"
  },
  {
    "rank": 80,
    "id": "143",
    "speaker": "Emily Oster",
    "name": "What do we really know about the spread of AIDS?",
    "shortsummary": "Emily Oster re-examines the stats on AIDS in Africa from an economic perspective and reaches a stunning conclusion: Everything we know about the spread of HIV on the continent is wrong.",
    "duration": "0:15:34",
    "publishdate": "7/12/2007"
  },
  {
    "rank": 81,
    "id": "885",
    "speaker": "Margaret Gould Stewart",
    "name": "Margaret Gould Stewart: How YouTube thinks about copyright",
    "shortsummary": "Margaret Gould Stewart, YouTube's head of user experience, talks about how the ubiquitous video site works with copyright holders and creators to foster (at the best of times) a creative ecosystem where everybody wins.",
    "duration": "0:05:45",
    "publishdate": "6/15/2010"
  },
  {
    "rank": 82,
    "id": "1204",
    "speaker": "Jessica Green",
    "name": "Jessica Green: Are we filtering the wrong microbes?",
    "shortsummary": "Should we keep the outdoors out of hospitals? Ecologist and TED Fellow Jessica Green has found that mechanical ventilation does get rid of many types of microbes, but the wrong kinds: the ones left in the hospital are much more likely to be pathogens.",
    "duration": "0:05:25",
    "publishdate": "8/4/2011"
  },
  {
    "rank": 83,
    "id": "1660",
    "speaker": "Fahad Al-Attiya",
    "name": "Fahad Al-Attiya: A country with no water",
    "shortsummary": "Imagine a country with abundant power -- oil and gas, sunshine, wind (and money) -- but missing one key essential for life: water. Infrastructure engineer Fahad Al-Attiya talks about the unexpected ways that the small Middle Eastern nation of Qatar creates its water supply.",
    "duration": "0:08:46",
    "publishdate": "1/31/2013 16:02:00"
  },
  {
    "rank": 84,
    "id": "1119",
    "speaker": "Dave Meslin",
    "name": "Dave Meslin: The antidote to apathy",
    "shortsummary": "Local politics -- schools, zoning, council elections -- hit us where we live. So why don't more of us actually get involved? Is it apathy? Dave Meslin says no. He identifies 7 barriers that keep us from taking part in our communities, even when we truly care.",
    "duration": "0:07:05",
    "publishdate": "4/12/2011"
  },
  {
    "rank": 85,
    "id": "481",
    "speaker": "Pattie Maes, Pranav Mistry",
    "name": "Unveiling the \"Sixth Sense,\" game-changing wearable tech",
    "shortsummary": "This demo -- from Pattie Maes' lab at MIT, spearheaded by Pranav Mistry -- was the buzz of TED. It's a wearable device with a projector that paves the way for profound interaction with our environment. Imagine \"Minority Report\" and then some.",
    "duration": "0:08:42",
    "publishdate": "3/10/2009"
  },
  {
    "rank": 86,
    "id": "560",
    "speaker": "Ray Kurzweil",
    "name": "Ray Kurzweil: A university for the coming singularity",
    "shortsummary": "Ray Kurzweil's latest graphs show that technology's breakneck advances will only accelerate -- recession or not. He unveils his new project, Singularity University, to study oncoming tech and guide it to benefit humanity.",
    "duration": "0:08:41",
    "publishdate": "6/2/2009"
  },
  {
    "rank": 87,
    "id": "165",
    "speaker": "Hod Lipson",
    "name": "Robots that are \"self-aware\"",
    "shortsummary": "Hod Lipson demonstrates a few of his cool little robots, which have the ability to learn, understand themselves and even self-replicate.",
    "duration": "0:06:18",
    "publishdate": "10/11/2007"
  },
  {
    "rank": 88,
    "id": "45",
    "speaker": "Sirena Huang",
    "name": "Dazzling set by 11-year-old violinist",
    "shortsummary": "Violinist Sirena Huang gives a technically brilliant and emotionally nuanced performance. In a charming interlude, the 11-year-old praises the timeless design of her instrument. ",
    "duration": "0:24:41",
    "publishdate": "8/8/2006"
  },
  {
    "rank": 89,
    "id": "1603",
    "speaker": "Hannah Brencher",
    "name": "Hannah Brencher: Love letters to strangers",
    "shortsummary": "Hannah Brencher's mother always wrote her letters. So when she felt herself bottom into depression after college, she did what felt natural -- she wrote love letters and left them for strangers to find. The act has become a global initiative, The World Needs More Love Letters, which rushes handwritten letters to those in need of a boost.",
    "duration": "0:04:52",
    "publishdate": "11/14/2012 16:01:00"
  },
  {
    "rank": 90,
    "id": "1159",
    "speaker": "Stefan Sagmeister",
    "name": "Stefan Sagmeister: 7 rules for making more happiness",
    "shortsummary": "Using simple, delightful illustrations, designer Stefan Sagmeister shares his latest thinking on happiness -- both the conscious and unconscious kind. His seven rules for life and design happiness can (with some customizations) apply to everyone seeking more joy.",
    "duration": "0:09:33",
    "publishdate": "6/1/2011"
  },
  {
    "rank": 91,
    "id": "1061",
    "speaker": "Liza  Donnelly",
    "name": "Liza Donnelly: Drawing upon humor for change",
    "shortsummary": "New Yorker cartoonist Liza Donnelly shares a portfolio of her wise and funny cartoons about modern life -- and talks about how humor can empower women to change the rules.",
    "duration": "0:06:42",
    "publishdate": "1/26/2011"
  },
  {
    "rank": 92,
    "id": "1710",
    "speaker": "Freeman Hrabowski",
    "name": "Freeman Hrabowski: 4 pillars of college success in science",
    "shortsummary": "At age 12, Freeman Hrabowski marched with Martin Luther King. Now he's president of the University of Maryland, Baltimore County (UMBC), where he works to create an environment that helps under-represented students -- specifically African-American, Latino and low-income learners -- get degrees in math and science. He shares the four pillars of UMBC's approach.",
    "duration": "0:15:10",
    "publishdate": "4/8/2013 15:14:00"
  },
  {
    "rank": 93,
    "id": "1646",
    "speaker": "Angela Patton",
    "name": "Angela Patton: A father-daughter dance ... in prison",
    "shortsummary": "At Camp Diva, Angela Patton works to help girls and fathers stay connected and in each others' lives. But what about girls whose fathers can't be there -- because they're in jail? Patton tells the story of a very special father-daughter dance. <em>(Filmed at TEDxWomen)</em>",
    "duration": "0:08:48",
    "publishdate": "1/14/2013 15:59:00"
  },
  {
    "rank": 94,
    "id": "1740",
    "speaker": "John Legend",
    "name": "John Legend: \"True Colors\"",
    "shortsummary": "In a heart-melting moment, TED Talks Education host John Legend sits at the piano to sing \"True Colors,\" giving the lyrics a special meaning for kids and teachers. \"So don't be afraid / to let them show / your true colors / are beautiful, like a rainbow.\"",
    "duration": "0:03:58",
    "publishdate": "5/8/2013 16:57:00"
  },
  {
    "rank": 95,
    "id": "752",
    "speaker": "Jane Chen",
    "name": "Jane Chen: A warm embrace that saves lives",
    "shortsummary": "In the developing world, access to incubators is limited by cost and distance, and millions of premature babies die each year. TED Fellow Jane Chen shows an invention that could keep millions of these infants warm -- a design that's safe, portable, low-cost and life-saving.",
    "duration": "0:04:46",
    "publishdate": "1/28/2010"
  },
  {
    "rank": 96,
    "id": "1498",
    "speaker": "Alanna Shaikh",
    "name": "Alanna Shaikh: How I'm preparing to get Alzheimer's",
    "shortsummary": "When faced with a parent suffering from Alzheimer's, most of us respond with denial (\"It won't happen to me\") or extreme efforts at prevention. But global health expert and TED Fellow Alanna Shaikh sees it differently. She's taking three concrete steps to prepare for the moment -- should it arrive -- when she herself gets Alzheimer's disease.",
    "duration": "0:06:26",
    "publishdate": "7/3/2012 15:00:00"
  },
  {
    "rank": 97,
    "id": "1136",
    "speaker": "Aicha el-Wafi + Phyllis Rodriguez",
    "name": "9/11 healing: The mothers who found forgiveness, friendship",
    "shortsummary": "Phyllis Rodriguez and Aicha el-Wafi have a powerful friendship born of unthinkable loss. Rodriguez' son was killed in the World Trade Center attacks on September 11, 2001; el-Wafi's son Zacarias Moussaoui was convicted of a role in those attacks and is serving a life sentence. In hoping to find peace, these two moms have come to understand and respect one another.",
    "duration": "0:09:54",
    "publishdate": "5/2/2011"
  },
  {
    "rank": 98,
    "id": "1742",
    "speaker": "Maria Bezaitis",
    "name": "Maria Bezaitis: The surprising need for strangeness",
    "shortsummary": "In our digital world, social relations have become mediated by data. Without even realizing it, we're barricading ourselves against strangeness -- people and ideas that don't fit the patterns of who we already know, what we already like and where we've already been. A call for technology to deliver us to what and who we need, even if it's unfamiliar. (<em>Filmed at TED@Intel.</em>)",
    "duration": "0:08:00",
    "publishdate": "5/14/2013 15:00:00"
  },
  {
    "rank": 99,
    "id": "1735",
    "speaker": "Timothy Bartik",
    "name": "Timothy Bartik: The economic case for preschool",
    "shortsummary": "In this well-argued talk, Timothy Bartik makes the macro-economic case for preschool education -- and explains why you should be happy to invest in it, even if you don't have kids that age (or kids at all). The economic benefits of well-educated kids, it turns out, go well beyond the altruistic. (Filmed at <a href=\"http://www.units.muohio.edu/tedx/home\">TEDxMiamiUniversity</a>.)",
    "duration": "0:15:45",
    "publishdate": "5/6/2013 15:07:00"
  },
  {
    "rank": 100,
    "id": "1661",
    "speaker": "Lee Cronin",
    "name": "Lee Cronin: Print your own medicine",
    "shortsummary": "Chemist Lee Cronin is working on a 3D printer that, instead of objects, is able to print molecules. An exciting potential long-term application: printing your own medicine using chemical inks.",
    "duration": "0:03:06",
    "publishdate": "2/7/2013 16:02:00"
  },
  {
    "rank": 101,
    "id": "1458",
    "speaker": "Reggie Watts",
    "name": "Reggie Watts disorients you in the most entertaining way",
    "shortsummary": "Reggie Watts' beats defy boxes. Unplug your logic board and watch as he blends poetry and crosses musical genres in this larger-than-life performance.",
    "duration": "0:09:43",
    "publishdate": "5/25/2012 15:00:00"
  },
  {
    "rank": 102,
    "id": "1553",
    "speaker": "Candy Chang",
    "name": "Candy Chang: Before I die I want to...",
    "shortsummary": "In her New Orleans neighborhood, artist and TED Fellow Candy Chang turned an abandoned house into a giant chalkboard asking a fill-in-the-blank question: \"Before I die I want to ___.\" Her neighbors' answers -- surprising, poignant, funny -- became an unexpected mirror for the community. (What's your answer?)",
    "duration": "0:06:20",
    "publishdate": "9/4/2012 15:07:00"
  },
  {
    "rank": 103,
    "id": "838",
    "speaker": "Omar Ahmad",
    "name": "Omar Ahmad: Political change with pen and paper",
    "shortsummary": "Politicians are strange creatures, says politician Omar Ahmad. And the best way to engage them on your pet issue is a monthly handwritten letter. Ahmad shows why old-fashioned correspondence is more effective than email, phone or even writing a check -- and shares the four simple steps to writing a letter that works.",
    "duration": "0:06:07",
    "publishdate": "4/23/2010"
  },
  {
    "rank": 104,
    "id": "1436",
    "speaker": "Gary Kovacs",
    "name": "Gary Kovacs: Tracking the trackers",
    "shortsummary": "As you surf the Web, information is being collected about you. Web tracking is not 100% evil -- personal data can make your browsing more efficient; cookies can help your favorite websites stay in business. But, says Gary Kovacs, it's your right to know what data is being collected about you and how it affects your online life. He unveils a Firefox add-on to do just that.",
    "duration": "0:06:39",
    "publishdate": "5/3/2012 15:00:00"
  },
  {
    "rank": 105,
    "id": "1454",
    "speaker": "Nathan Wolfe",
    "name": "Nathan Wolfe: What's left to explore?",
    "shortsummary": "We've been to the moon, we've mapped the continents, we've even been to the deepest point in the ocean -- twice. What's left for the next generation to explore? Biologist and explorer Nathan Wolfe suggests this answer: Almost everything. And we can start, he says, with the world of the unseeably small.",
    "duration": "0:07:10",
    "publishdate": "5/21/2012 14:38:00"
  },
  {
    "rank": 106,
    "id": "1745",
    "speaker": "Sergey Brin",
    "name": "Sergey Brin: Why Google Glass?",
    "shortsummary": "It's not a demo, more of a philosophical argument: Why did Sergey Brin and his team at Google want to build an eye-mounted camera/computer, codenamed Glass? Onstage at TED2013, Brin calls for a new way of seeing our relationship with our mobile computers -- not hunched over a screen but meeting the world heads-up.",
    "duration": "0:07:15",
    "publishdate": "5/17/2013 15:03:00"
  },
  {
    "rank": 107,
    "id": "1101",
    "speaker": "Hans Rosling",
    "name": "Hans Rosling and the magic washing machine",
    "shortsummary": "What was the greatest invention of the industrial revolution? Hans Rosling makes the case for the washing machine. With newly designed graphics from Gapminder, Rosling shows us the magic that pops up when economic growth and electricity turn a boring wash day into an intellectual day of reading.",
    "duration": "0:09:15",
    "publishdate": "3/21/2011"
  },
  {
    "rank": 108,
    "id": "1802",
    "speaker": "Peter van Manen",
    "name": "Peter van Manen: How can Formula 1 racing help ... babies?",
    "shortsummary": "During a Formula 1 race, a car sends hundreds of millions of data points to its garage for real-time analysis and feedback. So why not use this detailed and rigorous data system elsewhere, like ... at children's hospitals? Peter van Manen tells us more. <em>(Filmed at TEDxNijmegen.)</em>",
    "duration": "0:07:56",
    "publishdate": "8/1/2013 15:07:00"
  },
  {
    "rank": 109,
    "id": "1770",
    "speaker": "Juliana Rotich",
    "name": "Juliana Rotich: Meet BRCK, Internet access built for Africa",
    "shortsummary": "Tech communities are booming all over Africa, says Nairobi-based Juliana Rotich, cofounder of the open-source software Ushahidi. But it remains challenging to get and stay connected in a region with frequent blackouts and spotty Internet hookups. So Rotich and friends developed BRCK, offering resilient connectivity for the developing world. \n",
    "duration": "0:09:33",
    "publishdate": "6/18/2013 15:02:00"
  },
  {
    "rank": 110,
    "id": "783",
    "speaker": "Gary Flake",
    "name": "Gary Flake: is Pivot a turning point for web exploration?",
    "shortsummary": "Gary Flake demos Pivot, a new way to browse and arrange massive amounts of images and data online. Built on breakthrough Seadragon technology, it enables spectacular zooms in and out of web databases, and  the discovery of patterns and links invisible in standard web browsing.",
    "duration": "0:06:25",
    "publishdate": "3/3/2010"
  },
  {
    "rank": 111,
    "id": "1058",
    "speaker": "Heather Knight",
    "name": "Heather Knight: Silicon-based comedy",
    "shortsummary": "In this first-of-its-kind demo, Heather Knight introduces Data, a robotic stand-up comedian that does much more than rattle off one-liners -- it gathers audience feedback (using software co-developed with Scott Satkin and Varun Ramakrishna at CMU) and tunes its act as the crowd responds. Is this thing on?",
    "duration": "0:06:04",
    "publishdate": "1/21/2011"
  },
  {
    "rank": 112,
    "id": "1495",
    "speaker": "Boaz Almog",
    "name": "Boaz Almog \"levitates\" a superconductor",
    "shortsummary": "How can a super-thin 3-inch disk levitate something 70,000 times its own weight? In a riveting demonstration, Boaz Almog shows how a phenomenon known as quantum locking allows a superconductor disk to float over a magnetic rail -- completely frictionlessly and with zero energy loss. <i>Experiment: Prof. Guy Deutscher, Mishael Azoulay, Boaz Almog, of the High Tc Superconductivity Group, School of Physics and Astronomy, Tel Aviv University.</i>",
    "duration": "0:10:25",
    "publishdate": "7/2/2012 15:25:00"
  },
  {
    "rank": 113,
    "id": "1652",
    "speaker": "Steven Schwaitzberg",
    "name": "Steven Schwaitzberg: A universal translator for surgeons",
    "shortsummary": "Laparoscopic surgery uses minimally invasive incisions -- which means less pain and shorter recovery times for patients. But Steven Schwaitzberg has run into two problems teaching these techniques to surgeons around the world -- language and distance. He shares how a new technology, which combines video conferencing and a real-time universal translator, could help. (<em>Filmed at TEDxBeaconStreet</em>.)",
    "duration": "0:11:41",
    "publishdate": "1/24/2013 16:03:00"
  },
  {
    "rank": 114,
    "id": "1171",
    "speaker": "Camille Seaman",
    "name": "Camille Seaman: Haunting photos of polar ice",
    "shortsummary": "Photographer Camille Seaman shoots icebergs, showing the world the complex beauty of these massive, ancient chunks of ice. Dive in to her photo slideshow, \"The Last Iceberg.\"",
    "duration": "0:04:11",
    "publishdate": "6/16/2011"
  },
  {
    "rank": 115,
    "id": "1309",
    "speaker": "Sheila Nirenberg",
    "name": "Sheila Nirenberg: A prosthetic eye to treat blindness",
    "shortsummary": "At TEDMED, Sheila Nirenberg shows a bold way to create sight in people with certain kinds of blindness: by hooking into the optic nerve and sending signals from a camera direct to the brain.",
    "duration": "0:10:01",
    "publishdate": "12/20/2011"
  },
  {
    "rank": 116,
    "id": "1657",
    "speaker": "Mitch Resnick",
    "name": "Mitch Resnick: Let's teach kids to code",
    "shortsummary": "Coding isn't just for computer whizzes, says Mitch Resnick of MIT Media Lab -- it's for everyone. In a fun, demo-filled talk Resnick outlines the benefits of teaching kids to code, so they can do more than just \"read\" new technologies -- but also create them. <em>(Filmed at TEDxBeaconStreet.)</em>",
    "duration": "0:16:48",
    "publishdate": "1/29/2013 16:01:00"
  },
  {
    "rank": 117,
    "id": "351",
    "speaker": "Marvin Minsky",
    "name": "Health, population and the human mind",
    "shortsummary": "Listen closely -- Marvin Minsky's arch, eclectic, charmingly offhand talk on health, overpopulation and the human mind is packed with subtlety: wit, wisdom and just an ounce of wily, is-he-joking? advice.",
    "duration": "0:13:33",
    "publishdate": "9/22/2008"
  },
  {
    "rank": 118,
    "id": "1616",
    "speaker": "Amos Winter",
    "name": "Amos Winter: The cheap all-terrain wheelchair",
    "shortsummary": "How do you build a wheelchair ready to blaze through mud and sand, all for under $200? MIT engineer Amos Winter guides us through the mechanics of an all-terrain wheelchair that's cheap and easy to build -- for true accessibility -- and gives us some lessons he learned along the road.",
    "duration": "0:11:14",
    "publishdate": "11/20/2012 16:02:00"
  },
  {
    "rank": 119,
    "id": "242",
    "speaker": "Stephen Hawking",
    "name": "Asking big questions about the universe",
    "shortsummary": "In keeping with the theme of TED2008, professor Stephen Hawking asks some Big Questions about our universe -- How did the universe begin? How did life begin? Are we alone? -- and discusses how we might go about answering them. ",
    "duration": "0:10:12",
    "publishdate": "4/4/2008"
  },
  {
    "rank": 120,
    "id": "224",
    "speaker": "Roy Gould, Curtis Wong",
    "name": "WorldWide Telescope",
    "shortsummary": "Educator Roy Gould and researcher Curtis Wong show a sneak preview of Microsoft's WorldWide Telescope, which compiles images from telescopes and satellites to build a comprehensive, interactive view of our universe.",
    "duration": "0:06:48",
    "publishdate": "2/27/2008"
  },
  {
    "rank": 121,
    "id": "921",
    "speaker": "Tan Le",
    "name": "Tan Le: A headset that reads your brainwaves",
    "shortsummary": "Tan Le's astonishing new computer interface reads its user's brainwaves, making it possible to control virtual objects, and even physical electronics, with mere thoughts (and a little concentration). She demos the headset, and talks about its far-reaching applications.",
    "duration": "0:10:36",
    "publishdate": "7/21/2010"
  },
  {
    "rank": 122,
    "id": "1096",
    "speaker": "Mark Bezos",
    "name": "Mark Bezos: A life lesson from a volunteer firefighter",
    "shortsummary": "Volunteer firefighter Mark Bezos tells a story of an act of heroism that didn't go quite as expected -- but that taught him a big lesson: Don't wait to be a hero.",
    "duration": "0:04:07",
    "publishdate": "3/16/2011"
  },
  {
    "rank": 123,
    "id": "300",
    "speaker": "Torsten Reil",
    "name": "Using biology to make better animation",
    "shortsummary": "Torsten Reil talks about how the study of biology can help make natural-looking animated people -- by building a human from the inside out, with bones, muscles and a nervous system. He spoke at TED in 2003; see his work now in GTA4. ",
    "duration": "0:18:20",
    "publishdate": "7/8/2008"
  },
  {
    "rank": 124,
    "id": "1787",
    "speaker": "Jack Andraka",
    "name": "Jack Andraka: A promising test for pancreatic cancer ... from a teenager",
    "shortsummary": "Over 85 percent of all pancreatic cancers are diagnosed late, when someone has less than two percent chance of survival. How could this be? Jack Andraka talks about how he developed a promising early detection test for pancreatic cancer that's super cheap, effective and non-invasive -- all before his 16th birthday.",
    "duration": "0:10:49",
    "publishdate": "7/11/2013 15:06:00"
  },
  {
    "rank": 125,
    "id": "1651",
    "speaker": "Janine di Giovanni",
    "name": "Janine di Giovanni: What I saw in the war",
    "shortsummary": "Reporter Janine di Giovanni has been to the worst places on Earth to bring back stories from Bosnia, Sierra Leone and most recently Syria. She tells stories of human moments within large conflicts -- and explores that shocking transition when a familiar city street becomes a bombed-out battleground.",
    "duration": "0:11:53",
    "publishdate": "1/22/2013 16:04:00"
  },
  {
    "rank": 126,
    "id": "1562",
    "speaker": "Susan Solomon",
    "name": "Susan Solomon: The promise of research with stem cells",
    "shortsummary": "Calling them \"our bodies' own repair kits,\" Susan Solomon advocates research using lab-grown stem cells. By growing individual pluripotent stem cell lines, her team creates testbeds that could accelerate research into curing diseases -- and perhaps lead to individualized treatment, targeted not just to a particular disease but a particular person.",
    "duration": "0:14:58",
    "publishdate": "9/13/2012 15:16:00"
  },
  {
    "rank": 127,
    "id": "1515",
    "speaker": "Matt Mills, Tamara Roukaerts",
    "name": "Matt Mills: Image recognition that triggers augmented reality",
    "shortsummary": "Matt Mills and Tamara Roukaerts demonstrate Aurasma, a new augmented reality tool that can seamlessly animate the world as seen through a smartphone. Going beyond previous augmented reality, their \"auras\" can do everything from making a painting talk to overlaying live news onto a printed newspaper.",
    "duration": "0:08:04",
    "publishdate": "7/19/2012 15:00:00"
  },
  {
    "rank": 128,
    "id": "894",
    "speaker": "Hillel Cooperman",
    "name": "Hillel Cooperman: Legos for grownups",
    "shortsummary": "Lego blocks: playtime mainstay for industrious kids, obsession for many (ahem!) mature adults. Hillel Cooperman takes us on a trip through the beloved bricks' colorful, sometimes oddball grownup subculture, featuring CAD, open-source robotics and a little adult behavior.",
    "duration": "0:05:50",
    "publishdate": "6/25/2010"
  },
  {
    "rank": 129,
    "id": "789",
    "speaker": "Gary Lauder",
    "name": "Gary Lauder's new traffic sign: Take Turns",
    "shortsummary": "Fifty percent of traffic accidents happen at intersections. Gary Lauder shares a brilliant and cheap idea for helping drivers move along smoothly: a new traffic sign that combines the properties of \"Stop\" and \"Yield\" -- and asks drivers to be polite.",
    "duration": "0:04:26",
    "publishdate": "3/9/2010"
  },
  {
    "rank": 130,
    "id": "1359",
    "speaker": "Lucien Engelen",
    "name": "Lucien Engelen: Crowdsource your health",
    "shortsummary": "You can use your smartphone to find a local ATM, but what if you need a defibrillator? At TEDxMaastricht, Lucien Engelen shows us online innovations that are changing the way we save lives, including a crowdsourced map of local defibrillators.",
    "duration": "0:06:12",
    "publishdate": "2/15/2012 16:07:00"
  },
  {
    "rank": 131,
    "id": "1399",
    "speaker": "Peter Saul",
    "name": "Peter Saul: Let's talk about dying",
    "shortsummary": "We can't control if we'll die, but we can \"occupy death,\" in the words of Dr. Peter Saul. At TEDxNewy he calls on us to make clear our preferences for end of life care -- and suggests two questions for starting the conversation.",
    "duration": "",
    "publishdate": "3/25/2012 14:00:00"
  },
  {
    "rank": 132,
    "id": "1641",
    "speaker": "Hadyn Parry",
    "name": "Hadyn Parry: Re-engineering mosquitos to fight disease",
    "shortsummary": "In a single year, there are 200-300 million cases of malaria and 50-100 million cases of dengue fever worldwide. So: Why haven't we found a way to effectively kill mosquitos yet? Hadyn Parry presents a fascinating solution: genetically engineering male mosquitos to make them sterile, and releasing the insects into the wild, to cut down on disease-carrying species.",
    "duration": "0:13:57",
    "publishdate": "1/3/2013 16:04:00"
  },
  {
    "rank": 133,
    "id": "1793",
    "speaker": "Kate Stone",
    "name": "Kate Stone: DJ decks made of... paper",
    "shortsummary": "I love paper, and I love technology, says physicist and former sheep herder Kate Stone, who's spent the past decade working to unite the two. Her experiments combine regular paper with conductive inks and tiny circuit boards to offer a unique, magical experience. To date, applications include a newspaper embedded with audio and video, posters that display energy usage in real time, and the extremely nifty paper drumkit and set of DJ decks she demonstrates onstage.",
    "duration": "0:11:45",
    "publishdate": "7/23/2013 15:01:00"
  },
  {
    "rank": 134,
    "id": "1075",
    "speaker": "Patricia Kuhl",
    "name": "Patricia Kuhl: The linguistic genius of babies",
    "shortsummary": "At TEDxRainier, Patricia Kuhl shares astonishing findings about how babies learn one language over another -- by listening to the humans around them and \"taking statistics\" on the sounds they need to know. Clever lab experiments (and brain scans) show how 6-month-old babies use sophisticated reasoning to understand their world.",
    "duration": "0:10:17",
    "publishdate": "2/15/2011"
  },
  {
    "rank": 135,
    "id": "826",
    "speaker": "Jonathan Klein",
    "name": "Jonathan Klein: Photos that changed the world",
    "shortsummary": "Photographs do more than document history -- they make it. At TED University, Jonathan Klein of Getty Images shows some of the most iconic, and talks about what happens when a generation sees an image so powerful it can't look away -- or back.",
    "duration": "0:06:02",
    "publishdate": "4/13/2010"
  },
  {
    "rank": 136,
    "id": "718",
    "speaker": "Steven  Cowley",
    "name": "Steven Cowley: Fusion is energy's future",
    "shortsummary": "Physicist Steven Cowley is certain that nuclear fusion is the only truly sustainable solution to the fuel crisis. He explains why fusion will work -- and details the projects that he and many others have devoted their lives to, working against the clock to create a new source of energy.",
    "duration": "0:09:54",
    "publishdate": "12/22/2009"
  },
  {
    "rank": 137,
    "id": "639",
    "speaker": "Imogen Heap",
    "name": "Imogen Heap plays \"Wait It Out\"",
    "shortsummary": "Imogen Heap plays a powerful stripped-down version of \"Wait It Out,\" from her new record, Ellipse.",
    "duration": "0:03:57",
    "publishdate": "9/18/2009"
  },
  {
    "rank": 138,
    "id": "1130",
    "speaker": "Ric Elias",
    "name": "Ric Elias: 3 things I learned while my plane crashed",
    "shortsummary": "Ric Elias had a front-row seat on Flight 1549, the plane that crash-landed in the Hudson River in New York in January 2009. What went through his mind as the doomed plane went down? At TED, he tells his story publicly for the first time. ",
    "duration": "0:05:02",
    "publishdate": "4/22/2011"
  },
  {
    "rank": 139,
    "id": "540",
    "speaker": "Hans Rosling",
    "name": "Hans Rosling on HIV: New facts and stunning data visuals",
    "shortsummary": "Hans Rosling unveils new data visuals that untangle the complex risk factors of one of the world's deadliest (and most misunderstood) diseases: HIV. He argues that preventing transmissions -- not drug treatments -- is the key to ending the epidemic.",
    "duration": "0:09:56",
    "publishdate": "5/13/2009"
  },
  {
    "rank": 140,
    "id": "599",
    "speaker": "Olafur Eliasson",
    "name": "Olafur Eliasson: Playing with space and light",
    "shortsummary": "In the spectacular large-scale projects he's famous for (such as \"Waterfalls\" in New York harbor), Olafur Eliasson creates art from a palette of space, distance, color and light. This idea-packed talk begins with an experiment in the nature of perception.",
    "duration": "0:09:36",
    "publishdate": "7/14/2009"
  },
  {
    "rank": 141,
    "id": "803",
    "speaker": "Alan Siegel",
    "name": "Alan Siegel: Let's simplify legal jargon!",
    "shortsummary": "Tax forms, credit agreements, healthcare legislation: They're crammed with gobbledygook, says Alan Siegel, and incomprehensibly long. He calls for a simple, sensible redesign -- and plain English -- to make legal paperwork intelligible to the rest of us.",
    "duration": "0:04:26",
    "publishdate": "3/24/2010"
  },
  {
    "rank": 142,
    "id": "490",
    "speaker": "Kamal Meattle",
    "name": "How to grow your own fresh air",
    "shortsummary": "Researcher Kamal Meattle shows how an arrangement of three common houseplants, used in specific spots in a home or office building, can result in measurably cleaner indoor air.",
    "duration": "0:04:04",
    "publishdate": "3/20/2009"
  },
  {
    "rank": 143,
    "id": "944",
    "speaker": "Nic Marks",
    "name": "Nic Marks: The Happy Planet Index",
    "shortsummary": "Statistician Nic Marks asks why we measure a nation's success by its productivity -- instead of by the happiness and well-being of its people. He introduces the Happy Planet Index, which tracks national well-being against resource use (because a happy life doesn't have to cost the earth). Which countries rank highest in the HPI? You might be surprised.",
    "duration": "0:16:49",
    "publishdate": "8/30/2010"
  },
  {
    "rank": 144,
    "id": "556",
    "speaker": "Jonathan Drori",
    "name": "Jonathan Drori: Why we're storing billions of seeds",
    "shortsummary": "In this brief talk from TED U 2009, Jonathan Drori encourages us to save biodiversity -- one seed at a time. Reminding us that plants support human life, he shares the vision of the Millennium Seed Bank, which has stored over 3 billion seeds to date from dwindling yet essential plant species.",
    "duration": "0:06:34",
    "publishdate": "5/28/2009"
  },
  {
    "rank": 145,
    "id": "235",
    "speaker": "Siegfried Woldhek",
    "name": "The true face of Leonardo Da Vinci?",
    "shortsummary": "Mona Lisa has one of the best-known faces on the planet. But would you recognize an image of Leonardo da Vinci? Illustrator Siegfried Woldhek uses some thoughtful image-analysis techniques to find what he believes is the true face of Leonardo.",
    "duration": "0:04:24",
    "publishdate": "4/1/2008"
  },
  {
    "rank": 146,
    "id": "1050",
    "speaker": "Amber  Case",
    "name": " Amber Case: We are all cyborgs now",
    "shortsummary": "Technology is evolving us, says Amber Case, as we become a screen-staring, button-clicking new version of homo sapiens. We now rely on \"external brains\" (cell phones and computers) to communicate, remember, even live out secondary lives. But will these machines ultimately connect or conquer us? Case offers surprising insight into our cyborg selves.",
    "duration": "0:07:53",
    "publishdate": "1/11/2011"
  },
  {
    "rank": 147,
    "id": "101",
    "speaker": "Caroline Lavelle",
    "name": "A cello performance that casts a spell",
    "shortsummary": "Caroline Lavelle plays the cello like a sorceress casting a spell, occasionally hiding behind her wild mane of blond hair as she sings of pastoral themes. She performs \"Farther than the Sun,\" backed by Thomas Dolby on keyboards.",
    "duration": "0:07:39",
    "publishdate": "4/6/2007"
  },
  {
    "rank": 148,
    "id": "1761",
    "speaker": "Al Vernacchio",
    "name": "Al Vernacchio: Sex needs a new metaphor. Here's one ...",
    "shortsummary": "For some reason, says educator Al Vernacchio, the metaphors for talking about sex in the US all come from baseball -- scoring, getting to first base, etc. The problem is, this frames sex as a competition, with a winner and a loser. Instead, he suggests a new metaphor, one that's more about shared pleasure, discussion and agreement, fulfillment and enjoyment. Let's talk about â€¦ pizza.",
    "duration": "0:08:21",
    "publishdate": "7/12/2013 15:01:00"
  },
  {
    "rank": 149,
    "id": "322",
    "speaker": "Bruno Bowden, Rufus Cappadocia",
    "name": "Origami, blindfolded and to music",
    "shortsummary": "After Robert Lang's talk on origami at TED2008, Bruno Bowden stepped onstage with a challenge -- he would fold one of Lang's astonishingly complicated origami figures, blindfolded, in under 2 minutes. He's accompanied by the cellist Rufus Cappadocia.",
    "duration": "0:02:58",
    "publishdate": "8/1/2008"
  },
  {
    "rank": 150,
    "id": "1313",
    "speaker": "Jane Fonda",
    "name": "Jane Fonda: Life's third act",
    "shortsummary": "Within this generation, an extra 30 years have been added to our life expectancy -- and these years aren't just a footnote or a pathology. At TEDxWomen, Jane Fonda asks how we can think about this new phase of our lives.",
    "duration": "0:11:20",
    "publishdate": "1/4/2012 16:18:00"
  },
  {
    "rank": 151,
    "id": "1284",
    "speaker": "Britta Riley",
    "name": "Britta Riley: A garden in my apartment",
    "shortsummary": "Britta Riley wanted to grow her own food (in her tiny apartment). So she and her friends developed a system for growing plants in discarded plastic bottles -- researching, testing and tweaking the system using social media, trying many variations at once and quickly arriving at the optimal system. Call it distributed DIY. And the results? Delicious.",
    "duration": "0:07:52",
    "publishdate": "11/25/2011"
  },
  {
    "rank": 152,
    "id": "1667",
    "speaker": "Andreas Schleicher",
    "name": "Andreas Schleicher: Use data to build better schools",
    "shortsummary": "How can we measure what makes a school system work? Andreas Schleicher walks us through the PISA test, a global measurement that ranks countries against one another -- then uses that same data to help schools improve. Watch to find out where your country stacks up, and learn the single factor that makes some systems outperform others.",
    "duration": "0:19:47",
    "publishdate": "2/21/2013 15:28:00"
  },
  {
    "rank": 153,
    "id": "1547",
    "speaker": "Ivan Krastev",
    "name": "Ivan Krastev: Can democracy exist without trust?",
    "shortsummary": "Five great revolutions have shaped political culture over the past 50 years, says theorist Ivan Krastev. He shows how each step forward -- from the cultural revolution of the \"˜60s to recent revelations in the field of neuroscience -- has also helped erode trust in the tools of democracy. As he says, \"What went right is also what went wrong.\" Can democracy survive?",
    "duration": "0:14:04",
    "publishdate": "8/13/2012 15:20:00"
  },
  {
    "rank": 154,
    "id": "1349",
    "speaker": "Neil Burgess",
    "name": "Neil Burgess: How your brain tells you where you are",
    "shortsummary": "How do you remember where you parked your car? How do you know if you're moving in the right direction? Neuroscientist Neil Burgess studies the neural mechanisms that map the space around us, and how they link to memory and imagination.",
    "duration": "0:09:03",
    "publishdate": "2/6/2012 15:58:00"
  },
  {
    "rank": 155,
    "id": "1728",
    "speaker": "Rita F. Pierson",
    "name": "Rita Pierson: Every kid needs a champion",
    "shortsummary": "Rita Pierson, a teacher for 40 years, once heard a colleague say, \"They don't pay me to like the kids.\" Her response: \"Kids don't learn from people they don't like.\" A rousing call to educators to believe in their students and actually connect with them on a real, human, personal level.",
    "duration": "0:07:48",
    "publishdate": "5/3/2013 14:02:00"
  },
  {
    "rank": 156,
    "id": "381",
    "speaker": "Kristen Ashburn",
    "name": "Heartrending pictures of AIDS",
    "shortsummary": "In this moving talk, documentary photographer Kristen Ashburn shares unforgettable images of the human impact of AIDS in Africa.",
    "duration": "0:04:37",
    "publishdate": "10/24/2008"
  },
  {
    "rank": 157,
    "id": "1183",
    "speaker": "Matt Cutts",
    "name": "Matt Cutts: Try something new for 30 days",
    "shortsummary": "Is there something you've always meant to do, wanted to do, but just ... haven't? Matt Cutts suggests: Try it for 30 days. This short, lighthearted talk offers a neat way to think about setting and achieving goals.",
    "duration": "0:03:27",
    "publishdate": "7/1/2011"
  },
  {
    "rank": 158,
    "id": "680",
    "speaker": "Stefana Broadbent",
    "name": "Stefana Broadbent: How the Internet enables intimacy",
    "shortsummary": "We worry that IM, texting, Facebook are spoiling human intimacy, but Stefana Broadbent's research shows how communication tech is capable of cultivating deeper relationships, bringing love across barriers like distance and workplace rules.",
    "duration": "0:08:51",
    "publishdate": "11/2/2009"
  },
  {
    "rank": 159,
    "id": "1404",
    "speaker": "Ayah Bdeir",
    "name": "Ayah Bdeir: Building blocks that blink, beep and teach",
    "shortsummary": "Imagine a set of electronics as easy to play with as Legos. TED Fellow Ayah Bdeir introduces littleBits, a set of simple, interchangeable blocks that make programming as simple and important a part of creativity as snapping blocks together.",
    "duration": "0:05:27",
    "publishdate": "3/29/2012 15:00:00"
  },
  {
    "rank": 160,
    "id": "10",
    "speaker": "Dr. Dean Ornish",
    "name": "The world now eats (and dies) like Americans",
    "shortsummary": "Stop wringing your hands over AIDS, cancer and the avian flu. Cardiovascular disease kills more people than everything else combined -- and it's mostly preventable. Dr. Dean Ornish explains how changing our eating habits will save lives.",
    "duration": "0:03:18",
    "publishdate": "12/14/2006"
  },
  {
    "rank": 161,
    "id": "779",
    "speaker": "Daniel Kahneman",
    "name": "Daniel Kahneman: The riddle of experience vs. memory",
    "shortsummary": "Using examples from vacations to colonoscopies, Nobel laureate and founder of behavioral economics Daniel Kahneman reveals how our \"experiencing selves\" and our \"remembering selves\" perceive happiness differently. This new insight has profound implications for economics, public policy -- and our own self-awareness.",
    "duration": "0:20:06",
    "publishdate": "3/1/2010"
  },
  {
    "rank": 162,
    "id": "768",
    "speaker": "David Cameron",
    "name": "David Cameron: The next age of government",
    "shortsummary": "The leader of Britain's Conservative Party says we're entering a new era -- where governments themselves have less power (and less money) and people empowered by technology have more. Tapping into new ideas on behavioral economics, he explores how these trends could be turned into smarter policy.",
    "duration": "0:13:59",
    "publishdate": "2/15/2010"
  },
  {
    "rank": 163,
    "id": "1754",
    "speaker": "Alex Laskey",
    "name": "Alex Laskey: How behavioral science can lower your energy bill",
    "shortsummary": "What's a proven way to lower your energy costs? Would you believe: learning what your neighbor pays. Alex Laskey shows how a quirk of human behavior can make us all better, wiser energy users, with lower bills to prove it.",
    "duration": "0:08:11",
    "publishdate": "6/4/2013 15:00:00"
  },
  {
    "rank": 164,
    "id": "1698",
    "speaker": "Jessica Green",
    "name": "Jessica Green: We're covered in germs. Let's design for that.",
    "shortsummary": "Our bodies and homes are covered in microbes -- some good for us, some bad for us. As we learn more about the germs and microbes who share our living spaces, TED Fellow Jessica Green asks: Can we design buildings that encourage happy, healthy microbial environments?",
    "duration": "0:08:43",
    "publishdate": "3/25/2013 15:33:00"
  },
  {
    "rank": 165,
    "id": "255",
    "speaker": "Hector Ruiz",
    "name": "The power to connect the world",
    "shortsummary": "Hector Ruiz, the executive chair of AMD, wants to give Internet access to everyone. In this talk, he shares his extraordinary life story and describes AMD's 50x15 initiative that calls for connecting 50 percent of the world by 2015.",
    "duration": "0:19:57",
    "publishdate": "5/1/2008"
  },
  {
    "rank": 166,
    "id": "149",
    "speaker": "Allison Hunt",
    "name": "How I got my new hip",
    "shortsummary": "When Allison Hunt found out that she needed a new hip -- and that Canada's national health care system would require her to spend nearly 2 years on a waiting list (and in pain) -- she took matters into her own hands.",
    "duration": "0:04:48",
    "publishdate": "7/24/2007"
  },
  {
    "rank": 167,
    "id": "1109",
    "speaker": "Sebastian Thrun",
    "name": "Sebastian Thrun: Google's driverless car",
    "shortsummary": "Sebastian Thrun helped build Google's amazing driverless car, powered by a very personal quest to save lives and reduce traffic accidents. Jawdropping video shows the DARPA Challenge-winning car motoring through busy city traffic with no one behind the wheel, and dramatic test drive footage from TED2011 demonstrates how fast the thing can really go.",
    "duration": "0:04:14",
    "publishdate": "3/31/2011"
  },
  {
    "rank": 168,
    "id": "1455",
    "speaker": "Hans Rosling",
    "name": "Hans Rosling: Religions and babies",
    "shortsummary": "Hans Rosling had a question: Do some religions have a higher birth rate than others -- and how does this affect global population growth? Speaking at the TEDxSummit in Doha, Qatar, he graphs data over time and across religions. With his trademark humor and sharp insight, Hans reaches a surprising conclusion on world fertility rates.",
    "duration": "0:13:20",
    "publishdate": "5/22/2012 15:00:00"
  },
  {
    "rank": 169,
    "id": "1763",
    "speaker": "Camille Seaman",
    "name": "Camille Seaman: Photos from a storm chaser",
    "shortsummary": "Photographer Camille Seaman has been chasing storms for 5 years. In this talk she shows stunning, surreal photos of the heavens in tumult.",
    "duration": "0:03:26",
    "publishdate": "6/21/2013 14:59:00"
  },
  {
    "rank": 170,
    "id": "292",
    "speaker": "Peter Diamandis",
    "name": "Stephen Hawking hits zero g",
    "shortsummary": "X Prize founder Peter Diamandis talks about how he helped Stephen Hawking fulfill his dream of going to space -- by flying together into the upper atmosphere and experiencing weightlessness at zero g.",
    "duration": "0:04:01",
    "publishdate": "6/30/2008"
  },
  {
    "rank": 171,
    "id": "629",
    "speaker": "Lewis Pugh",
    "name": "Lewis Pugh swims the North Pole",
    "shortsummary": "Lewis Pugh talks about his record-breaking swim across the North Pole. He braved the icy waters (in a Speedo) to highlight the melting icecap. Watch for astonishing footage -- and some blunt commentary on the realities of supercold-water swims.",
    "duration": "0:18:53",
    "publishdate": "9/9/2009"
  },
  {
    "rank": 172,
    "id": "929",
    "speaker": "Jason Clay",
    "name": "Jason Clay: How big brands can help save biodiversity",
    "shortsummary": "Convince just 100 key companies to go sustainable, and WWF's Jason Clay says global markets will shift to protect the planet our consumption has already outgrown. Hear how his extraordinary roundtables are getting big brand rivals to agree on green practices first -- before their products duke it out on store shelves.",
    "duration": "0:19:29",
    "publishdate": "8/16/2010"
  },
  {
    "rank": 173,
    "id": "326",
    "speaker": "Patricia Burchat",
    "name": "The search for dark energy and dark matter",
    "shortsummary": "Physicist Patricia Burchat sheds light on two basic ingredients of our universe: dark matter and dark energy. Comprising 96% of the universe between them, they can't be directly measured, but their influence is immense.",
    "duration": "0:16:09",
    "publishdate": "8/17/2008"
  },
  {
    "rank": 174,
    "id": "41",
    "speaker": "Nicholas Negroponte",
    "name": "The vision behind One Laptop Per Child",
    "shortsummary": "Nicholas Negroponte, founder of the MIT Media Laboratory, describes how the One Laptop Per Child project will build and distribute the \"$100 laptop.\"",
    "duration": "0:17:37",
    "publishdate": "8/1/2006"
  },
  {
    "rank": 175,
    "id": "1696",
    "speaker": "Francis Collins",
    "name": "Francis Collins: We need better drugs -- now",
    "shortsummary": "Today we know the molecular cause of 4,000 diseases, but treatments are available for only 250 of them. So what's taking so long? Geneticist and physician Francis Collins explains why systematic drug discovery is imperative, even for rare and complex diseases, and offers a few solutions -- like teaching old drugs new tricks. ",
    "duration": "0:14:40",
    "publishdate": "3/21/2013 15:01:00"
  },
  {
    "rank": 176,
    "id": "843",
    "speaker": "Stephen Wolfram",
    "name": "Stephen Wolfram: Computing a theory of everything",
    "shortsummary": "Stephen Wolfram, creator of Mathematica, talks about his quest to make all knowledge computational -- able to be searched, processed and manipulated. His new search engine, Wolfram Alpha, has no lesser goal than to model and explain the physics underlying the universe.",
    "duration": "0:19:58",
    "publishdate": "4/27/2010"
  },
  {
    "rank": 177,
    "id": "620",
    "speaker": "Hans Rosling",
    "name": "Hans Rosling: Let my dataset change your mindset",
    "shortsummary": "Talking at the US State Department this summer, Hans Rosling uses his fascinating data-bubble software to burst myths about the developing world. Look for new analysis on China and the post-bailout world, mixed with classic data shows.",
    "duration": "0:19:57",
    "publishdate": "8/26/2009"
  },
  {
    "rank": 178,
    "id": "1218",
    "speaker": "Lee Cronin",
    "name": "Lee Cronin: Making matter come alive",
    "shortsummary": "Before life existed on Earth, there was just matter, inorganic dead \"stuff.\" How improbable is it that life arose? And -- could it use a different type of chemistry? Using an elegant definition of life (anything that can evolve), chemist Lee Cronin is exploring this question by attempting to create a fully inorganic cell using a \"Lego kit\" of inorganic molecules -- no carbon -- that can assemble, replicate and compete.",
    "duration": "0:15:11",
    "publishdate": "9/8/2011"
  },
  {
    "rank": 179,
    "id": "1567",
    "speaker": "Bandi Mbubi",
    "name": "Bandi Mbubi: Demand a fair trade cell phone",
    "shortsummary": "Your mobile phone, computer and game console have a bloody past \"” tied to tantalum mining, which funds the war in the Democratic Republic of the Congo. Drawing on his personal story, activist and refugee Bandi Mbubi gives a stirring call to action. (Filmed at TEDxExeter.)\n",
    "duration": "0:09:21",
    "publishdate": "9/20/2012 14:56:00"
  },
  {
    "rank": 180,
    "id": "1733",
    "speaker": "Angela Lee Duckworth",
    "name": "Angela Lee Duckworth: The key to success? Grit",
    "shortsummary": "Leaving a high-flying job in consulting, Angela Lee Duckworth took a job teaching math to seventh graders in a New York public school. She quickly realized that IQ wasn't the only thing separating the successful students from those who struggled. Here, she explains her theory of â€œgritâ€ as a predictor of success.",
    "duration": "0:06:12",
    "publishdate": "5/9/2013 14:59:00"
  },
  {
    "rank": 181,
    "id": "1602",
    "speaker": "Marco Tempest",
    "name": "Marco Tempest: A cyber-magic card trick like no other",
    "shortsummary": "The suits, numbers and colors in a deck of cards correspond to the seasons, moon cycles and calendar. Marco Tempest straps on augmented reality goggles and does a card trick like you've never seen before, weaving a lyrical tale as he deals. (<em>This version fixes a glitch in the original performance, but is otherwise exactly as seen live by the TEDGlobal audience, including the dazzling augmented reality effects.</em>)",
    "duration": "0:06:35",
    "publishdate": "10/26/2012 15:00:00"
  },
  {
    "rank": 182,
    "id": "1568",
    "speaker": "Ellen Jorgensen",
    "name": "Ellen Jorgensen: Biohacking -- you can do it, too",
    "shortsummary": "We have personal computing, why not personal biotech? That's the question biologist Ellen Jorgensen and her colleagues asked themselves before opening Genspace, a nonprofit DIYbio lab in Brooklyn devoted to citizen science, where amateurs can go and tinker with biotechnology. Far from being a sinister Frankenstein's lab (as some imagined it), Genspace offers a long list of fun, creative and practical uses for DIYbio.",
    "duration": "0:10:08",
    "publishdate": "1/15/2013 16:01:00"
  },
  {
    "rank": 183,
    "id": "788",
    "speaker": "Tim Berners-Lee",
    "name": "Tim Berners-Lee: The year open data went worldwide",
    "shortsummary": "At TED2009, Tim Berners-Lee called for \"raw data now\" -- for governments, scientists and institutions to make their data openly available on the web. At TED University in 2010, he shows a few of the interesting results when the data gets linked up.",
    "duration": "0:05:33",
    "publishdate": "3/8/2010"
  },
  {
    "rank": 184,
    "id": "1281",
    "speaker": "Péter Fankhauser",
    "name": "Péter Fankhauser: Meet Rezero, the dancing ballbot",
    "shortsummary": "Onstage at TEDGlobal, Péter Fankhauser demonstrates Rezero, a robot that balances on a ball. Designed and built by a group of engineering students, Rezero is the first ballbot made to move quickly and gracefully -- and even dance.",
    "duration": "0:05:16",
    "publishdate": "11/22/2011"
  },
  {
    "rank": 185,
    "id": "1395",
    "speaker": "Myshkin Ingawale",
    "name": "Myshkin Ingawale: A blood test without bleeding",
    "shortsummary": "Anemia is a major -- and completely preventable -- cause of deaths in childbirth in many places around the world, but the standard test is invasive and slow. In this witty and inspiring talk, TED Fellow Myshkin Ingawale describes how (after 32 tries) he and his team created a simple, portable, low-cost device that can test for anemia without breaking the skin.",
    "duration": "0:06:43",
    "publishdate": "3/20/2012 15:01:00"
  },
  {
    "rank": 186,
    "id": "1729",
    "speaker": "Sebastiào Salgado",
    "name": "Sebastiào Salgado: The silent drama of photography",
    "shortsummary": "Economics PhD Sebastiào Salgado only took up photography in his 30s, but the discipline became an obsession. His years-long projects beautifully capture the human side of a global story that all too often involves death, destruction or decay. Here, he tells a deeply personal story of the craft that nearly killed him, and shows breathtaking images from his latest work, Genesis, which documents the world's forgotten people and places. ",
    "duration": "0:16:53",
    "publishdate": "5/1/2013 14:58:00"
  },
  {
    "rank": 187,
    "id": "1137",
    "speaker": "Carlo Ratti",
    "name": "Carlo Ratti: Architecture that senses and responds",
    "shortsummary": "With his team at SENSEable City Lab, MIT's Carlo Ratti makes cool things by sensing the data we create. He pulls from passive data sets -- like the calls we make, the garbage we throw away -- to create surprising visualizations of city life. And he and his team create dazzling interactive environments from moving water and flying light, powered by simple gestures caught through sensors.",
    "duration": "0:15:46",
    "publishdate": "5/3/2011"
  },
  {
    "rank": 188,
    "id": "1480",
    "speaker": "David R. Dow",
    "name": "David R. Dow: Lessons from death row inmates",
    "shortsummary": "What happens before a murder? In looking for ways to reduce death penalty cases, David R. Dow realized that a surprising number of death row inmates had similar biographies. In this talk he proposes a bold plan, one that prevents murders in the first place. <em>(Filmed at <a href=http://www.ted.com/tedx/events/660>TEDxAustin</a>.)</em>",
    "duration": "0:18:16",
    "publishdate": "6/18/2012 15:21:00"
  },
  {
    "rank": 189,
    "id": "602",
    "speaker": "Jim Fallon",
    "name": "Jim Fallon: Exploring the mind of a killer",
    "shortsummary": "Psychopathic killers are the basis for some must-watch TV, but what really makes them tick? Neuroscientist Jim Fallon talks about brain scans and genetic analysis that may uncover the rotten wiring in the nature (and nurture) of murderers. In a too-strange-for-fiction twist, he shares a fascinating family history that makes his work chillingly personal.",
    "duration": "0:06:32",
    "publishdate": "7/16/2009"
  },
  {
    "rank": 190,
    "id": "1187",
    "speaker": "Nina Tandon",
    "name": "Nina Tandon: Caring for engineered tissue",
    "shortsummary": "Tissue engineer and TED Fellow Nina Tandon is growing artificial hearts and bones. To do that, she needs new ways of caring for artificially grown cells -- techniques she's developed by the simple but powerful method of copying their natural environments.",
    "duration": "0:04:13",
    "publishdate": "7/8/2011"
  },
  {
    "rank": 191,
    "id": "1632",
    "speaker": "Robin Chase",
    "name": "Robin Chase: Excuse me, may I rent your car?",
    "shortsummary": "A decade ago, Robin Chase founded Zipcar in the US, now the largest car-sharing company in the world. Now she's exploring the next level of car-sharing: Buzzcar, a French startup that lets people rent their own cars to others. The details are fascinating (how does insurance work, exactly?), and the larger vision (she calls it Peers, Inc.) points to a new definition of ownership and entrepreneurship.",
    "duration": "0:12:24",
    "publishdate": "12/17/2012 16:00:00"
  },
  {
    "rank": 192,
    "id": "418",
    "speaker": "Jay Walker",
    "name": "A library of human imagination",
    "shortsummary": "Jay Walker, curator of the Library of Human Imagination, conducts a surprising show-and-tell session highlighting a few of the intriguing artifacts that backdropped the 2008 TED stage.",
    "duration": "0:07:09",
    "publishdate": "12/14/2008"
  },
  {
    "rank": 193,
    "id": "848",
    "speaker": "Simon Sinek",
    "name": "Simon Sinek: How great leaders inspire action",
    "shortsummary": "Simon Sinek has a simple but powerful model for inspirational leadership all starting with a golden circle and the question \"Why?\"  His examples include Apple, Martin Luther King, and the Wright brothers -- and as a counterpoint Tivo, which (until a recent court victory that tripled its stock price) appeared to be struggling.",
    "duration": "0:18:04",
    "publishdate": "5/4/2010"
  },
  {
    "rank": 194,
    "id": "551",
    "speaker": "Carolyn Porco",
    "name": "Carolyn Porco: Could a Saturn moon harbor life?",
    "shortsummary": "Carolyn Porco shares exciting new findings from the Cassini spacecraft's recent sweep of one of Saturn's moons, Enceladus. Samples gathered from the moon's icy geysers hint that an ocean under its surface could harbor life.",
    "duration": "0:03:29",
    "publishdate": "5/21/2009"
  },
  {
    "rank": 195,
    "id": "1249",
    "speaker": "Justin Hall-Tipping",
    "name": "Justin Hall-Tipping: Freeing energy from the grid",
    "shortsummary": "What would happen if we could generate power from our windowpanes? In this moving talk, entrepreneur Justin Hall-Tipping shows the materials that could make that possible, and how questioning our notion of 'normal' can lead to extraordinary breakthroughs.",
    "duration": "0:12:45",
    "publishdate": "10/18/2011"
  },
  {
    "rank": 196,
    "id": "92",
    "speaker": "Hans Rosling",
    "name": "Debunking third-world myths with the best stats you've ever seen",
    "shortsummary": "You've never seen data presented like this. With the drama and urgency of a sportscaster, statistics guru Hans Rosling debunks myths about the so-called \"developing world.\"",
    "duration": "0:19:50",
    "publishdate": "6/27/2006"
  },
  {
    "rank": 197,
    "id": "1195",
    "speaker": "Markus Fischer",
    "name": "A robot that flies like a bird",
    "shortsummary": "Plenty of robots can fly -- but none can fly like a real bird. That is, until Markus Fischer and his team at Festo built SmartBird, a large, lightweight robot, modeled on a seagull, that flies by flapping its wings. A soaring demo fresh from TEDGlobal 2011.",
    "duration": "0:06:22",
    "publishdate": "7/22/2011"
  },
  {
    "rank": 198,
    "id": "1012",
    "speaker": "Kim Gorgens",
    "name": "Kim Gorgens: Protecting the brain against concussion",
    "shortsummary": "In a lively talk from TEDxDU, neuropsychologist Kim Gorgens makes the case for better protecting our brains against the risk of concussion -- with a compelling pitch for putting helmets on kids.",
    "duration": "0:09:21",
    "publishdate": "11/22/2010"
  },
  {
    "rank": 199,
    "id": "1371",
    "speaker": "Kevin Allocca",
    "name": "Kevin Allocca: Why videos go viral",
    "shortsummary": "Kevin Allocca is YouTube's trends manager, and he has deep thoughts about silly web video. In this talk from TEDYouth, he shares the 4 reasons a video goes viral. (This is the first talk posted from an amazing TEDYouth event. Many others will come on line next month as part of our TED-Ed launch. We can't wait ...)",
    "duration": "0:07:20",
    "publishdate": "2/27/2012 18:09:00"
  },
  {
    "rank": 200,
    "id": "252",
    "speaker": "Dr. Dean Ornish",
    "name": "Your genes are not your fate",
    "shortsummary": "Dean Ornish shares new research that shows how adopting healthy lifestyle habits can affect a person at a genetic level. For instance, he says, when you live healthier, eat better, exercise, and love more, your brain cells actually increase.",
    "duration": "0:03:12",
    "publishdate": "6/16/2008"
  },
  {
    "rank": 201,
    "id": "1564",
    "speaker": "Julian Treasure",
    "name": "Julian Treasure: Why architects need to use their ears",
    "shortsummary": "Because of poor acoustics, students in classrooms miss 50 percent of what their teachers say and patients in hospitals have trouble sleeping because they continually feel stressed. Julian Treasure sounds a call to action for designers to pay attention to the \"invisible architecture\" of sound.",
    "duration": "0:09:51",
    "publishdate": "9/18/2012 15:00:00"
  },
  {
    "rank": 202,
    "id": "1283",
    "speaker": "Louie Schwartzberg",
    "name": "Louie Schwartzberg: Nature. Beauty. Gratitude.",
    "shortsummary": "Nature's beauty can be easily missed -- but not through Louie Schwartzberg's lens. His stunning time-lapse photography, accompanied by powerful words from Benedictine monk David Steindl-Rast, serves as a meditation on being grateful for every day.",
    "duration": "",
    "publishdate": "11/24/2011"
  },
  {
    "rank": 203,
    "id": "997",
    "speaker": "David Bismark",
    "name": "David Bismark: E-voting without fraud",
    "shortsummary": "David Bismark demos a new system for voting that contains a simple, verifiable way to prevent fraud and miscounting -- while keeping each person's vote secret.",
    "duration": "0:07:02",
    "publishdate": "11/2/2010"
  },
  {
    "rank": 204,
    "id": "1066",
    "speaker": "Johanna Blakley",
    "name": "Johanna Blakley: Social media and the end of gender",
    "shortsummary": "Media and advertising companies still use the same old demographics to understand audiences, but they're becoming increasingly harder to track online, says media researcher Johanna Blakley. As social media outgrows traditional media, and women users outnumber men, Blakley explains what changes are in store for the future of media.",
    "duration": "0:08:27",
    "publishdate": "2/2/2011"
  },
  {
    "rank": 205,
    "id": "1627",
    "speaker": "Ellen 't Hoen",
    "name": "Ellen 't Hoen: Pool medical patents, save lives",
    "shortsummary": "Patenting a new drug helps finance its immense cost to develop -- but that same patent can put advanced treatments out of reach for sick people in developing nations, at deadly cost. Ellen 't Hoen talks about an elegant, working solution to the problem: the Medicines Patent Pool. <i>(Filmed at TEDxZurich.)</i>",
    "duration": "0:11:16",
    "publishdate": "12/10/2012 16:18:00"
  },
  {
    "rank": 206,
    "id": "1063",
    "speaker": "Jake Shimabukuro",
    "name": "Jake Shimabukuro plays \"Bohemian Rhapsody\"",
    "shortsummary": "Jake Shimabukuro strums monster sounds out of the tiny Hawaiian ukulele, as he plays a cover of Queen's \"Bohemian Rhapsody.\" A sensational performance from TED2010 -- it'll send shivers down your spine.",
    "duration": "0:07:08",
    "publishdate": "1/28/2011"
  },
  {
    "rank": 207,
    "id": "1197",
    "speaker": "Geoffrey West",
    "name": "Geoffrey West: The surprising math of cities and corporations",
    "shortsummary": "Physicist Geoffrey West has found that simple, mathematical laws govern the properties of cities -- that wealth, crime rate, walking speed and many other aspects of a city can be deduced from a single number: the city's population. In this mind-bending talk from TEDGlobal he shows how it works and how similar laws hold for organisms and corporations.",
    "duration": "0:17:33",
    "publishdate": "7/26/2011"
  },
  {
    "rank": 208,
    "id": "62",
    "speaker": "Bjorn Lomborg",
    "name": "Our priorities for saving the world",
    "shortsummary": "Given $50 billion to spend, which would you solve first, AIDS or global warming? Danish political scientist Bjorn Lomborg comes up with surprising answers.",
    "duration": "0:16:41",
    "publishdate": "1/2/2007"
  },
  {
    "rank": 209,
    "id": "1173",
    "speaker": "Maya Beiser",
    "name": "Maya Beiser(s) and her cello(s) ",
    "shortsummary": "Cellist Maya Beiser plays a gorgeous eight-part modern etude with seven copies of herself, and segues into a meditative music/video hybrid -- using tech to create endless possibilities for transformative sound. Music is Steve Reich's \"Cello Counterpoint,\" with video from Bill Morrison, then David Lang's \"World to Come,\" with video by Irit Batsry.",
    "duration": "0:20:09",
    "publishdate": "6/17/2011"
  },
  {
    "rank": 210,
    "id": "1160",
    "speaker": "Aaron O'Connell",
    "name": "Aaron O'Connell: Making sense of a visible quantum object",
    "shortsummary": "Physicists are used to the idea that subatomic particles behave according to the bizarre rules of quantum mechanics, completely different to human-scale objects. In a breakthrough experiment, Aaron O'Connell has blurred that distinction by creating an object that is visible to the unaided eye, but provably in two places at the same time. In this talk he suggests an intriguing way of thinking about the result.",
    "duration": "0:07:51",
    "publishdate": "6/2/2011"
  },
  {
    "rank": 211,
    "id": "1736",
    "speaker": "ShaoLan Hsueh",
    "name": "ShaoLan: Learn to read Chinese ... with ease!",
    "shortsummary": "For foreigners, learning to speak Chinese is a hard task. But learning to read the beautiful, often complex characters of the Chinese written language may be less difficult. ShaoLan walks through a simple lesson in recognizing the ideas behind the characters and their meaning -- building from a few simple forms to more complex concepts. Call it Chineasy.",
    "duration": "0:06:10",
    "publishdate": "5/7/2013 15:13:00"
  },
  {
    "rank": 212,
    "id": "988",
    "speaker": "David Byrne, Thomas Dolby,  Ethel",
    "name": "David Byrne sings \"(Nothing But) Flowers\"",
    "shortsummary": "David Byrne sings the Talking Heads' 1988 hit, \"(Nothing But) Flowers.\" He's accompanied by Thomas Dolby and string quartet Ethel, who made up the TED2010 house band.",
    "duration": "0:03:15",
    "publishdate": "10/22/2010"
  },
  {
    "rank": 213,
    "id": "1647",
    "speaker": "Cameron Russell",
    "name": "Cameron Russell: Looks aren't everything. Believe me, I'm a model.",
    "shortsummary": "Cameron Russell admits she won \"a genetic lottery\": she's tall, pretty and an underwear model. But don't judge her by her looks. In this fearless talk, she takes a wry look at the industry that had her looking highly seductive at barely 16-years-old. (<em>Filmed at TEDxMidAtlantic.</em>)",
    "duration": "0:09:37",
    "publishdate": "1/16/2013 16:05:00"
  },
  {
    "rank": 214,
    "id": "1611",
    "speaker": "Ludwick Marishane",
    "name": "Ludwick Marishane: A bath without water",
    "shortsummary": "If you had to walk a mile for a jug of water every day, as millions of people do, it's unlikely you'd use that precious water to bathe. Young entrepreneur Ludwick Marishane tells the amazing, funny story of how he invented a cheap, clean and convenient solution: DryBath, the world's first bath-substituting lotion.",
    "duration": "0:05:13",
    "publishdate": "12/4/2012 16:07:00"
  },
  {
    "rank": 215,
    "id": "506",
    "speaker": "Nathaniel Kahn",
    "name": "My father, my architect",
    "shortsummary": "Nathaniel Kahn shares clips from his documentary \"My Architect,\" about his quest to understand his father, the legendary architect Louis Kahn. It's a film with meaning to anyone who seeks to understand the relationship between art and love.",
    "duration": "0:10:27",
    "publishdate": "4/6/2009"
  },
  {
    "rank": 216,
    "id": "1014",
    "speaker": "Jason Fried",
    "name": "Jason Fried: Why work doesn't happen at work",
    "shortsummary": "Jason Fried has a radical theory of working: that the office isn't a good place to do it. At TEDxMidwest, he lays out the main problems (call them the M&Ms) and offers three suggestions to make work work.",
    "duration": "0:15:21",
    "publishdate": "11/24/2010"
  },
  {
    "rank": 217,
    "id": "630",
    "speaker": "Rebecca Saxe",
    "name": "Rebecca Saxe: How we read each other's minds",
    "shortsummary": "Sensing the motives and feelings of others is a natural talent for humans. But how do we do it? Here, Rebecca Saxe shares fascinating lab work that uncovers how the brain thinks about other peoples' thoughts -- and judges their actions.",
    "duration": "0:16:51",
    "publishdate": "9/10/2009"
  },
  {
    "rank": 218,
    "id": "1161",
    "speaker": "Jessi Arrington",
    "name": "Jessi Arrington: Wearing nothing new",
    "shortsummary": "Designer Jessi Arrington packed nothing for TED but 7 pairs of undies, buying the rest of her clothes in thrift stores around LA. It's a meditation on conscious consumption -- wrapped in a rainbow of color and creativity.",
    "duration": "0:05:24",
    "publishdate": "6/3/2011"
  },
  {
    "rank": 219,
    "id": "1799",
    "speaker": "Eli Beer",
    "name": "Eli Beer: The fastest ambulance? A motorcycle",
    "shortsummary": "As a young EMT on a Jerusalem ambulance, Eli Beer realized that, stuck in brutal urban traffic, they often arrived too late to help. So he organized a group of volunteer EMTs -- many on foot -- ready to drop everything and dash to save lives in their neighborhood. Today, United Hatzlah uses a smartphone app and a fleet of â€œambucyclesâ€ to help nearby patients until an ambulance arrives. With an average response time of 3 minutes, last year, they treated 207,000 people in Israel. And the idea is going global.",
    "duration": "0:10:44",
    "publishdate": "7/30/2013 15:03:00"
  },
  {
    "rank": 220,
    "id": "987",
    "speaker": "Patrick Chappatte",
    "name": " Patrick Chappatte: The power of cartoons",
    "shortsummary": "In a series of witty punchlines, Patrick Chappatte makes a poignant case for the power of the humble cartoon. His projects in Lebanon, West Africa and Gaza show how, in the right hands, the pencil can illuminate serious issues and bring the most unlikely people together.\n\n\n\n",
    "duration": "0:12:32",
    "publishdate": "10/21/2010"
  },
  {
    "rank": 221,
    "id": "876",
    "speaker": "Brian Cox",
    "name": "Brian Cox: Why we need the explorers",
    "shortsummary": "In tough economic times, our exploratory science programs -- from space probes to the LHC -- are first to suffer budget cuts. Brian Cox explains how curiosity-driven science pays for itself, powering innovation and a profound appreciation of our existence.",
    "duration": "0:16:29",
    "publishdate": "6/3/2010"
  },
  {
    "rank": 222,
    "id": "1450",
    "speaker": "Carl Schoonover",
    "name": "Carl Schoonover: How to look inside the brain",
    "shortsummary": "There have been remarkable advances in understanding the brain, but how do you actually study the neurons inside it? Using gorgeous imagery, neuroscientist and TED Fellow Carl Schoonover shows the tools that let us see inside our brains.\n",
    "duration": "0:19:17",
    "publishdate": "5/17/2012 15:01:00"
  },
  {
    "rank": 223,
    "id": "736",
    "speaker": "Lalitesh Katragadda",
    "name": "Lalitesh Katragadda: Making maps to fight disaster, build economies",
    "shortsummary": "As of 2005, only 15 percent of the world was mapped. This slows the delivery of aid after a disaster -- and hides the economic potential of unused lands and unknown roads. In this short talk, Google's Lalitesh Katragadda demos Map Maker, a group map-making tool that people around the globe are using to map their world.",
    "duration": "0:02:54",
    "publishdate": "1/13/2010"
  },
  {
    "rank": 224,
    "id": "239",
    "speaker": "David Hoffman",
    "name": "Catch Sputnik mania!",
    "shortsummary": "Filmmaker David Hoffman shares footage from his feature-length documentary Sputnik Mania, which shows how the Soviet Union's launch of Sputnik in 1957 led to both the space race and the arms race -- and jump-started science and math education around the w",
    "duration": "0:03:50",
    "publishdate": "4/2/2008"
  },
  {
    "rank": 225,
    "id": "642",
    "speaker": "William Kamkwamba",
    "name": "William Kamkwamba: How I harnessed the wind",
    "shortsummary": "At age 14, in poverty and famine, a Malawian boy built a windmill to power his family's home. Now at 22, William Kamkwamba, who speaks at TED, here, for the second time, shares in his own words the moving tale of invention that changed his life.",
    "duration": "0:05:59",
    "publishdate": "9/23/2009"
  },
  {
    "rank": 226,
    "id": "1519",
    "speaker": "Michael Hansmeyer",
    "name": "Michael Hansmeyer: Building unimaginable shapes",
    "shortsummary": "Inspired by cell division, Michael Hansmeyer writes algorithms that design outrageously fascinating shapes and forms with millions of facets. No person could draft them by hand, but they're buildable -- and they could revolutionize the way we think of architectural form.",
    "duration": "0:11:07",
    "publishdate": "7/27/2012 15:17:00"
  },
  {
    "rank": 227,
    "id": "1106",
    "speaker": "Patricia Ryan",
    "name": "Patricia Ryan: Don't insist on English!",
    "shortsummary": "At TEDxDubai, longtime English teacher Patricia Ryan asks a provocative question: Is the world's focus on English preventing the spread of great ideas in other languages? (For instance: what if Einstein had to pass the TOEFL?) It's a passionate defense of translating and sharing ideas.",
    "duration": "0:10:35",
    "publishdate": "3/28/2011"
  },
  {
    "rank": 228,
    "id": "531",
    "speaker": "Brian Cox",
    "name": "Brian Cox: What went wrong at the LHC",
    "shortsummary": "In this short talk from TED U 2009, Brian Cox shares what's new with the CERN supercollider. He covers the repairs now underway and what the future holds for the largest science experiment ever attempted.",
    "duration": "0:03:29",
    "publishdate": "5/1/2009"
  },
  {
    "rank": 229,
    "id": "1549",
    "speaker": "Timothy Prestero",
    "name": "Timothy Prestero: Design for people, not awards",
    "shortsummary": "Timothy Prestero thought he'd designed the perfect incubator for newborns in the developing world -- but his team learned a hard lesson when it failed to go into production. A manifesto on the importance of designing for real-world use, rather than accolades. (<em>Filmed at TEDxBoston.</em>)",
    "duration": "0:11:05",
    "publishdate": "8/16/2012 15:00:00"
  },
  {
    "rank": 230,
    "id": "1812",
    "speaker": "May El-Khalil ",
    "name": "May El-Khalil: Making peace is a marathon",
    "shortsummary": "In Lebanon there is one gunshot a year that isn't part of a scene of routine violence: The opening sound of the Beirut International Marathon. In a moving talk, marathon founder May El-Khalil explains why she believed a 26.2-mile running event could bring together a country divided for decades by politics and religion, even if for one day a year.",
    "duration": "0:10:16",
    "publishdate": "8/16/2013 15:00:00"
  },
  {
    "rank": 231,
    "id": "110",
    "speaker": "Eddi Reader",
    "name": "\"Kiteflyer's Hill\"",
    "shortsummary": "Singer/songwriter Eddi Reader performs \"Kiteflyer's Hill,\" a tender look back at a lost love. With Thomas Dolby on piano.",
    "duration": "0:06:18",
    "publishdate": "4/14/2007"
  },
  {
    "rank": 232,
    "id": "1533",
    "speaker": "Margaret Heffernan",
    "name": "Margaret Heffernan: Dare to disagree",
    "shortsummary": "Most people instinctively avoid conflict, but as Margaret Heffernan shows us, good disagreement is central to progress. She illustrates (sometimes counterintuitively) how the best partners aren't echo chambers -- and how great research teams, relationships and businesses allow people to deeply disagree.",
    "duration": "0:12:56",
    "publishdate": "8/6/2012 15:00:00"
  },
  {
    "rank": 233,
    "id": "1551",
    "speaker": "Antony Gormley",
    "name": "Antony Gormley: Sculpted space, within and without",
    "shortsummary": "Legendary sculptor Antony Gormley riffs on space and the human form. His works explore the interior space we feel within our own bodies -- and the exterior space we feel around us, knowing that we are just dots in space and time.",
    "duration": "0:15:56",
    "publishdate": "9/7/2012 15:00:00"
  },
  {
    "rank": 234,
    "id": "1563",
    "speaker": "Sarah-Jayne Blakemore",
    "name": "Sarah-Jayne Blakemore: The mysterious workings of the adolescent brain",
    "shortsummary": "Why do teenagers seem so much more impulsive, so much less self-aware than grown-ups? Cognitive neuroscientist Sarah-Jayne Blakemore compares the prefrontal cortex in adolescents to that of adults, to show us how typically \"teenage\" behavior is caused by the growing and developing brain.",
    "duration": "0:14:26",
    "publishdate": "9/17/2012 15:01:00"
  },
  {
    "rank": 235,
    "id": "578",
    "speaker": "Diane Benscoter",
    "name": "Diane Benscoter on how cults rewire the brain",
    "shortsummary": "Diane Benscoter spent five years as a \"Moonie.\" She shares an insider's perspective on the mind of a cult member, and proposes a new way to think about today's most troubling conflicts and extremist movements.",
    "duration": "0:06:24",
    "publishdate": "6/17/2009"
  },
  {
    "rank": 236,
    "id": "626",
    "speaker": "Evan Grant",
    "name": "Evan Grant: Making sound visible through cymatics",
    "shortsummary": "Evan Grant demonstrates the science and art of cymatics, a process for making soundwaves visible. Useful for analyzing complex sounds (like dolphin calls), it also makes complex and beautiful designs.",
    "duration": "0:04:39",
    "publishdate": "9/3/2009"
  },
  {
    "rank": 237,
    "id": "494",
    "speaker": "Jacqueline Novogratz",
    "name": "From a Nairobi slum, a tale of hope",
    "shortsummary": "Jacqueline Novogratz tells a moving story of  an encounter in a Nairobi slum with Jane, a former prostitute, whose dreams of escaping poverty, of becoming a doctor and of getting married were fulfilled in an unexpected way.",
    "duration": "0:07:30",
    "publishdate": "3/24/2009"
  },
  {
    "rank": 238,
    "id": "619",
    "speaker": "Eric Giler",
    "name": "Eric Giler demos wireless electricity",
    "shortsummary": "Eric Giler wants to untangle our wired lives with cable-free electric power. Here, he covers what this sci-fi tech offers, and demos MIT's breakthrough version, WiTricity -- a near-to-market invention that may soon recharge your cell phone, car, pacemaker.",
    "duration": "0:10:09",
    "publishdate": "8/25/2009"
  },
  {
    "rank": 239,
    "id": "1102",
    "speaker": "Isabel Behncke Izquierdo",
    "name": "Isabel Behncke: Evolution's gift of play, from bonobo apes to humans",
    "shortsummary": "With never-before-seen video, primatologist Isabel Behncke Izquierdo (a TED Fellow) shows how bonobo ape society learns from constantly playing -- solo, with friends, even as a prelude to sex. Indeed, play appears to be the bonobos' key to problem-solving and avoiding conflict. If it works for our close cousins, why not for us?",
    "duration": "0:07:01",
    "publishdate": "3/21/2011"
  },
  {
    "rank": 240,
    "id": "860",
    "speaker": "Graham Hill",
    "name": "Graham Hill: Why I'm a weekday vegetarian",
    "shortsummary": "We all know the arguments that being vegetarian is better for the environment and for the animals -- but in a carnivorous culture, it can be hard to make the change. Graham Hill has a powerful, pragmatic suggestion: Be a weekday veg.",
    "duration": "0:05:45",
    "publishdate": "5/18/2010"
  },
  {
    "rank": 241,
    "id": "748",
    "speaker": "Bill Davenhall",
    "name": "Bill Davenhall: Your health depends on where you live",
    "shortsummary": "Where you live: It impacts your health as much as diet and genes do, but it's not part of your medical records. At TEDMED, Bill Davenhall shows how overlooked government geo-data (from local heart-attack rates to toxic dumpsite info) can mesh with mobile GPS apps to keep doctors in the loop. Call it \"geo-medicine.\"",
    "duration": "0:09:25",
    "publishdate": "1/25/2010"
  },
  {
    "rank": 242,
    "id": "253",
    "speaker": "Brian Cox",
    "name": "An inside tour of the world's biggest supercollider",
    "shortsummary": "\"Rock-star physicist\" Brian Cox talks about his work on the Large Hadron Collider at CERN. Discussing the biggest of big science in an engaging, accessible way, Cox brings us along on a tour of the massive project.",
    "duration": "0:14:59",
    "publishdate": "4/29/2008"
  },
  {
    "rank": 243,
    "id": "1557",
    "speaker": "Vikram Patel",
    "name": "Vikram Patel: Mental health for all by involving all",
    "shortsummary": "Nearly 450 million people are affected by mental illness worldwide. In wealthy nations, just half receive appropriate care, but in developing countries, close to 90 percent go untreated because psychiatrists are in such short supply. Vikram Patel outlines a highly promising approach -- training members of communities to give mental health interventions, empowering ordinary people to care for others.",
    "duration": "0:12:22",
    "publishdate": "9/11/2012 15:00:00"
  },
  {
    "rank": 244,
    "id": "1814",
    "speaker": "Alexa Meade",
    "name": "Alexa Meade: Your body is my canvas",
    "shortsummary": "Alexa Meade takes an innovative approach to art. Not for her a life of sketching and stretching canvases. Instead, she selects a topic and then paints it--literally. She covers everything in a scene--people, chairs, food, you name it--in a mask of paint that mimics what's below it. In this eye-opening talk Meade shows off photographs of some of the more outlandish results, and shares a new project involving people, paint and milk. ",
    "duration": "0:07:04",
    "publishdate": "9/6/2013 15:12:00"
  },
  {
    "rank": 245,
    "id": "1534",
    "speaker": "Max Little",
    "name": "Max Little: A test for Parkinson's with a phone call",
    "shortsummary": "Parkinson's disease affects 6.3 million people worldwide, causing weakness and tremors, but there's no objective way to detect it early on. Yet. Applied mathematician and TED Fellow Max Little is testing a simple, cheap tool that in trials is able to detect Parkinson's with 99 percent accuracy -- in a 30-second phone call.",
    "duration": "0:06:04",
    "publishdate": "8/7/2012 15:04:00"
  },
  {
    "rank": 246,
    "id": "1322",
    "speaker": "Drew Berry",
    "name": "Drew Berry: Animations of unseeable biology",
    "shortsummary": "We have no ways to directly observe molecules and what they do -- Drew Berry wants to change that.  At TEDxSydney he shows his scientifically accurate (and entertaining!) animations that help researchers see unseeable processes within our own cells.",
    "duration": "0:09:08",
    "publishdate": "1/12/2012 15:51:00"
  },
  {
    "rank": 247,
    "id": "1695",
    "speaker": "Elon Musk",
    "name": "Elon Musk: The mind behind Tesla, SpaceX, SolarCity ...",
    "shortsummary": "Entrepreneur Elon Musk is a man with many plans. The founder of PayPal, Tesla Motors and SpaceX sits down with TED curator Chris Anderson to share details about his visionary projects, which include a mass-marketed electric car, a solar energy leasing company and a fully reusable rocket.",
    "duration": "0:21:04",
    "publishdate": "3/19/2013 14:57:00"
  },
  {
    "rank": 248,
    "id": "1679",
    "speaker": "Jennifer Granholm",
    "name": "Jennifer Granholm: A clean energy proposal -- race to the top!",
    "shortsummary": "Kicking off the TED2013 conference, Jennifer Granholm asks a very American question with worldwide implications: How do we make more jobs? Her big idea: Invest in new alternative energy sources. And her big challenge: Can it be done with or without our broken Congress?",
    "duration": "0:12:41",
    "publishdate": "2/28/2013 22:06:00"
  },
  {
    "rank": 249,
    "id": "1056",
    "speaker": "Van Jones",
    "name": "Van Jones: The economic injustice of plastic",
    "shortsummary": "Van Jones lays out a case against plastic pollution from the perspective of social justice. Because plastic trash, he shows us, hits poor people and poor countries \"first and worst,\" with consequences we all share no matter where we live and what we earn. At TEDxGPGP, he offers a few powerful ideas to help us reclaim our throwaway planet.",
    "duration": "0:12:49",
    "publishdate": "1/19/2011"
  },
  {
    "rank": 250,
    "id": "1531",
    "speaker": "Daphne Koller",
    "name": "Daphne Koller: What we're learning from online education",
    "shortsummary": "Daphne Koller is enticing top universities to put their most intriguing courses online for free -- not just as a service, but as a way to research how people learn. With Coursera (cofounded by Andrew Ng), each keystroke, quiz, peer-to-peer discussion and self-graded assignment builds an unprecedented pool of data on how knowledge is processed. ",
    "duration": "0:20:40",
    "publishdate": "8/1/2012 15:02:00"
  },
  {
    "rank": 251,
    "id": "502",
    "speaker": "Ueli Gegenschatz",
    "name": "Fulfilling the dream of flight in a high-tech wingsuit",
    "shortsummary": "Wingsuit jumping is the leading edge of extreme sports -- an exhilarating feat of almost unbelievable daring, where skydivers soar through canyons at over 100MPH. Ueli Gegenschatz talks about how (and why) he does it, and shows jawdropping film.",
    "duration": "0:12:13",
    "publishdate": "4/1/2009"
  },
  {
    "rank": 252,
    "id": "1650",
    "speaker": "Colin Stokes",
    "name": "Colin Stokes: How movies teach manhood",
    "shortsummary": "When Colin Stokes' 3-year-old son caught a glimpse of <em>Star Wars</em>, he was instantly obsessed. But what messages did he absorb from the sci-fi classic? Stokes asks for more movies that send positive messages to boys: that cooperation is heroic, and respecting women is as manly as defeating the villain. (<em>Filmed at TEDxBeaconStreet.</em>)",
    "duration": "0:12:56",
    "publishdate": "1/18/2013 16:01:00"
  },
  {
    "rank": 253,
    "id": "1609",
    "speaker": "Leah Buechley",
    "name": "Leah Buechley: How to \"sketch\" with electronics",
    "shortsummary": "Designing electronics is generally cumbersome and expensive -- or was, until Leah Buechley and her team at MIT developed tools to treat electronics just like paper and pen. In this talk from TEDYouth 2011, Buechley shows some of her charming designs, like a paper piano you can sketch and then play.",
    "duration": "0:06:33",
    "publishdate": "11/15/2012 16:00:00"
  },
  {
    "rank": 254,
    "id": "1355",
    "speaker": "Drew Dudley",
    "name": "Drew Dudley: Everyday leadership",
    "shortsummary": "We have all changed someone's life -- usually without even realizing it. In this funny talk from TEDxToronto, Drew Dudley calls on all of us to celebrate leadership as the everyday act of improving each other's lives.",
    "duration": "",
    "publishdate": "2/11/2012 15:03:00"
  },
  {
    "rank": 255,
    "id": "1538",
    "speaker": "Pam  Warhurst",
    "name": "Pam Warhurst: How we can eat our landscapes",
    "shortsummary": "What should a community do with its unused land? Plant food, of course. With energy and humor, Pam Warhurst tells at the TEDSalon the story of how she and a growing team of volunteers came together to turn plots of unused land into communal vegetable gardens, and to change the narrative of food in their community.",
    "duration": "0:13:21",
    "publishdate": "8/9/2012 15:04:00"
  },
  {
    "rank": 256,
    "id": "1241",
    "speaker": "Alison Gopnik",
    "name": "Alison Gopnik: What do babies think?",
    "shortsummary": "Babies and young children are like the R&D division of the human species, says psychologist Alison Gopnik. Her research explores the sophisticated intelligence-gathering and decision-making that babies are really doing when they play.",
    "duration": "0:18:29",
    "publishdate": "10/10/2011"
  },
  {
    "rank": 257,
    "id": "1091",
    "speaker": "Eli Pariser",
    "name": "Eli Pariser: Beware online \"filter bubbles\"",
    "shortsummary": "As web companies strive to tailor their services (including news and search results) to our personal tastes, there's a dangerous unintended consequence: We get trapped in a \"filter bubble\" and don't get exposed to information that could challenge or broaden our worldview. Eli Pariser argues powerfully that this will ultimately prove to be bad for us and bad for democracy. ",
    "duration": "0:09:04",
    "publishdate": "5/2/2011"
  },
  {
    "rank": 258,
    "id": "1824",
    "speaker": "Andras Forgacs",
    "name": "Andras Forgacs: Leather and meat without killing animals",
    "shortsummary": "By 2050, it will take 100 billion land animals to provide the world's population with meat, dairy, eggs and leather goods. Maintaining this herd will take a huge, potentially unsustainable toll on the planet. What if there were a different way? In this eye-opening talk, tissue engineering advocate Andras Forgacs argues that biofabricating meat and leather is a civilized way to move past killing animals for hamburgers and handbags.",
    "duration": "0:09:02",
    "publishdate": "9/19/2013 15:01:00"
  },
  {
    "rank": 259,
    "id": "1732",
    "speaker": "Geoffrey Canada",
    "name": "Geoffrey Canada: Our failing schools. Enough is enough!",
    "shortsummary": "Why, why, why does our education system look so similar to the way it did 50 years ago? Millions of students were failing then, as they are now -- and it's because we're clinging to a business model that clearly doesn't work. Education advocate Geoffrey Canada dares the system to look at the data, think about the customers and make systematic shifts in order to help greater numbers of kids excel. ",
    "duration": "0:17:07",
    "publishdate": "5/8/2013 15:08:00"
  },
  {
    "rank": 260,
    "id": "1738",
    "speaker": "Ken Robinson",
    "name": "Ken Robinson: How to escape education's death valley",
    "shortsummary": "Sir Ken Robinson outlines 3 principles crucial for the human mind to flourish -- and how current education culture works against them. In a funny, stirring talk he tells us how to get out of the educational \"death valley\" we now face, and how to nurture our youngest generations with a climate of possibility. ",
    "duration": "0:19:11",
    "publishdate": "5/10/2013 15:08:00"
  },
  {
    "rank": 261,
    "id": "1191",
    "speaker": "Nadia Al-Sakkaf",
    "name": "Nadia Al-Sakkaf: See Yemen through my eyes",
    "shortsummary": "As political turmoil in Yemen continues, the editor of the Yemen Times, Nadia Al-Sakkaf, talks at TEDGlobal with host Pat Mitchell. Al-Sakkaf's independent, English-language paper is vital for sharing news -- and for sharing a new vision of Yemen and of that country's women as equal partners in work and change.",
    "duration": "0:13:38",
    "publishdate": "7/18/2011"
  },
  {
    "rank": 262,
    "id": "1207",
    "speaker": "Alex Steffen",
    "name": "Alex Steffen: The shareable future of cities",
    "shortsummary": "How can cities help save the future? Alex Steffen shows some cool neighborhood-based green projects that expand our access to things we want and need -- while reducing the time we spend in cars.",
    "duration": "0:10:13",
    "publishdate": "8/8/2011"
  },
  {
    "rank": 263,
    "id": "594",
    "speaker": "Kary Mullis",
    "name": "Kary Mullis' next-gen cure for killer infections",
    "shortsummary": "Drug-resistant bacteria kills, even in top hospitals. But now tough infections like staph and anthrax may be in for a surprise. Nobel-winning chemist Kary Mullis, who watched a friend die when powerful antibiotics failed, unveils a radical new cure that shows extraordinary promise.",
    "duration": "0:04:35",
    "publishdate": "7/9/2009"
  },
  {
    "rank": 264,
    "id": "966",
    "speaker": "Gary Wolf",
    "name": "Gary Wolf: The quantified self",
    "shortsummary": "At TED@Cannes, Gary Wolf gives a 5-min intro to an intriguing new pastime: using mobile apps and always-on gadgets to track and analyze your body, mood, diet, spending -- just about everything in daily life you can measure -- in gloriously geeky detail.",
    "duration": "0:05:10",
    "publishdate": "9/27/2010"
  },
  {
    "rank": 265,
    "id": "941",
    "speaker": "Dan Cobley",
    "name": "Dan Cobley: What physics taught me about marketing",
    "shortsummary": "Physics and marketing don't seem to have much in common, but Dan Cobley is passionate about both. He brings these unlikely bedfellows together using Newton's second law, Heisenberg's uncertainty principle, the scientific method and the second law of thermodynamics to explain the fundamental theories of branding.",
    "duration": "0:07:38",
    "publishdate": "8/27/2010"
  },
  {
    "rank": 266,
    "id": "1384",
    "speaker": "Larry Smith",
    "name": "Larry Smith: Why you will fail to have a great career",
    "shortsummary": "In this funny and blunt talk from TEDxUW, Larry Smith pulls no punches when he calls out the absurd excuses people invent when they fail to pursue their passions.",
    "duration": "",
    "publishdate": "3/11/2012 13:58:00"
  },
  {
    "rank": 267,
    "id": "129",
    "speaker": "Blaise Aguera y Arcas",
    "name": "Jaw-dropping Photosynth demo",
    "shortsummary": "Blaise Aguera y Arcas leads a dazzling demo of Photosynth, software that could transform the way we look at digital images. Using still photos culled from the Web, Photosynth builds breathtaking dreamscapes and lets us navigate them. ",
    "duration": "0:07:30",
    "publishdate": "5/27/2007"
  },
  {
    "rank": 268,
    "id": "1199",
    "speaker": "Josette Sheeran",
    "name": "Josette Sheeran: Ending hunger now",
    "shortsummary": "Josette Sheeran, the head of the UN's World Food Program, talks about why, in a world with enough food for everyone, people still go hungry, still die of starvation, still use food as a weapon of war. Her vision: \"Food is one issue that cannot be solved person by person. We have to stand together.\"",
    "duration": "0:19:10",
    "publishdate": "7/28/2011"
  },
  {
    "rank": 269,
    "id": "408",
    "speaker": "Gregory Petsko",
    "name": "The coming neurological epidemic",
    "shortsummary": "Biochemist Gregory Petsko makes a convincing argument that, in the next 50 years, we'll see an epidemic of neurological diseases, such as Alzheimer's, as the world population ages. His solution: more research into the brain and its functions. ",
    "duration": "0:03:47",
    "publishdate": "11/30/2008"
  },
  {
    "rank": 270,
    "id": "1599",
    "speaker": "Sanjay Pradhan",
    "name": "Sanjay Pradhan: How open data is changing international aid",
    "shortsummary": "How do we make sure that development and aid money actually goes to the people who most need it? Sanjay Pradhan of the World Bank Institute lays out three guidelines to help relief efforts make the most impact -- while curbing corruption. One key: connecting the players who are working to change broken systems with the data they need.   ",
    "duration": "0:14:26",
    "publishdate": "10/30/2012 14:55:00"
  },
  {
    "rank": 271,
    "id": "1522",
    "speaker": "Noah Wilson-Rich",
    "name": "Noah Wilson-Rich: Every city needs healthy honey bees",
    "shortsummary": "Bees have been rapidly and mysteriously disappearing fromÂ rural areas,Â with grave implications for agriculture. But beesÂ seem toÂ flourish in urban environments -- and cities need their help, too. Noah Wilson-Rich suggests thatÂ urban beekeeping mightÂ play a role inÂ revitalizing both a cityÂ and a species. <em>(Filmed at <a href=http://www.ted.com/tedx/events/4446>TEDxBoston</a>.)</em>",
    "duration": "0:12:43",
    "publishdate": "7/28/2012 14:01:00"
  },
  {
    "rank": 272,
    "id": "411",
    "speaker": "Larry Burns",
    "name": "Reinventing the car",
    "shortsummary": "General Motors veep Larry Burns previews cool next-gen car design: sleek, customizable (and computer-enhanced) vehicles that run clean on hydrogen -- and pump energy back into the electrical grid when they're idle.",
    "duration": "0:09:12",
    "publishdate": "12/4/2008"
  },
  {
    "rank": 273,
    "id": "1619",
    "speaker": "Sleepy Man Banjo Boys ",
    "name": "Teenaged boy wonders play bluegrass",
    "shortsummary": "Brothers Jonny, Robbie and Tommy Mizzone are The Sleepy Man Banjo Boys, a trio of virtuoso bluegrass musicians who play with dazzling vivacity. Did we mention they're all under 16?",
    "duration": "0:05:02",
    "publishdate": "11/21/2012 16:09:00"
  },
  {
    "rank": 274,
    "id": "501",
    "speaker": "Jacek Utko",
    "name": "Can design save the newspaper?",
    "shortsummary": "Jacek Utko is an extraordinary Polish newspaper designer whose redesigns for papers in Eastern Europe not only win awards, but increase circulation by up to 100%. Can good design save the newspaper? It just might.",
    "duration": "0:06:05",
    "publishdate": "3/31/2009"
  },
  {
    "rank": 275,
    "id": "1739",
    "speaker": "Bill Gates",
    "name": "Bill Gates: Teachers need real feedback",
    "shortsummary": "Until recently, many teachers only got one word of feedback a year: \"satisfactory.\" And with no feedback, no coaching, there's just no way to improve. Bill Gates suggests that even great teachers can get better with smart feedback -- and lays out a program from his foundation to bring it to every classroom.",
    "duration": "0:10:24",
    "publishdate": "5/8/2013 15:01:00"
  },
  {
    "rank": 276,
    "id": "1720",
    "speaker": "Erik Brynjolfsson",
    "name": "Erik Brynjolfsson: The key to growth? Race with the machines",
    "shortsummary": "As machines take on more jobs, many find themselves out of work or with raises indefinitely postponed. Is this the end of growth? No, says Erik Brynjolfsson -- it's simply the growing pains of a radically reorganized economy. A riveting case for why big innovations are ahead of us â€¦ if we think of computers as our teammates. Be sure to watch the opposing viewpoint from Robert Gordon.",
    "duration": "0:11:56",
    "publishdate": "4/23/2013 15:03:00"
  },
  {
    "rank": 277,
    "id": "837",
    "speaker": "Tom Wujec",
    "name": "Tom Wujec: Build a tower, build a team",
    "shortsummary": "Tom Wujec presents some surprisingly deep research into the \"marshmallow problem\" -- a simple team-building exercise that involves dry spaghetti, one yard of tape and a marshmallow. Who can build the tallest tower with these ingredients? And why does a surprising group always beat the average?",
    "duration": "0:06:51",
    "publishdate": "4/22/2010"
  },
  {
    "rank": 278,
    "id": "1017",
    "speaker": "William Ury",
    "name": "William Ury: The walk from \"no\" to \"yes\"",
    "shortsummary": "William Ury, author of \"Getting to Yes,\" offers an elegant, simple (but not easy) way to create agreement in even the most difficult situations -- from family conflict to, perhaps, the Middle East.",
    "duration": "0:18:45",
    "publishdate": "11/30/2010"
  },
  {
    "rank": 279,
    "id": "572",
    "speaker": "Richard St. John",
    "name": "Richard St. John: \"Success is a continuous journey\"",
    "shortsummary": " In his typically candid style, Richard St. John reminds us that success is not a one-way street, but a constant journey. He uses the story of his business' rise and fall to illustrate a valuable lesson -- when we stop trying, we fail.",
    "duration": "0:03:57",
    "publishdate": "6/12/2009"
  },
  {
    "rank": 280,
    "id": "1016",
    "speaker": "Birke Baehr",
    "name": "Birke Baehr: What's wrong with our food system",
    "shortsummary": "11-year-old Birke Baehr presents his take on a major source of our food -- far-away and less-than-picturesque industrial farms. Keeping farms out of sight promotes a rosy, unreal picture of big-box agriculture, he argues, as he outlines the case to green and localize food production.",
    "duration": "0:05:14",
    "publishdate": "11/29/2010"
  },
  {
    "rank": 281,
    "id": "1734",
    "speaker": "Pearl Arredondo",
    "name": "Pearl Arredondo: My story, from gangland daughter to star teacher",
    "shortsummary": "Pearl Arredondo grew up in East Los Angeles, the daughter of a high-ranking gang member who was in and out of jail. Many teachers wrote her off as having a problem with authority. Now a teacher herself, she's creating a different kind of school and telling students her story so that they know it's okay if sometimes homework isn't the first thing on their minds.",
    "duration": "0:08:03",
    "publishdate": "5/8/2013 15:06:00"
  },
  {
    "rank": 282,
    "id": "1785",
    "speaker": "Michael Green",
    "name": "Michael Green: Why we should build wooden skyscrapers",
    "shortsummary": "Building a skyscraper? Forget about steel and concrete, says architect Michael Green, and build it out of â€¦ wood. As he details in this intriguing talk, it's not only possible to build safe wooden structures up to 30 stories tall (and, he hopes, higher), it's necessary.",
    "duration": "0:12:22",
    "publishdate": "7/9/2013 15:01:00"
  },
  {
    "rank": 283,
    "id": "974",
    "speaker": "Hans Rosling",
    "name": "Hans Rosling: The good news of the decade?",
    "shortsummary": "Hans Rosling reframes 10 years of UN data with his spectacular visuals, lighting up an astonishing -- mostly unreported -- piece of front-page-worthy good news: We're winning the war against child mortality. Along the way, he debunks one flawed approach to stats that blots out such vital stories.",
    "duration": "0:15:34",
    "publishdate": "10/7/2010"
  },
  {
    "rank": 284,
    "id": "1411",
    "speaker": "Jack Choi",
    "name": "Jack Choi: On the virtual dissection table",
    "shortsummary": "Onstage at TED2012, Jack Choi demonstrates a powerful tool for training medical students: a stretcher-sized multi-touch screen of the human body that lets you explore, dissect and understand the body's parts and systems.",
    "duration": "0:06:36",
    "publishdate": "4/5/2012 15:14:00"
  },
  {
    "rank": 285,
    "id": "1806",
    "speaker": "Jinsop Lee",
    "name": "Jinsop Lee: Design for all 5 senses",
    "shortsummary": "Good design looks great, yes -- but why shouldn't it also feel great, smell great and sound great? Designer Jinsop Lee (a TED Talent Search winner) shares his theory of 5-sense design, with a handy graph and a few examples. His hope: to inspire you to notice great multisensory experiences.",
    "duration": "0:09:03",
    "publishdate": "8/6/2013 15:08:00"
  },
  {
    "rank": 286,
    "id": "211",
    "speaker": "Chris Anderson (TED)",
    "name": "A vision for TED",
    "shortsummary": "When Curator Chris Anderson gave this talk in 2002, TED's future was hanging in the balance. Here, he attempts to persuade TEDsters that his vision for turning his for-profit conference into a nonprofit event would work. It did.",
    "duration": "0:12:55",
    "publishdate": "1/30/2008"
  },
  {
    "rank": 287,
    "id": "601",
    "speaker": "Daniel Kraft",
    "name": "Daniel Kraft invents a better way to harvest bone marrow",
    "shortsummary": "Daniel Kraft demos his Marrow Miner -- a new device that quickly harvests life-saving bone marrow with minimal pain to the donor. He emphasizes that the adult stem cells found in bone marrow can be used to treat many terminal conditions, from Parkinson's to heart disease. ",
    "duration": "0:04:14",
    "publishdate": "7/15/2009"
  },
  {
    "rank": 288,
    "id": "1670",
    "speaker": "Keith Chen",
    "name": "Keith Chen: Could your language affect your ability to save money?",
    "shortsummary": "What can economists learn from linguists? Behavioral economist Keith Chen introduces a fascinating pattern from his research: that languages without a concept for the future -- \"It rain tomorrow,\" instead of \"It will rain tomorrow\" -- correlate strongly with high savings rates. <a href=\"http://blog.ted.com/2013/02/19/saving-for-a-rainy-day-keith-chen-on-language-that-forecasts-weather-and-behavior/\" target=\"_blank\">Read more about Chen's explorations &raquo</a>",
    "duration": "0:12:13",
    "publishdate": "2/19/2013 16:02:00"
  },
  {
    "rank": 289,
    "id": "1394",
    "speaker": "T. Boone Pickens",
    "name": "T. Boone Pickens: Let's transform energy -- with natural gas",
    "shortsummary": "The US consumes 25% of the world's oil -- but as energy tycoon T. Boone Pickens points out onstage, the country has no energy policy to prepare for the inevitable. Is alternative energy our bridge to an oil-free future? After losing $150 million investing in wind energy, Pickens suggests it isn't, not yet. What might get us there? Natural gas. After the talk, watch for a lively Q&A with TED Curator Chris Anderson.",
    "duration": "0:19:42",
    "publishdate": "3/19/2012 15:43:00"
  },
  {
    "rank": 290,
    "id": "268",
    "speaker": "Seyi Oyesola",
    "name": "Rich hospital, poor hospital",
    "shortsummary": "Dr. Seyi Oyesola takes a searing look at health care in underdeveloped countries. His photo tour of a Nigerian teaching hospital -- all low-tech hacks and donated supplies -- drives home the challenge of doing basic health care there.",
    "duration": "0:14:23",
    "publishdate": "5/27/2008"
  },
  {
    "rank": 291,
    "id": "1276",
    "speaker": "Robin Ince",
    "name": "Robin Ince: Science versus wonder?",
    "shortsummary": "Does science ruin the magic of life? In this grumpy but charming monologue, Robin Ince makes the argument against. The more we learn about the astonishing behavior of the universe -- the more we stand in awe.",
    "duration": "0:08:38",
    "publishdate": "11/18/2011"
  },
  {
    "rank": 292,
    "id": "115",
    "speaker": "Thomas Dolby, Rachelle Garniez",
    "name": "\"La Vie en Rose\"",
    "shortsummary": "Featuring the vocals and mischievous bell-playing of accordionist and singer Rachelle Garniez, the TED House Band -- led by Thomas Dolby on keyboard -- delivers this delightful rendition of the Edith Piaf standard \"La Vie en Rose.\"",
    "duration": "0:03:21",
    "publishdate": "4/16/2007"
  },
  {
    "rank": 293,
    "id": "47",
    "speaker": "David Deutsch",
    "name": "What is our place in the cosmos?",
    "shortsummary": "Legendary scientist David Deutsch puts theoretical physics on the back burner to discuss a more urgent matter: the survival of our species. The first step toward solving global warming, he says, is to admit that we have a problem.",
    "duration": "0:19:00",
    "publishdate": "9/12/2006"
  },
  {
    "rank": 294,
    "id": "1206",
    "speaker": "Eve Ensler",
    "name": "Eve Ensler: Suddenly, my body",
    "shortsummary": "Poet, writer, activist Eve Ensler lived in her head. In this powerful talk from TEDWomen, she talks about her lifelong disconnection from her body -- and how two shocking events helped her to connect with the reality, the physicality of being human.",
    "duration": "0:12:58",
    "publishdate": "8/5/2011"
  },
  {
    "rank": 295,
    "id": "1346",
    "speaker": "Danny Hillis",
    "name": "Danny Hillis: Back to the future (of 1994)",
    "shortsummary": "From deep in the TED archive, Danny Hillis outlines an intriguing theory of how and why technological change seems to be accelerating, by linking it to the very evolution of life itself.  The presentation techniques he uses may look dated, but the ideas are as relevant as ever.",
    "duration": "0:19:10",
    "publishdate": "2/3/2012 16:06:00"
  },
  {
    "rank": 296,
    "id": "366",
    "speaker": "Mihaly Csikszentmihalyi",
    "name": "Creativity, fulfillment and flow",
    "shortsummary": "Mihaly Czikszentmihalyi asks, \"What makes a life worth living?\" Noting that money cannot make us happy, he looks to those who find pleasure and lasting satisfaction in activities that bring about a state of \"flow.\"",
    "duration": "0:18:55",
    "publishdate": "10/23/2008"
  },
  {
    "rank": 297,
    "id": "1633",
    "speaker": "Molly Crockett",
    "name": "Molly Crockett: Beware neuro-bunk",
    "shortsummary": "Brains are ubiquitous in modern marketing: Headlines proclaim cheese sandwiches help with decision-making, while a \"neuro\" drink claims to reduce stress. There's just one problem, says neuroscientist Molly Crockett: The benefits of these \"neuro-enhancements\" are not proven scientifically. In this to-the-point talk, Crockett explains the limits of interpreting neuroscientific data, and why we should all be aware of them.",
    "duration": "0:11:18",
    "publishdate": "12/18/2012 16:12:00"
  },
  {
    "rank": 298,
    "id": "1235",
    "speaker": "Danielle de Niese",
    "name": "Danielle de Niese: A flirtatious aria",
    "shortsummary": "Can opera be ever-so-slightly sexy? The glorious soprano Danielle de Niese shows how, singing the flirty \"Meine Lippen, sie kÃ¼ssen so heiss.\" Which, translated, means, as you might guess: \"I kiss so hot.\" From Giuditta by Frans LehÃ¡r; accompanist: Ingrid Surgenor.",
    "duration": "0:05:55",
    "publishdate": "9/30/2011"
  },
  {
    "rank": 299,
    "id": "1087",
    "speaker": "Bill Gates",
    "name": "Bill Gates: How state budgets are breaking US schools",
    "shortsummary": "America's school systems are funded by the 50 states. In this fiery talk, Bill Gates says that state budgets are riddled with accounting tricks that disguise the true cost of health care and pensions and weighted with worsening deficits -- with the financing of education at the losing end.",
    "duration": "0:10:16",
    "publishdate": "3/4/2011"
  },
  {
    "rank": 300,
    "id": "1073",
    "speaker": "Geert Chatrou",
    "name": "A whistleblower you haven't heard",
    "shortsummary": "At TEDxRotterdam, world champion whistler Geert Chatrou performs the whimsical \"Eleonora\" by A. Honhoff, and his own \"FÃªte de la Belle.\" In a fascinating interlude, he talks about what brought him to the craft.",
    "duration": "0:11:56",
    "publishdate": "2/11/2011"
  },
  {
    "rank": 301,
    "id": "1232",
    "speaker": "Geoff Mulgan",
    "name": "Geoff Mulgan: A short intro to the Studio School",
    "shortsummary": "Some kids learn by listening; others learn by doing. Geoff Mulgan gives a short introduction to the Studio School, a new kind of school in the UK where small teams of kids learn by working on projects that are, as Mulgan puts it, \"for real.\" ",
    "duration": "0:06:16",
    "publishdate": "9/27/2011"
  },
  {
    "rank": 302,
    "id": "1429",
    "speaker": "Eduardo Paes",
    "name": "Eduardo Paes: The 4 commandments of cities",
    "shortsummary": "Eduardo Paes is the mayor of Rio de Janeiro, a sprawling, complicated, beautiful city of 6.5 million. He shares four big ideas about leading Rio -- and all cities -- into the future, including bold (and do-able) infrastructure upgrades and how to make a city \"smarter.\"",
    "duration": "0:12:21",
    "publishdate": "4/26/2012 15:11:00"
  },
  {
    "rank": 303,
    "id": "819",
    "speaker": "Dean Kamen",
    "name": "Dean Kamen: The emotion behind invention",
    "shortsummary": "Soldiers who've lost limbs in service face a daily struggle unimaginable to most of us. At TEDMED, Dean Kamen talks about the profound people and stories that motivated his work to give parts of their lives back with his design for a remarkable prosthetic arm.",
    "duration": "0:19:32",
    "publishdate": "4/6/2010"
  },
  null,
  {
    "rank": 305,
    "id": "79",
    "speaker": "Iqbal Quadir",
    "name": "The power of the mobile phone to end poverty",
    "shortsummary": "Iqbal Quadir tells how his experiences as a kid in poor Bangladesh, and later as a banker in New York, led him to start a mobile phone operator connecting 80 million rural Bangladeshi -- and to become a champion of bottom-up development.",
    "duration": "0:15:52",
    "publishdate": "10/10/2006"
  },
  {
    "rank": 306,
    "id": "81",
    "speaker": "Nora York",
    "name": "\"What I Want\"",
    "shortsummary": "Nora York gives a stunning performance of her song \"What I Want,\" with Jamie Lawrence (keyboards), Steve Tarshis (guitar) and Arthur Kell (bass). ",
    "duration": "0:04:36",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 307,
    "id": "1403",
    "speaker": "Leymah Gbowee",
    "name": "Leymah Gbowee: Unlock the intelligence, passion, greatness of girls",
    "shortsummary": "Nobel Peace Prize winner Leymah Gbowee has two powerful stories to tell -- of her own life's transformation, and of the untapped potential of girls around the world. Can we transform the world by unlocking the greatness of girls?",
    "duration": "0:14:39",
    "publishdate": "3/28/2012 15:23:00"
  },
  {
    "rank": 308,
    "id": "1731",
    "speaker": "Ramsey Musallam",
    "name": "Ramsey Musallam: 3 rules to spark learning",
    "shortsummary": "It took a life-threatening condition to jolt chemistry teacher Ramsey Musallam out of ten years of \"pseudo-teaching\" to understand the true role of the educator: to cultivate curiosity. In a fun and personal talk, Musallam gives 3 rules to spark imagination and learning, and get students excited about how the world works.",
    "duration": "0:06:29",
    "publishdate": "5/8/2013 15:03:00"
  },
  {
    "rank": 309,
    "id": "760",
    "speaker": "George Whitesides",
    "name": "George Whitesides: A lab the size of a postage stamp",
    "shortsummary": "Traditional lab tests for disease diagnosis can be too expensive and cumbersome for the regions most in need. George Whitesides' ingenious answer, at TEDxBoston, is a foolproof tool that can be manufactured at virtually zero cost.",
    "duration": "0:16:16",
    "publishdate": "2/3/2010"
  },
  {
    "rank": 310,
    "id": "968",
    "speaker": "Inge Missmahl",
    "name": "Inge Missmahl brings peace to the minds of Afghanistan",
    "shortsummary": "When Jungian analyst Inge Missmahl visited Afghanistan, she saw the inner wounds of war -- widespread despair, trauma and depression. And yet, in this county of 30 million people, there were only two dozen psychiatrists. Missmahl talks about her work helping to build the country's system of psychosocial counseling, promoting both individual and, perhaps, national healing.",
    "duration": "0:10:41",
    "publishdate": "9/29/2010"
  },
  {
    "rank": 311,
    "id": "1441",
    "speaker": "JP Rangaswami",
    "name": "JP Rangaswami: Information is food",
    "shortsummary": "How do we consume data? At TED@SXSWi, technologist JP Rangaswami muses on our relationship to information, and offers a surprising and sharp insight: we treat it like food.",
    "duration": "0:08:08",
    "publishdate": "5/8/2012 16:16:00"
  },
  {
    "rank": 312,
    "id": "1077",
    "speaker": "Lisa Gansky",
    "name": "Lisa Gansky: The future of business is the \"mesh\"",
    "shortsummary": "At TED@MotorCity, Lisa Gansky, author of \"The Mesh,\" talks about a future of business that's about sharing all kinds of stuff, either via smart and tech-enabled rental or, more boldly, peer-to-peer. Examples across industries -- from music to cars -- show how close we are to this meshy future.",
    "duration": "0:14:47",
    "publishdate": "2/17/2011"
  },
  {
    "rank": 313,
    "id": "1214",
    "speaker": "Julia Bacha",
    "name": "Julia Bacha: Pay attention to nonviolence",
    "shortsummary": "In 2003, the Palestinian village of Budrus mounted a 10-month-long nonviolent protest to stop a barrier being built across their olive groves. Did you hear about it? Didn't think so. Brazilian filmmaker Julia Bacha asks why we only pay attention to violence in the Israel-Palestine conflict -- and not to the nonviolent leaders who may one day bring peace.",
    "duration": "0:10:51",
    "publishdate": "8/31/2011"
  },
  {
    "rank": 314,
    "id": "1078",
    "speaker": "Madeleine  Albright",
    "name": "Madeleine Albright: On being a woman and a diplomat",
    "shortsummary": "Former US Secretary of State Madeleine Albright talks bluntly about politics and diplomacy, making the case that women's issues deserve a place at the center of foreign policy. Far from being a \"soft\" issue, she says, women's issues are often the very hardest ones, dealing directly with life and death. A frank and funny Q&A with Pat Mitchell from the Paley Center.",
    "duration": "0:12:59",
    "publishdate": "2/18/2011"
  },
  {
    "rank": 315,
    "id": "845",
    "speaker": "George Whitesides",
    "name": "George Whitesides: Toward a science of simplicity",
    "shortsummary": "Simplicity: We know it when we see it -- but what is it, exactly? In this funny, philosophical talk, George Whitesides chisels out an answer.",
    "duration": "0:18:35",
    "publishdate": "4/28/2010"
  },
  {
    "rank": 316,
    "id": "1374",
    "speaker": "Paul Gilding",
    "name": "Paul Gilding: The Earth is full",
    "shortsummary": "Have we used up all our resources? Have we filled up all the livable space on Earth? Paul Gilding suggests we have, and the possibility of devastating consequences, in a talk that's equal parts terrifying and, oddly, hopeful.",
    "duration": "0:16:46",
    "publishdate": "2/29/2012 17:30:00"
  },
  {
    "rank": 317,
    "id": "983",
    "speaker": "Jessica Jackley",
    "name": "Jessica Jackley: Poverty, money -- and love",
    "shortsummary": "What do you think of people in poverty? Maybe what Jessica Jackley once did: \"they\" need \"our\" help, in the form of a few coins in a jar. The co-founder of Kiva.org talks about how her attitude changed -- and how her work with microloans has brought new power to people who live on a few dollars a day.",
    "duration": "0:18:33",
    "publishdate": "10/18/2010"
  },
  {
    "rank": 318,
    "id": "1032",
    "speaker": "Kiran Bedi",
    "name": "Kiran Bedi: A police chief with a difference",
    "shortsummary": "Kiran Bedi has a surprising resume. Before becoming Director General of the Indian Police Service, she managed one of the country's toughest prisons -- and used a new focus on prevention and education to turn it into a center of learning and meditation. She shares her thoughts on visionary leadership at TEDWomen.",
    "duration": "0:08:47",
    "publishdate": "12/13/2010"
  },
  {
    "rank": 319,
    "id": "920",
    "speaker": "Dimitar Sasselov",
    "name": "Dimitar Sasselov: How we found hundreds of potential Earth-like planets",
    "shortsummary": "Astronomer Dimitar Sasselov and his colleagues search for Earth-like planets that may, someday, help us answer centuries-old questions about the origin and existence of biological life elsewhere (and on Earth). Preliminary results show that they have found 706 \"candidates\" -- some of which further research may prove to be planets with Earth-like geochemical characteristics.",
    "duration": "0:18:30",
    "publishdate": "7/21/2010"
  },
  {
    "rank": 320,
    "id": "1460",
    "speaker": "David MacKay",
    "name": "David MacKay: A reality check on renewables",
    "shortsummary": "How much land mass would renewables need to power a nation like the UK? An entire country's worth. In this pragmatic talk from TEDxWarwick, David MacKay tours the basic mathematics that show worrying limitations on our sustainable energy options and explains why we should pursue them anyway.",
    "duration": "",
    "publishdate": "5/26/2012 14:31:00"
  },
  {
    "rank": 321,
    "id": "700",
    "speaker": "Gordon Brown",
    "name": "Gordon Brown on global ethic vs. national interest",
    "shortsummary": "Can the interests of an individual nation be reconciled with humanity's greater good? Can a patriotic, nationally elected politician really give people in other countries equal consideration? Following his TEDTalk calling for a global ethic, UK Prime Minister Gordon Brown fields questions from TED Curator Chris Anderson.",
    "duration": "0:17:10",
    "publishdate": "12/1/2009"
  },
  {
    "rank": 322,
    "id": "525",
    "speaker": "Alex Tabarrok",
    "name": "Alex Tabarrok on how ideas trump crises",
    "shortsummary": "The \"dismal science\" truly shines in this optimistic talk, as economist Alex Tabarrok argues free trade and globalization are shaping our once-divided world into a community of idea-sharing more healthy, happy and prosperous than anyone's predictions.",
    "duration": "0:14:33",
    "publishdate": "4/27/2009"
  },
  {
    "rank": 323,
    "id": "197",
    "speaker": "Philippe Starck",
    "name": "Why design?",
    "shortsummary": "Designer Philippe Starck -- with no pretty slides to show -- spends 18 minutes reaching for the very roots of the question \"Why design?\" Listen carefully for one perfect mantra for all of us, genius or not.",
    "duration": "0:17:06",
    "publishdate": "12/4/2007"
  },
  {
    "rank": 324,
    "id": "535",
    "speaker": "Al Gore",
    "name": "Al Gore warns on latest climate trends",
    "shortsummary": "At TED2009, Al Gore presents updated slides from around the globe to make the case that worrying climate trends are even worse than scientists predicted, and to make clear his stance on \"clean coal.\"",
    "duration": "0:07:44",
    "publishdate": "5/7/2009"
  },
  {
    "rank": 325,
    "id": "1789",
    "speaker": "Pico Iyer",
    "name": "Pico Iyer: Where is home?",
    "shortsummary": "More and more people worldwide are living in countries not considered their own. Writer Pico Iyer  -- who himself has three or four â€œoriginsâ€ -- meditates on the meaning of home, the joy of traveling and the serenity of standing still. ",
    "duration": "0:14:01",
    "publishdate": "7/17/2013 14:59:00"
  },
  {
    "rank": 326,
    "id": "1629",
    "speaker": "Maz Jobrani",
    "name": "Maz Jobrani: A Saudi, an Indian and an Iranian walk into a Qatari bar ...",
    "shortsummary": "Iranian-American comedian Maz Jobrani takes to the TEDxSummit stage in Doha, Qatar to take on serious issues in the Middle East -- like how many kisses to give when saying \"Hi,\" and what not to say on an American airplane.",
    "duration": "0:07:11",
    "publishdate": "12/12/2012 16:11:00"
  },
  {
    "rank": 327,
    "id": "1472",
    "speaker": "Ami Klin",
    "name": "Ami Klin: A new way to diagnose autism",
    "shortsummary": "Early diagnosis of autism spectrum disorder can improve the lives of everyone affected, but the complex network of causes make it incredibly difficult to predict. At TEDxPeachtree, Ami Klin describes a new early detection method that uses eye-tracking technologies to gauge babies' social engagement skills and reliably measure their risk of developing autism.\n<em>(Filmed at <a href=http://www.ted.com/tedx/events/1796>TEDxPeachTree</a>.)</em>\n",
    "duration": "0:19:44",
    "publishdate": "6/9/2012 14:02:00"
  },
  {
    "rank": 328,
    "id": "946",
    "speaker": "His Holiness the Karmapa",
    "name": "His Holiness the Karmapa: The technology of the heart",
    "shortsummary": "His Holiness the Karmapa talks about how he was discovered to be the reincarnation of a revered figure in Tibetan Buddhism. In telling his story, he urges us to work on not just technology and design, but the technology and design of the heart. He is translated onstage by Tyler Dewar.",
    "duration": "0:25:23",
    "publishdate": "9/1/2010"
  },
  {
    "rank": 329,
    "id": "1706",
    "speaker": "Dan Ariely",
    "name": "Dan Ariely: What makes us feel good about our work?",
    "shortsummary": "What motivates us to work? Contrary to conventional wisdom, it isn't just money. But it's not exactly joy either. It seems that most of us thrive by making constant progress and feeling a sense of purpose. Behavioral economist Dan Ariely presents two eye-opening experiments that reveal our unexpected and nuanced attitudes toward meaning in our work. <em>(Filmed at TEDxRiodelaPlata.)</em> ",
    "duration": "0:20:26",
    "publishdate": "4/10/2013 14:59:00"
  },
  {
    "rank": 330,
    "id": "329",
    "speaker": "John Q. Walker",
    "name": "Re-creating great performances",
    "shortsummary": "Imagine hearing great, departed pianists play again today, just as they would in person. John Q. Walker demonstrates how recordings can be analyzed for precise keystrokes and pedal motions, then played back on computer-controlled grand pianos.",
    "duration": "0:13:41",
    "publishdate": "8/26/2008"
  },
  {
    "rank": 331,
    "id": "1749",
    "speaker": "Alastair Parvin",
    "name": "Alastair Parvin: Architecture for the people by the people",
    "shortsummary": "Designer Alastair Parvin presents a simple but provocative idea: what if, instead of architects creating buildings for those who can afford to commission them, regular citizens could design and build their own houses? The concept is at the heart of WikiHouse, an open source construction kit that means just about anyone can build a house, anywhere.",
    "duration": "0:13:11",
    "publishdate": "5/23/2013 15:00:00"
  },
  {
    "rank": 332,
    "id": "802",
    "speaker": "Juliana Machado Ferreira",
    "name": "Juliana Machado Ferreira: The fight to end rare-animal trafficking in Brazil",
    "shortsummary": "Biologist Juliana Machado Ferreira, a TED Senior Fellow, talks about her work helping to save birds and other animals stolen from the wild in Brazil. Once these animals are seized from smugglers, she asks, then what?",
    "duration": "0:05:34",
    "publishdate": "3/23/2010"
  },
  {
    "rank": 333,
    "id": "343",
    "speaker": "David Gallo",
    "name": "The deep oceans: a ribbon of life",
    "shortsummary": "With vibrant video clips captured by submarines, David Gallo takes us to some of Earth's darkest, most violent, toxic and beautiful habitats, the valleys and volcanic ridges of the oceans' depths, where life is bizarre, resilient and shockingly abundant.",
    "duration": "0:13:20",
    "publishdate": "9/11/2008"
  },
  {
    "rank": 334,
    "id": "710",
    "speaker": "Shereen El Feki",
    "name": "Shereen El Feki: Pop culture in the Arab world",
    "shortsummary": "At TEDGlobal University, Shereen El Feki shows how some Arab cultures are borrowing trademarks of Western pop culture -- music videos, comics, even Barbie -- and adding a culturally appropriate twist. The hybridized media shows how two civilizations, rather than dividing, can dovetail.",
    "duration": "0:05:05",
    "publishdate": "12/11/2009"
  },
  {
    "rank": 335,
    "id": "1405",
    "speaker": "Marco Tempest",
    "name": "Marco Tempest: A magical tale (with augmented reality)",
    "shortsummary": "Marco Tempest spins a beautiful story of what magic is, how it entertains us and how it highlights our humanity -- all while working extraordinary illusions with his hands and an augmented reality machine.",
    "duration": "0:05:27",
    "publishdate": "3/30/2012"
  },
  {
    "rank": 336,
    "id": "861",
    "speaker": "Dee Boersma",
    "name": "Dee Boersma: Pay attention to penguins",
    "shortsummary": "Think of penguins as ocean sentinels, says Dee Boersma -- they're on the frontlines of sea change. Sharing stories of penguin life and culture, she suggests that we start listening to what penguins are telling us.",
    "duration": "0:15:09",
    "publishdate": "5/19/2010"
  },
  {
    "rank": 337,
    "id": "1694",
    "speaker": "Hyeonseo Lee",
    "name": "Hyeonseo Lee: My escape from North Korea",
    "shortsummary": "As a child growing up in North Korea, Hyeonseo Lee thought her country was â€œthe best on the planet.â€ It wasn't until the famine of the 90s that she began to wonder. She escaped the country at 14, to begin a life in hiding, as a refugee in China. Hers is a harrowing, personal tale of survival and hope -- and a powerful reminder of those who face constant danger, even when the border is far behind. ",
    "duration": "0:12:15",
    "publishdate": "3/20/2013 14:59:00"
  },
  {
    "rank": 338,
    "id": "1090",
    "speaker": "Salman Khan",
    "name": "Salman Khan: Let's use video to reinvent education",
    "shortsummary": "Salman Khan talks about how and why he created the remarkable Khan Academy, a carefully structured series of educational videos offering complete curricula in math and, now, other subjects. He shows the power of interactive exercises, and calls for teachers to consider flipping the traditional classroom script -- give students video lectures to watch at home, and do \"homework\" in the classroom with the teacher available to help.",
    "duration": "0:20:27",
    "publishdate": "3/9/2011"
  },
  {
    "rank": 339,
    "id": "1290",
    "speaker": "John Bohannon",
    "name": "John Bohannon: Dance vs. powerpoint, a modest proposal",
    "shortsummary": "Use dancers instead of powerpoint. That's science writer John Bohannon's \"modest proposal.\" In this spellbinding choreographed talk from TEDxBrussels he makes his case by example, aided by dancers from Black Label Movement.",
    "duration": "",
    "publishdate": "11/30/2011"
  },
  {
    "rank": 340,
    "id": "1518",
    "speaker": "Malte Spitz",
    "name": "Malte Spitz: Your phone company is watching ",
    "shortsummary": "What kind of data is your cell phone company collecting? Malte Spitz wasn't too worried when he asked his operator in Germany to share information stored about him. Multiple unanswered requests and a lawsuit later, Spitz received 35,830 lines of code -- a detailed, nearly minute-by-minute account of half a year of his life.",
    "duration": "0:09:56",
    "publishdate": "7/24/2012 15:10:00"
  },
  {
    "rank": 341,
    "id": "591",
    "speaker": "Tom Wujec",
    "name": "Tom Wujec on 3 ways the brain creates meaning",
    "shortsummary": "Information designer Tom Wujec talks through three areas of the brain that help us understand words, images, feelings, connections. In this short talk from TEDU, he asks: How can we best engage our brains to help us better understand big ideas?",
    "duration": "0:06:26",
    "publishdate": "7/7/2009"
  },
  {
    "rank": 342,
    "id": "1614",
    "speaker": "Arunachalam Muruganantham",
    "name": "Arunachalam Muruganantham: How I started a sanitary napkin revolution!",
    "shortsummary": "When he realized his wife had to choose between buying family meals and buying her monthly \"supplies,\" Arunachalam Muruganantham vowed to help her solve the problem of the sanitary pad. His research got very very personal -- and led him to a powerful business model. (Filmed in Bangalore as part of the TED Global Talent Search.)",
    "duration": "0:09:21",
    "publishdate": "11/13/2012 16:38:00"
  },
  {
    "rank": 343,
    "id": "1315",
    "speaker": "Sebastian Wernicke",
    "name": "Sebastian Wernicke: 1000 TEDTalks, 6 words",
    "shortsummary": "Sebastian Wernicke thinks every TEDTalk can be summarized in six words. At TEDxZurich, he shows how to do just that -- and less.",
    "duration": "0:07:34",
    "publishdate": "1/6/2012 16:30:00"
  },
  {
    "rank": 344,
    "id": "1144",
    "speaker": "Amit Sood",
    "name": "Amit Sood: Building a museum of museums on the web",
    "shortsummary": "Imagine being able to see artwork in the greatest museums around the world without leaving your chair. Driven by his passion for art, Amit Sood tells the story of how he developed Art Project to let people do just that.",
    "duration": "0:05:35",
    "publishdate": "5/12/2011"
  },
  {
    "rank": 345,
    "id": "1006",
    "speaker": "Eric Berlow",
    "name": "Eric Berlow: How complexity leads to simplicity",
    "shortsummary": "Ecologist Eric Berlow doesn't feel overwhelmed when faced with complex systems. He knows that more information can lead to a better, simpler solution. Illustrating the tips and tricks for breaking down big issues, he distills an overwhelming infographic on U.S. strategy in Afghanistan to a few elementary points.",
    "duration": "0:03:42",
    "publishdate": "11/12/2010"
  },
  {
    "rank": 346,
    "id": "1678",
    "speaker": "Sugata Mitra",
    "name": "Sugata Mitra: Build a School in the Cloud",
    "shortsummary": "Onstage at TED2013, Sugata Mitra makes his bold TED Prize wish: Help me design the School in the Cloud, a learning lab in India, where children can explore and learn from each other -- using resources and mentoring from the cloud. Hear his inspiring vision for <a href=\"http://www.ted.com/pages/sole_challenge#download\">Self Organized Learning Environments (SOLE)</a>, and learn more at <a href=\"http://www.ted.com/pages/prizewinner_sugata_mitra\">tedprize.org</a>.\n",
    "duration": "0:22:31",
    "publishdate": "2/27/2013 22:38:00"
  },
  {
    "rank": 347,
    "id": "1298",
    "speaker": "Stefon Harris",
    "name": "Stefon Harris: There are no mistakes on the bandstand",
    "shortsummary": "What is a mistake? By talking through examples with his improvisational Jazz quartet, Stefon Harris walks us to a profound truth: many actions are perceived as mistakes only because we don't react to them appropriately.",
    "duration": "0:13:11",
    "publishdate": "12/9/2011"
  },
  {
    "rank": 348,
    "id": "681",
    "speaker": "Cameron Sinclair",
    "name": "Cameron Sinclair: The refugees of boom-and-bust",
    "shortsummary": "At TEDGlobal U, Cameron Sinclair shows the unreported cost of real estate megaprojects gone bust: thousands of migrant construction laborers left stranded and penniless. To his fellow architects, he says there is only one ethical response.",
    "duration": "0:03:05",
    "publishdate": "11/9/2009"
  },
  {
    "rank": 349,
    "id": "1323",
    "speaker": " Morley",
    "name": "Morley sings \"Women of Hope\"",
    "shortsummary": "Inspired by Aung San Suu Kyi's call to action, \"If you're feeling helpless, help someone,\" Morley composed this song. She sings it at TEDxWomen in her gorgeous, warm voice.",
    "duration": "0:05:30",
    "publishdate": "1/13/2012 16:11:00"
  },
  {
    "rank": 350,
    "id": "1265",
    "speaker": "Aparna Rao",
    "name": "Aparna Rao: High-tech art (with a sense of humor)",
    "shortsummary": "Artist and TED Fellow Aparna Rao re-imagines the familiar in surprising, often humorous ways. With her collaborator Soren Pors, Rao creates high-tech art installations -- a typewriter that sends emails, a camera that tracks you through the room only to make you invisible on screen -- that put a playful spin on ordinary objects and interactions.",
    "duration": "0:07:50",
    "publishdate": "11/8/2011"
  },
  {
    "rank": 351,
    "id": "1071",
    "speaker": "Dr. Hawa Abdi + Dr. Deqo Mohamed",
    "name": "Mother and daughter doctor-heroes: Hawa Abdi + Deqo Mohamed",
    "shortsummary": "They've been called the \"saints of Somalia.\" Doctor Hawa Abdi and her daughter Deqo Mohamed discuss their medical clinic in Somalia, where -- in the face of civil war and open oppression of women -- they've built a hospital, a school and a community of peace.",
    "duration": "0:08:43",
    "publishdate": "2/9/2011"
  },
  {
    "rank": 352,
    "id": "315",
    "speaker": "Louise Leakey",
    "name": "Digging for humanity's origins",
    "shortsummary": "Louise Leakey asks, \"Who are we?\" The question takes her to the Rift Valley in Eastern Africa, where she digs for the evolutionary origins of humankind -- and suggests a stunning new vision of our competing ancestors.",
    "duration": "0:15:36",
    "publishdate": "7/23/2008"
  },
  {
    "rank": 353,
    "id": "1470",
    "speaker": "Damian Palin",
    "name": "Damian Palin: Mining minerals from seawater",
    "shortsummary": "The world needs clean water, and more and more, we're pulling it from the oceans, desalinating it, and drinking it. But what to do with the salty brine left behind? In this intriguing short talk, TED Fellow Damian Palin proposes an idea: Mine it for other minerals we need, with the help of some collaborative metal-munching bacteria.",
    "duration": "0:03:01",
    "publishdate": "6/7/2012 16:30:00"
  },
  {
    "rank": 354,
    "id": "1509",
    "speaker": "Mina Bissell",
    "name": "Mina Bissell: Experiments that point to a new understanding of cancer",
    "shortsummary": "For decades, researcher Mina Bissell pursued a revolutionary idea -- that a cancer cell doesn't automatically become a tumor, but rather, depends on surrounding cells (its microenvironment) for cues on how to develop. She shares the two key experiments that proved the prevailing wisdom about cancer growth was wrong.",
    "duration": "0:16:18",
    "publishdate": "7/16/2012 15:18:00"
  },
  {
    "rank": 355,
    "id": "561",
    "speaker": "Yann Arthus-Bertrand",
    "name": "Yann Arthus-Bertrand captures fragile Earth in wide-angle",
    "shortsummary": "In this image-filled talk, Yann Arthus-Bertrand displays his three most recent projects on humanity and our habitat -- stunning aerial photographs in his series \"The Earth From Above,\" personal interviews from around the globe featured in his web project \"6 billion Others,\" and his soon-to-be-released movie, \"Home,\" which documents human impact on the environment through breathtaking video.",
    "duration": "0:14:54",
    "publishdate": "6/3/2009"
  },
  {
    "rank": 356,
    "id": "1409",
    "speaker": "Sherry Turkle",
    "name": "Sherry Turkle: Connected, but alone?",
    "shortsummary": "As we expect more from technology, do we expect less from each other? Sherry Turkle studies how our devices and online personas are redefining human connection and communication -- and asks us to think deeply about the new kinds of connection we want to have.",
    "duration": "0:19:48",
    "publishdate": "4/3/2012"
  },
  {
    "rank": 357,
    "id": "1612",
    "speaker": "Jeff Hancock",
    "name": "Jeff Hancock: The future of lying",
    "shortsummary": "Who hasn't sent a text message saying \"I'm on my way\" when it wasn't true or fudged the truth a touch in their online dating profile? But Jeff Hancock doesn't believe that the anonymity of the internet encourages dishonesty. In fact, he says the searchability and permanence of information online may even keep us honest.",
    "duration": "0:18:31",
    "publishdate": "11/9/2012 16:05:00"
  },
  {
    "rank": 358,
    "id": "520",
    "speaker": "Niels Diffrient",
    "name": "Niels Diffrient rethinks the way we sit down",
    "shortsummary": "Design legend Niels Diffrient talks about his life in industrial design (and the reason he became a designer instead of a jet pilot). He details his quest to completely rethink the office chair starting from one fundamental data set: the human body.",
    "duration": "0:17:20",
    "publishdate": "4/21/2009"
  },
  {
    "rank": 359,
    "id": "228",
    "speaker": "Alan Kay",
    "name": "A powerful idea about teaching ideas",
    "shortsummary": "With all the intensity and brilliance for which he is known, Alan Kay envisions better techniques for teaching kids by using computers to illustrate experience in ways -- mathematically and scientifically -- that only computers can.",
    "duration": "0:20:37",
    "publishdate": "3/4/2008"
  },
  {
    "rank": 360,
    "id": "158",
    "speaker": "Vusi Mahlasela",
    "name": "\"Thula Mama\"",
    "shortsummary": "South African singer-songwriter Vusi Mahlasela dedicates his song, \"Thula Mama,\" to all women -- and especially his grandmother.",
    "duration": "0:10:06",
    "publishdate": "8/15/2007"
  },
  {
    "rank": 361,
    "id": "72",
    "speaker": "Chris Anderson (Wired)",
    "name": "Technology's Long Tail",
    "shortsummary": "Chris Anderson, the editor of Wired, explores the four key stages of any viable technology: setting the right price, gaining market share, displacing an established technology and, finally, becoming ubiquitous.",
    "duration": "0:14:18",
    "publishdate": "4/27/2007"
  },
  {
    "rank": 362,
    "id": "227",
    "speaker": "Craig Venter",
    "name": "On the verge of creating synthetic life",
    "shortsummary": "\"Can we create new life out of our digital universe?\" Craig Venter asks. His answer is \"yes\" -- and pretty soon. He walks through his latest research and promises that we'll soon be able to build and boot up a synthetic chromosome.",
    "duration": "0:15:54",
    "publishdate": "3/6/2008"
  },
  {
    "rank": 363,
    "id": "1773",
    "speaker": "Margaret Heffernan",
    "name": "Margaret Heffernan: The dangers of \"willful blindness\"",
    "shortsummary": "Gayla Benefield was just doing her job -- until she uncovered an awful secret about her hometown that meant its mortality rate was 80 times higher than anywhere else in the U.S. But when she tried to tell people about it, she learned an even more shocking truth: People didn't want to know. In a talk that's part history lesson, part call-to-action, Margaret Heffernan demonstrates the danger of \"willful blindness\" and praises ordinary people like Benefield who are willing to speak up. <em>(Filmed at TEDxDanubia.)</em> ",
    "duration": "0:14:38",
    "publishdate": "8/12/2013 14:58:00"
  },
  {
    "rank": 364,
    "id": "218",
    "speaker": "Pamelia Kurstin",
    "name": "Theremin, the untouchable music",
    "shortsummary": "Virtuoso Pamelia Kurstin performs and discusses her theremin, the not-just-for-sci-fi electronic instrument that is played without being touched. Songs include \"Autumn Leaves,\" \"Lush Life\" and David Mash's \"Listen, Words Are Gone.\"",
    "duration": "0:19:11",
    "publishdate": "2/13/2008"
  },
  {
    "rank": 365,
    "id": "664",
    "speaker": "Marc Koska",
    "name": "Marc Koska: 1.3m reasons to re-invent the syringe",
    "shortsummary": "Reuse of syringes, all too common in under-funded clinics, kills 1.3 million each year. Marc Koska clues us in to this devastating global problem with facts, photos and hidden-camera footage. He shares his solution: a low-cost syringe that can't be used twice.",
    "duration": "0:04:46",
    "publishdate": "10/22/2009"
  },
  {
    "rank": 366,
    "id": "1154",
    "speaker": "Shirin Neshat",
    "name": "Shirin Neshat: Art in exile",
    "shortsummary": "Iranian-born artist Shirin Neshat explores the paradox of being an artist in exile: a voice for her people, but unable to go home. In her work, she explores Iran pre- and post-Islamic Revolution, tracing political and societal change through powerful images of women.",
    "duration": "0:10:44",
    "publishdate": "5/25/2011"
  },
  {
    "rank": 367,
    "id": "162",
    "speaker": "Theo Jansen",
    "name": "The art of creating creatures",
    "shortsummary": "Artist Theo Jansen demonstrates the amazingly lifelike kinetic sculptures he builds from plastic tubes and lemonade bottles. His creatures are designed to move -- and even survive -- on their own.",
    "duration": "0:08:13",
    "publishdate": "9/6/2007"
  },
  {
    "rank": 368,
    "id": "286",
    "speaker": "Benjamin Zander",
    "name": "Classical music with shining eyes",
    "shortsummary": "Benjamin Zander has two infectious passions: classical music, and helping us all realize our untapped love for it -- and by extension, our untapped love for all new possibilities, new experiences, new connections. ",
    "duration": "0:20:43",
    "publishdate": "6/25/2008"
  },
  {
    "rank": 369,
    "id": "1286",
    "speaker": "Damon Horowitz",
    "name": "Damon Horowitz: Philosophy in prison",
    "shortsummary": "Damon Horowitz teaches philosophy through the Prison University Project, bringing college-level classes to inmates of San Quentin State Prison. In this powerful short talk, he tells the story of an encounter with right and wrong that quickly gets personal.\n",
    "duration": "0:03:50",
    "publishdate": "11/28/2011"
  },
  {
    "rank": 370,
    "id": "770",
    "speaker": "Kevin Kelly",
    "name": "Kevin Kelly tells technology's epic story",
    "shortsummary": "In this wide-ranging, thought-provoking talk from TEDxAmsterdam, Kevin Kelly muses on what technology means in our lives -- from its impact at the personal level to its place in the cosmos.",
    "duration": "0:16:32",
    "publishdate": "2/19/2010"
  },
  {
    "rank": 371,
    "id": "1477",
    "speaker": "Sarah Parcak",
    "name": "Sarah Parcak: Archeology from space",
    "shortsummary": "In this short talk, TED Fellow Sarah Parcak introduces the field of \"space archeology\" -- using satellite images to search for clues to the lost sites of past civilizations.",
    "duration": "0:05:20",
    "publishdate": "6/14/2012 15:00:00"
  },
  {
    "rank": 372,
    "id": "1302",
    "speaker": "Quyen Nguyen",
    "name": "Quyen Nguyen: Color-coded surgery",
    "shortsummary": "Surgeons are taught from textbooks which conveniently color-code the types of tissues, but that's not what it looks like in real life -- until now. At TEDMED Quyen Nguyen demonstrates how a molecular marker can make tumors light up in neon green, showing surgeons exactly where to cut.",
    "duration": "0:16:08",
    "publishdate": "12/13/2011"
  },
  {
    "rank": 373,
    "id": "685",
    "speaker": "Pranav Mistry",
    "name": "Pranav Mistry: The thrilling potential of SixthSense technology",
    "shortsummary": "At TEDIndia, Pranav Mistry demos several tools that help the physical world interact with the world of data -- including a deep look at his SixthSense device and a new, paradigm-shifting paper \"laptop.\" In an onstage Q&A, Mistry says he'll open-source the software behind SixthSense, to open its possibilities to all.",
    "duration": "0:13:50",
    "publishdate": "11/16/2009"
  },
  {
    "rank": 374,
    "id": "1129",
    "speaker": "Anil Ananthaswamy",
    "name": "Anil Ananthaswamy: What it takes to do extreme astrophysics",
    "shortsummary": "All over the planet, giant telescopes and detectors are looking (and listening) for clues to the workings of the universe. At the INK Conference, science writer Anil Ananthaswamy tours us around these amazing installations, taking us to some of the most remote and silent places on Earth.",
    "duration": "0:14:08",
    "publishdate": "4/21/2011"
  },
  {
    "rank": 375,
    "id": "1750",
    "speaker": "Ji-Hae Park",
    "name": "Ji-Hae Park: The violin, and my dark night of the soul",
    "shortsummary": "In her quest to become a world-famous violinist, Ji-Hae Park fell into a severe depression. Only music was able to lift her out again -- showing her that her goal needn't be to play lofty concert halls, but instead to bring the wonder of the instrument to as many people as possible.",
    "duration": "0:12:41",
    "publishdate": "5/24/2013 14:58:00"
  },
  {
    "rank": 376,
    "id": "1202",
    "speaker": "Harald Haas",
    "name": "Harald Haas: Wireless data from every light bulb",
    "shortsummary": "What if every light bulb in the world could also transmit data? At TEDGlobal, Harald Haas demonstrates, for the first time, a device that could do exactly that. By flickering the light from a single LED, a change too quick for the human eye to detect, he can transmit far more data than a cellular tower -- and do it in a way that's more efficient, secure and widespread.",
    "duration": "0:12:51",
    "publishdate": "8/2/2011"
  },
  {
    "rank": 377,
    "id": "1666",
    "speaker": "Shabana Basij-Rasikh",
    "name": "Shabana Basij-Rasikh: Dare to educate Afghan girls",
    "shortsummary": "Imagine a country where girls must sneak out to go to school, with deadly consequences if they get caught learning. This was Afghanistan under the Taliban, and traces of that danger remain today. 22-year-old Shabana Basij-Rasikh runs a school for girls in Afghanistan. She celebrates the power of a family's decision to believe in their daughters -- and tells the story of one brave father who stood up to local threats. <i>(Filmed at TEDxWomen)</i>",
    "duration": "0:09:36",
    "publishdate": "2/11/2013 16:08:00"
  },
  {
    "rank": 378,
    "id": "586",
    "speaker": "Ray Zahab",
    "name": "Ray Zahab treks to the South Pole",
    "shortsummary": "Extreme runner Ray Zahab shares an enthusiastic account of his record-breaking trek on foot to the South Pole -- a 33-day sprint through the snow.",
    "duration": "0:05:53",
    "publishdate": "6/26/2009"
  },
  {
    "rank": 379,
    "id": "660",
    "speaker": "Julian Treasure",
    "name": "Julian Treasure: The 4 ways sound affects us",
    "shortsummary": "Playing sound effects both pleasant and awful, Julian Treasure shows how sound affects us in four significant ways. Listen carefully for a shocking fact about noisy open-plan offices.",
    "duration": "0:05:47",
    "publishdate": "10/16/2009"
  },
  {
    "rank": 380,
    "id": "1719",
    "speaker": "Robert J. Gordon",
    "name": "Robert Gordon: The death of innovation, the end of growth",
    "shortsummary": "The US economy has been expanding wildly for two centuries. Are we witnessing the end of growth? Economist Robert Gordon lays out 4 reasons US growth may be slowing, detailing factors like epidemic debt and growing inequality, which could move the US into a period of stasis we can't innovate our way out of. Be sure to watch the opposing viewpoint from Erik Brynjolfsson.",
    "duration": "0:12:14",
    "publishdate": "4/23/2013 14:59:00"
  },
  {
    "rank": 381,
    "id": "1140",
    "speaker": "Louie Schwartzberg",
    "name": "Louie Schwartzberg: The hidden beauty of pollination",
    "shortsummary": "Pollination: it's vital to life on Earth, but largely unseen by the human eye. Filmmaker Louie Schwartzberg shows us the intricate world of pollen and pollinators with gorgeous high-speed images from his film \"Wings of Life,\" inspired by the vanishing of one of nature's primary pollinators, the honeybee.",
    "duration": "0:07:48",
    "publishdate": "5/6/2011"
  },
  {
    "rank": 382,
    "id": "1211",
    "speaker": "Marco Tempest",
    "name": "Marco Tempest: The magic of truth and lies (and iPods)",
    "shortsummary": "Using three iPods like magical props, Marco Tempest spins a clever, surprisingly heartfelt meditation on truth and lies, art and emotion. ",
    "duration": "0:05:07",
    "publishdate": "8/12/2011"
  },
  {
    "rank": 383,
    "id": "963",
    "speaker": "Annie Lennox",
    "name": "Annie Lennox: Why I am an HIV/AIDS activist  ",
    "shortsummary": "For the last eight years, pop singer Annie Lennox has devoted the majority of her time to her SING campaign, raising awareness and money to combat HIV/AIDS. She shares the experiences that have inspired her, from working with Nelson Mandela to meeting a little African girl in a desperate situation.\n",
    "duration": "0:09:16",
    "publishdate": "9/22/2010"
  },
  {
    "rank": 384,
    "id": "201",
    "speaker": "Lakshmi Pratury",
    "name": "The lost art of letter-writing",
    "shortsummary": "Lakshmi Pratury remembers the lost art of letter-writing and shares a series of notes her father wrote to her before he died. Her short but heartfelt talk may inspire you to set pen to paper, too.",
    "duration": "0:04:09",
    "publishdate": "12/20/2007"
  },
  {
    "rank": 385,
    "id": "63",
    "speaker": "Charles Leadbeater",
    "name": "The rise of the amateur professional",
    "shortsummary": "In this deceptively casual talk, Charles Leadbeater weaves a tight argument  that innovation isn't just for professionals anymore. Passionate amateurs, using new tools, are creating products and paradigms that companies can't.",
    "duration": "0:19:01",
    "publishdate": "1/31/2007"
  },
  {
    "rank": 386,
    "id": "1779",
    "speaker": "Joel Selanikio",
    "name": "Joel Selanikio: The surprising seeds of a big-data revolution in healthcare",
    "shortsummary": "Collecting global health data was an imperfect science: Workers tramped through villages to knock on doors and ask questions, wrote the answers on paper forms, then input the data -- and from this gappy information, countries would make huge decisions. Data geek Joel Selanikio talks through the sea change in collecting health data in the past decade -- starting with the Palm Pilot and Hotmail, and now moving into the cloud. <em>(Filmed at TEDxAustin.)</em>",
    "duration": "0:16:18",
    "publishdate": "7/2/2013 15:01:00"
  },
  {
    "rank": 387,
    "id": "1592",
    "speaker": "Melissa Marshall",
    "name": "Melissa Marshall: Talk nerdy to me",
    "shortsummary": "Melissa Marshall brings a message to all scientists (from non-scientists): We're fascinated by what you're doing. So tell us about it -- in a way we can understand. In just 4 minutes, she shares powerful tips on presenting complex scientific ideas to a general audience.\n",
    "duration": "0:04:34",
    "publishdate": "10/11/2012 15:00:00"
  },
  {
    "rank": 388,
    "id": "622",
    "speaker": "Cary Fowler",
    "name": "Cary Fowler: One seed at a time, protecting the future of food",
    "shortsummary": "The varieties of wheat, corn and rice we grow today may not thrive in a future threatened by climate change. Cary Fowler takes us inside a vast global seed bank, buried within a frozen mountain in Norway, that stores a diverse group of food-crop for whatever tomorrow may bring.",
    "duration": "0:17:08",
    "publishdate": "8/31/2009"
  },
  {
    "rank": 389,
    "id": "1420",
    "speaker": "Abigail Washburn",
    "name": "Abigail Washburn: Building US-China relations ... by banjo",
    "shortsummary": "TED Fellow Abigail Washburn wanted to be a lawyer improving US-China relations -- until she picked up a banjo. She tells a moving story of the remarkable connections she's formed touring across the United States and China while playing that banjo and singing in Chinese.",
    "duration": "0:06:34",
    "publishdate": "4/13/2012 15:02:00"
  },
  {
    "rank": 390,
    "id": "545",
    "speaker": "Nandan Nilekani",
    "name": "Nandan Nilekani's ideas for India's future",
    "shortsummary": "Nandan Nilekani, visionary CEO of outsourcing pioneer Infosys, explains four brands of ideas that will determine whether India can continue its recent breakneck progress.",
    "duration": "0:15:12",
    "publishdate": "5/14/2009"
  },
  {
    "rank": 391,
    "id": "893",
    "speaker": "Aditi Shankardass",
    "name": "Aditi Shankardass: A second opinion on learning disorders ",
    "shortsummary": "Developmental disorders in children are typically diagnosed by observing behavior, but Aditi Shankardass knew that we should be looking directly at their brains. She explains how a remarkable EEG device has revealed mistaken diagnoses and transformed children's lives.  ",
    "duration": "0:09:01",
    "publishdate": "6/24/2010"
  },
  {
    "rank": 392,
    "id": "694",
    "speaker": "Tom Wujec",
    "name": "Tom Wujec demos the 13th-century astrolabe",
    "shortsummary": "Rather than demo another new technology, Tom Wujec reaches back to one of our earliest but most ingenious devices -- the astrolabe. With thousands of uses, from telling time to mapping the night sky, this old tech reminds us that the ancient can be as brilliant as the brand-new.",
    "duration": "0:09:25",
    "publishdate": "11/20/2009"
  },
  {
    "rank": 393,
    "id": "1002",
    "speaker": "Emily Pilloton",
    "name": "Emily Pilloton: Teaching design for change",
    "shortsummary": "Designer Emily Pilloton moved to rural Bertie County, in North Carolina, to engage in a bold experiment of design-led community transformation. She's teaching a design-build class called Studio H that engages high schoolers' minds and bodies while bringing smart design and new opportunities to the poorest county in the state.",
    "duration": "0:16:43",
    "publishdate": "11/8/2010"
  },
  {
    "rank": 394,
    "id": "1093",
    "speaker": "Rob Harmon",
    "name": "Rob Harmon: How the market can keep streams flowing",
    "shortsummary": "With streams and rivers drying up because of over-usage, Rob Harmon has implemented an ingenious market mechanism to bring back the water. Farmers and beer companies find their fates intertwined in the intriguing century-old tale of Prickly Pear Creek.",
    "duration": "0:08:46",
    "publishdate": "3/11/2011"
  },
  {
    "rank": 395,
    "id": "1007",
    "speaker": "Conrad Wolfram",
    "name": "Conrad Wolfram: Teaching kids real math with computers",
    "shortsummary": "From rockets to stock markets, many of humanity's most thrilling creations are powered by math. So why do kids lose interest in it? Conrad Wolfram says the part of math we teach -- calculation by hand -- isn't just tedious, it's mostly irrelevant to real mathematics and the real world. He presents his radical idea: teaching kids math through computer programming.",
    "duration": "0:17:19",
    "publishdate": "11/15/2010"
  },
  {
    "rank": 396,
    "id": "1213",
    "speaker": "Svante Paabo",
    "name": "Svante Paabo: DNA clues to our inner neanderthal",
    "shortsummary": "Sharing the results of a massive, worldwide study, geneticist Svante PÃ¤Ã¤bo shows the DNA proof that early humans mated with Neanderthals after we moved out of Africa. (Yes, many of us have Neanderthal DNA.) He also shows how a tiny bone from a baby finger was enough to identify a whole new humanoid species.",
    "duration": "0:17:01",
    "publishdate": "8/30/2011"
  },
  {
    "rank": 397,
    "id": "1444",
    "speaker": "Renny Gleeson",
    "name": "Renny Gleeson: 404, the story of a page not found",
    "shortsummary": "Oops! Nobody wants to see the 404: Page Not Found. But as Renny Gleeson shows us, while he runs through a slideshow of creative and funny 404 pages, every error is really a chance to build a better relationship.",
    "duration": "0:04:07",
    "publishdate": "5/11/2012 15:08:00"
  },
  {
    "rank": 398,
    "id": "388",
    "speaker": "Graham Hawkes",
    "name": "Fly the seas on a submarine with wings",
    "shortsummary": "Graham Hawkes takes us aboard his graceful, winged submarines to the depths of planet Ocean (a.k.a. \"Earth\"). It's a deep blue world we landlubbers rarely see in 3D.",
    "duration": "0:12:11",
    "publishdate": "11/3/2008"
  },
  {
    "rank": 399,
    "id": "1220",
    "speaker": "Yasheng Huang",
    "name": "Yasheng Huang: Does democracy stifle economic growth?",
    "shortsummary": "Economist Yasheng Huang compares China to India, and asks how China's authoritarian rule contributed to its astonishing economic growth -- leading to a big question: Is democracy actually holding India back? Huang's answer may surprise you.",
    "duration": "0:18:51",
    "publishdate": "9/12/2011"
  },
  {
    "rank": 400,
    "id": "801",
    "speaker": "Sam Harris",
    "name": "Sam Harris: Science can answer moral questions",
    "shortsummary": "Questions of good and evil, right and wrong are commonly thought unanswerable by science. But Sam Harris argues that science can -- and should -- be an authority on moral issues, shaping human values and setting out what constitutes a good life.",
    "duration": "0:23:06",
    "publishdate": "3/22/2010"
  },
  {
    "rank": 401,
    "id": "487",
    "speaker": "Dan Ariely",
    "name": "Why we think it's OK to cheat and steal (sometimes)",
    "shortsummary": "Behavioral economist Dan Ariely studies the bugs in our moral code: the hidden reasons we think it's OK to cheat or steal (sometimes). Clever studies help make his point that we're predictably irrational -- and can be influenced in ways we can't grasp.",
    "duration": "0:16:23",
    "publishdate": "3/17/2009"
  },
  {
    "rank": 402,
    "id": "485",
    "speaker": "Dan Dennett",
    "name": "Cute, sexy, sweet and funny -- an evolutionary riddle",
    "shortsummary": "Why are babies cute? Why is cake sweet? Philosopher Dan Dennett has answers you wouldn't expect, as he shares evolution's counterintuitive reasoning on cute, sweet and sexy things (plus a new theory from Matthew Hurley on why jokes are funny).",
    "duration": "0:07:45",
    "publishdate": "3/16/2009"
  },
  {
    "rank": 403,
    "id": "1343",
    "speaker": "Bill Doyle",
    "name": "Bill Doyle: Treating cancer with electric fields",
    "shortsummary": "Surgery, chemotherapy and radiation are the best-known methods for treating cancer. At TEDMED, Bill Doyle presents a new approach, called Tumor Treating Fields, which uses electric fields to interrupt cancer cell division. Still in its infancy -- and approved for only certain types of cancer -- the treatment comes with one big benefit: quality of life.",
    "duration": "0:15:35",
    "publishdate": "1/31/2012 16:01:00"
  },
  {
    "rank": 404,
    "id": "288",
    "speaker": "Nicholas Negroponte",
    "name": "One Laptop per Child, two years on",
    "shortsummary": "Nicholas Negroponte talks about how One Laptop per Child is doing, two years in. Speaking at the EG conference while the first XO laptops roll off the production line, he recaps the controversies and recommits to the goals of this far-reaching project.",
    "duration": "0:16:40",
    "publishdate": "6/26/2008"
  },
  {
    "rank": 405,
    "id": "1370",
    "speaker": "Avi Rubin",
    "name": "Avi Rubin: All your devices can be hacked",
    "shortsummary": "Could someone hack your pacemaker? At TEDxMidAtlantic, Avi Rubin explains how hackers are compromising cars, smartphones and medical devices, and warns us about the dangers of an increasingly hack-able world. ",
    "duration": "",
    "publishdate": "2/25/2012 16:49:00"
  },
  {
    "rank": 406,
    "id": "1253",
    "speaker": "Richard Wilkinson",
    "name": "Richard Wilkinson: How economic inequality harms societies",
    "shortsummary": "We feel instinctively that societies with huge income gaps are somehow going wrong. Richard Wilkinson charts the hard data on economic inequality, and shows what gets worse when rich and poor are too far apart: real effects on health, lifespan, even such basic values as trust.",
    "duration": "0:16:54",
    "publishdate": "10/24/2011"
  },
  {
    "rank": 407,
    "id": "1086",
    "speaker": "Wael Ghonim",
    "name": "Wael Ghonim: Inside the Egyptian revolution",
    "shortsummary": "Wael Ghonim is the Google executive who helped jumpstart Egypt's democratic revolution ... with a Facebook page memorializing a victim of the regime's violence. Speaking at TEDxCairo, he tells the inside story of the past two months, when everyday Egyptians showed that \"the power of the people is stronger than the people in power.\"",
    "duration": "0:09:51",
    "publishdate": "3/4/2011"
  },
  {
    "rank": 408,
    "id": "1693",
    "speaker": "Danny Hillis",
    "name": "Danny Hillis: The Internet could crash. We need a Plan B",
    "shortsummary": "In the 1970s and 1980s, a generous spirit suffused the Internet, whose users were few and far between. But today, the net is ubiquitous, connecting billions of people, machines and essential pieces of infrastructure -- leaving us vulnerable to cyber-attack or meltdown. Internet pioneer Danny Hillis argues that the Internet wasn't designed for this kind of scale, and sounds a clarion call for us to develop a Plan B: a parallel system to fall back on if -- or when -- the Internet crashes.",
    "duration": "0:12:31",
    "publishdate": "3/18/2013 12:54:00"
  },
  {
    "rank": 409,
    "id": "3",
    "speaker": "Ashraf Ghani",
    "name": "How to fix broken states",
    "shortsummary": "Ashraf Ghani's passionate and powerful 10-minute talk, emphasizing the necessity of both economic investment and design ingenuity to rebuild broken states, is followed by a conversation with TED curator Chris Anderson on the future of Afghanistan.",
    "duration": "0:18:45",
    "publishdate": "10/18/2006"
  },
  {
    "rank": 410,
    "id": "1339",
    "speaker": "Gayle Tzemach Lemmon",
    "name": "Gayle Tzemach Lemmon: Women entrepreneurs, example not exception",
    "shortsummary": "Women aren't micro--so why do they only get micro-loans? At TEDxWomen reporter Gayle Tzemach Lemmon argues that women running all types of firms-- from home businesses to major factories-- are the overlooked key to economic development.\n",
    "duration": "0:13:16",
    "publishdate": "1/27/2012 16:06:00"
  },
  {
    "rank": 411,
    "id": "734",
    "speaker": "Kartick Satyanarayan",
    "name": "Kartick Satyanarayan: How we rescued the \"dancing\" bears",
    "shortsummary": "Traditionally, the Kalandar community of India has survived by capturing sloth bear cubs and training them to \"dance\" through extreme cruelty. Kartick Satyanarayan has been able to put an end to this centuries-old practice, and in so doing discovered a lesson of wider significance: make the practitioners part of the solution.",
    "duration": "0:04:02",
    "publishdate": "1/11/2010"
  },
  {
    "rank": 412,
    "id": "1134",
    "speaker": "Mike Matas",
    "name": "Mike Matas: A next-generation digital book",
    "shortsummary": "Software developer Mike Matas demos the first full-length interactive book for the iPad -- with clever, swipeable video and graphics and some very cool data visualizations to play with. The book is \"Our Choice,\" Al Gore's sequel to \"An Inconvenient Truth.\" ",
    "duration": "0:04:34",
    "publishdate": "4/28/2011"
  },
  {
    "rank": 413,
    "id": "1601",
    "speaker": "Georgette Mulheir",
    "name": "Georgette Mulheir: The tragedy of orphanages",
    "shortsummary": "Orphanages are costly and can cause irreparable damage both mentally and physically for its charges -- so why are they still so ubiquitous? Georgette Mulheir gravely describes the tragedy of orphanages and urges us to end our reliance on them, by finding alternate ways of supporting children in need.",
    "duration": "0:10:41",
    "publishdate": "11/8/2012 16:03:00"
  },
  {
    "rank": 414,
    "id": "665",
    "speaker": "Ian Goldin",
    "name": "Ian Goldin: Navigating our global future",
    "shortsummary": "As globalization and technological advances bring us hurtling towards a new integrated future, Ian Goldin warns that not all people may benefit equally. But, he says, if we can recognize this danger, we might yet realize the possibility of improved life for everyone.",
    "duration": "0:07:07",
    "publishdate": "10/23/2009"
  },
  {
    "rank": 415,
    "id": "1714",
    "speaker": "Thomas Insel",
    "name": "Thomas Insel: Toward a new understanding of mental illness",
    "shortsummary": "Today, thanks to better early detection, there are 63% fewer deaths from heart disease than there were just a few decades ago. Thomas Insel, Director of the National Institute of Mental Health, wonders: Could we do the same for depression and schizophrenia? The first step in this new avenue of research, he says, is a crucial reframing: for us to stop thinking about â€œmental disordersâ€ and start understanding them as â€œbrain disorders.â€ (<em>Filmed at TEDxCaltech</em>.)",
    "duration": "0:13:03",
    "publishdate": "4/16/2013 15:18:00"
  },
  {
    "rank": 416,
    "id": "1781",
    "speaker": "Jinha Lee",
    "name": "Jinha Lee: Reach into the computer and grab a pixel",
    "shortsummary": "The border between our physical world and the digital information surrounding us has been getting thinner and thinner. Designer and engineer Jinha Lee wants to dissolve it altogether. As he demonstrates in this short, gasp-inducing talk, his ideas include a pen that penetrates into a screen to draw 3D models and SpaceTop, a computer desktop prototype that lets you reach through the screen to manipulate digital objects. ",
    "duration": "0:05:07",
    "publishdate": "7/3/2013 15:01:00"
  },
  {
    "rank": 417,
    "id": "1598",
    "speaker": "Doris Kim Sung",
    "name": "Doris Kim Sung: Metal that breathes",
    "shortsummary": "Modern buildings with floor-to-ceiling windows give spectacular views, but they require a lot of energy to cool. Doris Kim Sung works with thermo-bimetals, smart materials that act more like human skin, dynamically and responsively, and can shade a room from sun and self-ventilate.",
    "duration": "0:08:59",
    "publishdate": "10/25/2012 15:00:00"
  },
  {
    "rank": 418,
    "id": "766",
    "speaker": "Blaise Aguera y Arcas",
    "name": "Blaise Aguera y Arcas demos augmented-reality maps",
    "shortsummary": "In a demo that drew gasps at TED2010, Blaise Aguera y Arcas demos new augmented-reality mapping technology from Microsoft.",
    "duration": "0:07:45",
    "publishdate": "2/13/2010"
  },
  {
    "rank": 419,
    "id": "1475",
    "speaker": "Rebecca Onie",
    "name": "Rebecca Onie: What if our healthcare system kept us healthy?",
    "shortsummary": "Rebecca Onie asks audacious questions: What if waiting rooms were a place to improve daily health care? What if doctors could prescribe food, housing and heat in the winter? At TEDMED she describes Health Leads, an organization that does just that -- and does it by building a volunteer base as elite and dedicated as a college sports team.",
    "duration": "0:16:34",
    "publishdate": "6/12/2012 15:00:00"
  },
  {
    "rank": 420,
    "id": "1158",
    "speaker": "Dennis Hong",
    "name": "Dennis Hong: Making a car for blind drivers",
    "shortsummary": "Using robotics, laser rangefinders, GPS and smart feedback tools, Dennis Hong is building a car for drivers who are blind. It's not a \"self-driving\" car, he's careful to note, but a car in which a non-sighted driver can determine speed, proximity and route -- and drive independently.",
    "duration": "0:09:08",
    "publishdate": "5/31/2011"
  },
  {
    "rank": 421,
    "id": "156",
    "speaker": "Patrick Awuah",
    "name": "Educating a new generation of African leaders",
    "shortsummary": "Patrick Awuah makes the case that a liberal arts education is critical to forming true leaders. ",
    "duration": "0:17:31",
    "publishdate": "8/3/2007"
  },
  {
    "rank": 422,
    "id": "267",
    "speaker": "Arthur Ganson",
    "name": "Sculpture that's truly moving",
    "shortsummary": "Sculptor and engineer Arthur Ganson talks about his work -- kinetic art that explores deep philosophical ideas and is gee-whiz fun to look at.",
    "duration": "0:15:44",
    "publishdate": "5/27/2008"
  },
  {
    "rank": 423,
    "id": "1239",
    "speaker": "Mike Biddle",
    "name": "Mike Biddle: We can recycle plastic",
    "shortsummary": "Less than 10% of plastic trash is recycled -- compared to almost 90% of metals -- because of the massively complicated problem of finding and sorting the different kinds. Frustrated by this waste, Mike Biddle has developed a cheap and incredibly energy efficient plant that can, and does, recycle any kind of plastic.",
    "duration": "0:10:58",
    "publishdate": "10/6/2011"
  },
  {
    "rank": 424,
    "id": "1070",
    "speaker": "Cynthia Breazeal",
    "name": "Cynthia Breazeal: The rise of personal robots",
    "shortsummary": "As a grad student, Cynthia Breazeal wondered why we were using robots on Mars, but not in our living rooms. The key, she realized: training robots to interact with people. Now she dreams up and builds robots that teach, learn -- and play. Watch for amazing demo footage of a new interactive game for kids.",
    "duration": "0:14:04",
    "publishdate": "2/8/2011"
  },
  {
    "rank": 425,
    "id": "1593",
    "speaker": "Pankaj Ghemawat",
    "name": "Pankaj Ghemawat: Actually, the world isn't flat",
    "shortsummary": "It may seem that we're living in a borderless world where ideas, goods and people flow freely from nation to nation. We're not even close, says Pankaj Ghemawat. With great data (and an eye-opening survey), he argues that there's a delta between perception and reality in a world that's maybe not so hyperconnected after all.",
    "duration": "0:17:03",
    "publishdate": "10/22/2012 15:04:00"
  },
  {
    "rank": 426,
    "id": "759",
    "speaker": "Jamie Heywood",
    "name": "Jamie Heywood: The big idea my brother inspired",
    "shortsummary": "When Jamie Heywood's brother was diagnosed with ALS, he devoted his life to fighting the disease as well. The Heywood brothers built an ingenious website where people share and track data on their illnesses -- and they discovered that the collective data had enormous power to comfort, explain and predict.",
    "duration": "0:16:54",
    "publishdate": "2/2/2010"
  },
  {
    "rank": 427,
    "id": "11",
    "speaker": "Jane Goodall",
    "name": "What separates us from the apes?",
    "shortsummary": "Jane Goodall hasn't found the missing link, but she's come closer than nearly anyone else. The primatologist says the only real difference between humans and chimps is our sophisticated language. She urges us to start using it to change the world.",
    "duration": "0:27:25",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 428,
    "id": "588",
    "speaker": "Gever Tulley",
    "name": "Gever Tulley teaches life lessons through tinkering",
    "shortsummary": "Gever Tulley usesengaging photos and footage to demonstrate the valuable lessons kids learn at his Tinkering School. When given tools, materials and guidance, these young imaginations run wild and creative problem-solving takes over to build unique boats, bridges and even a rollercoaster!",
    "duration": "0:04:05",
    "publishdate": "6/30/2009"
  },
  {
    "rank": 429,
    "id": "1084",
    "speaker": "Wadah Khanfar",
    "name": "Wadah Khanfar: A historic moment in the Arab world",
    "shortsummary": "As a democratic revolution led by tech-empowered young people sweeps the Arab world, Wadah Khanfar, the head of Al Jazeera, shares a profoundly optimistic view of what's happening in Egypt, Tunisia, Libya and beyond -- at this powerful moment when people realized they could step out of their houses and ask for change.",
    "duration": "0:17:12",
    "publishdate": "3/2/2011"
  },
  {
    "rank": 430,
    "id": "1153",
    "speaker": "Bruce Aylward",
    "name": "Bruce Aylward: How we'll stop polio for good",
    "shortsummary": "Polio is almost completely eradicated. But as Bruce Aylward says: Almost isn't good enough with a disease this terrifying. Aylward lays out the plan to continue the scientific miracle that ended polio in most of the world -- and to snuff it out everywhere, forever.",
    "duration": "0:23:09",
    "publishdate": "5/24/2011"
  },
  {
    "rank": 431,
    "id": "553",
    "speaker": "Joachim de Posada",
    "name": "Joachim de Posada says, Don't eat the marshmallow yet",
    "shortsummary": "In this short talk from TED U, Joachim de Posada shares a landmark experiment on delayed gratification -- and how it can predict future success. With priceless video of kids trying their hardest not to eat the marshmallow.",
    "duration": "0:05:58",
    "publishdate": "5/25/2009"
  },
  {
    "rank": 432,
    "id": "910",
    "speaker": "Ellen  Gustafson",
    "name": "Ellen Gustafson: Obesity + Hunger = 1 global food issue",
    "shortsummary": "Co-creator of the philanthropic FEED bags, Ellen Gustafson says hunger and obesity are two sides of the same coin. At TEDxEast, she launches The 30 Project -- a way to change how we farm and eat in the next 30 years, and solve the global food inequalities behind both epidemics. ",
    "duration": "0:11:15",
    "publishdate": "7/7/2010"
  },
  {
    "rank": 433,
    "id": "521",
    "speaker": "Nate Silver",
    "name": "Nate Silver: Does race affect votes?",
    "shortsummary": "Nate Silver has answers to controversial questions about race in politics: Did Obama's race hurt his votes in some places? Stats and myths collide in this fascinating talk that ends with a remarkable insight on how town planning can promote tolerance.",
    "duration": "0:09:16",
    "publishdate": "4/22/2009"
  },
  {
    "rank": 434,
    "id": "724",
    "speaker": "Vilayanur Ramachandran",
    "name": "VS Ramachandran: The neurons that shaped civilization",
    "shortsummary": "Neuroscientist Vilayanur Ramachandran outlines the fascinating functions of mirror neurons. Only recently discovered, these neurons allow us to learn complex social behaviors, some of which formed the foundations of human civilization as we know it.",
    "duration": "0:07:43",
    "publishdate": "1/4/2010"
  },
  {
    "rank": 435,
    "id": "555",
    "speaker": "Michelle Obama",
    "name": "Michelle Obama's plea for education",
    "shortsummary": "Speaking at a London girls' school, Michelle Obama makes a passionate, personal case for each student to take education seriously. It is this new, brilliant generation, she says, that will close the gap between the world as it is and the world as it should be.",
    "duration": "0:12:29",
    "publishdate": "5/27/2009"
  },
  {
    "rank": 436,
    "id": "1422",
    "speaker": "Drew Curtis",
    "name": "Drew Curtis: How I beat a patent troll",
    "shortsummary": "Drew Curtis, the founder of fark.com, tells the story of how he fought a lawsuit from a company that had a patent, \"...for the creation and distribution of news releases via email.\" Along the way he shares some nutty statistics about the growing legal problem of frivolous patents.\n",
    "duration": "0:06:40",
    "publishdate": "4/17/2012 15:00:00"
  },
  {
    "rank": 437,
    "id": "1762",
    "speaker": "Rodney Brooks",
    "name": "Rodney Brooks: Why we will rely on robots",
    "shortsummary": "Scaremongers play on the idea that robots will simply replace people on the job. In fact, they can become our essential collaborators, freeing us up to spend time on less mundane and mechanical challenges. Rodney Brooks points out how valuable this could be as the number of working-age adults drops and the number of retirees swells. He introduces us to Baxter, the robot with eyes that move and arms that react to touch, which could work alongside an aging population -- and learn to help them at home, too.",
    "duration": "0:09:56",
    "publishdate": "6/28/2013 15:01:00"
  },
  {
    "rank": 438,
    "id": "168",
    "speaker": "Zeresenay Alemseged",
    "name": "Finding the origins of humanity",
    "shortsummary": "Paleoanthropologist Zeresenay Alemseged looks for the roots of humanity in Ethiopia's badlands. Here he talks about finding the oldest skeleteon of a humanoid child -- and how Africa holds the clues to our humanity.",
    "duration": "0:15:51",
    "publishdate": "9/18/2007"
  },
  {
    "rank": 439,
    "id": "1760",
    "speaker": "Martin Villeneuve",
    "name": "Martin Villeneuve: How I made an impossible film",
    "shortsummary": "Filmmaker Martin Villeneuve talks about <em>Mars et Avril</em>, the Canadian sci-fi spectacular he made with virtually no money. In a charming talk, he explains the various ways he overcame financial and logistical constraints to produce his unique and inventive vision of the future.",
    "duration": "0:10:55",
    "publishdate": "6/7/2013 14:59:00"
  },
  {
    "rank": 440,
    "id": "548",
    "speaker": "Dan Ariely",
    "name": "Dan Ariely asks, Are we in control of our own decisions? ",
    "shortsummary": "Behavioral economist Dan Ariely, the author of Predictably Irrational, uses classic visual illusions and his own counterintuitive (and sometimes shocking) research findings to show how we're not as rational as we think when we make decisions.",
    "duration": "0:17:26",
    "publishdate": "5/19/2009"
  },
  {
    "rank": 441,
    "id": "1390",
    "speaker": "Rob Reid",
    "name": "Rob Reid: The $8 billion iPod",
    "shortsummary": "Comic author Rob Reid unveils Copyright Math (TM), a remarkable new field of study based on actual numbers from entertainment industry lawyers and lobbyists. ",
    "duration": "0:05:11",
    "publishdate": "3/15/2012 15:09:00"
  },
  {
    "rank": 442,
    "id": "971",
    "speaker": "Eben Bayer",
    "name": "Eben Bayer: Are mushrooms the new plastic?",
    "shortsummary": "Product designer Eben Bayer reveals his recipe for a new, fungus-based packaging material that protects fragile stuff like furniture, plasma screens -- and the environment.",
    "duration": "0:09:05",
    "publishdate": "10/4/2010"
  },
  {
    "rank": 443,
    "id": "1451",
    "speaker": " JR",
    "name": "JR: One year of turning the world inside out",
    "shortsummary": "Street artist JR made a wish in 2011: Join me in a worldwide photo project to show the world its true face. Now, a year after his TED Prize wish, he shows how giant posters of human faces, pasted in public, are connecting communities, making change, and turning the world inside out. You can join in at <a href=\"http://www.insideoutproject.net/\">insideoutproject.net</a>",
    "duration": "0:06:31",
    "publishdate": "5/18/2012 15:05:00"
  },
  {
    "rank": 444,
    "id": "1808",
    "speaker": "Derek Paravicini, Adam Ockelford",
    "name": "Derek Paravicini and Adam Ockelford: In the key of genius",
    "shortsummary": "Born three and a half months prematurely, Derek Paravicini is blind and has severe autism. But with perfect pitch, innate talent and a lot of practice, he became an acclaimed concert pianist by the age of 10. Here, his longtime piano teacher, Adam Ockelford, explains his student's unique relationship to music, while Paravicini shows how he has ripped up the \"Chopsticks\" rule book. (<em>Filmed at TEDxWarwick.</em>)",
    "duration": "0:19:38",
    "publishdate": "8/9/2013 14:58:00"
  },
  {
    "rank": 445,
    "id": "1546",
    "speaker": "Clay Shirky",
    "name": "Clay Shirky: How the Internet will (one day) transform government",
    "shortsummary": "The open-source world has learned to deal with a flood of new, oftentimes divergent, ideas using hosting services like GitHub -- so why can't governments? In this rousing talk Clay Shirky shows how democracies can take a lesson from the Internet, to be not just transparent but also to draw on the knowledge of all their citizens.",
    "duration": "0:18:32",
    "publishdate": "9/25/2012 14:51:00"
  },
  {
    "rank": 446,
    "id": "846",
    "speaker": "Sebastian Wernicke",
    "name": "Lies, damned lies and statistics (about TEDTalks)",
    "shortsummary": "In a brilliantly tongue-in-cheek analysis, Sebastian Wernicke turns the tools of statistical analysis on TEDTalks, to come up with a metric for creating \"the optimum TEDTalk\" based on user ratings. How do you rate it? \"Jaw-dropping\"? \"Unconvincing\"? Or just plain \"Funny\"?",
    "duration": "0:05:59",
    "publishdate": "4/30/2010"
  },
  {
    "rank": 447,
    "id": "862",
    "speaker": "Richard Sears",
    "name": "Richard Sears: Planning for the end of oil",
    "shortsummary": "As the world's attention focuses on the perils of oil exploration, we present Richard Sears' talk from early February 2010. Sears, an expert in developing new energy resources, talks about our inevitable and necessary move away from oil. Toward ... what?",
    "duration": "0:09:48",
    "publishdate": "5/20/2010"
  },
  {
    "rank": 448,
    "id": "1545",
    "speaker": "Caitria O'Neill, Morgan O'Neill",
    "name": "Caitria and Morgan O'Neill: How to step up in the face of disaster",
    "shortsummary": "After a natural disaster strikes, there's only a tiny window of opportunity to rally effective recovery efforts before the world turns their attention elsewhere. Who should be in charge? When a freak tornado hit their hometown, sisters Caitria and Morgan O'Neill -- just 20 and 24 at the time -- took the reins and are now teaching others how to do the same. (<em>Filmed at TEDxBoston</em>.)",
    "duration": "0:09:23",
    "publishdate": "8/14/2012 15:04:00"
  },
  {
    "rank": 449,
    "id": "1769",
    "speaker": "Paul Pholeros",
    "name": "Paul Pholeros: How to reduce poverty? Fix homes",
    "shortsummary": "In 1985, architect Paul Pholeros was challenged by the director of an Aboriginal-controlled health service to \"stop people getting sick\" in a small indigenous community in south Australia. The key insights: think beyond medicine and fix the local environment. In this sparky, interactive talk, Pholeros describes projects undertaken by Healthabitat, the organization he now runs to help reduce poverty--through practical design fixes--in Australia and beyond. <em>(Filmed at TEDxSydney.)</em>",
    "duration": "0:17:39",
    "publishdate": "6/20/2013 15:01:00"
  },
  {
    "rank": 450,
    "id": "1672",
    "speaker": "Kakenya Ntaiya",
    "name": "Kakenya Ntaiya: A girl who demanded school",
    "shortsummary": "Kakenya Ntaiya made a deal with her father: She would undergo the traditional Maasai rite of passage of female circumcision if he would let her go to high school. Ntaiya tells the fearless story of continuing on to college, and of working with her village elders to build a school for girls in her community. It's the educational journey of one that altered the destiny of 125 young women. (<em>Filmed at TEDxMidAtlantic.</em>)",
    "duration": "0:15:16",
    "publishdate": "3/7/2013 16:02:00"
  },
  {
    "rank": 451,
    "id": "512",
    "speaker": "Shai Agassi",
    "name": "A bold plan for mass adoption of electric cars",
    "shortsummary": "Forget about the hybrid auto -- Shai Agassi says it's electric cars or bust if we want to impact emissions. His company, Better Place, has a radical plan to take entire countries oil-free by 2020.",
    "duration": "0:18:06",
    "publishdate": "4/13/2009"
  },
  {
    "rank": 452,
    "id": "1465",
    "speaker": "Seth Shostak",
    "name": "Seth Shostak: ET is (probably) out there -- get ready",
    "shortsummary": "SETI researcher Seth Shostak bets that we will find extraterrestrial life in the next twenty-four years, or he'll buy you a cup of coffee. At TEDxSanJoseCA, he explains why new technologies and the laws of probability make the breakthrough so likely -- and forecasts how the discovery of civilizations far more advanced than ours might affect us here on Earth.\n<em>(Filmed at <a href=http://www.ted.com/tedx/events/3642>TEDxSanJoseCA</a>.)</em>",
    "duration": "0:18:40",
    "publishdate": "6/2/2012 13:54:00"
  },
  {
    "rank": 453,
    "id": "1236",
    "speaker": "Yang Lan",
    "name": "Yang Lan: The generation that's remaking China",
    "shortsummary": "Yang Lan, a journalist and entrepreneur who's been called \"the Oprah of China,\" offers insight into the next generation of young Chinese citizens -- urban, connected (via microblogs) and alert to injustice.",
    "duration": "0:17:14",
    "publishdate": "10/3/2011"
  },
  {
    "rank": 454,
    "id": "1804",
    "speaker": "  Beardyman",
    "name": "Beardyman: The polyphonic me",
    "shortsummary": "Frustrated by not being able to sing two notes at the same time, musical inventor Beardyman built a machine to allow him to create loops and layers from just the sounds he makes with his voice. Given that he can effortlessly conjure the sound of everything from crying babies to buzzing flies, not to mention mimic pretty much any musical instrument imaginable, that's a lot of different sounds. Sit back and let the wall of sound of this dazzling performance wash over you.",
    "duration": "0:11:10",
    "publishdate": "8/2/2013 15:00:00"
  },
  {
    "rank": 455,
    "id": "412",
    "speaker": "Nick Sears",
    "name": "Presenting the Orb",
    "shortsummary": "Inventor Nick Sears demos the first generation of the Orb, a rotating persistence-of-vision display that creates glowing 3D images. A short, cool tale of invention. ",
    "duration": "0:03:58",
    "publishdate": "12/5/2008"
  },
  {
    "rank": 456,
    "id": "1554",
    "speaker": "Leslie T. Chang",
    "name": "Leslie T. Chang: The voices of China's workers",
    "shortsummary": "In the ongoing debate about globalization, what's been missing is the voices of workers -- the millions of people who migrate to factories in China and other emerging countries to make goods sold all over the world. Reporter Leslie T. Chang sought out women who work in one of China's booming megacities, and tells their stories.",
    "duration": "0:14:25",
    "publishdate": "9/12/2012 15:04:00"
  },
  {
    "rank": 457,
    "id": "1250",
    "speaker": "Guy-Philippe Goldstein",
    "name": "Guy-Philippe Goldstein: How cyberattacks threaten real-world peace",
    "shortsummary": "More and more, nations are waging attacks with cyber weapons -- silent strikes on another country's computer systems that leave behind no trace. (Think of the Stuxnet worm.) At TEDxParis, Guy-Philippe Goldstein shows how cyberattacks can leap between the digital and physical worlds to prompt armed conflict -- and how we might avert this global security hazard.",
    "duration": "0:09:24",
    "publishdate": "10/19/2011"
  },
  {
    "rank": 458,
    "id": "1252",
    "speaker": "Nathalie Miebach",
    "name": "Nathalie Miebach: Art made of storms",
    "shortsummary": "Artist Nathalie Miebach takes weather data from massive storms and turns it into complex sculptures that embody the forces of nature and time. These sculptures then become musical scores for a string quartet to play.",
    "duration": "0:04:19",
    "publishdate": "10/21/2011"
  },
  {
    "rank": 459,
    "id": "879",
    "speaker": "John Kasaona",
    "name": "John Kasaona: How poachers became caretakers",
    "shortsummary": "In his home of Namibia, John Kasaona is working on an innovative way to protect endangered animal species: giving nearby villagers (including former poachers) responsibility for caring for the animals. And it's working.",
    "duration": "0:15:46",
    "publishdate": "6/8/2010"
  },
  {
    "rank": 460,
    "id": "125",
    "speaker": "Jeff Hawkins",
    "name": "Brain science is about to fundamentally change computing",
    "shortsummary": "Treo creator Jeff Hawkins urges us to take a new look at the brain -- to see it not as a fast processor, but as a memory system that stores and plays back experiences to help us predict, intelligently, what will happen next.",
    "duration": "0:20:11",
    "publishdate": "5/21/2007"
  },
  {
    "rank": 461,
    "id": "1350",
    "speaker": "Stephen Coleman",
    "name": "Stephen Coleman: The moral dangers of non-lethal weapons",
    "shortsummary": "Pepper spray and tasers are in increasing use by both police and military, and more exotic non-lethal weapons such as heat rays are in the works. At TEDxCanberra, ethicist Stephen Coleman explores the unexpected consequences of their introduction and asks some challenging questions.",
    "duration": "0:17:32",
    "publishdate": "2/7/2012 16:08:00"
  },
  {
    "rank": 462,
    "id": "287",
    "speaker": "Nellie McKay",
    "name": "\"Clonie\"",
    "shortsummary": "Singer-songwriter Nellie McKay performs the semi-serious song \"Clonie\" -- about creating the ultimate companion.",
    "duration": "0:02:20",
    "publishdate": "6/27/2008"
  },
  {
    "rank": 463,
    "id": "1585",
    "speaker": "John Wilbanks",
    "name": "John Wilbanks: Let's pool our medical data",
    "shortsummary": "When you're getting medical treatment, or taking part in medical testing, privacy is important; strict laws limit what researchers can see and know about you. But what if your medical data could be used -- anonymously -- by anyone seeking to test a hypothesis? John Wilbanks wonders if the desire to protect our privacy is slowing research, and if opening up medical data could lead to a wave of health care innovation.",
    "duration": "0:16:25",
    "publishdate": "10/16/2012 15:00:00"
  },
  {
    "rank": 464,
    "id": "785",
    "speaker": "James Cameron",
    "name": "James Cameron: Before Avatar ... a curious boy",
    "shortsummary": "James Cameron's big-budget (and even bigger-grossing) films create unreal worlds all their own. In this personal talk, he reveals his childhood fascination with the fantastic -- from reading science fiction to deep-sea diving -- and how it ultimately drove the success of his blockbuster hits \"Aliens,\" \"The Terminator,\" \"Titanic\" and \"Avatar.\"",
    "duration": "0:17:08",
    "publishdate": "3/4/2010"
  },
  {
    "rank": 465,
    "id": "1165",
    "speaker": "Paul Romer",
    "name": "Paul Romer: The world's first charter city?",
    "shortsummary": "Back in 2009, Paul Romer unveiled the idea for a \"charter city\" -- a new kind of city with rules that favor democracy and trade. This year, at TED2011, he tells the story of how such a city might just happen in Honduras ... with a little help from his TEDTalk.",
    "duration": "0:09:13",
    "publishdate": "6/9/2011"
  },
  {
    "rank": 466,
    "id": "1580",
    "speaker": "Eddie Obeng",
    "name": "Eddie Obeng: Smart failure for a fast-changing world",
    "shortsummary": "The world is changing much more rapidly than most people realize, says business educator Eddie Obeng -- and creative output cannot keep up. In this spirited talk, he highlights three important changes we should understand for better productivity, and calls for a stronger culture of \"smart failure.\"",
    "duration": "0:12:37",
    "publishdate": "10/15/2012 15:00:00"
  },
  {
    "rank": 467,
    "id": "1125",
    "speaker": "Sam Richards",
    "name": "Sam Richards: A radical experiment in empathy",
    "shortsummary": "By leading the Americans in his audience at TEDxPSU step by step through the thought process, sociologist Sam Richards sets an extraordinary challenge: can they understand -- not approve of, but understand -- the motivations of an Iraqi insurgent? And by extension, can anyone truly understand and empathize with another? ",
    "duration": "0:18:07",
    "publishdate": "4/18/2011"
  },
  {
    "rank": 468,
    "id": "828",
    "speaker": "Catherine Mohr",
    "name": "Catherine Mohr builds green",
    "shortsummary": "In a short, funny, data-packed talk at TED U, Catherine Mohr walks through all the geeky decisions she made when building a green new house -- looking at real energy numbers, not hype. What choices matter most? Not the ones you think.",
    "duration": "0:06:13",
    "publishdate": "4/14/2010"
  },
  {
    "rank": 469,
    "id": "1416",
    "speaker": "Frank Warren",
    "name": "Frank Warren: Half a million secrets",
    "shortsummary": "Secrets can take many forms -- they can be shocking, or silly, or soulful. Frank Warren, the founder of PostSecret.com, shares some of the half-million secrets that strangers have mailed him on postcards.",
    "duration": "0:11:24",
    "publishdate": "4/9/2012 15:08:00"
  },
  {
    "rank": 470,
    "id": "657",
    "speaker": "David Hanson",
    "name": "David Hanson: Robots that \"show emotion\"",
    "shortsummary": "David Hanson's robot faces look and act like yours: They recognize and respond to emotion, and make expressions of their own. Here, an \"emotional\" live demo of the Einstein robot offers a peek at a future where robots truly mimic humans.",
    "duration": "0:04:58",
    "publishdate": "10/13/2009"
  },
  {
    "rank": 471,
    "id": "1115",
    "speaker": "Mick Ebeling",
    "name": "Mick Ebeling: The invention that unlocked a locked-in artist",
    "shortsummary": "The nerve disease ALS left graffiti artist TEMPT paralyzed from head to toe, forced to communicate blink by blink. In a remarkable talk at TEDActive, entrepreneur Mick Ebeling shares how he and a team of collaborators built an open-source invention that gave the artist -- and gives others in his circumstance -- the means to make art again.",
    "duration": "0:07:49",
    "publishdate": "4/7/2011"
  },
  {
    "rank": 472,
    "id": "1711",
    "speaker": "Eric Dishman",
    "name": "Eric Dishman: Health care should be a team sport",
    "shortsummary": "When Eric Dishman was in college, doctors told him he had 2 to 3 years to live. That was a long time ago. Now, Dishman puts his experience and his expertise as a medical tech specialist together to suggest a bold idea for reinventing health care -- by putting the patient at the center of a treatment team.Â (<em>Filmed at TED@Intel</em>)",
    "duration": "0:15:59",
    "publishdate": "4/11/2013 14:54:00"
  },
  {
    "rank": 473,
    "id": "147",
    "speaker": "David Bolinsky",
    "name": "Fantastic voyage inside a cell",
    "shortsummary": "Medical animator David Bolinsky presents 3 minutes of stunning animation that show the bustling life inside a cell.",
    "duration": "0:09:45",
    "publishdate": "7/22/2007"
  },
  {
    "rank": 474,
    "id": "1703",
    "speaker": "Kees Moeliker",
    "name": "Kees Moeliker: How a dead duck changed my life",
    "shortsummary": "One afternoon, Kees Moeliker got a research opportunity few ornithologists would wish for: A flying duck slammed into his glass office building, died, and then â€¦ what happened next would change his life. [Note: Contains graphic images and descriptions of sexual behavior in animals.]",
    "duration": "0:11:52",
    "publishdate": "4/1/2013 13:21:00"
  },
  {
    "rank": 475,
    "id": "818",
    "speaker": "Elizabeth Pisani",
    "name": "Elizabeth Pisani: Sex, drugs and HIV -- let's get rational",
    "shortsummary": "Armed with bracing logic, wit and her \"public-health nerd\" glasses, Elizabeth Pisani reveals the myriad of inconsistencies in today's political systems that prevent our dollars from effectively fighting the spread of HIV. Her research with at-risk populations -- from junkies in prison to sex workers on the street in Cambodia -- demonstrates the sometimes counter-intuitive measures that could stall the spread of this devastating disease.",
    "duration": "0:19:14",
    "publishdate": "4/5/2010"
  },
  {
    "rank": 476,
    "id": "1445",
    "speaker": "Bart Knols",
    "name": "Bart Knols: Cheese, dogs, and pills to end malaria",
    "shortsummary": "We can use a mosquito's own instincts against her. At TEDxMaastricht speaker Bart Knols demos the imaginative solutions his team is developing to fight malaria -- including limburger cheese and a deadly pill.",
    "duration": "",
    "publishdate": "5/13/2012 14:03:00"
  },
  {
    "rank": 477,
    "id": "1489",
    "speaker": "Nirmalya Kumar",
    "name": "Nirmalya Kumar: India's invisible innovation",
    "shortsummary": "Can India become a global hub for innovation? Nirmalya Kumar thinks it already has. He details four types of \"invisible innovation\" currently coming out of India and explains why companies that used to just outsource manufacturing jobs are starting to move top management positions overseas, too. <em>(Filmed at <a href=http://www.ted.com/tedx/events/2495>TEDxLondonBusinessSchool</a>.)</em>",
    "duration": "0:15:12",
    "publishdate": "6/24/2012 14:00:00"
  },
  {
    "rank": 478,
    "id": "1640",
    "speaker": "Andy Puddicombe",
    "name": "Andy Puddicombe: All it takes is 10 mindful minutes",
    "shortsummary": "When is the last time you did absolutely nothing for 10 whole minutes? Not texting, talking or even thinking? Mindfulness expert Andy Puddicombe describes the transformative power of doing just that: Refreshing your mind for 10 minutes a day, simply by being mindful and experiencing the present moment. (No need for incense or sitting in uncomfortable positions.)",
    "duration": "0:09:24",
    "publishdate": "1/11/2013 15:58:00"
  },
  {
    "rank": 479,
    "id": "792",
    "speaker": "Eric Mead",
    "name": "Eric Mead: The magic of the placebo",
    "shortsummary": "Sugar pills, injections of nothing -- studies show that, more often than you'd expect, placebos really work. At TEDMED, magician Eric Mead does a trick to prove that, even when you know something's not real, you can still react as powerfully as if it is. (Warning: This talk is not suitable for viewers who are disturbed by needles or blood.)",
    "duration": "0:09:05",
    "publishdate": "3/12/2010"
  },
  {
    "rank": 480,
    "id": "249",
    "speaker": "Ernest Madu",
    "name": "Bringing world-class health care to the poorest",
    "shortsummary": "Dr. Ernest Madu runs the Heart Institute of the Caribbean in Kingston, Jamaica, where he proves that -- with careful design, smart technical choices, and a true desire to serve -- it's possible to offer world-class healthcare in the developing world.",
    "duration": "0:16:43",
    "publishdate": "4/17/2008"
  },
  {
    "rank": 481,
    "id": "1367",
    "speaker": "Shlomo Benartzi",
    "name": "Shlomo Benartzi: Saving for tomorrow, tomorrow",
    "shortsummary": "It's easy to imagine saving money next week, but how about right now? Generally, we want to spend it. Economist Shlomo Benartzi says this is one of the biggest obstacles to saving enough for retirement, and asks: How do we turn this behavioral challenge into a behavioral solution?",
    "duration": "0:17:45",
    "publishdate": "2/23/2012 16:40:00"
  },
  {
    "rank": 482,
    "id": "1671",
    "speaker": "Miguel Nicolelis",
    "name": "Miguel Nicolelis: A monkey that controls a robot with its thoughts. No, really.",
    "shortsummary": "Can we use our brains to directly control machines -- without requiring a body as the middleman? Miguel Nicolelis talks through an astonishing experiment, in which a clever monkey in the US learns to control a monkey avatar, and then a robot arm in Japan, purely with its thoughts. The research has big implications for quadraplegic people -- and maybe for all of us. <i>(Filmed at TEDMED 2012.)</i>",
    "duration": "0:14:55",
    "publishdate": "2/18/2013 16:11:00"
  },
  {
    "rank": 483,
    "id": "1447",
    "speaker": "Tali Sharot",
    "name": "Tali Sharot: The optimism bias",
    "shortsummary": "Are we born to be optimistic, rather than realistic? Tali Sharot shares new research that suggests our brains are wired to look on the bright side -- and how that can be both dangerous and beneficial.",
    "duration": "0:17:40",
    "publishdate": "5/14/2012 15:10:00"
  },
  {
    "rank": 484,
    "id": "1381",
    "speaker": "Jennifer Pahlka",
    "name": "Jennifer Pahlka: Coding a better government",
    "shortsummary": "Can government be run like the Internet, permissionless and open? Coder and activist Jennifer Pahlka believes it can -- and that apps, built quickly and cheaply, are a powerful new way to connect citizens to their governments -- and their neighbors.",
    "duration": "0:12:11",
    "publishdate": "3/8/2012 16:07:00"
  },
  {
    "rank": 485,
    "id": "451",
    "speaker": "Bill Gates",
    "name": "How I'm trying to change the world now",
    "shortsummary": "Bill Gates hopes to solve some of the world's biggest problems using a new kind of philanthropy. In a passionate and, yes, funny 18 minutes, he asks us to consider two big questions and how we might answer them. (And see the Q&A on the TED Blog.)",
    "duration": "0:20:16",
    "publishdate": "2/5/2009"
  },
  {
    "rank": 486,
    "id": "128",
    "speaker": "John Doerr",
    "name": "Seeking salvation and profit in greentech",
    "shortsummary": "\"I don't think we're going to make it,\" John Doerr proclaims, in an emotional talk about climate change and investment. Spurred on by his daughter, who demanded he fix the mess the world is heading for, he and his partners.",
    "duration": "0:17:52",
    "publishdate": "5/27/2007"
  },
  {
    "rank": 487,
    "id": "692",
    "speaker": "Fields Wicker-Miurin",
    "name": "Fields Wicker-Miurin: Learning from leadership's \"missing manual\"",
    "shortsummary": "Leadership doesn't have a user's manual, but Fields Wicker-Miurin says stories of remarkable, local leaders are the next best thing. At a TED salon in London, she shares three.",
    "duration": "0:16:35",
    "publishdate": "11/18/2009"
  },
  {
    "rank": 488,
    "id": "1815",
    "speaker": "Kelly McGonigal",
    "name": "Kelly McGonigal: How to make stress your friend",
    "shortsummary": "Stress. It makes your heart pound, your breathing quicken and your forehead sweat. But while stress has been made into a public health enemy, new research suggests that stress may only be bad for you if you believe that to be the case. Psychologist Kelly McGonigal urges us to see stress as a positive, and introduces us to an unsung mechanism for stress reduction: reaching out to others.",
    "duration": "0:14:28",
    "publishdate": "9/4/2013 14:59:00"
  },
  {
    "rank": 489,
    "id": "1184",
    "speaker": "Nathan Myhrvold",
    "name": "Nathan Myhrvold: Cooking as never seen before",
    "shortsummary": "Cookbook author (and geek) Nathan Myhrvold talks about his magisterial work, \"Modernist Cuisine\" -- and shares the secret of its cool photographic illustrations, which show cross-sections of food in the very act of being cooked.",
    "duration": "0:10:05",
    "publishdate": "7/5/2011"
  },
  {
    "rank": 490,
    "id": "220",
    "speaker": "Joseph Lekuton",
    "name": "A parable for Kenya",
    "shortsummary": "Joseph Lekuton, a member of parliament in Kenya, starts with the story of his remarkable education, then offers a parable of how Africa can grow. His message of hope has never been more relevant.",
    "duration": "0:05:26",
    "publishdate": "2/25/2008"
  },
  {
    "rank": 491,
    "id": "773",
    "speaker": "Temple Grandin",
    "name": "Temple Grandin: The world needs all kinds of minds",
    "shortsummary": "Temple Grandin, diagnosed with autism as a child, talks about how her mind works -- sharing her ability to \"think in pictures,\" which helps her solve problems that neurotypical brains might miss. She makes the case that the world needs people on the autism spectrum: visual thinkers, pattern thinkers, verbal thinkers, and all kinds of smart geeky kids.",
    "duration": "0:19:43",
    "publishdate": "2/24/2010"
  },
  {
    "rank": 492,
    "id": "1469",
    "speaker": "Terry Moore",
    "name": "Terry Moore: Why is 'x' the unknown?",
    "shortsummary": "Why is 'x' the symbol for an unknown? In this short and funny talk, Terry Moore gives the surprising answer.",
    "duration": "0:03:57",
    "publishdate": "6/6/2012 15:00:00"
  },
  {
    "rank": 493,
    "id": "1301",
    "speaker": "Monika Bulaj",
    "name": "Monika Bulaj: The hidden light of Afghanistan",
    "shortsummary": "Photographer Monika Bulaj shares powerful, intimate images of Afghanistan -- of home life, of ritual, of men and women. Behind the headlines, what does the world truly know about this place?",
    "duration": "0:04:44",
    "publishdate": "12/12/2011"
  },
  {
    "rank": 494,
    "id": "492",
    "speaker": "Saul Griffith",
    "name": "Inventing a super-kite to tap the energy of high-altitude wind",
    "shortsummary": "In this brief talk, Saul Griffith unveils the invention his new company Makani Power has been working on: giant kite turbines that create surprising amounts of clean, renewable energy.",
    "duration": "0:05:25",
    "publishdate": "3/23/2009"
  },
  {
    "rank": 495,
    "id": "1427",
    "speaker": "Michael Norton",
    "name": "Michael Norton: How to buy happiness",
    "shortsummary": "At TEDxCambridge, Michael Norton shares fascinating research on how money can, indeed buy happiness -- when you don't spend it on yourself. Listen for surprising data on the many ways pro-social spending can benefit you, your work, and (of course) other people.",
    "duration": "0:10:58",
    "publishdate": "4/24/2012 15:17:00"
  },
  {
    "rank": 496,
    "id": "279",
    "speaker": "Chris Jordan",
    "name": "Picturing excess",
    "shortsummary": "Artist Chris Jordan shows us an arresting view of what Western culture looks like. His supersized images picture some almost unimaginable statistics -- like the astonishing number of paper cups we use every single day.",
    "duration": "0:11:14",
    "publishdate": "6/15/2008"
  },
  {
    "rank": 497,
    "id": "1342",
    "speaker": "Peter van Uhm",
    "name": "Peter van Uhm: Why I chose a gun",
    "shortsummary": "Peter van Uhm is the Netherlands' chief of defense, but that does not mean he is pro-war. At TEDxAmsterdam he explains how his career is one shaped by a love of peace, not a desire for bloodshed -- and why we need armies if we want peace.",
    "duration": "0:17:10",
    "publishdate": "1/30/2012 15:51:00"
  },
  {
    "rank": 498,
    "id": "1282",
    "speaker": "Joe Sabia",
    "name": "Joe Sabia: The technology of storytelling",
    "shortsummary": "iPad storyteller Joe Sabia introduces us to Lothar Meggendorfer, who created a bold technology for storytelling: the pop-up book. Sabia shows how new technology has always helped us tell our own stories, from the walls of caves to his own onstage iPad. \n",
    "duration": "0:03:51",
    "publishdate": "11/23/2011"
  },
  {
    "rank": 499,
    "id": "641",
    "speaker": "Evgeny Morozov",
    "name": "Evgeny Morozov: How the Net aids dictatorships",
    "shortsummary": "TED Fellow and journalist Evgeny Morozov punctures what he calls \"iPod liberalism\" -- the assumption that tech innovation always promotes freedom, democracy -- with chilling examples of ways the Internet helps oppressive regimes stifle dissent.",
    "duration": "0:11:53",
    "publishdate": "9/22/2009"
  },
  {
    "rank": 500,
    "id": "1656",
    "speaker": "Wingham Rowan",
    "name": "Wingham Rowan: A new kind of job market",
    "shortsummary": "Plenty of people need jobs with very flexible hours -- but it's difficult for those people to connect with the employers who need them. Wingham Rowan is working on that. He explains how the same technology that powers modern financial markets can help employers book workers for slivers of time.",
    "duration": "0:12:20",
    "publishdate": "1/28/2013 16:14:00"
  },
  {
    "rank": 501,
    "id": "1438",
    "speaker": "Tavi Gevinson",
    "name": "Tavi Gevinson: A teen just trying to figure it out",
    "shortsummary": "Fifteen-year-old Tavi Gevinson had a hard time finding strong female, teenage role models -- so she built a space where they could find each other. At TEDxTeen, she illustrates how the conversations on sites like Rookie, her wildly popular web magazine for and by teen girls, are putting a new, unapologetically uncertain and richly complex face on modern feminism.",
    "duration": "",
    "publishdate": "5/5/2012 13:58:00"
  },
  {
    "rank": 502,
    "id": "935",
    "speaker": "Maz Jobrani",
    "name": "Maz Jobrani: Did you hear the one about the Iranian-American?",
    "shortsummary": "A founding member of the Axis of Evil Comedy Tour, standup comic Maz Jobrani riffs on the challenges and conflicts of being Iranian-American -- \"like, part of me thinks I should have a nuclear program; the other part thinks I can't be trusted ...\"",
    "duration": "0:09:14",
    "publishdate": "8/19/2010"
  },
  {
    "rank": 503,
    "id": "682",
    "speaker": "Rachel Pike",
    "name": "Rachel Pike: The science behind a climate headline",
    "shortsummary": "In 4 minutes, atmospheric chemist Rachel Pike provides a glimpse of the massive scientific effort behind the bold headlines on climate change, with her team -- one of thousands who contributed -- taking a risky flight over the rainforest in pursuit of data on a key molecule.",
    "duration": "0:04:13",
    "publishdate": "11/10/2009"
  },
  {
    "rank": 504,
    "id": "566",
    "speaker": "John La Grou",
    "name": "John La Grou plugs smart power outlets",
    "shortsummary": "John La Grou unveils an ingenious new technology that will smarten up the electrical outlets in our homes, using microprocessors and RFID tags. The invention, Safeplug, promises to prevent deadly accidents like house fires -- and to conserve energy.",
    "duration": "0:04:12",
    "publishdate": "6/9/2009"
  },
  {
    "rank": 505,
    "id": "1425",
    "speaker": "Christina Warinner",
    "name": "Christina Warinner: Tracking ancient diseases using ... plaque",
    "shortsummary": "Imagine what we could learn about diseases by studying the history of human disease, from ancient hominids to the present. But how? TED Fellow Christina Warinner is an achaeological geneticist, and she's found a spectacular new tool -- the microbial DNA in fossilized dental plaque.",
    "duration": "0:05:31",
    "publishdate": "4/20/2012 15:13:00"
  },
  {
    "rank": 506,
    "id": "1524",
    "speaker": "Rob Legato",
    "name": "Rob Legato: The art of creating awe",
    "shortsummary": "Rob Legato creates movie effects so good they (sometimes) trump the real thing. In this warm and funny talk, he shares his vision for enhancing reality on-screen in movies like <em>Apollo 13,</em> <em>Titanic</em> and <em>Hugo.</em>",
    "duration": "0:16:27",
    "publishdate": "8/17/2012 15:01:00"
  },
  {
    "rank": 507,
    "id": "1462",
    "speaker": "Dalia Mogahed",
    "name": "Dalia Mogahed: The attitudes that sparked Arab Spring",
    "shortsummary": "Pollster Dalia Mogahed shares surprising data on Egyptian people's attitudes and hopes before the Arab Spring -- with a special focus on the role of women in sparking change.",
    "duration": "0:14:32",
    "publishdate": "5/30/2012 15:25:00"
  },
  {
    "rank": 508,
    "id": "799",
    "speaker": "Jane McGonigal",
    "name": "Jane McGonigal: Gaming can make a better world",
    "shortsummary": "Games like World of Warcraft give players the means to save worlds, and incentive to learn the habits of heroes. What if we could harness this gamer power to solve real-world problems? Jane McGonigal says we can, and explains how.",
    "duration": "0:20:03",
    "publishdate": "3/17/2010"
  },
  {
    "rank": 509,
    "id": "358",
    "speaker": "Noah Feldman",
    "name": "Politics and religion are technologies",
    "shortsummary": "Noah Feldman makes a searing case that both politics and religion -- whatever their differences -- are similar technologies, designed to efficiently connect and manage any group of people. ",
    "duration": "0:15:07",
    "publishdate": "10/1/2008"
  },
  {
    "rank": 510,
    "id": "1664",
    "speaker": "Edi Rama",
    "name": "Edi Rama: Take back your city with paint",
    "shortsummary": "Make a city beautiful, curb corruption. Edi Rama took this deceptively simple path as mayor of Tirana, Albania, where he instilled pride in his citizens by transforming public spaces with colorful designs. With projects that put the people first, Rama decreased crime -- and showed his citizens they could have faith in their leaders. <em>(Filmed at TEDxThessaloniki.)</em>",
    "duration": "0:15:42",
    "publishdate": "2/8/2013 16:10:00"
  },
  {
    "rank": 511,
    "id": "831",
    "speaker": "Thelma Golden",
    "name": "Thelma Golden: How art gives shape to cultural change",
    "shortsummary": "Thelma Golden, curator at the Studio Museum in Harlem, talks through three recent shows that explore how art examines and redefines culture. The \"post-black\" artists she works with are using their art to provoke a new dialogue about race and culture -- and about the meaning of art itself.",
    "duration": "0:12:28",
    "publishdate": "4/16/2010"
  },
  {
    "rank": 512,
    "id": "709",
    "speaker": "Thulasiraj Ravilla",
    "name": "Thulasiraj Ravilla: How low-cost eye care can be world-class",
    "shortsummary": "India's revolutionary Aravind Eye Care System has given sight to millions. Thulasiraj Ravilla looks at the ingenious approach that drives its treatment costs down and quality up, and why its methods should trigger a re-think of all human services.",
    "duration": "0:17:27",
    "publishdate": "12/9/2009"
  },
  {
    "rank": 513,
    "id": "714",
    "speaker": "Alexis Ohanian",
    "name": "Alexis Ohanian: How to make a splash in social media",
    "shortsummary": "In a funny, rapid-fire 4 minutes, Alexis Ohanian of Reddit tells the real-life fable of one humpback whale's rise to Web stardom. The lesson of Mister Splashy Pants is a shoo-in classic for meme-makers and marketers in the Facebook age.",
    "duration": "0:04:26",
    "publishdate": "12/15/2009"
  },
  {
    "rank": 514,
    "id": "1215",
    "speaker": "Skylar Tibbits",
    "name": "Skylar Tibbits: Can we make things that make themselves?",
    "shortsummary": "MIT researcher Skylar Tibbits works on self-assembly -- the idea that instead of building something (a chair, a skyscraper), we can create materials that build themselves, much the way a strand of DNA zips itself together. It's a big concept at early stages; Tibbits shows us three in-the-lab projects that hint at what a self-assembling future might look like.",
    "duration": "0:06:04",
    "publishdate": "9/1/2011"
  },
  {
    "rank": 515,
    "id": "1573",
    "speaker": "Read Montague",
    "name": "Read Montague: What we're learning from 5,000 brains",
    "shortsummary": "Mice, bugs and hamsters are no longer the only way to study the brain. Functional MRI (fMRI) allows scientists to map brain activity in living, breathing, decision-making human beings. Read Montague gives an overview of how this technology is helping us understand the complicated ways in which we interact with each other.",
    "duration": "0:13:23",
    "publishdate": "9/24/2012 15:02:00"
  },
  {
    "rank": 516,
    "id": "1345",
    "speaker": "Erica Frenkel",
    "name": "Erica Frenkel: The universal anesthesia machine",
    "shortsummary": "What if you're in surgery and the power goes out? No lights, no oxygen -- and your anesthesia stops flowing. It happens constantly in hospitals throughout the world, turning routine procedures into tragedies. Erica Frenkel demos one solution: the universal anesthesia machine.",
    "duration": "0:11:23",
    "publishdate": "2/2/2012 16:28:00"
  },
  {
    "rank": 517,
    "id": "333",
    "speaker": "Jonathan Drori",
    "name": "Why we don't understand as much as we think we do",
    "shortsummary": "Starting with four basic questions (that you may be surprised to find you can't answer), Jonathan Drori looks at the gaps in our knowledge -- and specifically, what we don't about science that we might think we do.",
    "duration": "0:12:28",
    "publishdate": "9/5/2008"
  },
  {
    "rank": 518,
    "id": "1311",
    "speaker": "Alberto Cairo",
    "name": "Alberto Cairo: There are no scraps of men",
    "shortsummary": "Alberto Cairo's clinics in Afghanistan used to close down during active fighting. Now, they stay open. At TEDxRC2 (the RC stands for Red Cross/Red Crescent), Cairo tells the powerful story of why -- and how he found humanity and dignity in the midst of war.",
    "duration": "0:19:02",
    "publishdate": "12/23/2011"
  },
  {
    "rank": 519,
    "id": "705",
    "speaker": "Scott Kim",
    "name": "Scott Kim takes apart the art of puzzles",
    "shortsummary": "At the 2008 EG conference, famed puzzle designer Scott Kim takes us inside the puzzle-maker's frame of mind. Sampling his career's work, he introduces a few of the most popular types, and shares the fascinations that inspired some of his best.",
    "duration": "0:11:49",
    "publishdate": "12/4/2009"
  },
  {
    "rank": 520,
    "id": "1746",
    "speaker": "Peter Singer",
    "name": "Peter Singer: The why and how of effective altruism",
    "shortsummary": "If you're lucky enough to live without want, it's a natural impulse to be altruistic to others. But, asks philosopher Peter Singer, what's the most effective way to give? He talks through some surprising thought experiments to help you balance emotion and practicality -- and make the biggest impact with whatever you can share. NOTE: Starting at 0:30, this talk contains 30 seconds of graphic footage.",
    "duration": "0:17:19",
    "publishdate": "5/20/2013 15:23:00"
  },
  {
    "rank": 521,
    "id": "1269",
    "speaker": "Charlie Todd",
    "name": "Charlie Todd: The shared experience of absurdity",
    "shortsummary": "Charlie Todd causes bizarre, hilarious, and unexpected public scenes: Seventy synchronized dancers in storefront windows, \"ghostbusters\" running through the New York Public Library, and the annual no-pants subway ride. At TEDxBloomington he shows how his group, Improv Everywhere, uses these scenes to bring people together.",
    "duration": "0:12:04",
    "publishdate": "11/11/2011"
  },
  {
    "rank": 522,
    "id": "484",
    "speaker": "Tim Berners-Lee",
    "name": "The next Web of open, linked data",
    "shortsummary": "20 years ago, Tim Berners-Lee invented the World Wide Web. For his next project, he's building a web for open, linked data that could do for numbers what the Web did for words, pictures, video: unlock our data and reframe the way we use it together.",
    "duration": "0:16:23",
    "publishdate": "3/13/2009"
  },
  {
    "rank": 523,
    "id": "1200",
    "speaker": "Julian Treasure",
    "name": "Julian Treasure: 5 ways to listen better",
    "shortsummary": "In our louder and louder world, says sound expert Julian Treasure, \"We are losing our listening.\" In this short, fascinating talk, Treasure shares five ways to re-tune your ears for conscious listening -- to other people and the world around you.",
    "duration": "0:07:50",
    "publishdate": "7/29/2011"
  },
  {
    "rank": 524,
    "id": "723",
    "speaker": "Bertrand Piccard",
    "name": "Bertrand Piccard's solar-powered adventure",
    "shortsummary": "For the dawn of a new decade, adventurer Bertrand Piccard offers us a challenge: Find motivation in what seems impossible. He shares his own plans to do what many say can't be done -- to fly around the world, day and night, in a solar-powered aircraft.",
    "duration": "0:17:46",
    "publishdate": "1/1/2010"
  },
  {
    "rank": 525,
    "id": "518",
    "speaker": "Matthew Childs",
    "name": "Matthew Childs' 9 life lessons from rock climbing",
    "shortsummary": "In this talk from TED University 2009, veteran rock climber Matthew Childs shares nine pointers for rock climbing. These handy tips bear on an effective life at sea level, too.",
    "duration": "0:04:48",
    "publishdate": "4/17/2009"
  },
  {
    "rank": 526,
    "id": "1809",
    "speaker": "Shigeru Ban",
    "name": "Shigeru Ban: Emergency shelters made from paper",
    "shortsummary": "Long before sustainability became a buzzword, architect Shigeru Ban had begun his experiments with ecologically-sound building materials such as cardboard tubes and paper. His remarkable structures are often intended as temporary housing, designed to help the dispossessed in disaster-struck nations such as Haiti, Rwanda or Japan. Yet equally often the buildings remain a beloved part of the landscape long after they have served their intended purpose. (<em>Filmed at TEDxTokyo.</em>)",
    "duration": "0:11:42",
    "publishdate": "8/13/2013 15:00:00"
  },
  {
    "rank": 527,
    "id": "1496",
    "speaker": "Marc Goodman",
    "name": "Marc Goodman: A vision of crimes in the future",
    "shortsummary": "The world is becoming increasingly open, and that has implications both bright and dangerous. Marc Goodman paints a portrait of a grave future, in which technology's rapid development could allow crime to take a turn for the worse.",
    "duration": "0:19:25",
    "publishdate": "7/12/2012 15:08:00"
  },
  {
    "rank": 528,
    "id": "103",
    "speaker": "Evelyn Glennie",
    "name": "How to listen to music with your whole body",
    "shortsummary": "In this soaring demonstration, deaf percussionist Evelyn Glennie illustrates how listening to music involves much more than simply letting sound waves hit your eardrums.",
    "duration": "0:32:09",
    "publishdate": "4/6/2007"
  },
  {
    "rank": 529,
    "id": "878",
    "speaker": "Michael Sandel",
    "name": "Michael Sandel: The lost art of democratic debate",
    "shortsummary": "Democracy thrives on civil debate, Michael Sandel  says -- but we're shamefully out of practice. He leads a fun refresher, with TEDsters sparring over a recent Supreme Court case (PGA Tour, Inc. v. Martin) whose outcome reveals the critical ingredient in justice.",
    "duration": "0:19:42",
    "publishdate": "6/7/2010"
  },
  {
    "rank": 530,
    "id": "1583",
    "speaker": "Vicki Arroyo",
    "name": "Vicki Arroyo: Let's prepare for our new climate",
    "shortsummary": "As Vicki Arroyo says, it's time to prepare our homes and cities for our changing climate, with its increased risk of flooding, drought and uncertainty. She illustrates this inspiring talk with bold projects from cities all over the world -- local examples of thinking ahead. <a href=\"http://www.ted.com/conversations/14186/live_chat_with_ted_speaker_vic.html\">Read our Q&A with Vicki Arroyo.</a>",
    "duration": "0:14:36",
    "publishdate": "9/30/2012 14:00:00"
  },
  {
    "rank": 531,
    "id": "598",
    "speaker": "Stewart Brand",
    "name": "Stewart Brand proclaims 4 environmental 'heresies'",
    "shortsummary": "The man who helped usher in the environmental movement in the 1960s and '70s has been rethinking his positions on cities, nuclear power, genetic modification and geo-engineering. This talk at the US State Department is a foretaste of his major new book, sure to provoke widespread debate.",
    "duration": "0:16:42",
    "publishdate": "7/13/2009"
  },
  {
    "rank": 532,
    "id": "853",
    "speaker": "Nathan Myhrvold",
    "name": "Nathan Myhrvold: Could this laser zap malaria?",
    "shortsummary": "Nathan Myhrvold and team's latest inventions -- as brilliant as they are bold -- remind us that the world needs wild creativity to tackle big problems like malaria. And just as that idea sinks in, he rolls out a live demo of a new, mosquito-zapping gizmo you have to see to believe.",
    "duration": "0:16:58",
    "publishdate": "5/11/2010"
  },
  {
    "rank": 533,
    "id": "194",
    "speaker": "Murray Gell-Mann",
    "name": "Beauty and truth in physics",
    "shortsummary": "Armed with a sense of humor and laypeople's terms, Nobel winner Murray Gell-Mann drops some knowledge on TEDsters about particle physics, asking questions like, Are elegant equations more likely to be right than inelegant ones? ",
    "duration": "0:16:02",
    "publishdate": "12/6/2007"
  },
  {
    "rank": 534,
    "id": "1581",
    "speaker": "Ryan Merkley",
    "name": "Ryan Merkley: Online video -- annotated, remixed and popped",
    "shortsummary": "Videos on the web should work like the web itself: Dynamic, full of links, maps and information that can be edited and updated live, says Mozilla Foundation COO Ryan Merkley. On the TED stage he demos Popcorn Maker, a new web-based tool for easy video remixing. (<a href=\"http://on.ted.com/PlayWithPopcorn\">Watch a remixed TEDTalk using Popcorn Maker</a> -- and remix it yourself.)",
    "duration": "0:04:25",
    "publishdate": "10/19/2012 15:00:00"
  },
  {
    "rank": 535,
    "id": "1049",
    "speaker": "Jody Williams",
    "name": "Jody Williams: A realistic vision for world peace",
    "shortsummary": "Nobel Peace laureate Jody Williams brings tough love to the dream of world peace, with her razor-sharp take on what \"peace\" really means, and a set of profound stories that zero in on the creative struggle -- and sacrifice -- of those who work for it.",
    "duration": "0:10:52",
    "publishdate": "1/10/2011"
  },
  {
    "rank": 536,
    "id": "1587",
    "speaker": "Beau Lotto, Amy O'Toole",
    "name": "Beau Lotto + Amy O'Toole: Science is for everyone, kids included",
    "shortsummary": "What do science and play have in common? Neuroscientist Beau Lotto thinks all people (kids included) should participate in science and, through the process of discovery, change perceptions. He's seconded by 12-year-old Amy O'Toole, who, along with 25 of her classmates, published the first peer-reviewed article by schoolchildren, about the Blackawton bees project. It starts: \"Once upon a time ... \"",
    "duration": "0:15:25",
    "publishdate": "10/17/2012 15:13:00"
  },
  {
    "rank": 537,
    "id": "563",
    "speaker": "Pete Alcorn",
    "name": "Pete Alcorn on the world in 2200",
    "shortsummary": "In this short, optimistic talk from TED2009, Pete Alcorn shares a vision of the world of two centuries from now -- when declining populations and growing opportunity prove Malthus was wrong.",
    "duration": "0:03:50",
    "publishdate": "6/8/2009"
  },
  {
    "rank": 538,
    "id": "1512",
    "speaker": "Neil Harbisson",
    "name": "Neil Harbisson: I listen to color",
    "shortsummary": "Artist Neil Harbisson was born completely color blind, but these days a device attached to his head turns color into audible frequencies. Instead of seeing a world in grayscale, Harbisson can <em>hear</em> a symphony of color -- and yes, even listen to faces and paintings.",
    "duration": "0:09:35",
    "publishdate": "7/20/2012 15:00:00"
  },
  {
    "rank": 539,
    "id": "250",
    "speaker": "Amy Tan",
    "name": "Where does creativity hide?",
    "shortsummary": "Novelist Amy Tan digs deep into the creative process, looking for hints of how hers evolved.",
    "duration": "0:22:52",
    "publishdate": "4/22/2008"
  },
  {
    "rank": 540,
    "id": "691",
    "speaker": "Mathieu Lehanneur",
    "name": "Mathieu Lehanneur demos science-inspired design",
    "shortsummary": "Naming science as his chief inspiration, Mathieu Lehanneur shows a selection of his ingenious designs -- an interactive noise-neutralizing ball, an antibiotic course in one layered pill, asthma treatment that reminds kids to take it, a living air filter, a living-room fish farm and more.",
    "duration": "0:18:04",
    "publishdate": "11/17/2009"
  },
  {
    "rank": 541,
    "id": "1507",
    "speaker": "Todd Humphreys",
    "name": "Todd Humphreys: How to fool a GPS",
    "shortsummary": "Todd Humphreys forecasts the near-future of geolocation when millimeter-accurate GPS \"dots\" will enable you to find pin-point locations, index-search your physical possessions ... or to track people without their knowledge. And the response to the sinister side of this technology may have unintended consequences of its own. <em>(Filmed at <a href=http://www.ted.com/tedx/events/6153>TEDxAustin</a>.)</em>",
    "duration": "0:15:45",
    "publishdate": "7/14/2012 13:58:00"
  },
  {
    "rank": 542,
    "id": "976",
    "speaker": "Stefano Mancuso",
    "name": "Stefano Mancuso: The roots of plant intelligence",
    "shortsummary": "Plants behave in some oddly intelligent ways: fighting predators, maximizing food opportunities ... But can we think of them as actually having a form of intelligence of their own? Italian botanist Stefano Mancuso presents intriguing evidence.",
    "duration": "0:13:50",
    "publishdate": "10/11/2010"
  },
  {
    "rank": 543,
    "id": "1478",
    "speaker": "LZ Granderson",
    "name": "LZ Granderson: The myth of the gay agenda",
    "shortsummary": "In a humorous talk with an urgent message, LZ Granderson points out the absurdity in the idea that there's a \"gay lifestyle,\" much less a \"gay agenda.\" <em>(Filmed at <a href=http://www.ted.com/tedx/events/3082>TEDxGrandRapids</a>.)</em>",
    "duration": "0:17:51",
    "publishdate": "6/15/2012 14:59:00"
  },
  {
    "rank": 544,
    "id": "1655",
    "speaker": "Tyler DeWitt",
    "name": "Tyler DeWitt: Hey science teachers -- make it fun",
    "shortsummary": "High school science teacher Tyler DeWitt was ecstatic about a lesson plan on bacteria (how cool!) -- and devastated when his students hated it. The problem was the textbook: it was impossible to understand. He delivers a rousing call for science teachers to ditch the jargon and extreme precision, and instead make science sing through stories and demonstrations. (<em>Filmed at TEDxBeaconStreet.</em>)",
    "duration": "0:11:20",
    "publishdate": "2/5/2013 16:02:00"
  },
  {
    "rank": 545,
    "id": "1516",
    "speaker": "Vinay Venkatraman",
    "name": "Vinay Venkatraman: \"Technology crafts\" for the digitally underserved",
    "shortsummary": "Two-thirds of the world may not have access to the latest smartphone, but local electronic shops are  adept at fixing older tech using low-cost parts. Vinay Venkatraman explains his work in \"technology crafts,\" through which a mobile phone, a lunchbox and a flashlight can become a digital projector for a village school, or an alarm clock and a mouse can be melded into a medical device for local triage.",
    "duration": "0:14:08",
    "publishdate": "7/22/2012 14:59:00"
  },
  {
    "rank": 546,
    "id": "1193",
    "speaker": "Thandie Newton",
    "name": "Thandie Newton: Embracing otherness, embracing myself",
    "shortsummary": "Actor Thandie Newton tells the story of finding her \"otherness\" -- first, as a child growing up in two distinct cultures, and then as an actor playing with many different selves. A warm, wise talk, fresh from stage at TEDGlobal 2011.",
    "duration": "0:13:55",
    "publishdate": "7/20/2011"
  },
  {
    "rank": 547,
    "id": "765",
    "speaker": "Jamie Oliver",
    "name": "Jamie Oliver's TED Prize wish: Teach every child about food",
    "shortsummary": "The way we eat in the developed world is causing needless death -- and shortening the lives of the next generation of kids. Sharing powerful stories from his anti-obesity project in Huntington, W. Va., Jamie Oliver makes the case for an all-out assault on our ignorance of food.",
    "duration": "0:21:53",
    "publishdate": "2/11/2010"
  },
  {
    "rank": 548,
    "id": "1238",
    "speaker": "Graham Hill",
    "name": "Graham Hill: Less stuff, more happiness",
    "shortsummary": "Writer and designer Graham Hill asks: Can having less stuff, in less room, lead to more happiness? He makes the case for taking up less space, and lays out three rules for editing your life.",
    "duration": "0:05:49",
    "publishdate": "10/5/2011"
  },
  {
    "rank": 549,
    "id": "950",
    "speaker": "Alwar Balasubramaniam",
    "name": "Alwar Balasubramaniam: Art of substance and absence",
    "shortsummary": "Alwar Balasubramaniam's sculpture plays with time, shape, shadow, perspective: four tricky sensations that can reveal -- or conceal -- what's really out there. At TEDIndia, the artist shows slides of his extraordinary installations.",
    "duration": "0:16:51",
    "publishdate": "9/8/2010"
  },
  {
    "rank": 550,
    "id": "1605",
    "speaker": "Emma Teeling",
    "name": "Emma Teeling: The secret of the bat genome",
    "shortsummary": "In Western society, bats are often characterized as creepy, even evil. Zoologist Emma Teeling encourages us to rethink our attitude toward bats, whose unique and fascinating biology gives us insight into our own genetic makeup. <em>(Filmed at TEDxDublin.)</em>",
    "duration": "",
    "publishdate": "10/31/2012 15:00:00"
  },
  {
    "rank": 551,
    "id": "246",
    "speaker": "Tod Machover, Dan Ellsey",
    "name": "Releasing the music in your head",
    "shortsummary": "Tod Machover of MIT's Media Lab is devoted to extending musical expression to everyone, from virtuosos to amateurs, and in the most diverse forms, from opera to video games. He and composer Dan Ellsey shed light on what's next. ",
    "duration": "0:20:41",
    "publishdate": "4/15/2008"
  },
  {
    "rank": 552,
    "id": "1747",
    "speaker": "Phil Hansen",
    "name": "Phil Hansen: Embrace the shake",
    "shortsummary": "In art school, Phil Hansen developed an unruly tremor in his hand that kept him from creating the pointillist drawings he loved. Hansen was devastated, floating without a sense of purpose. Until a neurologist made a simple suggestion: embrace this limitation ... and transcend it.",
    "duration": "0:10:01",
    "publishdate": "5/21/2013 15:00:00"
  },
  {
    "rank": 553,
    "id": "962",
    "speaker": "Mitchell Besser",
    "name": "Mitchell Besser: Mothers helping mothers fight HIV",
    "shortsummary": "In sub-Saharan Africa, HIV infections are more prevalent and doctors scarcer than anywhere else in the world. With a lack of medical professionals, Mitchell Besser enlisted the help of his patients to create mothers2mothers -- an extraordinary network of HIV-positive women whose support for each other is changing and saving lives.\n",
    "duration": "0:18:30",
    "publishdate": "9/22/2010"
  },
  {
    "rank": 554,
    "id": "1081",
    "speaker": "Elizabeth Lindsey",
    "name": "Elizabeth Lindsey: Curating humanity's heritage",
    "shortsummary": "It's been said that when an elder dies, it's as if a library is burned. Anthropologist Elizabeth Lindsey, a National Geographic Fellow, collects the deep cultural knowledge passed down as stories and lore.",
    "duration": "0:10:13",
    "publishdate": "2/23/2011"
  },
  {
    "rank": 555,
    "id": "1287",
    "speaker": "Kathryn Schulz",
    "name": "Kathryn Schulz: Don't regret regret",
    "shortsummary": "We're taught to try to live life without regret. But why? Using her own tattoo as an example, Kathryn Schulz makes a powerful and moving case for embracing our regrets.\n",
    "duration": "0:16:51",
    "publishdate": "12/2/2011"
  },
  {
    "rank": 556,
    "id": "191",
    "speaker": "Matthieu Ricard",
    "name": "Habits of happiness",
    "shortsummary": "What is happiness, and how can we all get some? Biochemist turned Buddhist monk Matthieu Ricard says we can train our minds in habits of well-being, to generate a true sense of serenity and fulfillment.",
    "duration": "0:20:54",
    "publishdate": "11/1/2007"
  },
  {
    "rank": 557,
    "id": "1053",
    "speaker": "Ali Carr-Chellman",
    "name": "Ali Carr-Chellman: Gaming to re-engage boys in learning",
    "shortsummary": "At TEDxPSU, Ali Carr-Chellman pinpoints three reasons boys are tuning out of school in droves, and lays out her bold plan to re-engage them: bringing their culture into the classroom, with new rules that let boys be boys, and video games that teach as well as entertain.",
    "duration": "0:12:30",
    "publishdate": "1/14/2011"
  },
  {
    "rank": 558,
    "id": "441",
    "speaker": "Sherwin Nuland",
    "name": "A meditation on hope",
    "shortsummary": "Surgeon and writer Sherwin Nuland meditates on the idea of hope -- the desire to become our better selves and make a better world. It's a thoughtful 12 minutes that will help you focus on the road ahead.",
    "duration": "0:12:36",
    "publishdate": "1/23/2009"
  },
  {
    "rank": 559,
    "id": "1784",
    "speaker": "Charmian Gooch",
    "name": "Charmian Gooch: Meet global corruption's hidden players",
    "shortsummary": "When the son of the president of a desperately poor country starts buying mansions and sportscars on an official monthly salary of $7,000, Charmian Gooch suggests, corruption is probably somewhere in the picture. In a blistering, eye-opening talk (and through several specific examples), she details how global corruption trackers follow the money -- to some surprisingly familiar faces.",
    "duration": "0:14:27",
    "publishdate": "7/8/2013 15:12:00"
  },
  {
    "rank": 560,
    "id": "1233",
    "speaker": "Jarreth Merz",
    "name": "Jarreth Merz: Filming democracy in Ghana",
    "shortsummary": "Jarreth Merz, a Swiss-Ghanaian filmmaker, came to Ghana in 2008 to film the national elections. What he saw there taught him new lessons about democracy -- and about himself.",
    "duration": "0:08:36",
    "publishdate": "9/28/2011"
  },
  {
    "rank": 561,
    "id": "786",
    "speaker": "The LXD",
    "name": "The LXD: In the Internet age, dance evolves ...",
    "shortsummary": "The LXD (the Legion of Extraordinary Dancers) electrify the TED2010 stage with an emerging global street-dance culture, revved up by the Internet.  In a preview of Jon Chu‚Äôs upcoming Web series, this astonishing troupe show off their superpowers.",
    "duration": "0:17:29",
    "publishdate": "3/5/2010"
  },
  {
    "rank": 562,
    "id": "65",
    "speaker": "Jeff Han",
    "name": "Unveiling the genius of multi-touch interface design",
    "shortsummary": "Jeff Han shows off a cheap, scalable multi-touch and pressure-sensitive computer screen interface that may spell the end of point-and-click.",
    "duration": "0:08:47",
    "publishdate": "8/1/2006"
  },
  {
    "rank": 563,
    "id": "955",
    "speaker": "Chris Anderson (TED)",
    "name": "Chris Anderson: How web video powers global innovation",
    "shortsummary": "TED's Chris Anderson says the rise of web video is driving a worldwide phenomenon he calls Crowd Accelerated Innovation -- a self-fueling cycle of learning that could be as significant as the invention of print. But to tap into its power, organizations will need to embrace radical openness. And for TED, it means the dawn of a whole new chapter ...",
    "duration": "0:18:53",
    "publishdate": "9/14/2010"
  },
  {
    "rank": 564,
    "id": "1412",
    "speaker": "Jonathan Foley",
    "name": "Jonathan Foley: The other inconvenient truth",
    "shortsummary": "A skyrocketing demand for food means that agriculture has become the largest driver of climate change, biodiversity loss and environmental destruction. At TEDxTC Jonathan Foley shows why we desperately need to begin \"terraculture\" -- farming for the whole planet.",
    "duration": "",
    "publishdate": "4/8/2012 14:00:00"
  },
  {
    "rank": 565,
    "id": "1361",
    "speaker": "Paul Conneally",
    "name": "Paul Conneally: Digital humanitarianism",
    "shortsummary": "The disastrous earthquake in Haiti taught humanitarian groups an unexpected lesson: the power of mobile devices to coordinate, inform, and guide relief efforts. At TEDxRC2, Paul Conneally shows extraordinary examples of social media and other new technologies becoming central to humanitarian aid.",
    "duration": "0:10:57",
    "publishdate": "2/17/2012 16:08:00"
  },
  {
    "rank": 566,
    "id": "1520",
    "speaker": "Ramesh Raskar",
    "name": "Ramesh Raskar: Imaging at a trillion frames per second",
    "shortsummary": "Ramesh Raskar presents femto-photography, a new type of imaging so fast it visualizes the world one trillion frames per second, so detailed it shows light itself in motion. This technology may someday be used to build cameras that can look \"around\" corners or see inside the body without X-rays.",
    "duration": "0:11:02",
    "publishdate": "7/26/2012 15:01:00"
  },
  {
    "rank": 567,
    "id": "1019",
    "speaker": "Bart Weetjens",
    "name": "Bart Weetjens: How I taught rats to sniff out land mines",
    "shortsummary": "At TEDxRotterdam, Bart Weetjens talks about his extraordinary project: training rats to sniff out land mines. He shows clips of his \"hero rats\" in action, and previews his work's next phase: teaching them to turn up tuberculosis in the lab.",
    "duration": "0:12:11",
    "publishdate": "12/2/2010"
  },
  {
    "rank": 568,
    "id": "4",
    "speaker": "Burt Rutan",
    "name": "Entrepreneurs are the future of space flight",
    "shortsummary": "In this passionate talk, legendary spacecraft designer Burt Rutan lambasts the US government-funded space program for stagnating and asks entrepreneurs to pick up where NASA has left off. ",
    "duration": "0:19:37",
    "publishdate": "10/25/2006"
  },
  {
    "rank": 569,
    "id": "1209",
    "speaker": "Jeremy Gilley",
    "name": "Jeremy Gilley: One day of peace",
    "shortsummary": "Here's a crazy idea: Persuade the world to try living in peace for just one day, every September 21. In this energetic, honest talk, Jeremy Gilley tells the story of how this crazy idea became real -- real enough to help millions of kids in war-torn regions. ",
    "duration": "0:17:41",
    "publishdate": "8/10/2011"
  },
  {
    "rank": 570,
    "id": "1010",
    "speaker": "John Hardy",
    "name": "John Hardy: My green school dream",
    "shortsummary": "Join John Hardy on a tour of the Green School, his off-the-grid school in Bali that teaches kids how to build, garden, create (and get into college). The centerpiece of campus is the spiraling Heart of School, perhaps the world's largest freestanding bamboo building.",
    "duration": "0:13:35",
    "publishdate": "11/18/2010"
  },
  {
    "rank": 571,
    "id": "701",
    "speaker": "Andrea Ghez",
    "name": "Andrea Ghez: The hunt for a supermassive black hole",
    "shortsummary": "With new data from the Keck telescopes, Andrea Ghez shows how state-of-the-art adaptive optics are helping astronomers understand our universe's most mysterious objects: black holes. She shares evidence that a supermassive black hole may be lurking at the center of the Milky Way.",
    "duration": "0:16:26",
    "publishdate": "12/2/2009"
  },
  {
    "rank": 572,
    "id": "407",
    "speaker": "Andy Hobsbawm",
    "name": "Do the green thing",
    "shortsummary": "Andy Hobsbawm shares a fresh ad campaign about going green -- and some of the fringe benefits. ",
    "duration": "0:03:22",
    "publishdate": "11/26/2008"
  },
  {
    "rank": 573,
    "id": "635",
    "speaker": "John Lloyd",
    "name": "John Lloyd inventories the invisible",
    "shortsummary": "Nature's mysteries meet tack-sharp wit in this hilarious, 10-minute mix of quips and fun lessons, as comedian, writer and TV man John Lloyd plucks at the substance of several things not seen.",
    "duration": "0:10:24",
    "publishdate": "9/16/2009"
  },
  {
    "rank": 574,
    "id": "1491",
    "speaker": "Massimo Banzi",
    "name": "Massimo Banzi: How Arduino is open-sourcing imagination",
    "shortsummary": "Massimo Banzi helped invent the Arduino, a tiny, easy-to-use open-source microcontroller that's inspired thousands of people around the world to make the coolest things they can imagine -- from toys to satellite gear. Because, as he says, \"You don't need anyone's permission to make something great.\"",
    "duration": "0:15:46",
    "publishdate": "6/27/2012 13:56:00"
  },
  {
    "rank": 575,
    "id": "1366",
    "speaker": "Shilo Shiv Suleman",
    "name": "Shilo Shiv Suleman: Using tech to enable dreaming",
    "shortsummary": "Has our technology -- our cell phones and iPods and cameras -- stopped us from dreaming? Young artist Shilo Shiv Suleman says no, as she demos \"Khoya,\" her new storybook for iPad, which floats us through a magical world in 7 minutes of pure creativity.",
    "duration": "0:07:36",
    "publishdate": "2/22/2012 16:59:00"
  },
  {
    "rank": 576,
    "id": "394",
    "speaker": "Lee Smolin",
    "name": "How science is like democracy",
    "shortsummary": "Physicist Lee Smolin talks about how the scientific community works: as he puts it, \"we fight and argue as hard as we can,\" but everyone accepts that the next generation of scientists will decide who's right. And, he says, that's how democracy works, too.",
    "duration": "0:12:25",
    "publishdate": "11/10/2008"
  },
  {
    "rank": 577,
    "id": "1104",
    "speaker": "Eythor Bender",
    "name": "Eythor Bender demos human exoskeletons",
    "shortsummary": "Eythor Bender of Berkeley Bionics brings onstage two amazing exoskeletons, HULC and eLEGS -- robotic add-ons that could one day allow a human to carry 200 pounds without tiring, or allow a wheelchair user to stand and walk. It's a powerful onstage demo, with implications for human potential of all kinds.",
    "duration": "0:06:23",
    "publishdate": "3/24/2011"
  },
  {
    "rank": 578,
    "id": "1190",
    "speaker": "Tim Harford",
    "name": "Tim Harford: Trial, error and the God complex",
    "shortsummary": "Economics writer Tim Harford studies complex systems -- and finds a surprising link among the successful ones: they were built through trial and error. In this sparkling talk from TEDGlobal 2011, he asks us to embrace our randomness and start making better mistakes.",
    "duration": "0:18:07",
    "publishdate": "7/15/2011"
  },
  {
    "rank": 579,
    "id": "270",
    "speaker": "Paul Collier",
    "name": "4 ways to improve the lives of the \"bottom billion\"",
    "shortsummary": "Around the world right now, one billion people are trapped in poor or failing countries. How can we help them? Economist Paul Collier lays out a bold, compassionate plan for closing the gap between rich and poor.",
    "duration": "0:16:51",
    "publishdate": "5/28/2008"
  },
  {
    "rank": 580,
    "id": "1517",
    "speaker": "John Graham-Cumming",
    "name": "John Graham-Cumming: The greatest machine that never was",
    "shortsummary": "Computer science began in the '30s ... the 1830s. John Graham-Cumming tells the story of Charles Babbage's mechanical, steam-powered \"analytical engine\" and how Ada Lovelace, mathematician and daughter of Lord Byron, saw beyond its simple computational abilities to imagine the future of computers. <em>(Filmed at <a href=http://www.ted.com/tedx/events/5140>TEDxImperialCollege</a>.)</em>",
    "duration": "0:12:14",
    "publishdate": "7/21/2012 13:56:00"
  },
  {
    "rank": 581,
    "id": "1626",
    "speaker": "Nina Tandon",
    "name": "Nina Tandon: Could tissue engineering mean personalized medicine?",
    "shortsummary": "Each of our bodies is utterly unique, which is a lovely thought until it comes to treating an illness -- when every body reacts differently, often unpredictably, to standard treatment. Tissue engineer Nina Tandon talks about a possible solution: Using pluripotent stem cells to make personalized models of organs on which to test new drugs and treatments, and storing them on computer chips. (Call it extremely personalized medicine.)",
    "duration": "0:06:19",
    "publishdate": "12/6/2012 16:07:00"
  },
  {
    "rank": 582,
    "id": "1288",
    "speaker": "Karen Tse",
    "name": "Karen Tse: How to stop torture",
    "shortsummary": "Political prisoners aren't the only ones being tortured -- the vast majority of judicial torture happens in ordinary cases, even in 'functioning' legal systems. Social activist Karen Tse shows how we can, and should, stand up and end the use of routine torture.",
    "duration": "0:12:43",
    "publishdate": "12/22/2011"
  },
  {
    "rank": 583,
    "id": "140",
    "speaker": "Hans Rosling",
    "name": "New insights on poverty and life around the world",
    "shortsummary": "Researcher Hans Rosling uses his cool data tools to show how countries are pulling themselves out of poverty. He demos Dollar Street, comparing households of varying income levels worldwide. Then he does something really amazing.",
    "duration": "0:18:57",
    "publishdate": "6/25/2007"
  },
  {
    "rank": 584,
    "id": "1559",
    "speaker": "Kent Larson",
    "name": "Kent Larson: Brilliant designs to fit more people in every city",
    "shortsummary": "How can we fit more people into cities without overcrowding? Kent Larson shows off folding cars, quick-change apartments and other innovations that could make the city of the future work a lot like a small village of the past.",
    "duration": "0:16:41",
    "publishdate": "9/9/2012 14:07:00"
  },
  {
    "rank": 585,
    "id": "321",
    "speaker": "Robert Lang",
    "name": "Idea + square = origami",
    "shortsummary": "Robert Lang is a pioneer of the newest kind of origami -- using math and engineering principles to fold mind-blowingly intricate designs that are beautiful and, sometimes, very useful.",
    "duration": "0:15:53",
    "publishdate": "7/30/2008"
  },
  {
    "rank": 586,
    "id": "1375",
    "speaker": "Peter Diamandis",
    "name": "Peter Diamandis: Abundance is our future",
    "shortsummary": "Onstage at TED2012, Peter Diamandis makes a case for optimism -- that we'll invent, innovate and create ways to solve the challenges that loom over us. \"I'm not saying we don't have our set of problems; we surely do. But ultimately, we knock them down.\"",
    "duration": "0:16:14",
    "publishdate": "2/29/2012 17:30:00"
  },
  {
    "rank": 587,
    "id": "949",
    "speaker": "Sugata Mitra",
    "name": "Sugata Mitra: The child-driven education",
    "shortsummary": "Education scientist Sugata Mitra tackles one of the greatest problems of education -- the best teachers and schools don't exist where they're needed most. In a series of real-life experiments from New Delhi to South Africa to Italy, he gave kids self-supervised access to the web and saw results that could revolutionize how we think about teaching.",
    "duration": "0:17:13",
    "publishdate": "9/7/2010"
  },
  {
    "rank": 588,
    "id": "447",
    "speaker": "Natalie MacMaster",
    "name": "Playing the Cape Breton fiddle",
    "shortsummary": "Natalie MacMaster and her musical partner Donnell Leahy play several tunes from the Cape Breton tradition -- a sprightly, soulful style of folk fiddling. It's an inspired collaboration that will have you clapping (and maybe dancing) along.",
    "duration": "0:18:47",
    "publishdate": "1/30/2009"
  },
  {
    "rank": 589,
    "id": "175",
    "speaker": "Sugata Mitra",
    "name": "Can kids teach themselves?",
    "shortsummary": "Speaking at LIFT 2007, Sugata Mitra talks about his Hole in the Wall project. Young kids in this project figured out how to use a PC on their own -- and then taught other kids. He asks, what else can children teach themselves?",
    "duration": "0:20:59",
    "publishdate": "8/27/2008"
  },
  {
    "rank": 590,
    "id": "1031",
    "speaker": "Tony Porter",
    "name": "Tony Porter: A call to men",
    "shortsummary": "At TEDWomen, Tony Porter makes a call to men everywhere: Don't \"act like a man.\" Telling powerful stories from his own life, he shows how this mentality, drummed into so many men and boys, can lead men to disrespect, mistreat and abuse women and each other. His solution: Break free of the \"man box.\"",
    "duration": "0:11:13",
    "publishdate": "12/9/2010"
  },
  {
    "rank": 591,
    "id": "1727",
    "speaker": "Taylor Wilson",
    "name": "Taylor Wilson: My radical plan for small nuclear fission reactors",
    "shortsummary": "Taylor Wilson was 14 when he built a nuclear fusion reactor in his parents' garage. Now 19, he returns to the TED stage to present a new take on an old topic: fission. Wilson, who has won backing to create a company to realize his vision, explains why he's so excited about his innovative design for small modular fission reactors -- and why it could be the next big step in solving the global energy crisis. ",
    "duration": "0:12:53",
    "publishdate": "4/30/2013 15:01:00"
  },
  {
    "rank": 592,
    "id": "1432",
    "speaker": "Brenda Brathwaite",
    "name": "Brenda Brathwaite: Gaming for understanding",
    "shortsummary": "It's never easy to get across the magnitude of complex tragedies -- so when Brenda Brathwite's daughter came home from school asking about slavery, she did what she does for a living -- she designed a game. At TEDxPhoenix she describes the surprising effectiveness of this game, and others, in helping the player really understand the story.",
    "duration": "",
    "publishdate": "4/29/2012 14:27:00"
  },
  {
    "rank": 593,
    "id": "1237",
    "speaker": "Christoph Adami",
    "name": "Christoph Adami: Finding life we can't imagine",
    "shortsummary": "How do we search for alien life if it's nothing like the life that we know? At TEDxUIUC Christoph Adami shows how he uses his research into artificial life -- self-replicating computer programs -- to find a signature, a 'biomarker,' that is free of our preconceptions of what life is.",
    "duration": "0:18:51",
    "publishdate": "10/4/2011"
  },
  {
    "rank": 594,
    "id": "889",
    "speaker": "Chip Conley",
    "name": "Chip Conley: Measuring what makes life worthwhile",
    "shortsummary": "When the dotcom bubble burst, hotelier Chip Conley went in search of a business model based on happiness. In an old friendship with an employee and in the wisdom of a Buddhist king, he learned that success comes from what you count.",
    "duration": "0:17:39",
    "publishdate": "6/21/2010"
  },
  {
    "rank": 595,
    "id": "1744",
    "speaker": "Judy MacDonald Johnston",
    "name": "Judy MacDonald Johnston: Prepare for a good end of life",
    "shortsummary": "Thinking about death is frightening, but planning ahead is practical and leaves more room for peace of mind in our final days. In a solemn, thoughtful talk, Judy MacDonald Johnston shares 5 practices for planning for a good end of life. ",
    "duration": "0:06:03",
    "publishdate": "5/22/2013 14:58:00"
  },
  {
    "rank": 596,
    "id": "1098",
    "speaker": "Rogier van der Heide",
    "name": "Rogier van der Heide: Why light needs darkness",
    "shortsummary": "Lighting architect Rogier van der Heide offers a beautiful new way to look at the world -- by paying attention to light (and to darkness). Examples from classic buildings illustrate a deeply thought-out vision of the play of light around us.",
    "duration": "0:16:51",
    "publishdate": "3/17/2011"
  },
  {
    "rank": 597,
    "id": "1092",
    "speaker": "Deb Roy",
    "name": "Deb Roy: The birth of a word",
    "shortsummary": "MIT researcher Deb Roy wanted to understand how his infant son learned language -- so he wired up his house with videocameras to catch every moment (with exceptions) of his son's life, then parsed 90,000 hours of home video to watch \"gaaaa\" slowly turn into \"water.\" Astonishing, data-rich research with deep implications for how we learn.",
    "duration": "0:19:52",
    "publishdate": "3/10/2011"
  },
  {
    "rank": 598,
    "id": "930",
    "speaker": "Sheryl WuDunn",
    "name": "Sheryl WuDunn: Our century's greatest injustice ",
    "shortsummary": "Sheryl WuDunn's book \"Half the Sky\" investigates the oppression of women globally. Her stories shock. Only when women in developing countries have equal access to education and economic opportunity will we be using all our human resources.",
    "duration": "0:18:22",
    "publishdate": "8/17/2010"
  },
  {
    "rank": 599,
    "id": "1624",
    "speaker": "Jeff Smith",
    "name": "Jeff Smith: Lessons in business -- from prison",
    "shortsummary": "Jeff Smith spent a year in prison. But what he discovered inside wasn't what he expected -- he saw in his fellow inmates boundless ingenuity and business savvy. He asks: Why don't we tap this entrepreneurial potential to help ex-prisoners contribute to society once they're back outside? (<em>From the TED Talent Search event TED@NewYork</em>.)",
    "duration": "0:05:00",
    "publishdate": "12/5/2012 16:00:00"
  },
  {
    "rank": 600,
    "id": "1467",
    "speaker": "Juan Enriquez",
    "name": "Juan Enriquez: Will our kids be a different species?",
    "shortsummary": "Throughout human evolution, multiple versions of humans co-existed. Could we be mid-upgrade now? At TEDxSummit, Juan Enriquez sweeps across time and space to bring us to the present moment -- and shows how technology is revealing evidence that suggests rapid evolution may be under way.",
    "duration": "0:16:48",
    "publishdate": "6/4/2012 15:52:00"
  },
  {
    "rank": 601,
    "id": "891",
    "speaker": "Marian Bantjes",
    "name": "Marian Bantjes: Intricate beauty by design ",
    "shortsummary": "In graphic design, Marian Bantjes says, throwing your individuality into a project is heresy. She explains how she built her career doing just that, bringing her signature delicate illustrations to storefronts, valentines and even genetic diagrams.",
    "duration": "0:16:28",
    "publishdate": "6/22/2010"
  },
  {
    "rank": 602,
    "id": "71",
    "speaker": "Rick Warren",
    "name": "Living a life of purpose",
    "shortsummary": "Pastor Rick Warren, author of The Purpose-Driven Life, reflects on his own crisis of purpose in the wake of his book's wild success. He explains his belief that God's intention is for each of us to use our talents and influence to do good.",
    "duration": "0:21:02",
    "publishdate": "7/18/2006"
  },
  {
    "rank": 603,
    "id": "1774",
    "speaker": "Peter Attia",
    "name": "Peter Attia: Is the obesity crisis hiding a bigger problem?",
    "shortsummary": "As a young surgeon, Peter Attia felt contempt for a patient with diabetes. She was overweight, he thought, and thus responsible for the fact that she needed a foot amputation. But years later, Attia received an unpleasant medical surprise that led him to wonder: is our understanding of diabetes right? Could the precursors to diabetes cause obesity, and not the other way around? A look at how assumptions may be leading us to wage the wrong medical war.",
    "duration": "0:15:58",
    "publishdate": "6/25/2013 15:02:00"
  },
  {
    "rank": 604,
    "id": "190",
    "speaker": "Jan Chipchase",
    "name": "Our cell phones, ourselves",
    "shortsummary": "Nokia researcher Jan Chipchase's investigation into the ways we interact with technology has led him from the villages of Uganda to the insides of our pockets. He's made some unexpected discoveries along the way.",
    "duration": "0:16:03",
    "publishdate": "10/18/2007"
  },
  {
    "rank": 605,
    "id": "1628",
    "speaker": "Marcus Byrne",
    "name": "Marcus Byrne: The dance of the dung beetle",
    "shortsummary": "A dung beetle has a brain the size of a grain of rice, and yet shows a tremendous amount of intelligence when it comes to rolling its food source -- animal excrement -- home. How? It all comes down to a dance. <em>(Filmed at TEDxWitsUniversity.)</em>",
    "duration": "0:17:08",
    "publishdate": "12/13/2012 16:00:00"
  },
  {
    "rank": 606,
    "id": "1618",
    "speaker": "Daphne Bavelier",
    "name": "Daphne Bavelier: Your brain on video games",
    "shortsummary": "How do fast-paced video games affect the brain? Step into the lab with cognitive researcher Daphne Bavelier to hear surprising news about how video games, even action-packed shooter games, can help us learn, focus and, fascinatingly, multitask. <em>(Filmed at TEDxCHUV.)</em>",
    "duration": "0:17:57",
    "publishdate": "11/19/2012 16:19:00"
  },
  {
    "rank": 607,
    "id": "1558",
    "speaker": "Beth Noveck",
    "name": "Beth Noveck: Demand a more open-source government",
    "shortsummary": "What can governments learn from the open-data revolution? In this stirring talk, Beth Noveck, the former deputy CTO at the White House, shares a vision of practical openness -- connecting bureaucracies to citizens, sharing data, creating a truly participatory democracy. Imagine the \"writable society\" ...",
    "duration": "0:17:23",
    "publishdate": "9/15/2012 15:29:00"
  },
  {
    "rank": 608,
    "id": "1138",
    "speaker": "Suzanne Lee",
    "name": "Suzanne Lee: Grow your own clothes",
    "shortsummary": "Designer Suzanne Lee shares her experiments in growing a kombucha-based material that can be used like fabric or vegetable leather to make clothing. The process is fascinating, the results are beautiful (though there's still one minor drawback ...) and the potential is simply stunning.",
    "duration": "0:06:40",
    "publishdate": "5/4/2011"
  },
  {
    "rank": 609,
    "id": "221",
    "speaker": "George Dyson",
    "name": "Let's take a nuclear-powered rocket to Saturn",
    "shortsummary": "Author George Dyson spins the story of Project Orion, a massive, nuclear-powered spacecraft that could have taken us to Saturn in five years. His insider's perspective and a secret cache of documents bring an Atomic Age dream to life. ",
    "duration": "0:08:38",
    "publishdate": "2/14/2008"
  },
  {
    "rank": 610,
    "id": "1741",
    "speaker": "Meg Jay",
    "name": "Meg Jay: Why 30 is not the new 20",
    "shortsummary": "Clinical psychologist Meg Jay has a bold message for twentysomethings: Contrary to popular belief, your 20s are not a throwaway decade. In this provocative talk, Jay says that just because marriage, work and kids are happening later in life, doesn't mean you can't start planning now. She gives 3 pieces of advice for how twentysomethings can re-claim adulthood in the defining decade of their lives.",
    "duration": "0:14:49",
    "publishdate": "5/13/2013 15:08:00"
  },
  {
    "rank": 611,
    "id": "880",
    "speaker": "Rory Sutherland",
    "name": "Rory Sutherland: Sweat the small stuff",
    "shortsummary": "It may seem that big problems require big solutions, but ad man Rory Sutherland says many flashy, expensive fixes are just obscuring better, simpler answers. To illustrate, he uses behavioral economics and hilarious examples.",
    "duration": "0:12:37",
    "publishdate": "6/9/2010"
  },
  {
    "rank": 612,
    "id": "1234",
    "speaker": "Ben Goldacre",
    "name": "Ben Goldacre: Battling bad science",
    "shortsummary": "Every day there are news reports of new health advice, but how can you know if they're right? Doctor and epidemiologist Ben Goldacre shows us, at high speed, the ways evidence can be distorted, from the blindingly obvious nutrition claims to the very subtle tricks of the pharmaceutical industry.",
    "duration": "0:14:19",
    "publishdate": "9/29/2011"
  },
  {
    "rank": 613,
    "id": "1178",
    "speaker": "Joshua Walters",
    "name": "Joshua Walters: On being just crazy enough",
    "shortsummary": "At TED's Full Spectrum Auditions, comedian Joshua Walters, who's bipolar, walks the line between mental illness and mental \"skillness.\" In this funny, thought-provoking talk, he asks: What's the right balance between medicating craziness away and riding the manic edge of creativity and drive?",
    "duration": "0:05:51",
    "publishdate": "6/24/2011"
  },
  {
    "rank": 614,
    "id": "1606",
    "speaker": "Adam Garone",
    "name": "Adam Garone: Healthier men, one moustache at a time ",
    "shortsummary": "Adam Garone has an impressive moustache, and it's for a good cause. A co-founder of Movember, Garone's initiative to raise awareness for men's health -- by having men grow out their moustaches every November -- began as a dare in a bar in 2003. Now, it's a worldwide movement that raised $126 million for prostate cancer research last year.Â ",
    "duration": "0:16:41",
    "publishdate": "11/1/2012 15:01:00"
  },
  {
    "rank": 615,
    "id": "1175",
    "speaker": "Daniel Tammet",
    "name": "Daniel Tammet: Different ways of knowing",
    "shortsummary": "Daniel Tammet has linguistic, numerical and visual synesthesia -- meaning that his perception of words, numbers and colors are woven together into a new way of perceiving and understanding the world. The author of \"Born on a Blue Day,\" Tammet shares his art and his passion for languages in this glimpse into his beautiful mind.",
    "duration": "0:10:54",
    "publishdate": "6/21/2011"
  },
  {
    "rank": 616,
    "id": "1018",
    "speaker": "Marcel Dicke",
    "name": "Marcel Dicke: Why not eat insects?",
    "shortsummary": "Marcel Dicke makes an appetizing case for adding insects to everyone's diet. His message to squeamish chefs and foodies: delicacies like locusts and caterpillars compete with meat in flavor, nutrition and eco-friendliness.",
    "duration": "0:16:34",
    "publishdate": "12/1/2010"
  },
  {
    "rank": 617,
    "id": "1148",
    "speaker": "Elliot Krane",
    "name": "Elliot Krane: The mystery of chronic pain",
    "shortsummary": "We think of pain as a symptom, but there are cases where the nervous system develops feedback loops and pain becomes a terrifying disease in itself. Starting with the story of a girl whose sprained wrist turned into a nightmare, Elliot Krane talks about the complex mystery of chronic pain, and reviews the facts we're just learning about how it works and how to treat it.",
    "duration": "0:08:14",
    "publishdate": "5/18/2011"
  },
  {
    "rank": 618,
    "id": "763",
    "speaker": "Peter Eigen",
    "name": "Peter Eigen: How to expose the corrupt",
    "shortsummary": "Some of the world's most baffling social problems, says Peter Eigen, can be traced to systematic, pervasive government corruption, hand-in-glove with global companies. At TEDxBerlin, Eigen describes the thrilling counter-attack led by his organization Transparency International.",
    "duration": "0:17:01",
    "publishdate": "2/8/2010"
  },
  {
    "rank": 619,
    "id": "213",
    "speaker": "Jaime Lerner",
    "name": "Sing a song of sustainable cities",
    "shortsummary": "Jaime Lerner reinvented urban space in his native Curitiba, Brazil. Along the way, he changed the way city planners worldwide see what's possible in the metropolitan landscape.",
    "duration": "0:15:43",
    "publishdate": "2/4/2008"
  },
  {
    "rank": 620,
    "id": "900",
    "speaker": "Carter Emmart ",
    "name": "Carter Emmart demos a 3D atlas of the universe ",
    "shortsummary": "For the last 12 years, Carter Emmart has been coordinating the efforts of scientists, artists and programmers to build a complete 3D visualization of our known universe. He demos this stunning tour and explains how it's being shared with facilities around the world.\n",
    "duration": "0:06:57",
    "publishdate": "7/1/2010"
  },
  {
    "rank": 621,
    "id": "1267",
    "speaker": "Allan Jones",
    "name": "Allan Jones: A map of the brain",
    "shortsummary": "How can we begin to understand the way the brain works? The same way we begin to understand a city: by making a map. In this visually stunning talk, Allan Jones shows how his team is mapping which genes are turned on in each tiny region, and how it all connects up.",
    "duration": "0:15:21",
    "publishdate": "11/10/2011"
  },
  {
    "rank": 622,
    "id": "1417",
    "speaker": "Frans de Waal",
    "name": "Frans de Waal: Moral behavior in animals",
    "shortsummary": "Empathy, cooperation, fairness and reciprocity -- caring about the well-being of others seems like a very human trait. But Frans de Waal shares some surprising videos of behavioral tests, on primates and other mammals, that show how many of these moral traits all of us share.",
    "duration": "0:16:52",
    "publishdate": "4/10/2012 15:10:00"
  },
  {
    "rank": 623,
    "id": "1182",
    "speaker": "Robert Hammond",
    "name": "Robert Hammond: Building a park in the sky",
    "shortsummary": "New York was planning to tear down the High Line, an abandoned elevated railroad in Manhattan, when Robert Hammond and a few friends suggested: Why not make it a park? He shares how it happened in this tale of local cultural activism.",
    "duration": "0:05:41",
    "publishdate": "6/30/2011"
  },
  {
    "rank": 624,
    "id": "1261",
    "speaker": "Daniel Wolpert",
    "name": "Daniel Wolpert: The real reason for brains",
    "shortsummary": "Neuroscientist Daniel Wolpert starts from a surprising premise: the brain evolved, not to think or feel, but to control movement. In this entertaining, data-rich talk he gives us a glimpse into how the brain creates the grace and agility of human motion.",
    "duration": "0:19:59",
    "publishdate": "11/3/2011"
  },
  {
    "rank": 625,
    "id": "1321",
    "speaker": "Jonas Gahr Stäre",
    "name": "Jonas Gahr Stäre: In defense of dialogue",
    "shortsummary": "In politics, it seems counterintuitive to engage in dialogue with violent groups, with radicals and terrorists, and with the states that support them. But Jonas Gahr StÃ¸re, the foreign minister of Norway, makes a compelling case for open discussion, even when values diverge, in an attempt to build greater security for all.",
    "duration": "0:14:58",
    "publishdate": "1/11/2012 16:18:00"
  },
  {
    "rank": 626,
    "id": "330",
    "speaker": "Ory Okolloh",
    "name": "The making of an African activist",
    "shortsummary": "Ory Okolloh tells the story of her life and her family -- and how she came to do her heroic work reporting on the doings of Kenya's parliament.",
    "duration": "0:16:38",
    "publishdate": "8/28/2008"
  },
  {
    "rank": 627,
    "id": "1764",
    "speaker": "Raffaello D'Andrea",
    "name": "Raffaello D'Andrea: The astounding athletic power of quadcopters",
    "shortsummary": "In a robot lab at TEDGlobal, Raffaello D'Andrea demos his flying quadcopters: robots that think like athletes, solving physical problems with algorithms that help them learn. In a series of nifty demos, D'Andrea show drones that play catch, balance and make decisions together -- and watch out for an I-want-this-now demo of Kinect-controlled quads.",
    "duration": "0:16:08",
    "publishdate": "6/11/2013 19:44:00"
  },
  {
    "rank": 628,
    "id": "1230",
    "speaker": "Sunni Brown",
    "name": "Sunni Brown: Doodlers, unite!",
    "shortsummary": "Studies show that sketching and doodling improve our comprehension -- and our creative thinking. So why do we still feel embarrassed when we're caught doodling in a meeting? Sunni Brown says: Doodlers, unite! She makes the case for unlocking your brain via pad and pen.",
    "duration": "0:05:50",
    "publishdate": "9/23/2011"
  },
  {
    "rank": 629,
    "id": "625",
    "speaker": "Geoff Mulgan",
    "name": "Geoff Mulgan: Post-crash, investing in a better world",
    "shortsummary": "As we reboot the world's economy, Geoff Mulgan poses a question: Instead of sending bailout money to doomed old industries, why not use stimulus funds to bootstrap some new, socially responsible companies -- and make the world a little bit better?",
    "duration": "0:18:00",
    "publishdate": "9/2/2009"
  },
  {
    "rank": 630,
    "id": "695",
    "speaker": "Hans Rosling",
    "name": "Hans Rosling: Asia's rise -- how and when",
    "shortsummary": "Hans Rosling was a young guest student in India when he first realized that Asia had all the capacities to reclaim its place as the world's dominant economic force. At TEDIndia, he graphs global economic growth since 1858 and predicts the exact date that India and China will outstrip the US.",
    "duration": "0:15:50",
    "publishdate": "11/23/2009"
  },
  {
    "rank": 631,
    "id": "1753",
    "speaker": "Jackson Katz",
    "name": "Jackson Katz: Violence against womenâ€”it's a men's issue",
    "shortsummary": "Domestic violence and sexual abuse are often called \"women's issues.â€ But in this bold, blunt talk, Jackson Katz points out that these are intrinsically men's issues -- and shows how these violent behaviors are tied to definitions of manhood. A clarion call for us all -- women and men -- to call out unacceptable behavior and be leaders of change.",
    "duration": "0:17:40",
    "publishdate": "5/29/2013 15:31:00"
  },
  {
    "rank": 632,
    "id": "1437",
    "speaker": "Rory Sutherland",
    "name": "Rory Sutherland: Perspective is everything",
    "shortsummary": "The circumstances of our lives may matter less than how we see them, says Rory Sutherland. At TEDxAthens, he makes a compelling case for how reframing is the key to happiness.",
    "duration": "0:18:24",
    "publishdate": "5/4/2012 15:07:00"
  },
  {
    "rank": 633,
    "id": "654",
    "speaker": "Sam Martin",
    "name": "Sam Martin: The quirky world of \"manspaces\"",
    "shortsummary": "Author Sam Martin shares photos of a quirky world hobby that's trending with the XY set: the \"manspace.\" (They're custom-built hangouts where a man can claim a bit of his own territory to work, relax, be himself.) Grab a cold one and enjoy.",
    "duration": "0:04:27",
    "publishdate": "10/9/2009"
  },
  {
    "rank": 634,
    "id": "1552",
    "speaker": "David Binder",
    "name": "David Binder: The arts festival revolution",
    "shortsummary": "David Binder is a major Broadway producer, but last summer he found himself in a small Australian neighborhood, watching locals dance and perform on their lawns -- and loving it. He shows us the new face of arts festivals, which break the boundary between audience and performer and help cities express themselves.",
    "duration": "0:09:06",
    "publishdate": "11/16/2012 16:00:00"
  },
  {
    "rank": 635,
    "id": "457",
    "speaker": "David Merrill",
    "name": "Siftables, the toy blocks that think",
    "shortsummary": "MIT grad student David Merrill demos Siftables -- cookie-sized, computerized tiles you can stack and shuffle in your hands. These future-toys can do math, play music, and talk to their friends, too. Is this the next thing in hands-on learning?",
    "duration": "0:07:09",
    "publishdate": "2/12/2009"
  },
  {
    "rank": 636,
    "id": "1060",
    "speaker": "Thomas Goetz",
    "name": "Thomas Goetz: It's time to redesign medical data",
    "shortsummary": "Your medical chart: it's hard to access, impossible to read -- and full of information that could make you healthier if you just knew how to use it. At TEDMED, Thomas Goetz looks at medical data, making a bold call to redesign it and get more insight from it.",
    "duration": "0:16:33",
    "publishdate": "1/25/2011"
  },
  {
    "rank": 637,
    "id": "362",
    "speaker": "Steven Johnson",
    "name": "The Web and the city",
    "shortsummary": "Outside.in's Steven Johnson says the Web is like a city: built by many people, completely controlled by no one, intricately interconnected and yet functioning as many independent parts. While disaster strikes in one place, elsewhere, life goes on. ",
    "duration": "0:16:30",
    "publishdate": "10/8/2008"
  },
  {
    "rank": 638,
    "id": "1676",
    "speaker": "Wade Davis",
    "name": "Wade Davis: Gorgeous photos of a backyard wilderness worth saving",
    "shortsummary": "Ethnographer Wade Davis explores hidden places in the wider world -- but in this powerful short talk he urges us to save a paradise in his backyard, Northern Canada. The Sacred Headwaters, remote and pristine, are under threat because they hide rich tar sands. With stunning photos, Davis asks a tough question: How can we balance society's need for fuels with the urge to protect such glorious wilderness?",
    "duration": "0:06:35",
    "publishdate": "2/26/2013 17:10:00"
  },
  {
    "rank": 639,
    "id": "585",
    "speaker": "Katherine Fulton",
    "name": "Katherine Fulton: You are the future of philanthropy",
    "shortsummary": "In this uplifting talk, Katherine Fulton sketches the new future of philanthropy -- one where collaboration and innovation allow regular people to do big things, even when money is scarce. Giving five practical examples of crowd-driven philanthropy, she calls for a new generation of citizen leaders.",
    "duration": "0:12:34",
    "publishdate": "6/25/2009"
  },
  {
    "rank": 640,
    "id": "847",
    "speaker": "Esther Duflo",
    "name": "Esther Duflo: Social experiments to fight poverty",
    "shortsummary": "Alleviating poverty is more guesswork than science, and lack of data on aid's impact raises questions about how to provide it. But Clark Medal-winner Esther Duflo says it's possible to know which development efforts help and which hurt -- by testing solutions with randomized trials. ",
    "duration": "0:16:47",
    "publishdate": "5/3/2010"
  },
  {
    "rank": 641,
    "id": "1794",
    "speaker": "John Searle",
    "name": "John Searle: Our shared condition -- consciousness",
    "shortsummary": "Philosopher John Searle lays out the case for studying human consciousness -- and systematically shoots down some of the common objections to taking it seriously. As we learn more about the brain processes that cause awareness, accepting that consciousness is a biological phenomenon is an important first step. And no, he says, consciousness is not a massive computer simulation. (Filmed at <a href=\"http://tedxcern.web.cern.ch/\">TEDxCERN</a>.)",
    "duration": "0:14:59",
    "publishdate": "7/22/2013 15:12:00"
  },
  {
    "rank": 642,
    "id": "986",
    "speaker": "Dianna Cohen",
    "name": "Dianna Cohen: Tough truths about plastic pollution",
    "shortsummary": "Artist Dianna Cohen shares some tough truths about plastic pollution in the ocean and in our lives -- and some thoughts on how to free ourselves from the plastic gyre.",
    "duration": "0:05:18",
    "publishdate": "10/20/2010"
  },
  {
    "rank": 643,
    "id": "480",
    "speaker": "Don Norman",
    "name": "The three ways that good design makes you happy",
    "shortsummary": "In this talk from 2003, design critic Don Norman turns his incisive eye toward beauty, fun, pleasure and emotion, as he looks at design that makes people happy. He names the three emotional cues that a well-designed product must hit to succeed.",
    "duration": "0:12:41",
    "publishdate": "3/9/2009"
  },
  {
    "rank": 644,
    "id": "735",
    "speaker": "Kiran Sethi",
    "name": "Kiran Bir Sethi teaches kids to take charge",
    "shortsummary": "Kiran Bir Sethi shows how her groundbreaking Riverside School in India teaches kids life's most valuable lesson: \"I can.\" Watch her students take local issues into their own hands, lead other young people, even educate their parents.",
    "duration": "0:09:32",
    "publishdate": "1/12/2010"
  },
  {
    "rank": 645,
    "id": "1335",
    "speaker": "Lisa Harouni",
    "name": "Lisa Harouni: A primer on 3D printing",
    "shortsummary": "2012 may be the year of 3D printing, when this three-decade-old technology finally becomes accessible and even commonplace. Lisa Harouni gives a useful introduction to this fascinating way of making things -- including intricate objects once impossible to create.",
    "duration": "0:14:49",
    "publishdate": "1/23/2012 16:17:00"
  },
  {
    "rank": 646,
    "id": "1797",
    "speaker": "Tania Luna",
    "name": "Tania Luna: How a penny made me feel like a millionaire",
    "shortsummary": "As a young child, Tania Luna left her home in post-Chernobyl Ukraine to take asylum in the US. And one day, on the floor of the New York homeless shelter where she and her family lived, she found a penny. She has never again felt so rich. A meditation on the bittersweet joys of childhood -- and how to hold them in mind.",
    "duration": "0:05:31",
    "publishdate": "7/26/2013 15:00:00"
  },
  {
    "rank": 647,
    "id": "1105",
    "speaker": "Claron McFadden",
    "name": "Claron McFadden: Singing the primal mystery",
    "shortsummary": "The human voice: mysterious, spontaneous, primal. With these words, soprano Claron McFadden invites us to explore the mysteries of breathing and singing, as she performs the challenging \"Aria,\" by John Cage.",
    "duration": "0:10:54",
    "publishdate": "3/25/2011"
  },
  {
    "rank": 648,
    "id": "516",
    "speaker": "JoAnn Kuchera-Morin",
    "name": "Tour the AlloSphere, a stunning new way to see scientific data",
    "shortsummary": "JoAnn Kuchera-Morin demos the AlloSphere, an entirely new way to see and interpret scientific data, in full color and surround sound inside a massive metal sphere. Dive into the brain, feel electron spin, hear the music of the elements ...",
    "duration": "0:06:27",
    "publishdate": "4/15/2009"
  },
  {
    "rank": 649,
    "id": "482",
    "speaker": "Aimee Mullins",
    "name": "How my legs give me super-powers",
    "shortsummary": "Athlete, actor and activist Aimee Mullins talks about her prosthetic legs -- she's got a dozen amazing pairs -- and the superpowers they grant her: speed, beauty, an extra 6 inches of height ... Quite simply, she redefines what the body can be.",
    "duration": "0:09:58",
    "publishdate": "3/11/2009"
  },
  {
    "rank": 650,
    "id": "85",
    "speaker": "Bill Clinton",
    "name": "TED Prize wish: Let's build a health care system in Rwanda",
    "shortsummary": "Accepting the 2007 TED Prize, Bill Clinton asks for help in bringing health care to Rwanda -- and the rest of the world.",
    "duration": "0:24:07",
    "publishdate": "4/3/2007"
  },
  {
    "rank": 651,
    "id": "674",
    "speaker": "Dayananda Saraswati",
    "name": " Swami Dayananda Saraswati: The profound journey of compassion",
    "shortsummary": "Swami Dayananda Saraswati unravels the parallel paths of personal development and attaining true compassion. He walks us through each step of self-realization, from helpless infancy to the fearless act of caring for others.",
    "duration": "0:16:54",
    "publishdate": "10/31/2008"
  },
  {
    "rank": 652,
    "id": "1692",
    "speaker": "Catarina Mota",
    "name": "Catarina Mota: Play with smart materials",
    "shortsummary": "Ink that conducts electricity; a window that turns from clear to opaque at the flip of a switch; a jelly that makes music. All this stuff exists, and Catarina Mota says: It's time to play with it. Mota leads us on a tour of surprising and cool new materials, and suggests that the way we'll figure out what they're good for is to experiment, tinker and have fun.",
    "duration": "0:09:55",
    "publishdate": "3/15/2013 15:06:00"
  },
  {
    "rank": 653,
    "id": "1133",
    "speaker": "Angela Belcher",
    "name": "Angela Belcher: Using nature to grow batteries",
    "shortsummary": "Inspired by an abalone shell, Angela Belcher programs viruses to make elegant nanoscale structures that humans can use. Selecting for high-performing genes through directed evolution, she's produced viruses that can construct powerful new batteries, clean hydrogen fuels and record-breaking solar cells. At TEDxCaltech, she shows us how it's done.",
    "duration": "0:10:25",
    "publishdate": "4/27/2011"
  },
  {
    "rank": 654,
    "id": "44",
    "speaker": "Nick Bostrom",
    "name": "Humanity's biggest problems aren't what you think they are",
    "shortsummary": "Oxford philosopher and transhumanist Nick Bostrom examines the future of humankind and asks whether we might alter the fundamental nature of humanity to solve our most intrinsic problems.",
    "duration": "0:16:52",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 655,
    "id": "455",
    "speaker": "Milton Glaser",
    "name": "How great design makes ideas new",
    "shortsummary": "From the TED archives: The legendary graphic designer Milton Glaser dives deep into a new painting inspired by Piero della Francesca. From here, he muses on what makes a convincing poster, by breaking down an idea and making it new.",
    "duration": "0:15:14",
    "publishdate": "2/11/2009"
  },
  {
    "rank": 656,
    "id": "821",
    "speaker": "Jonathan Drori",
    "name": "Jonathan Drori: Every pollen grain has a story",
    "shortsummary": "Pollen goes unnoticed by most of us, except when hay fever strikes. But microscopes reveal it comes in stunning colors and shapes -- and travels remarkably well. Jonathan Drori gives an up-close glimpse of these fascinating flecks of plant courtship.",
    "duration": "0:07:12",
    "publishdate": "4/8/2010"
  },
  {
    "rank": 657,
    "id": "865",
    "speaker": "Ken Robinson",
    "name": "Sir Ken Robinson: Bring on the learning revolution!",
    "shortsummary": "In this poignant, funny follow-up to his fabled 2006 talk, Sir Ken Robinson makes the case for a radical shift from standardized schools to personalized learning -- creating conditions where kids' natural talents can flourish.",
    "duration": "0:16:48",
    "publishdate": "5/24/2010"
  },
  {
    "rank": 658,
    "id": "965",
    "speaker": "Julian Treasure",
    "name": "Julian Treasure: Shh! Sound health in 8 steps",
    "shortsummary": "Julian Treasure says our increasingly noisy world is gnawing away at our mental health -- even costing lives. He lays out an 8-step plan to soften this sonic assault (starting with those cheap earbuds) and restore our relationship with sound.",
    "duration": "0:07:14",
    "publishdate": "9/23/2010"
  },
  {
    "rank": 659,
    "id": "1033",
    "speaker": "Hanna Rosin",
    "name": "Hanna Rosin: New data on the rise of women",
    "shortsummary": "Hanna Rosin reviews startling new data that shows women actually surpassing men in several important measures, such as college graduation rates. Do these trends, both US-centric and global, signal the \"end of men\"? Probably not -- but they point toward an important societal shift worth deep discussion.\n\n",
    "duration": "0:16:12",
    "publishdate": "12/15/2010"
  },
  {
    "rank": 660,
    "id": "266",
    "speaker": "Yves Behar",
    "name": "Creating objects that tell stories",
    "shortsummary": "Designer Yves Behar digs up his creative roots to discuss some of the iconic objects he's created (the Leaf lamp, the Jawbone headset). Then he turns to the witty, surprising, elegant objects he's working on now -- including the \"$100 laptop.\"",
    "duration": "0:17:43",
    "publishdate": "5/21/2008"
  },
  {
    "rank": 661,
    "id": "230",
    "speaker": "Nicholas Negroponte",
    "name": "From 1984, 4 predictions about the future (3 of them correct)",
    "shortsummary": "With surprising accuracy, Nicholas Negroponte predicts what will happen with CD-ROMs, web interfaces, service kiosks, the touchscreen interface of the iPhone and his own One Laptop per Child project.",
    "duration": "0:25:23",
    "publishdate": "3/11/2008"
  },
  {
    "rank": 662,
    "id": "1755",
    "speaker": "Lisa Bu",
    "name": "Lisa Bu: How books can open your mind",
    "shortsummary": "What happens when a dream you've held since childhood â€¦ doesn't come true? As Lisa Bu adjusted to a new life in the United States, she turned to books to expand her mind and create a new path for herself. She shares her unique approach to reading in this lovely, personal talk about the magic of books.\n",
    "duration": "0:06:16",
    "publishdate": "5/31/2013 15:09:00"
  },
  {
    "rank": 663,
    "id": "1591",
    "speaker": "Tim Leberecht",
    "name": "Tim Leberecht: 3 ways to (usefully) lose control of your brand",
    "shortsummary": "The days are past (if they ever existed) when a person, company or brand could tightly control their reputation -- online chatter and spin mean that if you're relevant, there's a constant, free-form conversation happening about you that you have no control over. Tim Leberecht offers three big ideas about accepting that loss of control, even designing for it -- and using it as an impetus to recommit to your values.",
    "duration": "0:06:30",
    "publishdate": "10/8/2012 15:16:00"
  },
  {
    "rank": 664,
    "id": "1697",
    "speaker": "Eric Whitacre",
    "name": "Eric Whitacre: Virtual Choir Live",
    "shortsummary": "Composer and conductor Eric Whitacre has inspired millions by bringing together \"virtual choirs,\" singers from many countries spliced together on video. Now, for the first time ever, he creates the experience in real time, as 32 singers from around the world Skype in to join an onstage choir (assembled from three local colleges) for an epic performance of Whitacre's \"Cloudburst,\" based on a poem by Octavio Paz.",
    "duration": "0:12:32",
    "publishdate": "3/22/2013 14:49:00"
  },
  {
    "rank": 665,
    "id": "1419",
    "speaker": "Tal Golesworthy",
    "name": "Tal Golesworthy: How I repaired my own heart",
    "shortsummary": "Tal Golesworthy is a boiler engineer -- he knows piping and plumbing. When he needed surgery to repair a life-threatening problem with his aorta, he mixed his engineering skills with his doctors' medical knowledge to design a better repair job.",
    "duration": "0:13:14",
    "publishdate": "4/12/2012 15:00:00"
  },
  {
    "rank": 666,
    "id": "762",
    "speaker": "Tom Shannon",
    "name": "Tom Shannon: The painter and the pendulum",
    "shortsummary": "TED visits Tom Shannon in his Manhattan studio for an intimate look at his science-inspired art. An eye-opening, personal conversation with John Hockenberry reveals how nature's forces -- and the onset of Parkinson's tremors -- interact in his life and craft.",
    "duration": "0:13:21",
    "publishdate": "2/5/2010"
  },
  {
    "rank": 667,
    "id": "91",
    "speaker": "Jacqueline Novogratz",
    "name": "Investing in Africa's own solutions",
    "shortsummary": "Jacqueline Novogratz applauds the world's heightened interest in Africa and poverty, but argues persuasively for a new approach.",
    "duration": "0:12:53",
    "publishdate": "10/10/2006"
  },
  {
    "rank": 668,
    "id": "1181",
    "speaker": "Dave deBronkart",
    "name": "Dave deBronkart: Meet e-Patient Dave",
    "shortsummary": "When Dave deBronkart learned he had a rare and terminal cancer, he turned to a group of fellow patients online -- and found a medical treatment that even his own doctors didn't know. It saved his life. Now he calls on all patients to talk with one another, know their own health data, and make health care better one e-Patient at a time.",
    "duration": "0:16:31",
    "publishdate": "6/29/2011"
  },
  {
    "rank": 669,
    "id": "1685",
    "speaker": "Ron Finley",
    "name": "Ron Finley: A guerilla gardener in South Central LA",
    "shortsummary": "Ron Finley plants vegetable gardens in South Central LA -- in abandoned lots, traffic medians, along the curbs. Why? For fun, for defiance, for beauty and to offer some alternative to fast food in a community where \"the drive-thrus are killing more people than the drive-bys.\"",
    "duration": "0:10:45",
    "publishdate": "3/6/2013 16:06:00"
  },
  {
    "rank": 670,
    "id": "1295",
    "speaker": "Luis von Ahn",
    "name": "Luis von Ahn: Massive-scale online collaboration",
    "shortsummary": "After re-purposing CAPTCHA so each human-typed response helps digitize books, Luis von Ahn wondered how else to use small contributions by many on the Internet for greater good. At TEDxCMU, he shares how his ambitious new project, Duolingo, will help millions learn a new language while translating the Web quickly and accurately -- all for free.",
    "duration": "0:16:39",
    "publishdate": "12/6/2011"
  },
  {
    "rank": 671,
    "id": "1479",
    "speaker": "Rodney Mullen",
    "name": "Rodney Mullen: Pop an ollie and innovate!",
    "shortsummary": "The last thing Rodney Mullen, the godfather of street skating, wanted were competitive victories. In this exuberant talk he shares his love of the open skateboarding community and how the unique environments it plays in drive the creation of new tricks -- fostering prolific ingenuity purely for passion's sake. <em>(Filmed at <a href=http://www.ted.com/tedx/events/3558>TEDxUSC</a>.)</em>",
    "duration": "0:18:19",
    "publishdate": "6/16/2012 14:02:00"
  },
  {
    "rank": 672,
    "id": "911",
    "speaker": "Nalini Nadkarni",
    "name": "Nalini Nadkarni: Life science in prison",
    "shortsummary": "Nalini Nadkarni challenges our perspective on trees and prisons -- she says both can be more dynamic than we think. Through a partnership with the state of Washington, she brings science classes and conservation programs to inmates, with unexpected results.",
    "duration": "0:05:07",
    "publishdate": "7/8/2010"
  },
  {
    "rank": 673,
    "id": "1174",
    "speaker": "Bill Ford",
    "name": "Bill Ford: A future beyond traffic gridlock",
    "shortsummary": "Bill Ford is a car guy -- his great-grandfather was Henry Ford, and he grew up inside the massive Ford Motor Co. So when he worries about cars' impact on the environment, and about our growing global gridlock problem, it's worth a listen. His vision for the future of mobility includes \"smart roads,\" even smarter public transport and going green like never before.",
    "duration": "0:16:47",
    "publishdate": "6/20/2011"
  },
  {
    "rank": 674,
    "id": "1167",
    "speaker": "JD Schramm",
    "name": "JD Schramm: Break the silence for suicide survivors",
    "shortsummary": "Even when our lives appear fine from the outside, locked within can be a world of quiet suffering, leading some to the decision to end their life. At TEDYou, JD Schramm asks us to break the silence surrounding suicide and suicide attempts, and to create much-needed resources to help people who reclaim their life after escaping death. Resources: http://t.co/wsNrY9C",
    "duration": "0:04:14",
    "publishdate": "6/11/2011"
  },
  {
    "rank": 675,
    "id": "855",
    "speaker": "Dan Meyer",
    "name": "Dan Meyer: Math class needs a makeover",
    "shortsummary": "Today's math curriculum is teaching students to expect -- and excel at -- paint-by-numbers classwork, robbing kids of a skill more important than solving problems: formulating them. At TEDxNYED, Dan Meyer shows classroom-tested math exercises that prompt students to stop and think.",
    "duration": "0:11:39",
    "publishdate": "5/13/2010"
  },
  {
    "rank": 676,
    "id": "1805",
    "speaker": "Daniel H. Cohen",
    "name": "Daniel H. Cohen: For argument's sake",
    "shortsummary": "Why do we argue? To out-reason our opponents, prove them wrong, and, most of all, to win! ... Right? Philosopher Daniel H. Cohen shows how our most common form of argument -- a war in which one person must win and the other must lose -- misses out on the real benefits of engaging in active disagreement. <em>(Filmed at TEDxColbyCollege.)</em>",
    "duration": "0:09:35",
    "publishdate": "8/5/2013 15:00:00"
  },
  {
    "rank": 677,
    "id": "698",
    "speaker": "Magnus Larsson",
    "name": "Magnus Larsson: Turning dunes into architecture",
    "shortsummary": "Architecture student Magnus Larsson details his bold plan to transform the harsh Sahara desert using bacteria and a surprising construction material: the sand itself.",
    "duration": "0:11:43",
    "publishdate": "11/25/2009"
  },
  {
    "rank": 678,
    "id": "696",
    "speaker": "Rob Hopkins",
    "name": "Rob Hopkins: Transition to a world without oil",
    "shortsummary": "Rob Hopkins reminds us that the oil our world depends on is steadily running out. He proposes a unique solution to this problem -- the Transition response, where we prepare ourselves for life without oil and sacrifice our luxuries to build systems and communities that are completely independent of fossil fuels. ",
    "duration": "0:16:40",
    "publishdate": "11/24/2009"
  },
  {
    "rank": 679,
    "id": "1510",
    "speaker": "Jamie Drummond",
    "name": "Jamie Drummond: Let's crowdsource the world's goals",
    "shortsummary": "In 2000, the UN laid out 8 goals to make the world better by reducing poverty and disease -- with a deadline of 2015. As that deadline approaches, Jamie Drummond of ONE.org runs down the surprising successes of the 8 Millennium Development Goals, and suggests a crowdsourced reboot for the next 15 years.",
    "duration": "0:12:10",
    "publishdate": "7/17/2012 15:07:00"
  },
  {
    "rank": 680,
    "id": "504",
    "speaker": "P.W. Singer",
    "name": "Military robots and the future of war",
    "shortsummary": "In this powerful talk, P.W. Singer shows how the widespread use of robots in war is changing the realities of combat. He shows us scenarios straight out of science fiction -- that now may not be so fictitious.",
    "duration": "0:16:05",
    "publishdate": "4/3/2009"
  },
  {
    "rank": 681,
    "id": "1126",
    "speaker": "Kathryn Schulz",
    "name": "Kathryn Schulz: On being wrong",
    "shortsummary": "Most of us will do anything to avoid being wrong. But what if we're wrong about that? \"Wrongologist\" Kathryn Schulz makes a compelling case for not just admitting but embracing our fallibility.",
    "duration": "0:17:51",
    "publishdate": "4/19/2011"
  },
  {
    "rank": 682,
    "id": "1229",
    "speaker": "Elizabeth Murchison",
    "name": "Elizabeth Murchison: Fighting a contagious cancer",
    "shortsummary": "What is killing the Tasmanian devil? A virulent cancer is infecting them by the thousands  -- and unlike most cancers, it's contagious. Researcher Elizabeth Murchison tells us how she's fighting to save the Taz, and what she's learning about all cancers from this unusual strain. Contains disturbing images of facial cancer.",
    "duration": "0:13:03",
    "publishdate": "9/22/2011"
  },
  {
    "rank": 683,
    "id": "659",
    "speaker": "Henry Markram",
    "name": "Henry Markram builds a brain in a supercomputer",
    "shortsummary": "Henry Markram says the mysteries of the mind can be solved -- soon. Mental illness, memory, perception: they're made of neurons and electric signals, and he plans to find them with a supercomputer that models all the brain's 100,000,000,000,000 synapses.",
    "duration": "0:14:51",
    "publishdate": "10/15/2009"
  },
  {
    "rank": 684,
    "id": "1817",
    "speaker": "Jake Barton",
    "name": "Jake Barton: The museum of you",
    "shortsummary": "A third of the world watched live as the World Trade Center collapsed on September 11, 2001; a third more heard about it within 24 hours. (Do you remember where you were?) So exhibits at the soon-to-open 9/11 Memorial Museum will reflect the diversity of the world's experiences of that day. In a moving talk, designer Jake Barton gives a peek at some of those installations, as well as several other projects that aim to make the observer an active participant in the exhibit.",
    "duration": "0:15:38",
    "publishdate": "9/10/2013 14:59:00"
  },
  {
    "rank": 685,
    "id": "1264",
    "speaker": "Martin Hanczyc",
    "name": "Martin Hanczyc: The line between life and not-life",
    "shortsummary": "In his lab, Martin Hanczyc makes \"protocells,\" experimental blobs of chemicals that behave like living cells. His work demonstrates how life might have first occurred on Earth ... and perhaps elsewhere too.",
    "duration": "0:14:37",
    "publishdate": "11/7/2011"
  },
  {
    "rank": 686,
    "id": "1248",
    "speaker": "Bunker Roy",
    "name": "Bunker Roy: Learning from a barefoot movement",
    "shortsummary": "In Rajasthan, India, an extraordinary school teaches rural women and men -- many of them illiterate -- to become solar engineers, artisans, dentists and doctors in their own villages. It's called the Barefoot College, and its founder, Bunker Roy, explains how it works.",
    "duration": "0:19:07",
    "publishdate": "10/17/2011"
  },
  {
    "rank": 687,
    "id": "644",
    "speaker": "Jacqueline Novogratz",
    "name": "Jacqueline Novogratz: A third way to think about aid",
    "shortsummary": "The debate over foreign aid often pits those who mistrust \"charity\" against those who mistrust reliance on the markets. Jacqueline Novogratz proposes a middle way she calls patient capital, with promising examples of entrepreneurial innovation driving social change.",
    "duration": "0:17:04",
    "publishdate": "9/25/2009"
  },
  {
    "rank": 688,
    "id": "958",
    "speaker": "Nicholas Christakis",
    "name": "Nicholas Christakis: How social networks predict epidemics",
    "shortsummary": "After mapping humans' intricate social networks, Nicholas Christakis and colleague James Fowler began investigating how this information could better our lives. Now, he reveals his hot-off-the-press findings: These networks can be used to detect epidemics earlier than ever, from the spread of innovative ideas to risky behaviors to viruses (like H1N1). ",
    "duration": "0:17:54",
    "publishdate": "9/16/2010"
  },
  {
    "rank": 689,
    "id": "1118",
    "speaker": "David Christian",
    "name": "David Christian: Big history",
    "shortsummary": "Backed by stunning illustrations, David Christian narrates a complete history of the universe, from the Big Bang to the Internet, in a riveting 18 minutes. This is \"Big History\": an enlightening, wide-angle look at complexity, life and humanity, set against our slim share of the cosmic timeline.",
    "duration": "0:17:40",
    "publishdate": "4/11/2011"
  },
  {
    "rank": 690,
    "id": "1088",
    "speaker": "Anthony Atala",
    "name": "Anthony Atala: Printing a human kidney",
    "shortsummary": "Surgeon Anthony Atala demonstrates an early-stage experiment that could someday solve the organ-donor problem: a 3D printer that uses living cells to output a transplantable kidney. Using similar technology, Dr. Atala's young patient Luke Massella received an engineered bladder 10 years ago; we meet him onstage.",
    "duration": "0:17:24",
    "publishdate": "3/7/2011"
  },
  {
    "rank": 691,
    "id": "96",
    "speaker": "Tony Robbins",
    "name": "Why we do what we do, and how we can do it better",
    "shortsummary": "Tony Robbins discusses the \"invisible forces\" that motivate everyone's actions -- and high-fives Al Gore in the front row.",
    "duration": "0:21:45",
    "publishdate": "6/27/2006"
  },
  {
    "rank": 692,
    "id": "1373",
    "speaker": "Daniel Pauly",
    "name": "Daniel Pauly: The ocean's shifting baseline",
    "shortsummary": "The ocean has degraded within our lifetimes, as shown in the decreasing average size of fish. And yet, as Daniel Pauly shows us onstage at Mission Blue, each time the baseline drops, we call it the new \"normal.\" At what point do we stop readjusting downward?",
    "duration": "0:09:02",
    "publishdate": "2/28/2012 17:45:00"
  },
  {
    "rank": 693,
    "id": "319",
    "speaker": "Kevin Kelly",
    "name": "Predicting the next 5,000 days of the web",
    "shortsummary": "At the 2007 EG conference, Kevin Kelly shares a fun stat: The World Wide Web, as we know it, is only 5,000 days old. Now, Kelly asks, how can we predict what's coming in the next 5,000 days?",
    "duration": "0:19:34",
    "publishdate": "7/28/2008"
  },
  {
    "rank": 694,
    "id": "1813",
    "speaker": "Steve Ramirez, Xu Liu",
    "name": "Steve Ramirez and Xu Liu: A mouse. A laser beam. A manipulated memory.",
    "shortsummary": "Can we edit the content of our memories? It's a sci-fi-tinged question that Steve Ramirez and Xu Liu are asking in their lab at MIT. Essentially, the pair shoot a laser beam into the brain of a living mouse to activate and manipulate its memory. In this unexpectedly amusing talk they share not only how, but -- more importantly -- why they do this. (<em>Filmed at TEDxBoston.</em>)",
    "duration": "0:15:25",
    "publishdate": "8/15/2013 15:02:00"
  },
  {
    "rank": 695,
    "id": "726",
    "speaker": "Nick Veasey",
    "name": "Nick Veasey: Exposing the invisible",
    "shortsummary": "Nick Veasey shows outsized X-ray images that reveal the otherworldly inner workings of familiar objects -- from the geometry of a wildflower to the anatomy of a Boeing 747. Producing these photos is dangerous and painstaking, but the reward is a superpower: looking at what the human eye can't see.",
    "duration": "0:13:18",
    "publishdate": "1/5/2010"
  },
  {
    "rank": 696,
    "id": "386",
    "speaker": "Newton Aduaka",
    "name": "The story of Ezra, a child soldier",
    "shortsummary": "Filmmaker Newton Aduaka shows clips from his powerful, lyrical feature film \"Ezra,\" about a child soldier in Sierra Leone.",
    "duration": "0:18:44",
    "publishdate": "10/31/2008"
  },
  {
    "rank": 697,
    "id": "183",
    "speaker": "Paul Rothemund",
    "name": "Casting spells with DNA",
    "shortsummary": "Paul Rothemund writes code that causes DNA to arrange itself into a star, a smiley face and more. Sure, it's a stunt, but it's also a demonstration of self-assembly at the smallest of scales -- with vast implications for the future of making things.",
    "duration": "0:04:59",
    "publishdate": "11/8/2007"
  },
  null,
  {
    "rank": 699,
    "id": "1011",
    "speaker": "Kristina Gjerde",
    "name": "Kristina Gjerde: Making law on the high seas",
    "shortsummary": "Kristina Gjerde studies the law of the high seas -- the 64 percent of our ocean that isn't protected by any national law at all. Gorgeous photos show the hidden worlds that Gjerde and other lawyers are working to protect from trawling and trash-dumping, through smart policymaking and a healthy dose of PR.",
    "duration": "0:15:46",
    "publishdate": "11/19/2010"
  },
  {
    "rank": 700,
    "id": "1771",
    "speaker": "Joseph Kim",
    "name": "Joseph Kim: The family I lost in North Korea. And the family I gained.",
    "shortsummary": "A refugee now living in the US, Joseph Kim tells the story of his life in North Korea during the famine years. He's begun to create a new life -- but he still searches for the family he lost.",
    "duration": "0:21:23",
    "publishdate": "6/19/2013 15:09:00"
  },
  {
    "rank": 701,
    "id": "280",
    "speaker": "Robert Full",
    "name": "How engineers learn from evolution",
    "shortsummary": "Insects and animals have evolved some amazing skills -- but, as Robert Full notes, many animals are actually over-engineered. The trick is to copy only what's necessary. He shows how human engineers can learn from animals' tricks.",
    "duration": "0:20:22",
    "publishdate": "6/19/2008"
  },
  {
    "rank": 702,
    "id": "68",
    "speaker": "Robert Wright",
    "name": "How cooperation (eventually) trumps conflict",
    "shortsummary": "Author Robert Wright explains \"non-zero-sumness\" -- the network of linked fortunes and cooperation that has guided our evolution to this point -- and how we can use it to help save humanity today.",
    "duration": "0:19:11",
    "publishdate": "1/17/2007"
  },
  {
    "rank": 703,
    "id": "901",
    "speaker": "Mitchell Joachim",
    "name": "Mitchell Joachim: Don't build your home, grow it!",
    "shortsummary": "TED Fellow and urban designer Mitchell Joachim presents his vision for sustainable, organic architecture: eco-friendly abodes grown from plants and -- wait for it -- meat.",
    "duration": "0:02:56",
    "publishdate": "7/2/2010"
  },
  {
    "rank": 704,
    "id": "1584",
    "speaker": "Ruby Wax",
    "name": "Ruby Wax: What's so funny about mental illness?",
    "shortsummary": "Diseases of the body garner sympathy, says comedian Ruby Wax -- except those of the brain. Why is that? With dazzling energy and humor, Wax, diagnosed a decade ago with clinical depression, urges us to put an end to the stigma of mental illness.",
    "duration": "0:08:44",
    "publishdate": "10/10/2012 15:01:00"
  },
  {
    "rank": 705,
    "id": "653",
    "speaker": "Beau Lotto",
    "name": "Beau Lotto: Optical illusions show how we see",
    "shortsummary": "Beau Lotto's color games puzzle your vision, but they also spotlight what you can't normally see: how your brain works. This fun, first-hand look at your own versatile sense of sight reveals how evolution tints your perception of what's really out there.",
    "duration": "0:16:31",
    "publishdate": "10/8/2009"
  },
  {
    "rank": 706,
    "id": "992",
    "speaker": "Joseph Nye",
    "name": "Joseph Nye on global power shifts",
    "shortsummary": "Historian and diplomat Joseph Nye gives us the 30,000-foot view of the shifts in power between China and the US, and the global implications as economic, political and \"soft\" power shifts and moves around the globe.",
    "duration": "0:18:15",
    "publishdate": "10/26/2010"
  },
  {
    "rank": 707,
    "id": "146",
    "speaker": "Will Wright",
    "name": "Toys that make worlds",
    "shortsummary": "In a friendly, high-speed presentation, Will Wright demos his newest game, Spore, which promises to dazzle users even more than his previous masterpieces.",
    "duration": "0:16:37",
    "publishdate": "7/17/2007"
  },
  {
    "rank": 708,
    "id": "663",
    "speaker": "Itay Talgam",
    "name": "Itay Talgam: Lead like the great conductors",
    "shortsummary": "An orchestra conductor faces the ultimate leadership challenge: creating perfect harmony without saying a word. In this charming talk, Itay Talgam demonstrates the unique styles of six great 20th-century conductors, illustrating crucial lessons for all leaders.",
    "duration": "0:20:52",
    "publishdate": "10/21/2009"
  },
  {
    "rank": 709,
    "id": "118",
    "speaker": "Sergey Brin and Larry Page",
    "name": "Inside the Google machine",
    "shortsummary": "Google co-founders Larry Page and Sergey Brin offer a peek inside the Google machine, sharing tidbits about international search patterns, the philanthropic Google Foundation, and the company's dedication to innovation and employee happiness.",
    "duration": "0:20:33",
    "publishdate": "5/3/2007"
  },
  {
    "rank": 710,
    "id": "666",
    "speaker": "David Deutsch",
    "name": "David Deutsch: A new way to explain explanation",
    "shortsummary": "For tens of thousands of years our ancestors understood the world through myths, and the pace of change was glacial. The rise of scientific understanding transformed the world within a few centuries. Why? Physicist David Deutsch proposes a subtle answer.",
    "duration": "0:16:39",
    "publishdate": "10/26/2009"
  },
  {
    "rank": 711,
    "id": "1069",
    "speaker": "Nigel Marsh",
    "name": "Nigel Marsh: How to make work-life balance work",
    "shortsummary": "Work-life balance, says Nigel Marsh, is too important to be left in the hands of your employer. At TEDxSydney, Marsh lays out an ideal day balanced between family time, personal time and productivity -- and offers some stirring encouragement to make it happen.",
    "duration": "0:10:05",
    "publishdate": "2/7/2011"
  },
  {
    "rank": 712,
    "id": "1065",
    "speaker": "Dale Dougherty",
    "name": "Dale Dougherty: We are makers",
    "shortsummary": "America was built by makers -- curious, enthusiastic amateur inventors whose tinkering habit sparked whole new industries. At TED@MotorCity, MAKE magazine publisher Dale Dougherty says we're all makers at heart, and shows cool new tools to tinker with, like Arduinos, affordable 3D printers, even DIY satellites.",
    "duration": "0:11:47",
    "publishdate": "2/1/2011"
  },
  {
    "rank": 713,
    "id": "603",
    "speaker": "Nina Jablonski",
    "name": "Nina Jablonski breaks the illusion of skin color",
    "shortsummary": "Nina Jablonski says that differing skin colors are simply our bodies' adaptation to varied climates and levels of UV exposure. Charles Darwin disagreed with this theory, but she explains, that's because he did not have access to NASA.",
    "duration": "0:14:48",
    "publishdate": "7/17/2009"
  },
  {
    "rank": 714,
    "id": "996",
    "speaker": "Tom Chatfield",
    "name": "Tom Chatfield: 7 ways games reward the brain",
    "shortsummary": "We're bringing gameplay into more aspects of our lives, spending countless hours -- and real money -- exploring virtual worlds for imaginary treasures. Why? As Tom Chatfield shows, games are perfectly tuned to dole out rewards that engage the brain and keep us questing for more.",
    "duration": "0:16:28",
    "publishdate": "11/1/2010"
  },
  {
    "rank": 715,
    "id": "1724",
    "speaker": "Jennifer Healey",
    "name": "Jennifer Healey: If cars could talk, accidents might be avoidable",
    "shortsummary": "When we drive, we get into a glass bubble, lock the doors and press the accelerator, relying on our eyes to guide us -- even though we can only see the few cars ahead of and behind us. But what if cars could share data with each other about their position and velocity, and use predictive models to calculate the safest routes for everyone on the road? Jennifer Healey imagines a world without accidents. (<em>Filmed at TED@Intel.</em>)",
    "duration": "0:09:00",
    "publishdate": "4/25/2013 14:59:00"
  },
  {
    "rank": 716,
    "id": "869",
    "speaker": "Seth Berkley",
    "name": "Seth Berkley: HIV and flu -- the vaccine strategy",
    "shortsummary": "Seth Berkley explains how smart advances in vaccine design, production and distribution are bringing us closer than ever to eliminating a host of global threats -- from AIDS to malaria to flu pandemics. ",
    "duration": "0:21:05",
    "publishdate": "5/27/2010"
  },
  {
    "rank": 717,
    "id": "1449",
    "speaker": "David Kelley",
    "name": "David Kelley: How to build your creative confidence",
    "shortsummary": "Is your school or workplace divided into \"creatives\" versus practical people? Yet surely, David Kelley suggests, creativity is not the domain of only a chosen few. Telling stories from his legendary design career and his own life, he offers ways to build the confidence to create... <i>(From The Design Studio session at TED2012, guest-curated by <a href=\"http://www.ted.com/speakers/chee_pearlman.html/\">Chee Pearlman</a> and <a href=\"http://www.ted.com/speakers/david_rockwell.html\">David Rockwell</a>.)</i>",
    "duration": "0:11:46",
    "publishdate": "5/16/2012 15:30:00"
  },
  {
    "rank": 718,
    "id": "117",
    "speaker": "Natalie MacMaster, Thomas Dolby",
    "name": "Fiddling in reel time",
    "shortsummary": "Violinist Natalie MacMaster and TED Musical Director Thomas Dolby play Dolby's original song \"Blue Is a River\" in this ethereal duet -- with a little dancing. ",
    "duration": "0:05:11",
    "publishdate": "5/1/2007"
  },
  {
    "rank": 719,
    "id": "1463",
    "speaker": "Sebastian Deterding",
    "name": "Sebastian Deterding: What your designs say about you",
    "shortsummary": "What does your chair say about what you value? Designer Sebastian Deterding shows how our visions of morality and what the good life is are reflected in the design of objects around us.\n<em>(Filmed at <a href=http://www.tedxhogeschoolutrecht.com/>TEDxHogeschoolUtrecht</a>.)</em>\n",
    "duration": "0:12:23",
    "publishdate": "5/31/2012 15:13:00"
  },
  {
    "rank": 720,
    "id": "442",
    "speaker": "Woody Norris",
    "name": "Inventing the next amazing thing",
    "shortsummary": "Woody Norris shows off two of his inventions that treat sound in new ways, and talks about his untraditional approach to inventing and education. As he puts it: \"Almost nothing has been invented yet.\" So -- what's next?",
    "duration": "0:13:49",
    "publishdate": "1/26/2009"
  },
  {
    "rank": 721,
    "id": "1501",
    "speaker": "Jane McGonigal",
    "name": "Jane McGonigal: The game that can give you 10 extra years of life",
    "shortsummary": "When game designer Jane McGonigal found herself bedridden and suicidal following a severe concussion, she had a fascinating idea for how to get better. She dove into the scientific research and created the healing game, SuperBetter. In this moving talk, McGonigal explains how a game can boost resilience -- and promises to add 7.5 minutes to your life.",
    "duration": "0:19:30",
    "publishdate": "7/9/2012 15:02:00"
  },
  {
    "rank": 722,
    "id": "23",
    "speaker": "Peter Gabriel",
    "name": "Fighting injustice with a videocamera",
    "shortsummary": "Musician and activist Peter Gabriel shares his very personal motivation for standing up for human rights with the watchdog group WITNESS -- and tells stories of citizen journalists in action.",
    "duration": "0:14:08",
    "publishdate": "12/6/2006"
  },
  {
    "rank": 723,
    "id": "874",
    "speaker": "Christopher \"moot\" Poole",
    "name": "Christopher \"moot\" Poole: The case for anonymity online",
    "shortsummary": "The founder of 4chan, a controversial, uncensored online imageboard, describes its subculture, some of the Internet \"memes\" it has launched, and the incident in which its users managed a very public, precision hack of a mainstream media website. The talk raises questions about the power -- and price -- of anonymity.",
    "duration": "0:13:10",
    "publishdate": "6/2/2010"
  },
  {
    "rank": 724,
    "id": "936",
    "speaker": "Seth Priebatsch",
    "name": "Seth Priebatsch: The game layer on top of the world",
    "shortsummary": "By now, we're used to letting Facebook and Twitter capture our social lives on the web -- building a \"social layer\" on top of the real world. At TEDxBoston, Seth Priebatsch looks at the next layer in progress: the \"game layer,\" a pervasive net of behavior-steering game dynamics that will reshape education and commerce.",
    "duration": "0:12:02",
    "publishdate": "8/20/2010"
  },
  {
    "rank": 725,
    "id": "767",
    "speaker": "Bill Gates",
    "name": "Bill Gates on energy: Innovating to zero!",
    "shortsummary": "At TED2010, Bill Gates unveils his vision for the world's energy future, describing the need for \"miracles\" to avoid planetary catastrophe and explaining why he's backing a dramatically different type of nuclear reactor. The necessary goal? Zero carbon emissions globally by 2050.",
    "duration": "0:27:49",
    "publishdate": "2/18/2010"
  },
  null,
  {
    "rank": 727,
    "id": "1586",
    "speaker": "Jason McCue",
    "name": "Jason McCue: Terrorism is a failed brand",
    "shortsummary": "In this gripping talk, lawyer Jason McCue urges for a new way to attack terrorism, to weaken its credibility with those who are buying the product -- the recruits. He shares stories of real cases where he and other activists used this approach to engage and create change.",
    "duration": "0:19:02",
    "publishdate": "10/3/2012 15:01:00"
  },
  {
    "rank": 728,
    "id": "1665",
    "speaker": "Erik Schlangen",
    "name": "Erik Schlangen: A \"self-healing\" asphalt",
    "shortsummary": "Paved roads are nice to drive on, but they're easily damaged and costly to repair. Erik Schlangen demos a new type of porous asphalt made of simple materials with an astonishing feature: When cracked, it can be \"healed\" by induction heating. <em>(Filmed at TEDxDelft.)</em>",
    "duration": "0:06:50",
    "publishdate": "2/12/2013 15:56:00"
  },
  {
    "rank": 729,
    "id": "474",
    "speaker": "Brenda Laurel",
    "name": "Why didn't girls play videogames?",
    "shortsummary": "A TED archive gem. At TED in 1998, Brenda Laurel asks: Why are all the top-selling videogames aimed at little boys? She spent two years researching the world of girls (and shares amazing interviews and photos) to create a game that girls would love.",
    "duration": "0:13:08",
    "publishdate": "3/2/2009"
  },
  {
    "rank": 730,
    "id": "1194",
    "speaker": "Kevin Slavin",
    "name": "Kevin Slavin: How algorithms shape our world ",
    "shortsummary": "Kevin Slavin argues that we're living in a world designed for -- and increasingly controlled by -- algorithms. In this riveting talk from TEDGlobal, he shows how these complex computer programs determine: espionage tactics, stock prices, movie scripts, and architecture. And he warns that we are writing code we can't understand, with implications we can't control.",
    "duration": "0:15:22",
    "publishdate": "7/21/2011"
  },
  {
    "rank": 731,
    "id": "1059",
    "speaker": "Martin Jacques",
    "name": "Martin Jacques: Understanding the rise of China",
    "shortsummary": "Speaking at a TED Salon in London, economist Martin Jacques asks: How do we in the West make sense of China and its phenomenal rise? The author of \"When China Rules the World,\" he examines why the West often puzzles over the growing power of the Chinese economy, and offers three building blocks for understanding what China is and will become.",
    "duration": "0:21:30",
    "publishdate": "1/24/2011"
  },
  {
    "rank": 732,
    "id": "392",
    "speaker": "Tim Brown",
    "name": "The powerful link between creativity and play",
    "shortsummary": "At the 2008 Serious Play conference, designer Tim Brown talks about the powerful relationship between creative thinking and play -- with many examples you can try at home (and one that maybe you shouldn't).",
    "duration": "0:27:58",
    "publishdate": "11/6/2008"
  },
  {
    "rank": 733,
    "id": "1327",
    "speaker": "Alain de Botton",
    "name": "Alain de Botton: Atheism 2.0",
    "shortsummary": "What aspects of religion should atheists (respectfully) adopt? Alain de Botton suggests a \"religion for atheists\" -- call it Atheism 2.0 -- that incorporates religious forms and traditions to satisfy our human need for connection, ritual and transcendence.",
    "duration": "0:19:20",
    "publishdate": "1/17/2012 15:05:00"
  },
  {
    "rank": 734,
    "id": "1351",
    "speaker": "Sheikha Al Mayassa",
    "name": "Sheikha Al Mayassa: Globalizing the local, localizing the global",
    "shortsummary": "Sheikha Al Mayassa, a patron of artists, storytellers and filmmakers in Qatar, talks about how art and culture create a country's identity -- and allow every country to share its unique identity with the wider world. As she says: \"We don't want to be all the same, but we do want to understand each other.\"",
    "duration": "0:10:53",
    "publishdate": "2/8/2012 16:28:00"
  },
  {
    "rank": 735,
    "id": "1759",
    "speaker": "Andrew McAfee",
    "name": "Andrew McAfee: What will future jobs look like?",
    "shortsummary": "Economist Andrew McAfee suggests that, yes, probably, droids will take our jobs -- or at least the kinds of jobs we know now. In this far-seeing talk, he thinks through what future jobs might look like, and how to educate coming generations to hold them.",
    "duration": "0:14:15",
    "publishdate": "6/10/2013 16:21:00"
  },
  {
    "rank": 736,
    "id": "1691",
    "speaker": " Bono",
    "name": "Bono: The good news on poverty (Yes, there's good news)",
    "shortsummary": "Human beings have been campaigning against inequality and poverty for 3,000 years. But this journey is accelerating. Bono \"embraces his inner nerd\" and shares inspiring data that shows the end of poverty is in sight â€¦ if we can harness the momentum.",
    "duration": "0:13:57",
    "publishdate": "3/14/2013 12:58:00"
  },
  {
    "rank": 737,
    "id": "1542",
    "speaker": "Scilla Elworthy",
    "name": "Scilla Elworthy: Fighting with non-violence",
    "shortsummary": "How do you deal with a bully without becoming a thug? In this wise and soulful talk, peace activist Scilla Elworthy maps out the skills we need -- as nations and individuals -- to fight extreme force without using force in return.Â To answer the question of why and how non-violence works, sheÂ evokes historical heroes --Â Aung San Suu Kyi, Mahatma Gandhi, Nelson Mandela -- and the personal philosophies that powered their peaceful protests. <em>(Filmed at TEDxExeter.)</em>",
    "duration": "0:15:47",
    "publishdate": "8/5/2012 15:03:00"
  },
  {
    "rank": 738,
    "id": "1819",
    "speaker": "Sonia Shah",
    "name": "Sonia Shah: 3 reasons we still haven't gotten rid of malaria",
    "shortsummary": "We've known how to cure malaria since the 1600s, so why does the disease still kill hundreds of thousands every year? It's more than just a problem of medicine, says journalist Sonia Shah. A look into the history of malaria reveals three big-picture challenges to its eradication. Photos: Adam Nadel.",
    "duration": "0:15:18",
    "publishdate": "9/12/2013 15:01:00"
  },
  {
    "rank": 739,
    "id": "1725",
    "speaker": "David Pogue",
    "name": "David Pogue: 10 top time-saving tech tips",
    "shortsummary": "Tech columnist David Pogue shares 10 simple, clever tips for computer, web, smartphone and camera users. And yes, you may know a few of these already -- but there's probably at least one you don't.",
    "duration": "0:05:44",
    "publishdate": "4/26/2013 15:07:00"
  },
  {
    "rank": 740,
    "id": "1116",
    "speaker": "Caroline Casey",
    "name": "Caroline Casey: Looking past limits",
    "shortsummary": "Activist Caroline Casey tells the story of her extraordinary life, starting with a revelation (no spoilers). In a talk that challenges perceptions, Casey asks us all to move beyond the limits we may think we have.",
    "duration": "0:19:17",
    "publishdate": "4/8/2011"
  },
  {
    "rank": 741,
    "id": "761",
    "speaker": "David Agus",
    "name": "David Agus: A new strategy in the war on cancer",
    "shortsummary": "Traditionally, David Agus explains, cancer treatments have had a short-sighted focus on the offending individual cells. He suggests a new, cross-disciplinary approach, using atypical drugs, computer modeling and protein analysis to treat and analyze the whole body.",
    "duration": "0:23:44",
    "publishdate": "2/4/2010"
  },
  {
    "rank": 742,
    "id": "1702",
    "speaker": "Lawrence Lessig",
    "name": "Lawrence Lessig: We the People, and the Republic we must reclaim",
    "shortsummary": "There is a corruption at the heart of American politics, caused by the dependence of Congressional candidates on funding from the tiniest percentage of citizens. That's the argument at the core of this blistering talk by legal scholar Lawrence Lessig. With rapid-fire visuals, he shows how the funding process weakens the Republic in the most fundamental way, and issues a rallying bipartisan cry that will resonate with many in the U.S. and beyond.",
    "duration": "0:18:19",
    "publishdate": "4/3/2013 13:54:00"
  },
  {
    "rank": 743,
    "id": "1473",
    "speaker": "Megan Kamerick",
    "name": "Megan Kamerick: Women should represent women in media",
    "shortsummary": "How do you tell women's stories? Ask women to tell them. At TEDxABQ, Megan Kamerick shows how the news media underrepresents women as reporters and news sources, and because of that tells an incomplete story. <em>(Filmed at <a href=http://www.ted.com/tedx/events/2141>TEDxABQ</a>.)</em>",
    "duration": "0:10:31",
    "publishdate": "6/17/2012 14:00:00"
  },
  {
    "rank": 744,
    "id": "924",
    "speaker": "Sheena Iyengar",
    "name": "Sheena Iyengar on the art of choosing",
    "shortsummary": "Sheena Iyengar studies how we make choices -- and how we feel about the choices we make. At TEDGlobal, she talks about both trivial choices (Coke v. Pepsi) and profound ones, and shares her groundbreaking research that has uncovered some surprising attitudes about our decisions.",
    "duration": "0:24:08",
    "publishdate": "7/26/2010"
  },
  {
    "rank": 745,
    "id": "938",
    "speaker": "Robert Lee Hotz",
    "name": "Lee Hotz: Inside an Antarctic time machine",
    "shortsummary": "Science columnist Lee Hotz describes a remarkable project at WAIS Divide, Antarctica, where a hardy team are drilling into ten-thousand-year-old ice to extract vital data on our changing climate.",
    "duration": "0:09:45",
    "publishdate": "8/24/2010"
  },
  {
    "rank": 746,
    "id": "1107",
    "speaker": "Ralph Langner",
    "name": "Ralph Langner: Cracking Stuxnet, a 21st-century cyber weapon",
    "shortsummary": "When first discovered in 2010, the Stuxnet computer worm posed a baffling puzzle. Beyond its unusually high level of sophistication loomed a more troubling mystery: its purpose. Ralph Langner and team helped crack the code that revealed this digital warhead's final target -- and its covert origins. In a fascinating look inside cyber-forensics, he explains how.",
    "duration": "0:10:40",
    "publishdate": "3/29/2011"
  },
  {
    "rank": 747,
    "id": "1669",
    "speaker": "Esther Perel",
    "name": "Esther Perel: The secret to desire in a long-term relationship",
    "shortsummary": "In long-term relationships, we often expect our beloved to be both best friend and erotic partner. But as Esther Perel argues, good <em>and</em> committed sex draws on two conflicting needs: our need for security and our need for surprise. So how do you sustain desire? With wit and eloquence, Perel lets us in on the mystery of erotic intelligence.\n",
    "duration": "0:19:10",
    "publishdate": "2/14/2013 16:07:00"
  },
  {
    "rank": 748,
    "id": "54",
    "speaker": "Cameron Sinclair",
    "name": "TED Prize wish: Open-source architecture to house the world",
    "shortsummary": "Accepting his 2006 TED Prize, Cameron Sinclair demonstrates how passionate designers and architects can respond to world housing crises. He unveils his TED Prize wish for a network to improve global living standards through collaborative design.",
    "duration": "0:23:34",
    "publishdate": "7/25/2006"
  },
  {
    "rank": 749,
    "id": "538",
    "speaker": "Seth Godin",
    "name": "Seth Godin on the tribes we lead",
    "shortsummary": "Seth Godin argues the Internet has ended mass marketing and revived a human social unit from the distant past: tribes. Founded on shared ideas and values, tribes give ordinary people the power to lead and make big change. He urges us to do so.",
    "duration": "0:17:23",
    "publishdate": "5/10/2009"
  },
  {
    "rank": 750,
    "id": "335",
    "speaker": "Peter Diamandis",
    "name": "Taking the next giant leap in space",
    "shortsummary": "Peter Diamandis says it's our moral imperative to keep exploring space -- and he talks about how, with the X Prize and other incentives, we're going to do just that.",
    "duration": "0:15:31",
    "publishdate": "9/3/2008"
  },
  {
    "rank": 751,
    "id": "1308",
    "speaker": "Antonio Damasio",
    "name": "Antonio Damasio: The quest to understand consciousness",
    "shortsummary": "Every morning we wake up and regain consciousness -- that is a marvelous fact -- but what exactly is it that we regain? Neuroscientist Antonio Damasio uses this simple question to give us a glimpse into how our brains create our sense of self.",
    "duration": "0:18:42",
    "publishdate": "12/19/2011"
  },
  {
    "rank": 752,
    "id": "1030",
    "speaker": "Halla Tomasdottir",
    "name": "Halla Tomasdottir: A feminine response to Iceland's financial crash",
    "shortsummary": "Halla Tomasdottir managed to take her company Audur Capital through the eye of the financial storm in Iceland by applying 5 traditionally \"feminine\" values to financial services. At TEDWomen, she talks about these values and the importance of balance. ",
    "duration": "0:09:45",
    "publishdate": "12/8/2010"
  },
  {
    "rank": 753,
    "id": "365",
    "speaker": "Jared Diamond",
    "name": "Why societies collapse",
    "shortsummary": "Why do societies fail? With lessons from the Norse of Iron Age Greenland, deforested Easter Island and present-day Montana, Jared Diamond talks about the signs that collapse is near, and how -- if we see it in time -- we can prevent it.",
    "duration": "0:18:21",
    "publishdate": "10/27/2008"
  },
  {
    "rank": 754,
    "id": "708",
    "speaker": "Marc Pachter",
    "name": "Marc Pachter: The art of the interview",
    "shortsummary": "Marc Pachter has conducted live interviews with some of the most intriguing characters in recent American history as part of a remarkable series created for the Smithsonian's National Portrait Gallery. He reveals the secret to a great interview and shares extraordinary stories of talking with Steve Martin, Clare Booth Luce and more.  ",
    "duration": "0:20:54",
    "publishdate": "12/9/2009"
  },
  {
    "rank": 755,
    "id": "70",
    "speaker": "Richard St. John",
    "name": "Secrets of success in 8 words, 3 minutes",
    "shortsummary": "Why do people succeed? Is it because they're smart? Or are they just lucky? Neither. Analyst Richard St. John condenses years of interviews into an unmissable 3-minute slideshow on the real secrets of success.",
    "duration": "0:03:30",
    "publishdate": "12/14/2006"
  },
  {
    "rank": 756,
    "id": "1314",
    "speaker": "Paddy Ashdown",
    "name": "Paddy Ashdown: The global power shift",
    "shortsummary": "Paddy Ashdown claims that we are living in a moment in history where power is changing in ways it never has before. In a spellbinding talk at TEDxBrussels he outlines the three major global shifts that he sees coming.",
    "duration": "0:18:29",
    "publishdate": "1/5/2012 16:04:00"
  },
  {
    "rank": 757,
    "id": "1036",
    "speaker": "Rufus Griscom + Alisa Volkman",
    "name": "Let's talk parenting taboos: Rufus Griscom + Alisa Volkman",
    "shortsummary": "Babble.com publishers Rufus Griscom and Alisa Volkman, in a lively tag-team, expose 4 facts that parents never, ever admit -- and why they should. Funny and honest, for parents and nonparents alike.",
    "duration": "0:17:08",
    "publishdate": "12/16/2010"
  },
  {
    "rank": 758,
    "id": "46",
    "speaker": "Jennifer Lin",
    "name": "Magical improv from 14-year-old pianist",
    "shortsummary": "Pianist and composer Jennifer Lin gives a magical performance, talks about the process of creativity and improvises a moving solo piece based on a random sequence of notes.",
    "duration": "0:24:05",
    "publishdate": "8/8/2006"
  },
  {
    "rank": 759,
    "id": "176",
    "speaker": "Paul MacCready",
    "name": "Flying on solar wings",
    "shortsummary": "Paul MacCready -- aircraft designer, environmentalist, and lifelong lover of flight -- talks about his long career.",
    "duration": "0:21:20",
    "publishdate": "9/26/2007"
  },
  {
    "rank": 760,
    "id": "1216",
    "speaker": "Joan Halifax",
    "name": "Joan Halifax: Compassion and the true meaning of empathy",
    "shortsummary": "Buddhist roshi Joan Halifax works with people at the last stage of life (in hospice and on death row). She shares what she's learned about compassion in the face of death and dying, and a deep insight into the nature of empathy.",
    "duration": "0:14:01",
    "publishdate": "9/2/2011"
  },
  {
    "rank": 761,
    "id": "48",
    "speaker": "Saul Griffith",
    "name": "Hardware solutions to everyday problems",
    "shortsummary": "Inventor and MacArthur fellow Saul Griffith shares some innovative ideas from his lab -- from \"smart rope\" to a house-sized kite for towing large loads.",
    "duration": "0:14:29",
    "publishdate": "2/19/2007"
  },
  {
    "rank": 762,
    "id": "1499",
    "speaker": "Cesar Harada",
    "name": "Cesar Harada: A novel idea for cleaning up oil spills",
    "shortsummary": "When TED Senior Fellow Cesar Harada heard about the devastating effects of the BP Oil spill in the Gulf of Mexico in 2010, he quit his dream job and moved to New Orleans to develop a more efficient way to soak up the oil. He designed a highly maneuverable, flexible boat capable of cleaning large tracts quickly. But rather than turn a profit, he has opted to open-source the design.",
    "duration": "0:14:30",
    "publishdate": "7/5/2012 14:57:00"
  },
  {
    "rank": 763,
    "id": "340",
    "speaker": "Jane Goodall",
    "name": "Helping humans and animals live together in Africa",
    "shortsummary": "The legendary chimpanzee researcher Jane Goodall talks about TACARE and her other community projects, which help people in booming African towns live side-by-side with threatened animals.",
    "duration": "0:23:46",
    "publishdate": "9/8/2008"
  },
  {
    "rank": 764,
    "id": "1468",
    "speaker": "Diane Kelly",
    "name": "Diane Kelly: What we didn't know about penis anatomy",
    "shortsummary": "We're not done with anatomy. We know a tremendous amount about genomics, proteomics and cell biology, but as Diane Kelly makes clear at TEDMED, there are basic facts about the human body we're still learning. Case in point: How does the mammalian erection work?",
    "duration": "0:11:20",
    "publishdate": "6/5/2012 14:59:00"
  },
  {
    "rank": 765,
    "id": "771",
    "speaker": "Philip K. Howard",
    "name": "Philip K. Howard: Four ways to fix a broken legal system",
    "shortsummary": "The land of the free has become a legal minefield, says Philip K. Howard -- especially for teachers and doctors, whose work has been paralyzed by fear of suits. What's the answer? A lawyer himself, Howard has four propositions for simplifying US law.",
    "duration": "0:18:21",
    "publishdate": "2/21/2010"
  },
  {
    "rank": 766,
    "id": "1595",
    "speaker": "Rory Stewart",
    "name": "Rory Stewart: Why democracy matters",
    "shortsummary": "The public is losing faith in democracy, says British MP Rory Stewart. Iraq and Afghanistan's new democracies are deeply corrupt; meanwhile, 84 percent of people in Britain say politics is broken. In this important talk, Stewart sounds a call to action to rebuild democracy, starting with recognizing why democracy is important -- not as a tool, but as an ideal.",
    "duration": "0:13:41",
    "publishdate": "10/29/2012 15:00:00"
  },
  {
    "rank": 767,
    "id": "1131",
    "speaker": "Harvey Fineberg",
    "name": "Harvey Fineberg: Are we ready for neo-evolution?",
    "shortsummary": "Medical ethicist Harvey Fineberg shows us three paths forward for the ever-evolving human species: to stop evolving completely, to evolve naturally -- or to control the next steps of human evolution, using genetic modification, to make ourselves smarter, faster, better. Neo-evolution is within our grasp. What will we do with it?",
    "duration": "0:17:21",
    "publishdate": "4/25/2011"
  },
  {
    "rank": 768,
    "id": "200",
    "speaker": "Daniel Goleman",
    "name": "Why aren't we all Good Samaritans? ",
    "shortsummary": "Daniel Goleman, author of \"Emotional Intelligence,\" asks why we aren't more compassionate more of the time. ",
    "duration": "0:13:13",
    "publishdate": "12/18/2007"
  },
  {
    "rank": 769,
    "id": "1505",
    "speaker": "Jared Ficklin",
    "name": "Jared Ficklin: New ways to see music (with color! and fire!)",
    "shortsummary": "Designer Jared Ficklin creates wild visualizations that let us see music, using color and even fire (a first for the TED stage) to analyze how sound makes us feel. He takes a brief digression to analyze the sound of a skatepark -- and how audio can clue us in to developing creativity.",
    "duration": "0:10:00",
    "publishdate": "7/13/2012 15:28:00"
  },
  {
    "rank": 770,
    "id": "1471",
    "speaker": "John Hodgman",
    "name": "John Hodgman: Design, explained.",
    "shortsummary": "John Hodgman, comedian and resident expert, \"explains\" the design of three iconic modern objects. <em>(From The Design Studio session at TED2012, guest-curated by Chee Pearlman and David Rockwell.)</em>",
    "duration": "0:06:23",
    "publishdate": "6/8/2012 15:56:00"
  },
  {
    "rank": 771,
    "id": "269",
    "speaker": "Susan Blackmore",
    "name": "Memes and \"temes\"",
    "shortsummary": "Susan Blackmore studies memes: ideas that replicate themselves from brain to brain like a virus. She makes a bold new argument: Humanity has spawned a new kind of meme, the teme, which spreads itself via technology -- and invents ways to keep itself alive",
    "duration": "0:19:28",
    "publishdate": "6/3/2008"
  },
  {
    "rank": 772,
    "id": "1259",
    "speaker": "Paul Zak",
    "name": "Paul Zak: Trust, morality -- and oxytocin",
    "shortsummary": "What drives our desire to behave morally? Neuroeconomist Paul Zak shows why he believes oxytocin (he calls it \"the moral molecule\") is responsible for trust, empathy and other feelings that help build a stable society.",
    "duration": "0:16:34",
    "publishdate": "11/1/2011"
  },
  {
    "rank": 773,
    "id": "1700",
    "speaker": "Mark Shaw",
    "name": "Mark Shaw: One very dry demo",
    "shortsummary": "Mark Shaw demos Ultra-Ever Dry, a liquid-repellent coating that acts as an astonishingly powerful shield against water and water-based materials. At the nano level, the spray covers a surface with an umbrella of air so that water bounces right off. Watch for an exciting two-minute kicker.",
    "duration": "0:05:31",
    "publishdate": "3/26/2013 15:00:00"
  },
  {
    "rank": 774,
    "id": "25",
    "speaker": "Richard Baraniuk",
    "name": "Goodbye, textbooks; hello, open-source learning",
    "shortsummary": "Rice University professor Richard Baraniuk explains the vision behind Connexions, his open-source, online education system. It cuts out the textbook, allowing teachers to share and modify course materials freely, anywhere in the world.",
    "duration": "0:18:34",
    "publishdate": "8/21/2006"
  },
  {
    "rank": 775,
    "id": "1270",
    "speaker": "Alexander Tsiaras",
    "name": "Alexander Tsiaras: Conception to birth -- visualized",
    "shortsummary": "Image-maker Alexander Tsiaras shares a powerful medical visualization, showing human development from conception to birth and beyond. (Some graphic images.)",
    "duration": "0:09:37",
    "publishdate": "11/14/2011"
  },
  {
    "rank": 776,
    "id": "1040",
    "speaker": "Sheryl Sandberg",
    "name": "Sheryl Sandberg: Why we have too few women leaders",
    "shortsummary": "Facebook COO Sheryl Sandberg looks at why a smaller percentage of women than men reach the top of their professions -- and offers 3 powerful pieces of advice to women aiming for the C-suite.",
    "duration": "0:14:58",
    "publishdate": "12/21/2010"
  },
  {
    "rank": 777,
    "id": "1457",
    "speaker": "Shereen El Feki",
    "name": "Shereen El-Feki: HIV -- how to fight an epidemic of bad laws",
    "shortsummary": "There is an epidemic of HIV, and with it an epidemic of bad laws -- laws that effectively criminalize being HIV positive. At the TEDxSummit in Doha, TED Fellow Shereen El-Feki gives a forceful argument that these laws, based in stigma, are actually helping the disease spread.",
    "duration": "0:15:28",
    "publishdate": "5/24/2012 15:00:00"
  },
  {
    "rank": 778,
    "id": "1001",
    "speaker": "Andrew Bird",
    "name": "Andrew Bird's one-man orchestra of the imagination",
    "shortsummary": "Musical innovator Andrew Bird winds together his trademark violin technique with xylophone, vocals and sophisticated electronic looping. Add in his uncanny ability to whistle anything, and he becomes a riveting one-man orchestra.  \n\n",
    "duration": "0:19:19",
    "publishdate": "11/5/2010"
  },
  {
    "rank": 779,
    "id": "259",
    "speaker": "Paul Ewald",
    "name": "Can we domesticate germs?",
    "shortsummary": "Evolutionary biologist Paul Ewald drags us into the sewer to discuss germs. Why are some more harmful than others? How could we make the harmful ones benign? Searching for answers, he examines a disgusting, fascinating case: diarrhea.",
    "duration": "0:17:51",
    "publishdate": "5/7/2008"
  },
  {
    "rank": 780,
    "id": "1203",
    "speaker": "Mark Pagel",
    "name": "Mark Pagel: How language transformed humanity",
    "shortsummary": "Biologist Mark Pagel shares an intriguing theory about why humans evolved our complex system of language. He suggests that language is a piece of \"social technology\" that allowed early human tribes to access a powerful new tool: cooperation.",
    "duration": "0:20:10",
    "publishdate": "8/3/2011"
  },
  {
    "rank": 781,
    "id": "1574",
    "speaker": "Andrew McAfee",
    "name": "Andrew McAfee: Are droids taking our jobs?",
    "shortsummary": "Robots and algorithms are getting good at jobs like building cars, writing articles, translating -- jobs that once required a human. So what will we humans do for work? Andrew McAfee walks through recent labor data to say: We ain't seen nothing yet. But then he steps back to look at big history, and comes up with a surprising and even thrilling view of what comes next. (Filmed at TEDxBoston.)",
    "duration": "0:14:07",
    "publishdate": "9/23/2012 15:10:00"
  },
  {
    "rank": 782,
    "id": "122",
    "speaker": "David Kelley",
    "name": "The future of design is human-centered",
    "shortsummary": "IDEO's David Kelley says that product design has become much less about the hardware and more about the user experience. He shows video of this new, broader approach, including footage from the Prada store in New York.",
    "duration": "0:17:00",
    "publishdate": "5/15/2007"
  },
  {
    "rank": 783,
    "id": "21",
    "speaker": "Mena Trott",
    "name": "How blogs are building a friendlier world",
    "shortsummary": "The founding mother of the blog revolution, Movable Type's Mena Trott, talks about the early days of blogging, when she realized that giving regular people the power to share our lives online is the key to building a friendlier, more connected world.",
    "duration": "0:16:46",
    "publishdate": "8/25/2006"
  },
  {
    "rank": 784,
    "id": "53",
    "speaker": "Majora Carter",
    "name": "Greening the ghetto",
    "shortsummary": "In an emotionally charged talk, MacArthur-winning activist Majora Carter details her fight for environmental justice in the South Bronx -- and shows how minority neighborhood suffer most from flawed urban policy.",
    "duration": "0:00:00",
    "publishdate": "6/27/2006"
  },
  {
    "rank": 785,
    "id": "74",
    "speaker": "Alex Steffen",
    "name": "Inspired ideas for a sustainable future",
    "shortsummary": "Worldchanging.com founder Alex Steffen argues that reducing humanity's ecological footprint is incredibly vital now, as the western consumer lifestyle spreads to developing countries.",
    "duration": "0:17:34",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 786,
    "id": "1256",
    "speaker": "Jay Bradner",
    "name": "Jay Bradner: Open-source cancer research",
    "shortsummary": "How does cancer know it's cancer? At Jay Bradner's lab, they found a molecule that might hold the answer, JQ1 -- and instead of patenting JQ1, they published their findings and mailed samples to 40 other labs to work on. An inspiring look at the open-source future of medical research.",
    "duration": "0:12:47",
    "publishdate": "10/27/2011"
  },
  {
    "rank": 787,
    "id": "1076",
    "speaker": "Jacqueline Novogratz",
    "name": "Jacqueline Novogratz: Inspiring a life of immersion",
    "shortsummary": "We each want to live a life of purpose, but where to start? In this luminous, wide-ranging talk, Jacqueline Novogratz introduces us to people she's met in her work in \"patient capital\" -- people who have immersed themselves in a cause, a community, a passion for justice. These human stories carry powerful moments of inspiration.",
    "duration": "0:17:48",
    "publishdate": "2/16/2011"
  },
  {
    "rank": 788,
    "id": "55",
    "speaker": "Jehane Noujaim",
    "name": "TED Prize wish: Unite the world on Pangea Day, a global day of film",
    "shortsummary": "In this hopeful talk, Jehane Noujaim unveils her 2006 TED Prize wish: to bring the world together for one day a year through the power of film.",
    "duration": "0:25:38",
    "publishdate": "7/25/2006"
  },
  {
    "rank": 789,
    "id": "1139",
    "speaker": "Sean Carroll",
    "name": "Sean Carroll: Distant time and the hint of a multiverse",
    "shortsummary": "At TEDxCaltech, cosmologist Sean Carroll attacks -- in an entertaining and thought-provoking tour through the nature of time and the universe -- a deceptively simple question: Why does time exist at all? The potential answers point to a surprising view of the nature of the universe, and our place in it.",
    "duration": "0:15:54",
    "publishdate": "5/5/2011"
  },
  {
    "rank": 790,
    "id": "67",
    "speaker": "Peter Donnelly",
    "name": "How juries are fooled by statistics",
    "shortsummary": "Oxford mathematician Peter Donnelly reveals the common mistakes humans make in interpreting statistics -- and the devastating impact these errors can have on the outcome of criminal trials.",
    "duration": "0:21:20",
    "publishdate": "11/8/2006"
  },
  {
    "rank": 791,
    "id": "152",
    "speaker": "Ngozi Okonjo-Iweala",
    "name": "Let's have a deeper discussion on aid",
    "shortsummary": "Ngozi Okonjo-Iweala, the former finance minister of Nigeria, sums up four days of intense discussion on aid versus trade on the closing day of TEDGlobal 2007, and shares a personal story explaining her own commitment to this cause. ",
    "duration": "0:22:10",
    "publishdate": "7/31/2007"
  },
  {
    "rank": 792,
    "id": "662",
    "speaker": "Paul Debevec",
    "name": "Paul Debevec animates a photo-real digital face",
    "shortsummary": "At TEDxUSC, computer graphics trailblazer Paul Debevec explains the scene-stealing technology behind Digital Emily, a digitally constructed human face so realistic it stands up to multiple takes.",
    "duration": "0:06:07",
    "publishdate": "10/20/2009"
  },
  {
    "rank": 793,
    "id": "1701",
    "speaker": "Colin Camerer",
    "name": "Colin Camerer: Neuroscience, game theory, monkeys",
    "shortsummary": "When two people are trying to make a deal -- whether they're competing or cooperating -- what's really going on inside their brains? Behavioral economist Colin Camerer shows research that reveals just how little we're able to predict what others are thinking. And he presents an unexpected study that shows chimpanzees might just be better at it than we are. <em>(Filmed at TEDxCalTech.)</em> ",
    "duration": "0:13:49",
    "publishdate": "3/28/2013 15:03:00"
  },
  {
    "rank": 794,
    "id": "1751",
    "speaker": "Hendrik Poinar",
    "name": "Hendrik Poinar: Bring back the woolly mammoth!",
    "shortsummary": "It's the dream of kids all around the world to see giant beasts walk the Earth again. Could -- and should -- that dream be realized? Hendrik Poinar gives an informative talk on the next -- really -- big thing: The quest to engineer a creature that looks very much like our furry friend, the woolly mammoth. The first step, to sequence the woolly genome, is nearly complete. And it's huge. <em>(Filmed at <a href=\"http://tedxdeextinction.org/\">TEDxDeExtinction.</a>)</em> ",
    "duration": "0:10:22",
    "publishdate": "5/30/2013 15:07:00"
  },
  {
    "rank": 795,
    "id": "886",
    "speaker": "Peter Tyack",
    "name": "Peter Tyack: The intriguing sound of marine mammals",
    "shortsummary": "Peter Tyack of Woods Hole talks about a hidden wonder of the sea: underwater sound. Onstage at Mission Blue, he explains the amazing ways whales use sound and song to communicate across hundreds of miles of ocean.",
    "duration": "0:21:20",
    "publishdate": "6/16/2010"
  },
  {
    "rank": 796,
    "id": "1688",
    "speaker": "Dan Pallotta",
    "name": "Dan Pallotta: The way we think about charity is dead wrong",
    "shortsummary": "Activist and fundraiser Dan Pallotta calls out the double standard that drives our broken relationship to charities. Too many nonprofits, he says, are rewarded for how little they spend -- not for what they get done. Instead of equating frugality with morality, he asks us to start rewarding charities for their big goals and big accomplishments (even if that comes with big expenses). In this bold talk, he says: Let's change the way we think about changing the world.",
    "duration": "0:18:54",
    "publishdate": "3/11/2013 15:12:00"
  },
  {
    "rank": 797,
    "id": "1514",
    "speaker": "Baba Shiv",
    "name": "Baba Shiv: Sometimes it's good to give up the driver's seat",
    "shortsummary": "Over the years, research has shown a counterintuitive fact about human nature: That sometimes, having too much choice makes us less happy. This may even be true when it comes to medical treatment. Baba Shiv shares a fascinating study that measures why choice opens the door to doubt, and suggests that ceding control -- especially on life-or-death decisions -- may be the best thing for us. <em>(Filmed at <a href=http://www.ted.com/tedx/events/5140>TEDxStanford</a>.)</em>\n",
    "duration": "0:09:47",
    "publishdate": "7/18/2012 14:59:00"
  },
  {
    "rank": 798,
    "id": "1576",
    "speaker": "Andrew Blum",
    "name": "Andrew Blum: What is the Internet, really?",
    "shortsummary": "When a squirrel chewed through a cable and knocked him offline,  journalist Andrew Blum started wondering what the Internet was really made of. So he set out to go see it -- the underwater cables, secret switches and other physical bits that make up the net.",
    "duration": "0:11:59",
    "publishdate": "9/19/2012 15:08:00"
  },
  {
    "rank": 799,
    "id": "1631",
    "speaker": "Ben Saunders",
    "name": "Ben Saunders: Why bother leaving the house?",
    "shortsummary": "Explorer Ben Saunders wants you to go outside! Not because it's always pleasant and happy, but because that's where the meat of life is, \"the juice that we can suck out of our hours and days.\" Saunders' next outdoor excursion? To try to be the first in the world to walk from the coast of Antarctica to the South Pole and back again.",
    "duration": "0:10:37",
    "publishdate": "12/14/2012 16:00:00"
  },
  {
    "rank": 800,
    "id": "312",
    "speaker": "Martin Seligman",
    "name": "What positive psychology can help you become",
    "shortsummary": "Martin Seligman talks about psychology -- as a field of study and as it works one-on-one with each patient and each practitioner. As it moves beyond a focus on disease, what can modern psychology help us to become?",
    "duration": "0:23:42",
    "publishdate": "7/21/2008"
  },
  {
    "rank": 801,
    "id": "1756",
    "speaker": "Andrew Solomon",
    "name": "Andrew Solomon: Love, no matter what",
    "shortsummary": "What is it like to raise a child who's different from you in some fundamental way (like a prodigy, or a differently abled kid, or a criminal)? In this quietly moving talk, writer Andrew Solomon shares what he learned from talking to dozens of parents -- asking them: What's the line between unconditional love and unconditional acceptance? ",
    "duration": "0:23:27",
    "publishdate": "6/3/2013 15:10:00"
  },
  {
    "rank": 802,
    "id": "225",
    "speaker": "Steve Jurvetson",
    "name": "The joy of rockets",
    "shortsummary": "Moneyman Steve Jurvetson takes TEDsters inside his awesome hobby -- launching model rockets -- by sharing some gorgeous photos, his infectious glee and just a whiff of danger.",
    "duration": "0:03:22",
    "publishdate": "2/27/2008"
  },
  {
    "rank": 803,
    "id": "1177",
    "speaker": "Honor Harger",
    "name": "Honor Harger: A history of the universe in sound",
    "shortsummary": "Artist-technologist Honor Harger listens to the weird and wonderful noises of stars and planets and pulsars. In her work, she tracks the radio waves emitted by ancient celestial objects and turns them into sound, including \"the oldest song you will ever hear,\" the sound of cosmic rays left over from the Big Bang.",
    "duration": "0:11:17",
    "publishdate": "6/23/2011"
  },
  {
    "rank": 804,
    "id": "1421",
    "speaker": "Atul Gawande",
    "name": "Atul Gawande: How do we heal medicine?",
    "shortsummary": "Our medical systems are broken. Doctors are capable of extraordinary (and expensive) treatments, but they are losing their core focus: actually treating people. Doctor and writer Atul Gawande suggests we take a step back and look at new ways to do medicine -- with fewer cowboys and more pit crews.",
    "duration": "0:19:19",
    "publishdate": "4/16/2012 15:28:00"
  },
  {
    "rank": 805,
    "id": "757",
    "speaker": "Sendhil Mullainathan",
    "name": "Sendhil Mullainathan: Solving social problems with a nudge",
    "shortsummary": "MacArthur winner Sendhil Mullainathan uses the lens of behavioral economics to study a tricky set of social problems -- those we know how to solve, but don't. We know how to reduce child deaths due to diarrhea, how to prevent diabetes-related blindness and how to implement solar-cell technology ... yet somehow, we don't or can't. Why?",
    "duration": "0:18:01",
    "publishdate": "2/1/2010"
  },
  {
    "rank": 806,
    "id": "1143",
    "speaker": "Ron Gutman",
    "name": "Ron Gutman: The hidden power of smiling",
    "shortsummary": "Ron Gutman reviews a raft of studies about smiling, and reveals some surprising results. Did you know your smile can be a predictor of how long you'll live -- and that a simple smile has a measurable effect on your overall well-being? Prepare to flex a few facial muscles as you learn more about this evolutionarily contagious behavior.",
    "duration": "0:07:26",
    "publishdate": "5/11/2011"
  },
  {
    "rank": 807,
    "id": "647",
    "speaker": "Karen Armstrong",
    "name": "Karen Armstrong: Let's revive the Golden Rule",
    "shortsummary": "Weeks from the Charter for Compassion launch, Karen Armstrong looks at religion's role in the 21st century: Will its dogmas divide us? Or will it unite us for common good? She reviews the catalysts that can drive the world's faiths to rediscover the Golden Rule.",
    "duration": "0:09:54",
    "publishdate": "9/29/2009"
  },
  {
    "rank": 808,
    "id": "1082",
    "speaker": "Danny Hillis",
    "name": "Danny Hillis: Understanding cancer through proteomics",
    "shortsummary": "Danny Hills makes a case for the next frontier of cancer research: proteomics, the study of proteins in the body. As Hillis explains it, genomics shows us a list of the ingredients of the body -- while proteomics shows us what those ingredients produce. Understanding what's going on in your body at the protein level may lead to a new understanding of how cancer happens. ",
    "duration": "0:19:55",
    "publishdate": "2/24/2011"
  },
  {
    "rank": 809,
    "id": "1484",
    "speaker": "Raghava KK",
    "name": "Raghava KK: What's your 200-year plan?",
    "shortsummary": "You might have a 5-year plan, but what about a 200-year plan? Artist Raghava KK has set his eyes on an ultra-long-term horizon; at TEDxSummit, he shows how it helps guide today's choices and tomorrow's goals -- and encourages you to make your own 200-year plan too.",
    "duration": "0:10:58",
    "publishdate": "7/4/2012 14:16:00"
  },
  {
    "rank": 810,
    "id": "998",
    "speaker": "Greg Stone",
    "name": "Greg Stone: Saving the ocean one island at a time",
    "shortsummary": "Aboard Mission Blue, scientist Greg Stone tells the story of how he helped the Republic of Kiribati create an enormous protected area in the middle of the Pacific -- protecting fish, sealife and the island nation itself.",
    "duration": "0:17:15",
    "publishdate": "11/3/2010"
  },
  {
    "rank": 811,
    "id": "102",
    "speaker": "Dan Dennett",
    "name": "Can we know our own minds?",
    "shortsummary": "Philosopher Dan Dennett makes a compelling argument that not only don't we understand our own consciousness, but that half the time our brains are actively fooling us.",
    "duration": "0:21:48",
    "publishdate": "4/6/2007"
  },
  {
    "rank": 812,
    "id": "640",
    "speaker": "Jonathan Zittrain",
    "name": "Jonathan Zittrain: The Web as random acts of kindness",
    "shortsummary": "Feeling like the world is becoming less friendly? Social theorist Jonathan Zittrain begs to difffer. The Internet, he suggests, is made up of millions of disinterested acts of kindness, curiosity and trust.",
    "duration": "0:19:51",
    "publishdate": "9/21/2009"
  },
  {
    "rank": 813,
    "id": "1376",
    "speaker": "Vijay Kumar",
    "name": "Vijay Kumar: Robots that fly ... and cooperate",
    "shortsummary": "In his lab at Penn, Vijay Kumar and his team build flying quadrotors, small, agile robots that swarm, sense each other, and form ad hoc teams -- for construction, surveying disasters and far more.",
    "duration": "0:16:46",
    "publishdate": "3/1/2012 15:34:00"
  },
  {
    "rank": 814,
    "id": "16",
    "speaker": "Helen Fisher",
    "name": "The science of love, and the future of women",
    "shortsummary": "Anthropologist Helen Fisher takes on a tricky topic -- love -- and explains its evolution, its biochemical foundations and its social importance. She closes with a warning about the potential disaster inherent in antidepressant abuse.",
    "duration": "0:23:27",
    "publishdate": "9/6/2006"
  },
  {
    "rank": 815,
    "id": "1389",
    "speaker": "Jonathan Haidt",
    "name": "Jonathan Haidt: Religion, evolution, and the ecstasy of self-transcendence",
    "shortsummary": "Psychologist Jonathan Haidt asks a simple, but difficult question: why do we search for self-transcendence? Why do we attempt to lose ourselves? In a tour through the science of evolution by group selection, he proposes a provocative answer.",
    "duration": "0:18:16",
    "publishdate": "3/14/2012 15:04:00"
  },
  {
    "rank": 816,
    "id": "498",
    "speaker": "John Wooden",
    "name": "Coaching for people, not points",
    "shortsummary": "With profound simplicity, Coach John Wooden redefines success and urges us all to pursue the best in ourselves. In this inspiring talk he shares the advice he gave his players at UCLA, quotes poetry and remembers his father's wisdom.  ",
    "duration": "0:17:36",
    "publishdate": "3/26/2009"
  },
  {
    "rank": 817,
    "id": "621",
    "speaker": "Natasha Tsakos",
    "name": "Natasha Tsakos' multimedia theatrical adventure",
    "shortsummary": "Natasha Tsakos presents part of her one-woman, multimedia show, \"Upwake.\" As the character Zero, she blends dream and reality with an inventive virtual world projected around her in 3D animation and electric sound.",
    "duration": "0:14:39",
    "publishdate": "8/28/2009"
  },
  {
    "rank": 818,
    "id": "939",
    "speaker": "Jim Toomey",
    "name": "Jim Toomey: Learning from Sherman the shark",
    "shortsummary": "Cartoonist Jim Toomey created the comic strip Sherman's Lagoon, a wry look at underwater life starring Sherman the talking shark. As he sketches some of his favorite sea creatures live onstage, Toomey shares his love of the ocean and the stories it can tell.",
    "duration": "0:14:15",
    "publishdate": "8/25/2010"
  },
  {
    "rank": 819,
    "id": "1344",
    "speaker": "Shawn Achor",
    "name": "Shawn Achor: The happy secret to better work",
    "shortsummary": "We believe that we should work to be happy, but could that be backwards? In this fast-moving and entertaining talk from TEDxBloomington, psychologist Shawn Achor argues that actually happiness inspires productivity.",
    "duration": "0:12:20",
    "publishdate": "2/1/2012 16:09:00"
  },
  {
    "rank": 820,
    "id": "932",
    "speaker": "Peter Molyneux",
    "name": "Peter Molyneux demos Milo, the virtual boy",
    "shortsummary": "Peter Molyneux demos Milo, a hotly anticipated video game for Microsoft's Kinect controller. Perceptive and impressionable like a real 11-year-old, the virtual boy watches, listens and learns -- recognizing and responding to you.",
    "duration": "0:10:55",
    "publishdate": "8/18/2010"
  },
  {
    "rank": 821,
    "id": "247",
    "speaker": "Yochai Benkler",
    "name": "Open-source economics",
    "shortsummary": "Yochai Benkler explains how collaborative projects like Wikipedia and Linux represent the next stage of human organization.",
    "duration": "0:17:52",
    "publishdate": "4/16/2008"
  },
  {
    "rank": 822,
    "id": "1560",
    "speaker": "Scott Fraser",
    "name": "Scott Fraser: Why eyewitnesses get it wrong",
    "shortsummary": "Scott Fraser studies how humans remember crimes -- and bear witness to them. In this powerful talk, which focuses on a deadly shooting at sunset, he suggests that even close-up eyewitnesses to a crime can create \"memories\" they could not have seen. Why? Because the brain abhors a vacuum.",
    "duration": "0:20:50",
    "publishdate": "9/10/2012 14:59:00"
  },
  {
    "rank": 823,
    "id": "76",
    "speaker": "Susan Savage-Rumbaugh",
    "name": "Apes that write, start fires and play Pac-Man",
    "shortsummary": "Savage-Rumbaugh's work with bonobo apes, which can understand spoken language and learn tasks by watching, forces the audience to rethink how much of what a species can do is determined by biology -- and how much by cultural exposure.",
    "duration": "0:17:25",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 824,
    "id": "915",
    "speaker": "Matt Ridley",
    "name": "Matt Ridley: When ideas have sex",
    "shortsummary": "At TEDGlobal 2010, author Matt Ridley shows how, throughout history, the engine of human progress has been the meeting and mating of ideas to make new ideas. It's not important how clever individuals are, he says; what really matters is how smart the collective brain is.",
    "duration": "0:16:26",
    "publishdate": "7/14/2010"
  },
  {
    "rank": 825,
    "id": "271",
    "speaker": "Nathan Myhrvold",
    "name": "A life of fascinations",
    "shortsummary": "Nathan Myhrvold talks about a few of his latest fascinations -- animal photography, archeology, BBQ and generally being an eccentric genius multimillionaire. Listen for wild stories from the (somewhat raunchy) edge of the animal world.",
    "duration": "0:17:14",
    "publishdate": "6/4/2008"
  },
  {
    "rank": 826,
    "id": "877",
    "speaker": "Adam Sadowsky",
    "name": "Adam Sadowsky engineers a viral music video",
    "shortsummary": "The band \"OK Go\" dreamed up the idea of a massive Rube Goldberg machine for their next music video -- and Adam Sadowsky's team was charged with building it. He tells the story of the effort and engineering behind their labyrinthine creation that quickly became a YouTube sensation. ",
    "duration": "0:14:28",
    "publishdate": "6/4/2010"
  },
  {
    "rank": 827,
    "id": "909",
    "speaker": "Benoit Mandelbrot",
    "name": "Benoit Mandelbrot: Fractals and the art of roughness",
    "shortsummary": "At TED2010, mathematics legend Benoit Mandelbrot develops a theme he first discussed at TED in 1984 -- the extreme complexity of roughness, and the way that fractal math can find order within patterns that seem unknowably complicated.",
    "duration": "0:17:09",
    "publishdate": "7/6/2010"
  },
  {
    "rank": 828,
    "id": "1271",
    "speaker": "Yves Rossy",
    "name": "Yves Rossy: Fly with the Jetman",
    "shortsummary": "Strapped to a jet-powered wing, Yves Rossy is the Jetman -- flying free, his body as the rudder, above the Swiss Alps and the Grand Canyon. After a powerful short film shows how it works, Rossy takes the TEDGlobal stage to share the experience and thrill of flying.",
    "duration": "0:14:48",
    "publishdate": "11/15/2011"
  },
  {
    "rank": 829,
    "id": "1223",
    "speaker": "Richard Resnick",
    "name": "Richard Resnick: Welcome to the genomic revolution",
    "shortsummary": "In this accessible talk from TEDxBoston, Richard Resnick shows how cheap and fast genome sequencing is about to turn health care (and insurance, and politics) upside down.",
    "duration": "0:11:02",
    "publishdate": "9/15/2011"
  },
  {
    "rank": 830,
    "id": "1490",
    "speaker": " Rives",
    "name": "Rives: Reinventing the encyclopedia game",
    "shortsummary": "Prompted by the Encyclopaedia Britannica ending its print publication, performance poet Rives resurrects a game from his childhood. Speaking at the TEDxSummit in Doha, Rives takes us on a charming tour through random (and less random) bits of human knowledge: from Chimborazo, the farthest point from the center of the Earth, to Ham the Astrochimp, the first chimpanzee in outer space.",
    "duration": "0:10:46",
    "publishdate": "6/26/2012 15:26:00"
  },
  {
    "rank": 831,
    "id": "815",
    "speaker": "Adora Svitak",
    "name": "Adora Svitak: What adults can learn from kids",
    "shortsummary": "Child prodigy Adora Svitak says the world needs \"childish\" thinking: bold ideas, wild creativity and especially optimism. Kids' big dreams deserve high expectations, she says, starting with grownups' willingness to learn from children as much as to teach.",
    "duration": "0:08:12",
    "publishdate": "4/1/2010"
  },
  {
    "rank": 832,
    "id": "427",
    "speaker": "John Maeda",
    "name": "My journey in design, from tofu to RISD",
    "shortsummary": "Designer John Maeda talks about his path from a Seattle tofu factory to the Rhode Island School of Design, where he became president in 2008. Maeda, a tireless experimenter and a witty observer, explores the crucial moment when design met computers.",
    "duration": "0:17:06",
    "publishdate": "1/6/2009"
  },
  {
    "rank": 833,
    "id": "628",
    "speaker": "James Balog",
    "name": "James Balog: Time-lapse proof of extreme ice loss",
    "shortsummary": "Photographer James Balog shares new image sequences from the Extreme Ice Survey, a network of time-lapse cameras recording glaciers receding at an alarming rate, some of the most vivid evidence yet of climate change. ",
    "duration": "0:19:22",
    "publishdate": "9/8/2009"
  },
  {
    "rank": 834,
    "id": "356",
    "speaker": "Stefan Sagmeister",
    "name": "Things I have learned in my life so far",
    "shortsummary": "Rockstar designer Stefan Sagmeister delivers a short, witty talk on life lessons, expressed through surprising modes of design (including ... inflatable monkeys?).",
    "duration": "0:04:45",
    "publishdate": "9/30/2008"
  },
  {
    "rank": 835,
    "id": "1426",
    "speaker": "Brian Greene",
    "name": "Brian Greene: Is our universe the only universe?",
    "shortsummary": "Is there more than one universe? In this visually rich, action-packed talk, Brian Greene shows how the unanswered questions of physics (starting with a big one: What caused the Big Bang?) have led to the theory that our own universe is just one of many in the \"multiverse.\"",
    "duration": "0:21:47",
    "publishdate": "4/23/2012 15:19:00"
  },
  {
    "rank": 836,
    "id": "9",
    "speaker": "Dean Kamen",
    "name": "Rolling along, helping students and the third world",
    "shortsummary": "Inventor Dean Kamen lays out his argument for the Segway and offers a peek into his next big ideas (portable energy and water purification for developing countries). ",
    "duration": "0:20:07",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 837,
    "id": "896",
    "speaker": "Clay Shirky",
    "name": "Clay Shirky: How cognitive surplus will change the world",
    "shortsummary": "Clay Shirky looks at \"cognitive surplus\" -- the shared, online work we do with our spare brain cycles. While we're busy editing Wikipedia, posting to Ushahidi (and yes, making LOLcats), we're building a better, more cooperative world.",
    "duration": "0:13:07",
    "publishdate": "6/28/2010"
  },
  {
    "rank": 838,
    "id": "1222",
    "speaker": "Kate Hartman",
    "name": "Kate Hartman: The art of wearable communication",
    "shortsummary": "Artist Kate Hartman uses wearable electronics to explore how we communicate, with ourselves and with the world. In this quirky and thought-provoking talk, she shows the \"Talk to Yourself Hat\", the \"Inflatable Heart\", the \"Glacier Embracing Suit\", and other unexpected devices.",
    "duration": "0:09:05",
    "publishdate": "9/14/2011"
  },
  {
    "rank": 839,
    "id": "1117",
    "speaker": "Jackson Browne",
    "name": "Jackson Browne: \"If I Could Be Anywhere\"",
    "shortsummary": "At TEDxGPGP, Jackson Browne plays a song he started writing last April aboard Mission Blue Voyage, the Sylvia Earle-inspired trip to brainstorm ways to save the ocean. \"If I could be anywhere,\" he sings, \"anywhere right now, I would be here.\" ",
    "duration": "0:04:26",
    "publishdate": "4/8/2011"
  },
  {
    "rank": 840,
    "id": "604",
    "speaker": "Gordon Brown",
    "name": "Gordon Brown: Wiring a web for global good",
    "shortsummary": "We're at a unique moment in history, says UK Prime Minister Gordon Brown: we can use today's interconnectedness to develop our shared global ethic -- and work together to confront the challenges of poverty, security, climate change and the economy.",
    "duration": "0:16:43",
    "publishdate": "7/21/2009"
  },
  {
    "rank": 841,
    "id": "534",
    "speaker": "Tom Shannon",
    "name": "Tom Shannon's anti-gravity sculpture",
    "shortsummary": "Tom Shannon shows off his gravity-defying, otherworldly sculpture -- made of simple, earthly materials -- that floats and spins like planets on magnets and suspension wire. It's science-inspired art at its most heavenly.",
    "duration": "0:11:55",
    "publishdate": "5/5/2009"
  },
  {
    "rank": 842,
    "id": "1713",
    "speaker": "Rose George",
    "name": "Rose George: Let's talk crap. Seriously.",
    "shortsummary": "It's 2013, yet 2.5 billion people in the world have no access to a basic sanitary toilet. And when there's no loo, where do you poo? In the street, probably near your water and food sources -- causing untold death and disease from contamination. Get ready for a blunt, funny, powerful talk from journalist Rose George about a once-unmentionable problem.",
    "duration": "0:14:01",
    "publishdate": "4/15/2013 15:00:00"
  },
  {
    "rank": 843,
    "id": "532",
    "speaker": "Sean Gourley",
    "name": "Sean Gourley on the mathematics of war",
    "shortsummary": "By pulling raw data from the news and plotting it onto a graph, Sean Gourley and his team have come up with a stunning conclusion about the nature of modern war -- and perhaps a model for resolving conflicts.",
    "duration": "0:07:19",
    "publishdate": "5/4/2009"
  },
  {
    "rank": 844,
    "id": "353",
    "speaker": "David S. Rose",
    "name": "10 things to know before you pitch a VC for money",
    "shortsummary": "Thinking startup? David S. Rose's rapid-fire TED U talk on pitching to a venture capitalist tells you the 10 things you need to know about yourself -- and prove to a VC -- before you fire up your slideshow.",
    "duration": "0:14:39",
    "publishdate": "9/19/2008"
  },
  {
    "rank": 845,
    "id": "1303",
    "speaker": "Pavan Sukhdev",
    "name": "Pavan Sukhdev: Put a value on nature!",
    "shortsummary": "Every day, we use materials from the earth without thinking, for free. But what if we had to pay for their true value: would it make us more careful about what we use and what we waste? Think of Pavan Sukhdev as nature's banker -- assessing the value of the Earth's assets. Eye-opening charts will make you think differently about the cost of air, water, trees ...",
    "duration": "0:16:31",
    "publishdate": "12/14/2011"
  },
  {
    "rank": 846,
    "id": "1481",
    "speaker": "Ivan Oransky",
    "name": "Ivan Oransky: Are we over-medicalized?",
    "shortsummary": "Reuters health editor Ivan Oransky warns that we're suffering from an epidemic of preposterous preconditions -- pre-diabetes, pre-cancer, and many more. In this engaging talk from TEDMED he shows how health care can find a solution... by taking an important lesson from baseball.",
    "duration": "0:10:24",
    "publishdate": "6/19/2012 15:01:00"
  },
  {
    "rank": 847,
    "id": "130",
    "speaker": "Bob Thurman",
    "name": "Becoming Buddha -- on the Web",
    "shortsummary": "In our hyperlinked world, we can know anything, anytime. And this mass enlightenment, says Buddhist scholar Bob Thurman, is our first step toward Buddha nature.",
    "duration": "0:12:06",
    "publishdate": "6/6/2007"
  },
  {
    "rank": 848,
    "id": "1569",
    "speaker": "Amy Cuddy",
    "name": "Amy Cuddy: Your body language shapes who you are",
    "shortsummary": "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy shows how \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can affect testosterone and cortisol levels in the brain, and might even have an impact on our chances for success.",
    "duration": "0:21:02",
    "publishdate": "10/1/2012 15:00:00"
  },
  {
    "rank": 849,
    "id": "804",
    "speaker": "Joel Levine",
    "name": "Joel Levine: Why we need to go back to Mars",
    "shortsummary": "At TEDxNASA, planetary scientist Joel Levine shows some intriguing -- and puzzling -- new discoveries about Mars: craters full of ice, traces of ancient oceans, and compelling hints at the presence, sometime in the past, of life. He makes the case for going back to Mars to find out more.",
    "duration": "0:16:14",
    "publishdate": "3/25/2010"
  },
  {
    "rank": 850,
    "id": "439",
    "speaker": "Jamais Cascio",
    "name": "Tools for building a better world",
    "shortsummary": "We all want to make the world better -- but how? Jamais Cascio looks at some specific tools and techniques that can make a difference. It's a fascinating talk that might just inspire you to act.",
    "duration": "0:16:15",
    "publishdate": "1/21/2009"
  },
  {
    "rank": 851,
    "id": "161",
    "speaker": "Erin McKean",
    "name": "Redefining the dictionary",
    "shortsummary": "Is the beloved paper dictionary doomed to extinction? In this infectiously exuberant talk, leading lexicographer Erin McKean looks at the many ways today's print dictionary is poised for transformation.",
    "duration": "0:15:50",
    "publishdate": "8/30/2007"
  },
  {
    "rank": 852,
    "id": "1743",
    "speaker": "Jay Silver",
    "name": "Jay Silver: Hack a banana, make a keyboard!",
    "shortsummary": "Why can't two slices of pizza be used as a slide clicker? Why shouldn't you make music with ketchup? In this charming talk, inventor Jay Silver talks about the urge to play with the world around you. He shares some of his messiest inventions, and demos MaKey MaKey, a kit for hacking everyday objects.",
    "duration": "0:13:15",
    "publishdate": "5/16/2013 15:06:00"
  },
  {
    "rank": 853,
    "id": "429",
    "speaker": "Paul Moller",
    "name": "Take a ride in the Skycar",
    "shortsummary": "Paul Moller talks about the future of personal air travel -- the marriage of autos and flight that will give us true freedom to travel off-road. He shows two things he's working on: the Moller Skycar (a jet + car) and a passenger-friendly hovering disc.",
    "duration": "0:15:39",
    "publishdate": "1/8/2009"
  },
  {
    "rank": 854,
    "id": "1648",
    "speaker": "Richard Weller",
    "name": "Richard Weller: Could the sun be good for your heart?",
    "shortsummary": "Our bodies get Vitamin D from the sun, but as dermatologist Richard Weller suggests, sunlight may confer another surprising benefit too. New research by his team shows that nitric oxide, a chemical transmitter stored in huge reserves in the skin, can be released by UV light, to great benefit for blood pressure and the cardiovascular system. What does it mean? Well, it might begin to explain why Scots get sick more than Australians ...",
    "duration": "0:12:59",
    "publishdate": "1/17/2013 16:18:00"
  },
  {
    "rank": 855,
    "id": "776",
    "speaker": "Pawan Sinha",
    "name": "Pawan Sinha on how brains learn to see",
    "shortsummary": "Pawan Sinha details his groundbreaking research into how the brain's visual system develops. Sinha and his team provide free vision-restoring treatment to children born blind, and then study how their brains learn to interpret visual data. The work offers insights into neuroscience, engineering and even autism.",
    "duration": "0:18:23",
    "publishdate": "2/25/2010"
  },
  {
    "rank": 856,
    "id": "1653",
    "speaker": "Young-ha Kim",
    "name": "Young-ha Kim: Be an artist, right now!",
    "shortsummary": "Why do we ever stop playing and creating? With charm and humor, celebrated Korean author Young-ha Kim invokes the world's greatest artists to urge you to unleash your inner child -- the artist who wanted to play forever. <em>(Filmed at TEDxSeoul.)</em>",
    "duration": "0:16:57",
    "publishdate": "2/15/2013 15:53:00"
  },
  {
    "rank": 857,
    "id": "43",
    "speaker": "Paul Bennett",
    "name": "Design is in the details",
    "shortsummary": "Showing a series of inspiring, unusual and playful products, British branding and design guru Paul Bennett explains that design doesn't have to be about grand gestures, but can solve small, universal and overlooked problems.",
    "duration": "0:14:10",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 858,
    "id": "1811",
    "speaker": "Adam Spencer",
    "name": "Adam Spencer: Why I fell in love with monster prime numbers",
    "shortsummary": "They're millions of digits long, and it takes an army of mathematicians and machines to hunt them down -- what's not to love about monster primes? Adam Spencer, comedian and lifelong math geek, shares his passion for these odd numbers, and for the mysterious magic of math.",
    "duration": "0:17:17",
    "publishdate": "9/3/2013 15:07:00"
  },
  {
    "rank": 859,
    "id": "410",
    "speaker": "Philip Rosedale",
    "name": "Second Life, where anything is possible",
    "shortsummary": "Why build a virtual world? Philip Rosedale talks about the virtual society he founded, Second Life, and its underpinnings in human creativity. It's a place so different that anything could happen.",
    "duration": "0:28:31",
    "publishdate": "12/3/2008"
  },
  {
    "rank": 860,
    "id": "12",
    "speaker": "Eva Vertes",
    "name": "My dream about the future of medicine",
    "shortsummary": "Eva Vertes -- only 19 when she gave this talk -- discusses her journey toward studying medicine and her drive to understand the roots of cancer and Alzheimer's.",
    "duration": "0:18:49",
    "publishdate": "10/2/2006"
  },
  {
    "rank": 861,
    "id": "1673",
    "speaker": "Afra Raymond",
    "name": "Afra Raymond: Three myths about corruption",
    "shortsummary": "Trinidad and Tobago amassed great wealth in the 1970s thanks to oil. But in 1982, a shocking fact was revealed -- that 2 out of every 3 dollars earmarked for development had been wasted or stolen. This has haunted Afra Raymond for 30 years. Shining a flashlight on a continued history of government corruption, Raymond gives us a reframing of financial crime. (<em>Filmed at TEDxPortofSpain.</em>)",
    "duration": "0:18:09",
    "publishdate": "2/20/2013 15:59:00"
  },
  {
    "rank": 862,
    "id": "1718",
    "speaker": "John McWhorter",
    "name": "John McWhorter: Txtng is killing language. JK!!!",
    "shortsummary": "Does texting mean the death of good writing skills? John McWhorter posits that there's much more to texting -- linguistically, culturally -- than it seems, and it's all good news. ",
    "duration": "0:13:48",
    "publishdate": "4/22/2013 14:59:00"
  },
  {
    "rank": 863,
    "id": "797",
    "speaker": "Eric Dishman",
    "name": "Eric Dishman: Take health care off the mainframe",
    "shortsummary": "At TEDMED, Eric Dishman makes a bold argument: The US health care system is like computing circa 1959, tethered to big, unwieldy central systems: hospitals, doctors, nursing homes. As our aging population booms, it's imperative, he says, to create personal, networked, home-based health care for all.",
    "duration": "0:16:41",
    "publishdate": "3/16/2010"
  },
  {
    "rank": 864,
    "id": "960",
    "speaker": "Christien Meindertsma",
    "name": "Christien Meindertsma: How pig parts make the world turn",
    "shortsummary": "Christien Meindertsma, author of \"Pig 05049\" looks at the astonishing afterlife of the ordinary pig, parts of which make their way into at least 185 non-pork products, from bullets to artificial hearts.",
    "duration": "0:08:54",
    "publishdate": "9/20/2010"
  },
  {
    "rank": 865,
    "id": "1297",
    "speaker": "Yoav Medan",
    "name": "Yoav Medan: Ultrasound surgery -- healing without cuts",
    "shortsummary": "Imagine having a surgery with no knives involved. At TEDMED, Yoav Medan shares a technique that uses MRI to find trouble spots and focused ultrasound to treat such issues as brain lesions, uterine fibroids and several kinds of cancerous growths.",
    "duration": "0:16:13",
    "publishdate": "12/8/2011"
  },
  {
    "rank": 866,
    "id": "1508",
    "speaker": "Gabriel Barcia-Colombo",
    "name": "Gabriel Barcia-Colombo: Capturing memories in video art ",
    "shortsummary": "Using video mapping and projection, artist Gabriel Barcia-Colombo captures and shares his memories and friendships. At TED Fellow Talks, he shows his charming, thoughtful work -- which appears to preserve the people in his life in jars, suitcases, blenders ...",
    "duration": "0:04:45",
    "publishdate": "7/15/2012 15:12:00"
  },
  {
    "rank": 867,
    "id": "655",
    "speaker": "Eric Sanderson",
    "name": "Eric Sanderson pictures New York -- before the City",
    "shortsummary": "400 years after Hudson found New York harbor, Eric Sanderson shares how he made a 3D map of Mannahatta's fascinating pre-city ecology of hills, rivers, wildlife -- accurate down to the block -- when Times Square was a wetland and you couldn't get delivery.",
    "duration": "0:16:09",
    "publishdate": "10/12/2009"
  },
  {
    "rank": 868,
    "id": "1435",
    "speaker": "Reuben Margolin",
    "name": "Reuben Margolin: Sculpting waves in wood and time",
    "shortsummary": "Reuben Margolin is a kinetic sculptor, crafting beautiful pieces that move in the pattern of raindrops falling and waves combining. Take nine minutes and be mesmerized by his meditative art -- inspired in equal parts by math and nature.\n",
    "duration": "0:08:58",
    "publishdate": "5/2/2012 15:00:00"
  },
  {
    "rank": 869,
    "id": "383",
    "speaker": "Rives",
    "name": "A 3-minute story of mixed emoticons",
    "shortsummary": "Rives tells a typographical fairy tale that's short and bittersweet ;)",
    "duration": "0:03:17",
    "publishdate": "10/28/2008"
  },
  {
    "rank": 870,
    "id": "1717",
    "speaker": "Andres Lozano",
    "name": "Andres Lozano: Parkinson's, depression and the switch that might turn them off",
    "shortsummary": "Deep brain stimulation is becoming very precise. This technique allows surgeons to place electrodes in almost any area of the brain, and turn them up or down -- like a radio dial or thermostat -- to correct dysfunction. Andres Lozano offers a dramatic look at emerging techniques, in which a woman with Parkinson's instantly stops shaking and brain areas eroded by Alzheimer's are brought back to life. (<em>Filmed at TEDxCaltech.</em>)",
    "duration": "0:15:34",
    "publishdate": "4/18/2013 15:00:00"
  },
  {
    "rank": 871,
    "id": "809",
    "speaker": "Shukla Bose",
    "name": "Shukla Bose: Teaching one child at a time",
    "shortsummary": "Educating the poor is more than just a numbers game, says Shukla Bose. She tells the story of her groundbreaking Parikrma Humanity Foundation, which brings hope to India's slums by looking past the daunting statistics and focusing on treating each child as an individual.",
    "duration": "0:16:23",
    "publishdate": "3/30/2010"
  },
  {
    "rank": 872,
    "id": "82",
    "speaker": "Dean Kamen",
    "name": "New prosthetic arm for veterans",
    "shortsummary": "Inventor Dean Kamen previews the prosthetic arm he's developing at the request of the US Department of Defense. His quiet commitment to using technology to solve problems -- while honoring the human spirit -- has never been more clear.",
    "duration": "0:05:10",
    "publishdate": "8/28/2007"
  },
  {
    "rank": 873,
    "id": "192",
    "speaker": "David Keith",
    "name": "A surprising idea for \"solving\" climate change",
    "shortsummary": "Environmental scientist David Keith proposes a cheap, effective, shocking means to address climate change: What if we injected a huge cloud of ash into the atmosphere to deflect sunlight and heat? ",
    "duration": "0:15:58",
    "publishdate": "11/13/2007"
  },
  {
    "rank": 874,
    "id": "1147",
    "speaker": "Thomas Heatherwick",
    "name": "Thomas Heatherwick: Building the Seed Cathedral",
    "shortsummary": "A future more beautiful? Architect Thomas Heatherwick shows five recent projects featuring ingenious bio-inspired designs. Some are remakes of the ordinary: a bus, a bridge, a power station ... And one is an extraordinary pavilion, the Seed Cathedral, a celebration of growth and light.",
    "duration": "0:16:52",
    "publishdate": "5/17/2011"
  },
  {
    "rank": 875,
    "id": "203",
    "speaker": "Yossi Vardi",
    "name": "Help fight local warming",
    "shortsummary": "Investor and prankster Yossi Vardi delivers a careful lecture on the dangers of blogging. Specifically, for men.",
    "duration": "0:06:15",
    "publishdate": "1/4/2008"
  },
  {
    "rank": 876,
    "id": "1575",
    "speaker": "Ben Goldacre",
    "name": "Ben Goldacre: What doctors don't know about the drugs they prescribe",
    "shortsummary": "When a new drug gets tested, the results of the trials should be published for the rest of the medical world -- except much of the time, negative or inconclusive findings go unreported, leaving doctors and researchers in the dark. In this impassioned talk, Ben Goldacre explains why these unreported instances of negative data are especially misleading and dangerous.",
    "duration": "0:13:29",
    "publishdate": "9/27/2012 15:01:00"
  },
  {
    "rank": 877,
    "id": "1328",
    "speaker": "Mikko Hypponen",
    "name": "Mikko Hypponen: Three types of online attack",
    "shortsummary": "Cybercrime expert Mikko Hypponen talks us through three types of online attack on our privacy and data -- and only two are considered crimes. \"Do we blindly trust any future government? Because any right we give away, we give away for good.\"",
    "duration": "0:09:23",
    "publishdate": "1/18/2012 14:54:00"
  },
  {
    "rank": 878,
    "id": "1642",
    "speaker": "Jonathan Haidt",
    "name": "Jonathan Haidt: How common threats can make common (political) ground",
    "shortsummary": "If an asteroid were headed for Earth, we'd all band together and figure out how to stop it, just like in the movies, right? And yet, when faced with major, data-supported, end-of-the-world problems in real life, too often we retreat into partisan shouting and stalemate. Jonathan Haidt shows us a few of the very real asteroids headed our way -- some pet causes of the left wing, some of the right -- and suggests how both wings could work together productively to benefit humanity as a whole.",
    "duration": "0:20:01",
    "publishdate": "1/7/2013 16:07:00"
  },
  {
    "rank": 879,
    "id": "1707",
    "speaker": "Skylar Tibbits",
    "name": "Skylar Tibbits: The emergence of \"4D printing\"",
    "shortsummary": "3D printing has grown in sophistication since the late 1970s; TED Fellow Skylar Tibbits is shaping the next development, which he calls 4D printing, where the fourth dimension is time. This emerging technology will allow us to print objects that then reshape themselves or self-assemble over time. Think: a printed cube that folds before your eyes, or a printed pipe able to sense the need to expand or contract. ",
    "duration": "0:08:22",
    "publishdate": "4/4/2013 14:56:00"
  },
  {
    "rank": 880,
    "id": "1617",
    "speaker": "Ernesto Sirolli",
    "name": "Ernesto Sirolli: Want to help someone? Shut up and listen!",
    "shortsummary": "When most well-intentioned aid workers hear of a problem they think they can fix, they go to work. This, Ernesto Sirolli suggests, is naive. In this funny and impassioned talk, he proposes that the first step is to listen to the people you're trying to help, and tap into their own entrepreneurial spirit. His advice on what works will help any entrepreneur.",
    "duration": "0:17:09",
    "publishdate": "11/26/2012 16:15:00"
  },
  {
    "rank": 881,
    "id": "717",
    "speaker": "Shaffi Mather",
    "name": "Shaffi Mather: A new way to fight corruption",
    "shortsummary": "Shaffi Mather explains why he left his first career to become a social entrepreneur, providing life-saving transportation with his company 1298 for Ambulance. Now, he has a new idea and plans to begin a company to fight the booming business of corruption in public service, eliminating it one bribe at a time.",
    "duration": "0:10:41",
    "publishdate": "12/21/2009"
  },
  {
    "rank": 882,
    "id": "99",
    "speaker": "Jill Sobule",
    "name": "A happy song about global warming",
    "shortsummary": "A happy song about global warming, from Jill Sobule.",
    "duration": "0:02:43",
    "publishdate": "4/6/2007"
  },
  {
    "rank": 883,
    "id": "320",
    "speaker": "Kwabena Boahen",
    "name": "Making a computer that works like the brain",
    "shortsummary": "Researcher Kwabena Boahen is looking for ways to mimic the brain's supercomputing powers in silicon -- because the messy, redundant processes inside our heads actually make for a small, light, superfast computer. ",
    "duration": "0:16:22",
    "publishdate": "7/30/2008"
  },
  {
    "rank": 884,
    "id": "824",
    "speaker": "Michael Specter",
    "name": "Michael Specter: The danger of science denial",
    "shortsummary": "Vaccine-autism claims, \"Frankenfood\" bans, the herbal cure craze: All point to the public's growing fear (and, often, outright denial) of science and reason, says Michael Specter. He warns the trend spells disaster for human progress.",
    "duration": "0:19:01",
    "publishdate": "4/12/2010"
  },
  {
    "rank": 885,
    "id": "582",
    "speaker": "Philip Zimbardo",
    "name": "Philip Zimbardo prescribes a healthy take on time",
    "shortsummary": "Psychologist Philip Zimbardo says happiness and success are rooted in a trait most of us disregard: the way we orient toward the past, present and future. He suggests we calibrate our outlook on time as a first step to improving our lives.",
    "duration": "0:06:34",
    "publishdate": "6/22/2009"
  },
  {
    "rank": 886,
    "id": "1260",
    "speaker": "Anna Mracek Dietrich",
    "name": "Anna Mracek Dietrich: A plane you can drive",
    "shortsummary": "A flying car -- it's an iconic image of the future. But after 100 years of flight and automotive engineering, no one has really cracked the problem. Pilot Anna Mracek Dietrich and her team flipped the question, asking: Why not build a plane that you can drive?",
    "duration": "0:09:38",
    "publishdate": "11/2/2011"
  },
  {
    "rank": 887,
    "id": "1380",
    "speaker": "James Hansen",
    "name": "James Hansen: Why I must speak out about climate change",
    "shortsummary": "Top climate scientist James Hansen tells the story of his involvement in the science of and debate over global climate change. In doing so he outlines the overwhelming evidence that change is happening and why that makes him deeply worried about the future.",
    "duration": "0:17:51",
    "publishdate": "3/7/2012 16:08:00"
  },
  {
    "rank": 888,
    "id": "702",
    "speaker": "Anupam Mishra",
    "name": "Anupam Mishra: The ancient ingenuity of water harvesting ",
    "shortsummary": "With wisdom and wit, Anupam Mishra talks about the amazing feats of engineering built centuries ago by the people of India's Golden Desert to harvest water. These structures are still used today -- and are often superior to modern water megaprojects.",
    "duration": "0:17:14",
    "publishdate": "12/3/2009"
  },
  {
    "rank": 889,
    "id": "1391",
    "speaker": "Brené Brown",
    "name": "Brené Brown: Listening to shame",
    "shortsummary": "Shame is an unspoken epidemic, the secret behind many forms of broken behavior. Brené Brown, whose earlier talk on vulnerability became a viral hit, explores what can happen when people confront their shame head-on. Her own humor, humanity and vulnerability shine through every word.",
    "duration": "0:20:38",
    "publishdate": "3/16/2012 15:16:00"
  },
  {
    "rank": 890,
    "id": "537",
    "speaker": "Louise Fresco",
    "name": "Louise Fresco on feeding the whole world",
    "shortsummary": "Louise Fresco argues that a smart approach to large-scale, industrial farming and food production will feed our planet's incoming population of nine billion. Only foods like (the scorned) supermarket white bread, she says, will nourish on a global scale.",
    "duration": "0:18:00",
    "publishdate": "5/7/2009"
  },
  {
    "rank": 891,
    "id": "1506",
    "speaker": "Chris Gerdes",
    "name": "Chris Gerdes: The future race car -- 150mph, and no driver",
    "shortsummary": "Autonomous cars are coming -- and they're going to drive better than you. Chris Gerdes reveals how he and his team are developing robotic race cars that can drive at 150 mph while avoiding every possible accident. And yet, in studying the brainwaves of professional racing drivers, Gerdes says he has gained a new appreciation for the instincts of professional drivers. <em>(Filmed at <a href=http://www.ted.com/tedx/events/5140>TEDxStanford</a>.)</em>",
    "duration": "0:10:47",
    "publishdate": "7/11/2012 15:00:00"
  },
  {
    "rank": 892,
    "id": "1413",
    "speaker": "Lucy McRae",
    "name": "Lucy McRae: How can technology transform the human body?",
    "shortsummary": "TED Fellow Lucy McRae is a body architect -- she imagines ways to merge biology and technology in our own bodies. In this visually stunning talk, she shows her work, from clothes that recreate the body's insides for a music video with pop-star Robyn, to a pill that, when swallowed, lets you sweat perfume.",
    "duration": "0:03:59",
    "publishdate": "4/6/2012 15:40:00"
  },
  {
    "rank": 893,
    "id": "1649",
    "speaker": "Colin Powell",
    "name": "Colin Powell: Kids need structure",
    "shortsummary": "How can you help kids get a good start? In this heartfelt and personal talk, Colin Powell, the former U.S. Secretary of State, asks parents, friends and relatives to support children from before they even get to primary school, through community and a strong sense of responsibility. <em>(Filmed at TEDxMidAtlantic.)</em>",
    "duration": "0:17:46",
    "publishdate": "1/23/2013 16:18:00"
  },
  {
    "rank": 894,
    "id": "325",
    "speaker": "Nellie McKay",
    "name": "\"The Dog Song\"",
    "shortsummary": "Animal fan Nellie McKay sings a sparkling tribute to her dear dog. She suggests we all do the same: \"Just go right to the pound/ And find yourself a hound/ And make that doggie proud/ 'cause that's what it's all about.\"",
    "duration": "0:03:33",
    "publishdate": "8/22/2008"
  },
  {
    "rank": 895,
    "id": "1683",
    "speaker": "Allan Savory",
    "name": "Allan Savory: How to fight desertification and reverse climate change",
    "shortsummary": "Desertification is a fancy word for land that is turning to desert, begins Allan Savory in this quietly powerful talk. And it's happening to about two-thirds of the world' grasslands, accelerating climate change and causing traditional grazing societies to descend into social chaos. Savory has devoted his life to stopping it. He now believes -- and his work so far shows -- that a surprising factor can protect grasslands and even reclaim degraded land that was once desert.",
    "duration": "0:22:19",
    "publishdate": "3/4/2013 15:51:00"
  },
  {
    "rank": 896,
    "id": "30",
    "speaker": "Steven Levitt",
    "name": "Are children's carseats necessary?",
    "shortsummary": "Steven Levitt shares data that shows car seats are no more effective than seatbelts in protecting kids from dying in cars. However, during the Q&A, he makes one crucial caveat.",
    "duration": "0:18:58",
    "publishdate": "6/24/2008"
  },
  {
    "rank": 897,
    "id": "1162",
    "speaker": "Damon Horowitz",
    "name": "Damon Horowitz calls for a \"moral operating system\"",
    "shortsummary": "At TEDxSiliconValley, Damon Horowitz reviews the enormous new powers that technology gives us: to know more -- and more about each other -- than ever before. Drawing the audience into a philosophical discussion, Horowitz invites us to pay new attention to the basic philosophy -- the ethical principles -- behind the burst of invention remaking our world. Where's the moral operating system that allows us to make sense of it?",
    "duration": "0:16:18",
    "publishdate": "6/6/2011"
  },
  {
    "rank": 898,
    "id": "715",
    "speaker": "Charles Anderson",
    "name": "Charles Anderson discovers dragonflies that cross oceans",
    "shortsummary": " While living and working as a marine biologist in Maldives, Charles Anderson noticed sudden explosions of dragonflies at certain times of year. He explains how he carefully tracked the path of a plain, little dragonfly called the globe skimmer, only to discover that it had the longest migratory journey of any insect in the world.",
    "duration": "0:16:38",
    "publishdate": "12/17/2009"
  },
  {
    "rank": 899,
    "id": "1186",
    "speaker": "Simon Lewis",
    "name": "Simon Lewis: Don't take consciousness for granted",
    "shortsummary": "After a catastrophic car accident that left him in a coma, Simon Lewis found ways to recover -- physically and mentally -- beyond all expectations. At the INK Conference he tells how this remarkable story led him to concern over all threats to consciousness, and how to overcome them.",
    "duration": "0:22:17",
    "publishdate": "7/7/2011"
  },
  {
    "rank": 900,
    "id": "1654",
    "speaker": "Leslie Morgan Steiner",
    "name": "Leslie Morgan Steiner: Why domestic violence victims don't leave",
    "shortsummary": "Leslie Morgan Steiner was in \"crazy love\" -- that is, madly in love with a man who routinely abused her and threatened her life. Steiner tells the dark story of her relationship, correcting misconceptions many people hold about victims of domestic violence, and explaining how we can all help break the silence. <em>(Filmed at TEDxRainier.)</em>",
    "duration": "0:15:59",
    "publishdate": "1/25/2013 16:06:00"
  },
  {
    "rank": 901,
    "id": "1037",
    "speaker": "Rachel Botsman",
    "name": "Rachel Botsman: The case for collaborative consumption",
    "shortsummary": "At TEDxSydney, Rachel Botsman says we're \"wired to share\" -- and shows how websites like Zipcar and Swaptree are changing the rules of human behavior.",
    "duration": "0:16:34",
    "publishdate": "12/17/2010"
  },
  {
    "rank": 902,
    "id": "1503",
    "speaker": "Jonathan Eisen",
    "name": "Jonathan Eisen: Meet your microbes",
    "shortsummary": "Our bodies are covered in a sea of microbes -- both the pathogens that make us sick and the \"good\" microbes, about which we know less, that might be <a href=\"http://blog.ted.com/2012/07/10/6-great-things-microbes-do-for-us/\" target=\"_blank\">keeping us healthy</a>. At TEDMED, microbiologist Jonathan Eisen shares what we know, including some surprising ways to put those good microbes to work.",
    "duration": "0:14:23",
    "publishdate": "7/10/2012 15:09:00"
  },
  {
    "rank": 903,
    "id": "615",
    "speaker": "Emmanuel Jal",
    "name": "Emmanuel Jal: The music of a war child",
    "shortsummary": "For five years, young Emmanuel Jal fought as a child soldier in the Sudan. Rescued by an aid worker, he's become an international hip-hop star and an activist for kids in war zones. In words and lyrics, he tells the story of his amazing life.",
    "duration": "0:18:03",
    "publishdate": "8/7/2009"
  },
  {
    "rank": 904,
    "id": "1164",
    "speaker": "Janet Echelman",
    "name": "Janet Echelman: Taking imagination seriously",
    "shortsummary": "Janet Echelman found her true voice as an artist when her paints went missing -- which forced her to look to an unorthodox new art material. Now she makes billowing, flowing, building-sized sculpture with a surprisingly geeky edge. A transporting 10 minutes of pure creativity.",
    "duration": "0:09:26",
    "publishdate": "6/7/2011"
  },
  {
    "rank": 905,
    "id": "972",
    "speaker": "Tim Jackson",
    "name": "Tim Jackson's economic reality check",
    "shortsummary": "As the world faces recession, climate change, inequity and more, Tim Jackson delivers a piercing challenge to established economic principles, explaining how we might stop feeding the crises and start investing in our future.",
    "duration": "0:20:23",
    "publishdate": "10/5/2010"
  },
  {
    "rank": 906,
    "id": "1124",
    "speaker": "Susan Lim",
    "name": "Susan Lim: Transplant cells, not organs",
    "shortsummary": "Pioneering surgeon Susan Lim performed the first liver transplant in Asia. But a moral concern with transplants (where do donor livers come from ...) led her to look further, and to ask: Could we be transplanting cells, not whole organs? At the INK Conference, she talks through her new research, discovering healing cells in some surprising places.",
    "duration": "0:16:26",
    "publishdate": "4/15/2011"
  },
  {
    "rank": 907,
    "id": "434",
    "speaker": "Joseph Pine",
    "name": "What do consumers really want?",
    "shortsummary": "Customers want to feel what they buy is authentic, but \"Mass Customization\" author Joseph Pine says selling authenticity is tough because, well, there's no such thing. He talks about a few experiences that may be artificial but make millions anyway.",
    "duration": "0:14:19",
    "publishdate": "1/15/2009"
  },
  {
    "rank": 908,
    "id": "871",
    "speaker": "Larry Lessig",
    "name": "Lawrence Lessig: Re-examining the remix",
    "shortsummary": "At TEDxNYED, former \"young Republican\" Larry Lessig talks about what Democrats can learn about copyright from their opposite party, considered more conservative. A surprising lens on remix culture. ",
    "duration": "0:18:45",
    "publishdate": "5/31/2010"
  },
  {
    "rank": 909,
    "id": "1192",
    "speaker": "Mikko Hypponen",
    "name": "Mikko Hypponen: Fighting viruses, defending the net",
    "shortsummary": "It's been 25 years since the first PC virus (Brain A) hit the net, and what was once an annoyance has become a sophisticated tool for crime and espionage. Computer security expert Mikko Hyppönen tells us how we can stop these new viruses from threatening the internet as we know it.",
    "duration": "0:17:34",
    "publishdate": "7/19/2011"
  },
  {
    "rank": 910,
    "id": "399",
    "speaker": "Charles Elachi",
    "name": "The story of the Mars Rovers ",
    "shortsummary": "At Serious Play 2008, Charles Elachi shares stories from NASA's legendary Jet Propulsion Lab -- including tales and video from the Mars Rover project.",
    "duration": "0:28:17",
    "publishdate": "11/12/2008"
  },
  {
    "rank": 911,
    "id": "1051",
    "speaker": "Thomas Thwaites",
    "name": "Thomas Thwaites: How I built a toaster -- from scratch",
    "shortsummary": "It takes an entire civilization to build a toaster. Designer Thomas Thwaites found out the hard way, by attempting to build one from scratch: mining ore for steel, deriving plastic from oil ... it's frankly amazing he got as far as he got. A parable of our interconnected society, for designers and consumers alike.",
    "duration": "0:10:51",
    "publishdate": "1/12/2011"
  },
  {
    "rank": 912,
    "id": "605",
    "speaker": "Alain de Botton",
    "name": "Alain de Botton: A kinder, gentler philosophy of success",
    "shortsummary": "Alain de Botton examines our ideas of success and failure -- and questions the assumptions underlying these two judgments. Is success always earned? Is failure? He makes an eloquent, witty case to move beyond snobbery to find true pleasure in our work.",
    "duration": "0:16:51",
    "publishdate": "7/28/2009"
  },
  {
    "rank": 913,
    "id": "193",
    "speaker": "Juan Enriquez",
    "name": "Why can't we grow new energy?",
    "shortsummary": "Juan Enriquez challenges our definition of bioenergy. Oil, coal, gas and other hydrocarbons are not chemical but biological products, based on plant matter -- and thus, growable. Our whole approach to fuel, he argues, needs to change.",
    "duration": "0:18:10",
    "publishdate": "11/15/2007"
  },
  {
    "rank": 914,
    "id": "243",
    "speaker": "Al Gore",
    "name": "New thinking on the climate crisis",
    "shortsummary": "In this brand-new slideshow (premiering on TED.com), Al Gore presents evidence that the pace of climate change may be even worse than scientists recently predicted. He challenges us to act.",
    "duration": "0:27:54",
    "publishdate": "4/8/2008"
  },
  {
    "rank": 915,
    "id": "1042",
    "speaker": "Brene Brown",
    "name": "Brene Brown: The power of vulnerability",
    "shortsummary": "Brene Brown studies human connection -- our ability to empathize, belong, love. In a poignant, funny talk at TEDxHouston, she shares a deep insight from her research, one that sent her on a personal quest to know herself as well as to understand humanity. A talk to share.",
    "duration": "0:20:19",
    "publishdate": "12/23/2010"
  },
  {
    "rank": 916,
    "id": "772",
    "speaker": "Eric Topol",
    "name": "Eric Topol: The wireless future of medicine",
    "shortsummary": "Eric Topol says we'll soon use our smartphones to monitor our vital signs and chronic conditions. At TEDMED, he highlights several of the most important wireless devices in medicine's future -- all helping to keep more of us out of hospital beds.",
    "duration": "0:16:58",
    "publishdate": "2/23/2010"
  },
  {
    "rank": 917,
    "id": "260",
    "speaker": "Michael Moschen",
    "name": "Juggling rhythm and motion",
    "shortsummary": "Michael Moschen puts on a quietly mesmerizing show of juggling. Don't think juggling is an art? You might just change your mind after watching Moschen in motion.",
    "duration": "0:37:02",
    "publishdate": "5/8/2008"
  },
  {
    "rank": 918,
    "id": "868",
    "speaker": "Sharmeen Obaid-Chinoy",
    "name": "Sharmeen Obaid-Chinoy: Inside a school for suicide bombers",
    "shortsummary": "Filmmaker Sharmeen Obaid-Chinoy takes on a terrifying question: How does the Taliban convince children to become suicide bombers? Propaganda footage from a training camp is intercut with her interviews of young camp graduates. A shocking vision.",
    "duration": "0:08:09",
    "publishdate": "5/26/2010"
  },
  {
    "rank": 919,
    "id": "1020",
    "speaker": "Arthur Potts Dawson",
    "name": "Arthur Potts Dawson: A vision for sustainable restaurants",
    "shortsummary": "If you've been in a restaurant kitchen, you've seen how much food, water and energy can be wasted there. Chef Arthur Potts-Dawson shares his very personal vision for drastically reducing restaurant, and supermarket, waste -- creating recycling, composting, sustainable engines for good (and good food).",
    "duration": "0:08:49",
    "publishdate": "12/3/2010"
  },
  {
    "rank": 920,
    "id": "1768",
    "speaker": "Didier Sornette",
    "name": "Didier Sornette: How we can predict the next financial crisis",
    "shortsummary": "The 2007-2008 financial crisis, you might think, was an unpredictable one-time crash. But Didier Sornette and his Financial Crisis Observatory have plotted a set of early warning signs for unstable, growing systems, tracking the moment when any bubble is about to pop. (And he's seeing it happen again, right now.)",
    "duration": "0:17:01",
    "publishdate": "6/17/2013 14:57:00"
  },
  {
    "rank": 921,
    "id": "1336",
    "speaker": "Diana Nyad",
    "name": "Diana Nyad: Extreme swimming with the world's most dangerous jellyfish",
    "shortsummary": "In the 1970s, Diana Nyad set long-distance swim records that are still unbroken. Thirty years later, at 60, she attempted her longest swim yet, from Cuba to Florida. In this funny, powerful talk at TEDMED, she talks about how to prepare mentally to achieve an extreme dream, and asks: What will YOU do with your wild, precious life?",
    "duration": "0:16:57",
    "publishdate": "1/24/2012 16:23:00"
  },
  {
    "rank": 922,
    "id": "61",
    "speaker": "Steven Johnson",
    "name": "A guided tour of the Ghost Map",
    "shortsummary": "Author Steven Johnson takes us on a 10-minute tour of \"The Ghost Map,\" his book about a cholera outbreak in 1854 London and the impact it had on science, cities and modern society.",
    "duration": "0:10:03",
    "publishdate": "1/31/2007"
  },
  {
    "rank": 923,
    "id": "431",
    "speaker": "Rob Forbes",
    "name": "Ways of seeing",
    "shortsummary": "Rob Forbes, the founder of Design Within Reach, shows a gallery of snapshots that inform his way of seeing the world. Charming juxtapositions, found art, urban patterns -- this slideshow will open your eyes to the world around you.",
    "duration": "0:15:37",
    "publishdate": "1/12/2009"
  },
  {
    "rank": 924,
    "id": "391",
    "speaker": "John Francis",
    "name": "I walk the Earth",
    "shortsummary": "For almost three decades, John Francis has been a planetwalker, traveling the globe by foot and sail with a message of environmental respect and responsibility (for 17 of those years without speaking). A funny, thoughtful talk with occasional banjo.",
    "duration": "0:19:24",
    "publishdate": "11/5/2008"
  },
  {
    "rank": 925,
    "id": "1005",
    "speaker": "Auret van Heerden",
    "name": "Auret van Heerden: Making global labor fair",
    "shortsummary": "Labor activist Auret van Heerden talks about the next frontier of workers' rights -- globalized industries where no single national body can keep workers safe and protected. How can we keep our global supply chains honest? Van Heerden makes the business case for fair labor.",
    "duration": "0:17:46",
    "publishdate": "11/11/2010"
  },
  {
    "rank": 926,
    "id": "1588",
    "speaker": "Maurizio Seracini",
    "name": "Maurizio Seracini: The secret lives of paintings",
    "shortsummary": "Art history is far from set in stone. Engineer Maurizio Seracini spent 30 years searching for Leonardo da Vinci's lost fresco \"The Battle of Anghiari,\" and in the process discovered that many paintings have layers of history hidden underneath. Should they be part of the viewing experience too?",
    "duration": "0:12:34",
    "publishdate": "10/12/2012 15:43:00"
  },
  {
    "rank": 927,
    "id": "1052",
    "speaker": "Elizabeth Lesser",
    "name": "Elizabeth Lesser: Take \"the Other\" to lunch",
    "shortsummary": "There's an angry divisive tension in the air that threatens to make modern politics impossible. Elizabeth Lesser explores the two sides of human nature within us (call them \"the mystic\" and \"the warrior\") that can be harnessed to elevate the way we treat each other. She shares a simple way to begin real dialogue -- by going to lunch with someone who doesn't agree with you, and asking them three questions to find out what's really in their hearts.",
    "duration": "0:11:08",
    "publishdate": "1/13/2011"
  },
  {
    "rank": 928,
    "id": "49",
    "speaker": "Joshua Prince-Ramus",
    "name": "Designing the Seattle Central Library",
    "shortsummary": "Architect Joshua Prince-Ramus takes the audience on dazzling, dizzying virtual tours of three recent projects: the Central Library in Seattle, the Museum Plaza in Louisville and the Charles Wyly Theater in Dallas.",
    "duration": "0:19:58",
    "publishdate": "7/10/2006"
  },
  {
    "rank": 929,
    "id": "217",
    "speaker": "Eve Ensler",
    "name": "Security and insecurity",
    "shortsummary": "Playwright Eve Ensler explores our modern craving for security -- and why it makes us less secure. Listen for inspiring, heartbreaking stories of women making change.",
    "duration": "0:13:45",
    "publishdate": "9/18/2008"
  },
  {
    "rank": 930,
    "id": "145",
    "speaker": "Deborah Gordon",
    "name": "How do ants know what to do?",
    "shortsummary": "With a dusty backhoe, a handful of Japanese paint markers and a few students in tow, Deborah Gordon digs up ant colonies in the Arizona desert in search of keys to understanding complex systems. ",
    "duration": "0:20:31",
    "publishdate": "1/8/2008"
  },
  {
    "rank": 931,
    "id": "970",
    "speaker": "Mechai Viravaidya",
    "name": "Mechai Viravaidya: How Mr. Condom made Thailand a better place",
    "shortsummary": "At TEDxChange, Thailand's \"Mr. Condom,\" Mechai Viravaidya, walks us through the country's bold plan to raise its standard of living, starting in the 1970s. First step: population control. And that means a lot of frank, funny -- and very effective -- talk about condoms.",
    "duration": "0:13:50",
    "publishdate": "9/30/2010"
  },
  {
    "rank": 932,
    "id": "1766",
    "speaker": "Daniel Suarez",
    "name": "Daniel Suarez: The kill decision shouldn't belong to a robot",
    "shortsummary": "As a novelist, Daniel Suarez spins dystopian tales of the future. But on the TEDGlobal stage, he talks us through a real-life scenario we all need to know more about: the rise of autonomous robotic weapons of war. Advanced drones, automated weapons and AI-powered intelligence-gathering tools, he suggests, could take the decision to make war out of the hands of humans.",
    "duration": "0:13:20",
    "publishdate": "6/13/2013 10:48:00"
  },
  {
    "rank": 933,
    "id": "854",
    "speaker": "Enric Sala",
    "name": "Enric Sala: Glimpses of a pristine ocean",
    "shortsummary": "Enric Sala shares glorious images -- and surprising insights and data -- from some of the most pristine areas of the ocean. He shows how we can restore more of our oceans to this healthy, balanced state, and the powerful ecological and economic benefits of doing so.",
    "duration": "0:19:55",
    "publishdate": "5/12/2010"
  },
  {
    "rank": 934,
    "id": "1142",
    "speaker": "Fiorenzo Omenetto",
    "name": "Fiorenzo Omenetto: Silk, the ancient material of the future",
    "shortsummary": "Fiorenzo Omenetto shares 20+ astonishing new uses for silk, one of nature's most elegant materials -- in transmitting light, improving sustainability, adding strength and making medical leaps and bounds. On stage, he shows a few intriguing items made of the versatile stuff.",
    "duration": "0:09:40",
    "publishdate": "5/10/2011"
  },
  {
    "rank": 935,
    "id": "1378",
    "speaker": "Bryan Stevenson",
    "name": "Bryan Stevenson: We need to talk about an injustice",
    "shortsummary": "In an engaging and personal talk -- with cameo appearances from his grandmother and Rosa Parks -- human rights lawyer Bryan Stevenson shares some hard truths about America's justice system, starting with a massive imbalance along racial lines: a third of the country's black male population has been incarcerated at some point in their lives. These issues, which are wrapped up in America's unexamined history, are rarely talked about with this level of candor, insight and persuasiveness.",
    "duration": "0:23:41",
    "publishdate": "3/5/2012 16:18:00"
  },
  {
    "rank": 936,
    "id": "981",
    "speaker": "Ze Frank",
    "name": "Ze Frank's web playroom",
    "shortsummary": "On the web, a new \"Friend\" may be just a click away, but true connection is harder to find and express. Ze Frank presents a medley of zany Internet toys that require deep participation -- and reward it with something more nourishing. You're invited, if you promise you'll share.",
    "duration": "0:18:00",
    "publishdate": "10/15/2010"
  },
  {
    "rank": 937,
    "id": "613",
    "speaker": "Michael Pritchard",
    "name": "Michael Pritchard's water filter turns filthy water drinkable",
    "shortsummary": "Too much of the world lacks access to clean drinking water. Engineer Michael Pritchard did something about it -- inventing the portable Lifesaver filter, which can make the most revolting water drinkable in seconds. An amazing demo from TEDGlobal 2009.",
    "duration": "0:09:31",
    "publishdate": "8/4/2009"
  },
  {
    "rank": 938,
    "id": "212",
    "speaker": "Robin Chase",
    "name": "Getting cars off the road and data into the skies",
    "shortsummary": "Robin Chase founded Zipcar, the world's biggest car-sharing business. That was one of her smaller ideas. Here she travels much farther, contemplating road-pricing schemes that will shake up our driving habits and a mesh network vast as the Interstate. ",
    "duration": "0:13:39",
    "publishdate": "1/31/2008"
  },
  {
    "rank": 939,
    "id": "1274",
    "speaker": "Cynthia Kenyon",
    "name": "Cynthia Kenyon: Experiments that hint of longer lives",
    "shortsummary": "What controls aging? Biochemist Cynthia Kenyon has found a simple genetic mutation that can double the lifespan of a simple worm, C. elegans. The lessons from that discovery, and others, are pointing to how we might one day significantly extend youthful human life.",
    "duration": "0:16:23",
    "publishdate": "11/17/2011"
  },
  {
    "rank": 940,
    "id": "223",
    "speaker": "Raspyni Brothers",
    "name": "Welcome to Vaudeville 2.0",
    "shortsummary": "Illustrious jugglers the Raspyni Brothers show off their uncanny balance, agility, coordination and willingness to sacrifice (others). Now, if you'll just stand completely still...",
    "duration": "0:15:27",
    "publishdate": "2/22/2008"
  },
  {
    "rank": 941,
    "id": "1396",
    "speaker": "C. Noel Bairey Merz",
    "name": "Noel Bairey Merz: The single biggest health threat women face",
    "shortsummary": "Surprising, but true: More women now die of heart disease than men, yet cardiovascular research has long focused on men. Pioneering doctor C. Noel Bairey Merz shares what we know and don't know about women's heart health -- including the remarkably different symptoms women present during a heart attack (and why they're often missed). ",
    "duration": "0:15:59",
    "publishdate": "3/21/2012 15:30:00"
  },
  {
    "rank": 942,
    "id": "796",
    "speaker": "Mark Roth",
    "name": "Mark Roth: Suspended animation is within our grasp",
    "shortsummary": "Mark Roth studies suspended animation: the art of shutting down life processes and then starting them up again. It's wild stuff, but it's not science fiction. Induced by careful use of an otherwise toxic gas, suspended animation can potentially help trauma and heart attack victims survive long enough to be treated.",
    "duration": "0:18:13",
    "publishdate": "3/15/2010"
  },
  {
    "rank": 943,
    "id": "1485",
    "speaker": "E.O. Wilson",
    "name": "E.O. Wilson: Advice to young scientists",
    "shortsummary": "\"The world needs you, badly,\" begins celebrated biologist E.O. Wilson in his letter to a young scientist. Previewing his upcoming book, he gives advice collected from a lifetime of experience -- reminding us that wonder and creativity are the center of the scientific life. <em>(Filmed at TEDMED.)</em>",
    "duration": "0:14:56",
    "publishdate": "6/25/2012 15:00:00"
  },
  {
    "rank": 944,
    "id": "1604",
    "speaker": "Gary  Greenberg",
    "name": "Gary Greenberg: The beautiful nano details of our world",
    "shortsummary": "When photographed under a 3D microscope, grains of sand appear like colorful pieces of candy and the stamens in a flower become like fantastical spires at an amusement park. Gary Greenberg reveals the thrilling details of the micro world. (<em>Filmed at TEDxMaui.</em>)",
    "duration": "0:12:06",
    "publishdate": "11/7/2012 16:01:00"
  },
  {
    "rank": 945,
    "id": "526",
    "speaker": "Michael Merzenich",
    "name": "Michael Merzenich on re-wiring the brain",
    "shortsummary": "Neuroscientist Michael Merzenich looks at one of the secrets of the brain's incredible power: its ability to actively re-wire itself. He's researching ways to harness the brain's plasticity to enhance our skills and recover lost function.",
    "duration": "0:23:07",
    "publishdate": "4/28/2009"
  },
  {
    "rank": 946,
    "id": "1674",
    "speaker": "Michael Dickinson",
    "name": "Michael Dickinson: How a fly flies",
    "shortsummary": "An insect's ability to fly is perhaps one of the greatest feats of evolution. Michael Dickinson looks at how a common housefly takes flight with such delicate wings, thanks to a clever flapping motion and flight muscles that are both powerful and nimble. But the secret ingredient: the incredible fly brain. (<em>Filmed at TEDxCaltech.</em>)",
    "duration": "0:15:55",
    "publishdate": "2/22/2013 13:07:00"
  },
  {
    "rank": 947,
    "id": "704",
    "speaker": "Sunitha Krishnan",
    "name": "Sunitha Krishnan fights sex slavery",
    "shortsummary": " Sunitha Krishnan has dedicated her life to rescuing women and children from sex slavery, a multimilion-dollar global market. In this courageous talk, she tells three powerful stories, as well as her own, and calls for a more humane approach to helping these young victims rebuild their lives.",
    "duration": "0:12:42",
    "publishdate": "12/7/2009"
  },
  {
    "rank": 948,
    "id": "1561",
    "speaker": "Jonathan Trent",
    "name": "Jonathan Trent: Energy from floating algae pods",
    "shortsummary": "Call it \"fuel without fossils\": Jonathan Trent is working on a plan to grow new biofuel by farming micro-algae in floating offshore pods that eat wastewater from cities. Hear his team's bold vision for Project OMEGA (Offshore Membrane Enclosures for Growing Algae) and how it might power the future.",
    "duration": "0:14:45",
    "publishdate": "9/8/2012 15:09:00"
  },
  {
    "rank": 949,
    "id": "404",
    "speaker": "George Smoot",
    "name": "The design of the universe",
    "shortsummary": "At Serious Play 2008, astrophysicist George Smoot shows stunning new images from deep-space surveys, and prods us to ponder how the cosmos -- with its giant webs of dark matter and mysterious gaping voids -- got built this way.",
    "duration": "0:19:00",
    "publishdate": "11/20/2008"
  },
  {
    "rank": 950,
    "id": "42",
    "speaker": "Sir Martin Rees",
    "name": "Earth in its final century?",
    "shortsummary": "Speaking as both an astronomer and \"a concerned member of the human race,\" Sir Martin Rees examines our planet and its future from a cosmic perspective. He urges action to prevent dark consequences from our scientific and technological development.",
    "duration": "0:17:26",
    "publishdate": "1/17/2007"
  },
  {
    "rank": 951,
    "id": "232",
    "speaker": "Neil Turok",
    "name": "2008 TED Prize wish: An African Einstein",
    "shortsummary": "Accepting his 2008 TED Prize, physicist Neil Turok speaks out for talented young Africans starved of opportunity: by unlocking and nurturing the continent's creative potential, we can create a change in Africa's future.",
    "duration": "0:24:50",
    "publishdate": "3/20/2008"
  },
  {
    "rank": 952,
    "id": "1085",
    "speaker": " JR",
    "name": "JR's TED Prize wish: Use art to turn the world inside out",
    "shortsummary": "JR, a semi-anonymous French street artist, uses his camera to show the world its true face, by pasting photos of the human face across massive canvases. At TED2011, he makes his audacious TED Prize wish: to use art to turn the world inside out. Learn more about his work and learn how you can join in at insideoutproject.net.",
    "duration": "0:24:09",
    "publishdate": "3/4/2011"
  },
  {
    "rank": 953,
    "id": "544",
    "speaker": "Naturally 7",
    "name": "Naturally 7 beatboxes a whole band",
    "shortsummary": "One-of-a-kind R&B group Naturally 7 beatboxes an orchestra's worth of instruments to groove through their smooth single, \"Fly Baby.\"",
    "duration": "0:03:56",
    "publishdate": "5/15/2009"
  },
  {
    "rank": 954,
    "id": "1708",
    "speaker": "Ken Jennings",
    "name": "Ken Jennings: Watson, Jeopardy and me, the obsolete know-it-all",
    "shortsummary": "Trivia whiz Ken Jennings has made a career as a keeper of facts; he holds the longest winning streak in history on the U.S. game show <em>Jeopardy</em>. But in 2011, he played a challenge match against supercomputer Watson -- and lost. With humor and humility, Jennings tells us how it felt to have a computer literally beat him at his own game, and also makes the case for good old-fashioned human knowledge. <em>(Filmed at TEDxSeattleU.)</em> ",
    "duration": "0:17:52",
    "publishdate": "4/5/2013 15:22:00"
  },
  {
    "rank": 955,
    "id": "606",
    "speaker": "Golan Levin",
    "name": "Golan Levin makes art that looks back at you",
    "shortsummary": "Golan Levin, an artist and engineer, uses modern tools -- robotics, new software, cognitive research -- to make artworks that surprise and delight. Watch as sounds become shapes, bodies create paintings, and a curious eye looks back at the curious viewer.",
    "duration": "0:15:33",
    "publishdate": "7/30/2009"
  },
  {
    "rank": 956,
    "id": "355",
    "speaker": "Rodney Brooks",
    "name": "How robots will invade our lives",
    "shortsummary": "In this prophetic talk from 2003, roboticist Rodney Brooks talks about how robots are going to work their way into our lives -- starting with toys and moving into household chores ... and beyond.",
    "duration": "0:18:47",
    "publishdate": "9/29/2008"
  },
  {
    "rank": 957,
    "id": "261",
    "speaker": "Joshua Klein",
    "name": "The amazing intelligence of crows",
    "shortsummary": "Hacker and writer Joshua Klein is fascinated by crows. (Notice the gleam of intelligence in their little black eyes?) After a long amateur study of corvid behavior, he's come up with an elegant machine that may form a new bond between animal and human.",
    "duration": "0:10:06",
    "publishdate": "5/13/2008"
  },
  {
    "rank": 958,
    "id": "379",
    "speaker": "Paul MacCready",
    "name": "Nature vs. humans, and what we can do about it",
    "shortsummary": "In 1998, aircraft designer Paul MacCready looks at a planet on which humans have utterly dominated nature, and talks about what we all can do to preserve nature's balance. His contribution: solar planes, superefficient gliders and the electric car.",
    "duration": "0:22:48",
    "publishdate": "10/22/2008"
  },
  {
    "rank": 959,
    "id": "1310",
    "speaker": "Daniel Goldstein",
    "name": "Daniel Goldstein: The battle between your present and future self",
    "shortsummary": "Every day, we make decisions that have good or bad consequences for our future selves. (Can I skip flossing just this one time?) Daniel Goldstein makes tools that help us imagine ourselves over time, so that we make smart choices for Future Us.",
    "duration": "0:15:59",
    "publishdate": "12/21/2011"
  },
  {
    "rank": 960,
    "id": "219",
    "speaker": "Moshe Safdie",
    "name": "What makes a building unique?",
    "shortsummary": "Looking back over his long career, architect Moshe Safdie delves into four of his design projects and explains how he labored to make each one truly unique for its site and its users.",
    "duration": "0:17:46",
    "publishdate": "2/18/2008"
  },
  {
    "rank": 961,
    "id": "1459",
    "speaker": "Ken Goldberg",
    "name": "Ken Goldberg: 4 lessons from robots about being human",
    "shortsummary": "The more that robots ingrain themselves into our everyday lives, the more we're forced to examine ourselves as people. At TEDxBerkeley, Ken Goldberg shares four very human lessons that he's learned from working with robots.",
    "duration": "",
    "publishdate": "5/27/2012 14:13:00"
  },
  {
    "rank": 962,
    "id": "934",
    "speaker": "Jamil Abu-Wardeh",
    "name": "Jamil Abu-Wardeh: The Axis of Evil Middle East Comedy Tour",
    "shortsummary": "Jamil Abu-Wardeh jump-started the comedy scene in the Arab world by founding the Axis of Evil Middle East Comedy Tour, which brings standup comedians to laughing audiences all over the region. He's found that, by respecting the \"three B's\" (blue material, beliefs and \"bolitics\"), the Axis of Evil comics find plenty of cross-border laughs.",
    "duration": "0:08:59",
    "publishdate": "8/19/2010"
  },
  {
    "rank": 963,
    "id": "1795",
    "speaker": "Paul Kemp-Robertson",
    "name": "Paul Kemp-Robertson: Bitcoin. Sweat. Tide. Meet the future of branded currency.",
    "shortsummary": "Currency -- the bills and coins you carry in your wallet and in your bank account -- is founded on marketing, on the belief that banks and governments are trustworthy. Now, Paul Kemp-Robertson walks us through a new generation of currency, supported by that same marketing â€¦ but on behalf of a private brand. From Nike Sweat Points to bottles of Tide (which are finding an unexpected use in illegal markets), meet the non-bank future of currencies. ",
    "duration": "0:10:51",
    "publishdate": "7/25/2013 15:01:00"
  },
  {
    "rank": 964,
    "id": "116",
    "speaker": "Dan Dennett",
    "name": "Ants, terrorism, and the awesome power of memes",
    "shortsummary": "Starting with the simple tale of an ant, philosopher Dan Dennett unleashes a devastating salvo of ideas, making a powerful case for the existence of memes -- concepts that are literally alive.",
    "duration": "0:15:26",
    "publishdate": "7/2/2007"
  },
  {
    "rank": 965,
    "id": "713",
    "speaker": "Ryan Lobo",
    "name": "Ryan Lobo: Photographing the hidden story",
    "shortsummary": "Ryan Lobo has traveled the world, taking photographs that tell stories of unusual human lives. In this haunting talk, he reframes controversial subjects with empathy, so that we see the pain of a Liberian war criminal, the quiet strength of UN women peacekeepers and the perseverance of Delhi's underappreciated firefighters.",
    "duration": "0:11:20",
    "publishdate": "12/15/2009"
  },
  {
    "rank": 966,
    "id": "547",
    "speaker": "Ray Anderson",
    "name": "Ray Anderson on the business logic of sustainability",
    "shortsummary": "At his carpet company, Ray Anderson has increased sales and doubled profits while turning the traditional \"take / make / waste\" industrial system on its head. In a gentle, understated way, he shares a powerful vision for sustainable commerce.",
    "duration": "0:15:54",
    "publishdate": "5/18/2009"
  },
  {
    "rank": 967,
    "id": "1352",
    "speaker": "Jack Horner",
    "name": "Jack Horner: Shape-shifting dinosaurs",
    "shortsummary": "Where are the baby dinosaurs? In a spellbinding talk from TEDxVancouver paleontologist Jack Horner describes how slicing open fossil skulls revealed a shocking secret about some of our most beloved dinosaurs.",
    "duration": "0:18:23",
    "publishdate": "2/9/2012 15:59:00"
  },
  {
    "rank": 968,
    "id": "1057",
    "speaker": "Anders Ynnerman",
    "name": "Anders Ynnerman: Visualizing the medical data explosion",
    "shortsummary": "Today medical scans produce thousands of images and terabytes of data for a single patient in mere seconds, but how do doctors parse this information and determine what's useful? At TEDxGÃ¶teborg, scientific visualization expert Anders Ynnerman shows us sophisticated new tools -- like virtual autopsies -- for analyzing this myriad data, and a glimpse at some sci-fi-sounding medical technologies in development. This talk contains some graphic medical imagery.",
    "duration": "0:16:36",
    "publishdate": "1/20/2011"
  },
  {
    "rank": 969,
    "id": "1377",
    "speaker": "Susan Cain",
    "name": "Susan Cain: The power of introverts",
    "shortsummary": "In a culture where being social and outgoing are prized above all else, it can be difficult, even shameful, to be an introvert. But, as Susan Cain argues in this passionate talk, introverts bring extraordinary talents and abilities to the world, and should be encouraged and celebrated.",
    "duration": "0:19:04",
    "publishdate": "3/2/2012 20:28:00"
  },
  {
    "rank": 970,
    "id": "1548",
    "speaker": "Mark Forsyth",
    "name": "Mark Forsyth: What's a snollygoster? A short lesson in political speak",
    "shortsummary": "Most politicians choose their words carefully, to shape the reality they hope to create. But does it work? Etymologist Mark Forsyth shares a few entertaining word-origin stories from British and American history (for instance, did you ever wonder how George Washington became \"president\"?) and draws a surprising conclusion. <i>(From TEDxHousesofParliament in London)</i>",
    "duration": "0:07:04",
    "publishdate": "8/12/2012 15:13:00"
  },
  {
    "rank": 971,
    "id": "673",
    "speaker": "Jackie Tabick",
    "name": " Rabbi Jackie Tabick: The balancing act of compassion",
    "shortsummary": "While we all agree that compassion is a great idea, Rabbi Tabick acknowledges there are challenges to its execution. She explains how a careful balance of compassion and justice allows us to do good deeds, and keep our sanity.  ",
    "duration": "0:15:46",
    "publishdate": "10/31/2008"
  },
  {
    "rank": 972,
    "id": "1208",
    "speaker": "Dyan deNapoli",
    "name": "Dyan deNapoli: The great penguin rescue",
    "shortsummary": "A personal story, a collective triumph: Dyan deNapoli tells the story of the world's largest volunteer animal rescue, which saved more than 40,000 penguins after an oil spill off the coast of South Africa. How does a job this big get done? Penguin by penguin by penguin ...",
    "duration": "0:11:43",
    "publishdate": "8/9/2011"
  },
  {
    "rank": 973,
    "id": "669",
    "speaker": "Becky  Blanton",
    "name": "Becky Blanton: The year I was homeless",
    "shortsummary": "Becky Blanton planned to live in her van for a year and see the country, but when depression set in and her freelance job ended, her camping trip turned into homelessness. In this intimate talk, she describes her experience of becoming one of America's working homeless. ",
    "duration": "0:07:09",
    "publishdate": "10/28/2009"
  },
  {
    "rank": 974,
    "id": "1621",
    "speaker": "Janine Shepherd",
    "name": "Janine Shepherd: A broken body isn't a broken person",
    "shortsummary": "Cross-country skier Janine Shepherd hoped for an Olympic medal -- until she was hit by a truck during a training bike ride. She shares a powerful story about the human potential for recovery. Her message: you are not your body, and giving up old dreams can allow new ones to soar.",
    "duration": "0:18:57",
    "publishdate": "11/28/2012 16:00:00"
  },
  {
    "rank": 975,
    "id": "592",
    "speaker": "Sophal Ear",
    "name": "Sophal Ear: Escaping the Khmer Rouge",
    "shortsummary": "TED Fellow Sophal Ear shares the compelling story of his family's escape from Cambodia under the rule of the Khmer Rouge. He recounts his mother's cunning and determination to save her children.",
    "duration": "0:05:57",
    "publishdate": "7/8/2009"
  },
  {
    "rank": 976,
    "id": "50",
    "speaker": "Stefan Sagmeister",
    "name": "Yes, design can make you happy",
    "shortsummary": "Graphic designer Stefan Sagmeister takes the audience on a whimsical journey through moments of his life that made him happy -- and notes how many of these moments have to do with good design.",
    "duration": "0:15:30",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 977,
    "id": "181",
    "speaker": "Richard Branson",
    "name": "Life at 30,000 feet",
    "shortsummary": "Richard Branson talks to TED's Chris Anderson about the ups and the downs of his career, from his multibillionaire success to his multiple near-death experiences -- and reveals some of his (very surprising) motivations.",
    "duration": "0:29:51",
    "publishdate": "10/9/2007"
  },
  {
    "rank": 978,
    "id": "1100",
    "speaker": "Sarah Kay",
    "name": "Sarah Kay: If I should have a daughter ...",
    "shortsummary": "If I should have a daughter, instead of Mom, she's gonna call me Point B ...  began spoken word poet Sarah Kay, in a talk that inspired two standing ovations at TED2011. She tells the story of her metamorphosis -- from a wide-eyed teenager soaking in verse at New York's Bowery Poetry Club to a teacher connecting kids with the power of self-expression through Project V.O.I.C.E. -- and gives two breathtaking performances of \"B\" and \"Hiroshima.\"",
    "duration": "0:18:28",
    "publishdate": "3/18/2011"
  },
  {
    "rank": 979,
    "id": "77",
    "speaker": "Sheila Patek",
    "name": "Measuring the fastest animal on earth",
    "shortsummary": "Biologist Sheila Patek talks about her work measuring the feeding strike of the mantis shrimp, one of the fastest movements in the animal world, using video cameras recording at 20,000 frames per second.",
    "duration": "0:16:25",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 980,
    "id": "1357",
    "speaker": "Jenna McCarthy",
    "name": "Jenna McCarthy: What you don't know about marriage",
    "shortsummary": "In this funny, casual talk from TEDx, writer Jenna McCarthy shares surprising research on how marriages (especially happy marriages) really work. One tip: Do not try to win an Oscar for best actress.\n",
    "duration": "0:11:17",
    "publishdate": "2/14/2012 15:41:00"
  },
  {
    "rank": 981,
    "id": "432",
    "speaker": "Scott McCloud",
    "name": "Understanding comics",
    "shortsummary": "In this unmissable look at the magic of comics, Scott McCloud bends the presentation format into a cartoon-like experience, where colorful diversions whiz through childhood fascinations and imagined futures that our eyes can hear and touch.",
    "duration": "0:17:08",
    "publishdate": "1/13/2009"
  },
  {
    "rank": 982,
    "id": "405",
    "speaker": "Bill Joy",
    "name": "What I'm worried about, what I'm excited about",
    "shortsummary": "Technologist and futurist Bill Joy talks about several big worries for humanity -- and several big hopes in the fields of health, education and future tech. ",
    "duration": "0:19:02",
    "publishdate": "11/24/2008"
  },
  {
    "rank": 983,
    "id": "529",
    "speaker": "Laurie Garrett",
    "name": "Laurie Garrett on lessons from the 1918 flu",
    "shortsummary": "In 2007, as the world worried about a possible avian flu epidemic, Laurie Garrett, author of \"The Coming Plague,\" gave this powerful talk to a small TED University audience. Her insights from past pandemics are suddenly more relevant than ever.",
    "duration": "0:21:05",
    "publishdate": "4/30/2009"
  },
  {
    "rank": 984,
    "id": "1530",
    "speaker": "Stephen Ritz",
    "name": "Stephen Ritz: A teacher growing green in the South Bronx",
    "shortsummary": "A whirlwind of energy and ideas, Stephen Ritz is a teacher in New York's tough South Bronx, where he and his kids grow lush gardens for food, greenery -- and jobs. Just try to keep up with this New York treasure as he spins through the many, many ways there are to grow hope in a neighborhood many have written off, or in your own. <em>(Filmed at <a href=http://www.ted.com/tedx/events/2348>TEDxManhattan</a>.)</em>",
    "duration": "0:13:59",
    "publishdate": "7/31/2012 15:02:00"
  },
  {
    "rank": 985,
    "id": "66",
    "speaker": "Sir Ken Robinson",
    "name": "Do schools kill creativity?",
    "shortsummary": "Sir Ken Robinson makes an entertaining and profoundly moving case for creating an education system that nurtures (rather than undermines) creativity.",
    "duration": "0:19:24",
    "publishdate": "6/27/2006"
  },
  {
    "rank": 986,
    "id": "167",
    "speaker": "Stephen Petranek",
    "name": "10 ways the world could end",
    "shortsummary": "How might the world end? Stephen Petranek lays out the challenges that face us in the drive to preserve the human race. Will we be wiped out by an asteroid? Eco-collapse? How about a particle collider gone wild?",
    "duration": "0:29:42",
    "publishdate": "9/25/2007"
  },
  {
    "rank": 987,
    "id": "93",
    "speaker": "Barry Schwartz",
    "name": "The paradox of choice",
    "shortsummary": "Psychologist Barry Schwartz takes aim at a central tenet of western societies: freedom of choice. In Schwartz's estimation, choice has made us not freer but more paralyzed, not happier but more dissatisfied.",
    "duration": "0:19:37",
    "publishdate": "9/26/2006"
  },
  {
    "rank": 988,
    "id": "975",
    "speaker": "Stacey Kramer",
    "name": "Stacey Kramer: The best gift I ever survived",
    "shortsummary": "Stacey Kramer offers a moving, personal, 3-minute parable that shows how an unwanted experience -- frightening, traumatic, costly -- can turn out to be a priceless gift.",
    "duration": "0:03:17",
    "publishdate": "10/8/2010"
  },
  {
    "rank": 989,
    "id": "1658",
    "speaker": "iO Tillett Wright",
    "name": "iO Tillett Wright: Fifty shades of gay",
    "shortsummary": "Artist iO Tillett Wright has photographed 2,000 people who consider themselves somewhere on the LBGTQ spectrum and asked many of them: Can you assign a percentage to how gay or straight you are? Most people, it turns out, consider themselves to exist in the gray areas of sexuality, not 100% gay or straight. Which presents a real problem when it comes to discrimination: Where do you draw the line? (<em>Filmed at TEDxWomen.</em>)",
    "duration": "0:18:18",
    "publishdate": "1/30/2013 16:21:00"
  },
  {
    "rank": 990,
    "id": "914",
    "speaker": "Carl Safina",
    "name": "Carl Safina: The oil spill's unseen culprits, victims",
    "shortsummary": "The Gulf oil spill dwarfs comprehension, but we know this much: it's bad. Carl Safina scrapes out the facts in this blood-boiling cross-examination, arguing that the consequences will stretch far beyond the Gulf -- and many so-called solutions are making the situation worse.",
    "duration": "0:19:55",
    "publishdate": "7/12/2010"
  },
  {
    "rank": 991,
    "id": "170",
    "speaker": "Jeff Skoll",
    "name": "Making movies that make change",
    "shortsummary": "Film producer Jeff Skoll (An Inconvenient Truth) talks about his film company, Participant Productions, and the people who've inspired him to do good.",
    "duration": "0:15:31",
    "publishdate": "8/21/2007"
  },
  {
    "rank": 992,
    "id": "667",
    "speaker": "Rachel Armstrong",
    "name": "Rachel Armstrong: Architecture that repairs itself?",
    "shortsummary": "Venice is sinking. To save it, Rachel Armstrong says we need to outgrow architecture made of inert materials and, well, make architecture that grows itself. She proposes a not-quite-alive material that does its own repairs and sequesters carbon, too.",
    "duration": "0:07:32",
    "publishdate": "10/27/2009"
  },
  {
    "rank": 993,
    "id": "1003",
    "speaker": "Stefan Wolff",
    "name": "Stefan Wolff: The path to ending ethnic conflicts",
    "shortsummary": "Civil wars and ethnic conflicts have brought the world incredible suffering, but Stefan Wolff's figures show that, in the last 20 years, their number has steadily decreased. He extracts critical lessons from Northern Ireland, Liberia, Timor and more to show that leadership, diplomacy and institutional design are our three most effective weapons in waging peace.",
    "duration": "0:17:35",
    "publishdate": "11/9/2010"
  },
  {
    "rank": 994,
    "id": "554",
    "speaker": "Jay Walker",
    "name": "Jay Walker on the world's English mania",
    "shortsummary": "Jay Walker explains why two billion people around the world are trying to learn English. He shares photos and spine-tingling audio of Chinese students rehearsing English -- \"the world's second language\" -- by the thousands.",
    "duration": "0:04:34",
    "publishdate": "5/27/2009"
  },
  {
    "rank": 995,
    "id": "285",
    "speaker": "Adam Grosser",
    "name": "A new vision for refrigeration",
    "shortsummary": "Adam Grosser talks about a project to build a refrigerator that works without electricity -- to bring the vital tool to villages and clinics worldwide. Tweaking some old technology, he's come up with a system that works. ",
    "duration": "0:03:31",
    "publishdate": "6/23/2008"
  },
  {
    "rank": 996,
    "id": "31",
    "speaker": "Thom Mayne",
    "name": "Architecture is a new way to connect to the world",
    "shortsummary": "Architect Thom Mayne has never been one to take the easy option, and this whistle-stop tour of the buildings he's created makes you glad for it. These are big ideas cast in material form.",
    "duration": "0:20:40",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 997,
    "id": "471",
    "speaker": "Richard Pyle",
    "name": "Exploring the reef's Twilight Zone",
    "shortsummary": "In this illuminating talk, Richard Pyle shows us thriving life on the cliffs of coral reefs and groundbreaking diving technologies he has pioneered to explore it. He and his team risk everything to reveal the secrets of undiscovered species. ",
    "duration": "0:16:48",
    "publishdate": "2/25/2009"
  },
  {
    "rank": 998,
    "id": "744",
    "speaker": "Anthony Atala",
    "name": "Anthony Atala on growing new organs",
    "shortsummary": "Anthony Atala's state-of-the-art lab grows human organs -- from muscles to blood vessels to bladders, and more. At TEDMED, he shows footage of his bio-engineers working with some of its sci-fi gizmos, including an oven-like bioreactor (preheat to 98.6 F) and a machine that \"prints\" human tissue.",
    "duration": "0:17:52",
    "publishdate": "1/21/2010"
  },
  {
    "rank": 999,
    "id": "961",
    "speaker": "Steven Johnson",
    "name": "Steven Johnson: Where good ideas come from",
    "shortsummary": "People often credit their ideas to individual \"Eureka!\" moments. But Steven Johnson shows how history tells a different story. His fascinating tour takes us from the \"liquid networks\" of London's coffee houses to Charles Darwin's long, slow hunch to today's high-velocity web.",
    "duration": "0:17:45",
    "publishdate": "9/21/2010"
  },
  {
    "rank": 1000,
    "id": "59",
    "speaker": "Bono",
    "name": "TED Prize wish: Join my call to action on Africa",
    "shortsummary": "Musician and activist Bono accepts the 2005 TED Prize with a riveting talk, arguing that aid to Africa isn't just another celebrity cause; it's a global emergency.",
    "duration": "0:27:52",
    "publishdate": "10/31/2006"
  },
  {
    "rank": 1001,
    "id": "873",
    "speaker": "Brian Skerry",
    "name": "Brian Skerry reveals ocean's glory -- and horror",
    "shortsummary": "Photographer Brian Skerry shoots life above and below the waves -- as he puts it, both the horror and the magic of the ocean. Sharing amazing, intimate shots of undersea creatures, he shows how powerful images can help make change.",
    "duration": "0:16:13",
    "publishdate": "6/1/2010"
  },
  {
    "rank": 1002,
    "id": "1121",
    "speaker": "Roger Ebert",
    "name": "Roger Ebert: Remaking my voice",
    "shortsummary": "When film critic Roger Ebert lost his lower jaw to cancer, he lost the ability to eat and speak. But he did not lose his voice. In a moving talk from TED2011, Ebert and his wife, Chaz, with friends Dean Ornish and John Hunter, come together to tell his remarkable story.",
    "duration": "0:19:29",
    "publishdate": "4/13/2011"
  },
  {
    "rank": 1003,
    "id": "1777",
    "speaker": "Michael Archer",
    "name": "Michael Archer: How we'll resurrect the gastric brooding frog, the Tasmanian tiger",
    "shortsummary": "The gastric brooding frog lays its eggs just like any other frog -- then swallows them whole to incubate. That is, it did until it went extinct 30 years ago. Paleontologist Michael Archer makes a case to bring back the gastric brooding frog and the thylacine, commonly known as the Tasmanian tiger. <em>(Filmed at <a href=\"http://tedxdeextinction.org\" target=\"_blank\">TEDxDeExtinction</a>.)</em> ",
    "duration": "0:17:36",
    "publishdate": "6/27/2013 15:00:00"
  },
  {
    "rank": 1004,
    "id": "1730",
    "speaker": "Juan Enriquez",
    "name": "Juan Enriquez: Your online life, permanent as a tattoo",
    "shortsummary": "What if Andy Warhol had it wrong, and instead of being famous for 15 minutes, we're only anonymous for that long? In this short talk, Juan Enriquez looks at the surprisingly permanent effects of digital sharing on our personal privacy. He shares insight from the ancient Greeks to help us deal with our new \"digital tattoos.\"",
    "duration": "0:05:57",
    "publishdate": "5/2/2013 14:57:00"
  },
  {
    "rank": 1005,
    "id": "19",
    "speaker": "Kevin Kelly",
    "name": "How does technology evolve? Like we did",
    "shortsummary": "Tech enthusiast Kevin Kelly asks \"What does technology want?\" and discovers that its movement toward ubiquity and complexity is much like the evolution of life.",
    "duration": "0:20:00",
    "publishdate": "11/14/2006"
  },
  {
    "rank": 1006,
    "id": "390",
    "speaker": "James Surowiecki",
    "name": "The moment when social media became the news",
    "shortsummary": "James Surowiecki pinpoints the moment when social media became an equal player in the world of news-gathering: the 2005 tsunami, when YouTube video, blogs, IMs and txts carried the news -- and preserved moving personal stories from the tragedy.",
    "duration": "0:16:59",
    "publishdate": "11/4/2008"
  },
  {
    "rank": 1007,
    "id": "35",
    "speaker": "James Watson",
    "name": "The double helix and today's DNA mysteries",
    "shortsummary": "Nobel laureate James Watson opens TED2005 with the frank and funny story of how he and his research partner, Francis Crick, discovered the structure of DNA.",
    "duration": "0:20:11",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 1008,
    "id": "1047",
    "speaker": "Deborah Rhodes",
    "name": "Deborah Rhodes: A tool that finds 3x more breast tumors, and why it's not available to you",
    "shortsummary": "Working with a team of physicists, Dr. Deborah Rhodes developed a new tool for tumor detection that's 3 times as effective as traditional mammograms for women with dense breast tissue. The life-saving implications are stunning. So why haven't we heard of it? Rhodes shares the story behind the tool's creation, and the web of politics and economics that keep it from mainstream use.",
    "duration": "0:21:08",
    "publishdate": "1/6/2011"
  },
  {
    "rank": 1009,
    "id": "1556",
    "speaker": "Shyam Sankar",
    "name": "Shyam Sankar: The rise of human-computer cooperation",
    "shortsummary": "Brute computing force alone can't solve the world's problems. Data mining innovator Shyam Sankar explains why solving big problems (like catching terrorists or identifying huge hidden trends) is not a question of finding the right algorithm, but rather the right symbiotic relationship between computation and human creativity.",
    "duration": "0:12:12",
    "publishdate": "9/6/2012 15:11:00"
  },
  {
    "rank": 1010,
    "id": "327",
    "speaker": "Lennart Green",
    "name": "Close-up card magic",
    "shortsummary": "Like your uncle at a family party, the rumpled Swedish doctor Lennart Green says, \"Pick a card, any card.\" But what he does with those cards is pure magic -- flabbergasting, lightning-fast, how-does-he-do-it? magic.",
    "duration": "0:31:08",
    "publishdate": "8/20/2008"
  },
  {
    "rank": 1011,
    "id": "251",
    "speaker": "Brian Greene",
    "name": "The universe on a string",
    "shortsummary": "Physicist Brian Greene explains superstring theory, the idea that minscule strands of energy vibrating in 11 dimensions create every particle and force in the universe.",
    "duration": "0:19:06",
    "publishdate": "4/22/2008"
  },
  {
    "rank": 1012,
    "id": "844",
    "speaker": "Roz Savage",
    "name": "Roz Savage: Why I'm rowing across the Pacific",
    "shortsummary": "Five years ago, Roz Savage quit her high-powered London job to become an ocean rower. She's crossed the Atlantic solo, and just started the third leg of a Pacific solo row, the first for a woman. Why does she do it? Hear her reasons, both deeply personal and urgently activist.",
    "duration": "0:18:35",
    "publishdate": "4/28/2010"
  },
  {
    "rank": 1013,
    "id": "1431",
    "speaker": "Joe Smith",
    "name": "Joe Smith: How to use a paper towel",
    "shortsummary": "You use paper towels to dry your hands every day, but chances are, you're doing it wrong. In this enlightening and funny short talk at TEDxConcordiaUPortland, Joe Smith reveals the trick to perfect paper towel technique.",
    "duration": "",
    "publishdate": "4/28/2012 13:57:00"
  },
  {
    "rank": 1014,
    "id": "206",
    "speaker": "David Gallo",
    "name": "Underwater astonishments",
    "shortsummary": "David Gallo shows jaw-dropping footage of amazing sea creatures, including a color-shifting cuttlefish, a perfectly camouflaged octopus, and a Times Square's worth of neon light displays from fish who live in the blackest depths of the ocean.",
    "duration": "0:05:27",
    "publishdate": "1/11/2008"
  },
  {
    "rank": 1015,
    "id": "866",
    "speaker": "Johanna Blakley",
    "name": "Johanna Blakley: Lessons from fashion's free culture",
    "shortsummary": "Copyright law's grip on film, music and software barely touches the fashion industry ... and fashion benefits in both innovation and sales, says Johanna Blakley. At TEDxUSC 2010, she talks about what all creative industries can learn from fashion's free culture.",
    "duration": "0:15:36",
    "publishdate": "5/25/2010"
  },
  {
    "rank": 1016,
    "id": "58",
    "speaker": "Larry Brilliant",
    "name": "TED Prize wish: Help stop the next pandemic",
    "shortsummary": "Accepting the 2006 TED Prize, Dr. Larry Brilliant talks about how smallpox was eradicated from the planet, and calls for a new global system that can identify and contain pandemics before they spread. ",
    "duration": "0:25:50",
    "publishdate": "7/25/2006"
  },
  {
    "rank": 1017,
    "id": "1219",
    "speaker": "Raghava KK",
    "name": "Raghava KK: Shake up your story",
    "shortsummary": "Artist Raghava KK demos his new children's book for iPad with a fun feature: when you shake it, the story -- and your perspective -- changes. In this charming short talk, he invites all of us to shake up our perspective a little bit.",
    "duration": "0:04:30",
    "publishdate": "9/9/2011"
  },
  {
    "rank": 1018,
    "id": "1572",
    "speaker": "Rachel Botsman",
    "name": "Rachel Botsman: The currency of the new economy is trust",
    "shortsummary": "There's been an explosion of collaborative consumption -- web-powered sharing of cars, apartments, skills. Rachel Botsman explores the currency that makes systems like Airbnb and Taskrabbit work: trust, influence, and what she calls \"reputation capital.\"",
    "duration": "0:19:46",
    "publishdate": "9/22/2012 15:38:00"
  },
  {
    "rank": 1019,
    "id": "712",
    "speaker": "Loretta Napoleoni",
    "name": "Loretta Napoleoni: The intricate economics of terrorism",
    "shortsummary": "Loretta Napoleoni details her rare opportunity to talk to the secretive Italian Red Brigades -- an experience that sparked a lifelong interest in terrorism. She gives a behind-the-scenes look at its complex economics, revealing a surprising connection between money laundering and the US Patriot Act. ",
    "duration": "0:15:44",
    "publishdate": "12/14/2009"
  },
  {
    "rank": 1020,
    "id": "1637",
    "speaker": "Karen Thompson Walker",
    "name": "Karen Thompson Walker: What fear can teach us",
    "shortsummary": "Imagine you're a shipwrecked sailor adrift in the enormous Pacific. You can choose one of three directions and save yourself and your shipmates -- but each choice comes with a fearful consequence too. How do you choose? In telling the story of the whaleship Essex, novelist Karen Thompson Walker shows how fear propels imagination, as it forces us to imagine the possible futures and how to cope with them. ",
    "duration": "0:11:30",
    "publishdate": "1/2/2013 16:13:00"
  },
  {
    "rank": 1021,
    "id": "1",
    "speaker": "Al Gore",
    "name": "15 ways to avert a climate crisis",
    "shortsummary": "With the same humor and humanity he exuded in An Inconvenient Truth, Al Gore spells out 15 ways that individuals can address climate change immediately, from buying a hybrid to inventing a new, hotter \"brand name\" for global warming.",
    "duration": "0:16:17",
    "publishdate": "6/27/2006"
  },
  {
    "rank": 1022,
    "id": "306",
    "speaker": "Freeman Dyson",
    "name": "Let's look for life in the outer solar system",
    "shortsummary": "Physicist Freeman Dyson suggests that we start looking for life on the moons of Jupiter and out past Neptune, in the Kuiper belt and the Oort cloud. He talks about what such life would be like -- and how we might find it. ",
    "duration": "0:19:11",
    "publishdate": "7/14/2008"
  },
  {
    "rank": 1023,
    "id": "331",
    "speaker": "Paul Rothemund",
    "name": "The astonishing promise of DNA folding",
    "shortsummary": "In 2007, Paul Rothemund gave TED a short summary of his specialty, DNA folding. Now he lays out in clear, adundant detail the immense promise of this field -- to create tiny machines that assemble themselves.",
    "duration": "0:16:24",
    "publishdate": "9/2/2008"
  },
  {
    "rank": 1024,
    "id": "462",
    "speaker": "Barry Schwartz",
    "name": "The real crisis? We stopped being wise",
    "shortsummary": "Barry Schwartz makes a passionate call for \"practical wisdom\" as an antidote to a society gone mad with bureaucracy. He argues powerfully that rules often fail us, incentives often backfire, and practical, everyday wisdom will help rebuild our world.",
    "duration": "0:20:45",
    "publishdate": "2/16/2009"
  },
  {
    "rank": 1025,
    "id": "940",
    "speaker": "Lisa Margonelli",
    "name": "Lisa Margonelli: The political chemistry of oil",
    "shortsummary": "In the Gulf oil spill's aftermath, Lisa Margonelli says drilling moratoriums and executive ousters make for good theater, but distract from the issue at its heart: our unrestrained oil consumption. She shares her bold plan to wean America off of oil -- by confronting consumers with its real cost.",
    "duration": "0:17:14",
    "publishdate": "8/26/2010"
  },
  {
    "rank": 1026,
    "id": "1112",
    "speaker": "Stanley McChrystal",
    "name": "Stanley McChrystal: Listen, learn ... then lead",
    "shortsummary": "Four-star general Stanley McChrystal shares what he learned about leadership over his decades in the military. How can you build a sense of shared purpose among people of many ages and skill sets? By listening and learning -- and addressing the possibility of failure.",
    "duration": "0:15:38",
    "publishdate": "4/5/2011"
  },
  {
    "rank": 1027,
    "id": "1492",
    "speaker": "Don Tapscott",
    "name": "Don Tapscott: Four principles for the open world",
    "shortsummary": "The recent generations have been bathed in connecting technology from birth, says futurist Don Tapscott, and as a result the world is transforming into one that is far more open and transparent. In this inspiring talk, he lists the four core principles that show how this open world can be a far better place.",
    "duration": "0:17:50",
    "publishdate": "6/28/2012 14:31:00"
  },
  {
    "rank": 1028,
    "id": "372",
    "speaker": "Paola Antonelli",
    "name": "Design and the elastic mind",
    "shortsummary": "MOMA design curator Paola Antonelli previews the groundbreaking show \"Design and the Elastic Mind\" -- full of products and designs that reflect the way we think now.",
    "duration": "0:17:40",
    "publishdate": "10/15/2008"
  },
  {
    "rank": 1029,
    "id": "1291",
    "speaker": "Charles Limb",
    "name": "Charles Limb: Building the musical muscle",
    "shortsummary": "Charles Limb performs cochlear implantation, a surgery that treats hearing loss and can restore the ability to hear speech. But as a musician too, Limb thinks about what the implants lack: They don't let you fully experience music yet. (There's a hair-raising example.) At TEDMED, Limb reviews the state of the art and the way forward.",
    "duration": "0:15:59",
    "publishdate": "12/1/2011"
  },
  {
    "rank": 1030,
    "id": "185",
    "speaker": "Eleni Gabre-Madhin",
    "name": "Building a commodities market in Ethiopia",
    "shortsummary": "Economist Eleni Gabre-Madhin outlines her ambitious vision to found the first commodities market in Ethiopia. Her plan would create wealth, minimize risk for farmers and turn the world's largest recipient of food aid into a regional food basket.",
    "duration": "0:20:34",
    "publishdate": "10/25/2007"
  },
  {
    "rank": 1031,
    "id": "1227",
    "speaker": "Erez Lieberman Aiden and Jean-Baptiste Michel ",
    "name": "What we learned from 5 million books",
    "shortsummary": "Have you played with Google Labs' Ngram Viewer? It's an addicting tool that lets you search for words and ideas in a database of 5 million books from across centuries. Erez Lieberman Aiden and Jean-Baptiste Michel show us how it works, and a few of the surprising things we can learn from 500 billion words. ",
    "duration": "0:14:08",
    "publishdate": "9/20/2011"
  },
  {
    "rank": 1032,
    "id": "1537",
    "speaker": "Bahia Shehab",
    "name": "Bahia Shehab: A thousand times no",
    "shortsummary": "Art historian Bahia Shehab has long been fascinated with the Arabic script for \"˜no.' When revolution swept through Egypt in 2011, she began spraying the image in the streets saying no to dictators, no to military rule and no to violence.",
    "duration": "0:05:56",
    "publishdate": "9/28/2012 15:23:00"
  },
  {
    "rank": 1033,
    "id": "1217",
    "speaker": "Edward Tenner",
    "name": "Edward Tenner: Unintended consequences",
    "shortsummary": "Every new invention changes the world -- in ways both intentional and unexpected. Historian Edward Tenner tells stories that illustrate the under-appreciated gap between our ability to innovate and our ability to foresee the consequences.",
    "duration": "0:16:10",
    "publishdate": "9/6/2011"
  },
  {
    "rank": 1034,
    "id": "159",
    "speaker": "Andrew Mwenda",
    "name": "Let's take a new look at African aid",
    "shortsummary": "In this provocative talk, journalist Andrew Mwenda asks us to reframe the \"African question\" -- to look beyond the media's stories of poverty, civil war and helplessness and see the opportunities for creating wealth and happiness throughout the continent.",
    "duration": "0:17:07",
    "publishdate": "9/4/2007"
  },
  {
    "rank": 1035,
    "id": "142",
    "speaker": "Alan Russell",
    "name": "Why can't we grow new body parts?",
    "shortsummary": "Alan Russell studies regenerative medicine -- a breakthrough way of thinking about disease and injury, using a process that can signal the body to rebuild itself.",
    "duration": "0:19:25",
    "publishdate": "7/4/2007"
  },
  {
    "rank": 1036,
    "id": "984",
    "speaker": "Heribert Watzke",
    "name": "Heribert Watzke: The brain in your gut",
    "shortsummary": "Did you know you have functioning neurons in your intestines -- about a hundred million of them? Food scientist Heribert Watzke tells us about the \"hidden brain\" in our gut and the surprising things it makes us feel.",
    "duration": "0:15:14",
    "publishdate": "10/19/2010"
  },
  {
    "rank": 1037,
    "id": "800",
    "speaker": "Shekhar Kapur",
    "name": "Shekhar Kapur: We are the stories we tell ourselves",
    "shortsummary": "Where does creative inspiration spring from? At TEDIndia, Hollywood/Bollywood director Shekhar Kapur (\"Elizabeth,\" \"Mr. India\") pinpoints his source of creativity: sheer, utter panic. He shares a powerful way to unleash your inner storyteller.",
    "duration": "0:21:14",
    "publishdate": "3/19/2010"
  },
  {
    "rank": 1038,
    "id": "205",
    "speaker": "J.J. Abrams",
    "name": "The mystery box",
    "shortsummary": "J.J. Abrams traces his love for the unseen mystery -- a passion that's evident in his films and TV shows, including Cloverfield, Lost and Alias -- back to its magical beginnings.",
    "duration": "0:18:02",
    "publishdate": "1/10/2008"
  },
  {
    "rank": 1039,
    "id": "1179",
    "speaker": "Emiliano Salinas\n",
    "name": "Emiliano Salinas: A civil response to violence",
    "shortsummary": "In this passionate talk from TEDxSanMigueldeAllende that's already caused a sensation in Mexico, Emiliano Salinas, son of former president Carlos Salinas de Gortari, confronts the current climate of violence in Mexico -- or rather, how Mexican society responds to it. He calls on ordinary citizens to move from denial and fear to peaceful, community-based action. This is the first talk posted on TED.com that was delivered in a language other than English. (It has English subtitles by default.)",
    "duration": "0:12:17",
    "publishdate": "6/27/2011"
  },
  {
    "rank": 1040,
    "id": "1064",
    "speaker": "Kate Orff",
    "name": "Reviving New York's rivers -- with oysters!",
    "shortsummary": "Architect Kate Orff sees the oyster as an agent of urban change. Bundled into beds and sunk into city rivers, oysters slurp up pollution and make legendarily dirty waters clean -- thus driving even more innovation in \"oyster-tecture.\" Orff shares her vision for an urban landscape that links nature and humanity for mutual benefit.",
    "duration": "0:10:07",
    "publishdate": "1/31/2011"
  },
  {
    "rank": 1041,
    "id": "918",
    "speaker": "Julian Assange",
    "name": "Julian Assange: Why the world needs WikiLeaks ",
    "shortsummary": "The controversial website WikiLeaks collects and posts highly classified documents and video. Founder Julian Assange, who's reportedly being sought for questioning by US authorities, talks to TED's Chris Anderson about how the site operates, what it has accomplished -- and what drives him. The interview includes graphic footage of a recent US airstrike in Baghdad.",
    "duration": "0:19:33",
    "publishdate": "7/19/2010"
  },
  {
    "rank": 1042,
    "id": "1039",
    "speaker": "Beverly + Dereck Joubert",
    "name": "Beverly + Dereck Joubert: Life lessons from big cats",
    "shortsummary": "Beverly + Dereck Joubert live in the bush, filming and photographing lions and leopards in their natural habitat. With stunning footage (some never before seen), they discuss their personal relationships with these majestic animals -- and their quest to save the big cats from human threats.",
    "duration": "0:17:20",
    "publishdate": "12/20/2010"
  },
  {
    "rank": 1043,
    "id": "584",
    "speaker": "Paul Collier",
    "name": "Paul Collier's new rules for rebuilding a broken nation",
    "shortsummary": "Long conflict can wreck a country, leaving behind poverty and chaos. But what's the right way to help war-torn countries rebuild? At TED@State, Paul Collier explains the problems with current post-conflict aid plans, and suggests 3 ideas for a better approach.",
    "duration": "0:16:34",
    "publishdate": "6/24/2009"
  },
  {
    "rank": 1044,
    "id": "1145",
    "speaker": "Leonard Susskind",
    "name": "Leonard Susskind: My friend Richard Feynman",
    "shortsummary": "What's it like to be pals with a genius? Onstage at TEDxCaltech, physicist Leonard Susskind spins a few stories about his friendship with the legendary Richard Feynman, discussing his unconventional approach to problems both serious and ... less so.",
    "duration": "0:14:41",
    "publishdate": "5/13/2011"
  },
  {
    "rank": 1045,
    "id": "1379",
    "speaker": "Andrew Stanton",
    "name": "Andrew Stanton: The clues to a great story",
    "shortsummary": "Filmmaker Andrew Stanton (\"Toy Story,\" \"WALL-E\") shares what he knows about storytelling -- starting at the end and working back to the beginning. (Contains graphic language ...)",
    "duration": "0:19:16",
    "publishdate": "3/6/2012 16:39:00"
  },
  {
    "rank": 1046,
    "id": "649",
    "speaker": "Stefan Sagmeister",
    "name": "Stefan Sagmeister: The power of time off",
    "shortsummary": "Every seven years, designer Stefan Sagmeister closes his New York studio for a yearlong sabbatical to rejuvenate and refresh their creative outlook. He explains the often overlooked value of time off and shows the innovative projects inspired by his time in Bali.",
    "duration": "0:17:40",
    "publishdate": "10/2/2009"
  },
  {
    "rank": 1047,
    "id": "1305",
    "speaker": "Ramona Pierson",
    "name": "Ramona Pierson: An unexpected place of healing",
    "shortsummary": "When Ramona Pierson was 22, she was hit by a drunk driver and spent 18 months in a coma. At TEDxDU she tells the remarkable story of her recovery -- drawing on the collective skills and wisdom of a senior citizens' home.",
    "duration": "0:11:13",
    "publishdate": "12/16/2011"
  },
  {
    "rank": 1048,
    "id": "1372",
    "speaker": "Paul Snelgrove",
    "name": "Paul Snelgrove: A census of the ocean",
    "shortsummary": "Oceanographer Paul Snelgrove shares the results of a ten-year project with one goal: to take a census of all the life in the oceans. He shares amazing photos of some of the surprising finds of the Census of Marine Life.",
    "duration": "0:16:47",
    "publishdate": "2/28/2012 17:13:00"
  },
  {
    "rank": 1049,
    "id": "1780",
    "speaker": "Gavin Pretor-Pinney",
    "name": "Gavin Pretor-Pinney: Cloudy with a chance of joy",
    "shortsummary": "You don't need to plan an exotic trip to find creative inspiration. Just look up, says Gavin Pretor-Pinney, founder of the Cloud Appreciation Society. As he shares charming photos of nature's finest aerial architecture, Pretor-Pinney calls for us all to take a step off the digital treadmill, lie back and admire the beauty in the sky above.",
    "duration": "0:10:54",
    "publishdate": "7/16/2013 14:59:00"
  },
  {
    "rank": 1050,
    "id": "127",
    "speaker": "Ngozi Okonjo-Iweala",
    "name": "How to help Africa? Do business there",
    "shortsummary": "We know the negative images of Africa -- famine and disease, conflict and corruption. But, says Ngozi Okonjo-Iweala, there's another, less-told story happening in many African nations: one of reform, economic growth and business opportunity.",
    "duration": "0:20:13",
    "publishdate": "5/30/2007"
  },
  {
    "rank": 1051,
    "id": "608",
    "speaker": "Paul Romer",
    "name": "Paul Romer's radical idea: Charter cities",
    "shortsummary": "How can a struggling country break out of poverty if it's trapped in a system of bad rules? Economist Paul Romer unveils a bold idea: \"charter cities,\" city-scale administrative zones governed by a coalition of nations. (Could Guant√°namo Bay become the next Hong Kong?)",
    "duration": "0:18:29",
    "publishdate": "8/5/2009"
  },
  {
    "rank": 1052,
    "id": "1280",
    "speaker": "Phil Plait",
    "name": "Phil Plait: How to defend Earth from asteroids",
    "shortsummary": "What's six miles wide and can end civilization in an instant? An asteroid - and there are lots of them out there. With humor and great visuals, Phil Plait enthralls the TEDxBoulder audience with all the ways asteroids can kill, and what we must do to avoid them.",
    "duration": "0:14:16",
    "publishdate": "11/21/2011"
  },
  {
    "rank": 1053,
    "id": "1792",
    "speaker": "Tom Thum",
    "name": "Tom Thum: The orchestra in my mouth",
    "shortsummary": "In a highly entertaining performance, beatboxer Tom Thum slings beats, comedy and a mouthful of instrumental impersonations into 11 minutes of creativity and fun that will make you smile. (<a href=\"http://tedxsydney.com\">Filmed at TEDxSydney</a>.)",
    "duration": "0:11:41",
    "publishdate": "7/19/2013 15:14:00"
  },
  {
    "rank": 1054,
    "id": "1682",
    "speaker": "Amanda Palmer",
    "name": "Amanda Palmer: The art of asking",
    "shortsummary": "Don't make people pay for music, says Amanda Palmer: Let them. In a passionate talk that begins in her days as a street performer (drop a dollar in the hat for the Eight-Foot Bride!), she examines the new relationship between artist and fan.",
    "duration": "0:13:47",
    "publishdate": "3/1/2013 17:26:00"
  },
  {
    "rank": 1055,
    "id": "1251",
    "speaker": "Todd Kuiken",
    "name": "Todd Kuiken: A prosthetic arm that \"feels\"",
    "shortsummary": "Physiatrist and engineer Todd Kuiken is building a prosthetic arm that connects with the human nervous system -- improving motion, control and even feeling. Onstage, patient Amanda Kitts helps demonstrate this next-gen robotic arm.",
    "duration": "0:18:51",
    "publishdate": "10/20/2011"
  },
  {
    "rank": 1056,
    "id": "1456",
    "speaker": "Philippe Petit",
    "name": "Philippe Petit: The journey across the high wire",
    "shortsummary": "Even a death-defying magician has to start somewhere. High-wire artist Philippe Petit takes you on an intimate journey from his first card trick at age 6 to his tightrope walk between the Twin Towers.",
    "duration": "0:19:07",
    "publishdate": "5/23/2012 15:02:00"
  },
  {
    "rank": 1057,
    "id": "177",
    "speaker": "Larry Brilliant",
    "name": "The case for informed optimism",
    "shortsummary": "We've known about global warming for 50 years and done little about it, says Google.org director Larry Brilliant. In spite of this and other depressing trends, he's optimistic and tells us why. From Skoll World Forum, Oxford, UK, www.skollfoundation.org",
    "duration": "0:21:01",
    "publishdate": "11/21/2007"
  },
  {
    "rank": 1058,
    "id": "1083",
    "speaker": "Ahn Trio",
    "name": "Ahn Trio: A modern take on piano, violin, cello",
    "shortsummary": "The three Ahn sisters (cellist Maria, pianist Lucia, violinist Angella) breathe new life into the piano trio with their passionate musicmaking. At TEDWomen, they start with the bright and poppy \"Skylife,\" by David Balakrishnan, then play a gorgeous, slinky version of \"Oblivion,\" by Astor Piazzolla.",
    "duration": "0:09:25",
    "publishdate": "2/25/2011"
  },
  {
    "rank": 1059,
    "id": "627",
    "speaker": "Steve Truglia",
    "name": "Steve Truglia: A leap from the edge of space",
    "shortsummary": "At his day job, Steve Truglia flips cars, walks through fire and falls out of buildings -- pushing technology to make stunts bigger, safer, more awesome. He talks us through his next stunt: the highest jump ever attempted, from the very edge of space.",
    "duration": "0:14:30",
    "publishdate": "9/4/2009"
  },
  {
    "rank": 1060,
    "id": "75",
    "speaker": "Sasa Vucinic",
    "name": "Why a free press is the best investment",
    "shortsummary": "A free press -- papers, magazines, radio, TV, blogs -- is the backbone of any true democracy (and a vital watchdog on business). Sasa Vucinic, a journalist from Belgrade, talks about his new fund, which supports media by selling \"free press bonds.\"",
    "duration": "0:18:00",
    "publishdate": "10/18/2006"
  },
  {
    "rank": 1061,
    "id": "188",
    "speaker": "Raul Midon",
    "name": "\"All the Answers\" and \"Tembererana\"",
    "shortsummary": "Singer/guitarist Raul Midon performs \"All the Answers\" in a world premiere at TED2007, followed by the sprightly \"Tembererana.\"",
    "duration": "0:10:40",
    "publishdate": "1/18/2008"
  },
  {
    "rank": 1062,
    "id": "396",
    "speaker": "Isaac Mizrahi",
    "name": "Fashion, passion, and about a million other things",
    "shortsummary": "Fashion designer Isaac Mizrahi spins through a dizzying array of inspirations -- from '50s pinups to a fleeting glimpse of a hole in a shirt that makes him shout \"Stop the cab!\" Inside this rambling talk are real clues to living a happy, creative life.",
    "duration": "0:14:16",
    "publishdate": "11/18/2008"
  },
  {
    "rank": 1063,
    "id": "1597",
    "speaker": "David Pizarro",
    "name": "David Pizarro: The strange politics of disgust",
    "shortsummary": "What does a disgusting image have to do with how you vote? Equipped with surveys and experiments, psychologist David Pizarro demonstrates a correlation between sensitivity to disgusting cues -- a photo of feces, an unpleasant odor -- and moral and political conservatism. <em>(Filmed at TEDxEast.)</em>",
    "duration": "0:14:02",
    "publishdate": "10/23/2012 15:03:00"
  },
  {
    "rank": 1064,
    "id": "445",
    "speaker": "Joe DeRisi",
    "name": "Hunting the next killer virus",
    "shortsummary": "Biochemist Joe DeRisi talks about amazing new ways to diagnose viruses (and treat the illnesses they cause) using DNA. His work may help us understand malaria, SARS, avian flu -- and the 60 percent of everyday viral infections that go undiagnosed.",
    "duration": "0:16:05",
    "publishdate": "1/29/2009"
  },
  {
    "rank": 1065,
    "id": "157",
    "speaker": "Jacqueline Novogratz",
    "name": "Tackling poverty with \"patient capital\"",
    "shortsummary": "Jacqueline Novogratz shares stories of how \"patient capital\" can bring sustainable jobs, goods, services -- and dignity -- to the world's poorest.",
    "duration": "0:18:23",
    "publishdate": "8/12/2007"
  },
  {
    "rank": 1066,
    "id": "274",
    "speaker": "Clay Shirky",
    "name": "Institutions vs. collaboration",
    "shortsummary": "In this prescient 2005 talk, Clay Shirky shows how closed groups and companies will give way to looser networks where small contributors have big roles and fluid cooperation replaces rigid planning.",
    "duration": "0:20:46",
    "publishdate": "7/10/2008"
  },
  {
    "rank": 1067,
    "id": "154",
    "speaker": "Euvin Naidoo",
    "name": "Africa as an investment",
    "shortsummary": "South African investment banker Euvin Naidoo explains why investing in Africa can make great business sense.",
    "duration": "0:19:01",
    "publishdate": "7/31/2007"
  },
  {
    "rank": 1068,
    "id": "237",
    "speaker": "Clifford Stoll",
    "name": "18 minutes with an agile mind",
    "shortsummary": "Clifford Stoll captivates his audience with a wildly energetic sprinkling of anecdotes, observations, asides -- and even a science experiment. After all, by his own definition, he's a scientist: \"Once I do something, I want to do something else.\"",
    "duration": "0:17:57",
    "publishdate": "3/26/2008"
  },
  {
    "rank": 1069,
    "id": "1482",
    "speaker": "Marco Tempest",
    "name": "Marco Tempest: The electric rise and fall of Nikola Tesla",
    "shortsummary": "Combining projection mapping and a pop-up book, Marco Tempest tells the visually arresting story of Nikola Tesla -- called \"the greatest geek who ever lived\" -- from his triumphant invention of alternating current to his penniless last days.",
    "duration": "0:06:05",
    "publishdate": "6/20/2012 15:02:00"
  },
  {
    "rank": 1070,
    "id": "570",
    "speaker": "Nancy Etcoff",
    "name": "Nancy Etcoff on the surprising science of happiness",
    "shortsummary": "Cognitive researcher Nancy Etcoff looks at happiness -- the ways we try to achieve and increase it, the way it's untethered to our real circumstances, and its surprising effect on our bodies.",
    "duration": "0:19:45",
    "publishdate": "6/10/2009"
  },
  {
    "rank": 1071,
    "id": "684",
    "speaker": "Cynthia Schneider",
    "name": "Cynthia Schneider: The surprising spread of \"Idol\" TV",
    "shortsummary": "Cynthia Schneider looks at two  international \"American Idol\"-style shows -- one in Afghanistan, and one in the United Arab Emirates -- and shows the surprising effect that these reality-TV competitions are creating in their societies.",
    "duration": "0:05:37",
    "publishdate": "11/13/2009"
  },
  {
    "rank": 1072,
    "id": "790",
    "speaker": "Dan Barber",
    "name": "Dan Barber: How I fell in love with a fish",
    "shortsummary": "Chef Dan Barber squares off with a dilemma facing many chefs today: how to keep fish on the menu. With impeccable research and deadpan humor, he chronicles his pursuit of a sustainable fish he could love, and the foodie's honeymoon he's enjoyed since discovering an outrageously delicious fish raised using a revolutionary farming method in Spain.",
    "duration": "0:19:02",
    "publishdate": "3/10/2010"
  },
  {
    "rank": 1073,
    "id": "967",
    "speaker": "Sebastian Seung",
    "name": "Sebastian Seung: I am my connectome",
    "shortsummary": "Sebastian Seung is mapping a massively ambitious new model of the brain that focuses on the connections between each neuron. He calls it our \"connectome,\" and it's as individual as our genome -- and understanding it could open a new way to understand our brains and our minds.",
    "duration": "0:19:26",
    "publishdate": "9/28/2010"
  },
  {
    "rank": 1074,
    "id": "1570",
    "speaker": "Shimon Schocken",
    "name": "Shimon Schocken: The self-organizing computer course",
    "shortsummary": "Shimon Schocken and Noam Nisan developed a curriculum for their students to build a computer, piece by piece. When they put the course online -- giving away the tools, simulators, chip specifications and other building blocks -- they were surprised that thousands jumped at the opportunity to learn, working independently as well as organizing their own classes in the first Massive Open Online Course (MOOC). A call to forget about grades and tap into the self-motivation to learn.",
    "duration": "0:16:25",
    "publishdate": "10/4/2012 15:00:00"
  },
  {
    "rank": 1075,
    "id": "618",
    "speaker": "Dan Pink",
    "name": "Dan Pink on the surprising science of motivation",
    "shortsummary": "Career analyst Dan Pink examines the puzzle of motivation, starting with a fact that social scientists know but most managers don't: Traditional rewards aren't always as effective as we think. Listen for illuminating stories -- and maybe, a way forward.",
    "duration": "0:18:36",
    "publishdate": "8/24/2009"
  },
  {
    "rank": 1076,
    "id": "195",
    "speaker": "Robert Full",
    "name": "Secrets of movement, from geckos and roaches",
    "shortsummary": "Biologist Robert Full shares slo-mo video of some captivating critters. Take a closer look at the spiny legs that allow cockroaches to scuttle across mesh and the nanobristle-packed feet that let geckos to run straight up walls. ",
    "duration": "0:19:24",
    "publishdate": "11/27/2007"
  },
  {
    "rank": 1077,
    "id": "278",
    "speaker": "George Dyson",
    "name": "The birth of the computer",
    "shortsummary": "Historian George Dyson tells stories from the birth of the modern computer -- from its 16th-century origins to the hilarious notebooks of some early computer engineers.",
    "duration": "0:17:18",
    "publishdate": "6/15/2008"
  },
  {
    "rank": 1078,
    "id": "807",
    "speaker": "Kevin Bales",
    "name": "Kevin Bales: How to combat modern slavery",
    "shortsummary": "In this moving yet pragmatic talk, Kevin Bales explains the business of modern slavery, a multibillion-dollar economy that underpins some of the worst industries on earth. He shares stats and personal stories from his on-the-ground research -- and names the price of freeing every slave on earth right now.",
    "duration": "0:18:01",
    "publishdate": "3/29/2010"
  },
  {
    "rank": 1079,
    "id": "637",
    "speaker": "Oliver Sacks",
    "name": "Oliver Sacks: What hallucination reveals about our minds",
    "shortsummary": "Neurologist and author Oliver Sacks brings our attention to Charles Bonnett syndrome -- when visually impaired people experience lucid hallucinations. He describes the experiences of his patients in heartwarming detail and walks us through the biology of this under-reported phenomenon. ",
    "duration": "0:18:48",
    "publishdate": "9/17/2009"
  },
  {
    "rank": 1080,
    "id": "1818",
    "speaker": "Ron McCallum",
    "name": "Ron McCallum: How technology allowed me to read",
    "shortsummary": "Months after he was born, in 1948, Ron McCallum became blind. In this charming, moving talk, he shows how he is able to read -- and celebrates the progression of clever tools and adaptive computer technologies that make it possible. With their help, and that of generous volunteers, he's become a lawyer, an academic, and, most of all, a voracious reader. Welcome to the blind reading revolution. (Filmed at TEDxSydney.)",
    "duration": "0:15:44",
    "publishdate": "9/11/2013 15:27:00"
  },
  {
    "rank": 1081,
    "id": "1132",
    "speaker": "Bruce Schneier",
    "name": "Bruce Schneier: The security mirage",
    "shortsummary": "The feeling of security and the reality of security don't always match, says computer-security expert Bruce Schneier. At TEDxPSU, he explains why we spend billions addressing news story risks, like the \"security theater\" now playing at your local airport, while neglecting more probable risks -- and how we can break this pattern.",
    "duration": "0:21:05",
    "publishdate": "4/26/2011"
  },
  {
    "rank": 1082,
    "id": "1255",
    "speaker": "Malcolm Gladwell",
    "name": "Malcolm Gladwell: The strange tale of the Norden bombsight",
    "shortsummary": "Master storyteller Malcolm Gladwell tells the tale of the Norden bombsight, a groundbreaking piece of World War II technology with a deeply unexpected result.",
    "duration": "0:15:00",
    "publishdate": "10/26/2011"
  },
  {
    "rank": 1083,
    "id": "420",
    "speaker": "Dan Gilbert",
    "name": "Exploring the frontiers of happiness",
    "shortsummary": "Dan Gilbert presents research and data from his exploration of happiness -- sharing some surprising tests and experiments that you can also try on yourself. Watch through to the end for a sparkling Q&A with some familiar TED faces. ",
    "duration": "0:33:38",
    "publishdate": "12/16/2008"
  },
  {
    "rank": 1084,
    "id": "1189",
    "speaker": "Maajid Nawaz",
    "name": "Maajid Nawaz: A global culture to fight extremism",
    "shortsummary": "Why do transnational extremist organizations succeed where democratic movements have a harder time taking hold? Maajid Nawaz, a former Islamist extremist, asks for new grassroots stories and global social activism to spread democracy in the face of nationalism and xenophobia. A powerful talk from TEDGlobal 2011.",
    "duration": "0:17:53",
    "publishdate": "7/14/2011"
  },
  {
    "rank": 1085,
    "id": "1180",
    "speaker": "Rajesh Rao",
    "name": "Rajesh Rao: A Rosetta Stone for the Indus script",
    "shortsummary": "Rajesh Rao is fascinated by \"the mother of all crossword puzzles\": How to decipher the 4000 year old Indus script. At TED 2011 he tells how he is enlisting modern computational techniques to read the Indus language, the key piece to understanding this ancient civilization.",
    "duration": "0:17:01",
    "publishdate": "6/28/2011"
  },
  {
    "rank": 1086,
    "id": "1152",
    "speaker": "Aaron Koblin",
    "name": "Aaron Koblin: Artfully visualizing our humanity",
    "shortsummary": "Artist Aaron Koblin takes vast amounts of data -- and at times vast numbers of people -- and weaves them into stunning visualizations. From elegant lines tracing airline flights to landscapes of cell phone data, from a Johnny Cash video assembled from crowd-sourced drawings to the \"Wilderness Downtown\" video that customizes for the user, his works brilliantly explore how modern technology can make us more human.",
    "duration": "0:18:18",
    "publishdate": "5/23/2011"
  },
  {
    "rank": 1087,
    "id": "1170",
    "speaker": "Steve Keil",
    "name": "Steve Keil: A manifesto for play, for Bulgaria and beyond",
    "shortsummary": "At TEDxBG in Sofia, Steve Keil fights the \"serious meme\" that has infected his home of Bulgaria -- and calls for a return to play to revitalize the economy, education and society. A sparkling talk with a universal message for people everywhere who are reinventing their workplaces, schools, lives.",
    "duration": "0:17:56",
    "publishdate": "6/15/2011"
  },
  {
    "rank": 1088,
    "id": "80",
    "speaker": "Juan Enriquez",
    "name": "Decoding the future with genomics",
    "shortsummary": "Scientific discoveries, futurist Juan Enriquez notes, demand a shift in code, and our ability to thrive depends on our mastery of that code. Here, he applies this notion to the field of genomics.",
    "duration": "0:22:20",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 1089,
    "id": "476",
    "speaker": "Nalini Nadkarni",
    "name": "Unveiling the beautiful, fragile world of rainforest treetop ecosystems",
    "shortsummary": "A unique ecosystem of plants, birds and monkeys thrives in the treetops of the rainforest. Nalini Nadkarni explores these canopy worlds -- and shares her findings with the world below, through dance, art and bold partnerships.",
    "duration": "0:16:30",
    "publishdate": "3/4/2009"
  },
  {
    "rank": 1090,
    "id": "1226",
    "speaker": "Niall Ferguson",
    "name": "Niall Ferguson: The 6 killer apps of prosperity",
    "shortsummary": "Over the past few centuries, Western cultures have been very good at creating general prosperity for themselves. Historian Niall Ferguson asks: Why the West, and less so the rest? He suggests half a dozen big ideas from Western culture -- call them the 6 killer apps -- that promote wealth, stability and innovation. And in this new century, he says, these apps are all shareable.",
    "duration": "0:20:19",
    "publishdate": "9/19/2011"
  },
  {
    "rank": 1091,
    "id": "780",
    "speaker": "Harsha Bhogle",
    "name": "Harsha Bhogle: The rise of cricket, the rise of India",
    "shortsummary": "The tale of a major global cultural phenomenon: Cricket commentator Harsha Bhogle describes the spectacular arrival of fast-paced 20-20 cricket as it parallels the rise of modern India.  He traces the game from its sleepy English roots to the current world of celebrity owners and million-dollar player contracts.",
    "duration": "0:16:59",
    "publishdate": "3/2/2010"
  },
  {
    "rank": 1092,
    "id": "937",
    "speaker": "David McCandless",
    "name": "David McCandless: The beauty of data visualization",
    "shortsummary": "David McCandless turns complex data sets (like worldwide military spending, media buzz, Facebook status updates) into beautiful, simple diagrams that tease out unseen patterns and connections. Good design, he suggests, is the best way to navigate information glut -- and it may just change the way we see the world.",
    "duration": "0:17:56",
    "publishdate": "8/23/2010"
  },
  {
    "rank": 1093,
    "id": "414",
    "speaker": "Eva Zeisel",
    "name": "The playful search for beauty",
    "shortsummary": "The ceramics designer Eva Zeisel looks back on a 75-year career. What keeps her work as fresh today (her latest line debuted in 2008) as in 1926? Her sense of play and beauty, and her drive for adventure. Listen for stories from a rich, colorful life.",
    "duration": "0:18:09",
    "publishdate": "12/9/2008"
  },
  {
    "rank": 1094,
    "id": "324",
    "speaker": "David Griffin",
    "name": "Photography connects us with the world",
    "shortsummary": "The photo director for National Geographic, David Griffin knows the power of photography to connect us to our world. In a talk filled with glorious images, he talks about how we all use photos to tell our stories.",
    "duration": "0:14:53",
    "publishdate": "8/19/2008"
  },
  {
    "rank": 1095,
    "id": "29",
    "speaker": "Steven Levitt",
    "name": "Why do crack dealers still live with their moms?",
    "shortsummary": "Freakonomics author Steven Levitt presents new data on the finances of drug dealing. Contrary to popular myth, he says, being a street-corner crack dealer isn't lucrative: It pays below minimum wage. And your boss can kill you.",
    "duration": "0:21:15",
    "publishdate": "9/19/2006"
  },
  {
    "rank": 1096,
    "id": "1258",
    "speaker": "Hasan Elahi",
    "name": "Hasan Elahi: FBI, here I am!",
    "shortsummary": "After he ended up on a watch list by accident, Hasan Elahi was advised by his local FBI agents to let them know when he was traveling. He did that and more ... much more.",
    "duration": "0:14:30",
    "publishdate": "10/31/2011"
  },
  {
    "rank": 1097,
    "id": "1312",
    "speaker": "AJ Jacobs",
    "name": "AJ Jacobs: How healthy living nearly killed me",
    "shortsummary": "For a full year, AJ Jacobs followed every piece of health advice he could -- from applying sunscreen by the shotglass to wearing a bicycle helmet while shopping. Onstage at TEDMED, he shares the surprising things he learned.",
    "duration": "0:08:43",
    "publishdate": "1/3/2012"
  },
  {
    "rank": 1098,
    "id": "1108",
    "speaker": "Handspring Puppet Company",
    "name": "Handspring Puppet Co.: The genius puppetry behind War Horse",
    "shortsummary": "Puppets always have to try to be alive, says Adrian Kohler of the Handspring Puppet Company, a gloriously ambitious troupe of human and wooden actors. Beginning with the tale of a hyena's subtle paw, puppeteers Kohler and Basil Jones build to the story of their latest astonishment: the wonderfully life-like Joey, the War Horse, who trots (and gallops) convincingly onto the TED stage.",
    "duration": "0:18:11",
    "publishdate": "3/30/2011"
  },
  {
    "rank": 1099,
    "id": "57",
    "speaker": "Robert Fischell",
    "name": "TED Prize wish: Finding new cures for migraine, depression, malpractice",
    "shortsummary": "Accepting his 2005 TED Prize, inventor Robert Fischell makes three wishes: redesigning a portable device that treats migraines, finding new cures for clinical depression and reforming the medical malpractice system.",
    "duration": "0:26:50",
    "publishdate": "10/31/2006"
  },
  {
    "rank": 1100,
    "id": "416",
    "speaker": "Dennis vanEngelsdorp",
    "name": "Where have the bees gone?",
    "shortsummary": "Bees are dying in droves. Why? Leading apiarist Dennis vanEngelsdorp looks at the gentle, misunderstood creature's important place in nature and the mystery behind its alarming disappearance.",
    "duration": "0:16:28",
    "publishdate": "12/10/2008"
  },
  {
    "rank": 1101,
    "id": "78",
    "speaker": "Al Seckel",
    "name": "Your brain is badly wired -- enjoy it! ",
    "shortsummary": "Al Seckel, a cognitive neuroscientist, explores the perceptual illusions that fool our brains. Loads of eye tricks help him prove that not only are we easily fooled, we kind of like it.",
    "duration": "0:14:33",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 1102,
    "id": "1526",
    "speaker": "Mark Applebaum",
    "name": "Mark Applebaum: The mad scientist of music",
    "shortsummary": "Mark Applebaum writes music that breaks the rules in fantastic ways, composing a concerto for a florist and crafting a musical instrument from junk and found objects. This quirky talk might just inspire you to shake up the \"rules\" of your own creative work. (<i>Filmed at TEDxStanford.</i>)",
    "duration": "0:16:50",
    "publishdate": "8/3/2012 15:03:00"
  },
  {
    "rank": 1103,
    "id": "1513",
    "speaker": "James Stavridis",
    "name": "James Stavridis: A Navy Admiral's thoughts on global security",
    "shortsummary": "Imagine global security driven by collaboration -- among agencies, government, the private sector and the public. That's not just the distant hope of open-source fans, it's the vision of James Stavridis, a highly accomplished Navy Admiral. Stavridis shares vivid moments from recent military history to explain why security of the future should be built with bridges rather than walls.",
    "duration": "0:16:43",
    "publishdate": "7/23/2012 15:00:00"
  },
  {
    "rank": 1104,
    "id": "1110",
    "speaker": "Eric Whitacre",
    "name": "Eric Whitacre: A virtual choir 2,000 voices strong",
    "shortsummary": "In a moving and madly viral video last year, composer Eric Whitacre led a virtual choir of singers from around the world. He talks through the creative challenges of making music powered by YouTube, and unveils the first 2 minutes of his new work, \"Sleep,\" with a video choir of 2,052. The full piece premieres April 7 (yes, on YouTube!).",
    "duration": "0:14:34",
    "publishdate": "4/1/2011"
  },
  {
    "rank": 1105,
    "id": "264",
    "speaker": "Robert Ballard",
    "name": "Exploring the ocean's hidden worlds",
    "shortsummary": "Ocean explorer Robert Ballard takes us on a mindbending trip to hidden worlds underwater, where he and other researchers are finding unexpected life, resources, even new mountains. He makes a case for serious exploration and mapping. Google Ocean, anyone?",
    "duration": "0:18:19",
    "publishdate": "5/20/2008"
  },
  {
    "rank": 1106,
    "id": "204",
    "speaker": "Isabel Allende",
    "name": "Tales of passion",
    "shortsummary": "Author and activist Isabel Allende discusses women, creativity, the definition of feminism -- and, of course, passion -- in this talk.",
    "duration": "0:17:56",
    "publishdate": "1/3/2008"
  },
  null,
  {
    "rank": 1108,
    "id": "1565",
    "speaker": "Tristram Stuart",
    "name": "Tristram Stuart: The global food waste scandal",
    "shortsummary": "Western countries throw out nearly half of their food, not because it's inedible -- but because it doesn't look appealing. Tristram Stuart delves into the shocking data of wasted food, calling for a more responsible use of global resources.",
    "duration": "0:14:15",
    "publishdate": "9/16/2012 13:57:00"
  },
  {
    "rank": 1109,
    "id": "881",
    "speaker": "Stewart Brand, Mark Z. Jacobson",
    "name": "Debate: Does the world need nuclear energy?",
    "shortsummary": "Nuclear power: the energy crisis has even die-hard environmentalists reconsidering it. In this first-ever TED debate, Stewart Brand and Mark Z. Jacobson square off over the pros and cons. A discussion that'll make you think -- and might even change your mind.",
    "duration": "0:22:59",
    "publishdate": "6/10/2010"
  },
  {
    "rank": 1110,
    "id": "430",
    "speaker": "Greg Lynn",
    "name": "How calculus is changing architecture",
    "shortsummary": "Greg Lynn talks about the mathematical roots of architecture -- and how calculus and digital tools allow modern designers to move beyond the traditional building forms. A glorious church in Queens (and a titanium tea set) illustrate his theory.",
    "duration": "0:18:54",
    "publishdate": "1/9/2009"
  },
  {
    "rank": 1111,
    "id": "1613",
    "speaker": "Julie Burstein",
    "name": "Julie Burstein: 4 lessons in creativity",
    "shortsummary": "Radio host Julie Burstein talks with creative people for a living -- and shares four lessons about how to create in the face of challenge, self-doubt and loss. Hear insights from filmmaker Mira Nair, writer Richard Ford, sculptor Richard Serra and photographer Joel Meyerowitz.",
    "duration": "0:17:20",
    "publishdate": "11/12/2012 16:07:00"
  },
  {
    "rank": 1112,
    "id": "37",
    "speaker": "Jimmy Wales",
    "name": "How a ragtag band created Wikipedia",
    "shortsummary": "Jimmy Wales recalls how he assembled \"a ragtag band of volunteers,\" gave them tools for collaborating and created Wikipedia, the self-organizing, self-correcting, never-finished online encyclopedia.",
    "duration": "0:20:01",
    "publishdate": "8/21/2006"
  },
  {
    "rank": 1113,
    "id": "509",
    "speaker": "Bonnie Bassler",
    "name": "Discovering bacteria's amazing communication system ",
    "shortsummary": "Bonnie Bassler discovered that bacteria \"talk\" to each other, using a chemical language that lets them coordinate defense and mount attacks. The find has stunning implications for medicine, industry -- and our understanding of ourselves.",
    "duration": "0:18:14",
    "publishdate": "4/8/2009"
  },
  {
    "rank": 1114,
    "id": "1224",
    "speaker": "Lauren Zalaznick",
    "name": "Lauren Zalaznick: The conscience of television",
    "shortsummary": "TV executive Lauren Zalaznick thinks deeply about pop television. Sharing results of a bold study that tracks attitudes against TV ratings over five decades, she makes a case that television reflects who we truly are -- in ways we might not have expected.",
    "duration": "0:13:12",
    "publishdate": "9/16/2011"
  },
  {
    "rank": 1115,
    "id": "464",
    "speaker": "Jose Antonio Abreu",
    "name": "Help me bring music to kids worldwide (TED Prize winner!)",
    "shortsummary": "Jose Antonio Abreu is the charismatic founder of a youth orchestra system that has transformed thousands of kids' lives in Venezuela.  Here he shares his amazing story and unveils a TED Prize wish that could have a big impact in the US and beyond.",
    "duration": "0:16:58",
    "publishdate": "2/18/2009"
  },
  {
    "rank": 1116,
    "id": "951",
    "speaker": "Carne Ross",
    "name": "Carne Ross: An independent diplomat",
    "shortsummary": "After 15 years in the British diplomatic corps, Carne Ross became a \"freelance diplomat,\" running a bold nonprofit that gives small, developing and yet-unrecognized nations a voice in international relations. At the BIF-5 conference, he calls for a new kind of diplomacy that gives voice to small countries, that works with changing boundaries and that welcomes innovation.",
    "duration": "0:20:38",
    "publishdate": "9/9/2010"
  },
  {
    "rank": 1117,
    "id": "791",
    "speaker": "Ken Kamler",
    "name": "Ken Kamler: Medical miracle on Everest",
    "shortsummary": "When the worst disaster in the history of Mount Everest climbs occurred, Ken Kamler was the only doctor on the mountain. At TEDMED, he shares the incredible story of the climbers' battle against extreme conditions and uses brain imaging technology to map the medical miracle of one man who survived roughly 36 hours buried in the snow. ",
    "duration": "0:20:49",
    "publishdate": "3/18/2010"
  },
  {
    "rank": 1118,
    "id": "377",
    "speaker": "Dr. Dean Ornish",
    "name": "Healing and other natural wonders",
    "shortsummary": "Dean Ornish talks about simple, low-tech and low-cost ways to take advantage of the body's natural desire to heal itself.",
    "duration": "0:16:49",
    "publishdate": "10/17/2008"
  },
  {
    "rank": 1119,
    "id": "1521",
    "speaker": "Tracy Chevalier",
    "name": "Tracy Chevalier: Finding the story inside the painting",
    "shortsummary": "When Tracy Chevalier looks at paintings, she imagines the stories behind them: How did the painter meet his model? What would explain that look in her eye? Why is that man \"¦ blushing? She shares three stories inspired by portraits, including the one that led to her best-selling novel \"Girl With a Pearl Earring.\"\n",
    "duration": "0:14:21",
    "publishdate": "7/25/2012 15:27:00"
  },
  {
    "rank": 1120,
    "id": "1240",
    "speaker": "Charles Hazlewood",
    "name": "Charles Hazlewood: Trusting the ensemble",
    "shortsummary": "Conductor Charles Hazlewood talks about the role of trust in musical leadership -- then shows how it works, as he conducts the Scottish Ensemble onstage. He also shares clips from two musical projects: the opera \"U-Carmen eKhayelitsha\" and the ParaOrchestra.",
    "duration": "0:19:36",
    "publishdate": "10/7/2011"
  },
  {
    "rank": 1121,
    "id": "318",
    "speaker": "Reed Kroloff",
    "name": "Architecture, modern and romantic",
    "shortsummary": "Reed Kroloff gives us a new lens for judging new architecture: is it modern, or is it romantic? Look for glorious images from two leading practices -- and a blistering critique of the 9/11 planning process.",
    "duration": "0:15:21",
    "publishdate": "7/28/2008"
  },
  {
    "rank": 1122,
    "id": "728",
    "speaker": "Romulus Whitaker",
    "name": "Romulus Whitaker: The real danger lurking in the water",
    "shortsummary": "The gharial and king cobra are two of India's most iconic reptiles, and they're endangered because of polluted waterways. Conservationist Romulus Whitaker shows rare footage of these magnificent animals and urges us to save the rivers that sustain their lives and our own.",
    "duration": "0:17:18",
    "publishdate": "1/7/2010"
  },
  {
    "rank": 1123,
    "id": "899",
    "speaker": "Stephen Palumbi",
    "name": "Stephen Palumbi: Following the mercury trail",
    "shortsummary": "There's a tight and surprising link between the ocean's health and ours, says marine biologist Stephen Palumbi. He shows how toxins at the bottom of the ocean food chain find their way into our bodies, with a shocking story of toxic contamination from a Japanese fish market. His work points a way forward for saving the oceans' health -- and humanity's.",
    "duration": "0:15:42",
    "publishdate": "6/30/2010"
  },
  {
    "rank": 1124,
    "id": "977",
    "speaker": "Melinda French Gates",
    "name": "Melinda French Gates: What nonprofits can learn from Coca-Cola",
    "shortsummary": "At TEDxChange, Melinda Gates makes a provocative case for nonprofits taking a cue from corporations such as Coca-Cola, whose plugged-in, global network of marketers and distributors ensures that every remote village wants -- and can get -- a Coke. Why shouldn't this work for condoms, sanitation, vaccinations too?",
    "duration": "0:16:28",
    "publishdate": "10/12/2010"
  },
  {
    "rank": 1125,
    "id": "507",
    "speaker": "Bruce Bueno de Mesquita",
    "name": "Three predictions on the future of Iran, and the math to back it up",
    "shortsummary": "Bruce Bueno de Mesquita uses mathematical analysis to predict (very often correctly) such messy human events as war, political power shifts, Intifada ... After a crisp explanation of how he does it, he offers three predictions on the future of Iran.",
    "duration": "0:19:05",
    "publishdate": "4/7/2009"
  },
  {
    "rank": 1126,
    "id": "1054",
    "speaker": "Naomi Klein",
    "name": "Naomi Klein: Addicted to risk",
    "shortsummary": "Days before this talk, journalist Naomi Klein was on a boat in the Gulf of Mexico, looking at the catastrophic results of BP's risky pursuit of oil. Our societies have become addicted to extreme risk in finding new energy, new financial instruments and more ... and too often, we're left to clean up a mess afterward. Klein's question: What's the backup plan?",
    "duration": "0:19:49",
    "publishdate": "1/17/2011"
  },
  {
    "rank": 1127,
    "id": "171",
    "speaker": "Deborah Scranton",
    "name": "Scenes from \"The War Tapes\"",
    "shortsummary": "Filmmaker Deborah Scranton talks about and shows clips from her documentary \"The War Tapes,\" which puts cameras in the hands of soldiers fighting in Iraq. ",
    "duration": "0:17:36",
    "publishdate": "9/13/2007"
  },
  {
    "rank": 1128,
    "id": "214",
    "speaker": "Michael Pollan",
    "name": "The omnivore's next dilemma",
    "shortsummary": "What if human consciousness isn't the end-all and be-all of Darwinism? What if we are all just pawns in corn's clever strategy game to rule the Earth? Author Michael Pollan asks us to see the world from a plant's-eye view.",
    "duration": "0:17:25",
    "publishdate": "2/7/2008"
  },
  {
    "rank": 1129,
    "id": "202",
    "speaker": "Gever Tulley",
    "name": "5 dangerous things you should let your kids do",
    "shortsummary": "Gever Tulley, founder of the Tinkering School, spells out 5 dangerous things you should let your kids do. From TED University 2007.",
    "duration": "0:09:18",
    "publishdate": "12/21/2007"
  },
  {
    "rank": 1130,
    "id": "503",
    "speaker": "Christopher C. Deam",
    "name": "Restyling the classic Airstream trailer",
    "shortsummary": "In this low-key, image-packed talk from 2002, designer Christopher C. Deam talks about his makeover of an American classic: the Airstream travel trailer.",
    "duration": "0:06:21",
    "publishdate": "4/2/2009"
  },
  {
    "rank": 1131,
    "id": "475",
    "speaker": "Willie Smits",
    "name": "A 20-year tale of hope: How we re-grew a rainforest",
    "shortsummary": "By piecing together a complex ecological puzzle, biologist Willie Smits has found a way to re-grow clearcut rainforest in Borneo, saving local orangutans -- and creating a thrilling blueprint for restoring fragile ecosystems.",
    "duration": "0:20:42",
    "publishdate": "3/3/2009"
  },
  {
    "rank": 1132,
    "id": "22",
    "speaker": "Michael Shermer",
    "name": "Why people believe strange things",
    "shortsummary": "Why do people see the Virgin Mary on a cheese sandwich or hear demonic lyrics in \"Stairway to Heaven\"? Using video and music, skeptic Michael Shermer shows how we convince ourselves to believe -- and overlook the facts.",
    "duration": "0:13:25",
    "publishdate": "11/8/2006"
  },
  {
    "rank": 1133,
    "id": "1638",
    "speaker": "Adam Davidson",
    "name": "Adam Davidson: What we learned from teetering on the fiscal cliff",
    "shortsummary": "At the end of 2012, the US political system was headed for the \"fiscal cliff\" -- a budget impasse that could only be solved with bipartisan agreement. Adam Davidson, cohost of \"Planet Money,\" shares surprising data on how bipartisan we truly are -- and hints at the disconnect between representatives and the people they represent.",
    "duration": "0:19:48",
    "publishdate": "12/20/2012 16:09:00"
  },
  {
    "rank": 1134,
    "id": "178",
    "speaker": "Carolyn Porco",
    "name": "Fly me to the moons of Saturn",
    "shortsummary": "Planetary scientist Carolyn Porco shows images from the Cassini voyage to Saturn, focusing on its largest moon, Titan, and on frozen Enceladus, which seems to shoot jets of ice.",
    "duration": "0:17:09",
    "publishdate": "10/1/2007"
  },
  {
    "rank": 1135,
    "id": "1579",
    "speaker": "Thomas P. Campbell",
    "name": "Thomas P. Campbell: Weaving narratives in museum galleries",
    "shortsummary": "As the director of the Metropolitan Museum of Art in New York, Thomas P. Campbell thinks deeply about curating\"”not just selecting art objects, but placing them in a setting where the public can learn their stories. With glorious images, he shows how his curation philosophy works for displaying medieval tapestries\"”and for the over-the-top fashion/art of Alexander McQueen. (<em>From The Design Studio session at TED2012, guest-curated by Chee Pearlman and David Rockwell</em>.)",
    "duration": "0:16:36",
    "publishdate": "10/5/2012 15:00:00"
  },
  {
    "rank": 1136,
    "id": "1566",
    "speaker": "Ed Gavagan",
    "name": "Ed Gavagan: A story about knots and surgeons",
    "shortsummary": "One day, Ed Gavagan was sitting on the subway, watching two young med students practicing their knots. And a powerful memory washed over him -- of one shocking moment that changed his life forever. An unforgettable story of crime, skill and gratitude.",
    "duration": "0:12:21",
    "publishdate": "9/21/2012 14:15:00"
  },
  {
    "rank": 1137,
    "id": "1079",
    "speaker": "Noreena Hertz",
    "name": "Noreena Hertz: How to use experts -- and when not to",
    "shortsummary": "We make important decisions every day -- and we often rely on experts to help us decide. But, says economist Noreena Hertz, relying too much on experts can be limiting and even dangerous. She calls for us to start democratizing expertise -- to listen not only to \"surgeons and CEOs, but also to shop staff.\"",
    "duration": "0:18:18",
    "publishdate": "2/21/2011"
  },
  {
    "rank": 1138,
    "id": "571",
    "speaker": "Robert Full",
    "name": "Robert Full: Learning from the gecko's tail",
    "shortsummary": "Biologist Robert Full studies the amazing gecko, with its supersticky feet and tenacious climbing skill. But high-speed footage reveals that the gecko's tail harbors perhaps the most surprising talents of all.",
    "duration": "0:11:54",
    "publishdate": "6/11/2009"
  },
  {
    "rank": 1139,
    "id": "86",
    "speaker": "Julia Sweeney",
    "name": "\"Letting Go of God\" (an excerpt)",
    "shortsummary": "Julia Sweeney (God Said, \"Ha!\") performs the first 15 minutes of her 2006 solo show \"Letting Go of God.\" When two young Mormon missionaries knock on her door one day, it touches off a quest to completely rethink her own beliefs.",
    "duration": "0:16:32",
    "publishdate": "7/10/2006"
  },
  {
    "rank": 1140,
    "id": "1188",
    "speaker": "Rebecca MacKinnon",
    "name": "Rebecca MacKinnon: Let's take back the Internet!",
    "shortsummary": "In this powerful talk from TEDGlobal, Rebecca MacKinnon describes the expanding struggle for freedom and control in cyberspace, and asks: How do we design the next phase of the Internet with accountability and freedom at its core, rather than control? She believes the internet is headed for a \"Magna Carta\" moment when citizens around the world demand that their governments protect free speech and their right to connection.",
    "duration": "0:14:52",
    "publishdate": "7/13/2011"
  },
  {
    "rank": 1141,
    "id": "453",
    "speaker": "Elizabeth Gilbert",
    "name": "A different way to think about creative genius",
    "shortsummary": "Elizabeth Gilbert muses on the impossible things we expect from artists and geniuses -- and shares the radical idea that, instead of the rare person \"being\" a genius, all of us \"have\" a genius. It's a funny, personal and surprisingly moving talk.",
    "duration": "0:19:28",
    "publishdate": "2/9/2009"
  },
  {
    "rank": 1142,
    "id": "299",
    "speaker": "Corneille Ewango",
    "name": "A hero of the Congo Basin forest",
    "shortsummary": "Botanist Corneille Ewango talks about his work at the Okapi Faunal Reserve in the Congo Basin -- and his heroic work protecting it from poachers, miners and raging civil wars. ",
    "duration": "0:18:18",
    "publishdate": "7/7/2008"
  },
  {
    "rank": 1143,
    "id": "1013",
    "speaker": "Zainab Salbi",
    "name": "Zainab Salbi: Women, wartime and the dream of peace",
    "shortsummary": "In war we often see only the frontline stories of soldiers and combat. AT TEDGlobal 2010, Zainab Salbi tells powerful \"backline\" stories of women who keep everyday life going during conflicts, and calls for women to have a place at the negotiating table once fighting is over. ",
    "duration": "0:17:46",
    "publishdate": "11/23/2010"
  },
  {
    "rank": 1144,
    "id": "443",
    "speaker": "Aimee Mullins",
    "name": "Running on high-tech legs",
    "shortsummary": "In this TED archive video from 1998, paralympic sprinter Aimee Mullins talks about her record-setting career as a runner, and about the amazing carbon-fiber prosthetic legs (then a prototype) that helped her cross the finish line.",
    "duration": "0:20:43",
    "publishdate": "1/28/2009"
  },
  {
    "rank": 1145,
    "id": "1055",
    "speaker": "Charity Tillemann-Dick",
    "name": "Charity Tillemann-Dick: Singing after a double lung transplant",
    "shortsummary": "You'll never sing again, said her doctor. But in a story from the very edge of medical possibility, operatic soprano Charity Tillemann-Dick tells a double story of survival -- of her body, from a double lung transplant, and of her spirit, fueled by an unwavering will to sing. A powerful story from TEDMED 2010.",
    "duration": "0:18:05",
    "publishdate": "1/18/2011"
  },
  {
    "rank": 1146,
    "id": "675",
    "speaker": "James Forbes",
    "name": "Rev. James Forbes: Compassion at the dinner table",
    "shortsummary": "Join Rev. James Forbes at the dinner table of his Southern childhood, where his mother and father taught him what compassion really means day to day -- sharing with those who need love.",
    "duration": "0:18:38",
    "publishdate": "10/31/2008"
  },
  {
    "rank": 1147,
    "id": "1146",
    "speaker": "Ed Boyden",
    "name": "Ed Boyden: A light switch for neurons",
    "shortsummary": "Ed Boyden shows how, by inserting genes for light-sensitive proteins into brain cells, he can selectively activate or de-activate specific neurons with fiber-optic implants. With this unprecedented level of control, he's managed to cure mice of analogs of PTSD and certain forms of blindness. On the horizon: neural prosthetics. Session host Juan Enriquez leads a brief post-talk Q&A.",
    "duration": "0:18:24",
    "publishdate": "5/15/2011"
  },
  {
    "rank": 1148,
    "id": "1767",
    "speaker": "Manal al-Sharif",
    "name": "Manal al-Sharif: A Saudi woman who dared to drive",
    "shortsummary": "There's no actual law against women driving in Saudi Arabia. But it's forbidden. Two years ago, Manal al-Sharif decided to encourage women to drive by doing so -- and filming herself for YouTube. Hear her story of what happened next.",
    "duration": "0:14:16",
    "publishdate": "6/14/2013 10:22:00"
  },
  {
    "rank": 1149,
    "id": "234",
    "speaker": "Karen Armstrong",
    "name": "2008 TED Prize wish: Charter for Compassion",
    "shortsummary": "People want to be religious, says scholar Karen Armstrong; we should act to help make religion a force for harmony. She asks the TED community to help her build a Charter for Compassion -- to help restore the Golden Rule as the central global religious do",
    "duration": "0:21:28",
    "publishdate": "3/19/2008"
  },
  {
    "rank": 1150,
    "id": "658",
    "speaker": "Rory Sutherland",
    "name": "Rory Sutherland: Life lessons from an ad man",
    "shortsummary": "Advertising adds value to a product by changing our perception, rather than the product itself. Rory Sutherland makes the daring assertion that a change in perceived value can be just as satisfying as what we consider “real” value -- and his conclusion has interesting consequences for how we look at life.",
    "duration": "0:16:39",
    "publishdate": "10/14/2009"
  },
  {
    "rank": 1151,
    "id": "750",
    "speaker": "Joshua Prince-Ramus",
    "name": "Joshua Prince-Ramus: Building a theater that remakes itself",
    "shortsummary": "Joshua Prince-Ramus believes that if architects re-engineer their design process, the results can be spectacular. Speaking at TEDxSMU, Dallas, he walks us through his fantastic re-creation of the local Wyly Theater as a giant \"theatrical machine\" that reconfigures itself at the touch of a button.",
    "duration": "0:18:42",
    "publishdate": "1/26/2010"
  },
  {
    "rank": 1152,
    "id": "385",
    "speaker": "Keith Schacht, Zach Kaplan",
    "name": "Products (and toys) from the future",
    "shortsummary": "The Inventables guys, Zach Kaplan and Keith Schacht, demo some amazing new materials and how we might use them. Look for squishy magnets, odor-detecting ink, \"dry\" liquid and a very surprising 10-foot pole. ",
    "duration": "0:15:46",
    "publishdate": "10/30/2008"
  },
  {
    "rank": 1153,
    "id": "575",
    "speaker": "Clay Shirky",
    "name": "Clay Shirky: How social media can make history",
    "shortsummary": "While news from Iran streams to the world, Clay Shirky shows how Facebook, Twitter and TXTs help citizens in repressive regimes to report on real news, bypassing censors (however briefly). The end of top-down control of news is changing the nature of politics.",
    "duration": "0:15:48",
    "publishdate": "6/16/2009"
  },
  {
    "rank": 1154,
    "id": "328",
    "speaker": "Ian Dunbar",
    "name": "Dog-friendly dog training",
    "shortsummary": "Speaking at the 2007 EG conference, trainer Ian Dunbar asks us to see the world through the eyes of our beloved dogs. By knowing our pets' perspective, we can build their love and trust. It's a message that resonates well beyond the animal world.",
    "duration": "0:14:46",
    "publishdate": "8/21/2008"
  },
  {
    "rank": 1155,
    "id": "1074",
    "speaker": "Krista Tippett",
    "name": "Krista Tippett: Reconnecting with compassion",
    "shortsummary": "The term \"compassion\" -- typically reserved for the saintly or the sappy -- has fallen out of touch with reality. At a special TEDPrize@UN, journalist Krista Tippett deconstructs the meaning of compassion through several moving stories, and proposes a new, more attainable definition for the word.",
    "duration": "0:15:53",
    "publishdate": "2/14/2011"
  },
  {
    "rank": 1156,
    "id": "1337",
    "speaker": "Brian Goldman",
    "name": "Brian Goldman: Doctors make mistakes. Can we talk about that?",
    "shortsummary": "Every doctor makes mistakes. But, says physician Brian Goldman, medicine's culture of denial (and shame) keeps doctors from ever talking about those mistakes, or using them to learn and improve. Telling stories from his own long practice, he calls on doctors to start talking about being wrong.",
    "duration": "0:19:28",
    "publishdate": "1/25/2012 16:50:00"
  },
  {
    "rank": 1157,
    "id": "872",
    "speaker": "John Underkoffler",
    "name": "John Underkoffler points to the future of UI",
    "shortsummary": "Minority Report science advisor and inventor John Underkoffler demos g-speak -- the real-life version of the film's eye-popping, tai chi-meets-cyberspace computer interface. Is this how tomorrow's computers will be controlled?",
    "duration": "0:15:22",
    "publishdate": "6/1/2010"
  },
  {
    "rank": 1158,
    "id": "805",
    "speaker": "Robert Gupta",
    "name": "Robert Gupta: Music is medicine, music is sanity",
    "shortsummary": "Robert Gupta, violinist with the LA Philharmonic, talks about a violin lesson he once gave to a brilliant, schizophrenic musician -- and what he learned. Called back onstage later, Gupta plays his own transcription of the prelude from Bach's Cello Suite No. 1.",
    "duration": "0:09:26",
    "publishdate": "3/26/2010"
  },
  {
    "rank": 1159,
    "id": "648",
    "speaker": "Garik Israelian",
    "name": "Garik Israelian: How spectroscopy could reveal alien life",
    "shortsummary": "Garik Israelian is a spectroscopist, studying the spectrum emitted by a star to figure out what it's made of and how it might behave. It's a rare and accessible look at this discipline, which may be coming close to finding a planet friendly to life.",
    "duration": "0:15:52",
    "publishdate": "10/1/2009"
  },
  {
    "rank": 1160,
    "id": "1532",
    "speaker": "Becci Manson",
    "name": "Becci Manson: (Re)touching lives through photos",
    "shortsummary": "In the wake of the 2011 Japanese earthquake and tsunami, mixed into the wreckage were lost and damaged photos of families and loved ones. Photo retoucher Becci Manson, together with local volunteers and a global group of colleagues she recruited online, helped clean and fix them, restoring those memories to their owners.",
    "duration": "0:09:49",
    "publishdate": "8/2/2012 15:07:00"
  },
  {
    "rank": 1161,
    "id": "1149",
    "speaker": "Edith Widder",
    "name": "Edith Widder: The weird, wonderful world of bioluminescence",
    "shortsummary": "In the deep, dark ocean, many sea creatures make their own light for hunting, mating and self-defense. Bioluminescence expert Edith Widder was one of the first to film this glimmering world. At TED2011, she brings some of her glowing friends onstage, and shows more astonishing footage of glowing undersea life.",
    "duration": "0:12:45",
    "publishdate": "5/19/2011"
  },
  {
    "rank": 1162,
    "id": "1155",
    "speaker": "Mustafa Akyol",
    "name": "Mustafa Akyol: Faith versus tradition in Islam",
    "shortsummary": "At TEDxWarwick, journalist Mustafa Akyol talks about the way that some local cultural practices (such as wearing a headscarf) have become linked, in the popular mind, to the articles of faith of Islam. Has the world's general idea of the Islamic faith focused too much on tradition, and not enough on core beliefs?",
    "duration": "0:17:11",
    "publishdate": "5/26/2011"
  },
  {
    "rank": 1163,
    "id": "558",
    "speaker": "Liz Coleman",
    "name": "Liz Coleman's call to reinvent liberal arts education ",
    "shortsummary": "Bennington president Liz Coleman delivers a call-to-arms for radical reform in higher education. Bucking the trend to push students toward increasingly narrow areas of study, she proposes a truly cross-disciplinary education -- one that dynamically combines all areas of study to address the great problems of our day.",
    "duration": "0:18:38",
    "publishdate": "6/1/2009"
  },
  {
    "rank": 1164,
    "id": "1320",
    "speaker": "Lauren Hodge, Shree Bose, Naomi Shah",
    "name": "Award-winning teen-age science in action",
    "shortsummary": "In 2011 three young women swept the top prizes of the first Google Science Fair. At TEDxWomen Lauren Hodge, Shree Bose and Naomi Shah described their extraordinary projects-- and their route to a passion for science.",
    "duration": "0:16:16",
    "publishdate": "1/10/2012 16:10:00"
  },
  {
    "rank": 1165,
    "id": "650",
    "speaker": "Carolyn Steel",
    "name": "Carolyn Steel: How food shapes our cities",
    "shortsummary": "Every day, in a city the size of London, 30 million meals are served. But where does all the food come from? Architect Carolyn Steel discusses the daily miracle of feeding a city, and shows how ancient food routes shaped the modern world.",
    "duration": "0:15:40",
    "publishdate": "10/5/2009"
  },
  {
    "rank": 1166,
    "id": "463",
    "speaker": "Juan Enriquez",
    "name": "Beyond the crisis, mindboggling science and the arrival of Homo evolutis",
    "shortsummary": "Even as mega-banks topple, Juan Enriquez says the big reboot is yet to come. But don't look for it on your ballot -- or in the stock exchange. It'll come from science labs, and it promises keener bodies and minds. Our kids are going to be ... different.",
    "duration": "0:18:50",
    "publishdate": "2/17/2009"
  },
  {
    "rank": 1167,
    "id": "344",
    "speaker": "Irwin Redlener",
    "name": "How to survive a nuclear attack",
    "shortsummary": "The face of nuclear terror has changed since the Cold War, but disaster-medicine expert Irwin Redlener reminds us the threat is still real. He looks at some of history's farcical countermeasures and offers practical advice on how to survive an attack.",
    "duration": "0:25:18",
    "publishdate": "9/9/2008"
  },
  {
    "rank": 1168,
    "id": "467",
    "speaker": "Sylvia Earle",
    "name": "Here's how to protect the blue heart of the planet (TED Prize winner!)",
    "shortsummary": "Legendary ocean researcher Sylvia Earle shares astonishing images of the ocean -- and shocking stats about its rapid decline -- as she makes her TED Prize wish: that we will join her in protecting the vital blue heart of the planet.",
    "duration": "0:18:16",
    "publishdate": "2/19/2009"
  },
  {
    "rank": 1169,
    "id": "863",
    "speaker": "Craig Venter",
    "name": "Craig Venter unveils \"synthetic life\"",
    "shortsummary": "Craig Venter and team make a historic announcement: they've created the first fully functioning, reproducing cell controlled by synthetic DNA. He explains how they did it and why the achievement marks the beginning of a new era for science.",
    "duration": "0:18:17",
    "publishdate": "5/21/2010"
  },
  {
    "rank": 1170,
    "id": "954",
    "speaker": "Rob Dunbar",
    "name": "Rob Dunbar: Discovering ancient climates in oceans and ice",
    "shortsummary": "Rob Dunbar hunts for data on our climate from 12,000 years ago, finding clues inside ancient seabeds and corals and inside ice sheets. His work is vital in setting baselines for fixing our current climate -- and in tracking the rise of deadly ocean acidification.",
    "duration": "0:18:14",
    "publishdate": "9/13/2010"
  },
  {
    "rank": 1171,
    "id": "1523",
    "speaker": "Michael Anti",
    "name": "Michael Anti: Behind the Great Firewall of China",
    "shortsummary": "Michael Anti (aka Jing Zhao) has been blogging from China for 12 years. Despite the control the central government has over the Internet -- \"All the servers are in Beijing\" -- he says that hundreds of millions of microbloggers are in fact creating the first national public sphere in the country's history, and shifting the balance of power in unexpected ways.",
    "duration": "0:18:51",
    "publishdate": "7/30/2012 15:03:00"
  },
  {
    "rank": 1172,
    "id": "121",
    "speaker": "James Howard Kunstler",
    "name": "The tragedy of suburbia",
    "shortsummary": "In James Howard Kunstler's view, public spaces should be inspired centers of civic life and the physical manifestation of the common good. Instead, he argues, what we have in America is a nation of places not worth caring about.",
    "duration": "0:19:44",
    "publishdate": "5/12/2007"
  },
  {
    "rank": 1173,
    "id": "483",
    "speaker": "Stuart Brown",
    "name": "Why play is vital -- no matter your age",
    "shortsummary": "A pioneer in research on play, Dr. Stuart Brown says humor, games, roughhousing, flirtation and fantasy are more than just fun. Plenty of play in childhood makes for happy, smart adults -- and keeping it up can make us smarter at any age.",
    "duration": "0:26:42",
    "publishdate": "3/12/2009"
  },
  {
    "rank": 1174,
    "id": "769",
    "speaker": "Aimee Mullins",
    "name": "Aimee Mullins: The opportunity of adversity",
    "shortsummary": "The thesaurus might equate \"disabled\" with synonyms like \"useless\" and \"mutilated,\" but ground-breaking runner Aimee Mullins is out to redefine the word. Defying these associations, she shows how adversity -- in her case, being born without shinbones -- actually opens the door for human potential.",
    "duration": "0:21:58",
    "publishdate": "2/17/2010"
  },
  {
    "rank": 1175,
    "id": "884",
    "speaker": "Michael Shermer",
    "name": "Michael Shermer: The pattern behind self-deception",
    "shortsummary": "Michael Shermer says the human tendency to believe strange things -- from alien abductions to dowsing rods -- boils down to two of the brain's most basic, hard-wired survival skills. He explains what they are, and how they get us into trouble.",
    "duration": "0:19:01",
    "publishdate": "6/14/2010"
  },
  {
    "rank": 1176,
    "id": "437",
    "speaker": "Barry Schuler",
    "name": "An introduction to genomics",
    "shortsummary": "What is genomics? How will it affect our lives? In this intriguing primer on the genomics revolution, entrepreneur Barry Schuler says we can at least expect healthier, tastier food. He suggests we start with the pinot noir grape, to build better wines.",
    "duration": "0:21:26",
    "publishdate": "1/22/2009"
  },
  {
    "rank": 1177,
    "id": "1582",
    "speaker": "Aris Venetikidis",
    "name": "Aris Venetikidis: Making sense of maps",
    "shortsummary": "Map designer Aris Venetikidis is fascinated by the maps we draw in our minds as we move around a city -- less like street maps, more like schematics or wiring diagrams, abstract images of relationships between places. How can we learn from these mental maps to make better real ones? As a test case, he remakes the notorious Dublin bus map. <i>(Filmed at TEDxDublin)</i>",
    "duration": "0:16:36",
    "publishdate": "9/29/2012 14:02:00"
  },
  {
    "rank": 1178,
    "id": "139",
    "speaker": "Stephen Lawler",
    "name": "Look! Up in the sky! It's Virtual Earth!",
    "shortsummary": "Microsoft's Stephen Lawler gives a whirlwind tour of Virtual Earth, moving up, down and through its hyper-real cityscapes with dazzlingly fluidity, a remarkable feat that requires staggering amounts of data to bring into focus.",
    "duration": "0:06:10",
    "publishdate": "6/20/2007"
  },
  {
    "rank": 1179,
    "id": "580",
    "speaker": "Catherine Mohr",
    "name": "Catherine Mohr: Surgery's past, present and robotic future",
    "shortsummary": "Surgeon and inventor Catherine Mohr tours the history of surgery (and its pre-painkiller, pre-antiseptic past), then demos some of the newest tools for surgery through tiny incisions, performed using nimble robot hands. Fascinating -- but not for the squeamish.",
    "duration": "0:18:55",
    "publishdate": "6/18/2009"
  },
  {
    "rank": 1180,
    "id": "646",
    "speaker": "Tim Brown",
    "name": "Tim Brown urges designers to think big",
    "shortsummary": "Tim Brown says the design profession is preoccupied with creating nifty, fashionable objects -- even as pressing questions like clean water access show it has a bigger role to play. He calls for a shift to local, collaborative, participatory \"design thinking.\"",
    "duration": "0:16:50",
    "publishdate": "9/29/2009"
  },
  {
    "rank": 1181,
    "id": "144",
    "speaker": "Jonathan Harris",
    "name": "The Web's secret stories",
    "shortsummary": "Jonathan Harris wants to make sense of the emotional world of the Web. With deep compassion for the human condition, his projects troll the Internet to find out what we're all feeling and looking for.",
    "duration": "0:17:10",
    "publishdate": "7/8/2007"
  },
  {
    "rank": 1182,
    "id": "39",
    "speaker": "Aubrey de Grey",
    "name": "Why we age and how we can avoid it",
    "shortsummary": "Cambridge researcher Aubrey de Grey argues that aging is merely a disease -- and a curable one at that. Humans age in seven basic ways, he says, all of which can be averted.",
    "duration": "0:22:45",
    "publishdate": "10/2/2006"
  },
  {
    "rank": 1183,
    "id": "589",
    "speaker": "Daniel Libeskind",
    "name": "Daniel Libeskind's 17 words of architectural inspiration",
    "shortsummary": "Daniel Libeskind builds on very big ideas. Here, he shares 17 words that underlie his vision for architecture -- raw, risky, emotional, radical -- and that offer inspiration for any bold creative pursuit.",
    "duration": "0:18:36",
    "publishdate": "7/1/2009"
  },
  {
    "rank": 1184,
    "id": "1043",
    "speaker": "Barry Schwartz",
    "name": "Barry Schwartz: Using our practical wisdom",
    "shortsummary": "In an intimate talk, Barry Schwartz dives into the question \"How do we do the right thing?\" With help from collaborator Kenneth Sharpe, he shares stories that illustrate the difference between following the rules and truly choosing wisely. ",
    "duration": "0:23:07",
    "publishdate": "12/31/2010"
  },
  {
    "rank": 1185,
    "id": "184",
    "speaker": "Vilayanur Ramachandran",
    "name": "A journey to the center of your mind",
    "shortsummary": "Vilayanur Ramachandran tells us what brain damage can reveal about the connection between celebral tissue and the mind, using three startling delusions as examples.",
    "duration": "0:23:34",
    "publishdate": "10/21/2007"
  },
  {
    "rank": 1186,
    "id": "395",
    "speaker": "Samantha Power",
    "name": "Shaking hands with the devil",
    "shortsummary": "Samantha Power tells a story of a complicated hero, Sergio Vieira de Mello. This UN diplomat walked a thin moral line, negotiating with the world's worst dictators to help their people survive crisis. It's a compelling story told with a fiery passion.",
    "duration": "0:23:09",
    "publishdate": "11/11/2008"
  },
  {
    "rank": 1187,
    "id": "112",
    "speaker": "Rev. Tom Honey",
    "name": "How could God have allowed the tsunami?",
    "shortsummary": "In the days following the tragic South Asian tsunami of 2004, the Rev. Tom Honey pondered the question, \"How could a loving God have done this?\" Here is his answer.",
    "duration": "0:19:32",
    "publishdate": "4/16/2007"
  },
  {
    "rank": 1188,
    "id": "450",
    "speaker": "Bill Gross",
    "name": "Great ideas for finding new energy",
    "shortsummary": "Bill Gross, the founder of Idealab, talks about his life as an inventor, starting with his high-school company selling solar energy plans and kits. Learn here about a groundbreaking system for solar cells -- and some questions we haven't yet solved.",
    "duration": "0:19:55",
    "publishdate": "2/2/2009"
  },
  {
    "rank": 1189,
    "id": "1816",
    "speaker": "George Monbiot",
    "name": "George Monbiot: For more wonder, rewild the world",
    "shortsummary": "Wolves were once native to the US' Yellowstone National Park -- until hunting wiped them out. But when, in 1995, the wolves began to come back (thanks to an aggressive management program), something interesting happened: the rest of the park began to find a new, more healthful balance. In a bold thought experiment, George Monbiot imagines a wilder world in which humans work to restore the complex, lost natural food chains that once surrounded us.",
    "duration": "0:15:10",
    "publishdate": "9/9/2013 15:14:00"
  },
  {
    "rank": 1190,
    "id": "614",
    "speaker": "Janine Benyus",
    "name": "Janine Benyus: Biomimicry in action",
    "shortsummary": "Janine Benyus has a message for inventors: When solving a design problem, look to nature first. There you'll find inspired designs for making things waterproof, aerodynamic, solar-powered and more. Here she reveals dozens of new products that take their cue from nature with spectacular results.",
    "duration": "0:17:42",
    "publishdate": "8/6/2009"
  },
  {
    "rank": 1191,
    "id": "925",
    "speaker": "Susan Shaw",
    "name": "Susan Shaw: The oil spill's toxic trade-off",
    "shortsummary": "Break down the oil slick, keep it off the shores: that's grounds for pumping toxic dispersant into the Gulf, say clean-up overseers. Susan Shaw shows evidence it's sparing some beaches only at devastating cost to the health of the deep sea.",
    "duration": "0:16:42",
    "publishdate": "7/27/2010"
  },
  null,
  {
    "rank": 1193,
    "id": "661",
    "speaker": "John Gerzema",
    "name": "John Gerzema: The post-crisis consumer",
    "shortsummary": "John Gerzema says there's an upside to the recent financial crisis -- the opportunity for positive change. Speaking at TEDxKC, he identifies four major cultural shifts driving new consumer behavior and shows how businesses are evolving to connect with thoughtful spending. ",
    "duration": "0:16:35",
    "publishdate": "10/19/2009"
  },
  {
    "rank": 1194,
    "id": "151",
    "speaker": "George Ayittey",
    "name": "Cheetahs vs. Hippos for Africa's future",
    "shortsummary": "Ghanaian economist George Ayittey unleashes a torrent of controlled anger toward corrupt leaders in Africa -- and calls on the \"Cheetah generation\" to take back the continent. ",
    "duration": "0:17:50",
    "publishdate": "7/30/2007"
  },
  {
    "rank": 1195,
    "id": "533",
    "speaker": "Mae Jemison",
    "name": "Mae Jemison on teaching arts and sciences together",
    "shortsummary": "Mae Jemison is an astronaut, a doctor, an art collector, a dancer ... Telling stories from her own education and from her time in space, she calls on educators to teach both the arts and sciences, both intuition and logic, as one -- to create bold thinker",
    "duration": "0:14:48",
    "publishdate": "5/5/2009"
  },
  {
    "rank": 1196,
    "id": "1410",
    "speaker": "Chip Kidd",
    "name": "Chip Kidd: Designing books is no laughing matter. OK, it is.",
    "shortsummary": "Chip Kidd doesn't judge books by their cover, he creates covers that embody the book -- and he does it with a wicked sense of humor. In one of the funniest talks from TED2012, he shows the art and deep thought of his cover designs. <i>(From The Design Studio session at TED2012, guest curated by Chee Pearlman and David Rockwell.)</i>",
    "duration": "0:17:16",
    "publishdate": "4/4/2012"
  },
  {
    "rank": 1197,
    "id": "1257",
    "speaker": "Béatrice Coron",
    "name": "Béatrice Coron: Stories cut from paper",
    "shortsummary": "With scissors and paper, artist Béatrice Coron creates intricate worlds, cities and countries, heavens and hells. Striding onstage in a glorious cape cut from Tyvek, she describes her creative process and the way her stories develop from snips and slices.",
    "duration": "0:18:15",
    "publishdate": "10/28/2011"
  },
  {
    "rank": 1198,
    "id": "1368",
    "speaker": "Tan Le",
    "name": "Tan Le: My immigration story",
    "shortsummary": "In 2010, technologist Tan Le took the TEDGlobal stage to demo a powerful new interface. But now, at TEDxWomen, she tells a very personal story: the story of her family -- mother, grandmother and sister -- fleeing Vietnam and building a new life.",
    "duration": "0:12:16",
    "publishdate": "2/24/2012 16:59:00"
  },
  {
    "rank": 1199,
    "id": "393",
    "speaker": "Luca Turin",
    "name": "The science of scent",
    "shortsummary": "What's the science behind a sublime perfume? With charm and precision, biophysicist Luca Turin explains the molecular makeup -- and the art -- of a scent.",
    "duration": "0:15:53",
    "publishdate": "11/7/2008"
  },
  {
    "rank": 1200,
    "id": "1127",
    "speaker": "John Hunter",
    "name": "John Hunter on the World Peace Game",
    "shortsummary": "John Hunter puts all the problems of the world on a 4'x5' plywood board -- and lets his 4th-graders solve them. At TED2011, he explains how his World Peace Game engages schoolkids, and why the complex lessons it teaches -- spontaneous, and always surprising -- go further than classroom lectures can.",
    "duration": "0:20:27",
    "publishdate": "4/20/2011"
  },
  {
    "rank": 1201,
    "id": "361",
    "speaker": "David Perry",
    "name": "Will videogames become better than life?",
    "shortsummary": "Game designer David Perry says tomorrow's videogames will be more than mere fun to the next generation of gamers. They'll be lush, complex, emotional experiences -- more involving and meaningful to some than real life.",
    "duration": "0:21:06",
    "publishdate": "10/6/2008"
  },
  {
    "rank": 1202,
    "id": "607",
    "speaker": "Elaine Morgan",
    "name": "Elaine Morgan says we evolved from aquatic apes",
    "shortsummary": "Elaine Morgan is a tenacious proponent of the aquatic ape hypothesis: the idea that humans evolved from primate ancestors who dwelt in watery habitats. Hear her spirited defense of the idea -- and her theory on why mainstream science doesn't take it seriously.",
    "duration": "0:17:13",
    "publishdate": "7/31/2009"
  },
  {
    "rank": 1203,
    "id": "148",
    "speaker": "Rives",
    "name": "Is 4 a.m. the new midnight?",
    "shortsummary": "Poet Rives does 8 minutes of lyrical origami, folding history into a series of coincidences surrounding that most surreal of hours, 4 o'clock in the morning.",
    "duration": "0:09:12",
    "publishdate": "7/17/2007"
  },
  {
    "rank": 1204,
    "id": "830",
    "speaker": "Mike deGruy",
    "name": "Mike deGruy: Hooked by an octopus",
    "shortsummary": "Underwater filmmaker Mike deGruy has spent decades looking intimately at the ocean. A consummate storyteller, he takes the stage at Mission Blue to share his awe and excitement -- and his fears -- about the blue heart of our planet.",
    "duration": "0:18:12",
    "publishdate": "2/4/2012 8:14:00"
  },
  {
    "rank": 1205,
    "id": "163",
    "speaker": "Steven Pinker",
    "name": "A brief history of violence",
    "shortsummary": "Steven Pinker charts the decline of violence from Biblical times to the present, and argues that, though it may seem illogical and even obscene, given Iraq and Darfur, we are living in the most peaceful time in our species' existence.",
    "duration": "0:19:15",
    "publishdate": "9/10/2007"
  },
  {
    "rank": 1206,
    "id": "1364",
    "speaker": "Neil MacGregor",
    "name": "Neil MacGregor: 2600 years of history in one object",
    "shortsummary": "A clay cylinder covered in Akkadian cuneiform script, damaged and broken, the Cyrus Cylinder is a powerful symbol of religious tolerance and multi-culturalism. In this enthralling talk Neil MacGregor, Director of the British Museum, traces 2600 years of Middle Eastern history through this single object.",
    "duration": "0:19:37",
    "publishdate": "2/20/2012 16:37:00"
  },
  {
    "rank": 1207,
    "id": "1243",
    "speaker": "Richard Seymour",
    "name": "Richard Seymour: How beauty feels",
    "shortsummary": "A story, a work of art, a face, a designed object -- how do we tell that something is beautiful?  And why does it matter so much to us? Designer Richard Seymour explores our response to beauty and the surprising power of objects that exhibit it.",
    "duration": "0:17:15",
    "publishdate": "10/11/2011"
  },
  {
    "rank": 1208,
    "id": "1555",
    "speaker": "Robert Neuwirth",
    "name": "Robert Neuwirth: The power of the informal economy",
    "shortsummary": "Robert Neuwirth spent four years among the chaotic stalls of street markets, talking to pushcart hawkers and gray marketers, to study the remarkable \"System D,\" the world's unlicensed economic network. Responsible for some 1.8 billion jobs, it's an economy of underappreciated power and scope.",
    "duration": "0:12:29",
    "publishdate": "9/5/2012 15:19:00"
  },
  {
    "rank": 1209,
    "id": "676",
    "speaker": "Feisal Abdul Rauf",
    "name": " Imam Faisal Abdul Rauf: Lose your ego, find your compassion",
    "shortsummary": "Imam Faisal Abdul Rauf combines the teachings of the Qur‚Äôan, the stories of Rumi, and the examples of Muhammad and Jesus, to demonstrate that only one obstacle stands between each of us and absolute compassion -- ourselves.  ",
    "duration": "0:16:47",
    "publishdate": "10/31/2008"
  },
  {
    "rank": 1210,
    "id": "56",
    "speaker": "Edward Burtynsky",
    "name": "TED Prize wish: Share the story of Earth's manufactured landscapes",
    "shortsummary": "Accepting his 2005 TED Prize, photographer Edward Burtynsky makes a wish: that his images -- stunning landscapes that document humanity's impact on the world -- help persuade millions to join a global conversation on sustainability.",
    "duration": "0:34:25",
    "publishdate": "10/31/2006"
  },
  {
    "rank": 1211,
    "id": "1266",
    "speaker": "Ben Kacyra",
    "name": "Ben Kacyra: Ancient wonders captured in 3D",
    "shortsummary": "Ancient monuments give us clues to astonishing past civilizations -- but they're under threat from pollution, war, neglect. Ben Kacyra, who invented a groundbreaking 3D scanning system, is using his invention to scan and preserve the world's heritage in archival detail. (Watch to the end for a little demo.)",
    "duration": "0:12:20",
    "publishdate": "11/9/2011"
  },
  {
    "rank": 1212,
    "id": "1094",
    "speaker": "David Brooks",
    "name": "David Brooks: The social animal",
    "shortsummary": "Tapping into the findings of his latest book, NYTimes columnist David Brooks unpacks new insights into human nature from the cognitive sciences -- insights with massive implications for economics and politics as well as our own self-knowledge. In a talk full of humor, he shows how you can't hope to understand humans as separate individuals making choices based on their conscious awareness. ",
    "duration": "0:18:44",
    "publishdate": "3/14/2011"
  },
  {
    "rank": 1213,
    "id": "1045",
    "speaker": "Lesley Hazleton",
    "name": "Lesley Hazleton: On reading the Koran",
    "shortsummary": "Lesley Hazleton sat down one day to read the Koran. And what she found -- as a non-Muslim, a self-identified \"tourist\" in the Islamic holy book -- wasn't what she expected. With serious scholarship and warm humor, Hazleton shares the grace, flexibility and mystery she found, in this myth-debunking talk from TEDxRainier.",
    "duration": "0:09:33",
    "publishdate": "1/4/2011"
  },
  {
    "rank": 1214,
    "id": "375",
    "speaker": "Virginia Postrel",
    "name": "The power of glamour",
    "shortsummary": "In a timely talk, cultural critic Virginia Postrel muses on the true meaning, and the powerful uses, of glamour -- which she defines as any calculated, carefully polished image designed to impress and persuade. ",
    "duration": "0:16:15",
    "publishdate": "10/16/2008"
  },
  {
    "rank": 1215,
    "id": "1544",
    "speaker": "Jon Ronson",
    "name": "Jon Ronson: Strange answers to the psychopath test",
    "shortsummary": "Is there a definitive line that divides crazy from sane? With a hair-raising delivery, Jon Ronson, author of <em>The Psychopath Test</em>, illuminates the gray areas between the two. <em>(With live-mixed sound by Julian Treasure and animation by Evan Grant.)</em>",
    "duration": "0:18:01",
    "publishdate": "8/15/2012 15:18:00"
  },
  {
    "rank": 1216,
    "id": "1185",
    "speaker": "Jonathan Drori",
    "name": "Jonathan Drori: The beautiful tricks of flowers",
    "shortsummary": "In this visually dazzling talk, Jonathan Drori shows the extraordinary ways flowering plants -- over a quarter million species -- have evolved to attract insects to spread their pollen: growing 'landing-strips' to guide the insects in, shining in ultraviolet, building elaborate traps, and even mimicking other insects in heat.",
    "duration": "0:13:48",
    "publishdate": "7/6/2011"
  },
  {
    "rank": 1217,
    "id": "716",
    "speaker": "James Geary",
    "name": "James Geary, metaphorically speaking",
    "shortsummary": "Aphorism enthusiast and author James Geary waxes on a fascinating fixture of human language: the metaphor. Friend of scribes from Aristotle to Elvis, metaphor can subtly influence the decisions we make, Geary says.",
    "duration": "0:09:30",
    "publishdate": "12/17/2009"
  },
  {
    "rank": 1218,
    "id": "1196",
    "speaker": "Rory Stewart",
    "name": "Rory Stewart: Time to end the war in Afghanistan",
    "shortsummary": "British MP Rory Stewart walked across Afghanistan after 9/11, talking with citizens and warlords alike. Now, a decade later, he asks: Why are Western and coalition forces still fighting there? He shares lessons from past military interventions that worked -- Bosnia, for instance -- and shows that humility and local expertise are the keys to success.",
    "duration": "0:20:02",
    "publishdate": "7/25/2011"
  },
  {
    "rank": 1219,
    "id": "820",
    "speaker": "Dennis Hong",
    "name": "Dennis Hong: My seven species of robot ",
    "shortsummary": " At TEDxNASA, Dennis Hong introduces seven award-winnning, all-terrain robots -- like the humanoid, soccer-playing DARwIn and the cliff-gripping CLIMBeR -- all built by his team at RoMeLa, Virginia Tech. Watch to the end to hear the five creative secrets to his lab's incredible technical success.",
    "duration": "0:15:55",
    "publishdate": "4/7/2010"
  },
  {
    "rank": 1220,
    "id": "187",
    "speaker": "Larry Lessig",
    "name": "How creativity is being strangled by the law",
    "shortsummary": "Larry Lessig, the Net's most celebrated lawyer, cites John Philip Sousa, celestial copyrights and the \"ASCAP cartel\" in his argument for reviving our creative culture.",
    "duration": "0:18:56",
    "publishdate": "11/6/2007"
  },
  {
    "rank": 1221,
    "id": "994",
    "speaker": "Shimon Steinberg",
    "name": "Shimon Steinberg: Natural pest control ... using bugs!",
    "shortsummary": "At TEDxTelAviv, Shimon Steinberg looks at the difference between pests and bugs -- and makes the case for using good bugs to fight bad bugs, avoiding chemicals in our quest for perfect produce.",
    "duration": "0:15:23",
    "publishdate": "10/28/2010"
  },
  {
    "rank": 1222,
    "id": "922",
    "speaker": "Kevin Stone",
    "name": "Kevin Stone: The bio-future of joint replacement",
    "shortsummary": "Arthritis and injury grind down millions of joints, but few get the best remedy -- real biological tissue. Kevin Stone shows a treatment that could sidestep the high costs and donor shortfall of human-to-human transplants with a novel use of animal tissue.",
    "duration": "0:06:51",
    "publishdate": "7/22/2010"
  },
  {
    "rank": 1223,
    "id": "172",
    "speaker": "John Maeda",
    "name": "Simplicity patterns",
    "shortsummary": "The MIT Media Lab's John Maeda lives at the intersection of technology and art, a place that can get very complicated. Here he talks about paring down to basics.",
    "duration": "0:15:59",
    "publishdate": "9/20/2007"
  },
  {
    "rank": 1224,
    "id": "590",
    "speaker": "Eames Demetrios",
    "name": "The design genius of Charles + Ray Eames",
    "shortsummary": "The legendary design team Charles and Ray Eames made films, houses and classic midcentury modern furniture. Eames Demetrios, their grandson, shows rarely seen films and archival footage in a lively, loving tribute to their creative process.",
    "duration": "0:15:08",
    "publishdate": "7/6/2009"
  },
  {
    "rank": 1225,
    "id": "1758",
    "speaker": "Denise Herzing",
    "name": "Denise Herzing: Could we speak the language of dolphins?",
    "shortsummary": "For 28 years, Denise Herzing has spent five months each summer living with a pod of Atlantic spotted dolphins, following three generations of family relationships and behaviors. It's clear they are communicating with one another -- but is it language? Could humans use it too? She shares a fascinating new experiment to test this idea.",
    "duration": "0:14:38",
    "publishdate": "6/6/2013 15:13:00"
  },
  {
    "rank": 1226,
    "id": "1244",
    "speaker": "Ian Ritchie",
    "name": "Ian Ritchie: The day I turned down Tim Berners-Lee",
    "shortsummary": "Imagine it's late 1990, and you've just met a nice young man named Tim Berners-Lee, who starts telling you about his proposed system called the World Wide Web. Ian Ritchie was there. And ... he didn't buy it. A short story about information, connectivity and learning from mistakes.",
    "duration": "0:05:41",
    "publishdate": "10/12/2011"
  },
  {
    "rank": 1227,
    "id": "7",
    "speaker": "David Pogue",
    "name": "When it comes to tech, simplicity sells",
    "shortsummary": "New York Times columnist David Pogue takes aim at technology's worst interface-design offenders, and provides encouraging examples of products that get it right. To funny things up, he bursts into song. ",
    "duration": "0:21:26",
    "publishdate": "6/27/2006"
  },
  {
    "rank": 1228,
    "id": "1356",
    "speaker": "Tyrone Hayes, Penelope Jagessar Chaffer",
    "name": "Tyrone Hayes + Penelope Jagessar Chaffer: The toxic baby? ",
    "shortsummary": "Filmmaker Penelope Jagessar Chaffer was curious about the chemicals she was exposed to while pregnant: Could they affect her unborn child? So she asked scientist Tyrone Hayes to brief her on one he studied closely: atrazine, a herbicide used on corn. (Hayes, an expert on amphibians, is a critic of atrazine, which displays a disturbing effect on frog development.) Onstage together at TEDWomen, Hayes and Chaffer tell their story.",
    "duration": "0:17:48",
    "publishdate": "2/13/2012 16:31:00"
  },
  {
    "rank": 1229,
    "id": "1304",
    "speaker": "Homaro Cantu, Ben Roche",
    "name": "Homaro Cantu + Ben Roche: Cooking as alchemy  ",
    "shortsummary": "Homaro Cantu and Ben Roche come from Moto, a Chicago restaurant that plays with new ways to cook and eat food. But beyond the fun and flavor-tripping, there's a serious intent: Can we use new food technology for good?",
    "duration": "0:09:34",
    "publishdate": "12/15/2011"
  },
  {
    "rank": 1230,
    "id": "409",
    "speaker": "Richard Preston",
    "name": "Climbing the world's biggest trees",
    "shortsummary": "Science writer Richard Preston talks about some of the most enormous living beings on the planet, the giant trees of the US Pacific Northwest. Growing from a tiny seed, they support vast ecosystems -- and are still, largely, a mystery. ",
    "duration": "0:19:31",
    "publishdate": "12/2/2008"
  },
  {
    "rank": 1231,
    "id": "651",
    "speaker": "David Logan",
    "name": "David Logan on tribal leadership",
    "shortsummary": "At TEDxUSC, David Logan talks about the five kinds of tribes that humans naturally form -- in schools, workplaces, even the driver's license bureau. By understanding our shared tribal tendencies, we can help lead each other to become better individuals.",
    "duration": "0:16:39",
    "publishdate": "10/6/2009"
  },
  {
    "rank": 1232,
    "id": "254",
    "speaker": "They Might Be Giants",
    "name": "Wake up! It's They Might Be Giants",
    "shortsummary": "In a very, very early-morning set, They Might Be Giants rock the final day of TED2007.",
    "duration": "0:17:21",
    "publishdate": "4/29/2008"
  },
  {
    "rank": 1233,
    "id": "850",
    "speaker": "Jeremy Jackson",
    "name": "Jeremy Jackson: How we wrecked the ocean",
    "shortsummary": "In this bracing talk, coral reef ecologist Jeremy Jackson lays out the shocking state of the ocean today: overfished, overheated, polluted, with indicators that things will get much worse. Astonishing photos and stats make the case.",
    "duration": "0:18:19",
    "publishdate": "5/5/2010"
  },
  {
    "rank": 1234,
    "id": "1715",
    "speaker": "Joshua Prager",
    "name": "Joshua Prager: In search of the man who broke my neck",
    "shortsummary": "When Joshua Prager was 19, a devastating bus accident left him a hemiplegic. He returned to Israel twenty years later to find the driver who turned his world upside down. In this mesmerizing tale of their meeting, Prager probes deep questions of nature, nurture, self-deception and destiny.",
    "duration": "0:18:30",
    "publishdate": "4/17/2013 15:00:00"
  },
  {
    "rank": 1235,
    "id": "1684",
    "speaker": "Edith Widder",
    "name": "Edith Widder: How we found the giant squid",
    "shortsummary": "Humankind has been looking for the giant squid (<i>Architeuthis</i>) since we first started taking pictures underwater. But the elusive deep-sea predator could never be caught on film. Oceanographer and inventor Edith Widder shares the key insight -- and the teamwork -- that helped to capture the squid on film for the first time.",
    "duration": "0:08:38",
    "publishdate": "3/5/2013 15:56:00"
  },
  {
    "rank": 1236,
    "id": "1596",
    "speaker": "Lemn Sissay",
    "name": "Lemn Sissay: A child of the state",
    "shortsummary": "Literature has long been fascinated with fostered, adopted and orphaned children, from Moses to Cinderella to Oliver Twist to Harry Potter. So why do many parentless children feel compelled to hide their pasts? Poet and playwright Lemn Sissay tells his own moving story. <em>(Filmed at TEDxHousesofParliament.)</em>",
    "duration": "0:15:17",
    "publishdate": "10/24/2012 15:00:00"
  },
  {
    "rank": 1237,
    "id": "34",
    "speaker": "Phil Borges",
    "name": "Documenting our endangered cultures",
    "shortsummary": "Photographer Phil Borges shows rarely seen images of people from the mountains of Dharamsala, India, and the jungles of the Ecuadorean Amazon. In documenting these endangered cultures, he intends to help preserve them.",
    "duration": "0:18:35",
    "publishdate": "1/9/2007"
  },
  {
    "rank": 1238,
    "id": "174",
    "speaker": "Norman Foster",
    "name": "Building on the green agenda",
    "shortsummary": "Architect Norman Foster discusses his own work to show how computers can help architects design buildings that are green, beautiful and \"basically pollution-free.\" From the 2007 DLD Conference, Munich; www.dld-conference.com",
    "duration": "0:31:57",
    "publishdate": "3/24/2008"
  },
  {
    "rank": 1239,
    "id": "83",
    "speaker": "E.O. Wilson",
    "name": "TED Prize wish: Help build the Encyclopedia of Life",
    "shortsummary": "As E.O. Wilson accepts his 2007 TED Prize, he makes a plea on behalf of all creatures that we learn more about our biosphere -- and build a networked encyclopedia of all the world's knowledge about life. ",
    "duration": "0:22:35",
    "publishdate": "4/3/2007"
  },
  {
    "rank": 1240,
    "id": "1294",
    "speaker": "Srdja Popovic",
    "name": "Srdja Popovic: How to topple a dictator",
    "shortsummary": "2011 was a year of extraordinary people-powered resistance, starting with Arab Spring and spreading across the world. How did this resistance work so well? At TEDxKrakow, Srdja Popovic (who led the nonviolent movement that took down Milosevic in Serbia in 2000) lays out the plans, skills and tools each movement needs -- from nonviolent tactics to a sense of humor.",
    "duration": "",
    "publishdate": "12/5/2011"
  },
  {
    "rank": 1241,
    "id": "1474",
    "speaker": "John Hockenberry",
    "name": "John Hockenberry: We are all designers",
    "shortsummary": "Journalist John Hockenberry tells a personal story inspired by a pair of flashy wheels in a wheelchair-parts catalogue -- and how they showed him the value of designing a life of intent. <i>(From The Design Studio session at TED2012, guest-curated by Chee Pearlman and David Rockwell.)</i>",
    "duration": "0:21:57",
    "publishdate": "6/11/2012 15:24:00"
  },
  {
    "rank": 1242,
    "id": "1166",
    "speaker": "Alice Dreger",
    "name": "Alice Dreger: Is anatomy destiny?",
    "shortsummary": "Alice Dreger works with people at the edge of anatomy, such as conjoined twins and intersexed people. In her observation, it's often a fuzzy line between male and female, among other anatomical distinctions. Which brings up a huge question: Why do we let our anatomy determine our fate?",
    "duration": "0:18:48",
    "publishdate": "6/10/2011"
  },
  {
    "rank": 1243,
    "id": "1048",
    "speaker": "Neil Pasricha",
    "name": "Neil Pasricha: The 3 A's of awesome",
    "shortsummary": "Neil Pasricha's blog 1000 Awesome Things savors life's simple pleasures, from free refills to clean sheets. In this heartfelt talk from TEDxToronto, he reveals the 3 secrets (all starting with A) to leading a life that's truly awesome.",
    "duration": "0:17:33",
    "publishdate": "1/7/2011"
  },
  {
    "rank": 1244,
    "id": "348",
    "speaker": "Ann Cooper",
    "name": "Reinventing the school lunch",
    "shortsummary": "Speaking at the 2007 EG conference, \"renegade lunch lady\" Ann Cooper talks about the coming revolution in the way kids eat at school -- local, sustainable, seasonal and even educational food. ",
    "duration": "0:19:42",
    "publishdate": "9/16/2008"
  },
  {
    "rank": 1245,
    "id": "1362",
    "speaker": "Garth Lenz",
    "name": "Garth Lenz: The true cost of oil",
    "shortsummary": "What does environmental devastation actually look like?  At TEDxVictoria, photographer Garth Lenz shares shocking photos of the Alberta Tar Sands mining project -- and the beautiful (and vital) ecosystems under threat.",
    "duration": "",
    "publishdate": "2/18/2012 14:54:00"
  },
  {
    "rank": 1246,
    "id": "428",
    "speaker": "Paul Sereno",
    "name": "What can fossils teach us?",
    "shortsummary": "Strange landscapes, scorching heat and (sometimes) mad crocodiles await scientists seeking clues to evolution's genius. Paleontologist Paul Sereno talks about his surprising encounters with prehistory -- and a new way to help students join the adventure.",
    "duration": "0:21:46",
    "publishdate": "1/7/2009"
  },
  {
    "rank": 1247,
    "id": "1247",
    "speaker": "Jae Rhim Lee",
    "name": "Jae Rhim Lee: My mushroom burial suit",
    "shortsummary": "Here's a powerful provocation from artist Jae Rhim Lee. Can we commit our bodies to a cleaner, greener Earth, even after death? Naturally -- using a special burial suit seeded with pollution-gobbling mushrooms. Yes, this just might be the strangest TEDTalk you'll ever see ...",
    "duration": "0:07:30",
    "publishdate": "10/14/2011"
  },
  {
    "rank": 1248,
    "id": "1752",
    "speaker": "Paola Antonelli",
    "name": "Paola Antonelli: Why I brought Pac-Man to MoMA",
    "shortsummary": "When the Museum of Modern Art's senior curator of architecture and design announced the acquisition of 14 video games in 2012, \"all hell broke loose.\" In this far-ranging, entertaining, and deeply insightful talk, Paola Antonelli explains why she's delighted to challenge preconceived ideas about art and galleries, and describes her burning wish to help establish a broader understanding of design.",
    "duration": "0:18:42",
    "publishdate": "5/28/2013 15:00:00"
  },
  {
    "rank": 1249,
    "id": "421",
    "speaker": "Penelope Boston",
    "name": "Life on Mars? Let's look in the caves",
    "shortsummary": "So the Mars Rovers didn't scoop up any alien lifeforms. Scientist Penelope Boston thinks there's a good chance -- a 25 to 50 percent chance, in fact -- that life might exist on Mars, deep inside the planet's caves. She details how we should look and why.",
    "duration": "0:18:29",
    "publishdate": "12/17/2008"
  },
  {
    "rank": 1250,
    "id": "1080",
    "speaker": "Iain Hutchison",
    "name": "Iain Hutchison: Saving faces",
    "shortsummary": "Facial surgeon Iain Hutchison works with people whose faces have been severely disfigured. By pushing to improve surgical techniques, he helps to improve their lives; and by commissioning their portraits, he celebrates their humanity. NOTE: This talk contains images of disfigured and badly injured faces that may be disturbing -- and Hutchison provides thoughtful answers as to why a disfigured face can shock us so deeply. Squeamish? Hide your screen from 12:10 - 13:19, but do keep listening. Portraits shown in this talk come from Mark Gilbert.\n\n",
    "duration": "0:15:54",
    "publishdate": "2/22/2011"
  },
  {
    "rank": 1251,
    "id": "440",
    "speaker": "Peter Ward",
    "name": "Earth's mass extinctions",
    "shortsummary": "Asteroid strikes get all the coverage, but \"Medea Hypothesis\" author Peter Ward argues that most of Earth's mass extinctions were caused by lowly bacteria. The culprit, a poison called hydrogen sulfide, may have an interesting application in medicine.",
    "duration": "0:19:41",
    "publishdate": "1/27/2009"
  },
  {
    "rank": 1252,
    "id": "1810",
    "speaker": "Russell Foster",
    "name": "Russell Foster: Why do we sleep?",
    "shortsummary": "Russell Foster is a circadian neuroscientist: He studies the sleep cycles of the brain. And he asks: What do we know about sleep? Not a lot, it turns out, for something we do with one-third of our lives. In this talk, Foster shares three popular theories about why we sleep, busts some myths about how much sleep we need at different ages -- and hints at some bold new uses of sleep as a predictor of mental health.",
    "duration": "0:21:46",
    "publishdate": "8/14/2013 14:53:00"
  },
  {
    "rank": 1253,
    "id": "952",
    "speaker": "Ben Cameron",
    "name": "Ben Cameron: The true power of the performing arts",
    "shortsummary": "Arts administrator and live-theater fan Ben Cameron looks at the state of the live arts -- asking: How can the magic of live theater, live music, live dance compete with the always-on Internet? At TEDxYYC, he offers a bold look forward.",
    "duration": "0:12:44",
    "publishdate": "9/10/2010"
  },
  {
    "rank": 1254,
    "id": "1659",
    "speaker": "Zahra' Langhi",
    "name": "Zahra' Langhi: Why Libya's revolution didn't work -- and what might",
    "shortsummary": "In Libya, Zahra' Langhi was part of the \"days of rage\" movement that helped topple the dictator Qaddafi. But -- then what? In their first elections, Libyans tried an innovative slate of candidates, the \"zipper ballot,\" that ensured equal representation from men and women of both sides. Yet the same gridlocked politics of dominance and exclusion won out. What Libya needs now, Langhi suggests, is collaboration, not competition; compassion, not rage. ",
    "duration": "0:09:48",
    "publishdate": "2/4/2013 16:20:00"
  },
  {
    "rank": 1255,
    "id": "527",
    "speaker": "Sarah Jones",
    "name": "Sarah Jones as a one-woman global village",
    "shortsummary": "In this hilariously lively performance, actress Sarah Jones channels an opinionated elderly Jewish woman, a fast-talking Dominican college student and more, giving TED2009 just a sample of her spectacular character range.",
    "duration": "0:21:00",
    "publishdate": "4/29/2009"
  },
  {
    "rank": 1256,
    "id": "310",
    "speaker": "Keith Barry",
    "name": "Brain magic",
    "shortsummary": "First, Keith Barry shows us how our brains can fool our bodies -- in a trick that works via podcast too. Then he involves the audience in some jaw-dropping (and even a bit dangerous) feats of brain magic.",
    "duration": "0:19:49",
    "publishdate": "7/18/2008"
  },
  {
    "rank": 1257,
    "id": "32",
    "speaker": "Vik Muniz",
    "name": "Art with wire, thread, sugar, chocolate",
    "shortsummary": "Vik Muniz makes art from pretty much anything, be it shredded paper, wire, clouds or diamonds. Here he describes the thinking behind his work and takes us on a tour of his incredible images.",
    "duration": "0:14:51",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 1258,
    "id": "927",
    "speaker": "Laurie Santos",
    "name": "Laurie Santos: A monkey economy as irrational as ours",
    "shortsummary": "Laurie Santos looks for the roots of human irrationality by watching the way our primate relatives make decisions. A clever series of experiments in \"monkeynomics\" shows that some of the silly choices we make, monkeys make too.",
    "duration": "0:19:45",
    "publishdate": "7/29/2010"
  },
  {
    "rank": 1259,
    "id": "307",
    "speaker": "Helen Fisher",
    "name": "The brain in love",
    "shortsummary": "Why do we crave love so much, even to the point that we would die for it? To learn more about our very real, very physical need for romantic love, Helen Fisher and her research team took MRIs of people in love -- and people who had just been dumped.",
    "duration": "0:15:56",
    "publishdate": "7/15/2008"
  },
  {
    "rank": 1260,
    "id": "1765",
    "speaker": "George Papandreou",
    "name": "George Papandreou: Imagine a European democracy without borders",
    "shortsummary": "Greece has been the poster child for European economic crisis, but former Prime Minister George Papandreou wonders if it's just a preview of what's to come. â€œOur democracies,\" he says, \"are trapped by systems that are too big to fail, or more accurately, too big to controlâ€ -- while \"politicians like me have lost the trust of their peoples.\" How to solve it? Have citizens re-engage more directly in a new democratic bargain.",
    "duration": "0:20:06",
    "publishdate": "6/12/2013 8:16:00"
  },
  {
    "rank": 1261,
    "id": "89",
    "speaker": "Ben Saunders",
    "name": "Three things to know before you ski to the North Pole",
    "shortsummary": "Arctic explorer Ben Saunders recounts his harrowing solo ski trek to the North Pole, complete with engaging anecdotes, gorgeous photos and never-before-seen video.",
    "duration": "0:18:03",
    "publishdate": "10/25/2006"
  },
  {
    "rank": 1262,
    "id": "182",
    "speaker": "Maira Kalman",
    "name": "The illustrated woman",
    "shortsummary": "Author and illustrator Maira Kalman talks about her life and work, from her covers for The New Yorker to her books for children and grown-ups. She is as wonderful, as wise and as deliciously off-kilter in person as she is on paper.",
    "duration": "0:17:30",
    "publishdate": "10/16/2007"
  },
  {
    "rank": 1263,
    "id": "670",
    "speaker": "Marcus du Sautoy",
    "name": "Marcus du Sautoy: Symmetry, reality's riddle",
    "shortsummary": "The world turns on symmetry -- from the spin of subatomic particles to the dizzying beauty of an arabesque. But there's more to it than meets the eye. Here, Oxford mathematician Marcus du Sautoy offers a glimpse of the invisible numbers that marry all symmetrical objects.",
    "duration": "0:18:19",
    "publishdate": "10/29/2009"
  },
  {
    "rank": 1264,
    "id": "849",
    "speaker": "Thomas Dolby",
    "name": "Thomas Dolby: \"Love Is a Loaded Pistol\"",
    "shortsummary": "For his first studio album release in decades, musical innovator Thomas Dolby has been composing music in the uniquely inspirational setting of a restored life-boat.  Here he premieres a gorgeous, evocative song from that album -- about one night with a legend. He's backed by members of the modern string quartet Ethel.",
    "duration": "0:04:57",
    "publishdate": "5/7/2010"
  },
  {
    "rank": 1265,
    "id": "727",
    "speaker": "Dan Buettner",
    "name": "Dan Buettner: How to live to be 100+",
    "shortsummary": "To find the path to long life and health, Dan Buettner and team study the world's \"Blue Zones,\" communities whose elders live with vim and vigor to record-setting age. At TEDxTC, he shares the 9 common diet and lifestyle habits that keep them spry past age 100.",
    "duration": "0:19:39",
    "publishdate": "1/6/2010"
  },
  {
    "rank": 1266,
    "id": "215",
    "speaker": "David Macaulay",
    "name": "All roads lead to Rome Antics",
    "shortsummary": "David Macaulay relives the winding and sometimes surreal journey toward the completion of Rome Antics, his illustrated homage to the historic city.",
    "duration": "0:21:35",
    "publishdate": "2/6/2008"
  },
  {
    "rank": 1267,
    "id": "20",
    "speaker": "Malcolm Gladwell",
    "name": "What we can learn from spaghetti  sauce",
    "shortsummary": "Tipping Point author Malcolm Gladwell gets inside the food industry's pursuit of the perfect spaghetti sauce -- and makes a larger argument about the nature of choice and happiness.",
    "duration": "0:17:30",
    "publishdate": "9/19/2006"
  },
  {
    "rank": 1268,
    "id": "119",
    "speaker": "Stew",
    "name": "\"Black Men Ski\"",
    "shortsummary": "What happens when a black man visits Aspen? Singer/songwriter Stew and his band are about to let you know.",
    "duration": "0:04:37",
    "publishdate": "5/7/2007"
  },
  {
    "rank": 1269,
    "id": "1577",
    "speaker": "Robert Gupta",
    "name": "Robert Gupta: Between music and medicine",
    "shortsummary": "When Robert Gupta was caught between a career as a doctor and as a violinist, he realized his place was in the middle, with a bow in his hand and a sense of social justice in his heart. He tells a moving story of society's marginalized and the power of music therapy, which can succeed where conventional medicine fails.",
    "duration": "0:16:27",
    "publishdate": "10/2/2012 15:00:00"
  },
  {
    "rank": 1270,
    "id": "978",
    "speaker": "Peter Haas",
    "name": "Peter Haas: Haiti's disaster of engineering",
    "shortsummary": "\"Haiti was not a natural disaster,\" says TED Fellow Peter Haas: \"It was a disaster of engineering.\" As the country rebuilds after January's deadly quake, are bad old building practices creating another ticking time bomb? Haas's group, AIDG, is helping Haiti's builders learn modern building and engineering practices, to assemble a strong country brick by brick.\n\n",
    "duration": "0:08:30",
    "publishdate": "10/13/2010"
  },
  {
    "rank": 1271,
    "id": "993",
    "speaker": "Barton Seaver",
    "name": " Barton Seaver: Sustainable seafood? Let's get smart",
    "shortsummary": "Chef Barton Seaver presents a modern dilemma: Seafood is one of our healthier protein options, but overfishing is desperately harming our oceans. He suggests a simple way to keep fish on the dinner table that includes every mom's favorite adage  -- \"Eat your vegetables!\"",
    "duration": "0:09:26",
    "publishdate": "10/27/2010"
  },
  {
    "rank": 1272,
    "id": "216",
    "speaker": "Howard Rheingold",
    "name": "Way-new collaboration",
    "shortsummary": "Howard Rheingold talks about the coming world of collaboration, participatory media and collective action -- and how Wikipedia is really an outgrowth of our natural human instinct to work as a group.",
    "duration": "0:19:31",
    "publishdate": "2/11/2008"
  },
  {
    "rank": 1273,
    "id": "94",
    "speaker": "Dan Dennett",
    "name": "A secular, scientific rebuttal to Rick Warren",
    "shortsummary": "Philosopher Dan Dennett calls for religion -- all religion -- to be taught in schools, so we can understand its nature as a natural phenomenon. Then he takes on The Purpose-Driven Life, disputing its claim that, to be moral, one must deny evolution.",
    "duration": "0:24:45",
    "publishdate": "7/18/2006"
  },
  {
    "rank": 1274,
    "id": "436",
    "speaker": "David Carson",
    "name": "Design, discovery and humor",
    "shortsummary": "Great design is a never-ending journey of discovery -- for which it helps to pack a healthy sense of humor. Sociologist and surfer-turned-designer David Carson walks through a gorgeous (and often quite funny) slide deck of his work and found images.",
    "duration": "0:22:39",
    "publishdate": "1/19/2009"
  },
  {
    "rank": 1275,
    "id": "1623",
    "speaker": "Bobby Ghosh",
    "name": "Bobby Ghosh: Why global jihad is losing",
    "shortsummary": "Throughout the history of Islam, says journalist Bobby Ghosh, there have been two sides to jihad: one, internal, a personal struggle to be better, the other external. A small minority (most recently Osama bin Laden) has appropriated the second, using it as an excuse for deadly global violence against \"the West.\" Ghosh suggests that, now that bin Laden's worldwide organization has fragmented, it's time to reclaim the word. <i>(Filmed at TEDxGeorgetown.)</i>",
    "duration": "0:16:31",
    "publishdate": "12/3/2012 16:28:00"
  },
  {
    "rank": 1276,
    "id": "402",
    "speaker": "Stewart Brand",
    "name": "Building a home for the Clock of the Long Now",
    "shortsummary": "Stewart Brand works on the Clock of the Long Now, a timepiece that counts down the next 10,000 years. It's a beautiful project that asks us to think about the far, far future. Here, he discusses a tricky side problem with the Clock: Where can we put it? ",
    "duration": "0:23:23",
    "publishdate": "11/17/2008"
  },
  {
    "rank": 1277,
    "id": "1365",
    "speaker": "Chris Bliss",
    "name": "Chris Bliss: Comedy is translation",
    "shortsummary": "Every act of communication is, in some way, an act of translation. Onstage at TEDxRainier, writer Chris Bliss thinks hard about the way that great comedy can translate deep truths for a mass audience.",
    "duration": "0:16:00",
    "publishdate": "2/21/2012 16:54:00"
  },
  {
    "rank": 1278,
    "id": "354",
    "speaker": "Steven Pinker",
    "name": "Chalking it up to the blank slate",
    "shortsummary": "Steven Pinker's book The Blank Slate argues that all humans are born with some innate traits. Here, Pinker talks about his thesis, and why some people found it incredibly upsetting.",
    "duration": "0:22:42",
    "publishdate": "9/26/2008"
  },
  {
    "rank": 1279,
    "id": "719",
    "speaker": "Asher Hasan",
    "name": "Asher Hasan's message of peace from Pakistan",
    "shortsummary": "One of a dozen Pakistanis who came to TEDIndia despite security hassles entering the country, TED Fellow Asher Hasan shows photos of ordinary Pakistanis that drive home a profound message for citizens of all nations: look beyond disputes, and see the humanity we share.",
    "duration": "0:04:28",
    "publishdate": "12/23/2009"
  },
  {
    "rank": 1280,
    "id": "73",
    "speaker": "Carl Honore",
    "name": "Slowing down in a world built for speed",
    "shortsummary": "Journalist Carl Honore believes the Western world's emphasis on speed erodes health, productivity and quality of life. But there's a backlash brewing, as everyday people start putting the brakes on their all-too-modern lives.",
    "duration": "0:19:15",
    "publishdate": "2/28/2007"
  },
  {
    "rank": 1281,
    "id": "341",
    "speaker": "Jonathan Haidt",
    "name": "The real difference between liberals and conservatives",
    "shortsummary": "Psychologist Jonathan Haidt studies the five moral values that form the basis of our political choices, whether we're left, right or center. In this eye-opening talk, he pinpoints the moral values that liberals and conservatives tend to honor most.",
    "duration": "0:18:42",
    "publishdate": "9/17/2008"
  },
  {
    "rank": 1282,
    "id": "1009",
    "speaker": "Shimon Schocken",
    "name": "Shimon Schocken's rides of hope",
    "shortsummary": "Computer science professor Shimon Schocken is also an avid mountain biker. To share the life lessons he learned while riding, he began an outdoor program with Israel's juvenile inmates and was touched by both their intense difficulties and profound successes. Photographs by Raphael Rabinovitz.",
    "duration": "0:15:46",
    "publishdate": "11/17/2010"
  },
  {
    "rank": 1283,
    "id": "1443",
    "speaker": "Joshua Foer",
    "name": "Joshua Foer: Feats of memory anyone can do",
    "shortsummary": "There are people who can quickly memorize lists of thousands of numbers, the order of all the cards in a deck (or ten!), and much more. Science writer Joshua Foer describes the technique -- called the memory palace -- and shows off its most remarkable feature: anyone can learn how to use it, including him.",
    "duration": "0:20:28",
    "publishdate": "5/10/2012 15:00:00"
  },
  {
    "rank": 1284,
    "id": "689",
    "speaker": "Shashi Tharoor",
    "name": "Shashi Tharoor: Why nations should pursue \"soft\" power",
    "shortsummary": "India is fast becoming a superpower, says Shashi Tharoor -- not just through trade and politics, but through \"soft\" power, its ability to share its culture with the world through food, music, technology, Bollywood. He argues that in the long run it's not the size of the army that matters as much as a country's ability to influence the world's hearts and minds.",
    "duration": "0:17:53",
    "publishdate": "11/30/2009"
  },
  {
    "rank": 1285,
    "id": "222",
    "speaker": "Jill Sobule, Julia Sweeney",
    "name": "The Jill and Julia Show",
    "shortsummary": "Two TED favorites, Jill Sobule and Julia Sweeney, team up for a delightful set that mixes witty songwriting with a little bit of social commentary.",
    "duration": "0:06:14",
    "publishdate": "2/20/2008"
  },
  {
    "rank": 1286,
    "id": "1675",
    "speaker": "Bruce Feiler",
    "name": "Bruce Feiler: Agile programming -- for your family",
    "shortsummary": "Bruce Feiler has a radical idea: To deal with the stress of modern family life, go agile. Inspired by agile software programming, Feiler introduces family practices which encourage flexibility, bottom-up idea flow, constant feedback and accountability. One surprising feature: Kids pick their own punishments.",
    "duration": "0:18:00",
    "publishdate": "2/25/2013 16:00:00"
  },
  {
    "rank": 1287,
    "id": "898",
    "speaker": "Ellen Dunham-Jones",
    "name": "Ellen Dunham-Jones: Retrofitting suburbia",
    "shortsummary": "Ellen Dunham-Jones fires the starting shot for the next 50 years' big sustainable design project: retrofitting suburbia. To come: Dying malls rehabilitated, dead \"big box\" stores re-inhabited, parking lots transformed into thriving wetlands.",
    "duration": "0:19:23",
    "publishdate": "6/29/2010"
  },
  {
    "rank": 1288,
    "id": "90",
    "speaker": "Neil Gershenfeld",
    "name": "The beckoning promise of personal fabrication",
    "shortsummary": "MIT professor Neil Gershenfeld talks about his Fab Lab -- a low-cost lab that lets people build things they need using digital and analog tools. It's a simple idea with powerful results.",
    "duration": "0:17:18",
    "publishdate": "2/19/2007"
  },
  {
    "rank": 1289,
    "id": "515",
    "speaker": "Gregory Stock",
    "name": "How biotech will drive our evolution",
    "shortsummary": "In this prophetic 2003 talk -- just days before Dolly the sheep was stuffed -- biotech ethicist Gregory Stock looked forward to new, more meaningful (and controversial) technologies, like customizable babies, whose adoption might drive human evolution.",
    "duration": "0:17:51",
    "publishdate": "4/14/2009"
  },
  {
    "rank": 1290,
    "id": "851",
    "speaker": "Anil Gupta",
    "name": "Anil Gupta: India's hidden hotbeds of invention",
    "shortsummary": "Anil Gupta is on the hunt for the developing world's unsung inventors -- indigenous entrepreneurs whose ingenuity, hidden by poverty, could change many people's lives. He shows how the Honey Bee Network helps them build the connections they need -- and gain the recognition they deserve.",
    "duration": "0:22:55",
    "publishdate": "5/6/2010"
  },
  {
    "rank": 1291,
    "id": "777",
    "speaker": "Raghava KK",
    "name": "Raghava KK: Five lives of an artist",
    "shortsummary": "With endearing honesty and vulnerability, Raghava KK tells the colorful tale of how art has taken his life to new places, and how life experiences in turn have driven his multiple reincarnations as an artist -- from cartoonist to painter, media darling to social outcast, and son to father.",
    "duration": "0:17:55",
    "publishdate": "2/26/2010"
  },
  {
    "rank": 1292,
    "id": "852",
    "speaker": "Nicholas Christakis",
    "name": "Nicholas Christakis: The hidden influence of social networks",
    "shortsummary": "We're all embedded in vast social networks of friends, family, co-workers and more. Nicholas Christakis tracks how a wide variety of traits -- from happiness to obesity -- can spread from person to person, showing how your location in the network might impact your life in ways you don't even know.",
    "duration": "0:20:59",
    "publishdate": "5/10/2010"
  },
  {
    "rank": 1293,
    "id": "1231",
    "speaker": "Abraham Verghese",
    "name": "Abraham Verghese: A doctor's touch",
    "shortsummary": "Modern medicine is in danger of losing a powerful, old-fashioned tool: human touch. Physician and writer Abraham Verghese describes our strange new world where patients are merely data points, and calls for a return to the traditional one-on-one physical exam.",
    "duration": "0:18:32",
    "publishdate": "9/26/2011"
  },
  {
    "rank": 1294,
    "id": "97",
    "speaker": "Dan Gilbert",
    "name": "Why are we happy? Why aren't we happy?",
    "shortsummary": "Dan Gilbert, author of Stumbling on Happiness, challenges the idea that we'll be miserable if we don't get what we want. Our \"psychological immune system\" lets us feel truly happy even when things don't go as planned. ",
    "duration": "0:21:16",
    "publishdate": "9/26/2006"
  },
  {
    "rank": 1295,
    "id": "345",
    "speaker": "Keith Bellows",
    "name": "Celebrating the camel",
    "shortsummary": "Keith Bellows gleefully outlines the engineering marvels of the camel, a vital creature he calls \"the SUV of the desert.\" Though he couldn't bring a live camel to TED, he gets his camera crew as close as humanly possible to a one-ton beast in full rut.",
    "duration": "0:16:06",
    "publishdate": "9/15/2008"
  },
  {
    "rank": 1296,
    "id": "1000",
    "speaker": "Gero Miesenboeck",
    "name": "Gero Miesenboeck reengineers a brain",
    "shortsummary": "In the quest to map the brain, many scientists have attempted the incredibly daunting task of recording the activity of each neuron. Gero Miesenboeck works backward -- manipulating specific neurons to figure out exactly what they do, through a series of stunning experiments that reengineer the way fruit flies percieve light.",
    "duration": "0:17:34",
    "publishdate": "11/3/2010"
  },
  {
    "rank": 1297,
    "id": "1141",
    "speaker": "Paul Nicklen",
    "name": "Paul Nicklen: Tales of ice-bound wonderlands",
    "shortsummary": "Diving under the Antarctic ice to get close to the much-feared leopard seal, photographer Paul Nicklen found an extraordinary new friend. Share his hilarious, passionate stories of the polar wonderlands, illustrated by glorious images of the animals who live on and under the ice.",
    "duration": "0:17:55",
    "publishdate": "5/9/2011"
  },
  {
    "rank": 1298,
    "id": "1476",
    "speaker": "Beeban Kidron",
    "name": "Beeban Kidron: The shared wonder of film",
    "shortsummary": "Movies have the power to create a shared narrative experience and to shape memories and worldviews. British film director Beeban Kidron invokes iconic film scenes -- from <em>Miracle in Milan</em> to <em>Boyz n the Hood</em> -- as she shows how her group FILMCLUB shares great films with kids.",
    "duration": "0:13:12",
    "publishdate": "6/13/2012 15:03:00"
  },
  {
    "rank": 1299,
    "id": "33",
    "speaker": "Thomas Barnett",
    "name": "The Pentagon's new map for war and peace",
    "shortsummary": "In this bracingly honest talk, international security strategist Thomas Barnett outlines a post-Cold War solution for the foundering U.S. military that is both sensible and breathtaking in its simplicity: Break it in two.",
    "duration": "0:23:43",
    "publishdate": "6/14/2007"
  },
  {
    "rank": 1300,
    "id": "1330",
    "speaker": "Sheena Iyengar",
    "name": "Sheena Iyengar: How to make choosing easier",
    "shortsummary": "We all want customized experiences and products -- but when faced with 700 options, consumers freeze up. With fascinating new research, Sheena Iyengar demonstrates how businesses (and others) can improve the experience of choosing.",
    "duration": "0:16:05",
    "publishdate": "1/19/2012 15:46:00"
  },
  {
    "rank": 1301,
    "id": "1008",
    "speaker": "Denis Dutton",
    "name": "Denis Dutton: A Darwinian theory of beauty",
    "shortsummary": "TED collaborates with animator Andrew Park to illustrate Denis Dutton's provocative theory on beauty -- that art, music and other beautiful things, far from being simply \"in the eye of the beholder,\" are a core part of human nature with deep evolutionary origins.  ",
    "duration": "0:15:33",
    "publishdate": "11/16/2010"
  },
  {
    "rank": 1302,
    "id": "652",
    "speaker": "Chimamanda Ngozi Adichie",
    "name": "Chimamanda Adichie: The danger of a single story",
    "shortsummary": "Our lives, our cultures, are composed of many overlapping stories. Novelist Chimamanda Adichie tells the story of how she found her authentic cultural voice -- and warns that if we hear only a single story about another person or country, we risk a critical misunderstanding.",
    "duration": "0:18:49",
    "publishdate": "10/7/2009"
  },
  {
    "rank": 1303,
    "id": "1095",
    "speaker": "Janna Levin",
    "name": "Janna Levin: The sound the universe makes",
    "shortsummary": "We think of space as a silent place. But physicist Janna Levin says the universe has a soundtrack -- a sonic composition that records some of the most dramatic events in outer space. (Black holes, for instance, bang on spacetime like a drum.) An accessible and mind-expanding soundwalk through the universe.",
    "duration": "0:17:43",
    "publishdate": "3/15/2011"
  },
  {
    "rank": 1304,
    "id": "1433",
    "speaker": "Liz Diller",
    "name": "Liz Diller: A giant bubble for debate",
    "shortsummary": "How do you make a great public space inside a not-so-great building? Liz Diller shares the story of creating a welcoming, lighthearted (even, dare we say it, sexy) addition to the Hirshhorn Museum in Washington, DC. <i>(From The Design Studio session at TED2012, guest-curated by <a href=\"http://www.ted.com/speakers/chee_pearlman.html/\">Chee Pearlman</a> and <a href=\"http://www.ted.com/speakers/david_rockwell.html\">David Rockwell</a>.)</i>",
    "duration": "0:12:06",
    "publishdate": "4/30/2012 15:32:00"
  },
  {
    "rank": 1305,
    "id": "1689",
    "speaker": "David Anderson",
    "name": "David Anderson: Your brain is more than a bag of chemicals",
    "shortsummary": "Modern psychiatric drugs treat the chemistry of the whole brain, but neurobiologist David Anderson believes in a more nuanced view of how the brain functions. He illuminates new research that could lead to targeted psychiatric medications -- that work better and avoid side effects. How's he doing it? For a start, by making a bunch of fruit flies angry. (<em>Filmed at TEDxCaltech.</em>)",
    "duration": "0:15:25",
    "publishdate": "3/12/2013 15:01:00"
  },
  {
    "rank": 1306,
    "id": "28",
    "speaker": "Seth Godin",
    "name": "Sliced bread and other marketing delights",
    "shortsummary": "In a world of too many options and too little time, our obvious choice is to just ignore the ordinary stuff. Marketing guru Seth Godin spells out why, when it comes to getting our attention, bad or bizarre ideas are more successful than boring ones.",
    "duration": "0:17:01",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 1307,
    "id": "1423",
    "speaker": "Taryn Simon",
    "name": "Taryn Simon: The stories behind the bloodlines",
    "shortsummary": "Taryn Simon captures the essence of vast, generation-spanning stories by photographing the descendants of people at the center of the narrative. In this riveting talk she shows a stream of these stories from all over the world, investigating the nature of genealogy and the way our lives are shaped by the interplay of many different forces.",
    "duration": "0:17:59",
    "publishdate": "4/18/2012 15:04:00"
  },
  {
    "rank": 1308,
    "id": "1329",
    "speaker": "Clay Shirky",
    "name": "Clay Shirky: Why SOPA is a bad idea",
    "shortsummary": "What does a bill like PIPA/SOPA mean to our shareable world? At the TED offices, Clay Shirky delivers a proper manifesto -- a call to defend our freedom to create, discuss, link and share, rather than passively consume.",
    "duration": "0:13:59",
    "publishdate": "1/18/2012 17:47:00"
  },
  {
    "rank": 1309,
    "id": "1067",
    "speaker": "Christopher McDougall",
    "name": "Christopher McDougall: Are we born to run?",
    "shortsummary": "Christopher McDougall explores the mysteries of the human desire to run. How did running help early humans survive -- and what urges from our ancient ancestors spur us on today? At TEDxPennQuarter, McDougall tells the story of the marathoner with a heart of gold, the unlikely ultra-runner, and the hidden tribe in Mexico that runs to live. ",
    "duration": "0:15:52",
    "publishdate": "2/3/2011"
  },
  {
    "rank": 1310,
    "id": "8",
    "speaker": "David Rockwell",
    "name": "Building the Ground Zero viewing platform",
    "shortsummary": "In this emotionally charged conversation with journalist Kurt Andersen, designer David Rockwell discusses the process of building a viewing platform at Ground Zero shortly after 9/11.",
    "duration": "0:24:37",
    "publishdate": "6/12/2007"
  },
  {
    "rank": 1311,
    "id": "892",
    "speaker": "Charles Leadbeater",
    "name": "Charles Leadbeater: Education innovation in the slums",
    "shortsummary": "Charles Leadbeater went looking for radical new forms of education -- and found them in the slums of Rio and Kibera, where some of the world's poorest kids are finding transformative new ways to learn. And this informal, disruptive new kind of school, he says, is what all schools need to become.",
    "duration": "0:18:58",
    "publishdate": "6/23/2010"
  },
  {
    "rank": 1312,
    "id": "916",
    "speaker": "Ethan Zuckerman",
    "name": "Ethan Zuckerman: Listening to global voices",
    "shortsummary": "Sure, the web connects the globe, but most of us end up hearing mainly from people just like ourselves. Blogger and technologist Ethan Zuckerman wants to help share the stories of the whole wide world. He talks about clever strategies to open up your Twitter world and read the news in languages you don't even know.",
    "duration": "0:19:45",
    "publishdate": "7/15/2010"
  },
  {
    "rank": 1313,
    "id": "233",
    "speaker": "Dave Eggers",
    "name": "2008 TED Prize wish: Once Upon a School",
    "shortsummary": "Accepting his 2008 TED Prize, author Dave Eggers asks  the TED community to personally, creatively engage with local public schools. With spellbinding eagerness, he talks about how his 826 Valencia tutoring center inspired others around the world to open ",
    "duration": "0:25:35",
    "publishdate": "3/18/2008"
  },
  {
    "rank": 1314,
    "id": "1046",
    "speaker": "Charles Limb",
    "name": "Charles Limb: Your brain on improv",
    "shortsummary": "Musician and researcher Charles Limb wondered how the brain works during musical improvisation -- so he put jazz musicians and rappers in an fMRI to find out. What he and his team found has deep implications for our understanding of creativity of all kinds.",
    "duration": "0:16:31",
    "publishdate": "1/5/2011"
  },
  {
    "rank": 1315,
    "id": "422",
    "speaker": "Steven Strogatz",
    "name": "How things in nature tend to sync up",
    "shortsummary": "Mathematician Steven Strogatz shows how flocks of creatures (like birds, fireflies and fish) manage to synchronize and act as a unit -- when no one's giving orders. The powerful tendency extends into the realm of objects, too.",
    "duration": "0:21:58",
    "publishdate": "12/22/2008"
  },
  {
    "rank": 1316,
    "id": "131",
    "speaker": "Anand Agarawala",
    "name": "BumpTop desktop is a beautiful mess",
    "shortsummary": "Anand Agarawala presents BumpTop, a user interface that takes the usual desktop metaphor to a glorious, 3-D extreme, transforming file navigation into a freewheeling playground of crumpled documents and clipping-covered \"walls.\"",
    "duration": "0:04:39",
    "publishdate": "6/5/2007"
  },
  {
    "rank": 1317,
    "id": "207",
    "speaker": "Paola Antonelli",
    "name": "Treating design as art",
    "shortsummary": "Paola Antonelli, design curator at New York's Museum of Modern Art, wants to spread her appreciation of design -- in all shapes and forms -- around the world.",
    "duration": "0:18:17",
    "publishdate": "1/15/2008"
  },
  {
    "rank": 1318,
    "id": "13",
    "speaker": "Frank Gehry",
    "name": "Nice building. Then what?",
    "shortsummary": "In a wildly entertaining discussion with Richard Saul Wurman, architect Frank Gehry gives TEDsters his take on the power of failure, his recent buildings, and the all-important \"Then what?\" factor. ",
    "duration": "0:22:00",
    "publishdate": "1/17/2008"
  },
  {
    "rank": 1319,
    "id": "1461",
    "speaker": "William Noel",
    "name": "William Noel: Revealing the lost codex of Archimedes",
    "shortsummary": "How do you read a two-thousand-year-old manuscript that has been erased, cut up, written on and painted over? With a powerful particle accelerator, of course! Ancient books curator William Noel tells the fascinating story behind the Archimedes palimpsest, a Byzantine prayer book containing previously-unknown original writings from ancient Greek mathematician Archimedes and others.",
    "duration": "0:14:53",
    "publishdate": "5/29/2012 15:07:00"
  },
  {
    "rank": 1320,
    "id": "196",
    "speaker": "David Pogue",
    "name": "A 4-minute medley on the music wars",
    "shortsummary": "New York Times tech columnist David Pogue performs a satirical mini-medley about iTunes and the downloading wars, borrowing a few notes from Sonny and Cher and the Village People. ",
    "duration": "0:04:12",
    "publishdate": "1/24/2008"
  },
  {
    "rank": 1321,
    "id": "104",
    "speaker": "William McDonough",
    "name": "The wisdom of designing Cradle to Cradle",
    "shortsummary": "Green-minded architect and designer William McDonough asks what our buildings and products would look like if designers took into account \"all children, all species, for all time.\" ",
    "duration": "0:20:05",
    "publishdate": "4/6/2007"
  },
  {
    "rank": 1322,
    "id": "835",
    "speaker": "James Randi",
    "name": "James Randi's fiery takedown of psychic fraud",
    "shortsummary": "Legendary skeptic James Randi takes a fatal dose of homeopathic sleeping pills onstage, kicking off a searing 18-minute indictment of irrational beliefs. He throws out a challenge to the world's psychics: Prove what you do is real, and I'll give you a million dollars. (No takers yet.)",
    "duration": "0:17:19",
    "publishdate": "4/19/2010"
  },
  {
    "rank": 1323,
    "id": "645",
    "speaker": "Parag Khanna",
    "name": "Parag Khanna maps the future of countries ",
    "shortsummary": "Many people think the lines on the map no longer matter, but Parag Khanna says they do. Using maps of the past and present, he explains the root causes of border conflicts worldwide and proposes simple yet cunning solutions for each.",
    "duration": "0:18:53",
    "publishdate": "9/28/2009"
  },
  {
    "rank": 1324,
    "id": "323",
    "speaker": "Spencer Wells",
    "name": "Building a family tree for all humanity",
    "shortsummary": "All humans share some common bits of DNA, passed down to us from our African ancestors. Geneticist Spencer Wells talks about how his Genographic Project will use this shared DNA to figure out how we are -- in all our diversity -- truly connected.",
    "duration": "0:20:53",
    "publishdate": "8/18/2008"
  },
  {
    "rank": 1325,
    "id": "1072",
    "speaker": "Michael Pawlyn",
    "name": "Michael Pawlyn: Using nature's genius in architecture",
    "shortsummary": "How can architects build a new world of sustainable beauty? By learning from nature. At TEDSalon in London, Michael Pawlyn describes three habits of nature that could transform architecture and society: radical resource efficiency, closed loops, and drawing energy from the sun.",
    "duration": "0:13:46",
    "publishdate": "2/10/2011"
  },
  {
    "rank": 1326,
    "id": "406",
    "speaker": "Dan Barber",
    "name": "A surprising parable of foie gras",
    "shortsummary": "At the Taste3 conference, chef Dan Barber tells the story of a small farm in Spain that has found a humane way to produce foie gras. Raising his geese in a natural environment, farmer Eduardo Sousa embodies the kind of food production Barber believes in.",
    "duration": "0:20:24",
    "publishdate": "11/24/2008"
  },
  {
    "rank": 1327,
    "id": "1807",
    "speaker": "Saki Mafundikwa",
    "name": "Saki Mafundikwa: Ingenuity and elegance in ancient African alphabets",
    "shortsummary": "From simple alphabets to secret symbolic languages, graphic designer Saki Mafundikwa celebrates the many forms of written communication across the continent of Africa. He highlights the history and legacy that are embodied in written words and symbols, and urges African designers to draw on these graphic forms for fresh inspiration. It's summed up in his favorite Ghanaian glyph, Sankofa, which means \"return and get it\" -- or \"learn from the past.\"",
    "duration": "0:08:10",
    "publishdate": "8/7/2013 15:35:00"
  },
  {
    "rank": 1328,
    "id": "1172",
    "speaker": "Onyx Ashanti",
    "name": "Onyx Ashanti: This is beatjazz",
    "shortsummary": "Musician and inventor Onyx Ashanti demonstrates \"beatjazz\" -- his music created with two handheld controllers, an iPhone and a mouthpiece, and played with the entire body. At TED's Full Spectrum Auditions, after locking in his beats and loops, he plays a 3-minute song that shares his vision for the future of music.",
    "duration": "0:06:29",
    "publishdate": "6/17/2011"
  },
  {
    "rank": 1329,
    "id": "1114",
    "speaker": "Morgan Spurlock",
    "name": "Morgan Spurlock: The greatest TED Talk ever sold",
    "shortsummary": "With humor and persistence, filmmaker Morgan Spurlock dives into the hidden but influential world of brand marketing, on his quest to make a completely sponsored film about sponsorship. (And yes, onstage naming rights for this talk were sponsored too. By whom and for how much? He'll tell you.)",
    "duration": "0:19:28",
    "publishdate": "4/6/2011"
  },
  {
    "rank": 1330,
    "id": "1398",
    "speaker": "Billy Collins",
    "name": "Billy Collins: Everyday moments, caught in time",
    "shortsummary": "Combining dry wit with artistic depth, Billy Collins shares a project in which several of his poems were turned into delightful animated films in a collaboration with Sundance Channel. Five of them are included in this wonderfully entertaining and moving talk -- and don't miss the hilarious final poem!",
    "duration": "0:15:13",
    "publishdate": "3/23/2012 15:42:00"
  },
  {
    "rank": 1331,
    "id": "1772",
    "speaker": "Lesley Hazleton",
    "name": "Lesley Hazleton: The doubt essential to faith",
    "shortsummary": "When Lesley Hazleton was writing a biography of Muhammad, she was struck by something: The night he received the revelation of the Koran, according to early accounts, his first reaction was doubt, awe, even fear. And yet this experience became the bedrock of his belief. Hazleton calls for a new appreciation of doubt and questioning as the foundation of faith -- and an end to fundamentalism of all kinds.",
    "duration": "0:13:45",
    "publishdate": "6/24/2013 15:29:00"
  },
  {
    "rank": 1332,
    "id": "468",
    "speaker": "Jill Tarter",
    "name": "Why the search for alien intelligence matters (TED Prize winner!)",
    "shortsummary": "The SETI Institute's Jill Tarter makes her TED Prize wish: to accelerate our search for cosmic company. Using a growing array of radio telescopes, she and her team listen for patterns that may be a sign of intelligence elsewhere in the universe.",
    "duration": "0:21:23",
    "publishdate": "2/20/2009"
  },
  {
    "rank": 1333,
    "id": "435",
    "speaker": "Paula Scher",
    "name": "Great design is serious (not solemn)",
    "shortsummary": "Paula Scher looks back at a life in design (she's done album covers, books, the Citibank logo ...) and pinpoints the moment when she started really having fun. Look for gorgeous designs and images from her legendary career. ",
    "duration": "0:21:56",
    "publishdate": "1/16/2009"
  },
  {
    "rank": 1334,
    "id": "1120",
    "speaker": "Sarah Kaminsky",
    "name": "Sarah Kaminsky: My father the forger",
    "shortsummary": "Sarah Kaminsky tells the extraordinary story of her father, Adolfo, and his activity during World War II -- using his ingenuity and talent for forgery to save lives. (This talk from TEDxParis is given in French; it has English subtitles by default.)",
    "duration": "0:14:00",
    "publishdate": "9/7/2011"
  },
  {
    "rank": 1335,
    "id": "272",
    "speaker": "Philip Zimbardo",
    "name": "How ordinary people become monsters ... or heroes ",
    "shortsummary": "Philip Zimbardo knows how easy it is for nice people to turn bad. In this talk, he shares insights and graphic unseen photos from the Abu Ghraib trials. Then he talks about the flip side: how easy it is to be a hero, and how we can rise to the challenge.",
    "duration": "0:23:16",
    "publishdate": "9/23/2008"
  },
  {
    "rank": 1336,
    "id": "294",
    "speaker": "Chris Abani",
    "name": "Telling stories of our shared humanity ",
    "shortsummary": "Chris Abani tells stories of people: People standing up to soldiers. People being compassionate. People being human and reclaiming their humanity. It's \"ubuntu,\" he says: the only way for me to be human is for you to reflect my humanity back at me.",
    "duration": "0:16:14",
    "publishdate": "7/22/2008"
  },
  {
    "rank": 1337,
    "id": "610",
    "speaker": "Willard Wigan",
    "name": "Willard Wigan: Hold your breath for micro-sculpture",
    "shortsummary": "Willard Wigan tells the story of how a difficult and lonely childhood drove him to discover his unique ability -- to create art so tiny that it can't be seen with the naked eye. His slideshow of figures, as seen through a microscope, can only be described as mind-boggling. ",
    "duration": "0:19:43",
    "publishdate": "8/3/2009"
  },
  {
    "rank": 1338,
    "id": "1644",
    "speaker": "Jarrett J. Krosoczka",
    "name": "Jarrett J. Krosoczka: How a boy became an artist",
    "shortsummary": "When Jarrett J. Krosoczka was a kid, he didn't play sports, but he <em>loved</em> art. He paints the funny and touching story of a little boy who pursued a simple passion: to draw and write stories. With the help of a supporting cast of family and teachers, our protagonist grew up to become the successful creator of beloved children's book characters, and a vocal advocate for arts education. <em>(Filmed at TEDxHampshireCollege.)</em>",
    "duration": "0:18:48",
    "publishdate": "1/9/2013 16:04:00"
  },
  {
    "rank": 1339,
    "id": "859",
    "speaker": "William Li",
    "name": "William Li: Can we eat to starve cancer?",
    "shortsummary": "William Li presents a new way to think about treating cancer and other diseases: anti-angiogenesis, preventing the growth of blood vessels that feed a tumor. The crucial first (and best) step: Eating cancer-fighting foods that cut off the supply lines and beat cancer at its own game.",
    "duration": "0:20:02",
    "publishdate": "5/17/2010"
  },
  {
    "rank": 1340,
    "id": "1089",
    "speaker": "Courtney E. Martin",
    "name": "Courtney Martin: Reinventing feminism",
    "shortsummary": "Blogger Courtney Martin examines the perennially loaded word \"feminism\" in this personal and heartfelt talk. She talks through the three essential paradoxes of her generation's quest to define the term for themselves.",
    "duration": "0:11:26",
    "publishdate": "3/8/2011"
  },
  {
    "rank": 1341,
    "id": "1198",
    "speaker": "Paul Bloom",
    "name": "Paul Bloom: The origins of pleasure",
    "shortsummary": "Why do we like an original painting better than a forgery? Psychologist Paul Bloom argues that human beings are essentialists -- that our beliefs about the history of an object change how we experience it, not simply as an illusion, but as a deep feature of what pleasure (and pain) is.",
    "duration": "0:16:17",
    "publishdate": "7/27/2011"
  },
  {
    "rank": 1342,
    "id": "1163",
    "speaker": "Jack Horner",
    "name": "Jack Horner: Building a dinosaur from a chicken ",
    "shortsummary": "Renowned paleontologist Jack Horner has spent his career trying to reconstruct a dinosaur. He's found fossils with extraordinarily well-preserved blood vessels and soft tissues, but never intact DNA. So, in a new approach, he's taking living descendants of the dinosaur (chickens) and genetically engineering them to reactivate ancestral traits — including teeth, tails, and even hands — to make a \"Chickenosaurus\".",
    "duration": "0:16:36",
    "publishdate": "6/7/2011"
  },
  {
    "rank": 1343,
    "id": "926",
    "speaker": "John Delaney",
    "name": "John Delaney: Wiring an interactive ocean",
    "shortsummary": "Oceanographer John Delaney is leading the team that is building an underwater network of high-def cameras and sensors that will turn our ocean into a global interactive lab -- sparking an explosion of rich data about the world below.",
    "duration": "0:20:50",
    "publishdate": "7/28/2010"
  },
  {
    "rank": 1344,
    "id": "51",
    "speaker": "Amory Lovins",
    "name": "We must win the oil endgame",
    "shortsummary": "In this energizing talk, Amory Lovins lays out his simple plan for weaning the US off oil and revitalizing the economy.",
    "duration": "0:19:44",
    "publishdate": "12/11/2007"
  },
  {
    "rank": 1345,
    "id": "126",
    "speaker": "Tierney Thys",
    "name": "Swim with giant sunfish in the open ocean",
    "shortsummary": "Marine biologist Tierney Thys asks us to step into the water to visit the world of the Mola mola, or giant ocean sunfish. Basking, eating jellyfish and getting massages, this behemoth offers clues to life in the open sea.",
    "duration": "0:16:41",
    "publishdate": "5/21/2007"
  },
  {
    "rank": 1346,
    "id": "209",
    "speaker": "Bill Strickland",
    "name": "Rebuilding America, one slide show at a time",
    "shortsummary": "Bill Strickland tells a quiet and astonishing tale of redemption through arts, music, and unlikely partnerships.",
    "duration": "0:35:28",
    "publishdate": "1/20/2008"
  },
  {
    "rank": 1347,
    "id": "84",
    "speaker": "James Nachtwey",
    "name": "TED Prize wish: Share a vital story with the world",
    "shortsummary": "Accepting his 2007 TED Prize, war photographer James Nachtwey shows his life's work and asks TED to help him continue telling the story with innovative, exciting uses of news photography in the digital era. ",
    "duration": "0:21:56",
    "publishdate": "4/3/2007"
  },
  {
    "rank": 1348,
    "id": "301",
    "speaker": "A.J. Jacobs",
    "name": "My year of living biblically",
    "shortsummary": "Speaking at the most recent EG conference, author, philosopher, prankster and journalist A.J. Jacobs talks about the year he spent living biblically -- following the rules in the Bible as literally as possible.",
    "duration": "0:17:40",
    "publishdate": "7/17/2008"
  },
  {
    "rank": 1349,
    "id": "1434",
    "speaker": "Amory Lovins",
    "name": "Amory Lovins: A 40-year plan for energy",
    "shortsummary": "In this intimate talk filmed at TED's offices, energy innovator Amory Lovins shows how to get the US off oil and coal by 2050, $5 trillion cheaper, with no Act of Congress, led by business for profit. The key is integrating all four energy-using sectors\"”and four kinds of innovation.",
    "duration": "0:27:10",
    "publishdate": "5/1/2012 15:30:00"
  },
  {
    "rank": 1350,
    "id": "919",
    "speaker": "Naif Al-Mutawa",
    "name": "Naif Al-Mutawa: Superheroes inspired by Islam",
    "shortsummary": "In \"THE 99,\" Naif Al-Mutawa's new generation of comic book heroes fight more than crime -- they smash stereotypes and battle extremism. Named after the 99 attributes of Allah, his characters reinforce positive messages of Islam and cross cultures to create a new moral framework for confronting evil, even teaming up with the Justice League of America. ",
    "duration": "0:18:22",
    "publishdate": "7/20/2010"
  },
  {
    "rank": 1351,
    "id": "980",
    "speaker": "Natalie Jeremijenko",
    "name": "Natalie Jeremijenko: The art of the eco-mindshift",
    "shortsummary": "Natalie Jeremijenko's unusual lab puts art to work, and addresses environmental woes by combining engineering know-how with public art and a team of volunteers. These real-life experiments include: Walking tadpoles, texting \"fish,\" planting fire-hydrant gardens and more.",
    "duration": "0:19:50",
    "publishdate": "10/14/2010"
  },
  {
    "rank": 1352,
    "id": "87",
    "speaker": "Ze Frank",
    "name": "What's so funny about the Web?",
    "shortsummary": "Performer and web toymaker Ze Frank delivers a hilarious nerdcore standup routine, then tells us what he's seriously passionate about: helping people create and interact using simple, addictive web tools.",
    "duration": "0:18:56",
    "publishdate": "8/25/2006"
  },
  {
    "rank": 1353,
    "id": "1360",
    "speaker": "Simon Berrow",
    "name": "Simon Berrow: How do you save a shark you know nothing about?",
    "shortsummary": "They're the second largest fish in the world, they're almost extinct, and we know almost nothing about them. At TEDxDublin, Simon Berrow describes the fascinating basking shark (\"Great Fish of the Sun\" in Irish), and the exceptional -- and wonderfully low-tech -- ways he's learning enough to save them.",
    "duration": "0:16:46",
    "publishdate": "2/16/2012 15:52:00"
  },
  {
    "rank": 1354,
    "id": "308",
    "speaker": "Billy Graham",
    "name": "Technology, faith and human shortcomings",
    "shortsummary": "Speaking at TED in 1998, Rev. Billy Graham marvels at technology's power to improve lives and change the world -- but says the end of evil, suffering and death will come only after the world accepts Christ. A legendary talk from TED's archives.",
    "duration": "0:26:20",
    "publishdate": "7/16/2008"
  },
  {
    "rank": 1355,
    "id": "472",
    "speaker": "Miru Kim",
    "name": "Making art of New York's urban ruins",
    "shortsummary": "At the 2008 EG Conference, artist Miru Kim talks about her work. Kim explores industrial ruins underneath New York and then photographs herself in them, nude -- to bring these massive, dangerous, hidden spaces into sharp focus.",
    "duration": "0:14:30",
    "publishdate": "2/26/2009"
  },
  {
    "rank": 1356,
    "id": "741",
    "speaker": "David Blaine",
    "name": "David Blaine: How I held my breath for 17 min",
    "shortsummary": "In this highly personal talk from TEDMED, magician and stuntman David Blaine describes what it took to hold his breath underwater for 17 minutes -- a world record (only two minutes shorter than this entire talk!) -- and what his often death-defying work means to him. Warning: do NOT try this at home.",
    "duration": "0:20:19",
    "publishdate": "1/19/2010"
  },
  {
    "rank": 1357,
    "id": "1712",
    "speaker": "Laura Snyder",
    "name": "Laura Snyder: The Philosophical Breakfast Club",
    "shortsummary": "In 1812, four men at Cambridge University met for breakfast. What began as an impassioned meal grew into a new scientific revolution, in which these men -- who called themselves â€œnatural philosophersâ€ until they later coined â€œscientistâ€ -- introduced four major principles into scientific inquiry. Historian and philosopher Laura Snyder tells their intriguing story. ",
    "duration": "0:12:34",
    "publishdate": "4/12/2013 14:59:00"
  },
  {
    "rank": 1358,
    "id": "1004",
    "speaker": "Aaron Huey",
    "name": "Aaron Huey: America's native prisoners of war",
    "shortsummary": "Aaron Huey's effort to photograph poverty in America led him to the Pine Ridge Indian Reservation, where the struggle of the native Lakota people -- appalling, and largely ignored -- compelled him to refocus. Five years of work later, his haunting photos intertwine with a shocking history lesson in this bold, courageous talk from TEDxDU.",
    "duration": "0:15:27",
    "publishdate": "11/10/2010"
  },
  {
    "rank": 1359,
    "id": "199",
    "speaker": "Arthur Benjamin",
    "name": "Lightning calculation and other \"Mathemagic\"",
    "shortsummary": "In a lively show, mathemagician Arthur Benjamin races a team of calculators to figure out 3-digit squares, solves another massive mental equation and guesses a few birthdays. How does he do it? He'll tell you.",
    "duration": "0:15:14",
    "publishdate": "12/13/2007"
  },
  {
    "rank": 1360,
    "id": "6",
    "speaker": "Craig Venter",
    "name": "A voyage of DNA, genes and the sea",
    "shortsummary": "Genomics pioneer Craig Venter takes a break from his epic round-the-world expedition to talk about the millions of genes his team has discovered so far in its quest to map the ocean's biodiversity.",
    "duration": "0:16:51",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 1361,
    "id": "686",
    "speaker": "Devdutt Pattanaik",
    "name": "Devdutt Pattanaik: East vs. West -- the myths that mystify",
    "shortsummary": "Devdutt Pattanaik takes an eye-opening look at the myths of India and of the West -- and shows how these two fundamentally different sets of beliefs about God, death and heaven help us consistently misunderstand one another.",
    "duration": "0:18:26",
    "publishdate": "11/19/2009"
  },
  {
    "rank": 1362,
    "id": "1402",
    "speaker": "Regina Dugan",
    "name": "Regina Dugan: From mach-20 glider to humming bird drone",
    "shortsummary": "What would you attempt to do if you knew you could not fail? asks Regina Dugan, then director of DARPA, the Defense Advanced Research Projects Agency. In this breathtaking talk she describes some of the extraordinary projects -- a robotic hummingbird, a prosthetic arm controlled by thought, and, well, the internet -- that her agency has created by not worrying that they might fail. (Followed by a Q&A with TED's Chris Anderson)",
    "duration": "0:25:01",
    "publishdate": "3/27/2012 15:03:00"
  },
  {
    "rank": 1363,
    "id": "688",
    "speaker": "Mallika Sarabhai",
    "name": "Mallika Sarabhai: Dance to change the world",
    "shortsummary": "At TEDIndia, Mallika Sarabhai, a dancer/actor/politician, tells a   transformative story in dance -- and argues that the arts may be the   most powerful way to effect change, whether political, social or   personal.",
    "duration": "0:16:52",
    "publishdate": "11/26/2009"
  },
  {
    "rank": 1364,
    "id": "114",
    "speaker": "Tom Rielly",
    "name": "A comic send-up of TED2006",
    "shortsummary": "Satirist Tom Rielly delivers a wicked parody of the 2006 TED conference, taking down the $100 laptop, the plight of the polar bear, and people who mention, one too many times, that they work at Harvard. Watch for a special moment between Tom and Al Gore.",
    "duration": "0:19:55",
    "publishdate": "4/16/2007"
  },
  {
    "rank": 1365,
    "id": "677",
    "speaker": "Robert Thurman",
    "name": " Robert Thurman: Expanding your circle of compassion",
    "shortsummary": "It‚Äôs hard to always show compassion -- even to the people we love, but Robert Thurman asks that we develop compassion for our enemies. He prescribes a seven-step meditation exercise to extend compassion beyond our inner circle.",
    "duration": "0:18:07",
    "publishdate": "10/31/2008"
  },
  {
    "rank": 1366,
    "id": "1610",
    "speaker": "Munir Virani",
    "name": "Munir Virani: Why I love vultures",
    "shortsummary": "As natural garbage collectors, vultures are vital to our ecosystem -- so why all the bad press? Why are so many in danger of extinction? Raptor biologist Munir Virani says we need to pay more attention to these unique and misunderstood creatures, to change our perception and save the vultures.",
    "duration": "0:06:41",
    "publishdate": "11/29/2012 16:02:00"
  },
  {
    "rank": 1367,
    "id": "38",
    "speaker": "Ray Kurzweil",
    "name": "How technology's accelerating power will transform us",
    "shortsummary": "Inventor, entrepreneur and visionary Ray Kurzweil explains in abundant, grounded detail why, by the 2020s, we will have reverse-engineered the human brain and nanobots will be operating your consciousness.",
    "duration": "0:22:56",
    "publishdate": "11/14/2006"
  },
  {
    "rank": 1368,
    "id": "189",
    "speaker": "Sherwin Nuland",
    "name": "My history of electroshock therapy",
    "shortsummary": "Surgeon and author Sherwin Nuland discusses the development of electroshock therapy as a cure for severe, life-threatening depression -- including his own. It's a moving and heartfelt talk about relief, redemption and second chances.",
    "duration": "0:22:18",
    "publishdate": "10/30/2007"
  },
  {
    "rank": 1369,
    "id": "1722",
    "speaker": "Miranda Wang and Jeanny Yao",
    "name": "Two young scientists break down plastics with bacteria",
    "shortsummary": "Once it's created, plastic (almost) never dies. While in 12th grade Miranda Wang and Jeanny Yao went in search of a new bacteria to biodegrade plastic -- specifically by breaking down phthalates, a harmful plasticizer. They found an answer surprisingly close to home.",
    "duration": "0:09:20",
    "publishdate": "7/18/2013 15:16:00"
  },
  {
    "rank": 1370,
    "id": "98",
    "speaker": "Richard Dawkins",
    "name": "The universe is queerer than we can suppose",
    "shortsummary": "Biologist Richard Dawkins makes a case for \"thinking the improbable\" by looking at how the human frame of reference limits our understanding of the universe.",
    "duration": "0:21:56",
    "publishdate": "9/12/2006"
  },
  {
    "rank": 1371,
    "id": "887",
    "speaker": "Cameron Herold",
    "name": "Cameron Herold: Let's raise kids to be entrepreneurs",
    "shortsummary": "Bored in school, failing classes, at odds with peers: This child might be an entrepreneur, says Cameron Herold. At TEDxEdmonton, he makes the case for parenting and education that helps would-be entrepreneurs flourish -- as kids and as adults.",
    "duration": "0:21:24",
    "publishdate": "6/17/2010"
  },
  {
    "rank": 1372,
    "id": "141",
    "speaker": "Bill Stone",
    "name": "Journey to the center of the Earth ... and beyond!",
    "shortsummary": "Bill Stone, a maverick cave explorer who has plumbed Earth's deepest abysses, discusses his efforts to mine lunar ice for space fuel and to build an autonomous robot for studying Jupiter's moon Europa.",
    "duration": "0:17:43",
    "publishdate": "6/27/2007"
  },
  {
    "rank": 1373,
    "id": "371",
    "speaker": "Garrett Lisi",
    "name": "A beautiful new theory of everything",
    "shortsummary": "Physicist and surfer Garrett Lisi presents a controversial new model of the universe that -- just maybe -- answers all the big questions. If nothing else, it's the most beautiful 8-dimensional model of elementary particles and forces you've ever seen.",
    "duration": "0:21:26",
    "publishdate": "10/14/2008"
  },
  {
    "rank": 1374,
    "id": "489",
    "speaker": "Bruce McCall",
    "name": "Nostalgia for a future that never happened",
    "shortsummary": "Bruce McCall paints a future that never happened -- full of flying cars, polo-playing tanks and the RMS Tyrannic, \"The Biggest Thing in All the World.\" At Serious Play '08, he narrates a brisk and funny slideshow of his faux-nostalgic art.",
    "duration": "0:13:01",
    "publishdate": "3/19/2009"
  },
  {
    "rank": 1375,
    "id": "263",
    "speaker": "Mark Bittman",
    "name": "What's wrong with what we eat",
    "shortsummary": "In this fiery and funny talk, New York Times food writer Mark Bittman weighs in on what's wrong with the way we eat now (too much meat, too few plants; too much fast food, too little home cooking), and why it's putting the entire planet at risk.",
    "duration": "0:20:08",
    "publishdate": "5/15/2008"
  },
  {
    "rank": 1376,
    "id": "155",
    "speaker": "Chris Abani",
    "name": "Learning the stories of Africa",
    "shortsummary": "In this deeply personal talk, Nigerian writer Chris Abani says that \"what we know about how to be who we are\" comes from stories. He searches for the heart of Africa through its poems and narrative, including his own.",
    "duration": "0:17:36",
    "publishdate": "8/9/2007"
  },
  {
    "rank": 1377,
    "id": "1625",
    "speaker": "Lemon Andersen",
    "name": "Lemon Andersen performs \"Please don't take my Air Jordans\"",
    "shortsummary": "Would you kill for a pair of Air Jordans? Lemon Andersen spins a tale of someone who did, reciting a poem by Reg E. Gaines. These verses taught Lemon that poetry could be about more than self-expression, and could sound like music when given rhythm and infused with the grit of the New York streets around him.",
    "duration": "0:08:55",
    "publishdate": "12/7/2012 16:02:00"
  },
  {
    "rank": 1378,
    "id": "316",
    "speaker": "Jonathan Harris",
    "name": "The art of collecting stories",
    "shortsummary": "At the EG conference in December 2007, artist Jonathan Harris discusses his latest projects, which involve collecting stories: his own, strangers', and stories collected from the Internet, including his amazing \"We Feel Fine.\"",
    "duration": "0:20:29",
    "publishdate": "7/24/2008"
  },
  {
    "rank": 1379,
    "id": "1687",
    "speaker": "Shane Koyczan",
    "name": "Shane Koyczan: \"To This Day\" ... for the bullied and beautiful",
    "shortsummary": "By turn hilarious and haunting, poet Shane Koyczan puts his finger on the pulse of what it's like to be young and â€¦ different. \"To This Day,\" his spoken-word poem about bullying, captivated millions as a viral video (created, crowd-source style, by 80 animators). Here, he gives a glorious, live reprise with backstory and violin accompaniment by Hannah Epperson.",
    "duration": "0:12:03",
    "publishdate": "3/8/2013 16:01:00"
  },
  {
    "rank": 1380,
    "id": "948",
    "speaker": "Rachel Sussman",
    "name": "Rachel Sussman: The world's oldest living things",
    "shortsummary": "Rachel Sussman shows photographs of the world's oldest continuously living organisms -- from 2,000-year-old brain coral off Tobago's coast to an \"underground forest\" in South Africa that has lived since before the dawn of agriculture.",
    "duration": "0:14:08",
    "publishdate": "9/3/2010"
  },
  {
    "rank": 1381,
    "id": "1135",
    "speaker": "Arvind Gupta",
    "name": "Arvind Gupta: Turning trash into toys for learning",
    "shortsummary": "At the INK Conference, Arvind Gupta shares simple yet stunning plans for turning trash into seriously entertaining, well-designed toys that kids can build themselves -- while learning basic principles of science and design. ",
    "duration": "0:15:30",
    "publishdate": "4/29/2011"
  },
  {
    "rank": 1382,
    "id": "510",
    "speaker": "Emily Levine",
    "name": "A trickster's theory of everything",
    "shortsummary": "Philosopher-comedian Emily Levine talks (hilariously) about science, math, society and the way everything connects. She's a brilliant trickster, poking holes in our fixed ideas and bringing hidden truths to light. Settle in and let her ping your brain.",
    "duration": "0:22:52",
    "publishdate": "4/9/2009"
  },
  {
    "rank": 1383,
    "id": "374",
    "speaker": "John Hodgman",
    "name": "A brief digression on matters of lost time",
    "shortsummary": "Humorist John Hodgman rambles through a new story about aliens, physics, time, space and the way all of these somehow contribute to a sweet, perfect memory of falling in love. ",
    "duration": "0:16:40",
    "publishdate": "10/21/2008"
  },
  {
    "rank": 1384,
    "id": "959",
    "speaker": "Caroline Phillips",
    "name": "Caroline Phillips: Hurdy-gurdy for beginners",
    "shortsummary": "Caroline Phillips cranks out tunes on a seldom-heard folk instrument: the hurdy-gurdy, a.k.a. the wheel fiddle. A searching, Basque melody follows her fun lesson on its unique anatomy and 1,000-year history.",
    "duration": "0:05:41",
    "publishdate": "9/17/2010"
  },
  {
    "rank": 1385,
    "id": "1246",
    "speaker": "Pamela Meyer",
    "name": "Pamela Meyer: How to spot a liar",
    "shortsummary": "On any given day we're lied to from 10 to 200 times, and the clues to detect those lie can be subtle and counter-intuitive. Pamela Meyer, author of <em>Liespotting,</em> shows the manners and \"hotspots\" used by those trained to recognize deception -- and she argues honesty is a value worth preserving.",
    "duration": "0:18:50",
    "publishdate": "10/13/2011"
  },
  {
    "rank": 1386,
    "id": "18",
    "speaker": "Janine Benyus",
    "name": "12 sustainable design ideas from nature",
    "shortsummary": "In this inspiring talk about recent developments in biomimicry, Janine Benyus provides heartening examples of ways in which nature is already influencing the products and systems we build.",
    "duration": "0:23:19",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 1387,
    "id": "1594",
    "speaker": "Heather Brooke",
    "name": "Heather Brooke: My battle to expose government corruption",
    "shortsummary": "Our leaders need to be held accountable, says journalist Heather Brooke. And she should know: Brooke uncovered the British Parliamentary financial expenses that led to a major political scandal in 2009. She urges us to ask our leaders questions through platforms like Freedom of Information requests -- and to finally get some answers.",
    "duration": "0:18:57",
    "publishdate": "10/18/2012 15:02:00"
  },
  {
    "rank": 1388,
    "id": "1440",
    "speaker": "Michael Tilson Thomas",
    "name": "Michael Tilson Thomas: Music and emotion through time ",
    "shortsummary": "In this epic overview, Michael Tilson Thomas traces the development of classical music through the development of written notation, the record, and the re-mix.",
    "duration": "0:20:13",
    "publishdate": "5/7/2012 14:59:00"
  },
  {
    "rank": 1389,
    "id": "1221",
    "speaker": "Misha Glenny",
    "name": "Misha Glenny: Hire the hackers!",
    "shortsummary": "Despite multibillion-dollar investments in cybersecurity, one of its root problems has been largely ignored: who are the people who write malicious code? Underworld investigator Misha Glenny profiles several convicted coders from around the world and reaches a startling conclusion.",
    "duration": "0:18:39",
    "publishdate": "9/13/2011"
  },
  {
    "rank": 1390,
    "id": "64",
    "speaker": "Eve Ensler",
    "name": "Finding happiness in body and soul",
    "shortsummary": "Eve Ensler, creator of The Vagina Monologues, shares how a discussion about menopause with her friends led to talking about all sorts of sexual acts onstage, waging a global campaign to end violence toward women and finding her own happiness.",
    "duration": "0:20:25",
    "publishdate": "9/6/2006"
  },
  {
    "rank": 1391,
    "id": "477",
    "speaker": "Mike Rowe",
    "name": "Celebrating work -- all kinds of work",
    "shortsummary": "Mike Rowe, the host of \"Dirty Jobs,\" tells some compelling (and horrifying) real-life job stories. Listen for his insights and observations about the nature of hard work, and how it's been unjustifiably degraded in society today.",
    "duration": "0:20:02",
    "publishdate": "3/5/2009"
  },
  {
    "rank": 1392,
    "id": "833",
    "speaker": "Edith Widder",
    "name": "Edith Widder: Glowing life in an underwater world",
    "shortsummary": "Some 80 to 90 percent of undersea creatures make light -- and we know very little about how or why. Bioluminescence expert Edith Widder explores this glowing, sparkling, luminous world, sharing glorious images and insight into the unseen depths (and brights) of the ocean.",
    "duration": "0:17:19",
    "publishdate": "4/19/2010"
  },
  {
    "rank": 1393,
    "id": "751",
    "speaker": "Eve Ensler",
    "name": "Eve Ensler: Embrace your inner girl",
    "shortsummary": "In this passionate talk, Eve Ensler declares that there is a girl cell in us all -- a cell that we have all been taught to suppress. She tells heartfelt stories of girls around the world who have overcome shocking adversity and violence to reveal the astonishing strength of being a girl. ",
    "duration": "0:19:54",
    "publishdate": "1/27/2010"
  },
  {
    "rank": 1394,
    "id": "469",
    "speaker": "Ed Ulbrich",
    "name": "How Benjamin Button got his face",
    "shortsummary": "Ed Ulbrich, the digital-effects guru from Digital Domain, explains the Oscar-winning technology that allowed his team to digitally create the older versions of Brad Pitt's face for \"The Curious Case of Benjamin Button.\"",
    "duration": "0:18:07",
    "publishdate": "2/23/2009"
  },
  {
    "rank": 1395,
    "id": "1062",
    "speaker": "Bruce Feiler",
    "name": "Bruce Feiler: The council of dads",
    "shortsummary": "Diagnosed with cancer, Bruce Feiler worried first about his young family. So -- as he shares in this funny, rambling and ultimately thoughtful talk -- he asked his closest friends to become a \"council of dads,\" bringing their own lifetimes of wisdom to advise his twin daughters as they grow.",
    "duration": "0:20:33",
    "publishdate": "1/27/2011"
  },
  {
    "rank": 1396,
    "id": "359",
    "speaker": "Liz Diller",
    "name": "Architecture is a special effects machine",
    "shortsummary": "In this engrossing EG talk, architect Liz Diller shares her firm DS+R's more unusual work, including the Blur Building, whose walls are made of fog, and the revamped Alice Tully Hall, which is wrapped in glowing wooden skin.",
    "duration": "0:19:24",
    "publishdate": "10/2/2008"
  },
  {
    "rank": 1397,
    "id": "60",
    "speaker": "Anna Deavere Smith",
    "name": "Four American characters",
    "shortsummary": "Writer and actor Anna Deavere Smith gives life to author Studs Terkel, convict Paulette Jenkins, a Korean shopkeeper and a bull rider, excerpts from her solo show \"On the Road: A Search for American Character.\"",
    "duration": "0:23:05",
    "publishdate": "2/9/2007"
  },
  {
    "rank": 1398,
    "id": "1494",
    "speaker": "Elyn Saks",
    "name": "Elyn Saks: A tale of mental illness -- from the inside",
    "shortsummary": "Is it okay if I totally trash your office? It's a question Elyn Saks once asked her doctor, and it wasn't a joke. A legal scholar, in 2007 Saks came forward with her own story of schizophrenia, controlled by drugs and therapy but ever-present. In this powerful talk, she asks us to see people with mental illness clearly, honestly and compassionately.",
    "duration": "0:14:52",
    "publishdate": "6/29/2012 13:36:00"
  },
  {
    "rank": 1399,
    "id": "1690",
    "speaker": "Stewart Brand",
    "name": "Stewart Brand: The dawn of de-extinction. Are you ready?",
    "shortsummary": "Throughout humankind's history, we've driven species after species extinct: the passenger pigeon, the Eastern cougar, the dodo ... But now, says Stewart Brand, we have the technology (and the biology) to bring back species that humanity wiped out. So -- should we? Which ones? He asks a big question whose answer is closer than you may think.",
    "duration": "0:18:24",
    "publishdate": "3/13/2013 15:07:00"
  },
  {
    "rank": 1400,
    "id": "495",
    "speaker": "David Pogue",
    "name": "Cool new things you can do with your mobile phone",
    "shortsummary": "In this engaging talk from the EG'08 conference, New York Times tech columnist David Pogue rounds up some handy cell phone tools and services that can boost your productivity and lower your bills (and your blood pressure).",
    "duration": "0:27:03",
    "publishdate": "3/25/2009"
  },
  {
    "rank": 1401,
    "id": "488",
    "speaker": "Adam Savage",
    "name": "My quest for the dodo bird, and other obsessions",
    "shortsummary": "At EG'08, Adam Savage talks about his fascination with the dodo bird, and how it led him on a strange and surprising double quest. It's an entertaining adventure through the mind of a creative obsessive.",
    "duration": "0:15:38",
    "publishdate": "3/18/2009"
  },
  {
    "rank": 1402,
    "id": "729",
    "speaker": "Herbie Hancock",
    "name": "Herbie Hancock's all-star set",
    "shortsummary": "Legendary jazz musician Herbie Hancock delivers a stunning performance alongside two old friends -- past drummer for the Headhunters, Harvey Mason, and bassist Marcus Miller. Listen to the end to hear them sweeten the classic \"Watermelon Man.\"",
    "duration": "0:25:05",
    "publishdate": "1/8/2010"
  },
  {
    "rank": 1403,
    "id": "433",
    "speaker": "Peter Reinhart",
    "name": "The art of baking bread",
    "shortsummary": "Batch to batch, crust to crust ... In tribute to the beloved staple food, baking master Peter Reinhart reflects on the cordial couplings (wheat and yeast, starch and heat) that give us our daily bread. Try not to eat a slice.",
    "duration": "0:15:34",
    "publishdate": "1/14/2009"
  },
  {
    "rank": 1404,
    "id": "633",
    "speaker": "Misha Glenny",
    "name": " Misha Glenny investigates global crime networks",
    "shortsummary": "Journalist Misha Glenny spent several years in a courageous investigation of  organized crime networks worldwide, which have grown to an estimated 15% of the global economy. From the Russian mafia, to giant drug cartels, his sources include not just intelligence and law enforcement officials but criminal insiders.",
    "duration": "0:19:30",
    "publishdate": "9/14/2009"
  },
  {
    "rank": 1405,
    "id": "1168",
    "speaker": "Daniel Kraft",
    "name": "Daniel Kraft: Medicine's future? There's an app for that",
    "shortsummary": "At TEDxMaastricht, Daniel Kraft offers a fast-paced look at the next few years of innovations in medicine, powered by new tools, tests and apps that bring diagnostic information right to the patient's bedside.",
    "duration": "0:18:21",
    "publishdate": "6/13/2011"
  },
  {
    "rank": 1406,
    "id": "334",
    "speaker": "Einstein the Parrot",
    "name": "Talking and squawking TED2006",
    "shortsummary": "This whimsical wrap-up of TED2006 -- presented by Einstein, the African grey parrot, and her trainer, Stephanie White -- simply tickles. Watch for the moment when Einstein has a moment with Al Gore.",
    "duration": "0:05:48",
    "publishdate": "8/29/2008"
  },
  {
    "rank": 1407,
    "id": "470",
    "speaker": "Charles Moore",
    "name": "Sailing the Great Pacific Garbage Patch",
    "shortsummary": "Capt. Charles Moore of the Algalita Marine Research Foundation first discovered the Great Pacific Garbage Patch -- an endless floating waste of plastic trash. Now he's drawing attention to the growing, choking problem of plastic debris in our seas.",
    "duration": "0:07:20",
    "publishdate": "2/24/2009"
  },
  {
    "rank": 1408,
    "id": "210",
    "speaker": "Alison Jackson",
    "name": "A surprising look at celebrity",
    "shortsummary": "By making photographs that seem to show our favorite celebs (Diana, Elton John) doing what we really, secretly, want to see them doing, Alison Jackson explores our desire to get personal with celebs. Contains graphic images.",
    "duration": "0:17:36",
    "publishdate": "1/28/2008"
  },
  {
    "rank": 1409,
    "id": "346",
    "speaker": "Brewster Kahle",
    "name": "A digital library, free to the world",
    "shortsummary": "Brewster Kahle is building a truly huge digital library -- every book ever published, every movie ever released, all the strata of web history ... It's all free to the public -- unless someone else gets to it first.",
    "duration": "0:20:06",
    "publishdate": "9/10/2008"
  },
  {
    "rank": 1410,
    "id": "743",
    "speaker": "Ravin Agrawal",
    "name": "Ravin Agrawal: 10 young Indian artists to watch",
    "shortsummary": "Collector Ravin Agrawal delivers a glowing introduction to 10 of India's most exciting young contemporary artists. Working in a variety of media, each draws on their local culture for inspiration.",
    "duration": "0:06:34",
    "publishdate": "1/20/2010"
  },
  {
    "rank": 1411,
    "id": "634",
    "speaker": "Bjarke Ingels",
    "name": "Bjarke Ingels: 3 warp-speed architecture tales",
    "shortsummary": "Danish architect Bjarke Ingels rockets through photo/video-mingled stories of his eco-flashy designs. His buildings not only look like nature -- they act like nature: blocking the wind, collecting solar energy -- and creating stunning views.",
    "duration": "0:18:14",
    "publishdate": "9/15/2009"
  },
  {
    "rank": 1412,
    "id": "347",
    "speaker": "Carmen Agra Deedy",
    "name": "Spinning a story of Mama",
    "shortsummary": "Storyteller Carmen Agra Deedy spins a funny, wise and luminous tale of parents and kids, starring her Cuban mother. Settle in and enjoy the ride -- Mama's driving!",
    "duration": "0:23:34",
    "publishdate": "9/12/2008"
  },
  {
    "rank": 1413,
    "id": "1539",
    "speaker": "Aman Mojadidi",
    "name": "A sense of humor about Afghanistan? Artist Aman Mojadidi shows how",
    "shortsummary": "Afghan-American artist Aman Mojadidi calls himself \"Afghan by blood, redneck by the grace of god.\" Playing off his two identities, the TED Fellow's bold, funny, thought-provoking artwork explores jihad, gangsterism, consumers and corruption in modern Afghanistan.  ",
    "duration": "0:04:29",
    "publishdate": "8/8/2012 15:23:00"
  },
  {
    "rank": 1414,
    "id": "973",
    "speaker": "Barbara Block",
    "name": "Barbara Block: Tagging tuna in the deep ocean",
    "shortsummary": "Tuna are ocean athletes -- fast, far-ranging predators whose habits we're just beginning to understand. Marine biologist Barbara Block fits tuna with tracking tags (complete with transponders) that record unprecedented amounts of data about these gorgeous, threatened fish and the ocean habitats they move through.",
    "duration": "0:20:06",
    "publishdate": "10/6/2010"
  },
  {
    "rank": 1415,
    "id": "1169",
    "speaker": "Shea Hembrey",
    "name": "Shea Hembrey: How I became 100 artists",
    "shortsummary": "How do you stage an international art show with work from 100 different artists? If you're Shea Hembrey, you invent all of the artists and artwork yourself -- from large-scale outdoor installations to tiny paintings drawn with a single-haired brush. Watch this funny, mind-bending talk to see the explosion of creativity and diversity of skills a single artist is capable of.",
    "duration": "0:16:48",
    "publishdate": "6/14/2011"
  },
  {
    "rank": 1416,
    "id": "400",
    "speaker": "Ursus Wehrli",
    "name": "Tidying up art",
    "shortsummary": "Ursus Wehrli shares his vision for a cleaner, more organized, tidier form of art -- by deconstructing the paintings of modern masters into their component pieces, sorted by color and size.",
    "duration": "0:15:57",
    "publishdate": "11/13/2008"
  },
  {
    "rank": 1417,
    "id": "297",
    "speaker": "Rick Smolan",
    "name": "A girl, a photograph, a homecoming",
    "shortsummary": "Photographer Rick Smolan tells the unforgettable story of a young Amerasian girl, a fateful photograph, and an adoption saga with a twist.",
    "duration": "0:25:07",
    "publishdate": "7/2/2008"
  },
  {
    "rank": 1418,
    "id": "27",
    "speaker": "Ross Lovegrove",
    "name": "The power and beauty of organic design",
    "shortsummary": "Designer Ross Lovegrove expounds his philosophy of \"fat-free\" design and offers insight into several of his extraordinary products, including the Ty Nant water bottle and the Go chair. ",
    "duration": "0:19:30",
    "publishdate": "8/15/2006"
  },
  {
    "rank": 1419,
    "id": "426",
    "speaker": "Kary Mullis",
    "name": "Celebrating the scientific experiment",
    "shortsummary": "Biochemist Kary Mullis talks about the basis of modern science: the experiment. Sharing tales from the 17th century and from his own backyard-rocketry days, Mullis celebrates the curiosity, inspiration and rigor of good science in all its forms.",
    "duration": "0:29:32",
    "publishdate": "1/5/2009"
  },
  {
    "rank": 1420,
    "id": "883",
    "speaker": "David Byrne",
    "name": "David Byrne: How architecture helped music evolve",
    "shortsummary": "As his career grew, David Byrne went from playing CBGB to Carnegie Hall. He asks: Does the venue make the music? From outdoor drumming to Wagnerian operas to arena rock, he explores how context has pushed musical innovation.",
    "duration": "0:17:47",
    "publishdate": "6/11/2010"
  },
  {
    "rank": 1421,
    "id": "573",
    "speaker": "Jane Poynter",
    "name": "Jane Poynter: Life in Biosphere 2",
    "shortsummary": "Jane Poynter tells her story of living two years and 20 minutes in Biosphere 2 -- an experience that provoked her to explore how we might sustain life in the harshest of environments. This is the first TED talk drawn from an independently organized TEDx event, held at the University of Southern California.",
    "duration": "0:15:53",
    "publishdate": "6/15/2009"
  },
  {
    "rank": 1422,
    "id": "842",
    "speaker": "Kavita Ramdas",
    "name": "Kavita Ramdas: Radical women, embracing tradition ",
    "shortsummary": "Investing in women can unlock infinite potential around the globe. But how can women walk the line between Western-style empowerment and traditional culture? Kavita Ramdas of the Global Fund for Women talks about three encounters with powerful women who fight to make the world better -- while preserving the traditions that sustain them.",
    "duration": "0:23:38",
    "publishdate": "4/26/2010"
  },
  {
    "rank": 1423,
    "id": "738",
    "speaker": "Charles Fleischer",
    "name": "Charles Fleischer insists: All things are Moleeds",
    "shortsummary": "In a presentation that can only be described as epic, comedian Charles Fleischer delivers a hysterical send-up of a time-honored TED theme: the map. Geometry, numbers, charts and stamp art also factor in (somehow), as he weaves together a unique theory of everything called \"Moleeds.\"",
    "duration": "0:18:03",
    "publishdate": "1/15/2010"
  },
  {
    "rank": 1424,
    "id": "350",
    "speaker": "Caleb Chung",
    "name": "Come play with Pleo the dinosaur",
    "shortsummary": "Pleo the robot dinosaur acts like a living pet -- exploring, cuddling, playing, reacting and learning. Inventor Caleb Chung talks about Pleo and his wild toy career at EG07, on the week that Pleo shipped to stores for the first time.",
    "duration": "0:18:27",
    "publishdate": "9/25/2008"
  },
  {
    "rank": 1425,
    "id": "231",
    "speaker": "Frank Gehry",
    "name": "From 1990, defending a vision for architecture",
    "shortsummary": "Before he was a legend, architect Frank Gehry takes a whistlestop tour of his early work, from his house in Venice Beach to the American Center in Paris, which was under construction (and much on his mind) when he gave this talk.",
    "duration": "0:44:38",
    "publishdate": "3/13/2008"
  },
  {
    "rank": 1426,
    "id": "1289",
    "speaker": "Annie Murphy Paul",
    "name": "Annie Murphy Paul: What we learn before we're born",
    "shortsummary": "Pop quiz: When does learning begin? Answer: Before we are born. Science writer Annie Murphy Paul talks through new research that shows how much we learn in the womb -- from the lilt of our native language to our soon-to-be-favorite foods.",
    "duration": "0:16:46",
    "publishdate": "11/29/2011"
  },
  {
    "rank": 1427,
    "id": "413",
    "speaker": "David Holt",
    "name": "The stories and song of Appalachia",
    "shortsummary": "Folk musician and storyteller David Holt plays the banjo and shares photographs and old wisdom from the Appalachian Mountains. He also demonstrates some unusual instruments like the mouth bow -- and a surprising electric drum kit he calls \"thunderwear.\"",
    "duration": "0:25:17",
    "publishdate": "12/7/2008"
  },
  {
    "rank": 1428,
    "id": "363",
    "speaker": "Doris Kearns Goodwin",
    "name": "Learning from past presidents in moments of crisis",
    "shortsummary": "Historian Doris Kearns Goodwin talks about what we can learn from American presidents, including Abraham Lincoln and Lyndon Johnson. Then she shares a moving memory of her own father, and of their shared love of baseball.",
    "duration": "0:18:48",
    "publishdate": "10/7/2008"
  },
  {
    "rank": 1429,
    "id": "198",
    "speaker": "Ron Eglash",
    "name": "African fractals, in buildings and braids",
    "shortsummary": "'I am a mathematician, and I would like to stand on your roof.' That is how Ron Eglash greeted many African families he met while researching the fractal patterns he'd noticed in villages across the continent.",
    "duration": "0:16:57",
    "publishdate": "11/29/2007"
  },
  {
    "rank": 1430,
    "id": "105",
    "speaker": "Jeff Bezos",
    "name": "After the gold rush, there's innovation ahead",
    "shortsummary": "The dot-com boom and bust is often compared to the Gold Rush. But Amazon.com founder Jeff Bezos says it's more like the early days of the electric industry.",
    "duration": "0:17:11",
    "publishdate": "4/9/2007"
  },
  {
    "rank": 1431,
    "id": "1296",
    "speaker": "Cheryl Hayashi",
    "name": "Cheryl Hayashi: The magnificence of spider silk",
    "shortsummary": "Cheryl Hayashi studies spider silk, one of nature's most high-performance materials. Each species of spider can make up to 7 very different kinds of silk. How do they do it? Hayashi explains at the DNA level -- then shows us how this super-strong, super-flexible material can inspire.",
    "duration": "0:14:28",
    "publishdate": "12/7/2011"
  },
  {
    "rank": 1432,
    "id": "1639",
    "speaker": "Don Levy",
    "name": "Don Levy: A cinematic journey through visual effects",
    "shortsummary": "It's been 110 years since Georges MéliÃ¨s sent a spaceship slamming into the eye of the man on the moon. So how far have visual effects come since then? Working closely with the Academy of Motion Picture Arts and Sciences, Don Levy takes us on a visual journey through special effects, from the fakery of early technology to the seamless marvels of modern filmmaking.",
    "duration": "0:06:54",
    "publishdate": "1/4/2013 16:02:00"
  },
  {
    "rank": 1433,
    "id": "1103",
    "speaker": "Paul Root Wolpe",
    "name": "Paul Root Wolpe: It's time to question bio-engineering",
    "shortsummary": "At TEDxPeachtree, bioethicist Paul Root Wolpe describes an astonishing series of recent bio-engineering experiments, from hybrid pets to mice that grow human ears. He asks: isn't it time to set some ground rules? ",
    "duration": "0:19:42",
    "publishdate": "3/23/2011"
  },
  {
    "rank": 1434,
    "id": "424",
    "speaker": "Jennifer 8. Lee",
    "name": "Who was General Tso? and other mysteries of American Chinese food",
    "shortsummary": "Reporter Jennifer 8. Lee talks about her hunt for the origins of familiar Chinese-American dishes -- exploring the hidden spots where these two cultures have (so tastily) combined to form a new cuisine.",
    "duration": "0:16:38",
    "publishdate": "12/24/2008"
  },
  {
    "rank": 1435,
    "id": "917",
    "speaker": "Elif Shafak",
    "name": "Elif Shafak: The politics of fiction",
    "shortsummary": "Listening to stories widens the imagination; telling them lets us leap over cultural walls, embrace different experiences, feel what others feel. Elif Shafak builds on this simple idea to argue that fiction can overcome identity politics.",
    "duration": "0:19:45",
    "publishdate": "7/16/2010"
  },
  {
    "rank": 1436,
    "id": "36",
    "speaker": "Robert Neuwirth",
    "name": "The \"shadow cities\" of the future",
    "shortsummary": "Robert Neuwirth, author of \"Shadow Cities,\" finds the world's squatter sites -- where a billion people now make their homes -- to be thriving centers of ingenuity and innovation. He takes us on a tour. ",
    "duration": "0:14:03",
    "publishdate": "1/2/2007"
  },
  {
    "rank": 1437,
    "id": "419",
    "speaker": "Benjamin Wallace",
    "name": "Does happiness have a price tag?",
    "shortsummary": "Can happiness be bought? To find out, author Benjamin Wallace sampled the world's most expensive products, including a bottle of 1947 Chateau Cheval Blanc, 8 ounces of Kobe beef and the fabled (notorious) Kopi Luwak coffee. His critique may surprise you.",
    "duration": "0:14:40",
    "publishdate": "12/17/2008"
  },
  {
    "rank": 1438,
    "id": "1535",
    "speaker": "Kirby Ferguson",
    "name": "Kirby Ferguson: Embrace the remix",
    "shortsummary": "Nothing is original, says Kirby Ferguson, creator of Everything is a Remix. From Bob Dylan to Steve Jobs, he says our most celebrated creators borrow, steal and transform.",
    "duration": "0:09:42",
    "publishdate": "8/10/2012 15:02:00"
  },
  {
    "rank": 1439,
    "id": "1205",
    "speaker": "Philip Zimbardo",
    "name": "Philip Zimbardo: The demise of guys?",
    "shortsummary": "Psychologist Philip Zimbardo asks, \"Why are boys struggling?\" He shares some stats (lower graduation rates, greater worries about intimacy and relationships) and suggests a few reasons -- and he asks for your help! Watch his talk, then take his short 10-question survey: http://on.ted.com/PZSurvey",
    "duration": "0:04:46",
    "publishdate": "8/5/2011"
  },
  {
    "rank": 1440,
    "id": "339",
    "speaker": "Peter Hirshberg",
    "name": "The Web and TV, a sibling rivalry",
    "shortsummary": "In this absorbing look at emerging media and tech history, Peter Hirshberg shares some crucial lessons from Silicon Valley and explains why the web is so much more than \"better TV.\"",
    "duration": "0:31:39",
    "publishdate": "9/4/2008"
  },
  {
    "rank": 1441,
    "id": "823",
    "speaker": "Natalie Merchant",
    "name": "Natalie Merchant sings old poems to life",
    "shortsummary": "Natalie Merchant sings from her new album, \"Leave Your Sleep.\" Lyrics from near-forgotten 19th-century poetry pair with her unmistakable voice for a performance that brought the TED audience to its feet.",
    "duration": "0:29:18",
    "publishdate": "4/9/2010"
  },
  {
    "rank": 1442,
    "id": "1015",
    "speaker": "Dan Phillips",
    "name": "Dan Phillips: Creative houses from reclaimed stuff",
    "shortsummary": "In this funny and insightful talk from TEDxHouston, builder Dan Phillips tours us through a dozen homes he's built in Texas using recycled and reclaimed materials in wildly creative ways. Brilliant, low-tech design details will refresh your own creative drive.",
    "duration": "0:17:57",
    "publishdate": "11/25/2010"
  },
  {
    "rank": 1443,
    "id": "40",
    "speaker": "Frans Lanting",
    "name": "A lyrical view of life on Earth",
    "shortsummary": "In this stunning slideshow, celebrated nature photographer Frans Lanting presents The LIFE Project, a poetic collection of photographs that tell the story of our planet, from its eruptive beginnings to its present diversity. Soundtrack by Philip Glass.",
    "duration": "0:16:17",
    "publishdate": "4/5/2007"
  },
  {
    "rank": 1444,
    "id": "164",
    "speaker": "Steven Pinker",
    "name": "The stuff of thought",
    "shortsummary": "In an exclusive preview of his book \"The Stuff of Thought,\" Steven Pinker looks at language and how it expresses what goes on in our minds -- and how the words we choose communicate much more than we realize.",
    "duration": "0:17:27",
    "publishdate": "9/9/2007"
  },
  {
    "rank": 1445,
    "id": "517",
    "speaker": "Tim Ferriss",
    "name": "How to feel like the Incredible Hulk",
    "shortsummary": "Productivity guru Tim Ferriss' fun, encouraging anecdotes show how one simple question -- \"What's the worst that could happen?\" -- is all you need to learn to do anything.",
    "duration": "0:16:25",
    "publishdate": "4/15/2009"
  },
  {
    "rank": 1446,
    "id": "273",
    "speaker": "Wade Davis",
    "name": "The worldwide web of belief and ritual",
    "shortsummary": "Anthropologist Wade Davis muses on the worldwide web of belief and ritual that makes us human. He shares breathtaking photos and stories of the Elder Brothers, a group of Sierra Nevada indians whose spiritual practice holds the world in balance.",
    "duration": "0:19:12",
    "publishdate": "6/10/2008"
  },
  {
    "rank": 1447,
    "id": "208",
    "speaker": "Ben Dunlap",
    "name": "The story of a passionate life",
    "shortsummary": "Wofford College president Ben Dunlap tells the story of Sandor Teszler, a Hungarian Holocaust survivor who taught him about passionate living and lifelong learning. ",
    "duration": "0:19:08",
    "publishdate": "1/23/2008"
  },
  {
    "rank": 1448,
    "id": "69",
    "speaker": "Wade Davis",
    "name": "Cultures at the far edge of the world",
    "shortsummary": "With stunning photos and stories, National Geographic Explorer Wade Davis celebrates the extraordinary diversity of the world's indigenous cultures, which are disappearing from the planet at an alarming rate.",
    "duration": "0:22:01",
    "publishdate": "1/9/2007"
  },
  {
    "rank": 1449,
    "id": "108",
    "speaker": "Rives",
    "name": "A mockingbird remix of TED2006",
    "shortsummary": "Rives recaps the most memorable moments of TED2006 in the free-spirited rhyming verse of a fantastical mockingbird lullaby.",
    "duration": "0:04:11",
    "publishdate": "4/9/2007"
  },
  {
    "rank": 1450,
    "id": "643",
    "speaker": "Taryn Simon",
    "name": "Taryn Simon photographs secret sites",
    "shortsummary": "Taryn Simon exhibits her startling take on photography -- to reveal worlds and people we would never see otherwise. She shares two projects: one documents otherworldly locations typically kept secret from the public, the other involves haunting portraits of men convicted for crimes they did not commit.",
    "duration": "0:17:32",
    "publishdate": "9/24/2009"
  },
  {
    "rank": 1451,
    "id": "26",
    "speaker": "Rives",
    "name": "\"If I controlled the Internet\" (a poem)",
    "shortsummary": "How many poets could cram eBay, Friendster and Monster.com into 3-minute poem worthy of a standing ovation? Enjoy Rives' unique talent.",
    "duration": "0:04:07",
    "publishdate": "12/14/2006"
  },
  {
    "rank": 1452,
    "id": "549",
    "speaker": "Mary Roach",
    "name": "Mary Roach: 10 things you didn't know about orgasm",
    "shortsummary": "\"Bonk\" author Mary Roach delves into obscure scientific research, some of it centuries old, to make 10 surprising claims about sexual climax, ranging from the bizarre to the hilarious. (This talk is aimed at adults. Viewer discretion advised.)",
    "duration": "0:16:43",
    "publishdate": "5/20/2009"
  },
  {
    "rank": 1453,
    "id": "1068",
    "speaker": "Suheir  Hammad",
    "name": "Suheir Hammad: Poems of war, peace, women, power",
    "shortsummary": "Poet Suheir Hammad performs two spine-tingling spoken-word pieces: \"What I Will\" and \"break (clustered)\" -- meditations on war and peace, on women and power. Wait for the astonishing line: \"Do not fear what has blown up. If you must, fear the unexploded.\"",
    "duration": "0:05:53",
    "publishdate": "2/4/2011"
  },
  {
    "rank": 1454,
    "id": "524",
    "speaker": "Ben Katchor",
    "name": "Ben Katchor's comics of bygone New York",
    "shortsummary": "In this captivating talk from the TED archive, cartoonist Ben Katchor reads from his comic strips. These perceptive, surreal stories find the profound hopes and foibles of history (and modern New York) preserved in objects like light switches and signs.",
    "duration": "0:11:11",
    "publishdate": "4/22/2009"
  },
  {
    "rank": 1455,
    "id": "562",
    "speaker": "Felix Dennis",
    "name": "Publisher Felix Dennis' odes to vice and consequences",
    "shortsummary": "Media big shot Felix Dennis roars his fiery, funny, sometimes racy original poetry, revisiting haunting memories and hard-won battle scars from a madcap -- yet not too repentant -- life. Best enjoyed with a glass of wine.",
    "duration": "0:17:24",
    "publishdate": "6/5/2009"
  },
  {
    "rank": 1456,
    "id": "258",
    "speaker": "Paul Stamets",
    "name": "6 ways mushrooms can save the world",
    "shortsummary": "Mycologist Paul Stamets lists 6 ways the mycelium fungus can help save the universe: cleaning polluted soil, making insecticides, treating smallpox and even flu ...",
    "duration": "0:17:44",
    "publishdate": "5/6/2008"
  },
  {
    "rank": 1457,
    "id": "113",
    "speaker": "Richard Dawkins",
    "name": "An atheist's call to arms",
    "shortsummary": "Richard Dawkins urges all atheists to openly state their position -- and to fight the incursion of the church into politics and science. A fiery, funny, powerful talk. ",
    "duration": "0:29:10",
    "publishdate": "4/16/2007"
  },
  {
    "rank": 1458,
    "id": "995",
    "speaker": "Miwa Matreyek",
    "name": "Miwa Matreyek's glorious visions",
    "shortsummary": "Using animation, projections and her own moving shadow, Miwa Matreyek performs a gorgeous, meditative piece about inner and outer discovery. Take a quiet 10 minutes and dive in. With music from Anna Oxygen, Mirah, Caroline Lufkin and Mileece.",
    "duration": "0:11:11",
    "publishdate": "10/29/2010"
  },
  {
    "rank": 1459,
    "id": "296",
    "speaker": "Nellie McKay",
    "name": "\"Mother of Pearl\" and \"If I Had You\"",
    "shortsummary": "The wonderful Nellie McKay sings \"Mother of Pearl\" (with the immortal first line \"Feminists don't have a sense of humor\") and \"If I Had You\" from her sparkling set at TED2008.",
    "duration": "0:05:34",
    "publishdate": "7/11/2008"
  },
  {
    "rank": 1460,
    "id": "500",
    "speaker": "C.K. Williams",
    "name": "Poetry for all seasons of life",
    "shortsummary": "Poet C.K. Williams reads his work at TED2001. As he colors scenes of childhood resentments, college loves, odd neighbors and the literal death of youth, he reminds us of the unique challenges of living.",
    "duration": "0:23:17",
    "publishdate": "3/30/2009"
  },
  {
    "rank": 1461,
    "id": "360",
    "speaker": "James Nachtwey",
    "name": "Use my photographs to stop the worldwide XDR-TB epidemic",
    "shortsummary": "Photojournalist James Nachtwey sees his TED Prize wish come true, as we share his powerful photographs of XDR-TB, a drug-resistant strain of tuberculosis that's touching off a global medical crisis. Learn how to help at http://www.xdrtb.org",
    "duration": "0:05:52",
    "publishdate": "10/3/2008"
  }
];*/
}]);