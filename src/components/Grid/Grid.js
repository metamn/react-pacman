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
	width: calc(${props => props.width} / ${props => props.columns});
	height: 100%;
	border-right: 1px solid;
`;

const Row = styled.div`
	height: calc(${props => props.height} / ${props => props.columns});
	border-bottom: 1px solid;
`;

/**
 * The main class
 */
export default class Grid extends React.Component {
	renderColumn(i) {
		const width = this.props.width;
		const columns = this.props.columns;

		return (
			<Column key={i} width={width} columns={columns}/>
		);
	}

	renderRow(j) {
		const height = this.props.height;
		const columns = this.props.columns;

		return (
			<Row key={j} height={height} columns={columns}/>
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
