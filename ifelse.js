function ifElse() {
    let number = [];
    number = [1,2,4,5,1,2,9];
    if(number[0] > number[1]){
        console.log('Correct');
    }
    else if(number[0] == number[5]){
        console.log('Partially Correct');
    }
    else{
        console.log('Incorrect');
    }
}
ifElse();