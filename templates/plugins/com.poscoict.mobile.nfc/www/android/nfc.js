	var exec = require('cordova/exec');
	module.exports = {
		read: function(resultCallback, errorCallback) {
			exec(resultCallback, errorCallback, "NFC", "read", []);
		},
		read_tag: function(resultCallback, errorCallback) {
			exec(resultCallback, errorCallback, "NFC", "read_tag", []);
		},
		write: function(resultCallback, errorCallback, data) {
			exec(resultCallback, errorCallback, "NFC", "write", [data]);
		},
		init: function(resultCallback, errorCallback) {
			exec(resultCallback, errorCallback, "NFC", "init", []);
		}
	};