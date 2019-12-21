import React from 'react';
import data from '../assets/data';

class Content11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameList: data.c11name,
            descList: data.c11desc,
        };
    }

    render() {
        let {nameList} = this.state;
        let {descList} = this.state;
        return (
            <div className="content1-1">
                <h3 className="title1">
                    <p>就业班</p>
                    <p className="t1-desc">零基础快速就业</p>
                </h3>
                <div className="c1-1-list">
                    {
                        nameList && nameList.map((val, key) => {
                            return (
                                <a href="" key={key}>
                                    <div className={'icon' + (key + 1)}></div>
                                    <p className="c1-1-list-name">{val}</p>
                                    <p className="c1-1-list-desc">{descList[key]}</p>
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

export default Content11;