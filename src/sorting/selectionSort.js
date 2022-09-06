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

    for (let high = length - 1; high > 0; high--){
        largestIndex = 0;
        largest = arr[0]
        for (let i = 1; i <= high; i++){
            if (largest < arr[i]){
                largest = arr[i]
                largestIndex = i
                visualIndexArr.push({l: i, r: high, heightL: arr[i], heightR: arr[high]})
                visualIndexArr.push({l: i, r: high, heightL: arr[i], heightR: arr[high], colorBack: true})
            }
        }
        swap(arr, high, largestIndex)
        visualIndexArr.push({l: largestIndex, r: high, heightL: arr[largestIndex], heightR: arr[high]})
        visualIndexArr.push({l: largestIndex, r: high, heightL: arr[largestIndex], heightR: arr[high], colorBack: true})
    }
}

export default sSort