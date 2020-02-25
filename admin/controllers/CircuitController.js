let model = require('../models/circuits.js');
var async = require('async');

module.exports.Repertoire = function(request, response){
    response.title = 'Répertoire des pilotes';
    model.getListeCircuits( function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.listeCircuits = result;
       console.log(result);
       response.render('gestionCircuits', response);
    });
 }

 module.exports.Circuit = function(request, response){
    response.title = 'Répertoire des pilotes';
    model.getPays( function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.resultPays = result;
       console.log(result);
       response.render('ajouterCircuits', response);
    });
 }

/*
 module.exports.Pilote = function(request, response){
   response.title = 'Ajout pilote';
   async.parallel([
      function(callback)
      {
          model.getPays( function (err, resultPays) {callback(null,resultPays)})
      },

      function(callback)
      {
          model.getEcurie( function (err, resultEcurie) {callback(null, resultEcurie)})
      }
  ],
  function(err, result){
      if (err) {
          console.log(err);
          return;
      }
      response.resultPays = result[0];
      response.resultEcurie = result[1];
      console.log(result[0]);
      console.log(result[1]);
      response.render('ajouterPilote', response);
  });
};  

module.exports.Ajout = function(request, response){
    response.title = 'Ajout du pilote';
    let data = request.body;
    console.log(data);
    model.Ajout(data, function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.Ajout = result;
       console.log(result);
       response.render('ajouterPiloteResultat', response);
    });
    
 }
 */
 