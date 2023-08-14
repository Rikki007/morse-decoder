const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const n = expr.length / 10;
    let sym = [];
    for (let i = 0; i < n; i++) {
      sym[i] = expr.slice((i * 10), ((i + 1) * 10));
    }
  
    return sym.map(item => {
      if (item === '**********') {
        return ' ';
      } else {
        let char = '';
        for (let i = 0; i < 5; i++) {
          const binNum = item.slice((i * 2), ((i + 1) * 2));
          if (binNum === '00') {
            char += '';
          } else if (binNum === '10') {
            char += '.';
          } else if (binNum === '11') {
            char += '-';
          }
        }
  
        let result = '';
        for (let key in MORSE_TABLE) {
          if (key === char) {
            result += MORSE_TABLE[key]
          }
        }
        return result.toString();
      }
    }).join('');
}

module.exports = {
    decode
}