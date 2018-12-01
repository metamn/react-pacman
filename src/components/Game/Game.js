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
	flex-wrap: wrap;
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
			grid: { columns: 15, rows: 15 },
			cellList1: {
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
			},
			cellList2: {
				columns: 30,
				rows: 30,
				content: [
					{
						column: 5,
						row: 13,
						text: 'Investing / trading',
					},
					{
						column: 5,
						row: 15,
						text: 'is the highest stakes',
					},
					{
						column: 5,
						row: 17,
						text: 'game in the world',
					},
					{
						column: 5,
						row: 28,
						text: 'Select your player',
					},
				],
			}
		}
	}

	render() {
		const width = this.state.width;
		const height = this.state.height;
		const grid = this.state.grid;
		const cellList1 = this.state.cellList1;
		const cellList2 = this.state.cellList2;

		return (
			<Container className="game">
				<Surface
					name = 'surface-1'
					width = {width}
					height = {height}
					grid = {grid}
					cellList = {cellList1}
				/>
				<Surface
					name = 'surface-2'
					width = {width}
					height = {height}
					grid = {grid}
					cellList = {cellList2}
				/>
			</Container>
		)
	}
}
