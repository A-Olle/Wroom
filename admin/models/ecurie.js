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
						let sql =" SELECT ecunum,ecunom,ecunomdir,ecupoints from ecurie e ORDER BY(ecunom)  ASC"; 
                       
                        
                            
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.getPays = function (callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
                  let sql =" SELECT paynom,paynum from pays ORDER BY(paynom) ASC"; 
                      
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.getFournisseurPneu = function (callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
                  let sql =" SELECT fpnom,fpnum from fourn_pneu ORDER BY(fpnom) ASC"; 
                      
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.EcurieInfoModif = function (ecunum,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
						let sql =" SELECT e.ecunum,ecunom,e.fpnum,ecunomdir,e.paynum,pa.paynom,ecuadrsiege,ecupoints from ecurie e LEFT JOIN pays pa ON pa.paynum=e.paynum LEFT JOIN fourn_pneu fp ON fp.fpnum=e.fpnum where e.ecunum=" + ecunum; 
            
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.EcurieModification = function (ecunum,fpnum,ecunom,ecunomdir,ecuadrsiege,ecupoints,paynum,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
                  let sql ="UPDATE ecurie set ecunom='" + ecunom + "'";
                  sql = sql+ ",fpnum=" + fpnum;
                  sql = sql + ",ecunomdir='" + ecunomdir +"'";
                  sql = sql + ",ecuadrsiege='" + ecuadrsiege +"'";
                  sql = sql+ ",ecupoints=" + ecupoints;
                  sql = sql+ ",paynum=" + paynum;
                  sql = sql + " WHERE ecunum=" +ecunum;
                 
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};



module.exports.SupprimerEcurie = function (ecunum,callback,callback1,callback2,callback3) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
						let sql ="DELETE from ecurie where ecunum=" + ecunum; 
                  let sql1="DELETE from voiture where ecunum =" + ecunum;
                  let sql2="DELETE from finance where ecunum =" + ecunum;
                  let sql3="UPDATE pilote SET ecunum=null where ecunum =" + ecunum;
                  
                  connexion.query(sql3,callback3);
                  connexion.query(sql2,callback2);
                  connexion.query(sql1, callback1);
                  connexion.query(sql, callback);
         

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.EcurieInfoSuppression = function (ecunum,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
						let sql =" SELECT ecunum,ecunom,ecunomdir,ecuadrsiege,ecupoints,ecuadresseimage,pa.paynom from ecurie e LEFT JOIN pays pa ON pa.paynum=e.paynum  where e.ecunum=" + ecunum; 
            
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};
