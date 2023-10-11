// ex1
// let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum=0;
// for (let i= 0; i < arr.length; i++) {
//     sum +=arr[i];
    
// }
// console.log("Tổng các phần tử trong mảng là:" +sum);





// ex2
// let arr1 = [1, 5, 7, 9];
// let max = arr1[0];
// for (let i = 0; i < arr1.length; i++) {
//     if ( arr1[i]> max ) {
//         max = arr1[i];
//     }  
// } console.log(max);


// ex3
// let arr1 = [1, 5, 7, 9];
// let min = arr1[0];
// for (let i = 0; i < arr1.length; i++) {
//     if ( arr1[i]< min ) {
//         min = arr1[i];
//     }  
// } console.log(min);

// ex4
// let arr=[2, 4, 6, 7];
// let p= +prompt("Nhập một số");
// let check=false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]===p) {
//         check=true;
//         break;
        
//     }
    
// }if (check) {
//     console.log(true);
// } else{
//     console.log(false);
// }


// ex5

// let arr=[5, 4, 3, 2, 1];
// arr.reverse();
// console.log(arr);


// ex6

// let arr=[1, 2, 4, 5, 8, 9];
// let mang=[];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2===0) {
//         mang.push(arr[i]);
        
//     }
    
// } console.log(mang);

// ex7
// let arr=[1,2,3,2,4,5,4,8];
// let p= +prompt("Nhập một số");
// let dem = 0;
//  for (let i= 0; i < arr.length; i++) {
//     if (arr[i]===p) {
//         dem++
//     }
    
//  }console.log(dem);





// ex8
var arr = [5, 2, 9, 1, 5, 6, 3, 8, 4, 7];

var doDai = arr.length;
var temp;

for (var i = 0; i < doDai - 1; i++) {
  for (var j = 0; j < doDai - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Mảng sau khi sắp xếp tăng dần: " + arr);




