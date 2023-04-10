import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Homepage } from 'containers/Home';

export default function Home() {
	return <Homepage />;
}

export const getServerSideProps = withPageAuthRequired();
