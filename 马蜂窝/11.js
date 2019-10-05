let input = read_line();
let arr = input.split(' ');
arr = Array.from(new Set(arr));
let obj = {}
arr.forEach(element => {
    let addr = element.split('-')[1];
    if (obj[addr]) {
        obj[addr] += 1;
    } else {
        obj[addr] = 1;
    }
});
let index = 3;
arr = [];
arrN = [];
Object.keys(obj).forEach(ele => {
        arr.push(`${ele} ${obj[ele]}`)
    })
    // console.log(arr[0].slice(arr[0].length - 1))
arr.sort((a, b) => {

    if (a.slice(a.length - 1) < b.slice(b.length - 1)) {
        return 1
    } else if (a.slice(a.length - 1) > b.slice(b.length - 1)) {
        return -1

    } else {
        if (a.slice(0, 1) < b.slice(0, 1)) {
            return -1
        } else return 1
    }
})
for (let i = 0; i < 3; i++) {
    console.log(arr[i])
}