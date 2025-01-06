function recursiva(max) {
    if (max > 500) return;
    console.log(max);
    max++;
    recursiva(max);
}

recursiva(0);