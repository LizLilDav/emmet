/**
 * Created by Liza on 23.12.2015.
 */

var str ="footer>div>footer>span*2+header>div*2>span";
/*var arrTag =['div','span','header','footer'];*/
var arrOpen =['<div>','<span>','<header>','<footer>'];
var arrClose =['</div>','</span>','</header>','</footer>'];
var arrReg = [/div/g,/span/g,/header/g,/footer/g];
var regSign= />/g;
var regSignDouble=/>\n>/gmi;
var regNum =/\*[1-9]+?/gmi;
var reg =/^div|span|footer|header([>\+])|(\*[1-9]?)div|span|footer|header$/g;
console.log(reg.test(str));
if(reg.test(str)){
    for (var i in arrReg) {
        if (regSign.test(str)) {
            if (arrReg[i].test(str)) {
                str = str.replace(arrReg[i], arrOpen[i] + arrClose[i] + "\n");
                if (regSignDouble.test(str)) {
                    str = str.replace(regSignDouble, '>\n')
                }
            }
            if (regNum.test(str)) {
                var pos = str.indexOf("*") + 1;
                for (var k = 1; k < str.charAt(pos) * 1; k++) {


                }
            }
        }
    }
}console.log(str);
