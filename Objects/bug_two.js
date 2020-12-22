// A grocery store uses a JavaScript function to calculate discounts on various items. They are testing out
// various percentage discounts but are getting unexpected results.
// Go over the code, and identify the reason why they aren't getting
// the expected discounted prices from the function. Then, modify the code so that it produces the correct results.

let item = {
  name: "Foo",
  description: "Fusce consequat dui est, semper.",
  price: 50,
  quantity: 100,
  discount: function (percent) {
    let discount = (this.price * percent) / 100;

    let newPrice = this.price - discount;
    //The issue was the price object was being modified on each pass through the function. The previous line, "this.price =- discount" was
    //reassigning the value of price with the assignment operator, which caused the price to be altered between calls to the function.
    //By declaring a newPrice variable, the original price object is not being altered.
    return newPrice;
  },
};

console.log(item.discount(20)); // should return 40
//=> 40
console.log(item.discount(50)); // should return 25
//=> 20
console.log(item.discount(25)); // should return 37.5
//=> 15

//Thumbs up
