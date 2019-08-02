<?php ?>
<section id="screen-internet" class="screen-section internet">
  <div class="ascii webpage-navigation">
╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║  .-----..-----. .---.            .---------------------------------------------------------------------------------------.    ║
║  <button class="ascii">| <-- |</button><button class="ascii">| --> |</button> <button class="ascii" onclick="search('wp-search')">| H |</button>  <b>Location:</b> | <input id="wp-searchField" class="navbar" type="text" value="about: "/> |    ║
║  `¯¯¯¯¯´`¯¯¯¯¯´ `¯¯¯´            `---------------------------------------------------------------------------------------´    ║
╟════════════╤════════════════════════╤═══════════════════════╤═══════════════════════╤═╤═══════════════════════════════════════╢
║ <b>Favorites:</b> ║ <button class="ascii" onclick="search('wp-workers')"><u>http://job-offers.com/</u></button> ║ <button class="ascii"><u>http://cool-news.com/</u></button> ║ here could be your ad ║+║                                       ║
╟════════════╧════════════════════════╧═══════════════════════╧═══════════════════════╧═╧═══════════════════════════════════════╢</div>
<div class="ascii flex outline">║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
<div id="wp-search" class="webpage active">

  <div>
     
  </div>
</div><div id="wp-workers" class="webpage">
  <div class="wp-content">
    <p class="wp-headline">GET NEW EMPLOYEES</p>
    <p class="intro"><b>Employee groups available:</b></p>
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
          <div class="emp-buy"><button onclick="skHelper.buy()" class="ascii"><b><u>BUY FOR 10$</u></b></button></div>
        </div>
      </div>
    </div>

    <div id="buy-worker-mk" class="worker-wrap">
      <div class="emp-type"><b>Monkey</b></div>
      <div class="emp-desc">
        <p>Monkeys are not very well programmers but they are much cuter and you know what people say about monkeys.<br/>If you put 100 monkeys with typewriters in a room long enough, eventually you'll get a bugfix.</p>
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
              <p>Speed: [ ][ ][ ][ ][ ]</p>
              <p>Knowledge: [ ][ ][ ][ ][ ]</p>
            </div>
          <div class="emp-buy"><button onclick="monkeyHelper.buy()" class="ascii"><b><u>BUY FOR 15$</u></b></button></div>
        </div>
      </div>
    </div>
  </div>
</div><div id="wp-intranet" class="webpage">
  <div class="wp-header flex justify-center">
    <p class="wp-headline">MANAGE YOUR EMPLOYES</p>
  </div>
  <div>
    <button onclick="search('wp-search')">Back to Search</button><br/><br/>
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
    <div class="worker-wrap">
      <p>
        Managing the workers is very experimental at this stage it will be reworked with v0.7.
      </p>
    </div>
  </div>
</div><div id="wp-company" class="webpage">

</div>║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║
║</div>
<div class="ascii underline">╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝</div>
</section>