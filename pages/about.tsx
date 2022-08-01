import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const About: NextPage = () => {
    return (<div>About</div>);
}

export default withPageAuthRequired(About);