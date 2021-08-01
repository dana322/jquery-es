export default function ready(eventCallback) {
    this.bind('load', eventCallback)
}