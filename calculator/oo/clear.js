
import { saida } from './wayout'

export default function clearAll() {
    info.innerHTML=''
    display.innerHTML = 'Reseted!'
    histor.innerHTML = '..........'
    txt = ''
    result = 0
    values = []
    pos_val = 0
    operation = []
    pos_op = 0
    op = ''
    ac = 0
    newcount = 0
    transit1()    //Animation reseted
    setTimeout(transit2, 300)
    setTimeout(transit3, 600)
    setTimeout(transit4, 900)
    
    setTimeout(saida, 1200)
}

export default function clearElement() {
    txt = ''
    display.innerHTML = `${txt}`
}

// Functions for animation of reset
function transit1() {
    histor.innerHTML = '........'
}
function transit2() {
    histor.innerHTML = '......'
}
function transit3() {
    histor.innerHTML = '....'
}
function transit4() {
    histor.innerHTML = '..' 
}