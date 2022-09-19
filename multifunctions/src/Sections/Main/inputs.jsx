import React, { Component } from "react";
import './style.css'

class Inputs extends Component {
    state = {
        firstname: 'Hojiakbar',
        lastname: 'Murodillayev',
        email: 'uzhojiakbar3@gmail.com',
        info: { firstname: 'Hojiakbar', lastname: 'Murodillayev', email: 'uzhojiakbar3@gmail.com', }
    }
    render() {
        let OnChangeOne = ({ target: { value, name } }) => {
            this.setState({ [name]: value })
        }
        let OnChangeTwo = ({ target: { value, name } }) => {
            this.setState(
                {
                    info: { ...this.state.info, [name]: value }
                }
            )
        }
        return (
            <div className="Main-Inputs">
                <div className="wrap">
                    <h1 className="Title">Inputs <span className="count">#1</span></h1>
                    <div className="Info-title">
                        <h2>firstname: {this.state.firstname} </h2>
                        <h2>lastname:  {this.state.lastname} </h2>
                        <h2>email:  {this.state.email} </h2>
                    </div>
                    <div className="Inputs">
                        <input className="input" type="text" onChange={OnChangeOne} placeholder="firstname" name='firstname' />
                        <input className="input" type="text" onChange={OnChangeOne} placeholder="lastname" name='lastname' />
                        <input className="input" type="email" onChange={OnChangeOne} placeholder="email" name='email' />
                    </div>
                </div>
                <hr />
                <div className="wrap">
                    <h1 className="Title">Input <span className="count">#2</span></h1>
                    <div className="Info-title">
                        <h2>firstname: {this.state.info.firstname} </h2>
                        <h2>lastname:  {this.state.info.lastname} </h2>
                        <h2>email:     {this.state.info.email} </h2>
                    </div>
                    <div className="Inputs">
                        <input className="input" type="text" onChange={OnChangeTwo} placeholder="firstname" name='firstname' />
                        <input className="input" type="text" onChange={OnChangeTwo} placeholder="lastname" name='lastname' />
                        <input className="input" type="email" onChange={OnChangeTwo} placeholder="email" name='email' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Inputs;