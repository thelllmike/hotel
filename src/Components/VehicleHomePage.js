import  React, {Component} from 'react';
import '../Styles/VehicleHomePage.css'
import img from '../images/vehicle0.jpg'
// import NavBarHome from './NavBar_home'
import Footer from './Footer'



export default  class VehicleHomepage extends  Component{


   constructor(props) {
	 	super(props);

	}
  render() {

  return (
    <div className='vehiclePage'>
     
      {/* <NavBarHome /> */}
      <a href = {"/AyurvedicTreatmentHomePage/"+this.props.match.params.id}>Treatement</a>
      <a href = {"/VehicleHomePage/"+this.props.match.params.id}>Vehicle</a>
      <a href = {"/RoomHomePage/"+this.props.match.params.id}>Room</a>
      <a href = {"/TourguideHomepage/"+this.props.match.params.id}>Guide</a>
      <a href = {"/ApppointmentHomepage/"+this.props.match.params.id}>Appointmnet</a>
      <a href = {"/HotelHomepage/"+this.props.match.params.id}>hotel</a>
      <a href = {"/ExperienceHomepage/"+this.props.match.params.id}>Experiance</a>


      <img src={img} alt="" srcset="" className='vehicle-banner'/>
      <div className="SearchBar">
        <input type="text" name="" id="" placeholder='Search...'/>
        <input type="text" placeholder='Type...'/>
        <input type="text" placeholder='Location...'/>
        <button type='submit'> Search </button> 

         <div className='top-footer'>
                              <div className='col-img'>
                                <img src = "" width="400"/>
                                <h4>Add Vehicle</h4>
                                
                                <a href = {"/myvehicleoder/"+this.props.match.params.id}>Order Now !</a>
                            
                           </div> 
                            
                            
                        </div> 
      </div>
     

      
      
      <Footer />
      
    </div>
  )
}
}
