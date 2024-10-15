// const express=require('express')
// const db=require("./models/index")

// const cors=require('cors')

// const app=express();    //server is created

// var corsPolicy={
//     origin:"*"
// }

// app.use(cors(corsPolicy))
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

// //we can do this for every route
// //eg: require("./app/routes/student.routes")(app)
// require("./routes/user.route")(app);

// db.sequelize.sync().then(result => {
//     console.log(result);
//     app.listen(5000);
// }).catch(err => {
//     console.log(err);
// });

// app.listen(5000,()=>{
//     console.log("Server Started")
// })

const express = require('express');
const db = require("./models/index");
const cors = require('cors');

const app = express();

var corsPolicy = {
    origin: "*"
};

app.use(cors(corsPolicy));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/user.route")(app);

db.sequelize.sync().then(() => {
    console.log("Database synchronized");
    app.listen(5000, () => {
        console.log("Server Started on port 5000");
    });
}).catch(err => {
    console.log("Error syncing database:", err);
});
