import {SYM_NODE_LIST} from '../utils/symbol'

export default function add(para) {
    document.querySelectorAll(para).forEach(item => {
        this[SYM_NODE_LIST].push(item)
    })
    return this
}