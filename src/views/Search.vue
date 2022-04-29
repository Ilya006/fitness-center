<template>
  <HeaderVue />

  <div class="search">
    <div class="wrapper search__pos">
      <h3 class="services__title">Поиск услуг</h3>

      <div class="search__input">
        <div class="row">
          <div class="col s6 offset-s3">
            <div class="row">
              <label for="autocomplete-input" class="label"
                >Введите название услуги</label
              >
              <div class="input-field col s12">
                <input
                  type="text"
                  id="autocomplete-input"
                  class="autocomplete"
                  v-model="search"
                  autocomplete="off"
                  @focus="focused = true"
                  @blur="isTimeClose"
                />
                <i class="material-icons prefix search__icon" @click="onSearch"
                  >search</i
                >
              </div>
            </div>
          </div>
        </div>


        <div class=" search__history" v-if="focused && searchHistory">
          <div class="chistory">
            <div class="chistory__wrap">
              <div class="history__title">Предыдущие запросы</div>
              <div
                v-for="item in searchHistory"
                :key="item[0]"
                class="history__item"
                @click="onHistory"
              >
                {{ item[1] }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="search__info" v-if="isEmpty">Ничего не найдено</div>

      <div class="row" v-if="searchingResults && !isEmpty">
        <div class="col s4">
          <div class="card grey lighten-2">
            <div class="card-content grey-text text-darken-3">
              <span class="card-title">{{searchingResults.title}}</span>
              <p>{{searchingResults.description}}</p>
            </div>
            <div class="card-action">
              <button
                class="btn-floating waves-effect"
                :class="isAddWorkout ? 'green lighten-1' : 'waves-light red'"
                @click="onAddWorkout"
              >
                <i class="material-icons">{{
                  isAddWorkout ? "check" : "add"
                }}</i>
              </button>
            </div>
          </div>
        </div>
      </div>


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
    focused: false,
  }),

  computed: {
    searchHistory() {
      return this.$store.getters.getSearchHistory;
    },
    searchingResults() {
      const data = this.$store.getters.getSearchingResults
      return data && data[this.search]
    },
    subCat() {
      return {
        title: "кардио",
        description: "Лучшая тренировка в мире",
      };
    },
    isAddWorkout() {
      const userData = this.$store.getters.getUserData
      const userWorkout = userData 
        && userData.workout 
        && this.searchingResults
        && userData.workout[this.searchingResults.category]
      const arrWorkout = userWorkout && Object.keys(userWorkout)

      return arrWorkout && arrWorkout.includes(this.searchingResults.title)
    },
    isEmpty() {
      return this.$store.getters.getIsEmpty
    }

  },

  methods: {
    onSearch() {
      if (this.search) {
        this.$store.dispatch("saveSearchHistory", this.search);
        this.$store.dispatch("searchServices", this.search);
      }
      this.focused = false;
      this.$store.commit('clearRedults')
    },

    onHistory(event) {
      this.focused = false;
      this.search = event.target.innerText;
      this.onSearch();
    },

    onAddWorkout() {
      this.$store.dispatch('workout', {
        category: this.searchingResults.category, 
        subcategory: this.searchingResults.title, 
        isWorkout: !this.isAddWorkout
      })
    },

    isTimeClose() {
      setTimeout(() => {
        this.focused = false
      }, 200);
    }
  },

  mounted() {
    this.$store.dispatch("fetchSearchHistory");
  },
};
</script>