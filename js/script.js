function insertionSort(arr) {
  // Loop through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // The current element to be compared
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    // Place the key after the last element that was larger
    arr[j + 1] = key;
  }
  return arr;
}
