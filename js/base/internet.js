const webpage_searchfield_dom = document.getElementById("wp-searchField");
// Eventlistener to use direct url for switching sites
webpage_searchfield_dom.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        activate_page_by_url(this.value);
    }
});

/*
* Create new webpages to activate, use or change them.
*/
class webpage {
  constructor(id, name, url, search_terms, status, order) {
    this.id = id; // @STRING
    this.name = name; // @STRING
    this.url = url; // @STRING
    this.search_terms = search_terms; // @ARRAY
    this.status = status; // @BOOLEAN 0->deactivated 1->active
    this.order = order; // @INT order starts with 1. 0 means not display in order.
    this.dom = document.getElementById(id); // @DOM
  }

  activate() {
    deactivate_all_pages();
    this.status = 1;
    this.dom.classList.add('active');
    webpage_searchfield_dom.value = this.url;
  }

  deactivate() {
    console.log(this.id);
    this.status = 0;
    this.dom.classList.remove('active');
  }
}

var pages = {
  "start": new webpage("wp-start", "Browser starting page", "home:", [], 1, 0),
  "workers": new webpage("wp-workers", "Job offers", "http://job-offers.com/", [], 0, 1),
}

function deactivate_all_pages() {
  // Create array out of object
  pages_entries = Object.entries(pages);
  // Loop through all pages and deactivate the active ones
  pages_entries.forEach(function(page) {
    if(page[1].status == 1) {
      page[1].deactivate();
    }
  });
}

function activate_page_by_url(url) {
  // Create array out of object
  pages_entries = Object.entries(pages);
  // Loop through all pages and deactivate the active ones
  pages_entries.forEach(function(page) {
    if(page[1].url == url) {
      page[1].activate();
    }
  });
}




