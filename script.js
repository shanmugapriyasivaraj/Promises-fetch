// Promises

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };
// let is_shop_open = false;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order(0000, () => console.log("Production has started"));
//   })
//   .then(() => {
//     return order(2000, () => console.log("the fruit was chopped"));
//   })
//   .then(() => {
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);
//   })
//   .then(() => {
//     return order(1000, () => console.log("Start the machine"));
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`Icecream Placed on ${stocks.holder[0]}`);
//     }).then(() => {
//       return order(3000, () => {
//         console.log(`${stocks.toppings[0]} was selected`);
//       }).then(() => {
//         return order(1000, () => {
//           console.log("Icecream was served");
//         });
//       });
//     });
//   })

//   // Error handling

//   .catch(() => {
//     console.log("Customer left");
//   })

//   .finally(() => {
//     console.log("Day ended,shop is closed");
//   });

// async/await

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };
// let is_shop_open = true;

// let oreder = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };
// oreder();

// async function order() {
//   try {
//     await abc; //fake function
//   } catch (error) {
//     console.log("abc doesn't exist", error);
//   } finally {
//     console.log("runs code anyways");
//   }
// }
// order().then(() => {
//   console.log("hi");
// });

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };
// let is_shop_open = true;

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Which topping would you love?"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log(" A ");
//   console.log(" B ");
//   console.log(" C ");

//   await toppings_choice();
//   console.log(" D ");
//   console.log(" E ");
// }
// kitchen();

// console.log("Cleaning the dishes");
// console.log("Cleaning the tables");
// console.log("Taking others orders");

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0000);
    console.log("Start the production");

    await time(2000);
    console.log("cut the fruit");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

    await time(1000);
    console.log("Start the machine");

    await time(2000);
    console.log(`Icecream placed on ${stocks.holder[0]}`);

    await time(2000);
    console.log(`${stocks.toppings[0]} was selected`);

    await time(1000);
    console.log("Serve icecream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("Day ended, shop is closed");
  }
}
kitchen();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((userDetails) => console.log(userDetails));

const getDetails = async () => {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let details = await data.json();
    console.log(details);
    details.forEach((userDetails) => {
      console.log(userDetails.name);
    });
  } catch (errMsg) {
    console.log(errMsg);
  }
};
getDetails();
