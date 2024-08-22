module.exports = function reverse (n) {
    const abs = Math.abs(n);
    const num = String(abs);
    let i = 0;
       
    while(i <= num.length - 1) {
      i = i + 1;
    }
    let result = num.split('').reverse().join('');
    const result2 = Number(result);
    return result2;
}
