function dotProduct(ary1, ary2) {
  var res = 0
  for(let i=0;i<ary1.length;i++){
    res+= (ary1[i]*ary2[i])
  }
  return res
}