import fs from 'fs';

const readInput = (): number => {
  const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8');
  const numbers = input.split(/\s+/g);

  // sort the numbers into left and right arrays
  const left: number[] = [];
  const right: number[] = [];

  const parsedNumbers: number[] = numbers.map((n) => parseInt(n));

  for (let i = 0; i < parsedNumbers.length; i += 2) {
    left.push(parsedNumbers[i]);
    if (i + 1 < parsedNumbers.length) {
      right.push(parsedNumbers[i + 1]);
    }
  }

  // TODO: Binary search to find insertion point vs sort
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  let total = 0;
  // the arrays should be the same length
  for (let i = 0; i < left.length; i++) {
    const diff = Math.abs(left[i] - right[i]);
    total += diff;
  }
  return total;
};

readInput();
