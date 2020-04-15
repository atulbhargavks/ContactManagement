import React,{Component} from 'react';
import axios from 'axios';
const Context=React.createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_CONTACT': 
        return { ...state,
            contacts:[action.payload,...state.contacts]}
        
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts:state.contacts.filter(contact=>(contact.name!==action.payload))
            }
        default:
            return null;
           
    }
}
export  class Provider extends Component{
    state={
        contacts:[
            {
                name:'Rooney',
                email:'ron@manu.com',
                phone:1234
                },
                {
                name:'Martial',
                email:'Mar@manu.com',
                phone:3455
                },
                {
                    name:'Alex',
                    email:'Alex@manu.com',
                    phone:4554,
                }
                  
        ],
    dispatch:action=>{this.setState(state=>reducer(state,action))}
}
componentDidMount(){
    // axios.get('http://localhost:8080/getAll').then(res=>this.setState({contacts:res.data}))
    
}
    
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )

    }


}
export const Consumer=Context.Consumer;