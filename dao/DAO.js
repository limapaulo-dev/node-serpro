class DAO {
    static tableName = "tableName"

    constructor(conn){
        this._conn = conn
    }

    selectAll(_conn){
        sql = `SELECT * FROM ${this.tablename}`

        _conn.query(sql, (err, result)=>{
            if (err) throw err
            console.log(result)
            return result
        })
    }

    selectByID(_conn){
        sql = `SELECT * FROM ${tablename} WHERE id = ?`

        _conn.query(sql, (err, result)=>{
            if (err) throw err
            console.log(result)
            return result
        })
    }

    deleteByID(){
        sql = `DELETE FROM ${tablename} WHERE id = ?`

        _conn.query(sql, (err, result)=>{
            if (err) throw err
            console.log(result)
            return result
        })        
    }
}


module.exports = {
    DAO: DAO
}