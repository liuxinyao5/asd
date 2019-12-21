import React from 'react';
import data from '../assets/data';

class Navul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navUl: data.navList,
        };
    }

    render() {
        let { navUl } = this.state;
        return (
            <ul id="nav11">
                {
                    navUl && navUl.map((val, key) => {
                        return (
                            <li key={key}>
                                <a href="">{navUl[key]}</a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

}

export default Navul;