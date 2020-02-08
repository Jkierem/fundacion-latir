import React, { useState } from "react";
import styled from "styled-components";
import { pick, omit } from "@juan-utils/functions";
import Colors from "../../utils/colors";

const width = (val = 20, extra = "0px") => `calc(${val}ch + ${extra})`;

const StyledContainer = styled.div`
	display: block;
	position: relative;
	margin: ${props => (props.fluid ? "16px 0px" : "16px")};
	width: ${props => (props.fluid ? "100%" : width(props.width))};
	& .j-input {
		width: ${props => (props.fluid ? "100%" : width(props.width))};
		border-radius: 0px;
		box-sizing: border-box;
		color: black;
		font-size: 1.12rem;
		line-height: 1.75rem;
		padding: 20px 16px 6px 16px;
		background-color: ${Colors.White.hexString};
		border: none;
		border-bottom: 1px solid ${Colors.Gray.Dark.hexString};
		border-radius: 4px 4px 0px 0px;
		&:focus {
			outline: none;
		}
		&::placeholder {
			display: none;
		}
	}

	& .j-input-label {
		position: absolute;
		line-height: 1.5rem;
		color: ${Colors.Gray.Light.hexString};
		left: 16px;
		top: 24px;
		font-size: 1.17rem;
		user-select: none;
		cursor: text;
		transition: top 0.2s ease-in-out;
	}
	& .j-input:focus ~ .j-input-label {
		font-size: 0.75rem;
		top: 5%;
		left: 16px;
		color: ${Colors.Primary.hexString};
	}
	& .j-input:focus ~ .bar {
		width: ${props => (props.fluid ? "100%" : width(props.width, "24px"))};
	}
	.j-input-label__off {
		font-size: 0.75rem;
		top: 5%;
		left: 16px;
	}
	.bar {
		transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);
		position: absolute;
		border-bottom: 1px solid ${Colors.Primary.Dark.hexString};
		border-top: 1px solid ${Colors.Primary.Dark.hexString};
		bottom: 0px;
		height: 0px;
		width: 0;
	}
`;

const valueExists = value => {
	return value && value !== "" && (value.trim ? value.trim() !== "" : true);
};

/**
 * @typedef {{
 *  defaultValue: any;
 *  id: string;
 *  name: string;
 *  label: string;
 *  fluid: boolean;
 *  onChange: (e: React.SyntheticEvent, info: any) => void;
 *  type: string;
 * }} InputProps
 * @param {InputProps} props
 * @description Inputs for forms. If inside a Form component, onChange is overriden
 */
const CustomInput = props => {
	const [value, setValue] = useState(props.defaultValue);

	const handleChange = e => {
		setValue(e.target.value);
		const { id, name, label } = props;
		props.onChange(e, {
			name,
			id: id || label,
			value: e.target.value,
		});
	};

	const getLabelClassName = () => `j-input-label ${valueExists(value) ? "j-input-label__off" : ""}`;

	const containerProps = pick(["fluid"], props);
	const inputProps = omit(["fluid"], props);

	return (
		<StyledContainer {...containerProps}>
			<input
				className="j-input"
				{...inputProps}
				onChange={handleChange}
				id={props.id || props.label}
			/>
			<div className="bar"></div>
			{props.label && (
				<label htmlFor={props.id || props.label} className={getLabelClassName()}>
					{props.label}
				</label>
			)}
		</StyledContainer>
	);
};

CustomInput.formElement = "Input";

export default CustomInput;
