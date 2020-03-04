import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import './Footer.scss'


const Footer = props => {

	const [visible, setVisible] = useState(false)
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
	
	return (
		<footer className={`footer ${visible ? 'visible' : ''} ${props.isFullScreen ? 'fullscreen' : ''}`}>
			{props.credits && (
				<ul className={`credits${visible ? ' visible' : ''}`}>
					{props.credits.map(credit => {
						return <li key={credit._key}>
							<span className='task'>{credit.task}</span>
							{' '}
							<span className='name'>{credit.name}</span>
						</li>
					})}
				</ul>
			)}
			{isTabletOrMobile
			? (
					<button className='hover mobile'
						onClick={() => setVisible(!visible)}>
						<div className='circle' />
					</button>
			) 
			: (
					<button className='hover'
						onClick={() => setVisible(!visible)}
						onMouseEnter={() => setVisible(true)}
						onMouseLeave={() => setVisible(false)}>
						<div className='circle' />
					</button>
			)}
		</footer>
	)
		
}

export default Footer
