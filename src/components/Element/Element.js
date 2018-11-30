import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container=styled.div`
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
		};
	}

	render() {
		const value = this.state.value;

		return (
			<Container>
				{value}
			</Container>
		);
	}
}
