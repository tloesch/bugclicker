<!DOCTYPE html>
<html>
<head xmlns="http://www.w3.org/1999/xhtml" lang="en-US">
  <title>GAME</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="assets/css/styles.css">
  <script src="assets/js/jquery.min.js"></script>
</head>
<body>
  <div class="nav-wrap">
    <div id="navigation" class="flex justify-center wrap align-center<">
      <div class="ascii">#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#</div>
      <div class="ascii">|<br/>|<br/>|<br/></div>
      <div id="nav-home" class="nav-elem nav_active"><p>Workplace</p></div>
      <div id="nav-city" class="nav-elem"><p>City</p></div>
      <div id="nav-internet" class="nav-elem"><p>Internet</p></div>
      <div id="nav-options" class="nav-elem"><p>Options</p></div>
      <div class="ascii">|<br/>|<br/>|<br/></div>
      <div class="ascii">#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#</div>
    </div>
  </div>

  <?php include("templates/screen-home.php"); ?>

  <?php include("templates/screen-city.php"); ?>

  <?php include("templates/screen-internet.php"); ?>

  <?php include("templates/screen-options.php"); ?>

  <div id="debug-panel">
    <h2>DEBUG PANEL</h2>
    <button onclick="story_intro_complete()">STORY_INTRO_DONE = 1</button>
    <input type=""/>
  </div>

  </div>

  <script src="js/base/variables.js"></script>
  <script src="js/base/update.js"></script>
  <script src="js/base/bugs.js"></script>
  <script src="js/base/helper.js"></script>
  <script src="js/base/city.js"></script>
  <script src="js/base/internet.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
