export function abbreviateNum(num) {
    let newValue =  Number(num);
    const suffixes = ["", "k", "m", "b", "t"];
    let suffixNum = 0;
    while (newValue >= 1000) {
        newValue /= 1000;
        suffixNum++;
    }
    newValue = newValue.toFixed(2);
    newValue += suffixes[suffixNum];
    return newValue;
}


export function decimalNum(num) {
    return num.toFixed(2).match(/^-?\d*\.?0*\d{0,2}/)[0];
}

export function unDecimalNum(num) {
    return num.toFixed().match(/^-?\d*\.?0*\d{0,2}/)[0];
}


export function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function fullNum(num) {
    let value = Number(num)
    let FinalNum = decimalNum(value)
    return addCommas(FinalNum)
}

export function unDecimalfullNum(num) {
    let value = Number(num)
    let FinalNum = unDecimalNum(value)
    return addCommas(FinalNum)
}

export function twoDecimal(num) {
    let value = Number(num)
    return value.toFixed(2)
}

export function threeDecimal(num) {
    let value = Number(num)
    return value.toFixed(3)
}


// export function decimalNum(num) {
//    const value = Number(num) 
//    if (num < 0.00009) {
//        return value.toFixed(6)
//    } else if (value < 0.0009) {
//        return value.toFixed(5)
//    } else if (value < 0.009) {
//        return value.toFixed(4)
//    } else if (value < 0.09) {
//        return value.toFixed(3)
//    } else if (value < 0.9) {
//        return value.toFixed(2)
//    } else if (value > 0.9) {
//        return value.toFixed(2)
//    } else {
//        return "-"
//    }
// }
