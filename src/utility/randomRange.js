const randomRange = (max) => {
    //min = 5 by default (having a min of 1 is too small to be visible)
    const min = 5;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default randomRange;