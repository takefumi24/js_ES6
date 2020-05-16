var expense = {
  type: '交際費',
  amount: '4500 Jpy'
};

// var type = expense.type;
// var amount = expense.amount;

//ES6

const { type, amount } = expense;
console.log(type);
console.log(amount);
