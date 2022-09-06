import { swap } from "../utility/swap";

const hSort = (bars, barSize) => {
    if (bars.length <= 1) return bars

    const visualIndexArr = []
    heapSort(barSize - 1, bars, visualIndexArr)
    return visualIndexArr;
}

const heapSort = (length, arr, visualIndexArr) => {
    heapify(length, arr, visualIndexArr)
    for(let top = length; top > 0; top--){
        arr[top] = deleteMax(top, arr, visualIndexArr)
    }
}

const heapify = (length, arr, visualIndexArr) => {
    for (let childIndex = 1; childIndex < length; childIndex++){
        let currIndex = childIndex;
        let parentIndex = childIndex / 2;
        while (parentIndex >= 0 && arr[parentIndex] < arr[currIndex]) {
            if(parentIndex === 0) break;
            swap(arr, parentIndex, childIndex)
            visualIndexArr.push({l: parentIndex, r: currIndex, heightL: arr[parentIndex], heightR: arr[currIndex]})
            visualIndexArr.push({l: parentIndex, r: currIndex, heightL: arr[parentIndex], heightR: arr[currIndex], colorBack: true})

            //reassign indices
            currIndex = parentIndex
            parentIndex = currIndex / 2
        }
    }
}

//delete and return the max
const deleteMax = (index, arr, visualIndexArr) => {
    //at the end of heapify and each call of deleteMax, the largest element in the heap will be located at index 1
    const large = arr[1];
    const element = arr[index] //element to be relocated in arr[0...index-1] 
    let currentIndex = 0; //element will be relocated by getting assigned to this index
    let childIndex = 1;

    while (childIndex < index) {
        //first get the bigger of the 2 children nodes
        if (arr[childIndex+1] > arr[childIndex]){
            childIndex++;
        }

        //push the element down to next level if less than arr[childIndex]... childIndex < index so element will never
        // be swapped down to level past index ( arr[index...length-1] )
        if (element  < arr[childIndex]) {
            arr[currentIndex] = arr[childIndex] //set childIndex as new currentIndex 
            currentIndex = childIndex
            childIndex = 2 * currentIndex
            visualIndexArr.push({l: childIndex, r: currentIndex, heightL: arr[childIndex], heightR: arr[currentIndex]})
            visualIndexArr.push({l: childIndex, r: currentIndex, heightL: arr[childIndex], heightR: arr[currentIndex], colorBack: true})
        }
        else {
            arr[currentIndex] = element
            visualIndexArr.push({l: currentIndex, r: index, heightL: arr[currentIndex], heightR: element})
            visualIndexArr.push({l: currentIndex, r: index, heightL: arr[currentIndex], heightR: element, colorBack: true})
            return large
        }
    } //stop while loop if iterated past outside the index range

    arr[currentIndex] = element
    visualIndexArr.push({l: currentIndex, r: index, heightL: arr[currentIndex], heightR: element})
    visualIndexArr.push({l: currentIndex, r: index, heightL: arr[currentIndex], heightR: element, colorBack: true})
    return large

}

export default hSort