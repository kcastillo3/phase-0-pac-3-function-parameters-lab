function introduction(name) {
    return `Hi, my name is ${name}.`;
  }

function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }

  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

console.log(introductionWithLanguage("Ada", "Python")); // Output: Hi, my name is Ada and I am learning to program in Python.
console.log(introductionWithLanguage("Bob", "JavaScript")); // Output: Hi, my name is Bob and I am learning to program in JavaScript.

console.log(introductionWithLanguageOptional("Ada", "Python")); // Output: Hi, my name is Ada and I am learning to program in Python.
console.log(introductionWithLanguageOptional("Bob")); // Output: Hi, my name is Bob and I am learning to program in JavaScript.