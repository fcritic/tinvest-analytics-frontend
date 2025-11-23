import React, { useState } from 'react';
import { register } from '../api/auth';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const res = await register(email, password);
        console.log(res.token.access_token);
      if (res.token) {
        setMessage('✅ Регистрация успешна!');
      } else {
        setMessage(res.error || 'Ошибка регистрации');
      }
    } catch (e) {
      setMessage('Ошибка сети');
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" />
      <button onClick={handleRegister}>Создать аккаунт</button>
      <p>{message}</p>
    </div>
  );
}
