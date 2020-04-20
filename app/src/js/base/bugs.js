// TODO: activ -> active

// Global Bug definition
var bbug, hbug, mbug, sbug;

// initialize bug
function init_bugs() {
  bbug = new bug(
    BBUG_DATA["name"],
    BBUG_DATA["active"],
    BBUG_DATA["amount"],
    BBUG_DATA["autoAdd"],
    BBUG_DATA["autoTimer"],
    BBUG_DATA["fixAmount"],
    BBUG_DATA["fixAdd"],
    BBUG_DATA["fixReward"],
    BBUG_DATA["fixAutoTimer"],
    BBUG_DATA["fixPointsAmount"],
    BBUG_DATA["fixPointsAdd"],
    BBUG_DATA["fixPointsAutoAdd"],
    BBUG_DATA["fixPointsReq"],
    BBUG_DATA["screenWrap"],
    BBUG_DATA["screenCounter"],
    BBUG_DATA["screenFixCounter"],
    BBUG_DATA["screenFixProgress"],
    STATS_DATA["bbugTotal"],
    STATS_DATA["bbugFixTotal"]);

  hbug = new bug(
    HBUG_DATA["name"],
    HBUG_DATA["active"],
    HBUG_DATA["amount"],
    HBUG_DATA["autoAdd"],
    HBUG_DATA["autoTimer"],
    HBUG_DATA["fixAmount"],
    HBUG_DATA["fixAdd"],
    HBUG_DATA["fixReward"],
    HBUG_DATA["fixAutoTimer"],
    HBUG_DATA["fixPointsAmount"],
    HBUG_DATA["fixPointsAdd"],
    HBUG_DATA["fixPointsAutoAdd"],
    HBUG_DATA["fixPointsReq"],
    HBUG_DATA["screenWrap"],
    HBUG_DATA["screenCounter"],
    HBUG_DATA["screenFixCounter"],
    HBUG_DATA["screenFixProgress"],
    STATS_DATA["hbugTotal"],
    STATS_DATA["hbugFixTotal"]);

  mbug = new bug(
    MBUG_DATA["name"],
    MBUG_DATA["active"],
    MBUG_DATA["amount"],
    MBUG_DATA["autoAdd"],
    MBUG_DATA["autoTimer"],
    MBUG_DATA["fixAmount"],
    MBUG_DATA["fixAdd"],
    MBUG_DATA["fixReward"],
    MBUG_DATA["fixAutoTimer"],
    MBUG_DATA["fixPointsAmount"],
    MBUG_DATA["fixPointsAdd"],
    MBUG_DATA["fixPointsAutoAdd"],
    MBUG_DATA["fixPointsReq"],
    MBUG_DATA["screenWrap"],
    MBUG_DATA["screenCounter"],
    MBUG_DATA["screenFixCounter"],
    MBUG_DATA["screenFixProgress"],
    STATS_DATA["mbugTotal"],
    STATS_DATA["mbugFixTotal"]);

  sbug = new bug(
    SBUG_DATA["name"],
    SBUG_DATA["active"],
    SBUG_DATA["amount"],
    SBUG_DATA["autoAdd"],
    SBUG_DATA["autoTimer"],
    SBUG_DATA["fixAmount"],
    SBUG_DATA["fixAdd"],
    SBUG_DATA["fixReward"],
    SBUG_DATA["fixAutoTimer"],
    SBUG_DATA["fixPointsAmount"],
    SBUG_DATA["fixPointsAdd"],
    SBUG_DATA["fixPointsAutoAdd"],
    SBUG_DATA["fixPointsReq"],
    SBUG_DATA["screenWrap"],
    SBUG_DATA["screenCounter"],
    SBUG_DATA["screenFixCounter"],
    SBUG_DATA["screenFixProgress"],
    STATS_DATA["sbugTotal"],
    STATS_DATA["sbugFixTotal"]);

}

// Prototype bug
function bug (type, active, amount, autoAdd, autoTimer, fixAmount, fixAdd, fixReward, fixAutoTimer, fixPointsAmount, fixPointsAdd, fixPointsAutoAdd, fixPointsReq, screenWrap, screenCounter, screenFixCounter, screenFixProgress, statBugs, statFixes) {
  this.type = type;
  this.active = active,
  this.amount = amount;
  this.autoAdd = autoAdd;
  this.autoTimer = autoTimer;
  this.fixAmount = fixAmount;
  this.fixAdd = fixAdd;
  this.fixReward = fixReward;
  this.fixAutoTimer = fixAutoTimer;
  this.fixPointsAmount = fixPointsAmount;
  this.fixPointsAdd = fixPointsAdd;
  this.fixPointsAutoAdd = fixPointsAutoAdd;
  this.fixPointsReq = fixPointsReq;
  this.screenWrap = screenWrap;
  this.screenCounter = screenCounter;
  this.screenFixCounter = screenFixCounter;
  this.screenFixProgress = screenFixProgress;
  this.statBugs = statBugs;
  this.statFixes = statFixes;

  this.node = document.getElementById(this.type);

  var tempThis = this;
  this.fixTrigger = this.node.querySelector('.bug').addEventListener("click", function(){
    tempThis.fix(tempThis.fixAdd);
  });
}

// timed function to increase bug amount
bug.prototype.add = function() {
  this.amount += this.autoAdd;
  this.statBugs += this.autoAdd;
  update_counter(this.screenCounter, this.amount);
  return;
}

// decrease bug amount
bug.prototype.fix = function(fixPoints) {
  if(this.amount > 0) {

    var bugFixingProgress = 1;
    var rest = fixPoints + this.fixPointsAmount;
    var fixAdd = 0;

    while(bugFixingProgress ) {
      if (rest >= this.fixPointsReq && this.amount > 0) {
        this.amount -= this.fixAdd;
        fixAdd += this.fixAdd;
        this.statFixes += this.fixAdd;
        rest -= this.fixPointsReq;
      }
      if (rest < this.fixPointsReq || this.amount < 1 ) {
        if(this.amount < 1) {
          rest = 0;
        }
        bugFixingProgress = 0;
      }
    }
    this.fixPointsAmount = rest;

    add_money(this.fixReward * fixAdd);
    update_user_level(this.fixReward * fixAdd);
    this.refresh();
  }
}

// activate bugs
bug.prototype.activate = function() {
  var bug = this;
  this.active = 1;
  bug.screenWrap.classList.add("active");
  bug.screenWrap.classList.add("wrap");
  setInterval(function() {bug.add();}, this.autoTimer);
}

// refresh bug data on screen
bug.prototype.refresh = function() {
  update_counter(this.screenCounter, this.amount);
  update_progressbar(this.screenFixProgress, this.fixPointsAmount, this.fixPointsReq);
}

// generate object that contains bug data
bug.prototype.get_save_data_obj = function() {
  var dataObj = {
    [this.type]: {
      ['amount']:this.amount,
      ['active']:this.active,
      ['autoAdd']:this.autoAdd,
      ['autoTimer']:this.autoTimer,
      ['fixAmount']:this.fixAmount,
      ['fixAdd']:this.fixAdd,
      ['fixReward']:this.fixReward,
      ['fixAutoTimer']:this.fixAutoTimer,
      ['fixPointsAmount']:this.fixPointsAmount,
      ['fixPointsAdd']:this.fixPointsAdd,
      ['fixPointsAutoAdd']:this.fixPointsAutoAdd,
      ['fixPointsReq']:this.fixPointsReq,
    }
  }
  //console.log(dataObj)
  return dataObj;
}

// generate importend data object
bug.prototype.get_important_data = function() {
  var dataObj = {
    ["active"]:this.active,
    ["amount"]:this.amount,
    ["fixAmount"]:this.fixAmount
  }
  return dataObj;
}

// timed function to activate bugs
function check_bug_requirements() {
  if(USER["level"] == 1 && hbug.active == 0) {
    hbug.activate();
  }
  if(USER["level"] == 5 && mbug.active == 0) {
    mbug.activate();
  }
  if(USER["level"] == 10 && sbug.active == 0) {
    sbug.activate();
  }
  return;
}