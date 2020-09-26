// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-568474daeb7db1c0d59e311079c018ecc73c4043.cxlyenk4kkus.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'OweTD$?4v4A1uF<LNs1[zC7iXZ{]Fb|M'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}