export function capitalize(word) {
    if (!word) { // guard close
        return word;
    }


    // if (word === null || word === "") {
    //     return word;
    // }
    
    // if (word === null) {
    //     return null;
    // }
    // if (word === "") {
    //     return "";
    // }
    return `${word[0].toUpperCase()}${word.substr(1).toLowerCase()}`;
    // return word[0].toUpperCase() + 
    //     word.substr(1).toLowerCase();
}