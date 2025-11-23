export async function register(email: string, password: string) {
  const res = await fetch('/api/v1/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function login(email: string, password: string) {
  const res = await fetch('/api/v1/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function getProfile(token: string) {
  const res = await fetch('/api/v1/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
