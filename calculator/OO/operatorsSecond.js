// Functions 

import { saida } from './wayout'

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
}