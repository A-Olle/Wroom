/*
* config.Db contient les parametres de connection à la base de données
* il va créer aussi un pool de connexions utilisables
* sa méthode getConnection permet de se connecter à MySQL
*
*/

let db = require('../configDb');

/*
* Récupérer l'intégralité 
* @return Un tableau qui contient le 
*/
module.exports.getListePilote = function (callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
						let sql ="SELECT SUBSTRING(pilnom,1,1) as lettrePilote, pilprenom  FROM pilote p  GROUP BY lettrePilote ORDER BY lettrePilote asc";
						
						//console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};


module.exports.getNomPilote = function (lettre,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
             let sql ="SELECT p.pilnum,pilnom,pilprenom,phoadresse  FROM " +
             " pilote p INNER JOIN photo ph ";
               sql= sql + "ON ph.pilnum=p.pilnum WHERE SUBSTRING(pilnom,1,1)='" + lettre+"' AND PHONUM=1";
						
						//console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.Detailler = function (id,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
             let sql ="SELECT DISTINCT p.piltexte,p.pilnom,p.pilprenom,ph.phoadresse,p.pilnum,PILDATENAIS,pa.PAYNOM,pilpoids,e.ecunom,p.piltaille FROM PILOTE p LEFT JOIN photo ph ";
               sql= sql + "ON ph.pilnum=p.pilnum INNER JOIN pays pa ON pa.paynum = p.paynum LEFT JOIN ecurie e ON e.ecunum = p.ecunum WHERE p.pilnum = " + id + " and ph.phonum = 1";
						
						
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.Sponsor = function (id,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
             let sql ="SELECT SPONOM,SPOSECTACTIVITE FROM sponsor s ";
               sql= sql + " LEFT JOIN sponsorise sp ON  sp.sponum=s.sponum LEFT JOIN pilote p ON p.pilnum = sp.pilnum  WHERE sp.pilnum = " + id;
						
						console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.Photo = function (id,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
             let sql ="SELECT phosujet,phocommentaire,phoadresse FROM photo ph ";
               sql= sql + " LEFT JOIN pilote p ON  p.pilnum=ph.pilnum  WHERE p.pilnum = " + id;
						
						console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};



