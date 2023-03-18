const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
            path: {type: String},
        }  ,{ collection: 'slider' });
mongoose.models={}
export default mongoose.model("slider",imageSchema);