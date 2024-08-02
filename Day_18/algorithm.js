//Activity 1 : Sorting Algorithm
//Task 1
function bubbleSort(arr){
    let n = arr.length;
    let swapped;

    for(let i=0 ; i<n-1 ; i++){
        swapped = false;
        for(let j=0 ; j<n-i-1 ; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}
const num = [20, 50, 64, 12, 11, 90];
console.log(`----- Bubble Sort -----`);
console.log(`Sorted array: ${bubbleSort(num)}`);

//Task 2
function selectionSort(arr){
    let n = arr.length;

    for(let i=0 ; i<n-1 ; i++){
        let minIndex = i;
        for(let j=i+1 ; j<n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
console.log(`----- Selection Sort -----`);
console.log(`Sorted Array: ${selectionSort(num)}`);

//Task 3
function quickSort(arr){
    function partition(low, high){
        let pivot = arr[high];
        let i = low - 1;
        for(let j=low ; j<high ; j++){
            if(arr[j] < pivot){
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
        return i+1;
    }
    return arr;
}
console.log(`----- Quick Sort -----`);
console.log(`Sorted Array: ${quickSort(num)}`);


//Activity 2 : Searching Algorithm
//Task 4
function linearSearch(arr, target){
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] === target){
            console.log(`Target value ${target} found at index ${i}`);
            return i;
        }
    }
    console.log(`Target Value ${target} not found in the array`);
    return -1;
}
const number = [5,10,25,4,6,15].sort((a, b) => a - b);
const target = 6;
console.log(`----- Linear Search -----`);
linearSearch(number, target);

//Task 5
function binarySearch(arr, target){
    let low = 0;
    let high = arr.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target){
            console.log(`Target value ${target} found at index ${mid}`);
            return mid;
        }
        if(arr[mid] > target){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    console.log(`Target value ${target} not found in the array`);
    return -1;
}
console.log(`----- Binary Search -----`);
binarySearch(number, target);


//Activity 3 : String Algorithm
//Task 6
function countCharacter(str){
    const charCount = {};
    for(let char of str){
        if(charCount[char]){
            charCount[char]++;
        }
        else{
            charCount[char] = 1;
        }
    }
    console.log(`Character count: ${charCount}`);
    return charCount;
}
const inputString = "Hello World";
console.log(" ");
countCharacter(inputString);

//Task 7
function longestSubString(s){
    let start = 0;
    let maxLength = 0;
    let maxSubString = '';
    const charIndexMap = {};

    for(let end=0; end<s.length ; end++){
        const currentChar = s[end];
        if(charIndexMap[currentChar] >= start){
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = end;
        const currentLength = end - start + 1;
        if(currentLength > maxLength){
            maxLength = currentLength;
            maxSubString = s.substring(start, end + 1);
        }
    }
    console.log(`Longest Substring without repeating characters: ${maxSubString}`);
    console.log(`Length of the longest substring: ${maxLength}`);
    
    return maxSubString;
}
const inputStrings = "abcabcbb";
console.log(" ");
longestSubString(inputStrings);


//Activity 4 : Array Algorithms
//Task 8
function rotateArray(arr, k){
    const n = arr.length;
    k = k % n;

    function reverse(start, end){
        while(start < end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    reverse(0, n-1);
    reverse(0, k-1);
    reverse(k, n-1);
    console.log(`Rotated Array: ${arr}`);
}
const array = [1, 2, 3, 4, 5, 6];
const k = 3;
rotateArray(array, k);

//Task 9
function mergeArray(arr1, arr2){
    let i = 0;
    let j = 0;
    let mergedArray = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        }
        else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }
    console.log(`Merged Array: ${mergedArray}`);
    return mergedArray;
}
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
mergeArray(array1, array2);