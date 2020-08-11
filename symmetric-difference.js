function symmetricDifference(A, B) {
  var res = A.concat(B)
  var ans =[]
  res.forEach((a,i) => {
    res.splice(i,1,'x')
    if(res.includes(a)){
      res.splice(res.indexOf(a),1)
    } else {
      ans.push(a)
    }
  })
  ans.sort();
  return ans
}