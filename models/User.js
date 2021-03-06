var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	articles: [
		{
			type: Schema.Types.ObjectId,
			ref: "Article"
		}
	]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
