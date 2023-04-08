import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Register from "./Components/Register";
import GuideSearch from "./Components/GuideSearch";
import GuideRegister from "./Components/GuideRegister";
import HotelSearch from "./Components/HotelSearch";
import NavbarHome from "./Components/NavBar_home";
import HotelRegister from "./Components/HotelRegister";
import HotelBookingDetails from "./Components/HotelBookingDetails";
import GuideBookingDetails from "./Components/GuideBookingDetails";
import AdvertisingPayments from "./Components/AdvertisingPayments";
import Payment from "./Components/Payment";
import Destinations from "./Components/Destinations";
import DestinationDetails from "./Components/DestinationDetails";
import MapLocation from "./Components/Map";
import AddtoMap from "./Components/AddtoMap";
import VehicleHomePage from "./Components/VehicleHomePage";
import AddVehicle from "./Components/AddVehicle";
import VehicleDetails from "./Components/VehicleDetails";
import AyurvedicRegister from "./Components/AyurvedicRegister";
import AyurvedicTreatmentHomePage from "./Components/AyurvedicTreatmentHomePage";
import Appointment from "./Components/AddAppointment";
import AppointmentDelete from "./Components/TreatmentAppointmentDelete";
import AyurvedicFeedback from "./Components/AyurvedicFeedback";
// import SlideShow from "./Components/SlideShow";
import AdventureAndExperienceCard from "./Components/AdventureAndExperienceCard";
import OrderAndAdventureExperience from "./Components/OrderAndAdventureExperience";
import Activity_c from "./Components/Activity_c";
import BookingDetails from "./Components/BookingDetails";
import ActivityRegister from "./Components/ActivityRegister";
import ActivityDashboard from "./Components/ActivityDashboard";
import BookingRequest from "./Components/BookingRequest";
import BookedActivities from "./Components/BookedActivities";
import RequestBooking from "./Components/RequestBooking";
import HomepageAdmin from "./Components/HomepageAdmin";
import index from "./Components/index.profile";
import vehicleadminView from "./Components/vehicleadminView";
import vehicleEdit from "./Components/edit.vehicle";
import Edithotel from "./Components/Edit.Hotel";
import PageNotFound from "./Components/PageNotFound";
import AdminHotelTableView from "./Components/AdminHotelTableView";
import AdminAyurwedicTableView from "./Components/AdminAyurwedicTableView";
import EditAyurwedic from "./Components/Edit.Ayurwedic";
import AdminAppointmentViewTable from "./Components/AdminAppointmentViewTable";
import EditAppointment from "./Components/Edit.Appointment";
import AdminGuideTableView from "./Components/AdminGuideTableView";
import EditGuide from "./Components/Edit.guide";
import RoomRegister from "./Components/RoomRegister";
import Editroom from "./Components/Edit.Room";
import AdminRoomTableView from "./Components/AdminRoomTableView";
import Editregister from "./Components/Edit.register";
import myvehicleoder from "./Components/MyVehicleOder";
import VehicleOderView from "./Components/VehicleOderView";

import RoomHomePage from "./Components/RoomHomepage";
import TourguideHomepage from "./Components/TourguideHomepage";
import ApppointmentHomepage from "./Components/AppointmnetHomepage";
import HotelHomepage from "./Components/HotelHomepage";
import ExperienceHomepage from "./Components/ExperienceHomePage";

import AdminRegisterViewTable from "./Components/AdminRegisterViewTable";

import Slideshow2 from "./Components/SlideShow2";

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path='/' component={Homepage} />
						<Route
							path='/GuideBookingDetails'
							component={GuideBookingDetails}
						/>
						<Route path='/Register' component={Register} />
						<Route path='/login' component={Login} />
						<Route path='/GuideSearch' component={GuideSearch} />
						<Route path='/guideregister' component={GuideRegister} />
						<Route path='/HotelSearch' component={HotelSearch} />
						<Route path='/VehicleHomePage/:id' component={VehicleHomePage} />
						<Route path='/Payment/:id' component={Payment} />
						<Route path='/AddVehicle' component={AddVehicle} />
						<Route path='/VehicleDetails' component={VehicleDetails} />
						<Route path='/AyurvedicRegister' component={AyurvedicRegister} />
						<Route
							path='/AyurvedicTreatmentHomePage/:id'
							component={AyurvedicTreatmentHomePage}
						/>
						<Route path='/Appointment' component={Appointment} />
						<Route path='/AppointmentDelete' component={AppointmentDelete} />
						<Route path='/AyurvedicFeedback' component={AyurvedicFeedback} />
						<Route
							path='/AdventureAndExperienceCard'
							component={AdventureAndExperienceCard}
						/>
						<Route
							path='/OrderAndAdventureExperience'
							component={OrderAndAdventureExperience}
						/>
						<Route path='/Activity_c' component={Activity_c} />
						<Route path='/BookingDetails' component={BookingDetails} />
						<Route path='/ActivityRegister' component={ActivityRegister} />
						<Route path='/ActivityDashboard' component={ActivityDashboard} />
						<Route path='/BookingRequest' component={BookingRequest} />
						<Route path='/RequestBooking' component={RequestBooking} />
						<Route path='/Hotelregister' component={HotelRegister} />
						<Route path='/BookedActivities' component={BookedActivities} />
						<Route path='/HomepageAdmin' component={HomepageAdmin} />

						<Route path='/GuideSearch' component={GuideSearch} />
						<Route path='/index/:id' component={index} />
						{/* <Route  path='/RequestBooking' component={RequestBooking}/> */}

						<Route path='/vehicleadminView' component={vehicleadminView} />
						<Route path='/vehicleEdit/:id' component={vehicleEdit} />
						<Route path='/PageNotFound' component={PageNotFound} />
						<Route path='/destinationdetails' component={DestinationDetails} />
						<Route path='/destinations' component={Destinations} />
						<Route path='/addtomap' component={AddtoMap} />
						{/* <Route path='/mycomponent' component={MyComponent} /> */}

						<Route path='/edithotel/:id' component={Edithotel} />
						<Route path='/AdminHotelTableView' component={AdminHotelTableView} />

						<Route path='/EditAyurwedic/:id' component={EditAyurwedic} />
						<Route path='/AdminAyurwedicTableView' component={AdminAyurwedicTableView} />

						<Route path='/EditAppointment/:id' component={EditAppointment} />
						<Route path='/AdminAppointmentViewTable' component={AdminAppointmentViewTable} />

						<Route path='/EditGuide/:id' component={EditGuide} />
						<Route path='/AdminGuideTableView' component={AdminGuideTableView} />
						
						<Route path='/roomregister' component={RoomRegister} />  

						<Route path='/Editroom/:id' component={Editroom} />
						<Route path='/AdminRoomTableView' component={AdminRoomTableView} />

						<Route path='/Slideshow2' component={Slideshow2} />

						<Route path='/Editregister/:id' component={Editregister} />
						<Route path='/AdminRegisterViewTable' component={AdminRegisterViewTable} />

{/* //if we nee to pass the pass the value from another page need to use this :id */}
						<Route path='/myvehicleoder/:id' component={myvehicleoder} />
						<Route path='/VehicleOderView' component={VehicleOderView} />

						<Route path='/RoomHomePage/:id' component={RoomHomePage} />
						<Route path='/TourguideHomepage/:id' component={TourguideHomepage} />
						<Route path='/ApppointmentHomepage/:id' component={ApppointmentHomepage} />
						<Route path='/HotelHomepage/:id' component={HotelHomepage} />
						<Route path='/ExperienceHomepage/:id' component={ExperienceHomepage} />


					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
