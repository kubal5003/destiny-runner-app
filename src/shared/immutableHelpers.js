export function immutableReplace(array, element, match) {
    let newArray = array.slice();
    let idx = newArray.findIndex(match);
    if(idx !== -1){
        newArray[idx] = element;
    } else {
        newArray.push(element);
    }
    return newArray;
}