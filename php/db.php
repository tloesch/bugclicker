<?php
	
	/**
	 * Database
	 */
	class db {
		function __construct() {
			# code...
		}

		function auth_user ($uid, $psw) {
			if (validate_user_id()) {
				/*if($psw == *check if string* ) {
					prepare inputs for db
				}*/
			}
		}

		function validate_user_id ($uid) {
			/*if(is_int($uid) && $uid == *check if uid isnt bigger as db type* ) {
				prepare inputs for db
				
				return true;
			}else {
				return false;
			}*/
		}

		function get_user_data_by_id($uid = 0) {
			if ($uid != 0) {
				
			}else {
				return null;
			}
		}
	}


?>