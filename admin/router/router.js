
let HomeController = require('./../controllers/HomeController');
let ConnexionController = require('./../controllers/ConnexionController');


// Routes
module.exports = function(app){

// Main Routes
    app.get('/', HomeController.Index);
    app.get('/accueil', HomeController.Index);
    app.post('/accueil', HomeController.Connexion);
    app.post('/', HomeController.Connexion);




// tout le reste
app.get('*', HomeController.NotFound);
app.post('*', HomeController.NotFound);

};
