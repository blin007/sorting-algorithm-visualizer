import { swap } from "../utility/swap"

const qSort = (bars, barSize) => {
    if (bars.length <= 1) return bars

    const visualIndexArr = []
    quickSort(0, barSize-1, bars, visualIndexArr)
    return visualIndexArr;
}

const quickSort = (left, right, arr, visualIndexArr) => {
    if (left >= right) return
    if (arr[left] < arr[right]) swap(arr, left, right)
    let pivot = arr[right]
    // visualIndexArr.push({pivot: right})
    let l = left;
    let r = right;

    do {
        swap(arr, l, r)
        // push indices and height to visual index array
        visualIndexArr.push({l, r, heightL: arr[l], heightR: arr[r]})
        visualIndexArr.push({l, r, heightL: arr[l], heightR: arr[r], colorBack: true})
        // visualIndexArr.push({l, r, heightL: arr[l], heightR: arr[r], colorDone: true})
        do{ 
            l++ 
        } while (arr[l] < pivot);
        do { 
            r-- 
        } while (arr[r] > pivot);
    } while (l < r)


    swap(arr, left, r)
    visualIndexArr.push({l: left, r, heightL: arr[left], heightR: arr[r]})
    visualIndexArr.push({l: left, r, heightL: arr[left], heightR: arr[r], colorBack: true})
    // visualIndexArr.push({l: left, r, heightL: arr[left], heightR: arr[r], colorDone: true})
    quickSort(left, r - 1, arr, visualIndexArr)
    quickSort(r + 1, right, arr, visualIndexArr)
}

// const swap = (arr, left, right) => {
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
// }

export default qSort