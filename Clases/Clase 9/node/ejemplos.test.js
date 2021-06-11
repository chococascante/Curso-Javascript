const {
  esStringVacio,
  mayuscula,
  borrarAtributo,
  interseccion,
  barajarArreglo,
} = require("./ejemplos");

describe("Módulo ejemplo", () => {
  it("esStringVacio maneja string vacio", () => {
    const resultado = esStringVacio("");
    expect(resultado).toBe(true);
  });

  it("esStringVacio maneja string NO vacio", () => {
    const resultado = esStringVacio("hola");
    expect(resultado).toBe(false);
  });

  it("mayuscula", () => {
    const resultado = mayuscula("luis");
    expect(resultado).toBe("Luis");
  });

  it("borrarAtributo con una llave que existe", () => {
    const objeto = {
      nombre: "Betzabet",
      apellido: "Chaves",
      edad: 105,
    };

    borrarAtributo(objeto, "edad");

    expect(objeto).toEqual({
      nombre: "Betzabet",
      apellido: "Chaves",
    });
  });

  it("interseccion de dos arreglos", () => {
    const arreglo = [1, 2, 3, 4];
    const arreglo2 = [1, 4];

    const resultado = interseccion(arreglo, arreglo2);
    expect(resultado).toEqual([1, 4]);
  });

  it("interseccion de dos arreglos", () => {
    const arreglo = [1, 2, 3, 4];
    const arreglo2 = [1, 4];

    const resultado = interseccion(arreglo2, arreglo);
    expect(resultado).toEqual([1, 4]);
  });

  it("interseccion de dos arreglos, con el segundo más largo", () => {
    const arreglo = [1, 2, 3, 4];
    const arreglo2 = [1, 7, 8, 9, 10, 4];

    const resultado = interseccion(arreglo, arreglo2);
    expect(resultado).toEqual([1, 4]);
  });

  it("barajarArreglo", () => {
    const arreglo = [1, 2, 3, 4];
    const resultado = barajarArreglo(arreglo);

    expect(resultado).not.toEqual([1, 2, 3, 4]);
  });
});
