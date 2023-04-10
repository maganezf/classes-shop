import { useUser } from '@auth0/nextjs-auth0/client';

export const Homepage = () => {
	const { user } = useUser();

	return (
		<main>
			<h1>Hello World</h1>
			<pre>{JSON.stringify(user, null, 2)}</pre>
			<a href="/api/auth/logout">Logout</a>
		</main>
	);
};
