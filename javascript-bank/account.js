/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

// deposit only whole numbers (integers). Cannot deposit 'cents'
// '.' cannot be included in amount so return false if it does have a '.'
// create a transaction function with a new object of ('deposit, amount) and assign it to a var
// deposit amount cannot be a negative number so must be > 0
// use Math.floor() which is a function that returns the largest integer less than or equal to a given number.
// if (Math.floor(amount) > 0) then it should push that number into this.transactions array [] and return true, else it will return false.

Account.prototype.deposit = function (amount) {
  if (String(amount).includes('.')) {
    return false;
  }
  var deposit = new Transaction('deposit', amount);
  if (Math.floor(amount) > 0) {
    this.transactions.push(deposit);
    return true;
  }
  return false;
};

// write a function for withdrawals:
// if the amount is greater than 0 and rounded up to the nearest number to make it an integer (use Math.floor(amount))
// make a new variable for a new transaction function for withdrawals
// push the withdrawals to this.transactions array and then return true
// else, return false
Account.prototype.withdraw = function (amount) {
  if (amount === Math.floor(amount) && amount > 0) {
    var withdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawal);
    return true;
  } else {
    return false;
  }
};

// write a f(x) to getBalance
// establish new vars for totalWithdrawals and totalDeposits
// assign 0 to this.balance
// go through all transactions to filter out whether they are withdrawals or deposits (filter out transaction type)
// if they are deposits: add up all deposits together
// else- if they are withdrawals: add up all withdrawals together
// find the difference between deposits and withdrawals to get balance

Account.prototype.getBalance = function () {
  var totalDeposits = 0;
  var totalWithdrawals = 0;
  this.balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalDeposits += this.transactions[i].amount;
    } else {
      totalWithdrawals += this.transactions[i].amount;
    }
  }
  this.balance = totalDeposits - totalWithdrawals;
  return this.balance;
};
