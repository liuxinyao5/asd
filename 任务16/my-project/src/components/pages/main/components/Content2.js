import React from 'react';
import data from '../assets/data';

class Content2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c2img : data.c2img,
            c2label1 : data.c2label1,
            c2label2 : data.c2label2,
            c2h3 : data.c2h3,
            c2span1 : data.c2span1,
            c2span2 : data.c2span2,
            c2span3 : data.c2span3,
            c2price : data.c2price,
        };
    }

    render() {
        let {c2img} = this.state;
        let {c2label1} = this.state;
        let {c2label2} = this.state;
        let {c2h3} = this.state;
        let {c2span1} = this.state;
        let {c2span2} = this.state;
        let {c2span3} = this.state;
        let {c2price} = this.state;
        return(
            <div id="content2">
                <div className="c2-box">
                    <h3 className="title1">
                        <p>新上好课</p>
                    </h3>
                    <div className="c2-list">
                        {
                            c2img && c2img.map((val, key) => {
                               {
                                    if (key==0 || key==2 || key==5 || key==6) {
                                        return (
                                            <div className="c2-l-1" key={key}>
                                                <a href="">
                                                    <div className="new">新课</div>
                                                    <div className="c2-img">
                                                        <img src={require('../images/' + val)} alt="" />

                                                        <div className="c2-label">
                                                            <label>{c2label1[key]}</label>&nbsp;
                                                            {c2label2[key] ? <label>{c2label2[key]}</label> : ''}
                                                        </div>
                                                    </div>
                                                    <div className="c2-content">
                                                        <h3>{c2h3[key]}</h3>
                                                        <div className="c2-c-2">
                                                            <div className="c2-c-21">
                                                                <span>{c2span1[key]}</span>
                                                                <span><i className="fa fa-user-o"></i>{c2span2[key]}</span>
                                                                <span className="r">{c2span3[key]}</span>
                                                            </div>
                                                            <div className="c2-c-22">
                                                                {c2price[key]}
                                                                <span>限时优惠</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        );
                                    } else if (key==4) {
                                        return(
                                            <div className="c2-l-1" key={key}>
                                                <a href="">
                                                    <div className="hot">热门</div>
                                                    <div className="c2-img">
                                                        <img src={require('../images/' + val)} alt="" />

                                                        <div className="c2-label">
                                                            <label>{c2label1[key]}</label>&nbsp;
                                                            {c2label2[key] ? <label>{c2label2[key]}</label> : ''}
                                                        </div>
                                                    </div>
                                                    <div className="c2-content">
                                                        <h3>{c2h3[key]}</h3>
                                                        <div className="c2-c-2">
                                                            <div className="c2-c-21">
                                                                <span>{c2span1[key]}</span>
                                                                <span><i className="fa fa-user-o"></i>{c2span2[key]}</span>
                                                                <span className="r">{c2span3[key]}</span>
                                                            </div>
                                                            <div className="c2-c-22">
                                                                <p>{c2price[key]}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        );
                                    } else if (key==7) {
                                        return (
                                            <div className="c2-l-1" key={key}>
                                                <a href="">
                                                    <div className="new">新课</div>
                                                    <div className="c2-img">
                                                        <img src={require('../images/' + val)} alt="" />

                                                        <div className="c2-label">
                                                            <label>{c2label1[key]}</label>&nbsp;
                                                            {c2label2[key] ? <label>{c2label2[key]}</label> : ''}
                                                        </div>
                                                    </div>
                                                    <div className="c2-content">
                                                        <h3>{c2h3[key]}</h3>
                                                        <div className="c2-c-2">
                                                            <div className="c2-c-21">
                                                                <span>{c2span1[key]}</span>
                                                                <span><i className="fa fa-user-o"></i>{c2span2[key]}</span>
                                                                <span className="r">{c2span3[key]}</span>
                                                            </div>
                                                            <div className="c2-c-22">
                                                                <p>{c2price[key]}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className="c2-l-1" key={key}>
                                                <a href="">
                                                    <div className="c2-img">
                                                        <img src={require('../images/' + val)} alt="" />

                                                        <div className="c2-label">
                                                            <label>{c2label1[key]}</label>&nbsp;
                                                            {c2label2[key] ? <label>{c2label2[key]}</label> : ''}
                                                        </div>
                                                    </div>
                                                    <div className="c2-content">
                                                        <h3>{c2h3[key]}</h3>
                                                        <div className="c2-c-2">
                                                            <div className="c2-c-21">
                                                                <span>{c2span1[key]}</span>
                                                                <span><i className="fa fa-user-o"></i>{c2span2[key]}</span>
                                                                <span className="r">{c2span3[key]}</span>
                                                            </div>
                                                            <div className="c2-c-22">
                                                                <p>{c2price[key]}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        );
                                    }
                                }
                                    
                            })
                        }
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content2;