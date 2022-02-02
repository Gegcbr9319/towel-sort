
module.exports = function towelSort (matrix) {
  if (matrix === undefined)
  return [];
  let array = [];
    for (let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
        let columnIndx = i % 2 === 0
        ? j
        : (matrix[i].length - j - 1);
        array.push( matrix[i][columnIndx] );
      }
    }
    console.log(array);
    return array;
  }



