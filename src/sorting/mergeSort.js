//array item
// { 
//   height: ...,
//   sorted: ...,
// }
const temp = [];

const mergeSort = (left, right, array) => {
    //base
    if (left === right) return;

    //get mid point
    const mid = (left + right) / 2;

    //s
    mergeSort(left, mid, array.slice(left, mid));
    mergeSort(mid + 1, right, array.slice(mid + 1, right));
    merge(left, mid, right, array);
}

const merge = (left, mid, right, array) => {
    //copy array into temp
    array.foreach(item => {
        temp.push(item)
    })

    let index = left;
    let jndex = mid + 1;
    let h = i;
    
    
}

export default mergeSort;