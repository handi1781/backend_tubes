import { Sequelize } from "sequelize";

const db = new Sequelize('projek_akhir','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
