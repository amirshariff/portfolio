import React from 'react';
import Hero from '../Component/Hero';
import Content from '../Component/Content';

const AboutPage = (props) => {
	console.log(props.title);
	return (
		<div>
			<div>{props.title}</div>
			<Content></Content>
		</div>
	);
};

export default AboutPage;
