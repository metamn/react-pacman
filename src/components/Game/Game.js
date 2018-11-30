import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Surface from './../Surface';

/**
 * The main container
 */
const Container=styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	min-width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

/**
 * The main class
 */
export default class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: '90vw',
			height: '90vh',
			type: 'matrix',
			numberOfElements: 3,
			elementType: 'char',
			elementValue: '•',
		}
	}

	render() {
		const width = this.state.width;
		const height = this.state.height;
		const type = this.state.type;
		const numberOfElements = this.state.numberOfElements;
		const elementType = this.state.elementType;
		const elementValue = this.state.elementValue;

		return (
			<Container className="game">
				<Surface
					width={width}
					height={height}
					type={type}
					numberOfElements={numberOfElements}
					elementType={elementType}
					elementValue={elementValue}
				/>
			</Container>
		)
	}
}
