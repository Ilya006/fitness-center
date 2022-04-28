<template>
  <div class="col s4">
    <div class="card grey lighten-2">
      <div class="card-content grey-text text-darken-3">
        <span class="card-title">{{subCar.title}}</span>
        <p>{{subCar.description}}</p>
      </div>
      <div class="card-action">
        <a class="btn-floating teal lighten-2">
          <i class="material-icons">add</i>
        </a>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'cardCategoryComp',
  props: ['subCar']
}
</script>