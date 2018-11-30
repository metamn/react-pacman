import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Grid from './../Grid';
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
	render() {
		const width = this.props.width;
		const height = this.props.height;
		const type = this.props.type;
		const numberOfElements = this.props.numberOfElements;

		const element = {
			type: this.props.elementType,
			value: this.props.elementValue,
			width: this.props.width,
			height: this.props.height,
		}

		return (
			<Container
				width={width}
				height={height}
				>
				<Grid
					width={width}
					height={height}
					columns={10}
					rows={10}
				/>
				<ElementList
					type={type}
					numberOfElements={numberOfElements}
					element={element}
				/>
			</Container>
		)
	}
}
