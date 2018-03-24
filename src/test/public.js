"use strict";
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.cs = function () {
        return console.log(this.name);
    };
    return Animal;
}());
var a = new Animal("hello");
a.cs();
