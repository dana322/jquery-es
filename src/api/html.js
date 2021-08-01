import {SYM_NODE_LIST} from '../utils/symbol'

export default function html(text) {
    if (text === undefined) {
        return this[SYM_NODE_LIST][0].innerHTML
    } else {
        this[SYM_NODE_LIST].forEach(item => item.innerHTML = text)
        return this
    }
}