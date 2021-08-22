import {SYM_NODE_LIST} from './utils/symbol'
import  eventList  from './utils/event-list'

import bind from './api/bind'
import ready from './api/ready'
import html from './api/html'
import text from './api/text'
import css from './api/css'
import add from './api/add'
import find from './api/find'
import next from './api/next'
import nextAll from './api/next-all'
import addClass from './api/add-class'
import prev from './api/prev'
import prevAll from './api/prev-all'
import siblings from './api/siblings'

export default class Core {
    constructor(selector) {
        if (selector === document || selector instanceof Node) {
            this[SYM_NODE_LIST] = [selector]
        } else if (selector instanceof NodeList) {
            this[SYM_NODE_LIST] = [...selector]
        } else if (typeof selector === 'string') {
            this[SYM_NODE_LIST] =  [...document.querySelectorAll(selector)]
        } else {
            throw new Error('The parameter of the $ is not recognized')
        }
    }
}


Core.prototype.bind = bind
Core.prototype.ready = ready
Core.prototype.html = html
Core.prototype.text = text
Core.prototype.css = css
Core.prototype.add = add
Core.prototype.find = find
Core.prototype.next = next
Core.prototype.nextAll = nextAll
Core.prototype.addClass = addClass
Core.prototype.prev = prev
Core.prototype.prevAll = prevAll
Core.prototype.siblings = siblings

eventList.forEach(key => {
    Core.prototype[key] = function(eventCallback) {
        this[SYM_NODE_LIST].forEach(item => item[`on${key}`] = eventCallback)
    }
})