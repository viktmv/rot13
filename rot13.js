// Caesar cipher for FreeCodeCamp
'use strict'

function rot13(str) { 
  return Array.from(str, char => {
    let code = char.toUpperCase().charCodeAt()
    if (code < 65) return char

    return String.fromCharCode(code > 77
      ? code - 13
      : code + 13
    )
  }).join('')
}

// Change the inputs below to test
rot13("OYNPX FURRC JNYY");
