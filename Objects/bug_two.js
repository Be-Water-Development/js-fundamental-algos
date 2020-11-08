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
    this.price -= discount;

    return this.price;
  },
};

item.discount(20); // should return 40
//=> 40
item.discount(50) > // should return 25
  //=> 20
  item.discount(25); // should return 37.5
//=> 15
