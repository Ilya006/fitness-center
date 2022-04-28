<template>
  <div class="col s6" >
    <div class="card blue-grey darken-1" v-if="dataCatRecord">
      <div class="card-content white-text">
        <span class="card-title">{{dataCatRecord && dataCatRecord.title}}</span>
        <p>{{dataCatRecord && dataCatRecord.description}}</p>
      </div>
      <div class="card-action card-action-flex">

        <div class="profle__record" v-for="(subcat, name) in record" :key="name">
          <span>{{name}}</span>
          <button 
            class="btn-floating waves-effect red waves-light red"
            @click="onRemoveRecord(recordId, name)"
          >
            <i class="material-icons left">clear</i>
          </button>
        </div>

      </div>
    </div>
  </div>

</template>


<script>
export default {
  name: 'recordProfileCom',
  props: ['record', 'recordId'],

  computed: {
    dataCatRecord() {
      return this.$store.getters.getDataCatRecord[this.recordId]
    }
  },

  methods: {
    onRemoveRecord(nameCat, nameSubcat) {
      this.$store.dispatch('removeRecord', {nameCat, nameSubcat})
    }
  },

  mounted() {
    this.$store.dispatch('fetchInfoCategorys', this.recordId)
  },
}
</script>