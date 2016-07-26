// Caesar cipher for FreeCodeCamp
'use strict'

function rot13(str) { 
  let result = []

  str.split('').forEach(function(v, i) {
    let charCode = str.charCodeAt(i)

    if (charCode < 65)
        return result.push(newChar(charCode))    
   
    else if (charCode <= 77 )
        return result.push((newChar(charCode + 13)) 
    
    return result.push(newChar(charCode - 13) )
  })  
  return result.join('');
}

function newChar(character) {
    return String.fromCharCode(character)
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

