var Location = function(site, minHourlyCustomers, maxHourlyCustomers, averageHourlySales) {
  this.site = site;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageHourlySales = averageHourlySales;
  this.hourlySales = [];
  this.dailySales = 0;
};

Location.prototype.calculateSales = function() {
  for (var i = 1; i < 12; i++) {
    this.hourlySales.push(Math.floor( (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers +1) + this.minHourlyCustomers) * this.averageHourlySales));
    this.dailySales += this.hourlySales[i-1];
  };
  return this.hourlySales;
};

Location.prototype.render = function () {
  var getTable = document.getElementById('DonutShops');
  this.dailySales = 0;
  var newRow = document.createElement('tr');
  newRow.innerHTML = this.site;
  getTable.appendChild(newRow);
  this.calculateSales();

  for (var i = 1; i < 12; i++) {
    var newCell = document.createElement('td');
    newCell.innerHTML = this.hourlySales[i-1];
    newRow.appendChild(newCell);
  }

  var newCell = document.createElement('td');
  newCell.innerHTML = this.dailySales;
  newRow.appendChild(newCell);
};

var shop1 = new Location('Downtown', 8, 43, 4.5);
var shop2 = new Location('Capitol Hill', 4, 37, 2);
var shop3 = new Location('South Lake Union', 9, 23, 6.33);
var shop4 = new Location('Wedgewood', 2, 28, 1.25);
var shop5 = new Location('Ballard', 8, 58, 3.75);
shop1.render();
shop2.render();
shop3.render();
shop4.render();
shop5.render();