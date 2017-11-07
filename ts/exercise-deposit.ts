type bankAccountType = {
    money:number,
    deposit:(val:number)=>void
}
let bankAccount:bankAccountType = {
    money: 1000,
    deposit: function(val:number){
        this.money += val
    }
}

type mySelfType = {
    name: string, 
    bankAccount:bankAccountType, 
    hobbies: [string,string]
}
let mySelf:mySelfType = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
}

mySelf.bankAccount.deposit(2000)
console.log(mySelf)