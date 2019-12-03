//引入相应模块
const http = require('http');//http协议相关
const fs = require('fs');//文件系统相关
const querystring = require('querystring');//查询字符串相关
const urlLib = require('url');//处理url相关

var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": 'text/html',
        'charset': 'utf-8',
        'Access-Control-Allow-Origin': '*', /* 解决跨域问题 */
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
    });

    //GET
    var obj = urlLib.parse(req.url, true);
    var url = obj.pathname;
    const GET = obj.query;

    // console.log(obj);
    // console.log(url);
    // console.log(GET);

    //POST
    var str = '';
    var POST = '';

    req.on('data', function (data) {
        if(data != ''){
            data = decodeURIComponent(data);
        }
        // console.log(1);
        // console.log(data);
        if (data != '') {
            data = ',' + data;
        }
        index(res, url, data);
        str += data;
    });

    req.on('end', function () {
        POST = querystring.parse(str);
        if (url == '/' || url == '/favicon.ico') {
            res.end();
        }
    });
});
server.listen(3000);//要个端口并且监听该端口

//文件请求
function index(res, url, str) {
    var file_name = './record/record';
    // console.log(111);
    if (url == '/write') {
        fs.writeFile(file_name, str, {'flag': 'a'}, function (err) {
            if (err) {
                res.write('404');
            }
            /* fs.readFile(file_name, 'utf-8', function (err, data) {

                if (err) {
                    res.write("404");

                } else {
                    console.log(data);
                    data = '[' + data + ']';
                    let strs = JSON.stringify(data);
                    console.log(strs);
                    res.write(strs);
                }
                res.end();
            }); */
            res.end();
        });

    } else {
        fs.readFile(file_name, function (err, data) {
            if (err) {
                res.write("404");
            } else {
                // data = '[' + data + ']';
                data = data.toString().split(',');
                // console.log(data);
                data.shift();
                // console.log(data);
                let strs = JSON.stringify(data);
                // console.log(strs);
                res.write(strs);
            }
            res.end();
        });
    }
}