/**
 * @deprecated
 */
async function mysql1(query, arrParams) {
  const mysql = require('mysql2');
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '025712',
    database : 'kaidan_cafe'
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  connection.query(query, arrParams, (error, results, /*fields*/)=>{
    if (error) throw error;
    // console.log('The solution is: ', results);
    return results.length;
  });
   
  connection.end();
}

const mysql = require('mysql2/promise');
async function mysql2(query, arrParams) {
  try {
    const connection = await mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '025712',
      database : 'kaidan_cafe'
    });

    console.log('connected as id ' + connection.threadId);

    const [rows, fields] = await connection.execute(query, arrParams);
    connection.end();
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}




export {mysql1, mysql2}