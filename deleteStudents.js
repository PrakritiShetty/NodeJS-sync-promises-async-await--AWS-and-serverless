 var mysql = require('promise-mysql');


exports.handler = async (event) => {
  let conn
  var response; 
   
  try{
      var connection= await mysql.createConnection({
        host: 'ch-buyogo-rds-ch-dev1-rdscluster-1dmi9tf2dmuce.cluster-ctgjyfgcje6u.eu-central-1.rds.amazonaws.com',
        port: 3306,
        user:  'masteruser',
        password: '1XwStHpav01mVUeWnoYqC469SeIlMWxAuQ2',
        database: 'iitb_internship_prg'
    });
  }catch(err){
      console.log("Error connecting"); 
  }
  
  
  var result=await connection.query("DELETE FROM prakriti_students WHERE ID='12' ");
  console.log(result);
  
  response={
      statusCode:200,
      body:JSON.stringify(result)
      
  }
  return response;

};

