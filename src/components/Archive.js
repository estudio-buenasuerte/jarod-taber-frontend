import React from 'react';
import classNames from 'classnames';
import { navigate } from 'gatsby';

export default ({ isArchiveOpen, setArchiveOpen, setCurrentProject, setIndex, projects }) => {
	return (
		<section
			className={classNames('archive', {
				visible: isArchiveOpen,
			})}>
			<header className='archive__header'>
				<nav className='archive__nav'>
					<button
						onClick={() => {
							navigate('/', {
								replace: true,
							});
							setArchiveOpen(false);
						}}>
						Jarod Taber
					</button>
					<button
						onClick={() => {
							navigate('/', {
								replace: true,
							});
							setArchiveOpen(false);
						}}>
						Work
					</button>
				</nav>
				<button
					className=''
					onClick={() => {
						navigate('/', {
							replace: true,
						});
						setArchiveOpen(false);
					}}>
					Close
				</button>
			</header>
			<section className='archive__list'>
				{projects.map((item, index) => {
					return (
						<article
							key={`project ${index}`}
							className='archive__project'
							onClick={() => {
								setIndex(index);
								setCurrentProject(projects[index]);
								setArchiveOpen(false);
								navigate('/', {
									replace: true,
								});
							}}>
							{item.thumbnail && (
								<img
									src={null}
									alt={item.title}
									className='archive__project--img'
								/>
							)}
							<p>{item.title}</p>
						</article>
					);
				})}
			</section>
		</section>
	);
};
