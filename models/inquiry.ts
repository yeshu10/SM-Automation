const mongoose = require('mongoose');
const inquirySchema = new mongoose.Schema({
           sno: {type: Number},
           name: {type: String},
           company: {type: String},
           city: {type: String},
           mobile: {type: String},
           email: {type: String},
            desc: {type: String},
           }  ,{ collection: 'inquiry' });
mongoose.models={}
export default mongoose.model("inquiry",inquirySchema);