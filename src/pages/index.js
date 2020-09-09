import React from 'react';
import Portfolio from '../components/Portfolio/Portfolio';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

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
		<Portfolio>
			<SEO title={title} description={description} />
		</Portfolio>
	);
};

export default IndexPage;
