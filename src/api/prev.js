import {SYM_NODE_LIST} from '../utils/symbol' 
import $ from '../index'

export default function (selector) {
    const newObj = $()
    const elHashTable = selector ? new Set(newObj.find(selector)[SYM_NODE_LIST]) : undefined
    newObj[SYM_NODE_LIST] = this[SYM_NODE_LIST]
        .reduce((NodeList, nodeItem) => {
            let nextEl = nodeItem.previousSibling
            while (nextEl && nextEl.nodeType !== 1) {
                nextEl = nextEl.previousSibling
            }
            if (!elHashTable || elHashTable.has(nextEl)) {
                return NodeList.concat(nextEl)
            } else {
                return NodeList
            }
        }, [])
    
    return newObj
} 