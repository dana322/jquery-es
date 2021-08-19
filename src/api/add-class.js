import {SYM_NODE_LIST} from '../utils/symbol'

export default function(arg) {
    this[SYM_NODE_LIST].forEach((elItem, index) => {
        let classNameValue
        let newClassName
        if (typeof arg === 'function') {
            classNameValue = arg(index, elItem.className)
        } else {
            classNameValue = arg
        }
        if (typeof classNameValue === 'string') {
            newClassName = classNameValue
        } else if (Array.isArray(classNameValue)) {
            newClassName = classNameValue
                .reduce((str, classItem) => classItem ? `${str ? `${str} ` : str}${classItem}` : str, '')
        } else {
            throw new Error('The parameter of the addClass is not recognized')
        }
        elItem.className = elItem.className ? `${elItem.className} ${newClassName}` : newClassName
    })
    return this
}