function calculate(arrA) {
    let arrB = [];
    let value = 1;
    let zero = 0;
    let flag = false;
    for(let i=0; i<arrA.length; i++) {
        if(arrA[i] !== 0) {
            value *= arrA[i];
        } else {
            flag = true;
        }
    }
    for(let i=0; i<arrA.length; i++) {
        if(flag) {
            if(arr[i] === 0) {
                arrB.push(value);
            } else {
                arrB.push(zero);
            } 
        } else {
            arrB.push(value / arrA[i]);
        }        
    }
    return arrB;
}
calculate([2,0,5,9,0]); //90