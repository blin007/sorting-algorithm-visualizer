import { swap } from "../utility/swap";

const bSort = (bars, barSize) => {
    if (bars.length <= 1) return bars

    const visualIndexArr = []
    bubbleSort(barSize, bars, visualIndexArr)
    return visualIndexArr;
}

const bubbleSort = (length, arr, visualIndexArr) => {
    // start examining each element from the right end of the arr
    for (let high = length - 1; high > 0; high--){
        //then examine each element between the beginning of the arr to the one selected from the outer loop
        for (let low = 0; low < high; low++){
            //if the element before is greater than the one ahead, then swap the two
            // this allows the largest elements to "bubble" up to the end of the array
            if (arr[low] > arr[low+1]){
                swap(arr, low, low+1);
                //push the indices of the swapped elements and their values to the visual index arr for visualization
                visualIndexArr.push({l: low, r: low+1, heightL: arr[low], heightR: arr[low+1]})
                visualIndexArr.push({l: low, r: low+1, heightL: arr[low], heightR: arr[low+1], colorBack: true}) //color back, to indicate that an element has been iterated over
            }
        }
    }
}

export default bSort