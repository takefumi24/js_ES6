const users = [
  { name: '太郎' },
  { name: '次郎' },
  { name: '三郎' }
];

var user;

users.find(function (user) {
  return user.name === '次郎';
});
