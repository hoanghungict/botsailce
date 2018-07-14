var mongoose = require('mongoose');

var configSchema = mongoose.Schema({	
	pageID: String,
	appID: String,
	appSecret: String,
	validationToken: String,
	pageToken: String,
});

//define the schema for our user model
var packageSchema = mongoose.Schema({	
	datatype: { type : String , "default" : "package-config" },
	name: { type: String, default: "fbsbot" },
	bot_id: mongoose.Schema.Types.ObjectId,
	pageID: String,
	appID: String,
	appSecret: String,
	validationToken: String,
	pageToken: String,
});

module.exports = mongoose.model('FBConnectSchema', packageSchema, 'packages');