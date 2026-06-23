
function minMaxSum(arr) {
    arr.sort();
    let minSum = 0;
    let maxSum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(i < arr.length - 1) minSum += arr[i];
        if(i >= 1) maxSum += arr[i];
    }
    console.log(minSum, maxSum);
}
minMaxSum([1, 2, 3, 4, 5]);
minMaxSum([1234, 20, 332, 46, 587]);
minMaxSum([7, 69, 2, 221, 8974]);