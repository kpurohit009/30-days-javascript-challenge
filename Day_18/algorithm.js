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
