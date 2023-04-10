import { getSession } from '@auth0/nextjs-auth0';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

export default function Homepage() {
	return null;
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const { req, res } = context;
	const isAuthenticated = getSession(req, res);

	if (!isAuthenticated) {
		return {
			redirect: {
				destination: '/api/auth/login',
				permanent: false,
			},
		};
	}

	return {
		redirect: {
			destination: '/app',
			permanent: false,
		},
	};
};
