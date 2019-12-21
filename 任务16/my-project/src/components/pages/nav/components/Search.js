import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="search1">
                <div className="search11">
                    <input type="text" placeholder="请输入关键字..." className="search11-1" />
                    <div className="search11-btn1">
                        <a href=""><i className="fa fa-search"></i></a>
                    </div>
                    <div className="hottags">
                        <p><a href="">Vue</a></p>
                        <p><a href="">Python</a></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Search;