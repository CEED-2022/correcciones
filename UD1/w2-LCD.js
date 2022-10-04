/*

Crea un programa que, dado un número, imprima en pantalla una representación de ese número en un display LCD utilizando los caracteres — y |.
lcd(3):
 —
  |
 —
  |
 —

lcd(45)
     —
| | |
 —   —
  |   |
     —

*/

// Each element contains the lines for the corresponding number. A number has 5 lines 3 characters each.
// This is long but easy to do (you can search for LCD images for reference)
// Remember to fill with spaces when necessary
const REPRESENTATIONS = [
  // 0
  [
    '---',
    '| |',
    '   ',
    '| |',
    '---',
  ],
  // 1
  [
    '   ',
    '  |',
    '   ',
    '  |',
    '   ',
  ],
  // 2
  [
    ' - ',
    '  |',
    ' - ',
    '|  ',
    ' - ',
  ],
  // 3
  [
    ' — ',
    '  |',
    ' — ',
    '  |',
    ' — '
  ],
  // 4
  [
    '   ',
    '| |',
    ' _ ',
    '  |',
    '   ',
  ],
  // 5
  [
    ' - ',
    '|  ',
    ' - ',
    '  |',
    ' - ',
  ],
  // 6
  [
    ' _ ',
    '|  ',
    ' _ ',
    '| |',
    ' - ',
  ],
  // 7
  [
    ' - ',
    '  |',
    '   ',
    '  |',
    '   ',
  ],
  // 8
  [
    ' _ ',
    '| |',
    ' _ ',
    '| |',
    ' - ',
  ],
  // 9
  [
    ' - ',
    '| |',
    ' - ',
    '  |',
    '   ',
  ],
]

// ------------------------------------------
// Build the lines that we must print
// ------------------------------------------

const number = 123456789;

let lines = Array(5).fill('');

for (const digit of number.toString()) {
  const lcd = REPRESENTATIONS[digit]

  // Add each line of the lcd representation
  for (const index in lines) {
    lines[index] += lcd[index]
  }
}

// ------------------------------------------
// Print the lines
// ------------------------------------------
for (let line of lines) console.log(line)


/*
// Another approach could be printing each line as it's generated:

const number = 123546789;

for (let lineIndex=0; lineIndex< 5; lineIndex++) {
  let line = ''

  for (digit of number.toString() ) {
    line += REPRESENTATIONS[digit][lineIndex];
  }

  console.log(line);
}
*/

