function mergeSort(array) {
  // base casee
  if(array.length <= 1){
    // empty array or array of length 1 is sorted, so return as is
    return array;
  } else {
    // split and sort the right half, the left half, and merge the two halves together
    const splitPoint = Math.floor(array.length/2);
    const leftHalf = array.slice(0, splitPoint);
    const rightHalf = array.slice(splitPoint, array.length);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
  }
}

function merge(left, right){
  // new array to hold the merged elements
  const mergedArray = [];
  // run loop while there are elements still in the original arrays
  while(left.length > 0 || right.length > 0){
    // if there aren't any elemeents remaining in the left half, just keep adding from the right
    if(left.length === 0){
      mergedArray.push(right.shift());
      // if there aren't any elements remaining in the right half, just keep adding from the left
    } else if(right.length === 0){
      mergedArray.push(left.shift());
    } else {
      // if the first element in the left array is less than or equal to the first in the right
      // remove the left element and add to the end of the mergedArray
      if(left[0] <= right[0]){
        mergedArray.push(left.shift());
      } else{
        // the first element in the right array is less than the left, 
        // so remove it and add to the end of the mergedArray
        mergedArray.push(right.shift());
      }
    }
  }
  // at this point, every element has been removed from the left and right halves and merged into the new array
    // return the mergedArray
    return mergedArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([79, 100, 105, 110]));
console.log(mergeSort([500, 400, 300, 200, 100]));