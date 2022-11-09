const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	Setup: String,
	Punchline: String
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;