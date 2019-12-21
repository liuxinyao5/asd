import React from 'react';
import data from '../assets/data';

class Flink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkList : data.linkList,
        };
    }

    render() {
        let {linkList} = this.state;
        return (
            <React.Fragment>
                <div className="footer-link">
                    {
                        linkList && linkList.map((val, key) => {
                            return (
                                <a href="" key={key}>{val}&nbsp;</a>
                            );
                        })
                    }
                </div>
                <div className="footer-copyright">
                    <p>
                        <i className="fa fa-copyright"></i>
                        2019 imooc.com&nbsp;&nbsp;京ICP备 12003892号-11 
                        <a href="">
                            <i className="f-i1"></i> 京公网安备11010802030151号
                        </a>
                        北京奥鹏文化传媒有限公司 
                        <a href="">营业执照</a>
                    </p>
                </div>
            </React.Fragment>
        );
    }
}

export default Flink;