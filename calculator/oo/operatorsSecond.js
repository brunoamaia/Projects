// Functions 

import exit from './wayout.js'

class auxFunctions {
    constructor( txt, operation='', values='') {
        this.txt = txt
        this.operation = operation
        this.values = values
        //console.log('Funções');
        //console.log(`txt = ${txt} \noperation = ${operation} \nvalues = ${values} \nresult = ${result}  `);
    }
    
    point() {
        let n = this.txt.length
        if (this.txt.indexOf('.') == -1) {
            if (n == 0) {
                this.txt = '0.'
            } else {
                this.txt += '.'
            }
            let disp = new exit(this.txt)
            disp.numbNow()
            return this.txt
        } else {
            let error = new exit('Not Permited!')
            error.numbNow()
            return this.txt
        }
    }

    signal() {
        let aux = -1 * Number(this.txt)
        this.txt = String(aux)
        let disp = new exit(this.txt)
        disp.numbNow()
        return this.txt
    }
}
export default auxFunctions

/*
export default function point() {
    let n = txt.length
    if (txt.indexOf('.') == -1) {
        txt += '.'
       display.innerHTML = `${txt}`
    } else {
        display.innerHTML = 'Not Permited!'
    }
}

export default function resulte() {
    validar_numero()
    calculator()
    saida()
}

export default function signal() {
    txt = -1 * txt
    saida()
} */