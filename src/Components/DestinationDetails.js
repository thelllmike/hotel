import React from "react";
import "../Styles/DestinationDetails.css";
import MapLocation from "./Map";
import NavbarHome from "./NavBar_home";
import Footer from "./Footer";

function DestinationDetails() {
	return (
		<div className="destinationDetailsPage">
			<NavbarHome />
			<div className='destinationDetails'>
				<div className='left-panel'>
					<h2>Details</h2>
					<ul>
						<li>Sigharaja Rainforest</li>
						<li>
							Sinharaja is a UNESCO World Heritage Site and a tropical
							rainforest located in southwest Sri Lanka. It is one of the last
							remaining virgin forests in the country and is home to a diverse
							range of flora and fauna, including several endemic species. The
							forest is known for its pristine beauty and unique biodiversity,
							making it a popular destination for nature enthusiasts and
							wildlife photographers. Visitors can explore the forest on guided
							tours and witness its natural wonders, including towering trees,
							cascading waterfalls, and exotic birdlife.
						</li>
						
					</ul>
				</div>
				<div className='right-panel'>
					<MapLocation />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default DestinationDetails;
