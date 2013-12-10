angular.module('LoginPage', [])
.controller('SortedCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
  $http.get('jsons/langs.json').then(function(data) {
    $scope.langs = data.data;
  });
  $scope.$watch('selected', function(language) {
    if (!language || language.length === 0) {return;}
    $http.get('jsons/' + angular.lowercase(language) + 'talks_sorted.json').then(function(data) {
      $scope.data = data.data;
    });
  });
  $scope.selected = 'French';
  $scope.show = {};
  $scope.urlPrefix = 'http://www.ted.com/talks/view/id/';

  // $scope.langs = ['French', "Italian"];
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
  }
];*/
}]);