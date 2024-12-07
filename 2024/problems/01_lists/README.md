# Day 01: Historian Hysteria

Source: https://adventofcode.com/2024/day/1

## Approach

1. Read the input file.
2. Split the input file into a list of lists.
3. Sort the sublists in ascending order.
4. Find the difference between the values at the indices in each sublist.
5. Keep a running total of the differences.
6. Return the sum of the differences.

## Notes

- The input file is a list of pairs of numbers.
- The numbers in each pair are separated by a space.

## Improvements

- I could have used a binary search to find the insertion point for each number in the sublists.
