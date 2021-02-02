function findRotatedIndex(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    if (arr[left] === val) return left;
    if (arr[right] === val) return right;

    let rotationIndex = 0;
    if (arr[0] > arr[right]) {
        if (arr[right - 1] > arr[right]) rotationIndex = right;
        else {
            left = 1;
            rotationIndex = 1;
            while (!(arr[rotationIndex] < arr[arr.length - 1] && arr[rotationIndex] < arr[rotationIndex - 1])) {
                rotationIndex = Math.floor((left + right) / 2);
                if (arr[rotationIndex] < arr[right]) right = rotationIndex;
                else left = rotationIndex;
            }
        }
    }

    if (arr[rotationIndex] > val || arr[rotationIndex - 1] < val) return -1;

    left = rotationIndex;
    right = arr.length - 1;

    if (arr[left] === val) return left;

    if (arr[left] <= val && arr[right] >= val) {
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (arr[middle] < val) left = middle + 1;
            else if (arr[middle] > val) right = middle - 1;
            else return middle;
        }
    }

    if (rotationIndex > 0) {
        left = 0;
        right = rotationIndex - 1;

        if (arr[right] === val) return right;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (arr[middle] < val) left = middle + 1;
            else if (arr[middle] > val) right = middle - 1;
            else return middle;
        }
    }

    return -1;
}

module.exports = findRotatedIndex