/*#############
  BUG FUNCTIONS
  #############*/
var bbug;
var hbug;

function initBugs() {
  bbug = new bug(
    BBUG_DATA["name"],
    BBUG_DATA["enabelt"],
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
    BBUG_DATA["screenCounter"],
    BBUG_DATA["screenFixCounter"],
    BBUG_DATA["screenFixProgress"],
    STATS_DATA["bbugTotal"],
    STATS_DATA["bbugFixTotal"]);

  hbug = new bug(
    HBUG_DATA["name"],
    HBUG_DATA["enabelt"],
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
    HBUG_DATA["screenCounter"],
    HBUG_DATA["screenFixCounter"],
    HBUG_DATA["screenFixProgress"],
    STATS_DATA["hbugTotal"],
    STATS_DATA["hbugFixTotal"]);

  mbug = new bug(
    MBUG_DATA["name"],
    MBUG_DATA["enabelt"],
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
    MBUG_DATA["screenCounter"],
    MBUG_DATA["screenFixCounter"],
    MBUG_DATA["screenFixProgress"],
    STATS_DATA["mbugTotal"],
    STATS_DATA["mbugFixTotal"]);
}

function bug (type, enabelt, amount, autoAdd, autoTimer, fixAmount, fixAdd, fixReward, fixAutoTimer, fixPointsAmount, fixPointsAdd, fixPointsAutoAdd, fixPointsReq, screenCounter, screenFixCounter, screenFixProgress, statBugs, statFixes) {
  this.type = type;
  this.enabelt = enabelt,
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
  this.screenCounter = screenCounter;
  this.screenFixCounter = screenFixCounter;
  this.screenFixProgress = screenFixProgress;
  this.statBugs = statBugs;
  this.statFixes = statFixes;
}

bug.prototype.add = function() {
  this.amount += this.autoAdd;
  this.statBugs += this.autoAdd;
  updateCounter(this.screenCounter, this.amount);
  return;
}

bug.prototype.fix = function(fixPoints) {
  if(this.amount > 0) {

    var bugFixingProgress = 1;
    var rest = fixPoints + this.fixPointsAmount;
    var fixAdd = 0;

    while(bugFixingProgress) {
      if (rest >= this.fixPointsReq) {
        this.amount -= this.fixAdd;
        fixAdd += this.fixAdd;
        this.statFixes += this.fixAdd;
        rest -= this.fixPointsReq;
      }
      if (rest < this.fixPointsReq) {
        bugFixingProgress = 0;
      }
    }
    this.fixPointsAmount = rest;

    addMoney(this.fixReward * fixAdd);
    this.refresh();
  }
}

bug.prototype.enabel = function() {
  this.enabelt = 1;
  var bug = this;
  setInterval(function() {bug.add();}, this.autoTimer);
}

bug.prototype.refresh = function() {
  updateCounter(this.screenCounter, this.amount);
  updateProgressbar(this.screenFixProgress, this.fixPointsAmount, this.fixPointsReq);
}

bug.prototype.getSaveDataObj = function() {
  var dataObj = {
    [this.type+"_amount"]:this.amount,
    [this.type+"_autoAdd"]:this.autoAdd,
    [this.type+"_autoTimer"]:this.autoTimer,
    [this.type+"_fixAmount"]:this.fixAmount,
    [this.type+"_fixAdd"]:this.fixAdd,
    [this.type+"_fixReward"]:this.fixReward,
    [this.type+"_fixAutoTimer"]:this.fixAutoTimer,
    [this.type+"_fixPointsAmount"]:this.fixPointsAmount,
    [this.type+"_fixPointsAdd"]:this.fixPointsAdd,
    [this.type+"_fixPointsAutoAdd"]:this.fixPointsAutoAdd,
    [this.type+"_fixPointsReq"]:this.fixPointsReq,
  }
  return dataObj;
}

bug.prototype.getImportantData = function() {
  var dataObj = {
    ["enabelt"]:this.enabelt,
    ["amount"]:this.amount,
    ["fixAmount"]:this.fixAmount
  }
  return dataObj;
}

function enableBug() {
  var bbugData = bbug.getImportantData();
  var hbugData = hbug.getImportantData();
  if(bbugData["amount"] >= 50 && hbugData["enabelt"] == 0) {
    hbug.enabel();
  }
}
