var pool =  require("./connection");

module.exports.getAllAlready = async  function() {
    try {
        let sql = "select * from already";
        let result = await pool.query(sql);
        let already = result.rows;
        return {status:200, result: already};
    } catch (error) {
        console.log(error);
        return{status:500, result:error};
    }
}
module.exports.saveAlready = async function(user) {
        try{
            let sql = " insert into already(people_fk_id,people_fk1_id) values($1,$2);";
            let result = await pool.query(sql,[ user.ID,user.ID1]);
            return { status:200, result:result};
        } catch (error){
            console.log(error);
            return { status:500, result: error};
        }  
}