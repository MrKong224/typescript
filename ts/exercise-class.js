"use strict";
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.setAcceleration = function (acceleration) {
        this.acceleration = acceleration;
    };
    Car.prototype.honk = function () {
        console.log("Toooooooooo!");
    };
    Car.prototype.addSpeed = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var aCar = new Car("BMW");
aCar.acceleration = 100;
console.log(aCar);
aCar.honk();
aCar.addSpeed(100);
console.log(aCar);
var rectangle = /** @class */ (function () {
    function rectangle() {
    }
    rectangle.prototype.calSize = function () {
        return this.width * this.length;
    };
    return rectangle;
}());
var rect = new rectangle();
rect.width = 10;
rect.length = 20;
var size = rect.calSize();
console.log(size);
var person2 = /** @class */ (function () {
    function person2() {
        this._firstname = "";
    }
    Object.defineProperty(person2.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstname = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return person2;
}());
var pers = new person2();
console.log(pers.firstname);
pers.firstname = "May";
console.log(pers.firstname);
pers.firstname = "KingKong";
console.log(pers.firstname);
//# sourceMappingURL=exercise-class.js.map