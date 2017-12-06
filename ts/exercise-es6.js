"use strict";
var multiple = function (num, power) { return num * power; };
console.log(multiple(10, 2));
var greeting2 = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log("Hello " + name);
};
greeting2();
greeting2('Kong');
var arrNum = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, arrNum));
function makeNewArry() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
makeNewArry(55, 20);
var arrNum2 = [3.89, 2.99, 1.38];
var re1 = arrNum2[0], re2 = arrNum2[1], re3 = arrNum2[2];
console.log(re1, re2, re3);
var sciData = { firstName: "Will", experience: 12 };
var sciname = sciData.firstName, sciexp = sciData.experience;
console.log(sciname, sciexp);
//# sourceMappingURL=exercise-es6.js.map