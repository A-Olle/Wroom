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

 
 module.exports.SupprimerEcurie = function(request, response){
   response.title = 'Supprimer une Ecurie ';
   let data = request.params.ecunum;
   async.parallel([
      function(callback)
      {
          model.EcurieInfoSuppression(data, function (err, resultInfoSuppression) {callback(null,resultInfoSuppression)})
      },

      function(callback)
      {
          model.SupprimerEcurie(data, function (err, resultSupprimerEcurie) {callback(null, resultSupprimerEcurie)})
      }
  ],
  function(err, result){
      if (err) {
          console.log(err);
          return;
      }
      response.EcurieInfoSuppression = result[0][0];
      response.EcurieSuppression = result[1];
      console.log(result[0]);
      console.log(result[1]);
      response.render('supprimerEcurie', response);
  });
};  