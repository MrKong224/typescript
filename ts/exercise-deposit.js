"use strict";
var bankAccount = {
    money: 1000,
    deposit: function (val) {
        this.money += val;
    }
};
var mySelf = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
mySelf.bankAccount.deposit(2000);
console.log(mySelf);
//# sourceMappingURL=exercise-deposit.js.map