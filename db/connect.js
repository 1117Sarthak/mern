const mongoose=require('mongoose')
const dotenv =require('dotenv')
dotenv.config({path:'./config.env'})


const DB=process.env.DB;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true /* ,useCreateIndex:true,useFindAndModify:false*/,
})
.then(() => console.log("connect successfully"))
.catch((err) => console.log(` ${err} no connection`));