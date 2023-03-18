const mongoose = require('mongoose');
const aboutSchema = new mongoose.Schema({
            title: {type: String},
            desc: {type: String},
            path: {type: String},
        }  ,{ collection: 'about' });
mongoose.models={}
export default mongoose.model("about",aboutSchema);
