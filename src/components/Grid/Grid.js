import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Repeat from './../../framework';

/**
 * The main container
 */
const Container = styled.section`
	width: ${props => props.width};
	height: ${props => props.height};
	position: relative;
`;

const Columns = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
`;

const Rows = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

const Column = styled.div`
	width: 1vw;
	height: 100%;
	border-right: 1px solid;
`;

const Row = styled.div`
	height: 1vh;
	border-bottom: 1px solid;
`;

/**
 * The main class
 */
export default class Grid extends React.Component {
	renderColumn(i) {
		return (
			<Column key={i} width={this.props.width} columns={this.props.columns}/>
		);
	}

	renderRow(j) {
		return (
			<Row key={j}/>
		);
	}

	render() {
		const width = this.props.width;
		const height = this.props.height;
		const columns = this.props.columns;
		const rows = this.props.rows;

		return (
			<Container width={width} height={height}>
				<Columns>
					<Repeat numberOfTimes={columns} startAt={1}>
						{(i) => this.renderColumn(i)}
					</Repeat>
				</Columns>
				<Rows>
					<Repeat numberOfTimes={rows} startAt={1}>
						{(j) => this.renderRow(j)}
					</Repeat>
				</Rows>
			</Container>
		)
	}
}
