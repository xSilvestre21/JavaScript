let i = 1;

const time = setInterval( function oi() {
        console.log('oi', i);
        i++;
}, 1000);

const hi = setTimeout(function() {
    console.log('hi');
}, 2000);

