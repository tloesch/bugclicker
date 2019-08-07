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

  var progress_reduce = 0;
  var count = 0;
  
  while(count < lvl) {
    progress_reduce += requirement[count];
    count++;
  }

  var reduced_xp = USER["xp"] - progress_reduce;

  var lvl_length = lvl.toString().length;
  var lvl_border_part = "═".repeat(lvl_length);
  var top_part = "╔════════════════════╦═" + lvl_border_part + "═╗";
  var bottom_part = "╚════════════════════╩═" + lvl_border_part + "═╝";

  var progress = requirement[lvl] - (requirement[lvl] - reduced_xp);

  var lvl_before = lvl;
  var i = true;
  while(i){
   if(progress >= requirement[lvl]) {

      lvl++;
      level_up();
    }else {
      i = false;
    }
  }

  if(lvl_before != lvl) {
    var count = 0;
  
    while(count < lvl) {
      progress_reduce += requirement[count];
      count++;
    }
    reduced_xp = USER["xp"] - progress_reduce;
    progress = requirement[lvl] - (requirement[lvl] - reduced_xp);
  }
  // TODO: Make a right fix this is bullshit!
  if(progress < 0) {
    progress = 0;
  }

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

function level_up(increaser = 1) {
  USER["level"] += increaser;
  check_bug_requirements();
  return;
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

function init_company_name() {
  var companyName = USER["companyName"];
  if(USER["companyName"] == "") {
    var randomInt = Math.floor(Math.random() * (FILLER_COMPANY_NAMES.length - 0)) + 0;
    companyName = FILLER_COMPANY_NAMES[randomInt];
  }
  document.getElementById("company-name").value = companyName;
  document.getElementById("company-name").addEventListener ("change", function () {
    USER["companyName"] = this.value;
    if(this.value == "") {
      var randomInt = Math.floor(Math.random() * (FILLER_COMPANY_NAMES.length - 0)) + 0;
      document.getElementById("company-name").value = FILLER_COMPANY_NAMES[randomInt];
    }
  });
}

function toggle_company_panel() {
  var btn = company_panel.querySelector("button");
  if(company_panel.classList.contains('open')) {
    company_panel.classList.remove('open');
    company_panel.style.right = "calc(-" + company_panel.offsetWidth + "px + 1.9em)";
    btn.innerHTML = "OPEN";
  }else {
    company_panel.classList.add('open');
    company_panel.style.right = "0px";
    btn.innerHTML = "CLOSE";
  }
}

function update_worker_cost_elements () {
  const scriptkiddi = document.querySelectorAll(".sk-cost");
  scriptkiddi.forEach( function(e) {
    e.innerHTML = skHelper.cost;
  });
}

function update_worker_upgrade_elements () {
  const scriptkiddi = document.querySelectorAll(".sk-upgradeCost");
  scriptkiddi.forEach( function(e) {
    e.innerHTML = skHelper.upgradeCost;
  });
}



function update_stat_list() {

}

function refresh_all_screen_elements() {
  refresh_money();
  update_user_level();
  init_company_name();
  update_worker_cost_elements();
  update_worker_upgrade_elements();

  // TODO: Auto loop through all bugs
  bbug.refresh();
  hbug.refresh();
  mbug.refresh();
  sbug.refresh();
}
