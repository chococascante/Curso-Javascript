const express = require("express");
const axios = require("axios");

const app = express();

// Req: request/solicitud
// Res: respuesta que voy a dar
const usuarios = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo!</h1>");
});

app.get("/html", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/usuarios", (_, res) => {
  res.send(usuarios);
});

app.get("/posts", async (_, res) => {
  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    res.send(respuesta.data);
  } catch (error) {
    console.error(error);
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const publicacion = respuesta.data.find((post) => post.id == id);

    res.send(publicacion);
  } catch (error) {
    console.error(error);
  }
});

app.get("/posts/:id/comments", async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const comentarios = respuesta.data.filter(
      (comentario) => comentario.postId == id
    );

    res.send(comentarios);
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => {
  console.log("Servidor iniciado en puerto 3000...");
});
