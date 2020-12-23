import React from 'react';
import classNames from 'classnames';
import { navigate } from 'gatsby';

export default ({ isArchiveOpen, setArchiveOpen, setCurrentProject, projects }) => {
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
		</section>
	);
};
