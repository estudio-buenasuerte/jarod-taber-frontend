import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Footer = props => {
	const [visible, setVisible] = useState(false);
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

	return (
		<footer
			className={`footer ${visible ? 'visible' : ''} ${
				props.isFullScreen ? 'fullscreen' : ''
			} ${props.infoCredits ? 'information' : ''}`}>
			{props.credits && (
				<ul className={`credits${visible ? ' visible' : ''}`}>
					{props.credits.map((credit, index) => {
						return (
							<li key={credit._key || index}>
								<span className='task'>{credit.task}</span>{' '}
								<span className='name'>{credit.name}</span>
							</li>
						);
					})}
				</ul>
			)}

			{props.infoCredits && (
				<ul className={`credits ${visible ? ' visible' : ''} information`}>
					{props.infoCredits.map((credit, index) => {
						return (
							<li key={credit._key || index}>
								<span className='task'>{credit.task}</span>{' '}
								<span className='name'>
									<a href={credit.site} target='_blank' rel='noreferrer noopener'>
										{credit.name}
									</a>
								</span>
							</li>
						);
					})}
				</ul>
			)}

			{isTabletOrMobile ? (
				<button className='hover mobile' onClick={() => setVisible(!visible)}>
					<div className='circle' />
				</button>
			) : (
				<button
					className='hover'
					onClick={() => setVisible(!visible)}
					onMouseEnter={() => setVisible(true)}
					onMouseLeave={() => (props.infoCredits ? null : setVisible(false))}>
					<div className='circle' />
				</button>
			)}
		</footer>
	);
};

export default Footer;
