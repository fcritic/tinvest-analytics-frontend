import React, { useEffect, useState } from 'react';
import { getProfile } from '../api/auth';

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Не авторизован');
      return;
    }
    getProfile(token).then((res) => {
      if (res.error) setError(res.error);
      else setProfile(res);
    }).catch(() => setError('Ошибка сети'));
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>Профиль</h2>
      <p>Email: {profile.email}</p>
      <p>Role: {profile.role}</p>
    </div>
  );
}
