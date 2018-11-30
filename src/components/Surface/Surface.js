import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

/**
 * The Surface container
 *
 */
const Container = styled.section`
	width: ${props => props.width};
	height: ${props => props.height};
`;

/**
 * The main class
 */
export default class Surface extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: this.props.surface.width || '100%',
			height: this.props.surface.height || '100%',
		}
	}

	render() {
		const width = this.state.width;
		const height = this.state.height;

		return (
			<Container width={width} height={height}>
				{this.props.children}
			</Container>
		)
	}
}
