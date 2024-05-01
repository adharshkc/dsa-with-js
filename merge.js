const arr = [3,1,4,2,5];


// function mergeSort(arr, left, right){
//     if(left>=right){
//         return
//     }
//     let middle = left + parseInt((right-left)/2);
//     mergeSort(arr, left, middle);
//     mergeSort(arr, middle+1, right);
//     merge(arr, left, middle, right)
// }

// function merge(arr, low, middle, high){
//     let left = middle-low+1;
//     let right = high-middle

//     let arr1 = new Array(left);
//     let arr2 = new Array(right);

//     for(let i=0;i<left;++i){
//         arr1[i] = arr[low+i];
//     }
//     for(let i = 0;i<right; ++i){
//         arr2[i]= arr[middle+1+i]
//     }

//     let i = j = 0;
//     let k = low;

//     while(i<left&&j<right){
//         if(arr1[i]<arr2[j]){
//             arr[k] = arr1[i];
//             ++i
//         }else{
//             arr[k] = arr2[j];
//             j++
//         }
//         k++
//     }

//     while(i<left){
//         arr[k] = arr1[i]
//         i++;
//         j++;
//     }
//     while(j<right){
//         arr[k]=arr2[j]
//         j++;
//         k++;
//     }
// }

// console.log(arr)
// mergeSort(arr, 0, arr.length-1)
// console.log(arr)


function mergeS(arr){
    if(arr.length<=1){
        return arr
    }

    const middle = Math.floor(arr.length/2);
    const left = [];
    const right = []

    for(let i=0;i<middle;i++){
        left[i]=arr[i]
    }
    for(let i=middle;i<arr.lenght;i++){
        right[i-middle] = arr[i];
    }

    const sortedLeft = mergeS(left)
    const sortedRight = mergeS(right)

    return m(sortedLeft, sortedRight)
}

function m(leftArr, rightArr){
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex<leftArr.length&&rightIndex<rightArr.length){
        if(leftArr[leftIndex]<rightArr[rightIndex]){
            mergedArr[mergedArr.length]=leftArr[leftIndex]
            leftIndex++;
        }else{
            mergedArr[mergedArr.length]=rightArr[rightIndex];
            rightIndex++
        }
    }

    while (leftIndex < leftArr.length) {
        mergedArr[mergedArr.length] = leftArr[leftIndex];
        leftIndex++;
    }

    while (rightIndex < rightArr.length) {
        mergedArr[mergedArr.length] = rightArr[rightIndex];
        rightIndex++;
    }

    return mergedArr
}

console.log(mergeS(arr))