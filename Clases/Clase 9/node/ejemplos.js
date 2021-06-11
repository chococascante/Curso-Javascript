function esStringVacio(string) {
  return string === "";
}

function mayuscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function borrarAtributo(obj, llave) {
  delete obj[llave];
}

function interseccion(arr1, arr2) {
  const resultado = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (i < arr1.length) {
      if (arr2.includes(arr1[i]) && !resultado.includes[arr1[i]]) {
        resultado.push(arr1[i]);
      }
    }
  }

  return resultado;
}

function barajarArreglo(arreglo) {
  return arreglo.sort(() => 0.5 - Math.random());
}

module.exports = {
  esStringVacio,
  mayuscula,
  borrarAtributo,
  interseccion,
  barajarArreglo,
};
