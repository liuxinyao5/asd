/* **********************字符串长度******************************************* */

function strlen(a){
    var k=0;
    for (var i in a) {
        // var l = i;
        // l = Number(l)+1;
        k++;
    }
    // console.log(typeof l);
    console.log('字符串长度为'+ k);
}

strlen('asdqasd');
console.log();

/* ********************************************************************* */

/* *********************用指定字符分割字符串成数组****************************** */
/* var arr = new Array();
var arr = [];
console.log(typeof arr); */

function strarr(x, a){
    var arr = [];
    var j = 0;
    arr[0] = '';
    for (var i in a) {
        if (a[i] == x){
            j++;
            arr[j] = '';
        } else {
            arr[j] += a[i];   
        }
    }
    console.log(arr);
}

strarr('a', 'asfqwrqradasd');
console.log();


/* ************************************************************************** */

/* **************************通过指定字符合并数组为字符串********************************* */

function joinstr(con, arr){
    var str = '';
    var j = 0;
    for (var i in arr) {
        if (j == 0) {
            str += arr[i];
            j++;
        } else {
            str =str + con + arr[i];
        }
    }
    console.log(str);
}

joinstr('#', ['asd', 0 , 2, 'dsa']);
console.log();


/* ******************************************************************************* */

/* ****************************字符串搜索******************************************* */

function strsearch(con, str){
    var b;
    var k;
    var res;
    for (var i in str) {
        k = i;
        for (var j in con) {
            if (con[j] == str[k]) {
                b = true;
                k++;
                res = i;
            } else {
                b = false;
                res = '';
                break;
            }
        }
        if (b) {
            console.log(res);
        }

    }
}

strsearch('dq', 'aerbdqwe');
console.log();

/* ***************************************************************************** */

/* ******************************截取字符串************************************ */
/* var arr = 'qweasd';
var k;
for (var i in arr) {
    k=i;
}
console.log(k); //5 */

function strsub(str, start, end=false){
    var k;
    for (var s in str) {
        k = s;
    }

    var res = '';
    if (end) {
        if (start < -k-1) {
            for (var i=0; i<end; i++) {
                res += str[i];
            }
        } else if (start < 0) {
            for (var i=k+start+1; i<k+start+1+end; i++) {
                res += str[i];
            }
        } else if (start > k) {
            res = '';
        } else {
            for (var i=start; i<start+end; i++) {
                res += str[i];
            }
        }
    } else {
        if (start < -k-1) {
            for (var i=0; i<=k; i++) {
                res += str[i];
            }
        } else if (start < 0) {
            for (var i=k+start+1; i<=k; i++) {
                res += str[i];
            }
        } else if (start > k) {
            res = '';
        } else {
            for (var i=start; i<=k; i++) {
                res += str[i];
            }
        }
    }
    console.log(res);
}

strsub('asdwdqeqwe',1,4);

/* **********************************************************************************8 */