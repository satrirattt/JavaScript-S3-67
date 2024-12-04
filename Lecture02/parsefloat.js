function circumference(r){
    if (Number.isNaN(Number.parseFloat(r))){
        return 0;
    }
    return parseFloat(r ) * 2.0 * Math.PI;
}

console.log(circumference("4.567abcdfgh"));
//

console.log(circumference("abcdefgh"));
//