let model = require('../models/sponsors.js');
var async = require('async');

module.exports.Repertoire = function(request, response){
    response.title = 'Répertoire des écuries';
    model.getListeSponsor( function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.listeSponsor = result;
       console.log(result);
       response.render('gestionSponsor', response);
    });
 }

 module.exports.SponsorEcurie = function(request, response){
    response.title = 'Répertoire des pilotes';
    model.getEcurie( function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.resultEcurie = result;
       console.log(result);
       response.render('ajouterSponsor', response);
    });
 }