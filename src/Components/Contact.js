import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Consumer} from '../Context'

export default class Contact extends Component{   
    state={
        DisplayControVariable:false
    }
    DisplayDropDown=()=>{
        
        this.setState({DisplayControVariable:!this.state.DisplayControVariable})
        
    }
    onClickDelete(dispatch,name){
       dispatch({type:"DELETE_CONTACT",payload:name})
    }
    render(){
        const{DisplayControVariable}=this.state
        return(
               <Consumer>
                    {value=>(<div className="card card-body mb-3">
        <h3>{this.props.name}  <button className="btn btn-primary" onClick={this.DisplayDropDown}>More details</button>
        <button className="btn btn-danger" style={{float:'right'}} onClick={this.onClickDelete.bind(this,value.dispatch,this.props.name)}> Delete Contact</button></h3>
        {DisplayControVariable?<ul className="list-group">                    
            <li className="list-group-item">{this.props.phone}</li>
            <li className="list-group-item">{this.props.email}</li>
        </ul> :null}
                       
    </div>)}
                </Consumer>
        )
     
        
    }

}

