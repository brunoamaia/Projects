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