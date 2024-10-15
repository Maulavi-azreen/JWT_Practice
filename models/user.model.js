const { Sequelize } = require("sequelize");

module.exports=(sequelize,Sequelize)=>{
    const User=sequelize.define("tbl_user",           //sequelizing the model (column will automatically created in tbl_user)
        {
            username:{type:sequelize.STRING},
            password:{type:sequelize.STRING},
            email:{type:sequelize.STRING}
    }) ;
    return User;
}