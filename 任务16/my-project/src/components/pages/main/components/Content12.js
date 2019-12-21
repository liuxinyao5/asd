import React from 'react';
import data from '../assets/data';

class Content12 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            srcList: data.c12src,
        };
    }

    render() {
        let {srcList} = this.state;
        return (
            <div className="content1-1">
                <h3 className="title1">
                    <p>职场进阶</p>
                    <p className="t1-desc">1年以上开发经验系统成长</p>
                </h3>
                <div className="c1-2-list">
                    {
                        srcList && srcList.map((val, key) => {
                            return (
                                <a href="" key={key}>
                                    <img src={require('../images/' + val)} alt="" />
                                </a>
                            );
                        })
                    }
                    <div class="clear"></div>
                </div>
            </div>
        );
    }
}

export default Content12;