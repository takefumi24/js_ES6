const products = [
{name:'きゅうり', type:'野菜'},
{name:'バナナ', type:'フルーツ'},
{name:'セロリ', type:'野菜'},
{name:'オレンジ', type:'フルーツ'},
];

const filteredProducts = [];
for (var i = 0; i < products.length; i++){
  if (products[i].type === 'フルーツ') {
    filteredProducts.push(products[i]);
  }
}

products.filter(function (product) {
  return product.type === 'フルーツ';
});
