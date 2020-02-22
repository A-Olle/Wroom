let model = require('../models/pilote.js');

module.exports.Repertoire = function(request, response){
    response.title = 'Répertoire des pilotes';
    model.getListePilote( function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.listePilote = result;
       console.log(result);
       response.render('gestionPilote', response);
    });
 }

 module.exports.Pays = function(request, response){
    response.title = 'Ajout d un pilote';
    model.getPays( function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.listePays = result;
       console.log(result);
       response.render('ajouterPilote', response);
    });
 }

 