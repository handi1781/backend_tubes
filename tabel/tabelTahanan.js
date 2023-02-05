import { Sequelize } from "sequelize";
import db from "../database/Database.js"

const {DataTypes}= Sequelize;

const User = db.define('tahanan',{
    nama: DataTypes.STRING,
    kasus: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    umur:DataTypes.INTEGER
},{
    freezeTableName:true
})

export default User;

(async()=>{
    await db.sync();
})();