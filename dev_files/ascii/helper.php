<!DOCTYPE html>
<html>
<head>
  <title>ASCII HELPER</title>
  <style>
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: content;
    }
    elem {
      width: 6.5%;
      background-color: #888;
      border: 1px solid #000;
      padding: 5px 10px;
    }
    
  </style>
</head>
<body>
  <div>
    <?php
      $i = 0;
      $asciiCode = [];
      while($i <= 10000) {
        $asciiCode[$i] = "&#".$i;
        $i++;
      }
      foreach ($asciiCode as $key => $value) {
        ?><elem><?php echo $key; ?> | <?php echo $value; ?></elem><?php
      }
    ?>
  </div>
</body>
</html>
