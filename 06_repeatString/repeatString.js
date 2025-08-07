const repeatString = function(word, num) {
    
    
    // while (num >= 0){
    //     string += string;
    // }
    // return string;

    if (num < 0) return "ERROR";
    let string = "";
    for (i = 0; i < num; i++){
        string += word;
    }
    return string;

};

// Do not edit below this line
module.exports = repeatString;
