import React from 'react';
import { useLocation } from '@reach/router';
import { SwitchTransition, Transition } from 'react-transition-group';
import '../styles/main.scss';

export const TRANSITION_DURATION = 400;

const TRANSITION_STYLES = {
	default: {
		transition: `opacity ${TRANSITION_DURATION}ms ease`,
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

export default ({ children }) => {
	const location = useLocation();
	return (
		<SwitchTransition>
			<Transition
				key={location.pathname}
				in={true}
				mountOnEnter
				unmountOnExit
				appear
				timeout={TRANSITION_DURATION}>
				{status => (
					<div
						id='maincontent'
						style={{
							...TRANSITION_STYLES.default,
							...TRANSITION_STYLES[status],
						}}>
						{children}
					</div>
				)}
			</Transition>
		</SwitchTransition>
	);
};
