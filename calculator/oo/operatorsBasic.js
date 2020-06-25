// functions Basics (operators)
// actions  
import { saida } from './wayout'

export function division() {
    let val = validar_numero()
    if (val == true) {                  //  Se o número for válido, insere o operador
        operadores('div', 1)
    } else {
        if (pos_op != 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('div', -1)
        }
    }
    saida()
}

export function multiplication() {
    let val = validar_numero()
    if (val == true) {                  //  Se o número for válido, insere o operador
        operadores('mult', 1)
    } else {
        if (pos_op != 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('mult', -1)
        }
    }
    saida()
}

export  function percent() {
    let val = validar_numero()
    if (val == true) {                  //  Se o número for válido, insere o operador
        operadores('percent', 1)
    } else {
        if (pos_op != 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('percent', -1)
        }
    }
    saida()
    // notnumber = 2 //Error - Not Running
    // saida()
}

export  function soma() {
    let val = validar_numero()
    if (val == true) {                  // Se o número for válido, insere o operador
        operadores('sum', 1)
    } else {                            // Se o número Não for válido, verifica se existe oprador
        if (pos_op != 0) {              // Caso exista, troca ele
            operadores('sum', -1)
        }
    }
    saida()
}

export  function subtraction() {
    let val = validar_numero()
    if (val == true) {                  //  Se o número for válido, insere o operador
        operadores('subtraction', 1)
    } else {
        if (pos_op != 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('subtraction', -1)
        }
    }
    saida()
}

function operadores(op, ac) {   // Insertion of the operators in the right place
    if (op == 'sum') {
        if (ac != '-1') {
            operation[pos_op] = ' + '
            pos_op += 1
        } else {
            operation[pos_op-1] = ' + '
        }
    } else if (op == 'subtraction') {
        if (ac != '-1') {
            operation[pos_op] = ' - '
            pos_op += 1
        } else {
            operation[pos_op-1] = ' - '
        }
    } else if (op == 'div') {
        if (ac != '-1') {
            operation[pos_op] = ' / '
            pos_op += 1
        } else {
            operation[pos_op-1] = ' / '
        }
    } else if (op == 'mult') {
        if (ac != '-1') {
            operation[pos_op] = ' * '
            pos_op += 1
        } else {
            operation[pos_op-1] = ' * '
        }
    } else if (op == 'percent')  {
        if (ac != '-1') {
            operation[pos_op] = '% '
            pos_op += 1
        } else {
            operation[pos_op-1] = '% '
        }
    }
} 