function add(
  n1: number,
  n2: number,
  printOutput: boolean,
  resultPhrase: string
) {
  if (printOutput) {
    let result = n1 + n2;
    console.log(resultPhrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const isResultPrinted = true;
const resultPhrase = "Result is : ";

const result = add(number1, number2, isResultPrinted, resultPhrase);
