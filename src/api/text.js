import {SYM_NODE_LIST} from '../utils/symbol'

export default function text(text) {
    if (text === undefined) {
        let str = ''
        this[SYM_NODE_LIST].forEach(item => str += item.innerText)
        return str
    } else {
        this[SYM_NODE_LIST].forEach(item => item.innerText = text)
        return this
    }
}