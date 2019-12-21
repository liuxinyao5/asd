import React from 'react';
import Navul from './components/Navul';
import Search from './components/Search';
import Login from './components/Login';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render(){
        return (
            <div id="nav1">
                <div id="nav-img1">
                    <a href="">
                        <img src={require('./images/t1.png')} alt="慕课网" />
                    </a>
                </div>
                <Navul />
                <Search />
                <Login />
            </div>        
        );
    }
}

export default Nav;