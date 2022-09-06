import { swap } from "../utility/swap";

const bSort = (bars, barSize) => {
    if (bars.length <= 1) return bars

    const visualIndexArr = []
    bubbleSort(barSize, bars, visualIndexArr)
    return visualIndexArr;
}

const bubbleSort = (length, arr, visualIndexArr) => {
    for (let high = length - 1; high > 0; high--){
        for (let low = 0; low < high; low++){
            if (arr[low] > arr[low+1]){
                swap(arr, low, low+1);
                visualIndexArr.push({l: low, r: low+1, heightL: arr[low], heightR: arr[low+1]})
                visualIndexArr.push({l: low, r: low+1, heightL: arr[low], heightR: arr[low+1], colorBack: true})
            }
        }
    }
}

export default bSort