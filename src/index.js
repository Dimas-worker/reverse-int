module.exports = function reverse (n) {
    let str = n + '';
    if (str[0] === '-') {
        str = str.slice(1);
    }
    let result = '';
    for (let i=0; i<str.length; i++) {
        result = `${str[i]}${result}`;
    }
    return result;
}
