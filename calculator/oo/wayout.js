// Control and formatation of values for the primary display and historic
// saida - control of the Principal display
// lista - control of the Second display (historic)

var display = document.querySelector('div#display')
var histor = document.querySelector('div#history')

class exit {
    constructor( txt, operation='', values='', result='', notnumber=0 ) {
        this.operation = operation
        this.result = result
        this.txt = txt
        this.values = values
        this.notnumber = notnumber
        console.log('Saida');
        //console.log(`txt = ${txt} \noperation = ${operation} \nvalues = ${values} \nresult = ${result}  `);
    }

    numbNow() {
        display.innerHTML = `${this.txt}`
    }

    operation() {

    }
}

export default exit

/*export default function saida () {             // Control of the information that will be shown
    let n = String(result)
    
    if (notnumber == 1) {
        display.innerHTML = 'Insira um valor!'
    } else if (notnumber == 2 ){
        display.innerHTML = 'not running!'
    } else if (notnumber == 3 ){
        display.innerHTML = `${result}`
    } else {
        display.innerHTML = `${txt}`
    }
    
    // // Inserir setas para valores muito grandes
    /*if (n.length > 4) {    
        arrowu.innerHTML = '<button onclick="movlefup()"> <img src="./src/chevron-left.svg" alt="to move for left"> </button></div> <br>'
        arrowu.innerHTML += '<button onclick="movrigup()"> <img src="./src/chevron-right.svg" alt="to move for right"> </button></div>'
    } else {
        arrowu.innerHTML = ''
    } */
/*
    notnumber=0
    lista()
}

function lista() {              // Historic of the operations 
    let n = values.length
    let m = operation.length
    let resp = '' 
    if (n ==0 && m == 0) {
        resp = ''
    }else if (n > m) {
        for (let i = 0; i < m; i++) {
            resp += values[i] + operation[i]
        }
        resp += values[n-1]
    } else {
        for (let i = 0; i < n; i++) {
            resp += values[i] + operation[i]
        }
    }

    // // Inserir setas para quano o histórico estiver muito grande
    /* //info.innerHTML = `Saida do historico = ${resp.length}`
   let g = String(resp)
    if (g.length > 20 ) {
        arrowd.innerHTML = '<button onclick="movlefdown()"> <img src="./src/chevron-left.svg" alt="to move for left"> </button></div> <br>'
        arrowd.innerHTML += '<button onclick="movrigdown()"> <img src="./src/chevron-right.svg" alt="to move for right"> </button></div>'
    } else { 
        arrowd.innerHTML = ''
    }*/
/*
    histor.innerHTML = `${resp}`
} */