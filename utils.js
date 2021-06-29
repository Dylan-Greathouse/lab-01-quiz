export function isYes(word){
    
    word = word.toLowerCase();

    if (word === 'yes' || word === 'y' || word === 'yas'){
        return true;
    } else {
        return false;
    }
}

export function isNo(word){
    
    word = word.toLowerCase();

    if (word === 'no' || word === 'n' || word === 'nah'){
        return true;
    } else {
        return false;
    }
}



export function isLastName(word){
    //logic to determine the user input should count as a yes
    // return true or false

    word = word.toLowerCase();
    if (word === 'greathouse'){
        return true;
    } else {
        return false;
    }
}

export function isAge(num){
    //logic to determine the user input should count as a yes
    // return true or false
    if (num === '26'){
        return true;
    } else {
        return false;
    }
}

export function isCatOrDog(word){
    //logic to determine the user input should count as a yes
    // return true or false
    word = word.toLowerCase();
    if (word === 'cat'){
        return true;
    } else {
        return false;
    }
}

export function isPetName(word){
    //logic to determine the user input should count as a yes
    // return true or false
    word = word.toLowerCase();
    if (word === 'latte'){
        return true;
    } else {
        return false;
    }
}