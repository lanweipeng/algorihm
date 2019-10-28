function PrintMinNumber(numbers) {
    // write code here
    numbers = numbers.sort((a, b) => {
        let as = a.toString(), bs = b.toString();
        let max = Math.max(as.length, bs.length);
        let index = as.length > bs.length ? bs.substring(bs.length - 1) : as.substring(as.length - 1);
        an = parseInt((a + '').padEnd(max, index));
        bn = parseInt((b + '').padEnd(max, index));
        return an - bn
    });
    return numbers.join('')
}
console.log(PrintMinNumber([1, 5, 4]))