function lascii(cFrom, cTo) {
  var res =[]
  for(let i=cFrom.charCodeAt(0);i<=cTo.charCodeAt(0);i++){
    res.push(String.fromCharCode(i))
  }
  return res
}