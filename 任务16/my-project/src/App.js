import React from 'react';
import Nav from './components/pages/nav/index';
import Main from './components/pages/main/index';
import Footer from './components/pages/footer/index';
import Navright from './components/pages/navright/index';
import Ad from './components/pages/ad/index';
import './App.css';
import './12345';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        {/* 顶部导航 */}
        <Nav />
        {/* 页面主体 */}
        <Main />
        {/* 页脚部分 */}
        <Footer />
        {/* 页面右方固定导航 */}
        <Navright />
        {/* 底部广告 */}
        <Ad />
      </div>
    );
  }
}

export default App;
