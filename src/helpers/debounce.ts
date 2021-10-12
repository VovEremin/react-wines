export const debounce = (func: any, wait: number, immediate?: boolean) => {
    let timeout: any
    return (...args: any) => {
        const context = this
        const later = () => {
            timeout = null
            if (!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    };
}