<template>
  <v-container>
    <h1 class="text-h4 mb-4">Панель управления элементами</h1>
    <v-card :elevation="3">
      <v-card-title>
        Управление
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="8">
            <v-input :messages="generateElementsMessage">
              <v-text-field
                  class="pt-0"
                  placeholder="Укажите кол-во элементов для генерации"
                  type="number"
                  v-model.number="itemsToGenerate"
              />
            </v-input>
          </v-col>
          <v-col cols="4">
            <v-btn
                :disabled="!itemsToGenerate || itemsToGenerate < 0"
                class="col col-12"
                color="primary"
                @click="createElements"
            >
              Сгенерировать элементы
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-input :messages="findElementsMessage">
              <v-text-field
                  class="pt-0"
                  placeholder="Введите начало строки, которую надо найти"
                  v-model="stringToFind"
              />
            </v-input>
          </v-col>
          <v-col cols="4">
            <v-btn
                class="col col-12"
                color="primary"
                :disabled="!stringToFind"
                @click="countMatches">
              Поиск
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn class="col col-12" color="error" @click="deleteElements">Удалить все элементы</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "index",
  mounted() {
    this.LOAD_ELEMENTS()
  },
  data: () => ({
    foundElementsCount: null,
    stringToFind: "",
    itemsToGenerate: null,
  }),
  computed: {
    ...mapState('elements', ['elements']),
    generateElementsMessage() {
      if(!this.elements.length) {
        return []
      }

      return [`Сейчас в сторе ${this.elements.length} элементов`]
    },
    findElementsMessage() {
      if (this.foundElementsCount === null) {
        return []
      }

      return [`Найдено ${this.foundElementsCount} элементов`]
    },
  },
  methods: {
    ...mapActions('elements', ['CREATE_ELEMENTS', 'LOAD_ELEMENTS', 'DELETE_ELEMENTS']),

    createElements() {
      const count = Number(this.itemsToGenerate)
      if (!count) {
        return
      }

      this.CREATE_ELEMENTS(count)
    },
    deleteElements() {
      this.DELETE_ELEMENTS()
    },
    countMatches() {
      let counter = 0

      this.elements.forEach((element) => {
        if (element.startsWith(this.stringToFind)) {
          counter++
        }
      })

      this.foundElementsCount = counter
    }
  }
}
</script>

<style scoped>

</style>