import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Surface from './../Surface';

/**
 * The main container
 */
const Container=styled.div`
	font-family: monospace;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	min-width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

/**
 * The main class
 */
export default class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: '100vw',
			height: '100vh',
			grid: { columns: 5, rows: 5 },
			cellList: {
				columns: 10,
				rows: 10,
				content: [
					{
						column: 1,
						row: 1,
						text: 'Lynx and Hare',
					},
					{
						column: 10,
						row: 2,
						text: 'are',
					},
					{
						column: 10,
						row: 3,
						text: 're',
					},
					{
						column: 10,
						row: 4,
						text: 'e',
					},
				],
			}
		}
	}

	render() {
		const width = this.state.width;
		const height = this.state.height;
		const grid = this.state.grid;
		const cellList = this.state.cellList;

		return (
			<Container className="game">
				<Surface
					width={width}
					height={height}
					grid={grid}
					cellList={cellList}
				/>
			</Container>
		)
	}
}
