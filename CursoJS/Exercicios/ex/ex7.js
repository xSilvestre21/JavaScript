function gradingStudents(grades) {
    
    for(let i = 0; i < grades.length; i++){
        if(grades[i] >= 38) {
            let nextMultipleBy5 = Math.round(grades[i] / 5);
            //console.log(nextMultipleBy5,(nextMultipleBy5)*5,grades[i]);
            if(nextMultipleBy5 * 5 > grades[i]){
                grades[i] = Math.abs((nextMultipleBy5) * 5 - grades[i]) < 3 ? (nextMultipleBy5) * 5 : grades[i];
            }
        }
    }
    return grades;

}

console.log(gradingStudents([73, 67, 38, 33]));
console.log(gradingStudents([54, 48, 19, 87]));