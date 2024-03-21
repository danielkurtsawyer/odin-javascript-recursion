function fibs(num){
  const sequence = [];
  if(num>0){
    for(let i = 0; i < num; i++){
      if(i < 2){
        sequence.push(i);
      } else {
        sequence.push(sequence[i-2]+sequence[i-1]);
      }
    }
    return sequence;
  } else {
    return 'invalid input. Must be a positive integer greater than 0';
  }
}

console.log(fibs(-1));
console.log(fibs(8));


function fibsRec(num){
  if(num < 0){
    return 'invalid input. Must be a positive integer greater than 0';
  }
  const sequence = [];
  for(let i = 0; i < num; i++){
    sequence.push(fibsRecHelper(i));
  }
  return sequence;
}

function fibsRecHelper(num){
  // base case
  if(num <= 1){
    return num;
    // recursive case
  } else {
    return fibsRecHelper(num-1) + fibsRecHelper(num-2);
  }
}

console.log(fibsRec(8));