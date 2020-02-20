module.exports = function reverse (n) {
  const num = Math.abs(n)
  let string = num.toString();
  let arr = Array.from(string);
  let arrRev = arr.reverse();
  let resoult = arrRev.join('');
  return +resoult;
}
