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

      <div class="row" v-if="focused">
        <div class="col s6 offset-s3 history">
          <div class="row row__mr">
            <div class="col s12 history__title">Предыдущие запросы</div>
            <div class="col s12 history__item" @click="onHistory">ывава</div>
            <div class="col s12 history__item" @click="onHistory">ывавsdfа</div>
            <div class="col s12 history__item" @click="onHistory">sdfsdf</div>
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
    focused: false
  }),

  methods: {
    onSearch() {
      if (this.search) {
        this.$store.dispatch("saveSearchHistory", this.search);
      }
      this.focused = false
    },
    onHistory(event) {
      this.focused = false
      this.search = event.target.innerText
    }
  },
};
</script>