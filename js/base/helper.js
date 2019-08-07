var skHelper;
var monkey;

function init_helpers() {
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
  if(USER["money"] >= this.cost) {
    this.amount += 1;
    USER["money"] -= this.cost;
    this.cost +=  this.cost;
    update_worker_cost_elements();
    update_counter(SCREEN_MONEY_COUNTER, USER["money"] + "$");
    //console.log(this.type + ": " + this.amount);
  }
}

helper.prototype.sell = function() {
  if(this.amount > 0) {
    this.amount -= 1;
    USER["money"] += this.cost * 0.8;
    update_counter(SCREEN_MONEY_COUNTER, USER["money"] + "$");
  }
}

// TODO: UPDATE TIMER
helper.prototype.upgrade = function() {
  if(USER["money"] >= this.upgradeCost) {
      this.level += 1;
      USER["money"] -= this.upgradeCost;
      this.upgradeCost += Math.round(this.upgradeCost + this.upgradeCost);
      //console.log("UPGRADE COST: " + this.upgradeCost);
      update_counter(SCREEN_MONEY_COUNTER, USER["money"] + "$");
      update_worker_upgrade_elements();
  }

  // console.log("HELPER UPGRADET: "+ this.level);
}

helper.prototype.set_target = function(t) {
  this.bugTarget = t;
}

helper.prototype.work = function() {
  for(let i = 0; i < this.amount; i++) {
    //console.log("Helper "+this.type+"#"+i+" works on: " + this.bugTarget);
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
