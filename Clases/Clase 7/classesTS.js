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
var Animal = /** @class */ (function () {
    function Animal(nombre, color) {
        this.nombre = nombre;
        this.posicion = 0;
        this.color = color;
    }
    Animal.prototype.moverse = function (posicion) {
        this.posicion = posicion;
    };
    return Animal;
}());
var Perro1 = /** @class */ (function (_super) {
    __extends(Perro1, _super);
    function Perro1(nombre, color, dueno, raza, tamano, sexo, fechaNacimiento) {
        var _this = _super.call(this, nombre, color) || this;
        _this.dueno = dueno;
        _this.raza = raza;
        _this.tamano = tamano;
        _this.sexo = sexo;
        _this.fechaNacimiento = fechaNacimiento;
        return _this;
    }
    Perro1.prototype.ladrar = function () {
        console.log("Woof soy " + this.nombre + "!");
    };
    return Perro1;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, color) {
        return _super.call(this, nombre, color) || this;
    }
    Gato.prototype.maullar = function () {
        console.log("Meow!");
    };
    return Gato;
}(Animal));
var hati1 = new Perro1("Hati", "Luis", "Negro", "Labrado/Husky", "Mediano", "Hembra", "16 de diciembre");
var michi = new Gato("Michi", "Negro");
console.log(michi);
console.log(hati1);
