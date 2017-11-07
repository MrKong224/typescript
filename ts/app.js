"use strict";
console.log('############# Hello Typescript World ######################');
//String
var myName = 'Nuttkorn';
//Number
var myNumber = 2.75;
myNumber = 1;
//Boolean
var isCorrect = true;
isCorrect = false;
//Any
var realAge;
realAge = 30;
realAge = 'Thrity';
//Arry
var hobbies = ["Cooking", "Sports"];
//console.log(typeof hobbies + ' -- ' + hobbies[0] + ' -- ' + hobbies[1])
//tuples
var address = ["Superstreet", 99];
//console.log(address[1])
//emun
var grade;
(function (grade) {
    grade[grade["F"] = 0] = "F";
    grade[grade["D"] = 1] = "D";
    grade[grade["E"] = 2] = "E";
    grade[grade["B"] = 3] = "B";
    grade[grade["A"] = 4] = "A";
})(grade || (grade = {}));
var studentgrade = grade.A;
//console.log(studentgrade)
//any
var car = "BMW";
//console.log(car)
car = { brand: "TOYOTA", series: "3" };
//console.log(car)
//functions 
function returnMyName() {
    return myName;
}
function SayHello() {
    console.log("Hello no return");
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(2,3))
var voidFunc = SayHello;
voidFunc();
var myMulti;
myMulti = multiply;
console.log(myMulti(5, 2));
//object
var userData;
userData = {
    name: "KingKong",
    age: 29,
    email: "abc@gmail.com"
};
console.log(userData.name);
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        var d = all;
        return this.data;
    }
};
//union type
var temp;
temp = 20;
temp = "20";
temp = false;
//check type
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("The finalValue is string");
}
//never
function neverFunc() {
    throw new Error('An error!');
}
neverFunc();
//Nullable types
var canBeNull = 12;
canBeNull = null;
canBeNull = 15;
var canAlsoBeNull;
canAlsoBeNull = null;
canAlsoBeNull = 12;
//# sourceMappingURL=app.js.map