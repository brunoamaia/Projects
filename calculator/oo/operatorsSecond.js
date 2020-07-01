// Functions 

import exit from './wayout.js'
import validate from './validation.js'
import calculator from './calculate.js'

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

    resulte() {
        let val = new validate(this.txt, this.operation, this.values)
        let val1 = val.test()

        this.txt = val1[0]
        this.values = val1[1]
        let nVal = val1[2]
        console.log(`\nValidate => 1=${this.txt}; 2=${this.values}; 3=${nVal}`);

        if (nVal == true) {
            let calc = new calculator(this.txt, this.operation, this.values)
            this.txt = calc.operations()

            console.log(`Calculado => 1=${this.txt}`);
        } else {
            let err = new exit('Insert a Number!')
            err.numbNow()
        }

        let out = new exit(this.txt, this.operation, this.values)
        console.log(out);
        out.numbNow()
        out.operators()

        /*saida()*/
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