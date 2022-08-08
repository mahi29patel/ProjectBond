
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './loginStyle.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(e) {
        console.log(e);
        this.setState({
            username : e.target.value
        })
    }
    handlePasswordChange(e) {
        this.setState({
            password : e.target.value
        })
    }
    render() {
        return (
            <div className="container">
            <form className="form-1">
            <h1>Login</h1>
            <label>Email</label>
            <input type="email" value={this.state.username} onChange={this.handleUsernameChange} name="email" id="email" required />
            <label>Password</label>
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange}  name="password" id="password" required />
            {/* <span>Forgot Password</span> */}
            <button onChange={this.handleSubmit}>Login</button>
            
            </form>
        </div>
        );

    }
}

export default Login;