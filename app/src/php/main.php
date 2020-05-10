<?php
include_once 'config.php';
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$serverInfoPath = SERVERINFO_PATH;
$saveGamePath = SAVEGAMES_PATH;

if($_POST['task'] == "saveGame"){
  save_game($_POST['uid'], $_POST['data']);
}

if($_POST['task'] == "loadGame"){
  load_game($_POST['uid']);
}

function load_game($uid) {
  $data = "";
  if($uid != 0) {

    global $saveGamePath;
    $files = scandir($saveGamePath);
    $filename = $uid . '.json';


    if(file_exists($saveGamePath . $filename)) {
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

  $files = scandir($saveGamePath);
  $filename = $uid . '.json';

  if(file_exists($saveGamePath . $filename)) {
    $file = fopen($saveGamePath.$filename, 'w');
    fwrite($file, $data);
    fclose($file);
    echo "saved!";
  }else {
    $filename = $uid.".json";
    $file = fopen($saveGamePath.$filename, 'w');
    fwrite($file, $data);
    fclose($file);
  }
  return;
}

function create_new_game() {
  $uid = time()."_". increase_user_count();
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
