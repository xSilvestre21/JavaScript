function timeConversion(s) {
    let period = s.slice(-2);
    let time = s.slice(0, -2);
  
    const [hours, minutes, seconds] = time.split(":");

    const relationshipTime = {
      "12AM": `00:${minutes}:${seconds}`,
      "12PM": time,
      PM: `${Number.parseInt(hours) + 12}:${minutes}:${seconds}`,
      AM: time,
    };
  
    if (hours === "12") {
      return relationshipTime[`12${period}`];
    }
  
    return relationshipTime[period];
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:50:00AM'));