var mysql = require('promise-mysql');


exports.handler = async (event) => {
  let conn
  var response; 
   
  try{
      var connection= await mysql.createConnection({
        host: process.env.host,
        port: process.env.port,
        user:  process.env.user,
        password: process.env.password,
        database: process.env.database
    });
  }catch(err){
      console.log("Error connecting"); 
  }
  
  
  var result=await connection.query("SELECT * FROM prakriti_students ");
  console.log(result);
  
  response={
      statusCode:200,
      body:JSON.stringify(result)
      
  }
  return response;

};