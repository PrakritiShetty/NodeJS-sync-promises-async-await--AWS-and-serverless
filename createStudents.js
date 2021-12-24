var mysql = require('promise-mysql');


exports.handler = async (event) => {
  var response; var result;
  console.log(event);
   event.body=JSON.parse(event.body);
  console.log(event.body)

  
  
   try{
    var connection= await mysql.createConnection({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    })
    
        //Inserting Data
    result=await connection.query(` INSERT INTO prakriti_students(FullName,Class) VALUES("${event.body.name}", ${event.body.standard}) `),
    
    response = {
        statusCode: 200,
        body: "Inserted Successfully"
    };
    return response;
}catch{
       console.log("Error");
       response = {
        statusCode: 400,
        body: "An error occurred"
    };
    return response;
       
}
    
 };

