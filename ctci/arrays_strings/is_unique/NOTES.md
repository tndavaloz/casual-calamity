# Notes:
## General Strategy:
* Iterate through each character in your string
* Leverage a hash map or a dictionary to keep track of characters that have been visited previously

## Tips:
* Clarify the string format before tackling the problem (ASCII)
* If it's safe to use ASCII, you can leverage an early return on a character count to improve the performance of your algorithm:
  * `if (string.length > 128) return false`, as ASCII is limited to 128 chars (meaning we must have a duplicate)

## Misc:
* The time complexity of this algorithm is O(n), where n is the length of the string we are evaluating