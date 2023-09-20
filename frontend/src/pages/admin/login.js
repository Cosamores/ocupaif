import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const response = await axios.post('/server/routes/login', formData);
      localStorage.setItem('token', response.data.token); // Store the token
      // Navigate to the admin dashboard after successful login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <input value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} placeholder="Username" />
      <input type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
