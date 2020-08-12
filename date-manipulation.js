function add12Hours(dateString) {
  // Good luck!
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  dateString = dateString.split(' ')
  var res = []
  var ans = []
  res.push((dateString[1] < 10) ? 0 + dateString[1] : dateString[1])
  res.push(short[monthNames.indexOf(dateString[0])])
  res.push(dateString[2])
  res.push((dateString[3].includes('a'))
    ? `${dateString[3].split(':')[0]}:${dateString[3].split(':')[1].split('a')[0]}:00`
    : `${parseInt(dateString[3].split(':')[0]) + 12}:${dateString[3].split(':')[1].split('p')[0]}:00`)
  res.push(dateString[4])
  res = res.join(' ')
  var res = Date.parse(res) + 43200000 - 18000000
  res = new Date(res)
  res = res.toUTCString()
  res = res.split(' ')
  ans.push(`${monthNames[short.indexOf(res[2])]} ${parseInt(res[1])} ${res[3]} ${(res[4].split(':')[0] > 12) ?
    (parseInt(res[4].split(':')[0]) - 12) + ":" + res[4].split(':')[1] + "pm" : parseInt(res[4].split(':')[0]) + ":" + res[4].split(':')[1] + "am"} EST`)
  console.log(ans, res)
  return ans[0];
}