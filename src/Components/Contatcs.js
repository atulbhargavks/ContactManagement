import React, { Component } from 'react'
import {Consumer} from '../Context';
import Contact from './Contact';
export default class Contatcs extends Component {
    render() {
        
        return (
            <div>
                <h3 className="display-4"><span className="text-primary">Contact</span> List</h3>
                <Consumer>
               
                    {value=>(
                       
                        value.contacts.map(contact1=>(
                            <Contact key={contact1.id} name={contact1.name} email={contact1.email} phone={contact1.phone}  />
                        ))
                    )}
                </Consumer>
            </div>
        )
    }
}
