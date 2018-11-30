import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Surface from './../Surface';

/**
 * The main class
 */
export default class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: '10vw',
			height: '10vh',
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
			<Surface
				width={width}
				height={height}
				type={type}
				numberOfElements={numberOfElements}
				elementType={elementType}
				elementValue={elementValue}
			/>
		)
	}
}
