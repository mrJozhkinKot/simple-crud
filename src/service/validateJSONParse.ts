export const validateJSONParse = (str: string) => {
    try {
        JSON.parse(str)
    } catch {
        return false
    }
    return true
}