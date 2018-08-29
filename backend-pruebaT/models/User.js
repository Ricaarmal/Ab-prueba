const passportLocalMongoose = require('passport-local-mongoose')
const Schema = require('mongoose').Schema;

const userSchema = new Schema ({
  email: String,
  username: String,
  tasks: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Tasks'
    }
  ]
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('User', userSchema);