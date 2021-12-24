var mysql = require('promise-mysql');


exports.handler = async (event) => {
  let conn
   var response; 
   
   
   try{
       
      var connection= await mysql.createConnection({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    })
    event.body=JSON.parse(event.body);
     
   var result=await connection.query(` UPDATE prakriti_students SET Class=${event.body.standard} WHERE FullName="${event.body.name}" `);
    
  
  response={
      statusCode:200,
      body:JSON.stringify(result)
  }
  return response;
   }
   catch(err){
      console.log("An error occurred");
      
       response={
      statusCode:400,
      body:"An error occurred"
       }
      
  
  return response;
       
   }
  
  
  

};