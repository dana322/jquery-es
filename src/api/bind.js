import {SYM_NODE_LIST} from '../utils/symbol'

export default function bind(key, eventCallback) {
    this[SYM_NODE_LIST].forEach(item => {
        item.addEventListener(key, eventCallback)
    })
}