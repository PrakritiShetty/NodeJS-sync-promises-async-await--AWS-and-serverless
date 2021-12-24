
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'ch-buyogo-rds-ch-dev1-rdscluster-1dmi9tf2dmuce.cluster-ctgjyfgcje6u.eu-central-1.rds.amazonaws.com',
    port: 3306,
    user: 'masteruser',
    password: '1XwStHpav01mVUeWnoYqC469SeIlMWxAuQ2',
    database: 'iitb_internship_prg'
});
connection.connect(function (err) {
    if (err) {
        console.log('error connecting' + err.stack);
        return;
    }
    console.log('Success');
});

//delete marks for a particular student
connection.query("DELETE FROM student WHERE ID='2' ", function(error,results){console.log(results);} );
connection.query("SELECT * FROM `student`",function(error,results){console.log(results);});
