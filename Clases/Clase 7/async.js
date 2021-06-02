// Pila de llamados
// API = Application Program Interface

// console.log("primero");

// setTimeout(() => {
//   console.log("segundo");
// }, 1000);

// console.log("tercero");

// Promises
function fetchPostEspecifico(numeroPost) {
  return new Promise(function (resolve, reject) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${numeroPost}`)
      .then(function (respuesta) {
        respuesta
          .json()
          .then(function (data) {
            resolve(data);
          })
          .catch(function (error) {
            reject(error);
          });
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

function fetchUsuarioEspecifico(numeroUsuario) {
  return new Promise(function (resolve, reject) {
    fetch(`https://jsonplaceholder.typicode.com/users/${numeroUsuario}`)
      .then(function (respuesta) {
        respuesta
          .json()
          .then(function (data) {
            resolve(data);
          })
          .catch(function (error) {
            reject(error);
          });
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

// fetchPostEspecifico(1)
//   .then(function (post) {
//     console.log(post);
//     fetchUsuarioEspecifico(post.userId)
//       .then(function (usuario) {
//         console.log(usuario);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// throw new Error("Esto es un error.");

function puedeEntrarAlBar(numero) {
  return new Promise(function (resolve, reject) {
    if (numero >= 18) {
      resolve("Puede entrar!");
    }
    reject("Va jalando!");
  });
}

puedeEntrarAlBar(18)
  .then(function (respuesta) {
    console.log(respuesta);
  })
  .catch(function (error) {
    console.error(error);
  });

// Async/await
async function traerPostYUsuario(numeroPost) {
  try {
    const respuestaPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${numeroPost}`
    );
    const post = await respuestaPost.json();

    const respuestaUsuario = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );

    const usuario = await respuestaUsuario.json();
    return usuario;
  } catch (error) {
    console.error(error);
  }
}

const usuario = await traerPostYUsuario(2);

console.log(usuario);
