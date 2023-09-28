const mysql = reequire("mysq12");
require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",

    user: 
    password:
    database: 

});


db.on("error", (err)=>{
    console.log("- STATS Mysq12 connection died", err);
});

module.exports = db; 