// Importing module
// import { addToCard, totalPrice as price, tq } from "./shoppingCart.js";

// addToCard("bread", 5);
// console.log(price, tq);
// console.log("Importing module");

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCard("bread", 5);

import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 5);
add("apples", 4);
// console.log(cart);

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    {
      product: "bread",
      quantity: 5,
    },
    {
      product: "pizza",
      quantity: 5,
    },
  ],
  user: { loggedIn: true },
};

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
