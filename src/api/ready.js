export default function ready(callback) {
    this.bind('load', callback)
}