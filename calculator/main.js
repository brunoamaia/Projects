// import class    =>  import class from 'arq.js'
// import function =>  import { func } from 'arq.js'

// Import functions fromd modules
import { digit } from './oo/digitis.js';
/*import { division, multiplication, percent, soma, subtraction } from "./OO/operatorsBasic.js"
import { point, resulte, signal } from './OO/operatorsSecond.js'
import { clearAll, clearElement } from './OO/clear.js';
import { validar_numero } from './OO/validation.js' */
/*import saida from './oo/wayout.js' */

console.log('Main - import Ok');

// Create vars 
let display = document.querySelector('div#display')
let histor = document.querySelector('div#history')
let txt = ''                // Text of display 
let result = 0              // Value/information for principal display  
let values = []             // Array of values
let pos_val = 0             // Position/range of values
let operation = []          // Array of operators
let pos_op = 0              // Position/range of operators
let op = ''     // Operation calling - sum, subtraction, division, multiplication
let ac = 0      // Operator insertion - whether it will be after or before the number
let notnumber = 0   // Information about operations : 0- normal, 1- without value,  2- not running!, 3 - result
let newcount = 0 // first number is negative                                    ************ Remove
let w = window.innerWidth;      // Width os window
var arrowu = window.document.getElementById('arrowup')
var arrowd = window.document.getElementById('arrowdown')
let info = window.document.getElementById('informations')

// Activations of modules/functions

// Digits
/*function numb(val) {
    console.log(`Ativa Numb`);
    value(val)
    console.log(`Chamada`);
}*/
console.log('Main - call functions ');

// Function for digtis
let num7 = document.querySelector('.seven')
let num8 = document.querySelector('.eigth')
let num9 = document.querySelector('.nine')

num8.addEventListener('click', () => {
    import('./oo/digitis.js').then((Module) => {
        let num = new Module.digit(8, txt)
        txt = num.value()
        display.innerHTML = `${txt}`
    })
});




/*export function numb(cond) {
    let val = Number(cond)
    switch (val) {
        case 0:
            txt += 0
            display.innerHTML = `${txt}`
            break;
        case 1:
            txt += 1
            display.innerHTML = `${txt}`
            break;
        case 2:
            txt += 2
            display.innerHTML = `${txt}`
            break;
        case 3:
            txt += 3
            display.innerHTML = `${txt}`
            break;
        case 4:
            txt += 4
            display.innerHTML = `${txt}`
            break;
        case 5:
            txt += 5
            display.innerHTML = `${txt}`
            break;
        case 6:
            txt += 6
            display.innerHTML = `${txt}`
            break;
        case 7:
            txt += 7
            display.innerHTML = `${txt}`
            break;
        case 8:
            txt += 8
            display.innerHTML = `${txt}`
            break;
        case 9:
            txt += 9
            display.innerHTML = `${txt}`
            break;
    }
}
*/


/*
for (let i = 0; i < 10; i++) {
    let su = digit(i, txt)
    txt += su
    console.log(`Main Return - txt = ${txt} => i = ${i}`);
    display.innerHTML += `${txt}`
} */

/*
[ txt, display.innerHTML = `${txt}` ] = digit(0, txt, display)
console.log(`Main - txt = ${txt} ; display = ${display}`);
digit('1', txt, display)
console.log(`Main - txt = ${txt} ; display = ${display}`);
digit('2', txt, display)
console.log(`Main - txt = ${txt} ; display = ${display}`);
digit('3', txt, display)
console.log(`Main - txt = ${txt} ; display = ${display}`);
digit('4', txt, display)
console.log(`Main - txt = ${txt} ; display = ${display}`);
digit('5', txt, display)
console.log(`Main - txt = ${txt} ; display = ${display}`);
digit('6', txt, display)
console.log(`Main - txt = ${txt} ; display = ${display}`);
digit('7', txt, display)
console.log(`Main - txt = ${txt} ; display = ${display}`);
digit('8', txt, display)
console.log(`Main - txt = ${txt} ; display = ${display}`);
digit('9', txt, display)
console.log(`Main - txt = ${txt} ; display = ${display}`); */
