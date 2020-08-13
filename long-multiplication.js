function mult(strNum1, strNum2) {
  var a1 = strNum1.split("").reverse();
  var a2 = strNum2.toString().split("").reverse();
  console.log(a1, a2)
  var res = [];
  for (var i = 0; i < a1.length; i++) {
    for (var j = 0; j < a2.length; j++) {
      var x = i + j;
      res[x] = a1[i] * a2[j] + (x >= res.length ? 0 : res[x]);
      if (res[x] > 9) {
        res[x + 1] = Math.floor(res[x] / 10) + (x + 1 >= res.length ? 0 : res[x + 1]);
        res[x] %= 10;
      }
    }
  }
  return res.reverse().join("");
}