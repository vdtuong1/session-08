function parseInput(input) {
    if (input === "null") {
        return null;
    } else if (input === "undefined") {
        return undefined;
    } else if (input === "true" || input === "false") {
        return input === "true";
    } else if (!isNaN(parseFloat(input))) {
        return parseFloat(input);
    } else {
        return input;
    }
}

console.log(parseInput("123"));
console.log(parseInput("true"));
console.log(parseInput("Hello"));
console.log(parseInput("null"));
console.log(parseInput("undefined"));
