
let HomeController = require('./../controllers/HomeController');
let PiloteController = require('./../controllers/PiloteController');
let AuthentificationController = require('./../controllers/AuthentificationController');



// Routes
module.exports = function(app){

// Main Routes

    app.get('/', HomeController.Index);
    app.get('/accueil', HomeController.Index);
    app.post('/accueil', HomeController.Connexion);
    app.post('/', HomeController.Connexion);

//Pilote
    app.get('/pilotes',AuthentificationController.VerifierConnecter);
    app.get('/pilotes',PiloteController.Repertoire);
    app.get('/ajouterPilote',PiloteController.Pilote);
    app.post('/ajouterPiloteResultat',PiloteController.Ajout);

// tout le reste
app.get('*', HomeController.NotFound);
app.post('*', HomeController.NotFound);

};
