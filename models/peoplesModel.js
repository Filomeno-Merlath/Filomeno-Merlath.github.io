var pool = require("./connection");

module.exports.getAllPeoples = async function () {
  try {
    let sql = "select * from people ORDER BY people_name";
    let result = await pool.query(sql);
    let people = result.rows;
    return { status: 200, result: people };
  } catch (error) {
    console.log(error);
    return { status: 500, result: error };
  }
};
