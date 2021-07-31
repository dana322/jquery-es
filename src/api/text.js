import {SYM_NODE_LIST} from '../utils/symbol'

export default function text(text) {
    if(text === undefined) {
        var str = ""
        this[SYM_NODE_LIST].forEach(item => str += item.innerText)
        return str
    } else {
        this[SYM_NODE_LIST].forEach(item => item.innerHTML = text)
        return this;
    }
}