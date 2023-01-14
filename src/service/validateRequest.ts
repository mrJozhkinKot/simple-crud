export const validateRequest = (obj: object) => {
    const validKeys = ['username', 'age', 'hobbies']
    let valid = true
    validKeys.forEach((key) => {
        if (!obj.hasOwnProperty(key)) {
            valid = false
        }
    })
    Object.keys(obj).forEach((key) => {
        if (!validKeys.includes(key)) {
            valid = false
        }
    })
    return valid
}