const arr = [-4, 3, -9, 0, 4, 1];

let poscount = 0;
let negcount = 0;
let nullcount = 0;
for (i in arr) {
    if (arr[i] > 0) poscount += 1;
    if (arr[i] < 0) negcount += 1;
    if (arr[i] == 0) nullcount += 1;
}

poscount = poscount / arr.length;
negcount = negcount / arr.length;
nullcount = nullcount / arr.length;

console.log(negcount.toFixed(3));
console.log(poscount.toFixed(3));
console.log(nullcount.toFixed(3));

