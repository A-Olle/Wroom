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
module.exports.getGrandPrix = function (callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
						let sql =" SELECT gpnum,gpnom from grandprix  ORDER BY(gpnom)  ASC"; 
                       
                        
                            
				console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};


module.exports.classementGrandPrix = function (id,callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL
             let sql ="SELECT DISTINCT  rang,pilnom,t.tempscourse, pilprenom, CASE";
            sql =sql +" WHEN rang=1 THEN '25' ";
            sql =sql + " WHEN rang=2 THEN '18' ";
            sql =sql + " WHEN rang=3 THEN '15' ";
            sql =sql + " WHEN rang=4 THEN '12' ";
            sql =sql + " WHEN rang=5 THEN '10' ";
            sql =sql + " WHEN rang=6 THEN '8' ";
            sql =sql +  "WHEN rang=7 THEN '6' ";
            sql =sql + " WHEN rang=8 THEN '4' ";
            sql =sql + " WHEN rang=9 THEN '2' ";
            sql =sql + " WHEN rang=10 THEN '1' ";
            sql =sql + " END AS Points FROM ";
            sql =sql + "(";
            sql =sql + " SELECT  tempscourse, gpcommentaire, c.pilnum ,ROW_NUMBER() OVER(ORDER BY tempscourse) AS rang ";
            sql =sql + " FROM COURSE c INNER JOIN grandprix gp ON gp.GPNUM=c.gpnum "
            sql =sql + " WHERE c.gpnum=" + id;
            sql =sql + ")t ";
            sql =sql + " INNER JOIN PILOTE p on t.pilnum=p.pilnum ";
            sql =sql + "  LIMIT 10 ";
            connexion.query(sql, callback);
            console.log(sql);
            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};


