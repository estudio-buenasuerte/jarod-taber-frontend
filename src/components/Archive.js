import React, { useState } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import classNames from 'classnames';
import { navigate } from 'gatsby';
import Video from './Video';

const FOOTER_TRANSITION_STYLES = {
	default: {
		transition: `opacity 200ms ease`,
	},
	entering: {
		opacity: 0,
	},
	entered: {
		opacity: 1,
	},
	exiting: {
		opacity: 0,
	},
	exited: {
		opacity: 0,
	},
};

const IndexList = ({
	isIndexVisible,
	setIndexVisible,
	setCurrentProject,
	setIndex,
	projects,
	onClick,
}) => {
	const [selectedTitle, setSelectedTitle] = useState(null);

	const detectHover = title => {
		setSelectedTitle(title);
	};

	return (
		<section
			onClick={onClick}
			className={classNames('archive', {
				visible: isIndexVisible,
			})}>
			<section className='archive__list'>
				{projects.map((item, index) => {
					return (
						<article key={`project ${index}`} className='archive__project'>
							{item.projectThumbnail.image && (
								<img
									onClick={() => {
										setCurrentProject(projects[index]);
										setIndex(index);
										setTimeout(() => {
											setIndexVisible(false);
											navigate('/', {
												replace: true,
											});
										}, 300);
									}}
									onPointerEnter={() => {
										detectHover(item?.credits[0]?.name);
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
											setIndexVisible(false);
											navigate('/', {
												replace: true,
											});
										}, 250);
									}}
									onPointerEnter={() => {
										detectHover(item?.credits[0]?.name);
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
			<footer className='archive__footer'>
				<SwitchTransition>
					<Transition key={selectedTitle} mountOnEnter unmountOnExit appear timeout={400}>
						{status => (
							<span
								id='archive__selected-project'
								style={{
									...FOOTER_TRANSITION_STYLES.default,
									...FOOTER_TRANSITION_STYLES[status],
								}}>
								{selectedTitle}
							</span>
						)}
					</Transition>
				</SwitchTransition>
			</footer>
		</section>
	);
};
export default IndexList;
