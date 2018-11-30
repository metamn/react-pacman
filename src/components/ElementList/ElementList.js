import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Element from './../Element';
import Repeat from './../../framework';


/**
 * The main container
 */
const Container = styled.div`
	width: 100%;
	height: 100%;
`;


/**
 * The main class
 */
export default class ElementList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			type: this.props.elementList.ype || 'rectangle',
			numberOfElements: this.props.elementList.numberOfElements || 1,
			element: this.props.element || { type: 'char', value: 'x' },
		}
	}

	render() {
		const numberOfTimes = this.state.numberOfElements;
		const element = this.state.element;

		return (
			<Container>
				<Repeat numberOfTimes={numberOfTimes} startAt={0}>
					{(i) => <Element element={element} key={i}/>}
				</Repeat>
			</Container>
		);
	}
}
