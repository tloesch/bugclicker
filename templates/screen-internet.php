<section id="screen-internet" class="screen-section internet">
  <div id="wp-search" class="webpage active">
    <div class="wp-header flex justify-center">
      <p class="wp-headline">Findo</p>
    </div>
    <div class="wp-content flex justify-center">
      <input id="wp-searchField" type="text"/>
      <button onclick="search()">Search</button>
    </div>
  </div>
  <div id="wp-workers" class="webpage">
    <div class="wp-header flex justify-center">
      <p class="wp-headline">GET NEW EMPOYES</p>
    </div>
    <div class="wp-content flex wrap justify-between">
      <button onclick="search('wp-workers', 'wp-search')">Back to Search</button>
      <div id="buy-worker-sk" class="worker-wrap">
        <div class="emp-type">Script Kiddy</div>
        <div class="emp-stats">
          <p>Cost: [x][ ][ ][ ][ ]</p>
          <p>Speed: [x][ ][ ][ ][ ]</p>
          <p>Knowledge: [x][ ][ ][ ][ ]</p>
        </div>
        <div class="emp-desc">
          <p>Yeah I know nobody wants to work with them... But you are a nobody so thats not my problem.</p>
        </div>
        <div class="emp-buy"><button onclick="skHelper.buy()">BUY SCRIPT KIDDI FOR 10$</button></div>
      </div>
      <div id="buy-worker-mk" class="worker-wrap">
        <div class="emp-type">Monkey</div>
        <div class="emp-stats">
          <p>Cost: [x][ ][ ][ ][ ]</p>
          <p>Speed: [x][ ][ ][ ][ ]</p>
          <p>Knowledge: [x][ ][ ][ ][ ]</p>
        </div>
        <div class="emp-desc">
          <p>Monkey know more about how a Computer works as a Script Kiddi and is much cuter. But watch out to have enogth Bananas in the Kitchen!</p>
        </div>
        <div class="emp-buy"><button onclick="skHelper.buy()">BUY MONKEY FOR ___$</button></div>
      </div>
    </div>
  </div>
  <div id="wp-intranet" class="webpage">
    <div class="wp-header flex justify-center">
      <p class="wp-headline">VERWALTE YOUR EMPLOYES</p>
    </div>
    <div class="wp-content flex wrap justify-between">
      <div class="worker-wrap">
        <div class="emp-type">Script Kiddy</div>
        <div class="emp-buy"><button onclick="skHelper.upgrade()">UPGRADE SCRIPT KIDDI</button></div>
        <div class="emp-buy"><button onclick="skHelper.set_target(1)">SET SCRIPT KIDDI TARGET TO BOHRBUG</button></div>
        <div class="emp-buy"><button onclick="skHelper.sell()">SELL SCRIPT KIDDI</button></div>
      </div>
      <div class="worker-wrap">
        <div class="emp-type">Monkey</div>
        <div class="emp-buy"><button onclick="monkey.upgrade()">UPGRADE MONKEY</button></div>
        <div class="emp-buy"><button onclick="monkey.set_target(1)">SET MONKEY TARGET TO BOHRBUG</button></div>
        <div class="emp-buy"><button onclick="monkey.sell()">SELL MONKEY</button></div>
      </div>
    </div>
  </div>
  </section>