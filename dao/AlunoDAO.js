import DAO from "./DAO"

class AlunoDAO extends DAO{
    static tableName = "aluno"

    constructor(_conn) {
        super(_conn)
        
    }

    selectByID(_conn){
        sql = `INSERT INTO ${tablename} (nome, idade) VALUES ? ?)`

        _conn.query(sql, (err, result)=>{
            if (err) throw err
            console.log(result)
            return result
        })
    }
}