
var Location = function(site, minHourlyCustomers, maxHourlyCustomers, averageHourlySales) {
  this.site = site;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageHourlySales = averageHourlySales;
};

Location.prototype.calculateSales = function() {
  this.hourlySales = [];
  this.dailySales = 0;
  for (var i = 0; i < 11; i++) {
    this.dailySales += this.hourlySales[i] = (Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers) * this.averageHourlySales));
    console.log("One " + this.hourlySales);
    this.dailySales += this.hourlySales[i] = (Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers) * this.averageHourlySales));
        console.log("Two " + this.hourlySales);
  };
};

Location.prototype.render = function () {
  var getTable = document.getElementById('DonutShops');
  var newRow = document.createElement('tr');
  newRow.id=this.site;
  newRow.innerHTML = this.site;
  getTable.appendChild(newRow);
  this.calculateSales();

  for (var i = 0; i < 11; i++) {
    var newCell = document.createElement('td');
    newCell.innerHTML = this.hourlySales[i];
    newRow.appendChild(newCell);
  };

  var newCell = document.createElement('td');
  newCell.innerHTML = this.dailySales;
  newRow.appendChild(newCell);
};

var renderAll = function() {
  var getTable = document.getElementById('DonutShops');
  while (getTable.firstChild) {
    getTable.removeChild(getTable.firstChild);
  };
  
  var headers = ["Locations", "7a", "8a", "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p", "Total"];
  var headerRow = document.createElement('tr');
  headerRow.id="headerRow";
  getTable.appendChild(headerRow);
  for (var i = 0; i < 13; i++) {
    var headerCell= document.createElement('td');
    headerCell.innerHTML = headers[i];
    headerRow.appendChild(headerCell);
  };

  for (var i = 0; i < shops.length; i++) {
    shops[i].render();
  };
};

var userSubmittedSite = function(siteInput, minInput, maxInput, salesInput) {
  var userInput = new Location(siteInput, minInput, maxInput, salesInput);
  return userInput;
};

var storeInput = function() {
  var siteInput = document.getElementById('userSite').value;
  var minInput = document.getElementById('minInput').value;
  var maxInput = document.getElementById('maxInput').value;
  var salesInput = document.getElementById('salesInput').value;
  var userInput = userSubmittedSite(siteInput, minInput, maxInput, salesInput);
  if (isNaN(minInput) || isNaN(maxInput) || isNaN(salesInput)) {
    return null;
  } else {
    shops.push(userInput);
    userInput.render();
    for (var i = 0; i < shops.length-1; i++) {
      if (userInput.site == shops[i].site) {
        shops[i] = userInput;
        shops.splice(-1, 1);
        renderAll();
      }
    }
  }
};

var shop1 = new Location('Downtown', 8, 43, 4.5);
var shop2 = new Location('Capitol Hill', 4, 37, 2);
var shop3 = new Location('South Lake Union', 9, 23, 6.33);
var shop4 = new Location('Wedgewood', 2, 28, 1.25);
var shop5 = new Location('Ballard', 8, 58, 3.75);
var shops = [shop1, shop2, shop3, shop4, shop5];

var createStoreForm = document.getElementById("btn");
createStoreForm.addEventListener('click', storeInput); 

renderAll();