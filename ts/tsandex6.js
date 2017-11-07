"use strict";
console.log("################ let and const ###################");
var variable = "value";
variable = "another value";
console.log(variable);
var maxval = 500;
console.log(maxval);
//Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
console.log("################ Arrow function ##################");
var addNumber = function (val1, val2) {
    return (val1 + val2);
};
console.log(addNumber(10, 20));
var multipleNumber = function (number1, number2) {
    var req = number1 * number2;
    return req;
};
console.log(multipleNumber(10, 40));
var devideNumber = function (value1, value2) { return value1 / value2; };
console.log(devideNumber(10, 2));
var greet = function () {
    console.log("Hello !!!");
};
var greetFriend = function (friendName) { console.log("Hello " + friendName); };
greetFriend("Liver");
//Default parameter
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done !! ", start);
};
countDown();
countDown(20);
//Rest and spread
console.log("################### Rest and Spread ####################");
var arrNumber = [1, 8, 9, 50, -9];
console.log(Math.max.apply(Math, arrNumber));
//# sourceMappingURL=tsandex6.js.map