$(document).ready(function(){
  init();
})

// TODO: ADD MORE BUGTYPES
// TODO: ADD AUTO FIXERS

function init() {
  set_screen_variables();
  load_save_game();
  start_timers();
  draw_world();
  init_navigation();
}

/*###############
  TIMED FUNCTIONS
  ###############*/

function start_timers() {
  setInterval(function() {bbug.add();}, bbug.autoTimer);
  if(hbug.activ == 1){hbug.activate();}
  setInterval(function() {skHelper.work();}, skHelper.timer);
  setInterval(function() {activateBug();}, 1000);
  if(OPTION_AUTO_SAVE_TOGGLE) {
    setInterval(function(){save_game();}, OPTION_AUTO_SAVE_TIMER);
  }
}

/*###############
  MONEY FUNCTIONS
  ###############*/
function add_money(reward) {
  MONEY_AMOUNT += reward;
  update_counter(SCREEN_MONEY_COUNTER, MONEY_AMOUNT + "$");
}

function refresh_money() {
  update_counter(SCREEN_MONEY_COUNTER, MONEY_AMOUNT + "$");
}

/*##############
  DRAW FUNCTIONS
  ##############*/

function draw_world() {

}

function drawInfo() {

}

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


  // TODO: CHANGE TO LOOP WITH querySelectorAll AND forEach

  var navElements = document.querySelectorAll('.nav-elem');
  var screenElements = document.querySelectorAll('.screen-section');
  var counter = 0;
  var counterMax = screenElements.length;
/*
  navElements.forEach(function(elem) {
    console.log(counter);
    elem.addEventListener('click', function() {
      if(!this.classList.contains('active')) {
        this.classList.add('active');
      }
      console.log(counter);
      if(!screenElements[counter].classList.contains('active')) {
        screenElements[counter].classList.add('active');
      }
      for(var i = 0; i < counterMax; i++) {
        if(i != counter) {
          screenElements[i].classList.remove('active');
        }
      }
    })
    counter++;
  });
*/

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

/*##############
  USER FUNCTIONS
  ##############*/

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

function load_save_game() {
  var dataJSON;
  var userId = USER_ID;
  $.ajax({
    url: '/php/main.php',
    type: 'POST',
    async: false,
    data: {
      task: "loadGame",
      uid: userId,
    },
    success: function(data) {
      var dataObj = JSON.parse(data);
      // for(var key in dataObj) {
        // if(key.startsWith('bohrbug_')) {

        // TODO: change to loop
        // IDEA: create call to get all instanted bugs and retrieve there type. Loop through that types
          if(dataObj.bohrbug) {
            BBUG_DATA["amount"] = dataObj.bohrbug.amount;
            BBUG_DATA["activ"] = dataObj.bohrbug.activ;
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
            HBUG_DATA["activ"] = dataObj.heisenbug.activ;
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
            MBUG_DATA["activ"] = dataObj.mandelbug.activ;
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
            SBUG_DATA["activ"] = dataObj.schroedinbug.activ;
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

        // }else {
          USER_WORLD_POS = dataObj.userWPos;
          OPTION_AUTO_SAVE_TIMER = dataObj.optASTimer;
          OPTION_AUTO_SAVE_TOGGLE = dataObj.optASToggle;
          HBUG_activ = dataObj.hbugactiv;
          MONEY_AMOUNT = dataObj.moneyA;
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

          init_bugs();
          init_helpers();
          refresh_all_screen_elements();
        // }
      // // }
    },
    error: function(a,b,c) {console.log(a + b + c);}
  });
}

function save_game() {
  var saveData = get_save_data();
  $.ajax({
    url: '/php/main.php',
    type: 'POST',
    data: {
      task: "saveGame",
      uid: USER_ID,
      data: saveData
    },
    success: function(msg) {alert(msg);},
    error: function(a, b, c){
      console.log(a + b + c);
    }
  });
  return;
}

function get_save_data() {
  var saveDataObj = {
    "userId":USER_ID,
    "userWPos":USER_WORLD_POS,
    "optASTimer":OPTION_AUTO_SAVE_TIMER,
    "optASToggle":OPTION_AUTO_SAVE_TOGGLE,
    "moneyA":MONEY_AMOUNT,
    "storyIntroD":STORY_INTRO_DONE
  };
  var bbugSave = bbug.get_save_data_obj();
  var hbugSave = hbug.get_save_data_obj();
  var mbugSave = mbug.get_save_data_obj();
  var sbugSave = sbug.get_save_data_obj();
  //TODO: improve
  var saveDataObjstate1 = $.extend({}, saveDataObj, bbugSave);
  var fullsaveDataObj = $.extend({}, saveDataObjstate1, hbugSave);
  return JSON.stringify(fullsaveDataObj);
}

function validateSaveGame() {
  return;
}

function autoSave() {
  return;
}
