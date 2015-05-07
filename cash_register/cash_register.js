var line_items = [
    {description: "aardvark", price: 425, qty: -1},
    {description: "PruNe", price: 1.99, qty: 1},
    {description: "potato", price: .79, qty: -10},
    {description: "zebra", price: 525.25, qty: 1},
    {description: "SpinAch", price: 2.99, qty: 1},
    {description: "zepplin", price: 20000, qty: 1},
    {description: "PetUnia", price: 1.25, qty: 12},
    {description: "squash", price: 2.35, qty: 3}
];

var coupons = [
    {description: "Zebra", discount: 100, limit: 1},
    {description: "squash", discount: 1.00, limit: 1},
    {description: "mouse", discount: 2.00, limit: 10}
];

var $entries, 
    $subTotal,
    $salesTotal,
    $salesTax;

var tax = 0.0725;

$(document).ready(function(){

  $entries = $("#entries");
  $subTotal = $('#subtotal');
  $salesTax = $('#salestax');
  $salesTotal = $('#total');

  updateItems();
  updateSubTotal();
  updateSalesTax();
  updateSalesTotal();


});

function addItem(price, title, quantity) {
  // YUCK! Let's refactor this!
  var html_string = (
        "<tr>" +
          "<td>" +  title + "</td>" +
          "<td>" + quantity + "</td>" +
          "<td>" + price + "</td>" +
        "</tr>"
  );
  $entries.append(html_string);
  //console.log('here');
}

function updateItems() {
 
  var fixCharacters = myUtils.myMap(line_items, function(v, i, arr) {
    v.description = v.description.toLowerCase();
    v.description = v.description.charAt(0).toUpperCase() + v.description.slice(1);
    return v;
  });


  function compare(a, b) {
    if (a.description.charAt(0) > b.description.charAt(0)) {
      return 1;
    }
    if (a.description.charAt(0) < b.description.charAt(0)) {
      return -1;
    }
    // a must be equal to b
    return 0;
  };


  line_items = fixCharacters.sort(function(a, b) {
    compare(a, b);
  });


  myUtils.myEach(line_items, function(v,i){
    addItem(v.price, v.description, v.qty);
  });
}



function salesTotal() {
  return subTotal() + salesTax();
}

function updateSalesTotal() {
  $salesTotal.text("$" + salesTotal());
}
  
function salesTax() {
  return subTotal() * tax;
}

function updateSalesTax() {
  $salesTax.text("$" + salesTax()); 
}
    
 
function subTotal() {
   return myUtils.myReduce(line_items, function(p, v, i, arr) {
    return p + v.price;
  }, 0);
  
}

function updateSubTotal() {
  // Refactored using our helper functions :D
  //var subTotalPrice = 0; // !! That won't do! Calculate the actual subtotal.
  $subTotal.text("$" + subTotal()); 
}

