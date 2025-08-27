//for loop

for(let i = 1; i <= 5; i++) {
console.log("Number:" + i)
}

//while loop

let count =1;
while (count<=3){
    console.log("count is " + count);
    count++;
}

//Arrays

let fruits = ["Apple", "Grapes","Mang0"];

//Accesing
console.log(fruits[0]);  

//lenght
console.log("Total fruits:", fruits.length);

//Looping thru Array

for (let fruit of fruits){
    console.log(fruit);
}

//Exercise day3

for(let i=1; i<= 10; i++){
    console.log("Number:" +i);
}


//sum of numbers from 1 to 10


let sum = 0;
for(let i=1; i<=10;i++){
    sum += i;
}
console.log("sum is:",sum);


