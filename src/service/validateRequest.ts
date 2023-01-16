import { UserInterface } from "../intefaces/interfaces"

export const validateRequest = (obj: UserInterface) => {
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
    if (obj['hobbies'].length) {
        obj['hobbies'].forEach((hobby) => {
            if (typeof(hobby) !== 'string') {
                valid = false
            }
        } )
    }
  
    return valid
}