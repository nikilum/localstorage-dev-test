export default {
    SET_ELEMENTS(state, data) {
        const isArray = typeof data === "object"

        if (isArray) {
            state.elements = [...state.elements, ...data]

            return
        }

        state.elements.push(data)
    },
    DELETE_ELEMENTS(state) {
        state.elements = []
    }
}