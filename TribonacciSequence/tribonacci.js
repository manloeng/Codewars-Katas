function tribonacci(signature,n){
  if ((!signature.length) || (!n)) return []

  const newArr = []

  for (let i = 0; i < n; i ++){
    if (i < 3) {
      newArr.push(signature[i])
    } else {
      const nextTribonacciNumber = newArr[i-3]+newArr[i-2]+newArr[i-1]

      newArr.push(nextTribonacciNumber)
      }
    }
  return newArr
}

module.exports = tribonacci