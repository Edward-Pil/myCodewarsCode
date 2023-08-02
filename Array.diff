var a = [5, 3, 3, 3, 3, 1];
var b = [1, 3];

function arrayDiff(a, b) {
var res=[];
for(var j=0;j<b.length;j++){
 for(var i=0; i<a.length; i++){
     if(a[i] === b[j]){
       a[i]= 0.1;
     }
 }
}
for(var i=0; i<a.length; i++){
    if(a[i]!== 0.1){
        res.push(a[i])
    }
}
 return res;
}

var fn = arrayDiff(a, b);
console.log (fn);