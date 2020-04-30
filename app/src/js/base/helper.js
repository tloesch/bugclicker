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
    // new values req
  // title
  // description
  // stats(cost,speed,knowledg)
  // profile pic
  // micro animation
  // homescreen place
}

helper.prototype.buy = function() {
  if(USER["money"] >= this.cost && this.amount == 0) {
    this.amount += 1;
    USER["money"] -= this.cost;
    update_worker_buy_option();
    update_counter(SCREEN_MONEY_COUNTER, USER["money"] + "$");
    //console.log(this.type + ": " + this.amount);
  }
}

helper.prototype.sell = function() {
  if(this.amount > 0) {
    this.amount -= 1;
    this.cost -= Math.round(this.cost * 0.5)
    USER["money"] += Math.round(this.cost * 0.5);
    update_counter(SCREEN_MONEY_COUNTER, USER["money"] + "$");
    update_worker_buy_option();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  }
}

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
    var points = ((this.pointsAdd * this.amount) * (this.level / 4) / 100);
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

helper.prototype.get_save_data_obj = function() {
  var dataObj = {
    [this.type]: {
      ['amount']:this.amount,
      ['bugTarget']:this.bugTarget,
      ['cost']:this.cost,
      ['level']:this.level,
      ['upgradeCost']:this.upgradeCost
    }
  }
  console.log(dataObj)
  return dataObj;
}


/*
SCRIPT KIDDI DOMS 
AGENCY

<div id="buy-worker-sk" class="worker-wrap">
      <div class="emp-type"><b>Script Kiddy</b></div>
      <div class="emp-desc">
        <p>Yeah I know nobody wants to work with them... But you are a nobody so thats not my problem.</p>
      </div>
      <div class="flex">
        
<div class="emp-image ascii">+++++++++++++++++++++
+                   +
+       ,=""=,      +
+      C o _o;      +
+      /\  @ )      +
+     /  `--´ \     +
+    (_/  . .\_)    +
+      \_(/-\)      +
+                   +
+++++++++++++++++++++</div>
        <div class="wrap-stats">
          <div class="emp-stats">
            <p>Cost: [x][ ][ ][ ][ ]</p>
            <p>Speed: [x][ ][ ][ ][ ]</p>
            <p>Knowledge: [x][ ][ ][ ][ ]</p>
          </div>
          <div class="emp-buy"><button onclick="skHelper.buy()" class="ascii"><b><u>BUY FOR <span class="sk-cost">__</span>$</u></b></button></div>
        </div>
      </div>
    </div>


INTRANET

<div class="worker-wrap">
        <div class="emp-type"><b>Script Kiddy</b></div>
        <div class="emp-image ascii">+++++++++++++++++++++
+                   +
+       ,=""=,      +
+      C o _o;      +
+      /\  @ )      +
+     /  `--´ \     +
+    (_/  . .\_)    +
+      \_(/-\)      +
+                   +
+++++++++++++++++++++

</div>
        <div class="emp-buy"><button onclick="skHelper.upgrade()" class="ascii"><u>UPGRADE SCRIPT KIDDI FOR <span class="sk-upgradeCost">__</span>$</u></button></div>
        <div class="emp-buy"><button onclick="skHelper.set_target(1)" class="ascii"><u>SET SCRIPT KIDDI TARGET TO BOHRBUG</u></button></div>
        <div class="emp-buy"><button onclick="skHelper.sell()" class="ascii"><u>SELL SCRIPT KIDDI</u></button></div>
      </div>

Same: 
Profile pic


*/