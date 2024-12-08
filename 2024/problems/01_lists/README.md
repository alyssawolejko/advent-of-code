# Day 01: Historian Hysteria

Source: https://adventofcode.com/2024/day/1

## Part 1

### Approach

1. Read the input file.
2. Split the input file into a list of lists.
3. Sort the sublists in ascending order.
4. Find the difference between the values at the indices in each sublist.
5. Keep a running total of the differences.
6. Return the sum of the differences.

### Notes

- The input file is a list of pairs of numbers.
- The numbers in each pair are separated by a space.

### Improvements

- I could have used a binary search to find the insertion point for each number in the sublists.

## Part 2

### Knowns

- The left and right lists are sorted.

### Approach 1 - Binary Search

1. Create an accumulator for each left value to keep track of the total repeats.
2. Iterate through the left list.
3. Pick the center point of the right list as the target index. Compare the left value to the target index in the right list.
4. If the left value is greater than the target index in the right list, move the target index to the right.
5. If the left value is less than the target index in the right list, move the target index to the left.
6. If the left value is equal to the target index in the right list, add 1 to the accumulator. Once the next index in the right list has a different value, break out of the loop.
7. The score is calculated by the value of the left \* the accumulator.
8. Add up the scores for each value in the left list.
9. Return the total.

### Approach 2 - Two Pointers

1. Create an accumulator for each left value to keep track of the total repeats.
2. Iterate through the left list.
3. For each left value, iterate through the right list.
4. If the left value is equal to the right value, add 1 to the accumulator.
5. The score is calculated by the value of the left \* the accumulator.
6. Add up the scores for each value in the left list.
7. Return the total.
