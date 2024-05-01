function insertionSort(arr) {
    let n = arr.length;
    for(let i = 0;i<=n-1;i++){
        let j = i;
        while(j>0&&arr[j-1]>arr[j]){
            let temp = arr[j-1]
            arr[j-1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}

let myArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array: " + myArray);
console.log("Sorted Array: " + insertionSort(myArray));
console.log("Sorted Array: " + insertionSort([13,46,24,52,20,9]));
console.log("Sorted Array: " + insertionSort([1, 2,3,4,5,6]));




