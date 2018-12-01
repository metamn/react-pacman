import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Grid from './../Grid';
import CellList from './../CellList';

/**
 * The main container
 *
 */
const Container = styled.section`
	width: ${props => props.width};
	height: ${props => props.height};
	position: relative;
	overflow: hidden;
	//background-color: lightsteelblue;
`;

/**
 * The main class
 */
export default class Surface extends React.Component {
	render() {
		const width = this.props.width;
		const height = this.props.height;
		const grid = this.props.grid;
		const cellList = this.props.cellList;

		return (
			<Container className="surface"
				width={width}
				height={height}
				>
				<Grid
					width={width}
					height={height}
					columns={grid.columns}
					rows={grid.rows}
				/>
				<CellList
					width={width}
					height={height}
					cellList={cellList}
				/>
			</Container>
		)
	}
}
