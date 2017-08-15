var faker = require("faker");

console.log("==================");
console.log("=== BEM VINDO! ===");
console.log("==================");

for (var i = 0; i < 10; i++) {
  console.log('Produto: ' + faker.commerce.productName() + ' Preço: R$' + faker.commerce.price());
}