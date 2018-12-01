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
	display: flex;
	flex-wrap: wrap;
`;

/**
 * The Cell
 */
const Cell = styled.div`
	width: calc(${props => props.width} / ${props => props.columns});
	height: calc(${props => props.height} / ${props => props.rows});
	border: 1px solid;
	box-sizing: border-box;
`;


/**
 * The main class
 */
export default class CellList extends React.Component {
	renderCell(i,j) {
		const width = this.props.width;
		const height = this.props.height;
		const columns = this.props.columns;
		const rows = this.props.rows;

		const index = (i-1)*columns + j;
		const className = `cell-${index}`;

		return (
			<Cell
				className={className}
				key={index}
				width={width}
				height={height}
				columns={columns}
				rows={rows}
				/>
		)
	}

	render() {
		const name = this.props.name || 'cell-list';
		const width = this.props.width;
		const height = this.props.height;
		const columns = this.props.columns;
		const rows = this.props.rows;

		return (
			<Container className={name} width={width} height={height}>
				<Repeat numberOfTimes={columns} startAt={1}>
					{(i) =>
						<>
							<Repeat numberOfTimes={rows} startAt={1}>
								{(j) => this.renderCell(i, j) }
							</Repeat>
						</>
					}
				</Repeat>
			</Container>
		)
	}
}
