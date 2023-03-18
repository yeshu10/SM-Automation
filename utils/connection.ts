import mongoose, { Model } from "mongoose"
// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")
  console.log(mongoose.connection.readyState);

 // return { conn, category}
}
/*
  // OUR Category SCHEMA
 const categorySchema = new mongoose.Schema({
  
  title: {type: String},
   path: {type: String},
     subcategory: [{
            title: {type: String},
            desc: {type: String},
            path: {type: String},
            quant: {type: String},
            price: {type: String},
            
     }]
    }, { collection: 'category' });

  // OUR category MODEL
  const category = mongoose.models.category || mongoose.model("category", categorySchema)




import mongoose, { Model } from "mongoose"
// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")
  console.log(mongoose.connection.readyState);
  console.log(DATABASE_URL)

  // OUR Category SCHEMA
  const categorySchema = new mongoose.Schema({
    //ID: {type: String},
    //Title: {type: String},
    //Path: {type: String},
     //subcategory: [{
          
            title: {type: String},
            desc: {type: String},
            quant: {type: String},
            price: {type: String},
            path: {type: String},
     //}]
    });

  // OUR category MODEL
  const category = mongoose.models.category || mongoose.model("category", categorySchema)

  return { conn, category}
}*/