const str = 'The quick brown fox jumps over the lazy dog.';

const worlds = str.split(' ');
console.log(worlds[3]);
//expected output: "fox"

const chars = str.split('')
console.log(chars[8]);
//expected output: "k"