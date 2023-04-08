import  React, {Component} from 'react';
import Treatment from './TreatmentCard'
import '../Styles/AyurvedicTreatmentHomePage.css'
import NavBarHome from './NavBar_homeAdmin'
import Footer from './Footer'


export default  class AyurvedicTreatmentHomePage extends  Component{

  
  constructor(props) {
    super(props);
    // this.state = { vehicleOder: [],
    //   search: "" ,
    //   email : this.props.match.params.id
    //  };

 }
 render() {

  return (
    <div className='AyurvedicTreatmentHomePage'>
      <NavBarHome />
      <div className="top">
        <p className='sentence'>What type of treatment are you looking for?</p>
        <div className="button-set">
          <button>
            Book and Appointment
          </button><br />
          <button>
            My Appointment
          </button><br />
          <button>
            SignOut
          </button><br />
        </div>
      </div>
      <div className="bottom">
        <div className="treatmentCards">
          <div className="treatmentCard">
            <Treatment />
           
          </div>
        </div>
      </div>
        <Footer />
    </div>
  )
}

}