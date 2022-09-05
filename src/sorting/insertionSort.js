const iSort = (bars, barSize) => {
    if (bars.length <= 1) return bars

    const visualIndexArr = []
    insertionSort(barSize, bars, visualIndexArr)
    return visualIndexArr;
}

const insertionSort = (length, arr, visualIndexArr) => {
    for (let i = 1; i < length; i++){
        let temp = arr[i]
        let j = i - 1

        //if element at arr[i-1] is greater than arr[i], move it up
        // repeat this process for all elements from arr[0...i-1] if greater than arr[i]
        while (j >= 0 && arr[j] > temp){
            arr[j+1] = arr[j]
            visualIndexArr.push({l: j, r: j+1, heightL: arr[j], heightR: arr[j+1]})
            visualIndexArr.push({l: j, r: j+1, heightL: arr[j], heightR: arr[j+1], colorBack: true})
            j--;
        }

        arr[j+1] = temp
        visualIndexArr.push({l: j+1, r: i, heightL: arr[j+1], heightR: arr[temp]})
        visualIndexArr.push({l: j+1, r: i, heightL: arr[j+1], heightR: arr[temp], colorBack: true})
    }
}

export default iSort;