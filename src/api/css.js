import {SYM_NODE_LIST} from '../utils/symbol'

export default function css(propertyName, value) {
    if (typeof propertyName !== 'undefined' && typeof value === 'undefined') {
        if (typeof propertyName === 'string') {
            return window.getComputedStyle(this[SYM_NODE_LIST][0], null).getPropertyValue(propertyName)
        }
        if (propertyName instanceof Array) {
            let arr = []
            propertyName.forEach((item, index) => {
                arr.push(window.getComputedStyle(this[SYM_NODE_LIST][0], null).getPropertyValue(item[index]))
            })
            return arr
        }
        if (!(propertyName instanceof Array) && typeof propertyName === 'object') {
            Object.keys(propertyName).forEach(prop => {
                this[SYM_NODE_LIST].forEach(item => item.style[prop] = propertyName[prop])
            })
        }
        return this
    }
    if (typeof propertyName !== 'undefined' && typeof value !== 'undefined') {
        this[SYM_NODE_LIST].forEach(item => item.style[propertyName] = value) 
        return this
    }
}