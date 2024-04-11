const arr = [1,2,34,5,6]

function check(arr, n){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == n){
            return i;
        }
        // else{
            // }
        }
        return -1;
}

console.log(check(arr, 5))