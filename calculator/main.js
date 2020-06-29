// import class    =>  import class from 'arq.js'
// import function =>  import { func } from 'arq.js'

// Import functions fromd modules
import digit from './oo/digitis.js';
import operBasic from './oo/operatorsBasic.js'
/*import { point, resulte, signal } from './OO/operatorsSecond.js'
import { clearAll, clearElement } from './OO/clear.js';
import { validar_numero } from './OO/validation.js' */


// Create vars 
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

// Function for Basic Operators 
let division = document.querySelector('.division')
let multiplication = document.querySelector('.multiplication')
let percent = document.querySelector('.percent')
let subtraction = document.querySelector('.subtraction')
let sum = document.querySelector('.sum')

sum.addEventListener('click', () => {
    let soma = new operBasic(txt, operation, values, result)
    soma.sum()
    console.log('Soma chamada');
})


// Function for digtis
let num0 = document.querySelector('.zero')
let num1 = document.querySelector('.one')
let num2 = document.querySelector('.two')
let num3 = document.querySelector('.three')
let num4 = document.querySelector('.four')
let num5 = document.querySelector('.five')
let num6 = document.querySelector('.six')
let num7 = document.querySelector('.seven')
let num8 = document.querySelector('.eigth')
let num9 = document.querySelector('.nine')


num0.addEventListener('click', () => {
    let num = new digit(0, txt)
    txt = num.value()
});
num1.addEventListener('click', () => {
    let num = new digit(1, txt)
    txt = num.value()
});
num2.addEventListener('click', () => {
    let num = new digit(2, txt)
    txt = num.value()
});
num3.addEventListener('click', () => {
    let num = new digit(3, txt)
    txt = num.value()
});
num4.addEventListener('click', () => {
    let num = new digit(4, txt)
    txt = num.value()
});
num5.addEventListener('click', () => {
    let num = new digit(5, txt)
    txt = num.value()
});
num6.addEventListener('click', () => {
    let num = new digit(6, txt)
    txt = num.value()
});
num7.addEventListener('click', () => {
    let num = new digit(7, txt)
    txt = num.value()
});
num8.addEventListener('click', () => {
    let num = new digit(8, txt)
    txt = num.value()
});
num9.addEventListener('click', () => {
    let num = new digit(9, txt)
    txt = num.value()
});