
let HomeController = require('./../controllers/HomeController');
let PiloteController = require('./../controllers/PiloteController');
let CircuitController = require('./../controllers/CircuitController');
let EcurieController = require('./../controllers/EcurieController');
let SponsorController = require('./../controllers/SponsorController');
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

//Circuits
    app.get('/circuits',AuthentificationController.VerifierConnecter);
    app.get('/circuits',CircuitController.Repertoire);
    app.get('/ajouterCircuits',CircuitController.Circuit);
    /*
    app.post('/ajouterCircuitsResultat',PiloteController.Ajout); */

//Ecurie
app.get('/ecuries',AuthentificationController.VerifierConnecter);
app.get('/ecuries',EcurieController.Repertoire);
app.get('/ajouterEcurie',EcurieController.Ecurie);
/*
app.post('/ajouterCircuitsResultat',PiloteController.Ajout); */

//Sponsor
app.get('/sponsors',AuthentificationController.VerifierConnecter);
app.get('/sponsors',SponsorController.Repertoire);
app.get('/ajouterSponsor',SponsorController.SponsorEcurie);
/*
app.post('/ajouterCircuitsResultat',PiloteController.Ajout); */


// tout le reste
app.get('*', HomeController.NotFound);
app.post('*', HomeController.NotFound);

};
