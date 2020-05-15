function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
}
const username = new Field('my_username');
const password = new Field('my_password');
const birthday = new Field('2010/10/10');

const fields = [
  username,
  password
];

const formIsValid = fields.every(function (field) {
  return field.validate();
});

if (formIsValid) {
  // サーバーにリクエストを投げる
} else {
  // エラー表示をする
}
