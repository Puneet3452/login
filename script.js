document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get the entered username and password
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // For simplicity, hardcoding username and password here (not secure)
    let hardcodedUsername = 'username';
    let hardcodedPassword = 'password';

    // Check if the entered username and password match the hardcoded values
    if (username === hardcodedUsername && password === hardcodedPassword) {
      document.getElementById('loginStatus').textContent = 'Login successful';
      // Redirect to another page or perform necessary actions upon successful login
    } else {
      document.getElementById('loginStatus').textContent = 'Invalid username or password';
    }
  });