import React, { useState } from "react"
import './Footer.scss'


const Footer = props => {

	const [visible, setVisible] = useState(false)
	
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
			<button className='hover' 
			onMouseEnter={() => setVisible(true)} 
			onMouseLeave={() => setVisible(false)}>
				<div className='circle'/>
			</button>
		</footer>
	)
		
}

export default Footer
