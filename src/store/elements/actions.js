import elements from "../../logic/elements";

export default {
    LOAD_ELEMENTS({commit}) {
        const data = elements.getSavedElements()

        if (!data) {
            return
        }

        commit('SET_ELEMENTS', data)
    },
    CREATE_ELEMENTS({commit, state}, count) {
        for (let i = 0; i < count; i++) {
            commit('SET_ELEMENTS', elements.generateElement())
        }

        elements.saveElements(state.elements)
    },
    DELETE_ELEMENTS({commit}) {
        commit('DELETE_ELEMENTS')
        elements.deleteElements()
    }
}