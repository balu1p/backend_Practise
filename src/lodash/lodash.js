
// Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
// - Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays
// - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.

import lodash from 'lodash/array.js'
const lodashChunk = () => {
    const arrMonth = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
    const num = 4;
    console.log(lodash.chunk(arrMonth, num))
     
}

function OddNoTail () {
    const no = 20;
    const arrNo = []
    for(let i=1; i<=no; i++) {
        if(i%2 !== 0) {
            arrNo.push(i)
        }
        
    }
    let res = lodash.tail(arrNo);
    console.log(res);
}
function duplicateArr () {
    const dupArr = [1,2,2,3,1,4,2,5,6];
    console.log(lodash.union(dupArr));
}

function Pairs() {
    const pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];

    console.log(lodash.fromPairs(pairs));
}

export { lodashChunk, OddNoTail, duplicateArr, Pairs}


// - Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console
// - Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
