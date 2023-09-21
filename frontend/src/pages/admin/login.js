import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';  // Import useRouter from Next.js for redirection

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter(); // Initialize the Next.js router

  // Define baseURL depending on the environment
  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseURL = isDevelopment ? 'http://localhost:8888' : '';

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseURL}/.netlify/functions/login`, formData);
      localStorage.setItem('token', response.data.token); 
      router.push('/admin/Admin'); 
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <input 
        value={formData.username} 
        onChange={e => setFormData({ ...formData, username: e.target.value })}
        placeholder="Username" 
      />
      <input 
        type="password" 
        value={formData.password} 
        onChange={e => setFormData({ ...formData, password: e.target.value })}
        placeholder="Password" 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
