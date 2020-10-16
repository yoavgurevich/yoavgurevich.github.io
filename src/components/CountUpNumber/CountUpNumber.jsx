/*
 Attribution: https://jshakespeare.com/simple-count-up-number-animation-javascript-react/
 */
import React from 'react';

const easeOutQuad = (t) => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUpNumber = ({ children, duration = 2000 }) => {
	const countTo = parseInt(children, 10);
	const [ count, setCount ] = React.useState(0);

	React.useEffect(() => {
		let frame = 0;
		const totalFrames = Math.round(duration / frameDuration);
		const counter = () => {
			frame++;
			const progress = easeOutQuad(frame / totalFrames);
			setCount(countTo * progress);

			if (frame === totalFrames) return;
			else requestAnimationFrame(counter);
		};

		requestAnimationFrame(counter);
	}, []);

	return Math.floor(count);
};

export default CountUpNumber;
