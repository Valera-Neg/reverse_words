function reverseWords(str) {
  return str.split('').reverse().join('').split(' ')//.reverse().join(' ')
   
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) //>  'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')) //> 'elppa'
console.log(reverseWords('a b c d')) //> 'a b c d'
console.log(reverseWords('double  spaced  words')) //> 'elbuod  decaps  sdrow'
console.log(reverseWords("This is an example!")) //> "sihT si na !elpmaxe"
console.log(reverseWords("double  spaces")) //> "elbuod  secaps"