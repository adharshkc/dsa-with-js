function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i<n-2;i++){
        let mini = i;
        for(let j=i; j<n-1;j++){
            if(arr[j]<arr[mini]){
                mini = j;
            }
        }
        let temp = arr[mini]
        arr[mini] = arr[i];
        arr[i] = temp;
    }
    return arr
}
let myArray = [64, 34, 25, 12, 22, 11, 90]
console.log(selectionSort(myArray))