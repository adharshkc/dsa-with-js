var twoSum = function (nums, target) {
    let ref = [];
    for (let i = 0; i < nums.length; i++) {
        ref[i] = nums[i];
        // console.log(ref[i])
        for (let j = i + 1; j < nums.length; j++) {
            if (ref[i] + nums[j] === target) {
                console.log(i,j)
                return [i, j]
            } 
        }
    }
};

const arr = [2,7,11,15]

twoSum(arr, 9)