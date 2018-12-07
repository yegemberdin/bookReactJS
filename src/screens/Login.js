import React, { Component } from 'react';
import logo from '../logo.jpg';
import db from "../firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    db.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    db.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  
  
  render() {
    const inputStyle = {
      color: 'blue', width:300,
    }
    return (
      
      <div className="App">
        <header className="App-header">
          <img src= {logo} className="App-logo" alt="logo" />
          <label>Email address</label>
       <input style={inputStyle} value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />
       <label>Password</label>
       <input style={inputStyle} value={this.state.password} onChange={this.handleChange} type="password" name="password"  placeholder="Enter password" />
       <div className="buttons">
       <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
    </div>
       </header>
                
      </div>
    )
  }
}

export default Login;
