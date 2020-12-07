# 1.2) Check Permutation
## Problem:
Given two strings, write a method to determine if one is a permutation of the other.

## General Strategy:
* Permutations will have the same characters, but in a different order. So the simplest solution involves casting the string inputs into arrays / lists, sorting them, and then comparing the sorted strings together.

## Tips:
* Clarify if casing and whitespace are significant when evaluating permutations.
* In the beginning of your algorithm, doing a check on string length can help you eliminate potential non-permutations (as unequal strings cannot be permutations of each other).

## Misc:
* Because this solution relies on sorting arrays / lists, it is not the most performant in terms of efficiency.