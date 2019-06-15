/*################
  UPDATE FUNCTIONS
  ################*/

//TODO: CHECK IF element IS NodeList OR Array AND LOOP IF MORE THAN ONE element IS IN LIST
function update_counter(element, value) {
  element.innerHTML = value;
}

function update_progressbar(element, value, max) {
  var $pbw = element['wrap'];
  var $pb = element['bar'];
  var percent = (value / max) * 100;
  var deg = 360*percent/100;
  if (percent > 50) {
    $pbw.addClass('gt-50');
  }else {
    $pbw.removeClass('gt-50');
  }
  $pb.css('transform','rotate('+ deg +'deg)');
//  update_comp_content();
}

function update_comp_content() {
  var pc = document.getElementById('screenElementPC');
  var before = "     ______________________________";
  var side = "||";
  var after = '    ||____________________||<br/>              / /__\ \<br/>             /________\ ';
  if(PC_CONTENT_STATE == 0) {
    PC_CONTENT_STATE = {
      "parent":0,
      "child":0
    };
    var content = before + side + PC_CONTENT[PC_CONTENT_STATE["parent"]][PC_CONTENT_STATE["child"]] + side + after;
    pc.innerHTML = content;
    // console.log(PC_CONTENT[PC_CONTENT_STATE["parent"]][PC_CONTENT_STATE["child"]]);
  }
}

function update_stat_list() {

}

function refresh_all_screen_elements() {
  refresh_money();

  // TODO: Auto loop through all bugs
  bbug.refresh();
  hbug.refresh();
  mbug.refresh();
  sbug.refresh();
}
