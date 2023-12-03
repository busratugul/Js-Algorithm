

function faktoriyel(num) {
    if(num === 0 || num === 1){
        return 1;
    }else {
       return num * faktoriyel(num - 1)
    }
}

console.log(faktoriyel(4))