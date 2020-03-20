let model = require('../models/resultat.js');
var async = require('async');

module.exports.Repertoire = function(request, response){
    response.title = 'Répertoire des resultats';
    model.getGrandPrix( function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.listeResultat = result;
       console.log(result);
       response.render('gestionResultat', response);
    });
 }

 module.exports.ListePiloteGrandPrix = function(request, response){
    response.title = 'Ajout score a un grandprix';
    let data = request.query.gpnum;
    console.log(request.query);
    model.classementGrandPrix(data, function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.ResultatGrandPrix = result[0];
       console.log(result);
       response.render('ajouterResultat', response);
    });
 }

