function addBug() {
  BUG_AMOUNT += BUG_AUTO_ADD;
  update_counter(SCREEN_BUG_COUNTER, BUG_AMOUNT);
  return;
}

function fixBug(kind) {
  if(BUG_AMOUNT > 0) {
    var tempBugFixA = BUG_FIX_POINTS_AMOUNT;
    if(kind == "auto") {
      BUG_FIX_POINTS_AMOUNT += BUG_FIX_POINTS_AUTO_ADD;
    }else if (kind == "manuel") {
      BUG_FIX_POINTS_AMOUNT += BUG_FIX_POINTS_ADD;
    }else {}
    if(BUG_FIX_POINTS_AMOUNT >= BUG_FIX_POINTS_REQUIRED) {
      BUG_FIX_POINTS_AMOUNT = 0;
      BUG_AMOUNT -= BUG_FIX_POINTS_ADD;
      BUG_FIX_AMOUNT += BUG_FIX_ADD;
      update_counter(SCREEN_BUG_COUNTER, BUG_AMOUNT);
      add_money(BUG_FIX_REWARD);
    }
    if(tempBugFixA != BUG_FIX_POINTS_AMOUNT) {
      update_progressbar(SCREEN_BUG_FIX_PROGRESS, BUG_FIX_POINTS_AMOUNT, BUG_FIX_POINTS_REQUIRED);
    }
  }
}

function fixBBug(kind) {
  if(BUG_AMOUNT > 0) {
    var tempBugFixA = BUG_FIX_POINTS_AMOUNT;
    if(kind == "auto") {
      BUG_FIX_POINTS_AMOUNT += BUG_FIX_POINTS_AUTO_ADD;
    }else if (kind == "manuel") {
      BUG_FIX_POINTS_AMOUNT += BUG_FIX_POINTS_ADD;
    }else {}
    if(BUG_FIX_POINTS_AMOUNT >= BUG_FIX_POINTS_REQUIRED) {
      BUG_FIX_POINTS_AMOUNT = 0;
      BUG_AMOUNT -= BUG_FIX_POINTS_ADD;
      BUG_FIX_AMOUNT += BUG_FIX_ADD;
      update_counter(SCREEN_BUG_COUNTER, BUG_AMOUNT);
      add_money(BUG_FIX_REWARD);
    }
    if(tempBugFixA != BUG_FIX_POINTS_AMOUNT) {
      update_progressbar(SCREEN_BUG_FIX_PROGRESS, BUG_FIX_POINTS_AMOUNT, BUG_FIX_POINTS_REQUIRED);
    }
  }
}

function fixHBug(kind) {
  if(HBUG_AMOUNT > 0) {
    var tempBugFixA = HBUG_FIX_POINTS_AMOUNT;
    if(kind == "auto") {
      HBUG_FIX_POINTS_AMOUNT += HBUG_FIX_POINTS_AUTO_ADD;
    }else if (kind == "manuel") {
      HBUG_FIX_POINTS_AMOUNT += HBUG_FIX_POINTS_ADD;
    }else {}
    if(HBUG_FIX_POINTS_AMOUNT >= HBUG_FIX_POINTS_REQUIRED) {
      HBUG_FIX_POINTS_AMOUNT = 0;
      HBUG_AMOUNT -= HBUG_FIX_POINTS_ADD;
      HBUG_FIX_AMOUNT += HBUG_FIX_ADD;
      update_counter(SCREEN_HBUG_COUNTER, HBUG_AMOUNT);
      add_money(HBUG_FIX_REWARD);
    }
    if(tempBugFixA != HBUG_FIX_POINTS_AMOUNT) {
      update_progressbar(SCREEN_HBUG_FIX_PROGRESS, HBUG_FIX_POINTS_AMOUNT, HBUG_FIX_POINTS_REQUIRED);
    }
  }
}

function autoBugFixer() {
  fixBug("auto");
  return;
}
