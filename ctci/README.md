# A collection of solutions to problem sets outlined in Cracking the Coding interview.

## Structure, Installation & Setup
### Prerequisites
This assumes you have Node and Python installed and running on your computer. 
* If you are running the Python scripts, this package includes `colorama` to help display the terminal output: `pip3 install colorama`

### File Structure
* Top-level directory describes the type of algorithms / data structures contained problem
* Within this directory, you will find subdirectories containing:
  * Solution algorithms in Node and Python
  * A JSON data file for test input
  * A NOTES.md file with any valuable insights, thought processes, and things to consider

### Running the Algorithms
* **Node:** Run `node <problem-directory>` in your terminal. This will run the algorithm(s) and log some output to your console.
  * Note: JS file must be named `index.js` or else you will need to run `node <problem-directory>/<filename>.js`.
* **Python:** Run `python3 <problem-directory>/main.py` in your terminal. This will run the algorithm(s) and log some (less fancy) output to your console.

### Problem Sets
#### 1.) Arrays & Strings
1. **[Is Unique:](./arrays_strings/is_unique)** Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
2. TBD...