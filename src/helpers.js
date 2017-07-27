/*
 Input: 
   arr: an array of integers
   first: the first index to be swapped
   second: the second index to be swapped
  Output: an array with value and 'first' and 'second' indices swapped
  Example:
    swap([1, 2, 3, 4, 5], 0, 4) should return [5, 2, 3, 4, 1] 
*/
function swap(arr, first, second) {
  var temp = arr[second];
  arr[second] = arr[first];
  arr[first] = temp;
  return arr;
}

/*
  Input: two arrays of integers sorted in ascending order
  Output: A single sorted array with all the elements of both arrays
  Example: 
    merge([1, 3, 5], [2, 4, 6]) should return [1, 2, 3, 4, 5, 6]
*/
function merge(left, right) {
  // FIX ME
  // return left.concat(right);

  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    // If current val in the left array is less than the current val in the right array
    // OR if right index === right length
    // push left value into the result
    if (left[leftIndex] < right[rightIndex] || rightIndex === right.length) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  return result;
}

/* 
  Input: 
    arr: an array of integers
    left: the starting index of the array to partition
    right: the ending index of the array to partition
  Output: The index of a pivot element. All elements to the left of the pivot are less than 
  or equal to it, and all elements to the right of it are greater than it 
  Example:
    var input = [4, 7, 6, 5, 3, 2, 1]
    partition(input), assuming we're using the first element as the pivot,
    should manipulate the input array to be [3, 1, 2, 4, 5, 6, 7]
    This will return 3, because all values left of index 3 are less than or equal to 4,
    and all values to the right of it are greater than 4        
*/
function partition(arr, left, right) {
  // FIX ME
  // return Math.floor((left + right) / 2);
  var pivotIndex = left;
  var pivotVal = arr[left];
  while (left < right) {
    // Move right until you find a value greater than the pivot
    while (arr[left] <= pivotVal) {
      left++;
    }

    if (left > right) {
      break;
    }
    // Move left until you find a value less than or equal to the pivot
    while (arr[right] > pivotVal) {
      right--;
    }

    if (left < right) {
      swap(arr, left, right);
    } else {
      break;
    }
  }

  swap(arr, right, pivotIndex);

  return right;
}

module.exports = {
  merge: merge,
  partition: partition,
  swap: swap
};
