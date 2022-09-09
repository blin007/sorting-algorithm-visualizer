import { swap } from "../utility/swap";

const sSort = (bars, barSize) => {
    if (bars.length <= 1) return bars

    const visualIndexArr = []
    selectionSort(barSize, bars, visualIndexArr)
    return visualIndexArr;
}

const selectionSort = (length, arr, visualIndexArr) => {
    let largestIndex = null
    let largest = null

    // start looping from the end of the arr
    for (let high = length - 1; high > 0; high--){
        largestIndex = 0; // assign first element in arr to be largest
        largest = arr[0]
        // then examine each element between the second ele of the arr to the one selected from the outer loop
        for (let i = 1; i <= high; i++){
            // if iterated ele is larger than "largest" reassign "largest"
            if (largest < arr[i]){
                largest = arr[i]
                largestIndex = i
                visualIndexArr.push({l: i, r: high, heightL: arr[i], heightR: arr[high]})
                visualIndexArr.push({l: i, r: high, heightL: arr[i], heightR: arr[high], colorBack: true})
            }
        }
        // swap the selected largestIndex and high so that "largest" is placed currectly in the arr
        swap(arr, high, largestIndex)
        visualIndexArr.push({l: largestIndex, r: high, heightL: arr[largestIndex], heightR: arr[high]})
        visualIndexArr.push({l: largestIndex, r: high, heightL: arr[largestIndex], heightR: arr[high], colorBack: true})
    }
}

export default sSort