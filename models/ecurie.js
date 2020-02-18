/*
* config.Db contient les parametres de connection à la base de données
* il va créer aussi un pool de connexions utilisables
* sa méthode getConnection permet de se connecter à MySQL
*
*/

let db = require('../configDb');

/*
* Récupérer l'intégralité les écuries avec l'adresse de la photo du pays de l'écurie
* @return Un tableau qui contient le N°, le nom de l'écurie et le nom de la photo du drapeau du pays
*/
module.exports.getListeEcurie = function (callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
						let sql ="SELECT ecunum, payadrdrap, ecunom FROM " +
                            "ecurie e INNER JOIN pays p ";
						sql= sql + "ON p.paynum=e.paynum ORDER BY ecunom";
						//console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.Detailler = function (ecurie,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
             let sql ="SELECT DISTINCT  COUNT(pi.pilnum) as nbPilote, ecunom,ecunomdir,ecuadrsiege, p.paynom,ecuadresseimage FROM ECURIE e ";
               sql= sql + "LEFT JOIN pays p ON p.paynum=e.paynum LEFT JOIN pilote pi ON pi.ecunum = e.ecunum  where e.ecunum= " + ecurie;
						
						
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.aUnPilote = function (ecurie,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
             let sql ="SELECT pilnum, pilnom, pilprenom FROM pilote pi ";
               sql= sql + "LEFT JOIN ecurie e on e.ecunum=pi.ecunum where e.ecunum= " + ecurie;
						
						
            connexion.query(sql, callback);
         
            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.typeVoiture = function (ecurie,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
             let sql ="SELECT t.typelibelle, v.voiadresseimage,v.voinom  FROM type_voiture t ";
               sql= sql + " LEFT JOIN voiture v ON t.typnum=v.typnum LEFT JOIN ecurie e on e.ecunum=v.ecunum where e.ecunum= " + ecurie;
						
						
            connexion.query(sql, callback);
         
            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};