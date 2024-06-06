// function that reverses the string
function reverseString(string) {
    return string.split('').reverse().join('');
}

// function that converts the string to ASCII
function convertToASCII(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        result += string.charCodeAt(i) + ' ';
    }
    return result.trim();
}

// function that tranforms the string depending on the three conditions
function transformString(string) {
    const lengthString = string.length;

    // Checks if the length of the string is divisible by 3
    if (lengthString  % 3 === 0) {
        string = reverseString(string);
    }

    // Checks if the length of the string is divisible by 5
    if (lengthString  % 5 === 0) {
        string = convertToASCII(string);
    }
    // Checks if the length of the string is divisible by both 3 and 5
    else if (lengthString  % 3 === 0 && lengthString  % 5 === 0) {
        string = reverseString(convertToASCII(string));
    }
    // it should return the string if no conditions from above is achieved
    return string;
}

//or use jest as onther alternative to check the function transformString is it is operating as expected
// Handled all cases(3)
// Example usage:
const input = "Software development empowers innovation and drives progress";
const output = transformString(input);
//Divisible by both 3 and 5
console.log(output);
// Divisible by only 3
console.log(transformString("Softwares"));
//Divisible by only 5
console.log(transformString("Progresses"));