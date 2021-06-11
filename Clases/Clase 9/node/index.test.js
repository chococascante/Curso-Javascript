const app = require("./index");
const request = require("supertest");
const { default: axios } = require("axios");

const arregloPublicaciones = [
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body:
      "quo et expedita modi cum officia vel magni\n" +
      "doloribus qui repudiandae\n" +
      "vero nisi sit\n" +
      "quos veniam quod sed accusamus veritatis error",
  },
];

const arregloComentarios = [
  {
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
  },
  {
    postId: 2,
    id: 6,
    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
    email: "Presley.Mueller@myrl.com",
    body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
  },
];

jest.mock("axios");

describe("server/rutas", () => {
  it("rutas maneja /", async () => {
    const respuesta = await request(app).get("/");
    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.text).toBe("<h1>Hola mundo!</h1>");
  });

  it("rutas maneja /", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: arregloPublicaciones })
    );
    const respuesta = await request(app).get("/posts");

    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.body).toEqual(arregloPublicaciones);
  });

  it("/posts/:id/comments", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: arregloComentarios })
    );
    const respuesta = await request(app).get("/posts/1/comments");

    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.body).toEqual([arregloComentarios[0]]);
  });
});
