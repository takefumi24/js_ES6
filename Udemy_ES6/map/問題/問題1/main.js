//mapを使って配列内のオブジェクトの「height」だけを取得し、配列を作成する
var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];

var heights = images.map(function (image) {
  return image.height;
});
console.log(heights);
