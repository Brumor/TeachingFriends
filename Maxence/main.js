

///Exercice 1
function getDayOfMonth () {
  var d = new Date();
  document.getElementById("date").innerHTML = d.getDate();
}


///Exercice 2
function calculatePrice () {
  var discount = document.getElementById("discount").value;
  var quantity = document.getElementById("quantity").value;

  const pricePerCoffee = 2;
  var priceFinale = pricePerCoffee * quantity * (1 - discount/100);

  document.getElementById("displayPrice").innerHTML = priceFinale + "€";
}
