/*
* Create new buildings to activate, use or change them.
*/
class building {
    constructor(id, name, status, order) {
        this.id = id; // @STRING
        this.name = name; // @STRING
        this.status = status; // @BOOLEAN 0->deactivated 1->active
        this.order = order; // @INT order starts with 1. 0 means not display in order.
        this.dom = document.getElementById(id); // @DOM
    }

    activate() {
      deactivate_all_buildings();
      this.status = 1;
      this.dom.classList.add('active');
    }

    deactivate() {
      console.log(this.id);
      this.status = 0;
      this.dom.classList.remove('active');
    }
}

var buildings = {
  "overview": new building("city-overview", "City overview", 1, 0),
  "shop": new building("city-shop", "Upgrade Shop", 0, 1),
  "provider": new building("city-provider", "Provider", 0, 1),
}

// TODO: Combine with internet in main
function deactivate_all_buildings() {
  // Create array out of object
  let pages_entries = Object.entries(buildings);
  // Loop through all pages and deactivate the active ones
  pages_entries.forEach(function(page) {
    if(page[1].status == 1) {
      page[1].deactivate();
    }
  });
}