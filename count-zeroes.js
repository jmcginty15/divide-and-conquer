function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    if (arr[right] === 1) return 0;
    if (arr[left] === 0) return arr.length;

    while (left != right - 1) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === 0) {
            if (arr[middle - 1] === 1) return arr.length - middle;
            else right = middle;
        }
        else if (arr[middle] === 1) {
            if (arr[middle + 1] === 0) return arr.length - (middle + 1);
            else left = middle;
        }
    }
}

module.exports = countZeroes