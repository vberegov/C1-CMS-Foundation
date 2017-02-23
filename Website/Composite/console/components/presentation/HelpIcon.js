import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from 'console/components/colors.js';

export const Indicator = styled.span.withConfig({ displayName: 'Indicator' })`
	position: absolute;
	right: 0;

	&::after {
		content: "?";
		width: 16px;
		height: 16px;
		color: white;
		position: absolute;
		top: 6px;
		right: 2px;
		background: ${colors.helpIconColor};
		border-radius: 8px;
		font-size: 11px;
		text-align: center;
		line-height: 16px;
		font-weight: normal;
		font-family: Verdana;
	}
`;

export const Helper = styled.div.withConfig({ displayName: 'Helper' })`
	position: absolute;
	z-index: 100;
	top: 2px;
	left: calc(100% - 2px);
	width: max-content;
	max-width: 200px;
	background-color: #fff;
	box-shadow: 0px 0px 12px -1px rgba(204, 204, 204, 0.75);
	border-radius: 5px;
	border: 1px solid #ccc;
	padding: 10px 12px;
	font-size: 12px;
	line-height: 15px;
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.2s, visibility 0.2s;
	transition-delay: 2s;

	&.shown {
		visibility: visible;
		opacity: 1;
		transition-delay: 0s;
	}
`;

const HelpIcon = ({text}) => {
	let helper;

	function showHelper() {
		helper.className += ' shown';
	}

	function hideHelper() {
		helper.className = helper.className.replace(' shown', '');
	}

	return (
		<Indicator
			onClick={showHelper}
			onMouseOut={hideHelper}>
			<Helper
				innerRef={comp => { helper = comp; }}
				className="helper">
				{text}
			</Helper>
		</Indicator>
	);
};

HelpIcon.propTypes = {
	text: PropTypes.string.isRequired
};

export default HelpIcon;
