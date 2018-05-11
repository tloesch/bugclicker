<?php

if($_POST['task'] == "saveGame"){
  saveGame($_POST['uid'], $_POST['data']);
}

if($_POST['task'] == "loadGame"){
  loadGame($_POST['uid']);
}

function loadGame($uid) {
  $data = 0;
  if($uid != 0) {
    $dir = "../../savegames/";

    $userHasSaveGame = 0;

    $files = scandir($dir);
    $filename = "";
    $regexp = '/\_'.$uid.'/';

    foreach ($files as $key => $value) {
      $id = substr($value, -4, 4);
      if(preg_match($regexp, $value)) {
        $userHasSaveGame = 1;
        $filename = $value;
      }
    }
    if($userHasSaveGame) {
      $file = fopen($dir.$filename, 'r');
      $data = fread($file, 100000);
      fclose($file);
    }
  }
  echo $data;
  return;
}

function saveGame($uid, $data) {
  if($uid == 0) {
    $uc = getUserCount();
    $uid = $uc + 1;
  }
  $dir = "../../savegames/";

  $userHasSaveGame = 0;

  $files = scandir($dir);
  $filename = "";
  $regexp = '/\_'.$uid.'/';

  foreach ($files as $key => $value) {
    $id = substr($value, -4, 4);
    if(preg_match($regexp, $value)) {
      $userHasSaveGame = 1;
      $filename = $value;
      echo $value;
    }
  }
  if($userHasSaveGame) {
    $file = fopen($dir.$filename, 'w');
    fwrite($file, $data);
    fclose($file);
  }else {
    $filename = mktime()."_".$uid.".json";
    $file = fopen($dir.$filename, 'w');
    fwrite($file, $data);
    fclose($file);
  }
  echo "Saved!";
  return;
}

function getUserCount() {
  $file = "../serverInfo.json";
  $json = json_decode(file_get_contents($file),true);
  $uCount = $json['userCount'];
  $json['userCount'] = $json['userCount'] + 1;
  file_put_contents($file, json_encode($json));
  return $uCount;
}
