import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Surface from './../Surface';
import ElementList from './../ElementList';

/**
 * The main class
 */
export default class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			surface: {
				width: '100vw',
				height: '100vh',
			},
			elementList: {
				type: 'reactangle',
				numberOfElements: 100,
			},
			element: {
				type: 'char',
				value: '&mbull;',
			},
		}
	}

	render() {
		const surface = this.state.surface;
		const elementList = this.state.elementList;
		const element = this.state.element;

		return (
			<Surface surface={surface}>
				<ElementList elementList={elementList} element={element} />
			</Surface>
		)
	}
}
