import $ from '../index'
import {SYM_NODE_LIST} from '../utils/symbol'

export default function ready(eventCallback) {
    if (this[SYM_NODE_LIST].length === 0) {
        $(document).bind('load', eventCallback)
    }
    this.bind('load', eventCallback)
}