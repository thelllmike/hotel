/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import NavBar_home from "./NavBar_homeAdmin";
import Footer from "./Footer";
import "../Styles/VehicleTable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import RegisterTrowTable from "./RegisterTrowTable";

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = { customer: [], search: "" };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/tourist/getall/")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ customer: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.customer.map(function (object, i) {
			return <RegisterTrowTable obj={object} key={i} />;
		});
		
	}

	render() {
		return (
			<div className='adminVehicleProfile'>
				<NavBar_home />
				<br /> <h3 align='center'>Tourist Management</h3>
				<div className='row-frm'>
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>first Name</th>
								<th>lastName</th>
								<th>email</th>
								<th>Country Code</th>
								<th>Phone Number</th>
                                <th>NIC</th>
                                <th>address</th>
                                <th>country</th>
                                <th>password</th>
                             
                                
                                

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
