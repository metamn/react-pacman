import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import Element from './../Element';
import Repeat from './../../framework';


/**
 * The main container
 */
const Container = styled.div`
	width: 100%;
	height: 100%;

	${props => props.type == 'matrix' && css`
		display: flex;
		flex-wrap: wrap;
	`}
`;


/**
 * The main class
 */
export default class ElementList extends React.Component {
	render() {
		const type = this.props.type;
		const numberOfTimes = this.props.numberOfElements;
		const element = this.props.element;

		return (
			<Container type={type}>
				<Repeat numberOfTimes={numberOfTimes} startAt={0}>
					{(i) => <Element element={element} key={i}/>}
				</Repeat>
			</Container>
		);
	}
}
