//task 1

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i]  + '</br>');
}


//task 2

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] > -10 && arr2[i] < -3) { 
        console.log(arr2[i]);  
    }  
}

//task 3

let arr3 = [],
    result = 0;
    
for (let i = 23; i <= 57; i++) {
    result += i;
    arr3.push(i);
}
console.log(arr3);
console.log(result);

// заполнение массива значениями с помощью while
{
 let arr3 = [],
    i = 23;
while (i <= 57) {
    arr3.push(i);
    i++
}
console.log(arr3);
   
}



//task 4

let arr4 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arr4.length; i++){
    let num = arr4[i];
    let b = num[0]; 
    if (b == 3 || b == 7 || b == 5) {
    console.log(num);
    }
}

//task 5

let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

    for (let i = 0; i < arr5.length; i++){
    arr5.splice(5, 2, '<b>СБ</b>', '<b>ВС</b>');
    document.write(arr5[i] + '</br>');
}

//task 6

let arr6 = [45, 'hi', true, 84, 670];

arr6.push(649);
    for(let i = 0; i < arr6.length; i++) {
    console.log(arr6[i]);
}
console.log(arr6.length - 1);

//task 7

let arr7 = [];
let i = 0;

while (true) {
    i = prompt('Вводите числа');
    if (i == '') break;
    arr7.push(i);
    i++;
}

document.write('Ваши числа: ' + arr7);

arr7.sort(function(a, b){
    return a - b;
});

document.write('</br>' + 'Отсортированные числа: ' + arr7);



//task 8 
{
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let i = 0; 

while (i < arr8.length) {
    console.log(arr8[i]); 
    i++; 
}
}
//или 
//console.log(arr8.reverse()); 


//task 9

let arr9 = [5, 9, 21, , , 9, 78, , , , 6],
    num = 0;
for (let i = 0; i < arr9.length; i++) {
    if (typeof arr9[i]  === 'undefined') num++;
}
console.log(num); 


//task 10

let arr10 = [1,8,0,13,76,8,7,0,22,0,2,3,2],
    sum = 0;

console.log(arr10.indexOf(0));
console.log(arr10.lastIndexOf(0));

for (let i = 0; i < arr10.length; i++) {
    if (i >= arr10.indexOf(0)) {
        while (i <= arr10.lastIndexOf(0)) {
        sum += arr10[i];
        i++;
        }
    }
}
console.log(sum);

