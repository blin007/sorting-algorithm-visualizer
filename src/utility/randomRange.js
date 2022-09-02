const randomRange = (max) => {
    //min = 1 by default
    const min = 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default randomRange;