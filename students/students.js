var mysql = require('promise-mysql');


exports.createStudents = async (event) => {
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



exports.readStudents = async (event) => {
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





exports.updateStudentsByID = async (event) => {
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
     
   var result=await connection.query(` UPDATE prakriti_students SET Class=${event.body.standard}, FullName="${event.body.name}" WHERE ID=${event.pathParameters.student_id} `);
    
  
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


exports.deleteStudentsByID = async (event) => {
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
  
  var result=await connection.query(` DELETE FROM prakriti_students WHERE ID=${event.pathParameters.student_id} `);
  console.log(result);
  
  response={
      statusCode:200,
      body:JSON.stringify(result)
      
  }
  return response;
 }
 catch(err)
 {
      console.log("An error occurred");
      response={
      statusCode:400,
      body:Error(err)
      
  }
  return response;
  }
};

