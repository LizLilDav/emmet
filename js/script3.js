var str ="header>div>span*2+footer>div*3>span";
/*var reg =/([a-z]+)([>*])([a-z0-9]+)/ig;*/
var reg =/([a-z]+)([>\*])([a-z0-9]+)/igm;
console.log(reg.test(str));
if(reg.test(str)){
    var reg1 =/([a-z]+)(([0-9]+)?>)([a-z]+)/igm;
    console.log(str.replace(reg1,"<$1>\n<$4></$4>\n</$1>"));

   var reg2=/(\*)([1-9]+)/ig;
    if(reg2.test(str)){



        function change(){
            var reg3=/[0-9]+/gi;
          var arrNum=str.match(reg3);
            var end=str.indexOf("*");
            var start = str.lastIndexOf(">", end)+1;
            var tag= str.slice(start,end);

            var x ='';
            for(var k = 0;k<arrNum[0];k++){
               x+=tag+"\n"
            }
        }

            var reg4=/[a-z]+\*[0-9]+/gim;
         console.log(str.replace(reg4,change()));



    }
}else{
    console.log("sxal e");
}

