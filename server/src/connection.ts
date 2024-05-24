import mongoose from "mongoose";



async function handleDB(url:string){
    const db = mongoose.connect(url).
    then(()=>{console.log("DB connection established")}).catch((err)=>{console.log("DB Eroor",err)})
}

export default handleDB;
