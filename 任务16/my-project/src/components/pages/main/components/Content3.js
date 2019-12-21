import React from 'react';
import data from '../assets/data';
import datac3list from '../assets/datac3list';

class Content3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liList : data.c3nav,
            c3List : datac3list.c3List,
        };
    }

    render() {
        let {liList} = this.state;
        let {c3List} = this.state;
        return (
            <div id="content3">
                <div className="c3-box">
                    <h3 className="title2">
                        <p className="l">学习路线</p>
                        <ul className="l c3-nav">
                            <li className="sel">热门</li>
                            {
                                liList && liList.map((val, key) => {
                                    return (
                                        <li key={key}>{val}</li>
                                    );
                                })
                            }
                            <div className="clear"></div>
                        </ul>
                        <a href="" className="more r">
                            查看更多&nbsp;
                            <i className="fa fa-chevron-right"></i>
                        </a>
                        <div className="clear"></div>
                    </h3>

                    {/* 第三块区域list区域 */}
                    {
                        c3List && c3List.map((val, key) => {
                            let c3Img = val.c3Img;
                            let c3H4 = val.c3H4;
                            let c3P = val.c3P;
                            let c3Span1 = val.c3Span1;
                            let c3Span2 = val.c3Span2;
                            return (
                                <div className={'c3-list1 ' + (key?'hide':'')} key={key}>
                                    {
                                        c3Img && c3Img.map((v, k) => {
                                            return (
                                                <div className="c3-list1-1" key={k}>
                                                    <a href="">
                                                        <div className="c3-l1-img">
                                                            <img src={require('../images/' + v)} alt="" />
                                                        </div>
                                                        <h4>{c3H4[k]}</h4>
                                                        <p>{c3P[k]}</p>
                                                        <div className="c3-d">
                                                            <span>{c3Span1[k]}</span>
                                                            <span><i className="fa fa-star"></i>{c3Span2[k]}</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            );
                                        })
                                    }
                                    <div className="clear"></div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Content3;