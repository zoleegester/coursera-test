(function () {
'use strict';


var toBuyList = [
	{ name: "bread", quantity: 2 },
	{ name: "pasta", quantity: 3 },
	{ name: "cheese", quantity: 4 },
	{ name: "garlic", quantity: 5 },
	{ name: "wine", quantity: 6 }
];

var boughtList = [];


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


	ToBuyController.$inject = ['ShoppingListCheckOffService'];
		function ToBuyController(ShoppingListCheckOffService) 
		{
		var toBuyCtrl = this;
		toBuyCtrl.items = ShoppingListCheckOffService.getItemsToBuy();
		toBuyCtrl.bought = function (index) {
		ShoppingListCheckOffService.buyItem(index);
  };
}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
		function AlreadyBoughtController(ShoppingListCheckOffService) 
		{
		var boughtCtrl = this;  
		boughtCtrl.items = ShoppingListCheckOffService.getBougthItems();
	};

function ShoppingListCheckOffService() {
  var service = this;
  
  
  var itemsToBuy = toBuyList; 
  var boughtItems = boughtList;
  
 
  service.buyItem = function (itemIndex) {
	var item =  itemsToBuy[itemIndex];
	service.addBoughtItem(item);
    removeFromItemsToBuy(itemIndex);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };
  
  service.getBougthItems = function () {
    return boughtItems;
  };
  
  service.addBoughtItem = function (item) {
    boughtItems.push(item);
  };
  
  
  function removeFromItemsToBuy(itemIndex) {
	  itemsToBuy.splice(itemIndex, 1);
  };
}
})();
