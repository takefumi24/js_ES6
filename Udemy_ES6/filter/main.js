var products = [
  {name:"きゅうり",type: "野菜"},
  {name:"バナナ",type: "フルーツ"},
  {name:"セロリ",type: "野菜"},
  {name:"オレンジ",type: "フルーツ"},
];

var filteredProducts = [];

//for文
for (let i = 0; i < products.length; i++) {
  if (products[i].type === 'フルーツ') {
    filteredProducts.push(products[i]);
  }
}

//filterメソッド
products.filter(function (product) {
  return product.type === "フルーツ";
})

//応用の使い方
var products = [
  { name: "きゅうり", type: "野菜", quantity: 0, price: 1 },
  { name: "バナナ", type: "フルーツ", quantity: 10, price: 15 },
  { name: "セロリ", type: "野菜", quantity: 30, price: 9},
  { name: "オレンジ", type: "フルーツ", quantity: 3, price: 5},
];
//種類が野菜で、量が0個より多くて、値段が10より小さい
const a = products.filter(function (product) {
  return product.type === '野菜'
    && product.quantity > 0
    && product.price < 10;
});
console.log(a);

//実務では関連するデータだけに絞り込みたい時に使える
