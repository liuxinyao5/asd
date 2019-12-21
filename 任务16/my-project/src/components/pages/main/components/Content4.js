import React from 'react';
import datac4list from '../assets/datac4list';

class Content4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c4List : datac4list.c4List,
        };
    }

    render() {
        let {c4List} = this.state;
        return (
            <div id="content4">
                <div className="c2-box">
                    <h3 className="title2">
                        <p>热门课程</p>
                        <div className="l pos-r">
                            <i className="fa fa-question-circle-o" id="c4-i1"></i>
                            <dl className="c4-info">
                                <dt>实战课排行榜规则</dt>
                                <dd>根据近30天购买人数由高到低进行推荐</dd>
                                <dt className="c4-info-1">免费课排行榜规则</dt>
                                <dd>根据近30天观看人数由高到低进行推荐</dd>
                            </dl>
                        </div>
                        <ul className="l c4-nav">
                            <li className="sel">实战课程</li>
                            <li>免费课程</li>
                            <div className="clear"></div>
                        </ul>
                        <a href="" className="r c4-banner ">
                        </a>
                        <div className="clear"></div>
                    </h3>
                    {
                        c4List && c4List.map((val, key) => {
                            let c4upper = val.c4upper;
                            let c4img = val.c4img;
                            let c4label1 = val.c4label1;
                            let c4label2 = val.c4label2;
                            let c4h3 = val.c4h3;
                            let c4span1 = val.c4span1;
                            let c4span2 = val.c4span2;
                            let c4span3 = val.c4span3;
                            let c4price = val.c4price;
                            let c4desc = val.c4desc;
                            return (
                                <div className={key ? 'c4-list' + ' hide' : 'c4-list'} key={key}>
                                    {
                                        c4img && c4img.map((v, k) => {
                                            return (
                                                <div className='c2-l-1' key={k}>
                                                    <a href="">
                                                        {
                                                            c4upper[k] ? <div className="upper">{c4upper[k]}</div> : ''
                                                        }
                                                        <div className="c2-img">
                                                            <img src={require('../images/' + v)} alt="" />
                                                            <div className="c2-label">
                                                                <label>{c4label1[k]}</label>&nbsp;
                                                                {c4label2[k] ? <label>{c4label2[k]}</label> : ''}
                                                            </div>
                                                        </div>
                                                        <div className="c2-content">
                                                            <h3>{c4h3[k]}</h3>
                                                            <div className="c2-c-2">
                                                                <div className="c2-c-21">
                                                                    <span>{c4span1[k]}</span>
                                                                    <span><i className="fa fa-user-o"></i>{c4span2[k]}</span>
                                                                    <span className="r">{c4span3[k]}</span>
                                                                </div>
                                                                <div className={c4price[k] ? 'c2-c-22' : 'c4-c-22'}>
                                                                    {
                                                                        c4price[k] ? <p>{c4price[k]}</p> : c4desc[k]
                                                                    }
                                                                </div>
                                                            </div>
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

export default Content4;