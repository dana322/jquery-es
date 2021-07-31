import Core from './core.js'

export default function $(arg = document){
    if(typeof arg === 'function'){
        (new Core(document)).ready(arg)
    }
    return new Core(arg)
}

