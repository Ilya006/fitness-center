<template>
  <HeaderVue />

  <div class="search">
    <div class="wrapper">
      <h3 class="services__title">Поиск услуг</h3>

      <div class="search__input">
        <div class="row">
          <div class="col s6 offset-s3">
            <div class="row">
              <label for="autocomplete-input" class="label">Введите название услуги</label>
              <div class="input-field col s12">
                <input
                  type="text"
                  id="autocomplete-input"
                  class="autocomplete"
                  v-model="search"
                  @focus="focused = true"
                />
                <i class="material-icons prefix search__icon" @click="onSearch"
                  >search</i
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="focused && searchHistory">
        <div class="col s6 offset-s3 history">
          <div class="row row__mr">
            <div class="col s12 history__title">Предыдущие запросы</div>
            <div 
              v-for="item in searchHistory"
              :key="item"
              class="col s12 history__item" 
              @click="onHistory"
            >
              {{item}}
            </div>
          
          </div>
        </div>
      </div>

      <button @click="onClick">Clickme</button>


    </div>
  </div>
</template>

<script>
import HeaderVue from "../components/common/Header.vue";

export default {
  name: "seatchCom",
  components: { HeaderVue },

  data: () => ({
    search: "",
    focused: false
  }),

  computed: {
    searchHistory() {
      return this.$store.getters.getSearchHistory
    },
    searchingResults() {
      return this.$store.getters.getSearchingResults
    }
  },

  methods: {
    onSearch() {
      if (this.search) {
        this.$store.dispatch("saveSearchHistory", this.search);
        this.$store.dispatch('searchServices', this.search)
      }
      this.focused = false
    },

    onHistory(event) {
      this.focused = false
      this.search = event.target.innerText
      this.onSearch()
    },

    onClick() {
      this.$store.dispatch('onClick')
    }
  },

  watch: {
    searchingResults() {
      console.log(this.searchingResults)
    }
  },

  mounted() {
    this.$store.dispatch('fetchSearchHistory')
  },
};
</script>