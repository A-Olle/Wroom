
let HomeController = require('./../controllers/HomeController');
let PiloteController = require('./../controllers/PiloteController');
let ResultatController = require('./../controllers/ResultatController');
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
   //Ajout
    app.get('/ajouterPilote',AuthentificationController.VerifierConnecter);
    app.get('/ajouterPilote',PiloteController.Pilote);
    app.get('/ajouterPiloteResultat',AuthentificationController.VerifierConnecter);
    app.post('/ajouterPiloteResultat',PiloteController.Ajout);
    //Modif
    app.get('/modifierPiloteParam/:pilnum',PiloteController.PiloteInfoModif);
    app.get('/modifierPilote/',AuthentificationController.VerifierConnecter);
    app.post('/modifierPiloteResultat',PiloteController.PiloteModification);

   //Supprimer
    app.get('/supprimerPilote/:pilnum',PiloteController.SupprimerPilote);
    app.get('/supprimerPilote/',AuthentificationController.VerifierConnecter);
   
   
//Circuits
    app.get('/circuits',AuthentificationController.VerifierConnecter);
    app.get('/circuits',CircuitController.Repertoire);
    app.get('/ajouterCircuits',AuthentificationController.VerifierConnecter);
    app.get('/ajouterCircuits',CircuitController.Circuit);
    /*
    app.post('/ajouterCircuitsResultat',PiloteController.Ajout); */

     //Modif
     app.get('/modifierEcurieParam/:ecunum',EcurieController.EcurieInfoModif);
     app.get('/modifierEcurie/',AuthentificationController.VerifierConnecter);
     app.post('/modifierEcurieResultat',EcurieController.EcurieModification);

    //Supprimer
    app.get('/supprimerCircuit/:cirnum',CircuitController.SupprimerCircuit);
    app.get('/supprimerCircuit/',AuthentificationController.VerifierConnecter);

    //Ecurie
    app.get('/ecuries',AuthentificationController.VerifierConnecter);
    app.get('/ecuries',EcurieController.Repertoire);
    app.get('/ajouterEcurie',AuthentificationController.VerifierConnecter);
    app.get('/ajouterEcurie',EcurieController.Ecurie);
    /*
    app.post('/ajouterCircuitsResultat',PiloteController.Ajout); */

    //Modif
    app.get('/modifierCircuitParam/:cirnum',CircuitController.CircuitInfoModif);
    app.get('/modifierCircuit/',AuthentificationController.VerifierConnecter);
    app.post('/modifierCircuitResultat',CircuitController.CircuitModification);
    //Supprimer
    app.get('/supprimerEcurie/:ecunum',EcurieController.SupprimerEcurie);
    app.get('/supprimerCircuit/',AuthentificationController.VerifierConnecter);

    //Sponsor
    app.get('/sponsors',AuthentificationController.VerifierConnecter);
    app.get('/sponsors',SponsorController.Repertoire);
    app.get('/ajouterSponsor',AuthentificationController.VerifierConnecter);
    app.get('/ajouterSponsor',SponsorController.SponsorEcurie);

      //Modif
      app.get('/modifierSponsorParam/:sponum',SponsorController.SponsorInfoModif);
      app.get('/modifierSponsor/',AuthentificationController.VerifierConnecter);
      app.post('/modifierSponsorResultat',SponsorController.SponsorModification);
    /*
    app.post('/ajouterCircuitsResultat',PiloteController.Ajout); */

    //Supprimer
    app.get('/supprimerSponsor/',AuthentificationController.VerifierConnecter);
    app.get('/supprimerSponsor/:sponum',SponsorController.SupprimerSponsor);


    //Resultat
    app.get('/resultat',AuthentificationController.VerifierConnecter);
    app.get('/resultat',ResultatController.Repertoire);

    //Ajout
    app.get('/ajouterResultat',AuthentificationController.VerifierConnecter);
    app.get('/ajouterResultat2',ResultatController.ListePiloteGrandPrix);



/*
app.post('/ajouterCircuitsResultat',PiloteController.Ajout); 
*/





// tout le reste
app.get('*', HomeController.NotFound);
app.post('*', HomeController.NotFound);

};
