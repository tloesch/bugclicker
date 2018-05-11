var skHelper;
var monkey;

function initHelpers() {
  skHelper = new helper(
    "scriptkiddi",
    SKHELPER_AMOUNT,
    SKHELPER_TIMER,
    SKHELPER_POINTS_ADD,
    SKHELPER_TARGET,
    SKHELPER_COST,
    SKHELPER_LEVEL,
    SKHELPER_UPGRADE_COST);
}

function helper(type, amount, timer, pointsAdd, bugTarget, cost, level, upgradeCost) {
  this.type = type;
  this.amount = amount;
  this.timer = timer;
  this.pointsAdd = pointsAdd;
  this.bugTarget = bugTarget;
  this.cost = cost;
  this.level = level;
  this.upgradeCost = upgradeCost;
}

helper.prototype.buy = function() {
  if(MONEY_AMOUNT >= this.cost) {
    this.amount += 1;
    MONEY_AMOUNT -= this.cost;
    updateCounter(SCREEN_MONEY_COUNTER, MONEY_AMOUNT + "$");
    console.log(this.type + ": " + this.amount);
  }
}

helper.prototype.sell = function() {
  if(this.amount > 0) {
    this.amount -= 1;
    MONEY_AMOUNT += this.cost * 0.8;
    updateCounter(SCREEN_MONEY_COUNTER, MONEY_AMOUNT + "$");
  }
}

// TODO: UPDATE TIMER
helper.prototype.upgrade = function() {
  if(MONEY_AMOUNT >= this.upgradeCost) {
      this.level += 1;
      MONEY_AMOUNT -= this.upgradeCost;
      this.upgradeCost += this.upgradeCost * 0.5;
      console.log("UPGRADE COST: " + this.upgradeCost);
      updateCounter(SCREEN_MONEY_COUNTER, MONEY_AMOUNT + "$");
  }

  // console.log("HELPER UPGRADET: "+ this.level);
}

helper.prototype.setTarget = function(t) {
  this.bugTarget = t;
}

helper.prototype.work = function() {
  if(this.amount != 0) {
    // console.log("IN WORK: " + this.bugTarget);
    var points = (this.pointsAdd * this.amount) * (this.level / 4);
    switch (this.bugTarget) {
      case 0:
        // console.log("NO TARGET DEFINED FOR: "+ this.type);
        break;
      case 1:
        bbug.fix(points);
        break;
      case 2:
        break;
      default:
        console.log("TARGET IS NOT KNOWN: " + this.target);
    }
  }
}
