// const cart = [
//   { item: "Shirt", price: 1000, quantity: 2 },
//   { item: "Jeans", price: 2000, quantity: 1 },
//   { item: "Shoes", price: 3000, quantity: 1 },
// ];

// const n = cart.reduce((acc, crntVal) => {
//   return acc + crntVal.price * crntVal.quantity;
// }, 0);
// console.log(n);

const inventory = [
  {
    id: 101,
    name: "Laptop",
    price: 1200,
    category: "Tech",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 102,
    name: "Mouse",
    price: 25,
    category: "Tech",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 103,
    name: "Keyboard",
    price: 80,
    category: "Tech",
    inStock: false,
    rating: 4.5,
  },
  {
    id: 104,
    name: "Shirt",
    price: 35,
    category: "Fashion",
    inStock: true,
    rating: 4.0,
  },
  {
    id: 105,
    name: "Jeans",
    price: 60,
    category: "Fashion",
    inStock: true,
    rating: 3.9,
  },
  {
    id: 106,
    name: "Shoes",
    price: 110,
    category: "Fashion",
    inStock: false,
    rating: 4.7,
  },
];
// Task 1:
// Check karein ke kya inventory mein koi bhi item aisa hai jis ki price $1000 se zyada hai? Answer console par print karein.
const ans = inventory.some((n) => n.price >= 1000);
console.log(ans);

// ID 104 wale product ka poora details object dhoond kar console par print karein.
const res = inventory.find((n) => n.id === 104);
console.log(res);

// Task 3:
// Inventory ke tamam products par 10% discount lagayein aur ek naya array banayein jisme har product ka name aur discountedPrice ho (price * 0.9).
const r = inventory.map((n) => {
  return {
    name: n.name,
    discountedPrice: n.price * 0.9,
  };
});
console.log(r);
//Task 4:
// Inventory mein jitne bhi In-Stock (inStock: true) products hain, un sab ki kul qeemat (Total Price) calculate karke console par print karein.
const total = inventory.reduce((acc, crntVal) => {
  if (crntVal.inStock === true) {
    return acc + crntVal.price;
  }
  return acc; // Agar inStock false hai toh total wahi rahega
}, 0);

console.log(total); // Output: 1320
