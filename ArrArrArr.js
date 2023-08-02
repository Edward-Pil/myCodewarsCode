var x = [5, 3];
function explode(x){
    var c=0;
    var res=[];
    if ((typeof x[0]==='number')&&(typeof x[1]==='number')){
        c= x[0]+x[1];
        for (var i=1; i<c+1; i++){
            res.push(x);
        }
    }
    else if ((typeof x[0]==='number')||(typeof x[1]==='number')){
        if (typeof x[0]==='number'){c= x[0]}
        if (typeof x[1]==='number'){c= x[1]}
        for (var i=1; i<c; i++){
            res.push(x);
        }
    }
    else {return 'Void!'}
    return res;
}

var fn = explode(x);
console.log (fn);