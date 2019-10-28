
function verify(sequence) {
    if (sequence.length <= 3) {
        return true;
    }
    let root = sequence[sequence.length - 1];
    let left = [], right = [];
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] < root) {
            left.push(sequence[i])
        } else {
            right = sequence.slice(i, sequence.length - 1);
            break;
        }
    }
    if (right.length == 0) {
        return true;
    }
    for (var i = 0; i < right.length; i++) {
        if (right[i] < root) {
            return false;
        }
    }
    return verify(left) && verify(right)
}
function VerifySquenceOfBST(sequence) {
    // write code here
    if (!sequence || sequence.length == 0) {
        return false
    }
    return verify(sequence);
}
console.log(VerifySquenceOfBST([7, 4, 6, 5]))