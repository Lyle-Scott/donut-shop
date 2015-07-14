//Location constructor to set base parameters for each site
var Location = function(site, minPplPerHour, maxPplPerHour, averageHourlySales) {
  this.site = site;
  this.minPplPerHour = minPplPerHour;
  this.maxPplPerHour = maxPplPerHour;
  this.averageHourlySales = averageHourlySales;
  this.customers = 0;
  this.hourlySales = 0;
  this.dailySales = 0;
};

//random number of customer generator for one hour, using the min and max for each site.
Location.prototype.calculateCustomers = function(minPplPerHour, maxPplPerHour) {
  this.customers = Math.floor(Math.random() * (maxPplPerHour - minPplPerHour +1)) + minPplPerHour;
  return this.customers;
};

//Calculate a number for hourly sales, using a number from the random function and the average donuts each hour for the site.
Location.prototype.calculateSales = function() {
  this.calculateCustomers(this.minPplPerHour, this.maxPplPerHour);
  this.hourlySales = this.customers * this.averageHourlySales;
  return this.hourlySales;
};

// render function to put table on screen
Location.prototype.render = function () {

  //create the new row
  var getTable = document.getElementById('DonutShops');
  this.dailySales = 0;
  var newRow = document.createElement('tr');
  //create the leftmost table cell and put the shop name in it
  newRow.innerHTML = this.site;
  getTable.appendChild(newRow);

  //start a loop to create the sales for each hour
  for (var i = 1; i < 12; i++) {

    //add a cell, calculate random sales for the hour using the hourly sales function, and put them in the cell. pop the cell into the table, and keep a running total for the last column    
    this.calculateSales();
    this.dailySales += this.hourlySales;
    var newCell = document.createElement('td');
    newCell.innerHTML = this.hourlySales;
    newRow.appendChild(newCell);
      
  }
  //add a cell for the end of the row and insert the total sales
  var newCell = document.createElement('td');
  newCell.innerHTML = this.dailySales;
  newRow.appendChild(newCell);
};

//instantiate each shop as an object using location constructor
var shop1 = new Location('Downtown', 8, 43, 4.5);
var shop2 = new Location('Capitol Hill', 4, 37, 2);
var shop3 = new Location('South Lake Union', 9, 23, 6.33);
var shop4 = new Location('Wedgewood', 2, 28, 1.25);
var shop5 = new Location('Ballard', 8, 58, 3.75);

//execute render function for each shop object
shop1.render();
shop2.render();
shop3.render();
shop4.render();
shop5.render();