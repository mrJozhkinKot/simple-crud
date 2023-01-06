export const validateRequest = (obj: object) => {
    let validate = true;
    Object.keys(obj).forEach((key) => {
        if ((key !== 'username') && (key !== 'age') && (key !== 'hobbies')) {
            validate = false
        }
    })
    return validate;
}