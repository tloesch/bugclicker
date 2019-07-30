var webpage_doms = [
  document.getElementById('wp-search'),
  document.getElementById('wp-workers'),
  document.getElementById('wp-intranet'),
  document.getElementById('wp-company') 
];

function search(target="") {
  var searchValue = document.getElementById('wp-searchField').value;
  if(target == "") {
    if(searchValue == "work") {
      switch_webpage(document.getElementById("wp-workers"));
      
    }else if (searchValue == "intranet") {
      switch_webpage(document.getElementById("wp-intranet"));
    }
  }else {
    switch_webpage(document.getElementById(target));
  }
}

function switch_webpage(target) {
  webpage_doms.forEach(function(page) {
    if(page.classList.contains('active')) {
      page.classList.remove('active');
    }
  });
  target.classList.add('active');
}
