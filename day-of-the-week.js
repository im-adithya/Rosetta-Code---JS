function findXmasSunday(start, end) {
  // Good luck!
  var ans =[]
  for (let i=start; i<=end; i++){
    var string = ['-','12','-','25']
    string.unshift(i)
    var d = new Date(string.join(''))
    d = d.toString().split(" ")
    if (d[0]=='Sun'){
      ans.push(i)
    }
  }
  return ans;
}