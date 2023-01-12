export function solution(number: number): string {
  const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const symbols = [
    'I',
    'IV',
    'V',
    'IX',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M',
  ];

  let numberIndex = numbers.length - 1;
  let romanResult = '';
  let currentNumber = number;

  while (currentNumber > 0) {
    let divideTo = numbers[numberIndex];

    const result = String(currentNumber / divideTo); // division -> get amount for put roman symbol

    currentNumber = currentNumber % divideTo; // % -> get next number

    const firstNumber = Number(result.split('')[1]);

    if (firstNumber === 0) {
      numberIndex--;
      continue;
    }

    const romanSymbol = symbols[numberIndex];

    new Array(firstNumber).fill(2).forEach(() => {
      romanResult = `${romanResult}${romanSymbol}`;
    });

    numberIndex--;
  }

  return romanResult;
}
