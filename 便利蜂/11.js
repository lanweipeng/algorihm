let daniu = '5 10 2 9 15 9'; let nandian = '6 3 8'; let count = 0;
daniu = daniu.split(' '); nandian = nandian.split(' ');
daniu = daniu.map(item => parseInt(item));
nandian = nandian.map(item => parseInt(item));
daniu = daniu.sort((a, b) => a - b);
nandian = nandian.sort((a, b) => a - b);
console.log(daniu, nandian)
for (let i = 0; i < nandian.length; i++) {
    for (let j = 0; j < daniu.length; j++) {
        console.log(nandian[i], daniu[j]);
        if (nandian[i] > daniu[j]) {
            console.log(nandian[i], daniu[j], 'hh');
            count++; daniu.splice(j, 1); nandian.splice(i, 1); console.log(daniu, nandian);
        }
    }

}
console.log(count)