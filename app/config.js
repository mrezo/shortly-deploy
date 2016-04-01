var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');


////// URLS SCHEMA
var urlsSchema = new Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  // createdAt: Date,
  // modifiedAt: Date
}, {timestamps: true});


urlsSchema.methods.initialize = function() {
  // this.on('creating', function(model, attrs, options) {
    var shasum = crypto.createHash('sha1');
    shasum.update(this.url);
    this.code = shasum.digest('hex').slice(0, 5);
  // });
};


///// USERS SCHEMA
var usersSchema = new Schema({
  username: String,
  password: String
}, {timestamps: true});

 // User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function() {
//     this.on('creating', this.hashPassword);
//   },
//   comparePassword: function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
//       callback(isMatch);
//     });
//   },
//   hashPassword: function() {
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.get('password'), null, null).bind(this)
//       .then(function(hash) {
//         this.set('password', hash);
//       });
//   }
// });

module.exports.urlsSchema = urlsSchema;
module.exports.usersSchema = usersSchema;