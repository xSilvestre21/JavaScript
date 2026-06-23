function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i).padStart(1));
    }
    
    for (let i = n; i >= 1; i--) {
        console.log('#'.repeat(i).padStart(n));
    }
}

staircase(8);

