// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let UserSchema = new Schema(
    {
        id: {
           type: Number,
        },
        name: {
            type: String,
            default: 'No Name Provided'
        },
        college: {
            type: String,
            default: 'No College Name Provided'
        },
        branch: {
            type: String,
            default: 'No Branch Provided'
        },
        p_year: {
            type: Number,
            default: 'No Passing out year Provided'
        },
        c_address: {
            type: String,
            default: 'No College Address Provided'
        },
        email: {
            type: String,
            default: 'No User Email Provided'
        },
        password: {
            type: String,
            default: 'No Password Provided'
        }
    }
)

mongoose.model('User', UserSchema);