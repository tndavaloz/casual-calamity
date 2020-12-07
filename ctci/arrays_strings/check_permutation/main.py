import json
from colorama import Fore, Style

f = open("./check_permutation/data.json")
data = json.load(f)

def main(stringA, stringB):
    # lowercase our string and coerce it to a list
    listA = list(stringA.lower())
    listB = list(stringB.lower())

    # sort each list
    listA.sort()
    listB.sort()

    # join our sorted list into strings for comparison
    sortedA, sortedB = "".join(listA), "".join(listB)

    # print logic
    msg = "are permutations" if sortedA == sortedB else "are not permutations"
    print(Fore.GREEN + '"' + stringA + '" & "' + stringB + '" ' + msg)
    print(Style.RESET_ALL)

    # evaluate our strings and return the result
    return sortedA == sortedB

if __name__ == "__main__":
    main(data['is_permutation'][0], data['is_permutation'][1]) # True
    main(data['not_permutation'][0], data['not_permutation'][1]) # False