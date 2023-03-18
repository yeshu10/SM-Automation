const mongoose = require('mongoose');
const homeSchema = new mongoose.Schema({
            title: {type: String},
            desc: {type: String},
            path: {type: String},
        }  ,{ collection: 'home' });
mongoose.models={}
export default mongoose.model("home",homeSchema);
