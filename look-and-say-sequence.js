function lookAndSay(str) {
  str = str.split('')
  var len = str.length
  var ans = []
  function howfar(arr) {
    var count = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[0] == arr[i]){
        count++
      } else {
        break
      }
    }
    return count
  }
  for(let i =0; i<len/*some other thing*/;i++){
    ans.push(howfar(str))
    ans.push(str[0])
    str.splice(0,howfar(str))
  }
  if(ans[ans.length-1]==undefined){
    ans.splice(ans.length-2,1)
  }
  return ans.join('')
}