import mssql = require("mssql");

const c = {
    user: "sa",
    password: "Welcome1",
    server: "Haar0547",
    database: "ReactJs"
  };

interface IUserinfo{
    username: string;
    lastname: string;
  }
  
 export async function getUsers() : Promise<Array<IUserinfo>> {
    const pool = await new mssql.ConnectionPool(c).connect();
    const result = await pool.request().query("select * from users");
    pool.close();
    return result.recordset;
  } 

