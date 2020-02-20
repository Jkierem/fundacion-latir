import React from "react";
import LocationItem from "../../../../components/LocationItem";
import Styled from "styled-components";

const LocationsTitle = Styled.h1`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 5% 0;
`;

const LocationsContainer = Styled.div`
	grid-area: values;
	width: 100%;
	height: 100%;

`;

const LocationItemContainer = Styled.div`
	position: relative;
	margin: 0 20px;
	flex-grow: 0;
	flex-shrink: 0;
`;

const Location = ({ src, title, text, imgToRight }) => {
	return (
		<LocationItemContainer>
			<LocationItem src={src} title={title} text={text} imgToRight={imgToRight} />
		</LocationItemContainer>
	);
};

const MarginContainer = Styled.div`
	margin: 5% 0;
`;

const Locations = () => {
	return (
		<>
			<LocationsTitle>Donde hemos estado</LocationsTitle>
			<LocationsContainer>
				<MarginContainer />
				<Location
					src="https://picsum.photos/400/500"
					title="Lorem ipsum dolor"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
				<MarginContainer />
				<Location
					src="https://picsum.photos/400/500"
					title="Lorem ipsum dolor"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					imgToRight={false}
				/>
				<MarginContainer />
				<Location
					src="https://picsum.photos/400/500"
					title="Lorem ipsum dolor"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
				<MarginContainer />
				<Location
					src="https://picsum.photos/400/500"
					title="Lorem ipsum dolor"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					imgToRight={false}
				/>
			</LocationsContainer>
		</>
	);
};

export default Locations;
