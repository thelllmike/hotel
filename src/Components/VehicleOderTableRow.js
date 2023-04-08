import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class VtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/vehicle/oderdelete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
       // window.location.replace('/VehicleOderView/'+this.props.match.params.id);
        // this.props.history.push('/VehicleOderView/'+this.props.match.params.id);
        window.location.replace('/VehicleOderView/'+this.props.obj.email);
    }
    render() {
        return (
           <tr>
             
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.vehicle}
               </td>
               <td>
                   {this.props.obj.Qty}
               </td>
               <td>
                   {this.props.obj.price}
               </td>
               <td>
                   {this.props.obj.status}
               </td>
               <td className='profile-actions'>

                   <button><Link to={"/vehicleEdit/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
                   <br/><br/>
                   <Link to={"/payment/"+this.props.obj._id} className="btn btn-info">Pay</Link>
               </td>
           </tr>
        );
    }
}

export default VtableRow;