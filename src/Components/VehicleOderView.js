/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";

import Footer from "./Footer";
import "../Styles/VehicleTable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import VehicleOderTableRow from "./VehicleOderTableRow";

export default class VehicleOder extends Component {
	constructor(props) {
		super(props);
		this.state = { vehicleOder: [],
             search: "" ,
             email : this.props.match.params.id
            };
		// this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		
		axios
			.get('http://localhost:4000/vehicle/alloder/'+this.props.match.params.id)
			.then((response) => {
				// alert('Pass una')
				
				this.setState({ vehicleOder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.vehicleOder.map(function (object, i) {
			return <VehicleOderTableRow obj={object} key={i} />;
		});
		// return <OrderTableRow obj={this.state.orders}/>
	}

	render() {
		return (
			<div className='adminVehicleProfile'>
			
				<br /> <h3 align='center'>Vehicle Management</h3>
				<div className='row-frm'>
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Email</th>
								<th>Vehicle</th>
                                <th>Quntity</th>
								<th>Total</th>
                                <th>Payment</th>

								<th colSpan='3'>Action</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
				</div>
				<br />
				<br />
				<div>
					<hr className='shadow-lg card-footer' />
				</div>
				<Footer />
			</div>
		);
	}
}
