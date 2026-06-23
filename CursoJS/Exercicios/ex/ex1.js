const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
let fd = 0;
let sd = 0;
let result = 0;
for(let i = 0; i < arr.length;i++){
    fd += arr[i][i];
    sd += arr[i][(arr[i].length - 1)-i];
}

if(fd > sd)
{
    result = fd - sd;
}
else{
    result = sd - fd;
}

console.log(result);