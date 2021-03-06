import Core from './core.js'
import {version} from '../package.json'

export default function entry(arg) {
    if (typeof arg === 'function') {
        (new Core(document)).ready(arg)
    } else if (arg === undefined) {
        return new Core()
    } else {
        return new Core(arg)
    }
}

entry.version = version
