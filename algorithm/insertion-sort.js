for (let i = 1; i < array.length; i++){
    let elem = array[i];
    j = i -1;
    while (j >= 0 & array[j] > elem) {
        array[j+1] = array[j]
        j = j - 1;
    }
    array[j + 1] = key;
    return array
}
/*
Implementation of Insertion Sort using JavaScript:

Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. Each time we take a new card we put it in the right place in our hand.


Instructions

Each time work only with the first i-1 element from of the array
Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.
*/