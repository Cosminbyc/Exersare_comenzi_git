var a = ["apple", "apricot", "nuts", "pineapple", "blackberries"];
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }
a.forEach(function (item) { return console.log(item); });
function concatenare(param) {
    var cuv = "";
    param.forEach(function (item) { return cuv = cuv + " " + item; });
    cuv = cuv.trim();
    console.log(cuv);
}
concatenare(a);
