const mSort = (array) => {
    //base
    if (array.length <= 1) return array;

    //create shallow copy of array
    const temp = array.slice()

    //init array to keep tracks of sort indices for visualizer
    const visualIndexArr = [];

    mergeSort(0, array.length - 1, array, temp, visualIndexArr);

    return visualIndexArr;
}


const mergeSort = (left, right, arr, temp, visualIndexArr) => {
    //base
    if (left === right) return;

    //get mid point
    const mid = Math.floor((left + right) / 2);


    // console.log("left at beginning: ", left);
    // console.log("mid at beginning: ", mid);
    // console.log("right at beginning: ", right);

    //sort
    mergeSort(left, mid, temp, arr, visualIndexArr);
    mergeSort(mid+1, right, temp, arr, visualIndexArr);

    merge(left, mid, right, arr, temp, visualIndexArr);
}

const merge = (left, mid, right, arr, temp, visualIndexArr) => {
    let index = left;
    let jndex = mid + 1;
    let counter = left;
    
    // console.log("index at beginning: ", index);
    // console.log("jndex at beginning: ", jndex);
    // console.log("counter at beginning: ", counter);
    while(index <= mid && jndex <= right) {
        // console.log("keeping track of indices******")
        // console.log("index: ", index)
        // console.log("jndex: ", jndex)
        // console.log("counter: ", counter)

        //populate visual index array
        visualIndexArr.push([index, jndex])

        if (temp[index] <= temp[jndex]){         
            const height = temp[index];
            arr[counter] = height;
            
            visualIndexArr.push([counter, height])
            // console.log('pushed to temp: ', temp);
            index++;
        }
        else {
            const height = temp[jndex];
            arr[counter] = temp[jndex];

            visualIndexArr.push([counter, height])
            // console.log("pushed to temp: ", temp)
            jndex++;
        }
        counter++;
    }

    //append remaining items in to arr
    if (index <= mid) jndex = index; //right subarray finished so set jndex to left index

    while (counter <= right) {
        const height = temp[jndex];
        arr[counter] = temp[jndex];
        visualIndexArr.push([counter, counter])
        visualIndexArr.push([counter, height])
        jndex++;
        counter++;
    }
}

export default mSort;