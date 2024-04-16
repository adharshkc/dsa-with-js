function bubbleSort(arr) {
    let len = arr.length;
  for(let i=0;i<len; i++){
    let didSwap = 0
    for(let j= 0;j<len-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]= arr[j+1];
            arr[j+1] = temp;
            didSwap = 1;
        }
    }
    if(didSwap === 0){
        break;
    }
  }
    return arr;
}

let myArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array: " + myArray);
console.log("Sorted Array: " + bubbleSort(myArray));
console.log("Sorted Array: " + bubbleSort([13,46,24,52,20,9]));
console.log("Sorted Array: " + bubbleSort([1, 2,3,4,5,6]));

