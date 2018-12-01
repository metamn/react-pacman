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
	box-sizing: border-box;
`;


/**
 * The main class
 */
export default class CellList extends React.Component {
	getCellContent(i, j, contents) {
		if (!contents) return;

		let content = contents.filter(c => (c.row == i && j >= c.column));
		if (!content) return;
		if (!content[0]) return;

		let c = content[0];
		let k = c.column;
		if (c.text[j-k]) return {
			text: c.text[j-k],
			class: (c.class) ? c.class : '',
		}
	}

	renderCell(i, j) {
		const width = this.props.width;
		const height = this.props.height;

		const cellList = this.props.cellList;
		const columns = cellList.columns;
		const rows = cellList.rows;

		const index = (i-1)*columns + j;
		const cellContent = this.getCellContent(i, j, cellList.content);

		let className = `cell cell-${index} cell-column-${i} cell-row-${j}`;
		if (cellContent && cellContent.text) className += ' has-content';
		if (cellContent && cellContent.class) className += ` ${cellContent.class}`;

		return (
			<Cell
				className={className}
				key={index}
				width={width}
				height={height}
				columns={columns}
				rows={rows}
				>
				{cellContent && cellContent.text}
			</Cell>
		)
	}

	render() {
		const name = this.props.name || 'cell-list';
		const width = this.props.width;
		const height = this.props.height;

		const cellList = this.props.cellList;
		const columns = cellList.columns;
		const rows = cellList.rows;

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
