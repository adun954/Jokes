const jokesModel = require("../routes/jokes.model");

// import all jokes
module.exports.findAllJokes = (req, res) => {
  jokesModel.find()
    .then(allDaJokes => res.json({ Joke: allDaJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// import one joke
module.exports.findOneSingleJoke = (req, res) => {
	jokesModel.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ Joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Create a joke
module.exports.createNewJoke = (req, res) => {
  jokesModel.create(req.body)
    .then(newlyCreatedJoke => res.json({Joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Update a joke
module.exports.updateExistingJoke = (req, res) => {
  jokesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ Joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Delete a joke
module.exports.deleteAnExistingJoke = (req, res) => {
  jokesModel.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};