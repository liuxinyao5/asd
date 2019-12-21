import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ul id="login1">
                <li><a href="">下载APP</a></li>
                <li className="shopping">
                    <a href="" className="sss"><i className="fa fa-shopping-cart"></i>购物车</a>
                    <div id="shop" className="hide">
                        <div className="shop-1">
                            <h2 className="l">我的购物车</h2>
                            <h5 className="r">已加入0门课程</h5>
                            <div className="clear"></div>
                        </div>
                        <div className="shop-2">
                            <span>
                                <i className="fa fa-shopping-cart"></i>
                            </span>
                            <h3>购物车里空空如也</h3>
                            <div>快去这里选购你中意的课程</div>
                            <p>实战课程</p>
                            <p>就业班</p>
                        </div>
                        <div className="shop-3">
                            <div className="l">我的订单中心</div>
                            <a href="" className="r">去购物车</a>
                            <div className="clear"></div>
                        </div>
                    </div>
                </li>
                <li><a href="">登录</a>/<a href="">注册</a></li>
            </ul>
        )
    }

}

export default Login;