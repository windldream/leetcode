function mergeSort(arr) {
    function mergeArr(left, right) {
        let result = []; 
        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        return result.concat(left).concat(right);
    }

    if (arr.length === 1) {
        return arr;
    }

    let middle = Math.floor(arr / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return mergeArr(mergeSort(left), mergeSort(right));
}