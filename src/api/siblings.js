import {SYM_NODE_LIST} from '../utils/symbol' 
import $ from '../index'


export default function (selector) {
    const newObj = $()
    newObj[SYM_NODE_LIST] = this.prevAll(selector)[SYM_NODE_LIST].concat(this.nextAll(selector)[SYM_NODE_LIST])
    return newObj
}