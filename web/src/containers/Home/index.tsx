import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export const Homepage = () => {
  const { user } = useUser();

  return (
    <main>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href="/api/auth/logout">Logout</Link>
    </main>
  );
};
