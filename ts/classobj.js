"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
        this.age = 29;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Kong", "KingKong");
person.email = 'koong123@gmail.com';
console.log(person);
person.printAge();
// person.setType("Cool guy") this work as private function
// Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    //name = "Max"
    function Max(usrname) {
        var _this = _super.call(this, "Anna", usrname) || this;
        _this.age = 30;
        return _this;
    }
    return Max;
}(Person));
var max = new Max("max123");
max.email = "max22@gmail.com";
console.log(max);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            this._species = value;
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var pln = new Plant();
console.log(pln.species);
pln.species = "New tree";
console.log(pln.species);
// Static  Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calCirm = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calCirm(8));
//Abstract Class
var Project = /** @class */ (function () {
    function Project() {
        this.projectname = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changePrjName = function (name) {
        return this.projectname = name;
    };
    return ITProject;
}(Project));
var prj = new ITProject();
console.log(prj);
prj.budget;
prj.changePrjName("Super Project");
console.log(prj);
//Private constructor
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.getInstance) {
            OnlyOne.instance = new OnlyOne('This is only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var right = OnlyOne.getInstance();
console.log(right.name);
//# sourceMappingURL=classobj.js.map