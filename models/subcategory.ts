const mongoose = require('mongoose');
const subcategorySchema = new mongoose.Schema({
  
    subcategory: [{
        title: {type: String},
        desc: {type: String},
        path: [{type: String}],
        quant: {type: Number},
        price: {type: Number},
       
}]
}  ,{ collection: 'category' });
mongoose.models={}
export default mongoose.model("category",subcategorySchema);

