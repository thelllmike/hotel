import React from "react";
import AdventureAndExperienceCard from "./AdventureAndExperienceCard";
import Slideshow from "./SlideShow";
import NavBarHome from "./NavBar_home";
import Footer from "./Footer";
import "../Styles/OrderAndAdventureExperience.css";

function OrderAndAdventureExperience() {
	return (
		<div className='OrderAndAdventureExperience'>
			<NavBarHome />
			{/* <div className="adventure"> */}
			<Slideshow />

			<AdventureAndExperienceCard />
			{/* </div> */}

			<Footer />
		</div>
	);
}

export default OrderAndAdventureExperience;
