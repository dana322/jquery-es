import {SYM_NODE_LIST} from '../utils/symbol' 
import $ from '../index'

export default function (selector) {
    const newObj = $()
    const elHashTable = selector ? new Set(newObj.find(selector)[SYM_NODE_LIST]) : undefined
    newObj[SYM_NODE_LIST] = this[SYM_NODE_LIST]
        .reduce((nodelist, nodeItem) => {
            let nextEl = nodeItem.previousSibling
            while (nextEl) {
                if (nextEl.nodeType === 1 && (!elHashTable || elHashTable.has(nextEl))) {
                    nodelist = nodelist.concat(nextEl)
                }
                nextEl = nextEl.previousSibling
            }   
            return nodelist
        }, [])
    return newObj
}