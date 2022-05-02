function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let dnaArr = dna.split('')
  let arr = []
  for (let i = 0; i < dnaArr.length; i++){
  
    if (dnaArr[i] ==="T"){
      dnaArr[i] = 'U'
      arr.push(dnaArr[i])
    }else{
    arr.push(dnaArr[i])
    }
  
  }
    return arr.join('')
}
