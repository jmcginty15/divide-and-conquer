function findFloor(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    if (arr[left] > val) return -1;
    if (arr[right] <= val) return arr[right];

    let middle = left;
    while (!(arr[middle] <= val && arr[middle + 1] > val)) {
        middle = Math.floor((left + right) / 2);
        if (arr[middle] <= val) left = middle;
        else right = middle;
    }

    return arr[middle];
}

module.exports = findFloor