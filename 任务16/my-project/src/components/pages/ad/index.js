import React from 'react';

class Ad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <a className="ad">
                <i className="fa fa-times"></i>
            </a>
        );
    }
}

export default Ad;