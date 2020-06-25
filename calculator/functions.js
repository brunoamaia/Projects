// import class    =>  import class from 'arq.js'
// import function =>  import { func } from 'arq.js'

// Import functions fromd modules
import { numb } from './OO/digitis'
import { division, multiplication, percent, soma, subtraction } from "./OO/operatorsBasic"
import { point, resulte, signal } from './OO/operatorsSecond'
import { clearAll, clearElement } from './OO/clear';
import { validar_numero } from './OO/validation'
import { saida } from './OO/wayout'


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


