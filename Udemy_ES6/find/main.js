var users = [
  {name:'太郎'},
  {name:'次郎'},
  {name:'三郎'},
];

var user;

//for文
for (let i = 0; i < users.length; i++) {
  if (users[i].name === '次郎') {
    user = users[i];
    break;
  }
}
console.log(user);

//findメソッド
users.find(function (user) {
  return user.name === '次郎';
});

//復習
function Car(model) {
  this.model = model;
}

var cars = [
  new Car('プリウス'),
  new Car('ノート'),
  new Car('アクア'),
];

cars.find(function (car) {
  return car.model === 'アクア';
});

//応用
var posts = [
  { id: 1, title: '古い投稿' },
  { id: 2, title: '新しい投稿' },
];

var comment = { postId: 2, content: 'イイね!' };

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  })
}

console.log(postForComment(posts, comment));

//実務では、一覧から詳細ページに
