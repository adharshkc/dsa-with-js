

function selectionSort(arr){
    let n = arr.length;
    for(let i =0; i<n-2;i++){
        let min = i;
        for(let j = i;j<=n-1;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i]= temp
    }
    return arr
}

console.log(selectionSort([1, 5, 7, 2, 4]))