const mongoose=require('mongoose');
const connectDb=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{
    })
    console.log("mongo DB conection success !!")

        
    } catch (error) {
        console.log(`error in connecting ${error.message}`)
        process.exit()
    }
}
module.exports=connectDb