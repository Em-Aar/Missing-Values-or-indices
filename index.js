// This program is just to give a logic how we can find missing values and indices.
var myList = [2, 7, 3, 6, 9];
function missingIndex(list) {
    var sortedList = list.sort();
    console.log("sorted LIst", sortedList);
    var newList = [];
    for (var i = 0; i < sortedList.length - 1; i++) {
        if (sortedList[i] + 1 == sortedList[i + 1]) {
            //i = 3
        }
        else {
            newList.push(i + 1);
            sortedList.splice(i + 1, 0, sortedList[i] + 1);
        }
    }
    return newList;
}
console.log("List of Missing values Indexes if we sort the Array: ".concat(missingIndex(myList)));
// This function will find indices if array is like this 
/* let newArray = [4,undefined, , 8, , ]
function findMissingValueIndexes(arr: (number | null | undefined)[]): number[] {
  const missingValueIndexes: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null || arr[i] === undefined) {
            missingValueIndexes.push(i);
        }
    }

  
return missingValueIndexes;
}
let myList2: any [] = [2,,3,4,undefined]
console.log(`${findMissingValueIndexes(newArray)}`); */ 
