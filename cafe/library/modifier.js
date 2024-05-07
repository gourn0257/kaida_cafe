const { mysql2 } = require("./db");

async function ModifyMysql(query, arrParams) {
  await mysql2(query, arrParams);
}

export { ModifyMysql }