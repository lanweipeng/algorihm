function match(s, pattern) {
    var objRegExp = new RegExp(`^${pattern}$`);
    return objRegExp.test(s);
}
console.log(match('aaa', 'a.a'))