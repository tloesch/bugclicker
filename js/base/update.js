/*################
  UPDATE FUNCTIONS
  ################*/

//TODO: CHECK IF element IS NodeList OR Array AND LOOP IF MORE THAN ONE element IS IN LIST
function update_counter(element, value) {
  element.innerHTML = value;
}

function update_progressbar(element, progress, requirement) {
  const progress_parts = ["·","▏","▎","▍","▋","▊","▉"];
  const progress_length = 20;

  // size of full sections
  var full_sections_size = (requirement / progress_length);
  // amout of filled sections
  var full_sections_count = Math.floor(progress / full_sections_size);
  // remaining progress
  var remain_progress = progress % full_sections_size;
  // size of section parts
  var section_part_size = full_sections_size / progress_parts.length;
  // progress of section
  var full_part_count = Math.floor(remain_progress / section_part_size);
  // progress filler
  if(full_sections_count == progress_length) {
    var progress_filler = "";
  }else {
    if(full_sections_count % 2 == 0) {
      var progress_filler = "·".repeat((20 - full_sections_count));
    }
    var progress_filler = "·".repeat((20 - full_sections_count - 1));
  }
  // Progressbar string
  var progress_part = progress_parts[progress_parts.length - 1].repeat(full_sections_count) + progress_parts[full_part_count] + progress_filler;

  // Update html of progressbar
  element.innerHTML = "╟" + progress_part + "╢";
}

function update_user_level(xp_increase = 0) {
  USER["xp"] += xp_increase;

  const border_parts = ["═","║","╔","╗","╚","╝","╟","╢","╦","╩"];
  const progress_parts = [" ","▏","▎","▍","▋","▊","▉"];
  const progress_length = 20;

  const requirement = LEVEL_REQUIREMENT;
  var lvl = USER["level"];
  if(lvl > 0) {
    var xp = USER["xp"] - requirement[lvl - 1];
  }else {
    var xp = USER["xp"];
  }
  
  

  var lvl_length = lvl.toString().length;
  var lvl_border_part = "═".repeat(lvl_length);
  var top_part = "╔════════════════════╦═" + lvl_border_part + "═╗";
  var bottom_part = "╚════════════════════╩═" + lvl_border_part + "═╝";

  var i = true;
  while(i){
   if(xp >= requirement[lvl]) {
      lvl++;
      USER["level"] = lvl;
    }else {
      i = false;
    }
  }

  var progress = requirement[lvl] - (requirement[lvl] - xp);

  // CONVERT PROGRESS TO ASCII
  // size of full sections
  var full_sections_size = (requirement[lvl] / progress_length);
  // amout of filled sections
  var full_sections_count = Math.floor(progress / full_sections_size);
  // remaining progress
  var remain_progress = progress % full_sections_size;
  // size of section parts
  var section_part_size = full_sections_size / progress_parts.length;
  // progress of section
  var full_part_count = Math.floor(remain_progress / section_part_size);
  // progress filler
  if(full_sections_count == progress_length) {
    var progress_filler = "";
  }else {
    
    if(full_sections_count % 2 == 0) {
      var progress_filler = " ".repeat((20 - full_sections_count));
    }
    var progress_filler = " ".repeat((20 - full_sections_count - 1));
  }

  var progress_part = "╟" + progress_parts[progress_parts.length - 1].repeat(full_sections_count) + progress_parts[full_part_count];
  var progress_end = progress_filler + "╢ " + lvl + " ║";

  var lvl_elem = document.getElementById("lvl");

  // get level title
  var level_title = "";
  LEVEL_TITLES.some(function(elem){
    if(elem[0] <= lvl && elem[1] >= lvl) {
      level_title = elem[2];
      return;
    }
  })

  lvl_elem.innerHTML = top_part + "\n" + progress_part + progress_end + "\n" + bottom_part + "\n " + level_title;
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
  update_user_level();
  // TODO: Auto loop through all bugs
  bbug.refresh();
  hbug.refresh();
  mbug.refresh();
  sbug.refresh();
}
