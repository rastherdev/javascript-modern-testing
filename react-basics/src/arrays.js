const array = new Array();
array.push('asd');
console.log(array);
console.log("==========");

const array2 = [];
console.log(array2);
array2.push(1);
array2.push(2);
console.log(array2);

const array3 = [...array2, 5];
console.log(array3);

const array4 = array3.map( function (number) {
    return number*2;
});
console.log(array4);
