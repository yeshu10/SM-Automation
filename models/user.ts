const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
            email: {type: String},
            password: {type: String},
        }  ,{ collection: 'user' });
mongoose.models={}
export default mongoose.model("user",userSchema);
