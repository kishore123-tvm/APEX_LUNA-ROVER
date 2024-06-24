function login() {
	// Check username and password
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	if (username === 'apexluna@10172627' && password === 'apex') {
		// Redirect to another HTML site
		window.location.href = 'index.html';
	} else {
		alert('Invalid username or password');
	}
}