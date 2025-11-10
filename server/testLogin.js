const fetch = require('node-fetch');

async function testLogin() {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'Licesco2024!'
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Login exitoso!');
      console.log('Token JWT generado:', data.token.substring(0, 50) + '...');
      console.log('Usuario:', data.user.username);
      console.log('Email:', data.user.email);
    } else {
      console.log('❌ Login fallido:', data.message);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testLogin();
