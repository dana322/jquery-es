import {SYM_NODE_LIST} from '../utils/symbol' 
import Core from '../core'


export default function (selector) {
    const newObj = new Core()
    newObj[SYM_NODE_LIST] = this.prevAll(selector)[SYM_NODE_LIST].concat(this.nextAll(selector)[SYM_NODE_LIST])
    newObj.prevObject = this
    return newObj
}