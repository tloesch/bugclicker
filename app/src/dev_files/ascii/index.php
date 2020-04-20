<!DOCTYPE html>
<html>
<head>
  <title>ASCII ART LIST</title>
</head>
<body>
  <h1>ASCII ART LIST</h1>
  <div id="list">
    <ul>
      <?php
        $dir = ".";
        $files = scandir($dir);
        foreach ($files as $key => $value) {
          if($key >= 2 && $value != "index.php") {
            ?>
              <li><a href="<?php echo $value; ?>"><?php echo $value; ?></a></li>
            <?php
          }
        }
      ?>
    </ul>
  </div>
</body>
</html>
