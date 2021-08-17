import {SYM_NODE_LIST} from '../utils/symbol'
import $ from '../index'

export default function find (selector) {
    const newObj = $()
    newObj[SYM_NODE_LIST] = this[SYM_NODE_LIST]
        .reduce((nodeList, item) => nodeList.concat(...item.querySelectorAll(selector)), [])
    return newObj
}