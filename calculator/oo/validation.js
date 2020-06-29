// Process of validation the numbers/operations 

import exit from './wayout.js'

class validate {
    constructor(txt, operation='', values='') {
        this.txt = txt
        this.operation = operation
        this.values = values
        //console.log('Validação');
        //console.log(`txt = ${txt} \noperation = ${operation} \nvalues = ${values} \nresult = ${result}  `);
    }

    test(){
        console.log('Validação - tentar validar');
        let n = this.txt.length
        if (n == 0) {    // Verificar se algum valor foi digitado
            //console.log('Sem digito');
            this.notnumber = 1
            return ['', this.values,false]
        } else if (this.txt == '.') {
            //console.log('Apenas ponto');
            this.notnumber = 1
            return ['', this.values, false]
        } else {
            //console.log('Validado');
            this.values.push(Number(this.txt))
            this.txt = ''
            let disp = new exit(this.txt)
            disp.numbNow()
            //display.innerHTML = `${txt}`    // Caso tenha sido o primeiro valor digitado, limpa a tela ***
            return [this.txt, this.values, true]
        }
    }

    historic(){
        let histExit = new exit(this.txt, this.operation, this.values)
        let ret = histExit.operators()
        return ret
    }
}

export default validate

/*export default function validar_numero () {    // Check that a number has been entered
    if (newcount == 1) {            // Utilizar o valor da conta anterior para iniciar uma nova conta
        values = []     // Rest values
        pos_val = 0
        operation = []
        pos_op = 0
        newcount = 0

        values[pos_val] = result    // Validate
        pos_val += 1
        txt = ''
        display.innerHTML = `${txt}`    // Caso tenha sido o primeiro valor digitado, limpa a tela ***
        result = 0
        return true

    } else {
        let n = txt.length
        if (n == 0) {    // Verificar se algum valor foi digitado
            notnumber = 1
        } else if (txt == '.') {
            notnumber = 1
        } else {
            values[pos_val] = Number(txt)
            pos_val += 1
            txt = ''
            display.innerHTML = `${txt}`    // Caso tenha sido o primeiro valor digitado, limpa a tela ***
            return true
        }
    }
}*/