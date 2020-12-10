// A grocery store uses a JavaScript function to calculate discounts on 
// various items. They are testing out
// various percentage discounts but are getting unexpected results.
// Go over the code, and identify the reason why they aren't getting
// the expected discounted prices from the function. Then, modify the 
// code so that it produces the correct results.

// original 

// let item = {
//   name: "Foo",
//   description: "Fusce consequat dui est, semper.",
//   price: 50,
//   quantity: 100,
//   discount: function (percent) {
//     console.log(this.price, percent)
//     let discount = (this.price * percent) / 100;
//     this.price -= discount;

//     return this.price;
//   },
// };

// updated

let item = {
  name: "Foo",
  description: "Fusce consequat dui est, semper.",
  price: 50,
  quantity: 100,
  discount: function (percent) {
    // console.log(this.price, percent)
    let discount = (this.price * percent) / 100;
    // we can just return the price - discount
    // instead of modifying the price value in the object
    return this.price - discount;
  },
};

console.log(item.discount(20)); // should return 40
//=> 40
console.log(item.discount(50)) > // should return 25
  //=> 20
  console.log(item.discount(25)); // should return 37.5
//=> 15

// the reason that the function discount returns the incorrect prices
// in example 2 and 3 is because the function modifies the original price
// value. This means that for the second and third function runs, the price 
// value is 40 and 20 instead of 50, resulting in incorrect discounted price
// values.