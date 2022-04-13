<script setup>
</script>

<template>
  <div>
    <div>
      <h3 >{{count}}</h3>
      <h3 >{{double}}</h3>
      <h3 >{{name}}</h3>
      <button @click="increment">click me</button>
      <button @click="consolel">click me</button>
    </div>
  </div>
</template>


<script>
import { storeToRefs } from 'pinia';
import {useCountStore} from '@/stores/count'

export default { 

  setup() {
    const store = useCountStore()

    const { count, double, name } = storeToRefs(store)
    const { increment } = store


    return {count, double, name, increment}
  },

  methods: {
    
  }




}
</script>
