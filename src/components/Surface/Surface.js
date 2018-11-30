import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ElementList from './../ElementList';

/**
 * The main container
 *
 */
const Container = styled.section`
	width: ${props => props.width};
	height: ${props => props.height};
	overflow: hidden;
	background-color: lightgray;
`;

/**
 * The main class
 */
export default class Surface extends React.Component {
	calculateElementWidth() {
		return '1vw';
	}

	calculateElementHeight() {
		return '1vh';
	}

	render() {
		const width = this.props.width;
		const height = this.props.height;
		const type = this.props.type;
		const numberOfElements = this.props.numberOfElements;
		const element = {
			type: this.props.elementType,
			value: this.props.elementValue,
			width: this.calculateElementWidth(),
			height: this.calculateElementHeight(),
		}

		return (
			<Container
				width={width}
				height={height}
				>
				<ElementList
					type={type}
					numberOfElements={numberOfElements}
					element={element}
				/>
			</Container>
		)
	}
}
