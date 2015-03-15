var authenticate_pam = null;
 
// Load the precompiled binary for windows.
if (process.platform === "linux" && process.arch === "x64") {
	authenticate_pam = require('./bin/linux_x64/authenticate_pam');
} else if (process.platform === "darwin" && process.arch === "x64") {
	authenticate_pam = require('./bin/darwin_x64/authenticate_pam');
} else {
	// Load the new built binary for other platforms.
	authenticate_pam = require('./build/Release/authenticate_pam');
}
 
module.exports = authenticate_pam;