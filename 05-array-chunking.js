//örn; [0,1,2,3,4,5,6,7,8,9] dizisini sırayı bozmadan alt kümelere ayıralım.
//[0,1,2],[3,4,5],[6,7,8],[9] diye 3erli bir alt küme oluşturabiliriz. Mantık bu şekildedir.

//Kullanıcıdan parçalanmasını istenen diziyi ve kaçar kaçar parçalanmasını istediğini girdisi olarak al.

function shred(array,item) {
    parcalanmis = [];
    index = 0;
    while (index < array.length) {
        parcalanmis.push(array.slice(index, index+item))
        index += item
    }

    console.log(parcalanmis);
}

shred([0,1,2,3,4,5,6,7,8,9],2)