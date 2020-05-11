<?php

if(getenv('SERVERINFO_PATH')) {
    define('SERVERINFO_PATH', getenv('SERVERINFO_PATH'));
} else {
    define('SERVERINFO_PATH',  realpath(__DIR__ . '/../../data/serverInfo.json'));
}

if(getenv('SAVEGAMES_PATH')) {
    define('SAVEGAMES_PATH', getenv('SAVEGAMES_PATH'));
} else {
    define('SAVEGAMES_PATH', realpath(__DIR__ . '/../../data/savegames/'));
}


