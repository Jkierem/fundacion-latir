import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Colors from "../../utils/colors";

const LinkWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0px 6px;
	color: ${Colors.White.hexString()};
`;

const LinkStyle = styled.a`
	padding: 6px;
	color: inherit;
	text-decoration: none;
	font-size: 1em;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

/**
 * @typedef {{
 *  to: string;
 *  children?: string;
 *  text?: string;
 *  replace?: boolean;
 *  onClick?: (e: any) => void;
 * }} LinkProps
 * @param {LinkProps} props
 * @description A link element that on click, moves to the 'to' route. Requires either a text prop or children
 * @returns {JSX.Element} anchor html tag
 */
const Link = ({ to, children, text, replace, onClick }) => {
	const history = useHistory();
	const handleClick = e => {
		onClick && onClick(e);
		replace ? history.replace(to) : history.push(to);
	};
	return (
		<LinkWrapper>
			<LinkStyle onClick={handleClick}>{children || text}</LinkStyle>
		</LinkWrapper>
	);
};

Link.Style = LinkWrapper;
Link.InnerStyle = LinkStyle;

export default Link;
