export function isElementVisible(element) {
    switch(element){
        case element === null || element === undefined:
            return false
        case element.offsetWidth || element.offsetHeight:
            return true
        default:
            return 'error'
    }
}