var mysql = require('promise-mysql');
var response

exports.handler = async (event) => {
   let conn ;
   mysql.createConnection({
        host: 'ch-buyogo-rds-ch-dev1-rdscluster-1dmi9tf2dmuce.cluster-ctgjyfgcje6u.eu-central-1.rds.amazonaws.com',
        port: 3306,
        user:  'masteruser',
        password: '1XwStHpav01mVUeWnoYqC469SeIlMWxAuQ2',
        database: 'iitb_internship_prg'
    })
    .then((connection) => {
        conn = connection;
        console.log("Successfully connected");
        //Inserting Data
        return conn.query(connection.query("DELETE FROM student WHERE ID='2' "));  
    }).then((result)=>{
    response = {
        statusCode: 200,
        body: 'Deleted Successfully'
    };
    }).catch((err) => {throw err});
    return response;
};
