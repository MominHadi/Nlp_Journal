const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'studentsdb',
    password: 'jimmychoo'
})


conn.connect(function (err) {
    if (err) throw err;

    console.log('connected to database successfully');

    let myQuery = "UPDATE studentsList SET address = 'Mumbai' WHERE address = 'Bhiwandi';";
    conn.query(myQuery, function (err, result) {
        if (err) throw err;

        console.log(result.affectedRows + " record(s) updated");
    })
}

)