export const mapCharacter = (response) => {
    let result = {};
    if (response.name) {
        Object.assign(result, {
            name: response.name
        })
    }
    if (response.gender) {
        Object.assign(result, {
            gender: response.gender
        })
    }
    if (response.eye_color) {
        Object.assign(result, {
            eye_color: response.eye_color
        })
    }
    return result;
}