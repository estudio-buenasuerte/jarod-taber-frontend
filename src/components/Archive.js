import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { navigate } from 'gatsby';

const IndexList = ({ isIndexOpen, setIndexOpen, setCurrentProject, setIndex, projects }) => {
	const [selectedTitle, setSelectedTitle] = useState(null);

	return (
		<section
			className={classNames('archive', {
				visible: isIndexOpen,
			})}>
			<header className='archive__header'>
				<nav className='archive__nav'>
					<button
						onClick={() => {
							navigate('/', {
								replace: true,
							});
							setIndexOpen(false);
						}}>
						Jarod Taber
					</button>
					<span
						className={classNames('archive__header--project-title', {
							visible: selectedTitle,
						})}>
						{selectedTitle}
					</span>
				</nav>
				<button
					className=''
					onClick={() => {
						navigate('/', {
							replace: true,
						});
						setIndexOpen(false);
						setTimeout(() => setSelectedTitle(null), 500);
					}}>
					Work
				</button>
			</header>
			<section className='archive__list'>
				{projects.map((item, index) => {
					return (
						<article key={`project ${index}`} className='archive__project'>
							{item.thumbnail && (
								<img
									onClick={() => {
										setCurrentProject(projects[index]);
										setIndex(index);
										setTimeout(() => {
											setIndexOpen(false);
											navigate('/', {
												replace: true,
											});
										}, 250);
									}}
									onMouseEnter={() => {
										setSelectedTitle(item?.credits[0]?.name);
									}}
									src={`${item.thumbnail.asset.url}?w=600`}
									alt={item.title}
									className='archive__project--img'
								/>
							)}
						</article>
					);
				})}
			</section>
		</section>
	);
};
export default IndexList;
