const jokesController = require("../controllers/jokes.controllers");

module.exports = app => {
  app.get("/api/jokes/", jokesController.findAllJokes);
  app.get("/api/jokes/:id", jokesController.findOneSingleJoke);
  app.put("/api/jokes/update/:id", jokesController.updateExistingJoke);
  app.post("/api/jokes/new", jokesController.createNewJoke);
  app.delete("/api/jokes/delete/:id", jokesController.deleteAnExistingJoke);
};