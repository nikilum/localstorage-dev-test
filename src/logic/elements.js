import {shuffleString} from "@/util/shuffleString";

const GENERATOR_SOURCE_STRING = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

export default {
    generateElement() {
        let stringToShuffle = GENERATOR_SOURCE_STRING

        while (stringToShuffle.length < 100) {
            stringToShuffle += stringToShuffle
        }

        return shuffleString(stringToShuffle).substring(0, 100)
    },

    saveElements(elements) {
        window.localStorage.elements = JSON.stringify(elements)
    },

    deleteElements() {
        delete window.localStorage.elements
    },

    getSavedElements() {
        const elements = window.localStorage.elements

        if (!elements) {
            return null
        }

        return JSON.parse(elements)
    }
}