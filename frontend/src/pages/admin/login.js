import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', formData);
      localStorage.setItem('token', response.data.token); // Store the token
      // You can redirect the user to the dashboard after successful login here.
      // If using Next.js's router: `router.push('/admin/dashboard');`
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <input value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} placeholder="Username" />
      <input type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
