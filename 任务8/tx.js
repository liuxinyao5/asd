// console.log("l l l l l l l l l l");
// console.log('l l');

/******************************正方形******************************* */
function Square(cont, len, hollow=false){
    cont = cont + ' ';
    var c1 = cont + '  '.repeat(len-2) + cont;
    var c2 = cont.repeat(len);
    for (var i=0; i<len; i++){
        if (hollow){
            if (i == 0 || i == len-1){
                console.log(c2);
            } else {
                console.log(c1);
            }
        } else {
            console.log(c2);
        }
    }
}
Square('+', 5);
console.log(' ');

Square('-', 4, true);
console.log(' ');

/* ******************************************************************* */

/* ******************************长方形********************************* */
function Rectangle(cont, len1, len2, hollow=false){
    cont +=' ';
    var c = '';
    for (var i=0; i<len2; i++) {
        for (var j=0; j<len1; j++) {
            if (hollow) {
                if (i>0 && i<len2-1 && j>0 && j<len1-1) {
                    c += '  ';
                } else {
                    c += cont;
                }
            } else {
                c += cont;
            }
        }
        console.log(c);
        c = '';
    }
}

Rectangle('+', 8, 4);
console.log(' ');
Rectangle('#', 5, 3, true);
console.log(' ');

/* ********************************************************************* */

/* ******************************三角形 ***********************************/
function Triangle(con, len, hollow=false){
    con += ' ';
    var c = '';
    for (var i=0; i<len; i++) {
        if (hollow) {
            for (var j=0; j<len; j++) {
                if (j <= i) {
                    if (j==0 || j==i || i==len-1) {
                        c += con;
                    } else {
                        c += '  ';
                    }
                }
            }
            console.log(c);
            c = '';
        } else {
            c += con;
            console.log(c);
        }
    }
}

Triangle('~', 6);
console.log();
Triangle('#', 7, true);
console.log();

/* ******************************************************************** */

/* ************************菱形****************************************** */

function Rhombus(con, len, hollow=false){
    if (len>2 && len % 2) {
        con += ' ';
        c = '';
        m = Math.floor(len/2);
        // console.log(m);
        var k = len-1;
        // console.log(k);
        for (var i=0; i<len; i++) {
            for (var j=0; j<len; j++){
                if (hollow) {
                    if (i<=m) {
                        if ((j == m-i) || (j == m+i)) {
                            c += con;
                        } else {
                            c += '  ';
                        }
                    } else {
                        if ((j == m-k) || (j == m+k)) {
                            c += con;
                        } else {
                            c += '  ';
                        }
                    }
                } else {
                    if (i<=m) {
                        if ((j >= m-i) && (j <= m+i)) {
                            c += con;
                        } else {
                            c += '  ';
                        }
                    } else {
                        if ((j >= m-k) && (j <= m+k)) {
                            c += con;
                        } else {
                            c += '  ';
                        }
                    }
                }
            }
            console.log(c);
            c = ''; 
            k--;
        }
    } else {
        console.log('菱形对角线必须为大于2的奇数');
    }
}

Rhombus('*', 9);
console.log();
Rhombus('@', 7, true);
console.log();
Rhombus('@', 6, true);
console.log();



// function lingxing(con, len, hollow=false){
//     con += ' ';
//     c = '';
//     m = Math.floor(len2);
//     if (len>1) {

//     } else {
//         console.log('菱形边长必须大于1');
//     }
// }
/* **************************************************************************** */

/* ******************************梯形******************************************** */

function Trapezoid(con, top, height, hollow=false){
    con += ' ';
    c = '';
    m = top+height*2;
    for (var i=0; i<height; i++) {
        for (var j=0; j<m; j++) {
            if (hollow) {
                if (i==0 || i==height-1){
                    if (j>=height-i-1 && j<height-i-1+top+i*2) {
                        c += con;
                    } else {
                        c += '  ';
                    }
                } else {
                    if (j==height-i-1 || j==height-i-1+top+i*2-1) {
                        c += con;
                    } else {
                        c += '  ';
                    }
                }
            } else {
                if (j>=height-i-1 && j<height-i-1+top+i*2) {
                    c += con;
                } else {
                    c += '  ';
                }
            }
        }
        console.log(c);
        c = '';
    }
}

Trapezoid('+', 5, 4);
console.log();
Trapezoid('+', 5, 5, true);
console.log();

/* ************************************************************************************* */

/* *************************回字*********************************************** */

function hui(con, len1, len2){
    con += ' ';
    c = '';
    k = (len1-len2)/2;
    for (var i=0; i<len1; i++) {
        for (var j=0; j<len1; j++) {
            if (i>0 && i<len1-1 && j>0 && j<len1-1) {
                // c += '  ';
                if (i>=k && i<len1-k && j>=k && j<len1-k){
                    if (i>=k+1 && i<len1-k-1 && j>=k+1 && j<len1-k-1) {
                        c += '  ';
                    } else {
                        c += con;
                    }
                } else {
                    c += '  ';
                }
            } else {
                c += con;
            }
        }
        console.log(c);
        c = '';
    }
}

hui('*',6,2);