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
                return this.hist += 8
            case 9:
                txt += 9
                display.innerHTML = `${txt}`
                break;
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