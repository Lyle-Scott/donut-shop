var Location = function(site, minPplPerHour, maxPplPerHour, averageDonutPerPpl) {
  this.site = site;
  this.minPplPerHour = minPplPerHour;
  this.maxPplPerHour = maxPplPerHour;
  this.averageDonutPerPpl = averageDonutPerPpl;
  this.customers = 0;
};

Location.prototype.generateRandomPpl = function(minPplPerHour, maxPplPerHour) {
  this.customers = Math.floor(Math.random() * (maxPplPerHour - minPplPerHour +1)) + minPplPerHour;
  return this.customers;
};

Location.prototype.hourlyDonuts = function() {
  this.generateRandomPpl(this.minPplPerHour, this.maxPplPerHour);
  this.sales = this.customers * this.averageDonutPerPpl;
  return this.sales;
};

Location.prototype.render = function () {
  var total = 0;
  var newRow = document.createElement('tr');
  //newRow.innerHTML = 'hiya';
  //return newRow;

  var addShop = document.createElement('td');
  var rowTitle = document.createTextNode(this.site);
  addShop.appendChild(rowTitle);
  var position = document.getElementById('DonutShops');
  position.appendChild(addShop);
  //return addShop;

  for (i = 1; i < 12; i++) {
    
    var addCell = document.createElement('td');
    this.hourlyDonuts();
    var cellContents = document.createTextNode(this.sales);
    addCell.appendChild(cellContents);
    position = document.getElementById('DonutShops');
    position.appendChild(addCell);
    total += this.sales
  }
  var addTotal = document.createElement('td');
  var cellTotal = document.createTextNode(total);
  addTotal.appendChild(cellTotal);
  position = document.getElementById('DonutShops');
  position.appendChild(addTotal);
};

var shop1 = new Location('Downtown', 8, 43, 4.5);
var shop2 = new Location('Capital Hill', 4, 37, 2);
var shop3 = new Location('South Lake Union', 9, 23, 6.33);
var shop4 = new Location('Wedgewood', 2, 28, 1.25);
var shop5 = new Location('Ballard', 8, 58, 3.75);

var dS = document.getElementById('DonutShops');
dS.appendChild(shop1.render());
dS.appendChild(shop2.render());
dS.appendChild(shop3.render());
dS.appendChild(shop4.render());
dS.appendChild(shop5.render());