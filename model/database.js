const { createPool } = require('mysql')

const connection = createPool({
    host: "freedb.tech",
    user: "freedbtech_OrderaTeam",
    password: "Ordera531",
    database: "freedbtech_OrderaSystem",
    connectionLimit: 10

});
module.exports = connection
// connection.query("select * from admin", (err,result, fields)=>{
//     if(err)
//     {throw err}
//     else
//     {
//         console.log(result);
//     }
// });
