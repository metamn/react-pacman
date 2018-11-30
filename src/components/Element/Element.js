import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container=styled.div`
	display: flex;
	width: ${props => props.width};
	height: ${props => props.height};
	overflow: hidden;
	border: 1px solid;
	box-sizing: border-box;
`;

/**
 * The main class
 */
export default class Element extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			type: this.props.element.type || 'char',
			value: this.props.element.value || 'element',
			width: this.props.element.width || 'auto',
			height: this.props.element.height || 'auto',
		};
	}

	render() {
		const value = this.state.value;
		const width = this.state.width;
		const height = this.state.height;

		return (
			<Container width={width} height={height}>
				{value}
			</Container>
		);
	}
}
