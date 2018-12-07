import React, { Component } from 'react';

import db from '../firebase';
import './style.css';

class Header extends Component {
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

                <ul id="list-nav">

                    <li><a href="/">Books</a></li>

                    <li><a href="/collection">Collection</a></li>

                    <li><a href="/messages">Messages</a></li>

                    <li><a href="/about">About</a></li>
                    <li><button onClick={this.logout} class="btn btn-warning">Log out</button></li>





                </ul>
               


            </div>

        )

    }

}

export default Header;