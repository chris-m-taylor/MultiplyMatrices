jQuery(document).ready(function($){
    console.log("hello");

    let rows1 = 3;
    let columns1 = 2;
    let html = '';

    let rows2 = 2;
    let columns2 = 2;

    html += '<h2>matrix1</h2>';
    html += '<div style="display: grid; grid-template-columns: repeat('+columns1+', 1fr);">';
    for (let i=0; i<rows1; i++) //iterate through rows
    {
        //iterate through columns
        for (let j=0; j<columns1; j++)
        {
            html += '<input name="matrix1['+i+']['+j+']">';
        }
    }
    html += '</div>';

    //output to form
    //let form = document.querySelector('#matrix-form');
    $('#matrix-form').append(html);
    //form.innerHTML = html1;

    html = '';
    html += '<h2>matrix2</h2>';
    html += '<div style="display: grid; grid-template-columns: repeat('+columns1+', 1fr);">';
    

    for (let i=0; i<rows2; i++) //iterate through rows
    {
        //iterate through columns
        for (let j=0; j<columns2; j++)
        {
            html += '<input name="matrix1['+i+']['+j+']">';
        }
    }
    html += '</div>';


    $('#matrix-form').append(html);





    let matrix1 = [[1, 2, 3], [4, 5, 6]]; // each sub array is a row //2x3
    let matrix2 = [[3, 4], [4, 4], [5, 6]]; // identity matrix
    let matrix3 = [[],[],[]];


    let product = 0;
    let sum = 0;

    // loop through the rows of matrix 1
    for (let i=0; i<matrix1.length; i++){


        // loop through the columns of matrix 2
        for (let j=0; j<matrix2.length; j++){

            // loop through that one row and one column
            for (let k=0; k<matrix2.length; k++){
                //console.log(k);
                product = matrix1[i][k] * matrix2[k][j];
                
                //console.log(product);
                sum = sum + product;
            }
            
            // set correct position to the total
            matrix3[i].push(sum);
            sum = 0;
        }
    }
    console.table(matrix1);
    console.table(matrix2);
    console.table(matrix3);
    
});     
        