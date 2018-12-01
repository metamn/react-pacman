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
						class: 'text-1',
					},
					{
						column: 10,
						row: 2,
						text: 'are',
						class: 'text-1',
					},
					{
						column: 10,
						row: 3,
						text: 're',
						class: 'text-1',
					},
					{
						column: 10,
						row: 4,
						text: 'e',
						class: 'text-1',
					},
					{
						column: 10,
						row: 6,
						text: 'r',
						class: 'text-2',
					},
					{
						column: 10,
						row: 7,
						text: 'e',
						class: 'text-2',
					},
					{
						column: 10,
						row: 8,
						text: 'y',
						class: 'text-2',
					},
					{
						column: 10,
						row: 9,
						text: 'a',
						class: 'text-2',
					},
					{
						column: 1,
						row: 5,
						text: 'S',
						class: 'text-2',
					},
					{
						column: 1,
						row: 6,
						text: 'e',
						class: 'text-2',
					},
					{
						column: 1,
						row: 7,
						text: 'l',
						class: 'text-2',
					},
					{
						column: 1,
						row: 8,
						text: 'e',
						class: 'text-2',
					},
					{
						column: 1,
						row: 9,
						text: 'c',
						class: 'text-2',
					},
					{
						column: 1,
						row: 10,
						text: 't  your pl',
						class: 'text-2',
					}
				],
			}
		}
	}

	render() {
		const width = this.state.width;
		const height = this.state.height;
		const grid = this.state.grid;
		const cellList1 = this.state.cellList1;

		return (
			<Container className="game">
				<Surface
					name = 'surface-1'
					width = {width}
					height = {height}
					grid = {grid}
					cellList = {cellList1}
				/>
			</Container>
		)
	}
}
