import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		{
			allSanitySiteSettings {
				nodes {
					projectOrder {
						_key
						title
						thumbnail {
							_key
							_type
							asset {
								url
								fluid {
									base64
									aspectRatio
									src
									srcSet
									srcWebp
									srcSetWebp
									sizes
								}
							}
						}
					}
				}
			}
		}
	`);

	debugger;

	return (
		<Layout>
			<SEO title={'Index'} />
		</Layout>
	);
};

export default IndexPage;
