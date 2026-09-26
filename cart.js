let cart = [
  {
    id: 101,
    title: "React JS Masterclass",
    price: 50,
    quantity: 1,
    category: "Web",
  },
  {
    id: 102,
    title: "JavaScript Fundamentals",
    price: 30,
    quantity: 2,
    category: "Web",
  },
  {
    id: 103,
    title: "Python for Data Science",
    price: 70,
    quantity: 1,
    category: "Data",
  },
  {
    id: 104,
    title: "UI/UX Design Basics",
    price: 40,
    quantity: 1,
    category: "Design",
  },
];
function addItem(newItem) {
  return (cart = [...cart, newItem]);
}

addItem({
  id: 105,
  title: "Node.js Essentials",
  price: 60,
  quantity: 1,
  category: "Web",
});
console.log(cart);

function updatedQunatity(itemId, newQuantity) {
  cart = cart.map((c) => {
    if (c.id === itemId) {
      return { ...c, quantity: newQuantity };
    }
    return c;
  });
}
updatedQunatity(105, 99);
console.log(cart);

function removeItem(itemId) {
  cart = cart.filter((c) => {
    return c.id !== itemId;
  });
}
removeItem(102);
console.log(cart);
function calculateTotalBill() {
  return cart.reduce((acc, crntval) => {
    return acc + crntval.quantity * crntval.price;
  }, 0);
}
const x = calculateTotalBill();
console.log("total");
console.log(x);
