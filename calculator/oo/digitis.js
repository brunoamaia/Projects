// Insert the value of the number pressioned
// 

class digit {
    constructor(numb, hist) {
        this.numb = numb
        this.hist = hist
    }
    
    value() {
        console.log(`numero = ${this.numb}; histórico = ${this.hist}`);
        switch (this.numb) {
            case 0:
                return this.hist += 0
            case 1:
                return this.hist += 1
            case 2:
                return this.hist += 2
            case 3:
                return this.hist += 3
            case 4:
                return this.hist += 4
            case 5:
                return this.hist += 5
            case 6:
                return this.hist += 6
            case 7:
                return this.hist += 7
            case 8:
                return this.hist += 8
            case 9:
                return this.hist += 9
        }
    }
}

export { digit }

/*
const value = function (cond) {
    console.log(`chamou modulo`);
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

export  { 
    value
} */