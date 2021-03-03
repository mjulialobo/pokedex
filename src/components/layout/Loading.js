import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import spinner from './spinner.gif';

export default class Loading extends Component {
	render() {
		return (
			<React.Fragment>
				<div class="text-center" style={{ margin: '15rem auto' }}>
					<div
						class="spinner-border text-danger"
						style={{ width: '10rem', height: '10rem', fontWeight: 'bold' }}
						role="status"
					/>
				</div>
			</React.Fragment>
		);
	}
}
