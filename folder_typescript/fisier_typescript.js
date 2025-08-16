var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = ["apple", "apricot", "nuts", "pineapple", "blackberries"];
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (nume) {
        this.name = nume;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Student.prototype.getData = function () {
        return this.getName() + " " + this.age;
    };
    return Student;
}(Person));
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }
// a.forEach((item) => console.log(item));
// afiseaza concatenarea elementelor din param
function concatenare(param) {
    var cuv = "";
    param.forEach(function (item) { return cuv = cuv + " " + item; });
    cuv = cuv.trim();
    console.log(cuv);
}
concatenare(a);
var s1 = new Student("nume_1", 20);
console.log(s1.getData());
