import React from 'react';

class Navright extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="nav-right">
                <a>
                    <i className="fa fa-pencil-square-o"></i>
                    <span>意见反馈</span>
                </a>
                <a>
                    <i className="fa fa-question-circle-o"></i>
                    <span>帮助中心</span>
                </a>
                <a>
                    <i className="fa fa-mobile"></i>
                    <span>APP下载</span>
                </a>
                <a>
                    <i className="fa fa-weixin"></i>
                    <span>官方微信</span>
                </a>
                <a id="to-top" style={{display:'none'}}>
                    <i className="fa fa-chevron-up"></i>
                    <span>返回顶部</span>
                </a>
            </div>
        );
    }
}

export default Navright;