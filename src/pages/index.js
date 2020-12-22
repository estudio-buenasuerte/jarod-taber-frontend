import React from 'react';
import Portfolio from '../components/Portfolio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

import '../styles/main.scss';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		{
			allSanitySiteSettings {
				nodes {
					title
					description
				}
			}
		}
	`);

	const { title, description } = data.allSanitySiteSettings.nodes[0];

	return (
		<Layout>
			<SEO title={title} description={description} />
			<Portfolio />
		</Layout>
	);
};

export default IndexPage;
