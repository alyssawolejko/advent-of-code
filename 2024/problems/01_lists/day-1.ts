import fs from 'fs';

const sortLists = (): [number[], number[]] => {
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

  return [left, right];
};

const sumOfDifferences = (): number => {
  const [left, right] = sortLists();
  let total = 0;
  // the arrays should be the same length
  for (let i = 0; i < left.length; i++) {
    const diff = Math.abs(left[i] - right[i]);
    total += diff;
  }
  return total;
};

const similarityScore = (algorithm: string): number => {
  const [left, right] = sortLists();
  let total = 0;
  switch (algorithm) {
    case 'Binary Search':
      // Binary Search (O(n log n))
      for (let i = 0; i < left.length; i++) {
        const leftValue = left[i];
        let count = 0;
        let low = 0;
        let high = right.length - 1;
        let firstIndex = -1;

        while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          if (right[mid] === leftValue) {
            firstIndex = mid;
            high = mid - 1; // Look in left half for earlier occurrence
          } else if (right[mid] < leftValue) {
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }
        // If value found, count all occurrences
        if (firstIndex !== -1) {
          let j = firstIndex;
          while (j < right.length && right[j] === leftValue) {
            count++;
            j++;
          }
        }

        total += leftValue * count;
      }
      break;
    case 'Two Pointers':
      // Two Pointers (On^2)
      for (let i = 0; i < left.length; i++) {
        let dupes = 0;
        const leftValue = left[i];
        for (let j = 0; j < right.length; j++) {
          if (right[j] === leftValue) {
            dupes += 1;
          }
        }
        total += leftValue * dupes;
      }
      break;
  }

  return total;
};

sumOfDifferences();
similarityScore('Binary Search');
similarityScore('Two Pointers');
