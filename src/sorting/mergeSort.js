const sort = (array) => {
    //base
    if (array.length <= 1) return array;

    //create shallow copy of array
    const temp = array.slice()

    //init array to keep tracks of sort indices for visualizer
    const visualIndex = [];

    mergeSort(0, array.length, array, temp, visualIndex);

    return visualIndex;
}


const mergeSort = (left, right, arr, temp) => {
    //base
    if (left === right) return;

    //get mid point
    const mid = Math.floor((left + right) / 2);

    // console.log("array: ", arr);

    // console.log("left at beginning: ", left);
    // console.log("mid at beginning: ", mid);
    // console.log("right at beginning: ", right);

    //sort
    mergeSort(left, mid, temp, arr);
    mergeSort(mid+1, right, temp, arr);

    // console.log("left in merge sort: ", left);
    // console.log("right in merge sort: ", right);
    merge(left, mid, right, arr, temp);
}

const merge = (left, mid, right, arr, temp) => {
    let index = left;
    let jndex = mid + 1;
    let counter = left;
    
    // console.log("index at beginning: ", index);
    // console.log("jndex at beginning: ", jndex);
    // console.log("counter at beginning: ", counter);
    while(index <= mid && jndex <= right) {
        console.log("keeping track of indices******")
        console.log("index: ", index)
        console.log("jndex: ", jndex)
        console.log("counter: ", counter)

        //populate visual index array

        if (temp[index] <= temp[jndex]){
            // console.log("left in if: ", left);
            
            // temp.push(left[index])
            arr[counter] = temp[index];
            // console.log('pushed to temp: ', temp);
            index++;
        }
        else {
            // console.log("right in if: ", right)
            // temp.push(right[jndex])
            arr[counter] = temp[jndex];
            // console.log("pushed to temp: ", temp)
            jndex++;
        }
        counter++;
    }

    //append remaining items in to arr
    if (index <= mid) jndex = index; //right subarray finished so set jndex to left index

    // while (index <= mid) {
    //     arr[counter] = temp[index]
    //     index++
    //     counter++
    // }

    // while (jndex <= right) {
    //     arr[counter] = temp[jndex]
    //     jndex++
    //     counter++
    // }
    while (counter <= right) {
        arr[counter] = temp[jndex];
        jndex++;
        counter++;
    }

    // return temp.concat(left.slice(index)).concat(right.slice(jndex));
}

export default mergeSort;

/**
 * [163, 500, 642, 423, 8, 228, 613, 310, 579, 198, 246, 523, 413, 439, 639, 221, 279, 539, 94, 137, 226, 487, 263, 371, 97, 41, 413, 50, 434, 562, 89, 698, 111, 301, 606, 541, 407, 61, 503, 25, 684, 556, 445, 534, 115, 671, 513, 639, 364, 214, 566, 641, 250, 39, 530, 433, 280, 547, 272, 48, 312, 270, 219, 46, 431, 438, 354, 425, 143, 697, 387, 511, 161, 369, 365, 564, 666, 167, 608, 319, 111, 374, 433, 172, 683, 675, 524, 648, 148, 382, 72, 28, 314, 331, 477, 369, 367, 304, 611, 124]
 */

/**
 * [163, 500, 566, 641, 250, 39, 530, 433, 280, 547, 272, 48, 312, 270, 219, 46, 431, 438, 354, 425, 143, 642, 423, 8, 228, 613, 310, 579, 198, 246, 523, 413, 439, 639, 221, 279, 539, 94, 137, 226, 487, 263, 371, 97, 41, 413, 50, 434, 562, 89, 697, 387, 511, 161, 369, 365, 564, 666, 167, 608, 319, 111, 374, 433, 172, 683, 675, 524, 648, 148, 382, 72, 28, 314, 331, 477, 369, 367, 304, 611, 124, 698, 111, 301, 606, 541, 407, 61, 503, 25, 684, 556, 445, 534, 115, 671, 513, 639, 364, 214]
 */