const dbConfig = require("../config/db.config")
const dbcCnfig=require("../config/db.config")

const Sequelize=require("sequelize")

 //making object of Sequelize (to open connection)
const sequelize=new Sequelize(dbcCnfig.db,dbConfig.USER,dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle,
        }

    }
) ;      

//making db str (for constants use Sequelize)
const db={};
db.Sequelize=Sequelize; //package (constant Sequelize)
db.sequelize=sequelize; //object sequelize

db.user=require("./user.model")(sequelize,Sequelize);        //providing connection to user model
module.exports= db;

