const Member = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const mem = new Member('邦彦', '山田');
mem.getName = function () {
  return `${this.lastName} ${this.firstName}`;
}
console.log(mem.getName());
