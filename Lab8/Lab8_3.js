Array.prototype.mysort = function (){
    let arr = this;
    let len = arr.length;
    for(let i = len - 1; i >= 0; i--){
        for(let j = 1; j <= i; J++){
            if(arr[j-1] > arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log([7,5,2,4,3,9].mysort());