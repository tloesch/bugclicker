// OPTIONS
var OPTION_AUTO_SAVE_TOGGLE = 1; // DEFAULT 1 (TURNED ON)
var OPTION_AUTO_SAVE_TIMER = 6000000; // DEFAULT 600000 (10 minutes)

// USER
var USER_WORLD_POS = 0; // DEFAULT 0 (START SCREEN)

var USER = {
  "id": 0,
  "money": 0,
  "level": 0,
  "xp": 0,
  "companyName": ""
}

const FILLER_COMPANY_NAMES = ["Awesome Dev", "Coolio Mc.Nicenstein", "Devolution", "console.log", "Random Company Name", "Cazy Cat Container", "Mr D.", "ASDFGHJKL"];
const LEVEL_TITLES = [
    [0,4,"Hobbyist"],
    [5,9,"Intern"],
    [10,14,"Junior Dev"],
    [15,20,"Developer"],
  ];

const LEVEL_REQUIREMENT = [
  10, 25, 50, 80, 125, 175, 250, 300, 425, 550,
  800, 1000, 1500, 2000, 3000, 4000, 5000, 6500, 8000, 10000
]


// BUG
  // BOHRBUG
var BBUG_DATA = {
  "name": "bohrbug",
  "active": 1,
  "amount": 0,
  "autoAdd": 1,
  "autoTimer": 2000,
  "fixAmount": 0,
  "fixAdd": 1,
  "fixReward": 1,
  "fixAutoTimer": 1000,
  "fixPointsAmount": 0,
  "fixPointsAdd": 1,
  "fixPointsAutoAdd": 0,
  "fixPointsReq": 10,
  "screenWrap": null,
  "screenCounter": null,
  "screenFixCounter": null,
  "screenFixProgress": null,
  "stats":{
    "amount":0,
    "fixed":0
  }
}

  // HEISENBUG
var HBUG_DATA = {
  "name": "heisenbug",
  "active": 0,
  "amount": 0,
  "autoAdd": 1,
  "autoTimer": 4000,
  "fixAmount": 0,
  "fixAdd": 1,
  "fixReward": 2,
  "fixAutoTimer": 1000,
  "fixPointsAmount": 0,
  "fixPointsAdd": 1,
  "fixPointsAutoAdd": 0,
  "fixPointsReq": 15,
  "screenWrap": null,
  "screenCounter": null,
  "screenFixCounter": null,
  "screenFixProgress": null,
  "stats":{
    "amount":0,
    "fixed":0
  }
}

  // MANDELBUG
var MBUG_DATA = {
  "name": "mandelbug",
  "active": 0,
  "amount": 0,
  "autoAdd": 1,
  "autoTimer": 6000,
  "fixAmount": 0,
  "fixAdd": 1,
  "fixReward": 4,
  "fixAutoTimer": 1000,
  "fixPointsAmount": 0,
  "fixPointsAdd": 1,
  "fixPointsAutoAdd": 0,
  "fixPointsReq": 50,
  "screenWrap": null,
  "screenCounter": null,
  "screenFixCounter": null,
  "screenFixProgress": null,
  "stats":{
    "amount":0,
    "fixed":0
  }
}

  // SCHROEDINBUG
var SBUG_DATA = {
  "name": "schroedinbug",
  "active": 0,
  "amount": 0,
  "autoAdd": 1,
  "autoTimer": 8000,
  "fixAmount": 0,
  "fixAdd": 1,
  "fixReward": 6,
  "fixAutoTimer": 1000,
  "fixPointsAmount": 0,
  "fixPointsAdd": 1,
  "fixPointsAutoAdd": 0,
  "fixPointsReq": 500,
  "screenWrap": null,
  "screenCounter": null,
  "screenFixCounter": null,
  "screenFixProgress": null,
  "stats":{
    "amount":0,
    "fixed":0
  }
}

//HELPERS
  //SCRIPTKIDDI
var SKHELPER_AMOUNT = 0; // DEFAULT 0
var SKHELPER_TIMER = 5000; // DEFAULT 5000 => 5s
var SKHELPER_POINTS_ADD = 1; // DEFAULT 1
var SKHELPER_TARGET = 0; // DEFAULT 0 => NO TARGET
var SKHELPER_COST = 10; // DEFAULT 10 => 10$
var SKHELPER_LEVEL = 1; //DEFAULT 1 / MULTIPLIER FOR EFFECTIVITY
var SKHELPER_UPGRADE_COST = 5;
var SKHELPER_DATA = {
  "name": "scriptkiddi",
  "amount": 0,
  "timer": 5000,
  "pointsAdd": 1,
  "target": 0,
  "cost": 20,
  "level": 1,
  "upgradeCost": 20
}

// STORY
var STORY_INTRO_DONE = 0 // DEFAULT 0 FOR FIRST START

// SCREEN
// var SCREEN_MONEY_COUNTER;
// var SCREEN_BUG_COUNTER, SCREEN_BUG_FIX_COUNTER, SCREEN_BUG_FIX_PROGRESS;
// var SCREEN_HBUG_COUNTER, SCREEN_HBUG_FIX_COUNTER, SCREEN_HBUG_FIX_PROGRESS;
// var SCREEN_MBUG_COUNTER, SCREEN_MBUG_FIX_COUNTER, SCREEN_MBUG_FIX_PROGRESS;
// var SCREEN_SBUG_COUNTER, SCREEN_SBUG_FIX_COUNTER, SCREEN_SBUG_FIX_PROGRESS;

function set_screen_variables() {
  BBUG_DATA["screenWrap"] = document.getElementById('bohrbug');
  BBUG_DATA["screenCounter"] = document.getElementById('bbug-counter');
  BBUG_DATA["screenFixCounter"] = document.getElementById('bbug-fix-counter');
  BBUG_DATA["screenFixProgress"] = document.getElementById('bbug-fix-progress');

  HBUG_DATA["screenWrap"] = document.getElementById('heisenbug');
  HBUG_DATA["screenCounter"] = document.getElementById('hbug-counter');
  HBUG_DATA["screenFixCounter"] = document.getElementById('hbug-fix-counter');
  HBUG_DATA["screenFixProgress"] = document.getElementById('hbug-fix-progress');

  MBUG_DATA["screenWrap"] = document.getElementById('mandelbug');
  MBUG_DATA["screenCounter"] = document.getElementById('mbug-counter');
  MBUG_DATA["screenFixCounter"] = document.getElementById('mbug-fix-counter');
  MBUG_DATA["screenFixProgress"] = document.getElementById('mbug-fix-progress');

  SBUG_DATA["screenWrap"] = document.getElementById('schroedinbug');
  SBUG_DATA["screenCounter"] = document.getElementById('sbug-counter');
  SBUG_DATA["screenFixCounter"] = document.getElementById('sbug-fix-counter');
  SBUG_DATA["screenFixProgress"] = document.getElementById('sbug-fix-progress');
  SCREEN_MONEY_COUNTER = document.getElementById('money-counter');
};

// DRAW VARIABLES
var PC_CONTENT = {
  0 : {
    0 : "$isDevCool = 1;",
    1 : "praiseDev($isDevCool);",
    2 : "function praiseDev($cool){",
    3 : " if ($cool) {",
    4 : "  echo 'I <3 Dev';",
    5 : " }else {",
    6 : "  echo 'I 8=D Dev';",
    7 : " }",
    8 : "}"
  },
  1 : {
    0 : "THIS IS TEST CONTENT"
  }
}

var PC_CONTENT_STATE = 0;

// DEBUG OPTIONS
var DEBUG_PANEL_TOGGLE = 0; // DEFAULT 0 (TURNED OFF)

// STATS VARIABLES
var STATS_DATA = {
  "moneyTotal": 0,
  "bbugTotal": 0,
  "bbugFixTotal": 0,
  "hbugTotal": 0,
  "hbugFixTotal": 0,
  "mbugTotal": 0,
  "mbugFixTotal": 0,
  "sbugTotal": 0,
  "sbugFixTotal": 0,
}
// var STAT_MONEY_TOTAL = 0;
// var STAT_BBUG_TOTAL = 0;
// var STAT_BBUG_FIX_TOTAL = 0;
// var STAT_HBUG_TOTAL = 0;
// var STAT_HBUG_FIX_TOTAL = 0;
// var STAT_MBUG_TOTAL = 0;
// var STAT_MBUG_FIX_TOTAL = 0;

var company_panel =  document.getElementById('company-panel');