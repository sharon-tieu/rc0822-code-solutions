/* exported Bank */
function Bank(holder, balance) {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

// function to open an account:
//    when the opening balance is not a positive number, then return null
Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || balance === '' || balance === undefined || !Number.isInteger(balance)) {
    return null;
  } else if (balance > 0 && Number.isInteger(balance)) {
    // console.log('holder:', holder);
    // console.log('balance:', balance);
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    // console.log(account);
    // console.log(this.accounts);
    this.nextAccountNumber++;
    return account.number;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var balance = this.accounts[i].getBalance();
    total += balance;
  }
  return total;
};
// iterate through all accounts
// with each account, get the balance with .getBalance
