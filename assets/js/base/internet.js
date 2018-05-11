function search() {
  var searchField = document.getElementById('wp-searchField');
  var searchPage = document.getElementById('wp-search');
  if(searchField.value == "work") {
    document.getElementById('wp-workers').classList.add('active');
    searchPage.classList.remove('active');
  }else if (searchField.value == "intranet") {
    document.getElementById('wp-intranet').classList.add('active');
    searchPage.classList.remove('active');
  }
}
