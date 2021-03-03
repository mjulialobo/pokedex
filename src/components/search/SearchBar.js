import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<div className="input-group rounded">
					<form className="form-inline my-2 my-lg-0" id="searchForm">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							// value={this.state.value}
							// onChange={this.handleChange}
						/>
						<button
							className="btn btn-warning"
							style={{
								fontWeight: 'bold',
								color: 'white'
							}}
							type="submit"
						>
							Go
						</button>
					</form>
				</div>
			</div>
		);
	}
}
