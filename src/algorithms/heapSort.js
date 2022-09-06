import { swap } from "../utility/swap";

const hSort = (bars, barSize) => {
    if (bars.length <= 1) return bars

    const visualIndexArr = []
    heapSort(barSize, bars, visualIndexArr)
    return visualIndexArr;
}

const heapSort = (length, arr, visualIndexArr) => {
    // console.log("before heapify: ", arr)
    //heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--){
        heapify(length, i, arr, visualIndexArr);
    }
    // console.log("after heapify: ", arr)
    
    // One by one extract an element from heap
    for (let i = length - 1; i > 0; i--) {
        // Move current root to end
        swap(arr, 0, i)
        visualIndexArr.push({l: 0, r: i, heightL: arr[0], heightR: arr[i]})
        visualIndexArr.push({l: 0, r: i, heightL: arr[0], heightR: arr[i], colorBack: true})

        // call max heapify on the reduced heap
        heapify(i, 0, arr, visualIndexArr);
    }
}

const heapify = (length, index, arr, visualIndexArr) => {
    // Find largest among root, left child and right child
    let largest = index; // Initialize largest as root
    let l = 2 * index + 1;
    let r = 2 * index + 2; 

    // If left child is larger than root
    if (l < length && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < length && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest !== index) {
        swap(arr, index, largest)
        visualIndexArr.push({l: index, r: largest, heightL: arr[index], heightR: arr[largest]})
        visualIndexArr.push({l: index, r: largest, heightL: arr[index], heightR: arr[largest], colorBack: true})

        // Recursively heapify the affected sub-tree
        heapify(length, largest, arr, visualIndexArr);
    }
}



export default hSort