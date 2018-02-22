	var exec = require('cordova/exec');
	module.exports = {
		scan: function(resultCallback, errorCallback) {
			exec(resultCallback, errorCallback, "Scan", "scan", []);
		},
		generate: function(resultCallback, errorCallback, data, type) {
			var _type = (type || "TEXT_TYPE");
			exec(resultCallback, errorCallback, "Scan", "generate", [data, _type]);
		}
	};