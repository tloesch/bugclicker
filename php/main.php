<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$serverInfoPath = __DIR__ . "/../serverInfo.json";
$saveGamePath = __DIR__ . "/../savegames/";

if($_POST['task'] == "saveGame"){
  save_game($_POST['uid'], $_POST['data']);
}

if($_POST['task'] == "loadGame"){
  load_game($_POST['uid']);
}

function load_game($uid) {
  $data = 0;
  if($uid != 0) {

    global $saveGamePath;
    $userHasSaveGame = 0;

    $files = scandir($saveGamePath);
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
      $file = fopen($saveGamePath.$filename, 'r');
      $data = fread($file, 100000);
      fclose($file);
      echo $data;
    }
  }else {
    echo create_new_game();
  }
  
  return;
}

function save_game($uid, $data = "{}") {
  global $saveGamePath;
  $userHasSaveGame = 0;

  $files = scandir($saveGamePath);
  $filename = "";
  $regexp = '/\_'.$uid.'\.js/';

  foreach ($files as $key => $value) {
    $id = substr($value, -4, 4);
    if(preg_match($regexp, $value)) {
      $userHasSaveGame = 1;
      $filename = $value;
      echo $value;
    }
  }
  if($userHasSaveGame) {
    $file = fopen($saveGamePath.$filename, 'w');
    fwrite($file, $data);
    fclose($file);
  }else {
    $filename = time()."_".$uid.".json";
    $file = fopen($saveGamePath.$filename, 'w');
    fwrite($file, $data);
    fclose($file);
  }
  return;
}

function create_new_game() {
  $uid = increase_user_count();
  save_game($uid);
  return json_encode(array("newGameCreated" => true,"uid" => $uid));
}

function get_user_count() {
  global $serverInfoPath;
  $json = json_decode(file_get_contents($serverInfoPath),true);
  return $json['userCount'];
}
function increase_user_count($i = 1) {
  global $serverInfoPath;
  $json = json_decode(file_get_contents($serverInfoPath),true);
  $uCount = $json['userCount'];
  $json['userCount'] = $json['userCount'] + $i;
  file_put_contents($serverInfoPath, json_encode($json));
  return $uCount + $i;
}
