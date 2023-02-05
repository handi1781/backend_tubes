import { Sequelize } from "sequelize";
import db from "../database/Database.js"

const {DataTypes}= Sequelize;

const User = db.define('polisi',{
    nama: DataTypes.STRING,
    pangkat: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    umur:DataTypes.INTEGER
},{
    freezeTableName:true
})

export default User;

(async()=>{
    await db.sync();
})();