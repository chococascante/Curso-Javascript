class Animal {
  constructor(nombre, color) {
    this.nombre = nombre;
    this.posicion = 0;
    this.color = color;
  }

  moverse(posicion) {
    this.posicion = posicion;
  }
}

class Perro extends Animal {
  // Son los valores que recibe del new
  constructor(nombre, dueno, raza, color, tamano, sexo, fechaNacimiento) {
    super(nombre, color);
    this.dueno = dueno;
    this.raza = raza;
    this.tamano = tamano;
    this.sexo = sexo;
    this.fechaNacimiento = fechaNacimiento;
  }

  // Métodos
  ladrar() {
    console.log(`Woof soy ${this.nombre}!`);
  }

  cambiarTamano(tamano) {
    this.tamano = tamano;
  }
}

// Instancias, no clases
const hati = new Perro(
  "Hati",
  "Luis",
  "Labrado/Husky",
  "Negro",
  "Mediano",
  "Hembra",
  "16 de diciembre"
);

const akamaru = new Perro(
  "Akamaru",
  "Luis",
  "Malamute/Coyote",
  "Blanco",
  "Grande",
  "Macho",
  "16 de diciembre"
);

const siena = new Perro(
  "Siena",
  "Luis",
  "Dalmata/Weimaraner",
  "Café",
  "Pequeña",
  "Hembra",
  "16 de diciembre"
);

siena.ladrar();
hati.ladrar();
akamaru.ladrar();

siena.llamarCambiarTamano("Grande");
console.log(siena);
