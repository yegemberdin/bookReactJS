import React, { Component } from 'react';

import db from '../firebase';
import './style.css';

import Header from './Header';
import Routes from './Routes';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        db.auth().signOut();
    }
    

    render() {
       
        return (


            <div class="body">

                <Header/>          

               <Routes/>


            </div>

        )

    }

}

export default Home;