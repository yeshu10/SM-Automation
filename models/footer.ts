const mongoose = require('mongoose');
const footSchema = new mongoose.Schema({
            whatsapp: {type: Number},
            email: {type: String},
            title: {type: String},
        }  ,{ collection: 'footer' });
mongoose.models={}
export default mongoose.model("footer",footSchema);
