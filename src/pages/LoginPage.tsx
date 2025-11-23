import React, { useState } from 'react';
import { login } from '../api/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      if (res.token) {
        localStorage.setItem('token', res.token);
        setMessage('✅ Успешный вход!');
      } else {
        setMessage(res.error || 'Ошибка входа');
      }
    } catch (e) {
      setMessage('Ошибка сети');
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" />
      <button onClick={handleLogin}>Войти</button>
      <p>{message}</p>
    </div>
  );
}
