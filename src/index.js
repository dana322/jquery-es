import Core from './core.js'
import {version} from '../package.json'

export default function entry(arg = document) {
    if (typeof arg === 'function') {
        (new Core(document)).ready(arg)
    } else {
        return new Core(arg)
    }
}

entry.version = version
