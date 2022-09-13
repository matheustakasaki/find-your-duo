import express from "express";

const app = express();

// Esta função 'get' precisa devolver uma resposta, senão vai ficar em load infinito no navegador.
// localhost:3333/ads
app.get("/ads", (request, response) => {
  console.log("Acessou ads!");

  return response.json([
    { id: 1, name: "Anuncio 1" },
    { id: 2, name: "Anuncio 2" },
    { id: 3, name: "Anuncio 3" },
    { id: 4, name: "Anuncio 4" },
    { id: 5, name: "Anuncio 5" },
  ]);
});

// Request nos dá informação do acesso dele a uma  rota. Serve para buscarmos informações que estão vindo da requisição
// response serve para devolvermos uma resposta

app.listen(3333);
