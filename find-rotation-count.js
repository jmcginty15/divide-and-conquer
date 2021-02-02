function findRotationCount(arr) {
    let left = 1;
    let right = arr.length - 1;

    if (arr[0] < arr[right]) return 0;
    if (arr[right - 1] > arr[right]) return right;
    
    rotationIndex = 1;
    while (!(arr[rotationIndex] < arr[arr.length - 1] && arr[rotationIndex] < arr[rotationIndex - 1])) {
        rotationIndex = Math.ceil((left + right) / 2);
        if (arr[rotationIndex] < arr[right]) right = rotationIndex;
        else left = rotationIndex;
    }

    return rotationIndex;
}

module.exports = findRotationCount