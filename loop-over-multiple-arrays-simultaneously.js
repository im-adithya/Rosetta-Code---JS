function loopSimult(A) {
  var res =[]
  for(let i=0;i<A[0].length;i++){
    var a = ''
    for(let j=0;j<A.length;j++){
      a += A[j][i]
    }
    res.push(a)
  }
  return res
}