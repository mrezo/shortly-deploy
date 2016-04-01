var db = require('../config');
// var crypto = require('crypto');
var mongoose = require('mongoose');



module.exports.Urls = mongoose.model('Urls', db.urlsSchema);
