//FIBONACCI: her yeni sayı, kendinden önceki iki sayının toplamı olarak gelir.

function fiboGeneration(n) {
    let array = [];
    if(n === 1 ){
        array.push(0)
    }else if(n === 2){
        array.push(0,1)
    }else{
        array.push(0,1);
        for(let i = 2; i < n; i++){
            let u = array[i-2] + array[i-1]
            //kendinden iki önceki ve bir önceki sayının toplamı
            array.push(u)
        }
        console.log(array);
    }

}

fiboGeneration(5)