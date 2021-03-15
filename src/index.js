const singlesWords = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const tensWords = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    let hundreds = parseInt(number / 100);
    let singles = number % 100;
    let res = [];
    if (hundreds) {
        res.push(`${singlesWords[hundreds]} hundred`);
    }
    if (singles) {
        if (singles < 20) {
            res.push(`${singlesWords[singles]}`);
        } else {
            let tens = parseInt(singles / 10);
            if (tens) {
                res.push(`${tensWords[tens]}`);
            }
            singles = singles % 10;
            if (singles) {
                res.push(`${singlesWords[singles]}`);
            }
        }
    }
    return res.join(" ");
};
