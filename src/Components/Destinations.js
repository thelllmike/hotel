import React from "react";
import "../Styles/Destinations.css";
import NavbarHome from "./NavBar_home";
import Footer from "./Footer";
import DestinationCard from "./DestinationCard";
import img from '../images/destination0.jpg'
import Slideshow2 from "./SlideShow2";

function Destinations() {
	return (
		<div className='destinationPage'>
			<NavbarHome />
			{/* <img src={img} alt="" srcset="" className="destination-banner"/> */}
			<Slideshow2 />
			<div className='destinations'>
				<div className='left-sidebar'>
					<div className='province'>
						<h2>Province</h2>
						<label>
							<input type='checkbox' />
							Province 1
						</label>
						<label>
							<input type='checkbox' />
							Province 2
						</label>
						<label>
							<input type='checkbox' />
							Province 3
						</label>
						<label>
							<input type='checkbox' />
							Province 4
						</label>
					</div>
					<div className='district'>
						<h2>District</h2>
						<div className='checkbox-group'>
							<label>
								<input type='checkbox' />
								District 1
							</label>
							<label>
								<input type='checkbox' />
								District 2
							</label>
							<label>
								<input type='checkbox' />
								District 3
							</label>
						</div>
					</div>
					<div className='category'>
						<h2>Category</h2>
						<div className='checkbox-group'>
							<label>
								<input type='checkbox' />
								Category 1
							</label>
							<label>
								<input type='checkbox' />
								Category 2
							</label>
							<label>
								<input type='checkbox' />
								Category 3
							</label>
						</div>
					</div>
				</div>
				<div className='Right-Panel'>
					<h2>Destinations</h2>
					<DestinationCard />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Destinations;
