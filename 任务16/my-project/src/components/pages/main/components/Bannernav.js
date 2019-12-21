import React from 'react';
import data from '../assets/data';

class Bannernav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navSpan: data.navList,
        };
    }

    render() {
        let { navSpan } = this.state;
        return (
            // 轮播图左侧导航
            <div className="banner-nav">
                {
                    navSpan && navSpan.map((val, key) => {
                        return (
                            <a key={key}>
                                <div className='item'>
                                    <span>{val}</span>
                                    <i className="fa fa-caret-right"></i>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        );

    }
}

export default Bannernav;