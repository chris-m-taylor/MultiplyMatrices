console.log("hello");

let matrix1 = [[1, 4], [2, 5], [3, 6]]; // each sub array is a row 
let matrix2 = [[2, 0], [0, 2]]; // identity matrix
let matrix3 = [[],[],[]];
console.table(matrix1);
console.table(matrix2);

let product = 0;
let sum = 0;

// loop through the rows of matrix 1
for (let i=0; i<matrix1.length; i++){


    // loop through the columns of matrix 2
    for (let j=0; j<matrix2.length; j++){

        // loop through that one row and one column
        for (let k=0; k<matrix2.length; k++){
            //console.log(k);
            product = matrix1[i][k] * matrix2[j][k];
            
            //console.log(product);
            sum = sum + product;
        }
        
        // set correct position to the total
        matrix3[i].push(sum);
        sum = 0;
    }
}
console.table(matrix3);
    
        
        