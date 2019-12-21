import React from 'react';

class Fright extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="f-right">
                <div className="l">
                    <a href="" className="f-r-i1">
                        <i className="f-r-i11"></i>
                    </a>
                    <p>官方公众号</p>
                </div>
                <div className="l">
                    <a href="" className="f-r-i2">
                    </a>
                    <p>官方微博</p>
                </div>

                <div className="clear"></div>
            </div>
        );
    }
}

export default Fright;