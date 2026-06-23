function equacao (a, b, c) {
    delta = b**2 - ( 4 * a * c);
    return {
        delta: b**2 - ( 4 * a * c), x1: (-b + delta**(1/2)) / (2 * a), x2: (-b - delta**(1/2)) / (2 * a),
    };
}
console.log(equacao(1, 6, 9));

const num = 18456;
console.log(num.toString(2));
