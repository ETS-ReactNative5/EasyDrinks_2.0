
export const changeField = (payload, type, field = null, index = null) => {
    if (field !== null) {
        payload = { value: payload, field, index };
    }
    return { payload, type, field, index };
}
