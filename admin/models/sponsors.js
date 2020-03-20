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
module.exports.getListeSponsor = function (callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
						let sql =" SELECT sponum,sponom,sposectactivite from sponsor sp ORDER BY(sponom)  ASC"; 
                       
                        
                            
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.getEcurie = function (callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
                  let sql =" SELECT ecunom,ecunum from ecurie ORDER BY(ecunom) ASC"; 
                      
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.SponsorInfoModif = function (sponum,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
						let sql =" SELECT sponum,sponom,sposectactivite from sponsor sp where sponum=" + sponum; 
            
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.SponsorModification = function (sponum,sponom,sposectactivite,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
                  let sql ="UPDATE sponsor set sponom='" + sponom + "'";
                  sql = sql + ",sposectactivite='" + sposectactivite +"'";
                  sql = sql + "where sponum=" + sponum;
                 
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};


module.exports.SupprimerSponsor = function (sponum,callback,callback1,callback2) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
						let sql ="DELETE from sponsor where sponum=" + sponum; 
                  let sql1="DELETE from finance where sponum =" + sponum;
                  let sql2="DELETE from sponsorise where sponum =" + sponum;

                  connexion.query(sql2,callback2);
                  connexion.query(sql1, callback1);
                  connexion.query(sql, callback);
         

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.SponsorInfoSuppression = function (sponum,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
						let sql =" SELECT sponum,sponom,sposectactivite from sponsor  where sponum=" + sponum; 
            
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};