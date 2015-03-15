var assert = require('assert');
var pam;

if (process.platform === "linux" && process.arch === "x64") {
	pam = require('../bin/linux_x64/authenticate_pam');
} else if (process.platform === "darwin" && process.arch === "x64") {
	pam = require('../bin/darwin_x64/authenticate_pam');
} else {
	// Load the new built binary for other platforms.
	pam = require('../build/Release/authenticate_pam');
}

pam.authenticate(process.argv[2], process.argv[3],
	function(err) {
		if(err) {
			console.log("Login failure: " + err)
		}
		else {
			console.log("Authenticated!");
		}
	}, {'remoteHost': "localhost"}
);
