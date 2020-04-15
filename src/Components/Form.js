import React, { Component } from 'react'
import {Consumer} from '../Context';
import classnames from 'classnames'

export default class form extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        error:{}
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(dispatch,e){
        e.preventDefault();
        const{name,email,phone}=this.state 
        if(name===''){
            this.setState({error:{name:'name is required'}})
            return;
        }
        if(email===''){
            this.setState({error:{email:'email is required'}})
            return;
        }
        if(phone===''){
            this.setState({error:{phone:'phone is required'}})
            return;
        }
        

        const newContact={
            name,email,phone
        }
        dispatch({type:'ADD_CONTACT',payload:newContact})  
        this.setState({
            name:'',
            email:'',
            phone:'',
            error:{}

        })   
        this.props.history.push('/')
    }
    render() {
        const{name,email,phone,error}=this.state
        return(
            <Consumer>
                {value=>(<div className="card mb-3">
                <div className=" card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this,value.dispatch)} >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="Enter Your Name" className={classnames('form-control form-control-lg',
                            {'is-invalid':error.name})} value={name}
                            onChange={this.onChange}  
                            > 

                            </input>
                            {error.name &&  <div className="invalid-feedback">  {error.name} </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Enter Your Email" className={classnames('form-control form-control-lg',
                            {'is-invalid':error.email})} value={email}
                            onChange={this.onChange} > 

                            </input>
                            {error.email &&  <div className="invalid-feedback">  {error.email} </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" placeholder="Enter Your Phone Number" className={classnames('form-control form-control-lg',
                            {'is-invalid':error.phone})} value={phone}
                            onChange={this.onChange} e> 

                            </input>
                            {error.phone &&  <div className="invalid-feedback">  {error.phone} </div>}
                        </div>
                       
                        <input type="submit" className="btn btn-success btn-block" ></input>
                    </form>

                </div>
                
            </div>)}
            </Consumer>
            
        )
        
    }
}
