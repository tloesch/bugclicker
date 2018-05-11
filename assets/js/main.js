$(document).ready(function(){
  init();
})

// TODO: ADD MORE BUGTYPES
// TODO: ADD AUTO FIXERS

function init() {
  setScreenVariables();
  loadSaveGame();
  startTimers();
  drawWorld();
  initNavigation();
}

/*###############
  TIMED FUNCTIONS
  ###############*/

function startTimers() {
  setInterval(function() {bbug.add();}, bbug.autoTimer);
  setInterval(function() {skHelper.work();}, skHelper.timer);
  setInterval(function() {enableBug();}, 1000);
  // startTimer(fixBug('auto'), BUG_FIX_AUTO_TIMER);
  if(OPTION_AUTO_SAVE_TOGGLE) {
    startTimer(saveGame, OPTION_AUTO_SAVE_TIMER);
  }
}

function startTimer(func, time) {
  setInterval(func, time);
}

/*###############
  MONEY FUNCTIONS
  ###############*/
function addMoney(reward) {
  MONEY_AMOUNT += reward;
  updateCounter(SCREEN_MONEY_COUNTER, MONEY_AMOUNT + "$");
}

function refreshMoney() {
  updateCounter(SCREEN_MONEY_COUNTER, MONEY_AMOUNT + "$");
}

/*##############
  DRAW FUNCTIONS
  ##############*/

function drawWorld() {

}

function drawInfo() {

}

function drawDebugPanel() {
  if(DEBUG_PANEL_TOGGLE) {
    document.getElementById('debug-panel').innerHTML = "<div></div>";
  }
}

function initNavigation() {
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

function storyIntroComplete() {
  STORY_INTRO_DONE = 1;
  BUG_AUTO_ADD = 1;
  return;
}

/*##################
  SAVE GAME FUNCIONS
  ##################*/

function loadSaveGame() {
  var dataJSON;
  var userId = USER_ID;
  $.ajax({
    url: 'assets/php/main.php',
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
          BBUG_DATA["amount"] = dataObj.bohrbug_amount;
          BBUG_DATA["autoAdd"] = dataObj.bohrbug_autoAdd;
          BBUG_DATA["autoTimer"] = dataObj.bohrbug_autoTimer;
          BBUG_DATA["fixAmount"] = dataObj.bohrbug_fixAmount;
          BBUG_DATA["fixAdd"] = dataObj.bohrbug_fixAdd;
          BBUG_DATA["fixReward"] = dataObj.bohrbug_fixReward;
          BBUG_DATA["fixAutoTimer"] = dataObj.bohrbug_fixAutoTimer;
          BBUG_DATA["fixPointsAmount"] = dataObj.bohrbug_fixPointsAmount;
          BBUG_DATA["fixPointsAdd"] = dataObj.bohrbug_fixPointsAdd;
          BBUG_DATA["fixPointsAutoAdd"] = dataObj.bohrbug_fixPointsAutoAdd;
          BBUG_DATA["fixPointsReq"] = dataObj.bohrbug_fixPointsReq;
/*
          BUG_AMOUNT = dataObj.bohrbug_amount;
          BUG_AUTO_ADD = dataObj.bohrbug_autoAdd;
          BUG_AUTO_TIMER = dataObj.bohrbug_autoTimer;
          BUG_FIX_AMOUNT = dataObj.bohrbug_fixAmount;
          BUG_FIX_ADD = dataObj.bohrbug_fixAdd;
          BUG_FIX_REWARD = dataObj.bohrbug_fixReward;
          BUG_FIX_AUTO_TIMER = dataObj.bohrbug_fixAutoTimer;
          BUG_FIX_POINTS_AMOUNT = dataObj.bohrbug_fixPointsAmount;
          BUG_FIX_POINTS_ADD = dataObj.bohrbug_fixPointsAdd;
          BUG_FIX_POINTS_AUTO_ADD = dataObj.bohrbug_fixPointsAutoAdd;
          BUG_FIX_POINTS_REQUIRED = dataObj.bohrbug_fixPointsReq;
*/
        // }else {
          USER_WORLD_POS = dataObj.userWPos;
          OPTION_AUTO_SAVE_TIMER = dataObj.optASTimer;
          OPTION_AUTO_SAVE_TOGGLE = dataObj.optASToggle;
          HBUG_ENABELT = dataObj.hbugEnabelt;
          MONEY_AMOUNT = dataObj.moneyA;
          STORY_INTRO_DONE = dataObj.storyIntroD;
          // console.log(key + ":  "+ dataObj[key]);

          initBugs();
          initHelpers();
          refreshAllScreenElements();
        // }
      // // }
    },
    error: function(a,b,c) {console.log(a + b + c);}
  });
}

function saveGame() {
  var saveData = getSaveData();
  $.ajax({
    url: 'assets/php/main.php',
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

function getSaveData() {
  var saveDataObj = {
    "userId":USER_ID,
    "userWPos":USER_WORLD_POS,
    "optASTimer":OPTION_AUTO_SAVE_TIMER,
    "optASToggle":OPTION_AUTO_SAVE_TOGGLE,
    "hbugEnabelt":HBUG_ENABELT,
    "moneyA":MONEY_AMOUNT,
    "storyIntroD":STORY_INTRO_DONE
  };
  var bbugSave = bbug.getSaveDataObj();
  var fullsaveDataObj = $.extend({}, saveDataObj, bbugSave);

  return JSON.stringify(fullsaveDataObj);
}

function validateSaveGame() {
  return;
}

function autoSave() {
  return;
}

/*###############
  DEBUG/TEST FUNCTIONS
  ###############*/
//
// function protoTest(v1, v2) {
//   this.p1 = v1;
//   this.p2 = v2;
// }
//
// protoTest.prototype.say = function() {
//   console.log("p1= "+this.p1+" p2= "+this.p2);
// }
//
// var a = new protoTest("hallo", "welt!");
// a.say();
// var a = new protoTest("hallo2", "welt!2");
// var b = new protoTest("b", "e");
// a.say();b.say();
