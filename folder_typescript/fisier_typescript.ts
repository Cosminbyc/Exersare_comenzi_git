const a = ["apple", "apricot", "nuts", "pineapple", "blackberries"];

// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

a.forEach((item) => console.log(item));

function concatenare(param: string[]) : void {
    let cuv = "";
    param.forEach((item) => cuv = cuv + " " + item);
    cuv = cuv.trim();
    console.log(cuv);
}

concatenare(a);

