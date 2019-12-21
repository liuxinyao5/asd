import React from 'react';
import data from '../assets/data';

class Bannercontent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            srcList: data.bannerSrc,
        };
    }

    render() {
        let {srcList} = this.state;
        return (
            // 轮播图
            <div className="banner-content">
                <a>
                    <div className="banner-ad1" style={{display:'block'}}>
                        <img src="http://img.mukewang.com/5dd1fe8800013d1818720764.jpg" />
                    </div>
                </a>
                {
                    srcList && srcList.map((val, key) => {
                        return (
                            <a key={key}>
                                <div className="banner-ad1" style={{display:'none'}}>
                                    <img src={val} />
                                </div>
                            </a>
                        );
                    })
                }
                {/* 轮播图圆点按钮 */}
                <div class="dots">
                    <span class="dot1"></span>
                    <span class="dot1"></span>
                    <span class="dot1"></span>
                    <span class="dot1"></span>
                    <span class="dot1"></span>
                    <span class="dot1"></span>
                </div>
                {/* 轮播图左右箭头 */}
                <a class="ad-left"><i class="fa fa-angle-left"></i></a>

                <a class="ad-right"><i class="fa fa-angle-right"></i></a>
            </div>
        );
    }
}

export default Bannercontent;