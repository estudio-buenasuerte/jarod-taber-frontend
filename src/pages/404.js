import React from 'react';
import { Link } from 'gatsby';

import Portfolio from '../components/Portfolio';
import SEO from '../components/seo';

const NotFoundPage = () => (
	<Portfolio>
		<SEO title='404: Not found' />
		<div
			style={{
				textAlign: 'center',
				fontWeight: 'normal',
			}}>
			<h1 style={{ textTransform: 'uppercase' }}>Not Found</h1>
			<p>
				Click{' '}
				<Link to={'/'} style={{ color: 'inherit' }}>
					here
				</Link>{' '}
				to go home
			</p>
		</div>
	</Portfolio>
);

export default NotFoundPage;
