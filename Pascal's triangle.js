var getRow = function(rowIndex) {
    let triangle = [];
    triangle[0] = [1];
    
    for (let i = 1; i <= rowIndex; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle[i][i] = 1;
    }   
    return triangle[rowIndex];
};

console.log(getRow(17));