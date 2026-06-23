
function getOneBits(n) {
    // Write your code here
    const binary = n.toString(2);
    let counter = 0;
    let position = [];
    index = 0;
    for(i of binary) {
        console.log(i);
        if(i == 1) {
            counter += 1;
            position.push(index);
        }
        index += 1;
    }
    console.log(`The quantity was ${counter} and their positions were ${position}`);
    
    
    

}
console.log(getOneBits(21));

function main() {
    
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = getOneBits(n);

    ws.write(result.join('\n') + '\n');

    ws.end();
}