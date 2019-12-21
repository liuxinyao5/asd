import React from 'react';
import data from '../assets/data';

class Content5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c5Img : data.c5img,
            c5Name : data.c5name,
            c5Desc : data.c5desc,
            c5Author : data.c5author,
            c5Rank : data.c5rank,
            c5Sale : data.c5sale,
            c5Ori : data.c5ori,
        };
    }

    render() {
        let {c5Img} = this.state;
        let {c5Name} = this.state;
        let {c5Desc} = this.state;
        let {c5Author} = this.state;
        let {c5Rank} = this.state;
        let {c5Sale} = this.state;
        let {c5Ori} = this.state;
        return(
            <div id="content5">
                <div className="c5-box">
                    <h3 className="title2">
                        <p className="l">慕课专栏</p>
                        <a href="" className="more r">
                            查看更多&nbsp;
                            <i className="fa fa-chevron-right"></i>
                        </a>
                        <div className="clear"></div>
                    </h3>

                    <div className="c5-list">
                        {
                            c5Img && c5Img.map((val, key) => {
                                return (
                                    <div className="c5-l1" key={key}>
                                        <div className="c5-l1-1">
                                            <a href="">
                                                <img src={val} alt="" />
                                                <div></div>
                                            </a>
                                        </div>
                                        <h4>
                                            <a href="">{c5Name[key]}</a>
                                        </h4>
                                        <div className="c5-l1-2">
                                            <span>{c5Desc[key]}</span>
                                        </div>
                                        <div className="c5-l1-3">
                                            <a href="">
                                                <span>{c5Author[key]}</span>{c5Rank[key]}
                                            </a>
                                        </div>
                                        <div className="c5-l1-4">
                                            <a href="">
                                                <span className="c5-sale">{c5Sale[key]}</span>&nbsp;
                                                {
                                                    c5Ori[key] ? <span className="c5-ori">{c5Ori[key]}</span> : ''
                                                }
                                                {
                                                    c5Ori[key] ? <div><span className="c5-favourable">限时优惠</span></div> : ''
                                                }
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content5;