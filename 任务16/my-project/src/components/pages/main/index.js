import React from 'react';
import Bannernav from './components/Bannernav';
import databanner from './assets/databanner';
import Bannercontent from './components/Bannercontent';
import Content11 from './components/Content11';
import Content12 from './components/Content12';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';
import Content5 from './components/Content5';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bhList: databanner.bhList,
        };
    }

    render() {
        let { bhList } = this.state;
        return (
            // 页面主体部分
            <div id='main'>
                {/* 轮播图整体区域 */}
                <div className="banner-box">
                    <div className="banner">
                        {/* 轮播图左侧导航 */}
                        <Bannernav />
                        {/* 轮播图隐藏导航 */}
                        {
                            bhList && bhList.map((val, key) => {
                                let navList = val.navList;
                                let imgList = val.imgList;
                                return (
                                    <div className="banner-hidden" style={{display:'none'}} key={key}>
                                        <div className="hid1">
                                            <div>
                                                {
                                                    navList && navList.map((v, k) => {
                                                        let aList = v.aList;
                                                        return (
                                                            <React.Fragment key={k}>
                                                                <div className="hid11-1">{v.navname}</div>
                                                                <div className="hid11-2">
                                                                    {
                                                                        aList && aList.map((v1, k1) => {
                                                                            return (
                                                                                <a href="" key={k1}>{v1}</a>
                                                                            );
                                                                        })
                                                                    }
                                                                </div>
                                                            </React.Fragment>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="hid12">
                                            {
                                                imgList && imgList.map((v, k) => {
                                                    return (
                                                        <div className="hid12-1" key={k}>
                                                            <a href="">
                                                                <img src={require('./images/' + v.imgsrc)} title={v.imgtitle} />
                                                                <div className="hid12-11">
                                                                    <p className="hid12-11-name">{v.imgtitle}</p>
                                                                    <p className="hid12-11-desc">{v.imgdesc}<i className="fa fa-user-o"></i>{v.imgnum}</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }
                        {/* 轮播图 */}
                        <Bannercontent />
                        <div className="clear"></div>
                    </div>
                </div>
                
                {/* 第一块区域就业班区域 */}
                <Content11 />

                {/* 第一块区域职场进阶区域 */}
                <Content12 />

                {/* 第二块新上好课区域 */}
                <Content2 />

                {/* 第三块学习路线区域 */}
                <Content3 />

                {/* 第四块热门课程区域 */}
                <Content4 />

                {/* 第五块慕课专栏区域 */}
                <Content5 />
            </div>
        );
    }
}

export default Main;