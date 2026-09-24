const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 120,
    category: "Electronics",
    inStock: true,
    rating: 4.5,
    brand: "AudioPro",
  },
  {
    id: 2,
    name: "Ergonomic Mechanical Keyboard",
    price: 85,
    category: "Electronics",
    inStock: false,
    rating: 4.8,
    brand: "KeyTech",
  },
  {
    id: 3,
    name: "Cotton Casual T-Shirt",
    price: 25,
    category: "Fashion",
    inStock: true,
    rating: 4.1,
    brand: "UrbanStyle",
  },
  {
    id: 4,
    name: "Slim Fit Denim Jeans",
    price: 65,
    category: "Fashion",
    inStock: true,
    rating: 3.9,
    brand: "UrbanStyle",
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    price: 150,
    category: "Electronics",
    inStock: true,
    rating: 4.6,
    brand: "FitLife",
  },
  {
    id: 6,
    name: "Running Sports Shoes",
    price: 110,
    category: "Footwear",
    inStock: false,
    rating: 4.7,
    brand: "Stride",
  },
  {
    id: 7,
    name: "Leather Casual Sneakers",
    price: 95,
    category: "Footwear",
    inStock: true,
    rating: 4.3,
    brand: "Stride",
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 20,
    category: "Home & Living",
    inStock: true,
    rating: 4.0,
    brand: "EcoLife",
  },
  {
    id: 9,
    name: "Minimalist Desk Lamp",
    price: 45,
    category: "Home & Living",
    inStock: true,
    rating: 4.4,
    brand: "BrightHome",
  },
  {
    id: 10,
    name: "Gaming Mouse Pad XL",
    price: 15,
    category: "Electronics",
    inStock: true,
    rating: 4.2,
    brand: "KeyTech",
  },
];

// Task 1 (Search Feature):
// Aisa logic likhein jo products array mein se un products ka naya array banaye jinke name mein "shirt" ya "watch" aata ho (search case-insensitive honi chahiye, yani chahe capital ho ya small, match kar jaye).

const p = products.filter((n) => {
  return (
    n.name.toLowerCase().includes("watch") ||
    n.name.toLowerCase().includes("shirt")
  );
});
console.log(p);

// Task 2 (Category Filter):
// Ek aisa function ya logic banayein jo products array mein se sirf "Electronics" category ke products ko filter karke naya array banaye.
const pro = products.filter((e) => e.category === "Electronics");
console.log(pro);

// Task 3 (Price Filter):
// Aisa logic likhein jo sirf un products ko filter kare jinki price $50 se $120 ke darmayan (inclusive) ho.

console.log("task 3");
const item = products.filter((e) => e.price >= 50 && e.price <= 120);
console.log(item);

// Task 4 (Sorting):
// Products ko Price ke hisab se High to Low (Descending Order) sort karein.

// (Reminder: Original products array change na ho, to spread operator [...] se copy bana kar sort karein).
console.log("Task 4: ");

const sortedProducts = [...products].sort((a, b) => b.price - a.price);
console.log(sortedProducts);

// Task 5 (Combined Filter & Sort Pipeline):
// Aisa ek single function ya block of code likhein jo yeh saare filters ek sath (in sequence) apply kare:

// Category: Sirf "Electronics" ho.

// Stock: Sirf inStock: true ho.

// Price Range: Price $50 se $150 ke darmayan ho.

// Sort: End par result ko Price: Low to High (Ascending) sort karein.

// Product Count: Total kitne products match hue, unka count (.length) console par print karein.

// (Tip: Aap chainin
console.log("---------------Task 5----------------------");
const res = products.filter((e) => e.category === "Electronics");
const result = res.filter((e) => e.inStock === true);
const r = result.filter((e) => e.price >= 50 && e.price <= 120);
const re = [...r].sort((a, b) => a.price - b.price);
const l = re.length;

console.log(l);
console.log(re);
// const anse = products
//   .filter((e) => e.category === "Electronics")
//   .filter((e) => e.inStock === true)
//   .filter((e) => e.price >= 50 && e.price <= 120)
//   .sort((a, b) => a.price - b.price).length;
// console.log(anse);
