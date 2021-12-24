var mysql = require('promise-mysql');
 
exports.handler = async (event) => {
   
   let conn ;
   var response;
   await mysql.createConnection({
        host: 'ch-buyogo-rds-ch-dev1-rdscluster-1dmi9tf2dmuce.cluster-ctgjyfgcje6u.eu-central-1.rds.amazonaws.com',
        port: 3306,
        user:  'masteruser',
        password: '1XwStHpav01mVUeWnoYqC469SeIlMWxAuQ2',
        database: 'iitb_internship_prg'
    })
    .then((connection) => {
        conn = connection;
        console.log("Successfully connected");
        //Reading Data
       return connection.query("UPDATE student SET Class='2' WHERE FullName='kelly' ");
    })
    .then((result)=>{
    response = {
        statusCode: 200,
        body: "Updated Successfully"
    };
    }).catch((err) => {throw err});
    return response;
};
