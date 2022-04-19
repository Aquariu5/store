import {Sequelize} from 'sequelize'

export default new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.host,
        port: process.env.DB_PORT
    }
)