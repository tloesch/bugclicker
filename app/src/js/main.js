$(document).ready(function(){
  init();
})

function init() {
  set_screen_variables();
  load_save_game();
}
function game_loaded() {
  init_bugs();
  init_helpers();
  refresh_all_screen_elements();
  start_timers();
  init_navigation();
}

/*###############
  TIMED FUNCTIONS
  ###############*/

function start_timers() {
  setInterval(function() {bbug.add();}, bbug.autoTimer);

  if(hbug.active == 1){hbug.activate();}

  setInterval(function() {skHelper.work();}, skHelper.timer);

  setInterval(function(){auto_save();}, OPTION_AUTO_SAVE_TIMER);
}

/*###############
  MONEY FUNCTIONS
  ###############*/
function add_money(reward) {
  USER["money"] += reward;
  update_counter(SCREEN_MONEY_COUNTER, USER["money"] + "$");
}

function refresh_money() {
  update_counter(SCREEN_MONEY_COUNTER, USER["money"] + "$");
}

/*##############
  DRAW FUNCTIONS
  ##############*/

function draw_debug_panel() {
  if(DEBUG_PANEL_TOGGLE) {
    document.getElementById('debug-panel').innerHTML = "<div></div>";
  }
}

function init_navigation() {
  var homeElem = document.getElementById('nav-home');
  var cityElem = document.getElementById('nav-city');
  var internetElem = document.getElementById('nav-internet');
  var optionsElem = document.getElementById('nav-options');
  var screenHomeElem = document.getElementById('screen-home');
  var screenCityElem = document.getElementById('screen-city');
  var screenInternetElem = document.getElementById('screen-internet');
  var screenOptionsElem = document.getElementById('screen-options');

  var navElements = document.querySelectorAll('.nav-elem');
  var screenElements = document.querySelectorAll('.screen-section');
  var counter = 0;
  var counterMax = screenElements.length;

  homeElem.addEventListener('click', function() {
    if(!this.classList.contains('nav_active')){
      this.classList.add('nav_active');
      screenHomeElem.classList.add('active');
    }
    optionsElem.classList.remove('nav_active');
    cityElem.classList.remove('nav_active');
    internetElem.classList.remove('nav_active');

    screenCityElem.classList.remove('active');
    screenInternetElem.classList.remove('active');
    screenOptionsElem.classList.remove('active');
  })

  cityElem.addEventListener('click', function() {
    if(!this.classList.contains('nav_active')){
      this.classList.add('nav_active');
      screenCityElem.classList.add('active');
    }
    homeElem.classList.remove('nav_active');
    optionsElem.classList.remove('nav_active');
    internetElem.classList.remove('nav_active');

    screenHomeElem.classList.remove('active');
    screenInternetElem.classList.remove('active');
    screenOptionsElem.classList.remove('active');

  })

  internetElem.addEventListener('click', function() {
    if(!this.classList.contains('nav_active')){
      this.classList.add('nav_active');
      screenInternetElem.classList.add('active');
    }
    homeElem.classList.remove('nav_active');
    cityElem.classList.remove('nav_active');
    optionsElem.classList.remove('nav_active');


    screenHomeElem.classList.remove('active');
    screenCityElem.classList.remove('active');
    screenOptionsElem.classList.remove('active');
  })

  optionsElem.addEventListener('click', function() {
    if(!this.classList.contains('nav_active')){
      this.classList.add('nav_active');
      screenOptionsElem.classList.add('active');
    }
    homeElem.classList.remove('nav_active');
    cityElem.classList.remove('nav_active');
    internetElem.classList.remove('nav_active');

    screenHomeElem.classList.remove('active');
    screenInternetElem.classList.remove('active');
    screenCityElem.classList.remove('active');
  })

}

/*###############
  STORY FUNCTIONS
  ###############*/

function story_intro_complete() {
  STORY_INTRO_DONE = 1;
  BUG_AUTO_ADD = 1;
  return;
}

/*##################
  SAVE GAME FUNCIONS
  ##################*/

// Returns specific url parameter or full set of parameters
function get_params(req_param = "") {
  var params = {};
  var parser = document.createElement('a');
  parser.href = window.location.href;
  var query = parser.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  if(req_param == "") {
    return params;
  }else {
    return params[req_param];
  }
  
}

function load_save_game() {
  var dataJSON;
  var userId = get_params("uid");

  if(typeof userId === "undefined") {
    userId = 0;
  }

  USER["id"] = userId;
  $.ajax({
    url: '/php/main.php',
    type: 'POST',
    async: true,
    data: {
      task: "loadGame",
      uid: USER["id"],
    },
    success: function(data) {
      var dataObj = JSON.parse(data);
      if(typeof dataObj.newGameCreated === "undefined") {

        if(dataObj.bohrbug) {
          BBUG_DATA["amount"] = dataObj.bohrbug.amount;
          BBUG_DATA["active"] = dataObj.bohrbug.active;
          BBUG_DATA["autoAdd"] = dataObj.bohrbug.autoAdd;
          BBUG_DATA["autoTimer"] = dataObj.bohrbug.autoTimer;
          BBUG_DATA["fixAmount"] = dataObj.bohrbug.fixAmount;
          BBUG_DATA["fixAdd"] = dataObj.bohrbug.fixAdd;
          BBUG_DATA["fixReward"] = dataObj.bohrbug.fixReward;
          BBUG_DATA["fixAutoTimer"] = dataObj.bohrbug.fixAutoTimer;
          BBUG_DATA["fixPointsAmount"] = dataObj.bohrbug.fixPointsAmount;
          BBUG_DATA["fixPointsAdd"] = dataObj.bohrbug.fixPointsAdd;
          BBUG_DATA["fixPointsAutoAdd"] = dataObj.bohrbug.fixPointsAutoAdd;
          BBUG_DATA["fixPointsReq"] = dataObj.bohrbug.fixPointsReq;
        }

        if(dataObj.heisenbug) {
          HBUG_DATA["amount"] = dataObj.heisenbug.amount;
          HBUG_DATA["active"] = dataObj.heisenbug.active;
          HBUG_DATA["autoAdd"] = dataObj.heisenbug.autoAdd;
          HBUG_DATA["autoTimer"] = dataObj.heisenbug.autoTimer;
          HBUG_DATA["fixAmount"] = dataObj.heisenbug.fixAmount;
          HBUG_DATA["fixAdd"] = dataObj.heisenbug.fixAdd;
          HBUG_DATA["fixReward"] = dataObj.heisenbug.fixReward;
          HBUG_DATA["fixAutoTimer"] = dataObj.heisenbug.fixAutoTimer;
          HBUG_DATA["fixPointsAmount"] = dataObj.heisenbug.fixPointsAmount;
          HBUG_DATA["fixPointsAdd"] = dataObj.heisenbug.fixPointsAdd;
          HBUG_DATA["fixPointsAutoAdd"] = dataObj.heisenbug.fixPointsAutoAdd;
          HBUG_DATA["fixPointsReq"] = dataObj.heisenbug.fixPointsReq;
        }

        if(dataObj.mandelbug) {
          MBUG_DATA["amount"] = dataObj.mandelbug.amount;
          MBUG_DATA["active"] = dataObj.mandelbug.active;
          MBUG_DATA["autoAdd"] = dataObj.mandelbug.autoAdd;
          MBUG_DATA["autoTimer"] = dataObj.mandelbug.autoTimer;
          MBUG_DATA["fixAmount"] = dataObj.mandelbug.fixAmount;
          MBUG_DATA["fixAdd"] = dataObj.mandelbug.fixAdd;
          MBUG_DATA["fixReward"] = dataObj.mandelbug.fixReward;
          MBUG_DATA["fixAutoTimer"] = dataObj.mandelbug.fixAutoTimer;
          MBUG_DATA["fixPointsAmount"] = dataObj.mandelbug.fixPointsAmount;
          MBUG_DATA["fixPointsAdd"] = dataObj.mandelbug.fixPointsAdd;
          MBUG_DATA["fixPointsAutoAdd"] = dataObj.mandelbug.fixPointsAutoAdd;
          MBUG_DATA["fixPointsReq"] = dataObj.mandelbug.fixPointsReq;
        }

        if(dataObj.schroedinbug) {
          SBUG_DATA["amount"] = dataObj.schroedinbug.amount;
          SBUG_DATA["active"] = dataObj.schroedinbug.active;
          SBUG_DATA["autoAdd"] = dataObj.schroedinbug.autoAdd;
          SBUG_DATA["autoTimer"] = dataObj.schroedinbug.autoTimer;
          SBUG_DATA["fixAmount"] = dataObj.schroedinbug.fixAmount;
          SBUG_DATA["fixAdd"] = dataObj.schroedinbug.fixAdd;
          SBUG_DATA["fixReward"] = dataObj.schroedinbug.fixReward;
          SBUG_DATA["fixAutoTimer"] = dataObj.schroedinbug.fixAutoTimer;
          SBUG_DATA["fixPointsAmount"] = dataObj.schroedinbug.fixPointsAmount;
          SBUG_DATA["fixPointsAdd"] = dataObj.schroedinbug.fixPointsAdd;
          SBUG_DATA["fixPointsAutoAdd"] = dataObj.schroedinbug.fixPointsAutoAdd;
          SBUG_DATA["fixPointsReq"] = dataObj.schroedinbug.fixPointsReq;
        }

         if(dataObj.scriptkiddi) {
          SKHELPER_AMOUNT = dataObj.scriptkiddi.amount;
          SKHELPER_TARGET = dataObj.scriptkiddi.bugTarget;
          SKHELPER_COST = dataObj.scriptkiddi.cost;
          SKHELPER_LEVEL = dataObj.scriptkiddi.level;
          SKHELPER_UPGRADE_COST = dataObj.scriptkiddi.upgradeCost;
        }

      // }else {
        USER_WORLD_POS = dataObj.userWPos;
        OPTION_AUTO_SAVE_TIMER = dataObj.optASTimer;
        OPTION_AUTO_SAVE_TOGGLE = dataObj.optASToggle;
        HBUG_active = dataObj.hbugactive;
        STORY_INTRO_DONE = dataObj.storyIntroD;

        STATS_DATA["moneyTotal"] = dataObj.statMoneyTotal;
        STATS_DATA["bbugTotal"] = dataObj.statMoneyTotal;
        STATS_DATA["bbugFixTotal"] = dataObj.statMoneyTotal;
        STATS_DATA["hbugTotal"] = dataObj.statMoneyTotal;
        STATS_DATA["hugFixTotal"] = dataObj.statMoneyTotal;
        STATS_DATA["mbugTotal"] = dataObj.statMoneyTotal;
        STATS_DATA["mbugFixTotal"] = dataObj.statMoneyTotal;
        STATS_DATA["sbugTotal"] = dataObj.statMoneyTotal;
        STATS_DATA["sbugFixTotal"] = dataObj.statMoneyTotal;

        USER["money"] = dataObj.moneyA;
        USER["level"] = dataObj.level;
        USER["xp"] = dataObj.xp;
        USER["companyName"] = dataObj.companyName;
      }else {
        USER["id"] = dataObj.uid;
        init_bugs();
        init_helpers();
        refresh_all_screen_elements();
        save_game();
        window.location.href = window.location.origin + window.location.pathname + "?uid=" + dataObj.uid;
      }
      game_loaded();
    },
    error: function(a,b,c) {console.log(a + b + c);}
  });
}

function save_game() {
  var saveData = get_save_data();
  $.ajax({
    url: '/php/main.php',
    type: 'POST',
    async: true,
    data: {
      task: "saveGame",
      uid: USER["id"],
      data: saveData
    },
    success: function(msg) {
      console.log(msg);
      window.location.search += "?uid=" + USER["id"];
    },
    error: function(a, b, c){
      alert("ERROR: Failed to save game");
      console.log(a);
      console.log(b);
      console.log(c);
    }
  });
  return;
}

function get_save_data() {
  var saveDataObj = {
    "userWPos":USER_WORLD_POS,
    "optASTimer":OPTION_AUTO_SAVE_TIMER,
    "optASToggle":OPTION_AUTO_SAVE_TOGGLE,
    "moneyA": USER["money"],
    "storyIntroD":STORY_INTRO_DONE,
    "xp": USER["xp"],
    "level": USER["level"],
    "companyName": USER["companyName"]
  };
  var bbugSave = bbug.get_save_data_obj();
  var hbugSave = hbug.get_save_data_obj();
  var mbugSave = mbug.get_save_data_obj();
  var sbugSave = sbug.get_save_data_obj();
  var skHelperSave = skHelper.get_save_data_obj();
  //TODO: improve
  var saveDataObjstate1 = $.extend({}, saveDataObj, bbugSave);
  var saveDataObjstate2 = $.extend({}, hbugSave, mbugSave);
  var saveDataObjstate3 = $.extend({}, sbugSave, skHelperSave);
  
  var saveDataObjstate4 = $.extend({}, saveDataObjstate1, saveDataObjstate2);

  var fullsaveDataObj = $.extend({}, saveDataObjstate4, saveDataObjstate3);
  console.log(fullsaveDataObj);
  return JSON.stringify(fullsaveDataObj);
}

function validateSaveGame() {
  return;
}

function auto_save() {
  console.log("autoSave");
  if(OPTION_AUTO_SAVE_TOGGLE == 1) {
    save_game();
  }
  return;
}