let model = require('../models/ecurie.js');
var async = require('async');

module.exports.Repertoire = function(request, response){
    response.title = 'Répertoire des écuries';
    model.getListeEcurie( function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.listeEcurie = result;
       console.log(result);
       response.render('gestionEcurie', response);
    });
 }

 module.exports.Ecurie = function(request, response){
    response.title = 'Répertoire des pilotes';
    model.getPays( function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.resultPays = result;
       console.log(result);
       response.render('ajouterEcurie', response);
    });
 }