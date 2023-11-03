import mongoose  from "mongoose";

const database = () =>{
    mongoose.connect(process.env.MONGODB_URI , {
       dbName:"ShowProduct"
    }).then((data) => {
        console.log(`Connected to MongoDB on ${data.connection.host}`);
    })
}
export default database;