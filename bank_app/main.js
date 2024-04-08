class BankAccount{
   
    constructor(accountNumber, ownerName, balance){
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
    }

   
//: Adds the specified amount to the account balance.
   deposit(amount){
    this.balance += amount;
    console.log(`Deposited amount $${amount} into account ${this.accountNumber}.`);
   }

   withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn amount $${amount}  from account ${this.accountNumber}.`);
    } else {
      console.log(`Insufficient balance in account ${this.accountNumber}.`);
    }
  }

  getBalance() {
    console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
  }
  displayAccountInfo() {
    console.log(`Account Number : ${this.accountNumber}`);
    console.log(`Owner Name : ${this.ownerName}`);
    console.log(`Balance : $${this.balance}`);
  }  
 
}

// Create multiple instances of the BankAccount class
const account1 = new BankAccount('1001', 'Md Fazlul Kader', 700);
const account2 = new BankAccount('1002', 'Jhon Due', 2000);

// Displays the account information including account number, owner name, and balance:
console.log("Initial Account Information");
console.log("============================");
account1.displayAccountInfo();
account2.displayAccountInfo();
console.log("\n");



// Deposited withdrawal Information
console.log("Deposited and withdrawal");
console.log("============================");
account1.deposit(200); 
account1.withdraw(100); 

console.log("------------------");
account2.deposit(100); 
account2.withdraw(2200); 
console.log("\n");

// Demonasreate Acccount Information
console.log("Updated Account Information:");
console.log("============================");
account1.displayAccountInfo();
account2.displayAccountInfo();



