function sortedFrequency(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    let left = start;
    let right = end;

    if (arr[left] > val || arr[right] < val) return -1;

    if (arr[left] != val) {
        while (!(arr[start] === val && arr[start - 1] != val)) {
            start = Math.ceil((left + right) / 2);
            if (arr[start] < val) left = start;
            else right = start;
        }
    }

    left = start;
    right = end;

    if (arr[right] != val) {
        while (!(arr[end] === val && arr[end + 1] != val)) {
            end = Math.floor((left + right) / 2);
            if (arr[end] > val) right = end;
            else left = end;
        }
    }

    return end - start + 1
}

module.exports = sortedFrequency