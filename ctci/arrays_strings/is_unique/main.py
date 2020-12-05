import json
from colorama import Fore, Style

f = open('./is_unique/data.json')
data = json.load(f)

def main(string):
    # instantiate an empty dictionary
    charDict = dict()
    # iterate through each character in our string
    for char in string:
        # exit early with False if we have found a duplicate in our dictionary
        if char in charDict:
            print(Fore.RED + 'found duplicate "',char,'", in string: "',string,'"')
            print(Style.RESET_ALL)
            return False

        # add our character to our dictionary
        charDict[char] = True

    # if we have exited by now we haven't found a duplicate entry, so return True
    print(Fore.GREEN + 'no duplicate characters found in string: "', string, '"')
    print(Style.RESET_ALL)
    return True

if __name__ == "__main__":
    main(data['unique_string']) # True
    main(data['duplicates_string']) # False

f.close()