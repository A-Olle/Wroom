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

module.exports.getDernierResultat = function (callback) {
    db.getConnection(function(err, connexion){
        if(!err){
            let sql ="SELECT gpnom, gpdate, gpdatemaj FROM grandprix ";
            sql += "WHERE gpdate=(SELECT MAX(gpdate) FROM grandprix)";
            connexion.query(sql, callback);
            connexion.release();
        }
    })
}