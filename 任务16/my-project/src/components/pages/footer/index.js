import React from 'react';
import Fright from './components/Fright';
import Flink from './components/Flink';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="footer">
                <div className="f-content">
                    {/* 右边图标 */}
                    <Fright />
                    {/* 左边链接 */}
                    <Flink />
                </div>
            </div>
        );
    }
}

export default Footer;