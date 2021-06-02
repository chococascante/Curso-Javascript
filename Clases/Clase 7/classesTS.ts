class Animal {
  protected nombre: string;
  private posicion: number;
  private color: string;

  constructor(nombre: string, color: string) {
    this.nombre = nombre;
    this.posicion = 0;
    this.color = color;
  }

  protected moverse(posicion: number) {
    this.posicion = posicion;
  }
}

class Perro1 extends Animal {
  private dueno: string;
  private raza: string;
  private tamano: string;
  private sexo: string;
  private fechaNacimiento: string;

  constructor(
    nombre: string,
    color: string,
    dueno: string,
    raza: string,
    tamano: string,
    sexo: string,
    fechaNacimiento: string
  ) {
    super(nombre, color);
    this.dueno = dueno;
    this.raza = raza;
    this.tamano = tamano;
    this.sexo = sexo;
    this.fechaNacimiento = fechaNacimiento;
  }

  public ladrar() {
    console.log(`Woof soy ${this.nombre}!`);
  }
}

class Gato extends Animal {
  constructor(nombre: string, color: string) {
    super(nombre, color);
  }

  public maullar() {
    console.log("Meow!");
  }
}

const hati1 = new Perro1(
  "Hati",
  "Luis",
  "Negro",
  "Labrado/Husky",
  "Mediano",
  "Hembra",
  "16 de diciembre"
);

const michi = new Gato("Michi", "Negro");
console.log(michi);

console.log(hati1);
