import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { navigate } from 'gatsby';
import Video from './Video';

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
					debugger;
					return (
						<article key={`project ${index}`} className='archive__project'>
							{item.projectThumbnail.image && (
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
									src={`${item.projectThumbnail.image.asset.url}?w=600`}
									alt={item.title}
									className='archive__project--img'
								/>
							)}
							{item.projectThumbnail.video && (
								<div
									className='archive__project--video'
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
									}}>
									<Video
										src={item.projectThumbnail.video.asset.url}
										className='archive__project--img'
										isCurrent={true}
									/>
								</div>
							)}
						</article>
					);
				})}
			</section>
		</section>
	);
};
export default IndexList;
