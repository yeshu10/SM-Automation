const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
   // ID: {type: String},
   title: {type: String},
   desc: {type: String},
   path: {type: String},
    subcategory: [{
            title: {type: String},
            desc: {type: String},
            path: [{type: String}],
            quant: {type: Number},
            price: {type: Number},
           
   }]
  }  ,{ collection: 'category' });
mongoose.models={}
export default mongoose.model("category",categorySchema);
