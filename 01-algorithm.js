//[8,4,6,2,3] => output [4,2,4,2,3] birbirinden çıkararak ilerleme metotları

const solution = (arr) => {
  return arr.map((_, i) => {
    for (let j = i + 1; j < arr.length; j++) {
      //indexten bir sonrası j
      if (arr[i] > arr[j]) {
        //index,j den büyükse çıkar ve döngüden çık değilse j bir sonrakine geçecek

        arr[i] = arr[i] - arr[j]
        break
      }
    }
    return arr[i]
  })
}

console.log(solution([8, 4, 6, 2, 3]))
