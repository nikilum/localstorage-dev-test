import Vue from "vue"
import Vuex from 'vuex'

import elements from "@/store/elements";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {elements}
})
