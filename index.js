var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100));
  cart.push({itemName: (item), itemPrice: (price)})
    return (`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0) {
    return (`Your shopping cart is empty.`); 
  }
  else if (cart.length === 1) {
    var cartItem = (`${cart[0].itemName} at $${cart[0].itemPrice}`) // make this a for and iteratae through the cart to add to a new array "cartItem"
    return (`In your cart, you have ${cartItem}.`); // reference new array 
  }
}


function total() {
  var cost = []
  for (let i = 0; i < cart.length; i++) {
    cost.push(cart[i].itemPrice)
  }
  function sum(total, price) {
    return total + price;
  }
  return cost.reduce(sum)
}

function removeFromCart(item) {


}

function placeOrder(cardNumber) {
  if (cardNumber) {
    return (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  else {
      return (`Sorry, we don't have a credit card on file for you.`);
  }
}
