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

 
 module.exports.SponsorInfoModif = function(request, response){
    response.title = 'Modification d une ecurie';
    let data = request.params.sponum;
    async.parallel([
       function(callback)
       {
           model.SponsorInfoModif(data, function (err, resultInfo) {callback(null,resultInfo)})
       },
 
   ],
   function(err, result){
       if (err) {
           console.log(err);
           return;
       }
       response.SponsorInfoModif = result[0][0];
       
       console.log(result[0]);


       response.render('modifierSponsor', response);
   });
 };  


 
 module.exports.SponsorModification = function(request, response){
    response.title = 'Modification d un sponsor ';
   
    let data = request.body.sponum;
    let sponom = request.body.sponom;
    let sposectactivite= request.body.sposectactivite;
    

    async.parallel([
       function(callback)
       {
           model.SponsorModification(data,sponom,sposectactivite,function (err, resultModificationSponsor) {callback(null, resultModificationSponsor)})
       }
   ],
   function(err, result){
       if (err) {
           console.log(err);
           return;
       }
       response.SponsorModification = result[0];
       console.log(result[0]);
       
       response.render('modifierSponsorResultat', response);
   });
 };  

 
 module.exports.SupprimerSponsor = function(request, response){
   response.title = 'Supprimer un Sponsor ';
   let data = request.params.sponum;
   async.parallel([
      function(callback)
      {
          model.SponsorInfoSuppression(data, function (err, resultInfoSuppression) {callback(null,resultInfoSuppression)})
      },

      function(callback)
      {
          model.SupprimerSponsor(data, function (err, resultSupprimerSponsor) {callback(null, resultSupprimerSponsor)})
      }
  ],
  function(err, result){
      if (err) {
          console.log(err);
          return;
      }
      response.SponsorInfoSuppression = result[0][0];
      response.SponsorSuppression = result[1];
      console.log(result[0]);
      console.log(result[1]);
      response.render('supprimerSponsor', response);
  });
};  