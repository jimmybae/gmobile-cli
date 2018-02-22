	var exec = require('cordova/exec');
	module.exports = {
		regist: function(resultCallback, errorCallback, senderId) {
			var _sendId = (senderId || "");
			exec(resultCallback, errorCallback, "GCM", "regist", [_sendId]);
		}
	};