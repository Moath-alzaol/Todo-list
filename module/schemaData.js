const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const userSchema =new mongoose.Schema({
    userName : {
        type : String,
        required : true 
    },
    userEmail : {
        type : String,
        required : true 
    },
    userPassword : {
        type : String,
        required : true 
    }
});

userSchema.methods.hachPassword = function(password){
    return bcrypt.hashSync(password , bcrypt.genSaltSync(5) , null)
}


const  sortUser = new mongoose.Schema({
    task    : String, 
    label   : String,
    user_id : String,
    // user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});



module.exports.User = mongoose.model('User' , userSchema);
module.exports.Sort = mongoose.model('Sort' , sortUser);